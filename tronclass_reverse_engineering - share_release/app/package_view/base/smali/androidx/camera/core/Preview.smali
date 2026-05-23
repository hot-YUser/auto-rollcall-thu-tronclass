.class public final Landroidx/camera/core/Preview;
.super Landroidx/camera/core/UseCase;
.source "Preview.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/Preview$SurfaceProvider;,
        Landroidx/camera/core/Preview$Defaults;,
        Landroidx/camera/core/Preview$Builder;
    }
.end annotation


# static fields
.field public static final DEFAULT_CONFIG:Landroidx/camera/core/Preview$Defaults;

.field private static final DEFAULT_SURFACE_PROVIDER_EXECUTOR:Ljava/util/concurrent/Executor;

.field private static final TAG:Ljava/lang/String; = "Preview"


# instance fields
.field private mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

.field mCurrentSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

.field private mNode:Landroidx/camera/core/processing/SurfaceProcessorNode;

.field mSessionConfigBuilder:Landroidx/camera/core/impl/SessionConfig$Builder;

.field private mSessionDeferrableSurface:Landroidx/camera/core/impl/DeferrableSurface;

.field private mSurfaceProvider:Landroidx/camera/core/Preview$SurfaceProvider;

.field private mSurfaceProviderExecutor:Ljava/util/concurrent/Executor;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 162
    new-instance v0, Landroidx/camera/core/Preview$Defaults;

    invoke-direct {v0}, Landroidx/camera/core/Preview$Defaults;-><init>()V

    sput-object v0, Landroidx/camera/core/Preview;->DEFAULT_CONFIG:Landroidx/camera/core/Preview$Defaults;

    .line 165
    invoke-static {}, Landroidx/camera/core/impl/utils/executor/CameraXExecutors;->mainThreadExecutor()Ljava/util/concurrent/ScheduledExecutorService;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/Preview;->DEFAULT_SURFACE_PROVIDER_EXECUTOR:Ljava/util/concurrent/Executor;

    return-void
.end method

.method constructor <init>(Landroidx/camera/core/impl/PreviewConfig;)V
    .locals 0

    .line 208
    invoke-direct {p0, p1}, Landroidx/camera/core/UseCase;-><init>(Landroidx/camera/core/impl/UseCaseConfig;)V

    .line 175
    sget-object p1, Landroidx/camera/core/Preview;->DEFAULT_SURFACE_PROVIDER_EXECUTOR:Ljava/util/concurrent/Executor;

    iput-object p1, p0, Landroidx/camera/core/Preview;->mSurfaceProviderExecutor:Ljava/util/concurrent/Executor;

    return-void
.end method

.method private addCameraSurfaceAndErrorListener(Landroidx/camera/core/impl/SessionConfig$Builder;Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;)V
    .locals 2

    .line 343
    iget-object v0, p0, Landroidx/camera/core/Preview;->mSurfaceProvider:Landroidx/camera/core/Preview$SurfaceProvider;

    if-eqz v0, :cond_0

    .line 344
    iget-object v0, p0, Landroidx/camera/core/Preview;->mSessionDeferrableSurface:Landroidx/camera/core/impl/DeferrableSurface;

    .line 345
    invoke-virtual {p4}, Landroidx/camera/core/impl/StreamSpec;->getDynamicRange()Landroidx/camera/core/DynamicRange;

    move-result-object v1

    .line 344
    invoke-virtual {p1, v0, v1}, Landroidx/camera/core/impl/SessionConfig$Builder;->addSurface(Landroidx/camera/core/impl/DeferrableSurface;Landroidx/camera/core/DynamicRange;)Landroidx/camera/core/impl/SessionConfig$Builder;

    .line 348
    :cond_0
    new-instance v0, Landroidx/camera/core/Preview$$ExternalSyntheticLambda3;

    invoke-direct {v0, p0, p2, p3, p4}, Landroidx/camera/core/Preview$$ExternalSyntheticLambda3;-><init>(Landroidx/camera/core/Preview;Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;)V

    invoke-virtual {p1, v0}, Landroidx/camera/core/impl/SessionConfig$Builder;->addErrorListener(Landroidx/camera/core/impl/SessionConfig$ErrorListener;)Landroidx/camera/core/impl/SessionConfig$Builder;

    return-void
.end method

.method private clearPipeline()V
    .locals 2

    .line 313
    iget-object v0, p0, Landroidx/camera/core/Preview;->mSessionDeferrableSurface:Landroidx/camera/core/impl/DeferrableSurface;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    .line 315
    invoke-virtual {v0}, Landroidx/camera/core/impl/DeferrableSurface;->close()V

    .line 316
    iput-object v1, p0, Landroidx/camera/core/Preview;->mSessionDeferrableSurface:Landroidx/camera/core/impl/DeferrableSurface;

    .line 318
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/Preview;->mNode:Landroidx/camera/core/processing/SurfaceProcessorNode;

    if-eqz v0, :cond_1

    .line 320
    invoke-virtual {v0}, Landroidx/camera/core/processing/SurfaceProcessorNode;->release()V

    .line 321
    iput-object v1, p0, Landroidx/camera/core/Preview;->mNode:Landroidx/camera/core/processing/SurfaceProcessorNode;

    .line 323
    :cond_1
    iget-object v0, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    if-eqz v0, :cond_2

    .line 325
    invoke-virtual {v0}, Landroidx/camera/core/processing/SurfaceEdge;->close()V

    .line 326
    iput-object v1, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    .line 328
    :cond_2
    iput-object v1, p0, Landroidx/camera/core/Preview;->mCurrentSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

    return-void
.end method

.method private createPipeline(Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;)Landroidx/camera/core/impl/SessionConfig$Builder;
    .locals 12

    .line 224
    invoke-static {}, Landroidx/camera/core/impl/utils/Threads;->checkMainThread()V

    .line 226
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getCamera()Landroidx/camera/core/impl/CameraInternal;

    move-result-object v0

    invoke-static {v0}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/impl/CameraInternal;

    .line 227
    invoke-direct {p0}, Landroidx/camera/core/Preview;->clearPipeline()V

    .line 230
    iget-object v1, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    if-nez v1, :cond_0

    const/4 v1, 0x1

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    :goto_0
    invoke-static {v1}, Landroidx/core/util/Preconditions;->checkState(Z)V

    .line 231
    new-instance v1, Landroidx/camera/core/processing/SurfaceEdge;

    .line 235
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getSensorToBufferTransformMatrix()Landroid/graphics/Matrix;

    move-result-object v6

    .line 236
    invoke-interface {v0}, Landroidx/camera/core/impl/CameraInternal;->getHasTransform()Z

    move-result v7

    .line 237
    invoke-virtual {p3}, Landroidx/camera/core/impl/StreamSpec;->getResolution()Landroid/util/Size;

    move-result-object v2

    invoke-direct {p0, v2}, Landroidx/camera/core/Preview;->getCropRect(Landroid/util/Size;)Landroid/graphics/Rect;

    move-result-object v2

    invoke-static {v2}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    move-object v8, v2

    check-cast v8, Landroid/graphics/Rect;

    .line 238
    invoke-virtual {p0, v0}, Landroidx/camera/core/Preview;->isMirroringRequired(Landroidx/camera/core/impl/CameraInternal;)Z

    move-result v2

    invoke-virtual {p0, v0, v2}, Landroidx/camera/core/Preview;->getRelativeRotation(Landroidx/camera/core/impl/CameraInternal;Z)I

    move-result v9

    .line 239
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getAppTargetRotation()I

    move-result v10

    .line 240
    invoke-direct {p0, v0}, Landroidx/camera/core/Preview;->shouldMirror(Landroidx/camera/core/impl/CameraInternal;)Z

    move-result v11

    const/4 v3, 0x1

    const/16 v4, 0x22

    move-object v2, v1

    move-object v5, p3

    invoke-direct/range {v2 .. v11}, Landroidx/camera/core/processing/SurfaceEdge;-><init>(IILandroidx/camera/core/impl/StreamSpec;Landroid/graphics/Matrix;ZLandroid/graphics/Rect;IIZ)V

    iput-object v1, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    .line 242
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getEffect()Landroidx/camera/core/CameraEffect;

    move-result-object v1

    if-eqz v1, :cond_1

    .line 245
    new-instance v2, Landroidx/camera/core/processing/SurfaceProcessorNode;

    invoke-virtual {v1}, Landroidx/camera/core/CameraEffect;->createSurfaceProcessorInternal()Landroidx/camera/core/processing/SurfaceProcessorInternal;

    move-result-object v1

    invoke-direct {v2, v0, v1}, Landroidx/camera/core/processing/SurfaceProcessorNode;-><init>(Landroidx/camera/core/impl/CameraInternal;Landroidx/camera/core/processing/SurfaceProcessorInternal;)V

    iput-object v2, p0, Landroidx/camera/core/Preview;->mNode:Landroidx/camera/core/processing/SurfaceProcessorNode;

    .line 246
    iget-object v1, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    new-instance v2, Landroidx/camera/core/Preview$$ExternalSyntheticLambda1;

    invoke-direct {v2, p0}, Landroidx/camera/core/Preview$$ExternalSyntheticLambda1;-><init>(Landroidx/camera/core/Preview;)V

    invoke-virtual {v1, v2}, Landroidx/camera/core/processing/SurfaceEdge;->addOnInvalidatedListener(Ljava/lang/Runnable;)V

    .line 247
    iget-object v1, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    invoke-static {v1}, Landroidx/camera/core/processing/SurfaceProcessorNode$OutConfig;->of(Landroidx/camera/core/processing/SurfaceEdge;)Landroidx/camera/core/processing/SurfaceProcessorNode$OutConfig;

    move-result-object v1

    .line 249
    iget-object v2, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    .line 250
    invoke-static {v1}, Ljava/util/Collections;->singletonList(Ljava/lang/Object;)Ljava/util/List;

    move-result-object v3

    .line 249
    invoke-static {v2, v3}, Landroidx/camera/core/processing/SurfaceProcessorNode$In;->of(Landroidx/camera/core/processing/SurfaceEdge;Ljava/util/List;)Landroidx/camera/core/processing/SurfaceProcessorNode$In;

    move-result-object v2

    .line 251
    iget-object v3, p0, Landroidx/camera/core/Preview;->mNode:Landroidx/camera/core/processing/SurfaceProcessorNode;

    invoke-virtual {v3, v2}, Landroidx/camera/core/processing/SurfaceProcessorNode;->transform(Landroidx/camera/core/processing/SurfaceProcessorNode$In;)Landroidx/camera/core/processing/SurfaceProcessorNode$Out;

    move-result-object v2

    .line 252
    invoke-virtual {v2, v1}, Landroidx/camera/core/processing/SurfaceProcessorNode$Out;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroidx/camera/core/processing/SurfaceEdge;

    invoke-static {v1}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroidx/camera/core/processing/SurfaceEdge;

    .line 253
    new-instance v2, Landroidx/camera/core/Preview$$ExternalSyntheticLambda2;

    invoke-direct {v2, p0, v1, v0}, Landroidx/camera/core/Preview$$ExternalSyntheticLambda2;-><init>(Landroidx/camera/core/Preview;Landroidx/camera/core/processing/SurfaceEdge;Landroidx/camera/core/impl/CameraInternal;)V

    invoke-virtual {v1, v2}, Landroidx/camera/core/processing/SurfaceEdge;->addOnInvalidatedListener(Ljava/lang/Runnable;)V

    .line 254
    invoke-virtual {v1, v0}, Landroidx/camera/core/processing/SurfaceEdge;->createSurfaceRequest(Landroidx/camera/core/impl/CameraInternal;)Landroidx/camera/core/SurfaceRequest;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/Preview;->mCurrentSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

    .line 255
    iget-object v0, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    invoke-virtual {v0}, Landroidx/camera/core/processing/SurfaceEdge;->getDeferrableSurface()Landroidx/camera/core/impl/DeferrableSurface;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/Preview;->mSessionDeferrableSurface:Landroidx/camera/core/impl/DeferrableSurface;

    goto :goto_1

    .line 257
    :cond_1
    iget-object v1, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    new-instance v2, Landroidx/camera/core/Preview$$ExternalSyntheticLambda1;

    invoke-direct {v2, p0}, Landroidx/camera/core/Preview$$ExternalSyntheticLambda1;-><init>(Landroidx/camera/core/Preview;)V

    invoke-virtual {v1, v2}, Landroidx/camera/core/processing/SurfaceEdge;->addOnInvalidatedListener(Ljava/lang/Runnable;)V

    .line 258
    iget-object v1, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    invoke-virtual {v1, v0}, Landroidx/camera/core/processing/SurfaceEdge;->createSurfaceRequest(Landroidx/camera/core/impl/CameraInternal;)Landroidx/camera/core/SurfaceRequest;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/Preview;->mCurrentSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

    .line 259
    invoke-virtual {v0}, Landroidx/camera/core/SurfaceRequest;->getDeferrableSurface()Landroidx/camera/core/impl/DeferrableSurface;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/Preview;->mSessionDeferrableSurface:Landroidx/camera/core/impl/DeferrableSurface;

    .line 262
    :goto_1
    iget-object v0, p0, Landroidx/camera/core/Preview;->mSurfaceProvider:Landroidx/camera/core/Preview$SurfaceProvider;

    if-eqz v0, :cond_2

    .line 264
    invoke-direct {p0}, Landroidx/camera/core/Preview;->sendSurfaceRequest()V

    .line 269
    :cond_2
    invoke-virtual {p3}, Landroidx/camera/core/impl/StreamSpec;->getResolution()Landroid/util/Size;

    move-result-object v0

    .line 268
    invoke-static {p2, v0}, Landroidx/camera/core/impl/SessionConfig$Builder;->createFrom(Landroidx/camera/core/impl/UseCaseConfig;Landroid/util/Size;)Landroidx/camera/core/impl/SessionConfig$Builder;

    move-result-object v0

    .line 270
    invoke-virtual {p3}, Landroidx/camera/core/impl/StreamSpec;->getExpectedFrameRateRange()Landroid/util/Range;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SessionConfig$Builder;->setExpectedFrameRateRange(Landroid/util/Range;)Landroidx/camera/core/impl/SessionConfig$Builder;

    .line 271
    invoke-virtual {p3}, Landroidx/camera/core/impl/StreamSpec;->getImplementationOptions()Landroidx/camera/core/impl/Config;

    move-result-object v1

    if-eqz v1, :cond_3

    .line 272
    invoke-virtual {p3}, Landroidx/camera/core/impl/StreamSpec;->getImplementationOptions()Landroidx/camera/core/impl/Config;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/SessionConfig$Builder;->addImplementationOptions(Landroidx/camera/core/impl/Config;)Landroidx/camera/core/impl/SessionConfig$Builder;

    .line 274
    :cond_3
    invoke-direct {p0, v0, p1, p2, p3}, Landroidx/camera/core/Preview;->addCameraSurfaceAndErrorListener(Landroidx/camera/core/impl/SessionConfig$Builder;Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;)V

    return-object v0
.end method

.method private getCropRect(Landroid/util/Size;)Landroid/graphics/Rect;
    .locals 3

    .line 411
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getViewPortCropRect()Landroid/graphics/Rect;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 412
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getViewPortCropRect()Landroid/graphics/Rect;

    move-result-object p1

    return-object p1

    :cond_0
    if-eqz p1, :cond_1

    .line 414
    new-instance v0, Landroid/graphics/Rect;

    invoke-virtual {p1}, Landroid/util/Size;->getWidth()I

    move-result v1

    invoke-virtual {p1}, Landroid/util/Size;->getHeight()I

    move-result p1

    const/4 v2, 0x0

    invoke-direct {v0, v2, v2, v1, p1}, Landroid/graphics/Rect;-><init>(IIII)V

    return-object v0

    :cond_1
    const/4 p1, 0x0

    return-object p1
.end method

.method static synthetic lambda$sendSurfaceRequest$2(Landroidx/camera/core/Preview$SurfaceProvider;Landroidx/camera/core/SurfaceRequest;)V
    .locals 0

    .line 464
    invoke-interface {p0, p1}, Landroidx/camera/core/Preview$SurfaceProvider;->onSurfaceRequested(Landroidx/camera/core/SurfaceRequest;)V

    return-void
.end method

.method private onAppEdgeInvalidated(Landroidx/camera/core/processing/SurfaceEdge;Landroidx/camera/core/impl/CameraInternal;)V
    .locals 1

    .line 281
    invoke-static {}, Landroidx/camera/core/impl/utils/Threads;->checkMainThread()V

    .line 282
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getCamera()Landroidx/camera/core/impl/CameraInternal;

    move-result-object v0

    if-ne p2, v0, :cond_0

    .line 283
    invoke-virtual {p1, p2}, Landroidx/camera/core/processing/SurfaceEdge;->createSurfaceRequest(Landroidx/camera/core/impl/CameraInternal;)Landroidx/camera/core/SurfaceRequest;

    move-result-object p1

    iput-object p1, p0, Landroidx/camera/core/Preview;->mCurrentSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

    .line 284
    invoke-direct {p0}, Landroidx/camera/core/Preview;->sendSurfaceRequest()V

    :cond_0
    return-void
.end method

.method private sendSurfaceRequest()V
    .locals 4

    .line 459
    invoke-direct {p0}, Landroidx/camera/core/Preview;->sendTransformationInfoIfReady()V

    .line 462
    iget-object v0, p0, Landroidx/camera/core/Preview;->mSurfaceProvider:Landroidx/camera/core/Preview$SurfaceProvider;

    invoke-static {v0}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/Preview$SurfaceProvider;

    .line 463
    iget-object v1, p0, Landroidx/camera/core/Preview;->mCurrentSurfaceRequest:Landroidx/camera/core/SurfaceRequest;

    invoke-static {v1}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroidx/camera/core/SurfaceRequest;

    .line 464
    iget-object v2, p0, Landroidx/camera/core/Preview;->mSurfaceProviderExecutor:Ljava/util/concurrent/Executor;

    new-instance v3, Landroidx/camera/core/Preview$$ExternalSyntheticLambda0;

    invoke-direct {v3, v0, v1}, Landroidx/camera/core/Preview$$ExternalSyntheticLambda0;-><init>(Landroidx/camera/core/Preview$SurfaceProvider;Landroidx/camera/core/SurfaceRequest;)V

    invoke-interface {v2, v3}, Ljava/util/concurrent/Executor;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

.method private sendTransformationInfoIfReady()V
    .locals 3

    .line 393
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getCamera()Landroidx/camera/core/impl/CameraInternal;

    move-result-object v0

    .line 394
    iget-object v1, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    if-eqz v0, :cond_0

    if-eqz v1, :cond_0

    .line 397
    invoke-virtual {p0, v0}, Landroidx/camera/core/Preview;->isMirroringRequired(Landroidx/camera/core/impl/CameraInternal;)Z

    move-result v2

    invoke-virtual {p0, v0, v2}, Landroidx/camera/core/Preview;->getRelativeRotation(Landroidx/camera/core/impl/CameraInternal;Z)I

    move-result v0

    .line 398
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getAppTargetRotation()I

    move-result v2

    .line 396
    invoke-virtual {v1, v0, v2}, Landroidx/camera/core/processing/SurfaceEdge;->updateTransformation(II)V

    :cond_0
    return-void
.end method

.method private shouldMirror(Landroidx/camera/core/impl/CameraInternal;)Z
    .locals 1

    .line 306
    invoke-interface {p1}, Landroidx/camera/core/impl/CameraInternal;->getHasTransform()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-virtual {p0, p1}, Landroidx/camera/core/Preview;->isMirroringRequired(Landroidx/camera/core/impl/CameraInternal;)Z

    move-result p1

    if-eqz p1, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return p1
.end method

.method private updateConfigAndOutput(Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;)V
    .locals 0

    .line 486
    invoke-direct {p0, p1, p2, p3}, Landroidx/camera/core/Preview;->createPipeline(Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;)Landroidx/camera/core/impl/SessionConfig$Builder;

    move-result-object p1

    iput-object p1, p0, Landroidx/camera/core/Preview;->mSessionConfigBuilder:Landroidx/camera/core/impl/SessionConfig$Builder;

    .line 487
    invoke-virtual {p1}, Landroidx/camera/core/impl/SessionConfig$Builder;->build()Landroidx/camera/core/impl/SessionConfig;

    move-result-object p1

    invoke-virtual {p0, p1}, Landroidx/camera/core/Preview;->updateSessionConfig(Landroidx/camera/core/impl/SessionConfig;)V

    return-void
.end method


# virtual methods
.method public getCameraEdge()Landroidx/camera/core/processing/SurfaceEdge;
    .locals 1

    .line 639
    iget-object v0, p0, Landroidx/camera/core/Preview;->mCameraEdge:Landroidx/camera/core/processing/SurfaceEdge;

    invoke-static {v0}, Ljava/util/Objects;->requireNonNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/processing/SurfaceEdge;

    return-object v0
.end method

.method public getDefaultConfig(ZLandroidx/camera/core/impl/UseCaseConfigFactory;)Landroidx/camera/core/impl/UseCaseConfig;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(Z",
            "Landroidx/camera/core/impl/UseCaseConfigFactory;",
            ")",
            "Landroidx/camera/core/impl/UseCaseConfig<",
            "*>;"
        }
    .end annotation

    .line 553
    sget-object v0, Landroidx/camera/core/Preview;->DEFAULT_CONFIG:Landroidx/camera/core/Preview$Defaults;

    .line 554
    invoke-virtual {v0}, Landroidx/camera/core/Preview$Defaults;->getConfig()Landroidx/camera/core/impl/PreviewConfig;

    move-result-object v1

    invoke-virtual {v1}, Landroidx/camera/core/impl/PreviewConfig;->getCaptureType()Landroidx/camera/core/impl/UseCaseConfigFactory$CaptureType;

    move-result-object v1

    const/4 v2, 0x1

    .line 553
    invoke-interface {p2, v1, v2}, Landroidx/camera/core/impl/UseCaseConfigFactory;->getConfig(Landroidx/camera/core/impl/UseCaseConfigFactory$CaptureType;I)Landroidx/camera/core/impl/Config;

    move-result-object p2

    if-eqz p1, :cond_0

    .line 558
    invoke-virtual {v0}, Landroidx/camera/core/Preview$Defaults;->getConfig()Landroidx/camera/core/impl/PreviewConfig;

    move-result-object p1

    invoke-static {p2, p1}, Landroidx/camera/core/impl/Config;->mergeConfigs(Landroidx/camera/core/impl/Config;Landroidx/camera/core/impl/Config;)Landroidx/camera/core/impl/Config;

    move-result-object p2

    :cond_0
    if-nez p2, :cond_1

    const/4 p1, 0x0

    goto :goto_0

    .line 562
    :cond_1
    invoke-virtual {p0, p2}, Landroidx/camera/core/Preview;->getUseCaseConfigBuilder(Landroidx/camera/core/impl/Config;)Landroidx/camera/core/impl/UseCaseConfig$Builder;

    move-result-object p1

    invoke-interface {p1}, Landroidx/camera/core/impl/UseCaseConfig$Builder;->getUseCaseConfig()Landroidx/camera/core/impl/UseCaseConfig;

    move-result-object p1

    :goto_0
    return-object p1
.end method

.method protected getRelativeRotation(Landroidx/camera/core/impl/CameraInternal;Z)I
    .locals 1

    .line 293
    invoke-interface {p1}, Landroidx/camera/core/impl/CameraInternal;->getHasTransform()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 294
    invoke-super {p0, p1, p2}, Landroidx/camera/core/UseCase;->getRelativeRotation(Landroidx/camera/core/impl/CameraInternal;Z)I

    move-result p1

    return p1

    :cond_0
    const/4 p1, 0x0

    return p1
.end method

.method public getResolutionInfo()Landroidx/camera/core/ResolutionInfo;
    .locals 1

    .line 525
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getResolutionInfoInternal()Landroidx/camera/core/ResolutionInfo;

    move-result-object v0

    return-object v0
.end method

.method public getResolutionSelector()Landroidx/camera/core/resolutionselector/ResolutionSelector;
    .locals 2

    .line 536
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getCurrentConfig()Landroidx/camera/core/impl/UseCaseConfig;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/impl/ImageOutputConfig;

    const/4 v1, 0x0

    invoke-interface {v0, v1}, Landroidx/camera/core/impl/ImageOutputConfig;->getResolutionSelector(Landroidx/camera/core/resolutionselector/ResolutionSelector;)Landroidx/camera/core/resolutionselector/ResolutionSelector;

    move-result-object v0

    return-object v0
.end method

.method public getSupportedEffectTargets()Ljava/util/Set;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 649
    new-instance v0, Ljava/util/HashSet;

    invoke-direct {v0}, Ljava/util/HashSet;-><init>()V

    const/4 v1, 0x1

    .line 650
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/Set;->add(Ljava/lang/Object;)Z

    return-object v0
.end method

.method public getTargetFrameRate()Landroid/util/Range;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 669
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getTargetFrameRateInternal()Landroid/util/Range;

    move-result-object v0

    return-object v0
.end method

.method public getTargetRotation()I
    .locals 1

    .line 504
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getTargetRotationInternal()I

    move-result v0

    return v0
.end method

.method public getUseCaseConfigBuilder(Landroidx/camera/core/impl/Config;)Landroidx/camera/core/impl/UseCaseConfig$Builder;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/Config;",
            ")",
            "Landroidx/camera/core/impl/UseCaseConfig$Builder<",
            "***>;"
        }
    .end annotation

    .line 586
    invoke-static {p1}, Landroidx/camera/core/Preview$Builder;->fromConfig(Landroidx/camera/core/impl/Config;)Landroidx/camera/core/Preview$Builder;

    move-result-object p1

    return-object p1
.end method

.method synthetic lambda$addCameraSurfaceAndErrorListener$1$androidx-camera-core-Preview(Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;Landroidx/camera/core/impl/SessionConfig;Landroidx/camera/core/impl/SessionConfig$SessionError;)V
    .locals 0

    .line 352
    invoke-virtual {p0, p1}, Landroidx/camera/core/Preview;->isCurrentCamera(Ljava/lang/String;)Z

    move-result p4

    if-eqz p4, :cond_0

    .line 354
    invoke-direct {p0, p1, p2, p3}, Landroidx/camera/core/Preview;->createPipeline(Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;)Landroidx/camera/core/impl/SessionConfig$Builder;

    move-result-object p1

    .line 357
    invoke-virtual {p1}, Landroidx/camera/core/impl/SessionConfig$Builder;->build()Landroidx/camera/core/impl/SessionConfig;

    move-result-object p1

    invoke-virtual {p0, p1}, Landroidx/camera/core/Preview;->updateSessionConfig(Landroidx/camera/core/impl/SessionConfig;)V

    .line 358
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->notifyReset()V

    :cond_0
    return-void
.end method

.method synthetic lambda$createPipeline$0$androidx-camera-core-Preview(Landroidx/camera/core/processing/SurfaceEdge;Landroidx/camera/core/impl/CameraInternal;)V
    .locals 0

    .line 253
    invoke-direct {p0, p1, p2}, Landroidx/camera/core/Preview;->onAppEdgeInvalidated(Landroidx/camera/core/processing/SurfaceEdge;Landroidx/camera/core/impl/CameraInternal;)V

    return-void
.end method

.method protected onMergeConfig(Landroidx/camera/core/impl/CameraInfoInternal;Landroidx/camera/core/impl/UseCaseConfig$Builder;)Landroidx/camera/core/impl/UseCaseConfig;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/CameraInfoInternal;",
            "Landroidx/camera/core/impl/UseCaseConfig$Builder<",
            "***>;)",
            "Landroidx/camera/core/impl/UseCaseConfig<",
            "*>;"
        }
    .end annotation

    .line 573
    invoke-interface {p2}, Landroidx/camera/core/impl/UseCaseConfig$Builder;->getMutableConfig()Landroidx/camera/core/impl/MutableConfig;

    move-result-object p1

    sget-object v0, Landroidx/camera/core/impl/ImageInputConfig;->OPTION_INPUT_FORMAT:Landroidx/camera/core/impl/Config$Option;

    const/16 v1, 0x22

    .line 574
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    .line 573
    invoke-interface {p1, v0, v1}, Landroidx/camera/core/impl/MutableConfig;->insertOption(Landroidx/camera/core/impl/Config$Option;Ljava/lang/Object;)V

    .line 576
    invoke-interface {p2}, Landroidx/camera/core/impl/UseCaseConfig$Builder;->getUseCaseConfig()Landroidx/camera/core/impl/UseCaseConfig;

    move-result-object p1

    return-object p1
.end method

.method protected onSuggestedStreamSpecImplementationOptionsUpdated(Landroidx/camera/core/impl/Config;)Landroidx/camera/core/impl/StreamSpec;
    .locals 1

    .line 617
    iget-object v0, p0, Landroidx/camera/core/Preview;->mSessionConfigBuilder:Landroidx/camera/core/impl/SessionConfig$Builder;

    invoke-virtual {v0, p1}, Landroidx/camera/core/impl/SessionConfig$Builder;->addImplementationOptions(Landroidx/camera/core/impl/Config;)Landroidx/camera/core/impl/SessionConfig$Builder;

    .line 618
    iget-object v0, p0, Landroidx/camera/core/Preview;->mSessionConfigBuilder:Landroidx/camera/core/impl/SessionConfig$Builder;

    invoke-virtual {v0}, Landroidx/camera/core/impl/SessionConfig$Builder;->build()Landroidx/camera/core/impl/SessionConfig;

    move-result-object v0

    invoke-virtual {p0, v0}, Landroidx/camera/core/Preview;->updateSessionConfig(Landroidx/camera/core/impl/SessionConfig;)V

    .line 619
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getAttachedStreamSpec()Landroidx/camera/core/impl/StreamSpec;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/camera/core/impl/StreamSpec;->toBuilder()Landroidx/camera/core/impl/StreamSpec$Builder;

    move-result-object v0

    invoke-virtual {v0, p1}, Landroidx/camera/core/impl/StreamSpec$Builder;->setImplementationOptions(Landroidx/camera/core/impl/Config;)Landroidx/camera/core/impl/StreamSpec$Builder;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/camera/core/impl/StreamSpec$Builder;->build()Landroidx/camera/core/impl/StreamSpec;

    move-result-object p1

    return-object p1
.end method

.method protected onSuggestedStreamSpecUpdated(Landroidx/camera/core/impl/StreamSpec;)Landroidx/camera/core/impl/StreamSpec;
    .locals 2

    .line 605
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getCameraId()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getCurrentConfig()Landroidx/camera/core/impl/UseCaseConfig;

    move-result-object v1

    check-cast v1, Landroidx/camera/core/impl/PreviewConfig;

    invoke-direct {p0, v0, v1, p1}, Landroidx/camera/core/Preview;->updateConfigAndOutput(Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;)V

    return-object p1
.end method

.method public onUnbind()V
    .locals 0

    .line 595
    invoke-direct {p0}, Landroidx/camera/core/Preview;->clearPipeline()V

    return-void
.end method

.method public setSurfaceProvider(Landroidx/camera/core/Preview$SurfaceProvider;)V
    .locals 1

    .line 481
    sget-object v0, Landroidx/camera/core/Preview;->DEFAULT_SURFACE_PROVIDER_EXECUTOR:Ljava/util/concurrent/Executor;

    invoke-virtual {p0, v0, p1}, Landroidx/camera/core/Preview;->setSurfaceProvider(Ljava/util/concurrent/Executor;Landroidx/camera/core/Preview$SurfaceProvider;)V

    return-void
.end method

.method public setSurfaceProvider(Ljava/util/concurrent/Executor;Landroidx/camera/core/Preview$SurfaceProvider;)V
    .locals 1

    .line 434
    invoke-static {}, Landroidx/camera/core/impl/utils/Threads;->checkMainThread()V

    if-nez p2, :cond_0

    const/4 p1, 0x0

    .line 437
    iput-object p1, p0, Landroidx/camera/core/Preview;->mSurfaceProvider:Landroidx/camera/core/Preview$SurfaceProvider;

    .line 438
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->notifyInactive()V

    goto :goto_0

    .line 440
    :cond_0
    iput-object p2, p0, Landroidx/camera/core/Preview;->mSurfaceProvider:Landroidx/camera/core/Preview$SurfaceProvider;

    .line 441
    iput-object p1, p0, Landroidx/camera/core/Preview;->mSurfaceProviderExecutor:Ljava/util/concurrent/Executor;

    .line 447
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getAttachedSurfaceResolution()Landroid/util/Size;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 448
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getCameraId()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getCurrentConfig()Landroidx/camera/core/impl/UseCaseConfig;

    move-result-object p2

    check-cast p2, Landroidx/camera/core/impl/PreviewConfig;

    .line 449
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getAttachedStreamSpec()Landroidx/camera/core/impl/StreamSpec;

    move-result-object v0

    .line 448
    invoke-direct {p0, p1, p2, v0}, Landroidx/camera/core/Preview;->updateConfigAndOutput(Ljava/lang/String;Landroidx/camera/core/impl/PreviewConfig;Landroidx/camera/core/impl/StreamSpec;)V

    .line 450
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->notifyReset()V

    .line 452
    :cond_1
    invoke-virtual {p0}, Landroidx/camera/core/Preview;->notifyActive()V

    :goto_0
    return-void
.end method

.method public setTargetRotation(I)V
    .locals 0

    .line 385
    invoke-virtual {p0, p1}, Landroidx/camera/core/Preview;->setTargetRotationInternal(I)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 386
    invoke-direct {p0}, Landroidx/camera/core/Preview;->sendTransformationInfoIfReady()V

    :cond_0
    return-void
.end method

.method public setViewPortCropRect(Landroid/graphics/Rect;)V
    .locals 0

    .line 628
    invoke-super {p0, p1}, Landroidx/camera/core/UseCase;->setViewPortCropRect(Landroid/graphics/Rect;)V

    .line 629
    invoke-direct {p0}, Landroidx/camera/core/Preview;->sendTransformationInfoIfReady()V

    return-void
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 542
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Preview:"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0}, Landroidx/camera/core/Preview;->getName()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
