.class Lcom/getcapacitor/plugin/Browser$1;
.super Landroidx/browser/customtabs/CustomTabsServiceConnection;
.source "Browser.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/getcapacitor/plugin/Browser;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/Browser;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Browser;)V
    .locals 0

    .line 107
    iput-object p1, p0, Lcom/getcapacitor/plugin/Browser$1;->this$0:Lcom/getcapacitor/plugin/Browser;

    invoke-direct {p0}, Landroidx/browser/customtabs/CustomTabsServiceConnection;-><init>()V

    return-void
.end method


# virtual methods
.method public onCustomTabsServiceConnected(Landroid/content/ComponentName;Landroidx/browser/customtabs/CustomTabsClient;)V
    .locals 2

    .line 110
    iget-object p1, p0, Lcom/getcapacitor/plugin/Browser$1;->this$0:Lcom/getcapacitor/plugin/Browser;

    invoke-static {p1, p2}, Lcom/getcapacitor/plugin/Browser;->access$002(Lcom/getcapacitor/plugin/Browser;Landroidx/browser/customtabs/CustomTabsClient;)Landroidx/browser/customtabs/CustomTabsClient;

    const-wide/16 v0, 0x0

    .line 111
    invoke-virtual {p2, v0, v1}, Landroidx/browser/customtabs/CustomTabsClient;->warmup(J)Z

    return-void
.end method

.method public onServiceDisconnected(Landroid/content/ComponentName;)V
    .locals 0

    return-void
.end method
