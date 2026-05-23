package kotlinx.coroutines.flow;

import androidx.exifinterface.media.ExifInterface;
import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlin.jvm.internal.Ref;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\u0010\u0000\u001a\u00020\u0001\"\u0004\b\u0000\u0010\u00022\u0006\u0010\u0003\u001a\u0002H\u0002H\u008a@¢\u0006\u0004\b\u0004\u0010\u0005"}, d2 = {"<anonymous>", "", ExifInterface.GPS_DIRECTION_TRUE, "it", "emit", "(Ljava/lang/Object;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;"}, k = 3, mv = {1, 6, 0}, xi = 48)
final class FlowKt__EmittersKt$onEmpty$1$1<T> implements FlowCollector {
    final /* synthetic */ Ref.BooleanRef $isEmpty;
    final /* synthetic */ FlowCollector<T> $this_unsafeFlow;

    /* high-level source view WARN: Multi-variable type inference failed */
    FlowKt__EmittersKt$onEmpty$1$1(Ref.BooleanRef booleanRef, FlowCollector<? super T> flowCollector) {
        this.$isEmpty = booleanRef;
        this.$this_unsafeFlow = flowCollector;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:7:0x0014  */
    @Override // kotlinx.coroutines.flow.FlowCollector
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public final Object emit(T t, Continuation<? super Unit> continuation) throws Throwable {
        FlowKt__EmittersKt$onEmpty$1$1$emit$1 flowKt__EmittersKt$onEmpty$1$1$emit$1;
        if (continuation instanceof FlowKt__EmittersKt$onEmpty$1$1$emit$1) {
            flowKt__EmittersKt$onEmpty$1$1$emit$1 = (FlowKt__EmittersKt$onEmpty$1$1$emit$1) continuation;
            if ((flowKt__EmittersKt$onEmpty$1$1$emit$1.label & Integer.MIN_VALUE) != 0) {
                flowKt__EmittersKt$onEmpty$1$1$emit$1.label -= Integer.MIN_VALUE;
            } else {
                flowKt__EmittersKt$onEmpty$1$1$emit$1 = new FlowKt__EmittersKt$onEmpty$1$1$emit$1(this, continuation);
            }
        }
        Object obj = flowKt__EmittersKt$onEmpty$1$1$emit$1.result;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i = flowKt__EmittersKt$onEmpty$1$1$emit$1.label;
        if (i == 0) {
            ResultKt.throwOnFailure(obj);
            this.$isEmpty.element = false;
            FlowCollector<T> flowCollector = this.$this_unsafeFlow;
            flowKt__EmittersKt$onEmpty$1$1$emit$1.label = 1;
            if (flowCollector.emit(t, flowKt__EmittersKt$onEmpty$1$1$emit$1) == coroutine_suspended) {
                return coroutine_suspended;
            }
        } else {
            if (i != 1) {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            ResultKt.throwOnFailure(obj);
        }
        return Unit.INSTANCE;
    }
}

