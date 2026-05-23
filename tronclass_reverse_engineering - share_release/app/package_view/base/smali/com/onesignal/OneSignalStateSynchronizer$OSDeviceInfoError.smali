.class Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;
.super Ljava/lang/Object;
.source "OneSignalStateSynchronizer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OneSignalStateSynchronizer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "OSDeviceInfoError"
.end annotation


# instance fields
.field public errorCode:I

.field public message:Ljava/lang/String;


# direct methods
.method constructor <init>(ILjava/lang/String;)V
    .locals 0

    .line 67
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 68
    iput p1, p0, Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;->errorCode:I

    .line 69
    iput-object p2, p0, Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;->message:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public getCode()I
    .locals 1

    .line 72
    iget v0, p0, Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;->errorCode:I

    return v0
.end method

.method public getMessage()Ljava/lang/String;
    .locals 1

    .line 74
    iget-object v0, p0, Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoError;->message:Ljava/lang/String;

    return-object v0
.end method
