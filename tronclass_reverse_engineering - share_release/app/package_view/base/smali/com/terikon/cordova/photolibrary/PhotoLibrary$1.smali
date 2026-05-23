.class Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;
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

    .line 57
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    iput-object p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->val$args:Lorg/json/JSONArray;

    iput-object p3, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 6

    .line 61
    :try_start_0
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->val$args:Lorg/json/JSONArray;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object v0

    .line 62
    const-string v1, "itemsInChunk"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result v1

    .line 63
    const-string v2, "chunkTimeSec"

    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->getDouble(Ljava/lang/String;)D

    move-result-wide v2

    .line 64
    const-string v4, "includeAlbumData"

    invoke-virtual {v0, v4}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result v0

    .line 66
    iget-object v4, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    iget-object v4, v4, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string v5, "android.permission.READ_EXTERNAL_STORAGE"

    invoke-interface {v4, v5}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result v4

    if-nez v4, :cond_0

    .line 67
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v1}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$000(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    const-string v1, "Permission Denial: This application is not allowed to access Photo data."

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return-void

    .line 71
    :cond_0
    new-instance v4, Lcom/terikon/cordova/photolibrary/PhotoLibraryGetLibraryOptions;

    invoke-direct {v4, v1, v2, v3, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryGetLibraryOptions;-><init>(IDZ)V

    .line 73
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$000(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    move-result-object v0

    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v1}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$100(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Landroid/content/Context;

    move-result-object v1

    new-instance v2, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1$1;

    invoke-direct {v2, p0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1$1;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;)V

    invoke-virtual {v0, v1, v4, v2}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getLibrary(Landroid/content/Context;Lcom/terikon/cordova/photolibrary/PhotoLibraryGetLibraryOptions;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 91
    invoke-virtual {v0}, Ljava/lang/Exception;->printStackTrace()V

    .line 92
    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
