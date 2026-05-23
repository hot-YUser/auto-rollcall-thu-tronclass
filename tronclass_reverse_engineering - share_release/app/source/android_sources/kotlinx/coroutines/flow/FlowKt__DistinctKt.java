package kotlinx.coroutines.flow;

import androidx.exifinterface.media.ExifInterface;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
@Metadata(d1 = {"\u0000*\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\b\u001a\u001c\u0010\t\u001a\b\u0012\u0004\u0012\u0002H\u000b0\n\"\u0004\b\u0000\u0010\u000b*\b\u0012\u0004\u0012\u0002H\u000b0\n\u001aT\u0010\t\u001a\b\u0012\u0004\u0012\u0002H\u000b0\n\"\u0004\b\u0000\u0010\u000b*\b\u0012\u0004\u0012\u0002H\u000b0\n26\u0010\f\u001a2\u0012\u0013\u0012\u0011H\u000b¢\u0006\f\b\r\u0012\b\b\u000e\u0012\u0004\b\b(\u000f\u0012\u0013\u0012\u0011H\u000b¢\u0006\f\b\r\u0012\b\b\u000e\u0012\u0004\b\b(\u0010\u0012\u0004\u0012\u00020\u00030\u0001\u001a6\u0010\u0011\u001a\b\u0012\u0004\u0012\u0002H\u000b0\n\"\u0004\b\u0000\u0010\u000b\"\u0004\b\u0001\u0010\u0012*\b\u0012\u0004\u0012\u0002H\u000b0\n2\u0012\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u0002H\u000b\u0012\u0004\u0012\u0002H\u00120\u0007\u001au\u0010\u0011\u001a\b\u0012\u0004\u0012\u0002H\u000b0\n\"\u0004\b\u0000\u0010\u000b*\b\u0012\u0004\u0012\u0002H\u000b0\n2\u0014\u0010\u0013\u001a\u0010\u0012\u0004\u0012\u0002H\u000b\u0012\u0006\u0012\u0004\u0018\u00010\u00020\u00072:\u0010\f\u001a6\u0012\u0015\u0012\u0013\u0018\u00010\u0002¢\u0006\f\b\r\u0012\b\b\u000e\u0012\u0004\b\b(\u000f\u0012\u0015\u0012\u0013\u0018\u00010\u0002¢\u0006\f\b\r\u0012\b\b\u000e\u0012\u0004\b\b(\u0010\u0012\u0004\u0012\u00020\u00030\u0001H\u0002¢\u0006\u0002\b\u0014\",\u0010\u0000\u001a\u0018\u0012\u0006\u0012\u0004\u0018\u00010\u0002\u0012\u0006\u0012\u0004\u0018\u00010\u0002\u0012\u0004\u0012\u00020\u00030\u00018\u0002X\u0083\u0004¢\u0006\b\n\u0000\u0012\u0004\b\u0004\u0010\u0005\"&\u0010\u0006\u001a\u0012\u0012\u0006\u0012\u0004\u0018\u00010\u0002\u0012\u0006\u0012\u0004\u0018\u00010\u00020\u00078\u0002X\u0083\u0004¢\u0006\b\n\u0000\u0012\u0004\b\b\u0010\u0005¨\u0006\u0015"}, d2 = {"defaultAreEquivalent", "Lkotlin/Function2;", "", "", "getDefaultAreEquivalent$annotations$FlowKt__DistinctKt", "()V", "defaultKeySelector", "Lkotlin/Function1;", "getDefaultKeySelector$annotations$FlowKt__DistinctKt", "distinctUntilChanged", "Lkotlinx/coroutines/flow/Flow;", ExifInterface.GPS_DIRECTION_TRUE, "areEquivalent", "Lkotlin/ParameterName;", "name", "old", "new", "distinctUntilChangedBy", "K", "keySelector", "distinctUntilChangedBy$FlowKt__DistinctKt", "kotlinx-coroutines-core"}, k = 5, mv = {1, 6, 0}, xi = 48, xs = "kotlinx/coroutines/flow/FlowKt")
final /* synthetic */ class FlowKt__DistinctKt {
    private static final Function1<Object, Object> defaultKeySelector = new Function1<Object, Object>() { // from class: kotlinx.coroutines.flow.FlowKt__DistinctKt$defaultKeySelector$1
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            return obj;
        }
    };
    private static final Function2<Object, Object, Boolean> defaultAreEquivalent = new Function2<Object, Object, Boolean>() { // from class: kotlinx.coroutines.flow.FlowKt__DistinctKt$defaultAreEquivalent$1
        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // kotlin.jvm.functions.Function2
        public final Boolean invoke(Object obj, Object obj2) {
            return Boolean.valueOf(Intrinsics.areEqual(obj, obj2));
        }
    };

    private static /* synthetic */ void getDefaultAreEquivalent$annotations$FlowKt__DistinctKt() {
    }

    private static /* synthetic */ void getDefaultKeySelector$annotations$FlowKt__DistinctKt() {
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    public static final <T> Flow<T> distinctUntilChanged(Flow<? extends T> flow) {
        return flow instanceof StateFlow ? flow : distinctUntilChangedBy$FlowKt__DistinctKt(flow, defaultKeySelector, defaultAreEquivalent);
    }

    public static final <T> Flow<T> distinctUntilChanged(Flow<? extends T> flow, Function2<? super T, ? super T, Boolean> function2) {
        return distinctUntilChangedBy$FlowKt__DistinctKt(flow, defaultKeySelector, (Function2) TypeIntrinsics.beforeCheckcastToFunctionOfArity(function2, 2));
    }

    public static final <T, K> Flow<T> distinctUntilChangedBy(Flow<? extends T> flow, Function1<? super T, ? extends K> function1) {
        return distinctUntilChangedBy$FlowKt__DistinctKt(flow, function1, defaultAreEquivalent);
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    private static final <T> Flow<T> distinctUntilChangedBy$FlowKt__DistinctKt(Flow<? extends T> flow, Function1<? super T, ? extends Object> function1, Function2<Object, Object, Boolean> function2) {
        if (flow instanceof DistinctFlowImpl) {
            DistinctFlowImpl distinctFlowImpl = (DistinctFlowImpl) flow;
            if (distinctFlowImpl.keySelector == function1 && distinctFlowImpl.areEquivalent == function2) {
                return flow;
            }
        }
        return new DistinctFlowImpl(flow, function1, function2);
    }
}

