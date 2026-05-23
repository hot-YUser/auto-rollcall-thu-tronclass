.class Lcom/wisdomgarden/trpc/openwith/Serializer;
.super Ljava/lang/Object;
.source "Serializer.java"


# static fields
.field private static MAX_ATTACHMENT_COUNT:I = 0x5


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method constructor <init>()V
    .locals 0

    .line 32
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static itemsFromClipData(Landroid/content/Context;Landroid/content/ClipData;Ljava/io/File;)Lcom/wisdomgarden/trpc/openwith/SharedData;
    .locals 8
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    if-nez p1, :cond_0

    const/4 p0, 0x0

    return-object p0

    .line 115
    :cond_0
    invoke-virtual {p1}, Landroid/content/ClipData;->getItemCount()I

    move-result v0

    .line 116
    new-array v1, v0, [Lorg/json/JSONObject;

    const/4 v2, 0x0

    move v3, v2

    :goto_0
    if-ge v3, v0, :cond_2

    .line 118
    invoke-virtual {p1, v3}, Landroid/content/ClipData;->getItemAt(I)Landroid/content/ClipData$Item;

    move-result-object v4

    invoke-virtual {v4}, Landroid/content/ClipData$Item;->getUri()Landroid/net/Uri;

    move-result-object v4

    if-eqz v4, :cond_1

    .line 121
    invoke-static {p0, v4, p2}, Lcom/wisdomgarden/trpc/openwith/Serializer;->toJSONObject(Landroid/content/Context;Landroid/net/Uri;Ljava/io/File;)Lorg/json/JSONObject;

    move-result-object v4

    aput-object v4, v1, v3

    goto :goto_1

    .line 124
    :cond_1
    invoke-virtual {p1, v3}, Landroid/content/ClipData;->getItemAt(I)Landroid/content/ClipData$Item;

    move-result-object v4

    invoke-virtual {v4}, Landroid/content/ClipData$Item;->getText()Ljava/lang/CharSequence;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v4

    .line 125
    new-instance v5, Lorg/json/JSONObject;

    invoke-direct {v5}, Lorg/json/JSONObject;-><init>()V

    .line 126
    const-string v6, "type"

    const-string v7, "text/plain"

    invoke-virtual {v5, v6, v7}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 127
    const-string v6, "uri"

    const-string v7, ""

    invoke-virtual {v5, v6, v7}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 128
    const-string v6, "path"

    invoke-virtual {v5, v6, v7}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 129
    const-string v6, "text"

    invoke-virtual {v5, v6, v4}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 130
    const-string v4, "name"

    invoke-virtual {v5, v4, v6}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 132
    aput-object v5, v1, v3

    :goto_1
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 137
    :cond_2
    new-instance p0, Ljava/util/ArrayList;

    invoke-direct {p0}, Ljava/util/ArrayList;-><init>()V

    :goto_2
    if-ge v2, v0, :cond_4

    .line 139
    aget-object p1, v1, v2

    if-eqz p1, :cond_3

    .line 140
    invoke-interface {p0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 141
    invoke-interface {p0}, Ljava/util/List;->size()I

    move-result p1

    sget p2, Lcom/wisdomgarden/trpc/openwith/Serializer;->MAX_ATTACHMENT_COUNT:I

    if-lt p1, p2, :cond_3

    goto :goto_3

    :cond_3
    add-int/lit8 v2, v2, 0x1

    goto :goto_2

    .line 146
    :cond_4
    :goto_3
    new-instance p1, Lcom/wisdomgarden/trpc/openwith/SharedData;

    new-instance p2, Lorg/json/JSONArray;

    invoke-direct {p2, p0}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    invoke-direct {p1, v0, p2}, Lcom/wisdomgarden/trpc/openwith/SharedData;-><init>(ILorg/json/JSONArray;)V

    return-object p1
.end method

.method public static itemsFromData(Landroid/content/Context;Landroid/net/Uri;Ljava/io/File;)Lcom/wisdomgarden/trpc/openwith/SharedData;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/4 v0, 0x0

    if-nez p1, :cond_0

    return-object v0

    .line 202
    :cond_0
    invoke-static {p0, p1, p2}, Lcom/wisdomgarden/trpc/openwith/Serializer;->toJSONObject(Landroid/content/Context;Landroid/net/Uri;Ljava/io/File;)Lorg/json/JSONObject;

    move-result-object p0

    if-nez p0, :cond_1

    return-object v0

    :cond_1
    const/4 p1, 0x1

    .line 206
    new-array p2, p1, [Lorg/json/JSONObject;

    const/4 v0, 0x0

    .line 207
    aput-object p0, p2, v0

    .line 208
    new-instance p0, Lcom/wisdomgarden/trpc/openwith/SharedData;

    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0, p2}, Lorg/json/JSONArray;-><init>(Ljava/lang/Object;)V

    invoke-direct {p0, p1, v0}, Lcom/wisdomgarden/trpc/openwith/SharedData;-><init>(ILorg/json/JSONArray;)V

    return-object p0
.end method

.method public static itemsFromExtras(Landroid/content/Context;Landroid/os/Bundle;Ljava/io/File;)Lcom/wisdomgarden/trpc/openwith/SharedData;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    if-nez p1, :cond_0

    const/4 p0, 0x0

    return-object p0

    .line 166
    :cond_0
    const-string v0, "android.intent.extra.STREAM"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v1

    .line 167
    instance-of v2, v1, Ljava/util/ArrayList;

    if-eqz v2, :cond_1

    .line 168
    check-cast v1, Ljava/util/ArrayList;

    goto :goto_0

    .line 170
    :cond_1
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    .line 171
    invoke-virtual {p1, v0}, Landroid/os/Bundle;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/net/Uri;

    invoke-virtual {v1, p1}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 174
    :goto_0
    new-instance p1, Ljava/util/ArrayList;

    invoke-direct {p1}, Ljava/util/ArrayList;-><init>()V

    const/4 v0, 0x0

    .line 176
    :goto_1
    invoke-virtual {v1}, Ljava/util/ArrayList;->size()I

    move-result v2

    if-ge v0, v2, :cond_3

    .line 177
    invoke-virtual {v1, v0}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Landroid/net/Uri;

    .line 178
    invoke-static {p0, v2, p2}, Lcom/wisdomgarden/trpc/openwith/Serializer;->toJSONObject(Landroid/content/Context;Landroid/net/Uri;Ljava/io/File;)Lorg/json/JSONObject;

    move-result-object v2

    if-eqz v2, :cond_2

    .line 180
    invoke-interface {p1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 181
    invoke-interface {p1}, Ljava/util/List;->size()I

    move-result v2

    sget v3, Lcom/wisdomgarden/trpc/openwith/Serializer;->MAX_ATTACHMENT_COUNT:I

    if-lt v2, v3, :cond_2

    goto :goto_2

    :cond_2
    add-int/lit8 v0, v0, 0x1

    goto :goto_1

    .line 186
    :cond_3
    :goto_2
    new-instance p0, Lcom/wisdomgarden/trpc/openwith/SharedData;

    invoke-virtual {v1}, Ljava/util/ArrayList;->size()I

    move-result p2

    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0, p1}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    invoke-direct {p0, p2, v0}, Lcom/wisdomgarden/trpc/openwith/SharedData;-><init>(ILorg/json/JSONArray;)V

    return-object p0
.end method

.method public static readExitOnSent(Landroid/os/Bundle;)Z
    .locals 2

    const/4 v0, 0x0

    if-nez p0, :cond_0

    return v0

    .line 99
    :cond_0
    const-string v1, "exit_on_sent"

    invoke-virtual {p0, v1, v0}, Landroid/os/Bundle;->getBoolean(Ljava/lang/String;Z)Z

    move-result p0

    return p0
.end method

.method public static setMaxAttachmentCount(I)V
    .locals 0

    .line 36
    sput p0, Lcom/wisdomgarden/trpc/openwith/Serializer;->MAX_ATTACHMENT_COUNT:I

    return-void
.end method

.method public static toJSONObject(Landroid/content/Context;Landroid/content/Intent;Ljava/io/File;)Lorg/json/JSONObject;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 54
    :try_start_0
    invoke-virtual {p1}, Landroid/content/Intent;->getClipData()Landroid/content/ClipData;

    move-result-object v1

    invoke-static {p0, v1, p2}, Lcom/wisdomgarden/trpc/openwith/Serializer;->itemsFromClipData(Landroid/content/Context;Landroid/content/ClipData;Ljava/io/File;)Lcom/wisdomgarden/trpc/openwith/SharedData;

    move-result-object v1

    if-eqz v1, :cond_0

    .line 56
    iget-object v2, v1, Lcom/wisdomgarden/trpc/openwith/SharedData;->items:Lorg/json/JSONArray;

    if-eqz v2, :cond_0

    iget-object v2, v1, Lcom/wisdomgarden/trpc/openwith/SharedData;->items:Lorg/json/JSONArray;

    invoke-virtual {v2}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-nez v2, :cond_1

    .line 57
    :cond_0
    invoke-virtual {p1}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object v1

    invoke-static {p0, v1, p2}, Lcom/wisdomgarden/trpc/openwith/Serializer;->itemsFromExtras(Landroid/content/Context;Landroid/os/Bundle;Ljava/io/File;)Lcom/wisdomgarden/trpc/openwith/SharedData;

    move-result-object v1

    :cond_1
    if-eqz v1, :cond_2

    .line 59
    iget-object v2, v1, Lcom/wisdomgarden/trpc/openwith/SharedData;->items:Lorg/json/JSONArray;

    if-eqz v2, :cond_2

    iget-object v2, v1, Lcom/wisdomgarden/trpc/openwith/SharedData;->items:Lorg/json/JSONArray;

    invoke-virtual {v2}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-nez v2, :cond_3

    .line 60
    :cond_2
    invoke-virtual {p1}, Landroid/content/Intent;->getData()Landroid/net/Uri;

    move-result-object v1

    invoke-static {p0, v1, p2}, Lcom/wisdomgarden/trpc/openwith/Serializer;->itemsFromData(Landroid/content/Context;Landroid/net/Uri;Ljava/io/File;)Lcom/wisdomgarden/trpc/openwith/SharedData;

    move-result-object v1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-object v1, v0

    :cond_3
    :goto_0
    if-nez v1, :cond_4

    return-object v0

    .line 70
    :cond_4
    new-instance p0, Lorg/json/JSONObject;

    invoke-direct {p0}, Lorg/json/JSONObject;-><init>()V

    .line 71
    invoke-virtual {p1}, Landroid/content/Intent;->getAction()Ljava/lang/String;

    move-result-object p2

    invoke-static {p2}, Lcom/wisdomgarden/trpc/openwith/Serializer;->translateAction(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p2

    const-string v0, "action"

    invoke-virtual {p0, v0, p2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 72
    invoke-virtual {p1}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object p1

    invoke-static {p1}, Lcom/wisdomgarden/trpc/openwith/Serializer;->readExitOnSent(Landroid/os/Bundle;)Z

    move-result p1

    const-string p2, "exit"

    invoke-virtual {p0, p2, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 73
    const-string p1, "items"

    iget-object p2, v1, Lcom/wisdomgarden/trpc/openwith/SharedData;->items:Lorg/json/JSONArray;

    invoke-virtual {p0, p1, p2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 74
    const-string p1, "receivedCounts"

    iget p2, v1, Lcom/wisdomgarden/trpc/openwith/SharedData;->receivedCounts:I

    invoke-virtual {p0, p1, p2}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 75
    const-string p1, "maxAttachmentCount"

    sget p2, Lcom/wisdomgarden/trpc/openwith/Serializer;->MAX_ATTACHMENT_COUNT:I

    invoke-virtual {p0, p1, p2}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    return-object p0
.end method

.method private static toJSONObject(Landroid/content/Context;Landroid/net/Uri;Ljava/io/File;)Lorg/json/JSONObject;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/4 v0, 0x0

    if-nez p1, :cond_0

    return-object v0

    .line 227
    :cond_0
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1}, Lorg/json/JSONObject;-><init>()V

    .line 228
    invoke-virtual {p0}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v2

    invoke-virtual {v2, p1}, Landroid/content/ContentResolver;->getType(Landroid/net/Uri;)Ljava/lang/String;

    move-result-object v2

    .line 231
    :try_start_0
    invoke-static {p0, p1, p2}, Lcom/wisdomgarden/trpc/openwith/PathUtil;->getPath(Landroid/content/Context;Landroid/net/Uri;Ljava/io/File;)Lcom/wisdomgarden/trpc/openwith/PathData;

    move-result-object p0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-object p0, v0

    :goto_0
    if-nez p0, :cond_1

    return-object v0

    .line 240
    :cond_1
    const-string p2, "type"

    invoke-virtual {v1, p2, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 241
    const-string p2, "uri"

    invoke-virtual {v1, p2, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 242
    const-string p1, "path"

    iget-object p2, p0, Lcom/wisdomgarden/trpc/openwith/PathData;->filePath:Ljava/lang/String;

    invoke-virtual {v1, p1, p2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 243
    const-string p1, "isTemp"

    iget-object p2, p0, Lcom/wisdomgarden/trpc/openwith/PathData;->isTemp:Ljava/lang/Boolean;

    invoke-virtual {v1, p1, p2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 244
    const-string p1, "name"

    iget-object p0, p0, Lcom/wisdomgarden/trpc/openwith/PathData;->fileName:Ljava/lang/String;

    invoke-virtual {v1, p1, p0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    return-object v1
.end method

.method public static translateAction(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 81
    const-string v0, "android.intent.action.SEND"

    invoke-virtual {v0, p0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_2

    const-string v0, "android.intent.action.SEND_MULTIPLE"

    .line 82
    invoke-virtual {v0, p0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    .line 84
    :cond_0
    const-string v0, "android.intent.action.VIEW"

    invoke-virtual {v0, p0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 85
    const-string p0, "VIEW"

    :cond_1
    return-object p0

    .line 83
    :cond_2
    :goto_0
    const-string p0, "SEND"

    return-object p0
.end method
