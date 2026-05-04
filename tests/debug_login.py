try:
    from tests._credentials import get_credentials
except ModuleNotFoundError:
    from _credentials import get_credentials


def main() -> None:
    import requests
    import urllib3
    from troTHU.tron import LOGIN_URL, extract_login_form

    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

    user, password = get_credentials()
    session = requests.Session()

    print("GET", LOGIN_URL)
    response = session.get(LOGIN_URL, verify=False)
    action_url, form_data = extract_login_form(response.text, LOGIN_URL)

    form_data.update({"username": user, "password": password})
    print("Action URL:", action_url)
    print("POST fields:", sorted(form_data))

    result = session.post(action_url, data=form_data, verify=False, allow_redirects=False)
    print("Status Code:", result.status_code)
    print("Headers:", result.headers)
    if result.status_code == 302:
        print("Redirect to:", result.headers.get("Location"))
    else:
        print("Response text:", result.text[:500])


if __name__ == "__main__":
    main()
