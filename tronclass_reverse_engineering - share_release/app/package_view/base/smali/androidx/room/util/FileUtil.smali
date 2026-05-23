.class public Landroidx/room/util/FileUtil;
.super Ljava/lang/Object;
.source "FileUtil.java"


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 69
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static copy(Ljava/nio/channels/ReadableByteChannel;Ljava/nio/channels/FileChannel;)V
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    const-wide/16 v2, 0x0

    const-wide v4, 0x7fffffffffffffffL

    move-object v0, p1

    move-object v1, p0

    .line 52
    :try_start_0
    invoke-virtual/range {v0 .. v5}, Ljava/nio/channels/FileChannel;->transferFrom(Ljava/nio/channels/ReadableByteChannel;JJ)J

    const/4 v0, 0x0

    .line 62
    invoke-virtual {p1, v0}, Ljava/nio/channels/FileChannel;->force(Z)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 64
    invoke-interface {p0}, Ljava/nio/channels/ReadableByteChannel;->close()V

    .line 65
    invoke-virtual {p1}, Ljava/nio/channels/FileChannel;->close()V

    return-void

    :catchall_0
    move-exception v0

    .line 64
    invoke-interface {p0}, Ljava/nio/channels/ReadableByteChannel;->close()V

    .line 65
    invoke-virtual {p1}, Ljava/nio/channels/FileChannel;->close()V

    .line 66
    throw v0
.end method
