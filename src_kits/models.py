from data import Models, Sessions, History
from peewee import fn
import subprocess
import psutil
from concurrent.futures import ProcessPoolExecutor
from typing import Literal, TypedDict
import mistune
import requests
import json

class Message(TypedDict):
    role: str
    content: str

def create_session(comment:str, model_id:int):
    '''
    comment是输入时的备注 用于给会话命名
    model_id是输入会话所使用的模型在数据库中的ID
    '''
    if comment is None or model_id is None:
        raise ValueError
    try:
        # 创建会话
        Sessions.create(
            comment = comment,
            model_id = model_id,
            model_type = Models.get(Models.id == model_id).type,
            model_url = Models.get(Models.id == model_id).url,
            )
        return Sessions.get(fn.MAX(Sessions.id)).id
    except:
        try:
            # Sessions数据库出现错误
            try:
                Models.get(Models.id == model_id).type
            except:
                raise Sessions.DoesNotExist
        except:
            # Models数据库出现错误
            raise Models.DoesNotExist

def request_OpenAI(SessionID: int, Userinput: str,stream: bool = True):
    '''
    SessionID 会话在数据库中的ID
    Userinput 用户输入的内容
    stream    是否需要流式传输
    '''
    #Setup
    messages = []
    response = ""
    if SessionID is None or Userinput is None:
        raise ValueError
    
    #Check lib & auto install
    try:
        import openai
    except ImportError:
        with ProcessPoolExecutor() as p:
            try:
                p.submit(subprocess.run, "pip install "+"openai")
            except psutil.AccessDenied:
                raise ImportError("No moduel named"+"openai")

    #Get API KEY
    try:
        Model_ID = Models.get(Models.id == Sessions.get(Sessions.id == SessionID).model_id)
    except:
        raise Models.get.error

    #Get history
    for r in History.select().where(History.session_id == SessionID):
        r: History
        assert isinstance(r.UserInput, str)
        assert isinstance(r.response, str)
        question: Message = {"role": "user", "content": r.UserInput}
        response_model: Message = {"role": "assistant", "content": r.response}
        messages.append(question)
        messages.append(response_model)

    #Request ai
    question: Message = {"role": "user", "content": Userinput}
    messages.append(question)
    openai.api_key = (Model_ID.api_key)
    openai.api_base = (Model_ID.url)
    for chunk in openai.ChatCompletion.create(
        model=Model_ID.name,
        messages=messages,
        stream=True,
        temperature=0,
    ):
        if stream == True:
            if hasattr(chunk.choices[0].delta, "content"):
                print(chunk.choices[0].delta.content, end="", flush=True)
                response = response + chunk.choices[0].delta.content
                response_out = mistune.html(response)
                yield response_out
        else:
            if hasattr(chunk.choices[0].delta, "content"):
                print(chunk.choices[0].delta.content, end="", flush=True)
                response = response + chunk.choices[0].delta.content
                response = mistune.html(response)
            return response
        
    #Save conversation
    History.create(
        session_id = SessionID,
        UserInput = Userinput,
        response = response_out,
    )

def request_ZhipuAI(SessionID: int, Userinput: str,stream: bool = True):
    '''
    SessionID 会话在数据库中的ID
    Userinput 用户输入的内容
    stream    是否需要流式传输
    '''
    #Setup
    messages = []
    response = ""
    if SessionID is None or Userinput is None:
        raise ValueError
    
    #Check lib & auto install
    try:
        from zhipuai import ZhipuAI
    except ImportError:
        with ProcessPoolExecutor() as p:
            try:
                p.submit(subprocess.run, "pip install "+"zhipuai")
            except psutil.AccessDenied:
                raise ImportError("No moduel named"+"zhipuai")
    
    #Get API KEY
    try:
        Model_ID = Models.get(Models.id == Sessions.get(Sessions.id == SessionID).model_id)
    except:
        raise Models.get.error

    #Get Histroy
    for r in History.select().where(History.session_id == SessionID):
        r: History
        assert isinstance(r.UserInput, str)
        assert isinstance(r.response, str)
        question: Message = {"role": "user", "content": r.UserInput}
        response_model: Message = {"role": "assistant", "content": r.response}
        messages.append(question)
        messages.append(response_model)

    #Request AI
    question: Message = {"role": "user", "content": Userinput}
    messages.append(question)
    client = ZhipuAI(api_key = Model_ID.api_key)
    ZhipuAI.api_base = (Model_ID.url)
    for chunk in client.chat.completions.create(
        model=Model_ID.name,
        messages=messages,
        stream=True,
        temperature=0,
    ):
        if stream == True:
            if hasattr(chunk.choices[0].delta, "content"):
                print(chunk.choices[0].delta.content, end="", flush=True)
                response = response + chunk.choices[0].delta.content
                response_out = mistune.html(response)
                yield response_out
        else:
            if hasattr(chunk.choices[0].delta, "content"):
                print(chunk.choices[0].delta.content, end="", flush=True)
                response = response + chunk.choices[0].delta.content
                response = mistune.html(response)
            return response
        
    #Save conversation
    History.create(
        session_id = SessionID,
        UserInput = Userinput,
        response = response_out,
    )


def request_Json(SessionID: int, Userinput: str):
    if SessionID is None or Userinput is None:
        raise ValueError
    try:
        Model_ID = Models.get(Models.id == Sessions.get(Sessions.id == SessionID)).id
    except:
        raise ValueError("SessionID Error")
    response = requests.post(
        url=Models.get(Models.name == Model_ID).url,
        data=json.dumps({"prompt": Userinput, "history": []}),
        headers={"Content-Type": "application/json"},
    )
    response_out = mistune.html(response.json()["history"][0][1])
    History.create(
        session_id= SessionID,
        UserInput = Userinput,
        response=response_out,
    )
    return response_out


