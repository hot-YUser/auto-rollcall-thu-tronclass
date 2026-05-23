.class public Lorg/apache/cordova/file/Filesystem$LimitedInputStream;
.super Ljava/io/FilterInputStream;
.source "Filesystem.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/apache/cordova/file/Filesystem;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4
    name = "LimitedInputStream"
.end annotation


# instance fields
.field numBytesToRead:J

.field final synthetic this$0:Lorg/apache/cordova/file/Filesystem;


# direct methods
.method public constructor <init>(Lorg/apache/cordova/file/Filesystem;Ljava/io/InputStream;J)V
    .locals 0

    .line 305
    iput-object p1, p0, Lorg/apache/cordova/file/Filesystem$LimitedInputStream;->this$0:Lorg/apache/cordova/file/Filesystem;

    .line 306
    invoke-direct {p0, p2}, Ljava/io/FilterInputStream;-><init>(Ljava/io/InputStream;)V

    .line 307
    iput-wide p3, p0, Lorg/apache/cordova/file/Filesystem$LimitedInputStream;->numBytesToRead:J

    return-void
.end method


# virtual methods
.method public read()I
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 311
    iget-wide v0, p0, Lorg/apache/cordova/file/Filesystem$LimitedInputStream;->numBytesToRead:J

    const-wide/16 v2, 0x0

    cmp-long v2, v0, v2

    if-gtz v2, :cond_0

    const/4 v0, -0x1

    return v0

    :cond_0
    const-wide/16 v2, 0x1

    sub-long/2addr v0, v2

    .line 314
    iput-wide v0, p0, Lorg/apache/cordova/file/Filesystem$LimitedInputStream;->numBytesToRead:J

    .line 315
    iget-object v0, p0, Lorg/apache/cordova/file/Filesystem$LimitedInputStream;->in:Ljava/io/InputStream;

    invoke-virtual {v0}, Ljava/io/InputStream;->read()I

    move-result v0

    return v0
.end method

.method public read([BII)I
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 319
    iget-wide v0, p0, Lorg/apache/cordova/file/Filesystem$LimitedInputStream;->numBytesToRead:J

    const-wide/16 v2, 0x0

    cmp-long v2, v0, v2

    if-gtz v2, :cond_0

    const/4 p1, -0x1

    return p1

    :cond_0
    int-to-long v2, p3

    cmp-long v2, v2, v0

    if-lez v2, :cond_1

    long-to-int p3, v0

    .line 326
    :cond_1
    iget-object v0, p0, Lorg/apache/cordova/file/Filesystem$LimitedInputStream;->in:Ljava/io/InputStream;

    invoke-virtual {v0, p1, p2, p3}, Ljava/io/InputStream;->read([BII)I

    move-result p1

    .line 327
    iget-wide p2, p0, Lorg/apache/cordova/file/Filesystem$LimitedInputStream;->numBytesToRead:J

    int-to-long v0, p1

    sub-long/2addr p2, v0

    iput-wide p2, p0, Lorg/apache/cordova/file/Filesystem$LimitedInputStream;->numBytesToRead:J

    return p1
.end method
