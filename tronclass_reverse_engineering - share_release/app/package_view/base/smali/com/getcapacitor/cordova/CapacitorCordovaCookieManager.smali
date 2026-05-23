.class Lcom/getcapacitor/cordova/CapacitorCordovaCookieManager;
.super Ljava/lang/Object;
.source "CapacitorCordovaCookieManager.java"

# interfaces
.implements Lorg/apache/cordova/ICordovaCookieManager;


# instance fields
.field private final cookieManager:Landroid/webkit/CookieManager;

.field protected final webView:Landroid/webkit/WebView;


# direct methods
.method public constructor <init>(Landroid/webkit/WebView;)V
    .locals 2

    .line 12
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 13
    iput-object p1, p0, Lcom/getcapacitor/cordova/CapacitorCordovaCookieManager;->webView:Landroid/webkit/WebView;

    .line 14
    invoke-static {}, Landroid/webkit/CookieManager;->getInstance()Landroid/webkit/CookieManager;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/cordova/CapacitorCordovaCookieManager;->cookieManager:Landroid/webkit/CookieManager;

    const/4 v1, 0x1

    .line 15
    invoke-static {v1}, Landroid/webkit/CookieManager;->setAcceptFileSchemeCookies(Z)V

    .line 16
    invoke-virtual {v0, p1, v1}, Landroid/webkit/CookieManager;->setAcceptThirdPartyCookies(Landroid/webkit/WebView;Z)V

    return-void
.end method


# virtual methods
.method public clearCookies()V
    .locals 1

    .line 32
    iget-object v0, p0, Lcom/getcapacitor/cordova/CapacitorCordovaCookieManager;->cookieManager:Landroid/webkit/CookieManager;

    invoke-virtual {v0}, Landroid/webkit/CookieManager;->removeAllCookie()V

    return-void
.end method

.method public flush()V
    .locals 1

    .line 36
    iget-object v0, p0, Lcom/getcapacitor/cordova/CapacitorCordovaCookieManager;->cookieManager:Landroid/webkit/CookieManager;

    invoke-virtual {v0}, Landroid/webkit/CookieManager;->flush()V

    return-void
.end method

.method public getCookie(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 28
    iget-object v0, p0, Lcom/getcapacitor/cordova/CapacitorCordovaCookieManager;->cookieManager:Landroid/webkit/CookieManager;

    invoke-virtual {v0, p1}, Landroid/webkit/CookieManager;->getCookie(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public setCookie(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    .line 24
    iget-object v0, p0, Lcom/getcapacitor/cordova/CapacitorCordovaCookieManager;->cookieManager:Landroid/webkit/CookieManager;

    invoke-virtual {v0, p1, p2}, Landroid/webkit/CookieManager;->setCookie(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public setCookiesEnabled(Z)V
    .locals 1

    .line 20
    iget-object v0, p0, Lcom/getcapacitor/cordova/CapacitorCordovaCookieManager;->cookieManager:Landroid/webkit/CookieManager;

    invoke-virtual {v0, p1}, Landroid/webkit/CookieManager;->setAcceptCookie(Z)V

    return-void
.end method
