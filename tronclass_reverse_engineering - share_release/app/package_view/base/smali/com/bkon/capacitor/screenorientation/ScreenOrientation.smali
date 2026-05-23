.class public Lcom/bkon/capacitor/screenorientation/ScreenOrientation;
.super Lcom/getcapacitor/Plugin;
.source "ScreenOrientation.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 14
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method

.method private fetchScreenOrientation()Ljava/lang/String;
    .locals 2

    .line 26
    invoke-virtual {p0}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v0

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getWindowManager()Landroid/view/WindowManager;

    move-result-object v0

    invoke-interface {v0}, Landroid/view/WindowManager;->getDefaultDisplay()Landroid/view/Display;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/Display;->getRotation()I

    move-result v0

    if-eqz v0, :cond_3

    const/4 v1, 0x1

    if-eq v0, v1, :cond_2

    const/4 v1, 0x2

    if-eq v0, v1, :cond_1

    const/4 v1, 0x3

    if-eq v0, v1, :cond_0

    .line 37
    const-string v0, "UNSPECIFIED"

    return-object v0

    .line 35
    :cond_0
    const-string v0, "LANDSCAPE_SECONDARY"

    return-object v0

    .line 33
    :cond_1
    const-string v0, "PORTRAIT_SECONDARY"

    return-object v0

    .line 31
    :cond_2
    const-string v0, "LANDSCAPE_PRIMARY"

    return-object v0

    .line 29
    :cond_3
    const-string v0, "PORTRAIT_PRIMARY"

    return-object v0
.end method


# virtual methods
.method public getScreenOrientation(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 19
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 20
    invoke-direct {p0}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->fetchScreenOrientation()Ljava/lang/String;

    move-result-object v1

    .line 21
    const-string v2, "orientation"

    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 22
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method protected handleOnStart()V
    .locals 3

    .line 82
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 83
    invoke-direct {p0}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->fetchScreenOrientation()Ljava/lang/String;

    move-result-object v1

    .line 84
    const-string v2, "orientation"

    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 85
    const-string v1, "orientation_changed"

    const/4 v2, 0x1

    invoke-virtual {p0, v1, v0, v2}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;Z)V

    return-void
.end method

.method public lockScreenOrientation(Lcom/getcapacitor/PluginCall;)V
    .locals 5
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 42
    const-string v0, "orientation"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 43
    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    move-result v0

    const/4 v1, 0x6

    const/4 v2, 0x1

    const/4 v3, 0x0

    const/4 v4, -0x1

    sparse-switch v0, :sswitch_data_0

    goto :goto_0

    :sswitch_0
    const-string v0, "CURRENT"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_0

    goto :goto_0

    :cond_0
    move v4, v1

    goto :goto_0

    :sswitch_1
    const-string v0, "PORTRAIT"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_1

    goto :goto_0

    :cond_1
    const/4 v4, 0x5

    goto :goto_0

    :sswitch_2
    const-string v0, "PORTRAIT_SECONDARY"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_2

    goto :goto_0

    :cond_2
    const/4 v4, 0x4

    goto :goto_0

    :sswitch_3
    const-string v0, "PORTRAIT_PRIMARY"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_3

    goto :goto_0

    :cond_3
    const/4 v4, 0x3

    goto :goto_0

    :sswitch_4
    const-string v0, "LANDSCAPE"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_4

    goto :goto_0

    :cond_4
    const/4 v4, 0x2

    goto :goto_0

    :sswitch_5
    const-string v0, "LANDSCAPE_SECONDARY"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_5

    goto :goto_0

    :cond_5
    move v4, v2

    goto :goto_0

    :sswitch_6
    const-string v0, "LANDSCAPE_PRIMARY"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_6

    goto :goto_0

    :cond_6
    move v4, v3

    :goto_0
    packed-switch v4, :pswitch_data_0

    goto :goto_1

    .line 63
    :pswitch_0
    invoke-virtual {p0}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object p1

    invoke-virtual {p1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object p1

    const/16 v0, 0xe

    invoke-virtual {p1, v0}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_1

    .line 60
    :pswitch_1
    invoke-virtual {p0}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object p1

    invoke-virtual {p1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object p1

    const/4 v0, 0x7

    invoke-virtual {p1, v0}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_1

    .line 54
    :pswitch_2
    invoke-virtual {p0}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object p1

    invoke-virtual {p1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object p1

    const/16 v0, 0x9

    invoke-virtual {p1, v0}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_1

    .line 48
    :pswitch_3
    invoke-virtual {p0}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object p1

    invoke-virtual {p1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object p1

    invoke-virtual {p1, v2}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_1

    .line 57
    :pswitch_4
    invoke-virtual {p0}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object p1

    invoke-virtual {p1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object p1

    invoke-virtual {p1, v1}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_1

    .line 51
    :pswitch_5
    invoke-virtual {p0}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object p1

    invoke-virtual {p1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object p1

    const/16 v0, 0x8

    invoke-virtual {p1, v0}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_1

    .line 45
    :pswitch_6
    invoke-virtual {p0}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object p1

    invoke-virtual {p1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object p1

    invoke-virtual {p1, v3}, Landroid/app/Activity;->setRequestedOrientation(I)V

    :goto_1
    return-void

    :sswitch_data_0
    .sparse-switch
        -0x4fbc87c2 -> :sswitch_6
        -0x15a6c750 -> :sswitch_5
        -0x4a1fd65 -> :sswitch_4
        0xd4a213e -> :sswitch_3
        0x2059a1b0 -> :sswitch_2
        0x5a1dab9b -> :sswitch_1
        0x6df74959 -> :sswitch_0
    .end sparse-switch

    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_6
        :pswitch_5
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method public rotateTo(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 76
    const-string p1, "capacitor"

    const-string v0, "rotateTo is not supported on Android"

    invoke-static {p1, v0}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    return-void
.end method

.method public unlockScreenOrientation(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 71
    invoke-virtual {p0}, Lcom/bkon/capacitor/screenorientation/ScreenOrientation;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object p1

    invoke-virtual {p1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object p1

    const/4 v0, -0x1

    invoke-virtual {p1, v0}, Landroid/app/Activity;->setRequestedOrientation(I)V

    return-void
.end method
