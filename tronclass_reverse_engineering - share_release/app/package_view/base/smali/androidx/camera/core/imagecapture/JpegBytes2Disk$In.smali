.class abstract Landroidx/camera/core/imagecapture/JpegBytes2Disk$In;
.super Ljava/lang/Object;
.source "JpegBytes2Disk.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/imagecapture/JpegBytes2Disk;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "In"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 292
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static of(Landroidx/camera/core/processing/Packet;Landroidx/camera/core/ImageCapture$OutputFileOptions;)Landroidx/camera/core/imagecapture/JpegBytes2Disk$In;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/processing/Packet<",
            "[B>;",
            "Landroidx/camera/core/ImageCapture$OutputFileOptions;",
            ")",
            "Landroidx/camera/core/imagecapture/JpegBytes2Disk$In;"
        }
    .end annotation

    .line 303
    new-instance v0, Landroidx/camera/core/imagecapture/AutoValue_JpegBytes2Disk_In;

    invoke-direct {v0, p0, p1}, Landroidx/camera/core/imagecapture/AutoValue_JpegBytes2Disk_In;-><init>(Landroidx/camera/core/processing/Packet;Landroidx/camera/core/ImageCapture$OutputFileOptions;)V

    return-object v0
.end method


# virtual methods
.method abstract getOutputFileOptions()Landroidx/camera/core/ImageCapture$OutputFileOptions;
.end method

.method abstract getPacket()Landroidx/camera/core/processing/Packet;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/camera/core/processing/Packet<",
            "[B>;"
        }
    .end annotation
.end method
