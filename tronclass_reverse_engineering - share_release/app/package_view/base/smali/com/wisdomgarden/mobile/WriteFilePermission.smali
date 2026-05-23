.class public Lcom/wisdomgarden/mobile/WriteFilePermission;
.super Lcom/getcapacitor/Plugin;
.source "WriteFilePermission.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
    requestCodes = {
        0x2537
    }
.end annotation


# static fields
.field private static final ANDROID_PERMISSION_NAME:Ljava/lang/String; = "android.permission.WRITE_EXTERNAL_STORAGE"

.field private static final ANDROID_VERSION_R:I = 0x1e

.field private static final ANDROID_VERSION_TIRAMISU:I = 0x21

.field public static final FILESYSTEM_REQUEST_WRITE_FILE_PERMISSIONS:I = 0x2537

.field private static final PERMISSION_DENIED_ERROR:Ljava/lang/String; = "Unable to do this operation, user denied permission request"


# instance fields
.field private useManagerExternalStorage:Z


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 18
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    const/4 v0, 0x0

    .line 31
    iput-boolean v0, p0, Lcom/wisdomgarden/mobile/WriteFilePermission;->useManagerExternalStorage:Z

    return-void
.end method

.method private checkPermission()Z
    .locals 1

    const/16 v0, 0x21

    .line 47
    invoke-static {v0}, Lcom/wisdomgarden/mobile/AndroidVersionUtils;->isGreaterThanOrEqualTo(I)Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    return v0

    .line 50
    :cond_0
    iget-boolean v0, p0, Lcom/wisdomgarden/mobile/WriteFilePermission;->useManagerExternalStorage:Z

    if-eqz v0, :cond_1

    .line 51
    invoke-static {}, Landroid/os/Environment;->isExternalStorageManager()Z

    move-result v0

    return v0

    .line 53
    :cond_1
    const-string v0, "android.permission.WRITE_EXTERNAL_STORAGE"

    invoke-virtual {p0, v0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->hasPermission(Ljava/lang/String;)Z

    move-result v0

    return v0
.end method

.method private determineExternalStorageManagerUsage()V
    .locals 3

    const/16 v0, 0x21

    const/4 v1, 0x1

    const/16 v2, 0x1e

    .line 40
    invoke-static {v2, v0, v1}, Lcom/wisdomgarden/mobile/AndroidVersionUtils;->isBetween(IIZ)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 41
    const-string v0, "android.permission.MANAGE_EXTERNAL_STORAGE"

    invoke-virtual {p0, v0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->hasDefinedPermission(Ljava/lang/String;)Z

    move-result v0

    iput-boolean v0, p0, Lcom/wisdomgarden/mobile/WriteFilePermission;->useManagerExternalStorage:Z

    :cond_0
    return-void
.end method

.method private onDenied(Lcom/getcapacitor/PluginCall;)V
    .locals 3

    .line 140
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 141
    const-string v1, "result"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 142
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method private onGranted(Lcom/getcapacitor/PluginCall;)V
    .locals 3

    .line 134
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 135
    const-string v1, "result"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 136
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method


# virtual methods
.method public check(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 58
    invoke-direct {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->checkPermission()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 61
    invoke-direct {p0, p1}, Lcom/wisdomgarden/mobile/WriteFilePermission;->onGranted(Lcom/getcapacitor/PluginCall;)V

    goto :goto_0

    .line 63
    :cond_0
    invoke-direct {p0, p1}, Lcom/wisdomgarden/mobile/WriteFilePermission;->onDenied(Lcom/getcapacitor/PluginCall;)V

    :goto_0
    return-void
.end method

.method protected handleRequestPermissionsResult(I[Ljava/lang/String;[I)V
    .locals 5

    .line 94
    invoke-super {p0, p1, p2, p3}, Lcom/getcapacitor/Plugin;->handleRequestPermissionsResult(I[Ljava/lang/String;[I)V

    .line 96
    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->getLogTag()Ljava/lang/String;

    move-result-object v0

    const-string v1, "handling request perms result"

    invoke-static {v0, v1}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 98
    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object v0

    if-nez v0, :cond_0

    .line 99
    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->getLogTag()Ljava/lang/String;

    move-result-object p1

    const-string p2, "No stored plugin call for permissions request result"

    invoke-static {p1, p2}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    return-void

    .line 103
    :cond_0
    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object v0

    const/4 v1, 0x0

    .line 105
    :goto_0
    array-length v2, p3

    if-ge v1, v2, :cond_3

    .line 106
    aget v2, p3, v1

    .line 107
    aget-object v3, p2, v1

    const/4 v4, -0x1

    if-ne v2, v4, :cond_2

    .line 109
    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->getLogTag()Ljava/lang/String;

    move-result-object p1

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "User denied permission: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {p1, p2}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 110
    const-string p1, "Unable to do this operation, user denied permission request"

    invoke-virtual {v0, p1}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    .line 111
    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->freeSavedCall()V

    .line 113
    iget-boolean p1, p0, Lcom/wisdomgarden/mobile/WriteFilePermission;->useManagerExternalStorage:Z

    if-eqz p1, :cond_1

    const-string p1, "android.permission.MANAGE_EXTERNAL_STORAGE"

    invoke-virtual {v3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_1

    .line 115
    :try_start_0
    new-instance p1, Landroid/content/Intent;

    const-string p2, "android.settings.MANAGE_APP_ALL_FILES_ACCESS_PERMISSION"

    new-instance p3, Ljava/lang/StringBuilder;

    invoke-direct {p3}, Ljava/lang/StringBuilder;-><init>()V

    const-string v0, "package:"

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p3

    invoke-static {p3}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p3

    invoke-direct {p1, p2, p3}, Landroid/content/Intent;-><init>(Ljava/lang/String;Landroid/net/Uri;)V

    .line 116
    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->getContext()Landroid/content/Context;

    move-result-object p2

    invoke-virtual {p2, p1}, Landroid/content/Context;->startActivity(Landroid/content/Intent;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    .line 118
    :catch_0
    new-instance p1, Landroid/content/Intent;

    invoke-direct {p1}, Landroid/content/Intent;-><init>()V

    .line 119
    const-string p2, "android.settings.MANAGE_ALL_FILES_ACCESS_PERMISSION"

    invoke-virtual {p1, p2}, Landroid/content/Intent;->setAction(Ljava/lang/String;)Landroid/content/Intent;

    .line 120
    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->getContext()Landroid/content/Context;

    move-result-object p2

    invoke-virtual {p2, p1}, Landroid/content/Context;->startActivity(Landroid/content/Intent;)V

    :cond_1
    :goto_1
    return-void

    :cond_2
    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_3
    const/16 p2, 0x2537

    if-ne p1, p2, :cond_4

    .line 128
    invoke-direct {p0, v0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->onGranted(Lcom/getcapacitor/PluginCall;)V

    .line 130
    :cond_4
    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->freeSavedCall()V

    return-void
.end method

.method public load()V
    .locals 0

    .line 35
    invoke-super {p0}, Lcom/getcapacitor/Plugin;->load()V

    .line 36
    invoke-direct {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->determineExternalStorageManagerUsage()V

    return-void
.end method

.method public request(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 69
    invoke-direct {p0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->checkPermission()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 71
    invoke-direct {p0, p1}, Lcom/wisdomgarden/mobile/WriteFilePermission;->onGranted(Lcom/getcapacitor/PluginCall;)V

    return-void

    .line 74
    :cond_0
    invoke-virtual {p0, p1}, Lcom/wisdomgarden/mobile/WriteFilePermission;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 75
    iget-boolean p1, p0, Lcom/wisdomgarden/mobile/WriteFilePermission;->useManagerExternalStorage:Z

    const/16 v0, 0x2537

    const-string v1, "android.permission.WRITE_EXTERNAL_STORAGE"

    if-eqz p1, :cond_1

    const/4 p1, 0x2

    .line 76
    new-array p1, p1, [Ljava/lang/String;

    const/4 v2, 0x0

    aput-object v1, p1, v2

    const/4 v1, 0x1

    const-string v2, "android.permission.MANAGE_EXTERNAL_STORAGE"

    aput-object v2, p1, v1

    invoke-virtual {p0, p1, v0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->pluginRequestPermissions([Ljava/lang/String;I)V

    return-void

    .line 79
    :cond_1
    invoke-virtual {p0, v1, v0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->pluginRequestPermission(Ljava/lang/String;I)V

    return-void
.end method

.method public requestPostNotificationPermission(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    const/16 v0, 0x21

    .line 84
    invoke-static {v0}, Lcom/wisdomgarden/mobile/AndroidVersionUtils;->isGreaterThanOrEqualTo(I)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 85
    invoke-virtual {p0, p1}, Lcom/wisdomgarden/mobile/WriteFilePermission;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 86
    const-string p1, "android.permission.POST_NOTIFICATIONS"

    const/16 v0, 0x2537

    invoke-virtual {p0, p1, v0}, Lcom/wisdomgarden/mobile/WriteFilePermission;->pluginRequestPermission(Ljava/lang/String;I)V

    goto :goto_0

    .line 88
    :cond_0
    invoke-direct {p0, p1}, Lcom/wisdomgarden/mobile/WriteFilePermission;->onDenied(Lcom/getcapacitor/PluginCall;)V

    :goto_0
    return-void
.end method
