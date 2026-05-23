.class public Lcom/getcapacitor/BridgeWebChromeClient;
.super Landroid/webkit/WebChromeClient;
.source "BridgeWebChromeClient.java"


# static fields
.field static final FILE_CHOOSER:I = 0x232f

.field static final FILE_CHOOSER_CAMERA_PERMISSION:I = 0x2332

.field static final FILE_CHOOSER_IMAGE_CAPTURE:I = 0x2330

.field static final FILE_CHOOSER_VIDEO_CAPTURE:I = 0x2331

.field static final GET_USER_MEDIA_PERMISSIONS:I = 0x2333


# instance fields
.field private bridge:Lcom/getcapacitor/Bridge;


# direct methods
.method public constructor <init>(Lcom/getcapacitor/Bridge;)V
    .locals 0

    .line 42
    invoke-direct {p0}, Landroid/webkit/WebChromeClient;-><init>()V

    .line 43
    iput-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    return-void
.end method

.method static synthetic access$000(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;Z)V
    .locals 0

    .line 34
    invoke-direct {p0, p1, p2, p3}, Lcom/getcapacitor/BridgeWebChromeClient;->showMediaCaptureOrFilePicker(Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;Z)V

    return-void
.end method

.method private getValidTypes([Ljava/lang/String;)[Ljava/lang/String;
    .locals 6

    .line 333
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 334
    invoke-static {}, Landroid/webkit/MimeTypeMap;->getSingleton()Landroid/webkit/MimeTypeMap;

    move-result-object v1

    .line 335
    array-length v2, p1

    const/4 v3, 0x0

    :goto_0
    if-ge v3, v2, :cond_2

    aget-object v4, p1, v3

    .line 336
    const-string v5, "."

    invoke-virtual {v4, v5}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v5

    if-eqz v5, :cond_0

    const/4 v5, 0x1

    .line 337
    invoke-virtual {v4, v5}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object v4

    .line 338
    invoke-virtual {v1, v4}, Landroid/webkit/MimeTypeMap;->getMimeTypeFromExtension(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    if-eqz v4, :cond_1

    .line 339
    invoke-interface {v0, v4}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v5

    if-nez v5, :cond_1

    .line 340
    invoke-interface {v0, v4}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_1

    .line 342
    :cond_0
    invoke-interface {v0, v4}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v5

    if-nez v5, :cond_1

    .line 343
    invoke-interface {v0, v4}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    :cond_1
    :goto_1
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 346
    :cond_2
    invoke-interface {v0}, Ljava/util/List;->toArray()[Ljava/lang/Object;

    move-result-object p1

    .line 347
    array-length v0, p1

    const-class v1, [Ljava/lang/String;

    invoke-static {p1, v0, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;ILjava/lang/Class;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Ljava/lang/String;

    return-object p1
.end method

.method private isMediaCaptureSupported()Z
    .locals 3

    .line 228
    iget-object v0, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    const-string v1, "Camera"

    invoke-virtual {v0, v1}, Lcom/getcapacitor/Bridge;->getPlugin(Ljava/lang/String;)Lcom/getcapacitor/PluginHandle;

    move-result-object v0

    invoke-virtual {v0}, Lcom/getcapacitor/PluginHandle;->getInstance()Lcom/getcapacitor/Plugin;

    move-result-object v0

    .line 229
    const-string v1, "android.permission.CAMERA"

    invoke-virtual {v0, v1}, Lcom/getcapacitor/Plugin;->hasPermission(Ljava/lang/String;)Z

    move-result v2

    if-nez v2, :cond_1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/Plugin;->hasDefinedPermission(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    :goto_1
    return v0
.end method

.method private showFilePicker(Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/ValueCallback<",
            "[",
            "Landroid/net/Uri;",
            ">;",
            "Landroid/webkit/WebChromeClient$FileChooserParams;",
            ")V"
        }
    .end annotation

    .line 301
    invoke-virtual {p2}, Landroid/webkit/WebChromeClient$FileChooserParams;->createIntent()Landroid/content/Intent;

    move-result-object v0

    .line 302
    invoke-virtual {p2}, Landroid/webkit/WebChromeClient$FileChooserParams;->getMode()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_0

    .line 303
    const-string v1, "android.intent.extra.ALLOW_MULTIPLE"

    invoke-virtual {v0, v1, v2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Z)Landroid/content/Intent;

    .line 305
    :cond_0
    invoke-virtual {p2}, Landroid/webkit/WebChromeClient$FileChooserParams;->getAcceptTypes()[Ljava/lang/String;

    move-result-object v1

    array-length v1, v1

    if-le v1, v2, :cond_1

    .line 306
    invoke-virtual {p2}, Landroid/webkit/WebChromeClient$FileChooserParams;->getAcceptTypes()[Ljava/lang/String;

    move-result-object p2

    invoke-direct {p0, p2}, Lcom/getcapacitor/BridgeWebChromeClient;->getValidTypes([Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p2

    .line 307
    const-string v1, "android.intent.extra.MIME_TYPES"

    invoke-virtual {v0, v1, p2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;[Ljava/lang/String;)Landroid/content/Intent;

    .line 310
    :cond_1
    :try_start_0
    iget-object p2, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    iget-object p2, p2, Lcom/getcapacitor/Bridge;->cordovaInterface:Lorg/apache/cordova/CordovaInterfaceImpl;

    new-instance v1, Lcom/getcapacitor/BridgeWebChromeClient$8;

    invoke-direct {v1, p0, p1}, Lcom/getcapacitor/BridgeWebChromeClient$8;-><init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/ValueCallback;)V

    const/16 v2, 0x232f

    invoke-virtual {p2, v1, v0, v2}, Lorg/apache/cordova/CordovaInterfaceImpl;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V
    :try_end_0
    .catch Landroid/content/ActivityNotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    const/4 p2, 0x0

    .line 328
    invoke-interface {p1, p2}, Landroid/webkit/ValueCallback;->onReceiveValue(Ljava/lang/Object;)V

    :goto_0
    return-void
.end method

.method private showImageCapturePicker(Landroid/webkit/ValueCallback;)Z
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/ValueCallback<",
            "[",
            "Landroid/net/Uri;",
            ">;)Z"
        }
    .end annotation

    .line 252
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.media.action.IMAGE_CAPTURE"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 253
    iget-object v1, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/content/Intent;->resolveActivity(Landroid/content/pm/PackageManager;)Landroid/content/ComponentName;

    move-result-object v1

    const/4 v2, 0x0

    if-nez v1, :cond_0

    return v2

    .line 259
    :cond_0
    :try_start_0
    iget-object v1, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object v1

    iget-object v3, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v3}, Lcom/getcapacitor/Bridge;->getContext()Landroid/content/Context;

    move-result-object v3

    invoke-virtual {v3}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v3

    invoke-static {v1, v3}, Lcom/getcapacitor/plugin/camera/CameraUtils;->createImageFileUri(Landroid/app/Activity;Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    .line 264
    const-string v2, "output"

    invoke-virtual {v0, v2, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Landroid/os/Parcelable;)Landroid/content/Intent;

    .line 266
    iget-object v2, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    iget-object v2, v2, Lcom/getcapacitor/Bridge;->cordovaInterface:Lorg/apache/cordova/CordovaInterfaceImpl;

    new-instance v3, Lcom/getcapacitor/BridgeWebChromeClient$6;

    invoke-direct {v3, p0, v1, p1}, Lcom/getcapacitor/BridgeWebChromeClient$6;-><init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/net/Uri;Landroid/webkit/ValueCallback;)V

    const/16 p1, 0x2330

    invoke-virtual {v2, v3, v0, p1}, Lorg/apache/cordova/CordovaInterfaceImpl;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V

    const/4 p1, 0x1

    return p1

    :catch_0
    move-exception p1

    .line 261
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Unable to create temporary media capture file: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;)V

    return v2
.end method

.method private showMediaCaptureOrFilePicker(Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;Z)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/ValueCallback<",
            "[",
            "Landroid/net/Uri;",
            ">;",
            "Landroid/webkit/WebChromeClient$FileChooserParams;",
            "Z)V"
        }
    .end annotation

    if-eqz p3, :cond_0

    .line 241
    invoke-direct {p0, p1}, Lcom/getcapacitor/BridgeWebChromeClient;->showVideoCapturePicker(Landroid/webkit/ValueCallback;)Z

    move-result p3

    goto :goto_0

    .line 243
    :cond_0
    invoke-direct {p0, p1}, Lcom/getcapacitor/BridgeWebChromeClient;->showImageCapturePicker(Landroid/webkit/ValueCallback;)Z

    move-result p3

    :goto_0
    if-nez p3, :cond_1

    const/4 p3, 0x1

    .line 246
    new-array p3, p3, [Ljava/lang/String;

    const/4 v0, 0x0

    const-string v1, "FileChooser"

    aput-object v1, p3, v0

    invoke-static {p3}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object p3

    const-string v0, "Media capture intent could not be launched. Falling back to default file picker."

    invoke-static {p3, v0}, Lcom/getcapacitor/Logger;->warn(Ljava/lang/String;Ljava/lang/String;)V

    .line 247
    invoke-direct {p0, p1, p2}, Lcom/getcapacitor/BridgeWebChromeClient;->showFilePicker(Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;)V

    :cond_1
    return-void
.end method

.method private showVideoCapturePicker(Landroid/webkit/ValueCallback;)Z
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/ValueCallback<",
            "[",
            "Landroid/net/Uri;",
            ">;)Z"
        }
    .end annotation

    .line 281
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.media.action.VIDEO_CAPTURE"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 282
    iget-object v1, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/content/Intent;->resolveActivity(Landroid/content/pm/PackageManager;)Landroid/content/ComponentName;

    move-result-object v1

    if-nez v1, :cond_0

    const/4 p1, 0x0

    return p1

    .line 286
    :cond_0
    iget-object v1, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    iget-object v1, v1, Lcom/getcapacitor/Bridge;->cordovaInterface:Lorg/apache/cordova/CordovaInterfaceImpl;

    new-instance v2, Lcom/getcapacitor/BridgeWebChromeClient$7;

    invoke-direct {v2, p0, p1}, Lcom/getcapacitor/BridgeWebChromeClient$7;-><init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/ValueCallback;)V

    const/16 p1, 0x2331

    invoke-virtual {v1, v2, v0, p1}, Lorg/apache/cordova/CordovaInterfaceImpl;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V

    const/4 p1, 0x1

    return p1
.end method


# virtual methods
.method public isValidMsg(Ljava/lang/String;)Z
    .locals 1

    .line 370
    const-string v0, "%cresult %c"

    invoke-virtual {p1, v0}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v0

    if-nez v0, :cond_0

    const-string v0, "%cnative %c"

    invoke-virtual {p1, v0}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v0

    if-nez v0, :cond_0

    const-string v0, "[object Object]"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_0

    const-string v0, "console.groupEnd"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result p1

    if-nez p1, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return p1
.end method

.method public onConsoleMessage(Landroid/webkit/ConsoleMessage;)Z
    .locals 5

    const/4 v0, 0x1

    .line 352
    new-array v1, v0, [Ljava/lang/String;

    const/4 v2, 0x0

    const-string v3, "Console"

    aput-object v3, v1, v2

    invoke-static {v1}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 353
    invoke-virtual {p1}, Landroid/webkit/ConsoleMessage;->message()Ljava/lang/String;

    move-result-object v2

    if-eqz v2, :cond_3

    invoke-virtual {p1}, Landroid/webkit/ConsoleMessage;->message()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {p0, v2}, Lcom/getcapacitor/BridgeWebChromeClient;->isValidMsg(Ljava/lang/String;)Z

    move-result v2

    if-eqz v2, :cond_3

    .line 354
    invoke-virtual {p1}, Landroid/webkit/ConsoleMessage;->sourceId()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {p1}, Landroid/webkit/ConsoleMessage;->lineNumber()I

    move-result v3

    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    invoke-virtual {p1}, Landroid/webkit/ConsoleMessage;->message()Ljava/lang/String;

    move-result-object v4

    filled-new-array {v2, v3, v4}, [Ljava/lang/Object;

    move-result-object v2

    const-string v3, "File: %s - Line %d - Msg: %s"

    invoke-static {v3, v2}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    .line 355
    invoke-virtual {p1}, Landroid/webkit/ConsoleMessage;->messageLevel()Landroid/webkit/ConsoleMessage$MessageLevel;

    move-result-object p1

    invoke-virtual {p1}, Landroid/webkit/ConsoleMessage$MessageLevel;->name()Ljava/lang/String;

    move-result-object p1

    .line 356
    const-string v3, "ERROR"

    invoke-virtual {v3, p1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v3

    if-eqz v3, :cond_0

    const/4 p1, 0x0

    .line 357
    invoke-static {v1, v2, p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    goto :goto_0

    .line 358
    :cond_0
    const-string v3, "WARNING"

    invoke-virtual {v3, p1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v3

    if-eqz v3, :cond_1

    .line 359
    invoke-static {v1, v2}, Lcom/getcapacitor/Logger;->warn(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_0

    .line 360
    :cond_1
    const-string v3, "TIP"

    invoke-virtual {v3, p1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_2

    .line 361
    invoke-static {v1, v2}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_0

    .line 363
    :cond_2
    invoke-static {v1, v2}, Lcom/getcapacitor/Logger;->info(Ljava/lang/String;Ljava/lang/String;)V

    :cond_3
    :goto_0
    return v0
.end method

.method public onGeolocationPermissionsShowPrompt(Ljava/lang/String;Landroid/webkit/GeolocationPermissions$Callback;)V
    .locals 2

    .line 182
    invoke-super {p0, p1, p2}, Landroid/webkit/WebChromeClient;->onGeolocationPermissionsShowPrompt(Ljava/lang/String;Landroid/webkit/GeolocationPermissions$Callback;)V

    .line 183
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "onGeolocationPermissionsShowPrompt: DOING IT HERE FOR ORIGIN: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    const/4 v0, 0x1

    const/4 v1, 0x0

    .line 186
    invoke-interface {p2, p1, v0, v1}, Landroid/webkit/GeolocationPermissions$Callback;->invoke(Ljava/lang/String;ZZ)V

    .line 188
    iget-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    const-string p2, "Geolocation"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/Bridge;->getPlugin(Ljava/lang/String;)Lcom/getcapacitor/PluginHandle;

    move-result-object p1

    invoke-virtual {p1}, Lcom/getcapacitor/PluginHandle;->getInstance()Lcom/getcapacitor/Plugin;

    move-result-object p1

    .line 189
    invoke-virtual {p1}, Lcom/getcapacitor/Plugin;->hasRequiredPermissions()Z

    move-result p2

    if-nez p2, :cond_0

    .line 190
    invoke-virtual {p1}, Lcom/getcapacitor/Plugin;->pluginRequestAllPermissions()V

    goto :goto_0

    .line 192
    :cond_0
    const-string p1, "onGeolocationPermissionsShowPrompt: has required permis"

    invoke-static {p1}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method public onHideCustomView()V
    .locals 0

    .line 54
    invoke-super {p0}, Landroid/webkit/WebChromeClient;->onHideCustomView()V

    return-void
.end method

.method public onJsAlert(Landroid/webkit/WebView;Ljava/lang/String;Ljava/lang/String;Landroid/webkit/JsResult;)Z
    .locals 1

    .line 100
    iget-object p2, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {p2}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object p2

    invoke-virtual {p2}, Landroid/app/Activity;->isFinishing()Z

    move-result p2

    const/4 v0, 0x1

    if-eqz p2, :cond_0

    return v0

    .line 104
    :cond_0
    invoke-virtual {p1}, Landroid/webkit/WebView;->getContext()Landroid/content/Context;

    move-result-object p1

    new-instance p2, Lcom/getcapacitor/BridgeWebChromeClient$2;

    invoke-direct {p2, p0, p4}, Lcom/getcapacitor/BridgeWebChromeClient$2;-><init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/JsResult;)V

    invoke-static {p1, p3, p2}, Lcom/getcapacitor/Dialogs;->alert(Landroid/content/Context;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V

    return v0
.end method

.method public onJsConfirm(Landroid/webkit/WebView;Ljava/lang/String;Ljava/lang/String;Landroid/webkit/JsResult;)Z
    .locals 1

    .line 128
    iget-object p2, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {p2}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object p2

    invoke-virtual {p2}, Landroid/app/Activity;->isFinishing()Z

    move-result p2

    const/4 v0, 0x1

    if-eqz p2, :cond_0

    return v0

    .line 132
    :cond_0
    invoke-virtual {p1}, Landroid/webkit/WebView;->getContext()Landroid/content/Context;

    move-result-object p1

    new-instance p2, Lcom/getcapacitor/BridgeWebChromeClient$3;

    invoke-direct {p2, p0, p4}, Lcom/getcapacitor/BridgeWebChromeClient$3;-><init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/JsResult;)V

    invoke-static {p1, p3, p2}, Lcom/getcapacitor/Dialogs;->confirm(Landroid/content/Context;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V

    return v0
.end method

.method public onJsPrompt(Landroid/webkit/WebView;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Landroid/webkit/JsPromptResult;)Z
    .locals 0

    .line 157
    iget-object p2, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {p2}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object p2

    invoke-virtual {p2}, Landroid/app/Activity;->isFinishing()Z

    move-result p2

    const/4 p4, 0x1

    if-eqz p2, :cond_0

    return p4

    .line 161
    :cond_0
    invoke-virtual {p1}, Landroid/webkit/WebView;->getContext()Landroid/content/Context;

    move-result-object p1

    new-instance p2, Lcom/getcapacitor/BridgeWebChromeClient$4;

    invoke-direct {p2, p0, p5}, Lcom/getcapacitor/BridgeWebChromeClient$4;-><init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/JsPromptResult;)V

    invoke-static {p1, p3, p2}, Lcom/getcapacitor/Dialogs;->prompt(Landroid/content/Context;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V

    return p4
.end method

.method public onPermissionRequest(Landroid/webkit/PermissionRequest;)V
    .locals 3

    .line 61
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 62
    invoke-virtual {p1}, Landroid/webkit/PermissionRequest;->getResources()[Ljava/lang/String;

    move-result-object v1

    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v1

    const-string v2, "android.webkit.resource.VIDEO_CAPTURE"

    invoke-interface {v1, v2}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 63
    const-string v1, "android.permission.CAMERA"

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 65
    :cond_0
    invoke-virtual {p1}, Landroid/webkit/PermissionRequest;->getResources()[Ljava/lang/String;

    move-result-object v1

    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v1

    const-string v2, "android.webkit.resource.AUDIO_CAPTURE"

    invoke-interface {v1, v2}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 66
    const-string v1, "android.permission.MODIFY_AUDIO_SETTINGS"

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 67
    const-string v1, "android.permission.RECORD_AUDIO"

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 69
    :cond_1
    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result v1

    if-nez v1, :cond_2

    const/4 v1, 0x0

    .line 70
    new-array v1, v1, [Ljava/lang/String;

    invoke-interface {v0, v1}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Ljava/lang/String;

    .line 71
    iget-object v1, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    iget-object v1, v1, Lcom/getcapacitor/Bridge;->cordovaInterface:Lorg/apache/cordova/CordovaInterfaceImpl;

    new-instance v2, Lcom/getcapacitor/BridgeWebChromeClient$1;

    invoke-direct {v2, p0, p1}, Lcom/getcapacitor/BridgeWebChromeClient$1;-><init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/PermissionRequest;)V

    const/16 p1, 0x2333

    invoke-virtual {v1, v2, p1, v0}, Lorg/apache/cordova/CordovaInterfaceImpl;->requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V

    goto :goto_0

    .line 86
    :cond_2
    invoke-virtual {p1}, Landroid/webkit/PermissionRequest;->getResources()[Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Landroid/webkit/PermissionRequest;->grant([Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method public onShowCustomView(Landroid/view/View;Landroid/webkit/WebChromeClient$CustomViewCallback;)V
    .locals 0

    .line 48
    invoke-interface {p2}, Landroid/webkit/WebChromeClient$CustomViewCallback;->onCustomViewHidden()V

    .line 49
    invoke-super {p0, p1, p2}, Landroid/webkit/WebChromeClient;->onShowCustomView(Landroid/view/View;Landroid/webkit/WebChromeClient$CustomViewCallback;)V

    return-void
.end method

.method public onShowFileChooser(Landroid/webkit/WebView;Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;)Z
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/WebView;",
            "Landroid/webkit/ValueCallback<",
            "[",
            "Landroid/net/Uri;",
            ">;",
            "Landroid/webkit/WebChromeClient$FileChooserParams;",
            ")Z"
        }
    .end annotation

    .line 198
    invoke-virtual {p3}, Landroid/webkit/WebChromeClient$FileChooserParams;->getAcceptTypes()[Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object p1

    .line 199
    invoke-virtual {p3}, Landroid/webkit/WebChromeClient$FileChooserParams;->isCaptureEnabled()Z

    move-result v0

    const/4 v1, 0x0

    const/4 v2, 0x1

    if-eqz v0, :cond_0

    .line 200
    const-string v3, "image/*"

    invoke-interface {p1, v3}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_0

    move v3, v2

    goto :goto_0

    :cond_0
    move v3, v1

    :goto_0
    if-eqz v0, :cond_1

    .line 201
    const-string v0, "video/*"

    invoke-interface {p1, v0}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_1

    move v1, v2

    :cond_1
    if-nez v3, :cond_3

    if-eqz v1, :cond_2

    goto :goto_1

    .line 221
    :cond_2
    invoke-direct {p0, p2, p3}, Lcom/getcapacitor/BridgeWebChromeClient;->showFilePicker(Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;)V

    goto :goto_2

    .line 203
    :cond_3
    :goto_1
    invoke-direct {p0}, Lcom/getcapacitor/BridgeWebChromeClient;->isMediaCaptureSupported()Z

    move-result p1

    if-eqz p1, :cond_4

    .line 204
    invoke-direct {p0, p2, p3, v1}, Lcom/getcapacitor/BridgeWebChromeClient;->showMediaCaptureOrFilePicker(Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;Z)V

    goto :goto_2

    .line 206
    :cond_4
    iget-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient;->bridge:Lcom/getcapacitor/Bridge;

    iget-object p1, p1, Lcom/getcapacitor/Bridge;->cordovaInterface:Lorg/apache/cordova/CordovaInterfaceImpl;

    new-instance v0, Lcom/getcapacitor/BridgeWebChromeClient$5;

    invoke-direct {v0, p0, p2, p3, v1}, Lcom/getcapacitor/BridgeWebChromeClient$5;-><init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;Z)V

    const/16 p2, 0x2332

    const-string p3, "android.permission.CAMERA"

    invoke-virtual {p1, v0, p2, p3}, Lorg/apache/cordova/CordovaInterfaceImpl;->requestPermission(Lorg/apache/cordova/CordovaPlugin;ILjava/lang/String;)V

    :goto_2
    return v2
.end method
