package androidx.core.graphics;

import android.graphics.Point;
import android.graphics.PointF;
import com.onesignal.NotificationBundleProcessor;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000\u0016\n\u0000\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0002\u0010\u0007\n\u0002\u0018\u0002\n\u0002\b\t\u001a\r\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u0086\n\u001a\r\u0010\u0000\u001a\u00020\u0003*\u00020\u0004H\u0086\n\u001a\r\u0010\u0005\u001a\u00020\u0001*\u00020\u0002H\u0086\n\u001a\r\u0010\u0005\u001a\u00020\u0003*\u00020\u0004H\u0086\n\u001a\u0015\u0010\u0006\u001a\u00020\u0002*\u00020\u00022\u0006\u0010\u0007\u001a\u00020\u0002H\u0086\n\u001a\u0015\u0010\u0006\u001a\u00020\u0002*\u00020\u00022\u0006\u0010\b\u001a\u00020\u0001H\u0086\n\u001a\u0015\u0010\u0006\u001a\u00020\u0004*\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0004H\u0086\n\u001a\u0015\u0010\u0006\u001a\u00020\u0004*\u00020\u00042\u0006\u0010\b\u001a\u00020\u0003H\u0086\n\u001a\u0015\u0010\t\u001a\u00020\u0002*\u00020\u00022\u0006\u0010\u0007\u001a\u00020\u0002H\u0086\n\u001a\u0015\u0010\t\u001a\u00020\u0002*\u00020\u00022\u0006\u0010\b\u001a\u00020\u0001H\u0086\n\u001a\u0015\u0010\t\u001a\u00020\u0004*\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0004H\u0086\n\u001a\u0015\u0010\t\u001a\u00020\u0004*\u00020\u00042\u0006\u0010\b\u001a\u00020\u0003H\u0086\n\u001a\r\u0010\n\u001a\u00020\u0002*\u00020\u0004H\u0086\b\u001a\r\u0010\u000b\u001a\u00020\u0004*\u00020\u0002H\u0086\b\u001a\r\u0010\f\u001a\u00020\u0002*\u00020\u0002H\u0086\n\u001a\r\u0010\f\u001a\u00020\u0004*\u00020\u0004H\u0086\n¨\u0006\r"}, d2 = {"component1", "", "Landroid/graphics/Point;", "", "Landroid/graphics/PointF;", "component2", "minus", NotificationBundleProcessor.PUSH_MINIFIED_BUTTON_ICON, "xy", "plus", "toPoint", "toPointF", "unaryMinus", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class PointKt {
    public static final int component1(Point component1) {
        Intrinsics.checkParameterIsNotNull(component1, "$this$component1");
        return component1.x;
    }

    public static final int component2(Point component2) {
        Intrinsics.checkParameterIsNotNull(component2, "$this$component2");
        return component2.y;
    }

    public static final float component1(PointF component1) {
        Intrinsics.checkParameterIsNotNull(component1, "$this$component1");
        return component1.x;
    }

    public static final float component2(PointF component2) {
        Intrinsics.checkParameterIsNotNull(component2, "$this$component2");
        return component2.y;
    }

    public static final Point plus(Point plus, Point p) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        Intrinsics.checkParameterIsNotNull(p, "p");
        Point point = new Point(plus.x, plus.y);
        point.offset(p.x, p.y);
        return point;
    }

    public static final PointF plus(PointF plus, PointF p) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        Intrinsics.checkParameterIsNotNull(p, "p");
        PointF pointF = new PointF(plus.x, plus.y);
        pointF.offset(p.x, p.y);
        return pointF;
    }

    public static final Point plus(Point plus, int i) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        Point point = new Point(plus.x, plus.y);
        point.offset(i, i);
        return point;
    }

    public static final PointF plus(PointF plus, float f) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        PointF pointF = new PointF(plus.x, plus.y);
        pointF.offset(f, f);
        return pointF;
    }

    public static final Point minus(Point minus, Point p) {
        Intrinsics.checkParameterIsNotNull(minus, "$this$minus");
        Intrinsics.checkParameterIsNotNull(p, "p");
        Point point = new Point(minus.x, minus.y);
        point.offset(-p.x, -p.y);
        return point;
    }

    public static final PointF minus(PointF minus, PointF p) {
        Intrinsics.checkParameterIsNotNull(minus, "$this$minus");
        Intrinsics.checkParameterIsNotNull(p, "p");
        PointF pointF = new PointF(minus.x, minus.y);
        pointF.offset(-p.x, -p.y);
        return pointF;
    }

    public static final Point minus(Point minus, int i) {
        Intrinsics.checkParameterIsNotNull(minus, "$this$minus");
        Point point = new Point(minus.x, minus.y);
        int i2 = -i;
        point.offset(i2, i2);
        return point;
    }

    public static final PointF minus(PointF minus, float f) {
        Intrinsics.checkParameterIsNotNull(minus, "$this$minus");
        PointF pointF = new PointF(minus.x, minus.y);
        float f2 = -f;
        pointF.offset(f2, f2);
        return pointF;
    }

    public static final Point unaryMinus(Point unaryMinus) {
        Intrinsics.checkParameterIsNotNull(unaryMinus, "$this$unaryMinus");
        return new Point(-unaryMinus.x, -unaryMinus.y);
    }

    public static final PointF unaryMinus(PointF unaryMinus) {
        Intrinsics.checkParameterIsNotNull(unaryMinus, "$this$unaryMinus");
        return new PointF(-unaryMinus.x, -unaryMinus.y);
    }

    public static final PointF toPointF(Point toPointF) {
        Intrinsics.checkParameterIsNotNull(toPointF, "$this$toPointF");
        return new PointF(toPointF);
    }

    public static final Point toPoint(PointF toPoint) {
        Intrinsics.checkParameterIsNotNull(toPoint, "$this$toPoint");
        return new Point((int) toPoint.x, (int) toPoint.y);
    }
}

