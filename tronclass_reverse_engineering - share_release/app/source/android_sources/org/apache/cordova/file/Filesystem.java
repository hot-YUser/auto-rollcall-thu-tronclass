package org.apache.cordova.file;

import android.net.Uri;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import org.apache.commons.io.IOUtils;
import org.apache.cordova.CordovaResourceApi;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public abstract class Filesystem {
    public final String name;
    protected final CordovaResourceApi resourceApi;
    private JSONObject rootEntry;
    protected final Uri rootUri;

    public interface ReadFileCallback {
        void handleData(InputStream inputStream, String str) throws IOException;
    }

    abstract LocalFilesystemURL URLforFilesystemPath(String str);

    abstract boolean canRemoveFileAtLocalURL(LocalFilesystemURL localFilesystemURL);

    abstract String filesystemPathForURL(LocalFilesystemURL localFilesystemURL);

    abstract JSONObject getFileForLocalURL(LocalFilesystemURL localFilesystemURL, String str, JSONObject jSONObject, boolean z) throws JSONException, FileExistsException, EncodingException, IOException, TypeMismatchException;

    abstract JSONObject getFileMetadataForLocalURL(LocalFilesystemURL localFilesystemURL) throws FileNotFoundException;

    public long getFreeSpaceInBytes() {
        return 0L;
    }

    abstract LocalFilesystemURL[] listChildren(LocalFilesystemURL localFilesystemURL) throws FileNotFoundException;

    abstract boolean recursiveRemoveFileAtLocalURL(LocalFilesystemURL localFilesystemURL) throws FileExistsException, NoModificationAllowedException;

    abstract boolean removeFileAtLocalURL(LocalFilesystemURL localFilesystemURL) throws InvalidModificationException, NoModificationAllowedException;

    public abstract LocalFilesystemURL toLocalUri(Uri uri);

    public abstract Uri toNativeUri(LocalFilesystemURL localFilesystemURL);

    abstract long truncateFileAtURL(LocalFilesystemURL localFilesystemURL, long j) throws NoModificationAllowedException, IOException;

    abstract long writeToFileAtURL(LocalFilesystemURL localFilesystemURL, String str, int i, boolean z) throws NoModificationAllowedException, IOException;

    public Filesystem(Uri uri, String str, CordovaResourceApi cordovaResourceApi) {
        this.rootUri = uri;
        this.name = str;
        this.resourceApi = cordovaResourceApi;
    }

    public static JSONObject makeEntryForURL(LocalFilesystemURL localFilesystemURL, Uri uri) {
        try {
            String str = localFilesystemURL.path;
            String str2 = str.substring(0, str.length() - (str.endsWith("/") ? 1 : 0)).split("/+")[r2.length - 1];
            JSONObject jSONObject = new JSONObject();
            jSONObject.put("isFile", !localFilesystemURL.isDirectory);
            jSONObject.put("isDirectory", localFilesystemURL.isDirectory);
            jSONObject.put("name", str2);
            jSONObject.put("fullPath", str);
            jSONObject.put("filesystemName", localFilesystemURL.fsName);
            jSONObject.put("filesystem", !"temporary".equals(localFilesystemURL.fsName) ? 1 : 0);
            String string = uri.toString();
            if (localFilesystemURL.isDirectory && !string.endsWith("/")) {
                string = string + "/";
            }
            jSONObject.put("nativeURL", string);
            return jSONObject;
        } catch (JSONException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public JSONObject makeEntryForURL(LocalFilesystemURL localFilesystemURL) {
        Uri nativeUri = toNativeUri(localFilesystemURL);
        if (nativeUri == null) {
            return null;
        }
        return makeEntryForURL(localFilesystemURL, nativeUri);
    }

    public JSONObject makeEntryForNativeUri(Uri uri) {
        LocalFilesystemURL localUri = toLocalUri(uri);
        if (localUri == null) {
            return null;
        }
        return makeEntryForURL(localUri, uri);
    }

    public JSONObject getEntryForLocalURL(LocalFilesystemURL localFilesystemURL) throws IOException {
        return makeEntryForURL(localFilesystemURL);
    }

    public JSONObject makeEntryForFile(File file) {
        return makeEntryForNativeUri(Uri.fromFile(file));
    }

    public final JSONArray readEntriesAtLocalURL(LocalFilesystemURL localFilesystemURL) throws FileNotFoundException {
        LocalFilesystemURL[] localFilesystemURLArrListChildren = listChildren(localFilesystemURL);
        JSONArray jSONArray = new JSONArray();
        if (localFilesystemURLArrListChildren != null) {
            for (LocalFilesystemURL localFilesystemURL2 : localFilesystemURLArrListChildren) {
                jSONArray.put(makeEntryForURL(localFilesystemURL2));
            }
        }
        return jSONArray;
    }

    public Uri getRootUri() {
        return this.rootUri;
    }

    public boolean exists(LocalFilesystemURL localFilesystemURL) {
        try {
            getFileMetadataForLocalURL(localFilesystemURL);
            return true;
        } catch (FileNotFoundException unused) {
            return false;
        }
    }

    public Uri nativeUriForFullPath(String str) {
        if (str == null) {
            return null;
        }
        String encodedPath = Uri.fromFile(new File(str)).getEncodedPath();
        if (encodedPath.startsWith("/")) {
            encodedPath = encodedPath.substring(1);
        }
        return this.rootUri.buildUpon().appendEncodedPath(encodedPath).build();
    }

    public LocalFilesystemURL localUrlforFullPath(String str) {
        Uri uriNativeUriForFullPath = nativeUriForFullPath(str);
        if (uriNativeUriForFullPath != null) {
            return toLocalUri(uriNativeUriForFullPath);
        }
        return null;
    }

    protected static String normalizePath(String str) {
        boolean zStartsWith = str.startsWith("/");
        if (zStartsWith) {
            str = str.replaceFirst("/+", "");
        }
        ArrayList<String> arrayList = new ArrayList(Arrays.asList(str.split("/+")));
        int i = 0;
        while (i < arrayList.size()) {
            if (((String) arrayList.get(i)).equals("..")) {
                arrayList.remove(i);
                if (i > 0) {
                    arrayList.remove(i - 1);
                    i--;
                }
            }
            i++;
        }
        StringBuilder sb = new StringBuilder();
        for (String str2 : arrayList) {
            sb.append("/");
            sb.append(str2);
        }
        if (zStartsWith) {
            return sb.toString();
        }
        return sb.toString().substring(1);
    }

    public JSONObject getRootEntry() {
        if (this.rootEntry == null) {
            this.rootEntry = makeEntryForNativeUri(this.rootUri);
        }
        return this.rootEntry;
    }

    public JSONObject getParentForLocalURL(LocalFilesystemURL localFilesystemURL) throws IOException {
        Uri uriBuild = localFilesystemURL.uri;
        String parent = new File(localFilesystemURL.uri.getPath()).getParent();
        if (!"/".equals(parent)) {
            uriBuild = localFilesystemURL.uri.buildUpon().path(parent + IOUtils.DIR_SEPARATOR_UNIX).build();
        }
        return getEntryForLocalURL(LocalFilesystemURL.parse(uriBuild));
    }

    protected LocalFilesystemURL makeDestinationURL(String str, LocalFilesystemURL localFilesystemURL, LocalFilesystemURL localFilesystemURL2, boolean z) {
        String str2;
        if ("null".equals(str) || "".equals(str)) {
            str = localFilesystemURL.uri.getLastPathSegment();
        }
        String string = localFilesystemURL2.uri.toString();
        if (!string.endsWith("/")) {
            str2 = string + "/" + str;
        } else {
            str2 = string + str;
        }
        if (z) {
            str2 = str2 + IOUtils.DIR_SEPARATOR_UNIX;
        }
        return LocalFilesystemURL.parse(str2);
    }

    public JSONObject copyFileToURL(LocalFilesystemURL localFilesystemURL, String str, Filesystem filesystem, LocalFilesystemURL localFilesystemURL2, boolean z) throws JSONException, InvalidModificationException, FileExistsException, NoModificationAllowedException, IOException {
        if (z && !filesystem.canRemoveFileAtLocalURL(localFilesystemURL2)) {
            throw new NoModificationAllowedException("Cannot move file at source URL");
        }
        LocalFilesystemURL localFilesystemURLMakeDestinationURL = makeDestinationURL(str, localFilesystemURL2, localFilesystemURL, localFilesystemURL2.isDirectory);
        CordovaResourceApi.OpenForReadResult openForReadResultOpenForRead = this.resourceApi.openForRead(filesystem.toNativeUri(localFilesystemURL2));
        try {
            this.resourceApi.copyResource(openForReadResultOpenForRead, getOutputStreamForURL(localFilesystemURLMakeDestinationURL));
            if (z) {
                filesystem.removeFileAtLocalURL(localFilesystemURL2);
            }
            return getEntryForLocalURL(localFilesystemURLMakeDestinationURL);
        } catch (IOException e) {
            openForReadResultOpenForRead.inputStream.close();
            throw e;
        }
    }

    public OutputStream getOutputStreamForURL(LocalFilesystemURL localFilesystemURL) throws IOException {
        return this.resourceApi.openOutputStream(toNativeUri(localFilesystemURL));
    }

    public void readFileAtURL(LocalFilesystemURL localFilesystemURL, long j, long j2, ReadFileCallback readFileCallback) throws IOException {
        CordovaResourceApi.OpenForReadResult openForReadResultOpenForRead = this.resourceApi.openForRead(toNativeUri(localFilesystemURL));
        if (j2 < 0) {
            j2 = openForReadResultOpenForRead.length;
        }
        long j3 = j2 - j;
        if (j > 0) {
            try {
                openForReadResultOpenForRead.inputStream.skip(j);
            } finally {
                openForReadResultOpenForRead.inputStream.close();
            }
        }
        InputStream limitedInputStream = openForReadResultOpenForRead.inputStream;
        if (j2 < openForReadResultOpenForRead.length) {
            limitedInputStream = new LimitedInputStream(limitedInputStream, j3);
        }
        readFileCallback.handleData(limitedInputStream, openForReadResultOpenForRead.mimeType);
    }

    protected class LimitedInputStream extends FilterInputStream {
        long numBytesToRead;

        public LimitedInputStream(InputStream inputStream, long j) {
            super(inputStream);
            this.numBytesToRead = j;
        }

        @Override // java.io.FilterInputStream, java.io.InputStream
        public int read() throws IOException {
            long j = this.numBytesToRead;
            if (j <= 0) {
                return -1;
            }
            this.numBytesToRead = j - 1;
            return this.in.read();
        }

        @Override // java.io.FilterInputStream, java.io.InputStream
        public int read(byte[] bArr, int i, int i2) throws IOException {
            long j = this.numBytesToRead;
            if (j <= 0) {
                return -1;
            }
            if (i2 > j) {
                i2 = (int) j;
            }
            int i3 = this.in.read(bArr, i, i2);
            this.numBytesToRead -= (long) i3;
            return i3;
        }
    }
}

