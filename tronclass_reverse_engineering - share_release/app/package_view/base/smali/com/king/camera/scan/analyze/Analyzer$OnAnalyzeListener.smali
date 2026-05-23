.class public interface abstract Lcom/king/camera/scan/analyze/Analyzer$OnAnalyzeListener;
.super Ljava/lang/Object;
.source "Analyzer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/king/camera/scan/analyze/Analyzer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x609
    name = "OnAnalyzeListener"
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
.method public abstract onFailure(Ljava/lang/Exception;)V
.end method

.method public abstract onSuccess(Lcom/king/camera/scan/AnalyzeResult;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/king/camera/scan/AnalyzeResult<",
            "TT;>;)V"
        }
    .end annotation
.end method
