package com.onesignal;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.os.DeadSystemException;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\u0018\u0000 \u00032\u00020\u0001:\u0001\u0003B\u0005¢\u0006\u0002\u0010\u0002¨\u0006\u0004"}, d2 = {"Lcom/onesignal/ApplicationInfoHelper;", "", "()V", "Companion", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class ApplicationInfoHelper {
    public static final Companion INSTANCE = new Companion(null);
    private static ApplicationInfo cachedInfo;
    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\u0012\u0010\u0005\u001a\u0004\u0018\u00010\u00042\u0006\u0010\u0006\u001a\u00020\u0007H\u0007R\u0010\u0010\u0003\u001a\u0004\u0018\u00010\u0004X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"Lcom/onesignal/ApplicationInfoHelper$Companion;", "", "()V", "cachedInfo", "Landroid/content/pm/ApplicationInfo;", "getInfo", "context", "Landroid/content/Context;", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }

        public final ApplicationInfo getInfo(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            if (ApplicationInfoHelper.cachedInfo != null) {
                return ApplicationInfoHelper.cachedInfo;
            }
            try {
                ApplicationInfoHelper.cachedInfo = context.getPackageManager().getApplicationInfo(context.getPackageName(), 128);
                return ApplicationInfoHelper.cachedInfo;
            } catch (RuntimeException e) {
                if (!(e.getCause() instanceof DeadSystemException)) {
                    throw e;
                }
                return null;
            }
        }
    }
}

