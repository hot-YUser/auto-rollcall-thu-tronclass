.class Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;
.super Landroid/os/AsyncTask;
.source "PhotoActivity.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/sarriaroman/PhotoViewer/PhotoActivity;->loadImage()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Landroid/os/AsyncTask<",
        "Ljava/lang/Void;",
        "Ljava/lang/Void;",
        "Ljava/io/File;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;


# direct methods
.method constructor <init>(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)V
    .locals 0

    .line 213
    iput-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-direct {p0}, Landroid/os/AsyncTask;-><init>()V

    return-void
.end method


# virtual methods
.method protected varargs doInBackground([Ljava/lang/Void;)Ljava/io/File;
    .locals 2

    .line 216
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-static {p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$400(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Ljava/lang/String;

    move-result-object p1

    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-static {v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$400(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Ljava/lang/String;

    move-result-object v0

    const-string v1, ","

    invoke-virtual {v0, v1}, Ljava/lang/String;->indexOf(Ljava/lang/String;)I

    move-result v0

    add-int/lit8 v0, v0, 0x1

    invoke-virtual {p1, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p1

    .line 217
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-virtual {v0, p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getLocalBitmapFileFromString(Ljava/lang/String;)Ljava/io/File;

    move-result-object p1

    return-object p1
.end method

.method protected bridge synthetic doInBackground([Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 213
    check-cast p1, [Ljava/lang/Void;

    invoke-virtual {p0, p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;->doInBackground([Ljava/lang/Void;)Ljava/io/File;

    move-result-object p1

    return-object p1
.end method

.method protected onPostExecute(Ljava/io/File;)V
    .locals 2

    .line 221
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-static {v0, p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$002(Lcom/sarriaroman/PhotoViewer/PhotoActivity;Ljava/io/File;)Ljava/io/File;

    .line 224
    :try_start_0
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-static {}, Lcom/squareup/picasso/Picasso;->get()Lcom/squareup/picasso/Picasso;

    move-result-object v0

    iget-object v1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-static {v1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$000(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Ljava/io/File;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/squareup/picasso/Picasso;->load(Ljava/io/File;)Lcom/squareup/picasso/RequestCreator;

    move-result-object v0

    invoke-static {p1, v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$500(Lcom/sarriaroman/PhotoViewer/PhotoActivity;Lcom/squareup/picasso/RequestCreator;)Lcom/squareup/picasso/RequestCreator;

    move-result-object p1

    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    .line 225
    invoke-static {v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->access$100(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Landroid/widget/ImageView;

    move-result-object v0

    new-instance v1, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4$1;

    invoke-direct {v1, p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4$1;-><init>(Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;)V

    invoke-virtual {p1, v0, v1}, Lcom/squareup/picasso/RequestCreator;->into(Landroid/widget/ImageView;Lcom/squareup/picasso/Callback;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 239
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method

.method protected bridge synthetic onPostExecute(Ljava/lang/Object;)V
    .locals 0

    .line 213
    check-cast p1, Ljava/io/File;

    invoke-virtual {p0, p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;->onPostExecute(Ljava/io/File;)V

    return-void
.end method
