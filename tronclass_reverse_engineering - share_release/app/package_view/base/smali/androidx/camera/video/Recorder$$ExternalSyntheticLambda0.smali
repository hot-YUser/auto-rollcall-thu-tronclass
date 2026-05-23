.class public final synthetic Landroidx/camera/video/Recorder$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/core/util/Consumer;


# direct methods
.method public synthetic constructor <init>()V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public final accept(Ljava/lang/Object;)V
    .locals 0

    .line 0
    check-cast p1, Landroidx/camera/video/VideoSpec$Builder;

    invoke-static {p1}, Landroidx/camera/video/Recorder;->lambda$composeRecorderMediaSpec$9(Landroidx/camera/video/VideoSpec$Builder;)V

    return-void
.end method
