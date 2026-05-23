.class public abstract Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;
.super Ljava/lang/Object;
.source "VideoEncoderDataSpace.java"


# static fields
.field public static final ENCODER_DATA_SPACE_BT2020_HLG:Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

.field public static final ENCODER_DATA_SPACE_BT2020_PQ:Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

.field public static final ENCODER_DATA_SPACE_BT709:Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

.field public static final ENCODER_DATA_SPACE_UNSPECIFIED:Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

.field public static final VIDEO_COLOR_RANGE_UNSPECIFIED:I

.field public static final VIDEO_COLOR_STANDARD_UNSPECIFIED:I

.field public static final VIDEO_COLOR_TRANSFER_UNSPECIFIED:I


# direct methods
.method static constructor <clinit>()V
    .locals 3

    const/4 v0, 0x0

    .line 47
    invoke-static {v0, v0, v0}, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;->create(III)Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;->ENCODER_DATA_SPACE_UNSPECIFIED:Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

    const/4 v0, 0x3

    const/4 v1, 0x2

    const/4 v2, 0x1

    .line 57
    invoke-static {v2, v0, v1}, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;->create(III)Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;->ENCODER_DATA_SPACE_BT709:Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

    const/4 v0, 0x7

    const/4 v1, 0x6

    .line 67
    invoke-static {v1, v0, v2}, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;->create(III)Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;->ENCODER_DATA_SPACE_BT2020_HLG:Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

    .line 77
    invoke-static {v1, v1, v2}, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;->create(III)Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;->ENCODER_DATA_SPACE_BT2020_PQ:Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;

    return-void
.end method

.method constructor <init>()V
    .locals 0

    .line 82
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static create(III)Landroidx/camera/video/internal/encoder/VideoEncoderDataSpace;
    .locals 1

    .line 88
    new-instance v0, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;

    invoke-direct {v0, p0, p1, p2}, Landroidx/camera/video/internal/encoder/AutoValue_VideoEncoderDataSpace;-><init>(III)V

    return-object v0
.end method


# virtual methods
.method public abstract getRange()I
.end method

.method public abstract getStandard()I
.end method

.method public abstract getTransfer()I
.end method
