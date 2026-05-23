.class public final Landroidx/camera/core/impl/utils/ContextUtil;
.super Ljava/lang/Object;
.source "ContextUtil.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/utils/ContextUtil$Api30Impl;
    }
.end annotation


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 90
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static getApplicationContext(Landroid/content/Context;)Landroid/content/Context;
    .locals 3

    .line 39
    invoke-virtual {p0}, Landroid/content/Context;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    .line 40
    sget v1, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v2, 0x1e

    if-lt v1, v2, :cond_0

    .line 41
    invoke-static {p0}, Landroidx/camera/core/impl/utils/ContextUtil$Api30Impl;->getAttributionTag(Landroid/content/Context;)Ljava/lang/String;

    move-result-object p0

    if-eqz p0, :cond_0

    .line 44
    invoke-static {v0, p0}, Landroidx/camera/core/impl/utils/ContextUtil$Api30Impl;->createAttributionContext(Landroid/content/Context;Ljava/lang/String;)Landroid/content/Context;

    move-result-object p0

    return-object p0

    :cond_0
    return-object v0
.end method

.method public static getApplicationFromContext(Landroid/content/Context;)Landroid/app/Application;
    .locals 1

    .line 78
    invoke-static {p0}, Landroidx/camera/core/impl/utils/ContextUtil;->getApplicationContext(Landroid/content/Context;)Landroid/content/Context;

    move-result-object p0

    .line 79
    :goto_0
    instance-of v0, p0, Landroid/content/ContextWrapper;

    if-eqz v0, :cond_1

    .line 80
    instance-of v0, p0, Landroid/app/Application;

    if-eqz v0, :cond_0

    .line 81
    check-cast p0, Landroid/app/Application;

    goto :goto_1

    .line 84
    :cond_0
    check-cast p0, Landroid/content/ContextWrapper;

    invoke-static {p0}, Landroidx/camera/core/impl/utils/ContextUtil;->getBaseContext(Landroid/content/ContextWrapper;)Landroid/content/Context;

    move-result-object p0

    goto :goto_0

    :cond_1
    const/4 p0, 0x0

    :goto_1
    return-object p0
.end method

.method public static getBaseContext(Landroid/content/ContextWrapper;)Landroid/content/Context;
    .locals 3

    .line 55
    invoke-virtual {p0}, Landroid/content/ContextWrapper;->getBaseContext()Landroid/content/Context;

    move-result-object v0

    .line 56
    sget v1, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v2, 0x1e

    if-lt v1, v2, :cond_0

    .line 57
    invoke-static {p0}, Landroidx/camera/core/impl/utils/ContextUtil$Api30Impl;->getAttributionTag(Landroid/content/Context;)Ljava/lang/String;

    move-result-object p0

    if-eqz p0, :cond_0

    .line 60
    invoke-static {v0, p0}, Landroidx/camera/core/impl/utils/ContextUtil$Api30Impl;->createAttributionContext(Landroid/content/Context;Ljava/lang/String;)Landroid/content/Context;

    move-result-object p0

    return-object p0

    :cond_0
    return-object v0
.end method
