package androidx.camera.core;

import android.graphics.PointF;
import android.util.Rational;
public abstract class MeteringPointFactory {
    private Rational mSurfaceAspectRatio;

    public static float getDefaultPointSize() {
        return 0.15f;
    }

    protected abstract PointF convertPoint(float f, float f2);

    public MeteringPointFactory() {
        this(null);
    }

    public MeteringPointFactory(Rational rational) {
        this.mSurfaceAspectRatio = rational;
    }

    public final MeteringPoint createPoint(float f, float f2) {
        return createPoint(f, f2, getDefaultPointSize());
    }

    public final MeteringPoint createPoint(float f, float f2, float f3) {
        PointF pointFConvertPoint = convertPoint(f, f2);
        return new MeteringPoint(pointFConvertPoint.x, pointFConvertPoint.y, f3, this.mSurfaceAspectRatio);
    }
}

