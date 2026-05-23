.class public final Landroidx/core/os/MessageCompat;
.super Ljava/lang/Object;
.source "MessageCompat.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/core/os/MessageCompat$Api22Impl;
    }
.end annotation


# static fields
.field private static sTryIsAsynchronous:Z = true

.field private static sTrySetAsynchronous:Z = true


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 115
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static isAsynchronous(Landroid/os/Message;)Z
    .locals 0

    .line 101
    invoke-static {p0}, Landroidx/core/os/MessageCompat$Api22Impl;->isAsynchronous(Landroid/os/Message;)Z

    move-result p0

    return p0
.end method

.method public static setAsynchronous(Landroid/os/Message;Z)V
    .locals 0

    .line 75
    invoke-static {p0, p1}, Landroidx/core/os/MessageCompat$Api22Impl;->setAsynchronous(Landroid/os/Message;Z)V

    return-void
.end method
