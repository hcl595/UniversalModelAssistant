import json
import subprocess
import time
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urlparse

import openai
import psutil
import requests
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse, request
from django.shortcuts import render
from flaskwebgui import close_application
from loguru import logger
from pyecharts.charts import Pie

from client.config import Settings
from client.models import ModelList

# Create your views here.
LLM_response = []
GLM_response = []
result = None
NeedLogin = True

#SetUp
cfg = Settings()
pool=ThreadPoolExecutor()
logger.add('./data/log.log')

#main
def root(InputRequest):
    Models = ModelList.objects.all().order_by("order")
    logger.debug(list(Models))
    try:
        ThirdBoxURL = ModelList.objects.filter(ModelList.name == cfg.read("ModelConfig","ThirdModel")).first()
    except:
        ThirdBoxURL = None
    return render(InputRequest,'main.html',
                {'result' : result,
                'NeedLogin' : NeedLogin,
                'ModelList' : list(Models),
                'ModelCount' : 3,
                'historys' : LLM_response,
                'ThirdBoxURL' : ThirdBoxURL,
                'host' : cfg.read("RemoteConfig","host"),
                'port' : cfg.read("RemoteConfig","port"),
                'Mode' : cfg.read("BaseConfig","devmode"),
                'BugM' : cfg.read("BaseConfig","client"),
                'DefaultModel' : cfg.read("ModelConfig","DefaultModel"),
                'SecondModel' : cfg.read("ModelConfig","SecondModel"),
                'ThirdModel' : cfg.read("ModelConfig","ThirdModel"),
                'username' : 'NONE'})

def request_api_response(InputRequest):
    global result,LLM_response
    InputInfo = request.POST['userinput']
    InputModel =request.POST["modelinput"]
    print(InputInfo,InputModel)
    LLM_response = llm(InputModel,InputInfo)
    return JsonResponse(InputRequest,{'response': LLM_response})

def request_openai_response(InputRequest):
    global GLM_response
    InputInfo = InputRequest.POST.get('userinput')
    InputModel = InputRequest.POST.get("modelinput")
    logger.debug("request:{}.model:{}",InputInfo,InputModel)
    openai_response = ai(InputModel,InputInfo)
    return JsonResponse(InputRequest,{'response': openai_response})#ajax返回

def EditSetting(InputRequest):
    InputDefaultModel = InputRequest.POST.get("DefaultModel")
    InputSecondModel = InputRequest.POST.get("SecondModel")
    InputThirdModel = InputRequest.POST.get("ThirdModel")
    InputiPv4 = InputRequest.POST.get("iPv4")
    InputPort = InputRequest.POST.get("Port")
    InputWebMode = InputRequest.POST.get("Mode")
    InputclientMode = InputRequest.POST.get("BugM")
    cfg.write("BaseConfig","devmode",InputWebMode)
    cfg.write("BaseConfig","client",InputclientMode)
    cfg.write("RemoteConfig","host",InputiPv4)
    cfg.write("RemoteConfig","port",InputPort)
    cfg.write("ModelConfig","DefaultModel",InputDefaultModel)
    cfg.write("ModelConfig","SecondModel",InputSecondModel)
    cfg.write("ModelConfig","ThirdModel",InputThirdModel)
    return HttpResponseRedirect("/")

def ManageModel(InputRequest):
    InputState = InputRequest.POST.get("state")
    InputID = InputRequest.POST.get("number")
    InputType = InputRequest.POST.get("type")
    InputName = InputRequest.POST.get("comment")
    InputUrl = InputRequest.POST.get("url")
    InputAPIkey = InputRequest.POST.get("APIkey")
    LaunchCompiler = InputRequest.POST.get("LcCompiler")
    LaunchPath = InputRequest.POST.get("LcUrl")
    logger.debug(InputID)
    try:
        port = int(urlparse(InputUrl).port)
    except:
        port = 80
    if InputState == "edit":
        ModelList.objects.filter(ModelList.id == InputID).update(
            ModelList.type == InputType,
            ModelList.name == InputName,
            ModelList.url == InputUrl,
            ModelList.APIKey == InputAPIkey,
            ModelList.LaunchCompiler == LaunchCompiler,
            ModelList.LaunchPath == LaunchPath,
        )
        return JsonResponse({'response': "complete"})
    elif InputState == "del":
        ModelList.objects.filter(ModelList.id == InputID).delete()
        return JsonResponse({'response': "complete"})
    elif InputState == "run":
        launchCMD = InputRequest.POST.get("LcCompiler") + " " + InputRequest.POST.get("LcUrl")
        pool.submit(subprocess.run, launchCMD)
        count = 0
        while True:
            for conn in psutil.net_connections():
                if conn.laddr.port == port:
                    return JsonResponse({'response': "complete"})
            count += 1
            time.sleep(1)
            if count == cfg.read('BaseConfig',"TimeOut"):
                logger.error('Model: {} launch maybe failed,because of Time Out({}),LaunchCompilerPath: {},LaunchFile: {}'
                             ,InputName,cfg.read('BaseConfig',"TimeOut"),LaunchCompiler,LaunchPath)
                return JsonResponse({'response': "TimeOut"})
    elif InputState == "stop":
        for conn in psutil.net_connections():
            if conn.laddr.port == port:
                pid = conn.pid
                p = psutil.Process(pid)
                p.kill()
                break
        return JsonResponse({'response': "complete"})
    elif InputState == "add":
        n =  ModelList.objects.create(
            name = InputName,
            order = 1,
            type = InputType,
            url = InputUrl,
            APIKey = InputAPIkey,
            LaunchCompiler = LaunchCompiler,
            LaunchPath = LaunchPath,
        )
        n.save()
        return JsonResponse({'response': "complete"})

# def login_check():
#     global login_error,choose,page
#     account = InputRequest.POST.get("logid")
#     password = InputRequest.POST.get("password")
#     acc_result = db.session.query(userInfo.account).filter(userInfo.account == account).first()
#     pwd_result = db.session.query(userInfo.password).filter(userInfo.account == account,userInfo.password == password).first()
#     if account and password:
#         if acc_result:
#             if pwd_result:
#                 session['username']=account
#                 session['password']=password
#                 uid =db.session.query(userInfo.id).filter(userInfo.account==account,userInfo.password==password).first()
#                 uid = uid[0]
#                 session['uid']= uid
#                 if cfg.read("BaseConfig","KeepLogin") == 'True':
#                     session.permanent=True
#                 login_error = "已登录"
#                 choose = 0
#                 return HttpResponseRedirect('/')
#             else:
#                 page = 'login'
#                 login_error = "密码错误"
#                 return HttpResponseRedirect('/')
#         else:
#             page = 'login'
#             login_error = "未知用户名"
#             return HttpResponseRedirect('/')
#     else:
#         page = 'login'
#         login_error = "请写入信息"
#         return HttpResponseRedirect('/')
    
# def register():
#     global login_error,page
#     account = InputRequest.POST.get("reg_txt")
#     mail = InputRequest.POST.get("email")
#     password = InputRequest.POST.get("set_password")
#     check_password = InputRequest.POST.get("check_password")
#     if account and password and mail:
#         if password == check_password:
#             info = db.userInfo(
#                             account=account,
#                             password=password,
#                             mail=mail,)
#             db.session.add(info)
#             db.session.commit()
#             login_error = '注册成功'
#             logger.info('User: {account} ,has created an account.Password: {password}',account=account,password=password)
#             page = 'login'
#         else:
#             login_error = '两次密码不一'
#     else:
#         page = "register"
#         login_error = '完整填写信息'
#     return HttpResponseRedirect('/')

def logout(InputRequest):
    logger.info('Application Closed')
    close_application()

def WidgetsCorePercent(InputRequest):
    cpu_percent = psutil.cpu_percent()
    c = Pie().add("", [["占用", cpu_percent], ["空闲", 100 - cpu_percent]])
    return HttpResponse(c.render_embed().replace(
        "https://assets.pyecharts.org/assets/v5/echarts.min.js",
        "/static/js/echarts.min.js",
    ))

def WigetsRamPercent(InputRequest):
    memory_percent = psutil.virtual_memory().percent
    c = Pie().add("", [["占用", memory_percent], ["空闲", 100 - memory_percent]])
    return HttpResponse(c.render_embed().replace(
        "https://assets.pyecharts.org/assets/v5/echarts.min.js",
        "/static/js/echarts.min.js",
    ))

def js(InputRequest):
    with open("src\static\js\echarts.min.js", "rb") as f:
        data = f.read().decode()
    return data

def test(InputRequest):
    a = InputRequest.POST.get("")
    return render(InputRequest,'test.html')

#functions
def ai(ModelID:str,question:str): #TODO:把response转化为json
    response = ""
    openai.api_base = ModelList.objects.filter(ModelList.name == ModelID).get(ModelList.url)
    openai.api_key = ModelList.objects.filter(ModelList.name == ModelID).get(ModelList.APIKey)
    for chunk in openai.ChatCompletion.create(
        model=ModelID,
        messages=[
            {"role": "user", "content": question}
        ],
        stream=True,
        temperature = 0,
    ):
        if hasattr(chunk.choices[0].delta, "content"):
            print(chunk.choices[0].delta.content, end="", flush=True)
            response = response + chunk.choices[0].delta.content
            print(type(chunk.choices[0].delta.content))
    print(type(response))
    logger.info('model: {},url: {}/v1/completions.\nquestion: {},response: {}.'
                ,ModelID,ModelList.objects.filter(ModelList.name == ModelID).get(ModelList.url),question,response)
    return response

def llm(ModelID:str,question:str):
    response = requests.post(
        url = ModelList.objects.filter(ModelList.name == ModelID).get(ModelList.url),
        data=json.dumps({"prompt": question,"history": []}),
        headers={'Content-Type': 'application/json'})
    return response.json()['history'][0][1]

