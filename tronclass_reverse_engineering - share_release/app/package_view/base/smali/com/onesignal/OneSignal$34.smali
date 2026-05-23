.class Lcom/onesignal/OneSignal$34;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->pauseInAppMessages(Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$pause:Z


# direct methods
.method constructor <init>(Z)V
    .locals 0

    .line 3153
    iput-boolean p1, p0, Lcom/onesignal/OneSignal$34;->val$pause:Z

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 3156
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running pauseInAppMessages() operation from pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 3157
    iget-boolean v0, p0, Lcom/onesignal/OneSignal$34;->val$pause:Z

    invoke-static {v0}, Lcom/onesignal/OneSignal;->pauseInAppMessages(Z)V

    return-void
.end method
