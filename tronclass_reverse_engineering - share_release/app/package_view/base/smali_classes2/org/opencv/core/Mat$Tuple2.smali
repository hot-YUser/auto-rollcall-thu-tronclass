.class public Lorg/opencv/core/Mat$Tuple2;
.super Ljava/lang/Object;
.source "Mat.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/opencv/core/Mat;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "Tuple2"
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


# direct methods
.method public constructor <init>(Ljava/lang/Object;Ljava/lang/Object;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(TT;TT;)V"
        }
    .end annotation

    .line 1187
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 1188
    iput-object p1, p0, Lorg/opencv/core/Mat$Tuple2;->_0:Ljava/lang/Object;

    .line 1189
    iput-object p2, p0, Lorg/opencv/core/Mat$Tuple2;->_1:Ljava/lang/Object;

    return-void
.end method

.method static synthetic access$000(Lorg/opencv/core/Mat$Tuple2;)Ljava/lang/Object;
    .locals 0

    .line 1186
    iget-object p0, p0, Lorg/opencv/core/Mat$Tuple2;->_0:Ljava/lang/Object;

    return-object p0
.end method

.method static synthetic access$100(Lorg/opencv/core/Mat$Tuple2;)Ljava/lang/Object;
    .locals 0

    .line 1186
    iget-object p0, p0, Lorg/opencv/core/Mat$Tuple2;->_1:Ljava/lang/Object;

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

    .line 1193
    iget-object v0, p0, Lorg/opencv/core/Mat$Tuple2;->_0:Ljava/lang/Object;

    return-object v0
.end method

.method public get_1()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TT;"
        }
    .end annotation

    .line 1197
    iget-object v0, p0, Lorg/opencv/core/Mat$Tuple2;->_1:Ljava/lang/Object;

    return-object v0
.end method
