def main() -> None:
    import requests
    import urllib3
    from troTHU.tron import LOGIN_URL, extract_login_form

    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

    session = requests.Session()
    response = session.get(LOGIN_URL, verify=False)
    action_url, fields = extract_login_form(response.text, LOGIN_URL)

    print("Found action URL:", action_url)
    print("Captured form fields:", sorted(fields))


if __name__ == "__main__":
    main()
