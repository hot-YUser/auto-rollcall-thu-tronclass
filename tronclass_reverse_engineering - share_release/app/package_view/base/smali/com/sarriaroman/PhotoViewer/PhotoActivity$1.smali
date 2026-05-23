.class Lcom/sarriaroman/PhotoViewer/PhotoActivity$1;
.super Ljava/lang/Object;
.source "PhotoActivity.java"

# interfaces
.implements Landroid/view/View$OnClickListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/sarriaroman/PhotoViewer/PhotoActivity;->onCreate(Landroid/os/Bundle;)V
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

    .line 100
    iput-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$1;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/view/View;)V
    .locals 0

    .line 103
    iget-object p1, p0, Lcom/sarriaroman/PhotoViewer/PhotoActivity$1;->this$0:Lcom/sarriaroman/PhotoViewer/PhotoActivity;

    invoke-virtual {p1}, Lcom/sarriaroman/PhotoViewer/PhotoActivity;->finish()V

    return-void
.end method
