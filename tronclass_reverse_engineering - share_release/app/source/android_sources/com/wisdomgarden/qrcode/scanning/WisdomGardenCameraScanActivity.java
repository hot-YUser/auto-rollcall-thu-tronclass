package com.wisdomgarden.qrcode.scanning;

import com.king.camera.scan.BaseCameraScanActivity;
import com.king.camera.scan.analyze.Analyzer;
import com.king.view.viewfinderview.ViewfinderView;
import com.wisdomgarden.qrcode.scanning.analyze.WisdomGardenScanningAnalyzer;
import java.util.List;
public abstract class WisdomGardenCameraScanActivity extends BaseCameraScanActivity<List<String>> {
    protected ViewfinderView viewfinderView;

    @Override // com.king.camera.scan.BaseCameraScanActivity
    public void initUI() {
        int viewfinderViewId = getViewfinderViewId();
        if (viewfinderViewId != -1 && viewfinderViewId != 0) {
            this.viewfinderView = (ViewfinderView) findViewById(viewfinderViewId);
        }
        super.initUI();
    }

    @Override // com.king.camera.scan.BaseCameraScanActivity
    public Analyzer<List<String>> createAnalyzer() {
        return new WisdomGardenScanningAnalyzer();
    }

    @Override // com.king.camera.scan.BaseCameraScanActivity
    public int getLayoutId() {
        return R.layout.wisdomgarden_camera_scan;
    }

    public int getViewfinderViewId() {
        return R.id.viewfinderView;
    }
}

