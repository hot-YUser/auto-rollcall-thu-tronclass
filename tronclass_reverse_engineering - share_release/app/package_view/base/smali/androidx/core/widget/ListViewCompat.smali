.class public final Landroidx/core/widget/ListViewCompat;
.super Ljava/lang/Object;
.source "ListViewCompat.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/core/widget/ListViewCompat$Api19Impl;
    }
.end annotation


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 92
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static canScrollList(Landroid/widget/ListView;I)Z
    .locals 0

    .line 71
    invoke-static {p0, p1}, Landroidx/core/widget/ListViewCompat$Api19Impl;->canScrollList(Landroid/widget/ListView;I)Z

    move-result p0

    return p0
.end method

.method public static scrollListBy(Landroid/widget/ListView;I)V
    .locals 0

    .line 41
    invoke-static {p0, p1}, Landroidx/core/widget/ListViewCompat$Api19Impl;->scrollListBy(Landroid/widget/ListView;I)V

    return-void
.end method
