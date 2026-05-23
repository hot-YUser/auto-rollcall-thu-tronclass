.class abstract Landroidx/camera/core/impl/StateObservable$ErrorWrapper;
.super Ljava/lang/Object;
.source "StateObservable.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/StateObservable;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "ErrorWrapper"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 283
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static wrap(Ljava/lang/Throwable;)Landroidx/camera/core/impl/StateObservable$ErrorWrapper;
    .locals 1

    .line 286
    new-instance v0, Landroidx/camera/core/impl/AutoValue_StateObservable_ErrorWrapper;

    invoke-direct {v0, p0}, Landroidx/camera/core/impl/AutoValue_StateObservable_ErrorWrapper;-><init>(Ljava/lang/Throwable;)V

    return-object v0
.end method


# virtual methods
.method public abstract getError()Ljava/lang/Throwable;
.end method
