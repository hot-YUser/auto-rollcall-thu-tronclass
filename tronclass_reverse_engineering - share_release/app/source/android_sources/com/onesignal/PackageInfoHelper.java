package com.onesignal;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.DeadSystemException;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\u0018\u0000 \u00032\u00020\u0001:\u0001\u0003B\u0005¢\u0006\u0002\u0010\u0002¨\u0006\u0004"}, d2 = {"Lcom/onesignal/PackageInfoHelper;", "", "()V", "Companion", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class PackageInfoHelper {
    public static final Companion INSTANCE = new Companion(null);
    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J \u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\nH\u0007¨\u0006\u000b"}, d2 = {"Lcom/onesignal/PackageInfoHelper$Companion;", "", "()V", "getInfo", "Lcom/onesignal/GetPackageInfoResult;", "appContext", "Landroid/content/Context;", "packageName", "", "flags", "", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }

        public final GetPackageInfoResult getInfo(Context appContext, String packageName, int flags) {
            Intrinsics.checkNotNullParameter(appContext, "appContext");
            Intrinsics.checkNotNullParameter(packageName, "packageName");
            try {
                return new GetPackageInfoResult(true, appContext.getPackageManager().getPackageInfo(packageName, flags));
            } catch (PackageManager.NameNotFoundException unused) {
                return new GetPackageInfoResult(true, null);
            } catch (RuntimeException e) {
                if (e.getCause() instanceof DeadSystemException) {
                    return new GetPackageInfoResult(false, null);
                }
                throw e;
            }
        }
    }
}

