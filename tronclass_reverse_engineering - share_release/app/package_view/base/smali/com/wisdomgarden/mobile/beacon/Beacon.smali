.class public Lcom/wisdomgarden/mobile/beacon/Beacon;
.super Lcom/getcapacitor/Plugin;
.source "Beacon.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# static fields
.field private static final MANUFACTURER_ID:I = 0xffff

.field private static final TAG:Ljava/lang/String; = "WisdomGardenBeacon"


# instance fields
.field private final advertiseCallback:Landroid/bluetooth/le/AdvertiseCallback;

.field private advertiser:Landroid/bluetooth/le/BluetoothLeAdvertiser;

.field private bluetoothAdapter:Landroid/bluetooth/BluetoothAdapter;

.field private isBroadcasting:Z

.field private isMonitoring:Z

.field private message:Ljava/lang/String;

.field private final scanCallback:Landroid/bluetooth/le/ScanCallback;

.field private scanner:Landroid/bluetooth/le/BluetoothLeScanner;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 31
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    const/4 v0, 0x0

    .line 40
    iput-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isBroadcasting:Z

    .line 41
    iput-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isMonitoring:Z

    .line 42
    const-string v0, ""

    iput-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->message:Ljava/lang/String;

    .line 260
    new-instance v0, Lcom/wisdomgarden/mobile/beacon/Beacon$1;

    invoke-direct {v0, p0}, Lcom/wisdomgarden/mobile/beacon/Beacon$1;-><init>(Lcom/wisdomgarden/mobile/beacon/Beacon;)V

    iput-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->advertiseCallback:Landroid/bluetooth/le/AdvertiseCallback;

    .line 284
    new-instance v0, Lcom/wisdomgarden/mobile/beacon/Beacon$2;

    invoke-direct {v0, p0}, Lcom/wisdomgarden/mobile/beacon/Beacon$2;-><init>(Lcom/wisdomgarden/mobile/beacon/Beacon;)V

    iput-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanCallback:Landroid/bluetooth/le/ScanCallback;

    return-void
.end method

.method static synthetic access$000(Lcom/wisdomgarden/mobile/beacon/Beacon;Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 31
    invoke-direct {p0, p1, p2}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method static synthetic access$100(Lcom/wisdomgarden/mobile/beacon/Beacon;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 0

    .line 31
    invoke-virtual {p0, p1, p2}, Lcom/wisdomgarden/mobile/beacon/Beacon;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method static synthetic access$200(Lcom/wisdomgarden/mobile/beacon/Beacon;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 0

    .line 31
    invoke-virtual {p0, p1, p2}, Lcom/wisdomgarden/mobile/beacon/Beacon;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method static synthetic access$300(Lcom/wisdomgarden/mobile/beacon/Beacon;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 0

    .line 31
    invoke-virtual {p0, p1, p2}, Lcom/wisdomgarden/mobile/beacon/Beacon;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method private checkBluetoothEnabled(Lcom/getcapacitor/PluginCall;)Z
    .locals 3

    .line 61
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->bluetoothAdapter:Landroid/bluetooth/BluetoothAdapter;

    if-nez v0, :cond_0

    .line 62
    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/beacon/Beacon;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "bluetooth"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/bluetooth/BluetoothManager;

    .line 63
    invoke-virtual {v0}, Landroid/bluetooth/BluetoothManager;->getAdapter()Landroid/bluetooth/BluetoothAdapter;

    move-result-object v0

    iput-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->bluetoothAdapter:Landroid/bluetooth/BluetoothAdapter;

    .line 66
    :cond_0
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->bluetoothAdapter:Landroid/bluetooth/BluetoothAdapter;

    const/4 v1, 0x0

    const-string v2, "WisdomGardenBeacon"

    if-nez v0, :cond_1

    .line 67
    const-string v0, "Bluetooth hardware not supported on this device"

    invoke-static {v2, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    .line 68
    const-string v0, "Bluetooth is not supported on this device"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return v1

    .line 72
    :cond_1
    invoke-virtual {v0}, Landroid/bluetooth/BluetoothAdapter;->isEnabled()Z

    move-result v0

    if-nez v0, :cond_2

    .line 73
    const-string v0, "Bluetooth is currently disabled"

    invoke-static {v2, v0}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    .line 74
    const-string v0, "Bluetooth is not enabled"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return v1

    :cond_2
    const/4 p1, 0x1

    return p1
.end method

.method private logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V
    .locals 3

    .line 49
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    if-eqz p1, :cond_0

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, " "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    goto :goto_0

    :cond_0
    const-string p1, ""

    :goto_0
    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, ": "

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 50
    iget-object p2, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->bridge:Lcom/getcapacitor/Bridge;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "[WisdomGardenBeacon]"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p2, v0}, Lcom/getcapacitor/Bridge;->logToJs(Ljava/lang/String;)V

    .line 51
    const-string p2, "WisdomGardenBeacon"

    invoke-static {p2, p1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    return-void
.end method

.method private scanForPeripherals()V
    .locals 5

    .line 239
    const-string v0, "[SEQ-32]"

    const-string v1, "Initialising LE Scanner"

    invoke-direct {p0, v0, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 240
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanner:Landroid/bluetooth/le/BluetoothLeScanner;

    if-nez v0, :cond_0

    .line 241
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->bluetoothAdapter:Landroid/bluetooth/BluetoothAdapter;

    invoke-virtual {v0}, Landroid/bluetooth/BluetoothAdapter;->getBluetoothLeScanner()Landroid/bluetooth/le/BluetoothLeScanner;

    move-result-object v0

    iput-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanner:Landroid/bluetooth/le/BluetoothLeScanner;

    .line 244
    :cond_0
    iget-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isMonitoring:Z

    if-eqz v0, :cond_1

    return-void

    :cond_1
    const/4 v0, 0x1

    .line 248
    iput-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isMonitoring:Z

    .line 250
    new-instance v0, Landroid/bluetooth/le/ScanSettings$Builder;

    invoke-direct {v0}, Landroid/bluetooth/le/ScanSettings$Builder;-><init>()V

    const/4 v1, 0x2

    invoke-virtual {v0, v1}, Landroid/bluetooth/le/ScanSettings$Builder;->setScanMode(I)Landroid/bluetooth/le/ScanSettings$Builder;

    move-result-object v0

    const-wide/16 v1, 0x0

    invoke-virtual {v0, v1, v2}, Landroid/bluetooth/le/ScanSettings$Builder;->setReportDelay(J)Landroid/bluetooth/le/ScanSettings$Builder;

    move-result-object v0

    invoke-virtual {v0}, Landroid/bluetooth/le/ScanSettings$Builder;->build()Landroid/bluetooth/le/ScanSettings;

    move-result-object v0

    .line 252
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    .line 253
    new-instance v2, Landroid/bluetooth/le/ScanFilter$Builder;

    invoke-direct {v2}, Landroid/bluetooth/le/ScanFilter$Builder;-><init>()V

    new-instance v3, Landroid/os/ParcelUuid;

    const-string v4, "00005747-0000-1000-8000-00805F9B34FB"

    invoke-static {v4}, Ljava/util/UUID;->fromString(Ljava/lang/String;)Ljava/util/UUID;

    move-result-object v4

    invoke-direct {v3, v4}, Landroid/os/ParcelUuid;-><init>(Ljava/util/UUID;)V

    invoke-virtual {v2, v3}, Landroid/bluetooth/le/ScanFilter$Builder;->setServiceUuid(Landroid/os/ParcelUuid;)Landroid/bluetooth/le/ScanFilter$Builder;

    move-result-object v2

    invoke-virtual {v2}, Landroid/bluetooth/le/ScanFilter$Builder;->build()Landroid/bluetooth/le/ScanFilter;

    move-result-object v2

    .line 254
    invoke-interface {v1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 256
    const-string v2, "[SEQ-33]"

    const-string v3, "Calling scanner.startScan"

    invoke-direct {p0, v2, v3}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 257
    iget-object v2, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanner:Landroid/bluetooth/le/BluetoothLeScanner;

    iget-object v3, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanCallback:Landroid/bluetooth/le/ScanCallback;

    invoke-virtual {v2, v1, v0, v3}, Landroid/bluetooth/le/BluetoothLeScanner;->startScan(Ljava/util/List;Landroid/bluetooth/le/ScanSettings;Landroid/bluetooth/le/ScanCallback;)V

    return-void
.end method

.method private startAdvertising()V
    .locals 5

    .line 206
    const-string v0, "[SEQ-13]"

    const-string v1, "Initialising LE Advertiser"

    invoke-direct {p0, v0, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 207
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->advertiser:Landroid/bluetooth/le/BluetoothLeAdvertiser;

    if-nez v0, :cond_0

    .line 208
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->bluetoothAdapter:Landroid/bluetooth/BluetoothAdapter;

    invoke-virtual {v0}, Landroid/bluetooth/BluetoothAdapter;->getBluetoothLeAdvertiser()Landroid/bluetooth/le/BluetoothLeAdvertiser;

    move-result-object v0

    iput-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->advertiser:Landroid/bluetooth/le/BluetoothLeAdvertiser;

    .line 211
    :cond_0
    iget-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isBroadcasting:Z

    if-eqz v0, :cond_1

    return-void

    .line 214
    :cond_1
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Preparing packet with message: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->message:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "[SEQ-13-1]"

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    const/4 v0, 0x1

    .line 215
    iput-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isBroadcasting:Z

    .line 217
    new-instance v0, Landroid/bluetooth/le/AdvertiseSettings$Builder;

    invoke-direct {v0}, Landroid/bluetooth/le/AdvertiseSettings$Builder;-><init>()V

    const/4 v1, 0x2

    .line 218
    invoke-virtual {v0, v1}, Landroid/bluetooth/le/AdvertiseSettings$Builder;->setAdvertiseMode(I)Landroid/bluetooth/le/AdvertiseSettings$Builder;

    move-result-object v0

    const/4 v2, 0x0

    .line 219
    invoke-virtual {v0, v2}, Landroid/bluetooth/le/AdvertiseSettings$Builder;->setConnectable(Z)Landroid/bluetooth/le/AdvertiseSettings$Builder;

    move-result-object v0

    .line 220
    invoke-virtual {v0, v2}, Landroid/bluetooth/le/AdvertiseSettings$Builder;->setTimeout(I)Landroid/bluetooth/le/AdvertiseSettings$Builder;

    move-result-object v0

    .line 221
    invoke-virtual {v0, v1}, Landroid/bluetooth/le/AdvertiseSettings$Builder;->setTxPowerLevel(I)Landroid/bluetooth/le/AdvertiseSettings$Builder;

    move-result-object v0

    .line 222
    invoke-virtual {v0}, Landroid/bluetooth/le/AdvertiseSettings$Builder;->build()Landroid/bluetooth/le/AdvertiseSettings;

    move-result-object v0

    .line 224
    iget-object v1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->message:Ljava/lang/String;

    invoke-static {v1}, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->addPrefixToBytes(Ljava/lang/String;)[B

    move-result-object v1

    .line 226
    new-instance v3, Landroid/bluetooth/le/AdvertiseData$Builder;

    invoke-direct {v3}, Landroid/bluetooth/le/AdvertiseData$Builder;-><init>()V

    .line 227
    invoke-virtual {v3, v2}, Landroid/bluetooth/le/AdvertiseData$Builder;->setIncludeDeviceName(Z)Landroid/bluetooth/le/AdvertiseData$Builder;

    move-result-object v3

    .line 228
    invoke-virtual {v3, v2}, Landroid/bluetooth/le/AdvertiseData$Builder;->setIncludeTxPowerLevel(Z)Landroid/bluetooth/le/AdvertiseData$Builder;

    move-result-object v2

    new-instance v3, Landroid/os/ParcelUuid;

    const-string v4, "00005747-0000-1000-8000-00805F9B34FB"

    .line 229
    invoke-static {v4}, Ljava/util/UUID;->fromString(Ljava/lang/String;)Ljava/util/UUID;

    move-result-object v4

    invoke-direct {v3, v4}, Landroid/os/ParcelUuid;-><init>(Ljava/util/UUID;)V

    invoke-virtual {v2, v3}, Landroid/bluetooth/le/AdvertiseData$Builder;->addServiceUuid(Landroid/os/ParcelUuid;)Landroid/bluetooth/le/AdvertiseData$Builder;

    move-result-object v2

    const v3, 0xffff

    .line 230
    invoke-virtual {v2, v3, v1}, Landroid/bluetooth/le/AdvertiseData$Builder;->addManufacturerData(I[B)Landroid/bluetooth/le/AdvertiseData$Builder;

    move-result-object v1

    .line 231
    invoke-virtual {v1}, Landroid/bluetooth/le/AdvertiseData$Builder;->build()Landroid/bluetooth/le/AdvertiseData;

    move-result-object v1

    .line 233
    const-string v2, "[SEQ-14]"

    const-string v3, "Calling advertiser.startAdvertising"

    invoke-direct {p0, v2, v3}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 234
    iget-object v2, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->advertiser:Landroid/bluetooth/le/BluetoothLeAdvertiser;

    iget-object v3, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->advertiseCallback:Landroid/bluetooth/le/AdvertiseCallback;

    invoke-virtual {v2, v0, v1, v3}, Landroid/bluetooth/le/BluetoothLeAdvertiser;->startAdvertising(Landroid/bluetooth/le/AdvertiseSettings;Landroid/bluetooth/le/AdvertiseData;Landroid/bluetooth/le/AdvertiseCallback;)V

    return-void
.end method


# virtual methods
.method public cleanup(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 170
    const-string v0, "WisdomGardenBeacon"

    const-string v1, "[SEQ-90] Cleanup: Resetting all states"

    invoke-static {v0, v1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 171
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->advertiser:Landroid/bluetooth/le/BluetoothLeAdvertiser;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    .line 172
    iget-object v2, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->advertiseCallback:Landroid/bluetooth/le/AdvertiseCallback;

    invoke-virtual {v0, v2}, Landroid/bluetooth/le/BluetoothLeAdvertiser;->stopAdvertising(Landroid/bluetooth/le/AdvertiseCallback;)V

    .line 173
    iput-object v1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->advertiser:Landroid/bluetooth/le/BluetoothLeAdvertiser;

    .line 176
    :cond_0
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanner:Landroid/bluetooth/le/BluetoothLeScanner;

    if-eqz v0, :cond_1

    .line 177
    iget-object v2, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanCallback:Landroid/bluetooth/le/ScanCallback;

    invoke-virtual {v0, v2}, Landroid/bluetooth/le/BluetoothLeScanner;->stopScan(Landroid/bluetooth/le/ScanCallback;)V

    .line 178
    iput-object v1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanner:Landroid/bluetooth/le/BluetoothLeScanner;

    .line 181
    :cond_1
    iput-object v1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->bluetoothAdapter:Landroid/bluetooth/BluetoothAdapter;

    const/4 v0, 0x0

    .line 183
    iput-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isBroadcasting:Z

    .line 184
    iput-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isMonitoring:Z

    .line 186
    const-string v0, ""

    iput-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->message:Ljava/lang/String;

    .line 188
    invoke-virtual {p0, p1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->removeAllListeners(Lcom/getcapacitor/PluginCall;)V

    .line 190
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void
.end method

.method public initialize(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 56
    const-string v0, "WisdomGardenBeacon"

    const-string v1, "[SEQ-0] Plugin Initialized"

    invoke-static {v0, v1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 57
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void
.end method

.method public parseMessage(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 195
    const-string v0, "message"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 196
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Parsing message: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    const-string v2, "WisdomGardenBeacon"

    invoke-static {v2, v1}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    .line 197
    invoke-static {v0}, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->parseMessage(Ljava/lang/String;)Ljava/util/Map;

    move-result-object v0

    .line 198
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 199
    const-string v2, "rollcallId"

    invoke-interface {v0, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    invoke-virtual {v1, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 200
    const-string v2, "nonce"

    invoke-interface {v0, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 201
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public startBroadcasting(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 83
    const-string v0, "[SEQ-10]"

    const-string v1, "startBroadcasting invoked"

    invoke-direct {p0, v0, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 85
    const-string v0, "message"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 86
    invoke-virtual {v0}, Ljava/lang/String;->length()I

    move-result v1

    invoke-static {}, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->getMessageMaxLength()I

    move-result v2

    if-ne v1, v2, :cond_0

    .line 87
    iput-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->message:Ljava/lang/String;

    goto :goto_0

    .line 89
    :cond_0
    const-string v0, "rollcallId"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getInt(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v0

    .line 90
    const-string v1, "nonce"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 91
    const-string v2, "WisdomGardenBeacon"

    if-nez v0, :cond_1

    .line 92
    const-string v0, "Broadcasting failed: Missing rollcallId"

    invoke-static {v2, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    .line 93
    const-string v0, "rollcallId is required"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    :cond_1
    if-nez v1, :cond_2

    .line 97
    const-string v0, "Broadcasting failed: Missing nonce"

    invoke-static {v2, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    .line 98
    const-string v0, "nonce is required"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    .line 102
    :cond_2
    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    invoke-static {v0, v1}, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->buildMessage(ILjava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->message:Ljava/lang/String;

    .line 104
    :goto_0
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Payload prepared: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->message:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "[SEQ-11]"

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 106
    iget-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isBroadcasting:Z

    if-eqz v0, :cond_3

    .line 107
    const-string v0, "[SEQ-12]"

    const-string v1, "Already broadcasting, skipping"

    invoke-direct {p0, v0, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 108
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void

    .line 112
    :cond_3
    invoke-direct {p0, p1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->checkBluetoothEnabled(Lcom/getcapacitor/PluginCall;)Z

    move-result v0

    if-nez v0, :cond_4

    return-void

    .line 116
    :cond_4
    invoke-direct {p0}, Lcom/wisdomgarden/mobile/beacon/Beacon;->startAdvertising()V

    .line 117
    const-string v0, "[SEQ-16]"

    const-string v1, "startBroadcasting logic completed"

    invoke-direct {p0, v0, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 119
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void
.end method

.method public startMonitoring(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 138
    const-string v0, "[SEQ-30]"

    const-string v1, "startMonitoring invoked"

    invoke-direct {p0, v0, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 139
    iget-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isMonitoring:Z

    if-eqz v0, :cond_0

    .line 140
    const-string v0, "[SEQ-31]"

    const-string v1, "Already monitoring, skipping"

    invoke-direct {p0, v0, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 141
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void

    .line 145
    :cond_0
    invoke-direct {p0, p1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->checkBluetoothEnabled(Lcom/getcapacitor/PluginCall;)Z

    move-result v0

    if-nez v0, :cond_1

    return-void

    .line 149
    :cond_1
    invoke-direct {p0}, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanForPeripherals()V

    .line 150
    const-string v0, "[SEQ-36]"

    const-string v1, "startMonitoring logic completed"

    invoke-direct {p0, v0, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 152
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void
.end method

.method public stopBroadcasting(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 125
    const-string v0, "[SEQ-20]"

    const-string v1, "stopBroadcasting called"

    invoke-direct {p0, v0, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 126
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->advertiser:Landroid/bluetooth/le/BluetoothLeAdvertiser;

    if-eqz v0, :cond_0

    .line 127
    iget-object v1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->advertiseCallback:Landroid/bluetooth/le/AdvertiseCallback;

    invoke-virtual {v0, v1}, Landroid/bluetooth/le/BluetoothLeAdvertiser;->stopAdvertising(Landroid/bluetooth/le/AdvertiseCallback;)V

    const/4 v0, 0x0

    .line 128
    iput-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->advertiser:Landroid/bluetooth/le/BluetoothLeAdvertiser;

    :cond_0
    const/4 v0, 0x0

    .line 130
    iput-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isBroadcasting:Z

    if-eqz p1, :cond_1

    .line 132
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    :cond_1
    return-void
.end method

.method public stopMonitoring(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 158
    const-string v0, "[SEQ-40]"

    const-string v1, "stopMonitoring called"

    invoke-direct {p0, v0, v1}, Lcom/wisdomgarden/mobile/beacon/Beacon;->logToJsWithTag(Ljava/lang/String;Ljava/lang/String;)V

    .line 159
    iget-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanner:Landroid/bluetooth/le/BluetoothLeScanner;

    if-eqz v0, :cond_0

    .line 160
    iget-object v1, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanCallback:Landroid/bluetooth/le/ScanCallback;

    invoke-virtual {v0, v1}, Landroid/bluetooth/le/BluetoothLeScanner;->stopScan(Landroid/bluetooth/le/ScanCallback;)V

    const/4 v0, 0x0

    .line 161
    iput-object v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->scanner:Landroid/bluetooth/le/BluetoothLeScanner;

    :cond_0
    const/4 v0, 0x0

    .line 163
    iput-boolean v0, p0, Lcom/wisdomgarden/mobile/beacon/Beacon;->isMonitoring:Z

    .line 164
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void
.end method
