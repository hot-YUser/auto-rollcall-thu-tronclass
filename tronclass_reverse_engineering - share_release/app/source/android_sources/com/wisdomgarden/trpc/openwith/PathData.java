package com.wisdomgarden.trpc.openwith;
class PathData {
    public String fileName;
    public String filePath;
    public Boolean isTemp;

    public PathData(String str, String str2, Boolean bool) {
        this.filePath = str;
        this.isTemp = bool;
        this.fileName = str2;
    }

    public PathData(String str) {
        this.filePath = str;
        this.isTemp = false;
        this.fileName = str.substring(str.lastIndexOf("/") + 1);
    }
}

