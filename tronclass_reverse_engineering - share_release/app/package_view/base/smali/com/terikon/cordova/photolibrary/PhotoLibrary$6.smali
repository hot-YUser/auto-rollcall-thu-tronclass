.class Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;
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

    .line 225
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    iput-object p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->val$args:Lorg/json/JSONArray;

    iput-object p3, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 5

    .line 229
    :try_start_0
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->val$args:Lorg/json/JSONArray;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v0

    .line 230
    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->val$args:Lorg/json/JSONArray;

    const/4 v2, 0x1

    invoke-virtual {v1, v2}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v1

    .line 232
    iget-object v2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    iget-object v2, v2, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string v3, "android.permission.WRITE_EXTERNAL_STORAGE"

    invoke-interface {v2, v3}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result v2

    if-nez v2, :cond_0

    .line 233
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v1}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$000(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    const-string v1, "Permission Denial: This application is not allowed to access Photo data."

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return-void

    .line 237
    :cond_0
    iget-object v2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v2}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$000(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    move-result-object v2

    iget-object v3, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v3}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$100(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Landroid/content/Context;

    move-result-object v3

    iget-object v4, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    iget-object v4, v4, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-virtual {v2, v3, v4, v0, v1}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->saveVideo(Landroid/content/Context;Lorg/apache/cordova/CordovaInterface;Ljava/lang/String;Ljava/lang/String;)V

    .line 239
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 242
    invoke-virtual {v0}, Ljava/lang/Exception;->printStackTrace()V

    .line 243
    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$6;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
