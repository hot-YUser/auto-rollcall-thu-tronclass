.class public final Lorg/opencv/core/MatAtKt;
.super Ljava/lang/Object;
.source "MatAt.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000D\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0005\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0008\n\u0002\u0008\u0002\n\u0002\u0010\u0015\n\u0002\u0008\t\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\r\u001a\'\u0010\u0000\u001a\u0008\u0012\u0004\u0012\u0002H\u00020\u0001\"\u0004\u0008\u0000\u0010\u00022\u0006\u0010\u0003\u001a\u0002H\u00022\u0006\u0010\u0004\u001a\u0002H\u0002\u00a2\u0006\u0002\u0010\u0005\u001a/\u0010\u0006\u001a\u0008\u0012\u0004\u0012\u0002H\u00020\u0007\"\u0004\u0008\u0000\u0010\u00022\u0006\u0010\u0003\u001a\u0002H\u00022\u0006\u0010\u0004\u001a\u0002H\u00022\u0006\u0010\u0008\u001a\u0002H\u0002\u00a2\u0006\u0002\u0010\t\u001a7\u0010\n\u001a\u0008\u0012\u0004\u0012\u0002H\u00020\u000b\"\u0004\u0008\u0000\u0010\u00022\u0006\u0010\u0003\u001a\u0002H\u00022\u0006\u0010\u0004\u001a\u0002H\u00022\u0006\u0010\u0008\u001a\u0002H\u00022\u0006\u0010\u000c\u001a\u0002H\u0002\u00a2\u0006\u0002\u0010\r\u001a+\u0010\u000e\u001a\u0008\u0012\u0004\u0012\u0002H\u00020\u000f\"\u0006\u0008\u0000\u0010\u0002\u0018\u0001*\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u0012H\u0086\u0008\u001a#\u0010\u000e\u001a\u0008\u0012\u0004\u0012\u0002H\u00020\u000f\"\u0006\u0008\u0000\u0010\u0002\u0018\u0001*\u00020\u00102\u0006\u0010\u0014\u001a\u00020\u0015H\u0086\u0008\u001a\u001e\u0010\u0016\u001a\u0002H\u0002\"\u0004\u0008\u0000\u0010\u0002*\u0008\u0012\u0004\u0012\u0002H\u00020\u0001H\u0086\u0002\u00a2\u0006\u0002\u0010\u0017\u001a\u001e\u0010\u0016\u001a\u0002H\u0002\"\u0004\u0008\u0000\u0010\u0002*\u0008\u0012\u0004\u0012\u0002H\u00020\u0007H\u0086\u0002\u00a2\u0006\u0002\u0010\u0018\u001a\u001e\u0010\u0016\u001a\u0002H\u0002\"\u0004\u0008\u0000\u0010\u0002*\u0008\u0012\u0004\u0012\u0002H\u00020\u000bH\u0086\u0002\u00a2\u0006\u0002\u0010\u0019\u001a\u001e\u0010\u001a\u001a\u0002H\u0002\"\u0004\u0008\u0000\u0010\u0002*\u0008\u0012\u0004\u0012\u0002H\u00020\u0001H\u0086\u0002\u00a2\u0006\u0002\u0010\u0017\u001a\u001e\u0010\u001a\u001a\u0002H\u0002\"\u0004\u0008\u0000\u0010\u0002*\u0008\u0012\u0004\u0012\u0002H\u00020\u0007H\u0086\u0002\u00a2\u0006\u0002\u0010\u0018\u001a\u001e\u0010\u001a\u001a\u0002H\u0002\"\u0004\u0008\u0000\u0010\u0002*\u0008\u0012\u0004\u0012\u0002H\u00020\u000bH\u0086\u0002\u00a2\u0006\u0002\u0010\u0019\u001a\u001e\u0010\u001b\u001a\u0002H\u0002\"\u0004\u0008\u0000\u0010\u0002*\u0008\u0012\u0004\u0012\u0002H\u00020\u0007H\u0086\u0002\u00a2\u0006\u0002\u0010\u0018\u001a\u001e\u0010\u001b\u001a\u0002H\u0002\"\u0004\u0008\u0000\u0010\u0002*\u0008\u0012\u0004\u0012\u0002H\u00020\u000bH\u0086\u0002\u00a2\u0006\u0002\u0010\u0019\u001a\u001e\u0010\u001c\u001a\u0002H\u0002\"\u0004\u0008\u0000\u0010\u0002*\u0008\u0012\u0004\u0012\u0002H\u00020\u000bH\u0086\u0002\u00a2\u0006\u0002\u0010\u0019\u001a/\u0010\u001d\u001a\u00020\u0012*\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\u001f\u00f8\u0001\u0000\u00f8\u0001\u0001\u00a2\u0006\u0004\u0008 \u0010!\u001a/\u0010\u001d\u001a\u00020\u0012*\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\"\u00f8\u0001\u0000\u00f8\u0001\u0001\u00a2\u0006\u0004\u0008#\u0010$\u001a\'\u0010\u001d\u001a\u00020\u0012*\u00020\u00102\u0006\u0010%\u001a\u00020\u00152\u0006\u0010\u001e\u001a\u00020\u001f\u00f8\u0001\u0000\u00f8\u0001\u0001\u00a2\u0006\u0004\u0008&\u0010\'\u001a\'\u0010\u001d\u001a\u00020\u0012*\u00020\u00102\u0006\u0010%\u001a\u00020\u00152\u0006\u0010\u001e\u001a\u00020\"\u00f8\u0001\u0000\u00f8\u0001\u0001\u00a2\u0006\u0004\u0008(\u0010)\u001a/\u0010*\u001a\u00020\u0012*\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\u001f\u00f8\u0001\u0000\u00f8\u0001\u0001\u00a2\u0006\u0004\u0008+\u0010!\u001a/\u0010*\u001a\u00020\u0012*\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\"\u00f8\u0001\u0000\u00f8\u0001\u0001\u00a2\u0006\u0004\u0008,\u0010$\u001a\'\u0010*\u001a\u00020\u0012*\u00020\u00102\u0006\u0010%\u001a\u00020\u00152\u0006\u0010\u001e\u001a\u00020\u001f\u00f8\u0001\u0000\u00f8\u0001\u0001\u00a2\u0006\u0004\u0008-\u0010\'\u001a\'\u0010*\u001a\u00020\u0012*\u00020\u00102\u0006\u0010%\u001a\u00020\u00152\u0006\u0010\u001e\u001a\u00020\"\u00f8\u0001\u0000\u00f8\u0001\u0001\u00a2\u0006\u0004\u0008.\u0010)\u0082\u0002\u000b\n\u0005\u0008\u00a1\u001e0\u0001\n\u0002\u0008\u0019\u00a8\u0006/"
    }
    d2 = {
        "T2",
        "Lorg/opencv/core/Mat$Tuple2;",
        "T",
        "_0",
        "_1",
        "(Ljava/lang/Object;Ljava/lang/Object;)Lorg/opencv/core/Mat$Tuple2;",
        "T3",
        "Lorg/opencv/core/Mat$Tuple3;",
        "_2",
        "(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Lorg/opencv/core/Mat$Tuple3;",
        "T4",
        "Lorg/opencv/core/Mat$Tuple4;",
        "_3",
        "(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Lorg/opencv/core/Mat$Tuple4;",
        "at",
        "Lorg/opencv/core/Mat$Atable;",
        "Lorg/opencv/core/Mat;",
        "row",
        "",
        "col",
        "idx",
        "",
        "component1",
        "(Lorg/opencv/core/Mat$Tuple2;)Ljava/lang/Object;",
        "(Lorg/opencv/core/Mat$Tuple3;)Ljava/lang/Object;",
        "(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;",
        "component2",
        "component3",
        "component4",
        "get",
        "data",
        "Lkotlin/UByteArray;",
        "get-K0TZSog",
        "(Lorg/opencv/core/Mat;II[B)I",
        "Lkotlin/UShortArray;",
        "get-rFce7Xw",
        "(Lorg/opencv/core/Mat;II[S)I",
        "indices",
        "get-7tiRaYo",
        "(Lorg/opencv/core/Mat;[I[B)I",
        "get-N38XRpM",
        "(Lorg/opencv/core/Mat;[I[S)I",
        "put",
        "put-K0TZSog",
        "put-rFce7Xw",
        "put-7tiRaYo",
        "put-N38XRpM",
        "opencv_release"
    }
    k = 0x2
    mv = {
        0x1,
        0x8,
        0x0
    }
    xi = 0x30
.end annotation


# direct methods
.method public static final T2(Ljava/lang/Object;Ljava/lang/Object;)Lorg/opencv/core/Mat$Tuple2;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(TT;TT;)",
            "Lorg/opencv/core/Mat$Tuple2<",
            "TT;>;"
        }
    .end annotation

    .line 158
    new-instance v0, Lorg/opencv/core/Mat$Tuple2;

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat$Tuple2;-><init>(Ljava/lang/Object;Ljava/lang/Object;)V

    return-object v0
.end method

.method public static final T3(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Lorg/opencv/core/Mat$Tuple3;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(TT;TT;TT;)",
            "Lorg/opencv/core/Mat$Tuple3<",
            "TT;>;"
        }
    .end annotation

    .line 159
    new-instance v0, Lorg/opencv/core/Mat$Tuple3;

    invoke-direct {v0, p0, p1, p2}, Lorg/opencv/core/Mat$Tuple3;-><init>(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V

    return-object v0
.end method

.method public static final T4(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Lorg/opencv/core/Mat$Tuple4;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(TT;TT;TT;TT;)",
            "Lorg/opencv/core/Mat$Tuple4<",
            "TT;>;"
        }
    .end annotation

    .line 160
    new-instance v0, Lorg/opencv/core/Mat$Tuple4;

    invoke-direct {v0, p0, p1, p2, p3}, Lorg/opencv/core/Mat$Tuple4;-><init>(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V

    return-object v0
.end method

.method public static final synthetic at(Lorg/opencv/core/Mat;II)Lorg/opencv/core/Mat$Atable;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Lorg/opencv/core/Mat;",
            "II)",
            "Lorg/opencv/core/Mat$Atable<",
            "TT;>;"
        }
    .end annotation

    const-string v0, "<this>"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const/4 v0, 0x4

    const-string v1, "T"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->reifiedOperationMarker(ILjava/lang/String;)V

    const-class v2, Ljava/lang/Object;

    invoke-static {v2}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v2

    .line 26
    sget-object v3, Ljava/lang/Byte;->TYPE:Ljava/lang/Class;

    invoke-static {v3}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v3

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    const/4 v4, 0x1

    if-eqz v3, :cond_0

    move v3, v4

    goto :goto_0

    :cond_0
    sget-object v3, Ljava/lang/Double;->TYPE:Ljava/lang/Class;

    invoke-static {v3}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v3

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    :goto_0
    if-eqz v3, :cond_1

    move v3, v4

    goto :goto_1

    :cond_1
    sget-object v3, Ljava/lang/Float;->TYPE:Ljava/lang/Class;

    invoke-static {v3}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v3

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    :goto_1
    if-eqz v3, :cond_2

    move v3, v4

    goto :goto_2

    :cond_2
    sget-object v3, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    invoke-static {v3}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v3

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    :goto_2
    if-eqz v3, :cond_3

    goto :goto_3

    :cond_3
    sget-object v3, Ljava/lang/Short;->TYPE:Ljava/lang/Class;

    invoke-static {v3}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v3

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v4

    :goto_3
    if-eqz v4, :cond_4

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->reifiedOperationMarker(ILjava/lang/String;)V

    const-class v0, Ljava/lang/Object;

    move-object v1, v0

    check-cast v1, Ljava/lang/Class;

    invoke-virtual {p0, v0, p1, p2}, Lorg/opencv/core/Mat;->at(Ljava/lang/Class;II)Lorg/opencv/core/Mat$Atable;

    move-result-object p0

    const-string p1, "this.at(\n            T::\u2026            col\n        )"

    invoke-static {p0, p1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    move-object p1, p0

    check-cast p1, Lorg/opencv/core/Mat$Atable;

    goto :goto_4

    .line 31
    :cond_4
    const-class v0, Lkotlin/UByte;

    invoke-static {v0}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v0

    invoke-static {v2, v0}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_5

    new-instance v0, Lorg/opencv/core/AtableUByte;

    invoke-direct {v0, p0, p1, p2}, Lorg/opencv/core/AtableUByte;-><init>(Lorg/opencv/core/Mat;II)V

    move-object p0, v0

    check-cast p0, Lorg/opencv/core/Mat$Atable;

    move-object p1, p0

    check-cast p1, Lorg/opencv/core/Mat$Atable;

    goto :goto_4

    .line 32
    :cond_5
    const-class v0, Lkotlin/UShort;

    invoke-static {v0}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v0

    invoke-static {v2, v0}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_6

    new-instance v0, Lorg/opencv/core/AtableUShort;

    invoke-direct {v0, p0, p1, p2}, Lorg/opencv/core/AtableUShort;-><init>(Lorg/opencv/core/Mat;II)V

    move-object p0, v0

    check-cast p0, Lorg/opencv/core/Mat$Atable;

    move-object p1, p0

    check-cast p1, Lorg/opencv/core/Mat$Atable;

    :goto_4
    return-object p0

    .line 33
    :cond_6
    new-instance p0, Ljava/lang/RuntimeException;

    const-string p1, "Unsupported class type"

    invoke-direct {p0, p1}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static final synthetic at(Lorg/opencv/core/Mat;[I)Lorg/opencv/core/Mat$Atable;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Lorg/opencv/core/Mat;",
            "[I)",
            "Lorg/opencv/core/Mat$Atable<",
            "TT;>;"
        }
    .end annotation

    const-string v0, "<this>"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "idx"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const/4 v0, 0x4

    const-string v1, "T"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->reifiedOperationMarker(ILjava/lang/String;)V

    const-class v2, Ljava/lang/Object;

    invoke-static {v2}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v2

    .line 39
    sget-object v3, Ljava/lang/Byte;->TYPE:Ljava/lang/Class;

    invoke-static {v3}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v3

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    const/4 v4, 0x1

    if-eqz v3, :cond_0

    move v3, v4

    goto :goto_0

    :cond_0
    sget-object v3, Ljava/lang/Double;->TYPE:Ljava/lang/Class;

    invoke-static {v3}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v3

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    :goto_0
    if-eqz v3, :cond_1

    move v3, v4

    goto :goto_1

    :cond_1
    sget-object v3, Ljava/lang/Float;->TYPE:Ljava/lang/Class;

    invoke-static {v3}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v3

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    :goto_1
    if-eqz v3, :cond_2

    move v3, v4

    goto :goto_2

    :cond_2
    sget-object v3, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    invoke-static {v3}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v3

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    :goto_2
    if-eqz v3, :cond_3

    goto :goto_3

    :cond_3
    sget-object v3, Ljava/lang/Short;->TYPE:Ljava/lang/Class;

    invoke-static {v3}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v3

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v4

    :goto_3
    if-eqz v4, :cond_4

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->reifiedOperationMarker(ILjava/lang/String;)V

    const-class v0, Ljava/lang/Object;

    move-object v1, v0

    check-cast v1, Ljava/lang/Class;

    invoke-virtual {p0, v0, p1}, Lorg/opencv/core/Mat;->at(Ljava/lang/Class;[I)Lorg/opencv/core/Mat$Atable;

    move-result-object p0

    const-string p1, "this.at(\n            T::\u2026            idx\n        )"

    invoke-static {p0, p1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    move-object p1, p0

    check-cast p1, Lorg/opencv/core/Mat$Atable;

    goto :goto_4

    .line 43
    :cond_4
    const-class v0, Lkotlin/UByte;

    invoke-static {v0}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v0

    invoke-static {v2, v0}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_5

    new-instance v0, Lorg/opencv/core/AtableUByte;

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/AtableUByte;-><init>(Lorg/opencv/core/Mat;[I)V

    move-object p0, v0

    check-cast p0, Lorg/opencv/core/Mat$Atable;

    move-object p1, p0

    check-cast p1, Lorg/opencv/core/Mat$Atable;

    goto :goto_4

    .line 44
    :cond_5
    const-class v0, Lkotlin/UShort;

    invoke-static {v0}, Lkotlin/jvm/internal/Reflection;->getOrCreateKotlinClass(Ljava/lang/Class;)Lkotlin/reflect/KClass;

    move-result-object v0

    invoke-static {v2, v0}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_6

    new-instance v0, Lorg/opencv/core/AtableUShort;

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/AtableUShort;-><init>(Lorg/opencv/core/Mat;[I)V

    move-object p0, v0

    check-cast p0, Lorg/opencv/core/Mat$Atable;

    move-object p1, p0

    check-cast p1, Lorg/opencv/core/Mat$Atable;

    :goto_4
    return-object p0

    .line 45
    :cond_6
    new-instance p0, Ljava/lang/RuntimeException;

    const-string p1, "Unsupported class type"

    invoke-direct {p0, p1}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/String;)V

    throw p0
.end method

.method public static final component1(Lorg/opencv/core/Mat$Tuple2;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Lorg/opencv/core/Mat$Tuple2<",
            "TT;>;)TT;"
        }
    .end annotation

    const-string v0, "<this>"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 146
    invoke-virtual {p0}, Lorg/opencv/core/Mat$Tuple2;->get_0()Ljava/lang/Object;

    move-result-object p0

    return-object p0
.end method

.method public static final component1(Lorg/opencv/core/Mat$Tuple3;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Lorg/opencv/core/Mat$Tuple3<",
            "TT;>;)TT;"
        }
    .end annotation

    const-string v0, "<this>"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 149
    invoke-virtual {p0}, Lorg/opencv/core/Mat$Tuple3;->get_0()Ljava/lang/Object;

    move-result-object p0

    return-object p0
.end method

.method public static final component1(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Lorg/opencv/core/Mat$Tuple4<",
            "TT;>;)TT;"
        }
    .end annotation

    const-string v0, "<this>"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 153
    invoke-virtual {p0}, Lorg/opencv/core/Mat$Tuple4;->get_0()Ljava/lang/Object;

    move-result-object p0

    return-object p0
.end method

.method public static final component2(Lorg/opencv/core/Mat$Tuple2;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Lorg/opencv/core/Mat$Tuple2<",
            "TT;>;)TT;"
        }
    .end annotation

    const-string v0, "<this>"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 147
    invoke-virtual {p0}, Lorg/opencv/core/Mat$Tuple2;->get_1()Ljava/lang/Object;

    move-result-object p0

    return-object p0
.end method

.method public static final component2(Lorg/opencv/core/Mat$Tuple3;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Lorg/opencv/core/Mat$Tuple3<",
            "TT;>;)TT;"
        }
    .end annotation

    const-string v0, "<this>"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 150
    invoke-virtual {p0}, Lorg/opencv/core/Mat$Tuple3;->get_1()Ljava/lang/Object;

    move-result-object p0

    return-object p0
.end method

.method public static final component2(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Lorg/opencv/core/Mat$Tuple4<",
            "TT;>;)TT;"
        }
    .end annotation

    const-string v0, "<this>"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 154
    invoke-virtual {p0}, Lorg/opencv/core/Mat$Tuple4;->get_1()Ljava/lang/Object;

    move-result-object p0

    return-object p0
.end method

.method public static final component3(Lorg/opencv/core/Mat$Tuple3;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Lorg/opencv/core/Mat$Tuple3<",
            "TT;>;)TT;"
        }
    .end annotation

    const-string v0, "<this>"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 151
    invoke-virtual {p0}, Lorg/opencv/core/Mat$Tuple3;->get_2()Ljava/lang/Object;

    move-result-object p0

    return-object p0
.end method

.method public static final component3(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Lorg/opencv/core/Mat$Tuple4<",
            "TT;>;)TT;"
        }
    .end annotation

    const-string v0, "<this>"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 155
    invoke-virtual {p0}, Lorg/opencv/core/Mat$Tuple4;->get_2()Ljava/lang/Object;

    move-result-object p0

    return-object p0
.end method

.method public static final component4(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Lorg/opencv/core/Mat$Tuple4<",
            "TT;>;)TT;"
        }
    .end annotation

    const-string v0, "<this>"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 156
    invoke-virtual {p0}, Lorg/opencv/core/Mat$Tuple4;->get_3()Ljava/lang/Object;

    move-result-object p0

    return-object p0
.end method

.method public static final get-7tiRaYo(Lorg/opencv/core/Mat;[I[B)I
    .locals 1

    const-string v0, "$this$get"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "indices"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "data"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 7
    invoke-virtual {p0, p1, p2}, Lorg/opencv/core/Mat;->get([I[B)I

    move-result p0

    return p0
.end method

.method public static final get-K0TZSog(Lorg/opencv/core/Mat;II[B)I
    .locals 1

    const-string v0, "$this$get"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "data"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 6
    invoke-virtual {p0, p1, p2, p3}, Lorg/opencv/core/Mat;->get(II[B)I

    move-result p0

    return p0
.end method

.method public static final get-N38XRpM(Lorg/opencv/core/Mat;[I[S)I
    .locals 1

    const-string v0, "$this$get"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "indices"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "data"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 12
    invoke-virtual {p0, p1, p2}, Lorg/opencv/core/Mat;->get([I[S)I

    move-result p0

    return p0
.end method

.method public static final get-rFce7Xw(Lorg/opencv/core/Mat;II[S)I
    .locals 1

    const-string v0, "$this$get"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "data"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 11
    invoke-virtual {p0, p1, p2, p3}, Lorg/opencv/core/Mat;->get(II[S)I

    move-result p0

    return p0
.end method

.method public static final put-7tiRaYo(Lorg/opencv/core/Mat;[I[B)I
    .locals 1

    const-string v0, "$this$put"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "indices"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "data"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 9
    invoke-virtual {p0, p1, p2}, Lorg/opencv/core/Mat;->put([I[B)I

    move-result p0

    return p0
.end method

.method public static final put-K0TZSog(Lorg/opencv/core/Mat;II[B)I
    .locals 1

    const-string v0, "$this$put"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "data"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 8
    invoke-virtual {p0, p1, p2, p3}, Lorg/opencv/core/Mat;->put(II[B)I

    move-result p0

    return p0
.end method

.method public static final put-N38XRpM(Lorg/opencv/core/Mat;[I[S)I
    .locals 1

    const-string v0, "$this$put"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "indices"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "data"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 14
    invoke-virtual {p0, p1, p2}, Lorg/opencv/core/Mat;->put([I[S)I

    move-result p0

    return p0
.end method

.method public static final put-rFce7Xw(Lorg/opencv/core/Mat;II[S)I
    .locals 1

    const-string v0, "$this$put"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "data"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 13
    invoke-virtual {p0, p1, p2, p3}, Lorg/opencv/core/Mat;->put(II[S)I

    move-result p0

    return p0
.end method
