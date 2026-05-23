package com.king.camera.scan;
public class FrameMetadata {
    private final int height;
    private final int rotation;
    private final int width;

    public int getWidth() {
        return this.width;
    }

    public int getHeight() {
        return this.height;
    }

    public int getRotation() {
        return this.rotation;
    }

    public FrameMetadata(int i, int i2, int i3) {
        this.width = i;
        this.height = i2;
        this.rotation = i3;
    }

    public String toString() {
        return "FrameMetadata{width=" + this.width + ", height=" + this.height + ", rotation=" + this.rotation + '}';
    }
}

