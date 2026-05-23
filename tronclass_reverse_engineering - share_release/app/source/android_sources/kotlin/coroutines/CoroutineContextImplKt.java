package kotlin.coroutines;

import androidx.exifinterface.media.ExifInterface;
import kotlin.Metadata;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\u0018\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u001a+\u0010\u0000\u001a\u0004\u0018\u0001H\u0001\"\b\b\u0000\u0010\u0001*\u00020\u0002*\u00020\u00022\f\u0010\u0003\u001a\b\u0012\u0004\u0012\u0002H\u00010\u0004H\u0007¢\u0006\u0002\u0010\u0005\u001a\u0018\u0010\u0006\u001a\u00020\u0007*\u00020\u00022\n\u0010\u0003\u001a\u0006\u0012\u0002\b\u00030\u0004H\u0007¨\u0006\b"}, d2 = {"getPolymorphicElement", ExifInterface.LONGITUDE_EAST, "Lkotlin/coroutines/CoroutineContext$Element;", "key", "Lkotlin/coroutines/CoroutineContext$Key;", "(Lkotlin/coroutines/CoroutineContext$Element;Lkotlin/coroutines/CoroutineContext$Key;)Lkotlin/coroutines/CoroutineContext$Element;", "minusPolymorphicKey", "Lkotlin/coroutines/CoroutineContext;", "kotlin-stdlib"}, k = 2, mv = {1, 8, 0}, xi = 48)
public final class CoroutineContextImplKt {
    /* high-level source view WARN: Multi-variable type inference failed */
    public static final <E extends CoroutineContext.Element> E getPolymorphicElement(CoroutineContext.Element element, CoroutineContext.Key<E> key) {
        Intrinsics.checkNotNullParameter(element, "<this>");
        Intrinsics.checkNotNullParameter(key, "key");
        if (key instanceof AbstractCoroutineContextKey) {
            AbstractCoroutineContextKey abstractCoroutineContextKey = (AbstractCoroutineContextKey) key;
            if (!abstractCoroutineContextKey.isSubKey$kotlin_stdlib(element.getKey())) {
                return null;
            }
            E e = (E) abstractCoroutineContextKey.tryCast$kotlin_stdlib(element);
            if (e instanceof CoroutineContext.Element) {
                return e;
            }
            return null;
        }
        if (element.getKey() == key) {
            return element;
        }
        return null;
    }

    public static final CoroutineContext minusPolymorphicKey(CoroutineContext.Element element, CoroutineContext.Key<?> key) {
        Intrinsics.checkNotNullParameter(element, "<this>");
        Intrinsics.checkNotNullParameter(key, "key");
        if (key instanceof AbstractCoroutineContextKey) {
            AbstractCoroutineContextKey abstractCoroutineContextKey = (AbstractCoroutineContextKey) key;
            boolean zIsSubKey$kotlin_stdlib = abstractCoroutineContextKey.isSubKey$kotlin_stdlib(element.getKey());
            CoroutineContext coroutineContext = element;
            if (zIsSubKey$kotlin_stdlib) {
                CoroutineContext.Element elementTryCast$kotlin_stdlib = abstractCoroutineContextKey.tryCast$kotlin_stdlib(element);
                coroutineContext = element;
                if (elementTryCast$kotlin_stdlib != null) {
                    coroutineContext = EmptyCoroutineContext.INSTANCE;
                }
            }
            return coroutineContext;
        }
        CoroutineContext.Key<?> key2 = element.getKey();
        CoroutineContext coroutineContext2 = element;
        if (key2 == key) {
            coroutineContext2 = EmptyCoroutineContext.INSTANCE;
        }
        return coroutineContext2;
    }
}

