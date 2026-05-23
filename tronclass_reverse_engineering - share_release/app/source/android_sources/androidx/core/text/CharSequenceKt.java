package androidx.core.text;

import android.text.TextUtils;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000\u0012\n\u0000\n\u0002\u0010\u000b\n\u0002\u0010\r\n\u0000\n\u0002\u0010\b\n\u0000\u001a\r\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u0086\b\u001a\r\u0010\u0003\u001a\u00020\u0004*\u00020\u0002H\u0086\b¨\u0006\u0005"}, d2 = {"isDigitsOnly", "", "", "trimmedLength", "", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class CharSequenceKt {
    public static final boolean isDigitsOnly(CharSequence isDigitsOnly) {
        Intrinsics.checkParameterIsNotNull(isDigitsOnly, "$this$isDigitsOnly");
        return TextUtils.isDigitsOnly(isDigitsOnly);
    }

    public static final int trimmedLength(CharSequence trimmedLength) {
        Intrinsics.checkParameterIsNotNull(trimmedLength, "$this$trimmedLength");
        return TextUtils.getTrimmedLength(trimmedLength);
    }
}

