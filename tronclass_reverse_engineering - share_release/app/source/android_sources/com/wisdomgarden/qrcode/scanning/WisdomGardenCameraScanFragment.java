package com.wisdomgarden.qrcode.scanning;

import com.king.camera.scan.BaseCameraScanFragment;
import com.king.camera.scan.analyze.Analyzer;
import com.king.view.viewfinderview.ViewfinderView;
import com.wisdomgarden.qrcode.scanning.analyze.WisdomGardenScanningAnalyzer;
import java.util.List;
public abstract class WisdomGardenCameraScanFragment extends BaseCameraScanFragment<List<String>> {
    protected ViewfinderView viewfinderView;

    @Override // com.king.camera.scan.BaseCameraScanFragment
    public void initUI() {
        int viewfinderViewId = getViewfinderViewId();
        if (viewfinderViewId != -1 && viewfinderViewId != 0) {
            this.viewfinderView = (ViewfinderView) getRootView().findViewById(viewfinderViewId);
        }
        super.initUI();
    }

    @Override // com.king.camera.scan.BaseCameraScanFragment
    public Analyzer<List<String>> createAnalyzer() {
        return new WisdomGardenScanningAnalyzer();
    }

    @Override // com.king.camera.scan.BaseCameraScanFragment
    public int getLayoutId() {
        return R.layout.wisdomgarden_camera_scan;
    }

    public int getViewfinderViewId() {
        return R.id.viewfinderView;
    }
}

