# config.py | IntelliFusion Version 0.2.2(2023092000) Developer Alpha
from pathlib import Path
from loguru import logger
import json

APP_DIR = Path(__file__).parent
DATA_DIR = APP_DIR / "data"
CONFIG_FILE = DATA_DIR / "api_config.0.4.1.alpha.json"
LOG_FILE = DATA_DIR / "api_models.log"

def setup():
        if not DATA_DIR.exists():
            DATA_DIR.mkdir()
        if not LOG_FILE.exists():
            logger.add(LOG_FILE)
            logger.info('models.log is created successfully')
        if not CONFIG_FILE.exists():
            logger.info("config.json doesn't exist")
            logger.info("create config.json")
            data = {
                "package": {
                    "Version" : "0.4.1.alpha",
                },
                "BaseConfig": {
                    "Develop": "False",
                    "ActiveExamine": "True",
                    "TimeOut": 60, 
                    "Language":"Chinese",
                    },
                "RemoteConfig": {
                    "Host": "127.0.0.1",
                    "Port": "0"},
            }
            with CONFIG_FILE.open("w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            logger.info("config.json is created successfully")
        from data import SetupDatabase
        from config import Settings
        setting = Settings()
        Version = setting.read("package","Version")
        DATABASE_FILE = DATA_DIR / f"api_data.{Version}.sqlite"
        if not DATABASE_FILE.exists():
            SetupDatabase()
            logger.info("Database is created successfully!")


if __name__ == '__main__':
    setup()