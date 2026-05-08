import asyncio
import sys
from pathlib import Path

import aiohttp

sys.path.insert(0, str(Path(__file__).resolve().parent))

from tests._credentials import get_credentials
from troTHU.tron_http import TronHttpClient


async def run() -> None:
    async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=False)) as session:
        client = TronHttpClient(session)
        user, password = get_credentials()
        form = await client.fetch_login_form()
        await client.submit_login(form, user, password)

        user_id = await client.fetch_user_id()
        if user_id is None:
            print("APPRuntime USER ID not found.")
        else:
            print("APPRuntime USER ID:", user_id)


if __name__ == "__main__":
    asyncio.run(run())
