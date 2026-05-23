.class Lcom/synconset/ImageFetcher$BitmapFetcherTask;
.super Landroid/os/AsyncTask;
.source "ImageFetcher.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/synconset/ImageFetcher;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = "BitmapFetcherTask"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Landroid/os/AsyncTask<",
        "Ljava/lang/Integer;",
        "Ljava/lang/Void;",
        "Landroid/graphics/Bitmap;",
        ">;"
    }
.end annotation


# instance fields
.field private final imageViewReference:Ljava/lang/ref/WeakReference;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/ref/WeakReference<",
            "Landroid/widget/ImageView;",
            ">;"
        }
    .end annotation
.end field

.field private final mContext:Landroid/content/Context;

.field private position:Ljava/lang/Integer;

.field private final rotate:I

.field final synthetic this$0:Lcom/synconset/ImageFetcher;


# direct methods
.method public constructor <init>(Lcom/synconset/ImageFetcher;Landroid/content/Context;Landroid/widget/ImageView;I)V
    .locals 0

    .line 170
    iput-object p1, p0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->this$0:Lcom/synconset/ImageFetcher;

    invoke-direct {p0}, Landroid/os/AsyncTask;-><init>()V

    .line 171
    new-instance p1, Ljava/lang/ref/WeakReference;

    invoke-direct {p1, p3}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    iput-object p1, p0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->imageViewReference:Ljava/lang/ref/WeakReference;

    .line 172
    iput-object p2, p0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->mContext:Landroid/content/Context;

    .line 173
    iput p4, p0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->rotate:I

    return-void
.end method

.method static synthetic access$000(Lcom/synconset/ImageFetcher$BitmapFetcherTask;)Ljava/lang/Integer;
    .locals 0

    .line 164
    iget-object p0, p0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->position:Ljava/lang/Integer;

    return-object p0
.end method

.method private setInvisible()V
    .locals 2

    .line 213
    iget-object v0, p0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->imageViewReference:Ljava/lang/ref/WeakReference;

    if-eqz v0, :cond_0

    .line 214
    invoke-virtual {v0}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/widget/ImageView;

    .line 215
    invoke-static {v0}, Lcom/synconset/ImageFetcher;->access$100(Landroid/widget/ImageView;)Lcom/synconset/ImageFetcher$BitmapFetcherTask;

    move-result-object v1

    if-ne p0, v1, :cond_0

    const/16 v1, 0x8

    .line 217
    invoke-virtual {v0, v1}, Landroid/widget/ImageView;->setVisibility(I)V

    const/4 v1, 0x0

    .line 218
    invoke-virtual {v0, v1}, Landroid/widget/ImageView;->setClickable(Z)V

    .line 219
    invoke-virtual {v0, v1}, Landroid/widget/ImageView;->setEnabled(Z)V

    :cond_0
    return-void
.end method


# virtual methods
.method protected varargs doInBackground([Ljava/lang/Integer;)Landroid/graphics/Bitmap;
    .locals 17

    move-object/from16 v0, p0

    const/4 v1, 0x0

    const/4 v2, 0x0

    .line 182
    :try_start_0
    aget-object v1, p1, v1

    iput-object v1, v0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->position:Ljava/lang/Integer;

    .line 183
    invoke-virtual/range {p0 .. p0}, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->isCancelled()Z

    move-result v1

    if-eqz v1, :cond_0

    return-object v2

    .line 186
    :cond_0
    iget-object v1, v0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->mContext:Landroid/content/Context;

    invoke-virtual {v1}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v3

    iget-object v1, v0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->position:Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    int-to-long v4, v1

    const/4 v8, 0x1

    const/4 v9, 0x0

    const-wide/16 v6, 0x3039

    invoke-static/range {v3 .. v9}, Landroid/provider/MediaStore$Images$Thumbnails;->getThumbnail(Landroid/content/ContentResolver;JJILandroid/graphics/BitmapFactory$Options;)Landroid/graphics/Bitmap;

    move-result-object v10

    .line 188
    invoke-virtual/range {p0 .. p0}, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->isCancelled()Z

    move-result v1

    if-eqz v1, :cond_1

    return-object v2

    :cond_1
    if-nez v10, :cond_2

    return-object v2

    .line 194
    :cond_2
    invoke-virtual/range {p0 .. p0}, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->isCancelled()Z

    move-result v1

    if-eqz v1, :cond_3

    return-object v2

    .line 197
    :cond_3
    iget v1, v0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->rotate:I

    if-eqz v1, :cond_4

    .line 198
    new-instance v15, Landroid/graphics/Matrix;

    invoke-direct {v15}, Landroid/graphics/Matrix;-><init>()V

    .line 199
    invoke-virtual {v10}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v13

    invoke-virtual {v10}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v14

    const/16 v16, 0x1

    const/4 v11, 0x0

    const/4 v12, 0x0

    invoke-static/range {v10 .. v16}, Landroid/graphics/Bitmap;->createBitmap(Landroid/graphics/Bitmap;IIIILandroid/graphics/Matrix;Z)Landroid/graphics/Bitmap;

    move-result-object v10
    :try_end_0
    .catch Ljava/lang/OutOfMemoryError; {:try_start_0 .. :try_end_0} :catch_0

    :cond_4
    return-object v10

    .line 205
    :catch_0
    iget-object v1, v0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->this$0:Lcom/synconset/ImageFetcher;

    invoke-virtual {v1}, Lcom/synconset/ImageFetcher;->clearCache()V

    return-object v2
.end method

.method protected bridge synthetic doInBackground([Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 164
    check-cast p1, [Ljava/lang/Integer;

    invoke-virtual {p0, p1}, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->doInBackground([Ljava/lang/Integer;)Landroid/graphics/Bitmap;

    move-result-object p1

    return-object p1
.end method

.method protected onPostExecute(Landroid/graphics/Bitmap;)V
    .locals 2

    .line 229
    invoke-virtual {p0}, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->isCancelled()Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 p1, 0x0

    .line 232
    :cond_0
    iget-object v0, p0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->this$0:Lcom/synconset/ImageFetcher;

    iget-object v1, p0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->position:Ljava/lang/Integer;

    invoke-static {v0, v1, p1}, Lcom/synconset/ImageFetcher;->access$200(Lcom/synconset/ImageFetcher;Ljava/lang/Integer;Landroid/graphics/Bitmap;)V

    .line 233
    iget-object v0, p0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->imageViewReference:Ljava/lang/ref/WeakReference;

    if-eqz v0, :cond_1

    .line 234
    invoke-virtual {v0}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/widget/ImageView;

    .line 235
    invoke-static {v0}, Lcom/synconset/ImageFetcher;->access$100(Landroid/widget/ImageView;)Lcom/synconset/ImageFetcher$BitmapFetcherTask;

    move-result-object v1

    if-ne p0, v1, :cond_2

    .line 237
    invoke-virtual {v0, p1}, Landroid/widget/ImageView;->setImageBitmap(Landroid/graphics/Bitmap;)V

    .line 238
    invoke-virtual {v0}, Landroid/widget/ImageView;->getContext()Landroid/content/Context;

    move-result-object p1

    const/high16 v1, 0x10a0000

    invoke-static {p1, v1}, Landroid/view/animation/AnimationUtils;->loadAnimation(Landroid/content/Context;I)Landroid/view/animation/Animation;

    move-result-object p1

    .line 239
    invoke-virtual {v0, p1}, Landroid/widget/ImageView;->setAnimation(Landroid/view/animation/Animation;)V

    .line 240
    invoke-virtual {p1}, Landroid/view/animation/Animation;->start()V

    goto :goto_0

    .line 243
    :cond_1
    invoke-direct {p0}, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->setInvisible()V

    :cond_2
    :goto_0
    return-void
.end method

.method protected bridge synthetic onPostExecute(Ljava/lang/Object;)V
    .locals 0

    .line 164
    check-cast p1, Landroid/graphics/Bitmap;

    invoke-virtual {p0, p1}, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->onPostExecute(Landroid/graphics/Bitmap;)V

    return-void
.end method
