.class public Lorg/apache/cordova/PermissionHelper;
.super Ljava/lang/Object;
.source "PermissionHelper.java"


# static fields
.field private static final LOG_TAG:Ljava/lang/String; = "CordovaPermissionHelper"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 31
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private static deliverPermissionResult(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V
    .locals 2

    .line 78
    array-length v0, p2

    new-array v0, v0, [I

    const/4 v1, 0x0

    .line 79
    invoke-static {v0, v1}, Ljava/util/Arrays;->fill([II)V

    .line 82
    :try_start_0
    invoke-virtual {p0, p1, p2, v0}, Lorg/apache/cordova/CordovaPlugin;->onRequestPermissionResult(I[Ljava/lang/String;[I)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 84
    const-string p1, "CordovaPermissionHelper"

    const-string p2, "JSONException when delivering permissions results"

    invoke-static {p1, p2, p0}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_0
    return-void
.end method

.method public static hasPermission(Lorg/apache/cordova/CordovaPlugin;Ljava/lang/String;)Z
    .locals 0

    .line 73
    iget-object p0, p0, Lorg/apache/cordova/CordovaPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p0, p1}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result p0

    return p0
.end method

.method public static requestPermission(Lorg/apache/cordova/CordovaPlugin;ILjava/lang/String;)V
    .locals 2

    const/4 v0, 0x1

    .line 45
    new-array v0, v0, [Ljava/lang/String;

    const/4 v1, 0x0

    aput-object p2, v0, v1

    invoke-static {p0, p1, v0}, Lorg/apache/cordova/PermissionHelper;->requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V

    return-void
.end method

.method public static requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V
    .locals 1

    .line 59
    iget-object v0, p0, Lorg/apache/cordova/CordovaPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0, p0, p1, p2}, Lorg/apache/cordova/CordovaInterface;->requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V

    return-void
.end method
