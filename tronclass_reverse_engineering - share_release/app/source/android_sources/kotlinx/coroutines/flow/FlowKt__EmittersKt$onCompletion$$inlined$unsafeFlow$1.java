package kotlinx.coroutines.flow;

import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlin.coroutines.jvm.internal.ContinuationImpl;
import kotlin.coroutines.jvm.internal.DebugMetadata;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.InlineMarker;
import kotlinx.coroutines.flow.internal.SafeCollector;
import org.opencv.imgproc.Imgproc;
@Metadata(d1 = {"\u0000\u0019\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002*\u0001\u0000\b\n\u0018\u00002\b\u0012\u0004\u0012\u00028\u00000\u0001J\u001f\u0010\u0002\u001a\u00020\u00032\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00028\u00000\u0005H\u0096@ø\u0001\u0000¢\u0006\u0002\u0010\u0006\u0082\u0002\u0004\n\u0002\b\u0019¨\u0006\u0007¸\u0006\u0000"}, d2 = {"kotlinx/coroutines/flow/internal/SafeCollector_commonKt$unsafeFlow$1", "Lkotlinx/coroutines/flow/Flow;", "collect", "", "collector", "Lkotlinx/coroutines/flow/FlowCollector;", "(Lkotlinx/coroutines/flow/FlowCollector;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "kotlinx-coroutines-core"}, k = 1, mv = {1, 6, 0}, xi = 48)
public final class FlowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1<T> implements Flow<T> {
    final /* synthetic */ Function3 $action$inlined;
    final /* synthetic */ Flow $this_onCompletion$inlined;
    @Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
    @DebugMetadata(c = "kotlinx.coroutines.flow.FlowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1", f = "Emitters.kt", i = {0, 0, 1, 2}, l = {114, Imgproc.COLOR_YUV2RGBA_YVYU, 128}, m = "collect", n = {"this", "$this$onCompletion_u24lambda_u2d2", "e", "sc"}, s = {"L$0", "L$1", "L$0", "L$0"})
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
            return FlowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1.this.collect(null, this);
        }
    }

    /* high-level source view WARN: Removed duplicated region for block: B:34:0x008b A[RETURN] */
    /* high-level source view WARN: Removed duplicated region for block: B:35:0x008c  */
    /* high-level source view WARN: Removed duplicated region for block: B:46:0x00b2 A[RETURN] */
    /* high-level source view WARN: Removed duplicated region for block: B:56:? A[RETURN, SYNTHETIC] */
    /* high-level source view WARN: Removed duplicated region for block: B:7:0x0014  */
    @Override // kotlinx.coroutines.flow.Flow
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public Object collect(FlowCollector<? super T> flowCollector, Continuation<? super Unit> continuation) throws Throwable {
        AnonymousClass1 anonymousClass1;
        FlowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1<T> flowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1;
        ThrowingCollector throwingCollector;
        Function3 function3;
        SafeCollector safeCollector;
        Throwable th;
        SafeCollector safeCollector2;
        Object objInvoke;
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
        int i = anonymousClass1.label;
        if (i != 0) {
            if (i != 1) {
                if (i == 2) {
                    Throwable th2 = (Throwable) anonymousClass1.L$0;
                    ResultKt.throwOnFailure(obj);
                    throw th2;
                }
                if (i != 3) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                safeCollector2 = (SafeCollector) anonymousClass1.L$0;
                try {
                    ResultKt.throwOnFailure(obj);
                    safeCollector2.releaseIntercepted();
                    return Unit.INSTANCE;
                } catch (Throwable th3) {
                    th = th3;
                    safeCollector2.releaseIntercepted();
                    throw th;
                }
            }
            flowCollector = (FlowCollector) anonymousClass1.L$1;
            flowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1 = (FlowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1) anonymousClass1.L$0;
            try {
                ResultKt.throwOnFailure(obj);
                safeCollector = new SafeCollector(flowCollector, anonymousClass1.getContext());
                try {
                    Function3 function32 = flowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1.$action$inlined;
                    anonymousClass1.L$0 = safeCollector;
                    anonymousClass1.L$1 = null;
                    anonymousClass1.label = 3;
                    InlineMarker.mark(6);
                    objInvoke = function32.invoke(safeCollector, null, anonymousClass1);
                    InlineMarker.mark(7);
                    if (objInvoke != coroutine_suspended) {
                        return coroutine_suspended;
                    }
                    safeCollector2 = safeCollector;
                    safeCollector2.releaseIntercepted();
                    return Unit.INSTANCE;
                } catch (Throwable th4) {
                    th = th4;
                    safeCollector2 = safeCollector;
                    safeCollector2.releaseIntercepted();
                    throw th;
                }
            } catch (Throwable th5) {
                th = th5;
                throwingCollector = new ThrowingCollector(th);
                function3 = flowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1.$action$inlined;
                anonymousClass1.L$0 = th;
                anonymousClass1.L$1 = null;
                anonymousClass1.label = 2;
                if (FlowKt__EmittersKt.invokeSafely$FlowKt__EmittersKt(throwingCollector, function3, th, anonymousClass1) != coroutine_suspended) {
                    return coroutine_suspended;
                }
                throw th;
            }
        }
        ResultKt.throwOnFailure(obj);
        try {
            Flow flow = this.$this_onCompletion$inlined;
            anonymousClass1.L$0 = this;
            anonymousClass1.L$1 = flowCollector;
            anonymousClass1.label = 1;
            if (flow.collect(flowCollector, anonymousClass1) == coroutine_suspended) {
                return coroutine_suspended;
            }
            flowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1 = this;
            safeCollector = new SafeCollector(flowCollector, anonymousClass1.getContext());
            Function3 function322 = flowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1.$action$inlined;
            anonymousClass1.L$0 = safeCollector;
            anonymousClass1.L$1 = null;
            anonymousClass1.label = 3;
            InlineMarker.mark(6);
            objInvoke = function322.invoke(safeCollector, null, anonymousClass1);
            InlineMarker.mark(7);
            if (objInvoke != coroutine_suspended) {
            }
        } catch (Throwable th6) {
            th = th6;
            flowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1 = this;
            throwingCollector = new ThrowingCollector(th);
            function3 = flowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1.$action$inlined;
            anonymousClass1.L$0 = th;
            anonymousClass1.L$1 = null;
            anonymousClass1.label = 2;
            if (FlowKt__EmittersKt.invokeSafely$FlowKt__EmittersKt(throwingCollector, function3, th, anonymousClass1) != coroutine_suspended) {
            }
        }
    }

    public FlowKt__EmittersKt$onCompletion$$inlined$unsafeFlow$1(Flow flow, Function3 function3) {
        this.$this_onCompletion$inlined = flow;
        this.$action$inlined = function3;
    }
}

