.class public Lorg/opencv/dnn/Net;
.super Ljava/lang/Object;
.source "Net.java"


# instance fields
.field protected final nativeObj:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 45
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 46
    invoke-static {}, Lorg/opencv/dnn/Net;->Net_0()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    return-void
.end method

.method protected constructor <init>(J)V
    .locals 0

    .line 34
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-wide p1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    return-void
.end method

.method private static native Net_0()J
.end method

.method public static __fromPtr__(J)Lorg/opencv/dnn/Net;
    .locals 1

    .line 39
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method private static native connect_0(JLjava/lang/String;Ljava/lang/String;)V
.end method

.method private static native delete(J)V
.end method

.method private static native dumpToFile_0(JLjava/lang/String;)V
.end method

.method private static native dump_0(J)Ljava/lang/String;
.end method

.method private static native empty_0(J)Z
.end method

.method private static native enableFusion_0(JZ)V
.end method

.method private static native enableWinograd_0(JZ)V
.end method

.method private static native forward_0(JLjava/lang/String;)J
.end method

.method private static native forward_1(J)J
.end method

.method private static native forward_2(JJLjava/lang/String;)V
.end method

.method private static native forward_3(JJ)V
.end method

.method private static native forward_4(JJLjava/util/List;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(JJ",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation
.end method

.method private static native getFLOPS_0(JLjava/util/List;)J
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(J",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfInt;",
            ">;)J"
        }
    .end annotation
.end method

.method private static native getFLOPS_1(JJ)J
.end method

.method private static native getFLOPS_2(JILjava/util/List;)J
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(JI",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfInt;",
            ">;)J"
        }
    .end annotation
.end method

.method private static native getFLOPS_3(JIJ)J
.end method

.method private static native getInputDetails_0(JJJ)V
.end method

.method private static native getLayerId_0(JLjava/lang/String;)I
.end method

.method private static native getLayerNames_0(J)Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(J)",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end method

.method private static native getLayerTypes_0(JLjava/util/List;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(J",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation
.end method

.method private static native getLayer_0(JI)J
.end method

.method private static native getLayer_1(JLjava/lang/String;)J
.end method

.method private static native getLayer_2(JJ)J
.end method

.method private static native getLayersCount_0(JLjava/lang/String;)I
.end method

.method private static native getMemoryConsumption_0(JJ[D[D)V
.end method

.method private static native getMemoryConsumption_1(JILjava/util/List;[D[D)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(JI",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfInt;",
            ">;[D[D)V"
        }
    .end annotation
.end method

.method private static native getMemoryConsumption_2(JIJ[D[D)V
.end method

.method private static native getOutputDetails_0(JJJ)V
.end method

.method private static native getParam_0(JII)J
.end method

.method private static native getParam_1(JI)J
.end method

.method private static native getParam_2(JLjava/lang/String;I)J
.end method

.method private static native getParam_3(JLjava/lang/String;)J
.end method

.method private static native getPerfProfile_0(JJ)J
.end method

.method private static native getUnconnectedOutLayersNames_0(J)Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(J)",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end method

.method private static native getUnconnectedOutLayers_0(J)J
.end method

.method private static native quantize_0(JJIIZ)J
.end method

.method private static native quantize_1(JJII)J
.end method

.method public static readFromModelOptimizer(Ljava/lang/String;Ljava/lang/String;)Lorg/opencv/dnn/Net;
    .locals 1

    .line 63
    new-instance v0, Lorg/opencv/dnn/Net;

    invoke-static {p0, p1}, Lorg/opencv/dnn/Net;->readFromModelOptimizer_0(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public static readFromModelOptimizer(Lorg/opencv/core/MatOfByte;Lorg/opencv/core/MatOfByte;)Lorg/opencv/dnn/Net;
    .locals 3

    .line 80
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p0, p1}, Lorg/opencv/dnn/Net;->readFromModelOptimizer_1(JJ)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method private static native readFromModelOptimizer_0(Ljava/lang/String;Ljava/lang/String;)J
.end method

.method private static native readFromModelOptimizer_1(JJ)J
.end method

.method private static native setHalideScheduler_0(JLjava/lang/String;)V
.end method

.method private static native setInputShape_0(JLjava/lang/String;J)V
.end method

.method private static native setInput_0(JJLjava/lang/String;DDDDD)V
.end method

.method private static native setInput_1(JJLjava/lang/String;D)V
.end method

.method private static native setInput_2(JJLjava/lang/String;)V
.end method

.method private static native setInput_3(JJ)V
.end method

.method private static native setInputsNames_0(JLjava/util/List;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(J",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation
.end method

.method private static native setParam_0(JIIJ)V
.end method

.method private static native setParam_1(JLjava/lang/String;IJ)V
.end method

.method private static native setPreferableBackend_0(JI)V
.end method

.method private static native setPreferableTarget_0(JI)V
.end method


# virtual methods
.method public connect(Ljava/lang/String;Ljava/lang/String;)V
    .locals 2

    .line 213
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/dnn/Net;->connect_0(JLjava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public dump()Ljava/lang/String;
    .locals 2

    .line 107
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Net;->dump_0(J)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public dumpToFile(Ljava/lang/String;)V
    .locals 2

    .line 121
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->dumpToFile_0(JLjava/lang/String;)V

    return-void
.end method

.method public empty()Z
    .locals 2

    .line 93
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Net;->empty_0(J)Z

    move-result v0

    return v0
.end method

.method public enableFusion(Z)V
    .locals 2

    .line 750
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->enableFusion_0(JZ)V

    return-void
.end method

.method public enableWinograd(Z)V
    .locals 2

    .line 764
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->enableWinograd_0(JZ)V

    return-void
.end method

.method protected finalize()V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Throwable;
        }
    .end annotation

    .line 789
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Net;->delete(J)V

    return-void
.end method

.method public forward()Lorg/opencv/core/Mat;
    .locals 3

    .line 270
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v1, v2}, Lorg/opencv/dnn/Net;->forward_1(J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public forward(Ljava/lang/String;)Lorg/opencv/core/Mat;
    .locals 3

    .line 261
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/dnn/Net;->forward_0(JLjava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public forward(Ljava/util/List;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 304
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 305
    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v3, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, v3, v4}, Lorg/opencv/dnn/Net;->forward_3(JJ)V

    .line 306
    invoke-static {v0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 307
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public forward(Ljava/util/List;Ljava/lang/String;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Ljava/lang/String;",
            ")V"
        }
    .end annotation

    .line 292
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 293
    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v3, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, v3, v4, p2}, Lorg/opencv/dnn/Net;->forward_2(JJLjava/lang/String;)V

    .line 294
    invoke-static {v0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 295
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public forward(Ljava/util/List;Ljava/util/List;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 321
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 322
    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v3, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, v3, v4, p2}, Lorg/opencv/dnn/Net;->forward_4(JJLjava/util/List;)V

    .line 323
    invoke-static {v0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 324
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public getFLOPS(ILjava/util/List;)J
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfInt;",
            ">;)J"
        }
    .end annotation

    .line 659
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1, p2}, Lorg/opencv/dnn/Net;->getFLOPS_2(JILjava/util/List;)J

    move-result-wide p1

    return-wide p1
.end method

.method public getFLOPS(ILorg/opencv/core/MatOfInt;)J
    .locals 4

    .line 669
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v2, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p1, v2, v3}, Lorg/opencv/dnn/Net;->getFLOPS_3(JIJ)J

    move-result-wide p1

    return-wide p1
.end method

.method public getFLOPS(Ljava/util/List;)J
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfInt;",
            ">;)J"
        }
    .end annotation

    .line 640
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->getFLOPS_0(JLjava/util/List;)J

    move-result-wide v0

    return-wide v0
.end method

.method public getFLOPS(Lorg/opencv/core/MatOfInt;)J
    .locals 4

    .line 650
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/dnn/Net;->getFLOPS_1(JJ)J

    move-result-wide v0

    return-wide v0
.end method

.method public getInputDetails(Lorg/opencv/core/MatOfFloat;Lorg/opencv/core/MatOfInt;)V
    .locals 6

    .line 379
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/dnn/Net;->getInputDetails_0(JJJ)V

    return-void
.end method

.method public getLayer(I)Lorg/opencv/dnn/Layer;
    .locals 2

    .line 158
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->getLayer_0(JI)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/dnn/Layer;->__fromPtr__(J)Lorg/opencv/dnn/Layer;

    move-result-object p1

    return-object p1
.end method

.method public getLayer(Ljava/lang/String;)Lorg/opencv/dnn/Layer;
    .locals 2
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation

    .line 174
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->getLayer_1(JLjava/lang/String;)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/dnn/Layer;->__fromPtr__(J)Lorg/opencv/dnn/Layer;

    move-result-object p1

    return-object p1
.end method

.method public getLayer(Lorg/opencv/dnn/DictValue;)Lorg/opencv/dnn/Layer;
    .locals 4
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation

    .line 190
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-virtual {p1}, Lorg/opencv/dnn/DictValue;->getNativeObjAddr()J

    move-result-wide v2

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/dnn/Net;->getLayer_2(JJ)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/dnn/Layer;->__fromPtr__(J)Lorg/opencv/dnn/Layer;

    move-result-object p1

    return-object p1
.end method

.method public getLayerId(Ljava/lang/String;)I
    .locals 2

    .line 135
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->getLayerId_0(JLjava/lang/String;)I

    move-result p1

    return p1
.end method

.method public getLayerNames()Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 144
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Net;->getLayerNames_0(J)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method public getLayerTypes(Ljava/util/List;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 682
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->getLayerTypes_0(JLjava/util/List;)V

    return-void
.end method

.method public getLayersCount(Ljava/lang/String;)I
    .locals 2

    .line 696
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->getLayersCount_0(JLjava/lang/String;)I

    move-result p1

    return p1
.end method

.method public getMemoryConsumption(ILjava/util/List;[J[J)V
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I",
            "Ljava/util/List<",
            "Lorg/opencv/core/MatOfInt;",
            ">;[J[J)V"
        }
    .end annotation

    const/4 v0, 0x1

    .line 719
    new-array v7, v0, [D

    .line 720
    new-array v0, v0, [D

    .line 721
    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    move v3, p1

    move-object v4, p2

    move-object v5, v7

    move-object v6, v0

    invoke-static/range {v1 .. v6}, Lorg/opencv/dnn/Net;->getMemoryConsumption_1(JILjava/util/List;[D[D)V

    const/4 p1, 0x0

    if-eqz p3, :cond_0

    .line 722
    aget-wide v1, v7, p1

    double-to-long v1, v1

    aput-wide v1, p3, p1

    :cond_0
    if-eqz p4, :cond_1

    .line 723
    aget-wide p2, v0, p1

    double-to-long p2, p2

    aput-wide p2, p4, p1

    :cond_1
    return-void
.end method

.method public getMemoryConsumption(ILorg/opencv/core/MatOfInt;[J[J)V
    .locals 9

    const/4 v0, 0x1

    .line 733
    new-array v8, v0, [D

    .line 734
    new-array v0, v0, [D

    .line 735
    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    move v3, p1

    move-object v6, v8

    move-object v7, v0

    invoke-static/range {v1 .. v7}, Lorg/opencv/dnn/Net;->getMemoryConsumption_2(JIJ[D[D)V

    const/4 p1, 0x0

    if-eqz p3, :cond_0

    .line 736
    aget-wide v1, v8, p1

    double-to-long v1, v1

    aput-wide v1, p3, p1

    :cond_0
    if-eqz p4, :cond_1

    .line 737
    aget-wide p2, v0, p1

    double-to-long p2, p2

    aput-wide p2, p4, p1

    :cond_1
    return-void
.end method

.method public getMemoryConsumption(Lorg/opencv/core/MatOfInt;[J[J)V
    .locals 8

    const/4 v0, 0x1

    .line 706
    new-array v7, v0, [D

    .line 707
    new-array v0, v0, [D

    .line 708
    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v5, v7

    move-object v6, v0

    invoke-static/range {v1 .. v6}, Lorg/opencv/dnn/Net;->getMemoryConsumption_0(JJ[D[D)V

    const/4 p1, 0x0

    if-eqz p2, :cond_0

    .line 709
    aget-wide v1, v7, p1

    double-to-long v1, v1

    aput-wide v1, p2, p1

    :cond_0
    if-eqz p3, :cond_1

    .line 710
    aget-wide v1, v0, p1

    double-to-long v0, v1

    aput-wide v0, p3, p1

    :cond_1
    return-void
.end method

.method public getNativeObjAddr()J
    .locals 2

    .line 36
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    return-wide v0
.end method

.method public getOutputDetails(Lorg/opencv/core/MatOfFloat;Lorg/opencv/core/MatOfInt;)V
    .locals 6

    .line 395
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static/range {v0 .. v5}, Lorg/opencv/dnn/Net;->getOutputDetails_0(JJJ)V

    return-void
.end method

.method public getParam(I)Lorg/opencv/core/Mat;
    .locals 3

    .line 569
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/dnn/Net;->getParam_1(JI)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public getParam(II)Lorg/opencv/core/Mat;
    .locals 3

    .line 559
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v1, v2, p1, p2}, Lorg/opencv/dnn/Net;->getParam_0(JII)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public getParam(Ljava/lang/String;)Lorg/opencv/core/Mat;
    .locals 3

    .line 582
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/dnn/Net;->getParam_3(JLjava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public getParam(Ljava/lang/String;I)Lorg/opencv/core/Mat;
    .locals 3

    .line 578
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v1, v2, p1, p2}, Lorg/opencv/dnn/Net;->getParam_2(JLjava/lang/String;I)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public getPerfProfile(Lorg/opencv/core/MatOfDouble;)J
    .locals 4

    .line 783
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/dnn/Net;->getPerfProfile_0(JJ)J

    move-result-wide v0

    return-wide v0
.end method

.method public getUnconnectedOutLayers()Lorg/opencv/core/MatOfInt;
    .locals 2

    .line 597
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Net;->getUnconnectedOutLayers_0(J)J

    move-result-wide v0

    invoke-static {v0, v1}, Lorg/opencv/core/MatOfInt;->fromNativeAddr(J)Lorg/opencv/core/MatOfInt;

    move-result-object v0

    return-object v0
.end method

.method public getUnconnectedOutLayersNames()Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 612
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1}, Lorg/opencv/dnn/Net;->getUnconnectedOutLayersNames_0(J)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method public quantize(Ljava/util/List;II)Lorg/opencv/dnn/Net;
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;II)",
            "Lorg/opencv/dnn/Net;"
        }
    .end annotation

    .line 362
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 363
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    move v5, p2

    move v6, p3

    invoke-static/range {v1 .. v6}, Lorg/opencv/dnn/Net;->quantize_1(JJII)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public quantize(Ljava/util/List;IIZ)Lorg/opencv/dnn/Net;
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;IIZ)",
            "Lorg/opencv/dnn/Net;"
        }
    .end annotation

    .line 349
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 350
    new-instance v0, Lorg/opencv/dnn/Net;

    iget-wide v1, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v3, p1, Lorg/opencv/core/Mat;->nativeObj:J

    move v5, p2

    move v6, p3

    move v7, p4

    invoke-static/range {v1 .. v7}, Lorg/opencv/dnn/Net;->quantize_0(JJIIZ)J

    move-result-wide p1

    invoke-direct {v0, p1, p2}, Lorg/opencv/dnn/Net;-><init>(J)V

    return-object v0
.end method

.method public setHalideScheduler(Ljava/lang/String;)V
    .locals 2

    .line 413
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->setHalideScheduler_0(JLjava/lang/String;)V

    return-void
.end method

.method public setInput(Lorg/opencv/core/Mat;)V
    .locals 4

    .line 516
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3}, Lorg/opencv/dnn/Net;->setInput_3(JJ)V

    return-void
.end method

.method public setInput(Lorg/opencv/core/Mat;Ljava/lang/String;)V
    .locals 4

    .line 503
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, v2, v3, p2}, Lorg/opencv/dnn/Net;->setInput_2(JJLjava/lang/String;)V

    return-void
.end method

.method public setInput(Lorg/opencv/core/Mat;Ljava/lang/String;D)V
    .locals 7

    .line 489
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v2, p1, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v4, p2

    move-wide v5, p3

    invoke-static/range {v0 .. v6}, Lorg/opencv/dnn/Net;->setInput_1(JJLjava/lang/String;D)V

    return-void
.end method

.method public setInput(Lorg/opencv/core/Mat;Ljava/lang/String;DLorg/opencv/core/Scalar;)V
    .locals 16

    move-object/from16 v0, p0

    move-object/from16 v1, p5

    .line 474
    iget-wide v2, v0, Lorg/opencv/dnn/Net;->nativeObj:J

    move-object/from16 v4, p1

    iget-wide v4, v4, Lorg/opencv/core/Mat;->nativeObj:J

    iget-object v6, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v7, 0x0

    aget-wide v8, v6, v7

    iget-object v6, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v7, 0x1

    aget-wide v10, v6, v7

    iget-object v6, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v7, 0x2

    aget-wide v12, v6, v7

    iget-object v1, v1, Lorg/opencv/core/Scalar;->val:[D

    const/4 v6, 0x3

    aget-wide v14, v1, v6

    move-wide v1, v2

    move-wide v3, v4

    move-object/from16 v5, p2

    move-wide/from16 v6, p3

    invoke-static/range {v1 .. v15}, Lorg/opencv/dnn/Net;->setInput_0(JJLjava/lang/String;DDDDD)V

    return-void
.end method

.method public setInputShape(Ljava/lang/String;Lorg/opencv/core/MatOfInt;)V
    .locals 4

    .line 246
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v2, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v0, v1, p1, v2, v3}, Lorg/opencv/dnn/Net;->setInputShape_0(JLjava/lang/String;J)V

    return-void
.end method

.method public setInputsNames(Ljava/util/List;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 231
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->setInputsNames_0(JLjava/util/List;)V

    return-void
.end method

.method public setParam(IILorg/opencv/core/Mat;)V
    .locals 6

    .line 534
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v4, p3, Lorg/opencv/core/Mat;->nativeObj:J

    move v2, p1

    move v3, p2

    invoke-static/range {v0 .. v5}, Lorg/opencv/dnn/Net;->setParam_0(JIIJ)V

    return-void
.end method

.method public setParam(Ljava/lang/String;ILorg/opencv/core/Mat;)V
    .locals 6

    .line 543
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    iget-wide v4, p3, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v2, p1

    move v3, p2

    invoke-static/range {v0 .. v5}, Lorg/opencv/dnn/Net;->setParam_1(JLjava/lang/String;IJ)V

    return-void
.end method

.method public setPreferableBackend(I)V
    .locals 2

    .line 427
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->setPreferableBackend_0(JI)V

    return-void
.end method

.method public setPreferableTarget(I)V
    .locals 2

    .line 453
    iget-wide v0, p0, Lorg/opencv/dnn/Net;->nativeObj:J

    invoke-static {v0, v1, p1}, Lorg/opencv/dnn/Net;->setPreferableTarget_0(JI)V

    return-void
.end method
