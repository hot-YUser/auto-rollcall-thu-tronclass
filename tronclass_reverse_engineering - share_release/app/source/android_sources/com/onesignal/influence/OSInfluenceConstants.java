package com.onesignal.influence;

import com.onesignal.influence.data.OSInAppMessageTracker;
import com.onesignal.influence.data.OSNotificationTracker;
import kotlin.Metadata;
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0019\bÀ\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u0011\u0010\u0006\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u000e\u0010\t\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u0011\u0010\u000e\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\bR\u000e\u0010\u0010\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0018\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0019\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u001a\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u001b\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u001c\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u001d"}, d2 = {"Lcom/onesignal/influence/OSInfluenceConstants;", "", "()V", "DIRECT_TAG", "", "IAM_ID_TAG", "IAM_TAG", "getIAM_TAG", "()Ljava/lang/String;", "INFLUENCE_CHANNEL", "INFLUENCE_IDS", "INFLUENCE_TYPE", "NOTIFICATIONS_IDS", "NOTIFICATION_ID_TAG", "NOTIFICATION_TAG", "getNOTIFICATION_TAG", OSInfluenceConstants.PREFS_OS_DIRECT_ENABLED, OSInfluenceConstants.PREFS_OS_IAM_INDIRECT_ATTRIBUTION_WINDOW, OSInfluenceConstants.PREFS_OS_IAM_LIMIT, OSInfluenceConstants.PREFS_OS_INDIRECT_ENABLED, OSInfluenceConstants.PREFS_OS_LAST_ATTRIBUTED_NOTIFICATION_OPEN, OSInfluenceConstants.PREFS_OS_LAST_IAMS_RECEIVED, OSInfluenceConstants.PREFS_OS_LAST_NOTIFICATIONS_RECEIVED, "PREFS_OS_NOTIFICATION_INDIRECT_ATTRIBUTION_WINDOW", OSInfluenceConstants.PREFS_OS_NOTIFICATION_LIMIT, OSInfluenceConstants.PREFS_OS_OUTCOMES_CURRENT_IAM_INFLUENCE, "PREFS_OS_OUTCOMES_CURRENT_NOTIFICATION_INFLUENCE", OSInfluenceConstants.PREFS_OS_UNATTRIBUTED_ENABLED, "TIME", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class OSInfluenceConstants {
    public static final String DIRECT_TAG = "direct";
    public static final String IAM_ID_TAG = "iam_id";
    private static final String IAM_TAG;
    public static final String INFLUENCE_CHANNEL = "influence_channel";
    public static final String INFLUENCE_IDS = "influence_ids";
    public static final String INFLUENCE_TYPE = "influence_type";
    public static final OSInfluenceConstants INSTANCE = new OSInfluenceConstants();
    public static final String NOTIFICATIONS_IDS = "notification_ids";
    public static final String NOTIFICATION_ID_TAG = "notification_id";
    private static final String NOTIFICATION_TAG;
    public static final String PREFS_OS_DIRECT_ENABLED = "PREFS_OS_DIRECT_ENABLED";
    public static final String PREFS_OS_IAM_INDIRECT_ATTRIBUTION_WINDOW = "PREFS_OS_IAM_INDIRECT_ATTRIBUTION_WINDOW";
    public static final String PREFS_OS_IAM_LIMIT = "PREFS_OS_IAM_LIMIT";
    public static final String PREFS_OS_INDIRECT_ENABLED = "PREFS_OS_INDIRECT_ENABLED";
    public static final String PREFS_OS_LAST_ATTRIBUTED_NOTIFICATION_OPEN = "PREFS_OS_LAST_ATTRIBUTED_NOTIFICATION_OPEN";
    public static final String PREFS_OS_LAST_IAMS_RECEIVED = "PREFS_OS_LAST_IAMS_RECEIVED";
    public static final String PREFS_OS_LAST_NOTIFICATIONS_RECEIVED = "PREFS_OS_LAST_NOTIFICATIONS_RECEIVED";
    public static final String PREFS_OS_NOTIFICATION_INDIRECT_ATTRIBUTION_WINDOW = "PREFS_OS_INDIRECT_ATTRIBUTION_WINDOW";
    public static final String PREFS_OS_NOTIFICATION_LIMIT = "PREFS_OS_NOTIFICATION_LIMIT";
    public static final String PREFS_OS_OUTCOMES_CURRENT_IAM_INFLUENCE = "PREFS_OS_OUTCOMES_CURRENT_IAM_INFLUENCE";
    public static final String PREFS_OS_OUTCOMES_CURRENT_NOTIFICATION_INFLUENCE = "PREFS_OS_OUTCOMES_CURRENT_SESSION";
    public static final String PREFS_OS_UNATTRIBUTED_ENABLED = "PREFS_OS_UNATTRIBUTED_ENABLED";
    public static final String TIME = "time";

    private OSInfluenceConstants() {
    }

    static {
        String canonicalName = OSInAppMessageTracker.class.getCanonicalName();
        if (canonicalName == null) {
            throw new NullPointerException("null cannot be cast to non-null type kotlin.String");
        }
        IAM_TAG = canonicalName;
        String canonicalName2 = OSNotificationTracker.class.getCanonicalName();
        if (canonicalName2 == null) {
            throw new NullPointerException("null cannot be cast to non-null type kotlin.String");
        }
        NOTIFICATION_TAG = canonicalName2;
    }

    public final String getIAM_TAG() {
        return IAM_TAG;
    }

    public final String getNOTIFICATION_TAG() {
        return NOTIFICATION_TAG;
    }
}

