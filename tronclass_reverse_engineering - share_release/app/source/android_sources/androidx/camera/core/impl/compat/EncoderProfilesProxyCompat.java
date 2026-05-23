package androidx.camera.core.impl.compat;

import android.media.CamcorderProfile;
import android.media.EncoderProfiles;
import android.os.Build;
import androidx.camera.core.Logger;
import androidx.camera.core.impl.EncoderProfilesProxy;
public final class EncoderProfilesProxyCompat {
    private static final String TAG = "EncoderProfilesProxyCompat";

    public static EncoderProfilesProxy from(EncoderProfiles encoderProfiles) {
        if (Build.VERSION.SDK_INT >= 33) {
            return EncoderProfilesProxyCompatApi33Impl.from(encoderProfiles);
        }
        if (Build.VERSION.SDK_INT >= 31) {
            return EncoderProfilesProxyCompatApi31Impl.from(encoderProfiles);
        }
        throw new RuntimeException("Unable to call from(EncoderProfiles) on API " + Build.VERSION.SDK_INT + ". Version 31 or higher required.");
    }

    public static EncoderProfilesProxy from(CamcorderProfile camcorderProfile) {
        if (Build.VERSION.SDK_INT >= 31) {
            Logger.w(TAG, "Should use from(EncoderProfiles) on API " + Build.VERSION.SDK_INT + "instead. CamcorderProfile is deprecated on API 31.");
        }
        return EncoderProfilesProxyCompatBaseImpl.from(camcorderProfile);
    }

    private EncoderProfilesProxyCompat() {
    }
}

