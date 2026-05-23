.class Lcom/wisdomgarden/mobile/beacon/Beacon$2;
.super Landroid/bluetooth/le/ScanCallback;
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

    .line 284
    iput-object p1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon$2;->this$0:Lcom/wisdomgarden/mobile/beacon/Beacon;

    invoke-direct {p0}, Landroid/bluetooth/le/ScanCallback;-><init>()V

    return-void
.end method


# virtual methods
.method public onScanResult(ILandroid/bluetooth/le/ScanResult;)V
    .locals 4

    .line 287
    invoke-super {p0, p1, p2}, Landroid/bluetooth/le/ScanCallback;->onScanResult(ILandroid/bluetooth/le/ScanResult;)V

    .line 288
    invoke-virtual {p2}, Landroid/bluetooth/le/ScanResult;->getScanRecord()Landroid/bluetooth/le/ScanRecord;

    move-result-object p1

    .line 289
    const-string v0, "start scan result received"

    const-string v1, "WisdomGardenBeacon"

    invoke-static {v1, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    if-nez p1, :cond_0

    .line 291
    const-string p1, "Scan result is null"

    invoke-static {v1, p1}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    return-void

    :cond_0
    const v0, 0xffff

    .line 302
    invoke-virtual {p1, v0}, Landroid/bluetooth/le/ScanRecord;->getManufacturerSpecificData(I)[B

    move-result-object v0

    .line 303
    invoke-static {v0}, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->extractMessageFromBytes([B)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_1

    .line 312
    invoke-virtual {p1}, Landroid/bluetooth/le/ScanRecord;->getDeviceName()Ljava/lang/String;

    move-result-object p1

    .line 313
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Valid message found in Device Name: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 314
    invoke-static {p1}, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->extractMessageFromDeviceName(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_1

    move-object v0, p1

    :cond_1
    if-eqz v0, :cond_2

    .line 324
    iget-object p1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon$2;->this$0:Lcom/wisdomgarden/mobile/beacon/Beacon;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Beacon Resolved: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " | RSSI: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {p2}, Landroid/bluetooth/le/ScanResult;->getRssi()I

    move-result v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    const-string v2, "[SEQ-55]"

    invoke-static {p1, v2, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->access$000(Lcom/wisdomgarden/mobile/beacon/Beacon;Ljava/lang/String;Ljava/lang/String;)V

    .line 325
    new-instance p1, Lcom/getcapacitor/JSObject;

    invoke-direct {p1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 326
    const-string v1, "message"

    invoke-virtual {p1, v1, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 327
    const-string v0, "rssi"

    invoke-virtual {p2}, Landroid/bluetooth/le/ScanResult;->getRssi()I

    move-result v1

    invoke-virtual {p1, v0, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;I)Lcom/getcapacitor/JSObject;

    .line 328
    invoke-virtual {p2}, Landroid/bluetooth/le/ScanResult;->getDevice()Landroid/bluetooth/BluetoothDevice;

    move-result-object p2

    invoke-virtual {p2}, Landroid/bluetooth/BluetoothDevice;->getAddress()Ljava/lang/String;

    move-result-object p2

    const-string v0, "peripheralId"

    invoke-virtual {p1, v0, p2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 329
    const-string p2, "timestamp"

    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v0

    invoke-virtual {p1, p2, v0, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;J)Lcom/getcapacitor/JSObject;

    .line 330
    iget-object p2, p0, Lcom/wisdomgarden/mobile/beacon/Beacon$2;->this$0:Lcom/wisdomgarden/mobile/beacon/Beacon;

    const-string v0, "beaconReceived"

    invoke-static {p2, v0, p1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->access$300(Lcom/wisdomgarden/mobile/beacon/Beacon;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    .line 332
    :cond_2
    iget-object p1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon$2;->this$0:Lcom/wisdomgarden/mobile/beacon/Beacon;

    const-string p2, "[SEQ-55-F]"

    const-string v0, "No valid message found in scan result"

    invoke-static {p1, p2, v0}, Lcom/wisdomgarden/mobile/beacon/Beacon;->access$000(Lcom/wisdomgarden/mobile/beacon/Beacon;Ljava/lang/String;Ljava/lang/String;)V

    :goto_0
    return-void
.end method
