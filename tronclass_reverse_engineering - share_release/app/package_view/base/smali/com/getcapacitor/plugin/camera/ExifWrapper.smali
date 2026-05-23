.class public Lcom/getcapacitor/plugin/camera/ExifWrapper;
.super Ljava/lang/Object;
.source "ExifWrapper.java"


# instance fields
.field private final exif:Landroidx/exifinterface/media/ExifInterface;


# direct methods
.method public constructor <init>(Landroidx/exifinterface/media/ExifInterface;)V
    .locals 0

    .line 12
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 13
    iput-object p1, p0, Lcom/getcapacitor/plugin/camera/ExifWrapper;->exif:Landroidx/exifinterface/media/ExifInterface;

    return-void
.end method


# virtual methods
.method public p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V
    .locals 1

    .line 151
    iget-object v0, p0, Lcom/getcapacitor/plugin/camera/ExifWrapper;->exif:Landroidx/exifinterface/media/ExifInterface;

    invoke-virtual {v0, p2}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 152
    invoke-virtual {p1, p2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    return-void
.end method

.method public toJson()Lcom/getcapacitor/JSObject;
    .locals 2

    .line 17
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 19
    iget-object v1, p0, Lcom/getcapacitor/plugin/camera/ExifWrapper;->exif:Landroidx/exifinterface/media/ExifInterface;

    if-nez v1, :cond_0

    return-object v0

    .line 25
    :cond_0
    const-string v1, "ApertureValue"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 38
    const-string v1, "DateTime"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 53
    const-string v1, "ExposureTime"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 56
    const-string v1, "Flash"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 59
    const-string v1, "FocalLength"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 62
    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 64
    const-string v1, "GPSLatitude"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 65
    const-string v1, "GPSLatitudeRef"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 66
    const-string v1, "GPSLongitude"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 67
    const-string v1, "GPSLongitudeRef"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 68
    const-string v1, "GPSAltitude"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 69
    const-string v1, "GPSAltitudeRef"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 71
    const-string v1, "GPSDateStamp"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 89
    const-string v1, "GPSProcessingMethod"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 97
    const-string v1, "GPSTimeStamp"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 105
    const-string v1, "ImageLength"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 107
    const-string v1, "ImageWidth"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 108
    const-string v1, "ISOSpeed"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 116
    const-string v1, "Make"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 122
    const-string v1, "Model"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 130
    const-string v1, "Orientation"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    .line 145
    const-string v1, "WhiteBalance"

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/plugin/camera/ExifWrapper;->p(Lcom/getcapacitor/JSObject;Ljava/lang/String;)V

    return-object v0
.end method
