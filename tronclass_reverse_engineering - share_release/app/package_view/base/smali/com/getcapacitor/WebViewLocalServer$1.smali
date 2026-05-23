.class Lcom/getcapacitor/WebViewLocalServer$1;
.super Lcom/getcapacitor/WebViewLocalServer$PathHandler;
.source "WebViewLocalServer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/WebViewLocalServer;->createHostingDetails()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/WebViewLocalServer;

.field final synthetic val$assetPath:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/getcapacitor/WebViewLocalServer;Ljava/lang/String;)V
    .locals 0

    .line 423
    iput-object p1, p0, Lcom/getcapacitor/WebViewLocalServer$1;->this$0:Lcom/getcapacitor/WebViewLocalServer;

    iput-object p2, p0, Lcom/getcapacitor/WebViewLocalServer$1;->val$assetPath:Ljava/lang/String;

    invoke-direct {p0}, Lcom/getcapacitor/WebViewLocalServer$PathHandler;-><init>()V

    return-void
.end method


# virtual methods
.method public handle(Landroid/net/Uri;)Ljava/io/InputStream;
    .locals 4

    .line 426
    const-string v0, "/_capacitor_file_"

    .line 427
    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v1

    .line 429
    :try_start_0
    const-string v2, "/_capacitor_content_"

    invoke-virtual {v1, v2}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v2

    if-eqz v2, :cond_0

    .line 430
    iget-object v0, p0, Lcom/getcapacitor/WebViewLocalServer$1;->this$0:Lcom/getcapacitor/WebViewLocalServer;

    invoke-static {v0}, Lcom/getcapacitor/WebViewLocalServer;->access$000(Lcom/getcapacitor/WebViewLocalServer;)Lcom/getcapacitor/AndroidProtocolHandler;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/getcapacitor/AndroidProtocolHandler;->openContentUrl(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object p1

    goto :goto_1

    .line 431
    :cond_0
    invoke-virtual {v1, v0}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v2

    if-nez v2, :cond_2

    iget-object v2, p0, Lcom/getcapacitor/WebViewLocalServer$1;->this$0:Lcom/getcapacitor/WebViewLocalServer;

    invoke-static {v2}, Lcom/getcapacitor/WebViewLocalServer;->access$100(Lcom/getcapacitor/WebViewLocalServer;)Z

    move-result v2

    if-nez v2, :cond_1

    goto :goto_0

    .line 437
    :cond_1
    iget-object v0, p0, Lcom/getcapacitor/WebViewLocalServer$1;->this$0:Lcom/getcapacitor/WebViewLocalServer;

    invoke-static {v0}, Lcom/getcapacitor/WebViewLocalServer;->access$000(Lcom/getcapacitor/WebViewLocalServer;)Lcom/getcapacitor/AndroidProtocolHandler;

    move-result-object v0

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v3, p0, Lcom/getcapacitor/WebViewLocalServer$1;->val$assetPath:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/getcapacitor/AndroidProtocolHandler;->openAsset(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object p1

    goto :goto_1

    .line 432
    :cond_2
    :goto_0
    invoke-virtual {v1, v0}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_3

    .line 433
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v1, p0, Lcom/getcapacitor/WebViewLocalServer$1;->this$0:Lcom/getcapacitor/WebViewLocalServer;

    invoke-static {v1}, Lcom/getcapacitor/WebViewLocalServer;->access$200(Lcom/getcapacitor/WebViewLocalServer;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 435
    :cond_3
    iget-object v0, p0, Lcom/getcapacitor/WebViewLocalServer$1;->this$0:Lcom/getcapacitor/WebViewLocalServer;

    invoke-static {v0}, Lcom/getcapacitor/WebViewLocalServer;->access$000(Lcom/getcapacitor/WebViewLocalServer;)Lcom/getcapacitor/AndroidProtocolHandler;

    move-result-object v0

    invoke-virtual {v0, v1}, Lcom/getcapacitor/AndroidProtocolHandler;->openFile(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object p1
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    :goto_1
    return-object p1

    .line 440
    :catch_0
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Unable to open asset URL: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;)V

    const/4 p1, 0x0

    return-object p1
.end method
