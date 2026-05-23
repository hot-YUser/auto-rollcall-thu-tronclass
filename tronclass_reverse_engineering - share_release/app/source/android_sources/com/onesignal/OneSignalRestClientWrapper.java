package com.onesignal;

import com.onesignal.OneSignalRestClient;
import org.json.JSONObject;
class OneSignalRestClientWrapper implements OneSignalAPIClient {
    OneSignalRestClientWrapper() {
    }

    @Override // com.onesignal.OneSignalAPIClient
    public void put(String str, JSONObject jSONObject, final OneSignalApiResponseHandler oneSignalApiResponseHandler) {
        OneSignalRestClient.put(str, jSONObject, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OneSignalRestClientWrapper.1
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onSuccess(String str2) {
                oneSignalApiResponseHandler.onSuccess(str2);
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onFailure(int i, String str2, Throwable th) {
                oneSignalApiResponseHandler.onFailure(i, str2, th);
            }
        });
    }

    @Override // com.onesignal.OneSignalAPIClient
    public void post(String str, JSONObject jSONObject, final OneSignalApiResponseHandler oneSignalApiResponseHandler) {
        OneSignalRestClient.post(str, jSONObject, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OneSignalRestClientWrapper.2
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onSuccess(String str2) {
                oneSignalApiResponseHandler.onSuccess(str2);
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onFailure(int i, String str2, Throwable th) {
                oneSignalApiResponseHandler.onFailure(i, str2, th);
            }
        });
    }

    @Override // com.onesignal.OneSignalAPIClient
    public void get(String str, final OneSignalApiResponseHandler oneSignalApiResponseHandler, String str2) {
        OneSignalRestClient.get(str, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OneSignalRestClientWrapper.3
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onSuccess(String str3) {
                oneSignalApiResponseHandler.onSuccess(str3);
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onFailure(int i, String str3, Throwable th) {
                oneSignalApiResponseHandler.onFailure(i, str3, th);
            }
        }, str2);
    }

    @Override // com.onesignal.OneSignalAPIClient
    public void getSync(String str, final OneSignalApiResponseHandler oneSignalApiResponseHandler, String str2) {
        OneSignalRestClient.getSync(str, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OneSignalRestClientWrapper.4
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onSuccess(String str3) {
                oneSignalApiResponseHandler.onSuccess(str3);
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onFailure(int i, String str3, Throwable th) {
                oneSignalApiResponseHandler.onFailure(i, str3, th);
            }
        }, str2);
    }

    @Override // com.onesignal.OneSignalAPIClient
    public void putSync(String str, JSONObject jSONObject, final OneSignalApiResponseHandler oneSignalApiResponseHandler) {
        OneSignalRestClient.putSync(str, jSONObject, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OneSignalRestClientWrapper.5
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onSuccess(String str2) {
                oneSignalApiResponseHandler.onSuccess(str2);
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onFailure(int i, String str2, Throwable th) {
                oneSignalApiResponseHandler.onFailure(i, str2, th);
            }
        });
    }

    @Override // com.onesignal.OneSignalAPIClient
    public void postSync(String str, JSONObject jSONObject, final OneSignalApiResponseHandler oneSignalApiResponseHandler) {
        OneSignalRestClient.postSync(str, jSONObject, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.OneSignalRestClientWrapper.6
            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onSuccess(String str2) {
                oneSignalApiResponseHandler.onSuccess(str2);
            }

            @Override // com.onesignal.OneSignalRestClient.ResponseHandler
            public void onFailure(int i, String str2, Throwable th) {
                oneSignalApiResponseHandler.onFailure(i, str2, th);
            }
        });
    }
}

