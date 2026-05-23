.class public final Lnet/sqlcipher/database/SqliteWrapper;
.super Ljava/lang/Object;
.source "SqliteWrapper.java"


# static fields
.field private static final SQLITE_EXCEPTION_DETAIL_MESSAGE:Ljava/lang/String; = "unable to open database file"

.field private static final TAG:Ljava/lang/String; = "SqliteWrapper"


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 39
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static checkSQLiteException(Landroid/content/Context;Lnet/sqlcipher/database/SQLiteException;)V
    .locals 1

    .line 49
    invoke-static {p1}, Lnet/sqlcipher/database/SqliteWrapper;->isLowMemory(Lnet/sqlcipher/database/SQLiteException;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 50
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteException;->getMessage()Ljava/lang/String;

    move-result-object p1

    const/4 v0, 0x0

    invoke-static {p0, p1, v0}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;

    move-result-object p0

    .line 51
    invoke-virtual {p0}, Landroid/widget/Toast;->show()V

    return-void

    .line 53
    :cond_0
    throw p1
.end method

.method public static delete(Landroid/content/Context;Landroid/content/ContentResolver;Landroid/net/Uri;Ljava/lang/String;[Ljava/lang/String;)I
    .locals 0

    .line 91
    :try_start_0
    invoke-virtual {p1, p2, p3, p4}, Landroid/content/ContentResolver;->delete(Landroid/net/Uri;Ljava/lang/String;[Ljava/lang/String;)I

    move-result p0
    :try_end_0
    .catch Lnet/sqlcipher/database/SQLiteException; {:try_start_0 .. :try_end_0} :catch_0

    return p0

    :catch_0
    move-exception p1

    .line 93
    const-string p2, "SqliteWrapper"

    const-string p3, "Catch a SQLiteException when delete: "

    invoke-static {p2, p3, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 94
    invoke-static {p0, p1}, Lnet/sqlcipher/database/SqliteWrapper;->checkSQLiteException(Landroid/content/Context;Lnet/sqlcipher/database/SQLiteException;)V

    const/4 p0, -0x1

    return p0
.end method

.method public static insert(Landroid/content/Context;Landroid/content/ContentResolver;Landroid/net/Uri;Landroid/content/ContentValues;)Landroid/net/Uri;
    .locals 0

    .line 102
    :try_start_0
    invoke-virtual {p1, p2, p3}, Landroid/content/ContentResolver;->insert(Landroid/net/Uri;Landroid/content/ContentValues;)Landroid/net/Uri;

    move-result-object p0
    :try_end_0
    .catch Lnet/sqlcipher/database/SQLiteException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p0

    :catch_0
    move-exception p1

    .line 104
    const-string p2, "SqliteWrapper"

    const-string p3, "Catch a SQLiteException when insert: "

    invoke-static {p2, p3, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 105
    invoke-static {p0, p1}, Lnet/sqlcipher/database/SqliteWrapper;->checkSQLiteException(Landroid/content/Context;Lnet/sqlcipher/database/SQLiteException;)V

    const/4 p0, 0x0

    return-object p0
.end method

.method private static isLowMemory(Lnet/sqlcipher/database/SQLiteException;)Z
    .locals 1

    .line 45
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteException;->getMessage()Ljava/lang/String;

    move-result-object p0

    const-string v0, "unable to open database file"

    invoke-virtual {p0, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p0

    return p0
.end method

.method public static query(Landroid/content/Context;Landroid/content/ContentResolver;Landroid/net/Uri;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;)Lnet/sqlcipher/Cursor;
    .locals 0

    .line 60
    :try_start_0
    invoke-virtual/range {p1 .. p6}, Landroid/content/ContentResolver;->query(Landroid/net/Uri;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object p1

    check-cast p1, Lnet/sqlcipher/Cursor;
    :try_end_0
    .catch Lnet/sqlcipher/database/SQLiteException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    move-exception p1

    .line 62
    const-string p2, "SqliteWrapper"

    const-string p3, "Catch a SQLiteException when query: "

    invoke-static {p2, p3, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 63
    invoke-static {p0, p1}, Lnet/sqlcipher/database/SqliteWrapper;->checkSQLiteException(Landroid/content/Context;Lnet/sqlcipher/database/SQLiteException;)V

    const/4 p0, 0x0

    return-object p0
.end method

.method public static requery(Landroid/content/Context;Landroid/database/Cursor;)Z
    .locals 2

    .line 70
    :try_start_0
    invoke-interface {p1}, Landroid/database/Cursor;->requery()Z

    move-result p0
    :try_end_0
    .catch Lnet/sqlcipher/database/SQLiteException; {:try_start_0 .. :try_end_0} :catch_0

    return p0

    :catch_0
    move-exception p1

    .line 72
    const-string v0, "SqliteWrapper"

    const-string v1, "Catch a SQLiteException when requery: "

    invoke-static {v0, v1, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 73
    invoke-static {p0, p1}, Lnet/sqlcipher/database/SqliteWrapper;->checkSQLiteException(Landroid/content/Context;Lnet/sqlcipher/database/SQLiteException;)V

    const/4 p0, 0x0

    return p0
.end method

.method public static update(Landroid/content/Context;Landroid/content/ContentResolver;Landroid/net/Uri;Landroid/content/ContentValues;Ljava/lang/String;[Ljava/lang/String;)I
    .locals 0

    .line 80
    :try_start_0
    invoke-virtual {p1, p2, p3, p4, p5}, Landroid/content/ContentResolver;->update(Landroid/net/Uri;Landroid/content/ContentValues;Ljava/lang/String;[Ljava/lang/String;)I

    move-result p0
    :try_end_0
    .catch Lnet/sqlcipher/database/SQLiteException; {:try_start_0 .. :try_end_0} :catch_0

    return p0

    :catch_0
    move-exception p1

    .line 82
    const-string p2, "SqliteWrapper"

    const-string p3, "Catch a SQLiteException when update: "

    invoke-static {p2, p3, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 83
    invoke-static {p0, p1}, Lnet/sqlcipher/database/SqliteWrapper;->checkSQLiteException(Landroid/content/Context;Lnet/sqlcipher/database/SQLiteException;)V

    const/4 p0, -0x1

    return p0
.end method
