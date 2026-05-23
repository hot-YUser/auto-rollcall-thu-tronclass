.class Lcom/synconset/ImageFetcher$2;
.super Ljava/lang/Object;
.source "ImageFetcher.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/synconset/ImageFetcher;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/synconset/ImageFetcher;


# direct methods
.method constructor <init>(Lcom/synconset/ImageFetcher;)V
    .locals 0

    .line 309
    iput-object p1, p0, Lcom/synconset/ImageFetcher$2;->this$0:Lcom/synconset/ImageFetcher;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 1

    .line 311
    iget-object v0, p0, Lcom/synconset/ImageFetcher$2;->this$0:Lcom/synconset/ImageFetcher;

    invoke-virtual {v0}, Lcom/synconset/ImageFetcher;->clearCache()V

    return-void
.end method
