.class public Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;
.super Lorg/apache/cordova/CordovaPlugin;
.source "BrightnessPlugin.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;,
        Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;,
        Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;
    }
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 17
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method private getBrightness(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 2

    .line 116
    :try_start_0
    iget-object p1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    .line 117
    invoke-virtual {p1}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object p1

    invoke-virtual {p1}, Landroid/view/Window;->getAttributes()Landroid/view/WindowManager$LayoutParams;

    move-result-object p1

    .line 118
    iget p1, p1, Landroid/view/WindowManager$LayoutParams;->screenBrightness:F

    float-to-double v0, p1

    invoke-static {v0, v1}, Ljava/lang/Double;->valueOf(D)Ljava/lang/Double;

    move-result-object p1

    .line 119
    invoke-virtual {p1}, Ljava/lang/Double;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/NullPointerException; {:try_start_0 .. :try_end_0} :catch_0

    .line 127
    sget-object p1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const-string p2, "All went fine."

    invoke-virtual {p1, p2}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    const/4 p1, 0x1

    return p1

    :catch_0
    move-exception p1

    .line 122
    sget-object v0, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const-string v1, "Null pointer exception"

    invoke-virtual {v0, v1}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 123
    sget-object v0, Ljava/lang/System;->out:Ljava/io/PrintStream;

    invoke-virtual {p1}, Ljava/lang/NullPointerException;->getMessage()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 124
    invoke-virtual {p1}, Ljava/lang/NullPointerException;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    const/4 p1, 0x0

    return p1
.end method

.method private setBrightness(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 5

    const/4 v0, 0x0

    .line 84
    :try_start_0
    iget-object v1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    .line 85
    invoke-virtual {v1}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v2

    invoke-virtual {v2}, Landroid/view/Window;->getAttributes()Landroid/view/WindowManager$LayoutParams;

    move-result-object v2

    .line 86
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    .line 87
    invoke-static {p1}, Ljava/lang/Double;->parseDouble(Ljava/lang/String;)D

    move-result-wide v3

    double-to-float p1, v3

    .line 88
    iput p1, v2, Landroid/view/WindowManager$LayoutParams;->screenBrightness:F

    .line 89
    new-instance p1, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;

    const/4 v3, 0x0

    invoke-direct {p1, p0, v3}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;-><init>(Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$1;)V

    .line 90
    invoke-virtual {p1, v1, v2}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;->setParams(Landroid/app/Activity;Landroid/view/WindowManager$LayoutParams;)V

    .line 91
    invoke-virtual {v1, p1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    .line 92
    const-string p1, "OK"

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/NullPointerException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 105
    sget-object p1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const-string p2, "All went fine."

    invoke-virtual {p1, p2}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    const/4 p1, 0x1

    return p1

    :catch_0
    move-exception p1

    .line 100
    sget-object v1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const-string v2, "JSONException exception"

    invoke-virtual {v1, v2}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 101
    sget-object v1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    invoke-virtual {p1}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 102
    invoke-virtual {p1}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return v0

    :catch_1
    move-exception p1

    .line 95
    sget-object v1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const-string v2, "Null pointer exception"

    invoke-virtual {v1, v2}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 96
    sget-object v1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    invoke-virtual {p1}, Ljava/lang/NullPointerException;->getMessage()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 97
    invoke-virtual {p1}, Ljava/lang/NullPointerException;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return v0
.end method

.method private setKeepScreenOn(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 4

    const/4 v0, 0x0

    .line 137
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p1

    .line 138
    iget-object v1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    .line 139
    new-instance v2, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;

    const/4 v3, 0x0

    invoke-direct {v2, p0, v3}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;-><init>(Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$1;)V

    .line 140
    invoke-virtual {v1}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v3

    invoke-virtual {v2, v3, p1}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;->setParams(Landroid/view/Window;Z)V

    .line 141
    invoke-virtual {v1, v2}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    .line 142
    const-string p1, "OK"

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/NullPointerException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 155
    sget-object p1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const-string p2, "All went fine."

    invoke-virtual {p1, p2}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    const/4 p1, 0x1

    return p1

    :catch_0
    move-exception p1

    .line 150
    sget-object v1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const-string v2, "JSONException"

    invoke-virtual {v1, v2}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 151
    sget-object v1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    invoke-virtual {p1}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 152
    invoke-virtual {p1}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return v0

    :catch_1
    move-exception p1

    .line 145
    sget-object v1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const-string v2, "Null pointer exception"

    invoke-virtual {v1, v2}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 146
    sget-object v1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    invoke-virtual {p1}, Ljava/lang/NullPointerException;->getMessage()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 147
    invoke-virtual {p1}, Ljava/lang/NullPointerException;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return v0
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 60
    sget-object v0, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const-string v1, "plugin has been started"

    invoke-virtual {v0, v1}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 63
    sget-object v0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$1;->$SwitchMap$org$apache$cordova$plugin$Brightness$BrightnessPlugin$Action:[I

    invoke-static {p1}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->valueOf(Ljava/lang/String;)Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;

    move-result-object p1

    invoke-virtual {p1}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$Action;->ordinal()I

    move-result p1

    aget p1, v0, p1

    const/4 v0, 0x1

    if-eq p1, v0, :cond_2

    const/4 v1, 0x2

    if-eq p1, v1, :cond_1

    const/4 v1, 0x3

    if-eq p1, v1, :cond_0

    const/4 v0, 0x0

    goto :goto_0

    .line 71
    :cond_0
    invoke-direct {p0, p2, p3}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;->setKeepScreenOn(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    goto :goto_0

    .line 68
    :cond_1
    invoke-direct {p0, p2, p3}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;->getBrightness(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    goto :goto_0

    .line 65
    :cond_2
    invoke-direct {p0, p2, p3}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;->setBrightness(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    :goto_0
    return v0
.end method
