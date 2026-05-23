.class Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2$1;
.super Ljava/lang/Object;
.source "PhotoLibraryService.java"

# interfaces
.implements Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;->run(Ljava/lang/String;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$1:Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;


# direct methods
.method constructor <init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;)V
    .locals 0

    .line 207
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2$1;->this$1:Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;

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

    .line 210
    iget-object p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2$1;->this$1:Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;

    iget-object p2, p2, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$2;->val$completion:Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;

    invoke-virtual {p1}, Ljava/util/ArrayList;->size()I

    move-result p3

    const/4 v0, 0x1

    if-ne p3, v0, :cond_0

    const/4 p3, 0x0

    invoke-virtual {p1, p3}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lorg/json/JSONObject;

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    invoke-interface {p2, p1}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;->run(Lorg/json/JSONObject;)V

    return-void
.end method
