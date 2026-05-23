package androidx.camera.core;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public interface ImageProcessor {

    @Retention(RetentionPolicy.SOURCE)
    public @interface OutputFormats {
    }

    public interface Request {
        ImageProxy getInputImage();

        int getOutputFormat();
    }

    public interface Response {
        ImageProxy getOutputImage();
    }

    Response process(Request request) throws ProcessingException;
}

