.class Lcom/terikon/cordova/photolibrary/PhotoLibrary$5$1;
.super Ljava/lang/Object;
.source "PhotoLibrary.java"

# interfaces
.implements Lcom/terikon/cordova/photolibrary/PhotoLibraryService$JSONObjectRunnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$1:Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;


# direct methods
.method constructor <init>(Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;)V
    .locals 0

    .line 209
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5$1;->this$1:Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run(Lorg/json/JSONObject;)V
    .locals 1

    .line 212
    iget-object v0, p0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5$1;->this$1:Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;

    iget-object v0, v0, Lcom/terikon/cordova/photolibrary/PhotoLibrary$5;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, p1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    return-void
.end method
