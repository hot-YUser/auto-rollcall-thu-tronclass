import ssl
import urllib.request

CTX = ssl.create_default_context()
CTX.check_hostname = False
CTX.verify_mode = ssl.CERT_NONE


def main() -> None:
    from troTHU.tron import LOGIN_URL, extract_login_form

    request = urllib.request.Request(LOGIN_URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, context=CTX) as response:
        html_text = response.read().decode("utf-8")
        action_url, _ = extract_login_form(html_text, LOGIN_URL)
        print("Found action:", action_url)


if __name__ == "__main__":
    main()
