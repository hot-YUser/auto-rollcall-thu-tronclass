.class public final synthetic Lcom/king/camera/scan/BaseCameraScan$$ExternalSyntheticLambda2;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/lifecycle/Observer;


# instance fields
.field public final synthetic f$0:Lcom/king/camera/scan/BaseCameraScan;


# direct methods
.method public synthetic constructor <init>(Lcom/king/camera/scan/BaseCameraScan;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/king/camera/scan/BaseCameraScan$$ExternalSyntheticLambda2;->f$0:Lcom/king/camera/scan/BaseCameraScan;

    return-void
.end method


# virtual methods
.method public final onChanged(Ljava/lang/Object;)V
    .locals 1

    .line 0
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScan$$ExternalSyntheticLambda2;->f$0:Lcom/king/camera/scan/BaseCameraScan;

    check-cast p1, Lcom/king/camera/scan/AnalyzeResult;

    invoke-virtual {v0, p1}, Lcom/king/camera/scan/BaseCameraScan;->lambda$initData$0$com-king-camera-scan-BaseCameraScan(Lcom/king/camera/scan/AnalyzeResult;)V

    return-void
.end method
