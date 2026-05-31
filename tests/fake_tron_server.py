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
        # Real TronClass shape: student_rollcalls is a per-student status array on the
        # rollcall object; number_code is a top-level field on that object.
        self.student_rollcalls: List[Dict[str, Any]] = [
            {"student_id": 1, "status": "pending", "rollcall_status": "on_call"}
        ]
        self.course_students: List[Dict[str, Any]] = [
            {"id": 1, "name": "Ada", "student_no": "S001"},
            {"id": 2, "name": "Grace", "student_no": "S002"},
        ]
        self.leave_records: List[Dict[str, Any]] = [
            {"id": 701, "student_id": 2, "status": "approved", "leave_type": "on_sick_leave"}
        ]
        self.student_history_rollcalls: List[Dict[str, Any]] = [
            {"student_rollcall_id": 801, "rollcall_id": 9001, "student_status": "absent"}
        ]
        # When False, the GET .../student_rollcalls response omits number_code so the
        # runtime must fall back to brute-force (simulates a backend that blocks the leak).
        self.student_rollcalls_leaks_code = True
        self.student_rollcalls_status = "in_progress"
        self.student_rollcalls_end_time = "2026-05-24T23:59:00+08:00"
        self.teacher_rollcalls: List[Dict[str, Any]] = []
        self.module_rollcalls: List[Dict[str, Any]] = []
        self.teacher_course_enrollments: Dict[str, Dict[str, Any]] = {}
        self.teacher_rollcall_updates: List[Dict[str, Any]] = []
        self.rollcall_root_requests: List[Dict[str, Any]] = []
        self.teacher_rollcall_starts: List[Dict[str, Any]] = []
        self.self_registration_answers: List[Dict[str, Any]] = []
        self.teacher_rollcall_publishes: List[Dict[str, Any]] = []
        self.radar_position_updates: List[Dict[str, Any]] = []
        self.merged_rollcalls: List[Dict[str, Any]] = []
        self.merged_rollcall_updates: List[Dict[str, Any]] = []
        self.rollcall_settings: Dict[str, Dict[str, Any]] = {}
        self.rollcall_setting_updates: List[Dict[str, Any]] = []
        self.rollcall_scores: List[Dict[str, Any]] = []
        self.imported_rollcalls: List[Dict[str, Any]] = []
        self.graded_rollcalls: List[Dict[str, Any]] = []
        self.stat_exports: List[Dict[str, Any]] = []
        self.attendance_exports: List[Dict[str, Any]] = []
        self.department_attendance_requests: List[Dict[str, Any]] = []
        self.department_user_attendance_requests: List[Dict[str, Any]] = []
        self.face_check_records: List[Dict[str, Any]] = []
        self.qr_auth_requests: List[Dict[str, Any]] = []
        self.student_history_updates: List[Dict[str, Any]] = []
        self.teacher_rollcall_stops: List[Dict[str, Any]] = []
        self.teacher_rollcall_deletes: List[str] = []
        self.qrcode_requests: List[str] = []
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
        # Empty-answer (coordinate-free `{}`) radar submission behaviour.
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

    async def audit_page(self, _request):
        html = """
        <html>
          <head>
            <link rel="stylesheet" href="/audit/style.css">
            <script type="module" src="/audit/app.js"></script>
          </head>
          <body>
            <img src="/audit/image.png">
            audit-page-secret
          </body>
        </html>
        """
        return web.Response(text=html, content_type="text/html", headers={"X-Audit-Page": "yes"})

    async def audit_app_js(self, _request):
        js = "import './nested.js';\nconsole.log('audit-js-secret');\n"
        return web.Response(text=js, content_type="application/javascript")

    async def audit_nested_js(self, _request):
        return web.Response(text="console.log('audit-nested-secret');\n", content_type="application/javascript")

    async def audit_style_css(self, _request):
        css = "@import '/audit/more.css';\n.hero { background: url('/audit/image.png'); }\n"
        return web.Response(text=css, content_type="text/css")

    async def audit_more_css(self, _request):
        return web.Response(text=".more { color: #123456; }\n", content_type="text/css")

    async def audit_image(self, _request):
        return web.Response(body=b"\x89PNG\r\n\x1a\naudit-image-secret", content_type="image/png")

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

    def _course_payload(self, course_id: str) -> Dict[str, Any]:
        for course in self.courses:
            if str(course.get("id") or course.get("course_id")) == str(course_id):
                return course
        return {}

    async def course_enrollment_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        course_id = request.match_info["course_id"]
        scripted = self._script_response("course_enrollment")
        if scripted is not None:
            return scripted
        if str(course_id) in self.teacher_course_enrollments:
            return web.json_response(self.teacher_course_enrollments[str(course_id)])
        course = self._course_payload(course_id)
        enrollment = course.get("enrollment") if isinstance(course, dict) else None
        if isinstance(enrollment, dict):
            return web.json_response(enrollment)
        if isinstance(course.get("roles"), list) or isinstance(course.get("aliases"), list):
            return web.json_response(
                {
                    "roles": list(course.get("roles", [])),
                    "aliases": list(course.get("aliases", [])),
                    "group_id": course.get("group_id"),
                }
            )
        return web.json_response({"roles": ["student"], "aliases": ["student"]})

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

    def _mark_rollcall_present(self, rollcall_id: str) -> None:
        for rollcall in self.rollcalls:
            if str(rollcall.get("rollcall_id") or rollcall.get("id")) == str(rollcall_id):
                rollcall["status"] = "on_call_fine"

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
            # Coordinate-free empty answer, like the repro's empty `{}` PUT.
            if self.radar_empty_answer_accepted:
                if self.radar_empty_answer_marks_present:
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
        return web.json_response({"ok": True})

    async def answer_self_registration(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.self_registration_answers.append(
            {"rollcall_id": request.match_info["rollcall_id"], "body": body}
        )
        scripted = self._script_response("self_registration")
        if scripted is not None:
            return scripted
        return web.json_response({"ok": True, "status": "on_call_fine"})

    async def student_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("student_rollcalls")
        if scripted is not None:
            return scripted
        rollcall = self._teacher_rollcall(request.match_info["rollcall_id"])
        if rollcall is not None:
            return web.json_response(
                {
                    "id": rollcall["id"],
                    "course_id": rollcall["course_id"],
                    "status": rollcall.get("status", "in_progress"),
                    "is_number": bool(rollcall.get("is_number")),
                    "is_radar": bool(rollcall.get("is_radar")),
                    "type": rollcall.get("type", "another"),
                    "source": rollcall.get("source", "manual"),
                    "student_rollcalls": rollcall.get("student_rollcalls", []),
                    "number_code": rollcall.get("number_code", ""),
                    "end_time": self.student_rollcalls_end_time,
                }
            )
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

    def _students_for_rollcall(self, rollcall_id: str) -> List[Dict[str, Any]]:
        rollcall = self._teacher_rollcall(rollcall_id)
        if rollcall is not None:
            return list(rollcall.get("student_rollcalls", []))
        return list(self.student_rollcalls)

    async def pagination_student_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("pagination_student_rollcalls")
        if scripted is not None:
            return scripted
        students = self._students_for_rollcall(request.match_info["rollcall_id"])
        status_filter = request.query.get("rollcall_status", "")
        if status_filter:
            students = [
                student
                for student in students
                if student.get("student_rollcall_status") == status_filter
                or student.get("rollcall_status") == status_filter
                or student.get("status") == status_filter
            ]
        page = max(1, int(request.query.get("page", "1")))
        page_size = max(1, int(request.query.get("page_size", "20")))
        start = (page - 1) * page_size
        return web.json_response(
            {
                "page": page,
                "page_size": page_size,
                "total": len(students),
                "student_rollcalls": students[start:start + page_size],
            }
        )

    async def student_rollcall_count_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("student_rollcall_count")
        if scripted is not None:
            return scripted
        counts: Dict[str, int] = {}
        for student in self._students_for_rollcall(request.match_info["rollcall_id"]):
            status = (
                student.get("student_rollcall_status")
                or student.get("student_status")
                or student.get("rollcall_status")
                or student.get("status")
                or "unknown"
            )
            counts[str(status)] = counts.get(str(status), 0) + 1
        return web.json_response(
            {
                "rollcall_id": request.match_info["rollcall_id"],
                "total": sum(counts.values()),
                "counts": counts,
            }
        )

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

    async def course_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_rollcalls")
        if scripted is not None:
            return scripted
        course_id = request.match_info["course_id"]
        rollcalls = [
            rollcall
            for rollcall in self.teacher_rollcalls
            if str(rollcall.get("course_id")) == str(course_id)
        ]
        return web.json_response({"rollcalls": rollcalls})

    async def rollcall_root_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("rollcall_root")
        if scripted is not None:
            return scripted
        body: Dict[str, Any] = {}
        if request.can_read_body:
            body = await request.json()
        self.rollcall_root_requests.append(
            {"method": request.method, "body": body, "query": dict(request.query)}
        )
        if request.method == "GET":
            return web.json_response({"rollcalls": self.teacher_rollcalls, "query": dict(request.query)})
        if request.method == "POST":
            self.next_teacher_rollcall_id += 1
            rollcall = dict(body)
            rollcall.setdefault("course_id", body.get("course_id", "root"))
            rollcall["id"] = self.next_teacher_rollcall_id
            self.teacher_rollcalls.append(rollcall)
            return web.json_response(rollcall, status=201)
        return web.json_response({"ok": True, "method": request.method, "payload": body})

    async def rollcall_status_list_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("rollcall_status_list")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "rollcalls": [
                    {"id": rollcall.get("id"), "status": rollcall.get("status", "in_progress")}
                    for rollcall in self.teacher_rollcalls
                ],
                "query": dict(request.query),
            }
        )

    async def rollcall_detail_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("rollcall_detail")
        if scripted is not None:
            return scripted
        rollcall = self._teacher_rollcall(request.match_info["rollcall_id"])
        if rollcall is None:
            return web.Response(status=404, text="not found")
        return web.json_response(rollcall)

    async def course_rollcall_setting_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_rollcall_setting")
        if scripted is not None:
            return scripted
        course_id = request.match_info["course_id"]
        if request.method == "PUT":
            body = await request.json()
            setting = dict(body)
            setting["course_id"] = course_id
            self.rollcall_settings[course_id] = setting
            self.rollcall_setting_updates.append({"course_id": course_id, "body": body})
            return web.json_response(setting)
        setting = self.rollcall_settings.get(
            course_id,
            {"course_id": course_id, "enabled": True, "score_policy": "attendance"},
        )
        return web.json_response(setting)

    async def course_rollcall_score_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_rollcall_score")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "course_id": request.match_info["course_id"],
                "rollcall_score": 100,
            }
        )

    async def course_rollcall_scores_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_rollcall_scores")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "course_id": request.match_info["course_id"],
                "scores": self.rollcall_scores,
            }
        )

    async def timetable_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("timetable_rollcalls")
        if scripted is not None:
            return scripted
        course_ids = {
            value.strip()
            for value in request.query.get("course_ids", "").split(",")
            if value.strip()
        }
        rollcalls = [
            rollcall
            for rollcall in self.teacher_rollcalls
            if not course_ids or str(rollcall.get("course_id")) in course_ids
        ]
        return web.json_response({"rollcalls": rollcalls, "query": dict(request.query)})

    async def module_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("module_rollcalls")
        if scripted is not None:
            return scripted
        course_id = request.match_info["course_id"]
        rollcalls = [
            rollcall
            for rollcall in self.module_rollcalls
            if str(rollcall.get("course_id")) == str(course_id)
        ]
        return web.json_response(
            {"course_id": course_id, "rollcalls": rollcalls, "query": dict(request.query)}
        )

    async def alert_log_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("alert_log_rollcalls")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "alert_log_id": request.match_info["alert_log_id"],
                "rollcalls": self.teacher_rollcalls,
                "query": dict(request.query),
            }
        )

    async def timetable_rollcall_statistics_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("timetable_rollcall_statistics")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "timetable_id": request.match_info["timetable_id"],
                "total": len(self.teacher_rollcalls),
                "attended": 1,
            }
        )

    async def course_students_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_students")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "course_id": request.match_info["course_id"],
                "students": self.course_students,
            }
        )

    async def course_rollcall_detail_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_rollcall_detail")
        if scripted is not None:
            return scripted
        course_id = request.match_info["course_id"]
        rollcall_id = request.match_info["rollcall_id"]
        rollcall = self._teacher_rollcall(rollcall_id)
        if rollcall is None or str(rollcall.get("course_id")) != str(course_id):
            return web.Response(status=404, text="not found")
        return web.json_response(rollcall)

    async def student_onprogress_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("student_onprogress_rollcalls")
        if scripted is not None:
            return scripted
        course_id = request.match_info["course_id"]
        rollcalls = [
            rollcall
            for rollcall in self.teacher_rollcalls
            if str(rollcall.get("course_id")) == str(course_id)
            and rollcall.get("status") in {"waiting", "in_progress"}
        ]
        return web.json_response(
            {"course_id": course_id, "rollcalls": rollcalls, "query": dict(request.query)}
        )

    async def leave_record_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("leave_record")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "course_id": request.match_info["course_id"],
                "records": self.leave_records,
                "query": dict(request.query),
            }
        )

    async def student_history_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("student_history_rollcalls")
        if scripted is not None:
            return scripted
        return web.json_response(
            {
                "course_id": request.match_info["course_id"],
                "student_id": request.match_info["student_id"],
                "student_rollcalls": self.student_history_rollcalls,
                "query": dict(request.query),
            }
        )

    async def update_student_history_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("update_student_history_rollcalls")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.student_history_updates.append(
            {
                "course_id": request.match_info["course_id"],
                "student_id": request.match_info["student_id"],
                "body": body,
            }
        )
        updates = {
            str(item.get("student_rollcall_id")): item.get("student_status")
            for item in body.get("student_rollcalls", [])
            if isinstance(item, dict)
        }
        for record in self.student_history_rollcalls:
            key = str(record.get("student_rollcall_id"))
            if key in updates:
                record["student_status"] = updates[key]
        return web.json_response(
            {
                "course_id": request.match_info["course_id"],
                "student_id": request.match_info["student_id"],
                "student_rollcalls": self.student_history_rollcalls,
            }
        )

    async def course_students_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_students_rollcalls")
        if scripted is not None:
            return scripted
        course_id = request.match_info["course_id"]
        return web.json_response(
            {
                "course_id": course_id,
                "students": [
                    {"id": 1, "rollcall_status": {"total": len(self.teacher_rollcalls), "on_call": 1, "absent": 0}}
                ],
            }
        )

    async def course_pagination_students_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("course_pagination_students_rollcalls")
        if scripted is not None:
            return scripted
        page = max(1, int(request.query.get("page", "1")))
        page_size = max(1, int(request.query.get("page_size", "20")))
        start = (page - 1) * page_size
        rows = [
            {
                "student_id": student.get("id"),
                "student_name": student.get("name"),
                "rollcall_status": "on_call",
            }
            for student in self.course_students
        ]
        return web.json_response(
            {
                "course_id": request.match_info["course_id"],
                "page": page,
                "page_size": page_size,
                "total": len(rows),
                "student_rollcalls": rows[start:start + page_size],
            }
        )

    async def create_module_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_module_rollcall")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.next_teacher_rollcall_id += 1
        rollcall = dict(body)
        rollcall.setdefault("status", "waiting")
        rollcall.setdefault("type", "qr_rollcall")
        rollcall.setdefault("student_rollcalls", [])
        rollcall["id"] = self.next_teacher_rollcall_id
        rollcall["course_id"] = request.match_info["course_id"]
        rollcall["source"] = self._rollcall_source(rollcall)
        self.module_rollcalls.append(rollcall)
        self.teacher_rollcalls.append(rollcall)
        return web.json_response(rollcall, status=201)

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
        rollcall.setdefault("type", "another")
        rollcall.setdefault("student_rollcalls", [])
        rollcall["id"] = self.next_teacher_rollcall_id
        rollcall["course_id"] = request.match_info["course_id"]
        rollcall["source"] = self._rollcall_source(rollcall)
        self.teacher_rollcalls.append(rollcall)
        return web.json_response(rollcall, status=201)

    async def update_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("update_teacher_rollcall")
        if scripted is not None:
            return scripted
        body = await request.json()
        rollcall_id = request.match_info["rollcall_id"]
        rollcall = self._teacher_rollcall(rollcall_id)
        self.teacher_rollcall_updates.append({"rollcall_id": rollcall_id, "body": body})
        if rollcall is None:
            return web.Response(status=404, text="not found")
        if "status" in body:
            rollcall["status"] = body["status"]
        if "student_rollcalls" in body:
            rollcall["student_rollcalls"] = list(body["student_rollcalls"])
        for key in ("title", "type", "is_number", "is_radar", "number_code"):
            if key in body:
                rollcall[key] = body[key]
        for key, value in body.items():
            if key not in {"student_rollcalls"}:
                rollcall.setdefault(key, value)
        rollcall["updated_at"] = "2026-05-27T10:00:00+08:00"
        return web.json_response(rollcall)

    async def update_radar_position_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("update_radar_position")
        if scripted is not None:
            return scripted
        body = await request.json()
        rollcall_id = request.match_info["rollcall_id"]
        self.radar_position_updates.append({"rollcall_id": rollcall_id, "body": body})
        rollcall = self._teacher_rollcall(rollcall_id)
        if rollcall is None:
            return web.Response(status=404, text="not found")
        rollcall.update(body)
        rollcall["position_updated"] = True
        return web.json_response(rollcall)

    async def delete_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("delete_teacher_rollcall")
        if scripted is not None:
            return scripted
        rollcall_id = request.match_info["rollcall_id"]
        self.teacher_rollcall_deletes.append(rollcall_id)
        self.teacher_rollcalls = [
            rollcall for rollcall in self.teacher_rollcalls if str(rollcall.get("id")) != str(rollcall_id)
        ]
        return web.json_response({"deleted": True})

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
        rollcall = self._teacher_rollcall(request.match_info["rollcall_id"])
        if rollcall is None:
            return web.Response(status=404, text="not found")
        self.teacher_rollcall_starts.append(
            {"rollcall_id": request.match_info["rollcall_id"], "body": body}
        )
        rollcall["status"] = "in_progress"
        if body:
            rollcall["start_payload"] = body
        return web.json_response(rollcall)

    async def activate_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("activate_teacher_rollcall")
        if scripted is not None:
            return scripted
        return web.json_response({"active": True, "rollcall_id": request.match_info["rollcall_id"]})

    async def publish_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        endpoint = request.match_info.get("publish_endpoint", "publish")
        scripted = self._script_response(endpoint)
        if scripted is not None:
            return scripted
        body = await request.json()
        rollcall_id = request.match_info["rollcall_id"]
        self.teacher_rollcall_publishes.append(
            {"rollcall_id": rollcall_id, "endpoint": endpoint, "body": body}
        )
        return web.json_response({"published": True, "rollcall_id": rollcall_id, "endpoint": endpoint})

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

    async def rollcall_status_result_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("rollcall_status_result")
        if scripted is not None:
            return scripted
        rollcall = self._teacher_rollcall(request.match_info["rollcall_id"])
        students = list((rollcall or {}).get("student_rollcalls", [])) or self.student_rollcalls
        attended = [
            student
            for student in students
            if student.get("student_rollcall_status") not in {"absent", "pending"}
            and student.get("status") not in {"absent", "pending"}
        ]
        return web.json_response(
            {
                "rollcall_id": request.match_info["rollcall_id"],
                "students": students,
                "total": len(students),
                "attended": len(attended),
            }
        )

    async def create_merged_rollcall_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("create_merged_rollcall")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.next_teacher_rollcall_id += 1
        rollcall = dict(body)
        rollcall.setdefault("status", "in_progress")
        rollcall["id"] = self.next_teacher_rollcall_id
        rollcall["source"] = "merged"
        self.merged_rollcalls.append(rollcall)
        self.teacher_rollcalls.append(rollcall)
        return web.json_response(rollcall, status=201)

    async def update_merged_rollcall_students_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("update_merged_rollcall_students")
        if scripted is not None:
            return scripted
        body = await request.json()
        self.merged_rollcall_updates.append(body)
        return web.json_response({"updated": True, "payload": body})

    async def update_rollcall_score_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("update_rollcall_score")
        if scripted is not None:
            return scripted
        body = await request.json()
        record = {
            "enrollment_id": request.match_info["enrollment_id"],
            "rollcall_score": body.get("rollcall_score"),
        }
        self.rollcall_scores.append(record)
        return web.json_response(record)

    async def import_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("import_rollcalls")
        if scripted is not None:
            return scripted
        body = await request.json()
        course_id = request.match_info["course_id"]
        record = {"course_id": course_id, "body": body}
        self.imported_rollcalls.append(record)
        return web.json_response({"imported": True, "course_id": course_id, "payload": body})

    async def grade_rollcalls_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("grade_rollcalls")
        if scripted is not None:
            return scripted
        body = await request.json()
        ids = [str(item) for item in body.get("rollcall_ids", [])]
        self.graded_rollcalls.append(body)
        return web.json_response({"graded": ids, "count": len(ids)})

    async def rollcall_stat_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body: Dict[str, Any] = {}
        if request.can_read_body:
            body = await request.json()
        kind = "rollcall-by-class" if request.path.endswith("export-by-class") else "rollcall"
        self.stat_exports.append({"kind": kind, "body": body, "method": request.method, "query": dict(request.query)})
        return web.Response(
            body=b"rollcall,stat\n",
            content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        )

    async def attendance_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        file_type = request.match_info.get("file_type", "")
        self.attendance_exports.append({"kind": "attendance", "file_type": file_type, "body": body})
        return web.Response(
            body=b"attendance,stat\n",
            content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        )

    async def rollcall_stat_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        kind = request.match_info["stat_kind"]
        return web.json_response({"kind": kind, "query": dict(request.query), "total": 1})

    async def department_attendance_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.department_attendance_requests.append(
            {"kind": "list", "body": body, "query": dict(request.query)}
        )
        return web.json_response({"records": [{"department_id": 1, "attendance": 1}], "query": dict(request.query)})

    async def department_attendance_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        file_type = request.match_info.get("file_type", "")
        self.department_attendance_requests.append(
            {"kind": "export", "file_type": file_type, "body": body}
        )
        return web.Response(
            body=b"department,attendance\n",
            content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        )

    async def department_user_attendance_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        self.department_user_attendance_requests.append(
            {"kind": "list", "query": dict(request.query)}
        )
        return web.json_response({"records": [{"user_id": 1, "attendance": 1}], "query": dict(request.query)})

    async def department_user_attendance_export_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        file_type = request.match_info.get("file_type", "")
        self.department_user_attendance_requests.append(
            {"kind": "export", "file_type": file_type, "query": dict(request.query)}
        )
        return web.Response(
            body=b"user,attendance\n",
            content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        )

    async def face_check_records_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        record = dict(body)
        record.setdefault("id", len(self.face_check_records) + 1)
        self.face_check_records.append(record)
        return web.json_response(record, status=201)

    async def face_check_action_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        action = request.match_info["face_action"]
        return web.json_response({"action": action, "query": dict(request.query), "ok": True})

    async def qrcode_login_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body: Dict[str, Any] = {}
        if request.can_read_body:
            body = await request.json()
        self.qr_auth_requests.append(
            {"kind": "qrcode-login", "method": request.method, "body": body, "query": dict(request.query)}
        )
        return web.json_response({"login": True, "method": request.method, "query": dict(request.query)})

    async def qr_code_scan_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.qr_auth_requests.append({"kind": "scan", "body": body})
        return web.json_response({"scanned": True, "payload": body})

    async def identity_broker_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        body = await request.json()
        self.qr_auth_requests.append(
            {
                "kind": "identity-broker",
                "realm": request.match_info["realm"],
                "body": body,
                "query": dict(request.query),
            }
        )
        return web.json_response({"brokered": True, "realm": request.match_info["realm"]})

    async def ntf_unread_count_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        return web.json_response(
            {"user_id": request.match_info["user_id"], "unread_count": 1, "query": dict(request.query)}
        )

    async def qrcode_api(self, request):
        unauthorized = self._unauthorized_if_needed(request)
        if unauthorized is not None:
            return unauthorized
        scripted = self._script_response("qrcode")
        if scripted is not None:
            return scripted
        value = request.query.get("url", "")
        self.qrcode_requests.append(value)
        # Minimal PNG signature plus bytes; enough for client-side API verification.
        return web.Response(
            body=b"\x89PNG\r\n\x1a\nfake-qrcode:" + value.encode("utf-8"),
            content_type="image/png",
        )

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
        app.router.add_get("/audit/page", self.audit_page)
        app.router.add_get("/audit/app.js", self.audit_app_js)
        app.router.add_get("/audit/nested.js", self.audit_nested_js)
        app.router.add_get("/audit/style.css", self.audit_style_css)
        app.router.add_get("/audit/more.css", self.audit_more_css)
        app.router.add_get("/audit/image.png", self.audit_image)
        app.router.add_get("/api/radar/rollcalls", self.rollcalls_api)
        app.router.add_get("/api/current-semester-info", self.current_semester_api)
        app.router.add_get("/api/my-courses", self.courses_api)
        app.router.add_get("/api/course/{course_id}/enrollment", self.course_enrollment_api)
        app.router.add_get("/api/course/{course_id}/students", self.course_students_api)
        app.router.add_get("/api/course/{course_id}/rollcalls", self.course_rollcalls_api)
        app.router.add_get("/api/course/{course_id}/rollcall/setting", self.course_rollcall_setting_api)
        app.router.add_put("/api/course/{course_id}/rollcall/setting", self.course_rollcall_setting_api)
        app.router.add_get("/api/course/{course_id}/rollcall-score", self.course_rollcall_score_api)
        app.router.add_get("/api/course/{course_id}/rollcall/scores", self.course_rollcall_scores_api)
        app.router.add_get("/api/timetable_rollcalls", self.timetable_rollcalls_api)
        app.router.add_get("/api/courses/{course_id}/modules/rollcalls", self.module_rollcalls_api)
        app.router.add_get("/api/alert-logs/{alert_log_id}/rollcalls", self.alert_log_rollcalls_api)
        app.router.add_get("/api/timetables/{timetable_id}/rollcall-statistics", self.timetable_rollcall_statistics_api)
        app.router.add_get("/api/course/{course_id}/rollcall/{rollcall_id}", self.course_rollcall_detail_api)
        app.router.add_get("/api/course/{course_id}/student-onprogress-rollcalls", self.student_onprogress_rollcalls_api)
        app.router.add_get("/api/course/{course_id}/leave-record", self.leave_record_api)
        app.router.add_get("/api/course/{course_id}/student/{student_id}/rollcalls", self.student_history_rollcalls_api)
        app.router.add_put("/api/course/{course_id}/student/{student_id}/rollcalls", self.update_student_history_rollcalls_api)
        app.router.add_get("/api/course/{course_id}/students_rollcalls", self.course_students_rollcalls_api)
        app.router.add_get("/api/course/{course_id}/pagination_students_rollcalls", self.course_pagination_students_rollcalls_api)
        app.router.add_post("/api/course/{course_id}/rollcall", self.create_course_rollcall_api)
        app.router.add_post("/api/module/{course_id}/rollcall", self.create_module_rollcall_api)
        app.router.add_post("/api/rollcall/merged-rollcall", self.create_merged_rollcall_api)
        app.router.add_put("/api/rollcall/merged-rollcall/student-rollcalls", self.update_merged_rollcall_students_api)
        app.router.add_route("*", "/api/rollcall/", self.rollcall_root_api)
        app.router.add_get("/api/rollcall/{rollcall_id}", self.rollcall_detail_api)
        app.router.add_put("/api/rollcall/{rollcall_id}", self.update_rollcall_api)
        app.router.add_delete("/api/rollcall/{rollcall_id}", self.delete_rollcall_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/position", self.update_radar_position_api)
        app.router.add_post("/api/rollcall/{rollcall_id}/start-rollcall", self.start_rollcall_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/activate", self.activate_rollcall_api)
        app.router.add_post("/api/rollcall/{rollcall_id}/{publish_endpoint:publish|publish-must}", self.publish_rollcall_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/{stop_endpoint:stop_number_rollcall|stop_radar|stop_qr_rollcall|stop_time_table_rollcall}", self.stop_rollcall_api)
        app.router.add_get("/api/courses/rollcall_status/", self.rollcall_status_list_api)
        app.router.add_get("/api/courses/rollcall_status/{rollcall_id}/result", self.rollcall_status_result_api)
        app.router.add_put("/api/enrollment/{enrollment_id}/rollcall-score", self.update_rollcall_score_api)
        app.router.add_post("/api/data-import/course/{course_id}/rollcall", self.import_rollcalls_api)
        app.router.add_post("/api/course/rollcalls/count/grade", self.grade_rollcalls_api)
        app.router.add_post("/api/stat/courses/rollcall/export", self.rollcall_stat_export_api)
        app.router.add_get("/api/stat/courses/rollcall/export", self.rollcall_stat_export_api)
        app.router.add_post("/api/stat/courses/rollcall/export-by-class", self.rollcall_stat_export_api)
        app.router.add_get("/api/stat/courses/rollcall/export-by-class", self.rollcall_stat_export_api)
        app.router.add_post("/api/stat/attendance/export/to", self.attendance_export_api)
        app.router.add_post("/api/stat/attendance/export/to/{file_type}", self.attendance_export_api)
        app.router.add_get("/api/stat/{stat_kind:lesson|student|teacher}/rollcall", self.rollcall_stat_api)
        app.router.add_post("/api/stat/departments/attendance", self.department_attendance_api)
        app.router.add_post("/api/stat/departments/attendance/export", self.department_attendance_export_api)
        app.router.add_post("/api/stat/departments/attendance/export/{file_type}", self.department_attendance_export_api)
        app.router.add_get("/api/stat/departments/user-attendance", self.department_user_attendance_api)
        app.router.add_get("/api/stat/departments/user-attendance/export", self.department_user_attendance_export_api)
        app.router.add_get("/api/stat/departments/user-attendance/export/{file_type}", self.department_user_attendance_export_api)
        app.router.add_post("/api/v1/face-check-records", self.face_check_records_api)
        app.router.add_get("/api/v1/face-check-records/{face_action:check|verify}", self.face_check_action_api)
        app.router.add_route("*", "/api/qrcode/login", self.qrcode_login_api)
        app.router.add_post("/api/qr-code/scan", self.qr_code_scan_api)
        app.router.add_post("/realms/{realm}/broker/tronclass-qrcode/endpoint", self.identity_broker_api)
        app.router.add_post("/auth/realms/{realm}/broker/tronclass-qrcode/endpoint", self.identity_broker_api)
        app.router.add_get("/ntf/users/{user_id}/notifications/unread-count", self.ntf_unread_count_api)
        app.router.add_put("/api/rollcall/{rollcall_id}/answer_number_rollcall", self.answer_number)
        app.router.add_get("/api/rollcall/{rollcall_id}/lite", self.radar_lite)
        app.router.add_put("/api/rollcall/{rollcall_id}/answer", self.answer_radar)
        app.router.add_put("/api/rollcall/{rollcall_id}/answer_radar_rollcall", self.answer_radar)
        app.router.add_put("/api/rollcall/{rollcall_id}/answer_qr_rollcall", self.answer_qr)
        app.router.add_put("/api/rollcall/{rollcall_id}/answer_self_registration_rollcall", self.answer_self_registration)
        app.router.add_get("/api/rollcall/{rollcall_id}/student_rollcalls", self.student_rollcalls_api)
        app.router.add_get("/api/rollcall/{rollcall_id}/pagination_students_rollcalls", self.pagination_student_rollcalls_api)
        app.router.add_get("/api/rollcall/{rollcall_id}/student_rollcall_count", self.student_rollcall_count_api)
        app.router.add_get("/api/rollcall/{rollcall_id}/answers", self.rollcall_answers_api)
        app.router.add_get("/api/qrcode", self.qrcode_api)
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
