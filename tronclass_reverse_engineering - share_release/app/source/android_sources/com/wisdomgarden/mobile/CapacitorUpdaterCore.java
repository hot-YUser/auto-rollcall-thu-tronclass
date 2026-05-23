package com.wisdomgarden.mobile;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.provider.Settings;
import android.util.Log;
import com.getcapacitor.plugin.WebView;
import com.silkimen.http.HttpRequest;
import java.io.BufferedInputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import org.json.JSONException;
import org.json.JSONObject;
import org.opencv.videoio.Videoio;
public class CapacitorUpdaterCore {
    private String TAG;
    private Context context;
    private SharedPreferences.Editor editor;
    private String otaFolder;
    private final CapacitorUpdater plugin;
    private SharedPreferences prefs;
    public String statsUrl;

    public CapacitorUpdaterCore(Context context) {
        this.TAG = "Capacitor-updater";
        this.statsUrl = "";
        this.otaFolder = "_ota";
        this.context = context;
        this.plugin = new CapacitorUpdater();
        SharedPreferences sharedPreferences = context.getSharedPreferences(WebView.WEBVIEW_PREFS_NAME, 0);
        this.prefs = sharedPreferences;
        this.editor = sharedPreferences.edit();
    }

    public CapacitorUpdaterCore(Context context, CapacitorUpdater capacitorUpdater) {
        this.TAG = "Capacitor-updater";
        this.statsUrl = "";
        this.otaFolder = "_ota";
        this.context = context;
        this.plugin = capacitorUpdater;
        SharedPreferences sharedPreferences = context.getSharedPreferences(WebView.WEBVIEW_PREFS_NAME, 0);
        this.prefs = sharedPreferences;
        this.editor = sharedPreferences.edit();
    }

    private Boolean unzip(File file) throws IOException {
        File file2 = new File(this.context.getFilesDir() + "/" + this.otaFolder + "/");
        deleteDirectory(new File(this.context.getFilesDir() + "/" + this.otaFolder + "/www"));
        try {
            ZipInputStream zipInputStream = new ZipInputStream(new BufferedInputStream(new FileInputStream(file)));
            try {
                try {
                    try {
                        byte[] bArr = new byte[8192];
                        long length = file.length();
                        long compressedSize = 8192;
                        int i = 0;
                        while (true) {
                            ZipEntry nextEntry = zipInputStream.getNextEntry();
                            if (nextEntry != null) {
                                File file3 = new File(file2, nextEntry.getName());
                                String canonicalPath = file3.getCanonicalPath();
                                String canonicalPath2 = new File(String.valueOf(file2)).getCanonicalPath();
                                File parentFile = nextEntry.isDirectory() ? file3 : file3.getParentFile();
                                if (!canonicalPath.startsWith(canonicalPath2)) {
                                    throw new FileNotFoundException("SecurityException, Failed to ensure directory is the start path : " + canonicalPath2 + " of " + canonicalPath);
                                }
                                if (!parentFile.isDirectory() && !parentFile.mkdirs()) {
                                    throw new FileNotFoundException("Failed to ensure directory: " + parentFile.getAbsolutePath());
                                }
                                if (!nextEntry.isDirectory()) {
                                    FileOutputStream fileOutputStream = new FileOutputStream(file3);
                                    while (true) {
                                        try {
                                            int i2 = zipInputStream.read(bArr);
                                            if (i2 == -1) {
                                                break;
                                            }
                                            fileOutputStream.write(bArr, 0, i2);
                                        } catch (Throwable th) {
                                            fileOutputStream.close();
                                            throw th;
                                        }
                                    }
                                    fileOutputStream.close();
                                    int i3 = (int) ((100 * compressedSize) / length);
                                    if (length > 1 && i3 != i) {
                                        i = i3;
                                    }
                                    compressedSize += nextEntry.getCompressedSize();
                                }
                            } else {
                                try {
                                    zipInputStream.close();
                                    return true;
                                } catch (IOException e) {
                                    e.printStackTrace();
                                    return false;
                                }
                            }
                        }
                    } catch (Exception e2) {
                        Log.i(this.TAG, "unzip error", e2);
                        Boolean.valueOf(false);
                        try {
                            zipInputStream.close();
                            return true;
                        } catch (IOException e3) {
                            e3.printStackTrace();
                            return false;
                        }
                    }
                } catch (Throwable unused) {
                    zipInputStream.close();
                    return true;
                }
            } catch (IOException e4) {
                e4.printStackTrace();
                return false;
            }
        } catch (FileNotFoundException e5) {
            e5.printStackTrace();
            return false;
        }
    }

    private Boolean checkOatVersionFile(String str) throws IOException {
        File file = new File(this.context.getFilesDir() + "/" + this.otaFolder + "/" + str);
        File file2 = new File(this.context.getFilesDir() + "/" + this.otaFolder + "/www");
        if (!file2.exists()) {
            return false;
        }
        if (file.exists()) {
            deleteDirectory(file);
        }
        file2.renameTo(file);
        String[] list = file.list();
        Log.i(this.TAG, "pathsName.length: " + list);
        if (list == null || list.length == 0 || !new File(file.getPath() + "/index.html").exists()) {
            return false;
        }
        return true;
    }

    private Boolean downloadFile(String str, File file) throws JSONException {
        if (file.exists()) {
            file.delete();
        }
        try {
            URL url = new URL(str);
            URLConnection uRLConnectionOpenConnection = url.openConnection();
            DataInputStream dataInputStream = new DataInputStream(url.openStream());
            long contentLength = uRLConnectionOpenConnection.getContentLength();
            int i = 1024;
            byte[] bArr = new byte[1024];
            file.getParentFile().mkdirs();
            file.createNewFile();
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            int i2 = 0;
            while (true) {
                int i3 = dataInputStream.read(bArr);
                if (i3 > 0) {
                    fileOutputStream.write(bArr, 0, i3);
                    int i4 = (int) (((long) (i * 100)) / contentLength);
                    if (contentLength > 1 && i4 != i2) {
                        i2 = i4;
                    }
                    i += i3;
                } else {
                    return true;
                }
            }
        } catch (Exception e) {
            Log.e(this.TAG, "downloadFile error", e);
            return false;
        }
    }

    public Boolean download(String str, String str2) {
        try {
            File file = new File(this.context.getFilesDir() + "/" + this.otaFolder + "/" + str2 + ".zip");
            if (downloadFile(str, file).booleanValue() && unzip(file).booleanValue()) {
                file.delete();
                return checkOatVersionFile(str2).booleanValue();
            }
            return false;
        } catch (Exception e) {
            Log.e(this.TAG, "updateApp error", e);
            return false;
        }
    }

    public ArrayList<String> list() {
        ArrayList<String> arrayList = new ArrayList<>();
        File file = new File(this.context.getFilesDir() + "/" + this.otaFolder);
        Log.i(this.TAG, "list File : " + file.getPath());
        if (file.exists()) {
            for (File file2 : file.listFiles()) {
                arrayList.add(file2.getName());
            }
        } else {
            Log.i(this.TAG, "No version available" + file);
        }
        return arrayList;
    }

    private void deleteDirectory(File file) throws IOException {
        File[] fileArrListFiles;
        if (file.exists()) {
            if (file.isDirectory() && (fileArrListFiles = file.listFiles()) != null) {
                for (File file2 : fileArrListFiles) {
                    deleteDirectory(file2);
                }
            }
            if (!file.delete()) {
                throw new IOException("Failed to delete " + file);
            }
        }
    }

    public Boolean delete(String str) throws IOException {
        if (str.length() == 0) {
            Log.i(this.TAG, "Delete failed, empty version");
            return false;
        }
        if (getCurrentVersion().equals(str)) {
            Log.i(this.TAG, "Delete failed, can not delete current version");
            return false;
        }
        File file = new File(this.context.getFilesDir() + "/" + this.otaFolder + "/" + str);
        if (file.exists()) {
            deleteDirectory(file);
            return true;
        }
        Log.i(this.TAG, "Directory not removed: " + file.getPath());
        sendStats("delete", str);
        return false;
    }

    public Boolean set(String str) {
        File file = new File(this.context.getFilesDir() + "/" + this.otaFolder + "/" + str);
        File file2 = new File(file.getPath() + "/index.html");
        if (file.exists() && file2.exists()) {
            this.editor.putString("lastPathHot", file.getPath());
            this.editor.putString(WebView.CAP_SERVER_PATH, file.getPath());
            this.editor.commit();
            sendStats("set", str);
            return true;
        }
        sendStats("set_fail", str);
        return false;
    }

    public String getLastPathHot() {
        return this.prefs.getString("lastPathHot", "");
    }

    public String getCurrentVersion() {
        String string = this.prefs.getString("lastPathHot", "");
        int iLastIndexOf = string.lastIndexOf("/");
        return iLastIndexOf == -1 ? "" : string.substring(iLastIndexOf + 1);
    }

    public void reset() {
        sendStats("reset", getCurrentVersion());
        this.editor.putString("lastPathHot", "");
        this.editor.putString(WebView.CAP_SERVER_PATH, "");
        this.editor.commit();
    }

    public void sendStats(final String str, final String str2) {
        if (this.statsUrl == "") {
            return;
        }
        JSONObject jSONObject = new JSONObject();
        try {
            final URL url = new URL(this.statsUrl);
            String string = Settings.Secure.getString(this.context.getContentResolver(), "android_id");
            PackageInfo packageInfo = this.context.getPackageManager().getPackageInfo(this.context.getPackageName(), 0);
            jSONObject.put("platform", "android");
            jSONObject.put("action", str);
            jSONObject.put("device_id", string);
            jSONObject.put("version", str2);
            jSONObject.put("version_build", packageInfo.versionName);
            final String string2 = jSONObject.toString();
            new Thread(new Runnable() { // from class: com.wisdomgarden.mobile.CapacitorUpdaterCore.1
                @Override // java.lang.Runnable
                public void run() throws Throwable {
                    HttpURLConnection httpURLConnection;
                    HttpURLConnection httpURLConnection2 = null;
                    try {
                        try {
                            httpURLConnection = (HttpURLConnection) url.openConnection();
                        } catch (Exception e) {
                            e = e;
                        }
                    } catch (Throwable th) {
                        th = th;
                    }
                    try {
                        httpURLConnection.setRequestMethod("POST");
                        httpURLConnection.setRequestProperty("Content-Type", HttpRequest.CONTENT_TYPE_JSON);
                        httpURLConnection.setRequestProperty(HttpRequest.HEADER_ACCEPT, HttpRequest.CONTENT_TYPE_JSON);
                        httpURLConnection.setRequestProperty(HttpRequest.HEADER_CONTENT_LENGTH, Integer.toString(string2.getBytes().length));
                        httpURLConnection.setDoOutput(true);
                        httpURLConnection.setConnectTimeout(Videoio.CAP_QT);
                        DataOutputStream dataOutputStream = new DataOutputStream(httpURLConnection.getOutputStream());
                        dataOutputStream.writeBytes(string2);
                        dataOutputStream.close();
                        int responseCode = httpURLConnection.getResponseCode();
                        if (responseCode != 200) {
                            Log.e(CapacitorUpdaterCore.this.TAG, "Stats error responseCode: " + responseCode);
                        } else {
                            Log.i(CapacitorUpdaterCore.this.TAG, "Stats send for \"" + str + "\", version " + str2);
                        }
                        if (httpURLConnection != null) {
                            httpURLConnection.disconnect();
                        }
                    } catch (Exception e2) {
                        e = e2;
                        httpURLConnection2 = httpURLConnection;
                        Log.e(CapacitorUpdaterCore.this.TAG, "Error post stats", e);
                        if (httpURLConnection2 != null) {
                            httpURLConnection2.disconnect();
                        }
                    } catch (Throwable th2) {
                        th = th2;
                        httpURLConnection2 = httpURLConnection;
                        if (httpURLConnection2 != null) {
                            httpURLConnection2.disconnect();
                        }
                        throw th;
                    }
                }
            }).start();
        } catch (Exception e) {
            Log.e(this.TAG, "Error get stats", e);
        }
    }
}

