.class public Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;
.super Ljava/lang/Object;
.source "WBH5FaceVerifySDK.java"


# static fields
.field private static final NETWORK_2G:Ljava/lang/String; = "NETWORK_2G"

.field private static final NETWORK_3G:Ljava/lang/String; = "NETWORK_3G"

.field private static final NETWORK_4G:Ljava/lang/String; = "NETWORK_4G"

.field private static final NETWORK_MOBILE:Ljava/lang/String; = "NETWORK_MOBILE"

.field private static final NETWORK_NONE:Ljava/lang/String; = "NETWORK_NONE"

.field private static final NETWORK_WIFI:Ljava/lang/String; = "NETWORK_WIFI"

.field private static final VIDEO_REQUEST:I = 0x11

.field private static instance:Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;


# instance fields
.field private final REQUEST_CODE_CAMERA:I

.field private final REQUEST_CODE_WRITE_EXTERNAL_STORAGE:I

.field private final VIDEO_WITH_CAMERA:I

.field private final activity:Landroid/app/Activity;

.field private final context:Landroid/content/Context;

.field private final cordova:Lorg/apache/cordova/CordovaInterface;

.field private mUploadCallbackAboveL:Landroid/webkit/ValueCallback;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroid/webkit/ValueCallback<",
            "[",
            "Landroid/net/Uri;",
            ">;"
        }
    .end annotation
.end field

.field private mUploadMessage:Landroid/webkit/ValueCallback;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroid/webkit/ValueCallback<",
            "Landroid/net/Uri;",
            ">;"
        }
    .end annotation
.end field

.field private final plugin:Lorg/apache/cordova/CordovaPlugin;


# direct methods
.method private constructor <init>(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/inappbrowser/InAppBrowser;)V
    .locals 1

    .line 134
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/16 v0, 0x3e9

    .line 51
    iput v0, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->VIDEO_WITH_CAMERA:I

    const/16 v0, 0x3eb

    .line 53
    iput v0, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->REQUEST_CODE_CAMERA:I

    const/16 v0, 0x3ec

    .line 54
    iput v0, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->REQUEST_CODE_WRITE_EXTERNAL_STORAGE:I

    .line 135
    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->context:Landroid/content/Context;

    .line 136
    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->activity:Landroid/app/Activity;

    .line 137
    iput-object p1, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->cordova:Lorg/apache/cordova/CordovaInterface;

    .line 138
    iput-object p2, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->plugin:Lorg/apache/cordova/CordovaPlugin;

    return-void
.end method

.method public static declared-synchronized getInstance(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/inappbrowser/InAppBrowser;)Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;
    .locals 2

    const-class v0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;

    monitor-enter v0

    .line 128
    :try_start_0
    sget-object v1, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->instance:Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;

    if-nez v1, :cond_0

    .line 129
    new-instance v1, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;

    invoke-direct {v1, p0, p1}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;-><init>(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/inappbrowser/InAppBrowser;)V

    sput-object v1, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->instance:Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;

    .line 131
    :cond_0
    sget-object p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->instance:Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    monitor-exit v0

    return-object p0

    :catchall_0
    move-exception p0

    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p0
.end method

.method public static getInstanceWithoutCreate()Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;
    .locals 1

    .line 305
    sget-object v0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->instance:Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;

    return-object v0
.end method

.method private static getNetWorkState(Landroid/content/Context;)Ljava/lang/String;
    .locals 4

    .line 63
    const-string v0, "connectivity"

    invoke-virtual {p0, v0}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Landroid/net/ConnectivityManager;

    .line 65
    const-string v0, "NETWORK_NONE"

    if-nez p0, :cond_0

    return-object v0

    .line 69
    :cond_0
    invoke-virtual {p0}, Landroid/net/ConnectivityManager;->getActiveNetworkInfo()Landroid/net/NetworkInfo;

    move-result-object v1

    if-eqz v1, :cond_7

    .line 70
    invoke-virtual {v1}, Landroid/net/NetworkInfo;->isAvailable()Z

    move-result v2

    if-nez v2, :cond_1

    goto :goto_1

    :cond_1
    const/4 v2, 0x1

    .line 75
    invoke-virtual {p0, v2}, Landroid/net/ConnectivityManager;->getNetworkInfo(I)Landroid/net/NetworkInfo;

    move-result-object v2

    if-eqz v2, :cond_3

    .line 77
    invoke-virtual {v2}, Landroid/net/NetworkInfo;->getState()Landroid/net/NetworkInfo$State;

    move-result-object v2

    if-eqz v2, :cond_3

    .line 79
    sget-object v3, Landroid/net/NetworkInfo$State;->CONNECTED:Landroid/net/NetworkInfo$State;

    if-eq v2, v3, :cond_2

    sget-object v3, Landroid/net/NetworkInfo$State;->CONNECTING:Landroid/net/NetworkInfo$State;

    if-ne v2, v3, :cond_3

    .line 80
    :cond_2
    const-string p0, "NETWORK_WIFI"

    return-object p0

    :cond_3
    const/4 v2, 0x0

    .line 85
    invoke-virtual {p0, v2}, Landroid/net/ConnectivityManager;->getNetworkInfo(I)Landroid/net/NetworkInfo;

    move-result-object p0

    if-eqz p0, :cond_7

    .line 88
    invoke-virtual {p0}, Landroid/net/NetworkInfo;->getState()Landroid/net/NetworkInfo$State;

    move-result-object v2

    .line 89
    invoke-virtual {p0}, Landroid/net/NetworkInfo;->getSubtypeName()Ljava/lang/String;

    move-result-object p0

    if-eqz v2, :cond_7

    .line 91
    sget-object v3, Landroid/net/NetworkInfo$State;->CONNECTED:Landroid/net/NetworkInfo$State;

    if-eq v2, v3, :cond_4

    sget-object v3, Landroid/net/NetworkInfo$State;->CONNECTING:Landroid/net/NetworkInfo$State;

    if-ne v2, v3, :cond_7

    .line 92
    :cond_4
    invoke-virtual {v1}, Landroid/net/NetworkInfo;->getSubtype()I

    move-result v0

    const-string v1, "NETWORK_3G"

    packed-switch v0, :pswitch_data_0

    .line 116
    const-string v0, "TD-SCDMA"

    invoke-virtual {p0, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_6

    const-string v0, "WCDMA"

    invoke-virtual {p0, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_6

    const-string v0, "CDMA2000"

    invoke-virtual {p0, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result p0

    if-eqz p0, :cond_5

    goto :goto_0

    .line 113
    :pswitch_0
    const-string p0, "NETWORK_4G"

    return-object p0

    :pswitch_1
    return-object v1

    .line 99
    :pswitch_2
    const-string p0, "NETWORK_2G"

    return-object p0

    .line 119
    :cond_5
    const-string p0, "NETWORK_MOBILE"

    return-object p0

    :cond_6
    :goto_0
    return-object v1

    :cond_7
    :goto_1
    return-object v0

    nop

    :pswitch_data_0
    .packed-switch 0x1
        :pswitch_2
        :pswitch_2
        :pswitch_1
        :pswitch_2
        :pswitch_1
        :pswitch_1
        :pswitch_2
        :pswitch_1
        :pswitch_1
        :pswitch_1
        :pswitch_2
        :pswitch_1
        :pswitch_0
        :pswitch_1
        :pswitch_1
    .end packed-switch
.end method

.method private getRequestPermissions()[Ljava/lang/String;
    .locals 6

    .line 267
    invoke-direct {p0}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->getWriteExternalStoragePermissions()[Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x1

    .line 268
    new-array v2, v1, [Ljava/lang/String;

    const-string v3, "android.permission.CAMERA"

    const/4 v4, 0x0

    aput-object v3, v2, v4

    .line 270
    array-length v3, v0

    add-int/2addr v3, v1

    new-array v3, v3, [Ljava/lang/String;

    .line 271
    array-length v5, v0

    invoke-static {v0, v4, v3, v4, v5}, Ljava/lang/System;->arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V

    .line 272
    array-length v0, v0

    invoke-static {v2, v4, v3, v0, v1}, Ljava/lang/System;->arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V

    return-object v3
.end method

.method private getWriteExternalStoragePermissions()[Ljava/lang/String;
    .locals 3

    const/4 v0, 0x1

    .line 261
    new-array v0, v0, [Ljava/lang/String;

    const/4 v1, 0x0

    const-string v2, "android.permission.WRITE_EXTERNAL_STORAGE"

    aput-object v2, v0, v1

    return-object v0
.end method

.method private hasWriteExternalStoragePermission()Z
    .locals 2

    .line 252
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x21

    if-lt v0, v1, :cond_0

    const/4 v0, 0x1

    return v0

    .line 255
    :cond_0
    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string v1, "android.permission.WRITE_EXTERNAL_STORAGE"

    invoke-interface {v0, v1}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result v0

    return v0
.end method

.method private recordVideo()V
    .locals 0

    .line 226
    invoke-virtual {p0}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->requestPermission()V

    return-void
.end method

.method private recordVideoPersmission()V
    .locals 3

    .line 231
    :try_start_0
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.media.action.VIDEO_CAPTURE"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 232
    const-string v1, "android.intent.extra.videoQuality"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 233
    invoke-virtual {v0, v2}, Landroid/content/Intent;->addFlags(I)Landroid/content/Intent;

    .line 234
    const-string v1, "android.intent.extras.CAMERA_FACING"

    invoke-virtual {v0, v1, v2}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 235
    iget-object v1, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->activity:Landroid/app/Activity;

    const/16 v2, 0x11

    invoke-virtual {v1, v0, v2}, Landroid/app/Activity;->startActivityForResult(Landroid/content/Intent;I)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 237
    invoke-virtual {v0}, Ljava/lang/Exception;->printStackTrace()V

    :goto_0
    return-void
.end method

.method private setmUploadCallbackAboveL(Landroid/webkit/ValueCallback;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/ValueCallback<",
            "[",
            "Landroid/net/Uri;",
            ">;)V"
        }
    .end annotation

    .line 247
    iput-object p1, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->mUploadCallbackAboveL:Landroid/webkit/ValueCallback;

    return-void
.end method

.method private setmUploadMessage(Landroid/webkit/ValueCallback;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/ValueCallback<",
            "Landroid/net/Uri;",
            ">;)V"
        }
    .end annotation

    .line 243
    iput-object p1, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->mUploadMessage:Landroid/webkit/ValueCallback;

    return-void
.end method


# virtual methods
.method public onRequestPermissionsResult(I[Ljava/lang/String;[I)V
    .locals 4

    const/16 v0, 0x3eb

    if-eq p1, v0, :cond_0

    const/16 v0, 0x3ec

    if-ne p1, v0, :cond_2

    :cond_0
    const/4 p1, 0x0

    move v0, p1

    .line 292
    :goto_0
    array-length v1, p2

    if-ge v0, v1, :cond_2

    .line 293
    aget v1, p3, v0

    if-nez v1, :cond_1

    .line 294
    invoke-direct {p0}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->recordVideoPersmission()V

    goto :goto_1

    .line 296
    :cond_1
    aget-object v1, p2, v0

    .line 297
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Permission failed:"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    const-string v2, "InAppBrowser"

    invoke-static {v2, v1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    .line 298
    iget-object v1, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->activity:Landroid/app/Activity;

    const-string v2, "\u6743\u9650\u7533\u8bf7\u5931\u8d25"

    invoke-static {v1, v2, p1}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;

    move-result-object v1

    invoke-virtual {v1}, Landroid/widget/Toast;->show()V

    :goto_1
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    :cond_2
    return-void
.end method

.method public receiveH5FaceVerifyResult(IILandroid/content/Intent;)Z
    .locals 3

    const/16 v0, 0x11

    const/4 v1, 0x0

    if-ne p1, v0, :cond_5

    .line 185
    iget-object p1, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->mUploadMessage:Landroid/webkit/ValueCallback;

    const/4 v0, 0x1

    if-nez p1, :cond_0

    iget-object p1, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->mUploadCallbackAboveL:Landroid/webkit/ValueCallback;

    if-nez p1, :cond_0

    return v0

    :cond_0
    const/4 p1, 0x0

    if-eqz p3, :cond_2

    const/4 v2, -0x1

    if-eq p2, v2, :cond_1

    goto :goto_0

    .line 188
    :cond_1
    invoke-virtual {p3}, Landroid/content/Intent;->getData()Landroid/net/Uri;

    move-result-object p2

    goto :goto_1

    :cond_2
    :goto_0
    move-object p2, p1

    :goto_1
    if-nez p2, :cond_3

    move-object p3, p1

    goto :goto_2

    .line 189
    :cond_3
    new-array p3, v0, [Landroid/net/Uri;

    aput-object p2, p3, v1

    .line 190
    :goto_2
    iget-object v1, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->mUploadCallbackAboveL:Landroid/webkit/ValueCallback;

    if-eqz v1, :cond_4

    .line 191
    invoke-interface {v1, p3}, Landroid/webkit/ValueCallback;->onReceiveValue(Ljava/lang/Object;)V

    .line 192
    invoke-direct {p0, p1}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->setmUploadCallbackAboveL(Landroid/webkit/ValueCallback;)V

    goto :goto_3

    .line 194
    :cond_4
    iget-object p3, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->mUploadMessage:Landroid/webkit/ValueCallback;

    invoke-interface {p3, p2}, Landroid/webkit/ValueCallback;->onReceiveValue(Ljava/lang/Object;)V

    .line 195
    invoke-direct {p0, p1}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->setmUploadMessage(Landroid/webkit/ValueCallback;)V

    :goto_3
    return v0

    :cond_5
    return v1
.end method

.method public recordVideoForApi21(Landroid/webkit/WebView;Landroid/webkit/ValueCallback;Landroid/app/Activity;Landroid/webkit/WebChromeClient$FileChooserParams;)Z
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/WebView;",
            "Landroid/webkit/ValueCallback<",
            "[",
            "Landroid/net/Uri;",
            ">;",
            "Landroid/app/Activity;",
            "Landroid/webkit/WebChromeClient$FileChooserParams;",
            ")Z"
        }
    .end annotation

    .line 213
    new-instance p3, Ljava/lang/StringBuilder;

    const-string v0, "accept is "

    invoke-direct {p3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p4}, Landroid/webkit/WebChromeClient$FileChooserParams;->getAcceptTypes()[Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x0

    aget-object v0, v0, v1

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    const-string v0, "---url---"

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p1}, Landroid/webkit/WebView;->getUrl()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p3

    const-string v0, "faceVerify"

    invoke-static {v0, p3}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 214
    invoke-virtual {p4}, Landroid/webkit/WebChromeClient$FileChooserParams;->getAcceptTypes()[Ljava/lang/String;

    move-result-object p3

    aget-object p3, p3, v1

    const-string p4, "video/webank"

    invoke-virtual {p4, p3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-nez p3, :cond_1

    invoke-virtual {p1}, Landroid/webkit/WebView;->getUrl()Ljava/lang/String;

    move-result-object p1

    const-string p3, "https://ida.webank.com/"

    invoke-virtual {p1, p3}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    goto :goto_0

    :cond_0
    return v1

    .line 215
    :cond_1
    :goto_0
    invoke-direct {p0, p2}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->setmUploadCallbackAboveL(Landroid/webkit/ValueCallback;)V

    .line 216
    invoke-direct {p0}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->recordVideo()V

    const/4 p1, 0x1

    return p1
.end method

.method public recordVideoForApiBelow21(Landroid/webkit/ValueCallback;Ljava/lang/String;Landroid/app/Activity;)Z
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/ValueCallback<",
            "Landroid/net/Uri;",
            ">;",
            "Ljava/lang/String;",
            "Landroid/app/Activity;",
            ")Z"
        }
    .end annotation

    .line 203
    const-string p3, "video/webank"

    invoke-virtual {p3, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_0

    .line 204
    invoke-direct {p0, p1}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->setmUploadMessage(Landroid/webkit/ValueCallback;)V

    .line 205
    invoke-direct {p0}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->recordVideo()V

    const/4 p1, 0x1

    return p1

    :cond_0
    const/4 p1, 0x0

    return p1
.end method

.method public requestPermission()V
    .locals 4

    .line 282
    invoke-direct {p0}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->hasWriteExternalStoragePermission()Z

    move-result v0

    if-eqz v0, :cond_0

    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string v1, "android.permission.CAMERA"

    invoke-interface {v0, v1}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 283
    invoke-direct {p0}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->recordVideoPersmission()V

    goto :goto_0

    .line 285
    :cond_0
    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->cordova:Lorg/apache/cordova/CordovaInterface;

    iget-object v1, p0, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->plugin:Lorg/apache/cordova/CordovaPlugin;

    const/16 v2, 0x3eb

    invoke-direct {p0}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->getRequestPermissions()[Ljava/lang/String;

    move-result-object v3

    invoke-interface {v0, v1, v2, v3}, Lorg/apache/cordova/CordovaInterface;->requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method public setWebViewSettings(Landroid/webkit/WebView;Landroid/content/Context;)V
    .locals 5

    if-nez p1, :cond_0

    return-void

    .line 144
    :cond_0
    invoke-virtual {p1}, Landroid/webkit/WebView;->getSettings()Landroid/webkit/WebSettings;

    move-result-object v0

    const/4 v1, 0x1

    .line 145
    invoke-virtual {v0, v1}, Landroid/webkit/WebSettings;->setJavaScriptEnabled(Z)V

    const/16 v2, 0x64

    .line 146
    invoke-virtual {v0, v2}, Landroid/webkit/WebSettings;->setTextZoom(I)V

    .line 147
    invoke-virtual {v0, v1}, Landroid/webkit/WebSettings;->setAllowFileAccess(Z)V

    .line 148
    sget-object v2, Landroid/webkit/WebSettings$LayoutAlgorithm;->NARROW_COLUMNS:Landroid/webkit/WebSettings$LayoutAlgorithm;

    invoke-virtual {v0, v2}, Landroid/webkit/WebSettings;->setLayoutAlgorithm(Landroid/webkit/WebSettings$LayoutAlgorithm;)V

    .line 149
    invoke-virtual {v0, v1}, Landroid/webkit/WebSettings;->setSupportZoom(Z)V

    .line 150
    invoke-virtual {v0, v1}, Landroid/webkit/WebSettings;->setBuiltInZoomControls(Z)V

    .line 151
    invoke-virtual {v0, v1}, Landroid/webkit/WebSettings;->setUseWideViewPort(Z)V

    const/4 v2, 0x0

    .line 152
    invoke-virtual {v0, v2}, Landroid/webkit/WebSettings;->setSupportMultipleWindows(Z)V

    .line 153
    invoke-virtual {v0, v1}, Landroid/webkit/WebSettings;->setLoadWithOverviewMode(Z)V

    .line 154
    invoke-virtual {v0, v1}, Landroid/webkit/WebSettings;->setDatabaseEnabled(Z)V

    .line 155
    invoke-virtual {v0, v1}, Landroid/webkit/WebSettings;->setDomStorageEnabled(Z)V

    .line 156
    invoke-virtual {v0, v1}, Landroid/webkit/WebSettings;->setGeolocationEnabled(Z)V

    const/4 v3, -0x1

    .line 157
    invoke-virtual {v0, v3}, Landroid/webkit/WebSettings;->setCacheMode(I)V

    .line 161
    const-string v3, "databases"

    invoke-virtual {p2, v3, v2}, Landroid/content/Context;->getDir(Ljava/lang/String;I)Ljava/io/File;

    move-result-object v3

    invoke-virtual {v3}, Ljava/io/File;->getPath()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v0, v3}, Landroid/webkit/WebSettings;->setDatabasePath(Ljava/lang/String;)V

    .line 162
    const-string v3, "geolocation"

    invoke-virtual {p2, v3, v2}, Landroid/content/Context;->getDir(Ljava/lang/String;I)Ljava/io/File;

    move-result-object v3

    invoke-virtual {v3}, Ljava/io/File;->getPath()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v0, v3}, Landroid/webkit/WebSettings;->setGeolocationDatabasePath(Ljava/lang/String;)V

    .line 163
    sget-object v3, Landroid/webkit/WebSettings$PluginState;->ON_DEMAND:Landroid/webkit/WebSettings$PluginState;

    invoke-virtual {v0, v3}, Landroid/webkit/WebSettings;->setPluginState(Landroid/webkit/WebSettings$PluginState;)V

    .line 164
    sget-object v3, Landroid/webkit/WebSettings$RenderPriority;->HIGH:Landroid/webkit/WebSettings$RenderPriority;

    invoke-virtual {v0, v3}, Landroid/webkit/WebSettings;->setRenderPriority(Landroid/webkit/WebSettings$RenderPriority;)V

    .line 166
    invoke-virtual {v0, v1}, Landroid/webkit/WebSettings;->setAllowUniversalAccessFromFileURLs(Z)V

    .line 169
    const-string v1, "searchBoxJavaBridge_"

    invoke-virtual {p1, v1}, Landroid/webkit/WebView;->removeJavascriptInterface(Ljava/lang/String;)V

    .line 171
    invoke-virtual {v0}, Landroid/webkit/WebSettings;->getUserAgentString()Ljava/lang/String;

    move-result-object p1

    .line 173
    :try_start_0
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v3, ";webank/h5face;webank/1.0;netType:"

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    .line 174
    invoke-static {p2}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->getNetWorkState(Landroid/content/Context;)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v3, ";appVersion:"

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    .line 175
    invoke-virtual {p2}, Landroid/content/Context;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v3

    invoke-virtual {p2}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v3, v4, v2}, Landroid/content/pm/PackageManager;->getPackageInfo(Ljava/lang/String;I)Landroid/content/pm/PackageInfo;

    move-result-object v2

    iget v2, v2, Landroid/content/pm/PackageInfo;->versionCode:I

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ";packageName:"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    .line 176
    invoke-virtual {p2}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    .line 173
    invoke-virtual {v0, p2}, Landroid/webkit/WebSettings;->setUserAgentString(Ljava/lang/String;)V
    :try_end_0
    .catch Landroid/content/pm/PackageManager$NameNotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p2

    .line 178
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v1, ";webank/h5face;webank/1.0"

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Landroid/webkit/WebSettings;->setUserAgentString(Ljava/lang/String;)V

    .line 179
    invoke-virtual {p2}, Landroid/content/pm/PackageManager$NameNotFoundException;->printStackTrace()V

    :goto_0
    return-void
.end method
