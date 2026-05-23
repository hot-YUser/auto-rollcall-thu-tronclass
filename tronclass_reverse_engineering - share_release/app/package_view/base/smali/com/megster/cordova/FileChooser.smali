.class public Lcom/megster/cordova/FileChooser;
.super Lorg/apache/cordova/CordovaPlugin;
.source "FileChooser.java"


# static fields
.field private static final ACTION_OPEN:Ljava/lang/String; = "open"

.field public static final MIME:Ljava/lang/String; = "mime"

.field private static final PICK_FILE_REQUEST:I = 0x1

.field private static final TAG:Ljava/lang/String; = "FileChooser"


# instance fields
.field callback:Lorg/apache/cordova/CallbackContext;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 15
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method


# virtual methods
.method public chooseFile(Lorg/json/JSONObject;Lorg/apache/cordova/CallbackContext;)V
    .locals 2

    .line 38
    const-string v0, "mime"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    goto :goto_0

    :cond_0
    const-string p1, "*/*"

    .line 42
    :goto_0
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.intent.action.GET_CONTENT"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 43
    invoke-virtual {v0, p1}, Landroid/content/Intent;->setType(Ljava/lang/String;)Landroid/content/Intent;

    .line 44
    const-string p1, "android.intent.category.OPENABLE"

    invoke-virtual {v0, p1}, Landroid/content/Intent;->addCategory(Ljava/lang/String;)Landroid/content/Intent;

    .line 45
    const-string p1, "android.intent.extra.LOCAL_ONLY"

    const/4 v1, 0x1

    invoke-virtual {v0, p1, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Z)Landroid/content/Intent;

    .line 47
    const-string p1, "Select File"

    invoke-static {v0, p1}, Landroid/content/Intent;->createChooser(Landroid/content/Intent;Ljava/lang/CharSequence;)Landroid/content/Intent;

    move-result-object p1

    .line 48
    iget-object v0, p0, Lcom/megster/cordova/FileChooser;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0, p0, p1, v1}, Lorg/apache/cordova/CordovaInterface;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V

    .line 50
    new-instance p1, Lorg/apache/cordova/PluginResult;

    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->NO_RESULT:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p1, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V

    .line 51
    invoke-virtual {p1, v1}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 52
    iput-object p2, p0, Lcom/megster/cordova/FileChooser;->callback:Lorg/apache/cordova/CallbackContext;

    .line 53
    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return-void
.end method

.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 28
    const-string v0, "open"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    const/4 v0, 0x0

    if-eqz p1, :cond_0

    .line 29
    invoke-virtual {p2, v0}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object p1

    .line 30
    invoke-virtual {p0, p1, p3}, Lcom/megster/cordova/FileChooser;->chooseFile(Lorg/json/JSONObject;Lorg/apache/cordova/CallbackContext;)V

    const/4 p1, 0x1

    return p1

    :cond_0
    return v0
.end method

.method public onActivityResult(IILandroid/content/Intent;)V
    .locals 1

    const/4 v0, 0x1

    if-ne p1, v0, :cond_3

    .line 59
    iget-object p1, p0, Lcom/megster/cordova/FileChooser;->callback:Lorg/apache/cordova/CallbackContext;

    if-eqz p1, :cond_3

    const/4 v0, -0x1

    if-ne p2, v0, :cond_1

    .line 63
    invoke-virtual {p3}, Landroid/content/Intent;->getData()Landroid/net/Uri;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 67
    const-string p2, "FileChooser"

    invoke-virtual {p1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object p3

    invoke-static {p2, p3}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    .line 68
    iget-object p2, p0, Lcom/megster/cordova/FileChooser;->callback:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    goto :goto_0

    .line 72
    :cond_0
    iget-object p1, p0, Lcom/megster/cordova/FileChooser;->callback:Lorg/apache/cordova/CallbackContext;

    const-string p2, "File uri was null"

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    goto :goto_0

    :cond_1
    if-nez p2, :cond_2

    .line 79
    const-string p2, "User canceled."

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    goto :goto_0

    .line 82
    :cond_2
    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->error(I)V

    :cond_3
    :goto_0
    return-void
.end method
