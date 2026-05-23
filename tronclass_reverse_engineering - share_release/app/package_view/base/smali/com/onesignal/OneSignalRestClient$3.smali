.class Lcom/onesignal/OneSignalRestClient$3;
.super Ljava/lang/Object;
.source "OneSignalRestClient.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignalRestClient;->get(Ljava/lang/String;Lcom/onesignal/OneSignalRestClient$ResponseHandler;Ljava/lang/String;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$cacheKey:Ljava/lang/String;

.field final synthetic val$responseHandler:Lcom/onesignal/OneSignalRestClient$ResponseHandler;

.field final synthetic val$url:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/lang/String;Lcom/onesignal/OneSignalRestClient$ResponseHandler;Ljava/lang/String;)V
    .locals 0

    .line 88
    iput-object p1, p0, Lcom/onesignal/OneSignalRestClient$3;->val$url:Ljava/lang/String;

    iput-object p2, p0, Lcom/onesignal/OneSignalRestClient$3;->val$responseHandler:Lcom/onesignal/OneSignalRestClient$ResponseHandler;

    iput-object p3, p0, Lcom/onesignal/OneSignalRestClient$3;->val$cacheKey:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 6

    .line 90
    iget-object v0, p0, Lcom/onesignal/OneSignalRestClient$3;->val$url:Ljava/lang/String;

    iget-object v3, p0, Lcom/onesignal/OneSignalRestClient$3;->val$responseHandler:Lcom/onesignal/OneSignalRestClient$ResponseHandler;

    const v4, 0xea60

    iget-object v5, p0, Lcom/onesignal/OneSignalRestClient$3;->val$cacheKey:Ljava/lang/String;

    const/4 v1, 0x0

    const/4 v2, 0x0

    invoke-static/range {v0 .. v5}, Lcom/onesignal/OneSignalRestClient;->access$000(Ljava/lang/String;Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;ILjava/lang/String;)V

    return-void
.end method
