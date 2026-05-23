.class public Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;
.super Lcom/getcapacitor/Plugin;
.source "CapacitorKeepScreenOn.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# instance fields
.field private activity:Landroid/app/Activity;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 15
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method


# virtual methods
.method public disable(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 38
    invoke-virtual {p0}, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    iput-object v0, p0, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;->activity:Landroid/app/Activity;

    .line 40
    invoke-virtual {p0}, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v0

    new-instance v1, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn$2;

    invoke-direct {v1, p0, p1}, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn$2;-><init>(Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;Lcom/getcapacitor/PluginCall;)V

    invoke-virtual {v0, v1}, Lcom/getcapacitor/Bridge;->executeOnMainThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method public enable(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 20
    invoke-virtual {p0}, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    iput-object v0, p0, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;->activity:Landroid/app/Activity;

    .line 22
    invoke-virtual {p0}, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v0

    new-instance v1, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn$1;

    invoke-direct {v1, p0, p1}, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn$1;-><init>(Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;Lcom/getcapacitor/PluginCall;)V

    invoke-virtual {v0, v1}, Lcom/getcapacitor/Bridge;->executeOnMainThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method public getState(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 56
    invoke-virtual {p0}, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    iput-object v0, p0, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;->activity:Landroid/app/Activity;

    .line 58
    invoke-virtual {p0}, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v0

    new-instance v1, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn$3;

    invoke-direct {v1, p0, p1}, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn$3;-><init>(Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;Lcom/getcapacitor/PluginCall;)V

    invoke-virtual {v0, v1}, Lcom/getcapacitor/Bridge;->executeOnMainThread(Ljava/lang/Runnable;)V

    return-void
.end method
