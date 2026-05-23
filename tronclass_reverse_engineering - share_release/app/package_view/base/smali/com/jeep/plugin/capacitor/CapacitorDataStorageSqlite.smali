.class public Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;
.super Lcom/getcapacitor/Plugin;
.source "CapacitorDataStorageSqlite.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# instance fields
.field private context:Landroid/content/Context;

.field private globalData:Lcom/jeep/plugin/capacitor/cdssUtils/Global;

.field private mDb:Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 19
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    .line 21
    new-instance v0, Lcom/jeep/plugin/capacitor/cdssUtils/Global;

    invoke-direct {v0}, Lcom/jeep/plugin/capacitor/cdssUtils/Global;-><init>()V

    iput-object v0, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->globalData:Lcom/jeep/plugin/capacitor/cdssUtils/Global;

    return-void
.end method


# virtual methods
.method public clear(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 185
    iget-object v0, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->mDb:Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;

    invoke-virtual {v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->clear()Z

    move-result v0

    .line 187
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 188
    const-string v2, "result"

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 189
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public deleteStore(Lcom/getcapacitor/PluginCall;)V
    .locals 5
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 246
    const-string v0, "database"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 248
    const-string v0, "storage"

    .line 250
    :cond_0
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 252
    iget-object v2, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->context:Landroid/content/Context;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    const-string v4, "SQLite.db"

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Landroid/content/Context;->deleteDatabase(Ljava/lang/String;)Z

    .line 253
    iget-object v2, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->context:Landroid/content/Context;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Landroid/content/Context;->deleteFile(Ljava/lang/String;)Z

    .line 254
    iget-object v2, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->context:Landroid/content/Context;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Landroid/content/Context;->getDatabasePath(Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 255
    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v0

    const-string v2, "result"

    if-eqz v0, :cond_1

    const/4 v0, 0x0

    .line 256
    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    goto :goto_0

    :cond_1
    const/4 v0, 0x1

    .line 258
    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 260
    :goto_0
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public echo(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 33
    const-string v0, "value"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 35
    new-instance v2, Lcom/getcapacitor/JSObject;

    invoke-direct {v2}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 36
    invoke-virtual {v2, v0, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 37
    invoke-virtual {p1, v2}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public get(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 143
    const-string v0, "key"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 145
    const-string v0, "Must provide key"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    .line 148
    :cond_0
    iget-object v1, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->mDb:Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;

    invoke-virtual {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->get(Ljava/lang/String;)Lcom/jeep/plugin/capacitor/cdssUtils/Data;

    move-result-object v0

    .line 150
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 151
    iget-object v2, v0, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->id:Ljava/lang/Long;

    if-nez v2, :cond_1

    sget-object v0, Lcom/getcapacitor/JSObject;->NULL:Ljava/lang/Object;

    goto :goto_0

    :cond_1
    iget-object v0, v0, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->value:Ljava/lang/String;

    :goto_0
    const-string v2, "value"

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 152
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public iskey(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 157
    const-string v0, "key"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 159
    const-string v0, "Must provide key"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    .line 162
    :cond_0
    iget-object v1, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->mDb:Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;

    invoke-virtual {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->iskey(Ljava/lang/String;)Z

    move-result v0

    .line 164
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 165
    const-string v2, "result"

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 166
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public keys(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 194
    iget-object v0, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->mDb:Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;

    invoke-virtual {v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->keys()Ljava/util/List;

    move-result-object v0

    .line 195
    invoke-interface {v0}, Ljava/util/List;->size()I

    move-result v1

    new-array v1, v1, [Ljava/lang/String;

    invoke-interface {v0, v1}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Ljava/lang/String;

    .line 197
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 199
    :try_start_0
    const-string v2, "keys"

    new-instance v3, Lcom/getcapacitor/JSArray;

    invoke-direct {v3, v0}, Lcom/getcapacitor/JSArray;-><init>(Ljava/lang/Object;)V

    invoke-virtual {v1, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 204
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void

    .line 201
    :catch_0
    const-string v0, "Unable to create key array."

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void
.end method

.method public keysvalues(Lcom/getcapacitor/PluginCall;)V
    .locals 6
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 224
    iget-object v0, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->mDb:Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;

    invoke-virtual {v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->keysvalues()Ljava/util/List;

    move-result-object v0

    .line 225
    invoke-interface {v0}, Ljava/util/List;->size()I

    move-result v1

    new-array v1, v1, [Lcom/getcapacitor/JSObject;

    const/4 v2, 0x0

    .line 227
    :goto_0
    invoke-interface {v0}, Ljava/util/List;->size()I

    move-result v3

    if-ge v2, v3, :cond_0

    .line 228
    new-instance v3, Lcom/getcapacitor/JSObject;

    invoke-direct {v3}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 229
    invoke-interface {v0, v2}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Lcom/jeep/plugin/capacitor/cdssUtils/Data;

    iget-object v4, v4, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->name:Ljava/lang/String;

    const-string v5, "key"

    invoke-virtual {v3, v5, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 230
    invoke-interface {v0, v2}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Lcom/jeep/plugin/capacitor/cdssUtils/Data;

    iget-object v4, v4, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->value:Ljava/lang/String;

    const-string v5, "value"

    invoke-virtual {v3, v5, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 231
    aput-object v3, v1, v2

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 234
    :cond_0
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 236
    :try_start_0
    const-string v2, "keysvalues"

    new-instance v3, Lcom/getcapacitor/JSArray;

    invoke-direct {v3, v1}, Lcom/getcapacitor/JSArray;-><init>(Ljava/lang/Object;)V

    invoke-virtual {v0, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 241
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void

    .line 238
    :catch_0
    const-string v0, "Unable to create key/value array."

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void
.end method

.method public load()V
    .locals 1

    .line 27
    invoke-virtual {p0}, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->getContext()Landroid/content/Context;

    move-result-object v0

    iput-object v0, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->context:Landroid/content/Context;

    return-void
.end method

.method public openStore(Lcom/getcapacitor/PluginCall;)V
    .locals 14
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 48
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 51
    const-string v1, "database"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    if-nez v1, :cond_0

    .line 53
    const-string v1, "storage"

    .line 55
    :cond_0
    const-string v2, "table"

    invoke-virtual {p1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    if-nez v2, :cond_1

    .line 57
    const-string v2, "storage_table"

    :cond_1
    move-object v6, v2

    .line 59
    const-string v2, "encrypted"

    const/4 v12, 0x0

    invoke-static {v12}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v3

    invoke-virtual {p1, v2, v3}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v7

    .line 60
    invoke-virtual {v7}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v2

    const-string v13, "result"

    const-string v3, "no-encryption"

    const/4 v4, 0x0

    if-eqz v2, :cond_7

    .line 61
    const-string v2, "mode"

    invoke-virtual {p1, v2, v3}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    .line 62
    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    const-string v5, "newsecret"

    const-string v8, "encryption"

    const-string v9, "wrongsecret"

    const-string v10, "secret"

    if-nez v3, :cond_2

    invoke-virtual {v2, v8}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_2

    .line 63
    invoke-virtual {v2, v10}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_2

    invoke-virtual {v2, v5}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_2

    .line 64
    invoke-virtual {v2, v9}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_2

    .line 65
    invoke-virtual {v0, v13, v12}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 66
    const-string v3, "message"

    const-string v11, "OpenStore: Error inMode must be in [\'encryption\',\'secret\',\'newsecret\']"

    invoke-virtual {v0, v3, v11}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 67
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    .line 69
    :cond_2
    invoke-virtual {v2, v8}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_6

    invoke-virtual {v2, v10}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_3

    goto :goto_0

    .line 72
    :cond_3
    invoke-virtual {v2, v5}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_4

    .line 73
    iget-object v3, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->globalData:Lcom/jeep/plugin/capacitor/cdssUtils/Global;

    iget-object v3, v3, Lcom/jeep/plugin/capacitor/cdssUtils/Global;->secret:Ljava/lang/String;

    .line 74
    iget-object v4, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->globalData:Lcom/jeep/plugin/capacitor/cdssUtils/Global;

    iget-object v4, v4, Lcom/jeep/plugin/capacitor/cdssUtils/Global;->newsecret:Ljava/lang/String;

    .line 75
    iget-object v5, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->globalData:Lcom/jeep/plugin/capacitor/cdssUtils/Global;

    iput-object v4, v5, Lcom/jeep/plugin/capacitor/cdssUtils/Global;->secret:Ljava/lang/String;

    goto :goto_1

    .line 76
    :cond_4
    invoke-virtual {v2, v9}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_5

    move-object v8, v10

    goto :goto_2

    .line 82
    :cond_5
    const-string v3, ""

    move-object v8, v2

    move-object v9, v3

    goto :goto_3

    .line 70
    :cond_6
    :goto_0
    iget-object v3, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->globalData:Lcom/jeep/plugin/capacitor/cdssUtils/Global;

    iget-object v3, v3, Lcom/jeep/plugin/capacitor/cdssUtils/Global;->secret:Ljava/lang/String;

    :goto_1
    move-object v8, v2

    move-object v9, v3

    :goto_2
    move-object v10, v4

    goto :goto_4

    :cond_7
    move-object v8, v3

    move-object v9, v4

    :goto_3
    move-object v10, v9

    .line 91
    :goto_4
    new-instance v2, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;

    iget-object v4, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->context:Landroid/content/Context;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v3, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v3, "SQLite.db"

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    const/4 v11, 0x1

    move-object v3, v2

    invoke-direct/range {v3 .. v11}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;-><init>(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V

    iput-object v2, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->mDb:Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;

    .line 93
    iget-object v1, v2, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->isOpen:Ljava/lang/Boolean;

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    if-nez v1, :cond_8

    .line 94
    invoke-virtual {v0, v13, v12}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    goto :goto_5

    :cond_8
    const/4 v1, 0x1

    .line 96
    invoke-virtual {v0, v13, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 98
    :goto_5
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public remove(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 171
    const-string v0, "key"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 173
    const-string v0, "Must provide key"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    .line 176
    :cond_0
    iget-object v1, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->mDb:Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;

    invoke-virtual {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->remove(Ljava/lang/String;)Z

    move-result v0

    .line 178
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 179
    const-string v2, "result"

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 180
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public set(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 126
    const-string v0, "key"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 128
    const-string v0, "Must provide key"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    .line 131
    :cond_0
    const-string v1, "value"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 132
    new-instance v2, Lcom/jeep/plugin/capacitor/cdssUtils/Data;

    invoke-direct {v2}, Lcom/jeep/plugin/capacitor/cdssUtils/Data;-><init>()V

    .line 133
    iput-object v0, v2, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->name:Ljava/lang/String;

    .line 134
    iput-object v1, v2, Lcom/jeep/plugin/capacitor/cdssUtils/Data;->value:Ljava/lang/String;

    .line 135
    iget-object v0, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->mDb:Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;

    invoke-virtual {v0, v2}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->set(Lcom/jeep/plugin/capacitor/cdssUtils/Data;)Z

    move-result v0

    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    .line 136
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 137
    const-string v2, "result"

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 138
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public setTable(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 105
    const-string v0, "table"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 107
    const-string v0, "Must provide a table name"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    .line 110
    :cond_0
    iget-object v1, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->mDb:Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;

    if-eqz v1, :cond_2

    .line 111
    invoke-virtual {v1, v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->setTable(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    .line 113
    const-string v1, "failed in adding table"

    goto :goto_0

    .line 112
    :cond_1
    const-string v1, ""

    goto :goto_0

    :cond_2
    const/4 v0, 0x0

    .line 116
    const-string v1, "Must open a store first"

    .line 118
    :goto_0
    new-instance v2, Lcom/getcapacitor/JSObject;

    invoke-direct {v2}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 119
    const-string v3, "result"

    invoke-virtual {v2, v3, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 120
    const-string v0, "message"

    invoke-virtual {v2, v0, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 121
    invoke-virtual {p1, v2}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public values(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 209
    iget-object v0, p0, Lcom/jeep/plugin/capacitor/CapacitorDataStorageSqlite;->mDb:Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;

    invoke-virtual {v0}, Lcom/jeep/plugin/capacitor/cdssUtils/StorageDatabaseHelper;->values()Ljava/util/List;

    move-result-object v0

    .line 210
    invoke-interface {v0}, Ljava/util/List;->size()I

    move-result v1

    new-array v1, v1, [Ljava/lang/String;

    invoke-interface {v0, v1}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Ljava/lang/String;

    .line 212
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 214
    :try_start_0
    const-string v2, "values"

    new-instance v3, Lcom/getcapacitor/JSArray;

    invoke-direct {v3, v0}, Lcom/getcapacitor/JSArray;-><init>(Ljava/lang/Object;)V

    invoke-virtual {v1, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 219
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void

    .line 216
    :catch_0
    const-string v0, "Unable to create value array."

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void
.end method
