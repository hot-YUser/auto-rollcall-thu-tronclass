package com.getcapacitor.plugin.camera;
public enum CameraSource {
    PROMPT("PROMPT"),
    CAMERA("CAMERA"),
    PHOTOS("PHOTOS");

    private String source;

    CameraSource(String str) {
        this.source = str;
    }

    public String getSource() {
        return this.source;
    }
}

