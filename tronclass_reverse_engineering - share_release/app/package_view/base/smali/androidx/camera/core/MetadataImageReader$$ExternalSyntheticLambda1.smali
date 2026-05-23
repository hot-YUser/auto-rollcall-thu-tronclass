.class public final synthetic Landroidx/camera/core/MetadataImageReader$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/MetadataImageReader;

.field public final synthetic f$1:Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/MetadataImageReader;Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/MetadataImageReader$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/MetadataImageReader;

    iput-object p2, p0, Landroidx/camera/core/MetadataImageReader$$ExternalSyntheticLambda1;->f$1:Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/core/MetadataImageReader$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/MetadataImageReader;

    iget-object v1, p0, Landroidx/camera/core/MetadataImageReader$$ExternalSyntheticLambda1;->f$1:Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;

    invoke-virtual {v0, v1}, Landroidx/camera/core/MetadataImageReader;->lambda$enqueueImageProxy$1$androidx-camera-core-MetadataImageReader(Landroidx/camera/core/impl/ImageReaderProxy$OnImageAvailableListener;)V

    return-void
.end method
