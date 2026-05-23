package androidx.camera.core.impl;

import java.util.HashMap;
import java.util.Map;
public final class ExtendedCameraConfigProviderStore {
    private static final Object LOCK = new Object();
    private static final Map<Object, CameraConfigProvider> CAMERA_CONFIG_PROVIDERS = new HashMap();

    private ExtendedCameraConfigProviderStore() {
    }

    public static void addConfig(Object obj, CameraConfigProvider cameraConfigProvider) {
        synchronized (LOCK) {
            CAMERA_CONFIG_PROVIDERS.put(obj, cameraConfigProvider);
        }
    }

    public static CameraConfigProvider getConfigProvider(Object obj) {
        CameraConfigProvider cameraConfigProvider;
        synchronized (LOCK) {
            cameraConfigProvider = CAMERA_CONFIG_PROVIDERS.get(obj);
        }
        return cameraConfigProvider == null ? CameraConfigProvider.EMPTY : cameraConfigProvider;
    }

    public static void clear() {
        synchronized (LOCK) {
            CAMERA_CONFIG_PROVIDERS.clear();
        }
    }
}

