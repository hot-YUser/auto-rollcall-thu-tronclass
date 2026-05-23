package androidx.camera.core;

import android.content.ContentValues;
import android.net.Uri;
import android.os.Build;
import androidx.camera.core.ImageCapture;
import androidx.camera.core.impl.utils.Exif;
import androidx.camera.core.internal.compat.workaround.ExifRotationAvailability;
import androidx.camera.core.internal.utils.ImageUtil;
import androidx.core.util.Preconditions;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.UUID;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
final class ImageSaver implements Runnable {
    private static final int COPY_BUFFER_SIZE = 1024;
    private static final int NOT_PENDING = 0;
    private static final int PENDING = 1;
    private static final String TAG = "ImageSaver";
    private static final String TEMP_FILE_PREFIX = "CameraX";
    private static final String TEMP_FILE_SUFFIX = ".tmp";
    private final OnImageSavedCallback mCallback;
    private final ImageProxy mImage;
    private final int mJpegQuality;
    private final int mOrientation;
    private final ImageCapture.OutputFileOptions mOutputFileOptions;
    private final Executor mSequentialIoExecutor;
    private final Executor mUserCallbackExecutor;

    public interface OnImageSavedCallback {
        void onError(SaveError saveError, String str, Throwable th);

        void onImageSaved(ImageCapture.OutputFileResults outputFileResults);
    }

    public enum SaveError {
        FILE_IO_FAILED,
        ENCODE_FAILED,
        CROP_FAILED,
        UNKNOWN
    }

    ImageSaver(ImageProxy imageProxy, ImageCapture.OutputFileOptions outputFileOptions, int i, int i2, Executor executor, Executor executor2, OnImageSavedCallback onImageSavedCallback) {
        this.mImage = imageProxy;
        this.mOutputFileOptions = outputFileOptions;
        this.mOrientation = i;
        this.mJpegQuality = i2;
        this.mCallback = onImageSavedCallback;
        this.mUserCallbackExecutor = executor;
        this.mSequentialIoExecutor = executor2;
    }

    @Override // java.lang.Runnable
    public void run() {
        final File fileSaveImageToTempFile = saveImageToTempFile();
        if (fileSaveImageToTempFile != null) {
            this.mSequentialIoExecutor.execute(new Runnable() { // from class: androidx.camera.core.ImageSaver$$ExternalSyntheticLambda1
                @Override // java.lang.Runnable
                public final void run() {
                    this.f$0.m127lambda$run$0$androidxcameracoreImageSaver(fileSaveImageToTempFile);
                }
            });
        }
    }

    private File saveImageToTempFile() {
        File fileCreateTempFile;
        SaveError saveError;
        String str;
        Throwable th;
        try {
            if (isSaveToFile()) {
                fileCreateTempFile = new File(this.mOutputFileOptions.getFile().getParent(), TEMP_FILE_PREFIX + UUID.randomUUID().toString() + getFileExtensionWithDot(this.mOutputFileOptions.getFile()));
            } else {
                fileCreateTempFile = File.createTempFile(TEMP_FILE_PREFIX, TEMP_FILE_SUFFIX);
            }
            try {
                ImageProxy imageProxy = this.mImage;
                try {
                    FileOutputStream fileOutputStream = new FileOutputStream(fileCreateTempFile);
                    try {
                        fileOutputStream.write(imageToJpegByteArray(this.mImage, this.mJpegQuality));
                        Exif exifCreateFromFile = Exif.createFromFile(fileCreateTempFile);
                        Exif.createFromImageProxy(this.mImage).copyToCroppedImage(exifCreateFromFile);
                        if (!new ExifRotationAvailability().shouldUseExifOrientation(this.mImage)) {
                            exifCreateFromFile.rotate(this.mOrientation);
                        }
                        ImageCapture.Metadata metadata = this.mOutputFileOptions.getMetadata();
                        if (metadata.isReversedHorizontal()) {
                            exifCreateFromFile.flipHorizontally();
                        }
                        if (metadata.isReversedVertical()) {
                            exifCreateFromFile.flipVertically();
                        }
                        if (metadata.getLocation() != null) {
                            exifCreateFromFile.attachLocation(this.mOutputFileOptions.getMetadata().getLocation());
                        }
                        exifCreateFromFile.save();
                        fileOutputStream.close();
                        if (imageProxy != null) {
                            imageProxy.close();
                        }
                        th = null;
                        saveError = null;
                        str = null;
                    } finally {
                    }
                } catch (Throwable th2) {
                    if (imageProxy != null) {
                        try {
                            imageProxy.close();
                        } catch (Throwable th3) {
                            th2.addSuppressed(th3);
                        }
                    }
                    throw th2;
                }
            } catch (ImageUtil.CodecFailedException e) {
                int i = AnonymousClass1.$SwitchMap$androidx$camera$core$internal$utils$ImageUtil$CodecFailedException$FailureType[e.getFailureType().ordinal()];
                if (i == 1) {
                    saveError = SaveError.ENCODE_FAILED;
                    str = "Failed to encode mImage";
                    th = e;
                } else if (i == 2) {
                    saveError = SaveError.CROP_FAILED;
                    str = "Failed to crop mImage";
                    th = e;
                } else {
                    saveError = SaveError.UNKNOWN;
                    str = "Failed to transcode mImage";
                    th = e;
                }
            } catch (IOException e2) {
                e = e2;
                saveError = SaveError.FILE_IO_FAILED;
                str = "Failed to write temp file";
                th = e;
            } catch (IllegalArgumentException e3) {
                e = e3;
                saveError = SaveError.FILE_IO_FAILED;
                str = "Failed to write temp file";
                th = e;
            } catch (OutOfMemoryError e4) {
                saveError = SaveError.UNKNOWN;
                str = "Processing failed due to low memory.";
                th = e4;
            }
            if (saveError == null) {
                return fileCreateTempFile;
            }
            postError(saveError, str, th);
            fileCreateTempFile.delete();
            return null;
        } catch (IOException e5) {
            postError(SaveError.FILE_IO_FAILED, "Failed to create temp file", e5);
            return null;
        }
    }
    static /* synthetic */ class AnonymousClass1 {
        static final /* synthetic */ int[] $SwitchMap$androidx$camera$core$internal$utils$ImageUtil$CodecFailedException$FailureType;

        static {
            int[] iArr = new int[ImageUtil.CodecFailedException.FailureType.values().length];
            $SwitchMap$androidx$camera$core$internal$utils$ImageUtil$CodecFailedException$FailureType = iArr;
            try {
                iArr[ImageUtil.CodecFailedException.FailureType.ENCODE_FAILED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$androidx$camera$core$internal$utils$ImageUtil$CodecFailedException$FailureType[ImageUtil.CodecFailedException.FailureType.DECODE_FAILED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$androidx$camera$core$internal$utils$ImageUtil$CodecFailedException$FailureType[ImageUtil.CodecFailedException.FailureType.UNKNOWN.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    private static String getFileExtensionWithDot(File file) {
        String name = file.getName();
        int iLastIndexOf = name.lastIndexOf(46);
        if (iLastIndexOf >= 0) {
            return name.substring(iLastIndexOf);
        }
        return "";
    }

    private byte[] imageToJpegByteArray(ImageProxy imageProxy, int i) throws ImageUtil.CodecFailedException {
        boolean zShouldCropImage = ImageUtil.shouldCropImage(imageProxy);
        int format = imageProxy.getFormat();
        if (format == 256) {
            if (!zShouldCropImage) {
                return ImageUtil.jpegImageToJpegByteArray(imageProxy);
            }
            return ImageUtil.jpegImageToJpegByteArray(imageProxy, imageProxy.getCropRect(), i);
        }
        if (format == 35) {
            return ImageUtil.yuvImageToJpegByteArray(imageProxy, zShouldCropImage ? imageProxy.getCropRect() : null, i, 0);
        }
        Logger.w(TAG, "Unrecognized image format: " + format);
        return null;
    }
    public void m127lambda$run$0$androidxcameracoreImageSaver(File file) {
        Uri uriFromFile;
        SaveError saveError;
        String str;
        ContentValues contentValues;
        Preconditions.checkNotNull(file);
        Throwable e = null;
        try {
            try {
                if (isSaveToMediaStore()) {
                    if (this.mOutputFileOptions.getContentValues() != null) {
                        contentValues = new ContentValues(this.mOutputFileOptions.getContentValues());
                    } else {
                        contentValues = new ContentValues();
                    }
                    setContentValuePending(contentValues, 1);
                    uriFromFile = this.mOutputFileOptions.getContentResolver().insert(this.mOutputFileOptions.getSaveCollection(), contentValues);
                    try {
                        if (uriFromFile == null) {
                            saveError = SaveError.FILE_IO_FAILED;
                            str = "Failed to insert URI.";
                        } else {
                            if (copyTempFileToUri(file, uriFromFile)) {
                                saveError = null;
                                str = null;
                            } else {
                                saveError = SaveError.FILE_IO_FAILED;
                                str = "Failed to save to URI.";
                            }
                            setUriNotPending(uriFromFile);
                        }
                    } catch (IOException e2) {
                        e = e2;
                        saveError = SaveError.FILE_IO_FAILED;
                        str = "Failed to write destination file.";
                    } catch (IllegalArgumentException e3) {
                        e = e3;
                        saveError = SaveError.FILE_IO_FAILED;
                        str = "Failed to write destination file.";
                    } catch (SecurityException e4) {
                        e = e4;
                        saveError = SaveError.FILE_IO_FAILED;
                        str = "Failed to write destination file.";
                    }
                } else {
                    if (isSaveToOutputStream()) {
                        copyTempFileToOutputStream(file, this.mOutputFileOptions.getOutputStream());
                    } else if (isSaveToFile()) {
                        File file2 = this.mOutputFileOptions.getFile();
                        if (file2.exists()) {
                            file2.delete();
                        }
                        if (file.renameTo(file2)) {
                            saveError = null;
                            str = null;
                        } else {
                            saveError = SaveError.FILE_IO_FAILED;
                            str = "Failed to rename file.";
                        }
                        uriFromFile = Uri.fromFile(file2);
                    }
                    uriFromFile = null;
                    saveError = null;
                    str = null;
                }
            } finally {
                file.delete();
            }
        } catch (IOException | IllegalArgumentException | SecurityException e5) {
            uriFromFile = null;
            e = e5;
        }
        if (saveError != null) {
            postError(saveError, str, e);
        } else {
            postSuccess(uriFromFile);
        }
    }

    private boolean isSaveToMediaStore() {
        return (this.mOutputFileOptions.getSaveCollection() == null || this.mOutputFileOptions.getContentResolver() == null || this.mOutputFileOptions.getContentValues() == null) ? false : true;
    }

    private boolean isSaveToFile() {
        return this.mOutputFileOptions.getFile() != null;
    }

    private boolean isSaveToOutputStream() {
        return this.mOutputFileOptions.getOutputStream() != null;
    }

    private void setUriNotPending(Uri uri) {
        if (Build.VERSION.SDK_INT >= 29) {
            ContentValues contentValues = new ContentValues();
            setContentValuePending(contentValues, 0);
            this.mOutputFileOptions.getContentResolver().update(uri, contentValues, null, null);
        }
    }

    private void setContentValuePending(ContentValues contentValues, int i) {
        if (Build.VERSION.SDK_INT >= 29) {
            contentValues.put("is_pending", Integer.valueOf(i));
        }
    }

    private boolean copyTempFileToUri(File file, Uri uri) throws IOException {
        OutputStream outputStreamOpenOutputStream = this.mOutputFileOptions.getContentResolver().openOutputStream(uri);
        if (outputStreamOpenOutputStream == null) {
            if (outputStreamOpenOutputStream == null) {
                return false;
            }
            outputStreamOpenOutputStream.close();
            return false;
        }
        try {
            copyTempFileToOutputStream(file, outputStreamOpenOutputStream);
            if (outputStreamOpenOutputStream == null) {
                return true;
            }
            outputStreamOpenOutputStream.close();
            return true;
        } catch (Throwable th) {
            if (outputStreamOpenOutputStream != null) {
                try {
                    outputStreamOpenOutputStream.close();
                } catch (Throwable th2) {
                    th.addSuppressed(th2);
                }
            }
            throw th;
        }
    }

    private void copyTempFileToOutputStream(File file, OutputStream outputStream) throws IOException {
        FileInputStream fileInputStream = new FileInputStream(file);
        try {
            byte[] bArr = new byte[1024];
            while (true) {
                int i = fileInputStream.read(bArr);
                if (i > 0) {
                    outputStream.write(bArr, 0, i);
                } else {
                    fileInputStream.close();
                    return;
                }
            }
        } catch (Throwable th) {
            try {
                fileInputStream.close();
            } catch (Throwable th2) {
                th.addSuppressed(th2);
            }
            throw th;
        }
    }

    private void postSuccess(final Uri uri) {
        try {
            this.mUserCallbackExecutor.execute(new Runnable() { // from class: androidx.camera.core.ImageSaver$$ExternalSyntheticLambda2
                @Override // java.lang.Runnable
                public final void run() {
                    this.f$0.m126lambda$postSuccess$1$androidxcameracoreImageSaver(uri);
                }
            });
        } catch (RejectedExecutionException unused) {
            Logger.e(TAG, "Application executor rejected executing OnImageSavedCallback.onImageSaved callback. Skipping.");
        }
    }
    /* synthetic */ void m126lambda$postSuccess$1$androidxcameracoreImageSaver(Uri uri) {
        this.mCallback.onImageSaved(new ImageCapture.OutputFileResults(uri));
    }

    private void postError(final SaveError saveError, final String str, final Throwable th) {
        try {
            this.mUserCallbackExecutor.execute(new Runnable() { // from class: androidx.camera.core.ImageSaver$$ExternalSyntheticLambda0
                @Override // java.lang.Runnable
                public final void run() {
                    this.f$0.m125lambda$postError$2$androidxcameracoreImageSaver(saveError, str, th);
                }
            });
        } catch (RejectedExecutionException unused) {
            Logger.e(TAG, "Application executor rejected executing OnImageSavedCallback.onError callback. Skipping.");
        }
    }
    /* synthetic */ void m125lambda$postError$2$androidxcameracoreImageSaver(SaveError saveError, String str, Throwable th) {
        this.mCallback.onError(saveError, str, th);
    }
}

