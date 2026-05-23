.class Lcom/onesignal/OSSystemConditionController$1;
.super Landroidx/fragment/app/FragmentManager$FragmentLifecycleCallbacks;
.source "OSSystemConditionController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSSystemConditionController;->isDialogFragmentShowing(Landroid/content/Context;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSSystemConditionController;

.field final synthetic val$manager:Landroidx/fragment/app/FragmentManager;


# direct methods
.method constructor <init>(Lcom/onesignal/OSSystemConditionController;Landroidx/fragment/app/FragmentManager;)V
    .locals 0

    .line 61
    iput-object p1, p0, Lcom/onesignal/OSSystemConditionController$1;->this$0:Lcom/onesignal/OSSystemConditionController;

    iput-object p2, p0, Lcom/onesignal/OSSystemConditionController$1;->val$manager:Landroidx/fragment/app/FragmentManager;

    invoke-direct {p0}, Landroidx/fragment/app/FragmentManager$FragmentLifecycleCallbacks;-><init>()V

    return-void
.end method


# virtual methods
.method public onFragmentDetached(Landroidx/fragment/app/FragmentManager;Landroidx/fragment/app/Fragment;)V
    .locals 0

    .line 65
    invoke-super {p0, p1, p2}, Landroidx/fragment/app/FragmentManager$FragmentLifecycleCallbacks;->onFragmentDetached(Landroidx/fragment/app/FragmentManager;Landroidx/fragment/app/Fragment;)V

    .line 66
    instance-of p1, p2, Landroidx/fragment/app/DialogFragment;

    if-eqz p1, :cond_0

    .line 67
    iget-object p1, p0, Lcom/onesignal/OSSystemConditionController$1;->val$manager:Landroidx/fragment/app/FragmentManager;

    invoke-virtual {p1, p0}, Landroidx/fragment/app/FragmentManager;->unregisterFragmentLifecycleCallbacks(Landroidx/fragment/app/FragmentManager$FragmentLifecycleCallbacks;)V

    .line 68
    iget-object p1, p0, Lcom/onesignal/OSSystemConditionController$1;->this$0:Lcom/onesignal/OSSystemConditionController;

    invoke-static {p1}, Lcom/onesignal/OSSystemConditionController;->access$000(Lcom/onesignal/OSSystemConditionController;)Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;

    move-result-object p1

    invoke-interface {p1}, Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;->systemConditionChanged()V

    :cond_0
    return-void
.end method
