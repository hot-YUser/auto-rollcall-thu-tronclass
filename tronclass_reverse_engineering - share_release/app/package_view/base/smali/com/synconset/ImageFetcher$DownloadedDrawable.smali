.class Lcom/synconset/ImageFetcher$DownloadedDrawable;
.super Landroid/graphics/drawable/ColorDrawable;
.source "ImageFetcher.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/synconset/ImageFetcher;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "DownloadedDrawable"
.end annotation


# instance fields
.field private final bitmapDownloaderTaskReference:Ljava/lang/ref/WeakReference;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/ref/WeakReference<",
            "Lcom/synconset/ImageFetcher$BitmapFetcherTask;",
            ">;"
        }
    .end annotation
.end field

.field private origId:J


# direct methods
.method public constructor <init>(Landroid/content/Context;Lcom/synconset/ImageFetcher$BitmapFetcherTask;J)V
    .locals 0

    const/4 p1, 0x0

    .line 264
    invoke-direct {p0, p1}, Landroid/graphics/drawable/ColorDrawable;-><init>(I)V

    .line 265
    new-instance p1, Ljava/lang/ref/WeakReference;

    invoke-direct {p1, p2}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    iput-object p1, p0, Lcom/synconset/ImageFetcher$DownloadedDrawable;->bitmapDownloaderTaskReference:Ljava/lang/ref/WeakReference;

    .line 266
    iput-wide p3, p0, Lcom/synconset/ImageFetcher$DownloadedDrawable;->origId:J

    return-void
.end method


# virtual methods
.method public getBitmapDownloaderTask()Lcom/synconset/ImageFetcher$BitmapFetcherTask;
    .locals 1

    .line 274
    iget-object v0, p0, Lcom/synconset/ImageFetcher$DownloadedDrawable;->bitmapDownloaderTaskReference:Ljava/lang/ref/WeakReference;

    invoke-virtual {v0}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;

    return-object v0
.end method

.method public getOrigId()J
    .locals 2

    .line 270
    iget-wide v0, p0, Lcom/synconset/ImageFetcher$DownloadedDrawable;->origId:J

    return-wide v0
.end method
