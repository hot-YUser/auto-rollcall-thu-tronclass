.class Lcom/getcapacitor/Splash$2;
.super Ljava/lang/Object;
.source "Splash.java"

# interfaces
.implements Ljava/lang/Runnable;


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

.field final synthetic val$config:Lcom/getcapacitor/CapConfig;

.field final synthetic val$fadeInDuration:I

.field final synthetic val$listener:Landroid/animation/Animator$AnimatorListener;


# direct methods
.method constructor <init>(Landroid/app/Activity;ILandroid/animation/Animator$AnimatorListener;Lcom/getcapacitor/CapConfig;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 278
    iput-object p1, p0, Lcom/getcapacitor/Splash$2;->val$a:Landroid/app/Activity;

    iput p2, p0, Lcom/getcapacitor/Splash$2;->val$fadeInDuration:I

    iput-object p3, p0, Lcom/getcapacitor/Splash$2;->val$listener:Landroid/animation/Animator$AnimatorListener;

    iput-object p4, p0, Lcom/getcapacitor/Splash$2;->val$config:Lcom/getcapacitor/CapConfig;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 7

    .line 282
    new-instance v0, Landroid/view/WindowManager$LayoutParams;

    invoke-direct {v0}, Landroid/view/WindowManager$LayoutParams;-><init>()V

    const/16 v1, 0x11

    .line 283
    iput v1, v0, Landroid/view/WindowManager$LayoutParams;->gravity:I

    .line 284
    iget-object v1, p0, Lcom/getcapacitor/Splash$2;->val$a:Landroid/app/Activity;

    invoke-virtual {v1}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v1

    invoke-virtual {v1}, Landroid/view/Window;->getAttributes()Landroid/view/WindowManager$LayoutParams;

    move-result-object v1

    iget v1, v1, Landroid/view/WindowManager$LayoutParams;->flags:I

    iput v1, v0, Landroid/view/WindowManager$LayoutParams;->flags:I

    const/4 v1, -0x3

    .line 287
    iput v1, v0, Landroid/view/WindowManager$LayoutParams;->format:I

    .line 290
    :try_start_0
    invoke-static {}, Lcom/getcapacitor/Splash;->access$200()Landroid/view/WindowManager;

    move-result-object v1

    invoke-static {}, Lcom/getcapacitor/Splash;->access$100()Landroid/widget/ImageView;

    move-result-object v2

    invoke-interface {v1, v2, v0}, Landroid/view/WindowManager;->addView(Landroid/view/View;Landroid/view/ViewGroup$LayoutParams;)V
    :try_end_0
    .catch Ljava/lang/IllegalStateException; {:try_start_0 .. :try_end_0} :catch_0
    .catch Ljava/lang/IllegalArgumentException; {:try_start_0 .. :try_end_0} :catch_0

    .line 296
    invoke-static {}, Lcom/getcapacitor/Splash;->access$100()Landroid/widget/ImageView;

    move-result-object v1

    const/4 v2, 0x0

    invoke-virtual {v1, v2}, Landroid/widget/ImageView;->setAlpha(F)V

    .line 298
    invoke-static {}, Lcom/getcapacitor/Splash;->access$100()Landroid/widget/ImageView;

    move-result-object v1

    invoke-virtual {v1}, Landroid/widget/ImageView;->animate()Landroid/view/ViewPropertyAnimator;

    move-result-object v1

    const/high16 v3, 0x3f800000    # 1.0f

    .line 299
    invoke-virtual {v1, v3}, Landroid/view/ViewPropertyAnimator;->alpha(F)Landroid/view/ViewPropertyAnimator;

    move-result-object v1

    new-instance v4, Landroid/view/animation/LinearInterpolator;

    invoke-direct {v4}, Landroid/view/animation/LinearInterpolator;-><init>()V

    .line 300
    invoke-virtual {v1, v4}, Landroid/view/ViewPropertyAnimator;->setInterpolator(Landroid/animation/TimeInterpolator;)Landroid/view/ViewPropertyAnimator;

    move-result-object v1

    iget v4, p0, Lcom/getcapacitor/Splash$2;->val$fadeInDuration:I

    int-to-long v4, v4

    .line 301
    invoke-virtual {v1, v4, v5}, Landroid/view/ViewPropertyAnimator;->setDuration(J)Landroid/view/ViewPropertyAnimator;

    move-result-object v1

    iget-object v4, p0, Lcom/getcapacitor/Splash$2;->val$listener:Landroid/animation/Animator$AnimatorListener;

    .line 302
    invoke-virtual {v1, v4}, Landroid/view/ViewPropertyAnimator;->setListener(Landroid/animation/Animator$AnimatorListener;)Landroid/view/ViewPropertyAnimator;

    move-result-object v1

    .line 303
    invoke-virtual {v1}, Landroid/view/ViewPropertyAnimator;->start()V

    .line 305
    invoke-static {}, Lcom/getcapacitor/Splash;->access$100()Landroid/widget/ImageView;

    move-result-object v1

    const/4 v4, 0x0

    invoke-virtual {v1, v4}, Landroid/widget/ImageView;->setVisibility(I)V

    .line 307
    invoke-static {}, Lcom/getcapacitor/Splash;->access$300()Landroid/widget/ProgressBar;

    move-result-object v1

    if-eqz v1, :cond_1

    .line 308
    iget-object v1, p0, Lcom/getcapacitor/Splash$2;->val$config:Lcom/getcapacitor/CapConfig;

    const-string v5, "plugins.SplashScreen.showSpinner"

    invoke-virtual {v1, v5, v4}, Lcom/getcapacitor/CapConfig;->getBoolean(Ljava/lang/String;Z)Z

    move-result v1

    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    .line 310
    invoke-static {}, Lcom/getcapacitor/Splash;->access$300()Landroid/widget/ProgressBar;

    move-result-object v5

    const/4 v6, 0x4

    invoke-virtual {v5, v6}, Landroid/widget/ProgressBar;->setVisibility(I)V

    .line 312
    invoke-static {}, Lcom/getcapacitor/Splash;->access$300()Landroid/widget/ProgressBar;

    move-result-object v5

    invoke-virtual {v5}, Landroid/widget/ProgressBar;->getParent()Landroid/view/ViewParent;

    move-result-object v5

    if-eqz v5, :cond_0

    .line 313
    invoke-static {}, Lcom/getcapacitor/Splash;->access$200()Landroid/view/WindowManager;

    move-result-object v5

    invoke-static {}, Lcom/getcapacitor/Splash;->access$300()Landroid/widget/ProgressBar;

    move-result-object v6

    invoke-interface {v5, v6}, Landroid/view/WindowManager;->removeView(Landroid/view/View;)V

    :cond_0
    const/4 v5, -0x2

    .line 316
    iput v5, v0, Landroid/view/WindowManager$LayoutParams;->height:I

    .line 317
    iput v5, v0, Landroid/view/WindowManager$LayoutParams;->width:I

    .line 319
    invoke-static {}, Lcom/getcapacitor/Splash;->access$200()Landroid/view/WindowManager;

    move-result-object v5

    invoke-static {}, Lcom/getcapacitor/Splash;->access$300()Landroid/widget/ProgressBar;

    move-result-object v6

    invoke-interface {v5, v6, v0}, Landroid/view/WindowManager;->addView(Landroid/view/View;Landroid/view/ViewGroup$LayoutParams;)V

    .line 321
    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 322
    invoke-static {}, Lcom/getcapacitor/Splash;->access$300()Landroid/widget/ProgressBar;

    move-result-object v0

    invoke-virtual {v0, v2}, Landroid/widget/ProgressBar;->setAlpha(F)V

    .line 324
    invoke-static {}, Lcom/getcapacitor/Splash;->access$300()Landroid/widget/ProgressBar;

    move-result-object v0

    invoke-virtual {v0}, Landroid/widget/ProgressBar;->animate()Landroid/view/ViewPropertyAnimator;

    move-result-object v0

    .line 325
    invoke-virtual {v0, v3}, Landroid/view/ViewPropertyAnimator;->alpha(F)Landroid/view/ViewPropertyAnimator;

    move-result-object v0

    new-instance v1, Landroid/view/animation/LinearInterpolator;

    invoke-direct {v1}, Landroid/view/animation/LinearInterpolator;-><init>()V

    .line 326
    invoke-virtual {v0, v1}, Landroid/view/ViewPropertyAnimator;->setInterpolator(Landroid/animation/TimeInterpolator;)Landroid/view/ViewPropertyAnimator;

    move-result-object v0

    iget v1, p0, Lcom/getcapacitor/Splash$2;->val$fadeInDuration:I

    int-to-long v1, v1

    .line 327
    invoke-virtual {v0, v1, v2}, Landroid/view/ViewPropertyAnimator;->setDuration(J)Landroid/view/ViewPropertyAnimator;

    move-result-object v0

    .line 328
    invoke-virtual {v0}, Landroid/view/ViewPropertyAnimator;->start()V

    .line 330
    invoke-static {}, Lcom/getcapacitor/Splash;->access$300()Landroid/widget/ProgressBar;

    move-result-object v0

    invoke-virtual {v0, v4}, Landroid/widget/ProgressBar;->setVisibility(I)V

    :cond_1
    return-void

    .line 292
    :catch_0
    const-string v0, "Could not add splash view"

    invoke-static {v0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    return-void
.end method
