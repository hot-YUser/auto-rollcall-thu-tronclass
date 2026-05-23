.class public interface abstract Lcom/onesignal/BundleCompat;
.super Ljava/lang/Object;
.source "BundleCompat.java"


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;"
    }
.end annotation


# virtual methods
.method public abstract containsKey(Ljava/lang/String;)Z
.end method

.method public abstract getBoolean(Ljava/lang/String;)Z
.end method

.method public abstract getBoolean(Ljava/lang/String;Z)Z
.end method

.method public abstract getBundle()Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TT;"
        }
    .end annotation
.end method

.method public abstract getInt(Ljava/lang/String;)Ljava/lang/Integer;
.end method

.method public abstract getLong(Ljava/lang/String;)Ljava/lang/Long;
.end method

.method public abstract getString(Ljava/lang/String;)Ljava/lang/String;
.end method

.method public abstract putBoolean(Ljava/lang/String;Ljava/lang/Boolean;)V
.end method

.method public abstract putInt(Ljava/lang/String;Ljava/lang/Integer;)V
.end method

.method public abstract putLong(Ljava/lang/String;Ljava/lang/Long;)V
.end method

.method public abstract putString(Ljava/lang/String;Ljava/lang/String;)V
.end method

.method public abstract setBundle(Landroid/os/Parcelable;)V
.end method
