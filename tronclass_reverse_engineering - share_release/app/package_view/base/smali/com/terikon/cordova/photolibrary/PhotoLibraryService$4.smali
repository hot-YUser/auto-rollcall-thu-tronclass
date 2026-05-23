.class Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;
.super Lorg/json/JSONObject;
.source "PhotoLibraryService.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->queryLibrary(Landroid/content/Context;IDZLjava/lang/String;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$ChunkResultRunnable;)V
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

    .line 335
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    invoke-direct {p0}, Lorg/json/JSONObject;-><init>()V

    .line 336
    const-string p1, "int.id"

    const-string v0, "_id"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 337
    const-string p1, "fileName"

    const-string v0, "_display_name"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 338
    const-string p1, "int.width"

    const-string v0, "width"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 339
    const-string p1, "int.height"

    const-string v0, "height"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 340
    const-string p1, "albumId"

    const-string v0, "bucket_id"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 341
    const-string p1, "date.creationDate"

    const-string v0, "datetaken"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 342
    const-string p1, "float.latitude"

    const-string v0, "latitude"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 343
    const-string p1, "float.longitude"

    const-string v0, "longitude"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 344
    const-string p1, "nativeURL"

    const-string v0, "_data"

    invoke-virtual {p0, p1, v0}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$4;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    return-void
.end method
