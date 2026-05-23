package androidx.core.content;

import android.content.res.Configuration;
import androidx.core.util.Consumer;
public interface OnConfigurationChangedProvider {
    void addOnConfigurationChangedListener(Consumer<Configuration> consumer);

    void removeOnConfigurationChangedListener(Consumer<Configuration> consumer);
}

