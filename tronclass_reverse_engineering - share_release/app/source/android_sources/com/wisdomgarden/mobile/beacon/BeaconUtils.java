package com.wisdomgarden.mobile.beacon;

import android.util.Log;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
public class BeaconUtils {
    private static final int MESSAGE_MAX_LENGTH = 11;
    private static final String TAG = "BeaconUtils";
    public static final String WG_PREFIX = "WG";
    public static final String WG_UUID = "00005747-0000-1000-8000-00805F9B34FB";
    private static final byte[] WG_PREFIX_BYTES = {87, 71};
    private static final String CHARS = "2O9AuFNPDx4gtJwS3ye7l1Mq0dEB5HsaKInikRmLhjpG6b8fzQrCcvo";
    private static final int RADIX = CHARS.length();

    public static int getMessageMaxLength() {
        return 11;
    }

    public static boolean isNonceLetter(char c) {
        return c >= 'T' && c <= 'Z';
    }

    public static String encode(int i) {
        if (i <= 0) {
            return String.valueOf(CHARS.charAt(0));
        }
        StringBuilder sb = new StringBuilder();
        while (i > 0) {
            int i2 = RADIX;
            sb.insert(0, CHARS.charAt(i % i2));
            i /= i2;
        }
        return sb.toString();
    }

    public static int decode(String str) {
        int i = 0;
        for (char c : str.toCharArray()) {
            int iIndexOf = CHARS.indexOf(c);
            if (iIndexOf == -1) {
                return 0;
            }
            i = (i * RADIX) + iIndexOf;
        }
        return i;
    }

    public static String buildMessage(int i, String str) {
        String strEncode = encode(i);
        if (str == null || str.isEmpty()) {
            return strEncode + "Z";
        }
        String str2 = strEncode + str;
        return str2.length() > 11 ? str2.substring(0, 11) : str2;
    }

    public static Map<String, Object> parseMessage(String str) {
        HashMap map = new HashMap();
        map.put("rollcallId", 0);
        map.put("nonce", "");
        if (str != null && !str.isEmpty()) {
            for (int i = 0; i < str.length(); i++) {
                if (isNonceLetter(str.charAt(i))) {
                    map.put("rollcallId", Integer.valueOf(decode(str.substring(0, i))));
                    map.put("nonce", str.substring(i));
                    return map;
                }
            }
        }
        return map;
    }

    public static byte[] addPrefixToBytes(String str) {
        Log.d(TAG, "[addPrefixToBytes]Adding hex prefix to message: " + str);
        byte[] bytes = str.getBytes(StandardCharsets.US_ASCII);
        byte[] bArr = WG_PREFIX_BYTES;
        int length = bArr.length + bytes.length;
        byte[] bArr2 = new byte[length];
        System.arraycopy(bArr, 0, bArr2, 0, bArr.length);
        System.arraycopy(bytes, 0, bArr2, bArr.length, bytes.length);
        Log.v(TAG, "[addPrefixToBytes]Resulting byte array length: " + length);
        return bArr2;
    }

    public static String extractMessageFromBytes(byte[] bArr) {
        if (bArr == null) {
            Log.w(TAG, "[extractBytes] data is null");
            return null;
        }
        byte[] bArr2 = WG_PREFIX_BYTES;
        int length = bArr2.length + 11;
        if (bArr.length < bArr2.length || bArr.length > length) {
            Log.w(TAG, "[extractBytes] Length out of bounds. Max: " + length + ", Got: " + bArr.length);
            return null;
        }
        int i = 0;
        while (true) {
            byte[] bArr3 = WG_PREFIX_BYTES;
            if (i < bArr3.length) {
                if (bArr[i] != bArr3[i]) {
                    return null;
                }
                i++;
            } else {
                String str = new String(bArr, bArr3.length, bArr.length - bArr3.length, StandardCharsets.US_ASCII);
                Log.i(TAG, "[extractBytes] Successfully extracted message from bytes: ".concat(str));
                return str;
            }
        }
    }

    public static String extractMessageFromDeviceName(String str) {
        if (str == null || str.isEmpty()) {
            Log.w(TAG, "[extractName] message is null");
            return null;
        }
        if (!str.startsWith(WG_PREFIX)) {
            return null;
        }
        int length = WG_PREFIX.length() + 11;
        if (str.length() > length) {
            Log.w(TAG, "[extractName] Length out of bounds. Max: " + length + ", Got: " + str.length());
            return null;
        }
        String strSubstring = str.substring(WG_PREFIX.length());
        Log.i(TAG, "[extractName] Successfully. " + strSubstring);
        return strSubstring;
    }
}

