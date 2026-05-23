.class Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;
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
    name = "KeepOnTask"
.end annotation


# instance fields
.field private state:Z

.field final synthetic this$0:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;

.field private win:Landroid/view/Window;


# direct methods
.method private constructor <init>(Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;)V
    .locals 0

    .line 37
    iput-object p1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;->this$0:Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 p1, 0x0

    .line 38
    iput-object p1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;->win:Landroid/view/Window;

    const/4 p1, 0x0

    .line 39
    iput-boolean p1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;->state:Z

    return-void
.end method

.method synthetic constructor <init>(Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$1;)V
    .locals 0

    .line 37
    invoke-direct {p0, p1}, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;-><init>(Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin;)V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 42
    iget-boolean v0, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;->state:Z

    const/16 v1, 0x80

    if-eqz v0, :cond_0

    .line 43
    iget-object v0, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;->win:Landroid/view/Window;

    invoke-virtual {v0, v1}, Landroid/view/Window;->addFlags(I)V

    goto :goto_0

    .line 45
    :cond_0
    iget-object v0, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;->win:Landroid/view/Window;

    invoke-virtual {v0, v1}, Landroid/view/Window;->clearFlags(I)V

    :goto_0
    return-void
.end method

.method public setParams(Landroid/view/Window;Z)V
    .locals 0

    .line 49
    iput-object p1, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;->win:Landroid/view/Window;

    .line 50
    iput-boolean p2, p0, Lorg/apache/cordova/plugin/Brightness/BrightnessPlugin$KeepOnTask;->state:Z

    return-void
.end method
