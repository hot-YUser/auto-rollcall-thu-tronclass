.class public final synthetic Landroidx/camera/video/VideoCapture$Defaults$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/arch/core/util/Function;


# direct methods
.method public synthetic constructor <init>()V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public final apply(Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 0
    check-cast p1, Landroidx/camera/video/internal/encoder/VideoEncoderConfig;

    invoke-static {p1}, Landroidx/camera/video/VideoCapture$Defaults;->lambda$createFinder$0(Landroidx/camera/video/internal/encoder/VideoEncoderConfig;)Landroidx/camera/video/internal/encoder/VideoEncoderInfo;

    move-result-object p1

    return-object p1
.end method
