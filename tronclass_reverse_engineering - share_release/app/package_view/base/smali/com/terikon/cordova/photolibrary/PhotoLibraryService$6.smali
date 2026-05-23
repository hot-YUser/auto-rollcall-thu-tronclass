.class Lcom/terikon/cordova/photolibrary/PhotoLibraryService$6;
.super Ljava/util/HashMap;
.source "PhotoLibraryService.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/terikon/cordova/photolibrary/PhotoLibraryService;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/util/HashMap<",
        "Ljava/lang/String;",
        "Ljava/lang/String;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;


# direct methods
.method constructor <init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;)V
    .locals 1

    .line 585
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$6;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    invoke-direct {p0}, Ljava/util/HashMap;-><init>()V

    .line 586
    const-string p1, "jpeg"

    const-string v0, ".jpg"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$6;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method
