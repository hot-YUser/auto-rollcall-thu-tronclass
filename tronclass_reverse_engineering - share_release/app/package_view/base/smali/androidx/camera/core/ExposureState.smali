.class public interface abstract Landroidx/camera/core/ExposureState;
.super Ljava/lang/Object;
.source "ExposureState.java"


# virtual methods
.method public abstract getExposureCompensationIndex()I
.end method

.method public abstract getExposureCompensationRange()Landroid/util/Range;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end method

.method public abstract getExposureCompensationStep()Landroid/util/Rational;
.end method

.method public abstract isExposureCompensationSupported()Z
.end method
