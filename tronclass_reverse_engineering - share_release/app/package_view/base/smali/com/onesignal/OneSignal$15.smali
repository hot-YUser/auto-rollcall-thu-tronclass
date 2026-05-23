.class Lcom/onesignal/OneSignal$15;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->setLanguage(Ljava/lang/String;Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$completionCallback:Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;

.field final synthetic val$language:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/lang/String;Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;)V
    .locals 0

    .line 1775
    iput-object p1, p0, Lcom/onesignal/OneSignal$15;->val$language:Ljava/lang/String;

    iput-object p2, p0, Lcom/onesignal/OneSignal$15;->val$completionCallback:Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 1778
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running setLanguage() operation from pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1779
    iget-object v0, p0, Lcom/onesignal/OneSignal$15;->val$language:Ljava/lang/String;

    iget-object v1, p0, Lcom/onesignal/OneSignal$15;->val$completionCallback:Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->setLanguage(Ljava/lang/String;Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;)V

    return-void
.end method
