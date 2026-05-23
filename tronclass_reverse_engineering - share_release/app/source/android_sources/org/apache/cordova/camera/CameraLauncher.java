package org.apache.cordova.camera;

import android.content.ActivityNotFoundException;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.media.ExifInterface;
import android.media.MediaScannerConnection;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.system.Os;
import android.system.OsConstants;
import android.util.Base64;
import com.sarriaroman.PhotoViewer.PhotoViewer;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.apache.cordova.PermissionHelper;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
public class CameraLauncher extends CordovaPlugin implements MediaScannerConnection.MediaScannerConnectionClient {
    private static final int ALLMEDIA = 2;
    private static final int CAMERA = 1;
    private static final String CROPPED_URI_KEY = "croppedUri";
    private static final int CROP_CAMERA = 100;
    private static final int DATA_URL = 0;
    private static final int FILE_URI = 1;
    private static final String GET_All = "Get All";
    private static final String GET_PICTURE = "Get Picture";
    private static final String GET_VIDEO = "Get Video";
    private static final String HEIC_MIME_TYPE = "image/heic";
    private static final String IMAGE_URI_KEY = "imageUri";
    private static final int JPEG = 0;
    private static final String JPEG_EXTENSION = ".jpg";
    private static final String JPEG_MIME_TYPE = "image/jpeg";
    private static final String JPEG_TYPE = "jpg";
    private static final String LOG_TAG = "CameraLauncher";
    public static final int PERMISSION_DENIED_ERROR = 20;
    private static final int PHOTOLIBRARY = 0;
    private static final int PICTURE = 0;
    private static final int PNG = 1;
    private static final String PNG_EXTENSION = ".png";
    private static final String PNG_MIME_TYPE = "image/png";
    private static final String PNG_TYPE = "png";
    private static final int SAVEDPHOTOALBUM = 2;
    public static final int SAVE_TO_ALBUM_SEC = 1;
    private static final String TAKE_PICTURE_ACTION = "takePicture";
    public static final int TAKE_PIC_SEC = 0;
    private static final String TIME_FORMAT = "yyyyMMdd_HHmmss";
    private static final int VIDEO = 1;
    private boolean allowEdit;
    private String applicationId;
    public CallbackContext callbackContext;
    private MediaScannerConnection conn;
    private boolean correctOrientation;
    private String croppedFilePath;
    private Uri croppedUri;
    private int destType;
    private int encodingType;
    private ExifHelper exifData;
    private Uri imageUri;
    private int mQuality;
    private int mediaType;
    private boolean orientationCorrected;
    private boolean saveToPhotoAlbum;
    private Uri scanMe;
    private int srcType;
    private int targetHeight;
    private int targetWidth;

    private int exifToDegrees(int i) {
        if (i == 6) {
            return 90;
        }
        if (i == 3) {
            return 180;
        }
        return i == 8 ? 270 : 0;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        this.callbackContext = callbackContext;
        this.applicationId = this.f7cordova.getContext().getPackageName();
        this.applicationId = this.preferences.getString("applicationId", this.applicationId);
        if (!str.equals(TAKE_PICTURE_ACTION)) {
            return false;
        }
        this.srcType = 1;
        this.destType = 1;
        this.saveToPhotoAlbum = false;
        this.targetHeight = 0;
        this.targetWidth = 0;
        this.encodingType = 0;
        this.mediaType = 0;
        this.mQuality = 50;
        this.destType = jSONArray.getInt(1);
        this.srcType = jSONArray.getInt(2);
        this.mQuality = jSONArray.getInt(0);
        this.targetWidth = jSONArray.getInt(3);
        this.targetHeight = jSONArray.getInt(4);
        this.encodingType = jSONArray.getInt(5);
        this.mediaType = jSONArray.getInt(6);
        this.allowEdit = jSONArray.getBoolean(7);
        this.correctOrientation = jSONArray.getBoolean(8);
        this.saveToPhotoAlbum = jSONArray.getBoolean(9);
        if (this.targetWidth < 1) {
            this.targetWidth = -1;
        }
        if (this.targetHeight < 1) {
            this.targetHeight = -1;
        }
        if (this.targetHeight == -1 && this.targetWidth == -1 && this.mQuality == 100 && !this.correctOrientation && this.encodingType == 1 && this.srcType == 1) {
            this.encodingType = 0;
        }
        try {
            int i = this.srcType;
            if (i == 1) {
                callTakePicture(this.destType, this.encodingType);
            } else if (i == 0 || i == 2) {
                getImage(i, this.destType);
            }
            PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
            pluginResult.setKeepCallback(true);
            callbackContext.sendPluginResult(pluginResult);
            return true;
        } catch (IllegalArgumentException unused) {
            callbackContext.error("Illegal Argument Exception");
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR));
            return true;
        } catch (IllegalStateException e) {
            callbackContext.error(e.getLocalizedMessage());
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR));
            return true;
        }
    }

    private String getTempDirectoryPath() {
        File cacheDir = this.f7cordova.getActivity().getCacheDir();
        cacheDir.mkdirs();
        return cacheDir.getAbsolutePath();
    }

    public void callTakePicture(int i, int i2) throws IllegalStateException {
        boolean z;
        boolean z2;
        String[] strArr;
        boolean zHasPermission = PermissionHelper.hasPermission(this, "android.permission.CAMERA");
        boolean zHasPermission2 = Build.VERSION.SDK_INT <= 28 ? PermissionHelper.hasPermission(this, PhotoViewer.WRITE) : true;
        try {
            strArr = this.f7cordova.getActivity().getPackageManager().getPackageInfo(this.f7cordova.getActivity().getPackageName(), 4096).requestedPermissions;
        } catch (PackageManager.NameNotFoundException unused) {
        }
        if (strArr != null) {
            z = false;
            z2 = false;
            for (String str : strArr) {
                try {
                    if (str.equals("android.permission.CAMERA")) {
                        z = true;
                    } else if (str.equals(PhotoViewer.WRITE)) {
                        z2 = true;
                    }
                } catch (PackageManager.NameNotFoundException unused2) {
                }
            }
        } else {
            z = false;
            z2 = false;
        }
        ArrayList arrayList = new ArrayList();
        if (z && !zHasPermission) {
            arrayList.add("android.permission.CAMERA");
        }
        if (this.saveToPhotoAlbum && !zHasPermission2) {
            if (!z2) {
                throw new IllegalStateException("WRITE_EXTERNAL_STORAGE permission not declared in AndroidManifest");
            }
            arrayList.add(PhotoViewer.WRITE);
        }
        if (!arrayList.isEmpty()) {
            PermissionHelper.requestPermissions(this, 0, (String[]) arrayList.toArray(new String[0]));
        } else {
            takePicture(i, i2);
        }
    }

    public void takePicture(int i, int i2) {
        Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
        Uri uriForFile = androidx.core.content.FileProvider.getUriForFile(this.f7cordova.getActivity(), this.applicationId + ".cordova.plugin.camera.provider", createCaptureFile(i2));
        this.imageUri = uriForFile;
        intent.putExtra("output", uriForFile);
        intent.addFlags(2);
        if (this.f7cordova != null) {
            if (intent.resolveActivity(this.f7cordova.getActivity().getPackageManager()) != null) {
                this.f7cordova.startActivityForResult(this, intent, i + 33);
            } else {
                LOG.d(LOG_TAG, "Error: You don't have a default camera.  Your device may not be CTS complaint.");
            }
        }
    }

    private File createCaptureFile(int i) {
        return createCaptureFile(i, "");
    }

    private File createCaptureFile(int i, String str) {
        String str2;
        if (str.isEmpty()) {
            str = ".Pic";
        }
        if (i == 0) {
            str2 = str + JPEG_EXTENSION;
        } else if (i == 1) {
            str2 = str + PNG_EXTENSION;
        } else {
            throw new IllegalArgumentException("Invalid Encoding Type: " + i);
        }
        File file = new File(getTempDirectoryPath(), "org.apache.cordova.camera");
        file.mkdir();
        return new File(file, str2);
    }

    /* high-level source view WARN: Removed duplicated region for block: B:28:0x0093  */
    /* high-level source view WARN: Removed duplicated region for block: B:30:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public void getImage(int i, int i2) {
        String str;
        int i3;
        Intent intent = new Intent();
        this.croppedUri = null;
        this.croppedFilePath = null;
        int i4 = this.mediaType;
        if (i4 != 0) {
            if (i4 == 1) {
                intent.setType("video/*");
                intent.setAction("android.intent.action.GET_CONTENT");
                intent.addCategory("android.intent.category.OPENABLE");
                str = GET_VIDEO;
            } else if (i4 == 2) {
                intent.setType("*/*");
                intent.setAction("android.intent.action.GET_CONTENT");
                intent.addCategory("android.intent.category.OPENABLE");
                str = GET_All;
            }
            if (this.f7cordova == null) {
                this.f7cordova.startActivityForResult(this, Intent.createChooser(intent, new String(str)), ((i + 1) * 16) + i2 + 1);
                return;
            }
            return;
        }
        intent.setType("image/*");
        if (this.allowEdit) {
            intent.setAction("android.intent.action.PICK");
            intent.putExtra("crop", "true");
            int i5 = this.targetWidth;
            if (i5 > 0) {
                intent.putExtra("outputX", i5);
            }
            int i6 = this.targetHeight;
            if (i6 > 0) {
                intent.putExtra("outputY", i6);
            }
            int i7 = this.targetHeight;
            if (i7 > 0 && (i3 = this.targetWidth) > 0 && i3 == i7) {
                intent.putExtra("aspectX", 1);
                intent.putExtra("aspectY", 1);
            }
            File fileCreateCaptureFile = createCaptureFile(0);
            this.croppedFilePath = fileCreateCaptureFile.getAbsolutePath();
            Uri uriFromFile = Uri.fromFile(fileCreateCaptureFile);
            this.croppedUri = uriFromFile;
            intent.putExtra("output", uriFromFile);
        } else {
            intent.setAction("android.intent.action.GET_CONTENT");
            intent.addCategory("android.intent.category.OPENABLE");
        }
        str = GET_PICTURE;
        if (this.f7cordova == null) {
        }
    }

    private void performCrop(Uri uri, int i, Intent intent) throws Exception {
        int i2;
        try {
            Intent intent2 = new Intent("com.android.camera.action.CROP");
            intent2.setDataAndType(uri, "image/*");
            intent2.putExtra("crop", "true");
            int i3 = this.targetWidth;
            if (i3 > 0) {
                intent2.putExtra("outputX", i3);
            }
            int i4 = this.targetHeight;
            if (i4 > 0) {
                intent2.putExtra("outputY", i4);
            }
            int i5 = this.targetHeight;
            if (i5 > 0 && (i2 = this.targetWidth) > 0 && i2 == i5) {
                intent2.putExtra("aspectX", 1);
                intent2.putExtra("aspectY", 1);
            }
            String absolutePath = createCaptureFile(this.encodingType, System.currentTimeMillis() + "").getAbsolutePath();
            this.croppedFilePath = absolutePath;
            this.croppedUri = Uri.parse(absolutePath);
            intent2.addFlags(1);
            intent2.addFlags(2);
            intent2.putExtra("output", this.croppedUri);
            if (this.f7cordova != null) {
                this.f7cordova.startActivityForResult(this, intent2, i + 100);
            }
        } catch (ActivityNotFoundException unused) {
            LOG.e(LOG_TAG, "Crop operation not supported on this device");
            try {
                processResultFromCamera(i, intent);
            } catch (IOException e) {
                e.printStackTrace();
                LOG.e(LOG_TAG, "Unable to write to file");
            }
        }
    }

    private void processResultFromCamera(int i, Intent intent) throws Exception {
        InputStream inputStreamOpenInputStream;
        String mimeType;
        int orientation;
        Uri uriFromFile;
        Uri uri;
        ExifHelper exifHelper = new ExifHelper();
        if (this.allowEdit && this.croppedUri != null) {
            inputStreamOpenInputStream = new FileInputStream(this.croppedFilePath);
            mimeType = FileHelper.getMimeTypeForExtension(this.croppedFilePath);
        } else {
            inputStreamOpenInputStream = this.f7cordova.getActivity().getContentResolver().openInputStream(this.imageUri);
            mimeType = FileHelper.getMimeType(this.imageUri.toString(), this.f7cordova);
        }
        if (inputStreamOpenInputStream == null) {
            throw new IOException("Unable to open result source.");
        }
        byte[] data = readData(inputStreamOpenInputStream);
        try {
            if (this.encodingType == 0) {
                try {
                    exifHelper.createInFile(new ByteArrayInputStream(data));
                    exifHelper.readExifData();
                    orientation = exifHelper.getOrientation();
                } catch (IOException e) {
                    e.printStackTrace();
                    orientation = 0;
                }
            } else {
                orientation = 0;
            }
            Bitmap scaledAndRotatedBitmap = null;
            if (this.saveToPhotoAlbum) {
                GalleryPathVO picturesPath = getPicturesPath();
                uriFromFile = Uri.fromFile(new File(picturesPath.getGalleryPath()));
                if (this.allowEdit && (uri = this.croppedUri) != null) {
                    writeUncompressedImage(uri, uriFromFile);
                } else if (Build.VERSION.SDK_INT <= 28) {
                    writeTakenPictureToGalleryLowerThanAndroidQ(uriFromFile);
                } else {
                    writeTakenPictureToGalleryStartingFromAndroidQ(picturesPath);
                }
            } else {
                uriFromFile = null;
            }
            if (i == 0) {
                Bitmap scaledAndRotatedBitmap2 = getScaledAndRotatedBitmap(data, mimeType);
                if (scaledAndRotatedBitmap2 == null) {
                    scaledAndRotatedBitmap2 = (Bitmap) intent.getExtras().get("data");
                }
                scaledAndRotatedBitmap = scaledAndRotatedBitmap2;
                if (scaledAndRotatedBitmap == null) {
                    LOG.d(LOG_TAG, "I either have an unreadable imageUri or null bitmap");
                    failPicture("Unable to create bitmap!");
                    return;
                }
                processPicture(scaledAndRotatedBitmap, this.encodingType);
            } else if (i == 1) {
                if (this.targetHeight == -1 && this.targetWidth == -1 && this.mQuality == 100 && !this.correctOrientation) {
                    if (this.saveToPhotoAlbum) {
                        this.callbackContext.success(uriFromFile.toString());
                    } else {
                        Uri uriFromFile2 = Uri.fromFile(createCaptureFile(this.encodingType, System.currentTimeMillis() + ""));
                        if (this.allowEdit && this.croppedUri != null) {
                            writeUncompressedImage(Uri.parse(this.croppedFilePath), uriFromFile2);
                        } else {
                            writeUncompressedImage(this.imageUri, uriFromFile2);
                        }
                        this.callbackContext.success(uriFromFile2.toString());
                    }
                } else {
                    Uri uriFromFile3 = Uri.fromFile(createCaptureFile(this.encodingType, System.currentTimeMillis() + ""));
                    scaledAndRotatedBitmap = getScaledAndRotatedBitmap(data, mimeType);
                    if (scaledAndRotatedBitmap == null) {
                        LOG.d(LOG_TAG, "I either have an unreadable imageUri or null bitmap");
                        failPicture("Unable to create bitmap!");
                        return;
                    }
                    OutputStream outputStreamOpenOutputStream = this.f7cordova.getActivity().getContentResolver().openOutputStream(uriFromFile3);
                    scaledAndRotatedBitmap.compress(getCompressFormatForEncodingType(this.encodingType), this.mQuality, outputStreamOpenOutputStream);
                    outputStreamOpenOutputStream.close();
                    if (this.encodingType == 0) {
                        String path = uriFromFile3.getPath();
                        if (orientation != 1) {
                            exifHelper.resetOrientation();
                        }
                        exifHelper.createOutFile(path);
                        exifHelper.writeExifData();
                    }
                    this.callbackContext.success(uriFromFile3.toString());
                }
            } else {
                throw new IllegalStateException();
            }
            cleanup(this.imageUri, uriFromFile, scaledAndRotatedBitmap);
            inputStreamOpenInputStream.close();
        } catch (Exception e2) {
            inputStreamOpenInputStream.close();
            throw e2;
        }
    }

    private void writeTakenPictureToGalleryLowerThanAndroidQ(Uri uri) throws IOException {
        writeUncompressedImage(this.imageUri, uri);
        refreshGallery(uri);
    }

    private void writeTakenPictureToGalleryStartingFromAndroidQ(GalleryPathVO galleryPathVO) throws IOException {
        ContentResolver contentResolver = this.f7cordova.getActivity().getContentResolver();
        ContentValues contentValues = new ContentValues();
        contentValues.put("_display_name", galleryPathVO.getGalleryFileName());
        contentValues.put("mime_type", getMimetypeForEncodingType());
        writeUncompressedImage(FileHelper.getInputStreamFromUriString(this.imageUri.toString(), this.f7cordova), contentResolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues));
    }

    private Bitmap.CompressFormat getCompressFormatForEncodingType(int i) {
        return i == 0 ? Bitmap.CompressFormat.JPEG : Bitmap.CompressFormat.PNG;
    }

    private GalleryPathVO getPicturesPath() {
        String str = "IMG_" + new SimpleDateFormat(TIME_FORMAT).format(new Date()) + getExtensionForEncodingType();
        File externalStoragePublicDirectory = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES);
        externalStoragePublicDirectory.mkdirs();
        return new GalleryPathVO(externalStoragePublicDirectory.getAbsolutePath(), str);
    }

    private void refreshGallery(Uri uri) {
        Intent intent = new Intent("android.intent.action.MEDIA_SCANNER_SCAN_FILE");
        intent.setData(uri);
        this.f7cordova.getActivity().sendBroadcast(intent);
    }

    private String getMimetypeForEncodingType() {
        int i = this.encodingType;
        if (i == 1) {
            return PNG_MIME_TYPE;
        }
        if (i == 0) {
            return JPEG_MIME_TYPE;
        }
        return "";
    }

    private String outputModifiedBitmap(Bitmap bitmap, Uri uri, String str) throws IOException {
        String str2 = getTempDirectoryPath() + "/" + calculateModifiedBitmapOutputFileName(str, FileHelper.getRealPath(uri, this.f7cordova));
        FileOutputStream fileOutputStream = new FileOutputStream(str2);
        bitmap.compress(getCompressFormatForEncodingType(this.encodingType), this.mQuality, fileOutputStream);
        fileOutputStream.close();
        ExifHelper exifHelper = this.exifData;
        if (exifHelper != null && this.encodingType == 0) {
            try {
                if (this.correctOrientation && this.orientationCorrected) {
                    exifHelper.resetOrientation();
                }
                this.exifData.createOutFile(str2);
                this.exifData.writeExifData();
                this.exifData = null;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return str2;
    }

    private String calculateModifiedBitmapOutputFileName(String str, String str2) {
        if (str2 == null) {
            return "modified" + getExtensionForEncodingType();
        }
        String strSubstring = str2.substring(str2.lastIndexOf(47) + 1);
        return getMimetypeForEncodingType().equals(str) ? strSubstring : strSubstring.substring(strSubstring.lastIndexOf(".") + 1) + getExtensionForEncodingType();
    }

    private String getExtensionForEncodingType() {
        return this.encodingType == 0 ? JPEG_EXTENSION : PNG_EXTENSION;
    }
    /* high-level source view WARN: Removed duplicated region for block: B:64:0x00fc A[Catch: Exception -> 0x0186, TryCatch #2 {Exception -> 0x0186, blocks: (B:14:0x0035, B:16:0x003e, B:19:0x0046, B:22:0x0057, B:25:0x005d, B:27:0x0061, B:29:0x006b, B:67:0x0105, B:70:0x010e, B:89:0x0176, B:90:0x0179, B:92:0x0182, B:73:0x0117, B:75:0x011b, B:86:0x0157, B:77:0x011f, B:79:0x0123, B:81:0x0127, B:87:0x016f, B:31:0x0075, B:37:0x0083, B:40:0x008c, B:64:0x00fc, B:65:0x0100, B:42:0x0094, B:44:0x0098, B:60:0x00d8, B:46:0x009c, B:48:0x00a0, B:50:0x00a4, B:61:0x00f0, B:35:0x007d, B:91:0x017d, B:83:0x0131), top: B:108:0x0035, inners: #1, #5 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public void processResultFromGallery(int i, Intent intent) throws IOException {
        Bitmap scaledAndRotatedBitmap;
        String str;
        Uri data = intent.getData();
        if (data == null && (data = this.croppedUri) == null) {
            failPicture("null data from photo library");
            return;
        }
        String string = data.toString();
        String mimeType = FileHelper.getMimeType(string, this.f7cordova);
        try {
            InputStream inputStreamOpenInputStream = this.f7cordova.getActivity().getContentResolver().openInputStream(data);
            if (inputStreamOpenInputStream == null) {
                failPicture("Unable to open gallery input stream");
                return;
            }
            try {
                byte[] data2 = readData(inputStreamOpenInputStream);
                if (this.mediaType == 1 || !isImageMimeTypeProcessable(mimeType)) {
                    this.callbackContext.success(string);
                } else {
                    if (this.targetHeight == -1 && this.targetWidth == -1 && i == 1 && !this.correctOrientation && getMimetypeForEncodingType().equalsIgnoreCase(mimeType)) {
                        this.callbackContext.success(string);
                        str = "?";
                        scaledAndRotatedBitmap = null;
                    } else {
                        try {
                            scaledAndRotatedBitmap = getScaledAndRotatedBitmap(data2, mimeType);
                        } catch (IOException e) {
                            e.printStackTrace();
                            scaledAndRotatedBitmap = null;
                        }
                        if (scaledAndRotatedBitmap == null) {
                            LOG.d(LOG_TAG, "I either have an unreadable uri or null bitmap");
                            failPicture("Unable to create bitmap!");
                            return;
                        }
                        if (i == 0) {
                            processPicture(scaledAndRotatedBitmap, this.encodingType);
                        } else {
                            if (i == 1) {
                                if ((this.targetHeight > 0 && this.targetWidth > 0) || ((this.correctOrientation && this.orientationCorrected) || !mimeType.equalsIgnoreCase(getMimetypeForEncodingType()))) {
                                    try {
                                        str = "?";
                                    } catch (Exception e2) {
                                        e = e2;
                                        str = "?";
                                    }
                                    try {
                                        this.callbackContext.success("file://" + outputModifiedBitmap(scaledAndRotatedBitmap, data, mimeType) + "?" + System.currentTimeMillis());
                                    } catch (Exception e3) {
                                        e = e3;
                                        e.printStackTrace();
                                        failPicture("Error retrieving image: " + e.getLocalizedMessage());
                                    }
                                } else {
                                    str = "?";
                                    this.callbackContext.success(string);
                                }
                            }
                            if (scaledAndRotatedBitmap != null) {
                                scaledAndRotatedBitmap.recycle();
                                scaledAndRotatedBitmap = null;
                            }
                            System.gc();
                        }
                        str = "?";
                        if (scaledAndRotatedBitmap != null) {
                        }
                        System.gc();
                    }
                    if (scaledAndRotatedBitmap == null) {
                        LOG.d(LOG_TAG, "I either have an unreadable uri or null bitmap");
                        failPicture("Unable to create bitmap!");
                        return;
                    }
                    if (i == 0) {
                        processPicture(scaledAndRotatedBitmap, this.encodingType);
                    } else if (i == 1) {
                        if ((this.targetHeight > 0 && this.targetWidth > 0) || ((this.correctOrientation && this.orientationCorrected) || !mimeType.equalsIgnoreCase(getMimetypeForEncodingType()))) {
                            try {
                                this.callbackContext.success("file://" + outputModifiedBitmap(scaledAndRotatedBitmap, data, mimeType) + str + System.currentTimeMillis());
                            } catch (Exception e4) {
                                e4.printStackTrace();
                                failPicture("Error retrieving image: " + e4.getLocalizedMessage());
                            }
                        } else {
                            this.callbackContext.success(string);
                        }
                    }
                    if (scaledAndRotatedBitmap != null) {
                        scaledAndRotatedBitmap.recycle();
                    }
                    System.gc();
                }
                inputStreamOpenInputStream.close();
            } catch (Exception e5) {
                try {
                    inputStreamOpenInputStream.close();
                } catch (IOException e6) {
                    e6.printStackTrace();
                }
                failPicture(e5.getLocalizedMessage());
            }
        } catch (FileNotFoundException unused) {
            failPicture("Unable to open gallery input stream");
        }
    }

    private boolean isImageMimeTypeProcessable(String str) {
        return JPEG_MIME_TYPE.equalsIgnoreCase(str) || PNG_MIME_TYPE.equalsIgnoreCase(str) || HEIC_MIME_TYPE.equalsIgnoreCase(str);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onActivityResult(int i, int i2, final Intent intent) throws Exception {
        int i3 = (i / 16) - 1;
        final int i4 = (i % 16) - 1;
        if (i >= 100) {
            if (i2 != -1) {
                if (i2 == 0) {
                    failPicture("No Image Selected");
                    return;
                } else {
                    failPicture("Did not complete!");
                    return;
                }
            }
            try {
                processResultFromCamera(i - 100, intent);
                return;
            } catch (IOException e) {
                e.printStackTrace();
                LOG.e(LOG_TAG, "Unable to write to file");
                return;
            }
        }
        if (i3 != 1) {
            if (i3 == 0 || i3 == 2) {
                if (i2 == -1 && intent != null) {
                    this.f7cordova.getThreadPool().execute(new Runnable() { // from class: org.apache.cordova.camera.CameraLauncher.1
                        @Override // java.lang.Runnable
                        public void run() throws IOException {
                            CameraLauncher.this.processResultFromGallery(i4, intent);
                        }
                    });
                    return;
                } else if (i2 == 0) {
                    failPicture("No Image Selected");
                    return;
                } else {
                    failPicture("Selection did not complete!");
                    return;
                }
            }
            return;
        }
        if (i2 != -1) {
            if (i2 == 0) {
                failPicture("No Image Selected");
                return;
            } else {
                failPicture("Did not complete!");
                return;
            }
        }
        try {
            if (this.allowEdit) {
                performCrop(androidx.core.content.FileProvider.getUriForFile(this.f7cordova.getActivity(), this.applicationId + ".cordova.plugin.camera.provider", createCaptureFile(this.encodingType)), i4, intent);
            } else {
                processResultFromCamera(i4, intent);
            }
        } catch (IOException e2) {
            e2.printStackTrace();
            failPicture("Error capturing image: " + e2.getLocalizedMessage());
        }
    }

    private void writeUncompressedImage(InputStream inputStream, Uri uri) throws IOException {
        OutputStream outputStreamOpenOutputStream = null;
        try {
            outputStreamOpenOutputStream = this.f7cordova.getActivity().getContentResolver().openOutputStream(uri);
            byte[] bArr = new byte[4096];
            while (true) {
                int i = inputStream.read(bArr);
                if (i == -1) {
                    break;
                } else {
                    outputStreamOpenOutputStream.write(bArr, 0, i);
                }
            }
            outputStreamOpenOutputStream.flush();
            if (outputStreamOpenOutputStream != null) {
                try {
                    outputStreamOpenOutputStream.close();
                } catch (IOException unused) {
                    LOG.d(LOG_TAG, "Exception while closing output stream.");
                }
            }
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException unused2) {
                    LOG.d(LOG_TAG, "Exception while closing file input stream.");
                }
            }
        } finally {
        }
    }

    private void writeUncompressedImage(Uri uri, Uri uri2) throws IOException {
        writeUncompressedImage(FileHelper.getInputStreamFromUriString(uri.toString(), this.f7cordova), uri2);
    }

    /* high-level source view WARN: Removed duplicated region for block: B:24:0x007c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private Bitmap getScaledAndRotatedBitmap(byte[] bArr, String str) throws IOException {
        int iExifToDegrees;
        int i;
        int i2;
        boolean z;
        if (this.targetWidth <= 0 && this.targetHeight <= 0 && !this.correctOrientation) {
            try {
                return BitmapFactory.decodeStream(new ByteArrayInputStream(bArr));
            } catch (Exception e) {
                this.callbackContext.error(e.getLocalizedMessage());
                return null;
            } catch (OutOfMemoryError e2) {
                this.callbackContext.error(e2.getLocalizedMessage());
                return null;
            }
        }
        try {
        } catch (Exception e3) {
            try {
                LOG.w(LOG_TAG, "Unable to read Exif data: " + e3.toString());
            } catch (Exception e4) {
                LOG.e(LOG_TAG, "Exception while getting input stream: " + e4.toString());
                return null;
            }
        }
        if (JPEG_MIME_TYPE.equalsIgnoreCase(str)) {
            ExifHelper exifHelper = new ExifHelper();
            this.exifData = exifHelper;
            exifHelper.createInFile(new ByteArrayInputStream(bArr));
            this.exifData.readExifData();
            iExifToDegrees = this.correctOrientation ? exifToDegrees(new ExifInterface(new ByteArrayInputStream(bArr)).getAttributeInt(androidx.exifinterface.media.ExifInterface.TAG_ORIENTATION, 0)) : 0;
        }
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeStream(new ByteArrayInputStream(bArr), null, options);
        if (options.outWidth == 0 || options.outHeight == 0) {
            return null;
        }
        if (this.targetWidth <= 0 && this.targetHeight <= 0) {
            this.targetWidth = options.outWidth;
            this.targetHeight = options.outHeight;
        }
        if (iExifToDegrees == 90 || iExifToDegrees == 270) {
            i = options.outHeight;
            i2 = options.outWidth;
            z = true;
        } else {
            i = options.outWidth;
            i2 = options.outHeight;
            z = false;
        }
        int[] iArrCalculateAspectRatio = calculateAspectRatio(i, i2);
        options.inJustDecodeBounds = false;
        options.inSampleSize = calculateSampleSize(i, i2, iArrCalculateAspectRatio[0], iArrCalculateAspectRatio[1]);
        Bitmap bitmapDecodeStream = BitmapFactory.decodeStream(new ByteArrayInputStream(bArr), null, options);
        if (bitmapDecodeStream == null) {
            return null;
        }
        Bitmap bitmapCreateScaledBitmap = Bitmap.createScaledBitmap(bitmapDecodeStream, !z ? iArrCalculateAspectRatio[0] : iArrCalculateAspectRatio[1], !z ? iArrCalculateAspectRatio[1] : iArrCalculateAspectRatio[0], true);
        if (bitmapCreateScaledBitmap != bitmapDecodeStream) {
            bitmapDecodeStream.recycle();
        }
        if (!this.correctOrientation || iExifToDegrees == 0) {
            return bitmapCreateScaledBitmap;
        }
        Matrix matrix = new Matrix();
        matrix.setRotate(iExifToDegrees);
        try {
            bitmapCreateScaledBitmap = Bitmap.createBitmap(bitmapCreateScaledBitmap, 0, 0, bitmapCreateScaledBitmap.getWidth(), bitmapCreateScaledBitmap.getHeight(), matrix, true);
            this.orientationCorrected = true;
            return bitmapCreateScaledBitmap;
        } catch (OutOfMemoryError unused) {
            this.orientationCorrected = false;
            return bitmapCreateScaledBitmap;
        }
    }

    public int[] calculateAspectRatio(int i, int i2) {
        int i3 = this.targetWidth;
        int i4 = this.targetHeight;
        if (i3 > 0 || i4 > 0) {
            if (i3 <= 0 || i4 > 0) {
                if (i3 > 0 || i4 <= 0) {
                    double d = ((double) i3) / ((double) i4);
                    double d2 = ((double) i) / ((double) i2);
                    if (d2 > d) {
                        i2 = (i2 * i3) / i;
                    } else {
                        i = d2 < d ? (i * i4) / i2 : i3;
                    }
                } else {
                    i = (int) ((((double) i4) / ((double) i2)) * ((double) i));
                }
                i2 = i4;
            } else {
                i2 = (int) ((((double) i3) / ((double) i)) * ((double) i2));
            }
            i = i3;
        }
        return new int[]{i, i2};
    }

    public static int calculateSampleSize(int i, int i2, int i3, int i4) {
        if (i / i2 > i3 / i4) {
            return i / i3;
        }
        return i2 / i4;
    }

    private void cleanup(Uri uri, Uri uri2, Bitmap bitmap) {
        if (bitmap != null) {
            bitmap.recycle();
        }
        new File(FileHelper.stripFileProtocol(uri.toString())).delete();
        if (this.saveToPhotoAlbum && uri2 != null) {
            scanForGallery(uri2);
        }
        System.gc();
    }

    private Uri whichContentStore() {
        if (Environment.getExternalStorageState().equals("mounted")) {
            return MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
        }
        return MediaStore.Images.Media.INTERNAL_CONTENT_URI;
    }

    public void processPicture(Bitmap bitmap, int i) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            if (bitmap.compress(getCompressFormatForEncodingType(i), this.mQuality, byteArrayOutputStream)) {
                StringBuilder sbAppend = new StringBuilder("data:").append(i == 1 ? PNG_MIME_TYPE : JPEG_MIME_TYPE).append(";base64,");
                sbAppend.append(new String(Base64.encode(byteArrayOutputStream.toByteArray(), 2)));
                this.callbackContext.success(sbAppend.toString());
            }
        } catch (Exception e) {
            failPicture("Error compressing image: " + e.getLocalizedMessage());
        }
    }

    public void failPicture(String str) {
        this.callbackContext.error(str);
    }

    private void scanForGallery(Uri uri) {
        this.scanMe = uri;
        MediaScannerConnection mediaScannerConnection = this.conn;
        if (mediaScannerConnection != null) {
            mediaScannerConnection.disconnect();
        }
        MediaScannerConnection mediaScannerConnection2 = new MediaScannerConnection(this.f7cordova.getActivity().getApplicationContext(), this);
        this.conn = mediaScannerConnection2;
        mediaScannerConnection2.connect();
    }

    @Override // android.media.MediaScannerConnection.MediaScannerConnectionClient
    public void onMediaScannerConnected() {
        try {
            this.conn.scanFile(this.scanMe.toString(), "image/*");
        } catch (IllegalStateException unused) {
            LOG.e(LOG_TAG, "Can't scan file in MediaScanner after taking picture");
        }
    }

    @Override // android.media.MediaScannerConnection.OnScanCompletedListener
    public void onScanCompleted(String str, Uri uri) {
        this.conn.disconnect();
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) {
        for (int i2 : iArr) {
            if (i2 == -1) {
                this.callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, 20));
                return;
            }
        }
        if (i == 0) {
            takePicture(this.destType, this.encodingType);
        } else {
            if (i != 1) {
                return;
            }
            getImage(this.srcType, this.destType);
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public Bundle onSaveInstanceState() {
        Bundle bundle = new Bundle();
        bundle.putInt("destType", this.destType);
        bundle.putInt("srcType", this.srcType);
        bundle.putInt("mQuality", this.mQuality);
        bundle.putInt("targetWidth", this.targetWidth);
        bundle.putInt("targetHeight", this.targetHeight);
        bundle.putInt("encodingType", this.encodingType);
        bundle.putInt("mediaType", this.mediaType);
        bundle.putBoolean("allowEdit", this.allowEdit);
        bundle.putBoolean("correctOrientation", this.correctOrientation);
        bundle.putBoolean("saveToPhotoAlbum", this.saveToPhotoAlbum);
        if (this.croppedUri != null) {
            bundle.putString(CROPPED_URI_KEY, this.croppedFilePath);
        }
        Uri uri = this.imageUri;
        if (uri != null) {
            bundle.putString(IMAGE_URI_KEY, uri.toString());
        }
        return bundle;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRestoreStateForActivityResult(Bundle bundle, CallbackContext callbackContext) {
        this.destType = bundle.getInt("destType");
        this.srcType = bundle.getInt("srcType");
        this.mQuality = bundle.getInt("mQuality");
        this.targetWidth = bundle.getInt("targetWidth");
        this.targetHeight = bundle.getInt("targetHeight");
        this.encodingType = bundle.getInt("encodingType");
        this.mediaType = bundle.getInt("mediaType");
        this.allowEdit = bundle.getBoolean("allowEdit");
        this.correctOrientation = bundle.getBoolean("correctOrientation");
        this.saveToPhotoAlbum = bundle.getBoolean("saveToPhotoAlbum");
        if (bundle.containsKey(CROPPED_URI_KEY)) {
            this.croppedUri = Uri.parse(bundle.getString(CROPPED_URI_KEY));
        }
        if (bundle.containsKey(IMAGE_URI_KEY)) {
            this.imageUri = Uri.parse(bundle.getString(IMAGE_URI_KEY));
        }
        this.callbackContext = callbackContext;
    }

    private int getPageSize() {
        long jSysconf = Os.sysconf(OsConstants._SC_PAGE_SIZE);
        if (jSysconf > 2147483647L) {
            jSysconf = 2147483647L;
        }
        return (int) jSysconf;
    }

    private byte[] readData(InputStream inputStream) throws IOException {
        if (inputStream == null) {
            return null;
        }
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        byte[] bArr = new byte[getPageSize()];
        while (true) {
            int i = inputStream.read(bArr);
            if (i != -1) {
                byteArrayOutputStream.write(bArr, 0, i);
            } else {
                return byteArrayOutputStream.toByteArray();
            }
        }
    }
}

