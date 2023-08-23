# data.py | IntelliFusion Version 0.1.9(202308032000) Developer Alpha
from pathlib import Path
from peewee import *

# 基础类
APP_DIR = Path(__file__).parent
DATA_DIR = APP_DIR / "data"
DATABASE_FILE = DATA_DIR / "models.v2.2.sqlite"

db = SqliteDatabase(DATABASE_FILE)

class UnknownField(object):
    def __init__(self, *_, **__): pass

class BaseModel(Model):
    class Meta:
        database = db

class Models(BaseModel):
    # order = IntegerField(column_name="order")
    api_key = IntegerField(column_name="APIkey", null=True)
    display = CharField(column_name="Display", null=True)
    launch_compiler = CharField(column_name="LaunchCompiler", null=True)
    launch_path = CharField(column_name="LaunchPath", null=True)
    name = CharField()
    type = CharField()
    url = CharField()

    class Meta:
        table_name = 'models'

class Widgets(BaseModel):
    order = IntegerField(column_name="order",null=True)
    avaliable =  BooleanField(column_name="avaliable")
    size = CharField(null=True)
    widgets_name = CharField(column_name="name",)
    widgets_url = CharField(column_name="URL",)

class History(BaseModel):
    Model = CharField()
    # session = CharField()
    UserInput = CharField()
    response = CharField()

def SetupDatabase():
    db.create_tables([Models,Widgets,History])
    BaseModel = Models(
        order=1,
        type="OpenAI",
        name="gpt-3.5-turbo",
        url="https://ai.fakeopen.com/v1",
        APIkey="sk-frdfhfdrghdsu5tt5sgyuyy",
        LaunchCompiler="/",
        LaunchUrl="/",
    )
    BaseModel.save()
    BaseWidgets = Widgets(
        order=1,
        widgets_name="内置核心小组件",
        avaliable = True,
        widgets_url = "/widgets/CPU_Percent",
    )
    BaseWidgets.save()
    BaseWidgets = Widgets(
        order=2,
        widgets_name="内置内存小组件",
        avaliable = True,
        widgets_url = "/widgets/RAM_Percent",
    )
    BaseWidgets.save()
    BaseWidgets = Widgets(
        order=3,
        widgets_name="内置显存小组件",
        avaliable = True,
        widgets_url = "/widgets/GPU_Percent",
    )
    BaseWidgets.save()


