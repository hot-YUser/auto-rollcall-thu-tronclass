.class Lcom/onesignal/OSInAppMessageRepository$5;
.super Lorg/json/JSONObject;
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

.field final synthetic val$appId:Ljava/lang/String;

.field final synthetic val$deviceType:I

.field final synthetic val$userId:Ljava/lang/String;

.field final synthetic val$variantId:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 104
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageRepository$5;->this$0:Lcom/onesignal/OSInAppMessageRepository;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageRepository$5;->val$appId:Ljava/lang/String;

    iput-object p3, p0, Lcom/onesignal/OSInAppMessageRepository$5;->val$userId:Ljava/lang/String;

    iput-object p4, p0, Lcom/onesignal/OSInAppMessageRepository$5;->val$variantId:Ljava/lang/String;

    iput p5, p0, Lcom/onesignal/OSInAppMessageRepository$5;->val$deviceType:I

    invoke-direct {p0}, Lorg/json/JSONObject;-><init>()V

    .line 105
    const-string p1, "app_id"

    invoke-virtual {p0, p1, p2}, Lcom/onesignal/OSInAppMessageRepository$5;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 106
    const-string p1, "player_id"

    invoke-virtual {p0, p1, p3}, Lcom/onesignal/OSInAppMessageRepository$5;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 107
    const-string p1, "variant_id"

    invoke-virtual {p0, p1, p4}, Lcom/onesignal/OSInAppMessageRepository$5;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 108
    const-string p1, "device_type"

    invoke-virtual {p0, p1, p5}, Lcom/onesignal/OSInAppMessageRepository$5;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 109
    const-string p1, "first_impression"

    const/4 p2, 0x1

    invoke-virtual {p0, p1, p2}, Lcom/onesignal/OSInAppMessageRepository$5;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    return-void
.end method
