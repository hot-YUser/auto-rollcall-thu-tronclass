.class abstract Landroidx/camera/core/imagecapture/ProcessingNode$In;
.super Ljava/lang/Object;
.source "ProcessingNode.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/imagecapture/ProcessingNode;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "In"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 266
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static of(II)Landroidx/camera/core/imagecapture/ProcessingNode$In;
    .locals 2

    .line 287
    new-instance v0, Landroidx/camera/core/imagecapture/AutoValue_ProcessingNode_In;

    new-instance v1, Landroidx/camera/core/processing/Edge;

    invoke-direct {v1}, Landroidx/camera/core/processing/Edge;-><init>()V

    invoke-direct {v0, v1, p0, p1}, Landroidx/camera/core/imagecapture/AutoValue_ProcessingNode_In;-><init>(Landroidx/camera/core/processing/Edge;II)V

    return-object v0
.end method


# virtual methods
.method abstract getEdge()Landroidx/camera/core/processing/Edge;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/camera/core/processing/Edge<",
            "Landroidx/camera/core/imagecapture/ProcessingNode$InputPacket;",
            ">;"
        }
    .end annotation
.end method

.method abstract getInputFormat()I
.end method

.method abstract getOutputFormat()I
.end method
