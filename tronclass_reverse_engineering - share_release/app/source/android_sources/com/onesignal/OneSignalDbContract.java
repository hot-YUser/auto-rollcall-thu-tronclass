package com.onesignal;

import android.provider.BaseColumns;
class OneSignalDbContract {
    OneSignalDbContract() {
    }

    static abstract class NotificationTable implements BaseColumns {
        public static final String COLUMN_NAME_ANDROID_NOTIFICATION_ID = "android_notification_id";
        public static final String COLUMN_NAME_COLLAPSE_ID = "collapse_id";
        public static final String COLUMN_NAME_CREATED_TIME = "created_time";
        public static final String COLUMN_NAME_DISMISSED = "dismissed";
        public static final String COLUMN_NAME_EXPIRE_TIME = "expire_time";
        public static final String COLUMN_NAME_FULL_DATA = "full_data";
        public static final String COLUMN_NAME_GROUP_ID = "group_id";
        public static final String COLUMN_NAME_IS_SUMMARY = "is_summary";
        public static final String COLUMN_NAME_MESSAGE = "message";
        public static final String COLUMN_NAME_NOTIFICATION_ID = "notification_id";
        public static final String COLUMN_NAME_OPENED = "opened";
        public static final String COLUMN_NAME_TITLE = "title";
        public static final String INDEX_CREATE_ANDROID_NOTIFICATION_ID = "CREATE INDEX notification_android_notification_id_idx ON notification(android_notification_id); ";
        public static final String INDEX_CREATE_COLLAPSE_ID = "CREATE INDEX notification_collapse_id_idx ON notification(collapse_id); ";
        public static final String INDEX_CREATE_CREATED_TIME = "CREATE INDEX notification_created_time_idx ON notification(created_time); ";
        public static final String INDEX_CREATE_EXPIRE_TIME = "CREATE INDEX notification_expire_time_idx ON notification(expire_time); ";
        public static final String INDEX_CREATE_GROUP_ID = "CREATE INDEX notification_group_id_idx ON notification(group_id); ";
        public static final String INDEX_CREATE_NOTIFICATION_ID = "CREATE INDEX notification_notification_id_idx ON notification(notification_id); ";
        public static final String TABLE_NAME = "notification";

        NotificationTable() {
        }
    }

    static abstract class InAppMessageTable implements BaseColumns {
        public static final String COLUMN_CLICK_IDS = "click_ids";
        public static final String COLUMN_DISPLAYED_IN_SESSION = "displayed_in_session";
        public static final String COLUMN_NAME_DISPLAY_QUANTITY = "display_quantity";
        public static final String COLUMN_NAME_LAST_DISPLAY = "last_display";
        public static final String COLUMN_NAME_MESSAGE_ID = "message_id";
        public static final String TABLE_NAME = "in_app_message";

        InAppMessageTable() {
        }
    }
}

