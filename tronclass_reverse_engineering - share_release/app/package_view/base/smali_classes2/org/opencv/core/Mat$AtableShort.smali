.class Lorg/opencv/core/Mat$AtableShort;
.super Lorg/opencv/core/Mat$AtableBase;
.source "Mat.java"

# interfaces
.implements Lorg/opencv/core/Mat$Atable;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/opencv/core/Mat;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "AtableShort"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Lorg/opencv/core/Mat$AtableBase;",
        "Lorg/opencv/core/Mat$Atable<",
        "Ljava/lang/Short;",
        ">;"
    }
.end annotation


# direct methods
.method public constructor <init>(Lorg/opencv/core/Mat;II)V
    .locals 0

    .line 1542
    invoke-direct {p0, p1, p2, p3}, Lorg/opencv/core/Mat$AtableBase;-><init>(Lorg/opencv/core/Mat;II)V

    return-void
.end method

.method public constructor <init>(Lorg/opencv/core/Mat;[I)V
    .locals 0

    .line 1546
    invoke-direct {p0, p1, p2}, Lorg/opencv/core/Mat$AtableBase;-><init>(Lorg/opencv/core/Mat;[I)V

    return-void
.end method


# virtual methods
.method public bridge synthetic getV()Ljava/lang/Object;
    .locals 1

    .line 1539
    invoke-virtual {p0}, Lorg/opencv/core/Mat$AtableShort;->getV()Ljava/lang/Short;

    move-result-object v0

    return-object v0
.end method

.method public getV()Ljava/lang/Short;
    .locals 3

    const/4 v0, 0x1

    .line 1551
    new-array v0, v0, [S

    .line 1552
    iget-object v1, p0, Lorg/opencv/core/Mat$AtableShort;->mat:Lorg/opencv/core/Mat;

    iget-object v2, p0, Lorg/opencv/core/Mat$AtableShort;->indices:[I

    invoke-virtual {v1, v2, v0}, Lorg/opencv/core/Mat;->get([I[S)I

    const/4 v1, 0x0

    .line 1553
    aget-short v0, v0, v1

    invoke-static {v0}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

    move-result-object v0

    return-object v0
.end method

.method public getV2c()Lorg/opencv/core/Mat$Tuple2;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lorg/opencv/core/Mat$Tuple2<",
            "Ljava/lang/Short;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x2

    .line 1564
    new-array v0, v0, [S

    .line 1565
    iget-object v1, p0, Lorg/opencv/core/Mat$AtableShort;->mat:Lorg/opencv/core/Mat;

    iget-object v2, p0, Lorg/opencv/core/Mat$AtableShort;->indices:[I

    invoke-virtual {v1, v2, v0}, Lorg/opencv/core/Mat;->get([I[S)I

    .line 1566
    new-instance v1, Lorg/opencv/core/Mat$Tuple2;

    const/4 v2, 0x0

    aget-short v2, v0, v2

    invoke-static {v2}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

    move-result-object v2

    const/4 v3, 0x1

    aget-short v0, v0, v3

    invoke-static {v0}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

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
            "Ljava/lang/Short;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x3

    .line 1577
    new-array v0, v0, [S

    .line 1578
    iget-object v1, p0, Lorg/opencv/core/Mat$AtableShort;->mat:Lorg/opencv/core/Mat;

    iget-object v2, p0, Lorg/opencv/core/Mat$AtableShort;->indices:[I

    invoke-virtual {v1, v2, v0}, Lorg/opencv/core/Mat;->get([I[S)I

    .line 1579
    new-instance v1, Lorg/opencv/core/Mat$Tuple3;

    const/4 v2, 0x0

    aget-short v2, v0, v2

    invoke-static {v2}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

    move-result-object v2

    const/4 v3, 0x1

    aget-short v3, v0, v3

    invoke-static {v3}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

    move-result-object v3

    const/4 v4, 0x2

    aget-short v0, v0, v4

    invoke-static {v0}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

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
            "Ljava/lang/Short;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x4

    .line 1590
    new-array v0, v0, [S

    .line 1591
    iget-object v1, p0, Lorg/opencv/core/Mat$AtableShort;->mat:Lorg/opencv/core/Mat;

    iget-object v2, p0, Lorg/opencv/core/Mat$AtableShort;->indices:[I

    invoke-virtual {v1, v2, v0}, Lorg/opencv/core/Mat;->get([I[S)I

    .line 1592
    new-instance v1, Lorg/opencv/core/Mat$Tuple4;

    const/4 v2, 0x0

    aget-short v2, v0, v2

    invoke-static {v2}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

    move-result-object v2

    const/4 v3, 0x1

    aget-short v3, v0, v3

    invoke-static {v3}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

    move-result-object v3

    const/4 v4, 0x2

    aget-short v4, v0, v4

    invoke-static {v4}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

    move-result-object v4

    const/4 v5, 0x3

    aget-short v0, v0, v5

    invoke-static {v0}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

    move-result-object v0

    invoke-direct {v1, v2, v3, v4, v0}, Lorg/opencv/core/Mat$Tuple4;-><init>(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V

    return-object v1
.end method

.method public bridge synthetic setV(Ljava/lang/Object;)V
    .locals 0

    .line 1539
    check-cast p1, Ljava/lang/Short;

    invoke-virtual {p0, p1}, Lorg/opencv/core/Mat$AtableShort;->setV(Ljava/lang/Short;)V

    return-void
.end method

.method public setV(Ljava/lang/Short;)V
    .locals 2

    .line 1558
    invoke-virtual {p1}, Ljava/lang/Short;->shortValue()S

    move-result p1

    const/4 v0, 0x1

    new-array v0, v0, [S

    const/4 v1, 0x0

    aput-short p1, v0, v1

    .line 1559
    iget-object p1, p0, Lorg/opencv/core/Mat$AtableShort;->mat:Lorg/opencv/core/Mat;

    iget-object v1, p0, Lorg/opencv/core/Mat$AtableShort;->indices:[I

    invoke-virtual {p1, v1, v0}, Lorg/opencv/core/Mat;->put([I[S)I

    return-void
.end method

.method public setV2c(Lorg/opencv/core/Mat$Tuple2;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat$Tuple2<",
            "Ljava/lang/Short;",
            ">;)V"
        }
    .end annotation

    .line 1571
    invoke-static {p1}, Lorg/opencv/core/Mat$Tuple2;->access$000(Lorg/opencv/core/Mat$Tuple2;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Short;

    invoke-virtual {v0}, Ljava/lang/Short;->shortValue()S

    move-result v0

    invoke-static {p1}, Lorg/opencv/core/Mat$Tuple2;->access$100(Lorg/opencv/core/Mat$Tuple2;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/Short;

    invoke-virtual {p1}, Ljava/lang/Short;->shortValue()S

    move-result p1

    const/4 v1, 0x2

    new-array v1, v1, [S

    const/4 v2, 0x0

    aput-short v0, v1, v2

    const/4 v0, 0x1

    aput-short p1, v1, v0

    .line 1572
    iget-object p1, p0, Lorg/opencv/core/Mat$AtableShort;->mat:Lorg/opencv/core/Mat;

    iget-object v0, p0, Lorg/opencv/core/Mat$AtableShort;->indices:[I

    invoke-virtual {p1, v0, v1}, Lorg/opencv/core/Mat;->put([I[S)I

    return-void
.end method

.method public setV3c(Lorg/opencv/core/Mat$Tuple3;)V
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat$Tuple3<",
            "Ljava/lang/Short;",
            ">;)V"
        }
    .end annotation

    .line 1584
    invoke-static {p1}, Lorg/opencv/core/Mat$Tuple3;->access$200(Lorg/opencv/core/Mat$Tuple3;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Short;

    invoke-virtual {v0}, Ljava/lang/Short;->shortValue()S

    move-result v0

    invoke-static {p1}, Lorg/opencv/core/Mat$Tuple3;->access$300(Lorg/opencv/core/Mat$Tuple3;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/Short;

    invoke-virtual {v1}, Ljava/lang/Short;->shortValue()S

    move-result v1

    invoke-static {p1}, Lorg/opencv/core/Mat$Tuple3;->access$400(Lorg/opencv/core/Mat$Tuple3;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/Short;

    invoke-virtual {p1}, Ljava/lang/Short;->shortValue()S

    move-result p1

    const/4 v2, 0x3

    new-array v2, v2, [S

    const/4 v3, 0x0

    aput-short v0, v2, v3

    const/4 v0, 0x1

    aput-short v1, v2, v0

    const/4 v0, 0x2

    aput-short p1, v2, v0

    .line 1585
    iget-object p1, p0, Lorg/opencv/core/Mat$AtableShort;->mat:Lorg/opencv/core/Mat;

    iget-object v0, p0, Lorg/opencv/core/Mat$AtableShort;->indices:[I

    invoke-virtual {p1, v0, v2}, Lorg/opencv/core/Mat;->put([I[S)I

    return-void
.end method

.method public setV4c(Lorg/opencv/core/Mat$Tuple4;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat$Tuple4<",
            "Ljava/lang/Short;",
            ">;)V"
        }
    .end annotation

    .line 1597
    invoke-static {p1}, Lorg/opencv/core/Mat$Tuple4;->access$500(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Short;

    invoke-virtual {v0}, Ljava/lang/Short;->shortValue()S

    move-result v0

    invoke-static {p1}, Lorg/opencv/core/Mat$Tuple4;->access$600(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/Short;

    invoke-virtual {v1}, Ljava/lang/Short;->shortValue()S

    move-result v1

    invoke-static {p1}, Lorg/opencv/core/Mat$Tuple4;->access$700(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Short;

    invoke-virtual {v2}, Ljava/lang/Short;->shortValue()S

    move-result v2

    invoke-static {p1}, Lorg/opencv/core/Mat$Tuple4;->access$800(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/Short;

    invoke-virtual {p1}, Ljava/lang/Short;->shortValue()S

    move-result p1

    const/4 v3, 0x4

    new-array v3, v3, [S

    const/4 v4, 0x0

    aput-short v0, v3, v4

    const/4 v0, 0x1

    aput-short v1, v3, v0

    const/4 v0, 0x2

    aput-short v2, v3, v0

    const/4 v0, 0x3

    aput-short p1, v3, v0

    .line 1598
    iget-object p1, p0, Lorg/opencv/core/Mat$AtableShort;->mat:Lorg/opencv/core/Mat;

    iget-object v0, p0, Lorg/opencv/core/Mat$AtableShort;->indices:[I

    invoke-virtual {p1, v0, v3}, Lorg/opencv/core/Mat;->put([I[S)I

    return-void
.end method
