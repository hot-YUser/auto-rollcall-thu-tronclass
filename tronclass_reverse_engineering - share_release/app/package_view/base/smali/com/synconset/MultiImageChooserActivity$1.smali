.class Lcom/synconset/MultiImageChooserActivity$1;
.super Ljava/lang/Object;
.source "MultiImageChooserActivity.java"

# interfaces
.implements Landroid/widget/AbsListView$OnScrollListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/synconset/MultiImageChooserActivity;->onCreate(Landroid/os/Bundle;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field private lastFirstItem:I

.field final synthetic this$0:Lcom/synconset/MultiImageChooserActivity;

.field private timestamp:J


# direct methods
.method constructor <init>(Lcom/synconset/MultiImageChooserActivity;)V
    .locals 2

    .line 165
    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity$1;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 p1, 0x0

    .line 166
    iput p1, p0, Lcom/synconset/MultiImageChooserActivity$1;->lastFirstItem:I

    .line 167
    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v0

    iput-wide v0, p0, Lcom/synconset/MultiImageChooserActivity$1;->timestamp:J

    return-void
.end method


# virtual methods
.method public onScroll(Landroid/widget/AbsListView;III)V
    .locals 4

    .line 179
    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v0

    iget-wide v2, p0, Lcom/synconset/MultiImageChooserActivity$1;->timestamp:J

    sub-long/2addr v0, v2

    long-to-float p1, v0

    .line 180
    iget p4, p0, Lcom/synconset/MultiImageChooserActivity$1;->lastFirstItem:I

    if-eq p2, p4, :cond_1

    const/high16 p4, 0x3f800000    # 1.0f

    div-float/2addr p4, p1

    const/high16 p1, 0x447a0000    # 1000.0f

    mul-float/2addr p4, p1

    float-to-double v0, p4

    .line 182
    iput p2, p0, Lcom/synconset/MultiImageChooserActivity$1;->lastFirstItem:I

    .line 183
    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide p1

    iput-wide p1, p0, Lcom/synconset/MultiImageChooserActivity$1;->timestamp:J

    .line 186
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$1;->this$0:Lcom/synconset/MultiImageChooserActivity;

    int-to-double p2, p3

    cmpg-double p2, v0, p2

    if-gez p2, :cond_0

    const/4 p2, 0x1

    goto :goto_0

    :cond_0
    const/4 p2, 0x0

    :goto_0
    invoke-static {p1, p2}, Lcom/synconset/MultiImageChooserActivity;->access$002(Lcom/synconset/MultiImageChooserActivity;Z)Z

    :cond_1
    return-void
.end method

.method public onScrollStateChanged(Landroid/widget/AbsListView;I)V
    .locals 0

    if-nez p2, :cond_0

    .line 172
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$1;->this$0:Lcom/synconset/MultiImageChooserActivity;

    const/4 p2, 0x1

    invoke-static {p1, p2}, Lcom/synconset/MultiImageChooserActivity;->access$002(Lcom/synconset/MultiImageChooserActivity;Z)Z

    .line 173
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$1;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {p1}, Lcom/synconset/MultiImageChooserActivity;->access$100(Lcom/synconset/MultiImageChooserActivity;)Lcom/synconset/MultiImageChooserActivity$ImageAdapter;

    move-result-object p1

    invoke-virtual {p1}, Lcom/synconset/MultiImageChooserActivity$ImageAdapter;->notifyDataSetChanged()V

    :cond_0
    return-void
.end method
