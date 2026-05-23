package org.apache.cordova.camera;

import android.media.ExifInterface;
import java.io.IOException;
import java.io.InputStream;
public class ExifHelper {
    private String aperture = null;
    private String datetime = null;
    private String exposureTime = null;
    private String flash = null;
    private String focalLength = null;
    private String gpsAltitude = null;
    private String gpsAltitudeRef = null;
    private String gpsDateStamp = null;
    private String gpsLatitude = null;
    private String gpsLatitudeRef = null;
    private String gpsLongitude = null;
    private String gpsLongitudeRef = null;
    private String gpsProcessingMethod = null;
    private String gpsTimestamp = null;
    private String iso = null;
    private String make = null;
    private String model = null;
    private String orientation = null;
    private String whiteBalance = null;
    private ExifInterface inFile = null;
    private ExifInterface outFile = null;

    public void createInFile(String str) throws IOException {
        this.inFile = new ExifInterface(str);
    }

    public void createInFile(InputStream inputStream) throws IOException {
        this.inFile = new ExifInterface(inputStream);
    }

    public void createOutFile(String str) throws IOException {
        this.outFile = new ExifInterface(str);
    }

    public void readExifData() {
        this.aperture = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_F_NUMBER);
        this.datetime = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_DATETIME);
        this.exposureTime = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_EXPOSURE_TIME);
        this.flash = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_FLASH);
        this.focalLength = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_FOCAL_LENGTH);
        this.gpsAltitude = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_ALTITUDE);
        this.gpsAltitudeRef = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_ALTITUDE_REF);
        this.gpsDateStamp = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_DATESTAMP);
        this.gpsLatitude = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_LATITUDE);
        this.gpsLatitudeRef = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_LATITUDE_REF);
        this.gpsLongitude = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_LONGITUDE);
        this.gpsLongitudeRef = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_LONGITUDE_REF);
        this.gpsProcessingMethod = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_PROCESSING_METHOD);
        this.gpsTimestamp = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_TIMESTAMP);
        this.iso = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_ISO_SPEED_RATINGS);
        this.make = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_MAKE);
        this.model = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_MODEL);
        this.orientation = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_ORIENTATION);
        this.whiteBalance = this.inFile.getAttribute(androidx.exifinterface.media.ExifInterface.TAG_WHITE_BALANCE);
    }

    public void writeExifData() throws IOException {
        ExifInterface exifInterface = this.outFile;
        if (exifInterface == null) {
            return;
        }
        String str = this.aperture;
        if (str != null) {
            exifInterface.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_F_NUMBER, str);
        }
        String str2 = this.datetime;
        if (str2 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_DATETIME, str2);
        }
        String str3 = this.exposureTime;
        if (str3 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_EXPOSURE_TIME, str3);
        }
        String str4 = this.flash;
        if (str4 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_FLASH, str4);
        }
        String str5 = this.focalLength;
        if (str5 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_FOCAL_LENGTH, str5);
        }
        String str6 = this.gpsAltitude;
        if (str6 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_ALTITUDE, str6);
        }
        String str7 = this.gpsAltitudeRef;
        if (str7 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_ALTITUDE_REF, str7);
        }
        String str8 = this.gpsDateStamp;
        if (str8 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_DATESTAMP, str8);
        }
        String str9 = this.gpsLatitude;
        if (str9 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_LATITUDE, str9);
        }
        String str10 = this.gpsLatitudeRef;
        if (str10 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_LATITUDE_REF, str10);
        }
        String str11 = this.gpsLongitude;
        if (str11 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_LONGITUDE, str11);
        }
        String str12 = this.gpsLongitudeRef;
        if (str12 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_LONGITUDE_REF, str12);
        }
        String str13 = this.gpsProcessingMethod;
        if (str13 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_PROCESSING_METHOD, str13);
        }
        String str14 = this.gpsTimestamp;
        if (str14 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_GPS_TIMESTAMP, str14);
        }
        String str15 = this.iso;
        if (str15 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_ISO_SPEED_RATINGS, str15);
        }
        String str16 = this.make;
        if (str16 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_MAKE, str16);
        }
        String str17 = this.model;
        if (str17 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_MODEL, str17);
        }
        String str18 = this.orientation;
        if (str18 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_ORIENTATION, str18);
        }
        String str19 = this.whiteBalance;
        if (str19 != null) {
            this.outFile.setAttribute(androidx.exifinterface.media.ExifInterface.TAG_WHITE_BALANCE, str19);
        }
        this.outFile.saveAttributes();
    }

    public int getOrientation() {
        int i = Integer.parseInt(this.orientation);
        if (i == 1) {
            return 0;
        }
        if (i == 6) {
            return 90;
        }
        if (i == 3) {
            return 180;
        }
        return i == 8 ? 270 : 0;
    }

    public void resetOrientation() {
        this.orientation = "1";
    }
}

