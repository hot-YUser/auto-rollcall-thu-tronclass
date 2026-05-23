.class public Lcom/getcapacitor/plugin/Accessibility;
.super Lcom/getcapacitor/Plugin;
.source "Accessibility.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# static fields
.field private static final EVENT_SCREEN_READER_STATE_CHANGE:Ljava/lang/String; = "accessibilityScreenReaderStateChange"


# instance fields
.field private am:Landroid/view/accessibility/AccessibilityManager;

.field private tts:Landroid/speech/tts/TextToSpeech;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 17
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lcom/getcapacitor/plugin/Accessibility;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 0

    .line 17
    invoke-virtual {p0, p1, p2}, Lcom/getcapacitor/plugin/Accessibility;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method static synthetic access$100(Lcom/getcapacitor/plugin/Accessibility;)Landroid/speech/tts/TextToSpeech;
    .locals 0

    .line 17
    iget-object p0, p0, Lcom/getcapacitor/plugin/Accessibility;->tts:Landroid/speech/tts/TextToSpeech;

    return-object p0
.end method


# virtual methods
.method public isScreenReaderEnabled(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 38
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Accessibility;->getLogTag()Ljava/lang/String;

    move-result-object v0

    const-string v1, "Checking for screen reader"

    invoke-static {v0, v1}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 39
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Accessibility;->getLogTag()Ljava/lang/String;

    move-result-object v0

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Is it enabled? "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/getcapacitor/plugin/Accessibility;->am:Landroid/view/accessibility/AccessibilityManager;

    invoke-virtual {v2}, Landroid/view/accessibility/AccessibilityManager;->isTouchExplorationEnabled()Z

    move-result v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 41
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 42
    iget-object v1, p0, Lcom/getcapacitor/plugin/Accessibility;->am:Landroid/view/accessibility/AccessibilityManager;

    invoke-virtual {v1}, Landroid/view/accessibility/AccessibilityManager;->isTouchExplorationEnabled()Z

    move-result v1

    const-string v2, "value"

    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 43
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public load()V
    .locals 2

    .line 24
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Accessibility;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "accessibility"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/view/accessibility/AccessibilityManager;

    iput-object v0, p0, Lcom/getcapacitor/plugin/Accessibility;->am:Landroid/view/accessibility/AccessibilityManager;

    .line 26
    new-instance v1, Lcom/getcapacitor/plugin/Accessibility$1;

    invoke-direct {v1, p0}, Lcom/getcapacitor/plugin/Accessibility$1;-><init>(Lcom/getcapacitor/plugin/Accessibility;)V

    invoke-virtual {v0, v1}, Landroid/view/accessibility/AccessibilityManager;->addTouchExplorationStateChangeListener(Landroid/view/accessibility/AccessibilityManager$TouchExplorationStateChangeListener;)Z

    return-void
.end method

.method public speak(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 48
    const-string v0, "value"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 49
    const-string v1, "language"

    const-string v2, "en"

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 50
    invoke-static {v1}, Ljava/util/Locale;->forLanguageTag(Ljava/lang/String;)Ljava/util/Locale;

    move-result-object v1

    if-nez v1, :cond_0

    .line 53
    const-string v0, "Language was not a valid language tag."

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 57
    :cond_0
    new-instance p1, Landroid/speech/tts/TextToSpeech;

    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Accessibility;->getContext()Landroid/content/Context;

    move-result-object v2

    new-instance v3, Lcom/getcapacitor/plugin/Accessibility$2;

    invoke-direct {v3, p0, v1, v0}, Lcom/getcapacitor/plugin/Accessibility$2;-><init>(Lcom/getcapacitor/plugin/Accessibility;Ljava/util/Locale;Ljava/lang/String;)V

    invoke-direct {p1, v2, v3}, Landroid/speech/tts/TextToSpeech;-><init>(Landroid/content/Context;Landroid/speech/tts/TextToSpeech$OnInitListener;)V

    iput-object p1, p0, Lcom/getcapacitor/plugin/Accessibility;->tts:Landroid/speech/tts/TextToSpeech;

    return-void
.end method
