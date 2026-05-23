.class public interface abstract Lcom/onesignal/OSSharedPreferences;
.super Ljava/lang/Object;
.source "OSSharedPreferences.java"


# virtual methods
.method public abstract getBool(Ljava/lang/String;Ljava/lang/String;Z)Z
.end method

.method public abstract getInt(Ljava/lang/String;Ljava/lang/String;I)I
.end method

.method public abstract getLong(Ljava/lang/String;Ljava/lang/String;J)J
.end method

.method public abstract getObject(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/Object;
.end method

.method public abstract getOutcomesV2KeyName()Ljava/lang/String;
.end method

.method public abstract getPreferencesName()Ljava/lang/String;
.end method

.method public abstract getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
.end method

.method public abstract getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end method

.method public abstract saveBool(Ljava/lang/String;Ljava/lang/String;Z)V
.end method

.method public abstract saveInt(Ljava/lang/String;Ljava/lang/String;I)V
.end method

.method public abstract saveLong(Ljava/lang/String;Ljava/lang/String;J)V
.end method

.method public abstract saveObject(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V
.end method

.method public abstract saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V
.end method

.method public abstract saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation
.end method
