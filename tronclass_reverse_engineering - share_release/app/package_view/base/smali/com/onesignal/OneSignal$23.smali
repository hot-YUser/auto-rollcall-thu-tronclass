.class Lcom/onesignal/OneSignal$23;
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

    .line 2148
    iput-object p1, p0, Lcom/onesignal/OneSignal$23;->val$getTagsHandler:Lcom/onesignal/OneSignal$OSGetTagsHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 2151
    invoke-static {}, Lcom/onesignal/OneSignal;->access$1600()Ljava/util/ArrayList;

    move-result-object v0

    monitor-enter v0

    .line 2152
    :try_start_0
    invoke-static {}, Lcom/onesignal/OneSignal;->access$1600()Ljava/util/ArrayList;

    move-result-object v1

    iget-object v2, p0, Lcom/onesignal/OneSignal$23;->val$getTagsHandler:Lcom/onesignal/OneSignal$OSGetTagsHandler;

    invoke-virtual {v1, v2}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 2156
    invoke-static {}, Lcom/onesignal/OneSignal;->access$1600()Ljava/util/ArrayList;

    move-result-object v1

    invoke-virtual {v1}, Ljava/util/ArrayList;->size()I

    move-result v1

    const/4 v2, 0x1

    if-le v1, v2, :cond_0

    monitor-exit v0

    return-void

    .line 2157
    :cond_0
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 2159
    invoke-static {}, Lcom/onesignal/OneSignal;->access$1700()V

    return-void

    :catchall_0
    move-exception v1

    .line 2157
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v1
.end method
