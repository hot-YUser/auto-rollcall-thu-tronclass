.class public Lcom/getcapacitor/plugin/Toast;
.super Lcom/getcapacitor/Plugin;
.source "Toast.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# static fields
.field private static final GRAVITY_CENTER:I = 0x11

.field private static final GRAVITY_TOP:I = 0x31


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 10
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method


# virtual methods
.method public show(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 17
    const-string v0, "text"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 19
    const-string v0, "Must provide text"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 23
    :cond_0
    const-string v1, "duration"

    const-string v2, "short"

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 26
    const-string v2, "long"

    invoke-virtual {v2, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    .line 30
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Toast;->getContext()Landroid/content/Context;

    move-result-object v2

    invoke-static {v2, v0, v1}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;

    move-result-object v0

    .line 32
    const-string v1, "position"

    const-string v2, "bottom"

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 33
    const-string v2, "top"

    invoke-virtual {v2, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    const/4 v3, 0x0

    if-eqz v2, :cond_1

    const/16 v1, 0x31

    const/16 v2, 0x28

    .line 34
    invoke-virtual {v0, v1, v3, v2}, Landroid/widget/Toast;->setGravity(III)V

    goto :goto_0

    .line 35
    :cond_1
    const-string v2, "center"

    invoke-virtual {v2, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    const/16 v1, 0x11

    .line 36
    invoke-virtual {v0, v1, v3, v3}, Landroid/widget/Toast;->setGravity(III)V

    .line 39
    :cond_2
    :goto_0
    invoke-virtual {v0}, Landroid/widget/Toast;->show()V

    .line 40
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method
