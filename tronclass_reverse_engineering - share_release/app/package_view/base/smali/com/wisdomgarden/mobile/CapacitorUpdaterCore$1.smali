.class Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;
.super Ljava/lang/Object;
.source "CapacitorUpdaterCore.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->sendStats(Ljava/lang/String;Ljava/lang/String;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

.field final synthetic val$action:Ljava/lang/String;

.field final synthetic val$jsonString:Ljava/lang/String;

.field final synthetic val$url:Ljava/net/URL;

.field final synthetic val$version:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;Ljava/net/URL;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 299
    iput-object p1, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->this$0:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    iput-object p2, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->val$url:Ljava/net/URL;

    iput-object p3, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->val$jsonString:Ljava/lang/String;

    iput-object p4, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->val$action:Ljava/lang/String;

    iput-object p5, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->val$version:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 5

    .line 302
    const-string v0, "application/json"

    .line 0
    const-string v1, "Stats error responseCode: "

    const-string v2, "Stats send for \""

    const/4 v3, 0x0

    .line 304
    :try_start_0
    iget-object v4, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->val$url:Ljava/net/URL;

    invoke-virtual {v4}, Ljava/net/URL;->openConnection()Ljava/net/URLConnection;

    move-result-object v4

    check-cast v4, Ljava/net/HttpURLConnection;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    .line 305
    :try_start_1
    const-string v3, "POST"

    invoke-virtual {v4, v3}, Ljava/net/HttpURLConnection;->setRequestMethod(Ljava/lang/String;)V

    .line 306
    const-string v3, "Content-Type"

    invoke-virtual {v4, v3, v0}, Ljava/net/HttpURLConnection;->setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V

    .line 307
    const-string v3, "Accept"

    invoke-virtual {v4, v3, v0}, Ljava/net/HttpURLConnection;->setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V

    .line 308
    const-string v0, "Content-Length"

    iget-object v3, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->val$jsonString:Ljava/lang/String;

    invoke-virtual {v3}, Ljava/lang/String;->getBytes()[B

    move-result-object v3

    array-length v3, v3

    invoke-static {v3}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v4, v0, v3}, Ljava/net/HttpURLConnection;->setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V

    const/4 v0, 0x1

    .line 309
    invoke-virtual {v4, v0}, Ljava/net/HttpURLConnection;->setDoOutput(Z)V

    const/16 v0, 0x1f4

    .line 310
    invoke-virtual {v4, v0}, Ljava/net/HttpURLConnection;->setConnectTimeout(I)V

    .line 311
    new-instance v0, Ljava/io/DataOutputStream;

    invoke-virtual {v4}, Ljava/net/HttpURLConnection;->getOutputStream()Ljava/io/OutputStream;

    move-result-object v3

    invoke-direct {v0, v3}, Ljava/io/DataOutputStream;-><init>(Ljava/io/OutputStream;)V

    .line 312
    iget-object v3, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->val$jsonString:Ljava/lang/String;

    invoke-virtual {v0, v3}, Ljava/io/DataOutputStream;->writeBytes(Ljava/lang/String;)V

    .line 313
    invoke-virtual {v0}, Ljava/io/DataOutputStream;->close()V

    .line 314
    invoke-virtual {v4}, Ljava/net/HttpURLConnection;->getResponseCode()I

    move-result v0

    const/16 v3, 0xc8

    if-eq v0, v3, :cond_0

    .line 316
    iget-object v2, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->this$0:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-static {v2}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->access$000(Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;)Ljava/lang/String;

    move-result-object v2

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_0

    .line 318
    :cond_0
    iget-object v0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->this$0:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-static {v0}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->access$000(Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;)Ljava/lang/String;

    move-result-object v0

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->val$action:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, "\", version "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    iget-object v2, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->val$version:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    :goto_0
    if-eqz v4, :cond_1

    .line 324
    invoke-virtual {v4}, Ljava/net/HttpURLConnection;->disconnect()V

    goto :goto_2

    :catchall_0
    move-exception v0

    move-object v3, v4

    goto :goto_3

    :catch_0
    move-exception v0

    move-object v3, v4

    goto :goto_1

    :catchall_1
    move-exception v0

    goto :goto_3

    :catch_1
    move-exception v0

    .line 321
    :goto_1
    :try_start_2
    iget-object v1, p0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore$1;->this$0:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-static {v1}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->access$000(Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;)Ljava/lang/String;

    move-result-object v1

    const-string v2, "Error post stats"

    invoke-static {v1, v2, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_1

    if-eqz v3, :cond_1

    .line 324
    invoke-virtual {v3}, Ljava/net/HttpURLConnection;->disconnect()V

    :cond_1
    :goto_2
    return-void

    :goto_3
    if-eqz v3, :cond_2

    invoke-virtual {v3}, Ljava/net/HttpURLConnection;->disconnect()V

    .line 326
    :cond_2
    throw v0
.end method
