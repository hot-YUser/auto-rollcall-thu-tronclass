package androidx.work;

import androidx.work.WorkRequest;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
public final class OneTimeWorkRequest extends WorkRequest {
    public static OneTimeWorkRequest from(Class<? extends ListenableWorker> workerClass) {
        return new Builder(workerClass).build();
    }

    public static List<OneTimeWorkRequest> from(List<Class<? extends ListenableWorker>> workerClasses) {
        ArrayList arrayList = new ArrayList(workerClasses.size());
        Iterator<Class<? extends ListenableWorker>> it = workerClasses.iterator();
        while (it.hasNext()) {
            arrayList.add(new Builder(it.next()).build());
        }
        return arrayList;
    }

    OneTimeWorkRequest(Builder builder) {
        super(builder.mId, builder.mWorkSpec, builder.mTags);
    }

    public static final class Builder extends WorkRequest.Builder<Builder, OneTimeWorkRequest> {
        @Override // androidx.work.WorkRequest.Builder
        public Builder getThis() {
            return this;
        }

        public Builder(Class<? extends ListenableWorker> workerClass) {
            super(workerClass);
            this.mWorkSpec.inputMergerClassName = OverwritingInputMerger.class.getName();
        }

        public Builder setInputMerger(Class<? extends InputMerger> inputMerger) {
            this.mWorkSpec.inputMergerClassName = inputMerger.getName();
            return this;
        }
        @Override // androidx.work.WorkRequest.Builder
        public OneTimeWorkRequest buildInternal() {
            if (this.mBackoffCriteriaSet && this.mWorkSpec.constraints.requiresDeviceIdle()) {
                throw new IllegalArgumentException("Cannot set backoff criteria on an idle mode job");
            }
            return new OneTimeWorkRequest(this);
        }
    }
}

