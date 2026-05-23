.class public final synthetic Landroidx/camera/core/Preview$$ExternalSyntheticLambda3;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/camera/core/impl/SessionConfig$ErrorListener;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/Preview;

.field public final synthetic f$1:Ljava/lang/String;

.field public final synthetic f$2:Landroidx/camera/core/impl/PreviewConfig;

.field public final synthetic f$3:Landroidx/camera/core/impl/StreamSpec;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/Preview;Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/Preview$$ExternalSyntheticLambda3;->f$0:Landroidx/camera/core/Preview;

    iput-object p2, p0, Landroidx/camera/core/Preview$$ExternalSyntheticLambda3;->f$1:Ljava/lang/String;

    iput-object p3, p0, Landroidx/camera/core/Preview$$ExternalSyntheticLambda3;->f$2:Landroidx/camera/core/impl/PreviewConfig;

    iput-object p4, p0, Landroidx/camera/core/Preview$$ExternalSyntheticLambda3;->f$3:Landroidx/camera/core/impl/StreamSpec;

    return-void
.end method


# virtual methods
.method public final onError(Landroidx/camera/core/impl/SessionConfig;Landroidx/camera/core/impl/SessionConfig$SessionError;)V
    .locals 6

    .line 0
    iget-object v0, p0, Landroidx/camera/core/Preview$$ExternalSyntheticLambda3;->f$0:Landroidx/camera/core/Preview;

    iget-object v1, p0, Landroidx/camera/core/Preview$$ExternalSyntheticLambda3;->f$1:Ljava/lang/String;

    iget-object v2, p0, Landroidx/camera/core/Preview$$ExternalSyntheticLambda3;->f$2:Landroidx/camera/core/impl/PreviewConfig;

    iget-object v3, p0, Landroidx/camera/core/Preview$$ExternalSyntheticLambda3;->f$3:Landroidx/camera/core/impl/StreamSpec;

    move-object v4, p1

    move-object v5, p2

    invoke-virtual/range {v0 .. v5}, Landroidx/camera/core/Preview;->lambda$addCameraSurfaceAndErrorListener$1$androidx-camera-core-Preview(Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;Landroidx/camera/core/impl/SessionConfig;Landroidx/camera/core/impl/SessionConfig$SessionError;)V

    return-void
.end method
