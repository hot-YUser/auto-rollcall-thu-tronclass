package com.getcapacitor.plugin.camera;

import android.app.Activity;
import android.net.Uri;
import android.os.Environment;
import androidx.core.content.FileProvider;
import com.getcapacitor.Logger;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
public class CameraUtils {
    public static Uri createImageFileUri(Activity activity, String str) throws IOException {
        return FileProvider.getUriForFile(activity, str + ".fileprovider", createImageFile(activity));
    }

    public static File createImageFile(Activity activity) throws IOException {
        return File.createTempFile("JPEG_" + new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date()) + "_", ".jpg", activity.getExternalFilesDir(Environment.DIRECTORY_PICTURES));
    }

    protected static String getLogTag() {
        return Logger.tags("CameraUtils");
    }
}

