import json
import unittest

from troTHU import tron


def make_config():
    simple = {
        "now": "class A",
        "accounts": [
            {"user": "S1", "passwd": "P1", "school": "thu"},
            {"user": "S2", "passwd": "P2", "school": "thu"},
            {"user": "S3", "passwd": "P3", "school": "tku"},
            {"user": "S4", "passwd": "", "school": "thu"},
        ],
        "groups": [{"class": "A", "school": "thu", "users": ["S1", "S2", "S3", "S4"]}],
        "operating": {},
    }
    return tron.normalize_config(tron.merge_simple_and_advanced_config(simple, {}))


class GroupRuntimeTest(unittest.TestCase):
    def test_resolve_now_class_and_execution_plan(self) -> None:
        config = make_config()
        target = tron.resolve_now_target(config)
        plan = tron.build_group_execution_plan(config, target)

        self.assertEqual(target["kind"], "group")
        self.assertEqual(plan["monitor_user"], "S1")
        self.assertEqual([item["user"] for item in plan["accounts"]], ["S1", "S2"])
        self.assertTrue(any(item["reason"] == "school_mismatch" for item in plan["skipped"]))
        self.assertTrue(any(item["reason"] == "missing_password" for item in plan["skipped"]))
        encoded = json.dumps(plan, ensure_ascii=False)
        self.assertNotIn("P1", encoded)
        self.assertNotIn("P2", encoded)

    def test_group_submit_helpers_are_safe_plans(self) -> None:
        config = make_config()
        result = tron.asyncio.run(tron.submit_group_number("1234", config=config))
        encoded = json.dumps(result, ensure_ascii=False)

        self.assertEqual(result["status"], "planned")
        self.assertEqual(result["kind"], "number")
        self.assertNotIn("P1", encoded)
        self.assertNotIn("1234", encoded)

    def test_resolve_blank_now_infers_single_account(self) -> None:
        simple = {
            "now": "",
            "accounts": [{"user": "ONLY", "passwd": "PASS", "school": "fju"}],
            "groups": [],
            "operating": {},
        }
        config = tron.normalize_config(tron.merge_simple_and_advanced_config(simple, {}))
        target = tron.resolve_now_target(config)

        self.assertTrue(target["ok"])
        self.assertTrue(target["inferred"])
        self.assertEqual(target["user"], "ONLY")
        self.assertEqual(target["school"], "fju")


if __name__ == "__main__":
    unittest.main()
