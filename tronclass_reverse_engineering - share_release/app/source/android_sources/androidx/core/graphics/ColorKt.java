package androidx.core.graphics;

import android.graphics.Color;
import android.graphics.ColorSpace;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000>\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\u0010\t\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0002\u001a\r\u0010\u0018\u001a\u00020\u0004*\u00020\u0019H\u0087\n\u001a\r\u0010\u0018\u001a\u00020\u0001*\u00020\u0001H\u0086\n\u001a\r\u0010\u0018\u001a\u00020\u0004*\u00020\u0005H\u0087\n\u001a\r\u0010\u001a\u001a\u00020\u0004*\u00020\u0019H\u0087\n\u001a\r\u0010\u001a\u001a\u00020\u0001*\u00020\u0001H\u0086\n\u001a\r\u0010\u001a\u001a\u00020\u0004*\u00020\u0005H\u0087\n\u001a\r\u0010\u001b\u001a\u00020\u0004*\u00020\u0019H\u0087\n\u001a\r\u0010\u001b\u001a\u00020\u0001*\u00020\u0001H\u0086\n\u001a\r\u0010\u001b\u001a\u00020\u0004*\u00020\u0005H\u0087\n\u001a\r\u0010\u001c\u001a\u00020\u0004*\u00020\u0019H\u0087\n\u001a\r\u0010\u001c\u001a\u00020\u0001*\u00020\u0001H\u0086\n\u001a\r\u0010\u001c\u001a\u00020\u0004*\u00020\u0005H\u0087\n\u001a\u0015\u0010\u001d\u001a\u00020\u0019*\u00020\u00192\u0006\u0010\t\u001a\u00020\nH\u0087\f\u001a\u0015\u0010\u001d\u001a\u00020\u0019*\u00020\u00192\u0006\u0010\t\u001a\u00020\u001eH\u0087\f\u001a\u0015\u0010\u001d\u001a\u00020\u0005*\u00020\u00012\u0006\u0010\t\u001a\u00020\nH\u0087\f\u001a\u0015\u0010\u001d\u001a\u00020\u0005*\u00020\u00012\u0006\u0010\t\u001a\u00020\u001eH\u0087\f\u001a\u0015\u0010\u001d\u001a\u00020\u0005*\u00020\u00052\u0006\u0010\t\u001a\u00020\nH\u0087\f\u001a\u0015\u0010\u001d\u001a\u00020\u0005*\u00020\u00052\u0006\u0010\t\u001a\u00020\u001eH\u0087\f\u001a\u0015\u0010\u001f\u001a\u00020\u0019*\u00020\u00192\u0006\u0010 \u001a\u00020\u0019H\u0087\u0002\u001a\r\u0010!\u001a\u00020\u0019*\u00020\u0001H\u0087\b\u001a\r\u0010!\u001a\u00020\u0019*\u00020\u0005H\u0087\b\u001a\r\u0010\"\u001a\u00020\u0001*\u00020\u0005H\u0087\b\u001a\r\u0010\"\u001a\u00020\u0001*\u00020#H\u0087\b\u001a\r\u0010$\u001a\u00020\u0005*\u00020\u0001H\u0087\b\"\u0016\u0010\u0000\u001a\u00020\u0001*\u00020\u00018Æ\u0002¢\u0006\u0006\u001a\u0004\b\u0002\u0010\u0003\"\u0016\u0010\u0000\u001a\u00020\u0004*\u00020\u00058Ç\u0002¢\u0006\u0006\u001a\u0004\b\u0002\u0010\u0006\"\u0016\u0010\u0007\u001a\u00020\u0001*\u00020\u00018Æ\u0002¢\u0006\u0006\u001a\u0004\b\b\u0010\u0003\"\u0016\u0010\u0007\u001a\u00020\u0004*\u00020\u00058Ç\u0002¢\u0006\u0006\u001a\u0004\b\b\u0010\u0006\"\u0016\u0010\t\u001a\u00020\n*\u00020\u00058Ç\u0002¢\u0006\u0006\u001a\u0004\b\u000b\u0010\f\"\u0016\u0010\r\u001a\u00020\u0001*\u00020\u00018Æ\u0002¢\u0006\u0006\u001a\u0004\b\u000e\u0010\u0003\"\u0016\u0010\r\u001a\u00020\u0004*\u00020\u00058Ç\u0002¢\u0006\u0006\u001a\u0004\b\u000e\u0010\u0006\"\u0016\u0010\u000f\u001a\u00020\u0010*\u00020\u00058Ç\u0002¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0011\"\u0016\u0010\u0012\u001a\u00020\u0010*\u00020\u00058Ç\u0002¢\u0006\u0006\u001a\u0004\b\u0012\u0010\u0011\"\u0016\u0010\u0013\u001a\u00020\u0004*\u00020\u00018Ç\u0002¢\u0006\u0006\u001a\u0004\b\u0014\u0010\u0015\"\u0016\u0010\u0013\u001a\u00020\u0004*\u00020\u00058Ç\u0002¢\u0006\u0006\u001a\u0004\b\u0014\u0010\u0006\"\u0016\u0010\u0016\u001a\u00020\u0001*\u00020\u00018Æ\u0002¢\u0006\u0006\u001a\u0004\b\u0017\u0010\u0003\"\u0016\u0010\u0016\u001a\u00020\u0004*\u00020\u00058Ç\u0002¢\u0006\u0006\u001a\u0004\b\u0017\u0010\u0006¨\u0006%"}, d2 = {"alpha", "", "getAlpha", "(I)I", "", "", "(J)F", "blue", "getBlue", "colorSpace", "Landroid/graphics/ColorSpace;", "getColorSpace", "(J)Landroid/graphics/ColorSpace;", "green", "getGreen", "isSrgb", "", "(J)Z", "isWideGamut", "luminance", "getLuminance", "(I)F", "red", "getRed", "component1", "Landroid/graphics/Color;", "component2", "component3", "component4", "convertTo", "Landroid/graphics/ColorSpace$Named;", "plus", "c", "toColor", "toColorInt", "", "toColorLong", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class ColorKt {
    public static final int component1(int i) {
        return (i >> 24) & 255;
    }

    public static final int component2(int i) {
        return (i >> 16) & 255;
    }

    public static final int component3(int i) {
        return (i >> 8) & 255;
    }

    public static final int component4(int i) {
        return i & 255;
    }

    public static final int getAlpha(int i) {
        return (i >> 24) & 255;
    }

    public static final int getBlue(int i) {
        return i & 255;
    }

    public static final int getGreen(int i) {
        return (i >> 8) & 255;
    }

    public static final int getRed(int i) {
        return (i >> 16) & 255;
    }

    public static final float component1(Color component1) {
        Intrinsics.checkParameterIsNotNull(component1, "$this$component1");
        return component1.getComponent(0);
    }

    public static final float component2(Color component2) {
        Intrinsics.checkParameterIsNotNull(component2, "$this$component2");
        return component2.getComponent(1);
    }

    public static final float component3(Color component3) {
        Intrinsics.checkParameterIsNotNull(component3, "$this$component3");
        return component3.getComponent(2);
    }

    public static final float component4(Color component4) {
        Intrinsics.checkParameterIsNotNull(component4, "$this$component4");
        return component4.getComponent(3);
    }

    public static final Color plus(Color plus, Color c) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        Intrinsics.checkParameterIsNotNull(c, "c");
        Color colorCompositeColors = ColorUtils.compositeColors(c, plus);
        Intrinsics.checkExpressionValueIsNotNull(colorCompositeColors, "ColorUtils.compositeColors(c, this)");
        return colorCompositeColors;
    }

    public static final float getLuminance(int i) {
        return Color.luminance(i);
    }

    public static final Color toColor(int i) {
        Color colorValueOf = Color.valueOf(i);
        Intrinsics.checkExpressionValueIsNotNull(colorValueOf, "Color.valueOf(this)");
        return colorValueOf;
    }

    public static final long toColorLong(int i) {
        return Color.pack(i);
    }

    public static final float component1(long j) {
        return Color.red(j);
    }

    public static final float component2(long j) {
        return Color.green(j);
    }

    public static final float component3(long j) {
        return Color.blue(j);
    }

    public static final float component4(long j) {
        return Color.alpha(j);
    }

    public static final float getAlpha(long j) {
        return Color.alpha(j);
    }

    public static final float getRed(long j) {
        return Color.red(j);
    }

    public static final float getGreen(long j) {
        return Color.green(j);
    }

    public static final float getBlue(long j) {
        return Color.blue(j);
    }

    public static final float getLuminance(long j) {
        return Color.luminance(j);
    }

    public static final Color toColor(long j) {
        Color colorValueOf = Color.valueOf(j);
        Intrinsics.checkExpressionValueIsNotNull(colorValueOf, "Color.valueOf(this)");
        return colorValueOf;
    }

    public static final int toColorInt(long j) {
        return Color.toArgb(j);
    }

    public static final boolean isSrgb(long j) {
        return Color.isSrgb(j);
    }

    public static final boolean isWideGamut(long j) {
        return Color.isWideGamut(j);
    }

    public static final ColorSpace getColorSpace(long j) {
        ColorSpace colorSpace = Color.colorSpace(j);
        Intrinsics.checkExpressionValueIsNotNull(colorSpace, "Color.colorSpace(this)");
        return colorSpace;
    }

    public static final long convertTo(int i, ColorSpace.Named colorSpace) {
        Intrinsics.checkParameterIsNotNull(colorSpace, "colorSpace");
        return Color.convert(i, ColorSpace.get(colorSpace));
    }

    public static final long convertTo(int i, ColorSpace colorSpace) {
        Intrinsics.checkParameterIsNotNull(colorSpace, "colorSpace");
        return Color.convert(i, colorSpace);
    }

    public static final long convertTo(long j, ColorSpace.Named colorSpace) {
        Intrinsics.checkParameterIsNotNull(colorSpace, "colorSpace");
        return Color.convert(j, ColorSpace.get(colorSpace));
    }

    public static final long convertTo(long j, ColorSpace colorSpace) {
        Intrinsics.checkParameterIsNotNull(colorSpace, "colorSpace");
        return Color.convert(j, colorSpace);
    }

    public static final Color convertTo(Color convertTo, ColorSpace.Named colorSpace) {
        Intrinsics.checkParameterIsNotNull(convertTo, "$this$convertTo");
        Intrinsics.checkParameterIsNotNull(colorSpace, "colorSpace");
        Color colorConvert = convertTo.convert(ColorSpace.get(colorSpace));
        Intrinsics.checkExpressionValueIsNotNull(colorConvert, "convert(ColorSpace.get(colorSpace))");
        return colorConvert;
    }

    public static final Color convertTo(Color convertTo, ColorSpace colorSpace) {
        Intrinsics.checkParameterIsNotNull(convertTo, "$this$convertTo");
        Intrinsics.checkParameterIsNotNull(colorSpace, "colorSpace");
        Color colorConvert = convertTo.convert(colorSpace);
        Intrinsics.checkExpressionValueIsNotNull(colorConvert, "convert(colorSpace)");
        return colorConvert;
    }

    public static final int toColorInt(String toColorInt) {
        Intrinsics.checkParameterIsNotNull(toColorInt, "$this$toColorInt");
        return Color.parseColor(toColorInt);
    }
}

