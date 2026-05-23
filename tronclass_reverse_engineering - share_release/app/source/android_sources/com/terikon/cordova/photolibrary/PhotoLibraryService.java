package com.terikon.cordova.photolibrary;

import android.content.Context;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.media.ExifInterface;
import android.media.MediaScannerConnection;
import android.media.ThumbnailUtils;
import android.net.Uri;
import android.os.Environment;
import android.os.SystemClock;
import android.provider.MediaStore;
import android.util.Base64;
import androidx.camera.video.AudioStats;
import com.onesignal.OneSignalDbContract;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URISyntaxException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.TimeZone;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class PhotoLibraryService {
    public static final String PERMISSION_ERROR = "Permission Denial: This application is not allowed to access Photo data.";
    private static PhotoLibraryService instance;
    private SimpleDateFormat dateFormatter;
    private Pattern dataURLPattern = Pattern.compile("^data:(.+?)/(.+?);base64,");
    private Map<String, String> imageMimeToExtension = new HashMap<String, String>() { // from class: com.terikon.cordova.photolibrary.PhotoLibraryService.6
        {
            put("jpeg", ".jpg");
        }
    };
    private Map<String, String> videMimeToExtension = new HashMap<String, String>() { // from class: com.terikon.cordova.photolibrary.PhotoLibraryService.7
        {
            put("quicktime", ".mov");
            put("ogg", ".ogv");
        }
    };

    public interface ChunkResultRunnable {
        void run(ArrayList<JSONObject> arrayList, int i, boolean z);
    }

    public interface FilePathRunnable {
        void run(String str);
    }

    public interface JSONObjectRunnable {
        void run(JSONObject jSONObject);
    }

    private static boolean isOrientationSwapsDimensions(int i) {
        return i == 5 || i == 6 || i == 7 || i == 8;
    }

    protected PhotoLibraryService() {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        this.dateFormatter = simpleDateFormat;
        simpleDateFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
    }

    public static PhotoLibraryService getInstance() {
        if (instance == null) {
            synchronized (PhotoLibraryService.class) {
                if (instance == null) {
                    instance = new PhotoLibraryService();
                }
            }
        }
        return instance;
    }

    public void getLibrary(Context context, PhotoLibraryGetLibraryOptions photoLibraryGetLibraryOptions, ChunkResultRunnable chunkResultRunnable) throws JSONException {
        queryLibrary(context, photoLibraryGetLibraryOptions.itemsInChunk, photoLibraryGetLibraryOptions.chunkTimeSec, photoLibraryGetLibraryOptions.includeAlbumData, "", chunkResultRunnable);
    }

    public ArrayList<JSONObject> getAlbums(Context context) throws JSONException {
        return queryContentProvider(context, MediaStore.Images.Media.EXTERNAL_CONTENT_URI, new JSONObject() { // from class: com.terikon.cordova.photolibrary.PhotoLibraryService.1
            {
                put(OSOutcomeConstants.OUTCOME_ID, "bucket_id");
                put(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE, "bucket_display_name");
            }
        }, "1) GROUP BY 1,(2");
    }

    public PictureData getThumbnail(Context context, String str, int i, int i2, double d) throws IOException {
        Bitmap bitmapDecodeStream;
        File file = new File(getImageURL(str));
        if (i == 512 && i2 == 384) {
            long imageId = getImageId(str);
            bitmapDecodeStream = MediaStore.Images.Thumbnails.getThumbnail(context.getContentResolver(), imageId, 1, null);
        } else {
            bitmapDecodeStream = null;
        }
        if (bitmapDecodeStream == null) {
            Uri uriFromFile = Uri.fromFile(file);
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inJustDecodeBounds = true;
            BitmapFactory.decodeStream(context.getContentResolver().openInputStream(uriFromFile), null, options);
            options.inSampleSize = calculateInSampleSize(options, i, i2);
            options.inJustDecodeBounds = false;
            InputStream inputStreamOpenInputStream = context.getContentResolver().openInputStream(uriFromFile);
            bitmapDecodeStream = BitmapFactory.decodeStream(inputStreamOpenInputStream, null, options);
            inputStreamOpenInputStream.close();
        }
        if (bitmapDecodeStream == null) {
            return null;
        }
        Bitmap bitmapRotateImage = rotateImage(bitmapDecodeStream, getImageOrientation(file));
        if (bitmapDecodeStream != bitmapRotateImage) {
            bitmapDecodeStream.recycle();
        }
        Bitmap bitmapExtractThumbnail = ThumbnailUtils.extractThumbnail(bitmapRotateImage, i, i2);
        if (bitmapRotateImage != bitmapExtractThumbnail) {
            bitmapRotateImage.recycle();
        }
        byte[] jpegBytesFromBitmap = getJpegBytesFromBitmap(bitmapExtractThumbnail, d);
        bitmapExtractThumbnail.recycle();
        return new PictureData(jpegBytesFromBitmap, "image/jpeg");
    }

    public PictureAsStream getPhotoAsStream(Context context, String str) throws IOException {
        int imageOrientation;
        int imageId = getImageId(str);
        File file = new File(getImageURL(str));
        Uri uriFromFile = Uri.fromFile(file);
        String strQueryMimeType = queryMimeType(context, imageId);
        InputStream inputStreamOpenInputStream = context.getContentResolver().openInputStream(uriFromFile);
        if (strQueryMimeType.equals("image/jpeg") && (imageOrientation = getImageOrientation(file)) > 1) {
            Bitmap bitmapDecodeStream = BitmapFactory.decodeStream(inputStreamOpenInputStream, null, null);
            inputStreamOpenInputStream.close();
            Bitmap bitmapRotateImage = rotateImage(bitmapDecodeStream, imageOrientation);
            bitmapDecodeStream.recycle();
            inputStreamOpenInputStream = new ByteArrayInputStream(getJpegBytesFromBitmap(bitmapRotateImage, 1.0d));
        }
        return new PictureAsStream(inputStreamOpenInputStream, strQueryMimeType);
    }

    public PictureData getPhoto(Context context, String str) throws IOException {
        PictureAsStream photoAsStream = getPhotoAsStream(context, str);
        byte[] bytes = readBytes(photoAsStream.getStream());
        photoAsStream.getStream().close();
        return new PictureData(bytes, photoAsStream.getMimeType());
    }

    public void saveImage(final Context context, CordovaInterface cordovaInterface, String str, String str2, final JSONObjectRunnable jSONObjectRunnable) throws URISyntaxException, IOException {
        saveMedia(context, cordovaInterface, str, str2, this.imageMimeToExtension, new FilePathRunnable() { // from class: com.terikon.cordova.photolibrary.PhotoLibraryService.2
            @Override // com.terikon.cordova.photolibrary.PhotoLibraryService.FilePathRunnable
            public void run(String str3) {
                try {
                    PhotoLibraryService.this.queryLibrary(context, "_data = \"" + str3 + "\"", new ChunkResultRunnable() { // from class: com.terikon.cordova.photolibrary.PhotoLibraryService.2.1
                        @Override // com.terikon.cordova.photolibrary.PhotoLibraryService.ChunkResultRunnable
                        public void run(ArrayList<JSONObject> arrayList, int i, boolean z) {
                            jSONObjectRunnable.run(arrayList.size() == 1 ? arrayList.get(0) : null);
                        }
                    });
                } catch (Exception unused) {
                    jSONObjectRunnable.run(null);
                }
            }
        });
    }

    public void saveVideo(Context context, CordovaInterface cordovaInterface, String str, String str2) throws URISyntaxException, IOException {
        saveMedia(context, cordovaInterface, str, str2, this.videMimeToExtension, new FilePathRunnable() { // from class: com.terikon.cordova.photolibrary.PhotoLibraryService.3
            @Override // com.terikon.cordova.photolibrary.PhotoLibraryService.FilePathRunnable
            public void run(String str3) {
            }
        });
    }

    public class PictureData {
        public final byte[] bytes;
        public final String mimeType;

        public PictureData(byte[] bArr, String str) {
            this.bytes = bArr;
            this.mimeType = str;
        }
    }

    public class PictureAsStream {
        private String mimeType;
        private InputStream stream;

        public PictureAsStream(InputStream inputStream, String str) {
            this.stream = inputStream;
            this.mimeType = str;
        }

        public InputStream getStream() {
            return this.stream;
        }

        public String getMimeType() {
            return this.mimeType;
        }
    }

    private ArrayList<JSONObject> queryContentProvider(Context context, Uri uri, JSONObject jSONObject, String str) throws JSONException {
        ArrayList<String> arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        Iterator<String> itKeys = jSONObject.keys();
        while (itKeys.hasNext()) {
            String next = itKeys.next();
            arrayList.add(next);
            arrayList2.add("" + jSONObject.getString(next));
        }
        Cursor cursorQuery = context.getContentResolver().query(uri, (String[]) arrayList2.toArray(new String[jSONObject.length()]), str, null, "datetaken DESC");
        ArrayList<JSONObject> arrayList3 = new ArrayList<>();
        if (cursorQuery.moveToFirst()) {
            do {
                JSONObject jSONObject2 = new JSONObject();
                for (String str2 : arrayList) {
                    int columnIndex = cursorQuery.getColumnIndex(jSONObject.get(str2).toString());
                    if (str2.startsWith("int.")) {
                        jSONObject2.put(str2.substring(4), cursorQuery.getInt(columnIndex));
                        if (str2.substring(4).equals("width") && jSONObject2.getInt("width") == 0) {
                            System.err.println("cursor: " + cursorQuery.getInt(columnIndex));
                        }
                    } else if (str2.startsWith("float.")) {
                        jSONObject2.put(str2.substring(6), cursorQuery.getFloat(columnIndex));
                    } else if (str2.startsWith("date.")) {
                        jSONObject2.put(str2.substring(5), this.dateFormatter.format(new Date(cursorQuery.getLong(columnIndex))));
                    } else {
                        jSONObject2.put(str2, cursorQuery.getString(columnIndex));
                    }
                }
                arrayList3.add(jSONObject2);
            } while (cursorQuery.moveToNext());
        }
        cursorQuery.close();
        return arrayList3;
    }
    public void queryLibrary(Context context, String str, ChunkResultRunnable chunkResultRunnable) throws JSONException {
        queryLibrary(context, 0, AudioStats.AUDIO_AMPLITUDE_NONE, false, str, chunkResultRunnable);
    }

    private void queryLibrary(Context context, int i, double d, boolean z, String str, ChunkResultRunnable chunkResultRunnable) throws JSONException {
        ArrayList<JSONObject> arrayListQueryContentProvider = queryContentProvider(context, MediaStore.Images.Media.EXTERNAL_CONTENT_URI, new JSONObject() { // from class: com.terikon.cordova.photolibrary.PhotoLibraryService.4
            {
                put("int.id", "_id");
                put("fileName", "_display_name");
                put("int.width", "width");
                put("int.height", "height");
                put("albumId", "bucket_id");
                put("date.creationDate", "datetaken");
                put("float.latitude", "latitude");
                put("float.longitude", "longitude");
                put("nativeURL", "_data");
            }
        }, str);
        ArrayList<JSONObject> arrayList = new ArrayList<>();
        long jElapsedRealtime = SystemClock.elapsedRealtime();
        int i2 = 0;
        for (int i3 = 0; i3 < arrayListQueryContentProvider.size(); i3++) {
            JSONObject jSONObject = arrayListQueryContentProvider.get(i3);
            try {
                if (isOrientationSwapsDimensions(getImageOrientation(new File(jSONObject.getString("nativeURL"))))) {
                    int i4 = jSONObject.getInt("width");
                    jSONObject.put("width", jSONObject.getInt("height"));
                    jSONObject.put("height", i4);
                }
            } catch (IOException unused) {
            }
            jSONObject.put(OSOutcomeConstants.OUTCOME_ID, jSONObject.get(OSOutcomeConstants.OUTCOME_ID) + ";" + jSONObject.get("nativeURL"));
            jSONObject.remove("nativeURL");
            String string = jSONObject.getString("albumId");
            jSONObject.remove("albumId");
            if (z) {
                JSONArray jSONArray = new JSONArray();
                jSONArray.put(string);
                jSONObject.put("albumIds", jSONArray);
            }
            arrayList.add(jSONObject);
            if (i3 == arrayListQueryContentProvider.size() - 1) {
                chunkResultRunnable.run(arrayList, i2, true);
            } else {
                if ((i > 0 && arrayList.size() == i) || (d > AudioStats.AUDIO_AMPLITUDE_NONE && SystemClock.elapsedRealtime() - jElapsedRealtime >= 1000.0d * d)) {
                    chunkResultRunnable.run(arrayList, i2, false);
                    i2++;
                    arrayList = new ArrayList<>();
                    jElapsedRealtime = SystemClock.elapsedRealtime();
                }
            }
        }
    }

    private String queryMimeType(Context context, int i) {
        Cursor cursorQuery = context.getContentResolver().query(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, new String[]{"mime_type"}, "_id=?", new String[]{Integer.toString(i)}, null);
        if (cursorQuery != null && cursorQuery.moveToFirst()) {
            String string = cursorQuery.getString(cursorQuery.getColumnIndex("mime_type"));
            cursorQuery.close();
            return string;
        }
        cursorQuery.close();
        return null;
    }

    private static int calculateInSampleSize(BitmapFactory.Options options, int i, int i2) {
        int i3 = options.outHeight;
        int i4 = options.outWidth;
        int i5 = 1;
        if (i3 > i2 || i4 > i) {
            int i6 = i3 / 2;
            int i7 = i4 / 2;
            while (i6 / i5 >= i2 && i7 / i5 >= i) {
                i5 *= 2;
            }
        }
        return i5;
    }

    private static byte[] getJpegBytesFromBitmap(Bitmap bitmap, double d) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, (int) (d * 100.0d), byteArrayOutputStream);
        return byteArrayOutputStream.toByteArray();
    }

    private static void copyStream(InputStream inputStream, OutputStream outputStream) throws IOException {
        byte[] bArr = new byte[1024];
        while (true) {
            int i = inputStream.read(bArr);
            if (i == -1) {
                return;
            } else {
                outputStream.write(bArr, 0, i);
            }
        }
    }

    private static byte[] readBytes(InputStream inputStream) throws IOException {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        byte[] bArr = new byte[1024];
        while (true) {
            int i = inputStream.read(bArr);
            if (i != -1) {
                byteArrayOutputStream.write(bArr, 0, i);
            } else {
                return byteArrayOutputStream.toByteArray();
            }
        }
    }

    private static int getImageId(String str) {
        return Integer.parseInt(str.split(";")[0]);
    }

    private static String getImageURL(String str) {
        return str.split(";")[1];
    }

    private static int getImageOrientation(File file) throws IOException {
        return new ExifInterface(file.getAbsolutePath()).getAttributeInt(androidx.exifinterface.media.ExifInterface.TAG_ORIENTATION, 1);
    }

    private static Bitmap rotateImage(Bitmap bitmap, int i) {
        Matrix matrix = new Matrix();
        switch (i) {
            case 2:
                matrix.setScale(-1.0f, 1.0f);
                break;
            case 3:
                matrix.setRotate(180.0f);
                break;
            case 4:
                matrix.setRotate(180.0f);
                matrix.postScale(-1.0f, 1.0f);
                break;
            case 5:
                matrix.setRotate(90.0f);
                matrix.postScale(-1.0f, 1.0f);
                break;
            case 6:
                matrix.setRotate(90.0f);
                break;
            case 7:
                matrix.setRotate(-90.0f);
                matrix.postScale(-1.0f, 1.0f);
                break;
            case 8:
                matrix.setRotate(-90.0f);
                break;
            default:
                return bitmap;
        }
        return Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(), bitmap.getHeight(), matrix, false);
    }

    private static File makeAlbumInPhotoLibrary(String str) {
        File file = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), str);
        if (!file.exists()) {
            file.mkdirs();
        }
        return file;
    }

    private File getImageFileName(File file, String str) {
        File file2;
        Calendar calendar = Calendar.getInstance();
        String str2 = calendar.get(1) + "-" + calendar.get(2) + "-" + calendar.get(5);
        int i = 1;
        do {
            String str3 = str2 + "-" + i + str;
            i++;
            file2 = new File(file, str3);
        } while (file2.exists());
        return file2;
    }

    private void addFileToMediaLibrary(Context context, File file, final FilePathRunnable filePathRunnable) {
        MediaScannerConnection.scanFile(context, new String[]{file.getAbsolutePath()}, null, new MediaScannerConnection.OnScanCompletedListener() { // from class: com.terikon.cordova.photolibrary.PhotoLibraryService.5
            @Override // android.media.MediaScannerConnection.OnScanCompletedListener
            public void onScanCompleted(String str, Uri uri) {
                filePathRunnable.run(str);
            }
        });
    }

    private void saveMedia(Context context, CordovaInterface cordovaInterface, String str, String str2, Map<String, String> map, FilePathRunnable filePathRunnable) throws URISyntaxException, IOException {
        InputStream inputStreamOpenStream;
        File imageFileName;
        File fileMakeAlbumInPhotoLibrary = makeAlbumInPhotoLibrary(str2);
        if (str.startsWith("data:")) {
            Matcher matcher = this.dataURLPattern.matcher(str);
            if (!matcher.find()) {
                throw new IllegalArgumentException("The dataURL is in incorrect format");
            }
            String strGroup = matcher.group(2);
            byte[] bArrDecode = Base64.decode(str.substring(matcher.end()), 0);
            if (bArrDecode == null) {
                throw new IllegalArgumentException("The dataURL could not be decoded");
            }
            String str3 = map.get(strGroup);
            if (str3 == null) {
                str3 = "." + strGroup;
            }
            imageFileName = getImageFileName(fileMakeAlbumInPhotoLibrary, str3);
            FileOutputStream fileOutputStream = new FileOutputStream(imageFileName);
            fileOutputStream.write(bArrDecode);
            fileOutputStream.flush();
            fileOutputStream.close();
        } else {
            File imageFileName2 = getImageFileName(fileMakeAlbumInPhotoLibrary, str.contains(".") ? str.substring(str.lastIndexOf(".")) : "");
            FileOutputStream fileOutputStream2 = new FileOutputStream(imageFileName2);
            if (str.startsWith("file:///android_asset/")) {
                inputStreamOpenStream = cordovaInterface.getActivity().getApplicationContext().getAssets().open(str.replace("file:///android_asset/", ""));
            } else {
                inputStreamOpenStream = new URL(str).openStream();
            }
            copyStream(inputStreamOpenStream, fileOutputStream2);
            fileOutputStream2.flush();
            fileOutputStream2.close();
            inputStreamOpenStream.close();
            imageFileName = imageFileName2;
        }
        addFileToMediaLibrary(context, imageFileName, filePathRunnable);
    }
}

