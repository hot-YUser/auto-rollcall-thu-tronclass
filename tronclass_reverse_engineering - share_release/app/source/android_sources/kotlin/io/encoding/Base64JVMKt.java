package kotlin.io.encoding;

import java.nio.charset.Charset;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
@Metadata(d1 = {"\u0000 \n\u0000\n\u0002\u0010\u0012\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\r\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u000e\n\u0000\u001a%\u0010\u0000\u001a\u00020\u0001*\u00020\u00022\u0006\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u0006H\u0081\b\u001a5\u0010\b\u001a\u00020\u0006*\u00020\u00022\u0006\u0010\u0003\u001a\u00020\u00012\u0006\u0010\t\u001a\u00020\u00012\u0006\u0010\n\u001a\u00020\u00062\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u0006H\u0081\b\u001a%\u0010\u000b\u001a\u00020\u0001*\u00020\u00022\u0006\u0010\u0003\u001a\u00020\u00012\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u0006H\u0081\b\u001a%\u0010\f\u001a\u00020\r*\u00020\u00022\u0006\u0010\u0003\u001a\u00020\u00012\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u0006H\u0081\b¨\u0006\u000e"}, d2 = {"platformCharsToBytes", "", "Lkotlin/io/encoding/Base64;", "source", "", "startIndex", "", "endIndex", "platformEncodeIntoByteArray", "destination", "destinationOffset", "platformEncodeToByteArray", "platformEncodeToString", "", "kotlin-stdlib"}, k = 2, mv = {1, 8, 0}, xi = 48)
public final class Base64JVMKt {
    private static final byte[] platformCharsToBytes(Base64 base64, CharSequence source, int i, int i2) {
        Intrinsics.checkNotNullParameter(base64, "<this>");
        Intrinsics.checkNotNullParameter(source, "source");
        if (source instanceof String) {
            base64.checkSourceBounds$kotlin_stdlib(source.length(), i, i2);
            String strSubstring = ((String) source).substring(i, i2);
            Intrinsics.checkNotNullExpressionValue(strSubstring, "this as java.lang.String…ing(startIndex, endIndex)");
            Charset charset = Charsets.ISO_8859_1;
            Intrinsics.checkNotNull(strSubstring, "null cannot be cast to non-null type java.lang.String");
            byte[] bytes = strSubstring.getBytes(charset);
            Intrinsics.checkNotNullExpressionValue(bytes, "this as java.lang.String).getBytes(charset)");
            return bytes;
        }
        return base64.charsToBytesImpl$kotlin_stdlib(source, i, i2);
    }

    private static final String platformEncodeToString(Base64 base64, byte[] source, int i, int i2) {
        Intrinsics.checkNotNullParameter(base64, "<this>");
        Intrinsics.checkNotNullParameter(source, "source");
        return new String(base64.encodeToByteArrayImpl$kotlin_stdlib(source, i, i2), Charsets.ISO_8859_1);
    }

    private static final int platformEncodeIntoByteArray(Base64 base64, byte[] source, byte[] destination, int i, int i2, int i3) {
        Intrinsics.checkNotNullParameter(base64, "<this>");
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(destination, "destination");
        return base64.encodeIntoByteArrayImpl$kotlin_stdlib(source, destination, i, i2, i3);
    }

    private static final byte[] platformEncodeToByteArray(Base64 base64, byte[] source, int i, int i2) {
        Intrinsics.checkNotNullParameter(base64, "<this>");
        Intrinsics.checkNotNullParameter(source, "source");
        return base64.encodeToByteArrayImpl$kotlin_stdlib(source, i, i2);
    }
}

