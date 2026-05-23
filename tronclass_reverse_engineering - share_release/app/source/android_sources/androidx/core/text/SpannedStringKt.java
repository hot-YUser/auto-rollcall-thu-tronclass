package androidx.core.text;

import android.text.Spanned;
import android.text.SpannedString;
import androidx.exifinterface.media.ExifInterface;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000 \n\u0000\n\u0002\u0010\u0011\n\u0000\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\r\n\u0000\u001a:\u0010\u0000\u001a\n\u0012\u0006\b\u0001\u0012\u0002H\u00020\u0001\"\n\b\u0000\u0010\u0002\u0018\u0001*\u00020\u0003*\u00020\u00042\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\u0006H\u0086\b¢\u0006\u0002\u0010\b\u001a\r\u0010\t\u001a\u00020\u0004*\u00020\nH\u0086\b¨\u0006\u000b"}, d2 = {"getSpans", "", ExifInterface.GPS_DIRECTION_TRUE, "", "Landroid/text/Spanned;", "start", "", "end", "(Landroid/text/Spanned;II)[Ljava/lang/Object;", "toSpanned", "", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class SpannedStringKt {
    public static final Spanned toSpanned(CharSequence toSpanned) {
        Intrinsics.checkParameterIsNotNull(toSpanned, "$this$toSpanned");
        SpannedString spannedStringValueOf = SpannedString.valueOf(toSpanned);
        Intrinsics.checkExpressionValueIsNotNull(spannedStringValueOf, "SpannedString.valueOf(this)");
        return spannedStringValueOf;
    }

    public static /* synthetic */ Object[] getSpans$default(Spanned getSpans, int i, int i2, int i3, Object obj) {
        if ((i3 & 1) != 0) {
            i = 0;
        }
        if ((i3 & 2) != 0) {
            i2 = getSpans.length();
        }
        Intrinsics.checkParameterIsNotNull(getSpans, "$this$getSpans");
        Intrinsics.reifiedOperationMarker(4, ExifInterface.GPS_DIRECTION_TRUE);
        Object[] spans = getSpans.getSpans(i, i2, Object.class);
        Intrinsics.checkExpressionValueIsNotNull(spans, "getSpans(start, end, T::class.java)");
        return spans;
    }

    public static final /* synthetic */ <T> T[] getSpans(Spanned getSpans, int i, int i2) {
        Intrinsics.checkParameterIsNotNull(getSpans, "$this$getSpans");
        Intrinsics.reifiedOperationMarker(4, ExifInterface.GPS_DIRECTION_TRUE);
        T[] tArr = (T[]) getSpans.getSpans(i, i2, Object.class);
        Intrinsics.checkExpressionValueIsNotNull(tArr, "getSpans(start, end, T::class.java)");
        return tArr;
    }
}

