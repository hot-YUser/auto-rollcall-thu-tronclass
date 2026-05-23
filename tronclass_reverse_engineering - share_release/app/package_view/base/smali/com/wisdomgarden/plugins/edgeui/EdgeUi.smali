.class public Lcom/wisdomgarden/plugins/edgeui/EdgeUi;
.super Ljava/lang/Object;
.source "EdgeUi.java"


# static fields
.field private static final TAG:Ljava/lang/String; = "EdgeUI"


# instance fields
.field private final decorView:Landroid/view/View;

.field private final uiWindow:Landroid/view/Window;


# direct methods
.method public constructor <init>(Landroid/view/Window;Landroid/view/View;)V
    .locals 0

    .line 18
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 19
    iput-object p1, p0, Lcom/wisdomgarden/plugins/edgeui/EdgeUi;->uiWindow:Landroid/view/Window;

    .line 20
    iput-object p2, p0, Lcom/wisdomgarden/plugins/edgeui/EdgeUi;->decorView:Landroid/view/View;

    return-void
.end method

.method private parseColorSafe(Ljava/lang/String;)I
    .locals 0

    .line 25
    :try_start_0
    invoke-static {p1}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return p1

    :catch_0
    const/4 p1, -0x1

    return p1
.end method


# virtual methods
.method public setEdgeUiStyle(Ljava/lang/String;)Z
    .locals 6

    .line 32
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1e

    const/4 v2, 0x1

    const-string v3, "EdgeUI"

    if-ge v0, v1, :cond_0

    .line 33
    const-string p1, "Android version not supported"

    invoke-static {v3, p1}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    return v2

    .line 36
    :cond_0
    invoke-direct {p0, p1}, Lcom/wisdomgarden/plugins/edgeui/EdgeUi;->parseColorSafe(Ljava/lang/String;)I

    move-result p1

    const/4 v0, 0x0

    .line 39
    :try_start_0
    iget-object v1, p0, Lcom/wisdomgarden/plugins/edgeui/EdgeUi;->decorView:Landroid/view/View;

    invoke-virtual {v1}, Landroid/view/View;->getWindowInsetsController()Landroid/view/WindowInsetsController;

    move-result-object v1

    if-nez v1, :cond_1

    .line 41
    const-string p1, "WindowInsetsController is null"

    invoke-static {v3, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    return v0

    .line 47
    :cond_1
    sget v4, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v5, 0x23

    if-ge v4, v5, :cond_2

    .line 48
    iget-object v4, p0, Lcom/wisdomgarden/plugins/edgeui/EdgeUi;->uiWindow:Landroid/view/Window;

    invoke-virtual {v4, p1}, Landroid/view/Window;->setStatusBarColor(I)V

    .line 51
    :cond_2
    iget-object v4, p0, Lcom/wisdomgarden/plugins/edgeui/EdgeUi;->decorView:Landroid/view/View;

    invoke-virtual {v4, p1}, Landroid/view/View;->setBackgroundColor(I)V

    const/4 v4, -0x1

    const/16 v5, 0x8

    if-ne p1, v4, :cond_3

    .line 54
    const-string p1, "set with light"

    invoke-static {v3, p1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 55
    invoke-interface {v1, v5, v5}, Landroid/view/WindowInsetsController;->setSystemBarsAppearance(II)V

    goto :goto_0

    .line 60
    :cond_3
    const-string p1, "set with dark"

    invoke-static {v3, p1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 61
    invoke-interface {v1, v0, v5}, Landroid/view/WindowInsetsController;->setSystemBarsAppearance(II)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    :goto_0
    return v2

    :catch_0
    move-exception p1

    .line 65
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Failed to set Edge UI style: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v3, v1, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    return v0
.end method
