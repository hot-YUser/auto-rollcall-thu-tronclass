.class Lorg/apache/cordova/filetransfer/FileTransfer$TrackingGZIPInputStream;
.super Lorg/apache/cordova/filetransfer/FileTransfer$TrackingInputStream;
.source "FileTransfer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/apache/cordova/filetransfer/FileTransfer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "TrackingGZIPInputStream"
.end annotation


# instance fields
.field private gzin:Lorg/apache/cordova/filetransfer/FileTransfer$ExposedGZIPInputStream;


# direct methods
.method public constructor <init>(Lorg/apache/cordova/filetransfer/FileTransfer$ExposedGZIPInputStream;)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 124
    invoke-direct {p0, p1}, Lorg/apache/cordova/filetransfer/FileTransfer$TrackingInputStream;-><init>(Ljava/io/InputStream;)V

    .line 125
    iput-object p1, p0, Lorg/apache/cordova/filetransfer/FileTransfer$TrackingGZIPInputStream;->gzin:Lorg/apache/cordova/filetransfer/FileTransfer$ExposedGZIPInputStream;

    return-void
.end method


# virtual methods
.method public getTotalRawBytesRead()J
    .locals 2

    .line 128
    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileTransfer$TrackingGZIPInputStream;->gzin:Lorg/apache/cordova/filetransfer/FileTransfer$ExposedGZIPInputStream;

    invoke-virtual {v0}, Lorg/apache/cordova/filetransfer/FileTransfer$ExposedGZIPInputStream;->getInflater()Ljava/util/zip/Inflater;

    move-result-object v0

    invoke-virtual {v0}, Ljava/util/zip/Inflater;->getBytesRead()J

    move-result-wide v0

    return-wide v0
.end method
