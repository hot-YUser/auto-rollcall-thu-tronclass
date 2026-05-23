package kotlinx.coroutines.flow;

import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlin.coroutines.jvm.internal.ContinuationImpl;
import kotlin.coroutines.jvm.internal.DebugMetadata;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.InlineMarker;
import kotlinx.coroutines.flow.internal.AbortFlowException;
@Metadata(d1 = {"\u0000\u0013\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003*\u0001\u0000\b\n\u0018\u00002\b\u0012\u0004\u0012\u00028\u00000\u0001J\u0019\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00028\u0000H\u0096@ø\u0001\u0000¢\u0006\u0002\u0010\u0005\u0082\u0002\u0004\n\u0002\b\u0019¨\u0006\u0006¸\u0006\u0000"}, d2 = {"kotlinx/coroutines/flow/FlowKt__LimitKt$collectWhile$collector$1", "Lkotlinx/coroutines/flow/FlowCollector;", "emit", "", "value", "(Ljava/lang/Object;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "kotlinx-coroutines-core"}, k = 1, mv = {1, 6, 0}, xi = 48)
public final class FlowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1<T> implements FlowCollector<T> {
    final /* synthetic */ Function2 $predicate$inlined;
    final /* synthetic */ FlowCollector $this_unsafeFlow$inlined;
    @Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
    @DebugMetadata(c = "kotlinx.coroutines.flow.FlowKt__LimitKt$takeWhile$lambda-6$$inlined$collectWhile$1", f = "Limit.kt", i = {0, 0, 1}, l = {142, 143}, m = "emit", n = {"this", "value", "this"}, s = {"L$0", "L$1", "L$0"})
    public static final class AnonymousClass1 extends ContinuationImpl {
        Object L$0;
        Object L$1;
        int label;
        /* synthetic */ Object result;

        public AnonymousClass1(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        public final Object invokeSuspend(Object obj) {
            this.result = obj;
            this.label |= Integer.MIN_VALUE;
            return FlowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1.this.emit(null, this);
        }
    }

    public FlowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1(Function2 function2, FlowCollector flowCollector) {
        this.$predicate$inlined = function2;
        this.$this_unsafeFlow$inlined = flowCollector;
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Removed duplicated region for block: B:27:0x0082  */
    /* high-level source view WARN: Removed duplicated region for block: B:29:0x0085  */
    /* high-level source view WARN: Removed duplicated region for block: B:7:0x0014  */
    @Override // kotlinx.coroutines.flow.FlowCollector
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public Object emit(T t, Continuation<? super Unit> continuation) throws Throwable {
        AnonymousClass1 anonymousClass1;
        Object obj;
        Object obj2;
        FlowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1<T> flowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1;
        if (continuation instanceof AnonymousClass1) {
            anonymousClass1 = (AnonymousClass1) continuation;
            if ((anonymousClass1.label & Integer.MIN_VALUE) != 0) {
                anonymousClass1.label -= Integer.MIN_VALUE;
            } else {
                anonymousClass1 = new AnonymousClass1(continuation);
            }
        }
        Object obj3 = anonymousClass1.result;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i = anonymousClass1.label;
        boolean z = true;
        if (i == 0) {
            ResultKt.throwOnFailure(obj3);
            Function2 function2 = this.$predicate$inlined;
            anonymousClass1.L$0 = this;
            anonymousClass1.L$1 = t;
            anonymousClass1.label = 1;
            InlineMarker.mark(6);
            Object objInvoke = function2.invoke(t, anonymousClass1);
            InlineMarker.mark(7);
            if (objInvoke == coroutine_suspended) {
                return coroutine_suspended;
            }
            obj = objInvoke;
            obj2 = t;
            flowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1 = this;
        } else {
            if (i != 1) {
                if (i != 2) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                flowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1 = (FlowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1) anonymousClass1.L$0;
                ResultKt.throwOnFailure(obj3);
                if (z) {
                    throw new AbortFlowException(flowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1);
                }
                return Unit.INSTANCE;
            }
            Object obj4 = anonymousClass1.L$1;
            FlowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1<T> flowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$12 = (FlowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1) anonymousClass1.L$0;
            ResultKt.throwOnFailure(obj3);
            obj2 = obj4;
            flowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1 = flowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$12;
            obj = obj3;
        }
        if (((Boolean) obj).booleanValue()) {
            FlowCollector flowCollector = flowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1.$this_unsafeFlow$inlined;
            anonymousClass1.L$0 = flowKt__LimitKt$takeWhile$lambda6$$inlined$collectWhile$1;
            anonymousClass1.L$1 = null;
            anonymousClass1.label = 2;
            if (flowCollector.emit(obj2, anonymousClass1) == coroutine_suspended) {
                return coroutine_suspended;
            }
        } else {
            z = false;
        }
        if (z) {
        }
    }
}

