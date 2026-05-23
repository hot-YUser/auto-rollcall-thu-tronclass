.class Lcom/synconset/MultiImageChooserActivity$ImageAdapter;
.super Landroid/widget/BaseAdapter;
.source "MultiImageChooserActivity.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/synconset/MultiImageChooserActivity;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x2
    name = "ImageAdapter"
.end annotation


# instance fields
.field final synthetic this$0:Lcom/synconset/MultiImageChooserActivity;


# direct methods
.method private constructor <init>(Lcom/synconset/MultiImageChooserActivity;)V
    .locals 0

    .line 458
    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-direct {p0}, Landroid/widget/BaseAdapter;-><init>()V

    return-void
.end method

.method synthetic constructor <init>(Lcom/synconset/MultiImageChooserActivity;Lcom/synconset/MultiImageChooserActivity$1;)V
    .locals 0

    .line 458
    invoke-direct {p0, p1}, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;-><init>(Lcom/synconset/MultiImageChooserActivity;)V

    return-void
.end method


# virtual methods
.method public getCount()I
    .locals 1

    .line 461
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v0}, Lcom/synconset/MultiImageChooserActivity;->access$400(Lcom/synconset/MultiImageChooserActivity;)Landroid/database/Cursor;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 462
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v0}, Lcom/synconset/MultiImageChooserActivity;->access$400(Lcom/synconset/MultiImageChooserActivity;)Landroid/database/Cursor;

    move-result-object v0

    invoke-interface {v0}, Landroid/database/Cursor;->getCount()I

    move-result v0

    return v0

    :cond_0
    const/4 v0, 0x0

    return v0
.end method

.method public getItem(I)Ljava/lang/Object;
    .locals 0

    .line 469
    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    return-object p1
.end method

.method public getItemId(I)J
    .locals 2

    int-to-long v0, p1

    return-wide v0
.end method

.method public getView(ILandroid/view/View;Landroid/view/ViewGroup;)Landroid/view/View;
    .locals 2

    if-nez p2, :cond_0

    .line 480
    new-instance p2, Lcom/synconset/MultiImageChooserActivity$SquareImageView;

    iget-object p3, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-direct {p2, p3, p3}, Lcom/synconset/MultiImageChooserActivity$SquareImageView;-><init>(Lcom/synconset/MultiImageChooserActivity;Landroid/content/Context;)V

    .line 481
    sget-object p3, Landroid/widget/ImageView$ScaleType;->CENTER_CROP:Landroid/widget/ImageView$ScaleType;

    invoke-virtual {p2, p3}, Landroid/widget/ImageView;->setScaleType(Landroid/widget/ImageView$ScaleType;)V

    .line 485
    :cond_0
    check-cast p2, Landroid/widget/ImageView;

    const/4 p3, 0x0

    .line 486
    invoke-virtual {p2, p3}, Landroid/widget/ImageView;->setImageBitmap(Landroid/graphics/Bitmap;)V

    .line 488
    iget-object p3, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {p3}, Lcom/synconset/MultiImageChooserActivity;->access$400(Lcom/synconset/MultiImageChooserActivity;)Landroid/database/Cursor;

    move-result-object p3

    invoke-interface {p3, p1}, Landroid/database/Cursor;->moveToPosition(I)Z

    move-result p3

    if-nez p3, :cond_1

    return-object p2

    .line 492
    :cond_1
    iget-object p3, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {p3}, Lcom/synconset/MultiImageChooserActivity;->access$500(Lcom/synconset/MultiImageChooserActivity;)I

    move-result p3

    const/4 v0, -0x1

    if-ne p3, v0, :cond_2

    return-object p2

    .line 496
    :cond_2
    iget-object p3, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {p3}, Lcom/synconset/MultiImageChooserActivity;->access$400(Lcom/synconset/MultiImageChooserActivity;)Landroid/database/Cursor;

    move-result-object p3

    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v0}, Lcom/synconset/MultiImageChooserActivity;->access$500(Lcom/synconset/MultiImageChooserActivity;)I

    move-result v0

    invoke-interface {p3, v0}, Landroid/database/Cursor;->getInt(I)I

    move-result p3

    .line 497
    iget-object v0, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v0}, Lcom/synconset/MultiImageChooserActivity;->access$400(Lcom/synconset/MultiImageChooserActivity;)Landroid/database/Cursor;

    move-result-object v0

    iget-object v1, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v1}, Lcom/synconset/MultiImageChooserActivity;->access$600(Lcom/synconset/MultiImageChooserActivity;)I

    move-result v1

    invoke-interface {v0, v1}, Landroid/database/Cursor;->getInt(I)I

    move-result v0

    .line 499
    iget-object v1, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-virtual {v1, p1}, Lcom/synconset/MultiImageChooserActivity;->isChecked(I)Z

    move-result p1

    if-eqz p1, :cond_3

    const/16 p1, 0x80

    .line 501
    invoke-virtual {p2, p1}, Landroid/widget/ImageView;->setImageAlpha(I)V

    .line 506
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {p1}, Lcom/synconset/MultiImageChooserActivity;->access$700(Lcom/synconset/MultiImageChooserActivity;)I

    move-result p1

    invoke-virtual {p2, p1}, Landroid/widget/ImageView;->setBackgroundColor(I)V

    goto :goto_0

    :cond_3
    const/16 p1, 0xff

    .line 510
    invoke-virtual {p2, p1}, Landroid/widget/ImageView;->setImageAlpha(I)V

    const/4 p1, 0x0

    .line 514
    invoke-virtual {p2, p1}, Landroid/widget/ImageView;->setBackgroundColor(I)V

    .line 517
    :goto_0
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {p1}, Lcom/synconset/MultiImageChooserActivity;->access$000(Lcom/synconset/MultiImageChooserActivity;)Z

    move-result p1

    if-eqz p1, :cond_4

    .line 518
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {p1}, Lcom/synconset/MultiImageChooserActivity;->access$900(Lcom/synconset/MultiImageChooserActivity;)Lcom/synconset/ImageFetcher;

    move-result-object p1

    invoke-static {p3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p3

    iget-object v1, p0, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v1}, Lcom/synconset/MultiImageChooserActivity;->access$800(Lcom/synconset/MultiImageChooserActivity;)I

    move-result v1

    invoke-virtual {p1, p3, p2, v1, v0}, Lcom/synconset/ImageFetcher;->fetch(Ljava/lang/Integer;Landroid/widget/ImageView;II)V

    :cond_4
    return-object p2
.end method
