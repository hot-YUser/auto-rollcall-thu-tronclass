package androidx.camera.camera2.internal.compat.workaround;

import android.hardware.camera2.CameraCharacteristics;
import android.os.Build;
import androidx.camera.camera2.internal.compat.quirk.DeviceQuirks;
import androidx.camera.camera2.internal.compat.quirk.FlashAvailabilityBufferUnderflowQuirk;
import androidx.camera.core.Logger;
import java.nio.BufferUnderflowException;
public final class FlashAvailabilityChecker {
    private static final String TAG = "FlashAvailability";

    public static boolean isFlashAvailable(CameraCharacteristicsProvider cameraCharacteristicsProvider) {
        return isFlashAvailable(false, cameraCharacteristicsProvider);
    }

    public static boolean isFlashAvailable(boolean z, CameraCharacteristicsProvider cameraCharacteristicsProvider) {
        Boolean bool;
        try {
            bool = (Boolean) cameraCharacteristicsProvider.get(CameraCharacteristics.FLASH_INFO_AVAILABLE);
        } catch (BufferUnderflowException e) {
            if (DeviceQuirks.get(FlashAvailabilityBufferUnderflowQuirk.class) != null) {
                Logger.d(TAG, String.format("Device is known to throw an exception while checking flash availability. Flash is not available. [Manufacturer: %s, Model: %s, API Level: %d].", Build.MANUFACTURER, Build.MODEL, Integer.valueOf(Build.VERSION.SDK_INT)));
            } else {
                Logger.e(TAG, String.format("Exception thrown while checking for flash availability on device not known to throw exceptions during this check. Please file an issue at https://issuetracker.google.com/issues/new?component=618491&template=1257717 with this error message [Manufacturer: %s, Model: %s, API Level: %d].\nFlash is not available.", Build.MANUFACTURER, Build.MODEL, Integer.valueOf(Build.VERSION.SDK_INT)), e);
            }
            if (z) {
                throw e;
            }
            bool = false;
        }
        if (bool == null) {
            Logger.w(TAG, "Characteristics did not contain key FLASH_INFO_AVAILABLE. Flash is not available.");
        }
        if (bool != null) {
            return bool.booleanValue();
        }
        return false;
    }

    private FlashAvailabilityChecker() {
    }
}

