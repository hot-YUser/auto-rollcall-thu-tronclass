.class Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;
.super Ljava/lang/Object;
.source "BrightnessPlugin.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x2
    name = "SetTask"
.end annotation


# instance fields
.field private lp:Landroid/view/WindowManager$LayoutParams;

.field private target:Landroid/app/Activity;

.field final synthetic this$0:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;


# direct methods
.method private constructor <init>(Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;)V
    .locals 0

    .line 24
    iput-object p1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;->this$0:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 p1, 0x0

    .line 25
    iput-object p1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;->target:Landroid/app/Activity;

    .line 26
    iput-object p1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;->lp:Landroid/view/WindowManager$LayoutParams;

    return-void
.end method

.method synthetic constructor <init>(Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$1;)V
    .locals 0

    .line 24
    invoke-direct {p0, p1}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;-><init>(Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;)V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 29
    iget-object v0, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;->target:Landroid/app/Activity;

    invoke-virtual {v0}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v0

    iget-object v1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;->lp:Landroid/view/WindowManager$LayoutParams;

    invoke-virtual {v0, v1}, Landroid/view/Window;->setAttributes(Landroid/view/WindowManager$LayoutParams;)V

    return-void
.end method

.method public setParams(Landroid/app/Activity;Landroid/view/WindowManager$LayoutParams;)V
    .locals 0

    .line 32
    iput-object p1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;->target:Landroid/app/Activity;

    .line 33
    iput-object p2, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$SetTask;->lp:Landroid/view/WindowManager$LayoutParams;

    return-void
.end method
