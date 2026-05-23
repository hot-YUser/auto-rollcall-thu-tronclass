.class Lcom/terikon/cordova/photolibrary/PhotoLibraryService$5;
.super Ljava/lang/Object;
.source "PhotoLibraryService.java"

# interfaces
.implements Landroid/media/MediaScannerConnection$OnScanCompletedListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/terikon/cordova/photolibrary/PhotoLibraryService;->addFileToMediaLibrary(Landroid/content/Context;Ljava/io/File;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

.field final synthetic val$completion:Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;


# direct methods
.method constructor <init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 576
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$5;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    iput-object p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$5;->val$completion:Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onScanCompleted(Ljava/lang/String;Landroid/net/Uri;)V
    .locals 0

    .line 579
    iget-object p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$5;->val$completion:Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;

    invoke-interface {p2, p1}, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$FilePathRunnable;->run(Ljava/lang/String;)V

    return-void
.end method
