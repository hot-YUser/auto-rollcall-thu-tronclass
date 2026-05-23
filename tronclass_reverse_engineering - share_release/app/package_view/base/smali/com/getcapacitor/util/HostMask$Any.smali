.class public Lcom/getcapacitor/util/HostMask$Any;
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
    name = "Any"
.end annotation


# instance fields
.field private final masks:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "+",
            "Lcom/getcapacitor/util/HostMask;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "+",
            "Lcom/getcapacitor/util/HostMask;",
            ">;)V"
        }
    .end annotation

    .line 72
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 73
    iput-object p1, p0, Lcom/getcapacitor/util/HostMask$Any;->masks:Ljava/util/List;

    return-void
.end method

.method static varargs parse([Ljava/lang/String;)Lcom/getcapacitor/util/HostMask$Any;
    .locals 4

    .line 87
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 88
    array-length v1, p0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, p0, v2

    .line 89
    invoke-static {v3}, Lcom/getcapacitor/util/HostMask$Simple;->parse(Ljava/lang/String;)Lcom/getcapacitor/util/HostMask$Simple;

    move-result-object v3

    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 91
    :cond_0
    new-instance p0, Lcom/getcapacitor/util/HostMask$Any;

    invoke-direct {p0, v0}, Lcom/getcapacitor/util/HostMask$Any;-><init>(Ljava/util/List;)V

    return-object p0
.end method


# virtual methods
.method public matches(Ljava/lang/String;)Z
    .locals 2

    .line 78
    iget-object v0, p0, Lcom/getcapacitor/util/HostMask$Any;->masks:Ljava/util/List;

    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :cond_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/getcapacitor/util/HostMask;

    .line 79
    invoke-interface {v1, p1}, Lcom/getcapacitor/util/HostMask;->matches(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    const/4 p1, 0x1

    return p1

    :cond_1
    const/4 p1, 0x0

    return p1
.end method
