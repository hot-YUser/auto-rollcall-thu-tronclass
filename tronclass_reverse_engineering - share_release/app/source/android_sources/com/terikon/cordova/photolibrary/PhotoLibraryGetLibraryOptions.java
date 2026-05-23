package com.terikon.cordova.photolibrary;
public class PhotoLibraryGetLibraryOptions {
    public final double chunkTimeSec;
    public final boolean includeAlbumData;
    public final int itemsInChunk;

    public PhotoLibraryGetLibraryOptions(int i, double d, boolean z) {
        this.itemsInChunk = i;
        this.chunkTimeSec = d;
        this.includeAlbumData = z;
    }
}

