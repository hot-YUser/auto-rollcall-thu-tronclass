.class public Lcom/terikon/cordova/photolibrary/PhotoLibraryGetLibraryOptions;
.super Ljava/lang/Object;
.source "PhotoLibraryGetLibraryOptions.java"


# instance fields
.field public final chunkTimeSec:D

.field public final includeAlbumData:Z

.field public final itemsInChunk:I


# direct methods
.method public constructor <init>(IDZ)V
    .locals 0

    .line 9
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 10
    iput p1, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryGetLibraryOptions;->itemsInChunk:I

    .line 11
    iput-wide p2, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryGetLibraryOptions;->chunkTimeSec:D

    .line 12
    iput-boolean p4, p0, Lcom/terikon/cordova/photolibrary/PhotoLibraryGetLibraryOptions;->includeAlbumData:Z

    return-void
.end method
