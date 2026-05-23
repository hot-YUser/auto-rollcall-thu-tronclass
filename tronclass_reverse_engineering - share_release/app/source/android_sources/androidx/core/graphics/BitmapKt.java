package androidx.core.graphics;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.ColorSpace;
import android.graphics.Point;
import android.graphics.PointF;
import com.onesignal.NotificationBundleProcessor;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000D\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\b\u001a#\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0006H\u0086\b\u001a7\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\nH\u0087\b\u001a&\u0010\u000b\u001a\u00020\u0001*\u00020\u00012\u0017\u0010\f\u001a\u0013\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000f0\r¢\u0006\u0002\b\u0010H\u0086\b\u001a\u0015\u0010\u0011\u001a\u00020\b*\u00020\u00012\u0006\u0010\u0012\u001a\u00020\u0013H\u0086\n\u001a\u0015\u0010\u0011\u001a\u00020\b*\u00020\u00012\u0006\u0010\u0012\u001a\u00020\u0014H\u0086\n\u001a\u001d\u0010\u0015\u001a\u00020\u0003*\u00020\u00012\u0006\u0010\u0016\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u0003H\u0086\n\u001a'\u0010\u0018\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0019\u001a\u00020\bH\u0086\b\u001a'\u0010\u001a\u001a\u00020\u000f*\u00020\u00012\u0006\u0010\u0016\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\b\b\u0001\u0010\u001b\u001a\u00020\u0003H\u0086\n¨\u0006\u001c"}, d2 = {"createBitmap", "Landroid/graphics/Bitmap;", "width", "", "height", "config", "Landroid/graphics/Bitmap$Config;", "hasAlpha", "", "colorSpace", "Landroid/graphics/ColorSpace;", "applyCanvas", "block", "Lkotlin/Function1;", "Landroid/graphics/Canvas;", "", "Lkotlin/ExtensionFunctionType;", "contains", NotificationBundleProcessor.PUSH_MINIFIED_BUTTON_ICON, "Landroid/graphics/Point;", "Landroid/graphics/PointF;", "get", "x", "y", "scale", "filter", "set", "color", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class BitmapKt {
    public static final Bitmap applyCanvas(Bitmap applyCanvas, Function1<? super Canvas, Unit> block) {
        Intrinsics.checkParameterIsNotNull(applyCanvas, "$this$applyCanvas");
        Intrinsics.checkParameterIsNotNull(block, "block");
        block.invoke(new Canvas(applyCanvas));
        return applyCanvas;
    }

    public static final int get(Bitmap get, int i, int i2) {
        Intrinsics.checkParameterIsNotNull(get, "$this$get");
        return get.getPixel(i, i2);
    }

    public static final void set(Bitmap set, int i, int i2, int i3) {
        Intrinsics.checkParameterIsNotNull(set, "$this$set");
        set.setPixel(i, i2, i3);
    }

    public static /* synthetic */ Bitmap scale$default(Bitmap scale, int i, int i2, boolean z, int i3, Object obj) {
        if ((i3 & 4) != 0) {
            z = true;
        }
        Intrinsics.checkParameterIsNotNull(scale, "$this$scale");
        Bitmap bitmapCreateScaledBitmap = Bitmap.createScaledBitmap(scale, i, i2, z);
        Intrinsics.checkExpressionValueIsNotNull(bitmapCreateScaledBitmap, "Bitmap.createScaledBitma…s, width, height, filter)");
        return bitmapCreateScaledBitmap;
    }

    public static final Bitmap scale(Bitmap scale, int i, int i2, boolean z) {
        Intrinsics.checkParameterIsNotNull(scale, "$this$scale");
        Bitmap bitmapCreateScaledBitmap = Bitmap.createScaledBitmap(scale, i, i2, z);
        Intrinsics.checkExpressionValueIsNotNull(bitmapCreateScaledBitmap, "Bitmap.createScaledBitma…s, width, height, filter)");
        return bitmapCreateScaledBitmap;
    }

    public static /* synthetic */ Bitmap createBitmap$default(int i, int i2, Bitmap.Config config, int i3, Object obj) {
        if ((i3 & 4) != 0) {
            config = Bitmap.Config.ARGB_8888;
        }
        Intrinsics.checkParameterIsNotNull(config, "config");
        Bitmap bitmapCreateBitmap = Bitmap.createBitmap(i, i2, config);
        Intrinsics.checkExpressionValueIsNotNull(bitmapCreateBitmap, "Bitmap.createBitmap(width, height, config)");
        return bitmapCreateBitmap;
    }

    public static final Bitmap createBitmap(int i, int i2, Bitmap.Config config) {
        Intrinsics.checkParameterIsNotNull(config, "config");
        Bitmap bitmapCreateBitmap = Bitmap.createBitmap(i, i2, config);
        Intrinsics.checkExpressionValueIsNotNull(bitmapCreateBitmap, "Bitmap.createBitmap(width, height, config)");
        return bitmapCreateBitmap;
    }

    public static /* synthetic */ Bitmap createBitmap$default(int i, int i2, Bitmap.Config config, boolean z, ColorSpace colorSpace, int i3, Object obj) {
        if ((i3 & 4) != 0) {
            config = Bitmap.Config.ARGB_8888;
        }
        if ((i3 & 8) != 0) {
            z = true;
        }
        if ((i3 & 16) != 0) {
            colorSpace = ColorSpace.get(ColorSpace.Named.SRGB);
            Intrinsics.checkExpressionValueIsNotNull(colorSpace, "ColorSpace.get(ColorSpace.Named.SRGB)");
        }
        Intrinsics.checkParameterIsNotNull(config, "config");
        Intrinsics.checkParameterIsNotNull(colorSpace, "colorSpace");
        Bitmap bitmapCreateBitmap = Bitmap.createBitmap(i, i2, config, z, colorSpace);
        Intrinsics.checkExpressionValueIsNotNull(bitmapCreateBitmap, "Bitmap.createBitmap(widt…ig, hasAlpha, colorSpace)");
        return bitmapCreateBitmap;
    }

    public static final Bitmap createBitmap(int i, int i2, Bitmap.Config config, boolean z, ColorSpace colorSpace) {
        Intrinsics.checkParameterIsNotNull(config, "config");
        Intrinsics.checkParameterIsNotNull(colorSpace, "colorSpace");
        Bitmap bitmapCreateBitmap = Bitmap.createBitmap(i, i2, config, z, colorSpace);
        Intrinsics.checkExpressionValueIsNotNull(bitmapCreateBitmap, "Bitmap.createBitmap(widt…ig, hasAlpha, colorSpace)");
        return bitmapCreateBitmap;
    }

    public static final boolean contains(Bitmap contains, Point p) {
        Intrinsics.checkParameterIsNotNull(contains, "$this$contains");
        Intrinsics.checkParameterIsNotNull(p, "p");
        return p.x >= 0 && p.x < contains.getWidth() && p.y >= 0 && p.y < contains.getHeight();
    }

    public static final boolean contains(Bitmap contains, PointF p) {
        Intrinsics.checkParameterIsNotNull(contains, "$this$contains");
        Intrinsics.checkParameterIsNotNull(p, "p");
        float f = 0;
        return p.x >= f && p.x < ((float) contains.getWidth()) && p.y >= f && p.y < ((float) contains.getHeight());
    }
}

