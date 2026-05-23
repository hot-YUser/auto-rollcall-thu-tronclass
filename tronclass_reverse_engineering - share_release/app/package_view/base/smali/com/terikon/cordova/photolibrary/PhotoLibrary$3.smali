.class Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;
.super Ljava/lang/Object;
.source "PhotoLibrary.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/terikon/cordova/photolibrary/PhotoLibrary;->execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

.field final synthetic val$args:Lorg/json/JSONArray;

.field final synthetic val$callbackContext:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lcom/terikon/cordova/photolibrary/PhotoLibrary;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 121
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    iput-object p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->val$args:Lorg/json/JSONArray;

    iput-object p3, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 9

    .line 125
    :try_start_0
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->val$args:Lorg/json/JSONArray;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v4

    .line 126
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->val$args:Lorg/json/JSONArray;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object v0

    .line 127
    const-string v1, "thumbnailWidth"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v5

    .line 128
    const-string v1, "thumbnailHeight"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v6

    .line 129
    const-string v1, "quality"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->getDouble(Ljava/lang/String;)D

    move-result-wide v7

    .line 131
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    iget-object v0, v0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string v1, "android.permission.READ_EXTERNAL_STORAGE"

    invoke-interface {v0, v1}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 132
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v1}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$000(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    const-string v1, "Permission Denial: This application is not allowed to access Photo data."

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return-void

    .line 136
    :cond_0
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$000(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    move-result-object v2

    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$100(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Landroid/content/Context;

    move-result-object v3

    invoke-virtual/range {v2 .. v8}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getThumbnail(Landroid/content/Context;Ljava/lang/String;IID)Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;

    move-result-object v0

    .line 137
    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    iget-object v2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    sget-object v3, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-static {v2, v3, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$400(Lcom/terikon/cordova/photolibrary/PhotoLibrary;Lorg/apache/cordova/PluginResult$Status;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;)Lorg/apache/cordova/PluginResult;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 140
    invoke-virtual {v0}, Ljava/lang/Exception;->printStackTrace()V

    .line 141
    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$3;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
