package androidx.core.app;

import android.content.Intent;
import androidx.core.util.Consumer;
public interface OnNewIntentProvider {
    void addOnNewIntentListener(Consumer<Intent> consumer);

    void removeOnNewIntentListener(Consumer<Intent> consumer);
}

