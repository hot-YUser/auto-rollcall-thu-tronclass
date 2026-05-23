.class Lcom/terikon/cordova/photolibrary/PhotoLibraryService$1;
.super Lorg/json/JSONObject;
.source "PhotoLibraryService.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->getAlbums(Landroid/content/Context;)Ljava/util/ArrayList;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;


# direct methods
.method constructor <init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 79
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$1;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    invoke-direct {p0}, Lorg/json/JSONObject;-><init>()V

    .line 80
    const-string p1, "id"

    const-string v0, "bucket_id"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$1;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 81
    const-string p1, "title"

    const-string v0, "bucket_display_name"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$1;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    return-void
.end method
