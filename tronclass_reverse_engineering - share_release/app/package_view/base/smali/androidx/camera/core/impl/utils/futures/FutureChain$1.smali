.class Landroidx/camera/core/impl/utils/futures/FutureChain$1;
.super Ljava/lang/Object;
.source "FutureChain.java"

# interfaces
.implements Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/core/impl/utils/futures/FutureChain;-><init>()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver<",
        "TV;>;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/core/impl/utils/futures/FutureChain;


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/utils/futures/FutureChain;)V
    .locals 0

    .line 121
    iput-object p1, p0, Landroidx/camera/core/impl/utils/futures/FutureChain$1;->this$0:Landroidx/camera/core/impl/utils/futures/FutureChain;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public attachCompleter(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer<",
            "TV;>;)",
            "Ljava/lang/Object;"
        }
    .end annotation

    .line 125
    iget-object v0, p0, Landroidx/camera/core/impl/utils/futures/FutureChain$1;->this$0:Landroidx/camera/core/impl/utils/futures/FutureChain;

    iget-object v0, v0, Landroidx/camera/core/impl/utils/futures/FutureChain;->mCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    if-nez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    const-string v1, "The result can only set once!"

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 127
    iget-object v0, p0, Landroidx/camera/core/impl/utils/futures/FutureChain$1;->this$0:Landroidx/camera/core/impl/utils/futures/FutureChain;

    iput-object p1, v0, Landroidx/camera/core/impl/utils/futures/FutureChain;->mCompleter:Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;

    .line 128
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v0, "FutureChain["

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Landroidx/camera/core/impl/utils/futures/FutureChain$1;->this$0:Landroidx/camera/core/impl/utils/futures/FutureChain;

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "]"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method
