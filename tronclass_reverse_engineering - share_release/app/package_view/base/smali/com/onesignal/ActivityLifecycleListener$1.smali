.class Lcom/onesignal/ActivityLifecycleListener$1;
.super Ljava/lang/Object;
.source "ActivityLifecycleListener.java"

# interfaces
.implements Landroid/content/ComponentCallbacks;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/ActivityLifecycleListener;->registerActivityLifecycleCallbacks(Landroid/app/Application;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 61
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onConfigurationChanged(Landroid/content/res/Configuration;)V
    .locals 2

    .line 64
    invoke-static {}, Lcom/onesignal/ActivityLifecycleListener;->access$000()Lcom/onesignal/ActivityLifecycleHandler;

    move-result-object v0

    invoke-static {}, Lcom/onesignal/ActivityLifecycleListener;->access$000()Lcom/onesignal/ActivityLifecycleHandler;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/ActivityLifecycleHandler;->getCurActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v0, p1, v1}, Lcom/onesignal/ActivityLifecycleHandler;->onConfigurationChanged(Landroid/content/res/Configuration;Landroid/app/Activity;)V

    return-void
.end method

.method public onLowMemory()V
    .locals 0

    return-void
.end method
