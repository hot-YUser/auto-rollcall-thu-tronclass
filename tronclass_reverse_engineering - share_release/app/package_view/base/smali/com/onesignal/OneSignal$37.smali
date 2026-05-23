.class Lcom/onesignal/OneSignal$37;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->sendOutcomeWithValue(Ljava/lang/String;FLcom/onesignal/OneSignal$OutcomeCallback;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$callback:Lcom/onesignal/OneSignal$OutcomeCallback;

.field final synthetic val$name:Ljava/lang/String;

.field final synthetic val$value:F


# direct methods
.method constructor <init>(Ljava/lang/String;FLcom/onesignal/OneSignal$OutcomeCallback;)V
    .locals 0

    .line 3443
    iput-object p1, p0, Lcom/onesignal/OneSignal$37;->val$name:Ljava/lang/String;

    iput p2, p0, Lcom/onesignal/OneSignal$37;->val$value:F

    iput-object p3, p0, Lcom/onesignal/OneSignal$37;->val$callback:Lcom/onesignal/OneSignal$OutcomeCallback;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 3446
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running sendOutcomeWithValue() operation from pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 3447
    iget-object v0, p0, Lcom/onesignal/OneSignal$37;->val$name:Ljava/lang/String;

    iget v1, p0, Lcom/onesignal/OneSignal$37;->val$value:F

    iget-object v2, p0, Lcom/onesignal/OneSignal$37;->val$callback:Lcom/onesignal/OneSignal$OutcomeCallback;

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignal;->sendOutcomeWithValue(Ljava/lang/String;FLcom/onesignal/OneSignal$OutcomeCallback;)V

    return-void
.end method
