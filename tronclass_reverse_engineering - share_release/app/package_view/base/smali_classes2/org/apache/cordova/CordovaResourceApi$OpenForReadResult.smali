.class public final Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;
.super Ljava/lang/Object;
.source "CordovaResourceApi.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/apache/cordova/CordovaResourceApi;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "OpenForReadResult"
.end annotation


# instance fields
.field public final assetFd:Landroid/content/res/AssetFileDescriptor;

.field public final inputStream:Ljava/io/InputStream;

.field public final length:J

.field public final mimeType:Ljava/lang/String;

.field public final uri:Landroid/net/Uri;


# direct methods
.method public constructor <init>(Landroid/net/Uri;Ljava/io/InputStream;Ljava/lang/String;JLandroid/content/res/AssetFileDescriptor;)V
    .locals 0

    .line 463
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 464
    iput-object p1, p0, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->uri:Landroid/net/Uri;

    .line 465
    iput-object p2, p0, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->inputStream:Ljava/io/InputStream;

    .line 466
    iput-object p3, p0, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->mimeType:Ljava/lang/String;

    .line 467
    iput-wide p4, p0, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->length:J

    .line 468
    iput-object p6, p0, Lorg/apache/cordova/CordovaResourceApi$OpenForReadResult;->assetFd:Landroid/content/res/AssetFileDescriptor;

    return-void
.end method
