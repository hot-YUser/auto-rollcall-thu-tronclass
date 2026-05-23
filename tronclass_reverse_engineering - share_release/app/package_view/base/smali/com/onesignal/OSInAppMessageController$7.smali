.class Lcom/onesignal/OSInAppMessageController$7;
.super Ljava/lang/Object;
.source "OSInAppMessageController.java"

# interfaces
.implements Landroid/content/DialogInterface$OnClickListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageController;->showAlertDialogMessage(Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSInAppMessageController;

.field final synthetic val$inAppMessage:Lcom/onesignal/OSInAppMessageInternal;

.field final synthetic val$prompts:Ljava/util/List;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V
    .locals 0

    .line 454
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController$7;->this$0:Lcom/onesignal/OSInAppMessageController;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController$7;->val$inAppMessage:Lcom/onesignal/OSInAppMessageInternal;

    iput-object p3, p0, Lcom/onesignal/OSInAppMessageController$7;->val$prompts:Ljava/util/List;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/content/DialogInterface;I)V
    .locals 1

    .line 456
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$7;->this$0:Lcom/onesignal/OSInAppMessageController;

    iget-object p2, p0, Lcom/onesignal/OSInAppMessageController$7;->val$inAppMessage:Lcom/onesignal/OSInAppMessageInternal;

    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$7;->val$prompts:Ljava/util/List;

    invoke-static {p1, p2, v0}, Lcom/onesignal/OSInAppMessageController;->access$1000(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V

    return-void
.end method
