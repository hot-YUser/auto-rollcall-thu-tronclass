.class final Lcom/onesignal/JobIntentService$CompatWorkItem;
.super Ljava/lang/Object;
.source "JobIntentService.java"

# interfaces
.implements Lcom/onesignal/JobIntentService$GenericWorkItem;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/JobIntentService;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x10
    name = "CompatWorkItem"
.end annotation


# instance fields
.field final mIntent:Landroid/content/Intent;

.field final mStartId:I

.field final synthetic this$0:Lcom/onesignal/JobIntentService;


# direct methods
.method constructor <init>(Lcom/onesignal/JobIntentService;Landroid/content/Intent;I)V
    .locals 0

    .line 410
    iput-object p1, p0, Lcom/onesignal/JobIntentService$CompatWorkItem;->this$0:Lcom/onesignal/JobIntentService;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 411
    iput-object p2, p0, Lcom/onesignal/JobIntentService$CompatWorkItem;->mIntent:Landroid/content/Intent;

    .line 412
    iput p3, p0, Lcom/onesignal/JobIntentService$CompatWorkItem;->mStartId:I

    return-void
.end method


# virtual methods
.method public complete()V
    .locals 2

    .line 423
    iget-object v0, p0, Lcom/onesignal/JobIntentService$CompatWorkItem;->this$0:Lcom/onesignal/JobIntentService;

    iget v1, p0, Lcom/onesignal/JobIntentService$CompatWorkItem;->mStartId:I

    invoke-virtual {v0, v1}, Lcom/onesignal/JobIntentService;->stopSelf(I)V

    return-void
.end method

.method public getIntent()Landroid/content/Intent;
    .locals 1

    .line 417
    iget-object v0, p0, Lcom/onesignal/JobIntentService$CompatWorkItem;->mIntent:Landroid/content/Intent;

    return-object v0
.end method
