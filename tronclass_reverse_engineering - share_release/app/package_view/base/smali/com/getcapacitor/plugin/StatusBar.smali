.class public Lcom/getcapacitor/plugin/StatusBar;
.super Lcom/getcapacitor/Plugin;
.source "StatusBar.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# instance fields
.field private currentStatusbarColor:I


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 15
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lcom/getcapacitor/plugin/StatusBar;)I
    .locals 0

    .line 15
    iget p0, p0, Lcom/getcapacitor/plugin/StatusBar;->currentStatusbarColor:I

    return p0
.end method

.method static synthetic access$002(Lcom/getcapacitor/plugin/StatusBar;I)I
    .locals 0

    .line 15
    iput p1, p0, Lcom/getcapacitor/plugin/StatusBar;->currentStatusbarColor:I

    return p1
.end method


# virtual methods
.method public getInfo(Lcom/getcapacitor/PluginCall;)V
    .locals 8
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 111
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/StatusBar;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v0

    .line 112
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/StatusBar;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    invoke-virtual {v1}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v1

    .line 115
    invoke-virtual {v0}, Landroid/view/View;->getSystemUiVisibility()I

    move-result v2

    const/16 v3, 0x2000

    and-int/2addr v2, v3

    if-ne v2, v3, :cond_0

    .line 116
    const-string v2, "LIGHT"

    goto :goto_0

    .line 118
    :cond_0
    const-string v2, "DARK"

    .line 121
    :goto_0
    new-instance v3, Lcom/getcapacitor/JSObject;

    invoke-direct {v3}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 122
    invoke-virtual {v0}, Landroid/view/View;->getSystemUiVisibility()I

    move-result v4

    const/4 v5, 0x4

    and-int/2addr v4, v5

    const/4 v6, 0x1

    const/4 v7, 0x0

    if-eq v4, v5, :cond_1

    move v4, v6

    goto :goto_1

    :cond_1
    move v4, v7

    :goto_1
    const-string v5, "visible"

    invoke-virtual {v3, v5, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 123
    const-string v4, "style"

    invoke-virtual {v3, v4, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    const v2, 0xffffff

    .line 124
    invoke-virtual {v1}, Landroid/view/Window;->getStatusBarColor()I

    move-result v1

    and-int/2addr v1, v2

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    filled-new-array {v1}, [Ljava/lang/Object;

    move-result-object v1

    const-string v2, "#%06X"

    invoke-static {v2, v1}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v1

    const-string v2, "color"

    invoke-virtual {v3, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 125
    invoke-virtual {v0}, Landroid/view/View;->getSystemUiVisibility()I

    move-result v0

    const/16 v1, 0x400

    and-int/2addr v0, v1

    if-ne v0, v1, :cond_2

    goto :goto_2

    :cond_2
    move v6, v7

    :goto_2
    const-string v0, "overlays"

    invoke-virtual {v3, v0, v6}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 126
    invoke-virtual {p1, v3}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public hide(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 80
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/StatusBar;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v0

    new-instance v1, Lcom/getcapacitor/plugin/StatusBar$3;

    invoke-direct {v1, p0, p1}, Lcom/getcapacitor/plugin/StatusBar$3;-><init>(Lcom/getcapacitor/plugin/StatusBar;Lcom/getcapacitor/PluginCall;)V

    invoke-virtual {v0, v1}, Lcom/getcapacitor/Bridge;->executeOnMainThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method public load()V
    .locals 1

    .line 21
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/StatusBar;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/Window;->getStatusBarColor()I

    move-result v0

    iput v0, p0, Lcom/getcapacitor/plugin/StatusBar;->currentStatusbarColor:I

    return-void
.end method

.method public setBackgroundColor(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 52
    const-string v0, "color"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 54
    const-string v0, "Color must be provided"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 58
    :cond_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/StatusBar;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v1

    new-instance v2, Lcom/getcapacitor/plugin/StatusBar$2;

    invoke-direct {v2, p0, v0, p1}, Lcom/getcapacitor/plugin/StatusBar$2;-><init>(Lcom/getcapacitor/plugin/StatusBar;Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V

    invoke-virtual {v1, v2}, Lcom/getcapacitor/Bridge;->executeOnMainThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method public setOverlaysWebView(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    const/4 v0, 0x1

    .line 131
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    const-string v1, "overlay"

    invoke-virtual {p1, v1, v0}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v0

    .line 132
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/StatusBar;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v1

    new-instance v2, Lcom/getcapacitor/plugin/StatusBar$5;

    invoke-direct {v2, p0, v0, p1}, Lcom/getcapacitor/plugin/StatusBar$5;-><init>(Lcom/getcapacitor/plugin/StatusBar;Ljava/lang/Boolean;Lcom/getcapacitor/PluginCall;)V

    invoke-virtual {v1, v2}, Lcom/getcapacitor/Bridge;->executeOnMainThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method public setStyle(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 26
    const-string v0, "style"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 28
    const-string v0, "Style must be provided"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 32
    :cond_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/StatusBar;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v1

    new-instance v2, Lcom/getcapacitor/plugin/StatusBar$1;

    invoke-direct {v2, p0, v0, p1}, Lcom/getcapacitor/plugin/StatusBar$1;-><init>(Lcom/getcapacitor/plugin/StatusBar;Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V

    invoke-virtual {v1, v2}, Lcom/getcapacitor/Bridge;->executeOnMainThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method public show(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 96
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/StatusBar;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v0

    new-instance v1, Lcom/getcapacitor/plugin/StatusBar$4;

    invoke-direct {v1, p0, p1}, Lcom/getcapacitor/plugin/StatusBar$4;-><init>(Lcom/getcapacitor/plugin/StatusBar;Lcom/getcapacitor/PluginCall;)V

    invoke-virtual {v0, v1}, Lcom/getcapacitor/Bridge;->executeOnMainThread(Ljava/lang/Runnable;)V

    return-void
.end method
