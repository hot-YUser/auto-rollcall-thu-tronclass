import asyncio

try:
    from tests._credentials import get_credentials
except ModuleNotFoundError:
    from _credentials import get_credentials


async def main() -> None:
    import aiohttp
    from troTHU.tron import LOGIN_URL, extract_login_form

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

        cookies = ["{} (domain={})".format(cookie.key, cookie["domain"]) for cookie in session.cookie_jar]
        print("Cookies in jar:")
        for cookie in cookies:
            print(" -", cookie)


if __name__ == "__main__":
    asyncio.run(main())
