package com.getcapacitor.plugin;

import android.content.Context;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Environment;
import android.util.Base64;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.PluginRequestCodes;
import com.sarriaroman.PhotoViewer.PhotoViewer;
import java.io.BufferedWriter;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.nio.channels.FileChannel;
import java.nio.charset.Charset;
import org.apache.cordova.globalization.Globalization;
import org.json.JSONException;
@NativePlugin(permissionRequestCode = PluginRequestCodes.FILESYSTEM_REQUEST_ALL_PERMISSIONS, permissions = {PhotoViewer.READ, PhotoViewer.WRITE}, requestCodes = {PluginRequestCodes.FILESYSTEM_REQUEST_WRITE_FILE_PERMISSIONS, PluginRequestCodes.FILESYSTEM_REQUEST_WRITE_FOLDER_PERMISSIONS, PluginRequestCodes.FILESYSTEM_REQUEST_READ_FILE_PERMISSIONS, PluginRequestCodes.FILESYSTEM_REQUEST_READ_FOLDER_PERMISSIONS, PluginRequestCodes.FILESYSTEM_REQUEST_DELETE_FILE_PERMISSIONS, PluginRequestCodes.FILESYSTEM_REQUEST_DELETE_FOLDER_PERMISSIONS, PluginRequestCodes.FILESYSTEM_REQUEST_URI_PERMISSIONS, PluginRequestCodes.FILESYSTEM_REQUEST_STAT_PERMISSIONS, PluginRequestCodes.FILESYSTEM_REQUEST_RENAME_PERMISSIONS, PluginRequestCodes.FILESYSTEM_REQUEST_COPY_PERMISSIONS})
public class Filesystem extends Plugin {
    static final /* synthetic */ boolean $assertionsDisabled = false;
    private static final String PERMISSION_DENIED_ERROR = "Unable to do file operation, user denied permission request";

    private Charset getEncoding(String str) {
        if (str == null) {
            return null;
        }
        str.hashCode();
        switch (str) {
        }
        return null;
    }

    private File getDirectory(String str) {
        Context context;
        context = this.bridge.getContext();
        str.hashCode();
        switch (str) {
            case "EXTERNAL":
                return context.getExternalFilesDir(null);
            case "DOCUMENTS":
                return Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOCUMENTS);
            case "DATA":
                return context.getFilesDir();
            case "CACHE":
                return context.getCacheDir();
            case "EXTERNAL_STORAGE":
                return Environment.getExternalStorageDirectory();
            default:
                return null;
        }
    }

    private File getFileObject(String str, String str2) {
        if (str2 == null) {
            Uri uri = Uri.parse(str);
            if (uri.getScheme() == null || uri.getScheme().equals("file")) {
                return new File(uri.getPath());
            }
        }
        File directory = getDirectory(str2);
        if (directory == null) {
            return null;
        }
        if (!directory.exists()) {
            directory.mkdir();
        }
        return new File(directory, str);
    }

    private InputStream getInputStream(String str, String str2) throws IOException {
        if (str2 == null) {
            Uri uri = Uri.parse(str);
            if (uri.getScheme().equals("content")) {
                return getContext().getContentResolver().openInputStream(uri);
            }
            return new FileInputStream(new File(uri.getPath()));
        }
        File directory = getDirectory(str2);
        if (directory == null) {
            throw new IOException("Directory not found");
        }
        return new FileInputStream(new File(directory, str));
    }

    private String readFileAsString(InputStream inputStream, String str) throws IOException {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        byte[] bArr = new byte[1024];
        while (true) {
            int i = inputStream.read(bArr);
            if (i != -1) {
                byteArrayOutputStream.write(bArr, 0, i);
            } else {
                return byteArrayOutputStream.toString(str);
            }
        }
    }

    private String readFileAsBase64EncodedData(InputStream inputStream) throws IOException {
        FileInputStream fileInputStream = (FileInputStream) inputStream;
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        byte[] bArr = new byte[1024];
        while (true) {
            int i = fileInputStream.read(bArr);
            if (i != -1) {
                byteArrayOutputStream.write(bArr, 0, i);
            } else {
                fileInputStream.close();
                return new String(Base64.encodeToString(byteArrayOutputStream.toByteArray(), 2));
            }
        }
    }

    @PluginMethod
    public void readFile(PluginCall pluginCall) {
        String fileAsBase64EncodedData;
        saveCall(pluginCall);
        String string = pluginCall.getString("path");
        pluginCall.getString("data");
        String directoryParameter = getDirectoryParameter(pluginCall);
        String string2 = pluginCall.getString("encoding");
        Charset encoding = getEncoding(string2);
        if (string2 != null && encoding == null) {
            pluginCall.error("Unsupported encoding provided: " + string2);
            return;
        }
        if (!isPublicDirectory(directoryParameter) || isStoragePermissionGranted(PluginRequestCodes.FILESYSTEM_REQUEST_READ_FILE_PERMISSIONS, PhotoViewer.READ)) {
            try {
                InputStream inputStream = getInputStream(string, directoryParameter);
                if (encoding != null) {
                    fileAsBase64EncodedData = readFileAsString(inputStream, encoding.name());
                } else {
                    fileAsBase64EncodedData = readFileAsBase64EncodedData(inputStream);
                }
                JSObject jSObject = new JSObject();
                jSObject.putOpt("data", fileAsBase64EncodedData);
                pluginCall.success(jSObject);
            } catch (FileNotFoundException e) {
                pluginCall.error("File does not exist", e);
            } catch (IOException e2) {
                pluginCall.error("Unable to read file", e2);
            } catch (JSONException e3) {
                pluginCall.error("Unable to return value for reading file", e3);
            }
        }
    }

    @PluginMethod
    public void writeFile(PluginCall pluginCall) {
        saveCall(pluginCall);
        String string = pluginCall.getString("path");
        String string2 = pluginCall.getString("data");
        Boolean bool = pluginCall.getBoolean("recursive", false);
        if (string == null) {
            Logger.error(getLogTag(), "No path or filename retrieved from call", null);
            pluginCall.error("NO_PATH");
            return;
        }
        if (string2 == null) {
            Logger.error(getLogTag(), "No data retrieved from call", null);
            pluginCall.error("NO_DATA");
            return;
        }
        String directoryParameter = getDirectoryParameter(pluginCall);
        if (directoryParameter != null) {
            if (!isPublicDirectory(directoryParameter) || isStoragePermissionGranted(PluginRequestCodes.FILESYSTEM_REQUEST_WRITE_FILE_PERMISSIONS, PhotoViewer.WRITE)) {
                File directory = getDirectory(directoryParameter);
                if (directory != null) {
                    if (directory.exists() || directory.mkdirs()) {
                        File file = new File(directory, string);
                        if (file.getParentFile().exists() || (bool.booleanValue() && file.getParentFile().mkdirs())) {
                            saveFile(pluginCall, file, string2);
                            return;
                        } else {
                            pluginCall.error("Parent folder doesn't exist");
                            return;
                        }
                    }
                    Logger.error(getLogTag(), "Not able to create '" + directoryParameter + "'!", null);
                    pluginCall.error("NOT_CREATED_DIR");
                    return;
                }
                Logger.error(getLogTag(), "Directory ID '" + directoryParameter + "' is not supported by plugin", null);
                pluginCall.error("INVALID_DIR");
                return;
            }
            return;
        }
        Uri uri = Uri.parse(string);
        if ("file".equals(uri.getScheme())) {
            File file2 = new File(uri.getPath());
            if (isStoragePermissionGranted(PluginRequestCodes.FILESYSTEM_REQUEST_WRITE_FILE_PERMISSIONS, PhotoViewer.WRITE)) {
                if (file2.getParentFile().exists() || (bool.booleanValue() && file2.getParentFile().mkdirs())) {
                    saveFile(pluginCall, file2, string2);
                } else {
                    pluginCall.error("Parent folder doesn't exist");
                }
            }
        }
    }

    /* high-level source view WARN: Removed duplicated region for block: B:44:0x00e3  */
    /* high-level source view WARN: Removed duplicated region for block: B:48:0x0133  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private void saveFile(PluginCall pluginCall, File file, String str) {
        boolean z;
        String string = pluginCall.getString("encoding");
        boolean zBooleanValue = pluginCall.getBoolean("append", false).booleanValue();
        Charset encoding = getEncoding(string);
        if (string != null && encoding == null) {
            pluginCall.error("Unsupported encoding provided: " + string);
            return;
        }
        if (encoding != null) {
            try {
                BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file, zBooleanValue), encoding));
                try {
                    bufferedWriter.write(str);
                    try {
                        bufferedWriter.close();
                        z = true;
                    } catch (IOException e) {
                        e = e;
                        z = true;
                        Logger.error(getLogTag(), "Creating text file '" + file.getPath() + "' with charset '" + encoding + "' failed. Error: " + e.getMessage(), e);
                    }
                } finally {
                }
            } catch (IOException e2) {
                e = e2;
                z = false;
                Logger.error(getLogTag(), "Creating text file '" + file.getPath() + "' with charset '" + encoding + "' failed. Error: " + e.getMessage(), e);
                if (!z) {
                }
            }
        } else {
            if (str.indexOf(",") != -1) {
                str = str.split(",")[1];
            }
            try {
                FileOutputStream fileOutputStream = new FileOutputStream(file, zBooleanValue);
                try {
                    fileOutputStream.write(Base64.decode(str, 2));
                    try {
                        fileOutputStream.close();
                        z = true;
                    } catch (IOException e3) {
                        e = e3;
                        z = true;
                        Logger.error(getLogTag(), "Creating binary file '" + file.getPath() + "' failed. Error: " + e.getMessage(), e);
                    }
                } finally {
                }
            } catch (IOException e4) {
                e = e4;
                z = false;
            }
        }
        if (!z) {
            if (isPublicDirectory(getDirectoryParameter(pluginCall))) {
                MediaScannerConnection.scanFile(getContext(), new String[]{file.getAbsolutePath()}, null, null);
            }
            Logger.debug(getLogTag(), "File '" + file.getAbsolutePath() + "' saved!");
            JSObject jSObject = new JSObject();
            jSObject.put("uri", Uri.fromFile(file).toString());
            pluginCall.success(jSObject);
            return;
        }
        pluginCall.error("FILE_NOTCREATED");
    }

    @PluginMethod
    public void appendFile(PluginCall pluginCall) {
        try {
            pluginCall.getData().putOpt("append", true);
        } catch (JSONException unused) {
        }
        writeFile(pluginCall);
    }

    @PluginMethod
    public void deleteFile(PluginCall pluginCall) {
        saveCall(pluginCall);
        String string = pluginCall.getString("path");
        String directoryParameter = getDirectoryParameter(pluginCall);
        File fileObject = getFileObject(string, directoryParameter);
        if (!isPublicDirectory(directoryParameter) || isStoragePermissionGranted(PluginRequestCodes.FILESYSTEM_REQUEST_DELETE_FILE_PERMISSIONS, PhotoViewer.WRITE)) {
            if (!fileObject.exists()) {
                pluginCall.error("File does not exist");
            } else if (!fileObject.delete()) {
                pluginCall.error("Unable to delete file");
            } else {
                pluginCall.success();
            }
        }
    }

    @PluginMethod
    public void mkdir(PluginCall pluginCall) {
        boolean zMkdir;
        saveCall(pluginCall);
        String string = pluginCall.getString("path");
        String directoryParameter = getDirectoryParameter(pluginCall);
        boolean zBooleanValue = pluginCall.getBoolean("recursive", false).booleanValue();
        File fileObject = getFileObject(string, directoryParameter);
        if (fileObject.exists()) {
            pluginCall.error("Directory exists");
            return;
        }
        if (!isPublicDirectory(directoryParameter) || isStoragePermissionGranted(PluginRequestCodes.FILESYSTEM_REQUEST_WRITE_FOLDER_PERMISSIONS, PhotoViewer.WRITE)) {
            if (zBooleanValue) {
                zMkdir = fileObject.mkdirs();
            } else {
                zMkdir = fileObject.mkdir();
            }
            if (!zMkdir) {
                pluginCall.error("Unable to create directory, unknown reason");
            } else {
                pluginCall.success();
            }
        }
    }

    @PluginMethod
    public void rmdir(PluginCall pluginCall) {
        saveCall(pluginCall);
        String string = pluginCall.getString("path");
        String directoryParameter = getDirectoryParameter(pluginCall);
        Boolean bool = pluginCall.getBoolean("recursive", false);
        File fileObject = getFileObject(string, directoryParameter);
        if (!isPublicDirectory(directoryParameter) || isStoragePermissionGranted(PluginRequestCodes.FILESYSTEM_REQUEST_DELETE_FOLDER_PERMISSIONS, PhotoViewer.WRITE)) {
            if (!fileObject.exists()) {
                pluginCall.error("Directory does not exist");
                return;
            }
            if (fileObject.isDirectory() && fileObject.listFiles().length != 0 && !bool.booleanValue()) {
                pluginCall.error("Directory is not empty");
                return;
            }
            try {
                deleteRecursively(fileObject);
                pluginCall.success();
            } catch (IOException unused) {
                pluginCall.error("Unable to delete directory, unknown reason");
            }
        }
    }

    @PluginMethod
    public void readdir(PluginCall pluginCall) {
        saveCall(pluginCall);
        String string = pluginCall.getString("path");
        String directoryParameter = getDirectoryParameter(pluginCall);
        File fileObject = getFileObject(string, directoryParameter);
        if (!isPublicDirectory(directoryParameter) || isStoragePermissionGranted(PluginRequestCodes.FILESYSTEM_REQUEST_READ_FOLDER_PERMISSIONS, PhotoViewer.READ)) {
            if (fileObject != null && fileObject.exists()) {
                String[] list = fileObject.list();
                if (list != null) {
                    JSObject jSObject = new JSObject();
                    jSObject.put("files", (Object) JSArray.from(list));
                    pluginCall.success(jSObject);
                    return;
                }
                pluginCall.error("Unable to read directory");
                return;
            }
            pluginCall.error("Directory does not exist");
        }
    }

    @PluginMethod
    public void getUri(PluginCall pluginCall) {
        saveCall(pluginCall);
        String string = pluginCall.getString("path");
        String directoryParameter = getDirectoryParameter(pluginCall);
        File fileObject = getFileObject(string, directoryParameter);
        if (!isPublicDirectory(directoryParameter) || isStoragePermissionGranted(PluginRequestCodes.FILESYSTEM_REQUEST_URI_PERMISSIONS, PhotoViewer.READ)) {
            JSObject jSObject = new JSObject();
            jSObject.put("uri", Uri.fromFile(fileObject).toString());
            pluginCall.success(jSObject);
        }
    }

    @PluginMethod
    public void stat(PluginCall pluginCall) {
        saveCall(pluginCall);
        String string = pluginCall.getString("path");
        String directoryParameter = getDirectoryParameter(pluginCall);
        File fileObject = getFileObject(string, directoryParameter);
        if (!isPublicDirectory(directoryParameter) || isStoragePermissionGranted(PluginRequestCodes.FILESYSTEM_REQUEST_STAT_PERMISSIONS, PhotoViewer.READ)) {
            if (!fileObject.exists()) {
                pluginCall.error("File does not exist");
                return;
            }
            JSObject jSObject = new JSObject();
            jSObject.put(Globalization.TYPE, fileObject.isDirectory() ? "directory" : "file");
            jSObject.put("size", fileObject.length());
            jSObject.put("ctime", (String) null);
            jSObject.put("mtime", fileObject.lastModified());
            jSObject.put("uri", Uri.fromFile(fileObject).toString());
            pluginCall.success(jSObject);
        }
    }

    private static void deleteRecursively(File file) throws IOException {
        if (file.isFile()) {
            file.delete();
            return;
        }
        for (File file2 : file.listFiles()) {
            deleteRecursively(file2);
        }
        file.delete();
    }

    private static void copyRecursively(File file, File file2) throws IOException {
        if (file.isDirectory()) {
            file2.mkdir();
            for (String str : file.list()) {
                copyRecursively(new File(file, str), new File(file2, str));
            }
            return;
        }
        if (!file2.getParentFile().exists()) {
            file2.getParentFile().mkdirs();
        }
        if (!file2.exists()) {
            file2.createNewFile();
        }
        FileChannel channel = new FileInputStream(file).getChannel();
        try {
            FileChannel channel2 = new FileOutputStream(file2).getChannel();
            try {
                channel2.transferFrom(channel, 0L, channel.size());
                if (channel2 != null) {
                    channel2.close();
                }
                if (channel != null) {
                    channel.close();
                }
            } finally {
            }
        } catch (Throwable th) {
            if (channel != null) {
                try {
                    channel.close();
                } catch (Throwable th2) {
                    th.addSuppressed(th2);
                }
            }
            throw th;
        }
    }

    private void _copy(PluginCall pluginCall, boolean z) {
        saveCall(pluginCall);
        String string = pluginCall.getString("from");
        String string2 = pluginCall.getString("to");
        String string3 = pluginCall.getString("directory");
        String string4 = pluginCall.getString("toDirectory");
        if (string4 == null) {
            string4 = string3;
        }
        if (string == null || string.isEmpty() || string2 == null || string2.isEmpty()) {
            pluginCall.error("Both to and from must be provided");
            return;
        }
        File fileObject = getFileObject(string, string3);
        File fileObject2 = getFileObject(string2, string4);
        if (fileObject2.equals(fileObject)) {
            pluginCall.success();
            return;
        }
        if (!fileObject.exists()) {
            pluginCall.error("The source object does not exist");
            return;
        }
        if (fileObject2.getParentFile().isFile()) {
            pluginCall.error("The parent object of the destination is a file");
            return;
        }
        if (!fileObject2.getParentFile().exists()) {
            pluginCall.error("The parent object of the destination does not exist");
            return;
        }
        if (isPublicDirectory(string3) || isPublicDirectory(string4)) {
            if (z) {
                if (!isStoragePermissionGranted(PluginRequestCodes.FILESYSTEM_REQUEST_RENAME_PERMISSIONS, PhotoViewer.WRITE)) {
                    return;
                }
            } else if (!isStoragePermissionGranted(PluginRequestCodes.FILESYSTEM_REQUEST_COPY_PERMISSIONS, PhotoViewer.WRITE)) {
                return;
            }
        }
        if (fileObject2.isDirectory()) {
            pluginCall.error("Cannot overwrite a directory");
            return;
        }
        fileObject2.delete();
        if (z) {
            if (!fileObject.renameTo(fileObject2)) {
                pluginCall.error("Unable to rename, unknown reason");
                return;
            }
        } else {
            try {
                copyRecursively(fileObject, fileObject2);
            } catch (IOException e) {
                pluginCall.error("Unable to perform action: " + e.getLocalizedMessage());
                return;
            }
        }
        pluginCall.success();
    }

    @PluginMethod
    public void rename(PluginCall pluginCall) {
        _copy(pluginCall, true);
    }

    @PluginMethod
    public void copy(PluginCall pluginCall) {
        _copy(pluginCall, false);
    }

    private boolean isStoragePermissionGranted(int i, String str) {
        Logger.verbose(getLogTag(), "Permission '" + str + "' always is granted");
        return true;
    }

    private String getDirectoryParameter(PluginCall pluginCall) {
        return pluginCall.getString("directory");
    }

    private boolean isPublicDirectory(String str) {
        return "DOCUMENTS".equals(str) || "EXTERNAL_STORAGE".equals(str);
    }

    @Override // com.getcapacitor.Plugin
    protected void handleRequestPermissionsResult(int i, String[] strArr, int[] iArr) {
        super.handleRequestPermissionsResult(i, strArr, iArr);
        Logger.debug(getLogTag(), "handling request perms result");
        if (getSavedCall() == null) {
            Logger.debug(getLogTag(), "No stored plugin call for permissions request result");
            return;
        }
        PluginCall savedCall = getSavedCall();
        for (int i2 = 0; i2 < iArr.length; i2++) {
            int i3 = iArr[i2];
            String str = strArr[i2];
            if (i3 == -1) {
                Logger.debug(getLogTag(), "User denied storage permission: " + str);
                savedCall.error(PERMISSION_DENIED_ERROR);
                freeSavedCall();
                return;
            }
        }
        if (i == 9012) {
            writeFile(savedCall);
        } else if (i == 9013) {
            mkdir(savedCall);
        } else if (i == 9014) {
            readFile(savedCall);
        } else if (i == 9015) {
            readdir(savedCall);
        } else if (i == 9016) {
            deleteFile(savedCall);
        } else if (i == 9017) {
            rmdir(savedCall);
        } else if (i == 9018) {
            getUri(savedCall);
        } else if (i == 9019) {
            stat(savedCall);
        } else if (i == 9020) {
            rename(savedCall);
        } else if (i == 9021) {
            copy(savedCall);
        } else if (i == 9022) {
            savedCall.resolve();
        }
        freeSavedCall();
    }
}

