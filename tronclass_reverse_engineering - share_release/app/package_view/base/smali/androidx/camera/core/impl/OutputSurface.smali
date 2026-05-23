.class public abstract Landroidx/camera/core/impl/OutputSurface;
.super Ljava/lang/Object;
.source "OutputSurface.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 32
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static create(Landroid/view/Surface;Landroid/util/Size;I)Landroidx/camera/core/impl/OutputSurface;
    .locals 1

    .line 39
    new-instance v0, Landroidx/camera/core/impl/AutoValue_OutputSurface;

    invoke-direct {v0, p0, p1, p2}, Landroidx/camera/core/impl/AutoValue_OutputSurface;-><init>(Landroid/view/Surface;Landroid/util/Size;I)V

    return-object v0
.end method


# virtual methods
.method public abstract getImageFormat()I
.end method

.method public abstract getSize()Landroid/util/Size;
.end method

.method public abstract getSurface()Landroid/view/Surface;
.end method
