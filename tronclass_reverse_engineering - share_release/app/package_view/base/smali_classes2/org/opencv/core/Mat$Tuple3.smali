.class public Lorg/opencv/core/Mat$Tuple3;
.super Ljava/lang/Object;
.source "Mat.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/opencv/core/Mat;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "Tuple3"
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


# direct methods
.method public constructor <init>(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(TT;TT;TT;)V"
        }
    .end annotation

    .line 1205
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 1206
    iput-object p1, p0, Lorg/opencv/core/Mat$Tuple3;->_0:Ljava/lang/Object;

    .line 1207
    iput-object p2, p0, Lorg/opencv/core/Mat$Tuple3;->_1:Ljava/lang/Object;

    .line 1208
    iput-object p3, p0, Lorg/opencv/core/Mat$Tuple3;->_2:Ljava/lang/Object;

    return-void
.end method

.method static synthetic access$200(Lorg/opencv/core/Mat$Tuple3;)Ljava/lang/Object;
    .locals 0

    .line 1204
    iget-object p0, p0, Lorg/opencv/core/Mat$Tuple3;->_0:Ljava/lang/Object;

    return-object p0
.end method

.method static synthetic access$300(Lorg/opencv/core/Mat$Tuple3;)Ljava/lang/Object;
    .locals 0

    .line 1204
    iget-object p0, p0, Lorg/opencv/core/Mat$Tuple3;->_1:Ljava/lang/Object;

    return-object p0
.end method

.method static synthetic access$400(Lorg/opencv/core/Mat$Tuple3;)Ljava/lang/Object;
    .locals 0

    .line 1204
    iget-object p0, p0, Lorg/opencv/core/Mat$Tuple3;->_2:Ljava/lang/Object;

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

    .line 1212
    iget-object v0, p0, Lorg/opencv/core/Mat$Tuple3;->_0:Ljava/lang/Object;

    return-object v0
.end method

.method public get_1()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TT;"
        }
    .end annotation

    .line 1216
    iget-object v0, p0, Lorg/opencv/core/Mat$Tuple3;->_1:Ljava/lang/Object;

    return-object v0
.end method

.method public get_2()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TT;"
        }
    .end annotation

    .line 1220
    iget-object v0, p0, Lorg/opencv/core/Mat$Tuple3;->_2:Ljava/lang/Object;

    return-object v0
.end method
