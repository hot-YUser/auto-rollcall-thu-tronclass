package com.onesignal;

import android.content.ContentValues;
import android.database.Cursor;
import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import com.onesignal.OneSignalRestClient;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class OSInAppMessageRepository {
    static final long IAM_CACHE_DATA_LIFETIME = 15552000;
    static final String IAM_DATA_RESPONSE_RETRY_KEY = "retry";
    private final OneSignalDbHelper dbHelper;
    private int htmlNetworkRequestAttemptCount = 0;
    private final OSLogger logger;
    private final OSSharedPreferences sharedPreferences;

    interface OSInAppMessageRequestResponse {
        void onFailure(String str);

        void onSuccess(String str);
    }

    static /* synthetic */ int access$408(OSInAppMessageRepository oSInAppMessageRepository) {
        int i = oSInAppMessageRepository.htmlNetworkRequestAttemptCount;
        oSInAppMessageRepository.htmlNetworkRequestAttemptCount = i + 1;
        return i;
    }

    OSInAppMessageRepository(OneSignalDbHelper oneSignalDbHelper, OSLogger oSLogger, OSSharedPreferences oSSharedPreferences) {
        this.dbHelper = oneSignalDbHelper;
        this.logger = oSLogger;
        this.sharedPreferences = oSSharedPreferences;
    }

    void sendIAMClick(String str, String str2, String str3, int i, String str4, String str5, boolean z, final Set<String> set, final OSInAppMessageRequestResponse oSInAppMessageRequestResponse) {
        try {
            OneSignalRestClient.post("in_app_messages/" + str4 + "/click", new JSONObject(str, i, str2, str5, str3, z) { // from class: com.onesignal.OSInAppMessageRepository.1
                final /* synthetic */ String val$appId;
                final /* synthetic */ String val$clickId;
                final /* synthetic */ int val$deviceType;
                final /* synthetic */ boolean val$isFirstClick;
                final /* synthetic */ String val$userId;
                final /* synthetic */ String val$variantId;

                {
                    this.val$appId = str;
                    this.val$deviceType = i;
                    this.val$userId = str2;
                    this.val$clickId = str5;
                    this.val$variantId = str3;
                    this.val$isFirstClick = z;
                    put(OSOutcomeConstants.APP_ID, str);
                    put(OSOutcomeConstants.DEVICE_TYPE, i);
                    put("player_id", str2);
                    put("click_id", str5);
                    put("variant_id", str3);
                    if (z) {
                        put("first_click", true);
                    }
                }
            }, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OSInAppMessageRepository.2
                @Override // com.onesignal.OneSignalRestClient.ResponseHandler
                void onSuccess(String str6) {
                    OSInAppMessageRepository.this.printHttpSuccessForInAppMessageRequest("engagement", str6);
                    OSInAppMessageRepository.this.saveClickedMessagesId(set);
                }

                @Override // com.onesignal.OneSignalRestClient.ResponseHandler
                void onFailure(int i2, String str6, Throwable th) {
                    OSInAppMessageRepository.this.printHttpErrorForInAppMessageRequest("engagement", i2, str6);
                    oSInAppMessageRequestResponse.onFailure(str6);
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            this.logger.error("Unable to execute in-app message action HTTP request due to invalid JSON");
        }
    }

    void sendIAMPageImpression(String str, String str2, String str3, int i, String str4, String str5, final Set<String> set, final OSInAppMessageRequestResponse oSInAppMessageRequestResponse) {
        try {
            OneSignalRestClient.post("in_app_messages/" + str4 + "/pageImpression", new JSONObject(str, str2, str3, i, str5) { // from class: com.onesignal.OSInAppMessageRepository.3
                final /* synthetic */ String val$appId;
                final /* synthetic */ int val$deviceType;
                final /* synthetic */ String val$pageId;
                final /* synthetic */ String val$userId;
                final /* synthetic */ String val$variantId;

                {
                    this.val$appId = str;
                    this.val$userId = str2;
                    this.val$variantId = str3;
                    this.val$deviceType = i;
                    this.val$pageId = str5;
                    put(OSOutcomeConstants.APP_ID, str);
                    put("player_id", str2);
                    put("variant_id", str3);
                    put(OSOutcomeConstants.DEVICE_TYPE, i);
                    put("page_id", str5);
                }
            }, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OSInAppMessageRepository.4
                @Override // com.onesignal.OneSignalRestClient.ResponseHandler
                void onSuccess(String str6) {
                    OSInAppMessageRepository.this.printHttpSuccessForInAppMessageRequest("page impression", str6);
                    OSInAppMessageRepository.this.saveViewPageImpressionedIds(set);
                }

                @Override // com.onesignal.OneSignalRestClient.ResponseHandler
                void onFailure(int i2, String str6, Throwable th) {
                    OSInAppMessageRepository.this.printHttpErrorForInAppMessageRequest("page impression", i2, str6);
                    oSInAppMessageRequestResponse.onFailure(str6);
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            this.logger.error("Unable to execute in-app message impression HTTP request due to invalid JSON");
        }
    }

    void sendIAMImpression(String str, String str2, String str3, int i, String str4, final Set<String> set, final OSInAppMessageRequestResponse oSInAppMessageRequestResponse) {
        try {
            OneSignalRestClient.post("in_app_messages/" + str4 + "/impression", new JSONObject(str, str2, str3, i) { // from class: com.onesignal.OSInAppMessageRepository.5
                final /* synthetic */ String val$appId;
                final /* synthetic */ int val$deviceType;
                final /* synthetic */ String val$userId;
                final /* synthetic */ String val$variantId;

                {
                    this.val$appId = str;
                    this.val$userId = str2;
                    this.val$variantId = str3;
                    this.val$deviceType = i;
                    put(OSOutcomeConstants.APP_ID, str);
                    put("player_id", str2);
                    put("variant_id", str3);
                    put(OSOutcomeConstants.DEVICE_TYPE, i);
                    put("first_impression", true);
                }
            }, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OSInAppMessageRepository.6
                @Override // com.onesignal.OneSignalRestClient.ResponseHandler
                void onSuccess(String str5) {
                    OSInAppMessageRepository.this.printHttpSuccessForInAppMessageRequest("impression", str5);
                    OSInAppMessageRepository.this.saveImpressionedMessages(set);
                }

                @Override // com.onesignal.OneSignalRestClient.ResponseHandler
                void onFailure(int i2, String str5, Throwable th) {
                    OSInAppMessageRepository.this.printHttpErrorForInAppMessageRequest("impression", i2, str5);
                    oSInAppMessageRequestResponse.onFailure(str5);
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            this.logger.error("Unable to execute in-app message impression HTTP request due to invalid JSON");
        }
    }

    void getIAMPreviewData(String str, String str2, final OSInAppMessageRequestResponse oSInAppMessageRequestResponse) {
        OneSignalRestClient.get("in_app_messages/device_preview?preview_id=" + str2 + "&app_id=" + str, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OSInAppMessageRepository.7
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onFailure(int i, String str3, Throwable th) {
                OSInAppMessageRepository.this.printHttpErrorForInAppMessageRequest(OSInAppMessageContentKt.HTML, i, str3);
                oSInAppMessageRequestResponse.onFailure(str3);
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onSuccess(String str3) {
                oSInAppMessageRequestResponse.onSuccess(str3);
            }
        }, null);
    }

    void getIAMData(String str, String str2, String str3, final OSInAppMessageRequestResponse oSInAppMessageRequestResponse) {
        OneSignalRestClient.get(htmlPathForMessage(str2, str3, str), new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OSInAppMessageRepository.8
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onFailure(int i, String str4, Throwable th) {
                OSInAppMessageRepository.this.printHttpErrorForInAppMessageRequest(OSInAppMessageContentKt.HTML, i, str4);
                JSONObject jSONObject = new JSONObject();
                if (!OSUtils.shouldRetryNetworkRequest(i) || OSInAppMessageRepository.this.htmlNetworkRequestAttemptCount >= OSUtils.MAX_NETWORK_REQUEST_ATTEMPT_COUNT) {
                    OSInAppMessageRepository.this.htmlNetworkRequestAttemptCount = 0;
                    try {
                        jSONObject.put(OSInAppMessageRepository.IAM_DATA_RESPONSE_RETRY_KEY, false);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                } else {
                    OSInAppMessageRepository.access$408(OSInAppMessageRepository.this);
                    try {
                        jSONObject.put(OSInAppMessageRepository.IAM_DATA_RESPONSE_RETRY_KEY, true);
                    } catch (JSONException e2) {
                        e2.printStackTrace();
                    }
                }
                oSInAppMessageRequestResponse.onFailure(jSONObject.toString());
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            void onSuccess(String str4) {
                OSInAppMessageRepository.this.htmlNetworkRequestAttemptCount = 0;
                oSInAppMessageRequestResponse.onSuccess(str4);
            }
        }, null);
    }

    synchronized void saveInAppMessage(OSInAppMessageInternal oSInAppMessageInternal) {
        ContentValues contentValues = new ContentValues();
        contentValues.put(OneSignalDbContract.InAppMessageTable.COLUMN_NAME_MESSAGE_ID, oSInAppMessageInternal.messageId);
        contentValues.put(OneSignalDbContract.InAppMessageTable.COLUMN_NAME_DISPLAY_QUANTITY, Integer.valueOf(oSInAppMessageInternal.getRedisplayStats().getDisplayQuantity()));
        contentValues.put(OneSignalDbContract.InAppMessageTable.COLUMN_NAME_LAST_DISPLAY, Long.valueOf(oSInAppMessageInternal.getRedisplayStats().getLastDisplayTime()));
        contentValues.put(OneSignalDbContract.InAppMessageTable.COLUMN_CLICK_IDS, oSInAppMessageInternal.getClickedClickIds().toString());
        contentValues.put(OneSignalDbContract.InAppMessageTable.COLUMN_DISPLAYED_IN_SESSION, Boolean.valueOf(oSInAppMessageInternal.isDisplayedInSession()));
        if (this.dbHelper.update(OneSignalDbContract.InAppMessageTable.TABLE_NAME, contentValues, "message_id = ?", new String[]{oSInAppMessageInternal.messageId}) == 0) {
            this.dbHelper.insert(OneSignalDbContract.InAppMessageTable.TABLE_NAME, null, contentValues);
        }
    }

    synchronized List<OSInAppMessageInternal> getCachedInAppMessages() {
        ArrayList arrayList;
        arrayList = new ArrayList();
        Cursor cursorQuery = null;
        try {
            try {
                cursorQuery = this.dbHelper.query(OneSignalDbContract.InAppMessageTable.TABLE_NAME, null, null, null, null, null, null);
                if (cursorQuery.moveToFirst()) {
                    do {
                        String string = cursorQuery.getString(cursorQuery.getColumnIndex(OneSignalDbContract.InAppMessageTable.COLUMN_NAME_MESSAGE_ID));
                        String string2 = cursorQuery.getString(cursorQuery.getColumnIndex(OneSignalDbContract.InAppMessageTable.COLUMN_CLICK_IDS));
                        int i = cursorQuery.getInt(cursorQuery.getColumnIndex(OneSignalDbContract.InAppMessageTable.COLUMN_NAME_DISPLAY_QUANTITY));
                        long j = cursorQuery.getLong(cursorQuery.getColumnIndex(OneSignalDbContract.InAppMessageTable.COLUMN_NAME_LAST_DISPLAY));
                        boolean z = true;
                        if (cursorQuery.getInt(cursorQuery.getColumnIndex(OneSignalDbContract.InAppMessageTable.COLUMN_DISPLAYED_IN_SESSION)) != 1) {
                            z = false;
                        }
                        arrayList.add(new OSInAppMessageInternal(string, OSUtils.newStringSetFromJSONArray(new JSONArray(string2)), z, new OSInAppMessageRedisplayStats(i, j)));
                    } while (cursorQuery.moveToNext());
                }
            } catch (JSONException e) {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Generating JSONArray from iam click ids:JSON Failed.", e);
                if (cursorQuery != null && !cursorQuery.isClosed()) {
                }
            }
        } finally {
            if (cursorQuery != null && !cursorQuery.isClosed()) {
                cursorQuery.close();
            }
        }
        return arrayList;
    }

    synchronized void cleanCachedInAppMessages() {
        String[] strArr = {OneSignalDbContract.InAppMessageTable.COLUMN_NAME_MESSAGE_ID, OneSignalDbContract.InAppMessageTable.COLUMN_CLICK_IDS};
        String[] strArr2 = {String.valueOf((System.currentTimeMillis() / 1000) - IAM_CACHE_DATA_LIFETIME)};
        Set<String> setNewConcurrentSet = OSUtils.newConcurrentSet();
        Set<String> setNewConcurrentSet2 = OSUtils.newConcurrentSet();
        Cursor cursorQuery = null;
        try {
            try {
                cursorQuery = this.dbHelper.query(OneSignalDbContract.InAppMessageTable.TABLE_NAME, strArr, "last_display < ?", strArr2, null, null, null);
            } catch (JSONException e) {
                e.printStackTrace();
                if (0 != 0 && !cursorQuery.isClosed()) {
                }
            }
            if (cursorQuery != null && cursorQuery.getCount() != 0) {
                if (cursorQuery.moveToFirst()) {
                    do {
                        String string = cursorQuery.getString(cursorQuery.getColumnIndex(OneSignalDbContract.InAppMessageTable.COLUMN_NAME_MESSAGE_ID));
                        String string2 = cursorQuery.getString(cursorQuery.getColumnIndex(OneSignalDbContract.InAppMessageTable.COLUMN_CLICK_IDS));
                        setNewConcurrentSet.add(string);
                        setNewConcurrentSet2.addAll(OSUtils.newStringSetFromJSONArray(new JSONArray(string2)));
                    } while (cursorQuery.moveToNext());
                }
                if (cursorQuery != null && !cursorQuery.isClosed()) {
                    cursorQuery.close();
                }
                this.dbHelper.delete(OneSignalDbContract.InAppMessageTable.TABLE_NAME, "last_display < ?", strArr2);
                cleanInAppMessageIds(setNewConcurrentSet);
                cleanInAppMessageClickedClickIds(setNewConcurrentSet2);
                return;
            }
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "Attempted to clean 6 month old IAM data, but none exists!");
        } finally {
            if (0 != 0 && !cursorQuery.isClosed()) {
                cursorQuery.close();
            }
        }
    }

    private void cleanInAppMessageIds(Set<String> set) {
        if (set == null || set.size() <= 0) {
            return;
        }
        Set<String> stringSet = OneSignalPrefs.getStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_DISMISSED_IAMS, null);
        Set<String> stringSet2 = OneSignalPrefs.getStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_IMPRESSIONED_IAMS, null);
        if (stringSet != null && stringSet.size() > 0) {
            stringSet.removeAll(set);
            OneSignalPrefs.saveStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_DISMISSED_IAMS, stringSet);
        }
        if (stringSet2 == null || stringSet2.size() <= 0) {
            return;
        }
        stringSet2.removeAll(set);
        OneSignalPrefs.saveStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_IMPRESSIONED_IAMS, stringSet2);
    }

    private void cleanInAppMessageClickedClickIds(Set<String> set) {
        Set<String> stringSet;
        if (set == null || set.size() <= 0 || (stringSet = OneSignalPrefs.getStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_CLICKED_CLICK_IDS_IAMS, null)) == null || stringSet.size() <= 0) {
            return;
        }
        stringSet.removeAll(set);
        OneSignalPrefs.saveStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_CLICKED_CLICK_IDS_IAMS, stringSet);
    }

    private String htmlPathForMessage(String str, String str2, String str3) {
        if (str2 == null) {
            this.logger.error("Unable to find a variant for in-app message " + str);
            return null;
        }
        return "in_app_messages/" + str + "/variants/" + str2 + "/html?app_id=" + str3;
    }

    Set<String> getClickedMessagesId() {
        return this.sharedPreferences.getStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_CLICKED_CLICK_IDS_IAMS, null);
    }
    public void saveClickedMessagesId(Set<String> set) {
        this.sharedPreferences.saveStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_CLICKED_CLICK_IDS_IAMS, set);
    }

    Set<String> getImpressionesMessagesId() {
        return this.sharedPreferences.getStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_IMPRESSIONED_IAMS, null);
    }
    public void saveImpressionedMessages(Set<String> set) {
        this.sharedPreferences.saveStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_IMPRESSIONED_IAMS, set);
    }

    Set<String> getViewPageImpressionedIds() {
        return this.sharedPreferences.getStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_PAGE_IMPRESSIONED_IAMS, null);
    }

    void saveViewPageImpressionedIds(Set<String> set) {
        this.sharedPreferences.saveStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_PAGE_IMPRESSIONED_IAMS, set);
    }

    Set<String> getDismissedMessagesId() {
        return this.sharedPreferences.getStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_DISMISSED_IAMS, null);
    }

    void saveDismissedMessagesId(Set<String> set) {
        this.sharedPreferences.saveStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_DISMISSED_IAMS, set);
    }

    String getSavedIAMs() {
        return this.sharedPreferences.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_CACHED_IAMS, null);
    }

    void saveIAMs(String str) {
        this.sharedPreferences.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_CACHED_IAMS, str);
    }

    void saveLastTimeInAppDismissed(Date date) {
        this.sharedPreferences.saveString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_LAST_TIME_IAM_DISMISSED, date != null ? date.toString() : null);
    }

    Date getLastTimeInAppDismissed() {
        String string = this.sharedPreferences.getString(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_LAST_TIME_IAM_DISMISSED, null);
        if (string == null) {
            return null;
        }
        try {
            return new SimpleDateFormat("EEE MMM dd HH:mm:ss zzz yyyy", Locale.ENGLISH).parse(string);
        } catch (ParseException e) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.ERROR, e.getLocalizedMessage());
            return null;
        }
    }
    public void printHttpSuccessForInAppMessageRequest(String str, String str2) {
        this.logger.debug("Successful post for in-app message " + str + " request: " + str2);
    }
    public void printHttpErrorForInAppMessageRequest(String str, int i, String str2) {
        this.logger.error("Encountered a " + i + " error while attempting in-app message " + str + " request: " + str2);
    }
}

