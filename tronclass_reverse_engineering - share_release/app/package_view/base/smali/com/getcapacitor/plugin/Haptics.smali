.class public Lcom/getcapacitor/plugin/Haptics;
.super Lcom/getcapacitor/Plugin;
.source "Haptics.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# instance fields
.field selectionStarted:Z


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 21
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    const/4 v0, 0x0

    .line 23
    iput-boolean v0, p0, Lcom/getcapacitor/plugin/Haptics;->selectionStarted:Z

    return-void
.end method

.method private vibratePre26(I)V
    .locals 3

    .line 47
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Haptics;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "vibrator"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/os/Vibrator;

    int-to-long v1, p1

    invoke-virtual {v0, v1, v2}, Landroid/os/Vibrator;->vibrate(J)V

    return-void
.end method


# virtual methods
.method public impact(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 52
    iget-object v0, p0, Lcom/getcapacitor/plugin/Haptics;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->getWebView()Landroid/webkit/WebView;

    move-result-object v0

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->performHapticFeedback(I)Z

    .line 53
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method

.method public notification(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 58
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->unimplemented()V

    return-void
.end method

.method public selectionChanged(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 68
    iget-boolean p1, p0, Lcom/getcapacitor/plugin/Haptics;->selectionStarted:Z

    if-eqz p1, :cond_0

    .line 69
    iget-object p1, p0, Lcom/getcapacitor/plugin/Haptics;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {p1}, Lcom/getcapacitor/Bridge;->getWebView()Landroid/webkit/WebView;

    move-result-object p1

    const/4 v0, 0x4

    invoke-virtual {p1, v0}, Landroid/webkit/WebView;->performHapticFeedback(I)Z

    :cond_0
    return-void
.end method

.method public selectionEnd(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    const/4 p1, 0x0

    .line 75
    iput-boolean p1, p0, Lcom/getcapacitor/plugin/Haptics;->selectionStarted:Z

    return-void
.end method

.method public selectionStart(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    const/4 p1, 0x1

    .line 63
    iput-boolean p1, p0, Lcom/getcapacitor/plugin/Haptics;->selectionStarted:Z

    return-void
.end method

.method public vibrate(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 28
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Haptics;->getContext()Landroid/content/Context;

    move-result-object v0

    const/16 v1, 0x12c

    .line 29
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    const-string v2, "duration"

    invoke-virtual {p1, v2, v1}, Lcom/getcapacitor/PluginCall;->getInt(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    .line 31
    const-string v2, "android.permission.VIBRATE"

    invoke-virtual {p0, v2}, Lcom/getcapacitor/plugin/Haptics;->hasPermission(Ljava/lang/String;)Z

    move-result v2

    if-nez v2, :cond_0

    .line 32
    const-string v0, "Can\'t vibrate: Missing VIBRATE permission in AndroidManifest.xml"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 36
    :cond_0
    sget v2, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v3, 0x1a

    if-lt v2, v3, :cond_1

    .line 37
    const-string v2, "vibrator"

    invoke-virtual {v0, v2}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/os/Vibrator;

    int-to-long v1, v1

    const/4 v3, -0x1

    invoke-static {v1, v2, v3}, Landroid/os/VibrationEffect;->createOneShot(JI)Landroid/os/VibrationEffect;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/os/Vibrator;->vibrate(Landroid/os/VibrationEffect;)V

    goto :goto_0

    .line 39
    :cond_1
    invoke-direct {p0, v1}, Lcom/getcapacitor/plugin/Haptics;->vibratePre26(I)V

    .line 42
    :goto_0
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method
