.class public Lcom/onesignal/OneSignal$OSSMSUpdateError;
.super Ljava/lang/Object;
.source "OneSignal.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OneSignal;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "OSSMSUpdateError"
.end annotation


# instance fields
.field private message:Ljava/lang/String;

.field private type:Lcom/onesignal/OneSignal$SMSErrorType;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignal$SMSErrorType;Ljava/lang/String;)V
    .locals 0

    .line 293
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 294
    iput-object p1, p0, Lcom/onesignal/OneSignal$OSSMSUpdateError;->type:Lcom/onesignal/OneSignal$SMSErrorType;

    .line 295
    iput-object p2, p0, Lcom/onesignal/OneSignal$OSSMSUpdateError;->message:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public getMessage()Ljava/lang/String;
    .locals 1

    .line 303
    iget-object v0, p0, Lcom/onesignal/OneSignal$OSSMSUpdateError;->message:Ljava/lang/String;

    return-object v0
.end method

.method public getType()Lcom/onesignal/OneSignal$SMSErrorType;
    .locals 1

    .line 299
    iget-object v0, p0, Lcom/onesignal/OneSignal$OSSMSUpdateError;->type:Lcom/onesignal/OneSignal$SMSErrorType;

    return-object v0
.end method
