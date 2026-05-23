package androidx.core.graphics;

import android.graphics.Paint;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000\u0012\n\u0000\n\u0002\u0010\u000b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a\u0017\u0010\u0000\u001a\u00020\u0001*\u00020\u00022\b\u0010\u0003\u001a\u0004\u0018\u00010\u0004H\u0086\b¨\u0006\u0005"}, d2 = {"setBlendMode", "", "Landroid/graphics/Paint;", "blendModeCompat", "Landroidx/core/graphics/BlendModeCompat;", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class PaintKt {
    public static final boolean setBlendMode(Paint setBlendMode, BlendModeCompat blendModeCompat) {
        Intrinsics.checkParameterIsNotNull(setBlendMode, "$this$setBlendMode");
        return PaintCompat.setBlendMode(setBlendMode, blendModeCompat);
    }
}

