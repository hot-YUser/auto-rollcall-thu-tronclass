package androidx.core.graphics;

import android.graphics.Matrix;
import android.graphics.Point;
import android.graphics.PointF;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Region;
import com.onesignal.NotificationBundleProcessor;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000<\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a\u0015\u0010\u0000\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001H\u0087\f\u001a\u0015\u0010\u0000\u001a\u00020\u0003*\u00020\u00032\u0006\u0010\u0002\u001a\u00020\u0003H\u0087\f\u001a\r\u0010\u0004\u001a\u00020\u0005*\u00020\u0001H\u0086\n\u001a\r\u0010\u0004\u001a\u00020\u0006*\u00020\u0003H\u0086\n\u001a\r\u0010\u0007\u001a\u00020\u0005*\u00020\u0001H\u0086\n\u001a\r\u0010\u0007\u001a\u00020\u0006*\u00020\u0003H\u0086\n\u001a\r\u0010\b\u001a\u00020\u0005*\u00020\u0001H\u0086\n\u001a\r\u0010\b\u001a\u00020\u0006*\u00020\u0003H\u0086\n\u001a\r\u0010\t\u001a\u00020\u0005*\u00020\u0001H\u0086\n\u001a\r\u0010\t\u001a\u00020\u0006*\u00020\u0003H\u0086\n\u001a\u0015\u0010\n\u001a\u00020\u000b*\u00020\u00012\u0006\u0010\f\u001a\u00020\rH\u0086\n\u001a\u0015\u0010\n\u001a\u00020\u000b*\u00020\u00032\u0006\u0010\f\u001a\u00020\u000eH\u0086\n\u001a\u0015\u0010\u000f\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0010\u001a\u00020\rH\u0086\n\u001a\u0015\u0010\u000f\u001a\u00020\u0011*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001H\u0086\n\u001a\u0015\u0010\u000f\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0010\u001a\u00020\u0005H\u0086\n\u001a\u0015\u0010\u000f\u001a\u00020\u0003*\u00020\u00032\u0006\u0010\u0010\u001a\u00020\u000eH\u0086\n\u001a\u0015\u0010\u000f\u001a\u00020\u0011*\u00020\u00032\u0006\u0010\u0002\u001a\u00020\u0003H\u0086\n\u001a\u0015\u0010\u000f\u001a\u00020\u0003*\u00020\u00032\u0006\u0010\u0010\u001a\u00020\u0006H\u0086\n\u001a\u0015\u0010\u0012\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001H\u0086\f\u001a\u0015\u0010\u0012\u001a\u00020\u0003*\u00020\u00032\u0006\u0010\u0002\u001a\u00020\u0003H\u0086\f\u001a\u0015\u0010\u0013\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0010\u001a\u00020\rH\u0086\n\u001a\u0015\u0010\u0013\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001H\u0086\n\u001a\u0015\u0010\u0013\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0010\u001a\u00020\u0005H\u0086\n\u001a\u0015\u0010\u0013\u001a\u00020\u0003*\u00020\u00032\u0006\u0010\u0010\u001a\u00020\u000eH\u0086\n\u001a\u0015\u0010\u0013\u001a\u00020\u0003*\u00020\u00032\u0006\u0010\u0002\u001a\u00020\u0003H\u0086\n\u001a\u0015\u0010\u0013\u001a\u00020\u0003*\u00020\u00032\u0006\u0010\u0010\u001a\u00020\u0006H\u0086\n\u001a\u0015\u0010\u0014\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0015\u001a\u00020\u0005H\u0086\n\u001a\u0015\u0010\u0014\u001a\u00020\u0003*\u00020\u00032\u0006\u0010\u0015\u001a\u00020\u0006H\u0086\n\u001a\u0015\u0010\u0014\u001a\u00020\u0003*\u00020\u00032\u0006\u0010\u0015\u001a\u00020\u0005H\u0086\n\u001a\r\u0010\u0016\u001a\u00020\u0001*\u00020\u0003H\u0086\b\u001a\r\u0010\u0017\u001a\u00020\u0003*\u00020\u0001H\u0086\b\u001a\r\u0010\u0018\u001a\u00020\u0011*\u00020\u0001H\u0086\b\u001a\r\u0010\u0018\u001a\u00020\u0011*\u00020\u0003H\u0086\b\u001a\u0015\u0010\u0019\u001a\u00020\u0003*\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u001bH\u0086\b\u001a\u0015\u0010\u001c\u001a\u00020\u0011*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001H\u0086\f\u001a\u0015\u0010\u001c\u001a\u00020\u0011*\u00020\u00032\u0006\u0010\u0002\u001a\u00020\u0003H\u0086\f¨\u0006\u001d"}, d2 = {"and", "Landroid/graphics/Rect;", "r", "Landroid/graphics/RectF;", "component1", "", "", "component2", "component3", "component4", "contains", "", NotificationBundleProcessor.PUSH_MINIFIED_BUTTON_ICON, "Landroid/graphics/Point;", "Landroid/graphics/PointF;", "minus", "xy", "Landroid/graphics/Region;", "or", "plus", "times", "factor", "toRect", "toRectF", "toRegion", "transform", "m", "Landroid/graphics/Matrix;", "xor", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class RectKt {
    public static final int component1(Rect component1) {
        Intrinsics.checkParameterIsNotNull(component1, "$this$component1");
        return component1.left;
    }

    public static final int component2(Rect component2) {
        Intrinsics.checkParameterIsNotNull(component2, "$this$component2");
        return component2.top;
    }

    public static final int component3(Rect component3) {
        Intrinsics.checkParameterIsNotNull(component3, "$this$component3");
        return component3.right;
    }

    public static final int component4(Rect component4) {
        Intrinsics.checkParameterIsNotNull(component4, "$this$component4");
        return component4.bottom;
    }

    public static final float component1(RectF component1) {
        Intrinsics.checkParameterIsNotNull(component1, "$this$component1");
        return component1.left;
    }

    public static final float component2(RectF component2) {
        Intrinsics.checkParameterIsNotNull(component2, "$this$component2");
        return component2.top;
    }

    public static final float component3(RectF component3) {
        Intrinsics.checkParameterIsNotNull(component3, "$this$component3");
        return component3.right;
    }

    public static final float component4(RectF component4) {
        Intrinsics.checkParameterIsNotNull(component4, "$this$component4");
        return component4.bottom;
    }

    public static final Rect plus(Rect plus, Rect r) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        Intrinsics.checkParameterIsNotNull(r, "r");
        Rect rect = new Rect(plus);
        rect.union(r);
        return rect;
    }

    public static final RectF plus(RectF plus, RectF r) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        Intrinsics.checkParameterIsNotNull(r, "r");
        RectF rectF = new RectF(plus);
        rectF.union(r);
        return rectF;
    }

    public static final Rect plus(Rect plus, int i) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        Rect rect = new Rect(plus);
        rect.offset(i, i);
        return rect;
    }

    public static final RectF plus(RectF plus, float f) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        RectF rectF = new RectF(plus);
        rectF.offset(f, f);
        return rectF;
    }

    public static final Rect plus(Rect plus, Point xy) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        Intrinsics.checkParameterIsNotNull(xy, "xy");
        Rect rect = new Rect(plus);
        rect.offset(xy.x, xy.y);
        return rect;
    }

    public static final RectF plus(RectF plus, PointF xy) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        Intrinsics.checkParameterIsNotNull(xy, "xy");
        RectF rectF = new RectF(plus);
        rectF.offset(xy.x, xy.y);
        return rectF;
    }

    public static final Region minus(Rect minus, Rect r) {
        Intrinsics.checkParameterIsNotNull(minus, "$this$minus");
        Intrinsics.checkParameterIsNotNull(r, "r");
        Region region = new Region(minus);
        region.op(r, Region.Op.DIFFERENCE);
        return region;
    }

    public static final Rect minus(Rect minus, int i) {
        Intrinsics.checkParameterIsNotNull(minus, "$this$minus");
        Rect rect = new Rect(minus);
        int i2 = -i;
        rect.offset(i2, i2);
        return rect;
    }

    public static final RectF minus(RectF minus, float f) {
        Intrinsics.checkParameterIsNotNull(minus, "$this$minus");
        RectF rectF = new RectF(minus);
        float f2 = -f;
        rectF.offset(f2, f2);
        return rectF;
    }

    public static final Rect minus(Rect minus, Point xy) {
        Intrinsics.checkParameterIsNotNull(minus, "$this$minus");
        Intrinsics.checkParameterIsNotNull(xy, "xy");
        Rect rect = new Rect(minus);
        rect.offset(-xy.x, -xy.y);
        return rect;
    }

    public static final RectF minus(RectF minus, PointF xy) {
        Intrinsics.checkParameterIsNotNull(minus, "$this$minus");
        Intrinsics.checkParameterIsNotNull(xy, "xy");
        RectF rectF = new RectF(minus);
        rectF.offset(-xy.x, -xy.y);
        return rectF;
    }

    public static final Rect times(Rect times, int i) {
        Intrinsics.checkParameterIsNotNull(times, "$this$times");
        Rect rect = new Rect(times);
        rect.top *= i;
        rect.left *= i;
        rect.right *= i;
        rect.bottom *= i;
        return rect;
    }

    public static final RectF times(RectF times, float f) {
        Intrinsics.checkParameterIsNotNull(times, "$this$times");
        RectF rectF = new RectF(times);
        rectF.top *= f;
        rectF.left *= f;
        rectF.right *= f;
        rectF.bottom *= f;
        return rectF;
    }

    public static final Rect and(Rect and, Rect r) {
        Intrinsics.checkParameterIsNotNull(and, "$this$and");
        Intrinsics.checkParameterIsNotNull(r, "r");
        Rect rect = new Rect(and);
        rect.intersect(r);
        return rect;
    }

    public static final RectF and(RectF and, RectF r) {
        Intrinsics.checkParameterIsNotNull(and, "$this$and");
        Intrinsics.checkParameterIsNotNull(r, "r");
        RectF rectF = new RectF(and);
        rectF.intersect(r);
        return rectF;
    }

    public static final Region xor(Rect xor, Rect r) {
        Intrinsics.checkParameterIsNotNull(xor, "$this$xor");
        Intrinsics.checkParameterIsNotNull(r, "r");
        Region region = new Region(xor);
        region.op(r, Region.Op.XOR);
        return region;
    }

    public static final boolean contains(Rect contains, Point p) {
        Intrinsics.checkParameterIsNotNull(contains, "$this$contains");
        Intrinsics.checkParameterIsNotNull(p, "p");
        return contains.contains(p.x, p.y);
    }

    public static final boolean contains(RectF contains, PointF p) {
        Intrinsics.checkParameterIsNotNull(contains, "$this$contains");
        Intrinsics.checkParameterIsNotNull(p, "p");
        return contains.contains(p.x, p.y);
    }

    public static final RectF toRectF(Rect toRectF) {
        Intrinsics.checkParameterIsNotNull(toRectF, "$this$toRectF");
        return new RectF(toRectF);
    }

    public static final Rect toRect(RectF toRect) {
        Intrinsics.checkParameterIsNotNull(toRect, "$this$toRect");
        Rect rect = new Rect();
        toRect.roundOut(rect);
        return rect;
    }

    public static final Region toRegion(Rect toRegion) {
        Intrinsics.checkParameterIsNotNull(toRegion, "$this$toRegion");
        return new Region(toRegion);
    }

    public static final RectF transform(RectF transform, Matrix m) {
        Intrinsics.checkParameterIsNotNull(transform, "$this$transform");
        Intrinsics.checkParameterIsNotNull(m, "m");
        m.mapRect(transform);
        return transform;
    }

    public static final Region minus(RectF minus, RectF r) {
        Intrinsics.checkParameterIsNotNull(minus, "$this$minus");
        Intrinsics.checkParameterIsNotNull(r, "r");
        Rect rect = new Rect();
        minus.roundOut(rect);
        Region region = new Region(rect);
        Rect rect2 = new Rect();
        r.roundOut(rect2);
        region.op(rect2, Region.Op.DIFFERENCE);
        return region;
    }

    public static final RectF times(RectF times, int i) {
        Intrinsics.checkParameterIsNotNull(times, "$this$times");
        float f = i;
        RectF rectF = new RectF(times);
        rectF.top *= f;
        rectF.left *= f;
        rectF.right *= f;
        rectF.bottom *= f;
        return rectF;
    }

    public static final Rect or(Rect or, Rect r) {
        Intrinsics.checkParameterIsNotNull(or, "$this$or");
        Intrinsics.checkParameterIsNotNull(r, "r");
        Rect rect = new Rect(or);
        rect.union(r);
        return rect;
    }

    public static final RectF or(RectF or, RectF r) {
        Intrinsics.checkParameterIsNotNull(or, "$this$or");
        Intrinsics.checkParameterIsNotNull(r, "r");
        RectF rectF = new RectF(or);
        rectF.union(r);
        return rectF;
    }

    public static final Region xor(RectF xor, RectF r) {
        Intrinsics.checkParameterIsNotNull(xor, "$this$xor");
        Intrinsics.checkParameterIsNotNull(r, "r");
        Rect rect = new Rect();
        xor.roundOut(rect);
        Region region = new Region(rect);
        Rect rect2 = new Rect();
        r.roundOut(rect2);
        region.op(rect2, Region.Op.XOR);
        return region;
    }

    public static final Region toRegion(RectF toRegion) {
        Intrinsics.checkParameterIsNotNull(toRegion, "$this$toRegion");
        Rect rect = new Rect();
        toRegion.roundOut(rect);
        return new Region(rect);
    }
}

