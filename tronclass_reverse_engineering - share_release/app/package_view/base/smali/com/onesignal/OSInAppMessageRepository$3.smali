.class Lcom/onesignal/OSInAppMessageRepository$3;
.super Lorg/json/JSONObject;
.source "OSInAppMessageRepository.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageRepository;->sendIAMPageImpression(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSInAppMessageRepository;

.field final synthetic val$appId:Ljava/lang/String;

.field final synthetic val$deviceType:I

.field final synthetic val$pageId:Ljava/lang/String;

.field final synthetic val$userId:Ljava/lang/String;

.field final synthetic val$variantId:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 74
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$3;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageRepository$3;->val$appId:Ljava/lang/String;

    iput-object p3, p0, Lcom/onesignal/OSInAppMessageRepository$3;->val$userId:Ljava/lang/String;

    iput-object p4, p0, Lcom/onesignal/OSInAppMessageRepository$3;->val$variantId:Ljava/lang/String;

    iput p5, p0, Lcom/onesignal/OSInAppMessageRepository$3;->val$deviceType:I

    iput-object p6, p0, Lcom/onesignal/OSInAppMessageRepository$3;->val$pageId:Ljava/lang/String;

    invoke-direct {p0}, Lorg/json/JSONObject;-><init>()V

    .line 75
    const-string p1, "app_id"

    invoke-virtual {p0, p1, p2}, Lcom/onesignal/OSInAppMessageRepository$3;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 76
    const-string p1, "player_id"

    invoke-virtual {p0, p1, p3}, Lcom/onesignal/OSInAppMessageRepository$3;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 77
    const-string p1, "variant_id"

    invoke-virtual {p0, p1, p4}, Lcom/onesignal/OSInAppMessageRepository$3;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 78
    const-string p1, "device_type"

    invoke-virtual {p0, p1, p5}, Lcom/onesignal/OSInAppMessageRepository$3;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 79
    const-string p1, "page_id"

    invoke-virtual {p0, p1, p6}, Lcom/onesignal/OSInAppMessageRepository$3;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    return-void
.end method
