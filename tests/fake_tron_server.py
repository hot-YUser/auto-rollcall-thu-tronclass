from contextlib import contextmanager
import json
import math
from typing import Any, Dict, List, Optional

try:
    import aiohttp
    from aiohttp import web
except (ImportError, ModuleNotFoundError):  # pragma: no cover - tests skip without aiohttp.web
    aiohttp = None
    web = None


class FakeTronServer:
    def __init__(self, *, correct_number_code: str = "0001") -> None:
        self.correct_number_code = str(correct_number_code)
        self.session_cookie = "local-test-session"
        self.rollcalls: List[Dict[str, Any]] = []
        self.current_semester: Dict[str, Any] = {
            "semester": {"id": 1122, "name": "Spring"},
            "academic_year": {"id": 112, "name": "112"},
        }
        self.courses: List[Dict[str, Any]] = []
        self.session_expired = False
        self.scripts: Dict[str, List[Dict[str, Any]]] = {}
        self.number_attempts: List[Dict[str, Any]] = []
        self.radar_answers: List[Dict[str, Any]] = []
        self.qr_answers: List[Dict[str, Any]] = []
        self.teacher_qr_code_requests: List[Dict[str, Any]] = []
        self.teacher_qr_data = "fake-teacher-qr-data"
        # Real TronClass shape: student_rollcalls is a per-student status array on the
        # rollcall object; number_code is a top-level field on that object.
        self.student_rollcalls: List[Dict[str, Any]] = [
            {"student_id": 1, "user_no": "user1", "status": "pending", "rollcall_status": "on_call"}
        ]
        # When False, the GET .../student_rollcalls response omits number_code so the
        # runtime must fall back to brute-force (simulates a backend that blocks the leak).
        self.student_rollcalls_leaks_code = True
        self.student_rollcalls_status = "in_progress"
        self.student_rollcalls_end_time = "2026-05-24T23:59:00+08:00"
        self.teacher_rollcalls: List[Dict[str, Any]] = []
        self.teacher_rollcall_starts: List[Dict[str, Any]] = []
        self.teacher_rollcall_stops: List[Dict[str, Any]] = []
        self.next_teacher_rollcall_id = 9000
        self.radar_lite_payload: Dict[str, Any] = {
            "use_beacon": False,
            "beacon_nonce": "",
        }
        self.radar_distance = 12.5
        self.radar_success = False
        self.radar_target: Optional[Dict[str, float]] = None
        self.radar_success_radius_meters = 5.0
        self.radar_payload_field_names: List[List[str]] = []
        self.radar_empty_answer_accepted = False
        self.radar_empty_answer_marks_present = True
        self.runner = None
        self.site = None
        self.base_url = ""

    @property
    def login_url(self) -> str:
        return self.base_url + "/login"

    @property
    def rollcalls_url(self) -> str:
        return self.base_url + "/api/radar/rollcalls?api_version=1.1.0"

    @property
    def current_semester_url(self) -> str:
        return self.base_url + "/api/current-semester-info"

    @property
    def courses_url(self) -> str:
        return self.base_url + "/api/my-courses?page=1&page_size=50"

    def endpoints(self):
        from troTHU.tron_http import TronHttpEndpoints

        return TronHttpEndpoints(
            base_url=self.base_url,
            login_url=self.login_url,
            rollcalls_url=self.rollcalls_url,
            current_semester_url=self.current_semester_url,
            courses_url=self.courses_url,
            session_cookie_domain="127.0.0.1",
        )

    def client(self, session):
        from troTHU.tron_http import TronHttpClient

        return TronHttpClient(session, endpoints=self.endpoints())

    @contextmanager
    def patch_tron_http_urls(self, tron_http_module):
        original_tron = tron_http_module.TRON
        original_login_url = tron_http_module.LOGIN_URL
        original_rollcalls_url = tron_http_module.ROLLCALLS_URL
        original_current_semester_url = getattr(tron_http_module, "CURRENT_SEMESTER_URL", "")
        original_courses_url = getattr(tron_http_module, "COURSES_URL", "")
        tron_http_module.TRON = self.base_url
        tron_http_module.LOGIN_URL = self.login_url
        tron_http_module.ROLLCALLS_URL = self.rollcalls_url
        tron_http_module.CURRENT_SEMESTER_URL = self.current_semester_url
        tron_http_module.COURSES_URL = self.courses_url
        try:
            yield
        finally:
            tron_http_module.TRON = original_tron
            tron_http_module.LOGIN_URL = original_login_url
            tron_http_module.ROLLCALLS_URL = original_rollcalls_url
            tron_http_module.CURRENT_SEMESTER_URL = original_current_semester_url
            tron_http_module.COURSES_URL = original_courses_url

    def queue_response(
        self,
        endpoint: str,
        *,
        status: int = 200,
        json_data: Any = None,
        text: str = "",
        headers: Optional[Dict[str, str]] = None,
    ) -> None:
        self.scripts.setdefault(endpoint, []).append(
            {
                "status": int(status),
                "json_data": json_data,
                "text": text,
                "headers": dict(headers or {}),
            }
        )

    def _pop_script(self, endpoint: str) -> Optional[Dict[str, Any]]:
        queue = self.scripts.get(endpoint) or []
        if not queue:
            return None
        return queue.pop(0)

    def _script_response(self, endpoint: str):
        script = self._pop_script(endpoint)
        if script is None:
            return None
        if script.get("json_data") is not None:
            return web.json_response(
                script["json_data"],
                status=script["status"],
                headers=script["headers"],
            )
        return web.Response(
            text=str(script.get("text") or ""),
            status=script["status"],
            headers=script["headers"],
        )

    def _session_ok(self, request) -> bool:
        return (
            not self.session_expired
            and request.cookies.get("session") == self.session_cookie
        )

    def _unauthorized_if_needed(self, request):
        if self._session_ok(request):
            return None
        return web.Response(status=401, text="unauthorized")

    def set_radar_target(
        self,
        lat: float,
        lon: float,
        *,
        success_radius_meters: float = 5.0,
    ) -> None:
        self.radar_target = {"lat": float(lat), "lon": float(lon)}
        self.radar_success_radius_meters = float(success_radius_meters)

    def _radar_distance_from_target(self, body: Dict[str, Any]) -> Optional[float]:
        if self.radar_target is None:
            return None
        try:
            lat = math.radians(float(body["latitude"]))
            lon = math.radians(float(body["longitude"]))
        except (KeyError, TypeError, ValueError):
            return None
        target_lat = math.radians(self.radar_target["lat"])
        target_lon = math.radians(self.radar_target["lon"])
        delta_lat = target_lat - lat
        delta_lon = target_lon - lon
        haversine = (
            math.sin(delta_lat / 2.0) ** 2
            + math.cos(lat) * math.cos(target_lat) * math.sin(delta_lon / 2.0) ** 2
        )
        return 6371000.0 * 2.0 * math.atan2(math.sqrt(haversine), math.sqrt(1.0 - haversine))

    def _mark_rollcall_present(self, rollcall_id: str) -> None:
        for rollcall in self.rollcalls:
            if str(rollcall.get("rollcall_id") or rollcall.get("id")) == str(rollcall_id):
                rollcall["status"] = "on_call_fine"

    def _mark_student_rollcalls_present(self) -> None:
        self.student_rollcalls_status = "on_call_fine"
        for entry in self.student_rollcalls:
            entry["rollcall_status"] = "on_call_fine"
            entry["status"] = "on_call_fine"

    async def login_page(self, _request):
        scripted = self._script_response("login_page")
        if scripted is not None:
            return scripted
        html = """
        <html>
          <form class="form-horizontal" action="/submit">
            <input type="hidden" name="execution" value="abc123">
            <input type="hidden" name="tab_id" value="tab-1">
          </form>
        </html>
        """
        return web.Response(text=html, content_type="text/html")

    async def submit_login(self, request):
        scripted = self._script_response("submit_login")
        if scripted is not None:
            return scripted
        data = await request.post()
        if data.get("username") != "user1" or data.get("password") != "pass1":
            return web.Response(text="bad credentials", status=200)

        response = web.HTTPFound("/home")
        response.set_cookie("session", self.session_cookie)
        raise response

    async def home(self, _request):
        return web.Response(text="ok")

    async def rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("rollcalls")
        if scripted is not None:
            return scripted
        return web.json_response({"rollcalls": self.rollcalls})

    async def current_semester_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("current_semester")
        if scripted is not None:
            return scripted
        return web.json_response(self.current_semester)

    async def courses_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("courses")
        if scripted is not None:
            return scripted
        return web.json_response({"courses": self.courses})

    async def answer_number(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        attempt = {
            "rollcall_id": request.match_info["rollcall_id"],
            "body": body,
        }
        self.number_attempts.append(attempt)
        scripted = self._script_response("number")
        if scripted is not None:
            return scripted
        if str(body.get("numberCode")) == self.correct_number_code:
            self._mark_student_rollcalls_present()
            self._mark_rollcall_present(request.match_info["rollcall_id"])
            return web.json_response({"success": True, "status": "on_call_fine"})
        return web.json_response({"success": False, "message": "wrong number code"}, status=400)

    async def radar_lite(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("radar_lite")
        if scripted is not None:
            return scripted
        payload = dict(self.radar_lite_payload)
        payload.setdefault("rollcall_id", request.match_info["rollcall_id"])
        return web.json_response(payload)

    async def answer_radar(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.radar_payload_field_names.append(sorted(str(key) for key in body.keys()))
        self.radar_answers.append(
            {
                "rollcall_id": request.match_info["rollcall_id"],
                "body": body,
                "field_names": sorted(str(key) for key in body.keys()),
            }
        )
        scripted = self._script_response("radar")
        if scripted is not None:
            return scripted
        if "latitude" not in body:
            if self.radar_empty_answer_accepted:
                if self.radar_empty_answer_marks_present:
                    self._mark_student_rollcalls_present()
                    self._mark_rollcall_present(request.match_info["rollcall_id"])
                return web.json_response({"success": True})
            return web.json_response(
                {
                    "error_code": "radar_out_of_rollcall_scope",
                    "message": "out of scope",
                    "distance": self.radar_distance,
                },
                status=400,
            )
        distance = self._radar_distance_from_target(body)
        if self.radar_success or (
            distance is not None and distance <= self.radar_success_radius_meters
        ):
            self._mark_student_rollcalls_present()
            self._mark_rollcall_present(request.match_info["rollcall_id"])
            return web.json_response({"success": True})
        return web.json_response(
            {
                "error_code": "radar_out_of_rollcall_scope",
                "message": "out of scope",
                "distance": self.radar_distance if distance is None else distance,
            },
            status=400,
        )

    async def answer_qr(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.qr_answers.append(
            {
                "rollcall_id": request.match_info["rollcall_id"],
                "body": body,
                "session_id": request.headers.get("x-session-id", ""),
            }
        )
        scripted = self._script_response("qr")
        if scripted is not None:
            return scripted
        self._mark_student_rollcalls_present()
        self._mark_rollcall_present(request.match_info["rollcall_id"])
        return web.json_response({"ok": True})

    async def student_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("student_rollcalls")
        if scripted is not None:
            return scripted
        payload: Dict[str, Any] = {
            "id": request.match_info["rollcall_id"],
            "is_number": True,
            "status": self.student_rollcalls_status,
            "student_rollcalls": self.student_rollcalls,
        }
        if self.student_rollcalls_leaks_code:
            payload["number_code"] = self.correct_number_code
            payload["end_time"] = self.student_rollcalls_end_time
        return web.json_response(payload)

    async def rollcall_answers_api(self, request):
        scripted = self._script_response("rollcall_answers")
        if scripted is not None:
            return scripted
        return web.json_response({"answers": [{"student_id": 1, "updated_at": "2026-05-25T02:34:18Z"}], "last_timestamp": 0})

    def _teacher_rollcall(self, rollcall_id: str) -> Optional[Dict[str, Any]]:
        for rollcall in self.teacher_rollcalls:
            if str(rollcall.get("id")) == str(rollcall_id):
                return rollcall
        return None

    def _rollcall_source(self, payload: Dict[str, Any]) -> str:
        if payload.get("is_number"):
            return "number"
        if payload.get("is_radar"):
            return "radar"
        if payload.get("type") == "qr_rollcall":
            return "qr"
        if payload.get("type") == "self_registration":
            return "self_registration"
        return "manual"

    async def create_course_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_course_rollcall")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.next_teacher_rollcall_id += 1
        rollcall = dict(body)
        rollcall.setdefault("status", "in_progress")
        rollcall["id"] = self.next_teacher_rollcall_id
        rollcall["course_id"] = request.match_info["course_id"]
        rollcall["source"] = self._rollcall_source(rollcall)
        self.teacher_rollcalls.append(rollcall)
        return web.json_response(rollcall, status=201)

    async def start_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("start_teacher_rollcall")
        if scripted is not None:
            return scripted
        body: Dict[str, Any] = {}
        if request.can_read_body:
            try:
                body = await request.json()
            except json.JSONDecodeError:
                body = {}
        rollcall_id = request.match_info["rollcall_id"]
        rollcall = self._teacher_rollcall(rollcall_id)
        if rollcall is None:
            return web.Response(status=404, text="not found")
        self.teacher_rollcall_starts.append({"rollcall_id": rollcall_id, "body": body})
        rollcall["status"] = "in_progress"
        if body:
            rollcall["start_payload"] = body
        return web.json_response(rollcall)

    async def teacher_qr_code_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("teacher_qr_code")
        if scripted is not None:
            return scripted
        course_id = request.match_info["course_id"]
        rollcall_id = request.match_info["rollcall_id"]
        rollcall = self._teacher_rollcall(rollcall_id)
        if rollcall is None:
            return web.Response(status=404, text="not found")
        self.teacher_qr_code_requests.append({"course_id": course_id, "rollcall_id": rollcall_id})
        return web.json_response({"courseId": course_id, "data": self.teacher_qr_data, "rollcallId": rollcall_id})

    async def stop_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        endpoint = request.match_info.get("stop_endpoint", "")
        scripted = self._script_response(endpoint)
        if scripted is not None:
            return scripted
        rollcall_id = request.match_info["rollcall_id"]
        rollcall = self._teacher_rollcall(rollcall_id)
        self.teacher_rollcall_stops.append({"rollcall_id": rollcall_id, "endpoint": endpoint})
        if rollcall is None:
            return web.Response(status=404, text="not found")
        rollcall["status"] = "finished"
        return web.json_response(rollcall)

    async def org_settings_api(self, request):
        scripted = self._script_response("org_settings")
        if scripted is not None:
            return scripted
        return web.json_response({"id": request.match_info.get("org_id", "1"), "notification_url": self.base_url})

    async def users_me_api(self, request):
        scripted = self._script_response("users_me")
        if scripted is not None:
            return scripted
        return web.json_response({"id": 238730, "name": "Test User"})

    async def notifications_api(self, request):
        scripted = self._script_response("notifications")
        if scripted is not None:
            return scripted
        return web.json_response(
            {"notifications": [{"id": 1, "type": "qr_rollcall_started", "rollcall_id": 42}]}
        )

    async def pubsub_ws(self, request):
        ws = web.WebSocketResponse()
        await ws.prepare(request)
        await ws.send_str(json.dumps({"type": "qr_rollcall_started", "rollcall_id": 42}))
        await ws.close()
        return ws

    async def start(self) -> "FakeTronServer":
        if web is None:
            raise RuntimeError("aiohttp.web is required for FakeTronServer")
        app = web.Application()
        app.router.add_get("/login", self.login_page)
        app.router.add_post("/submit", self.submit_login)
        app.router.add_get("/", self.home)
        app.router.add_get("/home", self.home)
        app.router.add_get("/api/radar/rollcalls", self.rollcalls_api)
        app.router.add_get("/api/current-semester-info", self.current_semester_api)
        app.router.add_get("/api/my-courses", self.courses_api)
        app.router.add_post("/api/course/{course_id}/rollcall", self.create_course_rollcall_api)
        app.router.add_get("/api/course/{course_id}/rollcall/{rollcall_id}/qr_code", self.teacher_qr_code_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/answer_number_rollcall", self.answer_number)
        app.router.add_get("/api/rollcall/{rollcall_id}/lite", self.radar_lite)
        app.router.add_put("/api/rollcall/{rollcall_id}/answer", self.answer_radar)
        app.router.add_put("/api/rollcall/{rollcall_id}/answer_qr_rollcall", self.answer_qr)
        app.router.add_post("/api/rollcall/{rollcall_id}/start-rollcall", self.start_rollcall_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/{stop_endpoint}", self.stop_rollcall_api)
        app.router.add_get("/api/rollcall/{rollcall_id}/student_rollcalls", self.student_rollcalls_api)
        app.router.add_get("/api/rollcall/{rollcall_id}/answers", self.rollcall_answers_api)
        app.router.add_get("/api/orgs/{org_id}/org-settings", self.org_settings_api)
        app.router.add_get("/api/users/me", self.users_me_api)
        app.router.add_get("/users/{user_id}/notifications", self.notifications_api)
        app.router.add_get("/pubsub/{user_id}", self.pubsub_ws)

        self.runner = web.AppRunner(app)
        await self.runner.setup()
        self.site = web.TCPSite(self.runner, "127.0.0.1", 0)
        await self.site.start()
        port = self.site._server.sockets[0].getsockname()[1]
        self.base_url = "http://127.0.0.1:{}".format(port)
        return self

    async def close(self) -> None:
        if self.runner is not None:
            await self.runner.cleanup()
        self.runner = None
        self.site = None
        self.base_url = ""

    async def __aenter__(self) -> "FakeTronServer":
        return await self.start()

    async def __aexit__(self, _exc_type, _exc, _tb) -> None:
        await self.close()

    async def login_session(self, session, *, user: str = "user1", password: str = "pass1"):
        client = self.client(session)
        form = await client.fetch_login_form()
        outcome = await client.submit_login(form, user, password)
        return form, outcome
