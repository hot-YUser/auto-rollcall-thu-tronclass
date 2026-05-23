.class abstract Landroidx/camera/core/processing/DefaultSurfaceProcessor$PendingSnapshot;
.super Ljava/lang/Object;
.source "DefaultSurfaceProcessor.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/processing/DefaultSurfaceProcessor;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "PendingSnapshot"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 405
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static of(IILandroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Landroidx/camera/core/processing/AutoValue_DefaultSurfaceProcessor_PendingSnapshot;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(II",
            "Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer<",
            "Ljava/lang/Void;",
            ">;)",
            "Landroidx/camera/core/processing/AutoValue_DefaultSurfaceProcessor_PendingSnapshot;"
        }
    .end annotation

    .line 421
    new-instance v0, Landroidx/camera/core/processing/AutoValue_DefaultSurfaceProcessor_PendingSnapshot;

    invoke-direct {v0, p0, p1, p2}, Landroidx/camera/core/processing/AutoValue_DefaultSurfaceProcessor_PendingSnapshot;-><init>(IILandroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)V

    return-object v0
.end method


# virtual methods
.method abstract getCompleter()Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation
.end method

.method abstract getJpegQuality()I
.end method

.method abstract getRotationDegrees()I
.end method
