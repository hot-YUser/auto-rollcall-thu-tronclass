.class public final enum Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;
.super Ljava/lang/Enum;
.source "OSInAppMessageAction.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OSInAppMessageAction;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "OSInAppMessageActionUrlType"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

.field public static final enum BROWSER:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

.field public static final enum IN_APP_WEBVIEW:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

.field public static final enum REPLACE_CONTENT:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;


# instance fields
.field private text:Ljava/lang/String;


# direct methods
.method static constructor <clinit>()V
    .locals 6

    .line 213
    new-instance v0, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    const/4 v1, 0x0

    const-string v2, "webview"

    const-string v3, "IN_APP_WEBVIEW"

    invoke-direct {v0, v3, v1, v2}, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v0, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->IN_APP_WEBVIEW:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    .line 216
    new-instance v1, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    const/4 v2, 0x1

    const-string v3, "browser"

    const-string v4, "BROWSER"

    invoke-direct {v1, v4, v2, v3}, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v1, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->BROWSER:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    .line 219
    new-instance v2, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    const/4 v3, 0x2

    const-string v4, "replacement"

    const-string v5, "REPLACE_CONTENT"

    invoke-direct {v2, v5, v3, v4}, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;-><init>(Ljava/lang/String;ILjava/lang/String;)V

    sput-object v2, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->REPLACE_CONTENT:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    .line 211
    filled-new-array {v0, v1, v2}, [Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    move-result-object v0

    sput-object v0, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->$VALUES:[Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;ILjava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            ")V"
        }
    .end annotation

    .line 223
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    .line 224
    iput-object p3, p0, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->text:Ljava/lang/String;

    return-void
.end method

.method public static fromString(Ljava/lang/String;)Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;
    .locals 5

    .line 233
    invoke-static {}, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->values()[Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    move-result-object v0

    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_1

    aget-object v3, v0, v2

    .line 234
    iget-object v4, v3, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->text:Ljava/lang/String;

    invoke-virtual {v4, p0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v4

    if-eqz v4, :cond_0

    return-object v3

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    const/4 p0, 0x0

    return-object p0
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;
    .locals 1

    .line 211
    const-class v0, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    return-object p0
.end method

.method public static values()[Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;
    .locals 1

    .line 211
    sget-object v0, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->$VALUES:[Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    invoke-virtual {v0}, [Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    return-object v0
.end method


# virtual methods
.method public toJSONObject()Lorg/json/JSONObject;
    .locals 3

    .line 242
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 244
    :try_start_0
    const-string v1, "url_type"

    iget-object v2, p0, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->text:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v1

    .line 246
    invoke-virtual {v1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 1

    .line 229
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->text:Ljava/lang/String;

    return-object v0
.end method
