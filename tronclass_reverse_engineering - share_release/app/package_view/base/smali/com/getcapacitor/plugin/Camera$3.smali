.class synthetic Lcom/getcapacitor/plugin/Camera$3;
.super Ljava/lang/Object;
.source "Camera.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/getcapacitor/plugin/Camera;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1008
    name = null
.end annotation


# static fields
.field static final synthetic $SwitchMap$com$getcapacitor$plugin$camera$CameraSource:[I


# direct methods
.method static constructor <clinit>()V
    .locals 3

    .line 88
    invoke-static {}, Lcom/getcapacitor/plugin/camera/CameraSource;->values()[Lcom/getcapacitor/plugin/camera/CameraSource;

    move-result-object v0

    array-length v0, v0

    new-array v0, v0, [I

    sput-object v0, Lcom/getcapacitor/plugin/Camera$3;->$SwitchMap$com$getcapacitor$plugin$camera$CameraSource:[I

    :try_start_0
    sget-object v1, Lcom/getcapacitor/plugin/camera/CameraSource;->PROMPT:Lcom/getcapacitor/plugin/camera/CameraSource;

    invoke-virtual {v1}, Lcom/getcapacitor/plugin/camera/CameraSource;->ordinal()I

    move-result v1

    const/4 v2, 0x1

    aput v2, v0, v1
    :try_end_0
    .catch Ljava/lang/NoSuchFieldError; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    :try_start_1
    sget-object v0, Lcom/getcapacitor/plugin/Camera$3;->$SwitchMap$com$getcapacitor$plugin$camera$CameraSource:[I

    sget-object v1, Lcom/getcapacitor/plugin/camera/CameraSource;->CAMERA:Lcom/getcapacitor/plugin/camera/CameraSource;

    invoke-virtual {v1}, Lcom/getcapacitor/plugin/camera/CameraSource;->ordinal()I

    move-result v1

    const/4 v2, 0x2

    aput v2, v0, v1
    :try_end_1
    .catch Ljava/lang/NoSuchFieldError; {:try_start_1 .. :try_end_1} :catch_1

    :catch_1
    :try_start_2
    sget-object v0, Lcom/getcapacitor/plugin/Camera$3;->$SwitchMap$com$getcapacitor$plugin$camera$CameraSource:[I

    sget-object v1, Lcom/getcapacitor/plugin/camera/CameraSource;->PHOTOS:Lcom/getcapacitor/plugin/camera/CameraSource;

    invoke-virtual {v1}, Lcom/getcapacitor/plugin/camera/CameraSource;->ordinal()I

    move-result v1

    const/4 v2, 0x3

    aput v2, v0, v1
    :try_end_2
    .catch Ljava/lang/NoSuchFieldError; {:try_start_2 .. :try_end_2} :catch_2

    :catch_2
    return-void
.end method
