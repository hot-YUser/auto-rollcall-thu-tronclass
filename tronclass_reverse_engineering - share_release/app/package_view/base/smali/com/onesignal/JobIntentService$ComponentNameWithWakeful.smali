.class Lcom/onesignal/JobIntentService$ComponentNameWithWakeful;
.super Ljava/lang/Object;
.source "JobIntentService.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/JobIntentService;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "ComponentNameWithWakeful"
.end annotation


# instance fields
.field private componentName:Landroid/content/ComponentName;

.field private useWakefulService:Z


# direct methods
.method constructor <init>(Landroid/content/ComponentName;Z)V
    .locals 0

    .line 125
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 126
    iput-object p1, p0, Lcom/onesignal/JobIntentService$ComponentNameWithWakeful;->componentName:Landroid/content/ComponentName;

    iput-boolean p2, p0, Lcom/onesignal/JobIntentService$ComponentNameWithWakeful;->useWakefulService:Z

    return-void
.end method
