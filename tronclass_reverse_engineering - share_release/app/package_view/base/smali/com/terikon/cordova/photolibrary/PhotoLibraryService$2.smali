.class Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;
.super Ljava/lang/Object;
.source "PhotoLibraryService.java"

# interfaces
.implements Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->saveImage(Landroid/content/Context;Lorg/apache/cordova/CordovaInterface;Ljava/lang/String;Ljava/lang/String;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

.field final synthetic val$completion:Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;

.field final synthetic val$context:Landroid/content/Context;


# direct methods
.method constructor <init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;Landroid/content/Context;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 201
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    iput-object p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;->val$context:Landroid/content/Context;

    iput-object p3, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;->val$completion:Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run(Ljava/lang/String;)V
    .locals 3

    const-string v0, "_data = \""

    .line 206
    :try_start_0
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "\""

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 207
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    iget-object v1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;->val$context:Landroid/content/Context;

    new-instance v2, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2$1;

    invoke-direct {v2, p0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2$1;-><init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;)V

    invoke-static {v0, v1, p1, v2}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->access$000(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;Landroid/content/Context;Ljava/lang/String;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 214
    :catch_0
    iget-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;->val$completion:Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;

    const/4 v0, 0x0

    invoke-interface {p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;->run(Lorg/json/JSONObject;)V

    :goto_0
    return-void
.end method
