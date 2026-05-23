.class public Lcom/getcapacitor/util/HostMask$Simple;
.super Ljava/lang/Object;
.source "HostMask.java"

# interfaces
.implements Lcom/getcapacitor/util/HostMask;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/getcapacitor/util/HostMask;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "Simple"
.end annotation


# instance fields
.field private final maskParts:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method private constructor <init>(Ljava/util/List;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 30
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    if-eqz p1, :cond_0

    .line 34
    iput-object p1, p0, Lcom/getcapacitor/util/HostMask$Simple;->maskParts:Ljava/util/List;

    return-void

    .line 32
    :cond_0
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string v0, "Mask parts can not be null"

    invoke-direct {p1, v0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method static parse(Ljava/lang/String;)Lcom/getcapacitor/util/HostMask$Simple;
    .locals 1

    .line 38
    invoke-static {p0}, Lcom/getcapacitor/util/HostMask$Util;->splitAndReverse(Ljava/lang/String;)Ljava/util/List;

    move-result-object p0

    .line 39
    new-instance v0, Lcom/getcapacitor/util/HostMask$Simple;

    invoke-direct {v0, p0}, Lcom/getcapacitor/util/HostMask$Simple;-><init>(Ljava/util/List;)V

    return-object v0
.end method


# virtual methods
.method public matches(Ljava/lang/String;)Z
    .locals 5

    const/4 v0, 0x0

    if-nez p1, :cond_0

    return v0

    .line 48
    :cond_0
    invoke-static {p1}, Lcom/getcapacitor/util/HostMask$Util;->splitAndReverse(Ljava/lang/String;)Ljava/util/List;

    move-result-object p1

    .line 49
    invoke-interface {p1}, Ljava/util/List;->size()I

    move-result v1

    .line 50
    iget-object v2, p0, Lcom/getcapacitor/util/HostMask$Simple;->maskParts:Ljava/util/List;

    invoke-interface {v2}, Ljava/util/List;->size()I

    move-result v2

    if-eq v1, v2, :cond_1

    return v0

    .line 55
    :cond_1
    invoke-static {v1, v2}, Ljava/lang/Math;->min(II)I

    move-result v1

    move v2, v0

    :goto_0
    if-ge v2, v1, :cond_3

    .line 58
    iget-object v3, p0, Lcom/getcapacitor/util/HostMask$Simple;->maskParts:Ljava/util/List;

    invoke-interface {v3, v2}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/lang/String;

    .line 59
    invoke-interface {p1, v2}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Ljava/lang/String;

    .line 60
    invoke-static {v3, v4}, Lcom/getcapacitor/util/HostMask$Util;->matches(Ljava/lang/String;Ljava/lang/String;)Z

    move-result v3

    if-nez v3, :cond_2

    return v0

    :cond_2
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_3
    const/4 p1, 0x1

    return p1
.end method
