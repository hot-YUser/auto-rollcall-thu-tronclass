.class Lcom/onesignal/GooglePlayServicesUpgradePrompt$1$2;
.super Ljava/lang/Object;
.source "GooglePlayServicesUpgradePrompt.java"

# interfaces
.implements Landroid/content/DialogInterface$OnClickListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/GooglePlayServicesUpgradePrompt$1;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/GooglePlayServicesUpgradePrompt$1;

.field final synthetic val$activity:Landroid/app/Activity;


# direct methods
.method constructor <init>(Lcom/onesignal/GooglePlayServicesUpgradePrompt$1;Landroid/app/Activity;)V
    .locals 0

    .line 64
    iput-object p1, p0, Lcom/onesignal/GooglePlayServicesUpgradePrompt$1$2;->this$0:Lcom/onesignal/GooglePlayServicesUpgradePrompt$1;

    iput-object p2, p0, Lcom/onesignal/GooglePlayServicesUpgradePrompt$1$2;->val$activity:Landroid/app/Activity;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/content/DialogInterface;I)V
    .locals 0

    .line 67
    iget-object p1, p0, Lcom/onesignal/GooglePlayServicesUpgradePrompt$1$2;->val$activity:Landroid/app/Activity;

    invoke-static {p1}, Lcom/onesignal/GooglePlayServicesUpgradePrompt;->access$000(Landroid/app/Activity;)V

    return-void
.end method
