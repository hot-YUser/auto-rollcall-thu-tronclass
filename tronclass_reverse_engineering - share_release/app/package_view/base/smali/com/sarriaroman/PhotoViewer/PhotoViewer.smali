.class public Lcom/sarriaroman/PhotoViewer/PhotoViewer;
.super Lorg/apache/cordova/CordovaPlugin;
.source "PhotoViewer.java"


# static fields
.field public static final PERMISSION_DENIED_ERROR:I = 0x14

.field public static final READ:Ljava/lang/String; = "android.permission.READ_EXTERNAL_STORAGE"

.field public static final REQ_CODE:I = 0x0

.field public static final WRITE:Ljava/lang/String; = "android.permission.WRITE_EXTERNAL_STORAGE"


# instance fields
.field protected args:Lorg/json/JSONArray;

.field protected callbackContext:Lorg/apache/cordova/CallbackContext;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 19
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 33
    const-string v0, "show"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_1

    .line 34
    iput-object p2, p0, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->args:Lorg/json/JSONArray;

    .line 35
    iput-object p3, p0, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->callbackContext:Lorg/apache/cordova/CallbackContext;

    .line 37
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string p2, "android.permission.READ_EXTERNAL_STORAGE"

    invoke-interface {p1, p2}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string p2, "android.permission.WRITE_EXTERNAL_STORAGE"

    invoke-interface {p1, p2}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 38
    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->launchActivity()V

    goto :goto_0

    .line 40
    :cond_0
    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->getPermission()V

    :goto_0
    const/4 p1, 0x1

    return p1

    :cond_1
    const/4 p1, 0x0

    return p1
.end method

.method protected getPermission()V
    .locals 5

    .line 48
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->cordova:Lorg/apache/cordova/CordovaInterface;

    const/4 v1, 0x2

    new-array v1, v1, [Ljava/lang/String;

    const-string v2, "android.permission.WRITE_EXTERNAL_STORAGE"

    const/4 v3, 0x0

    aput-object v2, v1, v3

    const/4 v2, 0x1

    const-string v4, "android.permission.READ_EXTERNAL_STORAGE"

    aput-object v4, v1, v2

    invoke-interface {v0, p0, v3, v1}, Lorg/apache/cordova/CordovaInterface;->requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V

    return-void
.end method

.method protected launchActivity()V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 53
    new-instance v0, Landroid/content/Intent;

    iget-object v1, p0, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    const-class v2, Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-direct {v0, v1, v2}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    .line 54
    iget-object v1, p0, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->args:Lorg/json/JSONArray;

    sput-object v1, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mArgs:Lorg/json/JSONArray;

    .line 56
    iget-object v1, p0, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/app/Activity;->startActivity(Landroid/content/Intent;)V

    .line 57
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->callbackContext:Lorg/apache/cordova/CallbackContext;

    const-string v1, ""

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    return-void
.end method

.method public onRequestPermissionResult(I[Ljava/lang/String;[I)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 63
    array-length p2, p3

    const/4 v0, 0x0

    :goto_0
    if-ge v0, p2, :cond_1

    aget v1, p3, v0

    const/4 v2, -0x1

    if-ne v1, v2, :cond_0

    .line 65
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->callbackContext:Lorg/apache/cordova/CallbackContext;

    new-instance p2, Lorg/apache/cordova/PluginResult;

    sget-object p3, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    const/16 v0, 0x14

    invoke-direct {p2, p3, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;I)V

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return-void

    :cond_0
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    :cond_1
    if-eqz p1, :cond_2

    goto :goto_1

    .line 72
    :cond_2
    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoViewer;->launchActivity()V

    :goto_1
    return-void
.end method
