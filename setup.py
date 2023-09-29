"""
This is a setup.py script generated by py2applet

Usage:
    python setup.py py2app
"""

from setuptools import setup

APP = ['./src_macOS/client.py']
# APP = []
DATA_FILES = ['./res/intellifusion_sketch_1.icns','./src_macOS/templates/','./src_macOS/static/','./src_macOS/config.py','./src_macOS/data.py','./src_macOS/setup.py','./src_macOS/widgets/','./src_macOS/prompt/','./src_macOS/dicts']
# DATA_FILES = []
OPTIONS = {
        'iconfile':'./res/intellifusion_sketch_1.icns',
        'plist':{
            'CFBundleName'   : 'Intellifusion',     # 应用名
                    'CFBundleDisplayName': 'IntelliFusion', # 应用显示名
                    'CFBundleVersion': '0.2.1',      # 应用版本号
                    'CFBundleIdentifier' : 'IntelliFusion', # 应用包名、唯一标识
                    'NSHumanReadableCopyright': 'Copyright © 2023 Argon.Inc. All rights reserved.', # 可读版权
                        },
            'includes': ['flask','flaskwebgui','jieba','loguru',
                        'openai','peewee','requests',
                        'thefuzz','validators','cchardet'],
            'packages': ['mistune','./src_macOS/widgets/'],
             }

setup(
    app=APP,
    data_files=DATA_FILES,
    options={
        'py2app': OPTIONS
        },
    setup_requires=['py2app'],
)
