.class Lcom/onesignal/BundleCompatPersistableBundle;
.super Ljava/lang/Object;
.source "BundleCompat.java"

# interfaces
.implements Lcom/onesignal/BundleCompat;


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lcom/onesignal/BundleCompat<",
        "Landroid/os/PersistableBundle;",
        ">;"
    }
.end annotation


# instance fields
.field private mBundle:Landroid/os/PersistableBundle;


# direct methods
.method constructor <init>()V
    .locals 1

    .line 61
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 62
    new-instance v0, Landroid/os/PersistableBundle;

    invoke-direct {v0}, Landroid/os/PersistableBundle;-><init>()V

    iput-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    return-void
.end method

.method constructor <init>(Landroid/os/PersistableBundle;)V
    .locals 0

    .line 65
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 66
    iput-object p1, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    return-void
.end method


# virtual methods
.method public containsKey(Ljava/lang/String;)Z
    .locals 1

    .line 116
    iget-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    invoke-virtual {v0, p1}, Landroid/os/PersistableBundle;->containsKey(Ljava/lang/String;)Z

    move-result p1

    return p1
.end method

.method public getBoolean(Ljava/lang/String;)Z
    .locals 1

    .line 106
    iget-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    invoke-virtual {v0, p1}, Landroid/os/PersistableBundle;->getBoolean(Ljava/lang/String;)Z

    move-result p1

    return p1
.end method

.method public getBoolean(Ljava/lang/String;Z)Z
    .locals 1

    .line 111
    iget-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    invoke-virtual {v0, p1, p2}, Landroid/os/PersistableBundle;->getBoolean(Ljava/lang/String;Z)Z

    move-result p1

    return p1
.end method

.method public getBundle()Landroid/os/PersistableBundle;
    .locals 1

    .line 121
    iget-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    return-object v0
.end method

.method public bridge synthetic getBundle()Ljava/lang/Object;
    .locals 1

    .line 57
    invoke-virtual {p0}, Lcom/onesignal/BundleCompatPersistableBundle;->getBundle()Landroid/os/PersistableBundle;

    move-result-object v0

    return-object v0
.end method

.method public getInt(Ljava/lang/String;)Ljava/lang/Integer;
    .locals 1

    .line 96
    iget-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    invoke-virtual {v0, p1}, Landroid/os/PersistableBundle;->getInt(Ljava/lang/String;)I

    move-result p1

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    return-object p1
.end method

.method public getLong(Ljava/lang/String;)Ljava/lang/Long;
    .locals 2

    .line 101
    iget-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    invoke-virtual {v0, p1}, Landroid/os/PersistableBundle;->getLong(Ljava/lang/String;)J

    move-result-wide v0

    invoke-static {v0, v1}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object p1

    return-object p1
.end method

.method public getString(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 91
    iget-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    invoke-virtual {v0, p1}, Landroid/os/PersistableBundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public putBoolean(Ljava/lang/String;Ljava/lang/Boolean;)V
    .locals 1

    .line 86
    iget-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    invoke-virtual {p2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p2

    invoke-virtual {v0, p1, p2}, Landroid/os/PersistableBundle;->putBoolean(Ljava/lang/String;Z)V

    return-void
.end method

.method public putInt(Ljava/lang/String;Ljava/lang/Integer;)V
    .locals 1

    .line 76
    iget-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    invoke-virtual {p2}, Ljava/lang/Integer;->intValue()I

    move-result p2

    invoke-virtual {v0, p1, p2}, Landroid/os/PersistableBundle;->putInt(Ljava/lang/String;I)V

    return-void
.end method

.method public putLong(Ljava/lang/String;Ljava/lang/Long;)V
    .locals 3

    .line 81
    iget-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    invoke-virtual {p2}, Ljava/lang/Long;->longValue()J

    move-result-wide v1

    invoke-virtual {v0, p1, v1, v2}, Landroid/os/PersistableBundle;->putLong(Ljava/lang/String;J)V

    return-void
.end method

.method public putString(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    .line 71
    iget-object v0, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    invoke-virtual {v0, p1, p2}, Landroid/os/PersistableBundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public setBundle(Landroid/os/Parcelable;)V
    .locals 0

    .line 126
    check-cast p1, Landroid/os/PersistableBundle;

    iput-object p1, p0, Lcom/onesignal/BundleCompatPersistableBundle;->mBundle:Landroid/os/PersistableBundle;

    return-void
.end method
