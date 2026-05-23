.class Lcom/onesignal/InAppMessageView$5;
.super Ljava/lang/Object;
.source "InAppMessageView.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/InAppMessageView;->delayShowUntilAvailable(Landroid/app/Activity;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/InAppMessageView;

.field final synthetic val$currentActivity:Landroid/app/Activity;


# direct methods
.method constructor <init>(Lcom/onesignal/InAppMessageView;Landroid/app/Activity;)V
    .locals 0

    .line 456
    iput-object p1, p0, Lcom/onesignal/InAppMessageView$5;->this$0:Lcom/onesignal/InAppMessageView;

    iput-object p2, p0, Lcom/onesignal/InAppMessageView$5;->val$currentActivity:Landroid/app/Activity;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 459
    iget-object v0, p0, Lcom/onesignal/InAppMessageView$5;->this$0:Lcom/onesignal/InAppMessageView;

    iget-object v1, p0, Lcom/onesignal/InAppMessageView$5;->val$currentActivity:Landroid/app/Activity;

    invoke-static {v0, v1}, Lcom/onesignal/InAppMessageView;->access$1700(Lcom/onesignal/InAppMessageView;Landroid/app/Activity;)V

    return-void
.end method
