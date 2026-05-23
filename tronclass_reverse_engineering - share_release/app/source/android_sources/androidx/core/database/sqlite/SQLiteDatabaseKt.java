package androidx.core.database.sqlite;

import android.database.sqlite.SQLiteDatabase;
import androidx.exifinterface.media.ExifInterface;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.InlineMarker;
import kotlin.jvm.internal.Intrinsics;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000\u001c\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a;\u0010\u0000\u001a\u0002H\u0001\"\u0004\b\u0000\u0010\u0001*\u00020\u00022\b\b\u0002\u0010\u0003\u001a\u00020\u00042\u0017\u0010\u0005\u001a\u0013\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u0002H\u00010\u0006¢\u0006\u0002\b\u0007H\u0086\b¢\u0006\u0002\u0010\b¨\u0006\t"}, d2 = {"transaction", ExifInterface.GPS_DIRECTION_TRUE, "Landroid/database/sqlite/SQLiteDatabase;", "exclusive", "", "body", "Lkotlin/Function1;", "Lkotlin/ExtensionFunctionType;", "(Landroid/database/sqlite/SQLiteDatabase;ZLkotlin/jvm/functions/Function1;)Ljava/lang/Object;", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class SQLiteDatabaseKt {
    public static /* synthetic */ Object transaction$default(SQLiteDatabase transaction, boolean z, Function1 body, int i, Object obj) {
        if ((i & 1) != 0) {
            z = true;
        }
        Intrinsics.checkParameterIsNotNull(transaction, "$this$transaction");
        Intrinsics.checkParameterIsNotNull(body, "body");
        if (z) {
            transaction.beginTransaction();
        } else {
            transaction.beginTransactionNonExclusive();
        }
        try {
            Object objInvoke = body.invoke(transaction);
            transaction.setTransactionSuccessful();
            return objInvoke;
        } finally {
            InlineMarker.finallyStart(1);
            transaction.endTransaction();
            InlineMarker.finallyEnd(1);
        }
    }

    public static final <T> T transaction(SQLiteDatabase transaction, boolean z, Function1<? super SQLiteDatabase, ? extends T> body) {
        Intrinsics.checkParameterIsNotNull(transaction, "$this$transaction");
        Intrinsics.checkParameterIsNotNull(body, "body");
        if (z) {
            transaction.beginTransaction();
        } else {
            transaction.beginTransactionNonExclusive();
        }
        try {
            T tInvoke = body.invoke(transaction);
            transaction.setTransactionSuccessful();
            return tInvoke;
        } finally {
            InlineMarker.finallyStart(1);
            transaction.endTransaction();
            InlineMarker.finallyEnd(1);
        }
    }
}

