package androidx.camera.core;
public interface SurfaceProcessor {
    void onInputSurface(SurfaceRequest surfaceRequest) throws ProcessingException;

    void onOutputSurface(SurfaceOutput surfaceOutput) throws ProcessingException;
}

