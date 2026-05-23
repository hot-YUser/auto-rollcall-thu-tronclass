package androidx.core.text;

import android.text.Spannable;
import android.text.SpannableString;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000(\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\r\n\u0000\u001a\r\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u0087\b\u001a%\u0010\u0003\u001a\u00020\u0001*\u00020\u00022\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\bH\u0086\n\u001a\u001d\u0010\u0003\u001a\u00020\u0001*\u00020\u00022\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\bH\u0086\n\u001a\r\u0010\u000b\u001a\u00020\u0002*\u00020\fH\u0086\b¨\u0006\r"}, d2 = {"clearSpans", "", "Landroid/text/Spannable;", "set", "start", "", "end", "span", "", "range", "Lkotlin/ranges/IntRange;", "toSpannable", "", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class SpannableStringKt {
    public static final Spannable toSpannable(CharSequence toSpannable) {
        Intrinsics.checkParameterIsNotNull(toSpannable, "$this$toSpannable");
        SpannableString spannableStringValueOf = SpannableString.valueOf(toSpannable);
        Intrinsics.checkExpressionValueIsNotNull(spannableStringValueOf, "SpannableString.valueOf(this)");
        return spannableStringValueOf;
    }

    public static final void clearSpans(Spannable clearSpans) {
        Intrinsics.checkParameterIsNotNull(clearSpans, "$this$clearSpans");
        Spannable spannable = clearSpans;
        Object[] spans = spannable.getSpans(0, spannable.length(), Object.class);
        Intrinsics.checkExpressionValueIsNotNull(spans, "getSpans(start, end, T::class.java)");
        for (Object obj : spans) {
            clearSpans.removeSpan(obj);
        }
    }

    public static final void set(Spannable set, int i, int i2, Object span) {
        Intrinsics.checkParameterIsNotNull(set, "$this$set");
        Intrinsics.checkParameterIsNotNull(span, "span");
        set.setSpan(span, i, i2, 17);
    }

    public static final void set(Spannable set, IntRange range, Object span) {
        Intrinsics.checkParameterIsNotNull(set, "$this$set");
        Intrinsics.checkParameterIsNotNull(range, "range");
        Intrinsics.checkParameterIsNotNull(span, "span");
        set.setSpan(span, range.getStart().intValue(), range.getEndInclusive().intValue(), 17);
    }
}

