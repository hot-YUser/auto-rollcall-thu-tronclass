.class Lcom/sarriaroman/PhotoViewer/PhotoActivity$3;
.super Ljava/lang/Object;
.source "PhotoActivity.java"

# interfaces
.implements Lcom/squareup/picasso/Callback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/sarriaroman/PhotoViewer/PhotoActivity;->loadImage()V
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

    .line 198
    iput-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$3;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onError(Ljava/lang/Exception;)V
    .locals 2

    .line 206
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$3;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-static {p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$300(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Landroid/app/Activity;

    move-result-object p1

    const-string v0, "Error loading image."

    const/4 v1, 0x1

    invoke-static {p1, v0, v1}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;

    move-result-object p1

    invoke-virtual {p1}, Landroid/widget/Toast;->show()V

    .line 208
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$3;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-virtual {p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->finish()V

    return-void
.end method

.method public onSuccess()V
    .locals 1

    .line 201
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$3;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-static {v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$200(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)V

    return-void
.end method
