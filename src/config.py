#config.py | Realizer Version 0.1.5(202307082000) Developer Alpha
import configparser
from pathlib import Path
import os


config_file = Path(__file__).parent / "data" / "config.cfg"
folder = Path(__file__).parent / "data"

class Settings(object):
    def __init__(self):
        if not folder.exists():
            os.makedirs(folder)
        if not config_file.exists():
            print("Config does not exist and is being created automatically...")
            f = open(config_file,'w')
            f.write('[BaseConfig]\n')
            f.write('devmode = False\n')
            f.write('debug = False\n')
            f.write('keeplogin = True\n')
            f.write('\n')
            f.write('[RemoteConfig]\n')
            f.write('host = 127.0.0.1\n')
            f.write('port = 5000\n')
            f.write('\n')
            f.write('[ModelConfig]\n')
            f.write('DefaultModel = NONE\n')
            f.write('SecondModel = text-davinci-002\n')
            f.write('\n')
            f.close()
            print("config is created successfully!")
        self.cfg = configparser.ConfigParser()
        self.cfg.read(config_file)

    def cfg_in(self, section, option, value):
        value = str(value)
        self.cfg.set(section,option,value)
        self.cfg.write(open(config_file, "w"))

    def read(self, section, option):
        out = self.cfg.get(section,option)
        return out
    