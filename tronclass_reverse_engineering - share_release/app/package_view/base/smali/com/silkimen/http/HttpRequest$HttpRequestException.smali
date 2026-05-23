.class public Lcom/silkimen/http/HttpRequest$HttpRequestException;
.super Ljava/lang/RuntimeException;
.source "HttpRequest.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/silkimen/http/HttpRequest;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "HttpRequestException"
.end annotation


# static fields
.field private static final serialVersionUID:J = -0x103e55869b430237L


# direct methods
.method public constructor <init>(Ljava/io/IOException;)V
    .locals 0

    .line 594
    invoke-direct {p0, p1}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/Throwable;)V

    return-void
.end method


# virtual methods
.method public getCause()Ljava/io/IOException;
    .locals 1

    .line 604
    invoke-super {p0}, Ljava/lang/RuntimeException;->getCause()Ljava/lang/Throwable;

    move-result-object v0

    check-cast v0, Ljava/io/IOException;

    return-object v0
.end method

.method public bridge synthetic getCause()Ljava/lang/Throwable;
    .locals 1

    .line 584
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getCause()Ljava/io/IOException;

    move-result-object v0

    return-object v0
.end method
