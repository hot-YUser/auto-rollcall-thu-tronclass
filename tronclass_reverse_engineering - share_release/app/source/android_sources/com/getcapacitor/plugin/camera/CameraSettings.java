package com.getcapacitor.plugin.camera;
public class CameraSettings {
    public static final boolean DEFAULT_CORRECT_ORIENTATION = true;
    public static final int DEFAULT_QUALITY = 90;
    public static final boolean DEFAULT_SAVE_IMAGE_TO_GALLERY = false;
    private CameraResultType resultType = CameraResultType.BASE64;
    private int quality = 90;
    private boolean shouldResize = false;
    private boolean shouldCorrectOrientation = true;
    private boolean saveToGallery = false;
    private boolean allowEditing = false;
    private int width = 0;
    private int height = 0;
    private CameraSource source = CameraSource.PROMPT;
    private boolean preserveAspectRatio = false;

    public CameraResultType getResultType() {
        return this.resultType;
    }

    public void setResultType(CameraResultType cameraResultType) {
        this.resultType = cameraResultType;
    }

    public int getQuality() {
        return this.quality;
    }

    public void setQuality(int i) {
        this.quality = i;
    }

    public boolean isShouldResize() {
        return this.shouldResize;
    }

    public void setShouldResize(boolean z) {
        this.shouldResize = z;
    }

    public boolean isShouldCorrectOrientation() {
        return this.shouldCorrectOrientation;
    }

    public void setShouldCorrectOrientation(boolean z) {
        this.shouldCorrectOrientation = z;
    }

    public boolean isSaveToGallery() {
        return this.saveToGallery;
    }

    public void setSaveToGallery(boolean z) {
        this.saveToGallery = z;
    }

    public boolean isAllowEditing() {
        return this.allowEditing;
    }

    public void setAllowEditing(boolean z) {
        this.allowEditing = z;
    }

    public int getWidth() {
        return this.width;
    }

    public void setWidth(int i) {
        this.width = i;
    }

    public int getHeight() {
        return this.height;
    }

    public void setHeight(int i) {
        this.height = i;
    }

    public CameraSource getSource() {
        return this.source;
    }

    public void setSource(CameraSource cameraSource) {
        this.source = cameraSource;
    }

    public void setPreserveAspectRatio(boolean z) {
        this.preserveAspectRatio = z;
    }

    public boolean getPreserveAspectRatio() {
        return this.preserveAspectRatio;
    }
}

