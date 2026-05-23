.class public Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;
.super Lnet/sqlcipher/database/SQLiteOpenHelper;
.source "StorageDatabaseHelper.java"


# static fields
.field private static final COL_ID:Ljava/lang/String; = "id"

.field private static final COL_NAME:Ljava/lang/String; = "name"

.field private static final COL_VALUE:Ljava/lang/String; = "value"

.field private static final IDX_COL_NAME:Ljava/lang/String; = "name"

.field private static final TAG:Ljava/lang/String; = "StorageDatabaseHelper"


# instance fields
.field private dbName:Ljava/lang/String;

.field private final dbVersion:I

.field private encrypted:Ljava/lang/Boolean;

.field public isOpen:Ljava/lang/Boolean;

.field private mode:Ljava/lang/String;

.field private final newsecret:Ljava/lang/String;

.field private secret:Ljava/lang/String;

.field private tableName:Ljava/lang/String;


# direct methods
.method public constructor <init>(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V
    .locals 1

    const/4 v0, 0x0

    .line 77
    invoke-direct {p0, p1, p2, v0, p8}, Lnet/sqlcipher/database/SQLiteOpenHelper;-><init>(Landroid/content/Context;Ljava/lang/String;Lnet/sqlcipher/database/SQLiteDatabase$CursorFactory;I)V

    const/4 v0, 0x0

    .line 29
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    iput-object v0, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->isOpen:Ljava/lang/Boolean;

    .line 78
    iput-object p2, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->dbName:Ljava/lang/String;

    .line 79
    iput-object p3, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    .line 80
    iput p8, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->dbVersion:I

    .line 81
    iput-object p4, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->encrypted:Ljava/lang/Boolean;

    .line 82
    iput-object p6, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    .line 83
    iput-object p7, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->newsecret:Ljava/lang/String;

    .line 84
    iput-object p5, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->mode:Ljava/lang/String;

    .line 86
    invoke-direct {p0, p1}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->InitializeSQLCipher(Landroid/content/Context;)V

    return-void
.end method

.method private InitializeSQLCipher(Landroid/content/Context;)V
    .locals 16

    move-object/from16 v1, p0

    move-object/from16 v0, p1

    .line 99
    const-string v2, "InitializeSQLCipher: Error while trying to index table "

    const-string v3, "of the encryptedDB"

    const-string v4, "name"

    invoke-static/range {p1 .. p1}, Lnet/sqlcipher/database/SQLiteDatabase;->loadLibs(Landroid/content/Context;)V

    .line 104
    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->encrypted:Ljava/lang/Boolean;

    invoke-virtual {v5}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v5

    const/4 v6, 0x1

    .line 111
    invoke-static {v6}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v6

    const/4 v7, 0x0

    if-nez v5, :cond_0

    .line 104
    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->mode:Ljava/lang/String;

    const-string v8, "no-encryption"

    invoke-virtual {v5, v8}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_0

    .line 106
    iget-object v2, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->dbName:Ljava/lang/String;

    invoke-virtual {v0, v2}, Landroid/content/Context;->getDatabasePath(Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 107
    invoke-direct {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createFilePath(Ljava/io/File;)V

    .line 110
    :try_start_0
    const-string v2, ""

    invoke-static {v0, v2, v7}, Lnet/sqlcipher/database/SQLiteDatabase;->openOrCreateDatabase(Ljava/io/File;Ljava/lang/String;Lnet/sqlcipher/database/SQLiteDatabase$CursorFactory;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v0

    .line 111
    iput-object v6, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->isOpen:Ljava/lang/Boolean;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_4

    :goto_0
    move-object v7, v0

    goto/16 :goto_7

    .line 115
    :cond_0
    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->encrypted:Ljava/lang/Boolean;

    invoke-virtual {v5}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v5

    const-string v8, "StorageDatabaseHelper"

    if-eqz v5, :cond_1

    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->mode:Ljava/lang/String;

    const-string v9, "secret"

    invoke-virtual {v5, v9}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_1

    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {v5}, Ljava/lang/String;->length()I

    move-result v5

    if-lez v5, :cond_1

    .line 116
    iget-object v2, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->dbName:Ljava/lang/String;

    invoke-virtual {v0, v2}, Landroid/content/Context;->getDatabasePath(Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 117
    invoke-direct {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createFilePath(Ljava/io/File;)V

    .line 119
    :try_start_1
    iget-object v2, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-static {v0, v2, v7}, Lnet/sqlcipher/database/SQLiteDatabase;->openOrCreateDatabase(Ljava/io/File;Ljava/lang/String;Lnet/sqlcipher/database/SQLiteDatabase$CursorFactory;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v0

    .line 120
    iput-object v6, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->isOpen:Ljava/lang/Boolean;
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_0

    goto :goto_0

    .line 122
    :catch_0
    const-string v0, "InitializeSQLCipher: Wrong Secret "

    invoke-static {v8, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    goto/16 :goto_7

    .line 125
    :cond_1
    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->encrypted:Ljava/lang/Boolean;

    invoke-virtual {v5}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v5

    if-eqz v5, :cond_2

    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->mode:Ljava/lang/String;

    const-string v9, "newsecret"

    invoke-virtual {v5, v9}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_2

    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {v5}, Ljava/lang/String;->length()I

    move-result v5

    if-lez v5, :cond_2

    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->newsecret:Ljava/lang/String;

    .line 126
    invoke-virtual {v5}, Ljava/lang/String;->length()I

    move-result v5

    if-lez v5, :cond_2

    .line 128
    iget-object v2, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->dbName:Ljava/lang/String;

    invoke-virtual {v0, v2}, Landroid/content/Context;->getDatabasePath(Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 129
    invoke-direct {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createFilePath(Ljava/io/File;)V

    .line 131
    :try_start_2
    iget-object v2, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-static {v0, v2, v7}, Lnet/sqlcipher/database/SQLiteDatabase;->openOrCreateDatabase(Ljava/io/File;Ljava/lang/String;Lnet/sqlcipher/database/SQLiteDatabase$CursorFactory;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v0

    .line 133
    iget-object v2, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->newsecret:Ljava/lang/String;

    invoke-virtual {v0, v2}, Lnet/sqlcipher/database/SQLiteDatabase;->changePassword(Ljava/lang/String;)V

    .line 134
    iget-object v2, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->newsecret:Ljava/lang/String;

    iput-object v2, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    .line 135
    iput-object v6, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->isOpen:Ljava/lang/Boolean;
    :try_end_2
    .catch Ljava/lang/Exception; {:try_start_2 .. :try_end_2} :catch_1

    goto :goto_0

    :catch_1
    move-exception v0

    .line 137
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "InitializeSQLCipher: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v8, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    goto/16 :goto_7

    .line 141
    :cond_2
    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->encrypted:Ljava/lang/Boolean;

    invoke-virtual {v5}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v5

    if-eqz v5, :cond_a

    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->mode:Ljava/lang/String;

    const-string v9, "encryption"

    invoke-virtual {v5, v9}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_a

    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {v5}, Ljava/lang/String;->length()I

    move-result v5

    if-lez v5, :cond_a

    .line 145
    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->dbName:Ljava/lang/String;

    invoke-virtual {v0, v5}, Landroid/content/Context;->getDatabasePath(Ljava/lang/String;)Ljava/io/File;

    move-result-object v5

    .line 146
    invoke-virtual {v5}, Ljava/io/File;->exists()Z

    move-result v9

    if-eqz v9, :cond_3

    .line 147
    const-string v9, "temp.db"

    invoke-virtual {v0, v9}, Landroid/content/Context;->getDatabasePath(Ljava/lang/String;)Ljava/io/File;

    move-result-object v9

    .line 148
    invoke-direct {v1, v9}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createFilePath(Ljava/io/File;)V

    .line 149
    invoke-virtual {v5, v9}, Ljava/io/File;->renameTo(Ljava/io/File;)Z

    goto :goto_1

    :cond_3
    move-object v9, v7

    .line 154
    :goto_1
    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->dbName:Ljava/lang/String;

    invoke-virtual {v0, v5}, Landroid/content/Context;->getDatabasePath(Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 155
    invoke-direct {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createFilePath(Ljava/io/File;)V

    .line 156
    iget-object v5, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-static {v0, v5, v7}, Lnet/sqlcipher/database/SQLiteDatabase;->openOrCreateDatabase(Ljava/io/File;Ljava/lang/String;Lnet/sqlcipher/database/SQLiteDatabase$CursorFactory;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v5

    .line 158
    invoke-virtual {v9}, Ljava/io/File;->exists()Z

    move-result v0

    if-eqz v0, :cond_9

    .line 159
    invoke-static {v9, v7, v7}, Lnet/sqlcipher/database/SQLiteDatabase;->openOrCreateDatabase(Ljava/io/File;Ljava/lang/String;Lnet/sqlcipher/database/SQLiteDatabase$CursorFactory;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v0

    .line 163
    invoke-direct {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getTables(Lnet/sqlcipher/database/SQLiteDatabase;)Ljava/util/List;

    move-result-object v10

    .line 164
    iget-object v11, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    .line 165
    invoke-interface {v10}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v10

    :cond_4
    :goto_2
    invoke-interface {v10}, Ljava/util/Iterator;->hasNext()Z

    move-result v12

    if-eqz v12, :cond_8

    invoke-interface {v10}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v12

    check-cast v12, Ljava/lang/String;

    .line 166
    sget-object v13, Ljava/lang/System;->out:Ljava/io/PrintStream;

    invoke-virtual {v13, v12}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    .line 167
    iput-object v12, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    .line 168
    invoke-direct {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getKeysValues(Lnet/sqlcipher/database/SQLiteDatabase;)Ljava/util/List;

    move-result-object v13

    .line 170
    invoke-direct {v1, v5, v12, v6}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createTable(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v14

    .line 171
    invoke-virtual {v14}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v14

    if-eqz v14, :cond_7

    .line 173
    invoke-virtual {v5}, Lnet/sqlcipher/database/SQLiteDatabase;->beginTransaction()V

    .line 175
    :try_start_3
    new-instance v14, Landroid/content/ContentValues;

    invoke-direct {v14}, Landroid/content/ContentValues;-><init>()V

    .line 176
    invoke-interface {v13}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v13

    :goto_3
    invoke-interface {v13}, Ljava/util/Iterator;->hasNext()Z

    move-result v15

    if-eqz v15, :cond_5

    invoke-interface {v13}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v15

    check-cast v15, Lcom/jeep/plugin/capacitor/cdssUtils/Data;
    :try_end_3
    .catch Ljava/lang/Exception; {:try_start_3 .. :try_end_3} :catch_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    .line 177
    :try_start_4
    iget-object v7, v15, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->name:Ljava/lang/String;

    invoke-virtual {v14, v4, v7}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 178
    const-string v7, "value"

    iget-object v15, v15, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->value:Ljava/lang/String;

    invoke-virtual {v14, v7, v15}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V
    :try_end_4
    .catch Ljava/lang/Exception; {:try_start_4 .. :try_end_4} :catch_2
    .catchall {:try_start_4 .. :try_end_4} :catchall_0

    const/4 v7, 0x0

    .line 179
    :try_start_5
    invoke-virtual {v5, v12, v7, v14}, Lnet/sqlcipher/database/SQLiteDatabase;->insertOrThrow(Ljava/lang/String;Ljava/lang/String;Landroid/content/ContentValues;)J

    goto :goto_3

    :catch_2
    const/4 v7, 0x0

    goto :goto_5

    .line 181
    :cond_5
    invoke-virtual {v5}, Lnet/sqlcipher/database/SQLiteDatabase;->setTransactionSuccessful()V
    :try_end_5
    .catch Ljava/lang/Exception; {:try_start_5 .. :try_end_5} :catch_3
    .catchall {:try_start_5 .. :try_end_5} :catchall_0

    .line 186
    invoke-virtual {v5}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 187
    invoke-direct {v1, v5, v12, v4, v6}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createIndex(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v13

    .line 188
    invoke-virtual {v13}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v13

    if-nez v13, :cond_4

    .line 189
    new-instance v13, Ljava/lang/StringBuilder;

    invoke-direct {v13, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    :goto_4
    invoke-virtual {v13, v12}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v12

    invoke-virtual {v12, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v12

    invoke-virtual {v12}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v12

    invoke-static {v8, v12}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_2

    :catchall_0
    move-exception v0

    goto :goto_6

    .line 183
    :catch_3
    :goto_5
    :try_start_6
    new-instance v13, Ljava/lang/StringBuilder;

    invoke-direct {v13}, Ljava/lang/StringBuilder;-><init>()V

    const-string v14, "InitializeSQLCipher: Error while trying to add data in table "

    invoke-virtual {v13, v14}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v13

    invoke-virtual {v13, v12}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v13

    invoke-virtual {v13, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v13

    invoke-virtual {v13}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v13

    invoke-static {v8, v13}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_6
    .catchall {:try_start_6 .. :try_end_6} :catchall_0

    .line 186
    invoke-virtual {v5}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 187
    invoke-direct {v1, v5, v12, v4, v6}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createIndex(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v13

    .line 188
    invoke-virtual {v13}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v13

    if-nez v13, :cond_4

    .line 189
    new-instance v13, Ljava/lang/StringBuilder;

    invoke-direct {v13, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    goto :goto_4

    .line 186
    :goto_6
    invoke-virtual {v5}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 187
    invoke-direct {v1, v5, v12, v4, v6}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createIndex(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v4

    .line 188
    invoke-virtual {v4}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v4

    if-nez v4, :cond_6

    .line 189
    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v12}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v8, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 192
    :cond_6
    throw v0

    .line 194
    :cond_7
    const-string v12, "InitializeSQLCipher: create Table failed during encryption process"

    invoke-static {v8, v12}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    goto/16 :goto_2

    .line 198
    :cond_8
    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    .line 199
    invoke-virtual {v9}, Ljava/io/File;->delete()Z

    .line 200
    iput-object v11, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    .line 201
    iput-object v6, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->encrypted:Ljava/lang/Boolean;

    .line 202
    iput-object v6, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->isOpen:Ljava/lang/Boolean;

    :cond_9
    move-object v7, v5

    :catch_4
    :cond_a
    :goto_7
    if-eqz v7, :cond_b

    .line 205
    invoke-virtual {v7}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    .line 206
    :cond_b
    iget-object v0, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->isOpen:Ljava/lang/Boolean;

    invoke-virtual {v0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    if-eqz v0, :cond_c

    .line 207
    iget-object v0, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-direct {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->checkForTableExists(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_c

    .line 209
    iget-object v0, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->setTable(Ljava/lang/String;)Z

    move-result v0

    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    iput-object v0, v1, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->isOpen:Ljava/lang/Boolean;

    :cond_c
    return-void
.end method

.method private checkForTableExists(Ljava/lang/String;)Z
    .locals 4

    const/4 v0, 0x0

    .line 599
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    .line 600
    iget-object v1, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {p0, v1}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getWritableDatabase(Ljava/lang/String;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v1

    .line 601
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "SELECT name FROM sqlite_master WHERE type=\'table\' AND name=\'"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v2, "\'"

    invoke-virtual {p1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const/4 v2, 0x0

    .line 603
    invoke-virtual {v1, p1, v2}, Lnet/sqlcipher/database/SQLiteDatabase;->rawQuery(Ljava/lang/String;[Ljava/lang/String;)Lnet/sqlcipher/Cursor;

    move-result-object p1

    .line 604
    invoke-interface {p1}, Landroid/database/Cursor;->getCount()I

    move-result v1

    if-lez v1, :cond_0

    const/4 v0, 0x1

    .line 605
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    .line 607
    :cond_0
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    .line 608
    invoke-virtual {v0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p1

    return p1
.end method

.method private createFilePath(Ljava/io/File;)V
    .locals 1

    .line 92
    invoke-virtual {p1}, Ljava/io/File;->exists()Z

    move-result v0

    if-nez v0, :cond_0

    .line 93
    invoke-virtual {p1}, Ljava/io/File;->mkdirs()Z

    .line 94
    invoke-virtual {p1}, Ljava/io/File;->delete()Z

    :cond_0
    return-void
.end method

.method private createIndex(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;
    .locals 4

    const/4 v0, 0x0

    .line 549
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    .line 550
    invoke-virtual {p4}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p4

    if-eqz p4, :cond_0

    const-string p4, "IF NOT EXISTS"

    goto :goto_0

    :cond_0
    const-string p4, ""

    .line 551
    :goto_0
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "index_"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, "_on_"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 552
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "CREATE INDEX "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p4

    const-string v2, " "

    invoke-virtual {p4, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p4

    invoke-virtual {p4, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p4

    const-string v1, " ON "

    invoke-virtual {p4, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p4

    invoke-virtual {p4, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p4, " ("

    invoke-virtual {p2, p4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, ");"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    .line 554
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteDatabase;->beginTransaction()V

    .line 556
    :try_start_0
    invoke-virtual {p1, p2}, Lnet/sqlcipher/database/SQLiteDatabase;->execSQL(Ljava/lang/String;)V

    .line 557
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteDatabase;->setTransactionSuccessful()V

    const/4 p2, 0x1

    .line 558
    invoke-static {p2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p2
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 562
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    return-object p2

    .line 560
    :catch_0
    :try_start_1
    const-string p2, "StorageDatabaseHelper"

    const-string p3, "createIndex: Error Index (idx) on table (tableName) could not be created."

    invoke-static {p2, p3}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 562
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    return-object v0

    :catchall_0
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    return-object v0
.end method

.method private createTable(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;
    .locals 5

    const-string v0, "(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,value TEXT)"

    const-string v1, "createTable: Error while creating table: "

    const-string v2, "CREATE TABLE "

    .line 527
    invoke-virtual {p3}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p3

    if-eqz p3, :cond_0

    const-string p3, "IF NOT EXISTS"

    goto :goto_0

    :cond_0
    const-string p3, ""

    .line 529
    :goto_0
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteDatabase;->beginTransaction()V

    const/4 v3, 0x0

    .line 531
    :try_start_0
    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    const-string v2, " "

    invoke-virtual {p3, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p3

    .line 537
    invoke-virtual {p1, p3}, Lnet/sqlcipher/database/SQLiteDatabase;->execSQL(Ljava/lang/String;)V

    .line 538
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteDatabase;->setTransactionSuccessful()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 543
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    const/4 p1, 0x1

    .line 544
    invoke-static {p1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p1

    return-object p1

    .line 541
    :catch_0
    :try_start_1
    const-string p3, "StorageDatabaseHelper"

    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {p3, p2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 543
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 544
    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p1

    return-object p1

    .line 543
    :catchall_0
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 544
    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p1

    return-object p1
.end method

.method private getKeysValues(Lnet/sqlcipher/database/SQLiteDatabase;)Ljava/util/List;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lnet/sqlcipher/database/SQLiteDatabase;",
            ")",
            "Ljava/util/List<",
            "Lcom/jeep/plugin/capacitor/cdssUtils/Data;",
            ">;"
        }
    .end annotation

    .line 569
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 570
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "SELECT * FROM "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x0

    .line 572
    invoke-virtual {p1, v1, v2}, Lnet/sqlcipher/database/SQLiteDatabase;->rawQuery(Ljava/lang/String;[Ljava/lang/String;)Lnet/sqlcipher/Cursor;

    move-result-object p1

    .line 573
    invoke-interface {p1}, Landroid/database/Cursor;->getCount()I

    move-result v1

    if-lez v1, :cond_3

    .line 575
    :try_start_0
    invoke-interface {p1}, Landroid/database/Cursor;->moveToFirst()Z

    move-result v1

    if-eqz v1, :cond_1

    .line 577
    :cond_0
    new-instance v1, Lcom/jeep/plugin/capacitor/cdssUtils/Data;

    invoke-direct {v1}, Lcom/jeep/plugin/capacitor/cdssUtils/Data;-><init>()V

    .line 578
    const-string v2, "name"

    invoke-interface {p1, v2}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v2

    invoke-interface {p1, v2}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v2

    iput-object v2, v1, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->name:Ljava/lang/String;

    .line 579
    const-string v2, "value"

    invoke-interface {p1, v2}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v2

    invoke-interface {p1, v2}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v2

    iput-object v2, v1, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->value:Ljava/lang/String;

    .line 580
    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 581
    invoke-interface {p1}, Landroid/database/Cursor;->moveToNext()Z

    move-result v1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez v1, :cond_0

    :cond_1
    if-eqz p1, :cond_4

    .line 586
    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_4

    .line 587
    :goto_0
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    goto :goto_2

    :catchall_0
    move-exception v0

    goto :goto_1

    .line 584
    :catch_0
    :try_start_1
    const-string v1, "StorageDatabaseHelper"

    const-string v2, "keysvalues: Error while trying to get all keys/values from storage database"

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    if-eqz p1, :cond_4

    .line 586
    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_4

    goto :goto_0

    :goto_1
    if-eqz p1, :cond_2

    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_2

    .line 587
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    .line 589
    :cond_2
    throw v0

    .line 591
    :cond_3
    invoke-static {}, Ljava/util/Collections;->emptyList()Ljava/util/List;

    move-result-object v0

    if-eqz p1, :cond_4

    .line 592
    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_4

    .line 593
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    :cond_4
    :goto_2
    return-object v0
.end method

.method private getTables(Lnet/sqlcipher/database/SQLiteDatabase;)Ljava/util/List;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lnet/sqlcipher/database/SQLiteDatabase;",
            ")",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 493
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 495
    const-string v1, "SELECT * FROM sqlite_master WHERE TYPE =\'table\'"

    const/4 v2, 0x0

    .line 497
    invoke-virtual {p1, v1, v2}, Lnet/sqlcipher/database/SQLiteDatabase;->rawQuery(Ljava/lang/String;[Ljava/lang/String;)Lnet/sqlcipher/Cursor;

    move-result-object p1

    .line 498
    invoke-interface {p1}, Landroid/database/Cursor;->getCount()I

    move-result v1

    if-lez v1, :cond_4

    .line 500
    :try_start_0
    invoke-interface {p1}, Landroid/database/Cursor;->moveToFirst()Z

    move-result v1

    if-eqz v1, :cond_2

    .line 503
    :cond_0
    const-string v1, "name"

    invoke-interface {p1, v1}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v1

    invoke-interface {p1, v1}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v1

    .line 505
    const-string v2, "sqlite_sequence"

    invoke-virtual {v2, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_1

    .line 506
    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 508
    :cond_1
    invoke-interface {p1}, Landroid/database/Cursor;->moveToNext()Z

    move-result v1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez v1, :cond_0

    :cond_2
    if-eqz p1, :cond_5

    .line 513
    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_5

    .line 514
    :goto_0
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    goto :goto_2

    :catchall_0
    move-exception v0

    goto :goto_1

    .line 511
    :catch_0
    :try_start_1
    const-string v1, "StorageDatabaseHelper"

    const-string v2, "keys: Error while trying to get all keys from storage database"

    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    if-eqz p1, :cond_5

    .line 513
    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_5

    goto :goto_0

    :goto_1
    if-eqz p1, :cond_3

    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_3

    .line 514
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    .line 516
    :cond_3
    throw v0

    .line 518
    :cond_4
    invoke-static {}, Ljava/util/Collections;->emptyList()Ljava/util/List;

    move-result-object v0

    if-eqz p1, :cond_5

    .line 519
    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_5

    .line 520
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    :cond_5
    :goto_2
    return-object v0
.end method


# virtual methods
.method public clear()Z
    .locals 8

    .line 340
    const-string v0, "StorageDatabaseHelper"

    .line 0
    const-string v1, "DELETE FROM sqlite_sequence WHERE name = \'"

    const-string v2, "DELETE FROM "

    const-string v3, "Clear: Error while trying to delete all data"

    .line 342
    iget-object v4, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-direct {p0, v4}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->checkForTableExists(Ljava/lang/String;)Z

    move-result v4

    const/4 v5, 0x1

    if-eqz v4, :cond_0

    .line 346
    iget-object v4, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {p0, v4}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getWritableDatabase(Ljava/lang/String;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v4

    .line 348
    invoke-virtual {v4}, Lnet/sqlcipher/database/SQLiteDatabase;->beginTransaction()V

    const/4 v6, 0x0

    .line 350
    :try_start_0
    const-string v7, "Clear: Delete from DB"

    invoke-static {v0, v7}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 352
    new-instance v7, Ljava/lang/StringBuilder;

    invoke-direct {v7, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {v7, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v4, v2}, Lnet/sqlcipher/database/SQLiteDatabase;->execSQL(Ljava/lang/String;)V

    .line 355
    const-string v2, "Clear: Delete from sqlite_sequence"

    invoke-static {v0, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 356
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, "\'"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v4, v1}, Lnet/sqlcipher/database/SQLiteDatabase;->execSQL(Ljava/lang/String;)V

    .line 357
    invoke-virtual {v4}, Lnet/sqlcipher/database/SQLiteDatabase;->setTransactionSuccessful()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 362
    invoke-virtual {v4}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 363
    invoke-virtual {v4}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    return v5

    :catch_0
    move-exception v1

    .line 360
    :try_start_1
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 362
    :catchall_0
    invoke-virtual {v4}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 363
    invoke-virtual {v4}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    return v6

    :cond_0
    return v5
.end method

.method public get(Ljava/lang/String;)Lcom/jeep/plugin/capacitor/cdssUtils/Data;
    .locals 5

    .line 383
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "SELECT * FROM "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " WHERE name = \'"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "\'"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 385
    iget-object v0, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {p0, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getReadableDatabase(Ljava/lang/String;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v0

    const/4 v1, 0x0

    .line 387
    invoke-virtual {v0, p1, v1}, Lnet/sqlcipher/database/SQLiteDatabase;->rawQuery(Ljava/lang/String;[Ljava/lang/String;)Lnet/sqlcipher/Cursor;

    move-result-object p1

    .line 388
    invoke-interface {p1}, Landroid/database/Cursor;->getCount()I

    move-result v2

    if-lez v2, :cond_2

    .line 390
    :try_start_0
    invoke-interface {p1}, Landroid/database/Cursor;->moveToFirst()Z

    move-result v2

    if-eqz v2, :cond_0

    .line 391
    new-instance v2, Lcom/jeep/plugin/capacitor/cdssUtils/Data;

    invoke-direct {v2}, Lcom/jeep/plugin/capacitor/cdssUtils/Data;-><init>()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 392
    :try_start_1
    const-string v1, "id"

    invoke-interface {p1, v1}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v1

    invoke-interface {p1, v1}, Landroid/database/Cursor;->getLong(I)J

    move-result-wide v3

    invoke-static {v3, v4}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v1

    iput-object v1, v2, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->id:Ljava/lang/Long;

    .line 393
    const-string v1, "name"

    invoke-interface {p1, v1}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v1

    invoke-interface {p1, v1}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v1

    iput-object v1, v2, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->name:Ljava/lang/String;

    .line 394
    const-string v1, "value"

    invoke-interface {p1, v1}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v1

    invoke-interface {p1, v1}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v1

    iput-object v1, v2, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->value:Ljava/lang/String;
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    move-object v1, v2

    goto :goto_0

    :catch_0
    move-object v1, v2

    goto :goto_2

    :cond_0
    :goto_0
    if-eqz p1, :cond_4

    .line 399
    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v2

    if-nez v2, :cond_4

    .line 400
    :goto_1
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    goto :goto_4

    :catchall_0
    move-exception v0

    goto :goto_3

    .line 397
    :catch_1
    :goto_2
    :try_start_2
    const-string v2, "StorageDatabaseHelper"

    const-string v3, "get: Error while trying to get data from storage database"

    invoke-static {v2, v3}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    if-eqz p1, :cond_4

    .line 399
    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v2

    if-nez v2, :cond_4

    goto :goto_1

    :goto_3
    if-eqz p1, :cond_1

    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_1

    .line 400
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    .line 402
    :cond_1
    throw v0

    .line 404
    :cond_2
    new-instance v2, Lcom/jeep/plugin/capacitor/cdssUtils/Data;

    invoke-direct {v2}, Lcom/jeep/plugin/capacitor/cdssUtils/Data;-><init>()V

    .line 405
    iput-object v1, v2, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->id:Ljava/lang/Long;

    if-eqz p1, :cond_3

    .line 406
    invoke-interface {p1}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_3

    .line 407
    invoke-interface {p1}, Landroid/database/Cursor;->close()V

    :cond_3
    move-object v1, v2

    .line 410
    :cond_4
    :goto_4
    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    return-object v1
.end method

.method public iskey(Ljava/lang/String;)Z
    .locals 0

    .line 374
    invoke-virtual {p0, p1}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->get(Ljava/lang/String;)Lcom/jeep/plugin/capacitor/cdssUtils/Data;

    move-result-object p1

    .line 375
    iget-object p1, p1, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->id:Ljava/lang/Long;

    if-eqz p1, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return p1
.end method

.method public keys()Ljava/util/List;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 416
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 418
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "SELECT * FROM "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 419
    iget-object v2, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {p0, v2}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getReadableDatabase(Ljava/lang/String;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v2

    const/4 v3, 0x0

    .line 421
    invoke-virtual {v2, v1, v3}, Lnet/sqlcipher/database/SQLiteDatabase;->rawQuery(Ljava/lang/String;[Ljava/lang/String;)Lnet/sqlcipher/Cursor;

    move-result-object v1

    .line 422
    invoke-interface {v1}, Landroid/database/Cursor;->getCount()I

    move-result v3

    if-lez v3, :cond_3

    .line 424
    :try_start_0
    invoke-interface {v1}, Landroid/database/Cursor;->moveToFirst()Z

    move-result v3

    if-eqz v3, :cond_1

    .line 427
    :cond_0
    const-string v3, "name"

    invoke-interface {v1, v3}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v3

    invoke-interface {v1, v3}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v3

    .line 428
    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 429
    invoke-interface {v1}, Landroid/database/Cursor;->moveToNext()Z

    move-result v3
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez v3, :cond_0

    :cond_1
    if-eqz v1, :cond_4

    .line 434
    invoke-interface {v1}, Landroid/database/Cursor;->isClosed()Z

    move-result v3

    if-nez v3, :cond_4

    .line 435
    :goto_0
    invoke-interface {v1}, Landroid/database/Cursor;->close()V

    goto :goto_2

    :catchall_0
    move-exception v0

    goto :goto_1

    .line 432
    :catch_0
    :try_start_1
    const-string v3, "StorageDatabaseHelper"

    const-string v4, "keys: Error while trying to get all keys from storage database"

    invoke-static {v3, v4}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    if-eqz v1, :cond_4

    .line 434
    invoke-interface {v1}, Landroid/database/Cursor;->isClosed()Z

    move-result v3

    if-nez v3, :cond_4

    goto :goto_0

    :goto_1
    if-eqz v1, :cond_2

    invoke-interface {v1}, Landroid/database/Cursor;->isClosed()Z

    move-result v2

    if-nez v2, :cond_2

    .line 435
    invoke-interface {v1}, Landroid/database/Cursor;->close()V

    .line 437
    :cond_2
    throw v0

    .line 439
    :cond_3
    invoke-static {}, Ljava/util/Collections;->emptyList()Ljava/util/List;

    move-result-object v0

    if-eqz v1, :cond_4

    .line 440
    invoke-interface {v1}, Landroid/database/Cursor;->isClosed()Z

    move-result v3

    if-nez v3, :cond_4

    .line 441
    invoke-interface {v1}, Landroid/database/Cursor;->close()V

    .line 444
    :cond_4
    :goto_2
    invoke-virtual {v2}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    return-object v0
.end method

.method public keysvalues()Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/jeep/plugin/capacitor/cdssUtils/Data;",
            ">;"
        }
    .end annotation

    .line 485
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 487
    iget-object v0, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {p0, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getReadableDatabase(Ljava/lang/String;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v0

    .line 488
    invoke-direct {p0, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getKeysValues(Lnet/sqlcipher/database/SQLiteDatabase;)Ljava/util/List;

    move-result-object v1

    .line 489
    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    return-object v1
.end method

.method public onCreate(Lnet/sqlcipher/database/SQLiteDatabase;)V
    .locals 6

    .line 216
    const-string v0, "******* onCreate: in "

    const-string v1, "StorageDatabaseHelper"

    invoke-static {v1, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 217
    iget-object v0, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    const/4 v2, 0x1

    invoke-static {v2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    invoke-direct {p0, p1, v0, v2}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createTable(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v0

    .line 218
    invoke-virtual {v0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    const-string v3, " not created"

    const-string v4, "onCreate: table "

    if-eqz v0, :cond_1

    .line 219
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v4, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {v0, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v4, " created"

    invoke-virtual {v0, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 220
    iget-object v0, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    const-string v5, "name"

    invoke-direct {p0, p1, v0, v5, v2}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createIndex(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object p1

    .line 221
    invoke-virtual {p1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p1

    const-string v0, "onCreate: index table "

    if-nez p1, :cond_0

    .line 222
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v1, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_0

    .line 225
    :cond_0
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v1, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_0

    .line 230
    :cond_1
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v1, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    :goto_0
    return-void
.end method

.method public onUpgrade(Lnet/sqlcipher/database/SQLiteDatabase;II)V
    .locals 0

    if-eq p2, p3, :cond_0

    .line 237
    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "DROP TABLE IF EXISTS "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object p3, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Lnet/sqlcipher/database/SQLiteDatabase;->execSQL(Ljava/lang/String;)V

    .line 238
    invoke-virtual {p0, p1}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->onCreate(Lnet/sqlcipher/database/SQLiteDatabase;)V

    :cond_0
    return-void
.end method

.method public remove(Ljava/lang/String;)Z
    .locals 6

    const-string v0, " WHERE name = \'"

    const-string v1, "remove: Error while trying to delete "

    const-string v2, "DELETE FROM "

    .line 322
    iget-object v3, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {p0, v3}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getWritableDatabase(Ljava/lang/String;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v3

    .line 324
    invoke-virtual {v3}, Lnet/sqlcipher/database/SQLiteDatabase;->beginTransaction()V

    const/4 v4, 0x0

    .line 326
    :try_start_0
    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {v5, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v2, "\'"

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v3, v0}, Lnet/sqlcipher/database/SQLiteDatabase;->execSQL(Ljava/lang/String;)V

    .line 327
    invoke-virtual {v3}, Lnet/sqlcipher/database/SQLiteDatabase;->setTransactionSuccessful()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 332
    invoke-virtual {v3}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 333
    invoke-virtual {v3}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    const/4 p1, 0x1

    return p1

    .line 330
    :catch_0
    :try_start_1
    const-string v0, "StorageDatabaseHelper"

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 332
    :catchall_0
    invoke-virtual {v3}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 333
    invoke-virtual {v3}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    return v4
.end method

.method public set(Lcom/jeep/plugin/capacitor/cdssUtils/Data;)Z
    .locals 5

    .line 262
    iget-object v0, p1, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->name:Ljava/lang/String;

    invoke-virtual {p0, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->get(Ljava/lang/String;)Lcom/jeep/plugin/capacitor/cdssUtils/Data;

    move-result-object v0

    .line 264
    iget-object v1, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {p0, v1}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getWritableDatabase(Ljava/lang/String;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v1

    .line 266
    iget-object v0, v0, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->id:Ljava/lang/Long;

    if-eqz v0, :cond_0

    .line 268
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    .line 269
    invoke-virtual {p0, p1}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->update(Lcom/jeep/plugin/capacitor/cdssUtils/Data;)Z

    move-result p1

    return p1

    .line 274
    :cond_0
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->beginTransaction()V

    const/4 v0, 0x0

    .line 277
    :try_start_0
    new-instance v2, Landroid/content/ContentValues;

    invoke-direct {v2}, Landroid/content/ContentValues;-><init>()V

    .line 278
    const-string v3, "name"

    iget-object v4, p1, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->name:Ljava/lang/String;

    invoke-virtual {v2, v3, v4}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 279
    const-string v3, "value"

    iget-object p1, p1, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->value:Ljava/lang/String;

    invoke-virtual {v2, v3, p1}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 282
    iget-object p1, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    const/4 v3, 0x0

    invoke-virtual {v1, p1, v3, v2}, Lnet/sqlcipher/database/SQLiteDatabase;->insertOrThrow(Ljava/lang/String;Ljava/lang/String;Landroid/content/ContentValues;)J

    .line 283
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->setTransactionSuccessful()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 288
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 289
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    const/4 p1, 0x1

    return p1

    .line 286
    :catch_0
    :try_start_1
    const-string p1, "StorageDatabaseHelper"

    const-string v2, "set: Error while trying to add data to database"

    invoke-static {p1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 288
    :catchall_0
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 289
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    return v0
.end method

.method public setTable(Ljava/lang/String;)Z
    .locals 4

    const/4 v0, 0x0

    .line 243
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    .line 244
    iget-object v1, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {p0, v1}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getWritableDatabase(Ljava/lang/String;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v1

    const/4 v2, 0x1

    .line 245
    invoke-static {v2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    invoke-direct {p0, v1, p1, v2}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createTable(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v3

    if-eqz v3, :cond_0

    .line 247
    iput-object p1, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    .line 248
    const-string v3, "name"

    invoke-direct {p0, v1, p1, v3, v2}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->createIndex(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object p1

    .line 249
    invoke-virtual {p1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p1

    if-eqz p1, :cond_0

    move-object v0, v2

    .line 253
    :cond_0
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    .line 254
    invoke-virtual {v0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p1

    return p1
.end method

.method public update(Lcom/jeep/plugin/capacitor/cdssUtils/Data;)Z
    .locals 9

    const-string v0, "update: Error while trying to update "

    .line 298
    iget-object v1, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {p0, v1}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getWritableDatabase(Ljava/lang/String;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v1

    .line 299
    new-instance v2, Landroid/content/ContentValues;

    invoke-direct {v2}, Landroid/content/ContentValues;-><init>()V

    .line 300
    const-string v3, "value"

    iget-object v4, p1, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->value:Ljava/lang/String;

    invoke-virtual {v2, v3, v4}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 303
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->beginTransaction()V

    const/4 v3, 0x0

    .line 305
    :try_start_0
    iget-object v4, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    const-string v5, "name = ?"

    const/4 v6, 0x1

    new-array v7, v6, [Ljava/lang/String;

    iget-object v8, p1, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->name:Ljava/lang/String;

    .line 306
    invoke-static {v8}, Ljava/lang/String;->valueOf(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v8

    aput-object v8, v7, v3

    .line 305
    invoke-virtual {v1, v4, v2, v5, v7}, Lnet/sqlcipher/database/SQLiteDatabase;->update(Ljava/lang/String;Landroid/content/ContentValues;Ljava/lang/String;[Ljava/lang/String;)I

    .line 307
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->setTransactionSuccessful()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 312
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 313
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    return v6

    .line 310
    :catch_0
    :try_start_1
    const-string v2, "StorageDatabaseHelper"

    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object p1, p1, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->name:Ljava/lang/String;

    invoke-virtual {v4, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v2, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 312
    :catchall_0
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->endTransaction()V

    .line 313
    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    return v3
.end method

.method public values()Ljava/util/List;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 450
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 452
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "SELECT * FROM "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->tableName:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 453
    iget-object v2, p0, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->secret:Ljava/lang/String;

    invoke-virtual {p0, v2}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->getReadableDatabase(Ljava/lang/String;)Lnet/sqlcipher/database/SQLiteDatabase;

    move-result-object v2

    const/4 v3, 0x0

    .line 455
    invoke-virtual {v2, v1, v3}, Lnet/sqlcipher/database/SQLiteDatabase;->rawQuery(Ljava/lang/String;[Ljava/lang/String;)Lnet/sqlcipher/Cursor;

    move-result-object v1

    .line 456
    invoke-interface {v1}, Landroid/database/Cursor;->getCount()I

    move-result v3

    if-lez v3, :cond_3

    .line 458
    :try_start_0
    invoke-interface {v1}, Landroid/database/Cursor;->moveToFirst()Z

    move-result v3

    if-eqz v3, :cond_1

    .line 461
    :cond_0
    const-string v3, "value"

    invoke-interface {v1, v3}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v3

    invoke-interface {v1, v3}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v3

    .line 462
    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 463
    invoke-interface {v1}, Landroid/database/Cursor;->moveToNext()Z

    move-result v3
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez v3, :cond_0

    :cond_1
    if-eqz v1, :cond_4

    .line 468
    invoke-interface {v1}, Landroid/database/Cursor;->isClosed()Z

    move-result v3

    if-nez v3, :cond_4

    .line 469
    :goto_0
    invoke-interface {v1}, Landroid/database/Cursor;->close()V

    goto :goto_2

    :catchall_0
    move-exception v0

    goto :goto_1

    .line 466
    :catch_0
    :try_start_1
    const-string v3, "StorageDatabaseHelper"

    const-string v4, "values: Error while trying to get all values from storage database"

    invoke-static {v3, v4}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    if-eqz v1, :cond_4

    .line 468
    invoke-interface {v1}, Landroid/database/Cursor;->isClosed()Z

    move-result v3

    if-nez v3, :cond_4

    goto :goto_0

    :goto_1
    if-eqz v1, :cond_2

    invoke-interface {v1}, Landroid/database/Cursor;->isClosed()Z

    move-result v2

    if-nez v2, :cond_2

    .line 469
    invoke-interface {v1}, Landroid/database/Cursor;->close()V

    .line 471
    :cond_2
    throw v0

    .line 473
    :cond_3
    invoke-static {}, Ljava/util/Collections;->emptyList()Ljava/util/List;

    move-result-object v0

    if-eqz v1, :cond_4

    .line 474
    invoke-interface {v1}, Landroid/database/Cursor;->isClosed()Z

    move-result v3

    if-nez v3, :cond_4

    .line 475
    invoke-interface {v1}, Landroid/database/Cursor;->close()V

    .line 478
    :cond_4
    :goto_2
    invoke-virtual {v2}, Lnet/sqlcipher/database/SQLiteDatabase;->close()V

    return-object v0
.end method
