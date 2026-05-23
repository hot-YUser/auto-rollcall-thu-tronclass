.class public Lorg/apache/commons/io/comparator/DirectoryFileComparator;
.super Lorg/apache/commons/io/comparator/AbstractFileComparator;
.source "DirectoryFileComparator.java"

# interfaces
.implements Ljava/io/Serializable;


# static fields
.field public static final DIRECTORY_COMPARATOR:Ljava/util/Comparator;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Comparator<",
            "Ljava/io/File;",
            ">;"
        }
    .end annotation
.end field

.field public static final DIRECTORY_REVERSE:Ljava/util/Comparator;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Comparator<",
            "Ljava/io/File;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 2

    .line 49
    new-instance v0, Lorg/apache/commons/io/comparator/DirectoryFileComparator;

    invoke-direct {v0}, Lorg/apache/commons/io/comparator/DirectoryFileComparator;-><init>()V

    sput-object v0, Lorg/apache/commons/io/comparator/DirectoryFileComparator;->DIRECTORY_COMPARATOR:Ljava/util/Comparator;

    .line 52
    new-instance v1, Lorg/apache/commons/io/comparator/ReverseComparator;

    invoke-direct {v1, v0}, Lorg/apache/commons/io/comparator/ReverseComparator;-><init>(Ljava/util/Comparator;)V

    sput-object v1, Lorg/apache/commons/io/comparator/DirectoryFileComparator;->DIRECTORY_REVERSE:Ljava/util/Comparator;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 46
    invoke-direct {p0}, Lorg/apache/commons/io/comparator/AbstractFileComparator;-><init>()V

    return-void
.end method

.method private getType(Ljava/io/File;)I
    .locals 0

    .line 73
    invoke-virtual {p1}, Ljava/io/File;->isDirectory()Z

    move-result p1

    if-eqz p1, :cond_0

    const/4 p1, 0x1

    return p1

    :cond_0
    const/4 p1, 0x2

    return p1
.end method


# virtual methods
.method public compare(Ljava/io/File;Ljava/io/File;)I
    .locals 0

    .line 63
    invoke-direct {p0, p1}, Lorg/apache/commons/io/comparator/DirectoryFileComparator;->getType(Ljava/io/File;)I

    move-result p1

    invoke-direct {p0, p2}, Lorg/apache/commons/io/comparator/DirectoryFileComparator;->getType(Ljava/io/File;)I

    move-result p2

    sub-int/2addr p1, p2

    return p1
.end method

.method public bridge synthetic compare(Ljava/lang/Object;Ljava/lang/Object;)I
    .locals 0

    .line 46
    check-cast p1, Ljava/io/File;

    check-cast p2, Ljava/io/File;

    invoke-virtual {p0, p1, p2}, Lorg/apache/commons/io/comparator/DirectoryFileComparator;->compare(Ljava/io/File;Ljava/io/File;)I

    move-result p1

    return p1
.end method

.method public bridge synthetic sort(Ljava/util/List;)Ljava/util/List;
    .locals 0

    .line 46
    invoke-super {p0, p1}, Lorg/apache/commons/io/comparator/AbstractFileComparator;->sort(Ljava/util/List;)Ljava/util/List;

    move-result-object p1

    return-object p1
.end method

.method public bridge synthetic sort([Ljava/io/File;)[Ljava/io/File;
    .locals 0

    .line 46
    invoke-super {p0, p1}, Lorg/apache/commons/io/comparator/AbstractFileComparator;->sort([Ljava/io/File;)[Ljava/io/File;

    move-result-object p1

    return-object p1
.end method

.method public bridge synthetic toString()Ljava/lang/String;
    .locals 1

    .line 46
    invoke-super {p0}, Lorg/apache/commons/io/comparator/AbstractFileComparator;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
