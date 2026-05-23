.class Lcordova/plugins/Diagnostic_Bluetooth$1;
.super Landroid/content/BroadcastReceiver;
.source "Diagnostic_Bluetooth.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcordova/plugins/Diagnostic_Bluetooth;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcordova/plugins/Diagnostic_Bluetooth;


# direct methods
.method constructor <init>(Lcordova/plugins/Diagnostic_Bluetooth;)V
    .locals 0

    .line 374
    iput-object p1, p0, Lcordova/plugins/Diagnostic_Bluetooth$1;->this$0:Lcordova/plugins/Diagnostic_Bluetooth;

    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 0

    .line 377
    invoke-virtual {p2}, Landroid/content/Intent;->getAction()Ljava/lang/String;

    move-result-object p1

    .line 378
    sget-object p2, Lcordova/plugins/Diagnostic_Bluetooth;->instance:Lcordova/plugins/Diagnostic_Bluetooth;

    if-eqz p2, :cond_0

    const-string p2, "android.bluetooth.adapter.action.STATE_CHANGED"

    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 379
    const-string p1, "Diagnostic_Bluetooth"

    const-string p2, "bluetoothStateChangeReceiver"

    invoke-static {p1, p2}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    .line 380
    sget-object p1, Lcordova/plugins/Diagnostic_Bluetooth;->instance:Lcordova/plugins/Diagnostic_Bluetooth;

    invoke-virtual {p1}, Lcordova/plugins/Diagnostic_Bluetooth;->notifyBluetoothStateChange()V

    :cond_0
    return-void
.end method
