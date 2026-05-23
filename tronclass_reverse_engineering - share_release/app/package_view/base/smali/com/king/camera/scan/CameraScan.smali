.class public abstract Lcom/king/camera/scan/CameraScan;
.super Ljava/lang/Object;
.source "CameraScan.java"

# interfaces
.implements Lcom/king/camera/scan/ICamera;
.implements Lcom/king/camera/scan/ICameraControl;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/king/camera/scan/CameraScan$OnScanResultCallback;
    }
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;",
        "Lcom/king/camera/scan/ICamera;",
        "Lcom/king/camera/scan/ICameraControl;"
    }
.end annotation


# static fields
.field public static final ASPECT_RATIO_16_9:F = 1.7777778f

.field public static final ASPECT_RATIO_4_3:F = 1.3333334f

.field public static LENS_FACING_BACK:I = 0x1

.field public static LENS_FACING_FRONT:I = 0x0

.field public static SCAN_RESULT:Ljava/lang/String; = "SCAN_RESULT"


# instance fields
.field private isNeedTouchZoom:Z

.field protected mExtras:Landroid/os/Bundle;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>()V
    .locals 1

    .line 47
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x1

    .line 75
    iput-boolean v0, p0, Lcom/king/camera/scan/CameraScan;->isNeedTouchZoom:Z

    return-void
.end method

.method public static parseScanResult(Landroid/content/Intent;)Ljava/lang/String;
    .locals 1

    if-eqz p0, :cond_0

    .line 235
    sget-object v0, Lcom/king/camera/scan/CameraScan;->SCAN_RESULT:Ljava/lang/String;

    invoke-virtual {p0, v0}, Landroid/content/Intent;->getStringExtra(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0

    :cond_0
    const/4 p0, 0x0

    return-object p0
.end method


# virtual methods
.method public abstract bindFlashlightView(Landroid/view/View;)Lcom/king/camera/scan/CameraScan;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/view/View;",
            ")",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation
.end method

.method public getExtras()Landroid/os/Bundle;
    .locals 1

    .line 109
    iget-object v0, p0, Lcom/king/camera/scan/CameraScan;->mExtras:Landroid/os/Bundle;

    if-nez v0, :cond_0

    .line 110
    new-instance v0, Landroid/os/Bundle;

    invoke-direct {v0}, Landroid/os/Bundle;-><init>()V

    iput-object v0, p0, Lcom/king/camera/scan/CameraScan;->mExtras:Landroid/os/Bundle;

    .line 112
    :cond_0
    iget-object v0, p0, Lcom/king/camera/scan/CameraScan;->mExtras:Landroid/os/Bundle;

    return-object v0
.end method

.method protected isNeedTouchZoom()Z
    .locals 1

    .line 87
    iget-boolean v0, p0, Lcom/king/camera/scan/CameraScan;->isNeedTouchZoom:Z

    return v0
.end method

.method public abstract setAnalyzeImage(Z)Lcom/king/camera/scan/CameraScan;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(Z)",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation
.end method

.method public abstract setAnalyzer(Lcom/king/camera/scan/analyze/Analyzer;)Lcom/king/camera/scan/CameraScan;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/king/camera/scan/analyze/Analyzer<",
            "TT;>;)",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation
.end method

.method public abstract setAutoStopAnalyze(Z)Lcom/king/camera/scan/CameraScan;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(Z)",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation
.end method

.method public abstract setBrightLightLux(F)Lcom/king/camera/scan/CameraScan;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(F)",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation
.end method

.method public abstract setCameraConfig(Lcom/king/camera/scan/config/CameraConfig;)Lcom/king/camera/scan/CameraScan;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/king/camera/scan/config/CameraConfig;",
            ")",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation
.end method

.method public abstract setDarkLightLux(F)Lcom/king/camera/scan/CameraScan;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(F)",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation
.end method

.method public setNeedTouchZoom(Z)Lcom/king/camera/scan/CameraScan;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(Z)",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation

    .line 97
    iput-boolean p1, p0, Lcom/king/camera/scan/CameraScan;->isNeedTouchZoom:Z

    return-object p0
.end method

.method public abstract setOnScanResultCallback(Lcom/king/camera/scan/CameraScan$OnScanResultCallback;)Lcom/king/camera/scan/CameraScan;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/king/camera/scan/CameraScan$OnScanResultCallback<",
            "TT;>;)",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation
.end method

.method public abstract setPlayBeep(Z)Lcom/king/camera/scan/CameraScan;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(Z)",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation
.end method

.method public abstract setVibrate(Z)Lcom/king/camera/scan/CameraScan;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(Z)",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation
.end method
