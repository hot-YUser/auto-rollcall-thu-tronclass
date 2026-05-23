package org.opencv.android;

import android.content.Context;
import android.content.res.TypedArray;
import android.opengl.GLSurfaceView;
import android.util.AttributeSet;
import android.util.Log;
import android.view.SurfaceHolder;
import org.opencv.R;
public class CameraGLSurfaceView extends GLSurfaceView {
    private static final String LOGTAG = "CameraGLSurfaceView";
    private CameraGLRendererBase mRenderer;
    private CameraTextureListener mTexListener;

    public interface CameraTextureListener {
        boolean onCameraTexture(int i, int i2, int i3, int i4);

        void onCameraViewStarted(int i, int i2);

        void onCameraViewStopped();
    }

    public CameraGLSurfaceView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        TypedArray typedArrayObtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, R.styleable.CameraBridgeViewBase);
        int i = typedArrayObtainStyledAttributes.getInt(R.styleable.CameraBridgeViewBase_camera_id, -1);
        typedArrayObtainStyledAttributes.recycle();
        this.mRenderer = new Camera2Renderer(this);
        setCameraIndex(i);
        setEGLContextClientVersion(2);
        setRenderer(this.mRenderer);
        setRenderMode(0);
    }

    public void setCameraTextureListener(CameraTextureListener cameraTextureListener) {
        this.mTexListener = cameraTextureListener;
    }

    public CameraTextureListener getCameraTextureListener() {
        return this.mTexListener;
    }

    public void setCameraIndex(int i) {
        this.mRenderer.setCameraIndex(i);
    }

    public void setMaxCameraPreviewSize(int i, int i2) {
        this.mRenderer.setMaxCameraPreviewSize(i, i2);
    }

    @Override // android.opengl.GLSurfaceView, android.view.SurfaceHolder.Callback
    public void surfaceCreated(SurfaceHolder surfaceHolder) {
        super.surfaceCreated(surfaceHolder);
    }

    @Override // android.opengl.GLSurfaceView, android.view.SurfaceHolder.Callback
    public void surfaceDestroyed(SurfaceHolder surfaceHolder) {
        this.mRenderer.mHaveSurface = false;
        super.surfaceDestroyed(surfaceHolder);
    }

    @Override // android.opengl.GLSurfaceView, android.view.SurfaceHolder.Callback
    public void surfaceChanged(SurfaceHolder surfaceHolder, int i, int i2, int i3) {
        super.surfaceChanged(surfaceHolder, i, i2, i3);
    }

    @Override // android.opengl.GLSurfaceView
    public void onResume() {
        Log.i(LOGTAG, "onResume");
        super.onResume();
        this.mRenderer.onResume();
    }

    @Override // android.opengl.GLSurfaceView
    public void onPause() {
        Log.i(LOGTAG, "onPause");
        this.mRenderer.onPause();
        super.onPause();
    }

    public void enableView() {
        this.mRenderer.enableView();
    }

    public void disableView() {
        this.mRenderer.disableView();
    }
}

