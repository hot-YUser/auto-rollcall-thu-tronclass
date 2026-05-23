.class public Lcom/getcapacitor/plugin/camera/CameraSettings;
.super Ljava/lang/Object;
.source "CameraSettings.java"


# static fields
.field public static final DEFAULT_CORRECT_ORIENTATION:Z = true

.field public static final DEFAULT_QUALITY:I = 0x5a

.field public static final DEFAULT_SAVE_IMAGE_TO_GALLERY:Z = false


# instance fields
.field private allowEditing:Z

.field private height:I

.field private preserveAspectRatio:Z

.field private quality:I

.field private resultType:Lcom/getcapacitor/plugin/camera/CameraResultType;

.field private saveToGallery:Z

.field private shouldCorrectOrientation:Z

.field private shouldResize:Z

.field private source:Lcom/getcapacitor/plugin/camera/CameraSource;

.field private width:I


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 3
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 9
    sget-object v0, Lcom/getcapacitor/plugin/camera/CameraResultType;->BASE64:Lcom/getcapacitor/plugin/camera/CameraResultType;

    iput-object v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->resultType:Lcom/getcapacitor/plugin/camera/CameraResultType;

    const/16 v0, 0x5a

    .line 10
    iput v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->quality:I

    const/4 v0, 0x0

    .line 11
    iput-boolean v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->shouldResize:Z

    const/4 v1, 0x1

    .line 12
    iput-boolean v1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->shouldCorrectOrientation:Z

    .line 13
    iput-boolean v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->saveToGallery:Z

    .line 14
    iput-boolean v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->allowEditing:Z

    .line 15
    iput v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->width:I

    .line 16
    iput v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->height:I

    .line 17
    sget-object v1, Lcom/getcapacitor/plugin/camera/CameraSource;->PROMPT:Lcom/getcapacitor/plugin/camera/CameraSource;

    iput-object v1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->source:Lcom/getcapacitor/plugin/camera/CameraSource;

    .line 18
    iput-boolean v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->preserveAspectRatio:Z

    return-void
.end method


# virtual methods
.method public getHeight()I
    .locals 1

    .line 73
    iget v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->height:I

    return v0
.end method

.method public getPreserveAspectRatio()Z
    .locals 1

    .line 93
    iget-boolean v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->preserveAspectRatio:Z

    return v0
.end method

.method public getQuality()I
    .locals 1

    .line 29
    iget v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->quality:I

    return v0
.end method

.method public getResultType()Lcom/getcapacitor/plugin/camera/CameraResultType;
    .locals 1

    .line 21
    iget-object v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->resultType:Lcom/getcapacitor/plugin/camera/CameraResultType;

    return-object v0
.end method

.method public getSource()Lcom/getcapacitor/plugin/camera/CameraSource;
    .locals 1

    .line 81
    iget-object v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->source:Lcom/getcapacitor/plugin/camera/CameraSource;

    return-object v0
.end method

.method public getWidth()I
    .locals 1

    .line 65
    iget v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->width:I

    return v0
.end method

.method public isAllowEditing()Z
    .locals 1

    .line 60
    iget-boolean v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->allowEditing:Z

    return v0
.end method

.method public isSaveToGallery()Z
    .locals 1

    .line 53
    iget-boolean v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->saveToGallery:Z

    return v0
.end method

.method public isShouldCorrectOrientation()Z
    .locals 1

    .line 45
    iget-boolean v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->shouldCorrectOrientation:Z

    return v0
.end method

.method public isShouldResize()Z
    .locals 1

    .line 37
    iget-boolean v0, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->shouldResize:Z

    return v0
.end method

.method public setAllowEditing(Z)V
    .locals 0

    .line 62
    iput-boolean p1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->allowEditing:Z

    return-void
.end method

.method public setHeight(I)V
    .locals 0

    .line 77
    iput p1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->height:I

    return-void
.end method

.method public setPreserveAspectRatio(Z)V
    .locals 0

    .line 89
    iput-boolean p1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->preserveAspectRatio:Z

    return-void
.end method

.method public setQuality(I)V
    .locals 0

    .line 33
    iput p1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->quality:I

    return-void
.end method

.method public setResultType(Lcom/getcapacitor/plugin/camera/CameraResultType;)V
    .locals 0

    .line 25
    iput-object p1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->resultType:Lcom/getcapacitor/plugin/camera/CameraResultType;

    return-void
.end method

.method public setSaveToGallery(Z)V
    .locals 0

    .line 57
    iput-boolean p1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->saveToGallery:Z

    return-void
.end method

.method public setShouldCorrectOrientation(Z)V
    .locals 0

    .line 49
    iput-boolean p1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->shouldCorrectOrientation:Z

    return-void
.end method

.method public setShouldResize(Z)V
    .locals 0

    .line 41
    iput-boolean p1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->shouldResize:Z

    return-void
.end method

.method public setSource(Lcom/getcapacitor/plugin/camera/CameraSource;)V
    .locals 0

    .line 85
    iput-object p1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->source:Lcom/getcapacitor/plugin/camera/CameraSource;

    return-void
.end method

.method public setWidth(I)V
    .locals 0

    .line 69
    iput p1, p0, Lcom/getcapacitor/plugin/camera/CameraSettings;->width:I

    return-void
.end method
