.class public interface abstract Landroidx/camera/core/impl/MutableConfig;
.super Ljava/lang/Object;
.source "MutableConfig.java"

# interfaces
.implements Landroidx/camera/core/impl/Config;


# virtual methods
.method public abstract insertOption(Landroidx/camera/core/impl/Config$Option;Landroidx/camera/core/impl/Config$OptionPriority;Ljava/lang/Object;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<ValueT:",
            "Ljava/lang/Object;",
            ">(",
            "Landroidx/camera/core/impl/Config$Option<",
            "TValueT;>;",
            "Landroidx/camera/core/impl/Config$OptionPriority;",
            "TValueT;)V"
        }
    .end annotation
.end method

.method public abstract insertOption(Landroidx/camera/core/impl/Config$Option;Ljava/lang/Object;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<ValueT:",
            "Ljava/lang/Object;",
            ">(",
            "Landroidx/camera/core/impl/Config$Option<",
            "TValueT;>;TValueT;)V"
        }
    .end annotation
.end method

.method public abstract removeOption(Landroidx/camera/core/impl/Config$Option;)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<ValueT:",
            "Ljava/lang/Object;",
            ">(",
            "Landroidx/camera/core/impl/Config$Option<",
            "TValueT;>;)TValueT;"
        }
    .end annotation
.end method
