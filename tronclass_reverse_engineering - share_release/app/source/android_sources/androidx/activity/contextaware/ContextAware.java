package androidx.activity.contextaware;

import android.content.Context;
import com.google.android.gms.common.internal.ServiceSpecificExtraArgs;
import kotlin.Metadata;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\bf\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&J\n\u0010\u0006\u001a\u0004\u0018\u00010\u0007H&J\u0010\u0010\b\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\tÀ\u0006\u0001"}, d2 = {"Landroidx/activity/contextaware/ContextAware;", "", "addOnContextAvailableListener", "", ServiceSpecificExtraArgs.CastExtraArgs.LISTENER, "Landroidx/activity/contextaware/OnContextAvailableListener;", "peekAvailableContext", "Landroid/content/Context;", "removeOnContextAvailableListener", "activity_release"}, k = 1, mv = {1, 8, 0}, xi = 48)
public interface ContextAware {
    void addOnContextAvailableListener(OnContextAvailableListener listener);

    Context peekAvailableContext();

    void removeOnContextAvailableListener(OnContextAvailableListener listener);
}

