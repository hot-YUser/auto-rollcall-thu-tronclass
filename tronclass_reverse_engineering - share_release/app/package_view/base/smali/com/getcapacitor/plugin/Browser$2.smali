.class Lcom/getcapacitor/plugin/Browser$2;
.super Landroidx/browser/customtabs/CustomTabsCallback;
.source "Browser.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Browser;->getCustomTabsSession()Landroidx/browser/customtabs/CustomTabsSession;
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

    .line 142
    iput-object p1, p0, Lcom/getcapacitor/plugin/Browser$2;->this$0:Lcom/getcapacitor/plugin/Browser;

    invoke-direct {p0}, Landroidx/browser/customtabs/CustomTabsCallback;-><init>()V

    return-void
.end method


# virtual methods
.method public onNavigationEvent(ILandroid/os/Bundle;)V
    .locals 1

    const/4 p2, 0x2

    if-eq p1, p2, :cond_2

    const/4 p2, 0x5

    if-eq p1, p2, :cond_1

    const/4 p2, 0x6

    if-eq p1, p2, :cond_0

    goto :goto_0

    .line 150
    :cond_0
    iget-object p1, p0, Lcom/getcapacitor/plugin/Browser$2;->this$0:Lcom/getcapacitor/plugin/Browser;

    const/4 p2, 0x1

    invoke-static {p1, p2}, Lcom/getcapacitor/plugin/Browser;->access$202(Lcom/getcapacitor/plugin/Browser;Z)Z

    goto :goto_0

    .line 153
    :cond_1
    iget-object p1, p0, Lcom/getcapacitor/plugin/Browser$2;->this$0:Lcom/getcapacitor/plugin/Browser;

    const/4 p2, 0x0

    invoke-static {p1, p2}, Lcom/getcapacitor/plugin/Browser;->access$202(Lcom/getcapacitor/plugin/Browser;Z)Z

    goto :goto_0

    .line 147
    :cond_2
    iget-object p1, p0, Lcom/getcapacitor/plugin/Browser$2;->this$0:Lcom/getcapacitor/plugin/Browser;

    new-instance p2, Lcom/getcapacitor/JSObject;

    invoke-direct {p2}, Lcom/getcapacitor/JSObject;-><init>()V

    const-string v0, "browserPageLoaded"

    invoke-static {p1, v0, p2}, Lcom/getcapacitor/plugin/Browser;->access$100(Lcom/getcapacitor/plugin/Browser;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    :goto_0
    return-void
.end method
