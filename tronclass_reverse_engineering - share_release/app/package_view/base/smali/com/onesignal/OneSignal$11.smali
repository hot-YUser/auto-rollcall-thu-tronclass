.class Lcom/onesignal/OneSignal$11;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->setSMSNumber(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$callback:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

.field final synthetic val$smsAuthHash:Ljava/lang/String;

.field final synthetic val$smsNumber:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V
    .locals 0

    .line 1586
    iput-object p1, p0, Lcom/onesignal/OneSignal$11;->val$smsNumber:Ljava/lang/String;

    iput-object p2, p0, Lcom/onesignal/OneSignal$11;->val$smsAuthHash:Ljava/lang/String;

    iput-object p3, p0, Lcom/onesignal/OneSignal$11;->val$callback:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 1589
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running setSMSNumber() operation from a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1590
    iget-object v0, p0, Lcom/onesignal/OneSignal$11;->val$smsNumber:Ljava/lang/String;

    iget-object v1, p0, Lcom/onesignal/OneSignal$11;->val$smsAuthHash:Ljava/lang/String;

    iget-object v2, p0, Lcom/onesignal/OneSignal$11;->val$callback:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignal;->setSMSNumber(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V

    return-void
.end method
