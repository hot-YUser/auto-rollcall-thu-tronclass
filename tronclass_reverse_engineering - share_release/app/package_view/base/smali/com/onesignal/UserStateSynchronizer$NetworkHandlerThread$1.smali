.class Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread$1;
.super Ljava/lang/Object;
.source "UserStateSynchronizer.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread;->getNewRunnable()Ljava/lang/Runnable;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$1:Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread;


# direct methods
.method constructor <init>(Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread;)V
    .locals 0

    .line 136
    iput-object p1, p0, Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread$1;->this$1:Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 139
    iget-object v0, p0, Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread$1;->this$1:Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread;

    iget-object v0, v0, Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {v0}, Lcom/onesignal/UserStateSynchronizer;->access$200(Lcom/onesignal/UserStateSynchronizer;)Ljava/util/concurrent/atomic/AtomicBoolean;

    move-result-object v0

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    if-nez v0, :cond_0

    .line 141
    iget-object v0, p0, Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread$1;->this$1:Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread;

    iget-object v0, v0, Lcom/onesignal/UserStateSynchronizer$NetworkHandlerThread;->this$0:Lcom/onesignal/UserStateSynchronizer;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Lcom/onesignal/UserStateSynchronizer;->syncUserState(Z)V

    :cond_0
    return-void
.end method
