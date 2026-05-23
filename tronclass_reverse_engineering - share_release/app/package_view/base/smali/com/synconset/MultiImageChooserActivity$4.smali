.class Lcom/synconset/MultiImageChooserActivity$4;
.super Ljava/lang/Object;
.source "MultiImageChooserActivity.java"

# interfaces
.implements Landroid/view/View$OnClickListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/synconset/MultiImageChooserActivity;->setupHeader()V
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

    .line 393
    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity$4;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/view/View;)V
    .locals 0

    .line 396
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$4;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-virtual {p1}, Lcom/synconset/MultiImageChooserActivity;->cancelClicked()V

    return-void
.end method
