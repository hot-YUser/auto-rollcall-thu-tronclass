.class Lcom/wisdomgarden/mobile/beacon/Beacon$1;
.super Landroid/bluetooth/le/AdvertiseCallback;
.source "Beacon.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/wisdomgarden/mobile/beacon/Beacon;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/wisdomgarden/mobile/beacon/Beacon;


# direct methods
.method constructor <init>(Lcom/wisdomgarden/mobile/beacon/Beacon;)V
    .locals 0

    .line 260
    iput-object p1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon$1;->this$0:Lcom/wisdomgarden/mobile/beacon/Beacon;

    invoke-direct {p0}, Landroid/bluetooth/le/AdvertiseCallback;-><init>()V

    return-void
.end method


# virtual methods
.method public onStartFailure(I)V
    .locals 3

    .line 273
    invoke-super {p0, p1}, Landroid/bluetooth/le/AdvertiseCallback;->onStartFailure(I)V

    .line 274
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon$1;->this$0:Lcom/wisdomgarden/mobile/beacon/Beacon;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "AdvertiseCallback: Failure (Error: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ")"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    const-string v2, "[SEQ-15-F]"

    invoke-static {v0, v2, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->access$000(Lcom/wisdomgarden/mobile/beacon/Beacon;Ljava/lang/String;Ljava/lang/String;)V

    .line 275
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 276
    const-string v1, "type"

    const-string v2, "peripheral"

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 277
    const-string v1, "state"

    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;I)Lcom/getcapacitor/JSObject;

    .line 278
    iget-object p1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon$1;->this$0:Lcom/wisdomgarden/mobile/beacon/Beacon;

    const-string v1, "stateUpdated"

    invoke-static {p1, v1, v0}, Lcom/wisdomgarden/mobile/beacon/Beacon;->access$200(Lcom/wisdomgarden/mobile/beacon/Beacon;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    .line 280
    iget-object p1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon$1;->this$0:Lcom/wisdomgarden/mobile/beacon/Beacon;

    const/4 v0, 0x0

    invoke-virtual {p1, v0}, Lcom/wisdomgarden/mobile/beacon/Beacon;->stopBroadcasting(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method public onStartSuccess(Landroid/bluetooth/le/AdvertiseSettings;)V
    .locals 2

    .line 263
    invoke-super {p0, p1}, Landroid/bluetooth/le/AdvertiseCallback;->onStartSuccess(Landroid/bluetooth/le/AdvertiseSettings;)V

    .line 264
    iget-object p1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon$1;->this$0:Lcom/wisdomgarden/mobile/beacon/Beacon;

    const-string v0, "[SEQ-15]"

    const-string v1, "AdvertiseCallback: Success (Peripheral Active)"

    invoke-static {p1, v0, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->access$000(Lcom/wisdomgarden/mobile/beacon/Beacon;Ljava/lang/String;Ljava/lang/String;)V

    .line 265
    new-instance p1, Lcom/getcapacitor/JSObject;

    invoke-direct {p1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 266
    const-string v0, "type"

    const-string v1, "peripheral"

    invoke-virtual {p1, v0, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 267
    const-string v0, "state"

    const-string v1, "poweredOn"

    invoke-virtual {p1, v0, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 268
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon$1;->this$0:Lcom/wisdomgarden/mobile/beacon/Beacon;

    const-string v1, "stateUpdated"

    invoke-static {v0, v1, p1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->access$100(Lcom/wisdomgarden/mobile/beacon/Beacon;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method
