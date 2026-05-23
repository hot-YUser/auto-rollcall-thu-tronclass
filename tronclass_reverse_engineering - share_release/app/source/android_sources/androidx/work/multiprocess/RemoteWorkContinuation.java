package androidx.work.multiprocess;

import androidx.work.OneTimeWorkRequest;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Collections;
import java.util.List;
public abstract class RemoteWorkContinuation {
    protected abstract RemoteWorkContinuation combineInternal(List<RemoteWorkContinuation> continuations);

    public abstract ListenableFuture<Void> enqueue();

    public abstract RemoteWorkContinuation then(List<OneTimeWorkRequest> work);

    protected RemoteWorkContinuation() {
    }

    public final RemoteWorkContinuation then(OneTimeWorkRequest work) {
        return then(Collections.singletonList(work));
    }

    public static RemoteWorkContinuation combine(List<RemoteWorkContinuation> continuations) {
        return continuations.get(0).combineInternal(continuations);
    }
}

