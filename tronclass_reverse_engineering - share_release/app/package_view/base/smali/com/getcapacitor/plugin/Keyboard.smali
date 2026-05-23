.class public Lcom/getcapacitor/plugin/Keyboard;
.super Lcom/getcapacitor/Plugin;
.source "Keyboard.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# static fields
.field private static final EVENT_KB_DID_HIDE:Ljava/lang/String; = "keyboardDidHide"

.field private static final EVENT_KB_DID_SHOW:Ljava/lang/String; = "keyboardDidShow"

.field private static final EVENT_KB_WILL_HIDE:Ljava/lang/String; = "keyboardWillHide"

.field private static final EVENT_KB_WILL_SHOW:Ljava/lang/String; = "keyboardWillShow"


# instance fields
.field private list:Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;

.field private rootView:Landroid/view/View;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 25
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lcom/getcapacitor/plugin/Keyboard;)Landroid/view/View;
    .locals 0

    .line 25
    iget-object p0, p0, Lcom/getcapacitor/plugin/Keyboard;->rootView:Landroid/view/View;

    return-object p0
.end method

.method static synthetic access$002(Lcom/getcapacitor/plugin/Keyboard;Landroid/view/View;)Landroid/view/View;
    .locals 0

    .line 25
    iput-object p1, p0, Lcom/getcapacitor/plugin/Keyboard;->rootView:Landroid/view/View;

    return-object p1
.end method

.method static synthetic access$100(Lcom/getcapacitor/plugin/Keyboard;)Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;
    .locals 0

    .line 25
    iget-object p0, p0, Lcom/getcapacitor/plugin/Keyboard;->list:Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;

    return-object p0
.end method

.method static synthetic access$102(Lcom/getcapacitor/plugin/Keyboard;Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;)Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;
    .locals 0

    .line 25
    iput-object p1, p0, Lcom/getcapacitor/plugin/Keyboard;->list:Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;

    return-object p1
.end method

.method static synthetic access$200(Lcom/getcapacitor/plugin/Keyboard;)Lcom/getcapacitor/Bridge;
    .locals 0

    .line 25
    iget-object p0, p0, Lcom/getcapacitor/plugin/Keyboard;->bridge:Lcom/getcapacitor/Bridge;

    return-object p0
.end method

.method static synthetic access$300(Lcom/getcapacitor/plugin/Keyboard;)Lcom/getcapacitor/Bridge;
    .locals 0

    .line 25
    iget-object p0, p0, Lcom/getcapacitor/plugin/Keyboard;->bridge:Lcom/getcapacitor/Bridge;

    return-object p0
.end method

.method static synthetic access$400(Lcom/getcapacitor/plugin/Keyboard;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 0

    .line 25
    invoke-virtual {p0, p1, p2}, Lcom/getcapacitor/plugin/Keyboard;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method static synthetic access$500(Lcom/getcapacitor/plugin/Keyboard;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 0

    .line 25
    invoke-virtual {p0, p1, p2}, Lcom/getcapacitor/plugin/Keyboard;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method static synthetic access$600(Lcom/getcapacitor/plugin/Keyboard;)Lcom/getcapacitor/Bridge;
    .locals 0

    .line 25
    iget-object p0, p0, Lcom/getcapacitor/plugin/Keyboard;->bridge:Lcom/getcapacitor/Bridge;

    return-object p0
.end method

.method static synthetic access$700(Lcom/getcapacitor/plugin/Keyboard;)Lcom/getcapacitor/Bridge;
    .locals 0

    .line 25
    iget-object p0, p0, Lcom/getcapacitor/plugin/Keyboard;->bridge:Lcom/getcapacitor/Bridge;

    return-object p0
.end method

.method static synthetic access$800(Lcom/getcapacitor/plugin/Keyboard;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 0

    .line 25
    invoke-virtual {p0, p1, p2}, Lcom/getcapacitor/plugin/Keyboard;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method static synthetic access$900(Lcom/getcapacitor/plugin/Keyboard;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 0

    .line 25
    invoke-virtual {p0, p1, p2}, Lcom/getcapacitor/plugin/Keyboard;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method


# virtual methods
.method public hide(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 119
    new-instance v0, Lcom/getcapacitor/plugin/Keyboard$3;

    invoke-direct {v0, p0, p1}, Lcom/getcapacitor/plugin/Keyboard$3;-><init>(Lcom/getcapacitor/plugin/Keyboard;Lcom/getcapacitor/PluginCall;)V

    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Keyboard;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

.method public load()V
    .locals 1

    .line 36
    new-instance v0, Lcom/getcapacitor/plugin/Keyboard$1;

    invoke-direct {v0, p0}, Lcom/getcapacitor/plugin/Keyboard$1;-><init>(Lcom/getcapacitor/plugin/Keyboard;)V

    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Keyboard;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

.method public setAccessoryBarVisible(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 138
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->unimplemented()V

    return-void
.end method

.method public setResizeMode(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 148
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->unimplemented()V

    return-void
.end method

.method public setScroll(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 153
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->unimplemented()V

    return-void
.end method

.method public setStyle(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 143
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->unimplemented()V

    return-void
.end method

.method public show(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 103
    new-instance v0, Lcom/getcapacitor/plugin/Keyboard$2;

    invoke-direct {v0, p0, p1}, Lcom/getcapacitor/plugin/Keyboard$2;-><init>(Lcom/getcapacitor/plugin/Keyboard;Lcom/getcapacitor/PluginCall;)V

    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Keyboard;->execute(Ljava/lang/Runnable;)V

    return-void
.end method
