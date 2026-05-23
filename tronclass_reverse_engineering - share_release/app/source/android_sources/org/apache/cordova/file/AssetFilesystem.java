package org.apache.cordova.file;

import android.content.res.AssetManager;
import android.net.Uri;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.util.HashMap;
import java.util.Map;
import org.apache.cordova.CordovaResourceApi;
import org.apache.cordova.LOG;
import org.apache.cordova.globalization.Globalization;
import org.json.JSONException;
import org.json.JSONObject;
public class AssetFilesystem extends Filesystem {
    private static final String LOG_TAG = "AssetFilesystem";
    private static Map<String, Long> lengthCache;
    private static Map<String, String[]> listCache;
    private static boolean listCacheFromFile;
    private static Object listCacheLock = new Object();
    private final AssetManager assetManager;

    @Override // org.apache.cordova.file.Filesystem
    LocalFilesystemURL URLforFilesystemPath(String str) {
        return null;
    }

    @Override // org.apache.cordova.file.Filesystem
    public boolean canRemoveFileAtLocalURL(LocalFilesystemURL localFilesystemURL) {
        return false;
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Removed duplicated region for block: B:57:0x0079 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* high-level source view WARN: Type inference failed for: r1v10, types: [java.io.ObjectInputStream] */
    /* high-level source view WARN: Type inference failed for: r1v18 */
    /* high-level source view WARN: Type inference failed for: r1v2 */
    /* high-level source view WARN: Type inference failed for: r2v1 */
    /* high-level source view WARN: Type inference failed for: r2v13, types: [java.lang.String] */
    /* high-level source view WARN: Type inference failed for: r2v14 */
    /* high-level source view WARN: Type inference failed for: r2v15 */
    /* high-level source view WARN: Type inference failed for: r2v17, types: [java.io.ObjectInputStream] */
    /* high-level source view WARN: Type inference failed for: r2v19 */
    /* high-level source view WARN: Type inference failed for: r2v20 */
    /* high-level source view WARN: Type inference failed for: r2v21 */
    /* high-level source view WARN: Type inference failed for: r2v22 */
    /* high-level source view WARN: Type inference failed for: r2v23 */
    /* high-level source view WARN: Type inference failed for: r2v3 */
    /* high-level source view WARN: Type inference failed for: r2v5, types: [java.io.ObjectInputStream] */
    /* high-level source view WARN: Type inference failed for: r2v9, types: [java.io.ObjectInputStream] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private void lazyInitCaches() {
        ?? r2;
        Throwable th;
        ?? objectInputStream;
        ClassNotFoundException e;
        String localizedMessage;
        synchronized (listCacheLock) {
            if (listCache == null) {
                ?? r1 = 0;
                try {
                    try {
                        objectInputStream = new ObjectInputStream(this.assetManager.open("cdvasset.manifest"));
                        try {
                            listCache = (Map) objectInputStream.readObject();
                            lengthCache = (Map) objectInputStream.readObject();
                            listCacheFromFile = true;
                            try {
                                objectInputStream.close();
                            } catch (IOException e2) {
                                String str = LOG_TAG;
                                localizedMessage = e2.getLocalizedMessage();
                                objectInputStream = str;
                                LOG.d(objectInputStream, localizedMessage);
                            }
                        } catch (IOException unused) {
                            r1 = objectInputStream;
                            if (r1 != 0) {
                                try {
                                    r1.close();
                                } catch (IOException e3) {
                                    String str2 = LOG_TAG;
                                    localizedMessage = e3.getLocalizedMessage();
                                    objectInputStream = str2;
                                    LOG.d(objectInputStream, localizedMessage);
                                }
                            }
                        } catch (ClassNotFoundException e4) {
                            e = e4;
                            e.printStackTrace();
                            if (objectInputStream != 0) {
                                try {
                                    objectInputStream.close();
                                } catch (IOException e5) {
                                    String str3 = LOG_TAG;
                                    localizedMessage = e5.getLocalizedMessage();
                                    objectInputStream = str3;
                                    LOG.d(objectInputStream, localizedMessage);
                                }
                            }
                        }
                    } catch (Throwable th2) {
                        th = th2;
                        if (r2 != 0) {
                            try {
                                r2.close();
                            } catch (IOException e6) {
                                LOG.d(LOG_TAG, e6.getLocalizedMessage());
                            }
                        }
                        throw th;
                    }
                } catch (IOException unused2) {
                } catch (ClassNotFoundException e7) {
                    objectInputStream = 0;
                    e = e7;
                } catch (Throwable th3) {
                    r2 = 0;
                    th = th3;
                    if (r2 != 0) {
                    }
                    throw th;
                }
                r2 = objectInputStream;
                if (listCache == null) {
                    LOG.w(LOG_TAG, "Asset manifest not found. Recursive copies and directory listing will be slow.");
                    listCache = new HashMap();
                    r2 = "Asset manifest not found. Recursive copies and directory listing will be slow.";
                }
            }
        }
    }

    private String[] listAssets(String str) throws IOException {
        if (str.startsWith("/")) {
            str = str.substring(1);
        }
        if (str.endsWith("/")) {
            str = str.substring(0, str.length() - 1);
        }
        lazyInitCaches();
        String[] strArr = listCache.get(str);
        if (strArr != null) {
            return strArr;
        }
        if (listCacheFromFile) {
            return new String[0];
        }
        String[] list = this.assetManager.list(str);
        listCache.put(str, list);
        return list;
    }

    private long getAssetSize(String str) throws FileNotFoundException {
        if (str.startsWith("/")) {
            str = str.substring(1);
        }
        lazyInitCaches();
        Map<String, Long> map = lengthCache;
        if (map != null) {
            Long l = map.get(str);
            if (l != null) {
                return l.longValue();
            }
            throw new FileNotFoundException("Asset not found: " + str);
        }
        CordovaResourceApi.OpenForReadResult openForReadResultOpenForRead = null;
        try {
            try {
                openForReadResultOpenForRead = this.resourceApi.openForRead(nativeUriForFullPath(str));
                long jAvailable = openForReadResultOpenForRead.length;
                if (jAvailable < 0) {
                    jAvailable = openForReadResultOpenForRead.inputStream.available();
                }
                return jAvailable;
            } catch (IOException e) {
                FileNotFoundException fileNotFoundException = new FileNotFoundException("File not found: " + str);
                fileNotFoundException.initCause(e);
                throw fileNotFoundException;
            }
        } finally {
            if (openForReadResultOpenForRead != null) {
                try {
                    openForReadResultOpenForRead.inputStream.close();
                } catch (IOException e2) {
                    LOG.d(LOG_TAG, e2.getLocalizedMessage());
                }
            }
        }
    }

    public AssetFilesystem(AssetManager assetManager, CordovaResourceApi cordovaResourceApi) {
        super(Uri.parse("file:///android_asset/"), "assets", cordovaResourceApi);
        this.assetManager = assetManager;
    }

    @Override // org.apache.cordova.file.Filesystem
    public Uri toNativeUri(LocalFilesystemURL localFilesystemURL) {
        return nativeUriForFullPath(localFilesystemURL.path);
    }

    @Override // org.apache.cordova.file.Filesystem
    public LocalFilesystemURL toLocalUri(Uri uri) {
        if (!"file".equals(uri.getScheme())) {
            return null;
        }
        Uri uriFromFile = Uri.fromFile(new File(uri.getPath()));
        String encodedPath = this.rootUri.getEncodedPath();
        String strSubstring = encodedPath.substring(0, encodedPath.length() - 1);
        if (!uriFromFile.getEncodedPath().startsWith(strSubstring)) {
            return null;
        }
        String strSubstring2 = uriFromFile.getEncodedPath().substring(strSubstring.length());
        if (!strSubstring2.isEmpty()) {
            strSubstring2 = strSubstring2.substring(1);
        }
        Uri.Builder builderPath = new Uri.Builder().scheme(LocalFilesystemURL.FILESYSTEM_PROTOCOL).authority("localhost").path(this.name);
        if (!strSubstring2.isEmpty()) {
            builderPath.appendEncodedPath(strSubstring2);
        }
        if (isDirectory(strSubstring2) || uri.getPath().endsWith("/")) {
            builderPath.appendEncodedPath("");
        }
        return LocalFilesystemURL.parse(builderPath.build());
    }

    private boolean isDirectory(String str) {
        try {
            return listAssets(str).length != 0;
        } catch (IOException unused) {
            return false;
        }
    }

    @Override // org.apache.cordova.file.Filesystem
    public LocalFilesystemURL[] listChildren(LocalFilesystemURL localFilesystemURL) throws FileNotFoundException {
        String strSubstring = localFilesystemURL.path.substring(1);
        if (strSubstring.endsWith("/")) {
            strSubstring = strSubstring.substring(0, strSubstring.length() - 1);
        }
        try {
            String[] strArrListAssets = listAssets(strSubstring);
            LocalFilesystemURL[] localFilesystemURLArr = new LocalFilesystemURL[strArrListAssets.length];
            for (int i = 0; i < strArrListAssets.length; i++) {
                localFilesystemURLArr[i] = localUrlforFullPath(new File(localFilesystemURL.path, strArrListAssets[i]).getPath());
            }
            return localFilesystemURLArr;
        } catch (IOException e) {
            FileNotFoundException fileNotFoundException = new FileNotFoundException();
            fileNotFoundException.initCause(e);
            throw fileNotFoundException;
        }
    }

    @Override // org.apache.cordova.file.Filesystem
    public JSONObject getFileForLocalURL(LocalFilesystemURL localFilesystemURL, String str, JSONObject jSONObject, boolean z) throws JSONException, FileExistsException, EncodingException, TypeMismatchException, IOException {
        LocalFilesystemURL localFilesystemURLLocalUrlforFullPath;
        if (jSONObject != null && jSONObject.optBoolean("create")) {
            throw new UnsupportedOperationException("Assets are read-only");
        }
        if (z && !str.endsWith("/")) {
            str = str + "/";
        }
        if (!str.startsWith("/")) {
            localFilesystemURLLocalUrlforFullPath = localUrlforFullPath(normalizePath(localFilesystemURL.path + "/" + str));
        } else {
            localFilesystemURLLocalUrlforFullPath = localUrlforFullPath(normalizePath(str));
        }
        getFileMetadataForLocalURL(localFilesystemURLLocalUrlforFullPath);
        boolean zIsDirectory = isDirectory(localFilesystemURLLocalUrlforFullPath.path);
        if (z && !zIsDirectory) {
            throw new TypeMismatchException("path doesn't exist or is file");
        }
        if (!z && zIsDirectory) {
            throw new TypeMismatchException("path doesn't exist or is directory");
        }
        return makeEntryForURL(localFilesystemURLLocalUrlforFullPath);
    }

    @Override // org.apache.cordova.file.Filesystem
    public JSONObject getFileMetadataForLocalURL(LocalFilesystemURL localFilesystemURL) throws FileNotFoundException {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put("size", localFilesystemURL.isDirectory ? 0L : getAssetSize(localFilesystemURL.path));
            jSONObject.put(Globalization.TYPE, localFilesystemURL.isDirectory ? "text/directory" : this.resourceApi.getMimeType(toNativeUri(localFilesystemURL)));
            jSONObject.put("name", new File(localFilesystemURL.path).getName());
            jSONObject.put("fullPath", localFilesystemURL.path);
            jSONObject.put("lastModifiedDate", 0);
            return jSONObject;
        } catch (JSONException unused) {
            return null;
        }
    }

    @Override // org.apache.cordova.file.Filesystem
    long writeToFileAtURL(LocalFilesystemURL localFilesystemURL, String str, int i, boolean z) throws NoModificationAllowedException, IOException {
        throw new NoModificationAllowedException("Assets are read-only");
    }

    @Override // org.apache.cordova.file.Filesystem
    long truncateFileAtURL(LocalFilesystemURL localFilesystemURL, long j) throws NoModificationAllowedException, IOException {
        throw new NoModificationAllowedException("Assets are read-only");
    }

    @Override // org.apache.cordova.file.Filesystem
    String filesystemPathForURL(LocalFilesystemURL localFilesystemURL) {
        return new File(this.rootUri.getPath(), localFilesystemURL.path).toString();
    }

    @Override // org.apache.cordova.file.Filesystem
    boolean removeFileAtLocalURL(LocalFilesystemURL localFilesystemURL) throws InvalidModificationException, NoModificationAllowedException {
        throw new NoModificationAllowedException("Assets are read-only");
    }

    @Override // org.apache.cordova.file.Filesystem
    boolean recursiveRemoveFileAtLocalURL(LocalFilesystemURL localFilesystemURL) throws NoModificationAllowedException {
        throw new NoModificationAllowedException("Assets are read-only");
    }
}

