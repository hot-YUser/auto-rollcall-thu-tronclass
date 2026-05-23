.class Lcom/onesignal/InAppMessageView$4;
.super Ljava/lang/Object;
.source "InAppMessageView.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/InAppMessageView;->startDismissTimerIfNeeded()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/InAppMessageView;


# direct methods
.method constructor <init>(Lcom/onesignal/InAppMessageView;)V
    .locals 0

    .line 433
    iput-object p1, p0, Lcom/onesignal/InAppMessageView$4;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 435
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$4;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$1000(Lcom/onesignal/InAppMessageView;)Lcom/onesignal/InAppMessageView$InAppMessageViewListener;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 436
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$4;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$1000(Lcom/onesignal/InAppMessageView;)Lcom/onesignal/InAppMessageView$InAppMessageViewListener;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/InAppMessageView$InAppMessageViewListener;->onMessageWillDismiss()V

    .line 438
    :cond_0
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$4;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$500(Lcom/onesignal/InAppMessageView;)Landroid/app/Activity;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 439
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$4;->this$0:Lcom/onesignal/InAppMessageView;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Lcom/onesignal/InAppMessageView;->dismissAndAwaitNextMessage(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    .line 440
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$4;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0, v1}, Lcom/onesignal/InAppMessageView;->access$1502(Lcom/onesignal/InAppMessageView;Ljava/lang/Runnable;)Ljava/lang/Runnable;

    goto :goto_0

    .line 443
    :cond_1
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$4;->this$0:Lcom/onesignal/InAppMessageView;

    const/4 v1, 0x1

    invoke-static {v0, v1}, Lcom/onesignal/InAppMessageView;->access$1602(Lcom/onesignal/InAppMessageView;Z)Z

    :goto_0
    return-void
.end method
