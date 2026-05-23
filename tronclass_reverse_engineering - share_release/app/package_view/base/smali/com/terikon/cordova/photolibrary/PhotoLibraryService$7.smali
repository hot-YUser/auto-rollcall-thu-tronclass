.class Lcom/terikon/cordova/photolibrary/PhotoLibraryService$7;
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

    .line 589
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$7;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    invoke-direct {p0}, Ljava/util/HashMap;-><init>()V

    .line 590
    const-string p1, "quicktime"

    const-string v0, ".mov"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$7;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 591
    const-string p1, "ogg"

    const-string v0, ".ogv"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$7;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method
