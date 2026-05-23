.class public abstract Luk/co/senab/photoview/scrollerproxy/ScrollerProxy;
.super Ljava/lang/Object;
.source "ScrollerProxy.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 22
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static getScroller(Landroid/content/Context;)Luk/co/senab/photoview/scrollerproxy/ScrollerProxy;
    .locals 1

    .line 30
    new-instance v0, Luk/co/senab/photoview/scrollerproxy/IcsScroller;

    invoke-direct {v0, p0}, Luk/co/senab/photoview/scrollerproxy/IcsScroller;-><init>(Landroid/content/Context;)V

    return-object v0
.end method


# virtual methods
.method public abstract computeScrollOffset()Z
.end method

.method public abstract fling(IIIIIIIIII)V
.end method

.method public abstract forceFinished(Z)V
.end method

.method public abstract getCurrX()I
.end method

.method public abstract getCurrY()I
.end method

.method public abstract isFinished()Z
.end method
