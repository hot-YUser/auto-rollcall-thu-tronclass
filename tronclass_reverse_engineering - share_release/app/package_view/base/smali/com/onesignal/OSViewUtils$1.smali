.class Lcom/onesignal/OSViewUtils$1;
.super Ljava/lang/Object;
.source "OSViewUtils.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSViewUtils;->decorViewReady(Landroid/app/Activity;Ljava/lang/Runnable;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$listenerKey:Ljava/lang/String;

.field final synthetic val$runnable:Ljava/lang/Runnable;


# direct methods
.method constructor <init>(Ljava/lang/String;Ljava/lang/Runnable;)V
    .locals 0

    .line 53
    iput-object p1, p0, Lcom/onesignal/OSViewUtils$1;->val$listenerKey:Ljava/lang/String;

    iput-object p2, p0, Lcom/onesignal/OSViewUtils$1;->val$runnable:Ljava/lang/Runnable;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 56
    invoke-static {}, Lcom/onesignal/ActivityLifecycleListener;->getActivityLifecycleHandler()Lcom/onesignal/ActivityLifecycleHandler;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 58
    iget-object v1, p0, Lcom/onesignal/OSViewUtils$1;->val$listenerKey:Ljava/lang/String;

    new-instance v2, Lcom/onesignal/OSViewUtils$1$1;

    invoke-direct {v2, p0, v0}, Lcom/onesignal/OSViewUtils$1$1;-><init>(Lcom/onesignal/OSViewUtils$1;Lcom/onesignal/ActivityLifecycleHandler;)V

    invoke-virtual {v0, v1, v2}, Lcom/onesignal/ActivityLifecycleHandler;->addActivityAvailableListener(Ljava/lang/String;Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;)V

    :cond_0
    return-void
.end method
