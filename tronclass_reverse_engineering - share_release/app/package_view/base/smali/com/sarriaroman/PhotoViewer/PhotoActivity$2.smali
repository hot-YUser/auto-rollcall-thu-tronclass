.class Lcom/sarriaroman/PhotoViewer/PhotoActivity$2;
.super Ljava/lang/Object;
.source "PhotoActivity.java"

# interfaces
.implements Landroid/view/View$OnClickListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/sarriaroman/PhotoViewer/PhotoActivity;->onCreate(Landroid/os/Bundle;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;


# direct methods
.method constructor <init>(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)V
    .locals 0

    .line 107
    iput-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$2;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/view/View;)V
    .locals 3

    .line 112
    :try_start_0
    const-class p1, Landroid/os/StrictMode;

    const-string v0, "disableDeathOnFileUriExposure"

    const/4 v1, 0x0

    new-array v2, v1, [Ljava/lang/Class;

    invoke-virtual {p1, v0, v2}, Ljava/lang/Class;->getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object p1

    .line 113
    new-array v0, v1, [Ljava/lang/Object;

    const/4 v1, 0x0

    invoke-virtual {p1, v1, v0}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 115
    invoke-virtual {p1}, Ljava/lang/Exception;->printStackTrace()V

    .line 120
    :goto_0
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$2;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-static {p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$000(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Ljava/io/File;

    move-result-object p1

    if-nez p1, :cond_0

    .line 121
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$2;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-static {p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$100(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Landroid/widget/ImageView;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getLocalBitmapFileFromView(Landroid/widget/ImageView;)Ljava/io/File;

    move-result-object v0

    invoke-static {p1, v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$002(Lcom/sarriaroman/PhotoViewer/PhotoActivity;Ljava/io/File;)Ljava/io/File;

    .line 124
    :cond_0
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$2;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-static {p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$000(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Ljava/io/File;

    move-result-object p1

    invoke-static {p1}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 127
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.intent.action.SEND"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 129
    const-string v1, "image/*"

    invoke-virtual {v0, v1}, Landroid/content/Intent;->setType(Ljava/lang/String;)Landroid/content/Intent;

    .line 130
    const-string v1, "android.intent.extra.STREAM"

    invoke-virtual {v0, v1, p1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Landroid/os/Parcelable;)Landroid/content/Intent;

    .line 132
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$2;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    const-string v1, "Share"

    invoke-static {v0, v1}, Landroid/content/Intent;->createChooser(Landroid/content/Intent;Ljava/lang/CharSequence;)Landroid/content/Intent;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->startActivity(Landroid/content/Intent;)V

    :cond_1
    return-void
.end method
