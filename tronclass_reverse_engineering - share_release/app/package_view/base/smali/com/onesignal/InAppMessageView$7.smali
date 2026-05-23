.class Lcom/onesignal/InAppMessageView$7;
.super Ljava/lang/Object;
.source "InAppMessageView.java"

# interfaces
.implements Landroid/view/animation/Animation$AnimationListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/InAppMessageView;->createAnimationListener(Landroidx/cardview/widget/CardView;)Landroid/view/animation/Animation$AnimationListener;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/InAppMessageView;

.field final synthetic val$messageViewCardView:Landroidx/cardview/widget/CardView;


# direct methods
.method constructor <init>(Lcom/onesignal/InAppMessageView;Landroidx/cardview/widget/CardView;)V
    .locals 0

    .line 557
    iput-object p1, p0, Lcom/onesignal/InAppMessageView$7;->this$0:Lcom/onesignal/InAppMessageView;

    iput-object p2, p0, Lcom/onesignal/InAppMessageView$7;->val$messageViewCardView:Landroidx/cardview/widget/CardView;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onAnimationEnd(Landroid/view/animation/Animation;)V
    .locals 0

    .line 569
    iget-object p1, p0, Lcom/onesignal/InAppMessageView$7;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {p1}, Lcom/onesignal/InAppMessageView;->access$1000(Lcom/onesignal/InAppMessageView;)Lcom/onesignal/InAppMessageView$InAppMessageViewListener;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 570
    iget-object p1, p0, Lcom/onesignal/InAppMessageView$7;->this$0:Lcom/onesignal/InAppMessageView;

    invoke-static {p1}, Lcom/onesignal/InAppMessageView;->access$1000(Lcom/onesignal/InAppMessageView;)Lcom/onesignal/InAppMessageView$InAppMessageViewListener;

    move-result-object p1

    invoke-interface {p1}, Lcom/onesignal/InAppMessageView$InAppMessageViewListener;->onMessageWasShown()V

    :cond_0
    return-void
.end method

.method public onAnimationRepeat(Landroid/view/animation/Animation;)V
    .locals 0

    return-void
.end method

.method public onAnimationStart(Landroid/view/animation/Animation;)V
    .locals 0

    return-void
.end method
