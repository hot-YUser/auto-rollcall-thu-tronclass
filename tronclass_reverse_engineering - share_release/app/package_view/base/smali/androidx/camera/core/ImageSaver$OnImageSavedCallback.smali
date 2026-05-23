.class public interface abstract Landroidx/camera/core/ImageSaver$OnImageSavedCallback;
.super Ljava/lang/Object;
.source "ImageSaver.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/ImageSaver;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x609
    name = "OnImageSavedCallback"
.end annotation


# virtual methods
.method public abstract onError(Landroidx/camera/core/ImageSaver$SaveError;Ljava/lang/String;Ljava/lang/Throwable;)V
.end method

.method public abstract onImageSaved(Landroidx/camera/core/ImageCapture$OutputFileResults;)V
.end method
