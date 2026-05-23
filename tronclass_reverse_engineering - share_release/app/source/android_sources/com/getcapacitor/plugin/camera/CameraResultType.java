package com.getcapacitor.plugin.camera;
public enum CameraResultType {
    BASE64("base64"),
    URI("uri"),
    DATAURL("dataUrl");

    private String type;

    CameraResultType(String str) {
        this.type = str;
    }

    public String getType() {
        return this.type;
    }
}

