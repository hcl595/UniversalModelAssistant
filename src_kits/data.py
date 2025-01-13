# data.py | IntelliFusion Version 0.1.9(202308032000) Developer Alpha
from pathlib import Path
from peewee import *
from config import Settings

setting = Settings()


# 基础类
APP_DIR = Path(__file__).parent
DATA_DIR = APP_DIR / "data"
Version = setting.read("package","Version")
DATABASE_FILE = DATA_DIR / f"api_data.{Version}.sqlite"

db = SqliteDatabase(DATABASE_FILE)

class BaseModel(Model):
    class Meta:
        database = db

class Models(BaseModel):
    api_key = IntegerField(column_name="APIkey", null=True, default="/")#To request Model
    # display = CharField(column_name="Display", null=True, default="/")
    launch_compiler = CharField(column_name="LaunchCompiler", null=True, default="/")#To start model
    launch_path = CharField(column_name="LaunchPath", null=True, default="/")#To start model
    name = CharField()#Default Comment
    type = CharField()#To request Model
    url = CharField()#To request Model

    class Meta:
        table_name = 'models'

class APIs(BaseModel):
    requestFunctionName = CharField()

class Widgets(BaseModel):
    order = IntegerField(column_name="order", null=True)
    available =  CharField(column_name="available", default="True")
    size = CharField(null=True, default="medium")
    widgets_name = CharField(column_name="name",)
    widgets_url = CharField(column_name="URL",)

class History(BaseModel):
    session_id = IntegerField()# From Session.id
    UserInput = CharField()
    response = CharField()

class Sessions(BaseModel):
    #Session.id To History.session_id
    order = IntegerField(null=True) #Ordered Sessions
    model_id = CharField() #From Models.id
    comment = CharField() #To Tab's Text
    model_url = CharField() #From Models.url
    model_type = CharField() #From Models.type

def SetupDatabase():
    db.create_tables([Models,Widgets,History,Sessions,APIs])
    BaseModel = Models(
        order=1,
        type="openai",
        name="gpt-3.5-turbo",
        url="https://ai.fakeopen.com/v1",
        api_key="/",
        launch_compiler="/",
        launch_path="/",
    )
    BaseModel.save()
    DefaultSession = Sessions(
        model_id = 1,
        comment = "DefaultSession",
        model_url = "https://ai.fakeopen.com/v1",
        model_type = "openai",
    )
    DefaultSession.save()
    DefaultAPI = APIs(
        requestFunctionName = "openai",
    )
    DefaultAPI.save()
    BaseWidgets = Widgets(
        order=1,
        widgets_name="内置核心小组件",
        available = "True",
        widgets_url = "/widgets/CPU_Percent",
    )
    BaseWidgets.save()
    BaseWidgets = Widgets(
        order=2,
        widgets_name="内置内存小组件",
        available = "True",
        widgets_url = "/widgets/RAM_Percent",
    )
    BaseWidgets.save()
    BaseWidgets = Widgets(
        order=3,
        widgets_name="内置显存小组件",
        available = "True",
        widgets_url = "/widgets/GPU_Percent",
    )
    BaseWidgets.save()

