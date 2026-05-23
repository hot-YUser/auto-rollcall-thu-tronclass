.class Lcom/onesignal/OSViewUtils$1$1;
.super Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;
.source "OSViewUtils.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSViewUtils$1;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSViewUtils$1;

.field final synthetic val$activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;


# direct methods
.method constructor <init>(Lcom/onesignal/OSViewUtils$1;Lcom/onesignal/ActivityLifecycleHandler;)V
    .locals 0

    .line 58
    iput-object p1, p0, Lcom/onesignal/OSViewUtils$1$1;->this$0:Lcom/onesignal/OSViewUtils$1;

    iput-object p2, p0, Lcom/onesignal/OSViewUtils$1$1;->val$activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;-><init>()V

    return-void
.end method


# virtual methods
.method available(Landroid/app/Activity;)V
    .locals 2

    .line 61
    iget-object v0, p0, Lcom/onesignal/OSViewUtils$1$1;->val$activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    iget-object v1, p0, Lcom/onesignal/OSViewUtils$1$1;->this$0:Lcom/onesignal/OSViewUtils$1;

    iget-object v1, v1, Lcom/onesignal/OSViewUtils$1;->val$listenerKey:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/ActivityLifecycleHandler;->removeActivityAvailableListener(Ljava/lang/String;)V

    .line 62
    invoke-static {p1}, Lcom/onesignal/OSViewUtils;->isActivityFullyReady(Landroid/app/Activity;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 63
    iget-object p1, p0, Lcom/onesignal/OSViewUtils$1$1;->this$0:Lcom/onesignal/OSViewUtils$1;

    iget-object p1, p1, Lcom/onesignal/OSViewUtils$1;->val$runnable:Ljava/lang/Runnable;

    invoke-interface {p1}, Ljava/lang/Runnable;->run()V

    goto :goto_0

    .line 65
    :cond_0
    iget-object v0, p0, Lcom/onesignal/OSViewUtils$1$1;->this$0:Lcom/onesignal/OSViewUtils$1;

    iget-object v0, v0, Lcom/onesignal/OSViewUtils$1;->val$runnable:Ljava/lang/Runnable;

    invoke-static {p1, v0}, Lcom/onesignal/OSViewUtils;->decorViewReady(Landroid/app/Activity;Ljava/lang/Runnable;)V

    :goto_0
    return-void
.end method
