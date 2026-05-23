.class public interface abstract Lcom/silkimen/http/HttpRequest$UploadProgress;
.super Ljava/lang/Object;
.source "HttpRequest.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/silkimen/http/HttpRequest;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x609
    name = "UploadProgress"
.end annotation


# static fields
.field public static final DEFAULT:Lcom/silkimen/http/HttpRequest$UploadProgress;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 371
    new-instance v0, Lcom/silkimen/http/HttpRequest$UploadProgress$1;

    invoke-direct {v0}, Lcom/silkimen/http/HttpRequest$UploadProgress$1;-><init>()V

    sput-object v0, Lcom/silkimen/http/HttpRequest$UploadProgress;->DEFAULT:Lcom/silkimen/http/HttpRequest$UploadProgress;

    return-void
.end method


# virtual methods
.method public abstract onUpload(JJ)V
.end method
