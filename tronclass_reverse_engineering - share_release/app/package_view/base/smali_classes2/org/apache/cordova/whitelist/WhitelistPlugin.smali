.class public Lorg/apache/cordova/whitelist/WhitelistPlugin;
.super Lorg/apache/cordova/CordovaPlugin;
.source "WhitelistPlugin.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;
    }
.end annotation


# static fields
.field private static final LOG_TAG:Ljava/lang/String; = "WhitelistPlugin"


# instance fields
.field private allowedIntents:Lorg/apache/cordova/Whitelist;

.field private allowedNavigations:Lorg/apache/cordova/Whitelist;

.field private allowedRequests:Lorg/apache/cordova/Whitelist;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 37
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method public constructor <init>(Landroid/content/Context;)V
    .locals 3

    .line 41
    new-instance v0, Lorg/apache/cordova/Whitelist;

    invoke-direct {v0}, Lorg/apache/cordova/Whitelist;-><init>()V

    new-instance v1, Lorg/apache/cordova/Whitelist;

    invoke-direct {v1}, Lorg/apache/cordova/Whitelist;-><init>()V

    const/4 v2, 0x0

    invoke-direct {p0, v0, v1, v2}, Lorg/apache/cordova/whitelist/WhitelistPlugin;-><init>(Lorg/apache/cordova/Whitelist;Lorg/apache/cordova/Whitelist;Lorg/apache/cordova/Whitelist;)V

    .line 42
    new-instance v0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;

    invoke-direct {v0, p0, v2}, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;-><init>(Lorg/apache/cordova/whitelist/WhitelistPlugin;Lorg/apache/cordova/whitelist/WhitelistPlugin$1;)V

    invoke-virtual {v0, p1}, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->parse(Landroid/content/Context;)V

    return-void
.end method

.method public constructor <init>(Lorg/apache/cordova/Whitelist;Lorg/apache/cordova/Whitelist;Lorg/apache/cordova/Whitelist;)V
    .locals 2

    .line 48
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    if-nez p3, :cond_0

    .line 50
    new-instance p3, Lorg/apache/cordova/Whitelist;

    invoke-direct {p3}, Lorg/apache/cordova/Whitelist;-><init>()V

    .line 51
    const-string v0, "file:///*"

    const/4 v1, 0x0

    invoke-virtual {p3, v0, v1}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    .line 52
    const-string v0, "data:*"

    invoke-virtual {p3, v0, v1}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    .line 54
    :cond_0
    iput-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedNavigations:Lorg/apache/cordova/Whitelist;

    .line 55
    iput-object p2, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedIntents:Lorg/apache/cordova/Whitelist;

    .line 56
    iput-object p3, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedRequests:Lorg/apache/cordova/Whitelist;

    return-void
.end method

.method public constructor <init>(Lorg/xmlpull/v1/XmlPullParser;)V
    .locals 3

    .line 45
    new-instance v0, Lorg/apache/cordova/Whitelist;

    invoke-direct {v0}, Lorg/apache/cordova/Whitelist;-><init>()V

    new-instance v1, Lorg/apache/cordova/Whitelist;

    invoke-direct {v1}, Lorg/apache/cordova/Whitelist;-><init>()V

    const/4 v2, 0x0

    invoke-direct {p0, v0, v1, v2}, Lorg/apache/cordova/whitelist/WhitelistPlugin;-><init>(Lorg/apache/cordova/Whitelist;Lorg/apache/cordova/Whitelist;Lorg/apache/cordova/Whitelist;)V

    .line 46
    new-instance v0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;

    invoke-direct {v0, p0, v2}, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;-><init>(Lorg/apache/cordova/whitelist/WhitelistPlugin;Lorg/apache/cordova/whitelist/WhitelistPlugin$1;)V

    invoke-virtual {v0, p1}, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->parse(Lorg/xmlpull/v1/XmlPullParser;)V

    return-void
.end method

.method static synthetic access$100(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;
    .locals 0

    .line 30
    iget-object p0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedNavigations:Lorg/apache/cordova/Whitelist;

    return-object p0
.end method

.method static synthetic access$200(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;
    .locals 0

    .line 30
    iget-object p0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedIntents:Lorg/apache/cordova/Whitelist;

    return-object p0
.end method

.method static synthetic access$300(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;
    .locals 0

    .line 30
    iget-object p0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedRequests:Lorg/apache/cordova/Whitelist;

    return-object p0
.end method


# virtual methods
.method public getAllowedIntents()Lorg/apache/cordova/Whitelist;
    .locals 1

    .line 147
    iget-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedIntents:Lorg/apache/cordova/Whitelist;

    return-object v0
.end method

.method public getAllowedNavigations()Lorg/apache/cordova/Whitelist;
    .locals 1

    .line 139
    iget-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedNavigations:Lorg/apache/cordova/Whitelist;

    return-object v0
.end method

.method public getAllowedRequests()Lorg/apache/cordova/Whitelist;
    .locals 1

    .line 155
    iget-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedRequests:Lorg/apache/cordova/Whitelist;

    return-object v0
.end method

.method public pluginInitialize()V
    .locals 2

    .line 60
    iget-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedNavigations:Lorg/apache/cordova/Whitelist;

    if-nez v0, :cond_0

    .line 61
    new-instance v0, Lorg/apache/cordova/Whitelist;

    invoke-direct {v0}, Lorg/apache/cordova/Whitelist;-><init>()V

    iput-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedNavigations:Lorg/apache/cordova/Whitelist;

    .line 62
    new-instance v0, Lorg/apache/cordova/Whitelist;

    invoke-direct {v0}, Lorg/apache/cordova/Whitelist;-><init>()V

    iput-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedIntents:Lorg/apache/cordova/Whitelist;

    .line 63
    new-instance v0, Lorg/apache/cordova/Whitelist;

    invoke-direct {v0}, Lorg/apache/cordova/Whitelist;-><init>()V

    iput-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedRequests:Lorg/apache/cordova/Whitelist;

    .line 64
    new-instance v0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;

    const/4 v1, 0x0

    invoke-direct {v0, p0, v1}, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;-><init>(Lorg/apache/cordova/whitelist/WhitelistPlugin;Lorg/apache/cordova/whitelist/WhitelistPlugin$1;)V

    iget-object v1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->webView:Lorg/apache/cordova/CordovaWebView;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaWebView;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-virtual {v0, v1}, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->parse(Landroid/content/Context;)V

    :cond_0
    return-void
.end method

.method public setAllowedIntents(Lorg/apache/cordova/Whitelist;)V
    .locals 0

    .line 151
    iput-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedIntents:Lorg/apache/cordova/Whitelist;

    return-void
.end method

.method public setAllowedNavigations(Lorg/apache/cordova/Whitelist;)V
    .locals 0

    .line 143
    iput-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedNavigations:Lorg/apache/cordova/Whitelist;

    return-void
.end method

.method public setAllowedRequests(Lorg/apache/cordova/Whitelist;)V
    .locals 0

    .line 159
    iput-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedRequests:Lorg/apache/cordova/Whitelist;

    return-void
.end method

.method public shouldAllowNavigation(Ljava/lang/String;)Ljava/lang/Boolean;
    .locals 1

    .line 113
    iget-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedNavigations:Lorg/apache/cordova/Whitelist;

    invoke-virtual {v0, p1}, Lorg/apache/cordova/Whitelist;->isUrlWhiteListed(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    const/4 p1, 0x1

    .line 114
    invoke-static {p1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p1

    return-object p1

    :cond_0
    const/4 p1, 0x0

    return-object p1
.end method

.method public shouldAllowRequest(Ljava/lang/String;)Ljava/lang/Boolean;
    .locals 3

    .line 121
    sget-object v0, Ljava/lang/Boolean;->TRUE:Ljava/lang/Boolean;

    invoke-virtual {p0, p1}, Lorg/apache/cordova/whitelist/WhitelistPlugin;->shouldAllowNavigation(Ljava/lang/String;)Ljava/lang/Boolean;

    move-result-object v1

    const/4 v2, 0x1

    .line 122
    invoke-static {v2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    if-ne v0, v1, :cond_0

    return-object v2

    .line 124
    :cond_0
    iget-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedRequests:Lorg/apache/cordova/Whitelist;

    invoke-virtual {v0, p1}, Lorg/apache/cordova/Whitelist;->isUrlWhiteListed(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_1

    return-object v2

    :cond_1
    const/4 p1, 0x0

    return-object p1
.end method

.method public shouldOpenExternalUrl(Ljava/lang/String;)Ljava/lang/Boolean;
    .locals 1

    .line 132
    iget-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin;->allowedIntents:Lorg/apache/cordova/Whitelist;

    invoke-virtual {v0, p1}, Lorg/apache/cordova/Whitelist;->isUrlWhiteListed(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    const/4 p1, 0x1

    .line 133
    invoke-static {p1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p1

    return-object p1

    :cond_0
    const/4 p1, 0x0

    return-object p1
.end method
