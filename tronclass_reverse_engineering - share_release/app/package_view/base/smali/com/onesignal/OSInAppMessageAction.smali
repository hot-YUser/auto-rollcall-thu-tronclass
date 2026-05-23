.class public Lcom/onesignal/OSInAppMessageAction;
.super Ljava/lang/Object;
.source "OSInAppMessageAction.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;
    }
.end annotation


# static fields
.field private static final CLICK_NAME:Ljava/lang/String; = "click_name"

.field private static final CLICK_URL:Ljava/lang/String; = "click_url"

.field private static final CLOSE:Ljava/lang/String; = "close"

.field private static final CLOSES_MESSAGE:Ljava/lang/String; = "closes_message"

.field private static final FIRST_CLICK:Ljava/lang/String; = "first_click"

.field private static final ID:Ljava/lang/String; = "id"

.field private static final NAME:Ljava/lang/String; = "name"

.field private static final OUTCOMES:Ljava/lang/String; = "outcomes"

.field private static final PAGE_ID:Ljava/lang/String; = "pageId"

.field private static final PROMPTS:Ljava/lang/String; = "prompts"

.field private static final TAGS:Ljava/lang/String; = "tags"

.field private static final URL:Ljava/lang/String; = "url"

.field private static final URL_TARGET:Ljava/lang/String; = "url_target"


# instance fields
.field private clickId:Ljava/lang/String;

.field private clickName:Ljava/lang/String;

.field private clickUrl:Ljava/lang/String;

.field private closesMessage:Z

.field private firstClick:Z

.field private outcomes:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessageOutcome;",
            ">;"
        }
    .end annotation
.end field

.field private pageId:Ljava/lang/String;

.field private prompts:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessagePrompt;",
            ">;"
        }
    .end annotation
.end field

.field private tags:Lcom/onesignal/OSInAppMessageTag;

.field private urlTarget:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;


# direct methods
.method constructor <init>(Lorg/json/JSONObject;)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 87
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 63
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->outcomes:Ljava/util/List;

    .line 69
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->prompts:Ljava/util/List;

    .line 88
    const-string v0, "id"

    const/4 v1, 0x0

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->clickId:Ljava/lang/String;

    .line 89
    const-string v0, "name"

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->clickName:Ljava/lang/String;

    .line 90
    const-string v0, "url"

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->clickUrl:Ljava/lang/String;

    .line 91
    const-string v0, "pageId"

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->pageId:Ljava/lang/String;

    .line 92
    const-string v0, "url_target"

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->fromString(Ljava/lang/String;)Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->urlTarget:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    if-nez v0, :cond_0

    .line 94
    sget-object v0, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->IN_APP_WEBVIEW:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->urlTarget:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    .line 96
    :cond_0
    const-string v0, "close"

    const/4 v1, 0x1

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageAction;->closesMessage:Z

    .line 98
    const-string v0, "outcomes"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 99
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageAction;->parseOutcomes(Lorg/json/JSONObject;)V

    .line 101
    :cond_1
    const-string v0, "tags"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_2

    .line 102
    new-instance v1, Lcom/onesignal/OSInAppMessageTag;

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    invoke-direct {v1, v0}, Lcom/onesignal/OSInAppMessageTag;-><init>(Lorg/json/JSONObject;)V

    iput-object v1, p0, Lcom/onesignal/OSInAppMessageAction;->tags:Lcom/onesignal/OSInAppMessageTag;

    .line 104
    :cond_2
    const-string v0, "prompts"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_3

    .line 105
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageAction;->parsePrompts(Lorg/json/JSONObject;)V

    :cond_3
    return-void
.end method

.method private parseOutcomes(Lorg/json/JSONObject;)V
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 109
    const-string v0, "outcomes"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object p1

    const/4 v0, 0x0

    .line 110
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v1

    if-ge v0, v1, :cond_0

    .line 111
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageAction;->outcomes:Ljava/util/List;

    new-instance v2, Lcom/onesignal/OSInAppMessageOutcome;

    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->get(I)Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Lorg/json/JSONObject;

    invoke-direct {v2, v3}, Lcom/onesignal/OSInAppMessageOutcome;-><init>(Lorg/json/JSONObject;)V

    invoke-interface {v1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method private parsePrompts(Lorg/json/JSONObject;)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 116
    const-string v0, "prompts"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object p1

    const/4 v0, 0x0

    .line 117
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v1

    if-ge v0, v1, :cond_2

    .line 118
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v1

    .line 119
    invoke-virtual {v1}, Ljava/lang/String;->hashCode()I

    const-string v2, "push"

    invoke-virtual {v1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_1

    const-string v2, "location"

    invoke-virtual {v1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-nez v1, :cond_0

    goto :goto_1

    .line 124
    :cond_0
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageAction;->prompts:Ljava/util/List;

    new-instance v2, Lcom/onesignal/OSInAppMessageLocationPrompt;

    invoke-direct {v2}, Lcom/onesignal/OSInAppMessageLocationPrompt;-><init>()V

    invoke-interface {v1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_1

    .line 121
    :cond_1
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageAction;->prompts:Ljava/util/List;

    new-instance v2, Lcom/onesignal/OSInAppMessagePushPrompt;

    invoke-direct {v2}, Lcom/onesignal/OSInAppMessagePushPrompt;-><init>()V

    invoke-interface {v1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    :goto_1
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    :cond_2
    return-void
.end method


# virtual methods
.method public doesCloseMessage()Z
    .locals 1

    .line 177
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageAction;->closesMessage:Z

    return v0
.end method

.method getClickId()Ljava/lang/String;
    .locals 1

    .line 132
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->clickId:Ljava/lang/String;

    return-object v0
.end method

.method public getClickName()Ljava/lang/String;
    .locals 1

    .line 137
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->clickName:Ljava/lang/String;

    return-object v0
.end method

.method public getClickUrl()Ljava/lang/String;
    .locals 1

    .line 151
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->clickUrl:Ljava/lang/String;

    return-object v0
.end method

.method public getOutcomes()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessageOutcome;",
            ">;"
        }
    .end annotation

    .line 156
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->outcomes:Ljava/util/List;

    return-object v0
.end method

.method getPageId()Ljava/lang/String;
    .locals 1

    .line 141
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->pageId:Ljava/lang/String;

    return-object v0
.end method

.method public getPrompts()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessagePrompt;",
            ">;"
        }
    .end annotation

    .line 161
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->prompts:Ljava/util/List;

    return-object v0
.end method

.method public getTags()Lcom/onesignal/OSInAppMessageTag;
    .locals 1

    .line 165
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->tags:Lcom/onesignal/OSInAppMessageTag;

    return-object v0
.end method

.method public getUrlTarget()Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;
    .locals 1

    .line 146
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageAction;->urlTarget:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    return-object v0
.end method

.method public isFirstClick()Z
    .locals 1

    .line 169
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageAction;->firstClick:Z

    return v0
.end method

.method setFirstClick(Z)V
    .locals 0

    .line 173
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageAction;->firstClick:Z

    return-void
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 4

    .line 181
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 183
    :try_start_0
    const-string v1, "click_name"

    iget-object v2, p0, Lcom/onesignal/OSInAppMessageAction;->clickName:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 184
    const-string v1, "click_url"

    iget-object v2, p0, Lcom/onesignal/OSInAppMessageAction;->clickUrl:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 185
    const-string v1, "first_click"

    iget-boolean v2, p0, Lcom/onesignal/OSInAppMessageAction;->firstClick:Z

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 186
    const-string v1, "closes_message"

    iget-boolean v2, p0, Lcom/onesignal/OSInAppMessageAction;->closesMessage:Z

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 188
    new-instance v1, Lorg/json/JSONArray;

    invoke-direct {v1}, Lorg/json/JSONArray;-><init>()V

    .line 189
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageAction;->outcomes:Ljava/util/List;

    invoke-interface {v2}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v2

    :goto_0
    invoke-interface {v2}, Ljava/util/Iterator;->hasNext()Z

    move-result v3

    if-eqz v3, :cond_0

    invoke-interface {v2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Lcom/onesignal/OSInAppMessageOutcome;

    .line 190
    invoke-virtual {v3}, Lcom/onesignal/OSInAppMessageOutcome;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v3

    invoke-virtual {v1, v3}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    goto :goto_0

    .line 192
    :cond_0
    const-string v2, "outcomes"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 194
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageAction;->tags:Lcom/onesignal/OSInAppMessageTag;

    if-eqz v1, :cond_1

    .line 195
    const-string v2, "tags"

    invoke-virtual {v1}, Lcom/onesignal/OSInAppMessageTag;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v1

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception v1

    .line 201
    invoke-virtual {v1}, Lorg/json/JSONException;->printStackTrace()V

    :cond_1
    :goto_1
    return-object v0
.end method
