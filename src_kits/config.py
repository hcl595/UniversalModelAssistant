# config.py | IntelliFusion Version 0.1.9(202308242000) Pre_Release
import json
from pathlib import Path
from typing import Any

from setup import APP_DIR
DATA_DIR = APP_DIR / "data"
PROM_DIR = APP_DIR / "prompt"
CONFIG_FILE = DATA_DIR / "config.0.4.1.alpha.json"


class Settings:
    def __init__(self):
        with CONFIG_FILE.open(encoding="utf-8") as f:
            self.cfg = json.load(f)

    def write(self, section: str, option: str, value: Any) -> Any:
        self.cfg[section][option] = value
        with CONFIG_FILE.open("w", encoding="utf-8") as f:
            json.dump(self.cfg, f, ensure_ascii=False, indent=4)

    def read(self, section: str, option: str) -> Any:
        return self.cfg.get(section).get(option)
