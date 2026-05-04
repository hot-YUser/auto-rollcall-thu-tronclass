import os
from typing import Tuple


def get_credentials() -> Tuple[str, str]:
    user = os.getenv("TRON_USER", "").strip()
    password = os.getenv("TRON_PASS", "").strip()
    if not user or not password:
        raise SystemExit("Please set TRON_USER and TRON_PASS before running this manual test.")
    return user, password
