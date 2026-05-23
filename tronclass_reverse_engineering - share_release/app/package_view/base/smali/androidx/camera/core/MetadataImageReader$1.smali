.class Landroidx/camera/core/MetadataImageReader$1;
.super Landroidx/camera/core/impl/CameraCaptureCallback;
.source "MetadataImageReader.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/MetadataImageReader;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/core/MetadataImageReader;


# direct methods
.method constructor <init>(Landroidx/camera/core/MetadataImageReader;)V
    .locals 0

    .line 59
    iput-object p1, p0, Landroidx/camera/core/MetadataImageReader$1;->this$0:Landroidx/camera/core/MetadataImageReader;

    invoke-direct {p0}, Landroidx/camera/core/impl/CameraCaptureCallback;-><init>()V

    return-void
.end method


# virtual methods
.method public onCaptureCompleted(Landroidx/camera/core/impl/CameraCaptureResult;)V
    .locals 1

    .line 62
    invoke-super {p0, p1}, Landroidx/camera/core/impl/CameraCaptureCallback;->onCaptureCompleted(Landroidx/camera/core/impl/CameraCaptureResult;)V

    .line 63
    iget-object v0, p0, Landroidx/camera/core/MetadataImageReader$1;->this$0:Landroidx/camera/core/MetadataImageReader;

    invoke-virtual {v0, p1}, Landroidx/camera/core/MetadataImageReader;->resultIncoming(Landroidx/camera/core/impl/CameraCaptureResult;)V

    return-void
.end method
