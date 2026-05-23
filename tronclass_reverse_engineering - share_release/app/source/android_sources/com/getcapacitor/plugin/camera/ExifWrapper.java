package com.getcapacitor.plugin.camera;

import androidx.exifinterface.media.ExifInterface;
import com.getcapacitor.JSObject;
public class ExifWrapper {
    private final ExifInterface exif;

    public ExifWrapper(ExifInterface exifInterface) {
        this.exif = exifInterface;
    }

    public JSObject toJson() {
        JSObject jSObject = new JSObject();
        if (this.exif == null) {
            return jSObject;
        }
        p(jSObject, ExifInterface.TAG_APERTURE_VALUE);
        p(jSObject, ExifInterface.TAG_DATETIME);
        p(jSObject, ExifInterface.TAG_EXPOSURE_TIME);
        p(jSObject, ExifInterface.TAG_FLASH);
        p(jSObject, ExifInterface.TAG_FOCAL_LENGTH);
        p(jSObject, ExifInterface.TAG_FOCAL_LENGTH);
        p(jSObject, ExifInterface.TAG_GPS_LATITUDE);
        p(jSObject, ExifInterface.TAG_GPS_LATITUDE_REF);
        p(jSObject, ExifInterface.TAG_GPS_LONGITUDE);
        p(jSObject, ExifInterface.TAG_GPS_LONGITUDE_REF);
        p(jSObject, ExifInterface.TAG_GPS_ALTITUDE);
        p(jSObject, ExifInterface.TAG_GPS_ALTITUDE_REF);
        p(jSObject, ExifInterface.TAG_GPS_DATESTAMP);
        p(jSObject, ExifInterface.TAG_GPS_PROCESSING_METHOD);
        p(jSObject, ExifInterface.TAG_GPS_TIMESTAMP);
        p(jSObject, ExifInterface.TAG_IMAGE_LENGTH);
        p(jSObject, ExifInterface.TAG_IMAGE_WIDTH);
        p(jSObject, ExifInterface.TAG_ISO_SPEED);
        p(jSObject, ExifInterface.TAG_MAKE);
        p(jSObject, ExifInterface.TAG_MODEL);
        p(jSObject, ExifInterface.TAG_ORIENTATION);
        p(jSObject, ExifInterface.TAG_WHITE_BALANCE);
        return jSObject;
    }

    public void p(JSObject jSObject, String str) {
        jSObject.put(str, this.exif.getAttribute(str));
    }
}

