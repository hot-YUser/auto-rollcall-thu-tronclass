.class public Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;
.super Ljava/lang/Object;
.source "PhotoLibraryService.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/terikon/cordova/photolibrary/PhotoLibraryService;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1
    name = "PictureData"
.end annotation


# instance fields
.field public final bytes:[B

.field public final mimeType:Ljava/lang/String;

.field final synthetic this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;


# direct methods
.method public constructor <init>(Lcom/terikon/cordova/photolibrary/PhotoLibraryService;[BLjava/lang/String;)V
    .locals 0

    .line 238
    iput-object p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;->this$0:Lcom/terikon/cordova/photolibrary/PhotoLibraryService;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 239
    iput-object p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;->bytes:[B

    .line 240
    iput-object p3, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryService$PictureData;->mimeType:Ljava/lang/String;

    return-void
.end method
