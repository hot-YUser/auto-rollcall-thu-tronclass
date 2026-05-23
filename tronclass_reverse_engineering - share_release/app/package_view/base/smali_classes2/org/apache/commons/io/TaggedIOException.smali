.class public Lorg/apache/commons/io/TaggedIOException;
.super Lorg/apache/commons/io/IOExceptionWithCause;
.source "TaggedIOException.java"


# static fields
.field private static final serialVersionUID:J = -0x61101e3fe8bcf273L


# instance fields
.field private final tag:Ljava/io/Serializable;


# direct methods
.method public constructor <init>(Ljava/io/IOException;Ljava/io/Serializable;)V
    .locals 1

    .line 111
    invoke-virtual {p1}, Ljava/io/IOException;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-direct {p0, v0, p1}, Lorg/apache/commons/io/IOExceptionWithCause;-><init>(Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 112
    iput-object p2, p0, Lorg/apache/commons/io/TaggedIOException;->tag:Ljava/io/Serializable;

    return-void
.end method

.method public static isTaggedWith(Ljava/lang/Throwable;Ljava/lang/Object;)Z
    .locals 1

    if-eqz p1, :cond_0

    .line 65
    instance-of v0, p0, Lorg/apache/commons/io/TaggedIOException;

    if-eqz v0, :cond_0

    check-cast p0, Lorg/apache/commons/io/TaggedIOException;

    iget-object p0, p0, Lorg/apache/commons/io/TaggedIOException;->tag:Ljava/io/Serializable;

    invoke-virtual {p1, p0}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result p0

    if-eqz p0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method

.method public static throwCauseIfTaggedWith(Ljava/lang/Throwable;Ljava/lang/Object;)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 94
    invoke-static {p0, p1}, Lorg/apache/commons/io/TaggedIOException;->isTaggedWith(Ljava/lang/Throwable;Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_0

    return-void

    .line 95
    :cond_0
    check-cast p0, Lorg/apache/commons/io/TaggedIOException;

    invoke-virtual {p0}, Lorg/apache/commons/io/TaggedIOException;->getCause()Ljava/io/IOException;

    move-result-object p0

    throw p0
.end method


# virtual methods
.method public getCause()Ljava/io/IOException;
    .locals 1

    .line 132
    invoke-super {p0}, Lorg/apache/commons/io/IOExceptionWithCause;->getCause()Ljava/lang/Throwable;

    move-result-object v0

    check-cast v0, Ljava/io/IOException;

    return-object v0
.end method

.method public bridge synthetic getCause()Ljava/lang/Throwable;
    .locals 1

    .line 29
    invoke-virtual {p0}, Lorg/apache/commons/io/TaggedIOException;->getCause()Ljava/io/IOException;

    move-result-object v0

    return-object v0
.end method

.method public getTag()Ljava/io/Serializable;
    .locals 1

    .line 121
    iget-object v0, p0, Lorg/apache/commons/io/TaggedIOException;->tag:Ljava/io/Serializable;

    return-object v0
.end method
