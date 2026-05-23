.class Lcom/onesignal/TrackGooglePurchase$1;
.super Ljava/lang/Object;
.source "TrackGooglePurchase.java"

# interfaces
.implements Landroid/content/ServiceConnection;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/TrackGooglePurchase;->trackIAP()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/TrackGooglePurchase;


# direct methods
.method constructor <init>(Lcom/onesignal/TrackGooglePurchase;)V
    .locals 0

    .line 102
    iput-object p1, p0, Lcom/onesignal/TrackGooglePurchase$1;->this$0:Lcom/onesignal/TrackGooglePurchase;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onServiceConnected(Landroid/content/ComponentName;Landroid/os/IBinder;)V
    .locals 2

    .line 112
    :try_start_0
    const-string p1, "com.android.vending.billing.IInAppBillingService$Stub"

    invoke-static {p1}, Ljava/lang/Class;->forName(Ljava/lang/String;)Ljava/lang/Class;

    move-result-object p1

    .line 113
    invoke-static {p1}, Lcom/onesignal/TrackGooglePurchase;->access$200(Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object p1

    const/4 v0, 0x1

    .line 115
    invoke-virtual {p1, v0}, Ljava/lang/reflect/Method;->setAccessible(Z)V

    .line 116
    iget-object v0, p0, Lcom/onesignal/TrackGooglePurchase$1;->this$0:Lcom/onesignal/TrackGooglePurchase;

    filled-new-array {p2}, [Ljava/lang/Object;

    move-result-object p2

    const/4 v1, 0x0

    invoke-virtual {p1, v1, p2}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/TrackGooglePurchase;->access$102(Lcom/onesignal/TrackGooglePurchase;Ljava/lang/Object;)Ljava/lang/Object;

    .line 118
    iget-object p1, p0, Lcom/onesignal/TrackGooglePurchase$1;->this$0:Lcom/onesignal/TrackGooglePurchase;

    invoke-static {p1}, Lcom/onesignal/TrackGooglePurchase;->access$300(Lcom/onesignal/TrackGooglePurchase;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception p1

    .line 120
    invoke-virtual {p1}, Ljava/lang/Throwable;->printStackTrace()V

    :goto_0
    return-void
.end method

.method public onServiceDisconnected(Landroid/content/ComponentName;)V
    .locals 1

    const/16 p1, -0x63

    .line 105
    invoke-static {p1}, Lcom/onesignal/TrackGooglePurchase;->access$002(I)I

    .line 106
    iget-object p1, p0, Lcom/onesignal/TrackGooglePurchase$1;->this$0:Lcom/onesignal/TrackGooglePurchase;

    const/4 v0, 0x0

    invoke-static {p1, v0}, Lcom/onesignal/TrackGooglePurchase;->access$102(Lcom/onesignal/TrackGooglePurchase;Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method
