package com.getcapacitor.plugin;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Base64;
import androidx.core.content.FileProvider;
import com.getcapacitor.Dialogs;
import com.getcapacitor.FileUtils;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.plugin.camera.CameraResultType;
import com.getcapacitor.plugin.camera.CameraSettings;
import com.getcapacitor.plugin.camera.CameraSource;
import com.getcapacitor.plugin.camera.CameraUtils;
import com.getcapacitor.plugin.camera.ExifWrapper;
import com.getcapacitor.plugin.camera.ImageUtils;
import com.onesignal.OneSignalDbContract;
import com.sarriaroman.PhotoViewer.PhotoViewer;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
@NativePlugin(requestCodes = {9002, 9003, 9005})
public class Camera extends Plugin {
    private static final String IMAGE_EDIT_ERROR = "Unable to edit image";
    private static final String IMAGE_FILE_SAVE_ERROR = "Unable to create photo on disk";
    private static final String IMAGE_GALLERY_SAVE_ERROR = "Unable to save the image in the gallery";
    private static final String IMAGE_PROCESS_NO_FILE_ERROR = "Unable to process image, file not found on disk";
    private static final String INVALID_RESULT_TYPE_ERROR = "Invalid resultType option";
    private static final String NO_CAMERA_ACTIVITY_ERROR = "Unable to resolve camera activity";
    private static final String NO_CAMERA_ERROR = "Device doesn't have a camera available";
    private static final String PERMISSION_DENIED_ERROR = "Unable to access camera, user denied permission request";
    static final int REQUEST_IMAGE_CAPTURE = 9002;
    static final int REQUEST_IMAGE_EDIT = 9005;
    static final int REQUEST_IMAGE_PICK = 9003;
    private static final String UNABLE_TO_PROCESS_IMAGE = "Unable to process image";
    private String imageEditedFileSavePath;
    private String imageFileSavePath;
    private Uri imageFileUri;
    private boolean isEdited = false;
    private CameraSettings settings = new CameraSettings();

    @PluginMethod
    public void getPhoto(PluginCall pluginCall) {
        this.isEdited = false;
        saveCall(pluginCall);
        this.settings = getSettings(pluginCall);
        doShow(pluginCall);
    }
    static /* synthetic */ class AnonymousClass3 {
        static final /* synthetic */ int[] $SwitchMap$com$getcapacitor$plugin$camera$CameraSource;

        static {
            int[] iArr = new int[CameraSource.values().length];
            $SwitchMap$com$getcapacitor$plugin$camera$CameraSource = iArr;
            try {
                iArr[CameraSource.PROMPT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$com$getcapacitor$plugin$camera$CameraSource[CameraSource.CAMERA.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$com$getcapacitor$plugin$camera$CameraSource[CameraSource.PHOTOS.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    private void doShow(PluginCall pluginCall) {
        int i = AnonymousClass3.$SwitchMap$com$getcapacitor$plugin$camera$CameraSource[this.settings.getSource().ordinal()];
        if (i == 1) {
            showPrompt(pluginCall);
            return;
        }
        if (i == 2) {
            showCamera(pluginCall);
        } else if (i == 3) {
            showPhotos(pluginCall);
        } else {
            showPrompt(pluginCall);
        }
    }

    private void showPrompt(final PluginCall pluginCall) {
        String string = pluginCall.getString("promptLabelPhoto", "From Photos");
        String string2 = pluginCall.getString("promptLabelPicture", "Take Picture");
        JSObject jSObject = new JSObject();
        jSObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE, string);
        JSObject jSObject2 = new JSObject();
        jSObject2.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE, string2);
        Dialogs.actions(getActivity(), new Object[]{jSObject, jSObject2}, new Dialogs.OnSelectListener() { // from class: com.getcapacitor.plugin.Camera.1
            @Override // com.getcapacitor.Dialogs.OnSelectListener
            public void onSelect(int i) {
                if (i == 0) {
                    Camera.this.settings.setSource(CameraSource.PHOTOS);
                    Camera.this.openPhotos(pluginCall);
                } else if (i == 1) {
                    Camera.this.settings.setSource(CameraSource.CAMERA);
                    Camera.this.openCamera(pluginCall);
                }
            }
        }, new Dialogs.OnCancelListener() { // from class: com.getcapacitor.plugin.Camera.2
            @Override // com.getcapacitor.Dialogs.OnCancelListener
            public void onCancel() {
                pluginCall.error("User cancelled photos app");
            }
        });
    }

    private void showCamera(PluginCall pluginCall) {
        if (!getActivity().getPackageManager().hasSystemFeature("android.hardware.camera.any")) {
            pluginCall.error(NO_CAMERA_ERROR);
        } else {
            openCamera(pluginCall);
        }
    }

    private void showPhotos(PluginCall pluginCall) {
        openPhotos(pluginCall);
    }

    private boolean checkCameraPermissions(PluginCall pluginCall) {
        if (this.settings.isSaveToGallery() && (!hasPermission("android.permission.CAMERA") || !hasPermission(PhotoViewer.WRITE))) {
            pluginRequestPermissions(new String[]{"android.permission.CAMERA", PhotoViewer.WRITE, PhotoViewer.READ}, 9002);
            return false;
        }
        if (hasPermission("android.permission.CAMERA")) {
            return true;
        }
        pluginRequestPermission("android.permission.CAMERA", 9002);
        return false;
    }

    private boolean checkPhotosPermissions(PluginCall pluginCall) {
        if (hasPermission(PhotoViewer.READ)) {
            return true;
        }
        pluginRequestPermission(PhotoViewer.READ, 9002);
        return false;
    }

    private CameraSettings getSettings(PluginCall pluginCall) {
        CameraSettings cameraSettings = new CameraSettings();
        cameraSettings.setResultType(getResultType(pluginCall.getString("resultType")));
        cameraSettings.setSaveToGallery(pluginCall.getBoolean("saveToGallery", false).booleanValue());
        cameraSettings.setAllowEditing(pluginCall.getBoolean("allowEditing", false).booleanValue());
        cameraSettings.setQuality(pluginCall.getInt("quality", 90).intValue());
        cameraSettings.setWidth(pluginCall.getInt("width", 0).intValue());
        cameraSettings.setHeight(pluginCall.getInt("height", 0).intValue());
        cameraSettings.setShouldResize(cameraSettings.getWidth() > 0 || cameraSettings.getHeight() > 0);
        cameraSettings.setShouldCorrectOrientation(pluginCall.getBoolean("correctOrientation", true).booleanValue());
        cameraSettings.setPreserveAspectRatio(pluginCall.getBoolean("preserveAspectRatio", false).booleanValue());
        try {
            cameraSettings.setSource(CameraSource.valueOf(pluginCall.getString("source", CameraSource.PROMPT.getSource())));
        } catch (IllegalArgumentException unused) {
            cameraSettings.setSource(CameraSource.PROMPT);
        }
        return cameraSettings;
    }

    private CameraResultType getResultType(String str) {
        if (str == null) {
            return null;
        }
        try {
            return CameraResultType.valueOf(str.toUpperCase());
        } catch (IllegalArgumentException unused) {
            Logger.debug(getLogTag(), "Invalid result type \"" + str + "\", defaulting to base64");
            return CameraResultType.BASE64;
        }
    }

    public void openCamera(PluginCall pluginCall) {
        if (checkCameraPermissions(pluginCall)) {
            Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
            if (intent.resolveActivity(getActivity().getPackageManager()) != null) {
                try {
                    String appId = getAppId();
                    File fileCreateImageFile = CameraUtils.createImageFile(getActivity());
                    this.imageFileSavePath = fileCreateImageFile.getAbsolutePath();
                    Uri uriForFile = FileProvider.getUriForFile(getActivity(), appId + ".fileprovider", fileCreateImageFile);
                    this.imageFileUri = uriForFile;
                    intent.putExtra("output", uriForFile);
                    startActivityForResult(pluginCall, intent, 9002);
                    return;
                } catch (Exception e) {
                    pluginCall.error(IMAGE_FILE_SAVE_ERROR, e);
                    return;
                }
            }
            pluginCall.error(NO_CAMERA_ACTIVITY_ERROR);
        }
    }

    public void openPhotos(PluginCall pluginCall) {
        if (checkPhotosPermissions(pluginCall)) {
            Intent intent = new Intent("android.intent.action.PICK");
            intent.setType("image/*");
            startActivityForResult(pluginCall, intent, 9003);
        }
    }

    public void processCameraImage(PluginCall pluginCall) throws Throwable {
        if (this.imageFileSavePath == null) {
            pluginCall.error(IMAGE_PROCESS_NO_FILE_ERROR);
            return;
        }
        File file = new File(this.imageFileSavePath);
        BitmapFactory.Options options = new BitmapFactory.Options();
        Uri uriFromFile = Uri.fromFile(file);
        Bitmap bitmapDecodeFile = BitmapFactory.decodeFile(this.imageFileSavePath, options);
        if (bitmapDecodeFile == null) {
            pluginCall.error("User cancelled photos app");
        } else {
            returnResult(pluginCall, bitmapDecodeFile, uriFromFile);
        }
    }

    public void processPickedImage(PluginCall pluginCall, Intent intent) {
        if (intent == null) {
            pluginCall.error("No image picked");
            return;
        }
        Uri data = intent.getData();
        InputStream inputStream = null;
        try {
            try {
                try {
                    InputStream inputStreamOpenInputStream = getActivity().getContentResolver().openInputStream(data);
                    Bitmap bitmapDecodeStream = BitmapFactory.decodeStream(inputStreamOpenInputStream);
                    if (bitmapDecodeStream != null) {
                        returnResult(pluginCall, bitmapDecodeStream, data);
                        if (inputStreamOpenInputStream != null) {
                            inputStreamOpenInputStream.close();
                            return;
                        }
                        return;
                    }
                    pluginCall.reject("Unable to process bitmap");
                    if (inputStreamOpenInputStream != null) {
                        try {
                            inputStreamOpenInputStream.close();
                        } catch (IOException e) {
                            Logger.error(getLogTag(), UNABLE_TO_PROCESS_IMAGE, e);
                        }
                    }
                } catch (IOException e2) {
                    Logger.error(getLogTag(), UNABLE_TO_PROCESS_IMAGE, e2);
                }
            } catch (FileNotFoundException e3) {
                pluginCall.error("No such image found", e3);
                if (0 != 0) {
                    inputStream.close();
                }
            } catch (OutOfMemoryError unused) {
                pluginCall.error("Out of memory");
                if (0 != 0) {
                    inputStream.close();
                }
            }
        } catch (Throwable th) {
            if (0 != 0) {
                try {
                    inputStream.close();
                } catch (IOException e4) {
                    Logger.error(getLogTag(), UNABLE_TO_PROCESS_IMAGE, e4);
                }
            }
            throw th;
        }
    }

    private Uri saveTemporaryImage(Bitmap bitmap, Uri uri, InputStream inputStream) throws IOException {
        String lastPathSegment = uri.getLastPathSegment();
        if (!lastPathSegment.contains(".jpg") && !lastPathSegment.contains(".jpeg")) {
            lastPathSegment = lastPathSegment + "." + new Date().getTime() + ".jpeg";
        }
        File file = new File(getActivity().getCacheDir(), lastPathSegment);
        FileOutputStream fileOutputStream = new FileOutputStream(file);
        byte[] bArr = new byte[1024];
        while (true) {
            int i = inputStream.read(bArr);
            if (i != -1) {
                fileOutputStream.write(bArr, 0, i);
            } else {
                fileOutputStream.close();
                return Uri.fromFile(file);
            }
        }
    }

    private void returnResult(PluginCall pluginCall, Bitmap bitmap, Uri uri) throws Throwable {
        String str;
        try {
            Bitmap bitmapPrepareBitmap = prepareBitmap(bitmap, uri);
            ExifWrapper exifData = ImageUtils.getExifData(getContext(), bitmapPrepareBitmap, uri);
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            bitmapPrepareBitmap.compress(Bitmap.CompressFormat.JPEG, this.settings.getQuality(), byteArrayOutputStream);
            if (this.settings.isAllowEditing() && !this.isEdited) {
                editImage(pluginCall, bitmapPrepareBitmap, uri, byteArrayOutputStream);
                return;
            }
            if (pluginCall.getBoolean("saveToGallery", false).booleanValue() && ((str = this.imageEditedFileSavePath) != null || this.imageFileSavePath != null)) {
                if (str == null) {
                    try {
                        str = this.imageFileSavePath;
                    } catch (FileNotFoundException e) {
                        Logger.error(getLogTag(), IMAGE_GALLERY_SAVE_ERROR, e);
                    }
                }
                MediaStore.Images.Media.insertImage(getActivity().getContentResolver(), str, new File(str).getName(), "");
            }
            if (this.settings.getResultType() == CameraResultType.BASE64) {
                returnBase64(pluginCall, exifData, byteArrayOutputStream);
            } else if (this.settings.getResultType() == CameraResultType.URI) {
                returnFileURI(pluginCall, exifData, bitmapPrepareBitmap, uri, byteArrayOutputStream);
            } else if (this.settings.getResultType() == CameraResultType.DATAURL) {
                returnDataUrl(pluginCall, exifData, byteArrayOutputStream);
            } else {
                pluginCall.reject(INVALID_RESULT_TYPE_ERROR);
            }
            this.imageFileSavePath = null;
            this.imageFileUri = null;
            this.imageEditedFileSavePath = null;
        } catch (IOException unused) {
            pluginCall.reject(UNABLE_TO_PROCESS_IMAGE);
        }
    }

    private void returnFileURI(PluginCall pluginCall, ExifWrapper exifWrapper, Bitmap bitmap, Uri uri, ByteArrayOutputStream byteArrayOutputStream) throws Throwable {
        Uri tempImage = getTempImage(bitmap, uri, byteArrayOutputStream);
        if (tempImage != null) {
            JSObject jSObject = new JSObject();
            jSObject.put("format", "jpeg");
            jSObject.put("exif", (Object) exifWrapper.toJson());
            jSObject.put("path", tempImage.toString());
            jSObject.put("webPath", FileUtils.getPortablePath(getContext(), this.bridge.getLocalUrl(), tempImage));
            pluginCall.resolve(jSObject);
            return;
        }
        pluginCall.reject(UNABLE_TO_PROCESS_IMAGE);
    }

    private Uri getTempImage(Bitmap bitmap, Uri uri, ByteArrayOutputStream byteArrayOutputStream) throws Throwable {
        ByteArrayInputStream byteArrayInputStream;
        Uri uriSaveTemporaryImage = null;
        uriSaveTemporaryImage = null;
        uriSaveTemporaryImage = null;
        ByteArrayInputStream byteArrayInputStream2 = null;
        try {
            try {
                byteArrayInputStream = new ByteArrayInputStream(byteArrayOutputStream.toByteArray());
            } catch (IOException e) {
                Logger.error(getLogTag(), UNABLE_TO_PROCESS_IMAGE, e);
            }
        } catch (IOException unused) {
            byteArrayInputStream = null;
        } catch (Throwable th) {
            th = th;
        }
        try {
            uriSaveTemporaryImage = saveTemporaryImage(bitmap, uri, byteArrayInputStream);
            byteArrayInputStream.close();
        } catch (IOException unused2) {
            if (byteArrayInputStream != null) {
                byteArrayInputStream.close();
            }
            return uriSaveTemporaryImage;
        } catch (Throwable th2) {
            th = th2;
            byteArrayInputStream2 = byteArrayInputStream;
            if (byteArrayInputStream2 != null) {
                try {
                    byteArrayInputStream2.close();
                } catch (IOException e2) {
                    Logger.error(getLogTag(), UNABLE_TO_PROCESS_IMAGE, e2);
                }
            }
            throw th;
        }
        return uriSaveTemporaryImage;
    }

    private Bitmap prepareBitmap(Bitmap bitmap, Uri uri) throws IOException {
        if (this.settings.isShouldCorrectOrientation()) {
            bitmap = replaceBitmap(bitmap, ImageUtils.correctOrientation(getContext(), bitmap, uri));
        }
        return this.settings.isShouldResize() ? replaceBitmap(bitmap, ImageUtils.resize(bitmap, this.settings.getWidth(), this.settings.getHeight(), this.settings.getPreserveAspectRatio())) : bitmap;
    }

    private Bitmap replaceBitmap(Bitmap bitmap, Bitmap bitmap2) {
        if (bitmap != bitmap2) {
            bitmap.recycle();
        }
        return bitmap2;
    }

    private void returnDataUrl(PluginCall pluginCall, ExifWrapper exifWrapper, ByteArrayOutputStream byteArrayOutputStream) {
        String strEncodeToString = Base64.encodeToString(byteArrayOutputStream.toByteArray(), 2);
        JSObject jSObject = new JSObject();
        jSObject.put("format", "jpeg");
        jSObject.put("dataUrl", "data:image/jpeg;base64," + strEncodeToString);
        jSObject.put("exif", (Object) exifWrapper.toJson());
        pluginCall.resolve(jSObject);
    }

    private void returnBase64(PluginCall pluginCall, ExifWrapper exifWrapper, ByteArrayOutputStream byteArrayOutputStream) {
        String strEncodeToString = Base64.encodeToString(byteArrayOutputStream.toByteArray(), 2);
        JSObject jSObject = new JSObject();
        jSObject.put("format", "jpeg");
        jSObject.put("base64String", strEncodeToString);
        jSObject.put("exif", (Object) exifWrapper.toJson());
        pluginCall.resolve(jSObject);
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
                Logger.debug(getLogTag(), "User denied camera permission: " + str);
                savedCall.error(PERMISSION_DENIED_ERROR);
                return;
            }
        }
        if (i == 9002) {
            doShow(savedCall);
        }
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnActivityResult(int i, int i2, Intent intent) throws Throwable {
        super.handleOnActivityResult(i, i2, intent);
        PluginCall savedCall = getSavedCall();
        if (savedCall == null) {
            return;
        }
        this.settings = getSettings(savedCall);
        if (i == 9002) {
            processCameraImage(savedCall);
            return;
        }
        if (i == 9003) {
            processPickedImage(savedCall, intent);
            return;
        }
        if (i == 9005 && i2 == -1) {
            this.isEdited = true;
            processPickedImage(savedCall, intent);
        } else {
            if (i2 != 0 || this.imageFileSavePath == null) {
                return;
            }
            this.imageEditedFileSavePath = null;
            this.isEdited = true;
            processCameraImage(savedCall);
        }
    }

    private void editImage(PluginCall pluginCall, Bitmap bitmap, Uri uri, ByteArrayOutputStream byteArrayOutputStream) {
        Uri uri2 = this.imageFileUri;
        if (uri2 == null) {
            uri2 = uri;
        }
        try {
            startActivityForResult(pluginCall, createEditIntent(uri2, false), 9005);
        } catch (SecurityException unused) {
            Intent intentCreateEditIntent = createEditIntent(getTempImage(bitmap, uri, byteArrayOutputStream), true);
            if (intentCreateEditIntent != null) {
                startActivityForResult(pluginCall, intentCreateEditIntent, 9005);
            } else {
                pluginCall.error(IMAGE_EDIT_ERROR);
            }
        } catch (Exception e) {
            pluginCall.error(IMAGE_EDIT_ERROR, e);
        }
    }

    private Intent createEditIntent(Uri uri, boolean z) {
        if (z) {
            try {
                uri = FileProvider.getUriForFile(getActivity(), getContext().getPackageName() + ".fileprovider", new File(uri.getPath()));
            } catch (Exception unused) {
                return null;
            }
        }
        Intent intent = new Intent("android.intent.action.EDIT");
        intent.setDataAndType(uri, "image/*");
        File fileCreateImageFile = CameraUtils.createImageFile(getActivity());
        this.imageEditedFileSavePath = fileCreateImageFile.getAbsolutePath();
        Uri uriFromFile = Uri.fromFile(fileCreateImageFile);
        intent.addFlags(1);
        intent.addFlags(2);
        intent.putExtra("output", uriFromFile);
        return intent;
    }

    @Override // com.getcapacitor.Plugin
    protected Bundle saveInstanceState() {
        Bundle bundleSaveInstanceState = super.saveInstanceState();
        bundleSaveInstanceState.putString("cameraImageFileSavePath", this.imageFileSavePath);
        return bundleSaveInstanceState;
    }

    @Override // com.getcapacitor.Plugin
    protected void restoreState(Bundle bundle) {
        String string = bundle.getString("cameraImageFileSavePath");
        if (string != null) {
            this.imageFileSavePath = string;
        }
    }
}

