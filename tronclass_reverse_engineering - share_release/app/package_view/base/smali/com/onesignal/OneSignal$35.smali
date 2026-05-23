.class Lcom/onesignal/OneSignal$35;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->sendOutcome(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$callback:Lcom/onesignal/OneSignal$OutcomeCallback;

.field final synthetic val$name:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V
    .locals 0

    .line 3385
    iput-object p1, p0, Lcom/onesignal/OneSignal$35;->val$name:Ljava/lang/String;

    iput-object p2, p0, Lcom/onesignal/OneSignal$35;->val$callback:Lcom/onesignal/OneSignal$OutcomeCallback;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 3388
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running sendOutcome() operation from pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 3389
    iget-object v0, p0, Lcom/onesignal/OneSignal$35;->val$name:Ljava/lang/String;

    iget-object v1, p0, Lcom/onesignal/OneSignal$35;->val$callback:Lcom/onesignal/OneSignal$OutcomeCallback;

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->sendOutcome(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    return-void
.end method
