package androidx.work;

import android.content.Context;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
public interface ProgressUpdater {
    ListenableFuture<Void> updateProgress(Context context, UUID id, Data data);
}

