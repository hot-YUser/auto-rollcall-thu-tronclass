.class Lnet/sqlcipher/database/SQLiteDatabase$4;
.super Ljava/lang/Object;
.source "SQLiteDatabase.java"

# interfaces
.implements Lnet/sqlcipher/database/SQLiteTransactionListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lnet/sqlcipher/database/SQLiteDatabase;->beginTransactionWithListener(Landroid/database/sqlite/SQLiteTransactionListener;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lnet/sqlcipher/database/SQLiteDatabase;

.field final synthetic val$transactionListener:Landroid/database/sqlite/SQLiteTransactionListener;


# direct methods
.method constructor <init>(Lnet/sqlcipher/database/SQLiteDatabase;Landroid/database/sqlite/SQLiteTransactionListener;)V
    .locals 0

    .line 2985
    iput-object p1, p0, Lnet/sqlcipher/database/SQLiteDatabase$4;->this$0:Lnet/sqlcipher/database/SQLiteDatabase;

    iput-object p2, p0, Lnet/sqlcipher/database/SQLiteDatabase$4;->val$transactionListener:Landroid/database/sqlite/SQLiteTransactionListener;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onBegin()V
    .locals 1

    .line 2988
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteDatabase$4;->val$transactionListener:Landroid/database/sqlite/SQLiteTransactionListener;

    invoke-interface {v0}, Landroid/database/sqlite/SQLiteTransactionListener;->onBegin()V

    return-void
.end method

.method public onCommit()V
    .locals 1

    .line 2993
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteDatabase$4;->val$transactionListener:Landroid/database/sqlite/SQLiteTransactionListener;

    invoke-interface {v0}, Landroid/database/sqlite/SQLiteTransactionListener;->onCommit()V

    return-void
.end method

.method public onRollback()V
    .locals 1

    .line 2998
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteDatabase$4;->val$transactionListener:Landroid/database/sqlite/SQLiteTransactionListener;

    invoke-interface {v0}, Landroid/database/sqlite/SQLiteTransactionListener;->onRollback()V

    return-void
.end method
