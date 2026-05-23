package com.onesignal;

import android.content.Context;
import android.util.Base64;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.Tasks;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;
import com.onesignal.OneSignal;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.concurrent.ExecutionException;
class PushRegistratorFCM extends PushRegistratorAbstractGoogle {
    private static final String FCM_APP_NAME = "ONESIGNAL_SDK_FCM_APP_NAME";
    private final Context context;
    private FirebaseApp firebaseApp;
    private final Params params;

    static class Params {
        private static final String FCM_DEFAULT_API_KEY_BASE64 = "QUl6YVN5QW5UTG41LV80TWMyYTJQLWRLVWVFLWFCdGd5Q3JqbFlV";
        private static final String FCM_DEFAULT_APP_ID = "1:754795614042:android:c682b8144a8dd52bc1ad63";
        private static final String FCM_DEFAULT_PROJECT_ID = "onesignal-shared-public";
        private final String apiKey;
        private final String appId;
        private final String projectId;

        Params() {
            this(null, null, null);
        }

        Params(String str, String str2, String str3) {
            this.projectId = str == null ? FCM_DEFAULT_PROJECT_ID : str;
            this.appId = str2 == null ? FCM_DEFAULT_APP_ID : str2;
            this.apiKey = str3 == null ? new String(Base64.decode(FCM_DEFAULT_API_KEY_BASE64, 0)) : str3;
        }
    }

    PushRegistratorFCM(Context context, Params params) {
        this.context = context;
        if (params == null) {
            this.params = new Params();
        } else {
            this.params = params;
        }
    }

    @Override // com.onesignal.PushRegistratorAbstractGoogle
    String getProviderName() {
        return FirebaseMessaging.INSTANCE_ID_SCOPE;
    }

    @Override // com.onesignal.PushRegistratorAbstractGoogle
    String getToken(String str) throws Exception {
        initFirebaseApp(str);
        try {
            return getTokenWithClassFirebaseMessaging();
        } catch (NoClassDefFoundError | NoSuchMethodError unused) {
            OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "FirebaseMessaging.getToken not found, attempting to use FirebaseInstanceId.getToken");
            return getTokenWithClassFirebaseInstanceId(str);
        }
    }

    @Deprecated
    private String getTokenWithClassFirebaseInstanceId(String str) throws IOException {
        try {
            Object objInvoke = Class.forName("com.google.firebase.iid.FirebaseInstanceId").getMethod("getInstance", FirebaseApp.class).invoke(null, this.firebaseApp);
            return (String) objInvoke.getClass().getMethod("getToken", String.class, String.class).invoke(objInvoke, str, FirebaseMessaging.INSTANCE_ID_SCOPE);
        } catch (ClassNotFoundException | IllegalAccessException | NoSuchMethodException | InvocationTargetException e) {
            throw new Error("Reflection error on FirebaseInstanceId.getInstance(firebaseApp).getToken(senderId, FirebaseMessaging.INSTANCE_ID_SCOPE)", e);
        }
    }

    private String getTokenWithClassFirebaseMessaging() throws Exception {
        Task token = ((FirebaseMessaging) this.firebaseApp.get(FirebaseMessaging.class)).getToken();
        try {
            return (String) Tasks.await(token);
        } catch (ExecutionException unused) {
            throw token.getException();
        }
    }

    private void initFirebaseApp(String str) {
        if (this.firebaseApp != null) {
            return;
        }
        this.firebaseApp = FirebaseApp.initializeApp(this.context, new FirebaseOptions.Builder().setGcmSenderId(str).setApplicationId(this.params.appId).setApiKey(this.params.apiKey).setProjectId(this.params.projectId).build(), FCM_APP_NAME);
    }
}

