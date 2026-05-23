package com.onesignal.influence.data;

import com.onesignal.OSSharedPreferences;
import com.onesignal.OneSignalRemoteParams;
import com.onesignal.influence.OSInfluenceConstants;
import com.onesignal.influence.domain.OSInfluenceType;
import com.onesignal.outcomes.OSOutcomeConstants;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONArray;
import org.json.JSONException;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\u000e\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020\nJ\u000e\u0010'\u001a\u00020%2\u0006\u0010&\u001a\u00020\nJ\u0010\u0010(\u001a\u00020%2\b\u0010)\u001a\u0004\u0018\u00010\u0006J\u000e\u0010*\u001a\u00020%2\u0006\u0010+\u001a\u00020\u0019J\u000e\u0010,\u001a\u00020%2\u0006\u0010-\u001a\u00020.J\u000e\u0010/\u001a\u00020%2\u0006\u00100\u001a\u00020\u0019R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u00068F¢\u0006\u0006\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\t\u001a\u00020\n8F¢\u0006\u0006\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\r\u001a\u00020\u000e8F¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0011\u001a\u00020\u000e8F¢\u0006\u0006\u001a\u0004\b\u0012\u0010\u0010R\u0011\u0010\u0013\u001a\u00020\u00148F¢\u0006\u0006\u001a\u0004\b\u0013\u0010\u0015R\u0011\u0010\u0016\u001a\u00020\u00148F¢\u0006\u0006\u001a\u0004\b\u0016\u0010\u0015R\u0011\u0010\u0017\u001a\u00020\u00148F¢\u0006\u0006\u001a\u0004\b\u0017\u0010\u0015R\u0011\u0010\u0018\u001a\u00020\u00198F¢\u0006\u0006\u001a\u0004\b\u001a\u0010\u001bR\u0011\u0010\u001c\u001a\u00020\u00198F¢\u0006\u0006\u001a\u0004\b\u001d\u0010\u001bR\u0011\u0010\u001e\u001a\u00020\n8F¢\u0006\u0006\u001a\u0004\b\u001f\u0010\fR\u0011\u0010 \u001a\u00020\u000e8F¢\u0006\u0006\u001a\u0004\b!\u0010\u0010R\u0011\u0010\"\u001a\u00020\u000e8F¢\u0006\u0006\u001a\u0004\b#\u0010\u0010R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u00061"}, d2 = {"Lcom/onesignal/influence/data/OSInfluenceDataRepository;", "", "preferences", "Lcom/onesignal/OSSharedPreferences;", "(Lcom/onesignal/OSSharedPreferences;)V", "cachedNotificationOpenId", "", "getCachedNotificationOpenId", "()Ljava/lang/String;", "iamCachedInfluenceType", "Lcom/onesignal/influence/domain/OSInfluenceType;", "getIamCachedInfluenceType", "()Lcom/onesignal/influence/domain/OSInfluenceType;", "iamIndirectAttributionWindow", "", "getIamIndirectAttributionWindow", "()I", "iamLimit", "getIamLimit", "isDirectInfluenceEnabled", "", "()Z", "isIndirectInfluenceEnabled", "isUnattributedInfluenceEnabled", "lastIAMsReceivedData", "Lorg/json/JSONArray;", "getLastIAMsReceivedData", "()Lorg/json/JSONArray;", "lastNotificationsReceivedData", "getLastNotificationsReceivedData", "notificationCachedInfluenceType", "getNotificationCachedInfluenceType", "notificationIndirectAttributionWindow", "getNotificationIndirectAttributionWindow", "notificationLimit", "getNotificationLimit", "cacheIAMInfluenceType", "", "influenceType", "cacheNotificationInfluenceType", "cacheNotificationOpenId", OSOutcomeConstants.OUTCOME_ID, "saveIAMs", "iams", "saveInfluenceParams", "influenceParams", "Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;", "saveNotifications", "notifications", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class OSInfluenceDataRepository {
    private final OSSharedPreferences preferences;

    public OSInfluenceDataRepository(OSSharedPreferences preferences) {
        Intrinsics.checkNotNullParameter(preferences, "preferences");
        this.preferences = preferences;
    }

    public final void cacheNotificationInfluenceType(OSInfluenceType influenceType) {
        Intrinsics.checkNotNullParameter(influenceType, "influenceType");
        OSSharedPreferences oSSharedPreferences = this.preferences;
        oSSharedPreferences.saveString(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_OUTCOMES_CURRENT_NOTIFICATION_INFLUENCE, influenceType.toString());
    }

    public final OSInfluenceType getNotificationCachedInfluenceType() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return OSInfluenceType.INSTANCE.fromString(oSSharedPreferences.getString(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_OUTCOMES_CURRENT_NOTIFICATION_INFLUENCE, OSInfluenceType.UNATTRIBUTED.toString()));
    }

    public final void cacheIAMInfluenceType(OSInfluenceType influenceType) {
        Intrinsics.checkNotNullParameter(influenceType, "influenceType");
        OSSharedPreferences oSSharedPreferences = this.preferences;
        oSSharedPreferences.saveString(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_OUTCOMES_CURRENT_IAM_INFLUENCE, influenceType.toString());
    }

    public final OSInfluenceType getIamCachedInfluenceType() {
        String string = OSInfluenceType.UNATTRIBUTED.toString();
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return OSInfluenceType.INSTANCE.fromString(oSSharedPreferences.getString(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_OUTCOMES_CURRENT_IAM_INFLUENCE, string));
    }

    public final void cacheNotificationOpenId(String id) {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        oSSharedPreferences.saveString(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_LAST_ATTRIBUTED_NOTIFICATION_OPEN, id);
    }

    public final String getCachedNotificationOpenId() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return oSSharedPreferences.getString(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_LAST_ATTRIBUTED_NOTIFICATION_OPEN, null);
    }

    public final void saveNotifications(JSONArray notifications) {
        Intrinsics.checkNotNullParameter(notifications, "notifications");
        OSSharedPreferences oSSharedPreferences = this.preferences;
        oSSharedPreferences.saveString(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_LAST_NOTIFICATIONS_RECEIVED, notifications.toString());
    }

    public final void saveIAMs(JSONArray iams) {
        Intrinsics.checkNotNullParameter(iams, "iams");
        OSSharedPreferences oSSharedPreferences = this.preferences;
        oSSharedPreferences.saveString(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_LAST_IAMS_RECEIVED, iams.toString());
    }

    public final JSONArray getLastNotificationsReceivedData() throws JSONException {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        String string = oSSharedPreferences.getString(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_LAST_NOTIFICATIONS_RECEIVED, "[]");
        JSONArray jSONArray = string == null ? null : new JSONArray(string);
        return jSONArray == null ? new JSONArray() : jSONArray;
    }

    public final JSONArray getLastIAMsReceivedData() throws JSONException {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        String string = oSSharedPreferences.getString(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_LAST_IAMS_RECEIVED, "[]");
        JSONArray jSONArray = string == null ? null : new JSONArray(string);
        return jSONArray == null ? new JSONArray() : jSONArray;
    }

    public final int getNotificationLimit() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return oSSharedPreferences.getInt(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_NOTIFICATION_LIMIT, 10);
    }

    public final int getIamLimit() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return oSSharedPreferences.getInt(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_IAM_LIMIT, 10);
    }

    public final int getNotificationIndirectAttributionWindow() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return oSSharedPreferences.getInt(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_NOTIFICATION_INDIRECT_ATTRIBUTION_WINDOW, OneSignalRemoteParams.DEFAULT_INDIRECT_ATTRIBUTION_WINDOW);
    }

    public final int getIamIndirectAttributionWindow() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return oSSharedPreferences.getInt(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_IAM_INDIRECT_ATTRIBUTION_WINDOW, OneSignalRemoteParams.DEFAULT_INDIRECT_ATTRIBUTION_WINDOW);
    }

    public final boolean isDirectInfluenceEnabled() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return oSSharedPreferences.getBool(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_DIRECT_ENABLED, false);
    }

    public final boolean isIndirectInfluenceEnabled() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return oSSharedPreferences.getBool(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_INDIRECT_ENABLED, false);
    }

    public final boolean isUnattributedInfluenceEnabled() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return oSSharedPreferences.getBool(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_UNATTRIBUTED_ENABLED, false);
    }

    public final void saveInfluenceParams(OneSignalRemoteParams.InfluenceParams influenceParams) {
        Intrinsics.checkNotNullParameter(influenceParams, "influenceParams");
        OSSharedPreferences oSSharedPreferences = this.preferences;
        oSSharedPreferences.saveBool(oSSharedPreferences.getPreferencesName(), OSInfluenceConstants.PREFS_OS_DIRECT_ENABLED, influenceParams.isDirectEnabled());
        OSSharedPreferences oSSharedPreferences2 = this.preferences;
        oSSharedPreferences2.saveBool(oSSharedPreferences2.getPreferencesName(), OSInfluenceConstants.PREFS_OS_INDIRECT_ENABLED, influenceParams.isIndirectEnabled());
        OSSharedPreferences oSSharedPreferences3 = this.preferences;
        oSSharedPreferences3.saveBool(oSSharedPreferences3.getPreferencesName(), OSInfluenceConstants.PREFS_OS_UNATTRIBUTED_ENABLED, influenceParams.isUnattributedEnabled());
        OSSharedPreferences oSSharedPreferences4 = this.preferences;
        oSSharedPreferences4.saveInt(oSSharedPreferences4.getPreferencesName(), OSInfluenceConstants.PREFS_OS_NOTIFICATION_LIMIT, influenceParams.getNotificationLimit());
        OSSharedPreferences oSSharedPreferences5 = this.preferences;
        oSSharedPreferences5.saveInt(oSSharedPreferences5.getPreferencesName(), OSInfluenceConstants.PREFS_OS_NOTIFICATION_INDIRECT_ATTRIBUTION_WINDOW, influenceParams.getIndirectNotificationAttributionWindow());
        OSSharedPreferences oSSharedPreferences6 = this.preferences;
        oSSharedPreferences6.saveInt(oSSharedPreferences6.getPreferencesName(), OSInfluenceConstants.PREFS_OS_IAM_LIMIT, influenceParams.getIamLimit());
        OSSharedPreferences oSSharedPreferences7 = this.preferences;
        oSSharedPreferences7.saveInt(oSSharedPreferences7.getPreferencesName(), OSInfluenceConstants.PREFS_OS_IAM_INDIRECT_ATTRIBUTION_WINDOW, influenceParams.getIndirectIAMAttributionWindow());
    }
}

