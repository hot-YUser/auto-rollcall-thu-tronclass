.class public Lcom/getcapacitor/ui/Toast;
.super Ljava/lang/Object;
.source "Toast.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 10
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static show(Landroid/content/Context;Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x1

    .line 13
    invoke-static {p0, p1, v0}, Lcom/getcapacitor/ui/Toast;->show(Landroid/content/Context;Ljava/lang/String;I)V

    return-void
.end method

.method public static show(Landroid/content/Context;Ljava/lang/String;I)V
    .locals 2

    .line 17
    new-instance v0, Landroid/os/Handler;

    invoke-static {}, Landroid/os/Looper;->getMainLooper()Landroid/os/Looper;

    move-result-object v1

    invoke-direct {v0, v1}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    new-instance v1, Lcom/getcapacitor/ui/Toast$1;

    invoke-direct {v1, p0, p1, p2}, Lcom/getcapacitor/ui/Toast$1;-><init>(Landroid/content/Context;Ljava/lang/String;I)V

    invoke-virtual {v0, v1}, Landroid/os/Handler;->post(Ljava/lang/Runnable;)Z

    return-void
.end method
