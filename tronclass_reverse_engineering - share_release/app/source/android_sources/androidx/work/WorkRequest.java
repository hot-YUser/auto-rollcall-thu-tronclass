package androidx.work;

import androidx.work.WorkInfo;
import androidx.work.impl.model.WorkSpec;
import java.time.Duration;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
public abstract class WorkRequest {
    public static final long DEFAULT_BACKOFF_DELAY_MILLIS = 30000;
    public static final long MAX_BACKOFF_MILLIS = 18000000;
    public static final long MIN_BACKOFF_MILLIS = 10000;
    private UUID mId;
    private Set<String> mTags;
    private WorkSpec mWorkSpec;

    protected WorkRequest(UUID id, WorkSpec workSpec, Set<String> tags) {
        this.mId = id;
        this.mWorkSpec = workSpec;
        this.mTags = tags;
    }

    public UUID getId() {
        return this.mId;
    }

    public String getStringId() {
        return this.mId.toString();
    }

    public WorkSpec getWorkSpec() {
        return this.mWorkSpec;
    }

    public Set<String> getTags() {
        return this.mTags;
    }

    public static abstract class Builder<B extends Builder<?, ?>, W extends WorkRequest> {
        WorkSpec mWorkSpec;
        Class<? extends ListenableWorker> mWorkerClass;
        boolean mBackoffCriteriaSet = false;
        Set<String> mTags = new HashSet();
        UUID mId = UUID.randomUUID();

        abstract W buildInternal();

        abstract B getThis();

        Builder(Class<? extends ListenableWorker> workerClass) {
            this.mWorkerClass = workerClass;
            this.mWorkSpec = new WorkSpec(this.mId.toString(), workerClass.getName());
            addTag(workerClass.getName());
        }

        public final B setBackoffCriteria(BackoffPolicy backoffPolicy, long j, TimeUnit timeUnit) {
            this.mBackoffCriteriaSet = true;
            this.mWorkSpec.backoffPolicy = backoffPolicy;
            this.mWorkSpec.setBackoffDelayDuration(timeUnit.toMillis(j));
            return (B) getThis();
        }

        public final B setBackoffCriteria(BackoffPolicy backoffPolicy, Duration duration) {
            this.mBackoffCriteriaSet = true;
            this.mWorkSpec.backoffPolicy = backoffPolicy;
            this.mWorkSpec.setBackoffDelayDuration(duration.toMillis());
            return (B) getThis();
        }

        public final B setConstraints(Constraints constraints) {
            this.mWorkSpec.constraints = constraints;
            return (B) getThis();
        }

        public final B setInputData(Data data) {
            this.mWorkSpec.input = data;
            return (B) getThis();
        }

        public final B addTag(String str) {
            this.mTags.add(str);
            return (B) getThis();
        }

        public final B keepResultsForAtLeast(long j, TimeUnit timeUnit) {
            this.mWorkSpec.minimumRetentionDuration = timeUnit.toMillis(j);
            return (B) getThis();
        }

        public final B keepResultsForAtLeast(Duration duration) {
            this.mWorkSpec.minimumRetentionDuration = duration.toMillis();
            return (B) getThis();
        }

        public B setInitialDelay(long j, TimeUnit timeUnit) {
            this.mWorkSpec.initialDelay = timeUnit.toMillis(j);
            if (Long.MAX_VALUE - System.currentTimeMillis() <= this.mWorkSpec.initialDelay) {
                throw new IllegalArgumentException("The given initial delay is too large and will cause an overflow!");
            }
            return (B) getThis();
        }

        public B setInitialDelay(Duration duration) {
            this.mWorkSpec.initialDelay = duration.toMillis();
            if (Long.MAX_VALUE - System.currentTimeMillis() <= this.mWorkSpec.initialDelay) {
                throw new IllegalArgumentException("The given initial delay is too large and will cause an overflow!");
            }
            return (B) getThis();
        }

        public B setExpedited(OutOfQuotaPolicy outOfQuotaPolicy) {
            this.mWorkSpec.expedited = true;
            this.mWorkSpec.outOfQuotaPolicy = outOfQuotaPolicy;
            return (B) getThis();
        }

        public final W build() {
            W w = (W) buildInternal();
            Constraints constraints = this.mWorkSpec.constraints;
            boolean z = constraints.hasContentUriTriggers() || constraints.requiresBatteryNotLow() || constraints.requiresCharging() || constraints.requiresDeviceIdle();
            if (this.mWorkSpec.expedited) {
                if (z) {
                    throw new IllegalArgumentException("Expedited jobs only support network and storage constraints");
                }
                if (this.mWorkSpec.initialDelay > 0) {
                    throw new IllegalArgumentException("Expedited jobs cannot be delayed");
                }
            }
            this.mId = UUID.randomUUID();
            WorkSpec workSpec = new WorkSpec(this.mWorkSpec);
            this.mWorkSpec = workSpec;
            workSpec.id = this.mId.toString();
            return w;
        }

        public final B setInitialState(WorkInfo.State state) {
            this.mWorkSpec.state = state;
            return (B) getThis();
        }

        public final B setInitialRunAttemptCount(int i) {
            this.mWorkSpec.runAttemptCount = i;
            return (B) getThis();
        }

        public final B setPeriodStartTime(long j, TimeUnit timeUnit) {
            this.mWorkSpec.periodStartTime = timeUnit.toMillis(j);
            return (B) getThis();
        }

        public final B setScheduleRequestedAt(long j, TimeUnit timeUnit) {
            this.mWorkSpec.scheduleRequestedAt = timeUnit.toMillis(j);
            return (B) getThis();
        }
    }
}

