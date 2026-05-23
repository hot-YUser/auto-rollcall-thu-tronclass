package androidx.camera.video.internal.compat.quirk;

import android.media.MediaFormat;
import android.os.Build;
import android.util.Size;
import androidx.camera.core.impl.Quirk;
import com.king.camera.scan.config.ResolutionCameraConfig;
import com.megster.cordova.FileChooser;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Set;
public class MediaCodecInfoReportIncorrectInfoQuirk implements Quirk {
    public static final List<String> INCORRECT_FHD_PROFILE_MODEL_LIST = Arrays.asList("lg-k430", "redmi note 4", "m2003j15sc", "rmx3231", "v2117", "sm-a032f", "moto g(20)", "sm-a035m");

    static boolean load() {
        return isNokia1() || isMotoC() || isX650() || isX230() || isHuaweiMate9() || isRedmiNote8Pro() || isPositivoTwist2Pro() || isFHDProblematicDevice();
    }

    private static boolean isNokia1() {
        return "Nokia".equalsIgnoreCase(Build.BRAND) && "Nokia 1".equalsIgnoreCase(Build.MODEL);
    }

    private static boolean isMotoC() {
        return "motorola".equalsIgnoreCase(Build.BRAND) && "moto c".equalsIgnoreCase(Build.MODEL);
    }

    private static boolean isX650() {
        return "infinix".equalsIgnoreCase(Build.BRAND) && "infinix x650".equalsIgnoreCase(Build.MODEL);
    }

    private static boolean isX230() {
        return "LGE".equalsIgnoreCase(Build.BRAND) && "LG-X230".equalsIgnoreCase(Build.MODEL);
    }

    private static boolean isHuaweiMate9() {
        return "Huawei".equalsIgnoreCase(Build.BRAND) && "mha-l29".equalsIgnoreCase(Build.MODEL);
    }

    private static boolean isRedmiNote8Pro() {
        return "Redmi".equalsIgnoreCase(Build.BRAND) && "Redmi Note 8 Pro".equalsIgnoreCase(Build.MODEL);
    }

    private static boolean isPositivoTwist2Pro() {
        return "positivo".equalsIgnoreCase(Build.BRAND) && "twist 2 pro".equalsIgnoreCase(Build.MODEL);
    }

    public boolean isUnSupportMediaCodecInfo(MediaFormat mediaFormat) {
        MediaFormatResolver mediaFormatResolver = new MediaFormatResolver(mediaFormat);
        if (isNokia1() || isMotoC() || isX650() || isX230() || isPositivoTwist2Pro()) {
            return mediaFormatResolver.isMpeg4();
        }
        if (isHuaweiMate9() || isRedmiNote8Pro()) {
            return mediaFormatResolver.isVideo() && mediaFormatResolver.isSize(3840, 2160);
        }
        if (isFHDProblematicDevice()) {
            return mediaFormatResolver.isAvc() && mediaFormatResolver.isSize(1920, ResolutionCameraConfig.IMAGE_QUALITY_1080P);
        }
        return false;
    }

    public static Set<Size> getExtraSupportedSizes() {
        if (isFHDProblematicDevice()) {
            return Collections.singleton(new Size(1920, ResolutionCameraConfig.IMAGE_QUALITY_1080P));
        }
        return Collections.emptySet();
    }

    private static boolean isFHDProblematicDevice() {
        return INCORRECT_FHD_PROFILE_MODEL_LIST.contains(Build.MODEL.toLowerCase(Locale.US));
    }

    private static class MediaFormatResolver {
        private final MediaFormat mMediaFormat;

        MediaFormatResolver(MediaFormat mediaFormat) {
            this.mMediaFormat = mediaFormat;
        }

        boolean isVideo() {
            String mime = getMime();
            return mime != null && mime.contains("video/");
        }

        boolean isAvc() {
            return "video/avc".equalsIgnoreCase(getMime());
        }

        boolean isMpeg4() {
            return "video/mp4v-es".equalsIgnoreCase(getMime());
        }

        boolean isSize(int i, int i2) {
            return this.mMediaFormat.getInteger("width") == i && this.mMediaFormat.getInteger("height") == i2;
        }

        private String getMime() {
            return this.mMediaFormat.getString(FileChooser.MIME);
        }
    }
}

