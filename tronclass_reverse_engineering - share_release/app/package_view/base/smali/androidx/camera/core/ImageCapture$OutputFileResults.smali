.class public Landroidx/camera/core/ImageCapture$OutputFileResults;
.super Ljava/lang/Object;
.source "ImageCapture.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/ImageCapture;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "OutputFileResults"
.end annotation


# instance fields
.field private final mSavedUri:Landroid/net/Uri;


# direct methods
.method public constructor <init>(Landroid/net/Uri;)V
    .locals 0

    .line 1552
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 1553
    iput-object p1, p0, Landroidx/camera/core/ImageCapture$OutputFileResults;->mSavedUri:Landroid/net/Uri;

    return-void
.end method


# virtual methods
.method public getSavedUri()Landroid/net/Uri;
    .locals 1

    .line 1565
    iget-object v0, p0, Landroidx/camera/core/ImageCapture$OutputFileResults;->mSavedUri:Landroid/net/Uri;

    return-object v0
.end method
