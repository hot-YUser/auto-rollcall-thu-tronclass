package androidx.work.impl.constraints.trackers;

import android.content.Context;
import androidx.work.impl.utils.taskexecutor.TaskExecutor;
public class Trackers {
    private static Trackers sInstance;
    private BatteryChargingTracker mBatteryChargingTracker;
    private BatteryNotLowTracker mBatteryNotLowTracker;
    private NetworkStateTracker mNetworkStateTracker;
    private StorageNotLowTracker mStorageNotLowTracker;

    public static synchronized Trackers getInstance(Context context, TaskExecutor taskExecutor) {
        if (sInstance == null) {
            sInstance = new Trackers(context, taskExecutor);
        }
        return sInstance;
    }

    public static synchronized void setInstance(Trackers trackers) {
        sInstance = trackers;
    }

    private Trackers(Context context, TaskExecutor taskExecutor) {
        Context applicationContext = context.getApplicationContext();
        this.mBatteryChargingTracker = new BatteryChargingTracker(applicationContext, taskExecutor);
        this.mBatteryNotLowTracker = new BatteryNotLowTracker(applicationContext, taskExecutor);
        this.mNetworkStateTracker = new NetworkStateTracker(applicationContext, taskExecutor);
        this.mStorageNotLowTracker = new StorageNotLowTracker(applicationContext, taskExecutor);
    }

    public BatteryChargingTracker getBatteryChargingTracker() {
        return this.mBatteryChargingTracker;
    }

    public BatteryNotLowTracker getBatteryNotLowTracker() {
        return this.mBatteryNotLowTracker;
    }

    public NetworkStateTracker getNetworkStateTracker() {
        return this.mNetworkStateTracker;
    }

    public StorageNotLowTracker getStorageNotLowTracker() {
        return this.mStorageNotLowTracker;
    }
}

