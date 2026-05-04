import asyncio

try:
    from tests._credentials import get_credentials
except ModuleNotFoundError:
    from _credentials import get_credentials


async def main() -> None:
    import aiohttp
    import urllib3
    from troTHU.tron import LOGIN_URL, extract_login_form

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
            print("Action URL:", action_url)

        form_data.update({"username": user, "password": password})
        async with session.post(action_url, data=form_data) as resp:
            await resp.read()
            print("Final URL after POST:", resp.url)

        async with session.get("https://ilearn.thu.edu.tw/api/user/recently-visited-courses") as resp:
            print("Courses Status:", resp.status)
            if resp.status == 200:
                print("Courses:", (await resp.text())[:100])
            else:
                print("Not logged in!")


if __name__ == "__main__":
    asyncio.run(main())
