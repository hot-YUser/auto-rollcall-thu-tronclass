.class Lcom/getcapacitor/Splash$1;
.super Ljava/lang/Object;
.source "Splash.java"

# interfaces
.implements Landroid/animation/Animator$AnimatorListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/Splash;->show(Landroid/app/Activity;IIIZLcom/getcapacitor/Splash$SplashListener;ZLcom/getcapacitor/CapConfig;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$a:Landroid/app/Activity;

.field final synthetic val$autoHide:Z

.field final synthetic val$fadeOutDuration:I

.field final synthetic val$isLaunchSplash:Z

.field final synthetic val$showDuration:I

.field final synthetic val$splashListener:Lcom/getcapacitor/Splash$SplashListener;


# direct methods
.method constructor <init>(ZLandroid/app/Activity;IZLcom/getcapacitor/Splash$SplashListener;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 244
    iput-boolean p1, p0, Lcom/getcapacitor/Splash$1;->val$autoHide:Z

    iput-object p2, p0, Lcom/getcapacitor/Splash$1;->val$a:Landroid/app/Activity;

    iput p3, p0, Lcom/getcapacitor/Splash$1;->val$fadeOutDuration:I

    iput-boolean p4, p0, Lcom/getcapacitor/Splash$1;->val$isLaunchSplash:Z

    iput-object p5, p0, Lcom/getcapacitor/Splash$1;->val$splashListener:Lcom/getcapacitor/Splash$SplashListener;

    iput p6, p0, Lcom/getcapacitor/Splash$1;->val$showDuration:I

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onAnimationCancel(Landroid/animation/Animator;)V
    .locals 0

    return-void
.end method

.method public onAnimationEnd(Landroid/animation/Animator;)V
    .locals 3

    const/4 p1, 0x1

    .line 247
    invoke-static {p1}, Lcom/getcapacitor/Splash;->access$002(Z)Z

    .line 249
    iget-boolean p1, p0, Lcom/getcapacitor/Splash$1;->val$autoHide:Z

    if-eqz p1, :cond_0

    .line 250
    new-instance p1, Landroid/os/Handler;

    invoke-direct {p1}, Landroid/os/Handler;-><init>()V

    new-instance v0, Lcom/getcapacitor/Splash$1$1;

    invoke-direct {v0, p0}, Lcom/getcapacitor/Splash$1$1;-><init>(Lcom/getcapacitor/Splash$1;)V

    iget v1, p0, Lcom/getcapacitor/Splash$1;->val$showDuration:I

    int-to-long v1, v1

    invoke-virtual {p1, v0, v1, v2}, Landroid/os/Handler;->postDelayed(Ljava/lang/Runnable;J)Z

    goto :goto_0

    .line 262
    :cond_0
    iget-object p1, p0, Lcom/getcapacitor/Splash$1;->val$splashListener:Lcom/getcapacitor/Splash$SplashListener;

    if-eqz p1, :cond_1

    .line 263
    invoke-interface {p1}, Lcom/getcapacitor/Splash$SplashListener;->completed()V

    :cond_1
    :goto_0
    return-void
.end method

.method public onAnimationRepeat(Landroid/animation/Animator;)V
    .locals 0

    return-void
.end method

.method public onAnimationStart(Landroid/animation/Animator;)V
    .locals 0

    return-void
.end method
