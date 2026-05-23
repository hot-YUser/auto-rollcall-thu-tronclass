package androidx.work;

import android.net.Uri;
import java.time.Duration;
import java.util.concurrent.TimeUnit;
public final class Constraints {
    public static final Constraints NONE = new Builder().build();
    private ContentUriTriggers mContentUriTriggers;
    private NetworkType mRequiredNetworkType;
    private boolean mRequiresBatteryNotLow;
    private boolean mRequiresCharging;
    private boolean mRequiresDeviceIdle;
    private boolean mRequiresStorageNotLow;
    private long mTriggerContentUpdateDelay;
    private long mTriggerMaxContentDelay;

    public Constraints() {
        this.mRequiredNetworkType = NetworkType.NOT_REQUIRED;
        this.mTriggerContentUpdateDelay = -1L;
        this.mTriggerMaxContentDelay = -1L;
        this.mContentUriTriggers = new ContentUriTriggers();
    }

    Constraints(Builder builder) {
        this.mRequiredNetworkType = NetworkType.NOT_REQUIRED;
        this.mTriggerContentUpdateDelay = -1L;
        this.mTriggerMaxContentDelay = -1L;
        this.mContentUriTriggers = new ContentUriTriggers();
        this.mRequiresCharging = builder.mRequiresCharging;
        this.mRequiresDeviceIdle = builder.mRequiresDeviceIdle;
        this.mRequiredNetworkType = builder.mRequiredNetworkType;
        this.mRequiresBatteryNotLow = builder.mRequiresBatteryNotLow;
        this.mRequiresStorageNotLow = builder.mRequiresStorageNotLow;
        this.mContentUriTriggers = builder.mContentUriTriggers;
        this.mTriggerContentUpdateDelay = builder.mTriggerContentUpdateDelay;
        this.mTriggerMaxContentDelay = builder.mTriggerContentMaxDelay;
    }

    public Constraints(Constraints other) {
        this.mRequiredNetworkType = NetworkType.NOT_REQUIRED;
        this.mTriggerContentUpdateDelay = -1L;
        this.mTriggerMaxContentDelay = -1L;
        this.mContentUriTriggers = new ContentUriTriggers();
        this.mRequiresCharging = other.mRequiresCharging;
        this.mRequiresDeviceIdle = other.mRequiresDeviceIdle;
        this.mRequiredNetworkType = other.mRequiredNetworkType;
        this.mRequiresBatteryNotLow = other.mRequiresBatteryNotLow;
        this.mRequiresStorageNotLow = other.mRequiresStorageNotLow;
        this.mContentUriTriggers = other.mContentUriTriggers;
    }

    public NetworkType getRequiredNetworkType() {
        return this.mRequiredNetworkType;
    }

    public void setRequiredNetworkType(NetworkType requiredNetworkType) {
        this.mRequiredNetworkType = requiredNetworkType;
    }

    public boolean requiresCharging() {
        return this.mRequiresCharging;
    }

    public void setRequiresCharging(boolean requiresCharging) {
        this.mRequiresCharging = requiresCharging;
    }

    public boolean requiresDeviceIdle() {
        return this.mRequiresDeviceIdle;
    }

    public void setRequiresDeviceIdle(boolean requiresDeviceIdle) {
        this.mRequiresDeviceIdle = requiresDeviceIdle;
    }

    public boolean requiresBatteryNotLow() {
        return this.mRequiresBatteryNotLow;
    }

    public void setRequiresBatteryNotLow(boolean requiresBatteryNotLow) {
        this.mRequiresBatteryNotLow = requiresBatteryNotLow;
    }

    public boolean requiresStorageNotLow() {
        return this.mRequiresStorageNotLow;
    }

    public void setRequiresStorageNotLow(boolean requiresStorageNotLow) {
        this.mRequiresStorageNotLow = requiresStorageNotLow;
    }

    public long getTriggerContentUpdateDelay() {
        return this.mTriggerContentUpdateDelay;
    }

    public void setTriggerContentUpdateDelay(long triggerContentUpdateDelay) {
        this.mTriggerContentUpdateDelay = triggerContentUpdateDelay;
    }

    public long getTriggerMaxContentDelay() {
        return this.mTriggerMaxContentDelay;
    }

    public void setTriggerMaxContentDelay(long triggerMaxContentDelay) {
        this.mTriggerMaxContentDelay = triggerMaxContentDelay;
    }

    public void setContentUriTriggers(ContentUriTriggers mContentUriTriggers) {
        this.mContentUriTriggers = mContentUriTriggers;
    }

    public ContentUriTriggers getContentUriTriggers() {
        return this.mContentUriTriggers;
    }

    public boolean hasContentUriTriggers() {
        return this.mContentUriTriggers.size() > 0;
    }

    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Constraints constraints = (Constraints) o;
        if (this.mRequiresCharging == constraints.mRequiresCharging && this.mRequiresDeviceIdle == constraints.mRequiresDeviceIdle && this.mRequiresBatteryNotLow == constraints.mRequiresBatteryNotLow && this.mRequiresStorageNotLow == constraints.mRequiresStorageNotLow && this.mTriggerContentUpdateDelay == constraints.mTriggerContentUpdateDelay && this.mTriggerMaxContentDelay == constraints.mTriggerMaxContentDelay && this.mRequiredNetworkType == constraints.mRequiredNetworkType) {
            return this.mContentUriTriggers.equals(constraints.mContentUriTriggers);
        }
        return false;
    }

    public int hashCode() {
        int iHashCode = ((((((((this.mRequiredNetworkType.hashCode() * 31) + (this.mRequiresCharging ? 1 : 0)) * 31) + (this.mRequiresDeviceIdle ? 1 : 0)) * 31) + (this.mRequiresBatteryNotLow ? 1 : 0)) * 31) + (this.mRequiresStorageNotLow ? 1 : 0)) * 31;
        long j = this.mTriggerContentUpdateDelay;
        int i = (iHashCode + ((int) (j ^ (j >>> 32)))) * 31;
        long j2 = this.mTriggerMaxContentDelay;
        return ((i + ((int) (j2 ^ (j2 >>> 32)))) * 31) + this.mContentUriTriggers.hashCode();
    }

    public static final class Builder {
        ContentUriTriggers mContentUriTriggers;
        NetworkType mRequiredNetworkType;
        boolean mRequiresBatteryNotLow;
        boolean mRequiresCharging;
        boolean mRequiresDeviceIdle;
        boolean mRequiresStorageNotLow;
        long mTriggerContentMaxDelay;
        long mTriggerContentUpdateDelay;

        public Builder() {
            this.mRequiresCharging = false;
            this.mRequiresDeviceIdle = false;
            this.mRequiredNetworkType = NetworkType.NOT_REQUIRED;
            this.mRequiresBatteryNotLow = false;
            this.mRequiresStorageNotLow = false;
            this.mTriggerContentUpdateDelay = -1L;
            this.mTriggerContentMaxDelay = -1L;
            this.mContentUriTriggers = new ContentUriTriggers();
        }

        public Builder(Constraints constraints) {
            this.mRequiresCharging = false;
            this.mRequiresDeviceIdle = false;
            this.mRequiredNetworkType = NetworkType.NOT_REQUIRED;
            this.mRequiresBatteryNotLow = false;
            this.mRequiresStorageNotLow = false;
            this.mTriggerContentUpdateDelay = -1L;
            this.mTriggerContentMaxDelay = -1L;
            this.mContentUriTriggers = new ContentUriTriggers();
            this.mRequiresCharging = constraints.requiresCharging();
            this.mRequiresDeviceIdle = constraints.requiresDeviceIdle();
            this.mRequiredNetworkType = constraints.getRequiredNetworkType();
            this.mRequiresBatteryNotLow = constraints.requiresBatteryNotLow();
            this.mRequiresStorageNotLow = constraints.requiresStorageNotLow();
            this.mTriggerContentUpdateDelay = constraints.getTriggerContentUpdateDelay();
            this.mTriggerContentMaxDelay = constraints.getTriggerMaxContentDelay();
            this.mContentUriTriggers = constraints.getContentUriTriggers();
        }

        public Builder setRequiresCharging(boolean requiresCharging) {
            this.mRequiresCharging = requiresCharging;
            return this;
        }

        public Builder setRequiresDeviceIdle(boolean requiresDeviceIdle) {
            this.mRequiresDeviceIdle = requiresDeviceIdle;
            return this;
        }

        public Builder setRequiredNetworkType(NetworkType networkType) {
            this.mRequiredNetworkType = networkType;
            return this;
        }

        public Builder setRequiresBatteryNotLow(boolean requiresBatteryNotLow) {
            this.mRequiresBatteryNotLow = requiresBatteryNotLow;
            return this;
        }

        public Builder setRequiresStorageNotLow(boolean requiresStorageNotLow) {
            this.mRequiresStorageNotLow = requiresStorageNotLow;
            return this;
        }

        public Builder addContentUriTrigger(Uri uri, boolean triggerForDescendants) {
            this.mContentUriTriggers.add(uri, triggerForDescendants);
            return this;
        }

        public Builder setTriggerContentUpdateDelay(long duration, TimeUnit timeUnit) {
            this.mTriggerContentUpdateDelay = timeUnit.toMillis(duration);
            return this;
        }

        public Builder setTriggerContentUpdateDelay(Duration duration) {
            this.mTriggerContentUpdateDelay = duration.toMillis();
            return this;
        }

        public Builder setTriggerContentMaxDelay(long duration, TimeUnit timeUnit) {
            this.mTriggerContentMaxDelay = timeUnit.toMillis(duration);
            return this;
        }

        public Builder setTriggerContentMaxDelay(Duration duration) {
            this.mTriggerContentMaxDelay = duration.toMillis();
            return this;
        }

        public Constraints build() {
            return new Constraints(this);
        }
    }
}

