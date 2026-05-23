package com.onesignal;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\u000e\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006¨\u0006\u0007"}, d2 = {"Lcom/onesignal/NavigateToAndroidSettingsForLocation;", "", "()V", "show", "", "context", "Landroid/content/Context;", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class NavigateToAndroidSettingsForLocation {
    public static final NavigateToAndroidSettingsForLocation INSTANCE = new NavigateToAndroidSettingsForLocation();

    private NavigateToAndroidSettingsForLocation() {
    }

    public final void show(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intent intent = new Intent("android.settings.APPLICATION_DETAILS_SETTINGS");
        intent.setData(Uri.parse(Intrinsics.stringPlus("package:", context.getPackageName())));
        context.startActivity(intent);
    }
}

