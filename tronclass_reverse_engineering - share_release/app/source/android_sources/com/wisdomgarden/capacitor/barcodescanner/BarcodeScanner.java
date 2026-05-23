package com.wisdomgarden.capacitor.barcodescanner;

import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.Toast;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.wisdomgarden.capacitor.barcodescanner.ScannerFragment;
import com.wisdomgarden.qrcode.WisdomGardenQRCodeDetector;
import org.opencv.OpenCV;
@NativePlugin
public class BarcodeScanner extends Plugin implements ScannerFragment.OnScanResultListener {
    private static final String TAG_SCANNER_FRAGMENT = "ScannerFragment";
    private Button closeButton;
    private Handler handler;
    private FrameLayout rootContainer;
    private ScannerFragment scannerFragment;
    private Runnable timerRunnable;
    private Toast toast;
    private boolean didRunCameraPrepare = false;
    private boolean canUseCamera = false;
    private String tipsMessage = "";
    private int tipsDelaySeconds = 3;

    @Override // com.getcapacitor.Plugin
    public void load() {
        super.load();
        FrameLayout frameLayout = (FrameLayout) getActivity().findViewById(R.id.barcode_root_container);
        this.rootContainer = frameLayout;
        this.closeButton = (Button) frameLayout.findViewById(R.id.close_button);
    }

    private boolean hasCamera() {
        return getActivity().getPackageManager().hasSystemFeature("android.hardware.camera.any");
    }
    public void onAction(String str) {
        JSObject jSObject = new JSObject();
        jSObject.put("action", str);
        notifyListeners("BarcodeScannerAction", jSObject);
    }

    private void dismantleCamera() {
        if (this.rootContainer != null) {
            this.closeButton.setOnClickListener(null);
            this.rootContainer.setVisibility(4);
            this.rootContainer.setClickable(false);
            this.rootContainer.setFocusable(false);
        }
        ScannerFragment scannerFragment = this.scannerFragment;
        if (scannerFragment != null) {
            scannerFragment.onPause();
            FragmentTransaction fragmentTransactionBeginTransaction = getActivity().getSupportFragmentManager().beginTransaction();
            fragmentTransactionBeginTransaction.remove(this.scannerFragment);
            fragmentTransactionBeginTransaction.commit();
            this.scannerFragment = null;
        }
        if (getSavedCall() != null) {
            freeSavedCall();
        }
    }

    private void destroy() {
        cancelTimer();
        showBackground();
        dismantleCamera();
    }

    private void prepare() {
        if (this.didRunCameraPrepare) {
            return;
        }
        if (!hasCamera() || !hasPermission("android.permission.CAMERA")) {
            this.canUseCamera = false;
        } else {
            OpenCV.initOpenCV();
            WisdomGardenQRCodeDetector.init(getContext());
            this.canUseCamera = true;
        }
        this.didRunCameraPrepare = true;
        dismantleCamera();
    }

    private void scan() {
        if (!this.didRunCameraPrepare) {
            prepare();
        }
        if (!this.canUseCamera) {
            onScanResult(null);
            return;
        }
        startTimer(this.tipsDelaySeconds);
        getActivity().runOnUiThread(new AnonymousClass1());
        hideBackground();
    }
    class AnonymousClass1 implements Runnable {
        AnonymousClass1() {
        }

        @Override // java.lang.Runnable
        public void run() {
            if (BarcodeScanner.this.rootContainer != null) {
                BarcodeScanner.this.rootContainer.setVisibility(0);
                BarcodeScanner.this.rootContainer.setClickable(true);
                BarcodeScanner.this.rootContainer.setFocusable(true);
                BarcodeScanner.this.closeButton.setOnClickListener(new View.OnClickListener() { // from class: com.wisdomgarden.capacitor.barcodescanner.BarcodeScanner$1$$ExternalSyntheticLambda0
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        this.f$0.m325x61fe088e(view);
                    }
                });
            }
            if (BarcodeScanner.this.scannerFragment == null) {
                BarcodeScanner.this.scannerFragment = new ScannerFragment();
                BarcodeScanner.this.scannerFragment.setOnScanResultListener(BarcodeScanner.this);
            }
            FragmentManager supportFragmentManager = BarcodeScanner.this.getActivity().getSupportFragmentManager();
            FragmentTransaction fragmentTransactionBeginTransaction = supportFragmentManager.beginTransaction();
            if (supportFragmentManager.findFragmentByTag(BarcodeScanner.TAG_SCANNER_FRAGMENT) != null) {
                fragmentTransactionBeginTransaction.show(BarcodeScanner.this.scannerFragment);
            } else {
                fragmentTransactionBeginTransaction.add(R.id.scanner_container, BarcodeScanner.this.scannerFragment, BarcodeScanner.TAG_SCANNER_FRAGMENT);
            }
            fragmentTransactionBeginTransaction.commit();
        }
        /* synthetic */ void m325x61fe088e(View view) {
            BarcodeScanner.this.onAction("close");
        }
    }

    private void hideBackground() {
        getActivity().runOnUiThread(new Runnable() { // from class: com.wisdomgarden.capacitor.barcodescanner.BarcodeScanner$$ExternalSyntheticLambda1
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m323x639fde82();
            }
        });
    }
    /* synthetic */ void m323x639fde82() {
        this.bridge.getWebView().setBackgroundColor(0);
        this.bridge.getWebView().loadUrl("javascript:document.documentElement.style.backgroundColor = 'transparent';void(0);");
    }

    private void showBackground() {
        getActivity().runOnUiThread(new Runnable() { // from class: com.wisdomgarden.capacitor.barcodescanner.BarcodeScanner$$ExternalSyntheticLambda0
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m324xbe6cacc6();
            }
        });
    }
    /* synthetic */ void m324xbe6cacc6() {
        this.bridge.getWebView().setBackgroundColor(-1);
        this.bridge.getWebView().loadUrl("javascript:document.documentElement.style.backgroundColor = '';void(0);");
    }

    @Override // com.getcapacitor.Plugin
    public void handleOnPause() {
        ScannerFragment scannerFragment = this.scannerFragment;
        if (scannerFragment != null) {
            scannerFragment.pauseScan();
        }
    }

    @Override // com.getcapacitor.Plugin
    public void handleOnResume() {
        ScannerFragment scannerFragment = this.scannerFragment;
        if (scannerFragment != null) {
            scannerFragment.resumeScan();
        }
    }

    @PluginMethod
    public void hideBackground(PluginCall pluginCall) {
        hideBackground();
        pluginCall.resolve();
    }

    @PluginMethod
    public void showBackground(PluginCall pluginCall) {
        showBackground();
        pluginCall.resolve();
    }

    @PluginMethod
    public void startScan(PluginCall pluginCall) {
        saveCall(pluginCall);
        scan();
    }

    @PluginMethod
    public void stopScan(PluginCall pluginCall) {
        destroy();
        pluginCall.resolve();
    }

    @PluginMethod
    public void prepare(PluginCall pluginCall) {
        this.tipsMessage = pluginCall.getData().getString("tips", "Not able to scan the QR code? Try zooming in with two fingers.");
        this.tipsDelaySeconds = pluginCall.getData().getInteger("tips", 3).intValue();
        prepare();
        pluginCall.resolve();
    }

    @Override // com.wisdomgarden.capacitor.barcodescanner.ScannerFragment.OnScanResultListener
    public void onScanResult(String str) {
        cancelTimer();
        JSObject jSObject = new JSObject();
        if (str != null) {
            jSObject.put("hasContent", true);
            jSObject.put("content", str);
        } else {
            jSObject.put("hasContent", false);
        }
        PluginCall savedCall = getSavedCall();
        if (savedCall != null) {
            savedCall.resolve(jSObject);
        }
        destroy();
    }

    private void startTimer(int i) {
        this.handler = new Handler(Looper.getMainLooper());
        Runnable runnable = new Runnable() { // from class: com.wisdomgarden.capacitor.barcodescanner.BarcodeScanner.2
            @Override // java.lang.Runnable
            public void run() {
                if (BarcodeScanner.this.scannerFragment != null) {
                    BarcodeScanner barcodeScanner = BarcodeScanner.this;
                    barcodeScanner.toast = Toast.makeText(barcodeScanner.bridge.getActivity(), BarcodeScanner.this.tipsMessage, 1);
                    BarcodeScanner.this.toast.show();
                }
            }
        };
        this.timerRunnable = runnable;
        this.handler.postDelayed(runnable, i * 1000);
    }

    private void cancelTimer() {
        Runnable runnable;
        Toast toast = this.toast;
        if (toast != null) {
            toast.cancel();
            this.toast = null;
        }
        Handler handler = this.handler;
        if (handler == null || (runnable = this.timerRunnable) == null) {
            return;
        }
        handler.removeCallbacks(runnable);
    }
}

