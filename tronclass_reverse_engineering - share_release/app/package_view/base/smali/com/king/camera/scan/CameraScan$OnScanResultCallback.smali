.class public interface abstract Lcom/king/camera/scan/CameraScan$OnScanResultCallback;
.super Ljava/lang/Object;
.source "CameraScan.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/king/camera/scan/CameraScan;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x609
    name = "OnScanResultCallback"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;"
    }
.end annotation


# virtual methods
.method public abstract onScanResultCallback(Lcom/king/camera/scan/AnalyzeResult;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/king/camera/scan/AnalyzeResult<",
            "TT;>;)V"
        }
    .end annotation
.end method

.method public onScanResultFailure()V
    .locals 0

    return-void
.end method
