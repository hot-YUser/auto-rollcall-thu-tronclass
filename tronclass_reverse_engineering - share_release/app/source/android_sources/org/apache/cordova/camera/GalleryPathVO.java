package org.apache.cordova.camera;
public class GalleryPathVO {
    private String galleryFileName;
    private final String galleryPath;
    private String picturesDirectory;

    public GalleryPathVO(String str, String str2) {
        this.picturesDirectory = str;
        this.galleryFileName = str2;
        this.galleryPath = this.picturesDirectory + "/" + this.galleryFileName;
    }

    public String getGalleryPath() {
        return this.galleryPath;
    }

    public String getPicturesDirectory() {
        return this.picturesDirectory;
    }

    public String getGalleryFileName() {
        return this.galleryFileName;
    }
}

