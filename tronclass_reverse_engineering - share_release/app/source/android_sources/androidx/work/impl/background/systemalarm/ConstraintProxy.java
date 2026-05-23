package androidx.work.impl.background.systemalarm;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import androidx.work.Constraints;
import androidx.work.Logger;
import androidx.work.NetworkType;
import androidx.work.impl.model.WorkSpec;
import java.util.Iterator;
import java.util.List;
abstract class ConstraintProxy extends BroadcastReceiver {
    private static final String TAG = Logger.tagWithPrefix("ConstraintProxy");

    ConstraintProxy() {
    }

    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        Logger.get().debug(TAG, String.format("onReceive : %s", intent), new Throwable[0]);
        context.startService(CommandHandler.createConstraintsChangedIntent(context));
    }

    public static class BatteryNotLowProxy extends ConstraintProxy {
        @Override // androidx.work.impl.background.systemalarm.ConstraintProxy, android.content.BroadcastReceiver
        public /* bridge */ /* synthetic */ void onReceive(Context context, Intent intent) {
            super.onReceive(context, intent);
        }
    }

    public static class BatteryChargingProxy extends ConstraintProxy {
        @Override // androidx.work.impl.background.systemalarm.ConstraintProxy, android.content.BroadcastReceiver
        public /* bridge */ /* synthetic */ void onReceive(Context context, Intent intent) {
            super.onReceive(context, intent);
        }
    }

    public static class StorageNotLowProxy extends ConstraintProxy {
        @Override // androidx.work.impl.background.systemalarm.ConstraintProxy, android.content.BroadcastReceiver
        public /* bridge */ /* synthetic */ void onReceive(Context context, Intent intent) {
            super.onReceive(context, intent);
        }
    }

    public static class NetworkStateProxy extends ConstraintProxy {
        @Override // androidx.work.impl.background.systemalarm.ConstraintProxy, android.content.BroadcastReceiver
        public /* bridge */ /* synthetic */ void onReceive(Context context, Intent intent) {
            super.onReceive(context, intent);
        }
    }

    static void updateAll(Context context, List<WorkSpec> workSpecs) {
        Iterator<WorkSpec> it = workSpecs.iterator();
        boolean zRequiresBatteryNotLow = false;
        boolean zRequiresCharging = false;
        boolean zRequiresStorageNotLow = false;
        boolean z = false;
        while (it.hasNext()) {
            Constraints constraints = it.next().constraints;
            zRequiresBatteryNotLow |= constraints.requiresBatteryNotLow();
            zRequiresCharging |= constraints.requiresCharging();
            zRequiresStorageNotLow |= constraints.requiresStorageNotLow();
            z |= constraints.getRequiredNetworkType() != NetworkType.NOT_REQUIRED;
            if (zRequiresBatteryNotLow && zRequiresCharging && zRequiresStorageNotLow && z) {
                break;
            }
        }
        context.sendBroadcast(ConstraintProxyUpdateReceiver.newConstraintProxyUpdateIntent(context, zRequiresBatteryNotLow, zRequiresCharging, zRequiresStorageNotLow, z));
    }
}

