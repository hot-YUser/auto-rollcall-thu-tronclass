from __future__ import annotations
from abc import ABC, abstractmethod
from typing import Dict, Any, Optional
import troTHU.runtime_context as ctx
import troTHU.tron_http as tron_http

class LoginAdapter(ABC):
    auth_flow: str = ""
    prefers_browser_assisted_login: bool = False
    requires_api_session_validation: bool = False
    requires_manual_cookie_login: bool = False
    requires_password: bool = True

    @abstractmethod
    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        pass

    async def submit_login(
        self,
        client: tron_http.TronHttpClient,
        form: tron_http.LoginForm,
        username: str,
        password: str,
    ) -> tron_http.LoginOutcome:
        form_data = dict(form.fields)
        form_data.update(
            {
                form.username_field: username,
                form.password_field: password,
            }
        )
        post_kwargs: Dict[str, Any] = {"data": form_data}
        async with client.session.post(
            form.action_url,
            **post_kwargs,
            **client.request_kwargs(),
        ) as resp:
            html_text = await resp.text()
            final_url = str(resp.url)

        if client.endpoints.session_cookie_domain == tron_http.DEFAULT_ENDPOINTS.session_cookie_domain:
            has_session = tron_http.has_session_cookie(client.session)
        else:
            try:
                has_session = tron_http.has_session_cookie(client.session, client.endpoints.session_cookie_domain)
            except TypeError:
                has_session = tron_http.has_session_cookie(client.session)

        if "login" in final_url.lower() and not has_session:
            raise tron_http.LoginRejectedError("登入失敗，請檢查帳號或密碼是否正確。")

        return tron_http.LoginOutcome(final_url=final_url, has_session=has_session)


class CasLoginAdapter(LoginAdapter):
    auth_flow = "thu_cas"
    prefers_browser_assisted_login = False
    requires_api_session_validation = False
    requires_manual_cookie_login = False
    requires_password = True

    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        html_text, current_url = await client._get_login_form_response(client.endpoints.login_url)
        return tron_http.extract_login_form(html_text, client.endpoints.login_url)


class TkuSsoLoginAdapter(LoginAdapter):
    auth_flow = "tku_sso_browser"
    prefers_browser_assisted_login = True
    requires_api_session_validation = True
    requires_manual_cookie_login = False
    requires_password = True

    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        html_text, current_url = await client._get_login_form_response(client.endpoints.login_url)
        try:
            return await client._complete_tku_login_form(tron_http.extract_login_form(html_text, current_url))
        except tron_http.LoginPageChangedError:
            if "redirectLoginPage" not in html_text and "logineb.jsp" not in html_text:
                raise

        client._set_tku_browser_cookie("IV_JCT", "%2FNEAI")
        sso_login_form_url = tron_http.make_tku_sso_login_form_url(current_url)
        html_text = await client._get_login_form_page(sso_login_form_url, tron_http.TKU_SSO_FORM_HEADERS)
        form = tron_http.extract_login_form(html_text, sso_login_form_url)
        if ";jsessionid=" in form.action_url:
            html_text = await client._get_login_form_page(sso_login_form_url, tron_http.TKU_SSO_FORM_HEADERS)
            form = tron_http.extract_login_form(html_text, sso_login_form_url)
        return await client._complete_tku_login_form(form)

    async def submit_login(
        self,
        client: tron_http.TronHttpClient,
        form: tron_http.LoginForm,
        username: str,
        password: str,
    ) -> tron_http.LoginOutcome:
        form_data = dict(form.fields)
        form_data.update(
            {
                form.username_field: username,
                form.password_field: password,
            }
        )

        from urllib.parse import urlparse
        headers = None
        allow_redirects = True
        if urlparse(form.action_url).hostname == tron_http.TKU_SSO_HOST:
            headers = tron_http.TKU_SSO_SUBMIT_HEADERS
            allow_redirects = False

        post_kwargs: Dict[str, Any] = {"data": form_data}
        if headers is not None:
            post_kwargs["headers"] = headers
            post_kwargs["allow_redirects"] = allow_redirects

        async with client.session.post(
            form.action_url,
            **post_kwargs,
            **client.request_kwargs(),
        ) as resp:
            html_text = await resp.text()
            final_url = str(resp.url)

        if headers is not None:
            final_url = await client._follow_tku_login_redirects(html_text, final_url)

        if client.endpoints.session_cookie_domain == tron_http.DEFAULT_ENDPOINTS.session_cookie_domain:
            has_session = tron_http.has_session_cookie(client.session)
        else:
            try:
                has_session = tron_http.has_session_cookie(client.session, client.endpoints.session_cookie_domain)
            except TypeError:
                has_session = tron_http.has_session_cookie(client.session)
        if headers is not None and not has_session:
            raise tron_http.LoginPageChangedError("TKU fast SSO login did not yield an iClass session cookie.")
        if "login" in final_url.lower() and not has_session:
            raise tron_http.LoginRejectedError("登入失敗，請檢查帳號或密碼是否正確。")

        return tron_http.LoginOutcome(final_url=final_url, has_session=has_session)


class PublicCloudEmailLoginAdapter(LoginAdapter):
    auth_flow = "public_cloud_email"
    prefers_browser_assisted_login = False
    requires_api_session_validation = True
    requires_manual_cookie_login = False
    requires_password = True

    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        html_text, current_url = await client._get_login_form_response(client.endpoints.login_url)
        try:
            return tron_http.extract_public_cloud_email_login_form(html_text, current_url)
        except tron_http.LoginPageChangedError:
            return tron_http.extract_login_form(html_text, current_url)


class ManualCookieLoginAdapter(LoginAdapter):
    auth_flow = "manual_cookie_only"
    prefers_browser_assisted_login = False
    requires_api_session_validation = True
    requires_manual_cookie_login = True
    requires_password = False

    async def fetch_login_form(self, client: tron_http.TronHttpClient) -> tron_http.LoginForm:
        raise NotImplementedError("Manual cookie login does not support fetching a login form.")

    async def submit_login(
        self,
        client: tron_http.TronHttpClient,
        form: tron_http.LoginForm,
        username: str,
        password: str,
    ) -> tron_http.LoginOutcome:
        raise NotImplementedError("Manual cookie login does not support submitting credentials.")


_adapters_by_flow: Dict[str, LoginAdapter] = {
    "thu_cas": CasLoginAdapter(),
    "tku_sso_browser": TkuSsoLoginAdapter(),
    "public_cloud_email": PublicCloudEmailLoginAdapter(),
    "manual_cookie_only": ManualCookieLoginAdapter(),
}

login_adapters_by_flow = _adapters_by_flow

def get_login_adapter(auth_flow: str) -> LoginAdapter:
    flow = str(auth_flow or "").strip().lower()
    return _adapters_by_flow.get(flow, _adapters_by_flow["thu_cas"])
