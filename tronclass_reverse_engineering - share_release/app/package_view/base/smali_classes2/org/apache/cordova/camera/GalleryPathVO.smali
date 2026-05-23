.class public Lorg/apache/cordova/camera/GalleryPathVO;
.super Ljava/lang/Object;
.source "GalleryPathVO.java"


# instance fields
.field private galleryFileName:Ljava/lang/String;

.field private final galleryPath:Ljava/lang/String;

.field private picturesDirectory:Ljava/lang/String;


# direct methods
.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 26
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 27
    iput-object p1, p0, Lorg/apache/cordova/camera/GalleryPathVO;->picturesDirectory:Ljava/lang/String;

    .line 28
    iput-object p2, p0, Lorg/apache/cordova/camera/GalleryPathVO;->galleryFileName:Ljava/lang/String;

    .line 29
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1}, Ljava/lang/StringBuilder;-><init>()V

    iget-object p2, p0, Lorg/apache/cordova/camera/GalleryPathVO;->picturesDirectory:Ljava/lang/String;

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, "/"

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    iget-object p2, p0, Lorg/apache/cordova/camera/GalleryPathVO;->galleryFileName:Ljava/lang/String;

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lorg/apache/cordova/camera/GalleryPathVO;->galleryPath:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public getGalleryFileName()Ljava/lang/String;
    .locals 1

    .line 41
    iget-object v0, p0, Lorg/apache/cordova/camera/GalleryPathVO;->galleryFileName:Ljava/lang/String;

    return-object v0
.end method

.method public getGalleryPath()Ljava/lang/String;
    .locals 1

    .line 33
    iget-object v0, p0, Lorg/apache/cordova/camera/GalleryPathVO;->galleryPath:Ljava/lang/String;

    return-object v0
.end method

.method public getPicturesDirectory()Ljava/lang/String;
    .locals 1

    .line 37
    iget-object v0, p0, Lorg/apache/cordova/camera/GalleryPathVO;->picturesDirectory:Ljava/lang/String;

    return-object v0
.end method
