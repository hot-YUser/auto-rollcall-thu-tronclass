.class public Lcom/wisdomgarden/plugins/edgeui/EdgeUiPlugin;
.super Lcom/getcapacitor/Plugin;
.source "EdgeUiPlugin.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
    name = "SupportEdgeUi"
.end annotation


# instance fields
.field private implementation:Lcom/wisdomgarden/plugins/edgeui/EdgeUi;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 13
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method


# virtual methods
.method synthetic lambda$setEdgeUiStyle$0$com-wisdomgarden-plugins-edgeui-EdgeUiPlugin(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V
    .locals 2

    .line 28
    iget-object v0, p0, Lcom/wisdomgarden/plugins/edgeui/EdgeUiPlugin;->implementation:Lcom/wisdomgarden/plugins/edgeui/EdgeUi;

    invoke-virtual {p1}, Ljava/lang/String;->toUpperCase()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Lcom/wisdomgarden/plugins/edgeui/EdgeUi;->setEdgeUiStyle(Ljava/lang/String;)Z

    move-result p1

    .line 30
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 31
    const-string v1, "success"

    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 32
    invoke-virtual {p2, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public load()V
    .locals 3

    .line 19
    invoke-virtual {p0}, Lcom/wisdomgarden/plugins/edgeui/EdgeUiPlugin;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    .line 20
    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v1

    .line 21
    new-instance v2, Lcom/wisdomgarden/plugins/edgeui/EdgeUi;

    invoke-direct {v2, v0, v1}, Lcom/wisdomgarden/plugins/edgeui/EdgeUi;-><init>(Landroid/view/Window;Landroid/view/View;)V

    iput-object v2, p0, Lcom/wisdomgarden/plugins/edgeui/EdgeUiPlugin;->implementation:Lcom/wisdomgarden/plugins/edgeui/EdgeUi;

    return-void
.end method

.method public setEdgeUiStyle(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 26
    const-string v0, "color"

    const-string v1, "#FFFFFF"

    invoke-virtual {p1, v0, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 27
    invoke-virtual {p0}, Lcom/wisdomgarden/plugins/edgeui/EdgeUiPlugin;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v1

    new-instance v2, Lcom/wisdomgarden/plugins/edgeui/EdgeUiPlugin$$ExternalSyntheticLambda0;

    invoke-direct {v2, p0, v0, p1}, Lcom/wisdomgarden/plugins/edgeui/EdgeUiPlugin$$ExternalSyntheticLambda0;-><init>(Lcom/wisdomgarden/plugins/edgeui/EdgeUiPlugin;Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V

    invoke-virtual {v1, v2}, Lcom/getcapacitor/Bridge;->executeOnMainThread(Ljava/lang/Runnable;)V

    return-void
.end method
