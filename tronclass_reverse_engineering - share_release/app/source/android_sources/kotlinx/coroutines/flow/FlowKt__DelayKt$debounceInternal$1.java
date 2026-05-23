package kotlinx.coroutines.flow;

import androidx.exifinterface.media.ExifInterface;
import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlin.coroutines.jvm.internal.DebugMetadata;
import kotlin.coroutines.jvm.internal.DebugProbesKt;
import kotlin.coroutines.jvm.internal.SuspendLambda;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.DebugKt;
import kotlinx.coroutines.channels.ProduceKt;
import kotlinx.coroutines.channels.ReceiveChannel;
import kotlinx.coroutines.flow.internal.NullSurrogateKt;
import kotlinx.coroutines.internal.Symbol;
import kotlinx.coroutines.selects.SelectBuilderImpl;
@Metadata(d1 = {"\u0000\u0012\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001\"\u0004\b\u0000\u0010\u0002*\u00020\u00032\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0005H\u008a@"}, d2 = {"<anonymous>", "", ExifInterface.GPS_DIRECTION_TRUE, "Lkotlinx/coroutines/CoroutineScope;", "downstream", "Lkotlinx/coroutines/flow/FlowCollector;"}, k = 3, mv = {1, 6, 0}, xi = 48)
@DebugMetadata(c = "kotlinx.coroutines.flow.FlowKt__DelayKt$debounceInternal$1", f = "Delay.kt", i = {0, 0, 0, 0, 1, 1, 1, 1}, l = {222, 355}, m = "invokeSuspend", n = {"downstream", "values", "lastValue", "timeoutMillis", "downstream", "values", "lastValue", "timeoutMillis"}, s = {"L$0", "L$1", "L$2", "L$3", "L$0", "L$1", "L$2", "L$3"})
final class FlowKt__DelayKt$debounceInternal$1<T> extends SuspendLambda implements Function3<CoroutineScope, FlowCollector<? super T>, Continuation<? super Unit>, Object> {
    final /* synthetic */ Flow<T> $this_debounceInternal;
    final /* synthetic */ Function1<T, Long> $timeoutMillisSelector;
    private /* synthetic */ Object L$0;
    /* synthetic */ Object L$1;
    Object L$2;
    Object L$3;
    int label;

    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* high-level source view WARN: Multi-variable type inference failed */
    FlowKt__DelayKt$debounceInternal$1(Function1<? super T, Long> function1, Flow<? extends T> flow, Continuation<? super FlowKt__DelayKt$debounceInternal$1> continuation) {
        super(3, continuation);
        this.$timeoutMillisSelector = function1;
        this.$this_debounceInternal = flow;
    }

    @Override // kotlin.jvm.functions.Function3
    public final Object invoke(CoroutineScope coroutineScope, FlowCollector<? super T> flowCollector, Continuation<? super Unit> continuation) {
        FlowKt__DelayKt$debounceInternal$1 flowKt__DelayKt$debounceInternal$1 = new FlowKt__DelayKt$debounceInternal$1(this.$timeoutMillisSelector, this.$this_debounceInternal, continuation);
        flowKt__DelayKt$debounceInternal$1.L$0 = coroutineScope;
        flowKt__DelayKt$debounceInternal$1.L$1 = flowCollector;
        return flowKt__DelayKt$debounceInternal$1.invokeSuspend(Unit.INSTANCE);
    }

    /* high-level source view WARN: Code restructure failed: missing block: B:59:0x0024, code lost:
    
        if (r15 != r0) goto L7;
     */
    /* high-level source view WARN: Removed duplicated region for block: B:14:0x0070  */
    /* high-level source view WARN: Removed duplicated region for block: B:45:0x00f8 A[Catch: all -> 0x0113, TryCatch #0 {all -> 0x0113, blocks: (B:43:0x00f1, B:45:0x00f8, B:46:0x0104), top: B:57:0x00f1 }] */
    /* high-level source view WARN: Removed duplicated region for block: B:52:0x0121  */
    /* high-level source view WARN: Removed duplicated region for block: B:53:0x0124  */
    /* high-level source view WARN: Removed duplicated region for block: B:54:0x0126 A[RETURN] */
    /* high-level source view WARN: Removed duplicated region for block: B:55:0x0127  */
    @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public final Object invokeSuspend(Object obj) throws Throwable {
        Ref.ObjectRef objectRef;
        FlowCollector flowCollector;
        ReceiveChannel receiveChannel;
        Ref.LongRef longRef;
        Ref.LongRef longRef2;
        Ref.ObjectRef objectRef2;
        ReceiveChannel receiveChannel2;
        FlowCollector flowCollector2;
        Object result;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i = this.label;
        if (i == 0) {
            ResultKt.throwOnFailure(obj);
            CoroutineScope coroutineScope = (CoroutineScope) this.L$0;
            FlowCollector flowCollector3 = (FlowCollector) this.L$1;
            ReceiveChannel receiveChannelProduce$default = ProduceKt.produce$default(coroutineScope, null, 0, new FlowKt__DelayKt$debounceInternal$1$values$1(this.$this_debounceInternal, null), 3, null);
            objectRef = new Ref.ObjectRef();
            flowCollector = flowCollector3;
            receiveChannel = receiveChannelProduce$default;
            if (objectRef.element == NullSurrogateKt.DONE) {
            }
        } else if (i == 1) {
            longRef = (Ref.LongRef) this.L$3;
            objectRef = (Ref.ObjectRef) this.L$2;
            receiveChannel = (ReceiveChannel) this.L$1;
            flowCollector = (FlowCollector) this.L$0;
            ResultKt.throwOnFailure(obj);
            objectRef.element = null;
            longRef2 = longRef;
            objectRef2 = objectRef;
            receiveChannel2 = receiveChannel;
            flowCollector2 = flowCollector;
            if (!DebugKt.getASSERTIONS_ENABLED()) {
            }
            this.L$0 = flowCollector2;
            this.L$1 = receiveChannel2;
            this.L$2 = objectRef2;
            this.L$3 = longRef2;
            this.label = 2;
            FlowKt__DelayKt$debounceInternal$1<T> flowKt__DelayKt$debounceInternal$1 = this;
            SelectBuilderImpl selectBuilderImpl = new SelectBuilderImpl(flowKt__DelayKt$debounceInternal$1);
            SelectBuilderImpl selectBuilderImpl2 = selectBuilderImpl;
            if (objectRef2.element != null) {
            }
            selectBuilderImpl2.invoke(receiveChannel2.getOnReceiveCatching(), new FlowKt__DelayKt$debounceInternal$1$3$2(objectRef2, flowCollector2, null));
            result = selectBuilderImpl.getResult();
            if (result != IntrinsicsKt.getCOROUTINE_SUSPENDED()) {
            }
            flowCollector = flowCollector2;
            receiveChannel = receiveChannel2;
            objectRef = objectRef2;
            if (objectRef.element == NullSurrogateKt.DONE) {
            }
        } else if (i == 2) {
            objectRef2 = (Ref.ObjectRef) this.L$2;
            receiveChannel2 = (ReceiveChannel) this.L$1;
            flowCollector2 = (FlowCollector) this.L$0;
            ResultKt.throwOnFailure(obj);
            flowCollector = flowCollector2;
            receiveChannel = receiveChannel2;
            objectRef = objectRef2;
            if (objectRef.element == NullSurrogateKt.DONE) {
                longRef = new Ref.LongRef();
                if (objectRef.element != null) {
                    Function1<T, Long> function1 = this.$timeoutMillisSelector;
                    Symbol symbol = NullSurrogateKt.NULL;
                    T t = objectRef.element;
                    if (t == symbol) {
                        t = null;
                    }
                    longRef.element = function1.invoke(t).longValue();
                    if (longRef.element < 0) {
                        throw new IllegalArgumentException("Debounce timeout should not be negative".toString());
                    }
                    if (longRef.element == 0) {
                        Symbol symbol2 = NullSurrogateKt.NULL;
                        T t2 = objectRef.element;
                        if (t2 == symbol2) {
                            t2 = null;
                        }
                        this.L$0 = flowCollector;
                        this.L$1 = receiveChannel;
                        this.L$2 = objectRef;
                        this.L$3 = longRef;
                        this.label = 1;
                        if (flowCollector.emit(t2, this) == coroutine_suspended) {
                            return coroutine_suspended;
                        }
                        objectRef.element = null;
                    }
                }
                longRef2 = longRef;
                objectRef2 = objectRef;
                receiveChannel2 = receiveChannel;
                flowCollector2 = flowCollector;
                if (!DebugKt.getASSERTIONS_ENABLED() && objectRef2.element != null && longRef2.element <= 0) {
                    throw new AssertionError();
                }
                this.L$0 = flowCollector2;
                this.L$1 = receiveChannel2;
                this.L$2 = objectRef2;
                this.L$3 = longRef2;
                this.label = 2;
                FlowKt__DelayKt$debounceInternal$1<T> flowKt__DelayKt$debounceInternal$12 = this;
                SelectBuilderImpl selectBuilderImpl3 = new SelectBuilderImpl(flowKt__DelayKt$debounceInternal$12);
                try {
                } catch (Throwable th) {
                    selectBuilderImpl3.handleBuilderException(th);
                }
                SelectBuilderImpl selectBuilderImpl22 = selectBuilderImpl3;
                if (objectRef2.element != null) {
                    selectBuilderImpl22.onTimeout(longRef2.element, new FlowKt__DelayKt$debounceInternal$1$3$1(flowCollector2, objectRef2, null));
                }
                selectBuilderImpl22.invoke(receiveChannel2.getOnReceiveCatching(), new FlowKt__DelayKt$debounceInternal$1$3$2(objectRef2, flowCollector2, null));
                result = selectBuilderImpl3.getResult();
                if (result != IntrinsicsKt.getCOROUTINE_SUSPENDED()) {
                    DebugProbesKt.probeCoroutineSuspended(flowKt__DelayKt$debounceInternal$12);
                    if (result == coroutine_suspended) {
                        return coroutine_suspended;
                    }
                } else if (result == coroutine_suspended) {
                }
                flowCollector = flowCollector2;
                receiveChannel = receiveChannel2;
                objectRef = objectRef2;
                if (objectRef.element == NullSurrogateKt.DONE) {
                    return Unit.INSTANCE;
                }
            }
        } else {
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
    }
}

