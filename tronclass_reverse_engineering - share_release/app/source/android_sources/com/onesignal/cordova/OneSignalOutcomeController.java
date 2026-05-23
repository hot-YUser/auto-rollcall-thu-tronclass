package com.onesignal.cordova;

import android.util.Log;
import com.onesignal.OSOutcomeEvent;
import com.onesignal.OneSignal;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class OneSignalOutcomeController {
    private static final String TAG = "OneSignalOutcome";

    public static boolean sendUniqueOutcome(final CallbackContext callbackContext, JSONArray jSONArray) {
        try {
            final String string = jSONArray.getString(0);
            OneSignal.sendUniqueOutcome(string, new OneSignal.OutcomeCallback() { // from class: com.onesignal.cordova.OneSignalOutcomeController$$ExternalSyntheticLambda1
                @Override // com.onesignal.OneSignal.OutcomeCallback
                public final void onSuccess(OSOutcomeEvent oSOutcomeEvent) {
                    OneSignalOutcomeController.lambda$sendUniqueOutcome$0(callbackContext, string, oSOutcomeEvent);
                }
            });
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    static /* synthetic */ void lambda$sendUniqueOutcome$0(CallbackContext callbackContext, String str, OSOutcomeEvent oSOutcomeEvent) {
        if (oSOutcomeEvent == null) {
            CallbackHelper.callbackSuccess(callbackContext, new JSONObject());
            return;
        }
        try {
            CallbackHelper.callbackSuccess(callbackContext, oSOutcomeEvent.toJSONObject());
        } catch (JSONException e) {
            Log.e(TAG, "sendUniqueOutcome with name: " + str + ", failed with message: " + e.getMessage());
        }
    }

    public static boolean sendOutcome(final CallbackContext callbackContext, JSONArray jSONArray) {
        try {
            final String string = jSONArray.getString(0);
            OneSignal.sendOutcome(string, new OneSignal.OutcomeCallback() { // from class: com.onesignal.cordova.OneSignalOutcomeController$$ExternalSyntheticLambda0
                @Override // com.onesignal.OneSignal.OutcomeCallback
                public final void onSuccess(OSOutcomeEvent oSOutcomeEvent) {
                    OneSignalOutcomeController.lambda$sendOutcome$1(callbackContext, string, oSOutcomeEvent);
                }
            });
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    static /* synthetic */ void lambda$sendOutcome$1(CallbackContext callbackContext, String str, OSOutcomeEvent oSOutcomeEvent) {
        if (oSOutcomeEvent == null) {
            CallbackHelper.callbackSuccess(callbackContext, new JSONObject());
            return;
        }
        try {
            CallbackHelper.callbackSuccess(callbackContext, oSOutcomeEvent.toJSONObject());
        } catch (JSONException e) {
            Log.e(TAG, "sendOutcome with name: " + str + ", failed with message: " + e.getMessage());
        }
    }

    public static boolean sendOutcomeWithValue(final CallbackContext callbackContext, JSONArray jSONArray) {
        try {
            final String string = jSONArray.getString(0);
            final float fFloatValue = Double.valueOf(jSONArray.optDouble(1)).floatValue();
            OneSignal.sendOutcomeWithValue(string, fFloatValue, new OneSignal.OutcomeCallback() { // from class: com.onesignal.cordova.OneSignalOutcomeController$$ExternalSyntheticLambda2
                @Override // com.onesignal.OneSignal.OutcomeCallback
                public final void onSuccess(OSOutcomeEvent oSOutcomeEvent) {
                    OneSignalOutcomeController.lambda$sendOutcomeWithValue$2(callbackContext, string, fFloatValue, oSOutcomeEvent);
                }
            });
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    static /* synthetic */ void lambda$sendOutcomeWithValue$2(CallbackContext callbackContext, String str, float f, OSOutcomeEvent oSOutcomeEvent) {
        if (oSOutcomeEvent == null) {
            CallbackHelper.callbackSuccess(callbackContext, new JSONObject());
            return;
        }
        try {
            CallbackHelper.callbackSuccess(callbackContext, oSOutcomeEvent.toJSONObject());
        } catch (JSONException e) {
            Log.e(TAG, "sendOutcomeWithValue with name: " + str + " and value: " + f + ", failed with message: " + e.getMessage());
        }
    }
}

