.class abstract Landroidx/camera/core/processing/OpenGlRenderer$OutputSurface;
.super Ljava/lang/Object;
.source "OpenGlRenderer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/processing/OpenGlRenderer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "OutputSurface"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 864
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static of(Landroid/opengl/EGLSurface;II)Landroidx/camera/core/processing/OpenGlRenderer$OutputSurface;
    .locals 1

    .line 868
    new-instance v0, Landroidx/camera/core/processing/AutoValue_OpenGlRenderer_OutputSurface;

    invoke-direct {v0, p0, p1, p2}, Landroidx/camera/core/processing/AutoValue_OpenGlRenderer_OutputSurface;-><init>(Landroid/opengl/EGLSurface;II)V

    return-object v0
.end method


# virtual methods
.method abstract getEglSurface()Landroid/opengl/EGLSurface;
.end method

.method abstract getHeight()I
.end method

.method abstract getWidth()I
.end method
