.class public Lorg/apache/cordova/file/LocalFilesystemURL;
.super Ljava/lang/Object;
.source "LocalFilesystemURL.java"


# static fields
.field public static final FILESYSTEM_PROTOCOL:Ljava/lang/String; = "cdvfile"


# instance fields
.field public final fsName:Ljava/lang/String;

.field public final isDirectory:Z

.field public final path:Ljava/lang/String;

.field public final uri:Landroid/net/Uri;


# direct methods
.method private constructor <init>(Landroid/net/Uri;Ljava/lang/String;Ljava/lang/String;Z)V
    .locals 0

    .line 32
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 33
    iput-object p1, p0, Lorg/apache/cordova/file/LocalFilesystemURL;->uri:Landroid/net/Uri;

    .line 34
    iput-object p2, p0, Lorg/apache/cordova/file/LocalFilesystemURL;->fsName:Ljava/lang/String;

    .line 35
    iput-object p3, p0, Lorg/apache/cordova/file/LocalFilesystemURL;->path:Ljava/lang/String;

    .line 36
    iput-boolean p4, p0, Lorg/apache/cordova/file/LocalFilesystemURL;->isDirectory:Z

    return-void
.end method

.method public static parse(Landroid/net/Uri;)Lorg/apache/cordova/file/LocalFilesystemURL;
    .locals 5

    .line 40
    const-string v0, "cdvfile"

    invoke-virtual {p0}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    const/4 v1, 0x0

    if-nez v0, :cond_0

    return-object v1

    .line 43
    :cond_0
    invoke-virtual {p0}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v0

    .line 44
    invoke-virtual {v0}, Ljava/lang/String;->length()I

    move-result v2

    const/4 v3, 0x1

    if-ge v2, v3, :cond_1

    return-object v1

    :cond_1
    const/16 v2, 0x2f

    .line 47
    invoke-virtual {v0, v2, v3}, Ljava/lang/String;->indexOf(II)I

    move-result v4

    if-gez v4, :cond_2

    return-object v1

    .line 51
    :cond_2
    invoke-virtual {v0, v3, v4}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object v1

    .line 52
    invoke-virtual {v0, v4}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object v0

    .line 53
    invoke-virtual {v0}, Ljava/lang/String;->length()I

    move-result v4

    sub-int/2addr v4, v3

    invoke-virtual {v0, v4}, Ljava/lang/String;->charAt(I)C

    move-result v4

    if-ne v4, v2, :cond_3

    goto :goto_0

    :cond_3
    const/4 v3, 0x0

    .line 54
    :goto_0
    new-instance v2, Lorg/apache/cordova/file/LocalFilesystemURL;

    invoke-direct {v2, p0, v1, v0, v3}, Lorg/apache/cordova/file/LocalFilesystemURL;-><init>(Landroid/net/Uri;Ljava/lang/String;Ljava/lang/String;Z)V

    return-object v2
.end method

.method public static parse(Ljava/lang/String;)Lorg/apache/cordova/file/LocalFilesystemURL;
    .locals 0

    .line 58
    invoke-static {p0}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p0

    invoke-static {p0}, Lorg/apache/cordova/file/LocalFilesystemURL;->parse(Landroid/net/Uri;)Lorg/apache/cordova/file/LocalFilesystemURL;

    move-result-object p0

    return-object p0
.end method


# virtual methods
.method public toString()Ljava/lang/String;
    .locals 1

    .line 62
    iget-object v0, p0, Lorg/apache/cordova/file/LocalFilesystemURL;->uri:Landroid/net/Uri;

    invoke-virtual {v0}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
