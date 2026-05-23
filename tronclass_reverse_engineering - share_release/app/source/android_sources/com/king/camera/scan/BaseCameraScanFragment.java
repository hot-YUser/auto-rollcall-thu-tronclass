package com.king.camera.scan;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.camera.view.PreviewView;
import androidx.fragment.app.Fragment;
import com.king.camera.scan.CameraScan;
import com.king.camera.scan.analyze.Analyzer;
import com.king.camera.scan.util.PermissionUtils;
import com.king.logx.LogX;
public abstract class BaseCameraScanFragment<T> extends Fragment implements CameraScan.OnScanResultCallback<T> {
    private static final int CAMERA_PERMISSION_REQUEST_CODE = 134;
    protected View ivFlashlight;
    private CameraScan<T> mCameraScan;
    private View mRootView;
    protected PreviewView previewView;

    public abstract Analyzer<T> createAnalyzer();

    public boolean isContentView() {
        return true;
    }

    @Override // androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater layoutInflater, ViewGroup viewGroup, Bundle bundle) {
        if (isContentView()) {
            this.mRootView = createRootView(layoutInflater, viewGroup);
        }
        return this.mRootView;
    }

    @Override // androidx.fragment.app.Fragment
    public void onViewCreated(View view, Bundle bundle) {
        super.onViewCreated(view, bundle);
        initUI();
    }

    public void initUI() {
        this.previewView = (PreviewView) this.mRootView.findViewById(getPreviewViewId());
        int flashlightId = getFlashlightId();
        if (flashlightId != -1 && flashlightId != 0) {
            View viewFindViewById = this.mRootView.findViewById(flashlightId);
            this.ivFlashlight = viewFindViewById;
            if (viewFindViewById != null) {
                viewFindViewById.setOnClickListener(new View.OnClickListener() { // from class: com.king.camera.scan.BaseCameraScanFragment$$ExternalSyntheticLambda0
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        this.f$0.m314lambda$initUI$0$comkingcamerascanBaseCameraScanFragment(view);
                    }
                });
            }
        }
        CameraScan<T> cameraScanCreateCameraScan = createCameraScan(this.previewView);
        this.mCameraScan = cameraScanCreateCameraScan;
        initCameraScan(cameraScanCreateCameraScan);
        startCamera();
    }
    /* synthetic */ void m314lambda$initUI$0$comkingcamerascanBaseCameraScanFragment(View view) {
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
            if (PermissionUtils.checkPermission(requireContext(), "android.permission.CAMERA")) {
                this.mCameraScan.startCamera();
            } else {
                LogX.d("checkPermissionResult != PERMISSION_GRANTED", new Object[0]);
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

    @Override // androidx.fragment.app.Fragment
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
            requireActivity().finish();
        }
    }

    @Override // androidx.fragment.app.Fragment
    public void onDestroyView() {
        releaseCamera();
        super.onDestroyView();
    }

    public View createRootView(LayoutInflater layoutInflater, ViewGroup viewGroup) {
        return layoutInflater.inflate(getLayoutId(), viewGroup, false);
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

    public View getRootView() {
        return this.mRootView;
    }

    public CameraScan<T> createCameraScan(PreviewView previewView) {
        return new BaseCameraScan(this, previewView);
    }
}

