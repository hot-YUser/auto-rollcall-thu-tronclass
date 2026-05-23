package androidx.camera.core.internal.compat.quirk;

import android.os.Build;
import androidx.camera.core.ImageProxy;
import androidx.camera.core.impl.Quirk;
import java.nio.ByteBuffer;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import kotlin.UByte;
public final class IncorrectJpegMetadataQuirk implements Quirk {
    private static final Set<String> SAMSUNG_DEVICES = new HashSet(Arrays.asList("A24"));

    static boolean load() {
        return isSamsungProblematicDevice();
    }

    private static boolean isSamsungProblematicDevice() {
        return "Samsung".equalsIgnoreCase(Build.BRAND) && SAMSUNG_DEVICES.contains(Build.DEVICE.toUpperCase(Locale.US));
    }

    public byte[] jpegImageToJpegByteArray(ImageProxy imageProxy) {
        int iFindSecondFfd8Position = 0;
        ByteBuffer buffer = imageProxy.getPlanes()[0].getBuffer();
        byte[] bArr = new byte[buffer.capacity()];
        buffer.rewind();
        buffer.get(bArr);
        return (canParseSosMarker(bArr) || (iFindSecondFfd8Position = findSecondFfd8Position(bArr)) != -1) ? Arrays.copyOfRange(bArr, iFindSecondFfd8Position, buffer.limit()) : bArr;
    }

    private boolean canParseSosMarker(byte[] bArr) {
        byte b;
        int i = 2;
        while (i + 4 <= bArr.length && (b = bArr[i]) == -1) {
            if (b == -1 && bArr[i + 1] == -38) {
                return true;
            }
            i += (((bArr[i + 2] & UByte.MAX_VALUE) << 8) | (bArr[i + 3] & UByte.MAX_VALUE)) + 2;
        }
        return false;
    }

    private int findSecondFfd8Position(byte[] bArr) {
        int i = 2;
        while (true) {
            int i2 = i + 1;
            if (i2 > bArr.length) {
                return -1;
            }
            if (bArr[i] == -1 && bArr[i2] == -40) {
                return i;
            }
            i = i2;
        }
    }
}

