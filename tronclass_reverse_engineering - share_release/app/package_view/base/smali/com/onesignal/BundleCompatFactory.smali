.class Lcom/onesignal/BundleCompatFactory;
.super Ljava/lang/Object;
.source "BundleCompat.java"


# direct methods
.method constructor <init>()V
    .locals 0

    .line 206
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static getInstance()Lcom/onesignal/BundleCompat;
    .locals 1

    .line 209
    new-instance v0, Lcom/onesignal/BundleCompatPersistableBundle;

    invoke-direct {v0}, Lcom/onesignal/BundleCompatPersistableBundle;-><init>()V

    return-object v0
.end method
