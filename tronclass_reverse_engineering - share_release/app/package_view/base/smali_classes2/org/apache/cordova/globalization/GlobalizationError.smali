.class public Lorg/apache/cordova/globalization/GlobalizationError;
.super Ljava/lang/Exception;
.source "GlobalizationError.java"


# static fields
.field public static final FORMATTING_ERROR:Ljava/lang/String; = "FORMATTING_ERROR"

.field public static final PARSING_ERROR:Ljava/lang/String; = "PARSING_ERROR"

.field public static final PATTERN_ERROR:Ljava/lang/String; = "PATTERN_ERROR"

.field public static final UNKNOWN_ERROR:Ljava/lang/String; = "UNKNOWN_ERROR"

.field private static final serialVersionUID:J = 0x1L


# instance fields
.field error:I


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 47
    invoke-direct {p0}, Ljava/lang/Exception;-><init>()V

    const/4 v0, 0x0

    .line 43
    iput v0, p0, Lorg/apache/cordova/globalization/GlobalizationError;->error:I

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;)V
    .locals 1

    .line 53
    invoke-direct {p0}, Ljava/lang/Exception;-><init>()V

    const/4 v0, 0x0

    .line 43
    iput v0, p0, Lorg/apache/cordova/globalization/GlobalizationError;->error:I

    .line 54
    const-string v0, "FORMATTING_ERROR"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 p1, 0x1

    .line 55
    iput p1, p0, Lorg/apache/cordova/globalization/GlobalizationError;->error:I

    goto :goto_0

    .line 56
    :cond_0
    const-string v0, "PARSING_ERROR"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    const/4 p1, 0x2

    .line 57
    iput p1, p0, Lorg/apache/cordova/globalization/GlobalizationError;->error:I

    goto :goto_0

    .line 58
    :cond_1
    const-string v0, "PATTERN_ERROR"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_2

    const/4 p1, 0x3

    .line 59
    iput p1, p0, Lorg/apache/cordova/globalization/GlobalizationError;->error:I

    :cond_2
    :goto_0
    return-void
.end method


# virtual methods
.method public getErrorCode()I
    .locals 1

    .line 91
    iget v0, p0, Lorg/apache/cordova/globalization/GlobalizationError;->error:I

    return v0
.end method

.method public getErrorString()Ljava/lang/String;
    .locals 2

    .line 69
    iget v0, p0, Lorg/apache/cordova/globalization/GlobalizationError;->error:I

    if-eqz v0, :cond_3

    const/4 v1, 0x1

    if-eq v0, v1, :cond_2

    const/4 v1, 0x2

    if-eq v0, v1, :cond_1

    const/4 v1, 0x3

    if-eq v0, v1, :cond_0

    const-string v0, ""

    goto :goto_0

    .line 80
    :cond_0
    const-string v0, "PATTERN_ERROR"

    goto :goto_0

    .line 78
    :cond_1
    const-string v0, "PARSING_ERROR"

    goto :goto_0

    .line 75
    :cond_2
    const-string v0, "FORMATTING_ERROR"

    goto :goto_0

    .line 72
    :cond_3
    const-string v0, "UNKNOWN_ERROR"

    :goto_0
    return-object v0
.end method

.method public toJson()Lorg/json/JSONObject;
    .locals 3

    .line 99
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 101
    :try_start_0
    const-string v1, "code"

    invoke-virtual {p0}, Lorg/apache/cordova/globalization/GlobalizationError;->getErrorCode()I

    move-result v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 102
    const-string v1, "message"

    invoke-virtual {p0}, Lorg/apache/cordova/globalization/GlobalizationError;->getErrorString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    return-object v0
.end method
