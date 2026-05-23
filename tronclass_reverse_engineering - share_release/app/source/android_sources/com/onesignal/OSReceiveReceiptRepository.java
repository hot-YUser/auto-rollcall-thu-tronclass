package com.onesignal;

import com.onesignal.OneSignal;
import com.onesignal.OneSignalRestClient;
import org.json.JSONException;
import org.json.JSONObject;
class OSReceiveReceiptRepository {
    private static final String APP_ID = "app_id";
    private static final String DEVICE_TYPE = "device_type";
    private static final String PLAYER_ID = "player_id";

    OSReceiveReceiptRepository() {
    }

    void sendReceiveReceipt(String str, String str2, Integer num, String str3, OneSignalRestClient.ResponseHandler responseHandler) {
        try {
            JSONObject jSONObjectPut = new JSONObject().put("app_id", str).put(PLAYER_ID, str2);
            if (num != null) {
                jSONObjectPut.put("device_type", num);
            }
            OneSignalRestClient.put("notifications/" + str3 + "/report_received", jSONObjectPut, responseHandler);
        } catch (JSONException e) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Generating direct receive receipt:JSON Failed.", e);
        }
    }
}

