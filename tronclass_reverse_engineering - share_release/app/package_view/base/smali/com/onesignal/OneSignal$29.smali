.class Lcom/onesignal/OneSignal$29;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->promptLocation(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$callback:Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;

.field final synthetic val$fallbackToSettings:Z


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;Z)V
    .locals 0

    .line 2803
    iput-object p1, p0, Lcom/onesignal/OneSignal$29;->val$callback:Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;

    iput-boolean p2, p0, Lcom/onesignal/OneSignal$29;->val$fallbackToSettings:Z

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 2806
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running promptLocation() operation from pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 2807
    iget-object v0, p0, Lcom/onesignal/OneSignal$29;->val$callback:Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;

    iget-boolean v1, p0, Lcom/onesignal/OneSignal$29;->val$fallbackToSettings:Z

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->promptLocation(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;Z)V

    return-void
.end method
