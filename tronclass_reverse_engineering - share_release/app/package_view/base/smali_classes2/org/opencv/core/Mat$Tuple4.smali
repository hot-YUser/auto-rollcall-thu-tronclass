.class public Lorg/opencv/core/Mat$Tuple4;
.super Ljava/lang/Object;
.source "Mat.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/opencv/core/Mat;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "Tuple4"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;"
    }
.end annotation


# instance fields
.field private final _0:Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "TT;"
        }
    .end annotation
.end field

.field private final _1:Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "TT;"
        }
    .end annotation
.end field

.field private final _2:Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "TT;"
        }
    .end annotation
.end field

.field private final _3:Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "TT;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(TT;TT;TT;TT;)V"
        }
    .end annotation

    .line 1229
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 1230
    iput-object p1, p0, Lorg/opencv/core/Mat$Tuple4;->_0:Ljava/lang/Object;

    .line 1231
    iput-object p2, p0, Lorg/opencv/core/Mat$Tuple4;->_1:Ljava/lang/Object;

    .line 1232
    iput-object p3, p0, Lorg/opencv/core/Mat$Tuple4;->_2:Ljava/lang/Object;

    .line 1233
    iput-object p4, p0, Lorg/opencv/core/Mat$Tuple4;->_3:Ljava/lang/Object;

    return-void
.end method

.method static synthetic access$500(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;
    .locals 0

    .line 1228
    iget-object p0, p0, Lorg/opencv/core/Mat$Tuple4;->_0:Ljava/lang/Object;

    return-object p0
.end method

.method static synthetic access$600(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;
    .locals 0

    .line 1228
    iget-object p0, p0, Lorg/opencv/core/Mat$Tuple4;->_1:Ljava/lang/Object;

    return-object p0
.end method

.method static synthetic access$700(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;
    .locals 0

    .line 1228
    iget-object p0, p0, Lorg/opencv/core/Mat$Tuple4;->_2:Ljava/lang/Object;

    return-object p0
.end method

.method static synthetic access$800(Lorg/opencv/core/Mat$Tuple4;)Ljava/lang/Object;
    .locals 0

    .line 1228
    iget-object p0, p0, Lorg/opencv/core/Mat$Tuple4;->_3:Ljava/lang/Object;

    return-object p0
.end method


# virtual methods
.method public get_0()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TT;"
        }
    .end annotation

    .line 1237
    iget-object v0, p0, Lorg/opencv/core/Mat$Tuple4;->_0:Ljava/lang/Object;

    return-object v0
.end method

.method public get_1()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TT;"
        }
    .end annotation

    .line 1241
    iget-object v0, p0, Lorg/opencv/core/Mat$Tuple4;->_1:Ljava/lang/Object;

    return-object v0
.end method

.method public get_2()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TT;"
        }
    .end annotation

    .line 1245
    iget-object v0, p0, Lorg/opencv/core/Mat$Tuple4;->_2:Ljava/lang/Object;

    return-object v0
.end method

.method public get_3()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TT;"
        }
    .end annotation

    .line 1249
    iget-object v0, p0, Lorg/opencv/core/Mat$Tuple4;->_3:Ljava/lang/Object;

    return-object v0
.end method
