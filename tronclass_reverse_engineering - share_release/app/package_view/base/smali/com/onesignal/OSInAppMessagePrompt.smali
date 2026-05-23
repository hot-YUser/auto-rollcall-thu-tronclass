.class public abstract Lcom/onesignal/OSInAppMessagePrompt;
.super Ljava/lang/Object;
.source "OSInAppMessagePrompt.java"


# instance fields
.field private prompted:Z


# direct methods
.method constructor <init>()V
    .locals 1

    .line 7
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 5
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessagePrompt;->prompted:Z

    return-void
.end method


# virtual methods
.method abstract getPromptKey()Ljava/lang/String;
.end method

.method abstract handlePrompt(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;)V
.end method

.method hasPrompted()Z
    .locals 1

    .line 14
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessagePrompt;->prompted:Z

    return v0
.end method

.method setPrompted(Z)V
    .locals 0

    .line 18
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessagePrompt;->prompted:Z

    return-void
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 23
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OSInAppMessagePrompt{key="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 24
    invoke-virtual {p0}, Lcom/onesignal/OSInAppMessagePrompt;->getPromptKey()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " prompted="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OSInAppMessagePrompt;->prompted:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
