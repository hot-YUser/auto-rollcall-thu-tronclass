.class final Lnet/sqlcipher/CursorWindow$1;
.super Ljava/lang/Object;
.source "CursorWindow.java"

# interfaces
.implements Landroid/os/Parcelable$Creator;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lnet/sqlcipher/CursorWindow;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroid/os/Parcelable$Creator<",
        "Lnet/sqlcipher/CursorWindow;",
        ">;"
    }
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 613
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public bridge synthetic createFromParcel(Landroid/os/Parcel;)Ljava/lang/Object;
    .locals 0

    .line 613
    invoke-virtual {p0, p1}, Lnet/sqlcipher/CursorWindow$1;->createFromParcel(Landroid/os/Parcel;)Lnet/sqlcipher/CursorWindow;

    move-result-object p1

    return-object p1
.end method

.method public createFromParcel(Landroid/os/Parcel;)Lnet/sqlcipher/CursorWindow;
    .locals 2

    .line 615
    new-instance v0, Lnet/sqlcipher/CursorWindow;

    const/4 v1, 0x0

    invoke-direct {v0, p1, v1}, Lnet/sqlcipher/CursorWindow;-><init>(Landroid/os/Parcel;I)V

    return-object v0
.end method

.method public bridge synthetic newArray(I)[Ljava/lang/Object;
    .locals 0

    .line 613
    invoke-virtual {p0, p1}, Lnet/sqlcipher/CursorWindow$1;->newArray(I)[Lnet/sqlcipher/CursorWindow;

    move-result-object p1

    return-object p1
.end method

.method public newArray(I)[Lnet/sqlcipher/CursorWindow;
    .locals 0

    .line 619
    new-array p1, p1, [Lnet/sqlcipher/CursorWindow;

    return-object p1
.end method
