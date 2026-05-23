package androidx.camera.view.transform;

import android.content.ContentResolver;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.net.Uri;
import androidx.camera.core.impl.utils.Exif;
import androidx.camera.core.impl.utils.TransformUtils;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
public final class FileTransformFactory {
    private boolean mUsingExifOrientation;

    public void setUsingExifOrientation(boolean z) {
        this.mUsingExifOrientation = z;
    }

    public boolean isUsingExifOrientation() {
        return this.mUsingExifOrientation;
    }

    public OutputTransform getOutputTransform(ContentResolver contentResolver, Uri uri) throws IOException {
        InputStream inputStreamOpenInputStream = contentResolver.openInputStream(uri);
        try {
            OutputTransform outputTransform = getOutputTransform(inputStreamOpenInputStream);
            if (inputStreamOpenInputStream != null) {
                inputStreamOpenInputStream.close();
            }
            return outputTransform;
        } catch (Throwable th) {
            if (inputStreamOpenInputStream != null) {
                try {
                    inputStreamOpenInputStream.close();
                } catch (Throwable th2) {
                    th.addSuppressed(th2);
                }
            }
            throw th;
        }
    }

    public OutputTransform getOutputTransform(File file) throws IOException {
        FileInputStream fileInputStream = new FileInputStream(file);
        try {
            OutputTransform outputTransform = getOutputTransform(fileInputStream);
            fileInputStream.close();
            return outputTransform;
        } catch (Throwable th) {
            try {
                fileInputStream.close();
            } catch (Throwable th2) {
                th.addSuppressed(th2);
            }
            throw th;
        }
    }

    public OutputTransform getOutputTransform(InputStream inputStream) throws IOException {
        Exif exifCreateFromInputStream = Exif.createFromInputStream(inputStream);
        Rect rect = new Rect(0, 0, exifCreateFromInputStream.getWidth(), exifCreateFromInputStream.getHeight());
        Matrix normalizedToBuffer = TransformUtils.getNormalizedToBuffer(rect);
        if (this.mUsingExifOrientation) {
            normalizedToBuffer.postConcat(TransformUtils.getExifTransform(exifCreateFromInputStream.getOrientation(), exifCreateFromInputStream.getWidth(), exifCreateFromInputStream.getHeight()));
        }
        return new OutputTransform(normalizedToBuffer, TransformUtils.rectToSize(rect));
    }
}

