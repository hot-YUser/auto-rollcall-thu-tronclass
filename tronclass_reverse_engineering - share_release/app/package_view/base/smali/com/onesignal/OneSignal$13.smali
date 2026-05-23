.class Lcom/onesignal/OneSignal$13;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->setEmail(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$EmailUpdateHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$callback:Lcom/onesignal/OneSignal$EmailUpdateHandler;

.field final synthetic val$email:Ljava/lang/String;

.field final synthetic val$emailAuthHash:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$EmailUpdateHandler;)V
    .locals 0

    .line 1687
    iput-object p1, p0, Lcom/onesignal/OneSignal$13;->val$email:Ljava/lang/String;

    iput-object p2, p0, Lcom/onesignal/OneSignal$13;->val$emailAuthHash:Ljava/lang/String;

    iput-object p3, p0, Lcom/onesignal/OneSignal$13;->val$callback:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 1690
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running setEmail() operation from a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1691
    iget-object v0, p0, Lcom/onesignal/OneSignal$13;->val$email:Ljava/lang/String;

    iget-object v1, p0, Lcom/onesignal/OneSignal$13;->val$emailAuthHash:Ljava/lang/String;

    iget-object v2, p0, Lcom/onesignal/OneSignal$13;->val$callback:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignal;->setEmail(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$EmailUpdateHandler;)V

    return-void
.end method
