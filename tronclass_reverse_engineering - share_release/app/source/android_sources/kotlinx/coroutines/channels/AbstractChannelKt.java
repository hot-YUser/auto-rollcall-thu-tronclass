package kotlinx.coroutines.channels;

import androidx.exifinterface.media.ExifInterface;
import kotlin.Metadata;
import kotlinx.coroutines.internal.Symbol;
@Metadata(d1 = {"\u00004\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0003\n\u0002\u0010\u0002\n\u0000\u001a#\u0010\u0011\u001a\b\u0012\u0004\u0012\u0002H\u00130\u0012\"\u0004\b\u0000\u0010\u0013*\u0004\u0018\u00010\u0014H\u0082\bø\u0001\u0000¢\u0006\u0002\u0010\u0015\u001a%\u0010\u0011\u001a\b\u0012\u0004\u0012\u0002H\u00130\u0012\"\u0004\b\u0000\u0010\u0013*\u0006\u0012\u0002\b\u00030\u0016H\u0082\bø\u0001\u0000¢\u0006\u0002\u0010\u0017\"\u0016\u0010\u0000\u001a\u00020\u00018\u0000X\u0081\u0004¢\u0006\b\n\u0000\u0012\u0004\b\u0002\u0010\u0003\"\u0016\u0010\u0004\u001a\u00020\u00018\u0000X\u0081\u0004¢\u0006\b\n\u0000\u0012\u0004\b\u0005\u0010\u0003\"\u0016\u0010\u0006\u001a\u00020\u00018\u0000X\u0081\u0004¢\u0006\b\n\u0000\u0012\u0004\b\u0007\u0010\u0003\"\u0016\u0010\b\u001a\u00020\u00018\u0000X\u0081\u0004¢\u0006\b\n\u0000\u0012\u0004\b\t\u0010\u0003\"\u0016\u0010\n\u001a\u00020\u00018\u0000X\u0081\u0004¢\u0006\b\n\u0000\u0012\u0004\b\u000b\u0010\u0003\"\u0016\u0010\f\u001a\u00020\u00018\u0000X\u0081\u0004¢\u0006\b\n\u0000\u0012\u0004\b\r\u0010\u0003\"\u000e\u0010\u000e\u001a\u00020\u000fX\u0080T¢\u0006\u0002\n\u0000\"\u000e\u0010\u0010\u001a\u00020\u000fX\u0080T¢\u0006\u0002\n\u0000*(\b\u0000\u0010\u0018\"\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u001a\u0012\u0004\u0012\u00020\u001b0\u00192\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u001a\u0012\u0004\u0012\u00020\u001b0\u0019\u0082\u0002\u0004\n\u0002\b\u0019¨\u0006\u001c"}, d2 = {"EMPTY", "Lkotlinx/coroutines/internal/Symbol;", "getEMPTY$annotations", "()V", "ENQUEUE_FAILED", "getENQUEUE_FAILED$annotations", "HANDLER_INVOKED", "getHANDLER_INVOKED$annotations", "OFFER_FAILED", "getOFFER_FAILED$annotations", "OFFER_SUCCESS", "getOFFER_SUCCESS$annotations", "POLL_FAILED", "getPOLL_FAILED$annotations", "RECEIVE_RESULT", "", "RECEIVE_THROWS_ON_CLOSE", "toResult", "Lkotlinx/coroutines/channels/ChannelResult;", ExifInterface.LONGITUDE_EAST, "", "(Ljava/lang/Object;)Ljava/lang/Object;", "Lkotlinx/coroutines/channels/Closed;", "(Lkotlinx/coroutines/channels/Closed;)Ljava/lang/Object;", "Handler", "Lkotlin/Function1;", "", "", "kotlinx-coroutines-core"}, k = 2, mv = {1, 6, 0}, xi = 48)
public final class AbstractChannelKt {
    public static final int RECEIVE_RESULT = 1;
    public static final int RECEIVE_THROWS_ON_CLOSE = 0;
    public static final Symbol EMPTY = new Symbol("EMPTY");
    public static final Symbol OFFER_SUCCESS = new Symbol("OFFER_SUCCESS");
    public static final Symbol OFFER_FAILED = new Symbol("OFFER_FAILED");
    public static final Symbol POLL_FAILED = new Symbol("POLL_FAILED");
    public static final Symbol ENQUEUE_FAILED = new Symbol("ENQUEUE_FAILED");
    public static final Symbol HANDLER_INVOKED = new Symbol("ON_CLOSE_HANDLER_INVOKED");

    public static /* synthetic */ void getEMPTY$annotations() {
    }

    public static /* synthetic */ void getENQUEUE_FAILED$annotations() {
    }

    public static /* synthetic */ void getHANDLER_INVOKED$annotations() {
    }

    public static /* synthetic */ void getOFFER_FAILED$annotations() {
    }

    public static /* synthetic */ void getOFFER_SUCCESS$annotations() {
    }

    public static /* synthetic */ void getPOLL_FAILED$annotations() {
    }

    private static final <E> Object toResult(Object obj) {
        return obj instanceof Closed ? ChannelResult.INSTANCE.m1857closedJP2dKIU(((Closed) obj).closeCause) : ChannelResult.INSTANCE.m1859successJP2dKIU(obj);
    }

    private static final <E> Object toResult(Closed<?> closed) {
        return ChannelResult.INSTANCE.m1857closedJP2dKIU(closed.closeCause);
    }
}

