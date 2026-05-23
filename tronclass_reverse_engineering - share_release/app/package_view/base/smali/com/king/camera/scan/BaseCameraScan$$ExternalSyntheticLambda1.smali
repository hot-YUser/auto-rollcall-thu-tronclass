.class public final synthetic Lcom/king/camera/scan/BaseCameraScan$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/camera/core/ImageAnalysis$Analyzer;


# instance fields
.field public final synthetic f$0:Lcom/king/camera/scan/BaseCameraScan;


# direct methods
.method public synthetic constructor <init>(Lcom/king/camera/scan/BaseCameraScan;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/king/camera/scan/BaseCameraScan$$ExternalSyntheticLambda1;->f$0:Lcom/king/camera/scan/BaseCameraScan;

    return-void
.end method


# virtual methods
.method public final analyze(Landroidx/camera/core/ImageProxy;)V
    .locals 1

    .line 0
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScan$$ExternalSyntheticLambda1;->f$0:Lcom/king/camera/scan/BaseCameraScan;

    invoke-virtual {v0, p1}, Lcom/king/camera/scan/BaseCameraScan;->lambda$startCamera$3$com-king-camera-scan-BaseCameraScan(Landroidx/camera/core/ImageProxy;)V

    return-void
.end method
