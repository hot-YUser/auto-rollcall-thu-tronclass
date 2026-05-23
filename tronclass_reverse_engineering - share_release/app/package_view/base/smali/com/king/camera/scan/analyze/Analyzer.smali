.class public interface abstract Lcom/king/camera/scan/analyze/Analyzer;
.super Ljava/lang/Object;
.source "Analyzer.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/king/camera/scan/analyze/Analyzer$OnAnalyzeListener;
    }
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
.method public abstract analyze(Landroidx/camera/core/ImageProxy;Lcom/king/camera/scan/analyze/Analyzer$OnAnalyzeListener;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/ImageProxy;",
            "Lcom/king/camera/scan/analyze/Analyzer$OnAnalyzeListener<",
            "TT;>;)V"
        }
    .end annotation
.end method
