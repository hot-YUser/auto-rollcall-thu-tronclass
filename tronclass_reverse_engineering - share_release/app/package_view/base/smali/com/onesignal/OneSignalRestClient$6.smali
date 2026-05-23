.class Lcom/onesignal/OneSignalRestClient$6;
.super Ljava/lang/Object;
.source "OneSignalRestClient.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignalRestClient;->callResponseHandlerOnFailure(Lcom/onesignal/OneSignalRestClient$ResponseHandler;ILjava/lang/String;Ljava/lang/Throwable;)Ljava/lang/Thread;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$handler:Lcom/onesignal/OneSignalRestClient$ResponseHandler;

.field final synthetic val$response:Ljava/lang/String;

.field final synthetic val$statusCode:I

.field final synthetic val$throwable:Ljava/lang/Throwable;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignalRestClient$ResponseHandler;ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 0

    .line 296
    iput-object p1, p0, Lcom/onesignal/OneSignalRestClient$6;->val$handler:Lcom/onesignal/OneSignalRestClient$ResponseHandler;

    iput p2, p0, Lcom/onesignal/OneSignalRestClient$6;->val$statusCode:I

    iput-object p3, p0, Lcom/onesignal/OneSignalRestClient$6;->val$response:Ljava/lang/String;

    iput-object p4, p0, Lcom/onesignal/OneSignalRestClient$6;->val$throwable:Ljava/lang/Throwable;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 298
    iget-object v0, p0, Lcom/onesignal/OneSignalRestClient$6;->val$handler:Lcom/onesignal/OneSignalRestClient$ResponseHandler;

    iget v1, p0, Lcom/onesignal/OneSignalRestClient$6;->val$statusCode:I

    iget-object v2, p0, Lcom/onesignal/OneSignalRestClient$6;->val$response:Ljava/lang/String;

    iget-object v3, p0, Lcom/onesignal/OneSignalRestClient$6;->val$throwable:Ljava/lang/Throwable;

    invoke-virtual {v0, v1, v2, v3}, Lcom/onesignal/OneSignalRestClient$ResponseHandler;->onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V

    return-void
.end method
