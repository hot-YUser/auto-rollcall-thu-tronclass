package androidx.work;

import androidx.lifecycle.LiveData;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Collections;
import java.util.List;
public abstract class WorkContinuation {
    protected abstract WorkContinuation combineInternal(List<WorkContinuation> continuations);

    public abstract Operation enqueue();

    public abstract ListenableFuture<List<WorkInfo>> getWorkInfos();

    public abstract LiveData<List<WorkInfo>> getWorkInfosLiveData();

    public abstract WorkContinuation then(List<OneTimeWorkRequest> work);

    public final WorkContinuation then(OneTimeWorkRequest work) {
        return then(Collections.singletonList(work));
    }

    public static WorkContinuation combine(List<WorkContinuation> continuations) {
        return continuations.get(0).combineInternal(continuations);
    }
}

