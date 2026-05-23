package androidx.camera.camera2;

import android.content.Context;
import androidx.camera.camera2.internal.Camera2CameraFactory;
import androidx.camera.camera2.internal.Camera2DeviceSurfaceManager;
import androidx.camera.camera2.internal.Camera2UseCaseConfigFactory;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.CameraUnavailableException;
import androidx.camera.core.CameraXConfig;
import androidx.camera.core.InitializationException;
import androidx.camera.core.impl.CameraDeviceSurfaceManager;
import androidx.camera.core.impl.CameraFactory;
import androidx.camera.core.impl.CameraThreadConfig;
import androidx.camera.core.impl.UseCaseConfigFactory;
import java.util.Set;
public final class Camera2Config {
    private Camera2Config() {
    }

    public static CameraXConfig defaultConfig() {
        CameraFactory.Provider provider = new CameraFactory.Provider() { // from class: androidx.camera.camera2.Camera2Config$$ExternalSyntheticLambda0
            @Override // androidx.camera.core.impl.CameraFactory.Provider
            public final CameraFactory newInstance(Context context, CameraThreadConfig cameraThreadConfig, CameraSelector cameraSelector) {
                return new Camera2CameraFactory(context, cameraThreadConfig, cameraSelector);
            }
        };
        CameraDeviceSurfaceManager.Provider provider2 = new CameraDeviceSurfaceManager.Provider() { // from class: androidx.camera.camera2.Camera2Config$$ExternalSyntheticLambda1
            @Override // androidx.camera.core.impl.CameraDeviceSurfaceManager.Provider
            public final CameraDeviceSurfaceManager newInstance(Context context, Object obj, Set set) {
                return Camera2Config.lambda$defaultConfig$0(context, obj, set);
            }
        };
        return new CameraXConfig.Builder().setCameraFactoryProvider(provider).setDeviceSurfaceManagerProvider(provider2).setUseCaseConfigFactoryProvider(new UseCaseConfigFactory.Provider() { // from class: androidx.camera.camera2.Camera2Config$$ExternalSyntheticLambda2
            @Override // androidx.camera.core.impl.UseCaseConfigFactory.Provider
            public final UseCaseConfigFactory newInstance(Context context) {
                return Camera2Config.lambda$defaultConfig$1(context);
            }
        }).build();
    }

    static /* synthetic */ CameraDeviceSurfaceManager lambda$defaultConfig$0(Context context, Object obj, Set set) throws InitializationException {
        try {
            return new Camera2DeviceSurfaceManager(context, obj, set);
        } catch (CameraUnavailableException e) {
            throw new InitializationException(e);
        }
    }

    static /* synthetic */ UseCaseConfigFactory lambda$defaultConfig$1(Context context) throws InitializationException {
        return new Camera2UseCaseConfigFactory(context);
    }

    public static final class DefaultProvider implements CameraXConfig.Provider {
        @Override // androidx.camera.core.CameraXConfig.Provider
        public CameraXConfig getCameraXConfig() {
            return Camera2Config.defaultConfig();
        }
    }
}

