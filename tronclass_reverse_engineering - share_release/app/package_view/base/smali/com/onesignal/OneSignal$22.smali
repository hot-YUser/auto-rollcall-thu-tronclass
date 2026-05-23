.class Lcom/onesignal/OneSignal$22;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->getTags(Lcom/onesignal/OneSignal$OSGetTagsHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$getTagsHandler:Lcom/onesignal/OneSignal$OSGetTagsHandler;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignal$OSGetTagsHandler;)V
    .locals 0

    .line 2129
    iput-object p1, p0, Lcom/onesignal/OneSignal$22;->val$getTagsHandler:Lcom/onesignal/OneSignal$OSGetTagsHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 2132
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running getTags() operation from pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 2133
    iget-object v0, p0, Lcom/onesignal/OneSignal$22;->val$getTagsHandler:Lcom/onesignal/OneSignal$OSGetTagsHandler;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getTags(Lcom/onesignal/OneSignal$OSGetTagsHandler;)V

    return-void
.end method
