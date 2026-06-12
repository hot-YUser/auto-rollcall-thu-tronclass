# 如何為此專案新增學校支援（Developer Guide）

本專案採用高度模組化的「多學校系統」設計。為特定學校新增支援或微調其行為，主要有以下三種途徑：

---

## 途徑一：沿用既有登入流程（最常見）

如果新學校的登入系統與 Tunghai CAS（`thu_cas`）相似，可以直接新增一筆對照。

### 作法 A：在程式碼中永久新增（適合貢獻 PR）
編輯 `troTHU/providers.py`，在 `PROVIDERS` 字典中新增該學校的 `ProviderDefinition`：
```python
    "scu": ProviderDefinition(
        key="scu",
        label="Soochow University TronClass",
        base_url="https://tronclass.scu.edu.tw",
        login_url="https://tronclass.scu.edu.tw/cas/login?...",
        auth_flow="thu_cas",
        capabilities=ProviderCapabilities(
            number=True,
            radar=True,
            qrcode=True,
            ...
        ),
    ),
```
並在 `PROVIDER_ALIASES` 中註冊常見的中英文別名以利設定檔辨識。

### 作法 B：純進階設定檔新增（適合使用者本機擴充，免動程式碼）
直接在 `config.advanced.toml` 的 `[provider.available]` 區塊加入自訂設定：
```toml
[provider.available.my_school]
base_url = "https://tronclass.my-school.edu.tw"
auth_flow = "thu_cas"
```
基本設定檔 `config.conf` 中填入：
```conf
school = my_school
```
系統會自動推導所有 API 端點（例如雷達、課程列表、semester-info）。

---

## 途徑二：全新自訂登入頁面（全新 Adapter）

如果該學校有獨樹一格的單一登入（SSO）流程（如 Tamkang `tku_sso_browser`），請撰寫專屬 Adapter。

1. **定義 Adapter 子類**：
   在 `troTHU/login_adapters.py` 繼承 `LoginAdapter` 並實作：
   ```python
   class MySchoolLoginAdapter(LoginAdapter):
       auth_flow = "my_school_sso"
       prefers_browser_assisted_login = True  # 必要時是否呼叫瀏覽器輔助
       requires_api_session_validation = True  # 登入成功後是否呼叫 validate_login_api_session 驗證 API

       async def fetch_login_form(self, client: TronHttpClient) -> LoginForm:
           # 實作如何獲取登入頁面與欄位
           ...

       async def submit_login(self, client: TronHttpClient, form: LoginForm, username, password) -> LoginOutcome:
           # 實作送出帳密流程並獲取 session
           ...
   ```
2. **註冊 Flow 映射**：
   在 `troTHU/login_adapters.py` 的 `_adapters_by_flow` 字典中註冊此對照：
   ```python
   _adapters_by_flow = {
       ...
       "my_school_sso": MySchoolLoginAdapter(),
   }
   ```
3. **設定 Provider 的 `auth_flow`**：
   將對應的 provider（無論是程式碼或進階設定中）的 `auth_flow` 欄位填入 `"my_school_sso"` 即可。

---

## 途徑三：純 Cookie 匯入（免寫任何登入邏輯）

部分開發者或使用者喜歡直接從瀏覽器讀取並匯入 Cookie，繞過密碼登入流程。

1. **啟用手動 Cookie 流程**：
   在 `config.advanced.toml` 中將該學校的 `auth_flow` 改為 `"manual_cookie_only"`：
   ```toml
   [provider.available.scu]
   base_url = "https://tronclass.scu.edu.tw"
   auth_flow = "manual_cookie_only"
   ```
2. **使用 WebView 匯入**：
   啟用進階設定中的 `webview` 功能，使用網頁或專用指令匯入 Cookie：
   ```bash
   python -m troTHU.tron webview import --input <cookie-json-path> --save
   ```
3. **自動 API 驗證**：
   系統會在執行時（及匯入當下）自動向該學校的 API 發送 Session 驗證請求，確保匯入的 Cookie 有效，無須擔心靜默過期。
