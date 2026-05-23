package androidx.camera.core.imagecapture;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.net.Uri;
import android.os.Build;
import androidx.camera.core.ImageCapture;
import androidx.camera.core.ImageCaptureException;
import androidx.camera.core.impl.utils.Exif;
import androidx.camera.core.internal.compat.workaround.InvalidJpegDataParser;
import androidx.camera.core.processing.Operation;
import androidx.camera.core.processing.Packet;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Objects;
import java.util.UUID;
class JpegBytes2Disk implements Operation<In, ImageCapture.OutputFileResults> {
    private static final int COPY_BUFFER_SIZE = 1024;
    private static final int NOT_PENDING = 0;
    private static final int PENDING = 1;
    private static final String TEMP_FILE_PREFIX = "CameraX";
    private static final String TEMP_FILE_SUFFIX = ".tmp";

    JpegBytes2Disk() {
    }

    @Override // androidx.camera.core.processing.Operation
    public ImageCapture.OutputFileResults apply(In in) throws Throwable {
        Packet<byte[]> packet = in.getPacket();
        ImageCapture.OutputFileOptions outputFileOptions = in.getOutputFileOptions();
        File fileCreateTempFile = createTempFile(outputFileOptions);
        writeBytesToFile(fileCreateTempFile, packet.getData());
        updateFileExif(fileCreateTempFile, (Exif) Objects.requireNonNull(packet.getExif()), outputFileOptions, packet.getRotationDegrees());
        return new ImageCapture.OutputFileResults(moveFileToTarget(fileCreateTempFile, outputFileOptions));
    }

    private static File createTempFile(ImageCapture.OutputFileOptions outputFileOptions) throws ImageCaptureException {
        try {
            File file = outputFileOptions.getFile();
            if (file == null) {
                return File.createTempFile(TEMP_FILE_PREFIX, TEMP_FILE_SUFFIX);
            }
            return new File(file.getParent(), TEMP_FILE_PREFIX + UUID.randomUUID().toString() + getFileExtensionWithDot(file));
        } catch (IOException e) {
            throw new ImageCaptureException(1, "Failed to create temp file.", e);
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

    private static void writeBytesToFile(File file, byte[] bArr) throws ImageCaptureException {
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            try {
                fileOutputStream.write(bArr, 0, new InvalidJpegDataParser().getValidDataLength(bArr));
                fileOutputStream.close();
            } finally {
            }
        } catch (IOException e) {
            throw new ImageCaptureException(1, "Failed to write to temp file", e);
        }
    }

    private static void updateFileExif(File file, Exif exif, ImageCapture.OutputFileOptions outputFileOptions, int i) throws Throwable {
        try {
            Exif exifCreateFromFile = Exif.createFromFile(file);
            exif.copyToCroppedImage(exifCreateFromFile);
            if (exifCreateFromFile.getRotation() == 0 && i != 0) {
                exifCreateFromFile.rotate(i);
            }
            ImageCapture.Metadata metadata = outputFileOptions.getMetadata();
            if (metadata.isReversedHorizontal()) {
                exifCreateFromFile.flipHorizontally();
            }
            if (metadata.isReversedVertical()) {
                exifCreateFromFile.flipVertically();
            }
            if (metadata.getLocation() != null) {
                exifCreateFromFile.attachLocation(metadata.getLocation());
            }
            exifCreateFromFile.save();
        } catch (IOException e) {
            throw new ImageCaptureException(1, "Failed to update Exif data", e);
        }
    }

    static Uri moveFileToTarget(File file, ImageCapture.OutputFileOptions outputFileOptions) throws ImageCaptureException {
        Uri uriCopyFileToFile = null;
        try {
            try {
                if (isSaveToMediaStore(outputFileOptions)) {
                    uriCopyFileToFile = copyFileToMediaStore(file, outputFileOptions);
                } else if (isSaveToOutputStream(outputFileOptions)) {
                    copyFileToOutputStream(file, (OutputStream) Objects.requireNonNull(outputFileOptions.getOutputStream()));
                } else if (isSaveToFile(outputFileOptions)) {
                    uriCopyFileToFile = copyFileToFile(file, (File) Objects.requireNonNull(outputFileOptions.getFile()));
                }
                return uriCopyFileToFile;
            } catch (IOException unused) {
                throw new ImageCaptureException(1, "Failed to write to OutputStream.", null);
            }
        } finally {
            file.delete();
        }
    }

    private static Uri copyFileToMediaStore(File file, ImageCapture.OutputFileOptions outputFileOptions) throws Throwable {
        ContentValues contentValues;
        Uri uriInsert;
        ContentResolver contentResolver = (ContentResolver) Objects.requireNonNull(outputFileOptions.getContentResolver());
        if (outputFileOptions.getContentValues() != null) {
            contentValues = new ContentValues(outputFileOptions.getContentValues());
        } else {
            contentValues = new ContentValues();
        }
        setContentValuePendingFlag(contentValues, 1);
        Uri uri = null;
        try {
            try {
                uriInsert = contentResolver.insert(outputFileOptions.getSaveCollection(), contentValues);
            } catch (Throwable th) {
                th = th;
            }
        } catch (IOException e) {
            e = e;
        } catch (SecurityException e2) {
            e = e2;
        }
        try {
            if (uriInsert == null) {
                throw new ImageCaptureException(1, "Failed to insert a MediaStore URI.", null);
            }
            copyTempFileToUri(file, uriInsert, contentResolver);
            if (uriInsert != null) {
                updateUriPendingStatus(uriInsert, contentResolver, 0);
            }
            return uriInsert;
        } catch (IOException e3) {
            e = e3;
            uri = uriInsert;
            throw new ImageCaptureException(1, "Failed to write to MediaStore URI: " + uri, e);
        } catch (SecurityException e4) {
            e = e4;
            uri = uriInsert;
            throw new ImageCaptureException(1, "Failed to write to MediaStore URI: " + uri, e);
        } catch (Throwable th2) {
            th = th2;
            uri = uriInsert;
            if (uri != null) {
                updateUriPendingStatus(uri, contentResolver, 0);
            }
            throw th;
        }
    }

    private static Uri copyFileToFile(File file, File file2) throws ImageCaptureException {
        if (file2.exists()) {
            file2.delete();
        }
        if (!file.renameTo(file2)) {
            throw new ImageCaptureException(1, "Failed to overwrite the file: " + file2.getAbsolutePath(), null);
        }
        return Uri.fromFile(file2);
    }

    private static void copyTempFileToUri(File file, Uri uri, ContentResolver contentResolver) throws IOException {
        OutputStream outputStreamOpenOutputStream = contentResolver.openOutputStream(uri);
        try {
            if (outputStreamOpenOutputStream == null) {
                throw new FileNotFoundException(uri + " cannot be resolved.");
            }
            copyFileToOutputStream(file, outputStreamOpenOutputStream);
            if (outputStreamOpenOutputStream != null) {
                outputStreamOpenOutputStream.close();
            }
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

    private static void copyFileToOutputStream(File file, OutputStream outputStream) throws IOException {
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

    private static void updateUriPendingStatus(Uri uri, ContentResolver contentResolver, int i) {
        if (Build.VERSION.SDK_INT >= 29) {
            ContentValues contentValues = new ContentValues();
            setContentValuePendingFlag(contentValues, i);
            contentResolver.update(uri, contentValues, null, null);
        }
    }

    private static void setContentValuePendingFlag(ContentValues contentValues, int i) {
        if (Build.VERSION.SDK_INT >= 29) {
            contentValues.put("is_pending", Integer.valueOf(i));
        }
    }

    private static boolean isSaveToMediaStore(ImageCapture.OutputFileOptions outputFileOptions) {
        return (outputFileOptions.getSaveCollection() == null || outputFileOptions.getContentResolver() == null || outputFileOptions.getContentValues() == null) ? false : true;
    }

    private static boolean isSaveToFile(ImageCapture.OutputFileOptions outputFileOptions) {
        return outputFileOptions.getFile() != null;
    }

    private static boolean isSaveToOutputStream(ImageCapture.OutputFileOptions outputFileOptions) {
        return outputFileOptions.getOutputStream() != null;
    }

    static abstract class In {
        abstract ImageCapture.OutputFileOptions getOutputFileOptions();

        abstract Packet<byte[]> getPacket();

        In() {
        }

        static In of(Packet<byte[]> packet, ImageCapture.OutputFileOptions outputFileOptions) {
            return new AutoValue_JpegBytes2Disk_In(packet, outputFileOptions);
        }
    }
}

