.class Lcom/king/camera/scan/BaseCameraScan$2;
.super Ljava/lang/Object;
.source "BaseCameraScan.java"

# interfaces
.implements Lcom/king/camera/scan/analyze/Analyzer$OnAnalyzeListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/king/camera/scan/BaseCameraScan;->initData()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lcom/king/camera/scan/analyze/Analyzer$OnAnalyzeListener<",
        "TT;>;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Lcom/king/camera/scan/BaseCameraScan;


# direct methods
.method constructor <init>(Lcom/king/camera/scan/BaseCameraScan;)V
    .locals 0

    .line 213
    iput-object p1, p0, Lcom/king/camera/scan/BaseCameraScan$2;->this$0:Lcom/king/camera/scan/BaseCameraScan;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Ljava/lang/Exception;)V
    .locals 1

    .line 221
    iget-object p1, p0, Lcom/king/camera/scan/BaseCameraScan$2;->this$0:Lcom/king/camera/scan/BaseCameraScan;

    invoke-static {p1}, Lcom/king/camera/scan/BaseCameraScan;->access$100(Lcom/king/camera/scan/BaseCameraScan;)Landroidx/lifecycle/MutableLiveData;

    move-result-object p1

    const/4 v0, 0x0

    invoke-virtual {p1, v0}, Landroidx/lifecycle/MutableLiveData;->postValue(Ljava/lang/Object;)V

    return-void
.end method

.method public onSuccess(Lcom/king/camera/scan/AnalyzeResult;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/king/camera/scan/AnalyzeResult<",
            "TT;>;)V"
        }
    .end annotation

    .line 216
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScan$2;->this$0:Lcom/king/camera/scan/BaseCameraScan;

    invoke-static {v0}, Lcom/king/camera/scan/BaseCameraScan;->access$100(Lcom/king/camera/scan/BaseCameraScan;)Landroidx/lifecycle/MutableLiveData;

    move-result-object v0

    invoke-virtual {v0, p1}, Landroidx/lifecycle/MutableLiveData;->postValue(Ljava/lang/Object;)V

    return-void
.end method
