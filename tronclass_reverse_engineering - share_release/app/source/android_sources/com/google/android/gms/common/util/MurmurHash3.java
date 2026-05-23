package com.google.android.gms.common.util;
public class MurmurHash3 {
    public static int murmurhash3_x86_32(byte[] bArr, int i, int i2, int i3) {
        int i4 = (i2 & (-4)) + i;
        while (i < i4) {
            int i5 = ((bArr[i] & 255) | ((bArr[i + 1] & 255) << 8) | ((bArr[i + 2] & 255) << 16) | (bArr[i + 3] << 24)) * (-862048943);
            int i6 = i3 ^ (((i5 << 15) | (i5 >>> 17)) * 461845907);
            i3 = (((i6 >>> 19) | (i6 << 13)) * 5) - 430675100;
            i += 4;
        }
        int i7 = i2 & 3;
        if (i7 != 1) {
            if (i7 != 2) {
                i = i7 == 3 ? (bArr[i4 + 2] & 255) << 16 : 0;
            }
            i |= (bArr[i4 + 1] & 255) << 8;
            int i8 = ((bArr[i4] & 255) | i) * (-862048943);
            i3 ^= ((i8 >>> 17) | (i8 << 15)) * 461845907;
        } else {
            int i82 = ((bArr[i4] & 255) | i) * (-862048943);
            i3 ^= ((i82 >>> 17) | (i82 << 15)) * 461845907;
        }
        int i9 = i3 ^ i2;
        int i10 = (i9 ^ (i9 >>> 16)) * (-2048144789);
        int i11 = (i10 ^ (i10 >>> 13)) * (-1028477387);
        return i11 ^ (i11 >>> 16);
    }

    private MurmurHash3() {
    }
}

