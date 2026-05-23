package kotlin.sequences;

import androidx.exifinterface.media.ExifInterface;
import com.onesignal.NotificationBundleProcessor;
import kotlin.Metadata;
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b`\u0018\u0000*\u0004\b\u0000\u0010\u00012\b\u0012\u0004\u0012\u0002H\u00010\u0002J\u0016\u0010\u0003\u001a\b\u0012\u0004\u0012\u00028\u00000\u00022\u0006\u0010\u0004\u001a\u00020\u0005H&J\u0016\u0010\u0006\u001a\b\u0012\u0004\u0012\u00028\u00000\u00022\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0007"}, d2 = {"Lkotlin/sequences/DropTakeSequence;", ExifInterface.GPS_DIRECTION_TRUE, "Lkotlin/sequences/Sequence;", "drop", NotificationBundleProcessor.PUSH_MINIFIED_BUTTON_TEXT, "", "take", "kotlin-stdlib"}, k = 1, mv = {1, 8, 0}, xi = 48)
public interface DropTakeSequence<T> extends Sequence<T> {
    Sequence<T> drop(int n);

    Sequence<T> take(int n);
}

