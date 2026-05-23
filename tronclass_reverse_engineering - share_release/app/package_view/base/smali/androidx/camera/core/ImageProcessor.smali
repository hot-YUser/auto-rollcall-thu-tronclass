.class public interface abstract Landroidx/camera/core/ImageProcessor;
.super Ljava/lang/Object;
.source "ImageProcessor.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/ImageProcessor$Response;,
        Landroidx/camera/core/ImageProcessor$Request;,
        Landroidx/camera/core/ImageProcessor$OutputFormats;
    }
.end annotation


# virtual methods
.method public abstract process(Landroidx/camera/core/ImageProcessor$Request;)Landroidx/camera/core/ImageProcessor$Response;
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Landroidx/camera/core/ProcessingException;
        }
    .end annotation
.end method
