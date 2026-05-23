.class public final synthetic Landroidx/camera/core/ImageSaver$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/ImageSaver;

.field public final synthetic f$1:Landroidx/camera/core/ImageSaver$SaveError;

.field public final synthetic f$2:Ljava/lang/String;

.field public final synthetic f$3:Ljava/lang/Throwable;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/ImageSaver;Landroidx/camera/core/ImageSaver$SaveError;Ljava/lang/String;Ljava/lang/Throwable;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/ImageSaver$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/core/ImageSaver;

    iput-object p2, p0, Landroidx/camera/core/ImageSaver$$ExternalSyntheticLambda0;->f$1:Landroidx/camera/core/ImageSaver$SaveError;

    iput-object p3, p0, Landroidx/camera/core/ImageSaver$$ExternalSyntheticLambda0;->f$2:Ljava/lang/String;

    iput-object p4, p0, Landroidx/camera/core/ImageSaver$$ExternalSyntheticLambda0;->f$3:Ljava/lang/Throwable;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 4

    .line 0
    iget-object v0, p0, Landroidx/camera/core/ImageSaver$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/core/ImageSaver;

    iget-object v1, p0, Landroidx/camera/core/ImageSaver$$ExternalSyntheticLambda0;->f$1:Landroidx/camera/core/ImageSaver$SaveError;

    iget-object v2, p0, Landroidx/camera/core/ImageSaver$$ExternalSyntheticLambda0;->f$2:Ljava/lang/String;

    iget-object v3, p0, Landroidx/camera/core/ImageSaver$$ExternalSyntheticLambda0;->f$3:Ljava/lang/Throwable;

    invoke-virtual {v0, v1, v2, v3}, Landroidx/camera/core/ImageSaver;->lambda$postError$2$androidx-camera-core-ImageSaver(Landroidx/camera/core/ImageSaver$SaveError;Ljava/lang/String;Ljava/lang/Throwable;)V

    return-void
.end method
