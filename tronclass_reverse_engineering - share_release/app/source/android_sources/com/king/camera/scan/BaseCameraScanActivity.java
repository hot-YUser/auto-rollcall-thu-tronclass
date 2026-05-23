package com.king.camera.scan;

import android.os.Bundle;
import android.view.View;
import androidx.appcompat.app.AppCompatActivity;
import androidx.camera.view.PreviewView;
import com.king.camera.scan.CameraScan;
import com.king.camera.scan.analyze.Analyzer;
import com.king.camera.scan.util.PermissionUtils;
public abstract class BaseCameraScanActivity<T> extends AppCompatActivity implements CameraScan.OnScanResultCallback<T> {
    private static final int CAMERA_PERMISSION_REQUEST_CODE = 134;
    protected View ivFlashlight;
    private CameraScan<T> mCameraScan;
    protected PreviewView previewView;

    public abstract Analyzer<T> createAnalyzer();

    public boolean isContentView() {
        return true;
    }

    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    protected void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        if (isContentView()) {
            setContentView(getLayoutId());
        }
        initUI();
    }

    public void initUI() {
        this.previewView = (PreviewView) findViewById(getPreviewViewId());
        int flashlightId = getFlashlightId();
        if (flashlightId != -1 && flashlightId != 0) {
            View viewFindViewById = findViewById(flashlightId);
            this.ivFlashlight = viewFindViewById;
            if (viewFindViewById != null) {
                viewFindViewById.setOnClickListener(new View.OnClickListener() { // from class: com.king.camera.scan.BaseCameraScanActivity$$ExternalSyntheticLambda0
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        this.f$0.m313lambda$initUI$0$comkingcamerascanBaseCameraScanActivity(view);
                    }
                });
            }
        }
        CameraScan<T> cameraScanCreateCameraScan = createCameraScan(this.previewView);
        this.mCameraScan = cameraScanCreateCameraScan;
        initCameraScan(cameraScanCreateCameraScan);
        startCamera();
    }
    /* synthetic */ void m313lambda$initUI$0$comkingcamerascanBaseCameraScanActivity(View view) {
        onClickFlashlight();
    }

    public void initCameraScan(CameraScan<T> cameraScan) {
        cameraScan.setAnalyzer(createAnalyzer()).bindFlashlightView(this.ivFlashlight).setOnScanResultCallback(this);
    }

    protected void onClickFlashlight() {
        toggleTorchState();
    }

    protected void toggleTorchState() {
        if (getCameraScan() != null) {
            boolean zIsTorchEnabled = getCameraScan().isTorchEnabled();
            getCameraScan().enableTorch(!zIsTorchEnabled);
            View view = this.ivFlashlight;
            if (view != null) {
                view.setSelected(!zIsTorchEnabled);
            }
        }
    }

    public void startCamera() {
        if (this.mCameraScan != null) {
            if (PermissionUtils.checkPermission(this, "android.permission.CAMERA")) {
                this.mCameraScan.startCamera();
            } else {
                PermissionUtils.requestPermission(this, "android.permission.CAMERA", 134);
            }
        }
    }

    private void releaseCamera() {
        CameraScan<T> cameraScan = this.mCameraScan;
        if (cameraScan != null) {
            cameraScan.release();
        }
    }

    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, android.app.Activity
    public void onRequestPermissionsResult(int i, String[] strArr, int[] iArr) {
        super.onRequestPermissionsResult(i, strArr, iArr);
        if (i == 134) {
            requestCameraPermissionResult(strArr, iArr);
        }
    }

    public void requestCameraPermissionResult(String[] strArr, int[] iArr) {
        if (PermissionUtils.requestPermissionsResult("android.permission.CAMERA", strArr, iArr)) {
            startCamera();
        } else {
            finish();
        }
    }

    @Override // androidx.appcompat.app.AppCompatActivity, androidx.fragment.app.FragmentActivity, android.app.Activity
    protected void onDestroy() {
        releaseCamera();
        super.onDestroy();
    }

    public int getLayoutId() {
        return R.layout.camera_scan;
    }

    public int getPreviewViewId() {
        return R.id.previewView;
    }

    public int getFlashlightId() {
        return R.id.ivFlashlight;
    }

    public CameraScan<T> getCameraScan() {
        return this.mCameraScan;
    }

    public CameraScan<T> createCameraScan(PreviewView previewView) {
        return new BaseCameraScan(this, previewView);
    }
}

