package androidx.camera.core;

import android.graphics.PointF;
import android.util.Rational;
import android.util.Size;
public class SurfaceOrientedMeteringPointFactory extends MeteringPointFactory {
    private final float mHeight;
    private final float mWidth;

    public SurfaceOrientedMeteringPointFactory(float f, float f2) {
        this.mWidth = f;
        this.mHeight = f2;
    }

    public SurfaceOrientedMeteringPointFactory(float f, float f2, UseCase useCase) {
        super(getUseCaseAspectRatio(useCase));
        this.mWidth = f;
        this.mHeight = f2;
    }

    private static Rational getUseCaseAspectRatio(UseCase useCase) {
        if (useCase == null) {
            return null;
        }
        Size attachedSurfaceResolution = useCase.getAttachedSurfaceResolution();
        if (attachedSurfaceResolution == null) {
            throw new IllegalStateException("UseCase " + useCase + " is not bound.");
        }
        return new Rational(attachedSurfaceResolution.getWidth(), attachedSurfaceResolution.getHeight());
    }

    @Override // androidx.camera.core.MeteringPointFactory
    protected PointF convertPoint(float f, float f2) {
        return new PointF(f / this.mWidth, f2 / this.mHeight);
    }
}

