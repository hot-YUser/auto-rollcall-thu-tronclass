.class Lcom/synconset/MultiImageChooserActivity$2;
.super Ljava/lang/Object;
.source "MultiImageChooserActivity.java"

# interfaces
.implements Landroid/content/DialogInterface$OnClickListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/synconset/MultiImageChooserActivity;->onItemClick(Landroid/widget/AdapterView;Landroid/view/View;IJ)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/synconset/MultiImageChooserActivity;


# direct methods
.method constructor <init>(Lcom/synconset/MultiImageChooserActivity;)V
    .locals 0

    .line 221
    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity$2;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/content/DialogInterface;I)V
    .locals 0

    .line 223
    invoke-interface {p1}, Landroid/content/DialogInterface;->cancel()V

    return-void
.end method
