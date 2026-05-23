.class Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;
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

    .line 197
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    iput-object p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->val$args:Lorg/json/JSONArray;

    iput-object p3, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 8

    .line 201
    :try_start_0
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->val$args:Lorg/json/JSONArray;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v5

    .line 202
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->val$args:Lorg/json/JSONArray;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v6

    .line 204
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    iget-object v0, v0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string v1, "android.permission.WRITE_EXTERNAL_STORAGE"

    invoke-interface {v0, v1}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 205
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v1}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$000(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    const-string v1, "Permission Denial: This application is not allowed to access Photo data."

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return-void

    .line 209
    :cond_0
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$000(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    move-result-object v2

    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    invoke-static {v0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$100(Lcom/terikon/cordova/photolibrary/PhotoLibrary;)Landroid/content/Context;

    move-result-object v3

    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibrary;

    iget-object v4, v0, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->cordova:Lorg/apache/cordova/CordovaInterface;

    new-instance v7, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5$1;

    invoke-direct {v7, p0}, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5$1;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;)V

    invoke-virtual/range {v2 .. v7}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->saveImage(Landroid/content/Context;Lorg/apache/cordova/CordovaInterface;Ljava/lang/String;Ljava/lang/String;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 217
    invoke-virtual {v0}, Ljava/lang/Exception;->printStackTrace()V

    .line 218
    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
