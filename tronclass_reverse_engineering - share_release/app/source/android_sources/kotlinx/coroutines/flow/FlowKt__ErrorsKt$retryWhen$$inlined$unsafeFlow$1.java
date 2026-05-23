package kotlinx.coroutines.flow;

import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlin.coroutines.jvm.internal.Boxing;
import kotlin.coroutines.jvm.internal.ContinuationImpl;
import kotlin.coroutines.jvm.internal.DebugMetadata;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.InlineMarker;
import org.opencv.imgproc.Imgproc;
@Metadata(d1 = {"\u0000\u0019\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002*\u0001\u0000\b\n\u0018\u00002\b\u0012\u0004\u0012\u00028\u00000\u0001J\u001f\u0010\u0002\u001a\u00020\u00032\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00028\u00000\u0005H\u0096@ø\u0001\u0000¢\u0006\u0002\u0010\u0006\u0082\u0002\u0004\n\u0002\b\u0019¨\u0006\u0007¸\u0006\u0000"}, d2 = {"kotlinx/coroutines/flow/internal/SafeCollector_commonKt$unsafeFlow$1", "Lkotlinx/coroutines/flow/Flow;", "collect", "", "collector", "Lkotlinx/coroutines/flow/FlowCollector;", "(Lkotlinx/coroutines/flow/FlowCollector;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "kotlinx-coroutines-core"}, k = 1, mv = {1, 6, 0}, xi = 48)
public final class FlowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1<T> implements Flow<T> {
    final /* synthetic */ Function4 $predicate$inlined;
    final /* synthetic */ Flow $this_retryWhen$inlined;
    @Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
    @DebugMetadata(c = "kotlinx.coroutines.flow.FlowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1", f = "Errors.kt", i = {0, 0, 0, 0, 1, 1, 1, 1}, l = {Imgproc.COLOR_YUV2RGB_YVYU, 119}, m = "collect", n = {"this", "$this$retryWhen_u24lambda_u2d2", "attempt", "shallRetry", "this", "$this$retryWhen_u24lambda_u2d2", "cause", "attempt"}, s = {"L$0", "L$1", "J$0", "I$0", "L$0", "L$1", "L$2", "J$0"})
    public static final class AnonymousClass1 extends ContinuationImpl {
        int I$0;
        long J$0;
        Object L$0;
        Object L$1;
        Object L$2;
        int label;
        /* synthetic */ Object result;

        public AnonymousClass1(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        public final Object invokeSuspend(Object obj) {
            this.result = obj;
            this.label |= Integer.MIN_VALUE;
            return FlowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1.this.collect(null, this);
        }
    }

    /* high-level source view WARN: Removed duplicated region for block: B:19:0x0072 A[RETURN] */
    /* high-level source view WARN: Removed duplicated region for block: B:20:0x0073  */
    /* high-level source view WARN: Removed duplicated region for block: B:23:0x007c  */
    /* high-level source view WARN: Removed duplicated region for block: B:29:0x00a6  */
    /* high-level source view WARN: Removed duplicated region for block: B:30:0x00ab  */
    /* high-level source view WARN: Removed duplicated region for block: B:33:0x00af  */
    /* high-level source view WARN: Removed duplicated region for block: B:35:0x00b2  */
    /* high-level source view WARN: Removed duplicated region for block: B:7:0x0014  */
    /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:22:0x007a -> B:31:0x00ac). Please report as a decompilation issue!!! */
    /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:26:0x009b -> B:27:0x009e). Please report as a decompilation issue!!! */
    @Override // kotlinx.coroutines.flow.Flow
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public Object collect(FlowCollector<? super T> flowCollector, Continuation<? super Unit> continuation) throws Throwable {
        AnonymousClass1 anonymousClass1;
        long j;
        FlowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1<T> flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1;
        int i;
        FlowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1<T> flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$12;
        FlowCollector<? super T> flowCollector2;
        Throwable th;
        Object objCatchImpl;
        if (continuation instanceof AnonymousClass1) {
            anonymousClass1 = (AnonymousClass1) continuation;
            if ((anonymousClass1.label & Integer.MIN_VALUE) != 0) {
                anonymousClass1.label -= Integer.MIN_VALUE;
            } else {
                anonymousClass1 = new AnonymousClass1(continuation);
            }
        }
        Object obj = anonymousClass1.result;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i2 = anonymousClass1.label;
        if (i2 == 0) {
            ResultKt.throwOnFailure(obj);
            j = 0;
            flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1 = this;
            Flow flow = flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1.$this_retryWhen$inlined;
            anonymousClass1.L$0 = flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1;
            anonymousClass1.L$1 = flowCollector;
            anonymousClass1.L$2 = null;
            anonymousClass1.J$0 = j;
            anonymousClass1.I$0 = 0;
            anonymousClass1.label = 1;
            objCatchImpl = FlowKt.catchImpl(flow, flowCollector, anonymousClass1);
            if (objCatchImpl != coroutine_suspended) {
            }
        } else if (i2 == 1) {
            i = anonymousClass1.I$0;
            j = anonymousClass1.J$0;
            flowCollector2 = (FlowCollector) anonymousClass1.L$1;
            flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$12 = (FlowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1) anonymousClass1.L$0;
            ResultKt.throwOnFailure(obj);
            th = (Throwable) obj;
            if (th != null) {
            }
            flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1 = flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$12;
            if (i != 0) {
            }
        } else {
            if (i2 != 2) {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            j = anonymousClass1.J$0;
            Throwable th2 = (Throwable) anonymousClass1.L$2;
            flowCollector2 = (FlowCollector) anonymousClass1.L$1;
            flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$12 = (FlowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1) anonymousClass1.L$0;
            ResultKt.throwOnFailure(obj);
            if (!((Boolean) obj).booleanValue()) {
                j++;
                i = 1;
                flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1 = flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$12;
                if (i != 0) {
                    flowCollector = flowCollector2;
                    Flow flow2 = flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1.$this_retryWhen$inlined;
                    anonymousClass1.L$0 = flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1;
                    anonymousClass1.L$1 = flowCollector;
                    anonymousClass1.L$2 = null;
                    anonymousClass1.J$0 = j;
                    anonymousClass1.I$0 = 0;
                    anonymousClass1.label = 1;
                    objCatchImpl = FlowKt.catchImpl(flow2, flowCollector, anonymousClass1);
                    if (objCatchImpl != coroutine_suspended) {
                        return coroutine_suspended;
                    }
                    flowCollector2 = flowCollector;
                    i = 0;
                    flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$12 = flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1;
                    obj = objCatchImpl;
                    th = (Throwable) obj;
                    if (th != null) {
                        Function4 function4 = flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$12.$predicate$inlined;
                        Long lBoxLong = Boxing.boxLong(j);
                        anonymousClass1.L$0 = flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$12;
                        anonymousClass1.L$1 = flowCollector2;
                        anonymousClass1.L$2 = th;
                        anonymousClass1.J$0 = j;
                        anonymousClass1.label = 2;
                        InlineMarker.mark(6);
                        Object objInvoke = function4.invoke(flowCollector2, th, lBoxLong, anonymousClass1);
                        InlineMarker.mark(7);
                        if (objInvoke == coroutine_suspended) {
                            return coroutine_suspended;
                        }
                        obj = objInvoke;
                        th2 = th;
                        if (!((Boolean) obj).booleanValue()) {
                            throw th2;
                        }
                    }
                    flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1 = flowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$12;
                    if (i != 0) {
                    }
                } else {
                    return Unit.INSTANCE;
                }
            }
        }
    }

    public FlowKt__ErrorsKt$retryWhen$$inlined$unsafeFlow$1(Flow flow, Function4 function4) {
        this.$this_retryWhen$inlined = flow;
        this.$predicate$inlined = function4;
    }
}

