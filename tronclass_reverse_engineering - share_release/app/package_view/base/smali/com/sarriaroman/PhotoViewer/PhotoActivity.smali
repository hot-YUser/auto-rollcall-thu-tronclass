.class public Lcom/sarriaroman/PhotoViewer/PhotoActivity;
.super Landroid/app/Activity;
.source "PhotoActivity.java"


# static fields
.field public static mArgs:Lorg/json/JSONArray;


# instance fields
.field private closeBtn:Landroid/widget/ImageButton;

.field private loadingBar:Landroid/widget/ProgressBar;

.field private mAttacher:Luk/co/senab/photoview/PhotoViewAttacher;

.field private mHeaders:Lorg/json/JSONObject;

.field private mImage:Ljava/lang/String;

.field private mShare:Z

.field private mTempImage:Ljava/io/File;

.field private mTitle:Ljava/lang/String;

.field private pOptions:Lorg/json/JSONObject;

.field private photo:Landroid/widget/ImageView;

.field private shareBtn:Landroid/widget/ImageButton;

.field private shareBtnVisibility:I

.field private titleTxt:Landroid/widget/TextView;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 36
    invoke-direct {p0}, Landroid/app/Activity;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Ljava/io/File;
    .locals 0

    .line 36
    iget-object p0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mTempImage:Ljava/io/File;

    return-object p0
.end method

.method static synthetic access$002(Lcom/sarriaroman/PhotoViewer/PhotoActivity;Ljava/io/File;)Ljava/io/File;
    .locals 0

    .line 36
    iput-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mTempImage:Ljava/io/File;

    return-object p1
.end method

.method static synthetic access$100(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Landroid/widget/ImageView;
    .locals 0

    .line 36
    iget-object p0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->photo:Landroid/widget/ImageView;

    return-object p0
.end method

.method static synthetic access$200(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)V
    .locals 0

    .line 36
    invoke-direct {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->hideLoadingAndUpdate()V

    return-void
.end method

.method static synthetic access$300(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Landroid/app/Activity;
    .locals 0

    .line 36
    invoke-direct {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getActivity()Landroid/app/Activity;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$400(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)Ljava/lang/String;
    .locals 0

    .line 36
    iget-object p0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mImage:Ljava/lang/String;

    return-object p0
.end method

.method static synthetic access$500(Lcom/sarriaroman/PhotoViewer/PhotoActivity;Lcom/squareup/picasso/RequestCreator;)Lcom/squareup/picasso/RequestCreator;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 36
    invoke-direct {p0, p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->setOptions(Lcom/squareup/picasso/RequestCreator;)Lcom/squareup/picasso/RequestCreator;

    move-result-object p0

    return-object p0
.end method

.method private findViews()V
    .locals 4

    .line 144
    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Application;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Application;->getPackageName()Ljava/lang/String;

    move-result-object v1

    const-string v2, "closeBtn"

    const-string v3, "id"

    invoke-virtual {v0, v2, v3, v1}, Landroid/content/res/Resources;->getIdentifier(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)I

    move-result v0

    invoke-virtual {p0, v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/widget/ImageButton;

    iput-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->closeBtn:Landroid/widget/ImageButton;

    .line 145
    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Application;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Application;->getPackageName()Ljava/lang/String;

    move-result-object v1

    const-string v2, "shareBtn"

    invoke-virtual {v0, v2, v3, v1}, Landroid/content/res/Resources;->getIdentifier(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)I

    move-result v0

    invoke-virtual {p0, v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/widget/ImageButton;

    iput-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->shareBtn:Landroid/widget/ImageButton;

    .line 148
    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Application;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Application;->getPackageName()Ljava/lang/String;

    move-result-object v1

    const-string v2, "loadingBar"

    invoke-virtual {v0, v2, v3, v1}, Landroid/content/res/Resources;->getIdentifier(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)I

    move-result v0

    invoke-virtual {p0, v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/widget/ProgressBar;

    iput-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->loadingBar:Landroid/widget/ProgressBar;

    .line 150
    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Application;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Application;->getPackageName()Ljava/lang/String;

    move-result-object v1

    const-string v2, "photoView"

    invoke-virtual {v0, v2, v3, v1}, Landroid/content/res/Resources;->getIdentifier(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)I

    move-result v0

    invoke-virtual {p0, v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/widget/ImageView;

    iput-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->photo:Landroid/widget/ImageView;

    .line 151
    new-instance v0, Luk/co/senab/photoview/PhotoViewAttacher;

    iget-object v1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->photo:Landroid/widget/ImageView;

    invoke-direct {v0, v1}, Luk/co/senab/photoview/PhotoViewAttacher;-><init>(Landroid/widget/ImageView;)V

    iput-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mAttacher:Luk/co/senab/photoview/PhotoViewAttacher;

    .line 154
    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Application;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Application;->getPackageName()Ljava/lang/String;

    move-result-object v1

    const-string v2, "titleTxt"

    invoke-virtual {v0, v2, v3, v1}, Landroid/content/res/Resources;->getIdentifier(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)I

    move-result v0

    invoke-virtual {p0, v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/widget/TextView;

    iput-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->titleTxt:Landroid/widget/TextView;

    return-void
.end method

.method private getActivity()Landroid/app/Activity;
    .locals 0

    return-object p0
.end method

.method private hideLoadingAndUpdate()V
    .locals 2

    .line 170
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->photo:Landroid/widget/ImageView;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/widget/ImageView;->setVisibility(I)V

    .line 171
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->loadingBar:Landroid/widget/ProgressBar;

    const/4 v1, 0x4

    invoke-virtual {v0, v1}, Landroid/widget/ProgressBar;->setVisibility(I)V

    .line 172
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->shareBtn:Landroid/widget/ImageButton;

    iget v1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->shareBtnVisibility:I

    invoke-virtual {v0, v1}, Landroid/widget/ImageButton;->setVisibility(I)V

    .line 174
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mAttacher:Luk/co/senab/photoview/PhotoViewAttacher;

    invoke-virtual {v0}, Luk/co/senab/photoview/PhotoViewAttacher;->update()V

    return-void
.end method

.method private loadImage()V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 197
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mImage:Ljava/lang/String;

    const-string v1, "http"

    invoke-virtual {v0, v1}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_2

    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mImage:Ljava/lang/String;

    const-string v1, "file"

    invoke-virtual {v0, v1}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    .line 211
    :cond_0
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mImage:Ljava/lang/String;

    const-string v1, "data:image"

    invoke-virtual {v0, v1}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 213
    new-instance v0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;

    invoke-direct {v0, p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;-><init>(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)V

    const/4 v1, 0x0

    new-array v1, v1, [Ljava/lang/Void;

    .line 242
    invoke-virtual {v0, v1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity$4;->execute([Ljava/lang/Object;)Landroid/os/AsyncTask;

    goto :goto_1

    .line 245
    :cond_1
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->photo:Landroid/widget/ImageView;

    iget-object v1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mImage:Ljava/lang/String;

    invoke-static {v1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/widget/ImageView;->setImageURI(Landroid/net/Uri;)V

    .line 247
    invoke-direct {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->hideLoadingAndUpdate()V

    goto :goto_1

    .line 198
    :cond_2
    :goto_0
    invoke-static {}, Lcom/squareup/picasso/Picasso;->get()Lcom/squareup/picasso/Picasso;

    move-result-object v0

    iget-object v1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mImage:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/squareup/picasso/Picasso;->load(Ljava/lang/String;)Lcom/squareup/picasso/RequestCreator;

    move-result-object v0

    invoke-direct {p0, v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->setOptions(Lcom/squareup/picasso/RequestCreator;)Lcom/squareup/picasso/RequestCreator;

    move-result-object v0

    iget-object v1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->photo:Landroid/widget/ImageView;

    new-instance v2, Lcom/sarriaroman/PhotoViewer/PhotoActivity$3;

    invoke-direct {v2, p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity$3;-><init>(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)V

    invoke-virtual {v0, v1, v2}, Lcom/squareup/picasso/RequestCreator;->into(Landroid/widget/ImageView;Lcom/squareup/picasso/Callback;)V

    :goto_1
    return-void
.end method

.method private parseHeaders(Ljava/lang/String;)Lorg/json/JSONObject;
    .locals 2

    const/4 v0, 0x0

    if-eqz p1, :cond_1

    .line 313
    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v1

    if-nez v1, :cond_0

    goto :goto_0

    .line 319
    :cond_0
    :try_start_0
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    move-object v0, v1

    goto :goto_0

    :catch_0
    move-exception p1

    .line 321
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :cond_1
    :goto_0
    return-object v0
.end method

.method private setOptions(Lcom/squareup/picasso/RequestCreator;)Lcom/squareup/picasso/RequestCreator;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 178
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->pOptions:Lorg/json/JSONObject;

    const-string v1, "fit"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->pOptions:Lorg/json/JSONObject;

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 179
    invoke-virtual {p1}, Lcom/squareup/picasso/RequestCreator;->fit()Lcom/squareup/picasso/RequestCreator;

    .line 182
    :cond_0
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->pOptions:Lorg/json/JSONObject;

    const-string v1, "centerInside"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->pOptions:Lorg/json/JSONObject;

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 183
    invoke-virtual {p1}, Lcom/squareup/picasso/RequestCreator;->centerInside()Lcom/squareup/picasso/RequestCreator;

    .line 186
    :cond_1
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->pOptions:Lorg/json/JSONObject;

    const-string v1, "centerCrop"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_2

    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->pOptions:Lorg/json/JSONObject;

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 187
    invoke-virtual {p1}, Lcom/squareup/picasso/RequestCreator;->centerCrop()Lcom/squareup/picasso/RequestCreator;

    :cond_2
    return-object p1
.end method


# virtual methods
.method public getLocalBitmapFileFromString(Ljava/lang/String;)Ljava/io/File;
    .locals 6

    const-string v0, "share_image_"

    .line 262
    :try_start_0
    new-instance v1, Ljava/io/File;

    sget-object v2, Landroid/os/Environment;->DIRECTORY_DOWNLOADS:Ljava/lang/String;

    invoke-static {v2}, Landroid/os/Environment;->getExternalStoragePublicDirectory(Ljava/lang/String;)Ljava/io/File;

    move-result-object v2

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 263
    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v4

    invoke-virtual {v3, v4, v5}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v3, ".png"

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {v1, v2, v0}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    .line 264
    invoke-virtual {v1}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/File;->mkdirs()Z

    .line 265
    new-instance v0, Ljava/io/FileOutputStream;

    invoke-direct {v0, v1}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;)V

    const/4 v2, 0x0

    .line 266
    invoke-static {p1, v2}, Landroid/util/Base64;->decode(Ljava/lang/String;I)[B

    move-result-object p1

    .line 267
    invoke-virtual {v0, p1}, Ljava/io/FileOutputStream;->write([B)V

    .line 268
    invoke-virtual {v0}, Ljava/io/FileOutputStream;->close()V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 270
    invoke-virtual {p1}, Ljava/io/IOException;->printStackTrace()V

    const/4 v1, 0x0

    :goto_0
    return-object v1
.end method

.method public getLocalBitmapFileFromView(Landroid/widget/ImageView;)Ljava/io/File;
    .locals 7

    const-string v0, "share_image_"

    .line 283
    invoke-virtual {p1}, Landroid/widget/ImageView;->getDrawable()Landroid/graphics/drawable/Drawable;

    move-result-object v1

    .line 286
    instance-of v1, v1, Landroid/graphics/drawable/BitmapDrawable;

    const/4 v2, 0x0

    if-eqz v1, :cond_0

    .line 287
    invoke-virtual {p1}, Landroid/widget/ImageView;->getDrawable()Landroid/graphics/drawable/Drawable;

    move-result-object p1

    check-cast p1, Landroid/graphics/drawable/BitmapDrawable;

    invoke-virtual {p1}, Landroid/graphics/drawable/BitmapDrawable;->getBitmap()Landroid/graphics/Bitmap;

    move-result-object p1

    .line 295
    :try_start_0
    new-instance v1, Ljava/io/File;

    sget-object v3, Landroid/os/Environment;->DIRECTORY_DOWNLOADS:Ljava/lang/String;

    invoke-static {v3}, Landroid/os/Environment;->getExternalStoragePublicDirectory(Ljava/lang/String;)Ljava/io/File;

    move-result-object v3

    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 296
    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v5

    invoke-virtual {v4, v5, v6}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v4, ".png"

    invoke-virtual {v0, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {v1, v3, v0}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    .line 297
    invoke-virtual {v1}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/File;->mkdirs()Z

    .line 298
    new-instance v0, Ljava/io/FileOutputStream;

    invoke-direct {v0, v1}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;)V

    .line 299
    sget-object v3, Landroid/graphics/Bitmap$CompressFormat;->PNG:Landroid/graphics/Bitmap$CompressFormat;

    const/16 v4, 0x5a

    invoke-virtual {p1, v3, v4, v0}, Landroid/graphics/Bitmap;->compress(Landroid/graphics/Bitmap$CompressFormat;ILjava/io/OutputStream;)Z

    .line 300
    invoke-virtual {v0}, Ljava/io/FileOutputStream;->close()V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    move-object v2, v1

    goto :goto_0

    :catch_0
    move-exception p1

    .line 304
    invoke-virtual {p1}, Ljava/io/IOException;->printStackTrace()V

    :cond_0
    :goto_0
    return-object v2
.end method

.method protected onCreate(Landroid/os/Bundle;)V
    .locals 4

    .line 59
    invoke-super {p0, p1}, Landroid/app/Activity;->onCreate(Landroid/os/Bundle;)V

    .line 61
    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object p1

    invoke-virtual {p1}, Landroid/app/Application;->getResources()Landroid/content/res/Resources;

    move-result-object p1

    invoke-virtual {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->getApplication()Landroid/app/Application;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Application;->getPackageName()Ljava/lang/String;

    move-result-object v0

    const-string v1, "activity_photo"

    const-string v2, "layout"

    invoke-virtual {p1, v1, v2, v0}, Landroid/content/res/Resources;->getIdentifier(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)I

    move-result p1

    invoke-virtual {p0, p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->setContentView(I)V

    .line 64
    invoke-direct {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->findViews()V

    const/4 p1, 0x4

    .line 67
    :try_start_0
    sget-object v0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mArgs:Lorg/json/JSONArray;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mImage:Ljava/lang/String;

    .line 68
    sget-object v0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mArgs:Lorg/json/JSONArray;

    const/4 v2, 0x1

    invoke-virtual {v0, v2}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mTitle:Ljava/lang/String;

    .line 69
    sget-object v0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mArgs:Lorg/json/JSONArray;

    const/4 v3, 0x2

    invoke-virtual {v0, v3}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result v0

    iput-boolean v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mShare:Z

    .line 70
    sget-object v0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mArgs:Lorg/json/JSONArray;

    const/4 v3, 0x5

    invoke-virtual {v0, v3}, Lorg/json/JSONArray;->optString(I)Ljava/lang/String;

    move-result-object v0

    invoke-direct {p0, v0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->parseHeaders(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    iput-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mHeaders:Lorg/json/JSONObject;

    .line 71
    sget-object v0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mArgs:Lorg/json/JSONArray;

    const/4 v3, 0x6

    invoke-virtual {v0, v3}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object v0

    iput-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->pOptions:Lorg/json/JSONObject;

    if-nez v0, :cond_0

    .line 74
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    iput-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->pOptions:Lorg/json/JSONObject;

    .line 75
    const-string v3, "fit"

    invoke-virtual {v0, v3, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 76
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->pOptions:Lorg/json/JSONObject;

    const-string v3, "centerInside"

    invoke-virtual {v0, v3, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 77
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->pOptions:Lorg/json/JSONObject;

    const-string v2, "centerCrop"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 81
    :cond_0
    iget-boolean v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mShare:Z

    if-eqz v0, :cond_1

    goto :goto_0

    :cond_1
    move v1, p1

    :goto_0
    iput v1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->shareBtnVisibility:I
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    .line 85
    :catch_0
    iput p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->shareBtnVisibility:I

    .line 87
    :goto_1
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->shareBtn:Landroid/widget/ImageButton;

    iget v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->shareBtnVisibility:I

    invoke-virtual {p1, v0}, Landroid/widget/ImageButton;->setVisibility(I)V

    .line 89
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mTitle:Ljava/lang/String;

    const-string v0, ""

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_2

    .line 90
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->titleTxt:Landroid/widget/TextView;

    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mTitle:Ljava/lang/String;

    invoke-virtual {p1, v0}, Landroid/widget/TextView;->setText(Ljava/lang/CharSequence;)V

    .line 94
    :cond_2
    :try_start_1
    invoke-direct {p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->loadImage()V
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_2

    :catch_1
    move-exception p1

    .line 96
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    .line 100
    :goto_2
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->closeBtn:Landroid/widget/ImageButton;

    new-instance v0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$1;

    invoke-direct {v0, p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity$1;-><init>(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)V

    invoke-virtual {p1, v0}, Landroid/widget/ImageButton;->setOnClickListener(Landroid/view/View$OnClickListener;)V

    .line 107
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->shareBtn:Landroid/widget/ImageButton;

    new-instance v0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$2;

    invoke-direct {v0, p0}, Lcom/sarriaroman/PhotoViewer/PhotoActivity$2;-><init>(Lcom/sarriaroman/PhotoViewer/PhotoActivity;)V

    invoke-virtual {p1, v0}, Landroid/widget/ImageButton;->setOnClickListener(Landroid/view/View$OnClickListener;)V

    return-void
.end method

.method public onDestroy()V
    .locals 1

    .line 252
    iget-object v0, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->mTempImage:Ljava/io/File;

    if-eqz v0, :cond_0

    .line 253
    invoke-virtual {v0}, Ljava/io/File;->delete()Z

    .line 255
    :cond_0
    invoke-super {p0}, Landroid/app/Activity;->onDestroy()V

    return-void
.end method
