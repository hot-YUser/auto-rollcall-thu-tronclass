.class public final synthetic Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/activity/result/ActivityResultCallback;


# instance fields
.field public final synthetic f$0:Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;


# direct methods
.method public synthetic constructor <init>(Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity$$ExternalSyntheticLambda1;->f$0:Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;

    return-void
.end method


# virtual methods
.method public final onActivityResult(Ljava/lang/Object;)V
    .locals 1

    .line 0
    iget-object v0, p0, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity$$ExternalSyntheticLambda1;->f$0:Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;

    check-cast p1, Landroid/net/Uri;

    invoke-virtual {v0, p1}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->lambda$startPickMedia$1$com-wisdomgarden-trpc-mediapicker-MediaPickerActivity(Landroid/net/Uri;)V

    return-void
.end method
