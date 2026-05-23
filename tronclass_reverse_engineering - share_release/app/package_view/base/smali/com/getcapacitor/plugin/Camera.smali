.class public Lcom/getcapacitor/plugin/Camera;
.super Lcom/getcapacitor/Plugin;
.source "Camera.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
    requestCodes = {
        0x232a,
        0x232b,
        0x232d
    }
.end annotation


# static fields
.field private static final IMAGE_EDIT_ERROR:Ljava/lang/String; = "Unable to edit image"

.field private static final IMAGE_FILE_SAVE_ERROR:Ljava/lang/String; = "Unable to create photo on disk"

.field private static final IMAGE_GALLERY_SAVE_ERROR:Ljava/lang/String; = "Unable to save the image in the gallery"

.field private static final IMAGE_PROCESS_NO_FILE_ERROR:Ljava/lang/String; = "Unable to process image, file not found on disk"

.field private static final INVALID_RESULT_TYPE_ERROR:Ljava/lang/String; = "Invalid resultType option"

.field private static final NO_CAMERA_ACTIVITY_ERROR:Ljava/lang/String; = "Unable to resolve camera activity"

.field private static final NO_CAMERA_ERROR:Ljava/lang/String; = "Device doesn\'t have a camera available"

.field private static final PERMISSION_DENIED_ERROR:Ljava/lang/String; = "Unable to access camera, user denied permission request"

.field static final REQUEST_IMAGE_CAPTURE:I = 0x232a

.field static final REQUEST_IMAGE_EDIT:I = 0x232d

.field static final REQUEST_IMAGE_PICK:I = 0x232b

.field private static final UNABLE_TO_PROCESS_IMAGE:Ljava/lang/String; = "Unable to process image"


# instance fields
.field private imageEditedFileSavePath:Ljava/lang/String;

.field private imageFileSavePath:Ljava/lang/String;

.field private imageFileUri:Landroid/net/Uri;

.field private isEdited:Z

.field private settings:Lcom/getcapacitor/plugin/camera/CameraSettings;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 53
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    const/4 v0, 0x0

    .line 72
    iput-boolean v0, p0, Lcom/getcapacitor/plugin/Camera;->isEdited:Z

    .line 74
    new-instance v0, Lcom/getcapacitor/plugin/camera/CameraSettings;

    invoke-direct {v0}, Lcom/getcapacitor/plugin/camera/CameraSettings;-><init>()V

    iput-object v0, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    return-void
.end method

.method static synthetic access$000(Lcom/getcapacitor/plugin/Camera;)Lcom/getcapacitor/plugin/camera/CameraSettings;
    .locals 0

    .line 53
    iget-object p0, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    return-object p0
.end method

.method private checkCameraPermissions(Lcom/getcapacitor/PluginCall;)Z
    .locals 5

    .line 151
    iget-object p1, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    invoke-virtual {p1}, Lcom/getcapacitor/plugin/camera/CameraSettings;->isSaveToGallery()Z

    move-result p1

    const/16 v0, 0x232a

    const/4 v1, 0x1

    const/4 v2, 0x0

    const-string v3, "android.permission.CAMERA"

    if-eqz p1, :cond_1

    invoke-virtual {p0, v3}, Lcom/getcapacitor/plugin/Camera;->hasPermission(Ljava/lang/String;)Z

    move-result p1

    const-string v4, "android.permission.WRITE_EXTERNAL_STORAGE"

    if-eqz p1, :cond_0

    invoke-virtual {p0, v4}, Lcom/getcapacitor/plugin/Camera;->hasPermission(Ljava/lang/String;)Z

    move-result p1

    if-nez p1, :cond_1

    :cond_0
    const/4 p1, 0x3

    .line 152
    new-array p1, p1, [Ljava/lang/String;

    aput-object v3, p1, v2

    aput-object v4, p1, v1

    const/4 v1, 0x2

    const-string v3, "android.permission.READ_EXTERNAL_STORAGE"

    aput-object v3, p1, v1

    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/plugin/Camera;->pluginRequestPermissions([Ljava/lang/String;I)V

    return v2

    .line 160
    :cond_1
    invoke-virtual {p0, v3}, Lcom/getcapacitor/plugin/Camera;->hasPermission(Ljava/lang/String;)Z

    move-result p1

    if-nez p1, :cond_2

    .line 161
    invoke-virtual {p0, v3, v0}, Lcom/getcapacitor/plugin/Camera;->pluginRequestPermission(Ljava/lang/String;I)V

    return v2

    :cond_2
    return v1
.end method

.method private checkPhotosPermissions(Lcom/getcapacitor/PluginCall;)Z
    .locals 1

    .line 168
    const-string p1, "android.permission.READ_EXTERNAL_STORAGE"

    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Camera;->hasPermission(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_0

    const/16 v0, 0x232a

    .line 169
    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/plugin/Camera;->pluginRequestPermission(Ljava/lang/String;I)V

    const/4 p1, 0x0

    return p1

    :cond_0
    const/4 p1, 0x1

    return p1
.end method

.method private createEditIntent(Landroid/net/Uri;Z)Landroid/content/Intent;
    .locals 2

    if-eqz p2, :cond_0

    .line 535
    :try_start_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object p2

    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-virtual {v1}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ".fileprovider"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    new-instance v1, Ljava/io/File;

    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v1, p1}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    invoke-static {p2, v0, v1}, Landroidx/core/content/FileProvider;->getUriForFile(Landroid/content/Context;Ljava/lang/String;Ljava/io/File;)Landroid/net/Uri;

    move-result-object p1

    .line 537
    :cond_0
    new-instance p2, Landroid/content/Intent;

    const-string v0, "android.intent.action.EDIT"

    invoke-direct {p2, v0}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 538
    const-string v0, "image/*"

    invoke-virtual {p2, p1, v0}, Landroid/content/Intent;->setDataAndType(Landroid/net/Uri;Ljava/lang/String;)Landroid/content/Intent;

    .line 539
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object p1

    invoke-static {p1}, Lcom/getcapacitor/plugin/camera/CameraUtils;->createImageFile(Landroid/app/Activity;)Ljava/io/File;

    move-result-object p1

    .line 540
    invoke-virtual {p1}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/plugin/Camera;->imageEditedFileSavePath:Ljava/lang/String;

    .line 541
    invoke-static {p1}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object p1

    const/4 v0, 0x1

    .line 542
    invoke-virtual {p2, v0}, Landroid/content/Intent;->addFlags(I)Landroid/content/Intent;

    const/4 v0, 0x2

    .line 543
    invoke-virtual {p2, v0}, Landroid/content/Intent;->addFlags(I)Landroid/content/Intent;

    .line 544
    const-string v0, "output"

    invoke-virtual {p2, v0, p1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Landroid/os/Parcelable;)Landroid/content/Intent;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return-object p2

    :catch_0
    const/4 p1, 0x0

    return-object p1
.end method

.method private doShow(Lcom/getcapacitor/PluginCall;)V
    .locals 2

    .line 88
    sget-object v0, Lcom/getcapacitor/plugin/Camera$3;->$SwitchMap$com$getcapacitor$plugin$camera$CameraSource:[I

    iget-object v1, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    invoke-virtual {v1}, Lcom/getcapacitor/plugin/camera/CameraSettings;->getSource()Lcom/getcapacitor/plugin/camera/CameraSource;

    move-result-object v1

    invoke-virtual {v1}, Lcom/getcapacitor/plugin/camera/CameraSource;->ordinal()I

    move-result v1

    aget v0, v0, v1

    const/4 v1, 0x1

    if-eq v0, v1, :cond_2

    const/4 v1, 0x2

    if-eq v0, v1, :cond_1

    const/4 v1, 0x3

    if-eq v0, v1, :cond_0

    .line 99
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Camera;->showPrompt(Lcom/getcapacitor/PluginCall;)V

    goto :goto_0

    .line 96
    :cond_0
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Camera;->showPhotos(Lcom/getcapacitor/PluginCall;)V

    goto :goto_0

    .line 93
    :cond_1
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Camera;->showCamera(Lcom/getcapacitor/PluginCall;)V

    goto :goto_0

    .line 90
    :cond_2
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Camera;->showPrompt(Lcom/getcapacitor/PluginCall;)V

    :goto_0
    return-void
.end method

.method private editImage(Lcom/getcapacitor/PluginCall;Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/io/ByteArrayOutputStream;)V
    .locals 4

    .line 511
    const-string v0, "Unable to edit image"

    .line 512
    iget-object v1, p0, Lcom/getcapacitor/plugin/Camera;->imageFileUri:Landroid/net/Uri;

    if-eqz v1, :cond_0

    goto :goto_0

    :cond_0
    move-object v1, p3

    :goto_0
    const/4 v2, 0x0

    const/16 v3, 0x232d

    .line 516
    :try_start_0
    invoke-direct {p0, v1, v2}, Lcom/getcapacitor/plugin/Camera;->createEditIntent(Landroid/net/Uri;Z)Landroid/content/Intent;

    move-result-object v1

    .line 517
    invoke-virtual {p0, p1, v1, v3}, Lcom/getcapacitor/plugin/Camera;->startActivityForResult(Lcom/getcapacitor/PluginCall;Landroid/content/Intent;I)V
    :try_end_0
    .catch Ljava/lang/SecurityException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception p2

    .line 527
    invoke-virtual {p1, v0, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    goto :goto_1

    .line 519
    :catch_1
    invoke-direct {p0, p2, p3, p4}, Lcom/getcapacitor/plugin/Camera;->getTempImage(Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/io/ByteArrayOutputStream;)Landroid/net/Uri;

    move-result-object p2

    const/4 p3, 0x1

    .line 520
    invoke-direct {p0, p2, p3}, Lcom/getcapacitor/plugin/Camera;->createEditIntent(Landroid/net/Uri;Z)Landroid/content/Intent;

    move-result-object p2

    if-eqz p2, :cond_1

    .line 522
    invoke-virtual {p0, p1, p2, v3}, Lcom/getcapacitor/plugin/Camera;->startActivityForResult(Lcom/getcapacitor/PluginCall;Landroid/content/Intent;I)V

    goto :goto_1

    .line 524
    :cond_1
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    :goto_1
    return-void
.end method

.method private getResultType(Ljava/lang/String;)Lcom/getcapacitor/plugin/camera/CameraResultType;
    .locals 3

    if-nez p1, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 197
    :cond_0
    :try_start_0
    invoke-virtual {p1}, Ljava/lang/String;->toUpperCase()Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Lcom/getcapacitor/plugin/camera/CameraResultType;->valueOf(Ljava/lang/String;)Lcom/getcapacitor/plugin/camera/CameraResultType;

    move-result-object p1
    :try_end_0
    .catch Ljava/lang/IllegalArgumentException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    .line 199
    :catch_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getLogTag()Ljava/lang/String;

    move-result-object v0

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Invalid result type \""

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v1, "\", defaulting to base64"

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 200
    sget-object p1, Lcom/getcapacitor/plugin/camera/CameraResultType;->BASE64:Lcom/getcapacitor/plugin/camera/CameraResultType;

    return-object p1
.end method

.method private getSettings(Lcom/getcapacitor/PluginCall;)Lcom/getcapacitor/plugin/camera/CameraSettings;
    .locals 6

    .line 176
    new-instance v0, Lcom/getcapacitor/plugin/camera/CameraSettings;

    invoke-direct {v0}, Lcom/getcapacitor/plugin/camera/CameraSettings;-><init>()V

    .line 177
    const-string v1, "resultType"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-direct {p0, v1}, Lcom/getcapacitor/plugin/Camera;->getResultType(Ljava/lang/String;)Lcom/getcapacitor/plugin/camera/CameraResultType;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setResultType(Lcom/getcapacitor/plugin/camera/CameraResultType;)V

    const/4 v1, 0x0

    .line 181
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    .line 178
    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v3

    const-string v4, "saveToGallery"

    invoke-virtual {p1, v4, v3}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v4

    invoke-virtual {v0, v4}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setSaveToGallery(Z)V

    .line 179
    const-string v4, "allowEditing"

    invoke-virtual {p1, v4, v3}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v4

    invoke-virtual {v0, v4}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setAllowEditing(Z)V

    const/16 v4, 0x5a

    .line 180
    invoke-static {v4}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v4

    const-string v5, "quality"

    invoke-virtual {p1, v5, v4}, Lcom/getcapacitor/PluginCall;->getInt(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/Integer;->intValue()I

    move-result v4

    invoke-virtual {v0, v4}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setQuality(I)V

    .line 181
    const-string v4, "width"

    invoke-virtual {p1, v4, v2}, Lcom/getcapacitor/PluginCall;->getInt(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/Integer;->intValue()I

    move-result v4

    invoke-virtual {v0, v4}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setWidth(I)V

    .line 182
    const-string v4, "height"

    invoke-virtual {p1, v4, v2}, Lcom/getcapacitor/PluginCall;->getInt(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Integer;->intValue()I

    move-result v2

    invoke-virtual {v0, v2}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setHeight(I)V

    .line 183
    invoke-virtual {v0}, Lcom/getcapacitor/plugin/camera/CameraSettings;->getWidth()I

    move-result v2

    const/4 v4, 0x1

    if-gtz v2, :cond_0

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/camera/CameraSettings;->getHeight()I

    move-result v2

    if-lez v2, :cond_1

    :cond_0
    move v1, v4

    :cond_1
    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setShouldResize(Z)V

    .line 184
    const-string v1, "correctOrientation"

    invoke-static {v4}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setShouldCorrectOrientation(Z)V

    .line 185
    const-string v1, "preserveAspectRatio"

    invoke-virtual {p1, v1, v3}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setPreserveAspectRatio(Z)V

    .line 187
    :try_start_0
    const-string v1, "source"

    sget-object v2, Lcom/getcapacitor/plugin/camera/CameraSource;->PROMPT:Lcom/getcapacitor/plugin/camera/CameraSource;

    invoke-virtual {v2}, Lcom/getcapacitor/plugin/camera/CameraSource;->getSource()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Lcom/getcapacitor/plugin/camera/CameraSource;->valueOf(Ljava/lang/String;)Lcom/getcapacitor/plugin/camera/CameraSource;

    move-result-object p1

    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setSource(Lcom/getcapacitor/plugin/camera/CameraSource;)V
    :try_end_0
    .catch Ljava/lang/IllegalArgumentException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 189
    :catch_0
    sget-object p1, Lcom/getcapacitor/plugin/camera/CameraSource;->PROMPT:Lcom/getcapacitor/plugin/camera/CameraSource;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setSource(Lcom/getcapacitor/plugin/camera/CameraSource;)V

    :goto_0
    return-object v0
.end method

.method private getTempImage(Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/io/ByteArrayOutputStream;)Landroid/net/Uri;
    .locals 3

    .line 383
    const-string v0, "Unable to process image"

    const/4 v1, 0x0

    .line 386
    :try_start_0
    new-instance v2, Ljava/io/ByteArrayInputStream;

    invoke-virtual {p3}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object p3

    invoke-direct {v2, p3}, Ljava/io/ByteArrayInputStream;-><init>([B)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_2
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    .line 387
    :try_start_1
    invoke-direct {p0, p1, p2, v2}, Lcom/getcapacitor/plugin/Camera;->saveTemporaryImage(Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/io/InputStream;)Landroid/net/Uri;

    move-result-object v1
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_3
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 392
    :try_start_2
    invoke-virtual {v2}, Ljava/io/ByteArrayInputStream;->close()V
    :try_end_2
    .catch Ljava/io/IOException; {:try_start_2 .. :try_end_2} :catch_0

    goto :goto_2

    :catch_0
    move-exception p1

    .line 394
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getLogTag()Ljava/lang/String;

    move-result-object p2

    invoke-static {p2, v0, p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    goto :goto_2

    :catchall_0
    move-exception p1

    move-object v1, v2

    goto :goto_0

    :catchall_1
    move-exception p1

    :goto_0
    if-eqz v1, :cond_0

    .line 392
    :try_start_3
    invoke-virtual {v1}, Ljava/io/ByteArrayInputStream;->close()V
    :try_end_3
    .catch Ljava/io/IOException; {:try_start_3 .. :try_end_3} :catch_1

    goto :goto_1

    :catch_1
    move-exception p2

    .line 394
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getLogTag()Ljava/lang/String;

    move-result-object p3

    invoke-static {p3, v0, p2}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 397
    :cond_0
    :goto_1
    throw p1

    :catch_2
    move-object v2, v1

    :catch_3
    if-eqz v2, :cond_1

    .line 392
    :try_start_4
    invoke-virtual {v2}, Ljava/io/ByteArrayInputStream;->close()V
    :try_end_4
    .catch Ljava/io/IOException; {:try_start_4 .. :try_end_4} :catch_0

    :cond_1
    :goto_2
    return-object v1
.end method

.method private prepareBitmap(Landroid/graphics/Bitmap;Landroid/net/Uri;)Landroid/graphics/Bitmap;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 409
    iget-object v0, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/camera/CameraSettings;->isShouldCorrectOrientation()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 410
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-static {v0, p1, p2}, Lcom/getcapacitor/plugin/camera/ImageUtils;->correctOrientation(Landroid/content/Context;Landroid/graphics/Bitmap;Landroid/net/Uri;)Landroid/graphics/Bitmap;

    move-result-object p2

    .line 411
    invoke-direct {p0, p1, p2}, Lcom/getcapacitor/plugin/Camera;->replaceBitmap(Landroid/graphics/Bitmap;Landroid/graphics/Bitmap;)Landroid/graphics/Bitmap;

    move-result-object p1

    .line 414
    :cond_0
    iget-object p2, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/camera/CameraSettings;->isShouldResize()Z

    move-result p2

    if-eqz p2, :cond_1

    .line 415
    iget-object p2, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    .line 417
    invoke-virtual {p2}, Lcom/getcapacitor/plugin/camera/CameraSettings;->getWidth()I

    move-result p2

    iget-object v0, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    .line 418
    invoke-virtual {v0}, Lcom/getcapacitor/plugin/camera/CameraSettings;->getHeight()I

    move-result v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    .line 419
    invoke-virtual {v1}, Lcom/getcapacitor/plugin/camera/CameraSettings;->getPreserveAspectRatio()Z

    move-result v1

    .line 415
    invoke-static {p1, p2, v0, v1}, Lcom/getcapacitor/plugin/camera/ImageUtils;->resize(Landroid/graphics/Bitmap;IIZ)Landroid/graphics/Bitmap;

    move-result-object p2

    .line 421
    invoke-direct {p0, p1, p2}, Lcom/getcapacitor/plugin/Camera;->replaceBitmap(Landroid/graphics/Bitmap;Landroid/graphics/Bitmap;)Landroid/graphics/Bitmap;

    move-result-object p1

    :cond_1
    return-object p1
.end method

.method private replaceBitmap(Landroid/graphics/Bitmap;Landroid/graphics/Bitmap;)Landroid/graphics/Bitmap;
    .locals 0

    if-eq p1, p2, :cond_0

    .line 428
    invoke-virtual {p1}, Landroid/graphics/Bitmap;->recycle()V

    :cond_0
    return-object p2
.end method

.method private returnBase64(Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/plugin/camera/ExifWrapper;Ljava/io/ByteArrayOutputStream;)V
    .locals 3

    .line 446
    invoke-virtual {p3}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object p3

    const/4 v0, 0x2

    .line 447
    invoke-static {p3, v0}, Landroid/util/Base64;->encodeToString([BI)Ljava/lang/String;

    move-result-object p3

    .line 449
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 450
    const-string v1, "format"

    const-string v2, "jpeg"

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 451
    const-string v1, "base64String"

    invoke-virtual {v0, v1, p3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 452
    const-string p3, "exif"

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->toJson()Lcom/getcapacitor/JSObject;

    move-result-object p2

    invoke-virtual {v0, p3, p2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 453
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method private returnDataUrl(Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/plugin/camera/ExifWrapper;Ljava/io/ByteArrayOutputStream;)V
    .locals 3

    .line 435
    invoke-virtual {p3}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object p3

    const/4 v0, 0x2

    .line 436
    invoke-static {p3, v0}, Landroid/util/Base64;->encodeToString([BI)Ljava/lang/String;

    move-result-object p3

    .line 438
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 439
    const-string v1, "format"

    const-string v2, "jpeg"

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 440
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "data:image/jpeg;base64,"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p3

    const-string v1, "dataUrl"

    invoke-virtual {v0, v1, p3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 441
    const-string p3, "exif"

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->toJson()Lcom/getcapacitor/JSObject;

    move-result-object p2

    invoke-virtual {v0, p3, p2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 442
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method private returnFileURI(Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/plugin/camera/ExifWrapper;Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/io/ByteArrayOutputStream;)V
    .locals 1

    .line 369
    invoke-direct {p0, p3, p4, p5}, Lcom/getcapacitor/plugin/Camera;->getTempImage(Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/io/ByteArrayOutputStream;)Landroid/net/Uri;

    move-result-object p3

    if-eqz p3, :cond_0

    .line 371
    new-instance p4, Lcom/getcapacitor/JSObject;

    invoke-direct {p4}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 372
    const-string p5, "format"

    const-string v0, "jpeg"

    invoke-virtual {p4, p5, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 373
    const-string p5, "exif"

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->toJson()Lcom/getcapacitor/JSObject;

    move-result-object p2

    invoke-virtual {p4, p5, p2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 374
    const-string p2, "path"

    invoke-virtual {p3}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object p5

    invoke-virtual {p4, p2, p5}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 375
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getContext()Landroid/content/Context;

    move-result-object p2

    iget-object p5, p0, Lcom/getcapacitor/plugin/Camera;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {p5}, Lcom/getcapacitor/Bridge;->getLocalUrl()Ljava/lang/String;

    move-result-object p5

    invoke-static {p2, p5, p3}, Lcom/getcapacitor/FileUtils;->getPortablePath(Landroid/content/Context;Ljava/lang/String;Landroid/net/Uri;)Ljava/lang/String;

    move-result-object p2

    const-string p3, "webPath"

    invoke-virtual {p4, p3, p2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 376
    invoke-virtual {p1, p4}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    .line 378
    :cond_0
    const-string p2, "Unable to process image"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method private returnResult(Lcom/getcapacitor/PluginCall;Landroid/graphics/Bitmap;Landroid/net/Uri;)V
    .locals 6

    .line 324
    :try_start_0
    invoke-direct {p0, p2, p3}, Lcom/getcapacitor/plugin/Camera;->prepareBitmap(Landroid/graphics/Bitmap;Landroid/net/Uri;)Landroid/graphics/Bitmap;

    move-result-object v3
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_1

    .line 330
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getContext()Landroid/content/Context;

    move-result-object p2

    invoke-static {p2, v3, p3}, Lcom/getcapacitor/plugin/camera/ImageUtils;->getExifData(Landroid/content/Context;Landroid/graphics/Bitmap;Landroid/net/Uri;)Lcom/getcapacitor/plugin/camera/ExifWrapper;

    move-result-object v2

    .line 333
    new-instance v5, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v5}, Ljava/io/ByteArrayOutputStream;-><init>()V

    .line 334
    sget-object p2, Landroid/graphics/Bitmap$CompressFormat;->JPEG:Landroid/graphics/Bitmap$CompressFormat;

    iget-object v0, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/camera/CameraSettings;->getQuality()I

    move-result v0

    invoke-virtual {v3, p2, v0, v5}, Landroid/graphics/Bitmap;->compress(Landroid/graphics/Bitmap$CompressFormat;ILjava/io/OutputStream;)Z

    .line 336
    iget-object p2, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/camera/CameraSettings;->isAllowEditing()Z

    move-result p2

    if-eqz p2, :cond_0

    iget-boolean p2, p0, Lcom/getcapacitor/plugin/Camera;->isEdited:Z

    if-nez p2, :cond_0

    .line 337
    invoke-direct {p0, p1, v3, p3, v5}, Lcom/getcapacitor/plugin/Camera;->editImage(Lcom/getcapacitor/PluginCall;Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/io/ByteArrayOutputStream;)V

    return-void

    :cond_0
    const/4 p2, 0x0

    .line 341
    invoke-static {p2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p2

    const-string v0, "saveToGallery"

    invoke-virtual {p1, v0, p2}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p2

    if-eqz p2, :cond_3

    .line 342
    iget-object p2, p0, Lcom/getcapacitor/plugin/Camera;->imageEditedFileSavePath:Ljava/lang/String;

    if-nez p2, :cond_1

    iget-object v0, p0, Lcom/getcapacitor/plugin/Camera;->imageFileSavePath:Ljava/lang/String;

    if-eqz v0, :cond_3

    :cond_1
    if-eqz p2, :cond_2

    goto :goto_0

    .line 344
    :cond_2
    :try_start_1
    iget-object p2, p0, Lcom/getcapacitor/plugin/Camera;->imageFileSavePath:Ljava/lang/String;

    .line 345
    :goto_0
    new-instance v0, Ljava/io/File;

    invoke-direct {v0, p2}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    .line 346
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    invoke-virtual {v1}, Landroidx/appcompat/app/AppCompatActivity;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v1

    invoke-virtual {v0}, Ljava/io/File;->getName()Ljava/lang/String;

    move-result-object v0

    const-string v4, ""

    invoke-static {v1, p2, v0, v4}, Landroid/provider/MediaStore$Images$Media;->insertImage(Landroid/content/ContentResolver;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    :try_end_1
    .catch Ljava/io/FileNotFoundException; {:try_start_1 .. :try_end_1} :catch_0

    goto :goto_1

    :catch_0
    move-exception p2

    .line 348
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getLogTag()Ljava/lang/String;

    move-result-object v0

    const-string v1, "Unable to save the image in the gallery"

    invoke-static {v0, v1, p2}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 352
    :cond_3
    :goto_1
    iget-object p2, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/camera/CameraSettings;->getResultType()Lcom/getcapacitor/plugin/camera/CameraResultType;

    move-result-object p2

    sget-object v0, Lcom/getcapacitor/plugin/camera/CameraResultType;->BASE64:Lcom/getcapacitor/plugin/camera/CameraResultType;

    if-ne p2, v0, :cond_4

    .line 353
    invoke-direct {p0, p1, v2, v5}, Lcom/getcapacitor/plugin/Camera;->returnBase64(Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/plugin/camera/ExifWrapper;Ljava/io/ByteArrayOutputStream;)V

    goto :goto_2

    .line 354
    :cond_4
    iget-object p2, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/camera/CameraSettings;->getResultType()Lcom/getcapacitor/plugin/camera/CameraResultType;

    move-result-object p2

    sget-object v0, Lcom/getcapacitor/plugin/camera/CameraResultType;->URI:Lcom/getcapacitor/plugin/camera/CameraResultType;

    if-ne p2, v0, :cond_5

    move-object v0, p0

    move-object v1, p1

    move-object v4, p3

    .line 355
    invoke-direct/range {v0 .. v5}, Lcom/getcapacitor/plugin/Camera;->returnFileURI(Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/plugin/camera/ExifWrapper;Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/io/ByteArrayOutputStream;)V

    goto :goto_2

    .line 356
    :cond_5
    iget-object p2, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    invoke-virtual {p2}, Lcom/getcapacitor/plugin/camera/CameraSettings;->getResultType()Lcom/getcapacitor/plugin/camera/CameraResultType;

    move-result-object p2

    sget-object p3, Lcom/getcapacitor/plugin/camera/CameraResultType;->DATAURL:Lcom/getcapacitor/plugin/camera/CameraResultType;

    if-ne p2, p3, :cond_6

    .line 357
    invoke-direct {p0, p1, v2, v5}, Lcom/getcapacitor/plugin/Camera;->returnDataUrl(Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/plugin/camera/ExifWrapper;Ljava/io/ByteArrayOutputStream;)V

    goto :goto_2

    .line 359
    :cond_6
    const-string p2, "Invalid resultType option"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    :goto_2
    const/4 p1, 0x0

    .line 363
    iput-object p1, p0, Lcom/getcapacitor/plugin/Camera;->imageFileSavePath:Ljava/lang/String;

    .line 364
    iput-object p1, p0, Lcom/getcapacitor/plugin/Camera;->imageFileUri:Landroid/net/Uri;

    .line 365
    iput-object p1, p0, Lcom/getcapacitor/plugin/Camera;->imageEditedFileSavePath:Ljava/lang/String;

    return-void

    .line 326
    :catch_1
    const-string p2, "Unable to process image"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void
.end method

.method private saveTemporaryImage(Landroid/graphics/Bitmap;Landroid/net/Uri;Ljava/io/InputStream;)Landroid/net/Uri;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 300
    invoke-virtual {p2}, Landroid/net/Uri;->getLastPathSegment()Ljava/lang/String;

    move-result-object p1

    .line 301
    const-string p2, ".jpg"

    invoke-virtual {p1, p2}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result p2

    if-nez p2, :cond_0

    const-string p2, ".jpeg"

    invoke-virtual {p1, p2}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 302
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "."

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    new-instance v0, Ljava/util/Date;

    invoke-direct {v0}, Ljava/util/Date;-><init>()V

    invoke-virtual {v0}, Ljava/util/Date;->getTime()J

    move-result-wide v0

    invoke-virtual {p1, v0, v1}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 304
    :cond_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object p2

    invoke-virtual {p2}, Landroidx/appcompat/app/AppCompatActivity;->getCacheDir()Ljava/io/File;

    move-result-object p2

    .line 305
    new-instance v0, Ljava/io/File;

    invoke-direct {v0, p2, p1}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    .line 306
    new-instance p1, Ljava/io/FileOutputStream;

    invoke-direct {p1, v0}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;)V

    const/16 p2, 0x400

    .line 307
    new-array p2, p2, [B

    .line 309
    :goto_0
    invoke-virtual {p3, p2}, Ljava/io/InputStream;->read([B)I

    move-result v1

    const/4 v2, -0x1

    if-eq v1, v2, :cond_1

    const/4 v2, 0x0

    .line 310
    invoke-virtual {p1, p2, v2, v1}, Ljava/io/FileOutputStream;->write([BII)V

    goto :goto_0

    .line 312
    :cond_1
    invoke-virtual {p1}, Ljava/io/FileOutputStream;->close()V

    .line 313
    invoke-static {v0}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object p1

    return-object p1
.end method

.method private showCamera(Lcom/getcapacitor/PluginCall;)V
    .locals 2

    .line 138
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v0

    const-string v1, "android.hardware.camera.any"

    invoke-virtual {v0, v1}, Landroid/content/pm/PackageManager;->hasSystemFeature(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 139
    const-string v0, "Device doesn\'t have a camera available"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 142
    :cond_0
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Camera;->openCamera(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method private showPhotos(Lcom/getcapacitor/PluginCall;)V
    .locals 0

    .line 146
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Camera;->openPhotos(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method private showPrompt(Lcom/getcapacitor/PluginCall;)V
    .locals 4

    .line 106
    const-string v0, "promptLabelPhoto"

    const-string v1, "From Photos"

    invoke-virtual {p1, v0, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 107
    const-string v1, "promptLabelPicture"

    const-string v2, "Take Picture"

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 109
    new-instance v2, Lcom/getcapacitor/JSObject;

    invoke-direct {v2}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 110
    const-string v3, "title"

    invoke-virtual {v2, v3, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 111
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 112
    invoke-virtual {v0, v3, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 113
    filled-new-array {v2, v0}, [Ljava/lang/Object;

    move-result-object v0

    .line 118
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    new-instance v2, Lcom/getcapacitor/plugin/Camera$1;

    invoke-direct {v2, p0, p1}, Lcom/getcapacitor/plugin/Camera$1;-><init>(Lcom/getcapacitor/plugin/Camera;Lcom/getcapacitor/PluginCall;)V

    new-instance v3, Lcom/getcapacitor/plugin/Camera$2;

    invoke-direct {v3, p0, p1}, Lcom/getcapacitor/plugin/Camera$2;-><init>(Lcom/getcapacitor/plugin/Camera;Lcom/getcapacitor/PluginCall;)V

    invoke-static {v1, v0, v2, v3}, Lcom/getcapacitor/Dialogs;->actions(Landroidx/appcompat/app/AppCompatActivity;[Ljava/lang/Object;Lcom/getcapacitor/Dialogs$OnSelectListener;Lcom/getcapacitor/Dialogs$OnCancelListener;)V

    return-void
.end method


# virtual methods
.method public getPhoto(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    const/4 v0, 0x0

    .line 78
    iput-boolean v0, p0, Lcom/getcapacitor/plugin/Camera;->isEdited:Z

    .line 80
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Camera;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 82
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Camera;->getSettings(Lcom/getcapacitor/PluginCall;)Lcom/getcapacitor/plugin/camera/CameraSettings;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    .line 84
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Camera;->doShow(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method protected handleOnActivityResult(IILandroid/content/Intent;)V
    .locals 3

    .line 486
    invoke-super {p0, p1, p2, p3}, Lcom/getcapacitor/Plugin;->handleOnActivityResult(IILandroid/content/Intent;)V

    .line 488
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object v0

    if-nez v0, :cond_0

    return-void

    .line 494
    :cond_0
    invoke-direct {p0, v0}, Lcom/getcapacitor/plugin/Camera;->getSettings(Lcom/getcapacitor/PluginCall;)Lcom/getcapacitor/plugin/camera/CameraSettings;

    move-result-object v1

    iput-object v1, p0, Lcom/getcapacitor/plugin/Camera;->settings:Lcom/getcapacitor/plugin/camera/CameraSettings;

    const/16 v1, 0x232a

    if-ne p1, v1, :cond_1

    .line 497
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Camera;->processCameraImage(Lcom/getcapacitor/PluginCall;)V

    goto :goto_0

    :cond_1
    const/16 v1, 0x232b

    if-ne p1, v1, :cond_2

    .line 499
    invoke-virtual {p0, v0, p3}, Lcom/getcapacitor/plugin/Camera;->processPickedImage(Lcom/getcapacitor/PluginCall;Landroid/content/Intent;)V

    goto :goto_0

    :cond_2
    const/16 v1, 0x232d

    const/4 v2, 0x1

    if-ne p1, v1, :cond_3

    const/4 p1, -0x1

    if-ne p2, p1, :cond_3

    .line 501
    iput-boolean v2, p0, Lcom/getcapacitor/plugin/Camera;->isEdited:Z

    .line 502
    invoke-virtual {p0, v0, p3}, Lcom/getcapacitor/plugin/Camera;->processPickedImage(Lcom/getcapacitor/PluginCall;Landroid/content/Intent;)V

    goto :goto_0

    :cond_3
    if-nez p2, :cond_4

    .line 503
    iget-object p1, p0, Lcom/getcapacitor/plugin/Camera;->imageFileSavePath:Ljava/lang/String;

    if-eqz p1, :cond_4

    const/4 p1, 0x0

    .line 504
    iput-object p1, p0, Lcom/getcapacitor/plugin/Camera;->imageEditedFileSavePath:Ljava/lang/String;

    .line 505
    iput-boolean v2, p0, Lcom/getcapacitor/plugin/Camera;->isEdited:Z

    .line 506
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Camera;->processCameraImage(Lcom/getcapacitor/PluginCall;)V

    :cond_4
    :goto_0
    return-void
.end method

.method protected handleRequestPermissionsResult(I[Ljava/lang/String;[I)V
    .locals 5

    .line 458
    invoke-super {p0, p1, p2, p3}, Lcom/getcapacitor/Plugin;->handleRequestPermissionsResult(I[Ljava/lang/String;[I)V

    .line 460
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getLogTag()Ljava/lang/String;

    move-result-object v0

    const-string v1, "handling request perms result"

    invoke-static {v0, v1}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 462
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object v0

    if-nez v0, :cond_0

    .line 463
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getLogTag()Ljava/lang/String;

    move-result-object p1

    const-string p2, "No stored plugin call for permissions request result"

    invoke-static {p1, p2}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    return-void

    .line 467
    :cond_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object v0

    const/4 v1, 0x0

    .line 469
    :goto_0
    array-length v2, p3

    if-ge v1, v2, :cond_2

    .line 470
    aget v2, p3, v1

    .line 471
    aget-object v3, p2, v1

    const/4 v4, -0x1

    if-ne v2, v4, :cond_1

    .line 473
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getLogTag()Ljava/lang/String;

    move-result-object p1

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "User denied camera permission: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {p1, p2}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 474
    const-string p1, "Unable to access camera, user denied permission request"

    invoke-virtual {v0, p1}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    :cond_1
    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_2
    const/16 p2, 0x232a

    if-ne p1, p2, :cond_3

    .line 480
    invoke-direct {p0, v0}, Lcom/getcapacitor/plugin/Camera;->doShow(Lcom/getcapacitor/PluginCall;)V

    :cond_3
    return-void
.end method

.method public openCamera(Lcom/getcapacitor/PluginCall;)V
    .locals 5

    .line 205
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Camera;->checkCameraPermissions(Lcom/getcapacitor/PluginCall;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 206
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.media.action.IMAGE_CAPTURE"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 207
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    invoke-virtual {v1}, Landroidx/appcompat/app/AppCompatActivity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/content/Intent;->resolveActivity(Landroid/content/pm/PackageManager;)Landroid/content/ComponentName;

    move-result-object v1

    if-eqz v1, :cond_0

    .line 210
    :try_start_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getAppId()Ljava/lang/String;

    move-result-object v1

    .line 211
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v2

    invoke-static {v2}, Lcom/getcapacitor/plugin/camera/CameraUtils;->createImageFile(Landroid/app/Activity;)Ljava/io/File;

    move-result-object v2

    .line 212
    invoke-virtual {v2}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v3

    iput-object v3, p0, Lcom/getcapacitor/plugin/Camera;->imageFileSavePath:Ljava/lang/String;

    .line 214
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v3

    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v4, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v4, ".fileprovider"

    invoke-virtual {v1, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v3, v1, v2}, Landroidx/core/content/FileProvider;->getUriForFile(Landroid/content/Context;Ljava/lang/String;Ljava/io/File;)Landroid/net/Uri;

    move-result-object v1

    iput-object v1, p0, Lcom/getcapacitor/plugin/Camera;->imageFileUri:Landroid/net/Uri;

    .line 215
    const-string v2, "output"

    invoke-virtual {v0, v2, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Landroid/os/Parcelable;)Landroid/content/Intent;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    const/16 v1, 0x232a

    .line 221
    invoke-virtual {p0, p1, v0, v1}, Lcom/getcapacitor/plugin/Camera;->startActivityForResult(Lcom/getcapacitor/PluginCall;Landroid/content/Intent;I)V

    goto :goto_0

    :catch_0
    move-exception v0

    .line 217
    const-string v1, "Unable to create photo on disk"

    invoke-virtual {p1, v1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    return-void

    .line 223
    :cond_0
    const-string v0, "Unable to resolve camera activity"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    :cond_1
    :goto_0
    return-void
.end method

.method public openPhotos(Lcom/getcapacitor/PluginCall;)V
    .locals 2

    .line 229
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Camera;->checkPhotosPermissions(Lcom/getcapacitor/PluginCall;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 230
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.intent.action.PICK"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 231
    const-string v1, "image/*"

    invoke-virtual {v0, v1}, Landroid/content/Intent;->setType(Ljava/lang/String;)Landroid/content/Intent;

    const/16 v1, 0x232b

    .line 232
    invoke-virtual {p0, p1, v0, v1}, Lcom/getcapacitor/plugin/Camera;->startActivityForResult(Lcom/getcapacitor/PluginCall;Landroid/content/Intent;I)V

    :cond_0
    return-void
.end method

.method public processCameraImage(Lcom/getcapacitor/PluginCall;)V
    .locals 3

    .line 237
    iget-object v0, p0, Lcom/getcapacitor/plugin/Camera;->imageFileSavePath:Ljava/lang/String;

    if-nez v0, :cond_0

    .line 238
    const-string v0, "Unable to process image, file not found on disk"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 242
    :cond_0
    new-instance v0, Ljava/io/File;

    iget-object v1, p0, Lcom/getcapacitor/plugin/Camera;->imageFileSavePath:Ljava/lang/String;

    invoke-direct {v0, v1}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    .line 243
    new-instance v1, Landroid/graphics/BitmapFactory$Options;

    invoke-direct {v1}, Landroid/graphics/BitmapFactory$Options;-><init>()V

    .line 244
    invoke-static {v0}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object v0

    .line 245
    iget-object v2, p0, Lcom/getcapacitor/plugin/Camera;->imageFileSavePath:Ljava/lang/String;

    invoke-static {v2, v1}, Landroid/graphics/BitmapFactory;->decodeFile(Ljava/lang/String;Landroid/graphics/BitmapFactory$Options;)Landroid/graphics/Bitmap;

    move-result-object v1

    if-nez v1, :cond_1

    .line 248
    const-string v0, "User cancelled photos app"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 252
    :cond_1
    invoke-direct {p0, p1, v1, v0}, Lcom/getcapacitor/plugin/Camera;->returnResult(Lcom/getcapacitor/PluginCall;Landroid/graphics/Bitmap;Landroid/net/Uri;)V

    return-void
.end method

.method public processPickedImage(Lcom/getcapacitor/PluginCall;Landroid/content/Intent;)V
    .locals 3

    .line 256
    const-string v0, "Unable to process image"

    if-nez p2, :cond_0

    .line 257
    const-string p2, "No image picked"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 261
    :cond_0
    invoke-virtual {p2}, Landroid/content/Intent;->getData()Landroid/net/Uri;

    move-result-object p2

    const/4 v1, 0x0

    .line 266
    :try_start_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v2

    invoke-virtual {v2}, Landroidx/appcompat/app/AppCompatActivity;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v2

    invoke-virtual {v2, p2}, Landroid/content/ContentResolver;->openInputStream(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object v1

    .line 267
    invoke-static {v1}, Landroid/graphics/BitmapFactory;->decodeStream(Ljava/io/InputStream;)Landroid/graphics/Bitmap;

    move-result-object v2

    if-nez v2, :cond_2

    .line 270
    const-string p2, "Unable to process bitmap"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/OutOfMemoryError; {:try_start_0 .. :try_end_0} :catch_2
    .catch Ljava/io/FileNotFoundException; {:try_start_0 .. :try_end_0} :catch_1
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-eqz v1, :cond_1

    .line 282
    :try_start_1
    invoke-virtual {v1}, Ljava/io/InputStream;->close()V
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 284
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getLogTag()Ljava/lang/String;

    move-result-object p2

    invoke-static {p2, v0, p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :cond_1
    :goto_0
    return-void

    .line 274
    :cond_2
    :try_start_2
    invoke-direct {p0, p1, v2, p2}, Lcom/getcapacitor/plugin/Camera;->returnResult(Lcom/getcapacitor/PluginCall;Landroid/graphics/Bitmap;Landroid/net/Uri;)V
    :try_end_2
    .catch Ljava/lang/OutOfMemoryError; {:try_start_2 .. :try_end_2} :catch_2
    .catch Ljava/io/FileNotFoundException; {:try_start_2 .. :try_end_2} :catch_1
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    if-eqz v1, :cond_3

    .line 282
    :try_start_3
    invoke-virtual {v1}, Ljava/io/InputStream;->close()V
    :try_end_3
    .catch Ljava/io/IOException; {:try_start_3 .. :try_end_3} :catch_3

    goto :goto_1

    :catchall_0
    move-exception p1

    goto :goto_2

    :catch_1
    move-exception p2

    .line 278
    :try_start_4
    const-string v2, "No such image found"

    invoke-virtual {p1, v2, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V
    :try_end_4
    .catchall {:try_start_4 .. :try_end_4} :catchall_0

    if-eqz v1, :cond_3

    .line 282
    :try_start_5
    invoke-virtual {v1}, Ljava/io/InputStream;->close()V
    :try_end_5
    .catch Ljava/io/IOException; {:try_start_5 .. :try_end_5} :catch_3

    goto :goto_1

    .line 276
    :catch_2
    :try_start_6
    const-string p2, "Out of memory"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V
    :try_end_6
    .catchall {:try_start_6 .. :try_end_6} :catchall_0

    if-eqz v1, :cond_3

    .line 282
    :try_start_7
    invoke-virtual {v1}, Ljava/io/InputStream;->close()V
    :try_end_7
    .catch Ljava/io/IOException; {:try_start_7 .. :try_end_7} :catch_3

    goto :goto_1

    :catch_3
    move-exception p1

    .line 284
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getLogTag()Ljava/lang/String;

    move-result-object p2

    invoke-static {p2, v0, p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :cond_3
    :goto_1
    return-void

    :goto_2
    if-eqz v1, :cond_4

    .line 282
    :try_start_8
    invoke-virtual {v1}, Ljava/io/InputStream;->close()V
    :try_end_8
    .catch Ljava/io/IOException; {:try_start_8 .. :try_end_8} :catch_4

    goto :goto_3

    :catch_4
    move-exception p2

    .line 284
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Camera;->getLogTag()Ljava/lang/String;

    move-result-object v1

    invoke-static {v1, v0, p2}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 287
    :cond_4
    :goto_3
    throw p1
.end method

.method protected restoreState(Landroid/os/Bundle;)V
    .locals 1

    .line 560
    const-string v0, "cameraImageFileSavePath"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 562
    iput-object p1, p0, Lcom/getcapacitor/plugin/Camera;->imageFileSavePath:Ljava/lang/String;

    :cond_0
    return-void
.end method

.method protected saveInstanceState()Landroid/os/Bundle;
    .locals 3

    .line 553
    invoke-super {p0}, Lcom/getcapacitor/Plugin;->saveInstanceState()Landroid/os/Bundle;

    move-result-object v0

    .line 554
    const-string v1, "cameraImageFileSavePath"

    iget-object v2, p0, Lcom/getcapacitor/plugin/Camera;->imageFileSavePath:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    return-object v0
.end method
