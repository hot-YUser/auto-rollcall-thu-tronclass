.class Lcom/onesignal/TrackAmazonPurchase$1;
.super Ljava/lang/Object;
.source "TrackAmazonPurchase.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/TrackAmazonPurchase;->setListener()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/TrackAmazonPurchase;


# direct methods
.method constructor <init>(Lcom/onesignal/TrackAmazonPurchase;)V
    .locals 0

    .line 112
    iput-object p1, p0, Lcom/onesignal/TrackAmazonPurchase$1;->this$0:Lcom/onesignal/TrackAmazonPurchase;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 115
    iget-object v0, p0, Lcom/onesignal/TrackAmazonPurchase$1;->this$0:Lcom/onesignal/TrackAmazonPurchase;

    invoke-static {v0}, Lcom/onesignal/TrackAmazonPurchase;->access$100(Lcom/onesignal/TrackAmazonPurchase;)Landroid/content/Context;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/TrackAmazonPurchase$1;->this$0:Lcom/onesignal/TrackAmazonPurchase;

    invoke-static {v1}, Lcom/onesignal/TrackAmazonPurchase;->access$200(Lcom/onesignal/TrackAmazonPurchase;)Lcom/onesignal/TrackAmazonPurchase$OSPurchasingListener;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/amazon/device/iap/PurchasingService;->registerListener(Landroid/content/Context;Lcom/amazon/device/iap/PurchasingListener;)V

    return-void
.end method
