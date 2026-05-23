.class public Lorg/apache/cordova/camera/ExifHelper;
.super Ljava/lang/Object;
.source "ExifHelper.java"


# instance fields
.field private aperture:Ljava/lang/String;

.field private datetime:Ljava/lang/String;

.field private exposureTime:Ljava/lang/String;

.field private flash:Ljava/lang/String;

.field private focalLength:Ljava/lang/String;

.field private gpsAltitude:Ljava/lang/String;

.field private gpsAltitudeRef:Ljava/lang/String;

.field private gpsDateStamp:Ljava/lang/String;

.field private gpsLatitude:Ljava/lang/String;

.field private gpsLatitudeRef:Ljava/lang/String;

.field private gpsLongitude:Ljava/lang/String;

.field private gpsLongitudeRef:Ljava/lang/String;

.field private gpsProcessingMethod:Ljava/lang/String;

.field private gpsTimestamp:Ljava/lang/String;

.field private inFile:Landroid/media/ExifInterface;

.field private iso:Ljava/lang/String;

.field private make:Ljava/lang/String;

.field private model:Ljava/lang/String;

.field private orientation:Ljava/lang/String;

.field private outFile:Landroid/media/ExifInterface;

.field private whiteBalance:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 26
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 27
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->aperture:Ljava/lang/String;

    .line 28
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->datetime:Ljava/lang/String;

    .line 29
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->exposureTime:Ljava/lang/String;

    .line 30
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->flash:Ljava/lang/String;

    .line 31
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->focalLength:Ljava/lang/String;

    .line 32
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsAltitude:Ljava/lang/String;

    .line 33
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsAltitudeRef:Ljava/lang/String;

    .line 34
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsDateStamp:Ljava/lang/String;

    .line 35
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLatitude:Ljava/lang/String;

    .line 36
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLatitudeRef:Ljava/lang/String;

    .line 37
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLongitude:Ljava/lang/String;

    .line 38
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLongitudeRef:Ljava/lang/String;

    .line 39
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsProcessingMethod:Ljava/lang/String;

    .line 40
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsTimestamp:Ljava/lang/String;

    .line 41
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->iso:Ljava/lang/String;

    .line 42
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->make:Ljava/lang/String;

    .line 43
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->model:Ljava/lang/String;

    .line 44
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->orientation:Ljava/lang/String;

    .line 45
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->whiteBalance:Ljava/lang/String;

    .line 47
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    .line 48
    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    return-void
.end method


# virtual methods
.method public createInFile(Ljava/io/InputStream;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 67
    new-instance v0, Landroid/media/ExifInterface;

    invoke-direct {v0, p1}, Landroid/media/ExifInterface;-><init>(Ljava/io/InputStream;)V

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    return-void
.end method

.method public createInFile(Ljava/lang/String;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 57
    new-instance v0, Landroid/media/ExifInterface;

    invoke-direct {v0, p1}, Landroid/media/ExifInterface;-><init>(Ljava/lang/String;)V

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    return-void
.end method

.method public createOutFile(Ljava/lang/String;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 77
    new-instance v0, Landroid/media/ExifInterface;

    invoke-direct {v0, p1}, Landroid/media/ExifInterface;-><init>(Ljava/lang/String;)V

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    return-void
.end method

.method public getOrientation()I
    .locals 3

    .line 178
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->orientation:Ljava/lang/String;

    invoke-static {v0}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result v0

    const/4 v1, 0x1

    const/4 v2, 0x0

    if-ne v0, v1, :cond_0

    return v2

    :cond_0
    const/4 v1, 0x6

    if-ne v0, v1, :cond_1

    const/16 v0, 0x5a

    return v0

    :cond_1
    const/4 v1, 0x3

    if-ne v0, v1, :cond_2

    const/16 v0, 0xb4

    return v0

    :cond_2
    const/16 v1, 0x8

    if-ne v0, v1, :cond_3

    const/16 v0, 0x10e

    return v0

    :cond_3
    return v2
.end method

.method public readExifData()V
    .locals 2

    .line 84
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "FNumber"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->aperture:Ljava/lang/String;

    .line 85
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "DateTime"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->datetime:Ljava/lang/String;

    .line 86
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "ExposureTime"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->exposureTime:Ljava/lang/String;

    .line 87
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "Flash"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->flash:Ljava/lang/String;

    .line 88
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "FocalLength"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->focalLength:Ljava/lang/String;

    .line 89
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "GPSAltitude"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsAltitude:Ljava/lang/String;

    .line 90
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "GPSAltitudeRef"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsAltitudeRef:Ljava/lang/String;

    .line 91
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "GPSDateStamp"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsDateStamp:Ljava/lang/String;

    .line 92
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "GPSLatitude"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLatitude:Ljava/lang/String;

    .line 93
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "GPSLatitudeRef"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLatitudeRef:Ljava/lang/String;

    .line 94
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "GPSLongitude"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLongitude:Ljava/lang/String;

    .line 95
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "GPSLongitudeRef"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLongitudeRef:Ljava/lang/String;

    .line 96
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "GPSProcessingMethod"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsProcessingMethod:Ljava/lang/String;

    .line 97
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "GPSTimeStamp"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsTimestamp:Ljava/lang/String;

    .line 98
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "ISOSpeedRatings"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->iso:Ljava/lang/String;

    .line 99
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "Make"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->make:Ljava/lang/String;

    .line 100
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "Model"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->model:Ljava/lang/String;

    .line 101
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "Orientation"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->orientation:Ljava/lang/String;

    .line 102
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->inFile:Landroid/media/ExifInterface;

    const-string v1, "WhiteBalance"

    invoke-virtual {v0, v1}, Landroid/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->whiteBalance:Ljava/lang/String;

    return-void
.end method

.method public resetOrientation()V
    .locals 1

    .line 194
    const-string v0, "1"

    iput-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->orientation:Ljava/lang/String;

    return-void
.end method

.method public writeExifData()V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 112
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    if-nez v0, :cond_0

    return-void

    .line 116
    :cond_0
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->aperture:Ljava/lang/String;

    if-eqz v1, :cond_1

    .line 117
    const-string v2, "FNumber"

    invoke-virtual {v0, v2, v1}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 119
    :cond_1
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->datetime:Ljava/lang/String;

    if-eqz v0, :cond_2

    .line 120
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "DateTime"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 122
    :cond_2
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->exposureTime:Ljava/lang/String;

    if-eqz v0, :cond_3

    .line 123
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "ExposureTime"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 125
    :cond_3
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->flash:Ljava/lang/String;

    if-eqz v0, :cond_4

    .line 126
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "Flash"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 128
    :cond_4
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->focalLength:Ljava/lang/String;

    if-eqz v0, :cond_5

    .line 129
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "FocalLength"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 131
    :cond_5
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsAltitude:Ljava/lang/String;

    if-eqz v0, :cond_6

    .line 132
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "GPSAltitude"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 134
    :cond_6
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsAltitudeRef:Ljava/lang/String;

    if-eqz v0, :cond_7

    .line 135
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "GPSAltitudeRef"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 137
    :cond_7
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsDateStamp:Ljava/lang/String;

    if-eqz v0, :cond_8

    .line 138
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "GPSDateStamp"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 140
    :cond_8
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLatitude:Ljava/lang/String;

    if-eqz v0, :cond_9

    .line 141
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "GPSLatitude"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 143
    :cond_9
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLatitudeRef:Ljava/lang/String;

    if-eqz v0, :cond_a

    .line 144
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "GPSLatitudeRef"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 146
    :cond_a
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLongitude:Ljava/lang/String;

    if-eqz v0, :cond_b

    .line 147
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "GPSLongitude"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 149
    :cond_b
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsLongitudeRef:Ljava/lang/String;

    if-eqz v0, :cond_c

    .line 150
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "GPSLongitudeRef"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 152
    :cond_c
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsProcessingMethod:Ljava/lang/String;

    if-eqz v0, :cond_d

    .line 153
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "GPSProcessingMethod"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 155
    :cond_d
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->gpsTimestamp:Ljava/lang/String;

    if-eqz v0, :cond_e

    .line 156
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "GPSTimeStamp"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 158
    :cond_e
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->iso:Ljava/lang/String;

    if-eqz v0, :cond_f

    .line 159
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "ISOSpeedRatings"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 161
    :cond_f
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->make:Ljava/lang/String;

    if-eqz v0, :cond_10

    .line 162
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "Make"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 164
    :cond_10
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->model:Ljava/lang/String;

    if-eqz v0, :cond_11

    .line 165
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "Model"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 167
    :cond_11
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->orientation:Ljava/lang/String;

    if-eqz v0, :cond_12

    .line 168
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "Orientation"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 170
    :cond_12
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->whiteBalance:Ljava/lang/String;

    if-eqz v0, :cond_13

    .line 171
    iget-object v1, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    const-string v2, "WhiteBalance"

    invoke-virtual {v1, v2, v0}, Landroid/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 174
    :cond_13
    iget-object v0, p0, Lorg/apache/cordova/camera/ExifHelper;->outFile:Landroid/media/ExifInterface;

    invoke-virtual {v0}, Landroid/media/ExifInterface;->saveAttributes()V

    return-void
.end method
