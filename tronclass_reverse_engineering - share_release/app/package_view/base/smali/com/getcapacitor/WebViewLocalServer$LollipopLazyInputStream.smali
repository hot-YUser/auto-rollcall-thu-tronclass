.class Lcom/getcapacitor/WebViewLocalServer$LollipopLazyInputStream;
.super Lcom/getcapacitor/WebViewLocalServer$LazyInputStream;
.source "WebViewLocalServer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/getcapacitor/WebViewLocalServer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "LollipopLazyInputStream"
.end annotation


# instance fields
.field private is:Ljava/io/InputStream;

.field private request:Landroid/webkit/WebResourceRequest;


# direct methods
.method public constructor <init>(Lcom/getcapacitor/WebViewLocalServer$PathHandler;Landroid/webkit/WebResourceRequest;)V
    .locals 0

    .line 529
    invoke-direct {p0, p1}, Lcom/getcapacitor/WebViewLocalServer$LazyInputStream;-><init>(Lcom/getcapacitor/WebViewLocalServer$PathHandler;)V

    .line 530
    iput-object p2, p0, Lcom/getcapacitor/WebViewLocalServer$LollipopLazyInputStream;->request:Landroid/webkit/WebResourceRequest;

    return-void
.end method


# virtual methods
.method protected handle()Ljava/io/InputStream;
    .locals 2

    .line 535
    iget-object v0, p0, Lcom/getcapacitor/WebViewLocalServer$LollipopLazyInputStream;->handler:Lcom/getcapacitor/WebViewLocalServer$PathHandler;

    iget-object v1, p0, Lcom/getcapacitor/WebViewLocalServer$LollipopLazyInputStream;->request:Landroid/webkit/WebResourceRequest;

    invoke-virtual {v0, v1}, Lcom/getcapacitor/WebViewLocalServer$PathHandler;->handle(Landroid/webkit/WebResourceRequest;)Ljava/io/InputStream;

    move-result-object v0

    return-object v0
.end method
