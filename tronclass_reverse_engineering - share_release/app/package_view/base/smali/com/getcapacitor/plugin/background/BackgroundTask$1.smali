.class Lcom/getcapacitor/plugin/background/BackgroundTask$1;
.super Landroid/content/BroadcastReceiver;
.source "BackgroundTask.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/background/BackgroundTask;->load()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/background/BackgroundTask;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/background/BackgroundTask;)V
    .locals 0

    .line 30
    iput-object p1, p0, Lcom/getcapacitor/plugin/background/BackgroundTask$1;->this$0:Lcom/getcapacitor/plugin/background/BackgroundTask;

    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 0

    .line 33
    const-string p1, "taskId"

    invoke-virtual {p2, p1}, Landroid/content/Intent;->getStringExtra(Ljava/lang/String;)Ljava/lang/String;

    return-void
.end method
