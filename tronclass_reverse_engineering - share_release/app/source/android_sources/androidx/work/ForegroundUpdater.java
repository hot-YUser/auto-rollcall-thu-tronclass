package androidx.work;

import android.content.Context;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.UUID;
public interface ForegroundUpdater {
    ListenableFuture<Void> setForegroundAsync(Context context, UUID id, ForegroundInfo foregroundInfo);
}

