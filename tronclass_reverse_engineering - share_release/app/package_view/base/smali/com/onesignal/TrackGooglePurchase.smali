.class Lcom/onesignal/TrackGooglePurchase;
.super Ljava/lang/Object;
.source "TrackGooglePurchase.java"


# static fields
.field private static IInAppBillingServiceClass:Ljava/lang/Class; = null
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/Class<",
            "*>;"
        }
    .end annotation
.end field

.field private static iapEnabled:I = -0x63


# instance fields
.field private appContext:Landroid/content/Context;

.field private getPurchasesMethod:Ljava/lang/reflect/Method;

.field private getSkuDetailsMethod:Ljava/lang/reflect/Method;

.field private isWaitingForPurchasesRequest:Z

.field private mIInAppBillingService:Ljava/lang/Object;

.field private mServiceConn:Landroid/content/ServiceConnection;

.field private newAsExisting:Z

.field private purchaseTokens:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method constructor <init>(Landroid/content/Context;)V
    .locals 6

    .line 64
    const-string v0, "GTPlayerPurchases"

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v1, 0x1

    .line 61
    iput-boolean v1, p0, Lcom/onesignal/TrackGooglePurchase;->newAsExisting:Z

    const/4 v2, 0x0

    .line 62
    iput-boolean v2, p0, Lcom/onesignal/TrackGooglePurchase;->isWaitingForPurchasesRequest:Z

    .line 65
    iput-object p1, p0, Lcom/onesignal/TrackGooglePurchase;->appContext:Landroid/content/Context;

    .line 67
    new-instance p1, Ljava/util/ArrayList;

    invoke-direct {p1}, Ljava/util/ArrayList;-><init>()V

    iput-object p1, p0, Lcom/onesignal/TrackGooglePurchase;->purchaseTokens:Ljava/util/ArrayList;

    .line 69
    :try_start_0
    const-string p1, "purchaseTokens"

    const-string v3, "[]"

    invoke-static {v0, p1, v3}, Lcom/onesignal/OneSignalPrefs;->getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 72
    new-instance v3, Lorg/json/JSONArray;

    invoke-direct {v3, p1}, Lorg/json/JSONArray;-><init>(Ljava/lang/String;)V

    move p1, v2

    .line 73
    :goto_0
    invoke-virtual {v3}, Lorg/json/JSONArray;->length()I

    move-result v4

    if-ge p1, v4, :cond_0

    .line 74
    iget-object v4, p0, Lcom/onesignal/TrackGooglePurchase;->purchaseTokens:Ljava/util/ArrayList;

    invoke-virtual {v3, p1}, Lorg/json/JSONArray;->get(I)Ljava/lang/Object;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v4, v5}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    add-int/lit8 p1, p1, 0x1

    goto :goto_0

    .line 75
    :cond_0
    invoke-virtual {v3}, Lorg/json/JSONArray;->length()I

    move-result p1

    if-nez p1, :cond_1

    move v2, v1

    :cond_1
    iput-boolean v2, p0, Lcom/onesignal/TrackGooglePurchase;->newAsExisting:Z

    if-eqz v2, :cond_2

    .line 77
    const-string p1, "ExistingPurchases"

    invoke-static {v0, p1, v1}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result p1

    iput-boolean p1, p0, Lcom/onesignal/TrackGooglePurchase;->newAsExisting:Z
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception p1

    .line 80
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    .line 83
    :cond_2
    :goto_1
    invoke-virtual {p0}, Lcom/onesignal/TrackGooglePurchase;->trackIAP()V

    return-void
.end method

.method static CanTrack(Landroid/content/Context;)Z
    .locals 2

    .line 87
    sget v0, Lcom/onesignal/TrackGooglePurchase;->iapEnabled:I

    const/16 v1, -0x63

    if-ne v0, v1, :cond_0

    .line 88
    const-string v0, "com.android.vending.BILLING"

    invoke-virtual {p0, v0}, Landroid/content/Context;->checkCallingOrSelfPermission(Ljava/lang/String;)I

    move-result p0

    sput p0, Lcom/onesignal/TrackGooglePurchase;->iapEnabled:I

    :cond_0
    const/4 p0, 0x0

    .line 90
    :try_start_0
    sget v0, Lcom/onesignal/TrackGooglePurchase;->iapEnabled:I

    if-nez v0, :cond_1

    .line 91
    const-string v0, "com.android.vending.billing.IInAppBillingService"

    invoke-static {v0}, Ljava/lang/Class;->forName(Ljava/lang/String;)Ljava/lang/Class;

    move-result-object v0

    sput-object v0, Lcom/onesignal/TrackGooglePurchase;->IInAppBillingServiceClass:Ljava/lang/Class;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 97
    :cond_1
    sget v0, Lcom/onesignal/TrackGooglePurchase;->iapEnabled:I

    if-nez v0, :cond_2

    const/4 p0, 0x1

    :cond_2
    return p0

    .line 93
    :catchall_0
    sput p0, Lcom/onesignal/TrackGooglePurchase;->iapEnabled:I

    return p0
.end method

.method private QueryBoughtItems()V
    .locals 2

    .line 134
    iget-boolean v0, p0, Lcom/onesignal/TrackGooglePurchase;->isWaitingForPurchasesRequest:Z

    if-eqz v0, :cond_0

    return-void

    .line 137
    :cond_0
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/onesignal/TrackGooglePurchase$2;

    invoke-direct {v1, p0}, Lcom/onesignal/TrackGooglePurchase$2;-><init>(Lcom/onesignal/TrackGooglePurchase;)V

    invoke-direct {v0, v1}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;)V

    .line 182
    invoke-virtual {v0}, Ljava/lang/Thread;->start()V

    return-void
.end method

.method static synthetic access$002(I)I
    .locals 0

    .line 48
    sput p0, Lcom/onesignal/TrackGooglePurchase;->iapEnabled:I

    return p0
.end method

.method static synthetic access$100(Lcom/onesignal/TrackGooglePurchase;)Ljava/lang/Object;
    .locals 0

    .line 48
    iget-object p0, p0, Lcom/onesignal/TrackGooglePurchase;->mIInAppBillingService:Ljava/lang/Object;

    return-object p0
.end method

.method static synthetic access$1000(Lcom/onesignal/TrackGooglePurchase;Ljava/util/ArrayList;Ljava/util/ArrayList;)V
    .locals 0

    .line 48
    invoke-direct {p0, p1, p2}, Lcom/onesignal/TrackGooglePurchase;->sendPurchases(Ljava/util/ArrayList;Ljava/util/ArrayList;)V

    return-void
.end method

.method static synthetic access$102(Lcom/onesignal/TrackGooglePurchase;Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 48
    iput-object p1, p0, Lcom/onesignal/TrackGooglePurchase;->mIInAppBillingService:Ljava/lang/Object;

    return-object p1
.end method

.method static synthetic access$1102(Lcom/onesignal/TrackGooglePurchase;Z)Z
    .locals 0

    .line 48
    iput-boolean p1, p0, Lcom/onesignal/TrackGooglePurchase;->newAsExisting:Z

    return p1
.end method

.method static synthetic access$200(Ljava/lang/Class;)Ljava/lang/reflect/Method;
    .locals 0

    .line 48
    invoke-static {p0}, Lcom/onesignal/TrackGooglePurchase;->getAsInterfaceMethod(Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$300(Lcom/onesignal/TrackGooglePurchase;)V
    .locals 0

    .line 48
    invoke-direct {p0}, Lcom/onesignal/TrackGooglePurchase;->QueryBoughtItems()V

    return-void
.end method

.method static synthetic access$402(Lcom/onesignal/TrackGooglePurchase;Z)Z
    .locals 0

    .line 48
    iput-boolean p1, p0, Lcom/onesignal/TrackGooglePurchase;->isWaitingForPurchasesRequest:Z

    return p1
.end method

.method static synthetic access$500(Lcom/onesignal/TrackGooglePurchase;)Ljava/lang/reflect/Method;
    .locals 0

    .line 48
    iget-object p0, p0, Lcom/onesignal/TrackGooglePurchase;->getPurchasesMethod:Ljava/lang/reflect/Method;

    return-object p0
.end method

.method static synthetic access$502(Lcom/onesignal/TrackGooglePurchase;Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;
    .locals 0

    .line 48
    iput-object p1, p0, Lcom/onesignal/TrackGooglePurchase;->getPurchasesMethod:Ljava/lang/reflect/Method;

    return-object p1
.end method

.method static synthetic access$600()Ljava/lang/Class;
    .locals 1

    .line 48
    sget-object v0, Lcom/onesignal/TrackGooglePurchase;->IInAppBillingServiceClass:Ljava/lang/Class;

    return-object v0
.end method

.method static synthetic access$700(Ljava/lang/Class;)Ljava/lang/reflect/Method;
    .locals 0

    .line 48
    invoke-static {p0}, Lcom/onesignal/TrackGooglePurchase;->getGetPurchasesMethod(Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$800(Lcom/onesignal/TrackGooglePurchase;)Landroid/content/Context;
    .locals 0

    .line 48
    iget-object p0, p0, Lcom/onesignal/TrackGooglePurchase;->appContext:Landroid/content/Context;

    return-object p0
.end method

.method static synthetic access$900(Lcom/onesignal/TrackGooglePurchase;)Ljava/util/ArrayList;
    .locals 0

    .line 48
    iget-object p0, p0, Lcom/onesignal/TrackGooglePurchase;->purchaseTokens:Ljava/util/ArrayList;

    return-object p0
.end method

.method private static getAsInterfaceMethod(Ljava/lang/Class;)Ljava/lang/reflect/Method;
    .locals 7

    .line 251
    invoke-virtual {p0}, Ljava/lang/Class;->getMethods()[Ljava/lang/reflect/Method;

    move-result-object p0

    array-length v0, p0

    const/4 v1, 0x0

    move v2, v1

    :goto_0
    if-ge v2, v0, :cond_1

    aget-object v3, p0, v2

    .line 252
    invoke-virtual {v3}, Ljava/lang/reflect/Method;->getParameterTypes()[Ljava/lang/Class;

    move-result-object v4

    .line 253
    array-length v5, v4

    const/4 v6, 0x1

    if-ne v5, v6, :cond_0

    aget-object v4, v4, v1

    const-class v5, Landroid/os/IBinder;

    if-ne v4, v5, :cond_0

    return-object v3

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    const/4 p0, 0x0

    return-object p0
.end method

.method private static getGetPurchasesMethod(Ljava/lang/Class;)Ljava/lang/reflect/Method;
    .locals 7

    .line 261
    invoke-virtual {p0}, Ljava/lang/Class;->getMethods()[Ljava/lang/reflect/Method;

    move-result-object p0

    array-length v0, p0

    const/4 v1, 0x0

    move v2, v1

    :goto_0
    if-ge v2, v0, :cond_1

    aget-object v3, p0, v2

    .line 262
    invoke-virtual {v3}, Ljava/lang/reflect/Method;->getParameterTypes()[Ljava/lang/Class;

    move-result-object v4

    .line 263
    array-length v5, v4

    const/4 v6, 0x4

    if-ne v5, v6, :cond_0

    aget-object v5, v4, v1

    sget-object v6, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    if-ne v5, v6, :cond_0

    const/4 v5, 0x1

    aget-object v5, v4, v5

    const-class v6, Ljava/lang/String;

    if-ne v5, v6, :cond_0

    const/4 v5, 0x2

    aget-object v5, v4, v5

    const-class v6, Ljava/lang/String;

    if-ne v5, v6, :cond_0

    const/4 v5, 0x3

    aget-object v4, v4, v5

    const-class v5, Ljava/lang/String;

    if-ne v4, v5, :cond_0

    return-object v3

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    const/4 p0, 0x0

    return-object p0
.end method

.method private static getGetSkuDetailsMethod(Ljava/lang/Class;)Ljava/lang/reflect/Method;
    .locals 8

    .line 272
    invoke-virtual {p0}, Ljava/lang/Class;->getMethods()[Ljava/lang/reflect/Method;

    move-result-object p0

    array-length v0, p0

    const/4 v1, 0x0

    move v2, v1

    :goto_0
    if-ge v2, v0, :cond_1

    aget-object v3, p0, v2

    .line 273
    invoke-virtual {v3}, Ljava/lang/reflect/Method;->getParameterTypes()[Ljava/lang/Class;

    move-result-object v4

    .line 274
    invoke-virtual {v3}, Ljava/lang/reflect/Method;->getReturnType()Ljava/lang/Class;

    move-result-object v5

    .line 276
    array-length v6, v4

    const/4 v7, 0x4

    if-ne v6, v7, :cond_0

    aget-object v6, v4, v1

    sget-object v7, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    if-ne v6, v7, :cond_0

    const/4 v6, 0x1

    aget-object v6, v4, v6

    const-class v7, Ljava/lang/String;

    if-ne v6, v7, :cond_0

    const/4 v6, 0x2

    aget-object v6, v4, v6

    const-class v7, Ljava/lang/String;

    if-ne v6, v7, :cond_0

    const/4 v6, 0x3

    aget-object v4, v4, v6

    const-class v6, Landroid/os/Bundle;

    if-ne v4, v6, :cond_0

    const-class v4, Landroid/os/Bundle;

    if-ne v5, v4, :cond_0

    return-object v3

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    const/4 p0, 0x0

    return-object p0
.end method

.method private sendPurchases(Ljava/util/ArrayList;Ljava/util/ArrayList;)V
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/ArrayList<",
            "Ljava/lang/String;",
            ">;",
            "Ljava/util/ArrayList<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 187
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/TrackGooglePurchase;->getSkuDetailsMethod:Ljava/lang/reflect/Method;

    if-nez v0, :cond_0

    .line 188
    sget-object v0, Lcom/onesignal/TrackGooglePurchase;->IInAppBillingServiceClass:Ljava/lang/Class;

    invoke-static {v0}, Lcom/onesignal/TrackGooglePurchase;->getGetSkuDetailsMethod(Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/TrackGooglePurchase;->getSkuDetailsMethod:Ljava/lang/reflect/Method;

    const/4 v1, 0x1

    .line 189
    invoke-virtual {v0, v1}, Ljava/lang/reflect/Method;->setAccessible(Z)V

    .line 192
    :cond_0
    new-instance v0, Landroid/os/Bundle;

    invoke-direct {v0}, Landroid/os/Bundle;-><init>()V

    .line 193
    const-string v1, "ITEM_ID_LIST"

    invoke-virtual {v0, v1, p1}, Landroid/os/Bundle;->putStringArrayList(Ljava/lang/String;Ljava/util/ArrayList;)V

    .line 194
    iget-object v1, p0, Lcom/onesignal/TrackGooglePurchase;->getSkuDetailsMethod:Ljava/lang/reflect/Method;

    iget-object v2, p0, Lcom/onesignal/TrackGooglePurchase;->mIInAppBillingService:Ljava/lang/Object;

    const/4 v3, 0x3

    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    iget-object v4, p0, Lcom/onesignal/TrackGooglePurchase;->appContext:Landroid/content/Context;

    invoke-virtual {v4}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v4

    const-string v5, "inapp"

    filled-new-array {v3, v4, v5, v0}, [Ljava/lang/Object;

    move-result-object v0

    invoke-virtual {v1, v2, v0}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/os/Bundle;

    .line 196
    const-string v1, "RESPONSE_CODE"

    invoke-virtual {v0, v1}, Landroid/os/Bundle;->getInt(Ljava/lang/String;)I

    move-result v1

    if-nez v1, :cond_4

    .line 198
    const-string v1, "DETAILS_LIST"

    invoke-virtual {v0, v1}, Landroid/os/Bundle;->getStringArrayList(Ljava/lang/String;)Ljava/util/ArrayList;

    move-result-object v0

    .line 199
    new-instance v1, Ljava/util/HashMap;

    invoke-direct {v1}, Ljava/util/HashMap;-><init>()V

    .line 201
    invoke-virtual {v0}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 202
    new-instance v3, Lorg/json/JSONObject;

    invoke-direct {v3, v2}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 203
    const-string v2, "productId"

    invoke-virtual {v3, v2}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    .line 204
    new-instance v4, Ljava/math/BigDecimal;

    const-string v5, "price_amount_micros"

    invoke-virtual {v3, v5}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v5

    invoke-direct {v4, v5}, Ljava/math/BigDecimal;-><init>(Ljava/lang/String;)V

    .line 205
    new-instance v5, Ljava/math/BigDecimal;

    const v6, 0xf4240

    invoke-direct {v5, v6}, Ljava/math/BigDecimal;-><init>(I)V

    invoke-virtual {v4, v5}, Ljava/math/BigDecimal;->divide(Ljava/math/BigDecimal;)Ljava/math/BigDecimal;

    move-result-object v4

    .line 207
    new-instance v5, Lorg/json/JSONObject;

    invoke-direct {v5}, Lorg/json/JSONObject;-><init>()V

    .line 208
    const-string v6, "sku"

    invoke-virtual {v5, v6, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 209
    const-string v6, "iso"

    const-string v7, "price_currency_code"

    invoke-virtual {v3, v7}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v5, v6, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 210
    const-string v3, "amount"

    invoke-virtual {v4}, Ljava/math/BigDecimal;->toString()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v5, v3, v4}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 211
    invoke-interface {v1, v2, v5}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    goto :goto_0

    .line 214
    :cond_1
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0}, Lorg/json/JSONArray;-><init>()V

    .line 215
    invoke-virtual {p1}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_1
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_3

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 216
    invoke-interface {v1, v2}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_2

    goto :goto_1

    .line 218
    :cond_2
    invoke-interface {v1, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    invoke-virtual {v0, v2}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    goto :goto_1

    .line 222
    :cond_3
    invoke-virtual {v0}, Lorg/json/JSONArray;->length()I

    move-result p1

    if-lez p1, :cond_4

    .line 223
    new-instance p1, Lcom/onesignal/TrackGooglePurchase$3;

    invoke-direct {p1, p0, p2}, Lcom/onesignal/TrackGooglePurchase$3;-><init>(Lcom/onesignal/TrackGooglePurchase;Ljava/util/ArrayList;)V

    .line 242
    iget-boolean p2, p0, Lcom/onesignal/TrackGooglePurchase;->newAsExisting:Z

    invoke-static {v0, p2, p1}, Lcom/onesignal/OneSignal;->sendPurchases(Lorg/json/JSONArray;ZLcom/onesignal/OneSignalRestClient$ResponseHandler;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_2

    :catchall_0
    move-exception p1

    .line 246
    sget-object p2, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Failed to track IAP purchases"

    invoke-static {p2, v0, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    :cond_4
    :goto_2
    return-void
.end method


# virtual methods
.method trackIAP()V
    .locals 4

    .line 101
    iget-object v0, p0, Lcom/onesignal/TrackGooglePurchase;->mServiceConn:Landroid/content/ServiceConnection;

    if-nez v0, :cond_0

    .line 102
    new-instance v0, Lcom/onesignal/TrackGooglePurchase$1;

    invoke-direct {v0, p0}, Lcom/onesignal/TrackGooglePurchase$1;-><init>(Lcom/onesignal/TrackGooglePurchase;)V

    iput-object v0, p0, Lcom/onesignal/TrackGooglePurchase;->mServiceConn:Landroid/content/ServiceConnection;

    .line 125
    new-instance v0, Landroid/content/Intent;

    const-string v1, "com.android.vending.billing.InAppBillingService.BIND"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 126
    const-string v1, "com.android.vending"

    invoke-virtual {v0, v1}, Landroid/content/Intent;->setPackage(Ljava/lang/String;)Landroid/content/Intent;

    .line 128
    iget-object v1, p0, Lcom/onesignal/TrackGooglePurchase;->appContext:Landroid/content/Context;

    iget-object v2, p0, Lcom/onesignal/TrackGooglePurchase;->mServiceConn:Landroid/content/ServiceConnection;

    const/4 v3, 0x1

    invoke-virtual {v1, v0, v2, v3}, Landroid/content/Context;->bindService(Landroid/content/Intent;Landroid/content/ServiceConnection;I)Z

    goto :goto_0

    .line 129
    :cond_0
    iget-object v0, p0, Lcom/onesignal/TrackGooglePurchase;->mIInAppBillingService:Ljava/lang/Object;

    if-eqz v0, :cond_1

    .line 130
    invoke-direct {p0}, Lcom/onesignal/TrackGooglePurchase;->QueryBoughtItems()V

    :cond_1
    :goto_0
    return-void
.end method
