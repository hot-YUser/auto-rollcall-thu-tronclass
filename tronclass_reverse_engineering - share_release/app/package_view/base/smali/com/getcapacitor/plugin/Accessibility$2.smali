.class Lcom/getcapacitor/plugin/Accessibility$2;
.super Ljava/lang/Object;
.source "Accessibility.java"

# interfaces
.implements Landroid/speech/tts/TextToSpeech$OnInitListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Accessibility;->speak(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/Accessibility;

.field final synthetic val$locale:Ljava/util/Locale;

.field final synthetic val$value:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Accessibility;Ljava/util/Locale;Ljava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 57
    iput-object p1, p0, Lcom/getcapacitor/plugin/Accessibility$2;->this$0:Lcom/getcapacitor/plugin/Accessibility;

    iput-object p2, p0, Lcom/getcapacitor/plugin/Accessibility$2;->val$locale:Ljava/util/Locale;

    iput-object p3, p0, Lcom/getcapacitor/plugin/Accessibility$2;->val$value:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onInit(I)V
    .locals 4

    .line 60
    iget-object p1, p0, Lcom/getcapacitor/plugin/Accessibility$2;->this$0:Lcom/getcapacitor/plugin/Accessibility;

    invoke-static {p1}, Lcom/getcapacitor/plugin/Accessibility;->access$100(Lcom/getcapacitor/plugin/Accessibility;)Landroid/speech/tts/TextToSpeech;

    move-result-object p1

    iget-object v0, p0, Lcom/getcapacitor/plugin/Accessibility$2;->val$locale:Ljava/util/Locale;

    invoke-virtual {p1, v0}, Landroid/speech/tts/TextToSpeech;->setLanguage(Ljava/util/Locale;)I

    .line 61
    iget-object p1, p0, Lcom/getcapacitor/plugin/Accessibility$2;->this$0:Lcom/getcapacitor/plugin/Accessibility;

    invoke-static {p1}, Lcom/getcapacitor/plugin/Accessibility;->access$100(Lcom/getcapacitor/plugin/Accessibility;)Landroid/speech/tts/TextToSpeech;

    move-result-object p1

    iget-object v0, p0, Lcom/getcapacitor/plugin/Accessibility$2;->val$value:Ljava/lang/String;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "capacitoraccessibility"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v2

    invoke-virtual {v1, v2, v3}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x0

    const/4 v3, 0x0

    invoke-virtual {p1, v0, v2, v3, v1}, Landroid/speech/tts/TextToSpeech;->speak(Ljava/lang/CharSequence;ILandroid/os/Bundle;Ljava/lang/String;)I

    return-void
.end method
