.class Lcom/onesignal/GooglePlayServicesUpgradePrompt$1$1;
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


# direct methods
.method constructor <init>(Lcom/onesignal/GooglePlayServicesUpgradePrompt$1;)V
    .locals 0

    .line 69
    iput-object p1, p0, Lcom/onesignal/GooglePlayServicesUpgradePrompt$1$1;->this$0:Lcom/onesignal/GooglePlayServicesUpgradePrompt$1;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/content/DialogInterface;I)V
    .locals 1

    .line 72
    sget-object p1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string p2, "GT_DO_NOT_SHOW_MISSING_GPS"

    const/4 v0, 0x1

    invoke-static {p1, p2, v0}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    return-void
.end method
