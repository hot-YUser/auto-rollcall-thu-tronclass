package org.apache.cordova.file;

import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import org.apache.cordova.CordovaResourceApi;
import org.apache.cordova.globalization.Globalization;
import org.json.JSONException;
import org.json.JSONObject;
public class ContentFilesystem extends Filesystem {
    private final Context context;

    @Override // org.apache.cordova.file.Filesystem
    public LocalFilesystemURL URLforFilesystemPath(String str) {
        return null;
    }

    @Override // org.apache.cordova.file.Filesystem
    public boolean canRemoveFileAtLocalURL(LocalFilesystemURL localFilesystemURL) {
        return true;
    }

    public ContentFilesystem(Context context, CordovaResourceApi cordovaResourceApi) {
        super(Uri.parse("content://"), "content", cordovaResourceApi);
        this.context = context;
    }

    @Override // org.apache.cordova.file.Filesystem
    public Uri toNativeUri(LocalFilesystemURL localFilesystemURL) {
        String strSubstring = localFilesystemURL.uri.getEncodedPath().substring(this.name.length() + 2);
        if (strSubstring.length() < 2) {
            return null;
        }
        String str = "content://" + strSubstring;
        String encodedQuery = localFilesystemURL.uri.getEncodedQuery();
        if (encodedQuery != null) {
            str = str + '?' + encodedQuery;
        }
        String encodedFragment = localFilesystemURL.uri.getEncodedFragment();
        if (encodedFragment != null) {
            str = str + '#' + encodedFragment;
        }
        return Uri.parse(str);
    }

    @Override // org.apache.cordova.file.Filesystem
    public LocalFilesystemURL toLocalUri(Uri uri) {
        if (!"content".equals(uri.getScheme())) {
            return null;
        }
        String encodedPath = uri.getEncodedPath();
        if (encodedPath.length() > 0) {
            encodedPath = encodedPath.substring(1);
        }
        Uri.Builder builderAppendPath = new Uri.Builder().scheme(LocalFilesystemURL.FILESYSTEM_PROTOCOL).authority("localhost").path(this.name).appendPath(uri.getAuthority());
        if (encodedPath.length() > 0) {
            builderAppendPath.appendEncodedPath(encodedPath);
        }
        return LocalFilesystemURL.parse(builderAppendPath.encodedQuery(uri.getEncodedQuery()).encodedFragment(uri.getEncodedFragment()).build());
    }

    @Override // org.apache.cordova.file.Filesystem
    public JSONObject getFileForLocalURL(LocalFilesystemURL localFilesystemURL, String str, JSONObject jSONObject, boolean z) throws JSONException, IOException, TypeMismatchException {
        throw new UnsupportedOperationException("getFile() not supported for content:. Use resolveLocalFileSystemURL instead.");
    }

    @Override // org.apache.cordova.file.Filesystem
    public boolean removeFileAtLocalURL(LocalFilesystemURL localFilesystemURL) throws NoModificationAllowedException {
        Uri nativeUri = toNativeUri(localFilesystemURL);
        try {
            this.context.getContentResolver().delete(nativeUri, null, null);
            return true;
        } catch (UnsupportedOperationException e) {
            NoModificationAllowedException noModificationAllowedException = new NoModificationAllowedException("Deleting not supported for content uri: " + nativeUri);
            noModificationAllowedException.initCause(e);
            throw noModificationAllowedException;
        }
    }

    @Override // org.apache.cordova.file.Filesystem
    public boolean recursiveRemoveFileAtLocalURL(LocalFilesystemURL localFilesystemURL) throws NoModificationAllowedException {
        throw new NoModificationAllowedException("Cannot remove content url");
    }

    @Override // org.apache.cordova.file.Filesystem
    public LocalFilesystemURL[] listChildren(LocalFilesystemURL localFilesystemURL) throws FileNotFoundException {
        throw new UnsupportedOperationException("readEntriesAtLocalURL() not supported for content:. Use resolveLocalFileSystemURL instead.");
    }

    /* high-level source view WARN: Removed duplicated region for block: B:13:0x0030 A[Catch: all -> 0x0062, IOException -> 0x0064, TRY_LEAVE, TryCatch #1 {IOException -> 0x0064, blocks: (B:4:0x0012, B:6:0x0018, B:8:0x001e, B:10:0x0025, B:12:0x002b, B:13:0x0030), top: B:30:0x0012, outer: #0 }] */
    @Override // org.apache.cordova.file.Filesystem
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public JSONObject getFileMetadataForLocalURL(LocalFilesystemURL localFilesystemURL) throws FileNotFoundException {
        long jLongValue;
        Uri nativeUri = toNativeUri(localFilesystemURL);
        String mimeType = this.resourceApi.getMimeType(nativeUri);
        Cursor cursorOpenCursorForURL = openCursorForURL(nativeUri);
        long jLongValue2 = 0;
        try {
            if (cursorOpenCursorForURL != null) {
                try {
                    if (cursorOpenCursorForURL.moveToFirst()) {
                        Long lResourceSizeForCursor = resourceSizeForCursor(cursorOpenCursorForURL);
                        jLongValue = lResourceSizeForCursor != null ? lResourceSizeForCursor.longValue() : -1L;
                        Long lLastModifiedDateForCursor = lastModifiedDateForCursor(cursorOpenCursorForURL);
                        if (lLastModifiedDateForCursor != null) {
                            jLongValue2 = lLastModifiedDateForCursor.longValue();
                        }
                    } else {
                        jLongValue = this.resourceApi.openForRead(nativeUri).length;
                    }
                } catch (IOException e) {
                    FileNotFoundException fileNotFoundException = new FileNotFoundException();
                    fileNotFoundException.initCause(e);
                    throw fileNotFoundException;
                }
            }
            JSONObject jSONObject = new JSONObject();
            try {
                jSONObject.put("size", jLongValue);
                jSONObject.put(Globalization.TYPE, mimeType);
                jSONObject.put("name", this.name);
                jSONObject.put("fullPath", localFilesystemURL.path);
                jSONObject.put("lastModifiedDate", jLongValue2);
                return jSONObject;
            } catch (JSONException unused) {
                return null;
            }
        } finally {
            if (cursorOpenCursorForURL != null) {
                cursorOpenCursorForURL.close();
            }
        }
    }

    @Override // org.apache.cordova.file.Filesystem
    public long writeToFileAtURL(LocalFilesystemURL localFilesystemURL, String str, int i, boolean z) throws NoModificationAllowedException {
        throw new NoModificationAllowedException("Couldn't write to file given its content URI");
    }

    @Override // org.apache.cordova.file.Filesystem
    public long truncateFileAtURL(LocalFilesystemURL localFilesystemURL, long j) throws NoModificationAllowedException {
        throw new NoModificationAllowedException("Couldn't truncate file given its content URI");
    }

    protected Cursor openCursorForURL(Uri uri) {
        try {
            return this.context.getContentResolver().query(uri, null, null, null, null);
        } catch (UnsupportedOperationException unused) {
            return null;
        }
    }

    private Long resourceSizeForCursor(Cursor cursor) {
        String string;
        int columnIndex = cursor.getColumnIndex("_size");
        if (columnIndex == -1 || (string = cursor.getString(columnIndex)) == null) {
            return null;
        }
        return Long.valueOf(Long.parseLong(string));
    }

    protected Long lastModifiedDateForCursor(Cursor cursor) {
        String string;
        int columnIndex = cursor.getColumnIndex("date_modified");
        if (columnIndex == -1) {
            columnIndex = cursor.getColumnIndex("last_modified");
        }
        if (columnIndex == -1 || (string = cursor.getString(columnIndex)) == null) {
            return null;
        }
        return Long.valueOf(Long.parseLong(string));
    }

    @Override // org.apache.cordova.file.Filesystem
    public String filesystemPathForURL(LocalFilesystemURL localFilesystemURL) {
        File fileMapUriToFile = this.resourceApi.mapUriToFile(toNativeUri(localFilesystemURL));
        if (fileMapUriToFile == null) {
            return null;
        }
        return fileMapUriToFile.getAbsolutePath();
    }
}

