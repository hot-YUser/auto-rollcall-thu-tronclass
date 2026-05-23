.class Lcom/onesignal/OneSignal$18;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->sendTag(Ljava/lang/String;Ljava/lang/String;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$key:Ljava/lang/String;

.field final synthetic val$value:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 1906
    iput-object p1, p0, Lcom/onesignal/OneSignal$18;->val$key:Ljava/lang/String;

    iput-object p2, p0, Lcom/onesignal/OneSignal$18;->val$value:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 1909
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running sendTag() operation from pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1910
    iget-object v0, p0, Lcom/onesignal/OneSignal$18;->val$key:Ljava/lang/String;

    iget-object v1, p0, Lcom/onesignal/OneSignal$18;->val$value:Ljava/lang/String;

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->sendTag(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method
