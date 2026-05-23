package androidx.camera.view;

import androidx.arch.core.util.Function;
import androidx.camera.core.impl.utils.Threads;
import androidx.camera.core.impl.utils.futures.Futures;
import androidx.concurrent.futures.CallbackToFutureAdapter;
import androidx.core.util.Pair;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Objects;
class PendingValue<T> {
    private Pair<CallbackToFutureAdapter.Completer<Void>, T> mCompleterAndValue;

    PendingValue() {
    }

    ListenableFuture<Void> setValue(final T t) {
        Threads.checkMainThread();
        return CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.view.PendingValue$$ExternalSyntheticLambda0
            @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
            public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                return this.f$0.m260lambda$setValue$0$androidxcameraviewPendingValue(t, completer);
            }
        });
    }
    /* synthetic */ Object m260lambda$setValue$0$androidxcameraviewPendingValue(Object obj, CallbackToFutureAdapter.Completer completer) throws Exception {
        Pair<CallbackToFutureAdapter.Completer<Void>, T> pair = this.mCompleterAndValue;
        if (pair != null) {
            ((CallbackToFutureAdapter.Completer) Objects.requireNonNull(pair.first)).setCancelled();
        }
        this.mCompleterAndValue = new Pair<>(completer, obj);
        return "PendingValue " + obj;
    }

    void propagateIfHasValue(Function<T, ListenableFuture<Void>> function) {
        Threads.checkMainThread();
        Pair<CallbackToFutureAdapter.Completer<Void>, T> pair = this.mCompleterAndValue;
        if (pair != null) {
            Futures.propagate(function.apply(pair.second), (CallbackToFutureAdapter.Completer) Objects.requireNonNull(this.mCompleterAndValue.first));
            this.mCompleterAndValue = null;
        }
    }
}

