package androidx.camera.core;

import androidx.camera.core.impl.MutableConfig;
public interface ExtendableBuilder<T> {
    T build();

    MutableConfig getMutableConfig();
}

