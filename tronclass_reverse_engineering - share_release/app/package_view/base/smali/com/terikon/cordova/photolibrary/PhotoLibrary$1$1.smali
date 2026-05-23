.class Lcom/terikon/cordova/photolibrary/PhotoLibrary$1$1;
.super Ljava/lang/Object;
.source "PhotoLibrary.java"

# interfaces
.implements Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$1:Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;


# direct methods
.method constructor <init>(Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;)V
    .locals 0

    .line 73
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1$1;->this$1:Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run(Ljava/util/ArrayList;IZ)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/ArrayList<",
            "Lorg/json/JSONObject;",
            ">;IZ)V"
        }
    .end annotation

    .line 78
    :try_start_0
    invoke-static {p1, p2, p3}, Lcom/terikon/cordova/photolibrary/PhotoLibrary;->access$200(Ljava/util/ArrayList;IZ)Lorg/json/JSONObject;

    move-result-object p1

    .line 79
    new-instance p2, Lorg/apache/cordova/PluginResult;

    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p2, v0, p1}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Lorg/json/JSONObject;)V

    xor-int/lit8 p1, p3, 0x1

    .line 80
    invoke-virtual {p2, p1}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 81
    iget-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1$1;->this$1:Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;

    iget-object p1, p1, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 84
    invoke-virtual {p1}, Ljava/lang/Exception;->printStackTrace()V

    .line 85
    iget-object p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1$1;->this$1:Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;

    iget-object p2, p2, Lcom/terikon/cordova/photolibrary/PhotoLibrary$1;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
