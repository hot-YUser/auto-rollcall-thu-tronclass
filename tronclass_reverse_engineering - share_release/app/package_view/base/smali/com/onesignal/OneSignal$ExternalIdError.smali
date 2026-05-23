.class public Lcom/onesignal/OneSignal$ExternalIdError;
.super Ljava/lang/Object;
.source "OneSignal.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OneSignal;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "ExternalIdError"
.end annotation


# instance fields
.field private message:Ljava/lang/String;

.field private type:Lcom/onesignal/OneSignal$ExternalIdErrorType;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignal$ExternalIdErrorType;Ljava/lang/String;)V
    .locals 0

    .line 262
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 263
    iput-object p1, p0, Lcom/onesignal/OneSignal$ExternalIdError;->type:Lcom/onesignal/OneSignal$ExternalIdErrorType;

    .line 264
    iput-object p2, p0, Lcom/onesignal/OneSignal$ExternalIdError;->message:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public getMessage()Ljava/lang/String;
    .locals 1

    .line 272
    iget-object v0, p0, Lcom/onesignal/OneSignal$ExternalIdError;->message:Ljava/lang/String;

    return-object v0
.end method

.method public getType()Lcom/onesignal/OneSignal$ExternalIdErrorType;
    .locals 1

    .line 268
    iget-object v0, p0, Lcom/onesignal/OneSignal$ExternalIdError;->type:Lcom/onesignal/OneSignal$ExternalIdErrorType;

    return-object v0
.end method
