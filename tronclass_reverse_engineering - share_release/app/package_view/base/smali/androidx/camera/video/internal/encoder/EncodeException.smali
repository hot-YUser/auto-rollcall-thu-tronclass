.class public Landroidx/camera/video/internal/encoder/EncodeException;
.super Ljava/lang/Exception;
.source "EncodeException.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/internal/encoder/EncodeException$ErrorType;
    }
.end annotation


# static fields
.field public static final ERROR_CODEC:I = 0x1

.field public static final ERROR_UNKNOWN:I


# instance fields
.field private final mErrorType:I


# direct methods
.method public constructor <init>(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 0

    .line 45
    invoke-direct {p0, p2, p3}, Ljava/lang/Exception;-><init>(Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 46
    iput p1, p0, Landroidx/camera/video/internal/encoder/EncodeException;->mErrorType:I

    return-void
.end method


# virtual methods
.method public getErrorType()I
    .locals 1

    .line 55
    iget v0, p0, Landroidx/camera/video/internal/encoder/EncodeException;->mErrorType:I

    return v0
.end method
