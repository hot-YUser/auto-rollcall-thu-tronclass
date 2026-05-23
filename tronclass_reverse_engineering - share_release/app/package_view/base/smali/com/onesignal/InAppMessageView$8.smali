.class Lcom/onesignal/InAppMessageView$8;
.super Landroid/animation/AnimatorListenerAdapter;
.source "InAppMessageView.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/InAppMessageView;->animateAndDismissLayout(Landroid/view/View;Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V
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

    .line 626
    iput-object p1, p0, Lcom/onesignal/InAppMessageView$8;->this$0:Lcom/onesignal/InAppMessageView;

    iput-object p2, p0, Lcom/onesignal/InAppMessageView$8;->val$callback:Lcom/onesignal/WebViewManager$OneSignalGenericCallback;

    invoke-direct {p0}, Landroid/animation/AnimatorListenerAdapter;-><init>()V

    return-void
.end method


# virtual methods
.method public onAnimationEnd(Landroid/animation/Animator;)V
    .locals 0

    .line 629
    iget-object p1, p0, Lcom/onesignal/InAppMessageView$8;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {p1}, Lcom/onesignal/InAppMessageView;->access$2000(Lcom/onesignal/InAppMessageView;)V

    .line 630
    iget-object p1, p0, Lcom/onesignal/InAppMessageView$8;->val$callback:Lcom/onesignal/WebViewManager$OneSignalGenericCallback;

    if-eqz p1, :cond_0

    .line 631
    invoke-interface {p1}, Lcom/onesignal/WebViewManager$OneSignalGenericCallback;->onComplete()V

    :cond_0
    return-void
.end method
