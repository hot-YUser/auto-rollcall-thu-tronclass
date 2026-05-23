.class final Lkotlin/io/path/PathNode;
.super Ljava/lang/Object;
.source "PathTreeWalk.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0004\n\u0002\u0010(\n\u0002\u0008\u000b\u0008\u0002\u0018\u00002\u00020\u0001B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u0001\u0012\u0008\u0010\u0005\u001a\u0004\u0018\u00010\u0000\u00a2\u0006\u0002\u0010\u0006R\"\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\u0000\u0018\u00010\u0008X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\t\u0010\n\"\u0004\u0008\u000b\u0010\u000cR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0001\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\r\u0010\u000eR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0000\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\u000f\u0010\u0010R\u0011\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\u0011\u0010\u0012\u00a8\u0006\u0013"
    }
    d2 = {
        "Lkotlin/io/path/PathNode;",
        "",
        "path",
        "Ljava/nio/file/Path;",
        "key",
        "parent",
        "(Ljava/nio/file/Path;Ljava/lang/Object;Lkotlin/io/path/PathNode;)V",
        "contentIterator",
        "",
        "getContentIterator",
        "()Ljava/util/Iterator;",
        "setContentIterator",
        "(Ljava/util/Iterator;)V",
        "getKey",
        "()Ljava/lang/Object;",
        "getParent",
        "()Lkotlin/io/path/PathNode;",
        "getPath",
        "()Ljava/nio/file/Path;",
        "kotlin-stdlib-jdk7"
    }
    k = 0x1
    mv = {
        0x1,
        0x8,
        0x0
    }
    xi = 0x30
.end annotation


# instance fields
.field private contentIterator:Ljava/util/Iterator;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Iterator<",
            "Lkotlin/io/path/PathNode;",
            ">;"
        }
    .end annotation
.end field

.field private final key:Ljava/lang/Object;

.field private final parent:Lkotlin/io/path/PathNode;

.field private final path:Ljava/nio/file/Path;


# direct methods
.method public constructor <init>(Ljava/nio/file/Path;Ljava/lang/Object;Lkotlin/io/path/PathNode;)V
    .locals 1

    const-string v0, "path"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 115
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lkotlin/io/path/PathNode;->path:Ljava/nio/file/Path;

    iput-object p2, p0, Lkotlin/io/path/PathNode;->key:Ljava/lang/Object;

    iput-object p3, p0, Lkotlin/io/path/PathNode;->parent:Lkotlin/io/path/PathNode;

    return-void
.end method


# virtual methods
.method public final getContentIterator()Ljava/util/Iterator;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Iterator<",
            "Lkotlin/io/path/PathNode;",
            ">;"
        }
    .end annotation

    .line 116
    iget-object v0, p0, Lkotlin/io/path/PathNode;->contentIterator:Ljava/util/Iterator;

    return-object v0
.end method

.method public final getKey()Ljava/lang/Object;
    .locals 1

    .line 115
    iget-object v0, p0, Lkotlin/io/path/PathNode;->key:Ljava/lang/Object;

    return-object v0
.end method

.method public final getParent()Lkotlin/io/path/PathNode;
    .locals 1

    .line 115
    iget-object v0, p0, Lkotlin/io/path/PathNode;->parent:Lkotlin/io/path/PathNode;

    return-object v0
.end method

.method public final getPath()Ljava/nio/file/Path;
    .locals 1

    .line 115
    iget-object v0, p0, Lkotlin/io/path/PathNode;->path:Ljava/nio/file/Path;

    return-object v0
.end method

.method public final setContentIterator(Ljava/util/Iterator;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Iterator<",
            "Lkotlin/io/path/PathNode;",
            ">;)V"
        }
    .end annotation

    .line 116
    iput-object p1, p0, Lkotlin/io/path/PathNode;->contentIterator:Ljava/util/Iterator;

    return-void
.end method
