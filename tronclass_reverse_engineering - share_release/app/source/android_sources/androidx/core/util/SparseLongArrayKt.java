package androidx.core.util;

import android.util.SparseLongArray;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.IntIterator;
import kotlin.collections.LongIterator;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000D\n\u0000\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\u001a\u0015\u0010\u0005\u001a\u00020\u0006*\u00020\u00022\u0006\u0010\u0007\u001a\u00020\u0001H\u0087\n\u001a\u0015\u0010\b\u001a\u00020\u0006*\u00020\u00022\u0006\u0010\u0007\u001a\u00020\u0001H\u0087\b\u001a\u0015\u0010\t\u001a\u00020\u0006*\u00020\u00022\u0006\u0010\n\u001a\u00020\u000bH\u0087\b\u001aE\u0010\f\u001a\u00020\r*\u00020\u000226\u0010\u000e\u001a2\u0012\u0013\u0012\u00110\u0001¢\u0006\f\b\u0010\u0012\b\b\u0011\u0012\u0004\b\b(\u0007\u0012\u0013\u0012\u00110\u000b¢\u0006\f\b\u0010\u0012\b\b\u0011\u0012\u0004\b\b(\n\u0012\u0004\u0012\u00020\r0\u000fH\u0087\b\u001a\u001d\u0010\u0012\u001a\u00020\u000b*\u00020\u00022\u0006\u0010\u0007\u001a\u00020\u00012\u0006\u0010\u0013\u001a\u00020\u000bH\u0087\b\u001a#\u0010\u0014\u001a\u00020\u000b*\u00020\u00022\u0006\u0010\u0007\u001a\u00020\u00012\f\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u000b0\u0015H\u0087\b\u001a\r\u0010\u0016\u001a\u00020\u0006*\u00020\u0002H\u0087\b\u001a\r\u0010\u0017\u001a\u00020\u0006*\u00020\u0002H\u0087\b\u001a\f\u0010\u0018\u001a\u00020\u0019*\u00020\u0002H\u0007\u001a\u0015\u0010\u001a\u001a\u00020\u0002*\u00020\u00022\u0006\u0010\u001b\u001a\u00020\u0002H\u0087\u0002\u001a\u0014\u0010\u001c\u001a\u00020\r*\u00020\u00022\u0006\u0010\u001b\u001a\u00020\u0002H\u0007\u001a\u001c\u0010\u001d\u001a\u00020\u0006*\u00020\u00022\u0006\u0010\u0007\u001a\u00020\u00012\u0006\u0010\n\u001a\u00020\u000bH\u0007\u001a\u001d\u0010\u001e\u001a\u00020\r*\u00020\u00022\u0006\u0010\u0007\u001a\u00020\u00012\u0006\u0010\n\u001a\u00020\u000bH\u0087\n\u001a\f\u0010\u001f\u001a\u00020 *\u00020\u0002H\u0007\"\u0016\u0010\u0000\u001a\u00020\u0001*\u00020\u00028Ç\u0002¢\u0006\u0006\u001a\u0004\b\u0003\u0010\u0004¨\u0006!"}, d2 = {"size", "", "Landroid/util/SparseLongArray;", "getSize", "(Landroid/util/SparseLongArray;)I", "contains", "", "key", "containsKey", "containsValue", "value", "", "forEach", "", "action", "Lkotlin/Function2;", "Lkotlin/ParameterName;", "name", "getOrDefault", "defaultValue", "getOrElse", "Lkotlin/Function0;", "isEmpty", "isNotEmpty", "keyIterator", "Lkotlin/collections/IntIterator;", "plus", "other", "putAll", "remove", "set", "valueIterator", "Lkotlin/collections/LongIterator;", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class SparseLongArrayKt {
    public static final int getSize(SparseLongArray size) {
        Intrinsics.checkParameterIsNotNull(size, "$this$size");
        return size.size();
    }

    public static final boolean contains(SparseLongArray contains, int i) {
        Intrinsics.checkParameterIsNotNull(contains, "$this$contains");
        return contains.indexOfKey(i) >= 0;
    }

    public static final void set(SparseLongArray set, int i, long j) {
        Intrinsics.checkParameterIsNotNull(set, "$this$set");
        set.put(i, j);
    }

    public static final SparseLongArray plus(SparseLongArray plus, SparseLongArray other) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        Intrinsics.checkParameterIsNotNull(other, "other");
        SparseLongArray sparseLongArray = new SparseLongArray(plus.size() + other.size());
        putAll(sparseLongArray, plus);
        putAll(sparseLongArray, other);
        return sparseLongArray;
    }

    public static final boolean containsKey(SparseLongArray containsKey, int i) {
        Intrinsics.checkParameterIsNotNull(containsKey, "$this$containsKey");
        return containsKey.indexOfKey(i) >= 0;
    }

    public static final boolean containsValue(SparseLongArray containsValue, long j) {
        Intrinsics.checkParameterIsNotNull(containsValue, "$this$containsValue");
        return containsValue.indexOfValue(j) != -1;
    }

    public static final long getOrDefault(SparseLongArray getOrDefault, int i, long j) {
        Intrinsics.checkParameterIsNotNull(getOrDefault, "$this$getOrDefault");
        return getOrDefault.get(i, j);
    }

    public static final long getOrElse(SparseLongArray getOrElse, int i, Function0<Long> defaultValue) {
        Intrinsics.checkParameterIsNotNull(getOrElse, "$this$getOrElse");
        Intrinsics.checkParameterIsNotNull(defaultValue, "defaultValue");
        int iIndexOfKey = getOrElse.indexOfKey(i);
        return iIndexOfKey != -1 ? getOrElse.valueAt(iIndexOfKey) : defaultValue.invoke().longValue();
    }

    public static final boolean isEmpty(SparseLongArray isEmpty) {
        Intrinsics.checkParameterIsNotNull(isEmpty, "$this$isEmpty");
        return isEmpty.size() == 0;
    }

    public static final boolean isNotEmpty(SparseLongArray isNotEmpty) {
        Intrinsics.checkParameterIsNotNull(isNotEmpty, "$this$isNotEmpty");
        return isNotEmpty.size() != 0;
    }

    public static final boolean remove(SparseLongArray remove, int i, long j) {
        Intrinsics.checkParameterIsNotNull(remove, "$this$remove");
        int iIndexOfKey = remove.indexOfKey(i);
        if (iIndexOfKey == -1 || j != remove.valueAt(iIndexOfKey)) {
            return false;
        }
        remove.removeAt(iIndexOfKey);
        return true;
    }

    public static final void forEach(SparseLongArray forEach, Function2<? super Integer, ? super Long, Unit> action) {
        Intrinsics.checkParameterIsNotNull(forEach, "$this$forEach");
        Intrinsics.checkParameterIsNotNull(action, "action");
        int size = forEach.size();
        for (int i = 0; i < size; i++) {
            action.invoke(Integer.valueOf(forEach.keyAt(i)), Long.valueOf(forEach.valueAt(i)));
        }
    }

    public static final IntIterator keyIterator(final SparseLongArray keyIterator) {
        Intrinsics.checkParameterIsNotNull(keyIterator, "$this$keyIterator");
        return new IntIterator() { // from class: androidx.core.util.SparseLongArrayKt.keyIterator.1
            private int index;

            public final int getIndex() {
                return this.index;
            }

            public final void setIndex(int i) {
                this.index = i;
            }

            @Override // java.util.Iterator
            public boolean hasNext() {
                return this.index < keyIterator.size();
            }

            @Override // kotlin.collections.IntIterator
            public int nextInt() {
                SparseLongArray sparseLongArray = keyIterator;
                int i = this.index;
                this.index = i + 1;
                return sparseLongArray.keyAt(i);
            }
        };
    }

    public static final LongIterator valueIterator(final SparseLongArray valueIterator) {
        Intrinsics.checkParameterIsNotNull(valueIterator, "$this$valueIterator");
        return new LongIterator() { // from class: androidx.core.util.SparseLongArrayKt.valueIterator.1
            private int index;

            public final int getIndex() {
                return this.index;
            }

            public final void setIndex(int i) {
                this.index = i;
            }

            @Override // java.util.Iterator
            public boolean hasNext() {
                return this.index < valueIterator.size();
            }

            @Override // kotlin.collections.LongIterator
            public long nextLong() {
                SparseLongArray sparseLongArray = valueIterator;
                int i = this.index;
                this.index = i + 1;
                return sparseLongArray.valueAt(i);
            }
        };
    }

    public static final void putAll(SparseLongArray putAll, SparseLongArray other) {
        Intrinsics.checkParameterIsNotNull(putAll, "$this$putAll");
        Intrinsics.checkParameterIsNotNull(other, "other");
        int size = other.size();
        for (int i = 0; i < size; i++) {
            putAll.put(other.keyAt(i), other.valueAt(i));
        }
    }
}

