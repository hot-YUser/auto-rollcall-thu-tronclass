package com.onesignal;

import android.content.ComponentName;
import android.net.Uri;
import androidx.browser.customtabs.CustomTabsClient;
import androidx.browser.customtabs.CustomTabsIntent;
import androidx.browser.customtabs.CustomTabsServiceConnection;
import androidx.browser.customtabs.CustomTabsSession;
import com.getcapacitor.plugin.Browser;
class OneSignalChromeTab {
    OneSignalChromeTab() {
    }

    private static boolean hasChromeTabLibrary() {
        return true;
    }

    protected static boolean open(String str, boolean z) {
        if (!hasChromeTabLibrary()) {
            return false;
        }
        return CustomTabsClient.bindCustomTabsService(OneSignal.appContext, Browser.CUSTOM_TAB_PACKAGE_NAME, new OneSignalCustomTabsServiceConnection(str, z));
    }

    private static class OneSignalCustomTabsServiceConnection extends CustomTabsServiceConnection {
        private boolean openActivity;
        private String url;

        @Override // android.content.ServiceConnection
        public void onServiceDisconnected(ComponentName componentName) {
        }

        OneSignalCustomTabsServiceConnection(String str, boolean z) {
            this.url = str;
            this.openActivity = z;
        }

        @Override // androidx.browser.customtabs.CustomTabsServiceConnection
        public void onCustomTabsServiceConnected(ComponentName componentName, CustomTabsClient customTabsClient) {
            customTabsClient.warmup(0L);
            CustomTabsSession customTabsSessionNewSession = customTabsClient.newSession(null);
            if (customTabsSessionNewSession == null) {
                return;
            }
            Uri uri = Uri.parse(this.url);
            customTabsSessionNewSession.mayLaunchUrl(uri, null, null);
            if (this.openActivity) {
                CustomTabsIntent customTabsIntentBuild = new CustomTabsIntent.Builder(customTabsSessionNewSession).build();
                customTabsIntentBuild.intent.setData(uri);
                customTabsIntentBuild.intent.addFlags(268435456);
                OneSignal.appContext.startActivity(customTabsIntentBuild.intent, customTabsIntentBuild.startAnimationBundle);
            }
        }
    }
}

