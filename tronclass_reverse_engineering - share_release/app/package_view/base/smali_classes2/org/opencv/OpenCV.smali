.class public final Lorg/opencv/OpenCV;
.super Ljava/lang/Object;
.source "OpenCV.java"


# direct methods
.method private constructor <init>()V
    .locals 1

    .line 16
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 17
    new-instance v0, Ljava/lang/AssertionError;

    invoke-direct {v0}, Ljava/lang/AssertionError;-><init>()V

    throw v0
.end method

.method public static initAsync(Landroid/content/Context;)V
    .locals 0
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation

    .line 37
    invoke-static {}, Lorg/opencv/OpenCV;->initOpenCV()Z

    return-void
.end method

.method public static initOpenCV()Z
    .locals 1

    .line 26
    invoke-static {}, Lorg/opencv/android/OpenCVLoader;->initLocal()Z

    move-result v0

    return v0
.end method
