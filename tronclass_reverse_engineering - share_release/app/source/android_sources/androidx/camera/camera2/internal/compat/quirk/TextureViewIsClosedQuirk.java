package androidx.camera.camera2.internal.compat.quirk;

import androidx.camera.core.impl.Quirk;
public class TextureViewIsClosedQuirk implements Quirk {
    static boolean load() {
        return false;
    }
}

