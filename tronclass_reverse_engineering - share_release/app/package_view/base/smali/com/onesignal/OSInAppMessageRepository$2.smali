.class Lcom/onesignal/OSInAppMessageRepository$2;
.super Lcom/onesignal/OneSignalRestClient$ResponseHandler;
.source "OSInAppMessageRepository.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageRepository;->sendIAMClick(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;ZLjava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSInAppMessageRepository;

.field final synthetic val$clickedMessagesId:Ljava/util/Set;

.field final synthetic val$requestResponse:Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageRepository;Ljava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
    .locals 0

    .line 51
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$2;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageRepository$2;->val$clickedMessagesId:Ljava/util/Set;

    iput-object p3, p0, Lcom/onesignal/OSInAppMessageRepository$2;->val$requestResponse:Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;

    invoke-direct {p0}, Lcom/onesignal/OneSignalRestClient$ResponseHandler;-><init>()V

    return-void
.end method


# virtual methods
.method onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 1

    .line 61
    iget-object p3, p0, Lcom/onesignal/OSInAppMessageRepository$2;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    const-string v0, "engagement"

    invoke-static {p3, v0, p1, p2}, Lcom/onesignal/OSInAppMessageRepository;->access$200(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;ILjava/lang/String;)V

    .line 62
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$2;->val$requestResponse:Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;

    invoke-interface {p1, p2}, Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;->onFailure(Ljava/lang/String;)V

    return-void
.end method

.method onSuccess(Ljava/lang/String;)V
    .locals 2

    .line 54
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository$2;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    const-string v1, "engagement"

    invoke-static {v0, v1, p1}, Lcom/onesignal/OSInAppMessageRepository;->access$000(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;Ljava/lang/String;)V

    .line 56
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$2;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository$2;->val$clickedMessagesId:Ljava/util/Set;

    invoke-static {p1, v0}, Lcom/onesignal/OSInAppMessageRepository;->access$100(Lcom/onesignal/OSInAppMessageRepository;Ljava/util/Set;)V

    return-void
.end method
