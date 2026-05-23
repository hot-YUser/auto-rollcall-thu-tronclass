package com.wisdomgarden.capacitor.barcodescanner;

import com.king.camera.scan.AnalyzeResult;
import com.king.camera.scan.CameraScan;
import com.wisdomgarden.qrcode.scanning.WisdomGardenCameraScanFragment;
import java.util.List;
public class ScannerFragment extends WisdomGardenCameraScanFragment {
    private CameraScan cameraScan;
    private OnScanResultListener scanResultListener;

    public interface OnScanResultListener {
        void onScanResult(String str);
    }

    public void setOnScanResultListener(OnScanResultListener onScanResultListener) {
        this.scanResultListener = onScanResultListener;
    }

    @Override // com.wisdomgarden.qrcode.scanning.WisdomGardenCameraScanFragment, com.king.camera.scan.BaseCameraScanFragment
    public void initUI() {
        super.initUI();
        this.cameraScan = getCameraScan();
    }

    @Override // com.king.camera.scan.CameraScan.OnScanResultCallback
    public void onScanResultCallback(AnalyzeResult<List<String>> analyzeResult) {
        CameraScan cameraScan = this.cameraScan;
        if (cameraScan != null) {
            cameraScan.setAnalyzeImage(false);
        }
        if (this.scanResultListener != null) {
            if (!analyzeResult.getResult().isEmpty()) {
                this.scanResultListener.onScanResult(analyzeResult.getResult().get(0));
            } else {
                this.scanResultListener.onScanResult(null);
            }
        }
    }

    public void pauseScan() {
        CameraScan cameraScan = this.cameraScan;
        if (cameraScan != null) {
            cameraScan.setAnalyzeImage(false);
        }
    }

    public void resumeScan() {
        CameraScan cameraScan = this.cameraScan;
        if (cameraScan != null) {
            cameraScan.setAnalyzeImage(true);
        }
    }
}

