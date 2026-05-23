.class public final Lorg/opencv/core/AtableUByte;
.super Ljava/lang/Object;
.source "MatAt.kt"

# interfaces
.implements Lorg/opencv/core/Mat$Atable;


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lorg/opencv/core/Mat$Atable<",
        "Lkotlin/UByte;",
        ">;"
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0008\n\u0002\u0008\u0003\n\u0002\u0010\u0015\n\u0002\u0008\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\u0008\u0007\u0018\u00002\u0008\u0012\u0004\u0012\u00020\u00020\u0001B\u001f\u0008\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u00a2\u0006\u0002\u0010\u0008B\u0015\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\t\u001a\u00020\n\u00a2\u0006\u0002\u0010\u000bJ\u0018\u0010\u0010\u001a\u00020\u0002H\u0016\u00f8\u0001\u0000\u00f8\u0001\u0001\u00f8\u0001\u0002\u00a2\u0006\u0004\u0008\u0011\u0010\u0012J\u0011\u0010\u0013\u001a\u0008\u0012\u0004\u0012\u00020\u00020\u0014H\u0016\u00f8\u0001\u0002J\u0011\u0010\u0015\u001a\u0008\u0012\u0004\u0012\u00020\u00020\u0016H\u0016\u00f8\u0001\u0002J\u0011\u0010\u0017\u001a\u0008\u0012\u0004\u0012\u00020\u00020\u0018H\u0016\u00f8\u0001\u0002J\u001d\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u0002H\u0016\u00f8\u0001\u0001\u00f8\u0001\u0002\u00a2\u0006\u0004\u0008\u001c\u0010\u001dJ\u0019\u0010\u001e\u001a\u00020\u001a2\u000c\u0010\u001b\u001a\u0008\u0012\u0004\u0012\u00020\u00020\u0014H\u0016\u00f8\u0001\u0002J\u0019\u0010\u001f\u001a\u00020\u001a2\u000c\u0010\u001b\u001a\u0008\u0012\u0004\u0012\u00020\u00020\u0016H\u0016\u00f8\u0001\u0002J\u0019\u0010 \u001a\u00020\u001a2\u000c\u0010\u001b\u001a\u0008\u0012\u0004\u0012\u00020\u00020\u0018H\u0016\u00f8\u0001\u0002R\u0011\u0010\t\u001a\u00020\n\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\u000c\u0010\rR\u0011\u0010\u0003\u001a\u00020\u0004\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\u000e\u0010\u000f\u00f8\u0001\u0002\u0082\u0002\u000f\n\u0002\u0008!\n\u0005\u0008\u00a1\u001e0\u0001\n\u0002\u0008\u0019\u00a8\u0006!"
    }
    d2 = {
        "Lorg/opencv/core/AtableUByte;",
        "Lorg/opencv/core/Mat$Atable;",
        "Lkotlin/UByte;",
        "mat",
        "Lorg/opencv/core/Mat;",
        "row",
        "",
        "col",
        "(Lorg/opencv/core/Mat;II)V",
        "indices",
        "",
        "(Lorg/opencv/core/Mat;[I)V",
        "getIndices",
        "()[I",
        "getMat",
        "()Lorg/opencv/core/Mat;",
        "getV",
        "getV-w2LRezQ",
        "()B",
        "getV2c",
        "Lorg/opencv/core/Mat$Tuple2;",
        "getV3c",
        "Lorg/opencv/core/Mat$Tuple3;",
        "getV4c",
        "Lorg/opencv/core/Mat$Tuple4;",
        "setV",
        "",
        "v",
        "setV-7apg3OU",
        "(B)V",
        "setV2c",
        "setV3c",
        "setV4c",
        "opencv_release"
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
.field private final indices:[I

.field private final mat:Lorg/opencv/core/Mat;


# direct methods
.method public constructor <init>(Lorg/opencv/core/Mat;II)V
    .locals 1

    const-string v0, "mat"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 50
    filled-new-array {p2, p3}, [I

    move-result-object p2

    invoke-direct {p0, p1, p2}, Lorg/opencv/core/AtableUByte;-><init>(Lorg/opencv/core/Mat;[I)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Mat;[I)V
    .locals 1

    const-string v0, "mat"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "indices"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 48
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lorg/opencv/core/AtableUByte;->mat:Lorg/opencv/core/Mat;

    iput-object p2, p0, Lorg/opencv/core/AtableUByte;->indices:[I

    return-void
.end method


# virtual methods
.method public final getIndices()[I
    .locals 1

    .line 48
    iget-object v0, p0, Lorg/opencv/core/AtableUByte;->indices:[I

    return-object v0
.end method

.method public final getMat()Lorg/opencv/core/Mat;
    .locals 1

    .line 48
    iget-object v0, p0, Lorg/opencv/core/AtableUByte;->mat:Lorg/opencv/core/Mat;

    return-object v0
.end method

.method public bridge synthetic getV()Ljava/lang/Object;
    .locals 1

    .line 48
    invoke-virtual {p0}, Lorg/opencv/core/AtableUByte;->getV-w2LRezQ()B

    move-result v0

    invoke-static {v0}, Lkotlin/UByte;->box-impl(B)Lkotlin/UByte;

    move-result-object v0

    return-object v0
.end method

.method public getV-w2LRezQ()B
    .locals 3

    const/4 v0, 0x1

    .line 53
    invoke-static {v0}, Lkotlin/UByteArray;->constructor-impl(I)[B

    move-result-object v0

    .line 54
    iget-object v1, p0, Lorg/opencv/core/AtableUByte;->mat:Lorg/opencv/core/Mat;

    iget-object v2, p0, Lorg/opencv/core/AtableUByte;->indices:[I

    invoke-static {v1, v2, v0}, Lorg/opencv/core/MatAtKt;->get-7tiRaYo(Lorg/opencv/core/Mat;[I[B)I

    const/4 v1, 0x0

    .line 55
    invoke-static {v0, v1}, Lkotlin/UByteArray;->get-w2LRezQ([BI)B

    move-result v0

    return v0
.end method

.method public getV2c()Lorg/opencv/core/Mat$Tuple2;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lorg/opencv/core/Mat$Tuple2<",
            "Lkotlin/UByte;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x2

    .line 64
    invoke-static {v0}, Lkotlin/UByteArray;->constructor-impl(I)[B

    move-result-object v0

    .line 65
    iget-object v1, p0, Lorg/opencv/core/AtableUByte;->mat:Lorg/opencv/core/Mat;

    iget-object v2, p0, Lorg/opencv/core/AtableUByte;->indices:[I

    invoke-static {v1, v2, v0}, Lorg/opencv/core/MatAtKt;->get-7tiRaYo(Lorg/opencv/core/Mat;[I[B)I

    .line 66
    new-instance v1, Lorg/opencv/core/Mat$Tuple2;

    const/4 v2, 0x0

    invoke-static {v0, v2}, Lkotlin/UByteArray;->get-w2LRezQ([BI)B

    move-result v2

    invoke-static {v2}, Lkotlin/UByte;->box-impl(B)Lkotlin/UByte;

    move-result-object v2

    const/4 v3, 0x1

    invoke-static {v0, v3}, Lkotlin/UByteArray;->get-w2LRezQ([BI)B

    move-result v0

    invoke-static {v0}, Lkotlin/UByte;->box-impl(B)Lkotlin/UByte;

    move-result-object v0

    invoke-direct {v1, v2, v0}, Lorg/opencv/core/Mat$Tuple2;-><init>(Ljava/lang/Object;Ljava/lang/Object;)V

    return-object v1
.end method

.method public getV3c()Lorg/opencv/core/Mat$Tuple3;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lorg/opencv/core/Mat$Tuple3<",
            "Lkotlin/UByte;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x3

    .line 75
    invoke-static {v0}, Lkotlin/UByteArray;->constructor-impl(I)[B

    move-result-object v0

    .line 76
    iget-object v1, p0, Lorg/opencv/core/AtableUByte;->mat:Lorg/opencv/core/Mat;

    iget-object v2, p0, Lorg/opencv/core/AtableUByte;->indices:[I

    invoke-static {v1, v2, v0}, Lorg/opencv/core/MatAtKt;->get-7tiRaYo(Lorg/opencv/core/Mat;[I[B)I

    .line 77
    new-instance v1, Lorg/opencv/core/Mat$Tuple3;

    const/4 v2, 0x0

    invoke-static {v0, v2}, Lkotlin/UByteArray;->get-w2LRezQ([BI)B

    move-result v2

    invoke-static {v2}, Lkotlin/UByte;->box-impl(B)Lkotlin/UByte;

    move-result-object v2

    const/4 v3, 0x1

    invoke-static {v0, v3}, Lkotlin/UByteArray;->get-w2LRezQ([BI)B

    move-result v3

    invoke-static {v3}, Lkotlin/UByte;->box-impl(B)Lkotlin/UByte;

    move-result-object v3

    const/4 v4, 0x2

    invoke-static {v0, v4}, Lkotlin/UByteArray;->get-w2LRezQ([BI)B

    move-result v0

    invoke-static {v0}, Lkotlin/UByte;->box-impl(B)Lkotlin/UByte;

    move-result-object v0

    invoke-direct {v1, v2, v3, v0}, Lorg/opencv/core/Mat$Tuple3;-><init>(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V

    return-object v1
.end method

.method public getV4c()Lorg/opencv/core/Mat$Tuple4;
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lorg/opencv/core/Mat$Tuple4<",
            "Lkotlin/UByte;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x4

    .line 86
    invoke-static {v0}, Lkotlin/UByteArray;->constructor-impl(I)[B

    move-result-object v0

    .line 87
    iget-object v1, p0, Lorg/opencv/core/AtableUByte;->mat:Lorg/opencv/core/Mat;

    iget-object v2, p0, Lorg/opencv/core/AtableUByte;->indices:[I

    invoke-static {v1, v2, v0}, Lorg/opencv/core/MatAtKt;->get-7tiRaYo(Lorg/opencv/core/Mat;[I[B)I

    .line 88
    new-instance v1, Lorg/opencv/core/Mat$Tuple4;

    const/4 v2, 0x0

    invoke-static {v0, v2}, Lkotlin/UByteArray;->get-w2LRezQ([BI)B

    move-result v2

    invoke-static {v2}, Lkotlin/UByte;->box-impl(B)Lkotlin/UByte;

    move-result-object v2

    const/4 v3, 0x1

    invoke-static {v0, v3}, Lkotlin/UByteArray;->get-w2LRezQ([BI)B

    move-result v3

    invoke-static {v3}, Lkotlin/UByte;->box-impl(B)Lkotlin/UByte;

    move-result-object v3

    const/4 v4, 0x2

    invoke-static {v0, v4}, Lkotlin/UByteArray;->get-w2LRezQ([BI)B

    move-result v4

    invoke-static {v4}, Lkotlin/UByte;->box-impl(B)Lkotlin/UByte;

    move-result-object v4

    const/4 v5, 0x3

    invoke-static {v0, v5}, Lkotlin/UByteArray;->get-w2LRezQ([BI)B

    move-result v0

    invoke-static {v0}, Lkotlin/UByte;->box-impl(B)Lkotlin/UByte;

    move-result-object v0

    invoke-direct {v1, v2, v3, v4, v0}, Lorg/opencv/core/Mat$Tuple4;-><init>(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V

    return-object v1
.end method

.method public bridge synthetic setV(Ljava/lang/Object;)V
    .locals 0

    .line 48
    check-cast p1, Lkotlin/UByte;

    invoke-virtual {p1}, Lkotlin/UByte;->unbox-impl()B

    move-result p1

    invoke-virtual {p0, p1}, Lorg/opencv/core/AtableUByte;->setV-7apg3OU(B)V

    return-void
.end method

.method public setV-7apg3OU(B)V
    .locals 2

    const/4 v0, 0x1

    .line 59
    new-array v0, v0, [B

    const/4 v1, 0x0

    aput-byte p1, v0, v1

    .line 60
    iget-object p1, p0, Lorg/opencv/core/AtableUByte;->mat:Lorg/opencv/core/Mat;

    iget-object v1, p0, Lorg/opencv/core/AtableUByte;->indices:[I

    invoke-static {p1, v1, v0}, Lorg/opencv/core/MatAtKt;->put-7tiRaYo(Lorg/opencv/core/Mat;[I[B)I

    return-void
.end method

.method public setV2c(Lorg/opencv/core/Mat$Tuple2;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat$Tuple2<",
            "Lkotlin/UByte;",
            ">;)V"
        }
    .end annotation

    const-string v0, "v"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 70
    invoke-virtual {p1}, Lorg/opencv/core/Mat$Tuple2;->get_0()Ljava/lang/Object;

    move-result-object v0

    const-string v1, "v._0"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v0, Lkotlin/UByte;

    invoke-virtual {v0}, Lkotlin/UByte;->unbox-impl()B

    move-result v0

    invoke-virtual {p1}, Lorg/opencv/core/Mat$Tuple2;->get_1()Ljava/lang/Object;

    move-result-object p1

    const-string v1, "v._1"

    invoke-static {p1, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast p1, Lkotlin/UByte;

    invoke-virtual {p1}, Lkotlin/UByte;->unbox-impl()B

    move-result p1

    const/4 v1, 0x2

    new-array v1, v1, [B

    const/4 v2, 0x0

    aput-byte v0, v1, v2

    const/4 v0, 0x1

    aput-byte p1, v1, v0

    .line 71
    iget-object p1, p0, Lorg/opencv/core/AtableUByte;->mat:Lorg/opencv/core/Mat;

    iget-object v0, p0, Lorg/opencv/core/AtableUByte;->indices:[I

    invoke-static {p1, v0, v1}, Lorg/opencv/core/MatAtKt;->put-7tiRaYo(Lorg/opencv/core/Mat;[I[B)I

    return-void
.end method

.method public setV3c(Lorg/opencv/core/Mat$Tuple3;)V
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat$Tuple3<",
            "Lkotlin/UByte;",
            ">;)V"
        }
    .end annotation

    const-string v0, "v"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 81
    invoke-virtual {p1}, Lorg/opencv/core/Mat$Tuple3;->get_0()Ljava/lang/Object;

    move-result-object v0

    const-string v1, "v._0"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v0, Lkotlin/UByte;

    invoke-virtual {v0}, Lkotlin/UByte;->unbox-impl()B

    move-result v0

    invoke-virtual {p1}, Lorg/opencv/core/Mat$Tuple3;->get_1()Ljava/lang/Object;

    move-result-object v1

    const-string v2, "v._1"

    invoke-static {v1, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v1, Lkotlin/UByte;

    invoke-virtual {v1}, Lkotlin/UByte;->unbox-impl()B

    move-result v1

    invoke-virtual {p1}, Lorg/opencv/core/Mat$Tuple3;->get_2()Ljava/lang/Object;

    move-result-object p1

    const-string v2, "v._2"

    invoke-static {p1, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast p1, Lkotlin/UByte;

    invoke-virtual {p1}, Lkotlin/UByte;->unbox-impl()B

    move-result p1

    const/4 v2, 0x3

    new-array v2, v2, [B

    const/4 v3, 0x0

    aput-byte v0, v2, v3

    const/4 v0, 0x1

    aput-byte v1, v2, v0

    const/4 v0, 0x2

    aput-byte p1, v2, v0

    .line 82
    iget-object p1, p0, Lorg/opencv/core/AtableUByte;->mat:Lorg/opencv/core/Mat;

    iget-object v0, p0, Lorg/opencv/core/AtableUByte;->indices:[I

    invoke-static {p1, v0, v2}, Lorg/opencv/core/MatAtKt;->put-7tiRaYo(Lorg/opencv/core/Mat;[I[B)I

    return-void
.end method

.method public setV4c(Lorg/opencv/core/Mat$Tuple4;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat$Tuple4<",
            "Lkotlin/UByte;",
            ">;)V"
        }
    .end annotation

    const-string v0, "v"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 92
    invoke-virtual {p1}, Lorg/opencv/core/Mat$Tuple4;->get_0()Ljava/lang/Object;

    move-result-object v0

    const-string v1, "v._0"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v0, Lkotlin/UByte;

    invoke-virtual {v0}, Lkotlin/UByte;->unbox-impl()B

    move-result v0

    invoke-virtual {p1}, Lorg/opencv/core/Mat$Tuple4;->get_1()Ljava/lang/Object;

    move-result-object v1

    const-string v2, "v._1"

    invoke-static {v1, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v1, Lkotlin/UByte;

    invoke-virtual {v1}, Lkotlin/UByte;->unbox-impl()B

    move-result v1

    invoke-virtual {p1}, Lorg/opencv/core/Mat$Tuple4;->get_2()Ljava/lang/Object;

    move-result-object v2

    const-string v3, "v._2"

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v2, Lkotlin/UByte;

    invoke-virtual {v2}, Lkotlin/UByte;->unbox-impl()B

    move-result v2

    invoke-virtual {p1}, Lorg/opencv/core/Mat$Tuple4;->get_3()Ljava/lang/Object;

    move-result-object p1

    const-string v3, "v._3"

    invoke-static {p1, v3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast p1, Lkotlin/UByte;

    invoke-virtual {p1}, Lkotlin/UByte;->unbox-impl()B

    move-result p1

    const/4 v3, 0x4

    new-array v3, v3, [B

    const/4 v4, 0x0

    aput-byte v0, v3, v4

    const/4 v0, 0x1

    aput-byte v1, v3, v0

    const/4 v0, 0x2

    aput-byte v2, v3, v0

    const/4 v0, 0x3

    aput-byte p1, v3, v0

    .line 93
    iget-object p1, p0, Lorg/opencv/core/AtableUByte;->mat:Lorg/opencv/core/Mat;

    iget-object v0, p0, Lorg/opencv/core/AtableUByte;->indices:[I

    invoke-static {p1, v0, v3}, Lorg/opencv/core/MatAtKt;->put-7tiRaYo(Lorg/opencv/core/Mat;[I[B)I

    return-void
.end method
