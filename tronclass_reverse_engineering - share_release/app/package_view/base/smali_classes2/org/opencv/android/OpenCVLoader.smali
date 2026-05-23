.class public Lorg/opencv/android/OpenCVLoader;
.super Ljava/lang/Object;
.source "OpenCVLoader.java"


# static fields
.field public static final OPENCV_VERSION:Ljava/lang/String; = "4.9.0"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 8
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static initDebug()Z
    .locals 1
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation

    const/4 v0, 0x0

    .line 22
    invoke-static {v0}, Lorg/opencv/android/StaticHelper;->initOpenCV(Z)Z

    move-result v0

    return v0
.end method

.method public static initDebug(Z)Z
    .locals 0
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation

    .line 42
    invoke-static {p0}, Lorg/opencv/android/StaticHelper;->initOpenCV(Z)Z

    move-result p0

    return p0
.end method

.method public static initLocal()Z
    .locals 1

    const/4 v0, 0x0

    .line 31
    invoke-static {v0}, Lorg/opencv/android/StaticHelper;->initOpenCV(Z)Z

    move-result v0

    return v0
.end method
