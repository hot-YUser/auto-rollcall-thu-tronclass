.class public interface abstract Landroidx/camera/core/impl/RequestProcessor;
.super Ljava/lang/Object;
.source "RequestProcessor.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/RequestProcessor$Callback;,
        Landroidx/camera/core/impl/RequestProcessor$Request;
    }
.end annotation


# virtual methods
.method public abstract abortCaptures()V
.end method

.method public abstract setRepeating(Landroidx/camera/core/impl/RequestProcessor$Request;Landroidx/camera/core/impl/RequestProcessor$Callback;)I
.end method

.method public abstract stopRepeating()V
.end method

.method public abstract submit(Landroidx/camera/core/impl/RequestProcessor$Request;Landroidx/camera/core/impl/RequestProcessor$Callback;)I
.end method

.method public abstract submit(Ljava/util/List;Landroidx/camera/core/impl/RequestProcessor$Callback;)I
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/RequestProcessor$Request;",
            ">;",
            "Landroidx/camera/core/impl/RequestProcessor$Callback;",
            ")I"
        }
    .end annotation
.end method
