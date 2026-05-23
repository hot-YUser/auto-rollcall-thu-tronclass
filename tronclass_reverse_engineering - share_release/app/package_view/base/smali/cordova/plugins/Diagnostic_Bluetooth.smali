.class public Lcordova/plugins/Diagnostic_Bluetooth;
.super Lorg/apache/cordova/CordovaPlugin;
.source "Diagnostic_Bluetooth.java"


# static fields
.field protected static final BLUETOOTH_STATE_POWERED_OFF:Ljava/lang/String; = "powered_off"

.field protected static final BLUETOOTH_STATE_POWERED_ON:Ljava/lang/String; = "powered_on"

.field protected static final BLUETOOTH_STATE_POWERING_OFF:Ljava/lang/String; = "powering_off"

.field protected static final BLUETOOTH_STATE_POWERING_ON:Ljava/lang/String; = "powering_on"

.field protected static final BLUETOOTH_STATE_UNKNOWN:Ljava/lang/String; = "unknown"

.field public static final TAG:Ljava/lang/String; = "Diagnostic_Bluetooth"

.field public static instance:Lcordova/plugins/Diagnostic_Bluetooth;

.field protected static final permissions:[Ljava/lang/String;


# instance fields
.field protected final bluetoothStateChangeReceiver:Landroid/content/BroadcastReceiver;

.field private currentBluetoothState:Ljava/lang/String;

.field protected currentContext:Lorg/apache/cordova/CallbackContext;

.field private diagnostic:Lcordova/plugins/Diagnostic;


# direct methods
.method static constructor <clinit>()V
    .locals 3

    const/4 v0, 0x3

    .line 83
    new-array v0, v0, [Ljava/lang/String;

    const/4 v1, 0x0

    const-string v2, "BLUETOOTH_ADVERTISE"

    aput-object v2, v0, v1

    const/4 v1, 0x1

    const-string v2, "BLUETOOTH_CONNECT"

    aput-object v2, v0, v1

    const/4 v1, 0x2

    const-string v2, "BLUETOOTH_SCAN"

    aput-object v2, v0, v1

    sput-object v0, Lcordova/plugins/Diagnostic_Bluetooth;->permissions:[Ljava/lang/String;

    const/4 v0, 0x0

    .line 104
    sput-object v0, Lcordova/plugins/Diagnostic_Bluetooth;->instance:Lcordova/plugins/Diagnostic_Bluetooth;

    return-void
.end method

.method public constructor <init>()V
    .locals 1

    .line 121
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    const/4 v0, 0x0

    .line 94
    iput-object v0, p0, Lcordova/plugins/Diagnostic_Bluetooth;->currentBluetoothState:Ljava/lang/String;

    .line 374
    new-instance v0, Lcordova/plugins/Diagnostic_Bluetooth$1;

    invoke-direct {v0, p0}, Lcordova/plugins/Diagnostic_Bluetooth$1;-><init>(Lcordova/plugins/Diagnostic_Bluetooth;)V

    iput-object v0, p0, Lcordova/plugins/Diagnostic_Bluetooth;->bluetoothStateChangeReceiver:Landroid/content/BroadcastReceiver;

    return-void
.end method

.method private static contains([Ljava/lang/Object;Ljava/lang/Object;)Z
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">([TT;TT;)Z"
        }
    .end annotation

    const/4 v0, 0x0

    const/4 v1, 0x1

    if-nez p1, :cond_1

    .line 357
    array-length p1, p0

    move v2, v0

    :goto_0
    if-ge v2, p1, :cond_4

    aget-object v3, p0, v2

    if-nez v3, :cond_0

    return v1

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 362
    :cond_1
    array-length v2, p0

    move v3, v0

    :goto_1
    if-ge v3, v2, :cond_4

    aget-object v4, p0, v3

    if-eq v4, p1, :cond_3

    .line 363
    invoke-virtual {p1, v4}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v4

    if-eqz v4, :cond_2

    goto :goto_2

    :cond_2
    add-int/lit8 v3, v3, 0x1

    goto :goto_1

    :cond_3
    :goto_2
    return v1

    :cond_4
    return v0
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 166
    sget-object v0, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    iput-object p3, p0, Lcordova/plugins/Diagnostic_Bluetooth;->currentContext:Lorg/apache/cordova/CallbackContext;

    iput-object p3, v0, Lcordova/plugins/Diagnostic;->currentContext:Lorg/apache/cordova/CallbackContext;

    const/4 v0, 0x0

    .line 169
    :try_start_0
    const-string v1, "switchToBluetoothSettings"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    const/4 v2, 0x1

    if-eqz v1, :cond_0

    .line 170
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->switchToBluetoothSettings()V

    .line 171
    invoke-virtual {p3}, Lorg/apache/cordova/CallbackContext;->success()V

    goto/16 :goto_0

    .line 172
    :cond_0
    const-string v1, "isBluetoothAvailable"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 173
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->isBluetoothAvailable()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto/16 :goto_0

    .line 174
    :cond_1
    const-string v1, "isBluetoothEnabled"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    .line 175
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->isBluetoothEnabled()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto/16 :goto_0

    .line 176
    :cond_2
    const-string v1, "hasBluetoothSupport"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 177
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->hasBluetoothSupport()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto :goto_0

    .line 178
    :cond_3
    const-string v1, "hasBluetoothLESupport"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_4

    .line 179
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->hasBluetoothLESupport()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto :goto_0

    .line 180
    :cond_4
    const-string v1, "hasBluetoothLEPeripheralSupport"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_5

    .line 181
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->hasBluetoothLEPeripheralSupport()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto :goto_0

    .line 182
    :cond_5
    const-string v1, "setBluetoothState"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_6

    .line 183
    invoke-virtual {p2, v0}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p1

    invoke-virtual {p0, p1, p3}, Lcordova/plugins/Diagnostic_Bluetooth;->setBluetoothState(ZLorg/apache/cordova/CallbackContext;)V

    goto :goto_0

    .line 184
    :cond_6
    const-string v1, "getBluetoothState"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_7

    .line 185
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->getBluetoothState()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    goto :goto_0

    .line 186
    :cond_7
    const-string v1, "getAuthorizationStatuses"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_8

    .line 187
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->getAuthorizationStatuses()Lorg/json/JSONObject;

    move-result-object p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    goto :goto_0

    .line 188
    :cond_8
    const-string v1, "requestBluetoothAuthorization"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_9

    .line 189
    invoke-virtual {p0, p2, p3}, Lcordova/plugins/Diagnostic_Bluetooth;->requestBluetoothAuthorization(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    :goto_0
    return v2

    .line 191
    :cond_9
    iget-object p1, p0, Lcordova/plugins/Diagnostic_Bluetooth;->diagnostic:Lcordova/plugins/Diagnostic;

    const-string p2, "Invalid action"

    invoke-virtual {p1, p2}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return v0

    :catch_0
    move-exception p1

    .line 195
    iget-object p2, p0, Lcordova/plugins/Diagnostic_Bluetooth;->diagnostic:Lcordova/plugins/Diagnostic;

    const-string p3, "Exception occurred: "

    invoke-virtual {p1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p3, p1}, Ljava/lang/String;->concat(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;)V

    return v0
.end method

.method public getAuthorizationStatuses()Lorg/json/JSONObject;
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 316
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1f

    if-lt v0, v1, :cond_0

    .line 317
    sget-object v0, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    sget-object v1, Lcordova/plugins/Diagnostic_Bluetooth;->permissions:[Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcordova/plugins/Diagnostic;->_getPermissionsAuthorizationStatus([Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    goto :goto_2

    .line 319
    :cond_0
    sget-object v0, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    const-string v1, "BLUETOOTH"

    invoke-virtual {v0, v1}, Lcordova/plugins/Diagnostic;->hasBuildPermission(Ljava/lang/String;)Z

    move-result v0

    .line 320
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1}, Lorg/json/JSONObject;-><init>()V

    .line 321
    sget-object v2, Lcordova/plugins/Diagnostic_Bluetooth;->permissions:[Ljava/lang/String;

    array-length v3, v2

    const/4 v4, 0x0

    :goto_0
    if-ge v4, v3, :cond_2

    aget-object v5, v2, v4

    if-eqz v0, :cond_1

    .line 322
    const-string v6, "GRANTED"

    goto :goto_1

    :cond_1
    const-string v6, "DENIED_ALWAYS"

    :goto_1
    invoke-virtual {v1, v5, v6}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    add-int/lit8 v4, v4, 0x1

    goto :goto_0

    :cond_2
    move-object v0, v1

    :goto_2
    return-object v0
.end method

.method public getBluetoothState()Ljava/lang/String;
    .locals 3

    .line 275
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->hasBluetoothSupport()Z

    move-result v0

    const-string v1, "unknown"

    if-eqz v0, :cond_1

    .line 276
    invoke-static {}, Landroid/bluetooth/BluetoothAdapter;->getDefaultAdapter()Landroid/bluetooth/BluetoothAdapter;

    move-result-object v0

    if-nez v0, :cond_0

    .line 278
    iget-object v0, p0, Lcordova/plugins/Diagnostic_Bluetooth;->diagnostic:Lcordova/plugins/Diagnostic;

    const-string v2, "Bluetooth adapter unavailable or not found"

    invoke-virtual {v0, v2}, Lcordova/plugins/Diagnostic;->logWarning(Ljava/lang/String;)V

    return-object v1

    .line 281
    :cond_0
    invoke-virtual {v0}, Landroid/bluetooth/BluetoothAdapter;->getState()I

    move-result v0

    packed-switch v0, :pswitch_data_0

    goto :goto_0

    .line 291
    :pswitch_0
    const-string v1, "powering_off"

    goto :goto_0

    .line 288
    :pswitch_1
    const-string v1, "powered_on"

    goto :goto_0

    .line 293
    :pswitch_2
    const-string v1, "powering_on"

    goto :goto_0

    .line 285
    :pswitch_3
    const-string v1, "powered_off"

    :cond_1
    :goto_0
    return-object v1

    :pswitch_data_0
    .packed-switch 0xa
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method public hasBluetoothLEPeripheralSupport()Z
    .locals 1

    .line 236
    invoke-static {}, Landroid/bluetooth/BluetoothAdapter;->getDefaultAdapter()Landroid/bluetooth/BluetoothAdapter;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 237
    invoke-virtual {v0}, Landroid/bluetooth/BluetoothAdapter;->isMultipleAdvertisementSupported()Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public hasBluetoothLESupport()Z
    .locals 2

    .line 230
    iget-object v0, p0, Lcordova/plugins/Diagnostic_Bluetooth;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v0

    .line 231
    const-string v1, "android.hardware.bluetooth_le"

    invoke-virtual {v0, v1}, Landroid/content/pm/PackageManager;->hasSystemFeature(Ljava/lang/String;)Z

    move-result v0

    return v0
.end method

.method public hasBluetoothSupport()Z
    .locals 2

    .line 224
    iget-object v0, p0, Lcordova/plugins/Diagnostic_Bluetooth;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v0

    .line 225
    const-string v1, "android.hardware.bluetooth"

    invoke-virtual {v0, v1}, Landroid/content/pm/PackageManager;->hasSystemFeature(Ljava/lang/String;)Z

    move-result v0

    return v0
.end method

.method public initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V
    .locals 4

    .line 132
    const-string v0, "Diagnostic_Bluetooth"

    const-string v1, "initialize()"

    invoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 133
    sput-object p0, Lcordova/plugins/Diagnostic_Bluetooth;->instance:Lcordova/plugins/Diagnostic_Bluetooth;

    .line 134
    invoke-static {}, Lcordova/plugins/Diagnostic;->getInstance()Lcordova/plugins/Diagnostic;

    move-result-object v0

    iput-object v0, p0, Lcordova/plugins/Diagnostic_Bluetooth;->diagnostic:Lcordova/plugins/Diagnostic;

    .line 137
    :try_start_0
    iget-object v0, v0, Lcordova/plugins/Diagnostic;->applicationContext:Landroid/content/Context;

    iget-object v1, p0, Lcordova/plugins/Diagnostic_Bluetooth;->bluetoothStateChangeReceiver:Landroid/content/BroadcastReceiver;

    new-instance v2, Landroid/content/IntentFilter;

    const-string v3, "android.bluetooth.adapter.action.STATE_CHANGED"

    invoke-direct {v2, v3}, Landroid/content/IntentFilter;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, v1, v2}, Landroid/content/Context;->registerReceiver(Landroid/content/BroadcastReceiver;Landroid/content/IntentFilter;)Landroid/content/Intent;

    .line 138
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->getBluetoothState()Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcordova/plugins/Diagnostic_Bluetooth;->currentBluetoothState:Ljava/lang/String;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 140
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Bluetooth;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Unable to register Bluetooth state change receiver: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lcordova/plugins/Diagnostic;->logWarning(Ljava/lang/String;)V

    .line 143
    :goto_0
    invoke-super {p0, p1, p2}, Lorg/apache/cordova/CordovaPlugin;->initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V

    return-void
.end method

.method public isBluetoothAvailable()Z
    .locals 1

    .line 213
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->hasBluetoothSupport()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->isBluetoothEnabled()Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public isBluetoothEnabled()Z
    .locals 1

    .line 218
    invoke-static {}, Landroid/bluetooth/BluetoothAdapter;->getDefaultAdapter()Landroid/bluetooth/BluetoothAdapter;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 219
    invoke-virtual {v0}, Landroid/bluetooth/BluetoothAdapter;->isEnabled()Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public notifyBluetoothStateChange()V
    .locals 5

    const-string v0, "bluetooth._onBluetoothStateChange(\""

    const-string v1, "Bluetooth state changed to: "

    .line 302
    :try_start_0
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->getBluetoothState()Ljava/lang/String;

    move-result-object v2

    .line 303
    iget-object v3, p0, Lcordova/plugins/Diagnostic_Bluetooth;->currentBluetoothState:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_0

    .line 304
    iget-object v3, p0, Lcordova/plugins/Diagnostic_Bluetooth;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v3, v1}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    .line 305
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Bluetooth;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v3, "\");"

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lcordova/plugins/Diagnostic;->executePluginJavascript(Ljava/lang/String;)V

    .line 306
    iput-object v2, p0, Lcordova/plugins/Diagnostic_Bluetooth;->currentBluetoothState:Ljava/lang/String;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 309
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Bluetooth;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Error retrieving current Bluetooth state on Bluetooth state change: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lcordova/plugins/Diagnostic;->logError(Ljava/lang/String;)V

    :cond_0
    :goto_0
    return-void
.end method

.method public onDestroy()V
    .locals 4

    .line 151
    :try_start_0
    iget-object v0, p0, Lcordova/plugins/Diagnostic_Bluetooth;->diagnostic:Lcordova/plugins/Diagnostic;

    iget-object v0, v0, Lcordova/plugins/Diagnostic;->applicationContext:Landroid/content/Context;

    iget-object v1, p0, Lcordova/plugins/Diagnostic_Bluetooth;->bluetoothStateChangeReceiver:Landroid/content/BroadcastReceiver;

    invoke-virtual {v0, v1}, Landroid/content/Context;->unregisterReceiver(Landroid/content/BroadcastReceiver;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 153
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Bluetooth;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Unable to unregister Bluetooth state change receiver: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lcordova/plugins/Diagnostic;->logWarning(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method public requestBluetoothAuthorization(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 329
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0}, Lorg/json/JSONArray;-><init>()V

    .line 330
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v1

    const/4 v2, 0x0

    if-lez v1, :cond_1

    .line 331
    invoke-virtual {p1, v2}, Lorg/json/JSONArray;->getJSONArray(I)Lorg/json/JSONArray;

    move-result-object p1

    .line 332
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v1

    if-lez v1, :cond_1

    .line 333
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v1

    move v3, v2

    :goto_0
    if-ge v3, v1, :cond_1

    .line 334
    invoke-virtual {p1, v3}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v4

    .line 335
    sget-object v5, Lcordova/plugins/Diagnostic_Bluetooth;->permissions:[Ljava/lang/String;

    invoke-static {v5, v4}, Lcordova/plugins/Diagnostic_Bluetooth;->contains([Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_0

    .line 336
    invoke-virtual {v0, v4}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    :cond_0
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 341
    :cond_1
    invoke-virtual {v0}, Lorg/json/JSONArray;->length()I

    move-result p1

    if-nez p1, :cond_2

    .line 342
    sget-object p1, Lcordova/plugins/Diagnostic_Bluetooth;->permissions:[Ljava/lang/String;

    array-length v1, p1

    :goto_1
    if-ge v2, v1, :cond_2

    aget-object v3, p1, v2

    .line 343
    invoke-virtual {v0, v3}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    add-int/lit8 v2, v2, 0x1

    goto :goto_1

    .line 347
    :cond_2
    sget-object p1, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    sget-object v1, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    invoke-virtual {v1, p2}, Lcordova/plugins/Diagnostic;->storeContextByRequestId(Lorg/apache/cordova/CallbackContext;)I

    move-result v1

    invoke-virtual {p1, v0, v1}, Lcordova/plugins/Diagnostic;->_requestRuntimePermissions(Lorg/json/JSONArray;I)V

    .line 349
    new-instance p1, Lorg/apache/cordova/PluginResult;

    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->NO_RESULT:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p1, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V

    const/4 v0, 0x1

    .line 350
    invoke-virtual {p1, v0}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 351
    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return-void
.end method

.method public setBluetoothState(ZLorg/apache/cordova/CallbackContext;)V
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 243
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->hasBluetoothSupport()Z

    move-result v0

    if-nez v0, :cond_0

    .line 244
    const-string p1, "Cannot change Bluetooth state as device does not support Bluetooth"

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return-void

    .line 247
    :cond_0
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x21

    if-lt v0, v1, :cond_1

    .line 248
    const-string p1, "Cannot change Bluetooth state on Android 13+ as this is no longer supported"

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    return-void

    .line 252
    :cond_1
    invoke-static {}, Landroid/bluetooth/BluetoothAdapter;->getDefaultAdapter()Landroid/bluetooth/BluetoothAdapter;

    move-result-object v0

    .line 253
    invoke-virtual {v0}, Landroid/bluetooth/BluetoothAdapter;->isEnabled()Z

    move-result v1

    .line 255
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Bluetooth;->getAuthorizationStatuses()Lorg/json/JSONObject;

    move-result-object v2

    .line 257
    const-string v3, "BLUETOOTH_CONNECT"

    invoke-virtual {v2, v3}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    const-string v3, "GRANTED"

    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_4

    if-eqz p1, :cond_2

    if-nez v1, :cond_2

    .line 260
    invoke-virtual {v0}, Landroid/bluetooth/BluetoothAdapter;->enable()Z

    goto :goto_0

    :cond_2
    if-nez p1, :cond_3

    if-eqz v1, :cond_3

    .line 264
    invoke-virtual {v0}, Landroid/bluetooth/BluetoothAdapter;->disable()Z

    .line 266
    :cond_3
    :goto_0
    invoke-virtual {p2}, Lorg/apache/cordova/CallbackContext;->success()V

    goto :goto_1

    .line 268
    :cond_4
    const-string p1, "Cannot change Bluetooth state as permission is denied"

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_1
    return-void
.end method

.method public switchToBluetoothSettings()V
    .locals 2

    .line 207
    iget-object v0, p0, Lcordova/plugins/Diagnostic_Bluetooth;->diagnostic:Lcordova/plugins/Diagnostic;

    const-string v1, "Switch to Bluetooth Settings"

    invoke-virtual {v0, v1}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    .line 208
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.settings.BLUETOOTH_SETTINGS"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 209
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Bluetooth;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/app/Activity;->startActivity(Landroid/content/Intent;)V

    return-void
.end method
