.class public Lcom/synconset/MultiImageChooserActivity;
.super Landroidx/appcompat/app/AppCompatActivity;
.source "MultiImageChooserActivity.java"

# interfaces
.implements Landroid/widget/AdapterView$OnItemClickListener;
.implements Landroid/app/LoaderManager$LoaderCallbacks;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/synconset/MultiImageChooserActivity$OutputType;,
        Lcom/synconset/MultiImageChooserActivity$ImageAdapter;,
        Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;,
        Lcom/synconset/MultiImageChooserActivity$SquareImageView;
    }
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Landroidx/appcompat/app/AppCompatActivity;",
        "Landroid/widget/AdapterView$OnItemClickListener;",
        "Landroid/app/LoaderManager$LoaderCallbacks<",
        "Landroid/database/Cursor;",
        ">;"
    }
.end annotation


# static fields
.field private static final CURSORLOADER_REAL:I = 0x1

.field private static final CURSORLOADER_THUMBS:I = 0x0

.field public static final HEIGHT_KEY:Ljava/lang/String; = "HEIGHT"

.field public static final MAX_IMAGES_KEY:Ljava/lang/String; = "MAX_IMAGES"

.field public static final NOLIMIT:I = -0x1

.field public static final OUTPUT_TYPE_KEY:Ljava/lang/String; = "OUTPUT_TYPE"

.field public static final QUALITY_KEY:Ljava/lang/String; = "QUALITY"

.field private static final TAG:Ljava/lang/String; = "ImagePicker"

.field public static final WIDTH_KEY:Ljava/lang/String; = "WIDTH"


# instance fields
.field private abDiscardView:Landroid/view/View;

.field private abDoneView:Landroid/view/View;

.field private actual_image_column_index:I

.field private actualimagecursor:Landroid/database/Cursor;

.field private checkStatus:Landroid/util/SparseBooleanArray;

.field private colWidth:I

.field private desiredHeight:I

.field private desiredWidth:I

.field private fakeR:Lcom/synconset/FakeR;

.field private final fetcher:Lcom/synconset/ImageFetcher;

.field private fileNames:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field

.field private ia:Lcom/synconset/MultiImageChooserActivity$ImageAdapter;

.field private imageChooserDiscardText:Ljava/lang/String;

.field private imageChooserDoneText:Ljava/lang/String;

.field private image_column_index:I

.field private image_column_orientation:I

.field private imagecursor:Landroid/database/Cursor;

.field private limitAlertButton:Ljava/lang/String;

.field private limitAlertContent:Ljava/lang/String;

.field private limitAlertTitle:Ljava/lang/String;

.field private maxImageCount:I

.field private maxImages:I

.field private orientation_column_index:I

.field private outputType:Lcom/synconset/MultiImageChooserActivity$OutputType;

.field private processingImagesMessage:Ljava/lang/String;

.field private processingImagesTitle:Ljava/lang/String;

.field private progress:Landroid/app/ProgressDialog;

.field private quality:I

.field private selectedColor:I

.field private shouldRequestThumb:Z


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 82
    invoke-direct {p0}, Landroidx/appcompat/app/AppCompatActivity;-><init>()V

    .line 104
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->fileNames:Ljava/util/Map;

    .line 106
    new-instance v0, Landroid/util/SparseBooleanArray;

    invoke-direct {v0}, Landroid/util/SparseBooleanArray;-><init>()V

    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->checkStatus:Landroid/util/SparseBooleanArray;

    .line 124
    new-instance v0, Lcom/synconset/ImageFetcher;

    invoke-direct {v0}, Lcom/synconset/ImageFetcher;-><init>()V

    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->fetcher:Lcom/synconset/ImageFetcher;

    const v0, -0xcd4d1f

    .line 126
    iput v0, p0, Lcom/synconset/MultiImageChooserActivity;->selectedColor:I

    const/4 v0, 0x1

    .line 127
    iput-boolean v0, p0, Lcom/synconset/MultiImageChooserActivity;->shouldRequestThumb:Z

    return-void
.end method

.method static synthetic access$000(Lcom/synconset/MultiImageChooserActivity;)Z
    .locals 0

    .line 82
    iget-boolean p0, p0, Lcom/synconset/MultiImageChooserActivity;->shouldRequestThumb:Z

    return p0
.end method

.method static synthetic access$002(Lcom/synconset/MultiImageChooserActivity;Z)Z
    .locals 0

    .line 82
    iput-boolean p1, p0, Lcom/synconset/MultiImageChooserActivity;->shouldRequestThumb:Z

    return p1
.end method

.method static synthetic access$100(Lcom/synconset/MultiImageChooserActivity;)Lcom/synconset/MultiImageChooserActivity$ImageAdapter;
    .locals 0

    .line 82
    iget-object p0, p0, Lcom/synconset/MultiImageChooserActivity;->ia:Lcom/synconset/MultiImageChooserActivity$ImageAdapter;

    return-object p0
.end method

.method static synthetic access$1000(Lcom/synconset/MultiImageChooserActivity;II)F
    .locals 0

    .line 82
    invoke-direct {p0, p1, p2}, Lcom/synconset/MultiImageChooserActivity;->calculateScale(II)F

    move-result p0

    return p0
.end method

.method static synthetic access$1100(Lcom/synconset/MultiImageChooserActivity;Landroid/graphics/BitmapFactory$Options;II)I
    .locals 0

    .line 82
    invoke-direct {p0, p1, p2, p3}, Lcom/synconset/MultiImageChooserActivity;->calculateInSampleSize(Landroid/graphics/BitmapFactory$Options;II)I

    move-result p0

    return p0
.end method

.method static synthetic access$1200(Lcom/synconset/MultiImageChooserActivity;I)I
    .locals 0

    .line 82
    invoke-direct {p0, p1}, Lcom/synconset/MultiImageChooserActivity;->calculateNextSampleSize(I)I

    move-result p0

    return p0
.end method

.method static synthetic access$1300(Lcom/synconset/MultiImageChooserActivity;)Lcom/synconset/MultiImageChooserActivity$OutputType;
    .locals 0

    .line 82
    iget-object p0, p0, Lcom/synconset/MultiImageChooserActivity;->outputType:Lcom/synconset/MultiImageChooserActivity$OutputType;

    return-object p0
.end method

.method static synthetic access$1400(Lcom/synconset/MultiImageChooserActivity;)Landroid/app/ProgressDialog;
    .locals 0

    .line 82
    iget-object p0, p0, Lcom/synconset/MultiImageChooserActivity;->progress:Landroid/app/ProgressDialog;

    return-object p0
.end method

.method static synthetic access$1500(Lcom/synconset/MultiImageChooserActivity;)I
    .locals 0

    .line 82
    iget p0, p0, Lcom/synconset/MultiImageChooserActivity;->quality:I

    return p0
.end method

.method static synthetic access$400(Lcom/synconset/MultiImageChooserActivity;)Landroid/database/Cursor;
    .locals 0

    .line 82
    iget-object p0, p0, Lcom/synconset/MultiImageChooserActivity;->imagecursor:Landroid/database/Cursor;

    return-object p0
.end method

.method static synthetic access$500(Lcom/synconset/MultiImageChooserActivity;)I
    .locals 0

    .line 82
    iget p0, p0, Lcom/synconset/MultiImageChooserActivity;->image_column_index:I

    return p0
.end method

.method static synthetic access$600(Lcom/synconset/MultiImageChooserActivity;)I
    .locals 0

    .line 82
    iget p0, p0, Lcom/synconset/MultiImageChooserActivity;->image_column_orientation:I

    return p0
.end method

.method static synthetic access$700(Lcom/synconset/MultiImageChooserActivity;)I
    .locals 0

    .line 82
    iget p0, p0, Lcom/synconset/MultiImageChooserActivity;->selectedColor:I

    return p0
.end method

.method static synthetic access$800(Lcom/synconset/MultiImageChooserActivity;)I
    .locals 0

    .line 82
    iget p0, p0, Lcom/synconset/MultiImageChooserActivity;->colWidth:I

    return p0
.end method

.method static synthetic access$900(Lcom/synconset/MultiImageChooserActivity;)Lcom/synconset/ImageFetcher;
    .locals 0

    .line 82
    iget-object p0, p0, Lcom/synconset/MultiImageChooserActivity;->fetcher:Lcom/synconset/ImageFetcher;

    return-object p0
.end method

.method private calculateInSampleSize(Landroid/graphics/BitmapFactory$Options;II)I
    .locals 3

    .line 717
    iget v0, p1, Landroid/graphics/BitmapFactory$Options;->outHeight:I

    .line 718
    iget p1, p1, Landroid/graphics/BitmapFactory$Options;->outWidth:I

    const/4 v1, 0x1

    if-gt v0, p3, :cond_0

    if-le p1, p2, :cond_1

    .line 722
    :cond_0
    div-int/lit8 v0, v0, 0x2

    .line 723
    div-int/lit8 p1, p1, 0x2

    .line 727
    :goto_0
    div-int v2, v0, v1

    if-le v2, p3, :cond_1

    div-int v2, p1, v1

    if-le v2, p2, :cond_1

    mul-int/lit8 v1, v1, 0x2

    goto :goto_0

    :cond_1
    return v1
.end method

.method private calculateNextSampleSize(I)I
    .locals 6

    int-to-double v0, p1

    .line 736
    invoke-static {v0, v1}, Ljava/lang/Math;->log(D)D

    move-result-wide v0

    const-wide/high16 v2, 0x4000000000000000L    # 2.0

    invoke-static {v2, v3}, Ljava/lang/Math;->log(D)D

    move-result-wide v4

    div-double/2addr v0, v4

    double-to-int p1, v0

    int-to-double v0, p1

    const-wide/high16 v4, 0x3ff0000000000000L    # 1.0

    add-double/2addr v0, v4

    .line 737
    invoke-static {v0, v1, v2, v3}, Ljava/lang/Math;->pow(DD)D

    move-result-wide v0

    double-to-int p1, v0

    return p1
.end method

.method private calculateScale(II)F
    .locals 3

    .line 744
    iget v0, p0, Lcom/synconset/MultiImageChooserActivity;->desiredWidth:I

    const/high16 v1, 0x3f800000    # 1.0f

    if-gtz v0, :cond_0

    iget v2, p0, Lcom/synconset/MultiImageChooserActivity;->desiredHeight:I

    if-lez v2, :cond_5

    .line 745
    :cond_0
    iget v2, p0, Lcom/synconset/MultiImageChooserActivity;->desiredHeight:I

    if-nez v2, :cond_1

    if-ge v0, p1, :cond_1

    int-to-float p2, v0

    int-to-float p1, p1

    div-float v1, p2, p1

    goto :goto_1

    :cond_1
    if-nez v0, :cond_2

    if-ge v2, p2, :cond_2

    int-to-float p1, v2

    int-to-float p2, p2

    div-float v1, p1, p2

    goto :goto_1

    :cond_2
    if-lez v0, :cond_3

    if-ge v0, p1, :cond_3

    int-to-float v0, v0

    int-to-float p1, p1

    div-float/2addr v0, p1

    goto :goto_0

    :cond_3
    move v0, v1

    :goto_0
    if-lez v2, :cond_4

    if-ge v2, p2, :cond_4

    int-to-float p1, v2

    int-to-float p2, p2

    div-float v1, p1, p2

    :cond_4
    cmpg-float p1, v0, v1

    if-gez p1, :cond_5

    move v1, v0

    :cond_5
    :goto_1
    return v1
.end method

.method private getImageName(I)Ljava/lang/String;
    .locals 1

    .line 415
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->actualimagecursor:Landroid/database/Cursor;

    invoke-interface {v0, p1}, Landroid/database/Cursor;->moveToPosition(I)Z

    .line 419
    :try_start_0
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->actualimagecursor:Landroid/database/Cursor;

    iget v0, p0, Lcom/synconset/MultiImageChooserActivity;->actual_image_column_index:I

    invoke-interface {p1, v0}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    const/4 p1, 0x0

    :goto_0
    return-object p1
.end method

.method private getImageRotation(I)I
    .locals 1

    .line 428
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->actualimagecursor:Landroid/database/Cursor;

    invoke-interface {v0, p1}, Landroid/database/Cursor;->moveToPosition(I)Z

    .line 432
    :try_start_0
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->actualimagecursor:Landroid/database/Cursor;

    iget v0, p0, Lcom/synconset/MultiImageChooserActivity;->orientation_column_index:I

    invoke-interface {p1, v0}, Landroid/database/Cursor;->getInt(I)I

    move-result p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    const/4 p1, 0x0

    :goto_0
    return p1
.end method

.method private setupHeader()V
    .locals 5

    .line 374
    const-string v0, "layout_inflater"

    invoke-virtual {p0, v0}, Lcom/synconset/MultiImageChooserActivity;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/view/LayoutInflater;

    .line 375
    iget-object v1, p0, Lcom/synconset/MultiImageChooserActivity;->fakeR:Lcom/synconset/FakeR;

    const-string v2, "layout"

    const-string v3, "actionbar_custom_view_done_discard"

    .line 376
    invoke-virtual {v1, v2, v3}, Lcom/synconset/FakeR;->getId(Ljava/lang/String;Ljava/lang/String;)I

    move-result v1

    const/4 v2, 0x0

    .line 375
    invoke-virtual {v0, v1, v2}, Landroid/view/LayoutInflater;->inflate(ILandroid/view/ViewGroup;)Landroid/view/View;

    move-result-object v0

    .line 379
    iget-object v1, p0, Lcom/synconset/MultiImageChooserActivity;->fakeR:Lcom/synconset/FakeR;

    const-string v2, "actionbar_done"

    const-string v3, "id"

    invoke-virtual {v1, v3, v2}, Lcom/synconset/FakeR;->getId(Ljava/lang/String;Ljava/lang/String;)I

    move-result v1

    invoke-virtual {v0, v1}, Landroid/view/View;->findViewById(I)Landroid/view/View;

    move-result-object v1

    iput-object v1, p0, Lcom/synconset/MultiImageChooserActivity;->abDoneView:Landroid/view/View;

    .line 380
    iget-object v2, p0, Lcom/synconset/MultiImageChooserActivity;->fakeR:Lcom/synconset/FakeR;

    const-string v4, "actionbar_done_textview"

    invoke-virtual {v2, v3, v4}, Lcom/synconset/FakeR;->getId(Ljava/lang/String;Ljava/lang/String;)I

    move-result v2

    invoke-virtual {v1, v2}, Landroid/view/View;->findViewById(I)Landroid/view/View;

    move-result-object v1

    check-cast v1, Landroid/widget/TextView;

    .line 381
    iget-object v2, p0, Lcom/synconset/MultiImageChooserActivity;->imageChooserDoneText:Ljava/lang/String;

    invoke-virtual {v1, v2}, Landroid/widget/TextView;->setText(Ljava/lang/CharSequence;)V

    .line 382
    iget-object v1, p0, Lcom/synconset/MultiImageChooserActivity;->abDoneView:Landroid/view/View;

    new-instance v2, Lcom/synconset/MultiImageChooserActivity$3;

    invoke-direct {v2, p0}, Lcom/synconset/MultiImageChooserActivity$3;-><init>(Lcom/synconset/MultiImageChooserActivity;)V

    invoke-virtual {v1, v2}, Landroid/view/View;->setOnClickListener(Landroid/view/View$OnClickListener;)V

    .line 390
    iget-object v1, p0, Lcom/synconset/MultiImageChooserActivity;->fakeR:Lcom/synconset/FakeR;

    const-string v2, "actionbar_discard"

    invoke-virtual {v1, v3, v2}, Lcom/synconset/FakeR;->getId(Ljava/lang/String;Ljava/lang/String;)I

    move-result v1

    invoke-virtual {v0, v1}, Landroid/view/View;->findViewById(I)Landroid/view/View;

    move-result-object v1

    iput-object v1, p0, Lcom/synconset/MultiImageChooserActivity;->abDiscardView:Landroid/view/View;

    .line 391
    iget-object v2, p0, Lcom/synconset/MultiImageChooserActivity;->fakeR:Lcom/synconset/FakeR;

    const-string v4, "actionbar_discard_textview"

    invoke-virtual {v2, v3, v4}, Lcom/synconset/FakeR;->getId(Ljava/lang/String;Ljava/lang/String;)I

    move-result v2

    invoke-virtual {v1, v2}, Landroid/view/View;->findViewById(I)Landroid/view/View;

    move-result-object v1

    check-cast v1, Landroid/widget/TextView;

    .line 392
    iget-object v2, p0, Lcom/synconset/MultiImageChooserActivity;->imageChooserDiscardText:Ljava/lang/String;

    invoke-virtual {v1, v2}, Landroid/widget/TextView;->setText(Ljava/lang/CharSequence;)V

    .line 393
    iget-object v1, p0, Lcom/synconset/MultiImageChooserActivity;->abDiscardView:Landroid/view/View;

    new-instance v2, Lcom/synconset/MultiImageChooserActivity$4;

    invoke-direct {v2, p0}, Lcom/synconset/MultiImageChooserActivity$4;-><init>(Lcom/synconset/MultiImageChooserActivity;)V

    invoke-virtual {v1, v2}, Landroid/view/View;->setOnClickListener(Landroid/view/View$OnClickListener;)V

    .line 401
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->getSupportActionBar()Landroidx/appcompat/app/ActionBar;

    move-result-object v1

    if-eqz v1, :cond_0

    const/16 v2, 0x10

    const/16 v3, 0x1a

    .line 403
    invoke-virtual {v1, v2, v3}, Landroidx/appcompat/app/ActionBar;->setDisplayOptions(II)V

    .line 408
    new-instance v2, Landroidx/appcompat/app/ActionBar$LayoutParams;

    const/4 v3, -0x1

    invoke-direct {v2, v3, v3}, Landroidx/appcompat/app/ActionBar$LayoutParams;-><init>(II)V

    invoke-virtual {v1, v0, v2}, Landroidx/appcompat/app/ActionBar;->setCustomView(Landroid/view/View;Landroidx/appcompat/app/ActionBar$LayoutParams;)V

    :cond_0
    return-void
.end method

.method private updateAcceptButton()V
    .locals 2

    .line 350
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->abDoneView:Landroid/view/View;

    if-eqz v0, :cond_1

    .line 351
    iget-object v1, p0, Lcom/synconset/MultiImageChooserActivity;->fileNames:Ljava/util/Map;

    invoke-interface {v1}, Ljava/util/Map;->size()I

    move-result v1

    if-eqz v1, :cond_0

    const/4 v1, 0x1

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    :goto_0
    invoke-virtual {v0, v1}, Landroid/view/View;->setEnabled(Z)V

    :cond_1
    return-void
.end method


# virtual methods
.method public cancelClicked()V
    .locals 1

    const/4 v0, 0x0

    .line 326
    invoke-virtual {p0, v0}, Lcom/synconset/MultiImageChooserActivity;->setResult(I)V

    .line 327
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->finish()V

    return-void
.end method

.method public isChecked(I)Z
    .locals 1

    .line 441
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->checkStatus:Landroid/util/SparseBooleanArray;

    invoke-virtual {v0, p1}, Landroid/util/SparseBooleanArray;->get(I)Z

    move-result p1

    return p1
.end method

.method public onCreate(Landroid/os/Bundle;)V
    .locals 3

    .line 137
    invoke-super {p0, p1}, Landroidx/appcompat/app/AppCompatActivity;->onCreate(Landroid/os/Bundle;)V

    .line 138
    new-instance p1, Lcom/synconset/FakeR;

    invoke-direct {p1, p0}, Lcom/synconset/FakeR;-><init>(Landroid/app/Activity;)V

    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->fakeR:Lcom/synconset/FakeR;

    .line 139
    const-string v0, "layout"

    const-string v1, "multiselectorgrid"

    invoke-virtual {p1, v0, v1}, Lcom/synconset/FakeR;->getId(Ljava/lang/String;Ljava/lang/String;)I

    move-result p1

    invoke-virtual {p0, p1}, Lcom/synconset/MultiImageChooserActivity;->setContentView(I)V

    .line 140
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->fileNames:Ljava/util/Map;

    invoke-interface {p1}, Ljava/util/Map;->clear()V

    .line 142
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->getIntent()Landroid/content/Intent;

    move-result-object p1

    const-string v0, "MAX_IMAGES"

    const/4 v1, -0x1

    invoke-virtual {p1, v0, v1}, Landroid/content/Intent;->getIntExtra(Ljava/lang/String;I)I

    move-result p1

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->maxImages:I

    .line 143
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->getIntent()Landroid/content/Intent;

    move-result-object p1

    const-string v0, "WIDTH"

    const/4 v1, 0x0

    invoke-virtual {p1, v0, v1}, Landroid/content/Intent;->getIntExtra(Ljava/lang/String;I)I

    move-result p1

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->desiredWidth:I

    .line 144
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->getIntent()Landroid/content/Intent;

    move-result-object p1

    const-string v0, "HEIGHT"

    invoke-virtual {p1, v0, v1}, Landroid/content/Intent;->getIntExtra(Ljava/lang/String;I)I

    move-result p1

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->desiredHeight:I

    .line 145
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->getIntent()Landroid/content/Intent;

    move-result-object p1

    const-string v0, "QUALITY"

    invoke-virtual {p1, v0, v1}, Landroid/content/Intent;->getIntExtra(Ljava/lang/String;I)I

    move-result p1

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->quality:I

    .line 146
    iget p1, p0, Lcom/synconset/MultiImageChooserActivity;->maxImages:I

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->maxImageCount:I

    .line 147
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->getIntent()Landroid/content/Intent;

    move-result-object p1

    const-string v0, "OUTPUT_TYPE"

    invoke-virtual {p1, v0, v1}, Landroid/content/Intent;->getIntExtra(Ljava/lang/String;I)I

    move-result p1

    invoke-static {p1}, Lcom/synconset/MultiImageChooserActivity$OutputType;->fromValue(I)Lcom/synconset/MultiImageChooserActivity$OutputType;

    move-result-object p1

    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->outputType:Lcom/synconset/MultiImageChooserActivity$OutputType;

    .line 149
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->getIntent()Landroid/content/Intent;

    move-result-object p1

    invoke-virtual {p1}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object p1

    .line 150
    const-string v0, "imageChooserDoneText"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->imageChooserDoneText:Ljava/lang/String;

    .line 151
    const-string v0, "imageChooserDiscardText"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->imageChooserDiscardText:Ljava/lang/String;

    .line 152
    const-string v0, "limitAlertTitle"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->limitAlertTitle:Ljava/lang/String;

    .line 153
    const-string v0, "limitAlertContent"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->limitAlertContent:Ljava/lang/String;

    .line 154
    const-string v0, "limitAlertButton"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->limitAlertButton:Ljava/lang/String;

    .line 155
    const-string v0, "processingImagesTitle"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->processingImagesTitle:Ljava/lang/String;

    .line 156
    const-string v0, "processingImagesMessage"

    invoke-virtual {p1, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->processingImagesMessage:Ljava/lang/String;

    .line 158
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->getWindowManager()Landroid/view/WindowManager;

    move-result-object p1

    invoke-interface {p1}, Landroid/view/WindowManager;->getDefaultDisplay()Landroid/view/Display;

    move-result-object p1

    .line 159
    invoke-virtual {p1}, Landroid/view/Display;->getWidth()I

    move-result p1

    .line 161
    div-int/lit8 p1, p1, 0x4

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->colWidth:I

    .line 163
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->fakeR:Lcom/synconset/FakeR;

    const-string v0, "id"

    const-string v2, "gridview"

    invoke-virtual {p1, v0, v2}, Lcom/synconset/FakeR;->getId(Ljava/lang/String;Ljava/lang/String;)I

    move-result p1

    invoke-virtual {p0, p1}, Lcom/synconset/MultiImageChooserActivity;->findViewById(I)Landroid/view/View;

    move-result-object p1

    check-cast p1, Landroid/widget/GridView;

    .line 164
    invoke-virtual {p1, p0}, Landroid/widget/GridView;->setOnItemClickListener(Landroid/widget/AdapterView$OnItemClickListener;)V

    .line 165
    new-instance v0, Lcom/synconset/MultiImageChooserActivity$1;

    invoke-direct {v0, p0}, Lcom/synconset/MultiImageChooserActivity$1;-><init>(Lcom/synconset/MultiImageChooserActivity;)V

    invoke-virtual {p1, v0}, Landroid/widget/GridView;->setOnScrollListener(Landroid/widget/AbsListView$OnScrollListener;)V

    .line 191
    new-instance v0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;

    const/4 v2, 0x0

    invoke-direct {v0, p0, v2}, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;-><init>(Lcom/synconset/MultiImageChooserActivity;Lcom/synconset/MultiImageChooserActivity$1;)V

    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->ia:Lcom/synconset/MultiImageChooserActivity$ImageAdapter;

    .line 192
    invoke-virtual {p1, v0}, Landroid/widget/GridView;->setAdapter(Landroid/widget/ListAdapter;)V

    .line 194
    invoke-static {v1}, Landroid/app/LoaderManager;->enableDebugLogging(Z)V

    .line 195
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->getLoaderManager()Landroid/app/LoaderManager;

    move-result-object p1

    invoke-virtual {p1, v1, v2, p0}, Landroid/app/LoaderManager;->initLoader(ILandroid/os/Bundle;Landroid/app/LoaderManager$LoaderCallbacks;)Landroid/content/Loader;

    .line 196
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->getLoaderManager()Landroid/app/LoaderManager;

    move-result-object p1

    const/4 v0, 0x1

    invoke-virtual {p1, v0, v2, p0}, Landroid/app/LoaderManager;->initLoader(ILandroid/os/Bundle;Landroid/app/LoaderManager$LoaderCallbacks;)Landroid/content/Loader;

    .line 197
    invoke-direct {p0}, Lcom/synconset/MultiImageChooserActivity;->setupHeader()V

    .line 198
    invoke-direct {p0}, Lcom/synconset/MultiImageChooserActivity;->updateAcceptButton()V

    .line 199
    new-instance p1, Landroid/app/ProgressDialog;

    invoke-direct {p1, p0}, Landroid/app/ProgressDialog;-><init>(Landroid/content/Context;)V

    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->progress:Landroid/app/ProgressDialog;

    .line 200
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->processingImagesTitle:Ljava/lang/String;

    invoke-virtual {p1, v0}, Landroid/app/ProgressDialog;->setTitle(Ljava/lang/CharSequence;)V

    .line 201
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->progress:Landroid/app/ProgressDialog;

    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->processingImagesMessage:Ljava/lang/String;

    invoke-virtual {p1, v0}, Landroid/app/ProgressDialog;->setMessage(Ljava/lang/CharSequence;)V

    return-void
.end method

.method public onCreateLoader(ILandroid/os/Bundle;)Landroid/content/Loader;
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I",
            "Landroid/os/Bundle;",
            ")",
            "Landroid/content/Loader<",
            "Landroid/database/Cursor;",
            ">;"
        }
    .end annotation

    .line 267
    new-instance p2, Ljava/util/ArrayList;

    invoke-direct {p2}, Ljava/util/ArrayList;-><init>()V

    .line 268
    const-string v0, "orientation"

    if-eqz p1, :cond_1

    const/4 v1, 0x1

    if-eq p1, v1, :cond_0

    goto :goto_0

    .line 275
    :cond_0
    const-string p1, "_data"

    invoke-virtual {p2, p1}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 276
    invoke-virtual {p2, v0}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 270
    :cond_1
    const-string p1, "_id"

    invoke-virtual {p2, p1}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 271
    invoke-virtual {p2, v0}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 280
    :goto_0
    new-instance p1, Landroid/content/CursorLoader;

    sget-object v3, Landroid/provider/MediaStore$Images$Media;->EXTERNAL_CONTENT_URI:Landroid/net/Uri;

    .line 283
    invoke-virtual {p2}, Ljava/util/ArrayList;->size()I

    move-result v0

    new-array v0, v0, [Ljava/lang/String;

    invoke-virtual {p2, v0}, Ljava/util/ArrayList;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p2

    move-object v4, p2

    check-cast v4, [Ljava/lang/String;

    const/4 v6, 0x0

    const-string v7, "DATE_MODIFIED DESC"

    const/4 v5, 0x0

    move-object v1, p1

    move-object v2, p0

    invoke-direct/range {v1 .. v7}, Landroid/content/CursorLoader;-><init>(Landroid/content/Context;Landroid/net/Uri;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;)V

    return-object p1
.end method

.method public onItemClick(Landroid/widget/AdapterView;Landroid/view/View;IJ)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/widget/AdapterView<",
            "*>;",
            "Landroid/view/View;",
            "IJ)V"
        }
    .end annotation

    .line 206
    invoke-direct {p0, p3}, Lcom/synconset/MultiImageChooserActivity;->getImageName(I)Ljava/lang/String;

    move-result-object p1

    .line 207
    invoke-direct {p0, p3}, Lcom/synconset/MultiImageChooserActivity;->getImageRotation(I)I

    move-result p4

    if-nez p1, :cond_0

    return-void

    .line 213
    :cond_0
    invoke-virtual {p0, p3}, Lcom/synconset/MultiImageChooserActivity;->isChecked(I)Z

    move-result p5

    xor-int/lit8 v0, p5, 0x1

    .line 215
    iget v1, p0, Lcom/synconset/MultiImageChooserActivity;->maxImages:I

    const/4 v2, 0x0

    if-nez v1, :cond_1

    if-nez p5, :cond_1

    .line 217
    new-instance p1, Landroid/app/AlertDialog$Builder;

    invoke-direct {p1, p0}, Landroid/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

    iget-object p2, p0, Lcom/synconset/MultiImageChooserActivity;->limitAlertTitle:Ljava/lang/String;

    iget p4, p0, Lcom/synconset/MultiImageChooserActivity;->maxImageCount:I

    .line 218
    invoke-static {p4}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p4

    filled-new-array {p4}, [Ljava/lang/Object;

    move-result-object p4

    invoke-static {p2, p4}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Landroid/app/AlertDialog$Builder;->setTitle(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    move-result-object p1

    iget-object p2, p0, Lcom/synconset/MultiImageChooserActivity;->limitAlertContent:Ljava/lang/String;

    iget p4, p0, Lcom/synconset/MultiImageChooserActivity;->maxImageCount:I

    .line 220
    invoke-static {p4}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p4

    filled-new-array {p4}, [Ljava/lang/Object;

    move-result-object p4

    invoke-static {p2, p4}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p2

    .line 219
    invoke-virtual {p1, p2}, Landroid/app/AlertDialog$Builder;->setMessage(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    move-result-object p1

    iget-object p2, p0, Lcom/synconset/MultiImageChooserActivity;->limitAlertButton:Ljava/lang/String;

    new-instance p4, Lcom/synconset/MultiImageChooserActivity$2;

    invoke-direct {p4, p0}, Lcom/synconset/MultiImageChooserActivity$2;-><init>(Lcom/synconset/MultiImageChooserActivity;)V

    .line 221
    invoke-virtual {p1, p2, p4}, Landroid/app/AlertDialog$Builder;->setPositiveButton(Ljava/lang/CharSequence;Landroid/content/DialogInterface$OnClickListener;)Landroid/app/AlertDialog$Builder;

    move-result-object p1

    .line 226
    invoke-virtual {p1}, Landroid/app/AlertDialog$Builder;->create()Landroid/app/AlertDialog;

    move-result-object p1

    .line 227
    invoke-virtual {p1}, Landroid/app/AlertDialog;->show()V

    move v0, v2

    goto :goto_0

    :cond_1
    const/4 v1, 0x1

    if-nez p5, :cond_3

    .line 230
    iget-object p5, p0, Lcom/synconset/MultiImageChooserActivity;->fileNames:Ljava/util/Map;

    invoke-static {p4}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p4

    invoke-interface {p5, p1, p4}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 232
    iget p1, p0, Lcom/synconset/MultiImageChooserActivity;->maxImageCount:I

    if-ne p1, v1, :cond_2

    .line 233
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->selectClicked()V

    goto :goto_0

    .line 236
    :cond_2
    iget p1, p0, Lcom/synconset/MultiImageChooserActivity;->maxImages:I

    sub-int/2addr p1, v1

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->maxImages:I

    .line 237
    move-object p1, p2

    check-cast p1, Landroid/widget/ImageView;

    const/16 p4, 0x80

    .line 240
    invoke-virtual {p1, p4}, Landroid/widget/ImageView;->setImageAlpha(I)V

    .line 245
    iget p1, p0, Lcom/synconset/MultiImageChooserActivity;->selectedColor:I

    invoke-virtual {p2, p1}, Landroid/view/View;->setBackgroundColor(I)V

    goto :goto_0

    .line 248
    :cond_3
    iget-object p4, p0, Lcom/synconset/MultiImageChooserActivity;->fileNames:Ljava/util/Map;

    invoke-interface {p4, p1}, Ljava/util/Map;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 249
    iget p1, p0, Lcom/synconset/MultiImageChooserActivity;->maxImages:I

    add-int/2addr p1, v1

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->maxImages:I

    .line 250
    move-object p1, p2

    check-cast p1, Landroid/widget/ImageView;

    const/16 p4, 0xff

    .line 253
    invoke-virtual {p1, p4}, Landroid/widget/ImageView;->setImageAlpha(I)V

    .line 258
    invoke-virtual {p2, v2}, Landroid/view/View;->setBackgroundColor(I)V

    .line 261
    :goto_0
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->checkStatus:Landroid/util/SparseBooleanArray;

    invoke-virtual {p1, p3, v0}, Landroid/util/SparseBooleanArray;->put(IZ)V

    .line 262
    invoke-direct {p0}, Lcom/synconset/MultiImageChooserActivity;->updateAcceptButton()V

    return-void
.end method

.method public onLoadFinished(Landroid/content/Loader;Landroid/database/Cursor;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/content/Loader<",
            "Landroid/database/Cursor;",
            ">;",
            "Landroid/database/Cursor;",
            ")V"
        }
    .end annotation

    if-nez p2, :cond_0

    return-void

    .line 296
    :cond_0
    invoke-virtual {p1}, Landroid/content/Loader;->getId()I

    move-result p1

    const-string v0, "orientation"

    if-eqz p1, :cond_2

    const/4 v1, 0x1

    if-eq p1, v1, :cond_1

    goto :goto_0

    .line 305
    :cond_1
    iput-object p2, p0, Lcom/synconset/MultiImageChooserActivity;->actualimagecursor:Landroid/database/Cursor;

    .line 306
    const-string p1, "_data"

    invoke-interface {p2, p1}, Landroid/database/Cursor;->getColumnIndexOrThrow(Ljava/lang/String;)I

    move-result p1

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->actual_image_column_index:I

    .line 307
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->actualimagecursor:Landroid/database/Cursor;

    invoke-interface {p1, v0}, Landroid/database/Cursor;->getColumnIndexOrThrow(Ljava/lang/String;)I

    move-result p1

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->orientation_column_index:I

    goto :goto_0

    .line 298
    :cond_2
    iput-object p2, p0, Lcom/synconset/MultiImageChooserActivity;->imagecursor:Landroid/database/Cursor;

    .line 299
    const-string p1, "_id"

    invoke-interface {p2, p1}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result p1

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->image_column_index:I

    .line 300
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->imagecursor:Landroid/database/Cursor;

    invoke-interface {p1, v0}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result p1

    iput p1, p0, Lcom/synconset/MultiImageChooserActivity;->image_column_orientation:I

    .line 301
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity;->ia:Lcom/synconset/MultiImageChooserActivity$ImageAdapter;

    invoke-virtual {p1}, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->notifyDataSetChanged()V

    :goto_0
    return-void
.end method

.method public bridge synthetic onLoadFinished(Landroid/content/Loader;Ljava/lang/Object;)V
    .locals 0

    .line 82
    check-cast p2, Landroid/database/Cursor;

    invoke-virtual {p0, p1, p2}, Lcom/synconset/MultiImageChooserActivity;->onLoadFinished(Landroid/content/Loader;Landroid/database/Cursor;)V

    return-void
.end method

.method public onLoaderReset(Landroid/content/Loader;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/content/Loader<",
            "Landroid/database/Cursor;",
            ">;)V"
        }
    .end annotation

    .line 314
    invoke-virtual {p1}, Landroid/content/Loader;->getId()I

    move-result p1

    const/4 v0, 0x0

    if-eqz p1, :cond_1

    const/4 v1, 0x1

    if-eq p1, v1, :cond_0

    goto :goto_0

    .line 320
    :cond_0
    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->actualimagecursor:Landroid/database/Cursor;

    goto :goto_0

    .line 316
    :cond_1
    iput-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->imagecursor:Landroid/database/Cursor;

    :goto_0
    return-void
.end method

.method public selectClicked()V
    .locals 4

    .line 331
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->abDiscardView:Landroid/view/View;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/view/View;->setEnabled(Z)V

    .line 332
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->abDoneView:Landroid/view/View;

    invoke-virtual {v0, v1}, Landroid/view/View;->setEnabled(Z)V

    .line 333
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->progress:Landroid/app/ProgressDialog;

    invoke-virtual {v0}, Landroid/app/ProgressDialog;->show()V

    .line 335
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->fileNames:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 336
    invoke-virtual {p0, v1}, Lcom/synconset/MultiImageChooserActivity;->setResult(I)V

    .line 337
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity;->progress:Landroid/app/ProgressDialog;

    invoke-virtual {v0}, Landroid/app/ProgressDialog;->dismiss()V

    .line 338
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->finish()V

    goto :goto_0

    .line 340
    :cond_0
    invoke-virtual {p0}, Lcom/synconset/MultiImageChooserActivity;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/res/Resources;->getConfiguration()Landroid/content/res/Configuration;

    move-result-object v0

    iget v0, v0, Landroid/content/res/Configuration;->orientation:I

    invoke-virtual {p0, v0}, Lcom/synconset/MultiImageChooserActivity;->setRequestedOrientation(I)V

    .line 342
    new-instance v0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;

    const/4 v2, 0x0

    invoke-direct {v0, p0, v2}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;-><init>(Lcom/synconset/MultiImageChooserActivity;Lcom/synconset/MultiImageChooserActivity$1;)V

    const/4 v2, 0x1

    new-array v2, v2, [Ljava/util/Set;

    iget-object v3, p0, Lcom/synconset/MultiImageChooserActivity;->fileNames:Ljava/util/Map;

    invoke-interface {v3}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object v3

    aput-object v3, v2, v1

    invoke-virtual {v0, v2}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->execute([Ljava/lang/Object;)Landroid/os/AsyncTask;

    :goto_0
    return-void
.end method
