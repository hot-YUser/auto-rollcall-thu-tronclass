.class public Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;
.super Landroidx/appcompat/app/AppCompatActivity;
.source "MediaPickerActivity.java"


# static fields
.field private static final LOG_TAG:Ljava/lang/String; = "MediaPickerActivity"

.field public static final PICK_MEDIA_RESULT_CODE:I = 0xa

.field public static final PICK_MULTIPLE_MEDIA_RESULT_CODE:I = 0x14


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 18
    invoke-direct {p0}, Landroidx/appcompat/app/AppCompatActivity;-><init>()V

    return-void
.end method

.method private genPickVisualMediaRequest(Ljava/lang/String;)Landroidx/activity/result/PickVisualMediaRequest;
    .locals 1

    .line 75
    const-string v0, "ImageOnly"

    invoke-static {p1, v0}, Ljava/util/Objects;->equals(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 76
    new-instance p1, Landroidx/activity/result/PickVisualMediaRequest$Builder;

    invoke-direct {p1}, Landroidx/activity/result/PickVisualMediaRequest$Builder;-><init>()V

    sget-object v0, Landroidx/activity/result/contract/ActivityResultContracts$PickVisualMedia$ImageOnly;->INSTANCE:Landroidx/activity/result/contract/ActivityResultContracts$PickVisualMedia$ImageOnly;

    invoke-virtual {p1, v0}, Landroidx/activity/result/PickVisualMediaRequest$Builder;->setMediaType(Landroidx/activity/result/contract/ActivityResultContracts$PickVisualMedia$VisualMediaType;)Landroidx/activity/result/PickVisualMediaRequest$Builder;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/activity/result/PickVisualMediaRequest$Builder;->build()Landroidx/activity/result/PickVisualMediaRequest;

    move-result-object p1

    return-object p1

    .line 78
    :cond_0
    const-string v0, "VideoOnly"

    invoke-static {p1, v0}, Ljava/util/Objects;->equals(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_1

    .line 79
    new-instance p1, Landroidx/activity/result/PickVisualMediaRequest$Builder;

    invoke-direct {p1}, Landroidx/activity/result/PickVisualMediaRequest$Builder;-><init>()V

    sget-object v0, Landroidx/activity/result/contract/ActivityResultContracts$PickVisualMedia$VideoOnly;->INSTANCE:Landroidx/activity/result/contract/ActivityResultContracts$PickVisualMedia$VideoOnly;

    invoke-virtual {p1, v0}, Landroidx/activity/result/PickVisualMediaRequest$Builder;->setMediaType(Landroidx/activity/result/contract/ActivityResultContracts$PickVisualMedia$VisualMediaType;)Landroidx/activity/result/PickVisualMediaRequest$Builder;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/activity/result/PickVisualMediaRequest$Builder;->build()Landroidx/activity/result/PickVisualMediaRequest;

    move-result-object p1

    return-object p1

    .line 82
    :cond_1
    new-instance p1, Landroidx/activity/result/PickVisualMediaRequest$Builder;

    invoke-direct {p1}, Landroidx/activity/result/PickVisualMediaRequest$Builder;-><init>()V

    sget-object v0, Landroidx/activity/result/contract/ActivityResultContracts$PickVisualMedia$ImageAndVideo;->INSTANCE:Landroidx/activity/result/contract/ActivityResultContracts$PickVisualMedia$ImageAndVideo;

    invoke-virtual {p1, v0}, Landroidx/activity/result/PickVisualMediaRequest$Builder;->setMediaType(Landroidx/activity/result/contract/ActivityResultContracts$PickVisualMedia$VisualMediaType;)Landroidx/activity/result/PickVisualMediaRequest$Builder;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/activity/result/PickVisualMediaRequest$Builder;->build()Landroidx/activity/result/PickVisualMediaRequest;

    move-result-object p1

    return-object p1
.end method

.method private onSelected(ILandroid/content/Intent;)V
    .locals 0

    .line 86
    invoke-virtual {p0, p1, p2}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->setResult(ILandroid/content/Intent;)V

    .line 87
    invoke-virtual {p0}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->finish()V

    return-void
.end method

.method private startPickMedia(Landroid/content/Intent;)V
    .locals 2

    .line 62
    const-string v0, "type"

    invoke-virtual {p1, v0}, Landroid/content/Intent;->getStringExtra(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 63
    new-instance v0, Landroidx/activity/result/contract/ActivityResultContracts$PickVisualMedia;

    invoke-direct {v0}, Landroidx/activity/result/contract/ActivityResultContracts$PickVisualMedia;-><init>()V

    new-instance v1, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity$$ExternalSyntheticLambda1;

    invoke-direct {v1, p0}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity$$ExternalSyntheticLambda1;-><init>(Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;)V

    invoke-virtual {p0, v0, v1}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->registerForActivityResult(Landroidx/activity/result/contract/ActivityResultContract;Landroidx/activity/result/ActivityResultCallback;)Landroidx/activity/result/ActivityResultLauncher;

    move-result-object v0

    .line 71
    invoke-direct {p0, p1}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->genPickVisualMediaRequest(Ljava/lang/String;)Landroidx/activity/result/PickVisualMediaRequest;

    move-result-object p1

    invoke-virtual {v0, p1}, Landroidx/activity/result/ActivityResultLauncher;->launch(Ljava/lang/Object;)V

    return-void
.end method

.method private startPickMultipleMedia(Landroid/content/Intent;)V
    .locals 3

    .line 40
    const-string v0, "type"

    invoke-virtual {p1, v0}, Landroid/content/Intent;->getStringExtra(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 41
    const-string v1, "maximum"

    const/4 v2, 0x1

    invoke-virtual {p1, v1, v2}, Landroid/content/Intent;->getIntExtra(Ljava/lang/String;I)I

    move-result p1

    .line 42
    new-instance v1, Landroidx/activity/result/contract/ActivityResultContracts$PickMultipleVisualMedia;

    invoke-direct {v1, p1}, Landroidx/activity/result/contract/ActivityResultContracts$PickMultipleVisualMedia;-><init>(I)V

    new-instance p1, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity$$ExternalSyntheticLambda0;

    invoke-direct {p1, p0}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity$$ExternalSyntheticLambda0;-><init>(Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;)V

    invoke-virtual {p0, v1, p1}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->registerForActivityResult(Landroidx/activity/result/contract/ActivityResultContract;Landroidx/activity/result/ActivityResultCallback;)Landroidx/activity/result/ActivityResultLauncher;

    move-result-object p1

    .line 58
    invoke-direct {p0, v0}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->genPickVisualMediaRequest(Ljava/lang/String;)Landroidx/activity/result/PickVisualMediaRequest;

    move-result-object v0

    invoke-virtual {p1, v0}, Landroidx/activity/result/ActivityResultLauncher;->launch(Ljava/lang/Object;)V

    return-void
.end method


# virtual methods
.method synthetic lambda$startPickMedia$1$com-wisdomgarden-trpc-mediapicker-MediaPickerActivity(Landroid/net/Uri;)V
    .locals 2

    .line 64
    new-instance v0, Landroid/content/Intent;

    invoke-direct {v0}, Landroid/content/Intent;-><init>()V

    if-eqz p1, :cond_0

    .line 66
    const-string v1, "uri"

    invoke-static {p0, p1}, Lcom/wisdomgarden/trpc/utils/FilePathUtil;->getRealPathFromURI(Landroid/content/Context;Landroid/net/Uri;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, v1, p1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/lang/String;)Landroid/content/Intent;

    :cond_0
    const/16 p1, 0xa

    .line 68
    invoke-direct {p0, p1, v0}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->onSelected(ILandroid/content/Intent;)V

    return-void
.end method

.method synthetic lambda$startPickMultipleMedia$0$com-wisdomgarden-trpc-mediapicker-MediaPickerActivity(Ljava/util/List;)V
    .locals 3

    .line 43
    new-instance v0, Landroid/content/Intent;

    invoke-direct {v0}, Landroid/content/Intent;-><init>()V

    .line 44
    invoke-interface {p1}, Ljava/util/List;->isEmpty()Z

    move-result v1

    if-nez v1, :cond_2

    .line 45
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    .line 46
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_0
    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Landroid/net/Uri;

    .line 47
    invoke-static {p0, v2}, Lcom/wisdomgarden/trpc/utils/FilePathUtil;->getRealPathFromURI(Landroid/content/Context;Landroid/net/Uri;)Ljava/lang/String;

    move-result-object v2

    if-eqz v2, :cond_0

    .line 49
    invoke-virtual {v1, v2}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 52
    :cond_1
    const-string p1, "uris"

    invoke-virtual {v0, p1, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/io/Serializable;)Landroid/content/Intent;

    :cond_2
    const/16 p1, 0x14

    .line 55
    invoke-direct {p0, p1, v0}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->onSelected(ILandroid/content/Intent;)V

    return-void
.end method

.method protected onCreate(Landroid/os/Bundle;)V
    .locals 2

    .line 28
    invoke-super {p0, p1}, Landroidx/appcompat/app/AppCompatActivity;->onCreate(Landroid/os/Bundle;)V

    .line 30
    invoke-virtual {p0}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->getIntent()Landroid/content/Intent;

    move-result-object p1

    .line 31
    const-string v0, "maximum"

    const/4 v1, 0x1

    invoke-virtual {p1, v0, v1}, Landroid/content/Intent;->getIntExtra(Ljava/lang/String;I)I

    move-result v0

    if-le v0, v1, :cond_0

    .line 33
    invoke-direct {p0, p1}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->startPickMultipleMedia(Landroid/content/Intent;)V

    goto :goto_0

    .line 35
    :cond_0
    invoke-direct {p0, p1}, Lcom/wisdomgarden/trpc/mediapicker/MediaPickerActivity;->startPickMedia(Landroid/content/Intent;)V

    :goto_0
    return-void
.end method
