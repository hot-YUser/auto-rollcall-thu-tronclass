package androidx.camera.core.internal.compat.workaround;

import androidx.camera.core.internal.compat.quirk.DeviceQuirks;
import androidx.camera.core.internal.compat.quirk.LargeJpegImageQuirk;
import kotlin.UByte;
public class InvalidJpegDataParser {
    private final boolean mHasQuirk;

    public InvalidJpegDataParser() {
        this.mHasQuirk = DeviceQuirks.get(LargeJpegImageQuirk.class) != null;
    }

    public int getValidDataLength(byte[] bArr) {
        byte b;
        if (!this.mHasQuirk) {
            return bArr.length;
        }
        int i = 2;
        while (i + 4 <= bArr.length && (b = bArr[i]) == -1) {
            int i2 = i + 2;
            int i3 = ((bArr[i2] & UByte.MAX_VALUE) << 8) | (bArr[i + 3] & UByte.MAX_VALUE);
            if (b == -1 && bArr[i + 1] == -38) {
                while (true) {
                    int i4 = i2 + 2;
                    if (i4 > bArr.length) {
                        return bArr.length;
                    }
                    if (bArr[i2] == -1 && bArr[i2 + 1] == -39) {
                        return i4;
                    }
                    i2++;
                }
            } else {
                i += i3 + 2;
            }
        }
        return bArr.length;
    }
}

