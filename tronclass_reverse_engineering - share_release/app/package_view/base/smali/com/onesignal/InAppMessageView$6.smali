.class Lcom/onesignal/InAppMessageView$6;
.super Ljava/lang/Object;
.source "InAppMessageView.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/InAppMessageView;->finishAfterDelay(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/InAppMessageView;

.field final synthetic val$callback:Lcom/onesignal/WebViewManager$OneSignalGenericCallback;


# direct methods
.method constructor <init>(Lcom/onesignal/InAppMessageView;Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V
    .locals 0

    .line 485
    iput-object p1, p0, Lcom/onesignal/InAppMessageView$6;->this$0:Lcom/onesignal/InAppMessageView;

    iput-object p2, p0, Lcom/onesignal/InAppMessageView$6;->val$callback:Lcom/onesignal/WebViewManager$OneSignalGenericCallback;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 488
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$6;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$1800(Lcom/onesignal/InAppMessageView;)Z

    move-result v0

    if-eqz v0, :cond_0

    iget-object v0, p0, Lcom/onesignal/InAppMessageView$6;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$800(Lcom/onesignal/InAppMessageView;)Landroid/widget/RelativeLayout;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 489
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$6;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$800(Lcom/onesignal/InAppMessageView;)Landroid/widget/RelativeLayout;

    move-result-object v1

    iget-object v2, p0, Lcom/onesignal/InAppMessageView$6;->val$callback:Lcom/onesignal/WebViewManager$OneSignalGenericCallback;

    invoke-static {v0, v1, v2}, Lcom/onesignal/InAppMessageView;->access$1900(Lcom/onesignal/InAppMessageView;Landroid/view/View;Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    goto :goto_0

    .line 491
    :cond_0
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$6;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {v0}, Lcom/onesignal/InAppMessageView;->access$2000(Lcom/onesignal/InAppMessageView;)V

    .line 492
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$6;->val$callback:Lcom/onesignal/WebViewManager$OneSignalGenericCallback;

    if-eqz v0, :cond_1

    .line 493
    invoke-interface {v0}, Lcom/onesignal/WebViewManager$OneSignalGenericCallback;->onComplete()V

    :cond_1
    :goto_0
    return-void
.end method
