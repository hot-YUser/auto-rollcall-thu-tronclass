.class public Landroidx/camera/core/processing/ImageProcessorRequest;
.super Ljava/lang/Object;
.source "ImageProcessorRequest.java"

# interfaces
.implements Landroidx/camera/core/ImageProcessor$Request;


# instance fields
.field private final mImageProxy:Landroidx/camera/core/ImageProxy;

.field private final mOutputFormat:I


# direct methods
.method public constructor <init>(Landroidx/camera/core/ImageProxy;I)V
    .locals 0

    .line 36
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 37
    iput-object p1, p0, Landroidx/camera/core/processing/ImageProcessorRequest;->mImageProxy:Landroidx/camera/core/ImageProxy;

    .line 38
    iput p2, p0, Landroidx/camera/core/processing/ImageProcessorRequest;->mOutputFormat:I

    return-void
.end method


# virtual methods
.method public getInputImage()Landroidx/camera/core/ImageProxy;
    .locals 1

    .line 44
    iget-object v0, p0, Landroidx/camera/core/processing/ImageProcessorRequest;->mImageProxy:Landroidx/camera/core/ImageProxy;

    return-object v0
.end method

.method public getOutputFormat()I
    .locals 1

    .line 49
    iget v0, p0, Landroidx/camera/core/processing/ImageProcessorRequest;->mOutputFormat:I

    return v0
.end method
