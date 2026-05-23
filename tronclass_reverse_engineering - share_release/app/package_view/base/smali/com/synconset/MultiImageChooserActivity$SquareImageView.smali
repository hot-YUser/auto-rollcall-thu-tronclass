.class Lcom/synconset/MultiImageChooserActivity$SquareImageView;
.super Landroid/widget/ImageView;
.source "MultiImageChooserActivity.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/synconset/MultiImageChooserActivity;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x2
    name = "SquareImageView"
.end annotation


# instance fields
.field final synthetic this$0:Lcom/synconset/MultiImageChooserActivity;


# direct methods
.method public constructor <init>(Lcom/synconset/MultiImageChooserActivity;Landroid/content/Context;)V
    .locals 0

    .line 448
    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity$SquareImageView;->this$0:Lcom/synconset/MultiImageChooserActivity;

    .line 449
    invoke-direct {p0, p2}, Landroid/widget/ImageView;-><init>(Landroid/content/Context;)V

    return-void
.end method


# virtual methods
.method public onMeasure(II)V
    .locals 0

    .line 454
    invoke-super {p0, p1, p1}, Landroid/widget/ImageView;->onMeasure(II)V

    return-void
.end method
