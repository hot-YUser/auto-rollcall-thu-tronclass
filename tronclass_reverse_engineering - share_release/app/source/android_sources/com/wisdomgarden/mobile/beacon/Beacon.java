package com.wisdomgarden.mobile.beacon;

import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothManager;
import android.bluetooth.le.AdvertiseCallback;
import android.bluetooth.le.AdvertiseData;
import android.bluetooth.le.AdvertiseSettings;
import android.bluetooth.le.BluetoothLeAdvertiser;
import android.bluetooth.le.BluetoothLeScanner;
import android.bluetooth.le.ScanCallback;
import android.bluetooth.le.ScanFilter;
import android.bluetooth.le.ScanRecord;
import android.bluetooth.le.ScanResult;
import android.bluetooth.le.ScanSettings;
import android.os.ParcelUuid;
import android.util.Log;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.onesignal.OneSignalDbContract;
import java.util.ArrayList;
import java.util.Map;
import java.util.UUID;
import org.apache.cordova.globalization.Globalization;
@NativePlugin
public class Beacon extends Plugin {
    private static final int MANUFACTURER_ID = 65535;
    private static final String TAG = "WisdomGardenBeacon";
    private BluetoothLeAdvertiser advertiser;
    private BluetoothAdapter bluetoothAdapter;
    private BluetoothLeScanner scanner;
    private boolean isBroadcasting = false;
    private boolean isMonitoring = false;
    private String message = "";
    private final AdvertiseCallback advertiseCallback = new AdvertiseCallback() { // from class: com.wisdomgarden.mobile.beacon.Beacon.1
        @Override // android.bluetooth.le.AdvertiseCallback
        public void onStartSuccess(AdvertiseSettings advertiseSettings) {
            super.onStartSuccess(advertiseSettings);
            Beacon.this.logToJsWithTag("[SEQ-15]", "AdvertiseCallback: Success (Peripheral Active)");
            JSObject jSObject = new JSObject();
            jSObject.put(Globalization.TYPE, "peripheral");
            jSObject.put("state", "poweredOn");
            Beacon.this.notifyListeners("stateUpdated", jSObject);
        }

        @Override // android.bluetooth.le.AdvertiseCallback
        public void onStartFailure(int i) {
            super.onStartFailure(i);
            Beacon.this.logToJsWithTag("[SEQ-15-F]", "AdvertiseCallback: Failure (Error: " + i + ")");
            JSObject jSObject = new JSObject();
            jSObject.put(Globalization.TYPE, "peripheral");
            jSObject.put("state", i);
            Beacon.this.notifyListeners("stateUpdated", jSObject);
            Beacon.this.stopBroadcasting(null);
        }
    };
    private final ScanCallback scanCallback = new ScanCallback() { // from class: com.wisdomgarden.mobile.beacon.Beacon.2
        @Override // android.bluetooth.le.ScanCallback
        public void onScanResult(int i, ScanResult scanResult) {
            super.onScanResult(i, scanResult);
            ScanRecord scanRecord = scanResult.getScanRecord();
            Log.d(Beacon.TAG, "start scan result received");
            if (scanRecord == null) {
                Log.w(Beacon.TAG, "Scan result is null");
                return;
            }
            String strExtractMessageFromBytes = BeaconUtils.extractMessageFromBytes(scanRecord.getManufacturerSpecificData(65535));
            if (strExtractMessageFromBytes == null) {
                String deviceName = scanRecord.getDeviceName();
                Log.d(Beacon.TAG, "Valid message found in Device Name: " + deviceName);
                String strExtractMessageFromDeviceName = BeaconUtils.extractMessageFromDeviceName(deviceName);
                if (strExtractMessageFromDeviceName != null) {
                    strExtractMessageFromBytes = strExtractMessageFromDeviceName;
                }
            }
            if (strExtractMessageFromBytes != null) {
                Beacon.this.logToJsWithTag("[SEQ-55]", "Beacon Resolved: " + strExtractMessageFromBytes + " | RSSI: " + scanResult.getRssi());
                JSObject jSObject = new JSObject();
                jSObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, strExtractMessageFromBytes);
                jSObject.put("rssi", scanResult.getRssi());
                jSObject.put("peripheralId", scanResult.getDevice().getAddress());
                jSObject.put("timestamp", System.currentTimeMillis());
                Beacon.this.notifyListeners("beaconReceived", jSObject);
                return;
            }
            Beacon.this.logToJsWithTag("[SEQ-55-F]", "No valid message found in scan result");
        }
    };
    public void logToJsWithTag(String str, String str2) {
        String str3 = (str != null ? " " + str : "") + ": " + str2;
        this.bridge.logToJs("[WisdomGardenBeacon]" + str3);
        Log.i(TAG, str3);
    }

    @PluginMethod
    public void initialize(PluginCall pluginCall) {
        Log.i(TAG, "[SEQ-0] Plugin Initialized");
        pluginCall.resolve();
    }

    private boolean checkBluetoothEnabled(PluginCall pluginCall) {
        if (this.bluetoothAdapter == null) {
            this.bluetoothAdapter = ((BluetoothManager) getContext().getSystemService("bluetooth")).getAdapter();
        }
        BluetoothAdapter bluetoothAdapter = this.bluetoothAdapter;
        if (bluetoothAdapter == null) {
            Log.e(TAG, "Bluetooth hardware not supported on this device");
            pluginCall.reject("Bluetooth is not supported on this device");
            return false;
        }
        if (bluetoothAdapter.isEnabled()) {
            return true;
        }
        Log.w(TAG, "Bluetooth is currently disabled");
        pluginCall.reject("Bluetooth is not enabled");
        return false;
    }

    @PluginMethod
    public void startBroadcasting(PluginCall pluginCall) {
        logToJsWithTag("[SEQ-10]", "startBroadcasting invoked");
        String string = pluginCall.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE);
        if (string != null && string.length() == BeaconUtils.getMessageMaxLength()) {
            this.message = string;
        } else {
            Integer num = pluginCall.getInt("rollcallId");
            String string2 = pluginCall.getString("nonce");
            if (num == null) {
                Log.e(TAG, "Broadcasting failed: Missing rollcallId");
                pluginCall.reject("rollcallId is required");
                return;
            } else {
                if (string2 == null) {
                    Log.e(TAG, "Broadcasting failed: Missing nonce");
                    pluginCall.reject("nonce is required");
                    return;
                }
                this.message = BeaconUtils.buildMessage(num.intValue(), string2);
            }
        }
        logToJsWithTag("[SEQ-11]", "Payload prepared: " + this.message);
        if (this.isBroadcasting) {
            logToJsWithTag("[SEQ-12]", "Already broadcasting, skipping");
            pluginCall.resolve();
        } else if (checkBluetoothEnabled(pluginCall)) {
            startAdvertising();
            logToJsWithTag("[SEQ-16]", "startBroadcasting logic completed");
            pluginCall.resolve();
        }
    }

    @PluginMethod
    public void stopBroadcasting(PluginCall pluginCall) {
        logToJsWithTag("[SEQ-20]", "stopBroadcasting called");
        BluetoothLeAdvertiser bluetoothLeAdvertiser = this.advertiser;
        if (bluetoothLeAdvertiser != null) {
            bluetoothLeAdvertiser.stopAdvertising(this.advertiseCallback);
            this.advertiser = null;
        }
        this.isBroadcasting = false;
        if (pluginCall != null) {
            pluginCall.resolve();
        }
    }

    @PluginMethod
    public void startMonitoring(PluginCall pluginCall) {
        logToJsWithTag("[SEQ-30]", "startMonitoring invoked");
        if (this.isMonitoring) {
            logToJsWithTag("[SEQ-31]", "Already monitoring, skipping");
            pluginCall.resolve();
        } else if (checkBluetoothEnabled(pluginCall)) {
            scanForPeripherals();
            logToJsWithTag("[SEQ-36]", "startMonitoring logic completed");
            pluginCall.resolve();
        }
    }

    @PluginMethod
    public void stopMonitoring(PluginCall pluginCall) {
        logToJsWithTag("[SEQ-40]", "stopMonitoring called");
        BluetoothLeScanner bluetoothLeScanner = this.scanner;
        if (bluetoothLeScanner != null) {
            bluetoothLeScanner.stopScan(this.scanCallback);
            this.scanner = null;
        }
        this.isMonitoring = false;
        pluginCall.resolve();
    }

    @PluginMethod
    public void cleanup(PluginCall pluginCall) {
        Log.i(TAG, "[SEQ-90] Cleanup: Resetting all states");
        BluetoothLeAdvertiser bluetoothLeAdvertiser = this.advertiser;
        if (bluetoothLeAdvertiser != null) {
            bluetoothLeAdvertiser.stopAdvertising(this.advertiseCallback);
            this.advertiser = null;
        }
        BluetoothLeScanner bluetoothLeScanner = this.scanner;
        if (bluetoothLeScanner != null) {
            bluetoothLeScanner.stopScan(this.scanCallback);
            this.scanner = null;
        }
        this.bluetoothAdapter = null;
        this.isBroadcasting = false;
        this.isMonitoring = false;
        this.message = "";
        removeAllListeners(pluginCall);
        pluginCall.resolve();
    }

    @PluginMethod
    public void parseMessage(PluginCall pluginCall) {
        String string = pluginCall.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE);
        Log.v(TAG, "Parsing message: " + string);
        Map<String, Object> message = BeaconUtils.parseMessage(string);
        JSObject jSObject = new JSObject();
        jSObject.put("rollcallId", message.get("rollcallId"));
        jSObject.put("nonce", message.get("nonce"));
        pluginCall.resolve(jSObject);
    }

    private void startAdvertising() {
        logToJsWithTag("[SEQ-13]", "Initialising LE Advertiser");
        if (this.advertiser == null) {
            this.advertiser = this.bluetoothAdapter.getBluetoothLeAdvertiser();
        }
        if (this.isBroadcasting) {
            return;
        }
        logToJsWithTag("[SEQ-13-1]", "Preparing packet with message: " + this.message);
        this.isBroadcasting = true;
        AdvertiseSettings advertiseSettingsBuild = new AdvertiseSettings.Builder().setAdvertiseMode(2).setConnectable(false).setTimeout(0).setTxPowerLevel(2).build();
        AdvertiseData advertiseDataBuild = new AdvertiseData.Builder().setIncludeDeviceName(false).setIncludeTxPowerLevel(false).addServiceUuid(new ParcelUuid(UUID.fromString(BeaconUtils.WG_UUID))).addManufacturerData(65535, BeaconUtils.addPrefixToBytes(this.message)).build();
        logToJsWithTag("[SEQ-14]", "Calling advertiser.startAdvertising");
        this.advertiser.startAdvertising(advertiseSettingsBuild, advertiseDataBuild, this.advertiseCallback);
    }

    private void scanForPeripherals() {
        logToJsWithTag("[SEQ-32]", "Initialising LE Scanner");
        if (this.scanner == null) {
            this.scanner = this.bluetoothAdapter.getBluetoothLeScanner();
        }
        if (this.isMonitoring) {
            return;
        }
        this.isMonitoring = true;
        ScanSettings scanSettingsBuild = new ScanSettings.Builder().setScanMode(2).setReportDelay(0L).build();
        ArrayList arrayList = new ArrayList();
        arrayList.add(new ScanFilter.Builder().setServiceUuid(new ParcelUuid(UUID.fromString(BeaconUtils.WG_UUID))).build());
        logToJsWithTag("[SEQ-33]", "Calling scanner.startScan");
        this.scanner.startScan(arrayList, scanSettingsBuild, this.scanCallback);
    }
}

