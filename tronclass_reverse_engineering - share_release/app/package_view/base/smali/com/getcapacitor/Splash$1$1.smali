.class Lcom/getcapacitor/Splash$1$1;
.super Ljava/lang/Object;
.source "Splash.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/Splash$1;->onAnimationEnd(Landroid/animation/Animator;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/Splash$1;


# direct methods
.method constructor <init>(Lcom/getcapacitor/Splash$1;)V
    .locals 0

    .line 250
    iput-object p1, p0, Lcom/getcapacitor/Splash$1$1;->this$0:Lcom/getcapacitor/Splash$1;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 253
    iget-object v0, p0, Lcom/getcapacitor/Splash$1$1;->this$0:Lcom/getcapacitor/Splash$1;

    iget-object v0, v0, Lcom/getcapacitor/Splash$1;->val$a:Landroid/app/Activity;

    iget-object v1, p0, Lcom/getcapacitor/Splash$1$1;->this$0:Lcom/getcapacitor/Splash$1;

    iget v1, v1, Lcom/getcapacitor/Splash$1;->val$fadeOutDuration:I

    iget-object v2, p0, Lcom/getcapacitor/Splash$1$1;->this$0:Lcom/getcapacitor/Splash$1;

    iget-boolean v2, v2, Lcom/getcapacitor/Splash$1;->val$isLaunchSplash:Z

    invoke-static {v0, v1, v2}, Lcom/getcapacitor/Splash;->hide(Landroid/content/Context;IZ)V

    .line 255
    iget-object v0, p0, Lcom/getcapacitor/Splash$1$1;->this$0:Lcom/getcapacitor/Splash$1;

    iget-object v0, v0, Lcom/getcapacitor/Splash$1;->val$splashListener:Lcom/getcapacitor/Splash$SplashListener;

    if-eqz v0, :cond_0

    .line 256
    iget-object v0, p0, Lcom/getcapacitor/Splash$1$1;->this$0:Lcom/getcapacitor/Splash$1;

    iget-object v0, v0, Lcom/getcapacitor/Splash$1;->val$splashListener:Lcom/getcapacitor/Splash$SplashListener;

    invoke-interface {v0}, Lcom/getcapacitor/Splash$SplashListener;->completed()V

    :cond_0
    return-void
.end method
