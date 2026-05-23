package androidx.camera.core.processing;

import android.opengl.EGLSurface;
import androidx.camera.core.processing.OpenGlRenderer;
final class AutoValue_OpenGlRenderer_OutputSurface extends OpenGlRenderer.OutputSurface {
    private final EGLSurface eglSurface;
    private final int height;
    private final int width;

    AutoValue_OpenGlRenderer_OutputSurface(EGLSurface eGLSurface, int i, int i2) {
        if (eGLSurface == null) {
            throw new NullPointerException("Null eglSurface");
        }
        this.eglSurface = eGLSurface;
        this.width = i;
        this.height = i2;
    }

    @Override // androidx.camera.core.processing.OpenGlRenderer.OutputSurface
    EGLSurface getEglSurface() {
        return this.eglSurface;
    }

    @Override // androidx.camera.core.processing.OpenGlRenderer.OutputSurface
    int getWidth() {
        return this.width;
    }

    @Override // androidx.camera.core.processing.OpenGlRenderer.OutputSurface
    int getHeight() {
        return this.height;
    }

    public String toString() {
        return "OutputSurface{eglSurface=" + this.eglSurface + ", width=" + this.width + ", height=" + this.height + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof OpenGlRenderer.OutputSurface)) {
            return false;
        }
        OpenGlRenderer.OutputSurface outputSurface = (OpenGlRenderer.OutputSurface) obj;
        return this.eglSurface.equals(outputSurface.getEglSurface()) && this.width == outputSurface.getWidth() && this.height == outputSurface.getHeight();
    }

    public int hashCode() {
        return ((((this.eglSurface.hashCode() ^ 1000003) * 1000003) ^ this.width) * 1000003) ^ this.height;
    }
}

