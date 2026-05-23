package kotlin.enums;

import androidx.exifinterface.media.ExifInterface;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\u001a\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0010\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0011\n\u0002\b\u0003\u001a2\u0010\u0000\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0001\"\u000e\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u00032\u0012\u0010\u0004\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00020\u00060\u0005H\u0001\u001a1\u0010\u0000\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0001\"\u000e\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u00032\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0006H\u0001¢\u0006\u0002\u0010\b¨\u0006\t"}, d2 = {"enumEntries", "Lkotlin/enums/EnumEntries;", ExifInterface.LONGITUDE_EAST, "", "entriesProvider", "Lkotlin/Function0;", "", "entries", "([Ljava/lang/Enum;)Lkotlin/enums/EnumEntries;", "kotlin-stdlib"}, k = 2, mv = {1, 8, 0}, xi = 48)
public final class EnumEntriesKt {
    public static final <E extends Enum<E>> EnumEntries<E> enumEntries(Function0<E[]> entriesProvider) {
        Intrinsics.checkNotNullParameter(entriesProvider, "entriesProvider");
        return new EnumEntriesList(entriesProvider);
    }

    public static final <E extends Enum<E>> EnumEntries<E> enumEntries(final E[] entries) {
        Intrinsics.checkNotNullParameter(entries, "entries");
        EnumEntriesList enumEntriesList = new EnumEntriesList(new Function0<E[]>() { // from class: kotlin.enums.EnumEntriesKt.enumEntries.1
            /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
            /* high-level source view WARN: Incorrect types in method signature: ([TE;)V */
            {
                super(0);
            }

            /* high-level source view WARN: Incorrect return type in method signature: ()[TE; */
            @Override // kotlin.jvm.functions.Function0
            public final Enum[] invoke() {
                return entries;
            }
        });
        enumEntriesList.size();
        return enumEntriesList;
    }
}

