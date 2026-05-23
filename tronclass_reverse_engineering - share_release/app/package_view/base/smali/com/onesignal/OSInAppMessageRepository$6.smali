.class Lcom/onesignal/OSInAppMessageRepository$6;
.super Lcom/onesignal/OneSignalRestClient$ResponseHandler;
.source "OSInAppMessageRepository.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageRepository;->sendIAMImpression(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSInAppMessageRepository;

.field final synthetic val$impressionedMessages:Ljava/util/Set;

.field final synthetic val$requestResponse:Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageRepository;Ljava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
    .locals 0

    .line 112
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$6;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageRepository$6;->val$impressionedMessages:Ljava/util/Set;

    iput-object p3, p0, Lcom/onesignal/OSInAppMessageRepository$6;->val$requestResponse:Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;

    invoke-direct {p0}, Lcom/onesignal/OneSignalRestClient$ResponseHandler;-><init>()V

    return-void
.end method


# virtual methods
.method onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 1

    .line 121
    iget-object p3, p0, Lcom/onesignal/OSInAppMessageRepository$6;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    const-string v0, "impression"

    invoke-static {p3, v0, p1, p2}, Lcom/onesignal/OSInAppMessageRepository;->access$200(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;ILjava/lang/String;)V

    .line 122
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$6;->val$requestResponse:Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;

    invoke-interface {p1, p2}, Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;->onFailure(Ljava/lang/String;)V

    return-void
.end method

.method onSuccess(Ljava/lang/String;)V
    .locals 2

    .line 115
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository$6;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    const-string v1, "impression"

    invoke-static {v0, v1, p1}, Lcom/onesignal/OSInAppMessageRepository;->access$000(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;Ljava/lang/String;)V

    .line 116
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$6;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository$6;->val$impressionedMessages:Ljava/util/Set;

    invoke-static {p1, v0}, Lcom/onesignal/OSInAppMessageRepository;->access$300(Lcom/onesignal/OSInAppMessageRepository;Ljava/util/Set;)V

    return-void
.end method
