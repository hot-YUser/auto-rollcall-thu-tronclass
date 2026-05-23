package com.onesignal;

import android.content.Context;
import androidx.work.Configuration;
import androidx.work.WorkManager;
import com.onesignal.OneSignal;
import kotlin.Metadata;
import kotlin.jvm.JvmStatic;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\u0010\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0006H\u0007J\u0010\u0010\u0007\u001a\u00020\b2\u0006\u0010\u0005\u001a\u00020\u0006H\u0002¨\u0006\t"}, d2 = {"Lcom/onesignal/OSWorkManagerHelper;", "", "()V", "getInstance", "Landroidx/work/WorkManager;", "context", "Landroid/content/Context;", "initializeWorkManager", "", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class OSWorkManagerHelper {
    public static final OSWorkManagerHelper INSTANCE = new OSWorkManagerHelper();

    private OSWorkManagerHelper() {
    }

    @JvmStatic
    public static final synchronized WorkManager getInstance(Context context) {
        WorkManager workManager;
        Intrinsics.checkNotNullParameter(context, "context");
        try {
            workManager = WorkManager.getInstance(context);
            Intrinsics.checkNotNullExpressionValue(workManager, "{\n            WorkManage…stance(context)\n        }");
        } catch (IllegalStateException e) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "OSWorkManagerHelper.getInstance failed, attempting to initialize: ", e);
            INSTANCE.initializeWorkManager(context);
            workManager = WorkManager.getInstance(context);
            Intrinsics.checkNotNullExpressionValue(workManager, "{\n            /*\n       …stance(context)\n        }");
        }
        return workManager;
    }

    private final void initializeWorkManager(Context context) {
        try {
            Object applicationContext = context.getApplicationContext();
            Configuration workManagerConfiguration = null;
            Configuration.Provider provider = applicationContext instanceof Configuration.Provider ? (Configuration.Provider) applicationContext : null;
            if (provider != null) {
                workManagerConfiguration = provider.getWorkManagerConfiguration();
            }
            if (workManagerConfiguration == null) {
                workManagerConfiguration = new Configuration.Builder().build();
            }
            Intrinsics.checkNotNullExpressionValue(workManagerConfiguration, "(context.applicationCont…uration.Builder().build()");
            WorkManager.initialize(context, workManagerConfiguration);
        } catch (IllegalStateException e) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "OSWorkManagerHelper initializing WorkManager failed: ", e);
        }
    }
}

