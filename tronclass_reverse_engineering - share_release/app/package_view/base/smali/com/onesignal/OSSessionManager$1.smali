.class Lcom/onesignal/OSSessionManager$1;
.super Ljava/lang/Object;
.source "OSSessionManager.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSSessionManager;->sendSessionEndingWithInfluences(Ljava/util/List;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSSessionManager;

.field final synthetic val$endingInfluences:Ljava/util/List;


# direct methods
.method constructor <init>(Lcom/onesignal/OSSessionManager;Ljava/util/List;)V
    .locals 0

    .line 243
    iput-object p1, p0, Lcom/onesignal/OSSessionManager$1;->this$0:Lcom/onesignal/OSSessionManager;

    iput-object p2, p0, Lcom/onesignal/OSSessionManager$1;->val$endingInfluences:Ljava/util/List;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 246
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    const/16 v1, 0xa

    invoke-virtual {v0, v1}, Ljava/lang/Thread;->setPriority(I)V

    .line 247
    iget-object v0, p0, Lcom/onesignal/OSSessionManager$1;->this$0:Lcom/onesignal/OSSessionManager;

    invoke-static {v0}, Lcom/onesignal/OSSessionManager;->access$000(Lcom/onesignal/OSSessionManager;)Lcom/onesignal/OSSessionManager$SessionListener;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSSessionManager$1;->val$endingInfluences:Ljava/util/List;

    invoke-interface {v0, v1}, Lcom/onesignal/OSSessionManager$SessionListener;->onSessionEnding(Ljava/util/List;)V

    return-void
.end method
