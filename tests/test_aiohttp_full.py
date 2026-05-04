import asyncio

try:
    from tests._credentials import get_credentials
except ModuleNotFoundError:
    from _credentials import get_credentials


async def main() -> None:
    import aiohttp
    import urllib3
    from troTHU.tron import LOGIN_URL, extract_login_form, has_session_cookie

    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

    user, password = get_credentials()
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
    }

    async with aiohttp.ClientSession(
        connector=aiohttp.TCPConnector(ssl=False),
        headers=headers,
    ) as session:
        async with session.get(LOGIN_URL) as resp:
            action_url, form_data = extract_login_form(await resp.text(), LOGIN_URL)

        form_data.update({"username": user, "password": password})
        async with session.post(action_url, data=form_data) as resp:
            await resp.read()

        print("Has session:", has_session_cookie(session))

        async with session.get("https://ilearn.thu.edu.tw/api/radar/rollcalls?api_version=1.1.0") as resp:
            print("Rollcalls Status:", resp.status)
            text = await resp.text()
            print("Rollcalls Response:", text[:100])


if __name__ == "__main__":
    asyncio.run(main())
