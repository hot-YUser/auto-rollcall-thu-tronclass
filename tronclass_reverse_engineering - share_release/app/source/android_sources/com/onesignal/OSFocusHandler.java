package com.onesignal;

import android.content.Context;
import androidx.work.Constraints;
import androidx.work.ExistingWorkPolicy;
import androidx.work.ListenableWorker;
import androidx.work.NetworkType;
import androidx.work.OneTimeWorkRequest;
import androidx.work.Worker;
import androidx.work.WorkerParameters;
import com.onesignal.OneSignal;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0010\t\n\u0002\b\u0005\u0018\u0000 \u00182\u00020\u0001:\u0002\u0018\u0019B\u0005¢\u0006\u0002\u0010\u0002J\b\u0010\u0005\u001a\u00020\u0006H\u0002J\u0016\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\fJ\u0006\u0010\r\u001a\u00020\u000eJ\u0006\u0010\u000f\u001a\u00020\u000eJ\b\u0010\u0010\u001a\u00020\bH\u0002J\b\u0010\u0011\u001a\u00020\bH\u0002J\u0006\u0010\u0012\u001a\u00020\bJ\u001e\u0010\u0013\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u000b\u001a\u00020\fJ\u0006\u0010\u0016\u001a\u00020\bJ\u0006\u0010\u0017\u001a\u00020\bR\u0010\u0010\u0003\u001a\u0004\u0018\u00010\u0004X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001a"}, d2 = {"Lcom/onesignal/OSFocusHandler;", "", "()V", "stopRunnable", "Ljava/lang/Runnable;", "buildConstraints", "Landroidx/work/Constraints;", "cancelOnLostFocusWorker", "", "tag", "", "context", "Landroid/content/Context;", "hasBackgrounded", "", "hasCompleted", "resetBackgroundState", "resetStopState", "startOnFocusWork", "startOnLostFocusWorker", "delay", "", "startOnStartFocusWork", "startOnStopFocusWork", "Companion", "OnLostFocusWorker", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class OSFocusHandler {
    public static final Companion INSTANCE = new Companion(null);
    private static boolean backgrounded = false;
    private static boolean completed = false;
    private static final long stopDelay = 1500;
    private static boolean stopped;
    private Runnable stopRunnable;

    public final boolean hasBackgrounded() {
        return backgrounded;
    }

    public final boolean hasCompleted() {
        return completed;
    }

    public final void startOnFocusWork() {
        resetBackgroundState();
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "OSFocusHandler running onAppFocus");
        OneSignal.onAppFocus();
    }

    public final void startOnStartFocusWork() {
        if (stopped) {
            stopped = false;
            this.stopRunnable = null;
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "OSFocusHandler running onAppStartFocusLogic");
            OneSignal.onAppStartFocusLogic();
            return;
        }
        resetStopState();
    }

    public final void startOnStopFocusWork() {
        Runnable runnable = new Runnable() { // from class: com.onesignal.OSFocusHandler$$ExternalSyntheticLambda0
            @Override // java.lang.Runnable
            public final void run() {
                OSFocusHandler.m320startOnStopFocusWork$lambda0();
            }
        };
        OSTimeoutHandler.getTimeoutHandler().startTimeout(stopDelay, runnable);
        Unit unit = Unit.INSTANCE;
        this.stopRunnable = runnable;
    }
    public static final void m320startOnStopFocusWork$lambda0() {
        stopped = true;
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "OSFocusHandler setting stop state: true");
    }

    public final void startOnLostFocusWorker(String tag, long delay, Context context) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(context, "context");
        OneTimeWorkRequest oneTimeWorkRequestBuild = new OneTimeWorkRequest.Builder(OnLostFocusWorker.class).setConstraints(buildConstraints()).setInitialDelay(delay, TimeUnit.MILLISECONDS).addTag(tag).build();
        Intrinsics.checkNotNullExpressionValue(oneTimeWorkRequestBuild, "Builder(OnLostFocusWorke…tag)\n            .build()");
        OSWorkManagerHelper.getInstance(context).enqueueUniqueWork(tag, ExistingWorkPolicy.KEEP, oneTimeWorkRequestBuild);
    }

    public final void cancelOnLostFocusWorker(String tag, Context context) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(context, "context");
        OSWorkManagerHelper.getInstance(context).cancelAllWorkByTag(tag);
    }

    private final void resetStopState() {
        stopped = false;
        Runnable runnable = this.stopRunnable;
        if (runnable == null) {
            return;
        }
        OSTimeoutHandler.getTimeoutHandler().destroyTimeout(runnable);
    }

    private final void resetBackgroundState() {
        resetStopState();
        backgrounded = false;
    }

    private final Constraints buildConstraints() {
        Constraints constraintsBuild = new Constraints.Builder().setRequiredNetworkType(NetworkType.CONNECTED).build();
        Intrinsics.checkNotNullExpressionValue(constraintsBuild, "Builder()\n            .s…TED)\n            .build()");
        return constraintsBuild;
    }
    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u0015\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0002\u0010\u0006J\b\u0010\u0007\u001a\u00020\bH\u0016¨\u0006\t"}, d2 = {"Lcom/onesignal/OSFocusHandler$OnLostFocusWorker;", "Landroidx/work/Worker;", "context", "Landroid/content/Context;", "workerParams", "Landroidx/work/WorkerParameters;", "(Landroid/content/Context;Landroidx/work/WorkerParameters;)V", "doWork", "Landroidx/work/ListenableWorker$Result;", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
    public static final class OnLostFocusWorker extends Worker {
        /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
        public OnLostFocusWorker(Context context, WorkerParameters workerParams) {
            super(context, workerParams);
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(workerParams, "workerParams");
        }

        @Override // androidx.work.Worker
        public ListenableWorker.Result doWork() {
            OSFocusHandler.INSTANCE.onLostFocusDoWork();
            ListenableWorker.Result resultSuccess = ListenableWorker.Result.success();
            Intrinsics.checkNotNullExpressionValue(resultSuccess, "success()");
            return resultSuccess;
        }
    }
    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\u0006\u0010\t\u001a\u00020\nR\u000e\u0010\u0003\u001a\u00020\u0004X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0004X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u000b"}, d2 = {"Lcom/onesignal/OSFocusHandler$Companion;", "", "()V", "backgrounded", "", "completed", "stopDelay", "", "stopped", "onLostFocusDoWork", "", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }

        public final void onLostFocusDoWork() {
            ActivityLifecycleHandler activityLifecycleHandler = ActivityLifecycleListener.getActivityLifecycleHandler();
            if (activityLifecycleHandler == null || activityLifecycleHandler.getCurActivity() == null) {
                OneSignal.setInForeground(false);
            }
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "OSFocusHandler running onAppLostFocus");
            OSFocusHandler.backgrounded = true;
            OneSignal.onAppLostFocus();
            OSFocusHandler.completed = true;
        }
    }
}

