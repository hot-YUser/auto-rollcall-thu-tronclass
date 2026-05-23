.class public Landroidx/camera/core/ImageCaptureException;
.super Ljava/lang/Exception;
.source "ImageCaptureException.java"


# instance fields
.field private final mImageCaptureError:I


# direct methods
.method public constructor <init>(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 0

    .line 36
    invoke-direct {p0, p2, p3}, Ljava/lang/Exception;-><init>(Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 37
    iput p1, p0, Landroidx/camera/core/ImageCaptureException;->mImageCaptureError:I

    return-void
.end method


# virtual methods
.method public getImageCaptureError()I
    .locals 1

    .line 50
    iget v0, p0, Landroidx/camera/core/ImageCaptureException;->mImageCaptureError:I

    return v0
.end method
