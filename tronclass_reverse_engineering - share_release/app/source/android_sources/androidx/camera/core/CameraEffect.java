package androidx.camera.core;

import androidx.camera.core.processing.SurfaceProcessorInternal;
import androidx.camera.core.processing.SurfaceProcessorWithExecutor;
import androidx.camera.core.processing.TargetUtils;
import androidx.core.util.Consumer;
import androidx.core.util.Preconditions;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Executor;
public abstract class CameraEffect {
    public static final int IMAGE_CAPTURE = 4;
    public static final int PREVIEW = 1;
    private static final List<Integer> SURFACE_PROCESSOR_TARGETS = Arrays.asList(1, 2, 3, 7);
    public static final int VIDEO_CAPTURE = 2;
    private final Consumer<Throwable> mErrorListener;
    private final Executor mExecutor;
    private final ImageProcessor mImageProcessor;
    private final SurfaceProcessor mSurfaceProcessor;
    private final int mTargets;

    @Retention(RetentionPolicy.SOURCE)
    public @interface Formats {
    }

    @Retention(RetentionPolicy.SOURCE)
    public @interface Targets {
    }

    protected CameraEffect(int i, Executor executor, ImageProcessor imageProcessor, Consumer<Throwable> consumer) {
        Preconditions.checkArgument(i == 4, "Currently ImageProcessor can only target IMAGE_CAPTURE.");
        this.mTargets = i;
        this.mExecutor = executor;
        this.mSurfaceProcessor = null;
        this.mImageProcessor = imageProcessor;
        this.mErrorListener = consumer;
    }

    protected CameraEffect(int i, Executor executor, SurfaceProcessor surfaceProcessor, Consumer<Throwable> consumer) {
        TargetUtils.checkSupportedTargets(SURFACE_PROCESSOR_TARGETS, i);
        this.mTargets = i;
        this.mExecutor = executor;
        this.mSurfaceProcessor = surfaceProcessor;
        this.mImageProcessor = null;
        this.mErrorListener = consumer;
    }

    public int getTargets() {
        return this.mTargets;
    }

    public Executor getExecutor() {
        return this.mExecutor;
    }

    public Consumer<Throwable> getErrorListener() {
        return this.mErrorListener;
    }

    public SurfaceProcessor getSurfaceProcessor() {
        return this.mSurfaceProcessor;
    }

    public ImageProcessor getImageProcessor() {
        return this.mImageProcessor;
    }

    public SurfaceProcessorInternal createSurfaceProcessorInternal() {
        return new SurfaceProcessorWithExecutor(this);
    }
}

