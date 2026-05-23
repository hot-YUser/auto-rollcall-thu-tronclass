package com.onesignal;

import android.content.Context;
import com.onesignal.OneSignal;
import com.onesignal.PushRegistrator;
import java.io.IOException;
abstract class PushRegistratorAbstractGoogle implements PushRegistrator {
    private static int REGISTRATION_RETRY_BACKOFF_MS = 10000;
    private static int REGISTRATION_RETRY_COUNT = 5;
    private boolean firedCallback;
    private Thread registerThread;
    private PushRegistrator.RegisteredHandler registeredHandler;

    abstract String getProviderName();

    abstract String getToken(String str) throws Throwable;

    PushRegistratorAbstractGoogle() {
    }

    @Override // com.onesignal.PushRegistrator
    public void registerForPush(Context context, String str, PushRegistrator.RegisteredHandler registeredHandler) {
        this.registeredHandler = registeredHandler;
        if (isValidProjectNumber(str, registeredHandler)) {
            internalRegisterForPush(str);
        }
    }

    private void internalRegisterForPush(String str) {
        try {
            if (OSUtils.isGMSInstalledAndEnabled()) {
                registerInBackground(str);
            } else {
                GooglePlayServicesUpgradePrompt.showUpdateGPSDialog();
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "'Google Play services' app not installed or disabled on the device.");
                this.registeredHandler.complete(null, -7);
            }
        } catch (Throwable th) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Could not register with " + getProviderName() + " due to an issue with your AndroidManifest.xml or with 'Google Play services'.", th);
            this.registeredHandler.complete(null, -8);
        }
    }

    private synchronized void registerInBackground(final String str) {
        Thread thread = this.registerThread;
        if (thread == null || !thread.isAlive()) {
            Thread thread2 = new Thread(new Runnable() { // from class: com.onesignal.PushRegistratorAbstractGoogle.1
                @Override // java.lang.Runnable
                public void run() {
                    int i = 0;
                    while (i < PushRegistratorAbstractGoogle.REGISTRATION_RETRY_COUNT && !PushRegistratorAbstractGoogle.this.attemptRegistration(str, i)) {
                        i++;
                        OSUtils.sleep(PushRegistratorAbstractGoogle.REGISTRATION_RETRY_BACKOFF_MS * i);
                    }
                }
            });
            this.registerThread = thread2;
            thread2.start();
        }
    }
    public boolean attemptRegistration(String str, int i) {
        try {
            String token = getToken(str);
            OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "Device registered, push token = " + token);
            this.registeredHandler.complete(token, 1);
            return true;
        } catch (IOException e) {
            int iPushStatusFromThrowable = pushStatusFromThrowable(e);
            String rootCauseMessage = OSUtils.getRootCauseMessage(e);
            if (!"SERVICE_NOT_AVAILABLE".equals(rootCauseMessage) && !"AUTHENTICATION_FAILED".equals(rootCauseMessage)) {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Error Getting " + getProviderName() + " Token", new Exception(e));
                if (!this.firedCallback) {
                    this.registeredHandler.complete(null, iPushStatusFromThrowable);
                }
                return true;
            }
            Exception exc = new Exception(e);
            if (i >= REGISTRATION_RETRY_COUNT - 1) {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Retry count of " + REGISTRATION_RETRY_COUNT + " exceed! Could not get a " + getProviderName() + " Token.", exc);
                return false;
            }
            OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "'Google Play services' returned " + rootCauseMessage + " error. Current retry count: " + i, exc);
            if (i != 2) {
                return false;
            }
            this.registeredHandler.complete(null, iPushStatusFromThrowable);
            this.firedCallback = true;
            return true;
        } catch (Throwable th) {
            Exception exc2 = new Exception(th);
            int iPushStatusFromThrowable2 = pushStatusFromThrowable(th);
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Unknown error getting " + getProviderName() + " Token", exc2);
            this.registeredHandler.complete(null, iPushStatusFromThrowable2);
            return true;
        }
    }

    private static int pushStatusFromThrowable(Throwable th) {
        String rootCauseMessage = OSUtils.getRootCauseMessage(th);
        if (!(th instanceof IOException)) {
            return -12;
        }
        if ("SERVICE_NOT_AVAILABLE".equals(rootCauseMessage)) {
            return -9;
        }
        return "AUTHENTICATION_FAILED".equals(rootCauseMessage) ? -29 : -11;
    }

    private boolean isValidProjectNumber(String str, PushRegistrator.RegisteredHandler registeredHandler) {
        try {
            Float.parseFloat(str);
            return true;
        } catch (Throwable unused) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Missing Google Project number!\nPlease enter a Google Project number / Sender ID on under App Settings > Android > Configuration on the OneSignal dashboard.");
            registeredHandler.complete(null, -6);
            return false;
        }
    }
}

