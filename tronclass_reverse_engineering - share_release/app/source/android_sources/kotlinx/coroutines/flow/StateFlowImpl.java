package kotlinx.coroutines.flow;

import androidx.exifinterface.media.ExifInterface;
import java.util.List;
import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlin.coroutines.jvm.internal.ContinuationImpl;
import kotlin.coroutines.jvm.internal.DebugMetadata;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.JobKt;
import kotlinx.coroutines.channels.BufferOverflow;
import kotlinx.coroutines.flow.internal.AbstractSharedFlow;
import kotlinx.coroutines.flow.internal.AbstractSharedFlowSlot;
import kotlinx.coroutines.flow.internal.FusibleFlow;
import kotlinx.coroutines.flow.internal.NullSurrogateKt;
import kotlinx.coroutines.internal.Symbol;
import org.opencv.videoio.Videoio;
@Metadata(d1 = {"\u0000p\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0001\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0011\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010 \n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\b\u0002\u0018\u0000*\u0004\b\u0000\u0010\u00012\b\u0012\u0004\u0012\u00020\u0010062\b\u0012\u0004\u0012\u00028\u0000072\b\u0012\u0004\u0012\u00028\u0000082\b\u0012\u0004\u0012\u00028\u000009B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J!\u0010\t\u001a\u00020\b2\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00028\u00000\u0006H\u0096@ø\u0001\u0000¢\u0006\u0004\b\t\u0010\nJ\u001f\u0010\u000e\u001a\u00020\r2\u0006\u0010\u000b\u001a\u00028\u00002\u0006\u0010\f\u001a\u00028\u0000H\u0016¢\u0006\u0004\b\u000e\u0010\u000fJ\u000f\u0010\u0011\u001a\u00020\u0010H\u0014¢\u0006\u0004\b\u0011\u0010\u0012J\u001f\u0010\u0016\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00100\u00152\u0006\u0010\u0014\u001a\u00020\u0013H\u0014¢\u0006\u0004\b\u0016\u0010\u0017J\u001b\u0010\u001a\u001a\u00020\u00192\u0006\u0010\u0018\u001a\u00028\u0000H\u0096@ø\u0001\u0000¢\u0006\u0004\b\u001a\u0010\u001bJ-\u0010\"\u001a\b\u0012\u0004\u0012\u00028\u00000!2\u0006\u0010\u001d\u001a\u00020\u001c2\u0006\u0010\u001e\u001a\u00020\u00132\u0006\u0010 \u001a\u00020\u001fH\u0016¢\u0006\u0004\b\"\u0010#J\u000f\u0010$\u001a\u00020\u0019H\u0016¢\u0006\u0004\b$\u0010%J\u0017\u0010&\u001a\u00020\r2\u0006\u0010\u0018\u001a\u00028\u0000H\u0016¢\u0006\u0004\b&\u0010'J!\u0010*\u001a\u00020\r2\b\u0010(\u001a\u0004\u0018\u00010\u00022\u0006\u0010)\u001a\u00020\u0002H\u0002¢\u0006\u0004\b*\u0010\u000fR\u001a\u0010.\u001a\b\u0012\u0004\u0012\u00028\u00000+8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b,\u0010-R\u0016\u0010/\u001a\u00020\u00138\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b/\u00100R*\u0010\u0018\u001a\u00028\u00002\u0006\u0010\u0018\u001a\u00028\u00008V@VX\u0096\u000e¢\u0006\u0012\u0012\u0004\b4\u0010%\u001a\u0004\b1\u00102\"\u0004\b3\u0010\u0005\u0082\u0002\u0004\n\u0002\b\u0019¨\u00065"}, d2 = {"Lkotlinx/coroutines/flow/StateFlowImpl;", ExifInterface.GPS_DIRECTION_TRUE, "", "initialState", "<init>", "(Ljava/lang/Object;)V", "Lkotlinx/coroutines/flow/FlowCollector;", "collector", "", "collect", "(Lkotlinx/coroutines/flow/FlowCollector;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "expect", "update", "", "compareAndSet", "(Ljava/lang/Object;Ljava/lang/Object;)Z", "Lkotlinx/coroutines/flow/StateFlowSlot;", "createSlot", "()Lkotlinx/coroutines/flow/StateFlowSlot;", "", "size", "", "createSlotArray", "(I)[Lkotlinx/coroutines/flow/StateFlowSlot;", "value", "", "emit", "(Ljava/lang/Object;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lkotlin/coroutines/CoroutineContext;", "context", "capacity", "Lkotlinx/coroutines/channels/BufferOverflow;", "onBufferOverflow", "Lkotlinx/coroutines/flow/Flow;", "fuse", "(Lkotlin/coroutines/CoroutineContext;ILkotlinx/coroutines/channels/BufferOverflow;)Lkotlinx/coroutines/flow/Flow;", "resetReplayCache", "()V", "tryEmit", "(Ljava/lang/Object;)Z", "expectedState", "newState", "updateState", "", "getReplayCache", "()Ljava/util/List;", "replayCache", "sequence", "I", "getValue", "()Ljava/lang/Object;", "setValue", "getValue$annotations", "kotlinx-coroutines-core", "Lkotlinx/coroutines/flow/internal/AbstractSharedFlow;", "Lkotlinx/coroutines/flow/MutableStateFlow;", "Lkotlinx/coroutines/flow/CancellableFlow;", "Lkotlinx/coroutines/flow/internal/FusibleFlow;"}, k = 1, mv = {1, 6, 0}, xi = 48)
final class StateFlowImpl<T> extends AbstractSharedFlow<StateFlowSlot> implements MutableStateFlow<T>, CancellableFlow<T>, FusibleFlow<T> {
    private volatile /* synthetic */ Object _state;
    private int sequence;
    @Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
    @DebugMetadata(c = "kotlinx.coroutines.flow.StateFlowImpl", f = "StateFlow.kt", i = {0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2}, l = {386, 398, Videoio.CAP_PROP_XI_OFFSET_Y}, m = "collect", n = {"this", "collector", "slot", "this", "collector", "slot", "collectorJob", "newState", "this", "collector", "slot", "collectorJob", "oldState"}, s = {"L$0", "L$1", "L$2", "L$0", "L$1", "L$2", "L$3", "L$4", "L$0", "L$1", "L$2", "L$3", "L$4"})
    static final class AnonymousClass1 extends ContinuationImpl {
        Object L$0;
        Object L$1;
        Object L$2;
        Object L$3;
        Object L$4;
        int label;
        /* synthetic */ Object result;
        final /* synthetic */ StateFlowImpl<T> this$0;

        /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(StateFlowImpl<T> stateFlowImpl, Continuation<? super AnonymousClass1> continuation) {
            super(continuation);
            this.this$0 = stateFlowImpl;
        }

        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        public final Object invokeSuspend(Object obj) {
            this.result = obj;
            this.label |= Integer.MIN_VALUE;
            return this.this$0.collect(null, this);
        }
    }

    public static /* synthetic */ void getValue$annotations() {
    }

    public StateFlowImpl(Object obj) {
        this._state = obj;
    }

    @Override // kotlinx.coroutines.flow.MutableStateFlow, kotlinx.coroutines.flow.StateFlow
    public T getValue() {
        Symbol symbol = NullSurrogateKt.NULL;
        T t = (T) this._state;
        if (t == symbol) {
            return null;
        }
        return t;
    }

    @Override // kotlinx.coroutines.flow.MutableStateFlow
    public void setValue(T t) {
        if (t == null) {
            t = (T) NullSurrogateKt.NULL;
        }
        updateState(null, t);
    }

    @Override // kotlinx.coroutines.flow.MutableStateFlow
    public boolean compareAndSet(T expect, T update) {
        if (expect == null) {
            expect = (T) NullSurrogateKt.NULL;
        }
        if (update == null) {
            update = (T) NullSurrogateKt.NULL;
        }
        return updateState(expect, update);
    }

    private final boolean updateState(Object expectedState, Object newState) {
        int i;
        StateFlowSlot[] slots;
        getSlots();
        synchronized (this) {
            Object obj = this._state;
            if (expectedState != null && !Intrinsics.areEqual(obj, expectedState)) {
                return false;
            }
            if (Intrinsics.areEqual(obj, newState)) {
                return true;
            }
            this._state = newState;
            int i2 = this.sequence;
            if ((i2 & 1) == 0) {
                int i3 = i2 + 1;
                this.sequence = i3;
                StateFlowSlot[] slots2 = getSlots();
                Unit unit = Unit.INSTANCE;
                while (true) {
                    StateFlowSlot[] stateFlowSlotArr = slots2;
                    if (stateFlowSlotArr != null) {
                        for (StateFlowSlot stateFlowSlot : stateFlowSlotArr) {
                            if (stateFlowSlot != null) {
                                stateFlowSlot.makePending();
                            }
                        }
                    }
                    synchronized (this) {
                        i = this.sequence;
                        if (i == i3) {
                            this.sequence = i3 + 1;
                            return true;
                        }
                        slots = getSlots();
                        Unit unit2 = Unit.INSTANCE;
                    }
                    slots2 = slots;
                    i3 = i;
                }
            } else {
                this.sequence = i2 + 2;
                return true;
            }
        }
    }

    @Override // kotlinx.coroutines.flow.SharedFlow
    public List<T> getReplayCache() {
        return CollectionsKt.listOf(getValue());
    }

    @Override // kotlinx.coroutines.flow.MutableSharedFlow
    public boolean tryEmit(T value) {
        setValue(value);
        return true;
    }

    @Override // kotlinx.coroutines.flow.MutableSharedFlow, kotlinx.coroutines.flow.FlowCollector
    public Object emit(T t, Continuation<? super Unit> continuation) {
        setValue(t);
        return Unit.INSTANCE;
    }

    @Override // kotlinx.coroutines.flow.MutableSharedFlow
    public void resetReplayCache() {
        throw new UnsupportedOperationException("MutableStateFlow.resetReplayCache is not supported");
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Path cross not found for [B:38:0x00b2, B:40:0x00b8], limit reached: 57 */
    /* high-level source view WARN: Path cross not found for [B:40:0x00b8, B:38:0x00b2], limit reached: 57 */
    /* high-level source view WARN: Removed duplicated region for block: B:36:0x00ad A[Catch: all -> 0x0074, TryCatch #0 {all -> 0x0074, blocks: (B:14:0x003f, B:34:0x00a9, B:36:0x00ad, B:38:0x00b2, B:48:0x00d3, B:50:0x00d9, B:40:0x00b8, B:44:0x00bf, B:19:0x005d, B:22:0x0070, B:33:0x0098), top: B:57:0x0025 }] */
    /* high-level source view WARN: Removed duplicated region for block: B:38:0x00b2 A[Catch: all -> 0x0074, TryCatch #0 {all -> 0x0074, blocks: (B:14:0x003f, B:34:0x00a9, B:36:0x00ad, B:38:0x00b2, B:48:0x00d3, B:50:0x00d9, B:40:0x00b8, B:44:0x00bf, B:19:0x005d, B:22:0x0070, B:33:0x0098), top: B:57:0x0025 }] */
    /* high-level source view WARN: Removed duplicated region for block: B:42:0x00bc  */
    /* high-level source view WARN: Removed duplicated region for block: B:43:0x00be  */
    /* high-level source view WARN: Removed duplicated region for block: B:46:0x00d1 A[RETURN] */
    /* high-level source view WARN: Removed duplicated region for block: B:47:0x00d2  */
    /* high-level source view WARN: Removed duplicated region for block: B:50:0x00d9 A[Catch: all -> 0x0074, TRY_LEAVE, TryCatch #0 {all -> 0x0074, blocks: (B:14:0x003f, B:34:0x00a9, B:36:0x00ad, B:38:0x00b2, B:48:0x00d3, B:50:0x00d9, B:40:0x00b8, B:44:0x00bf, B:19:0x005d, B:22:0x0070, B:33:0x0098), top: B:57:0x0025 }] */
    /* high-level source view WARN: Removed duplicated region for block: B:7:0x0014  */
    /* high-level source view WARN: Type inference failed for: r6v0 */
    /* high-level source view WARN: Type inference failed for: r6v1 */
    /* high-level source view WARN: Type inference failed for: r6v15 */
    /* high-level source view WARN: Type inference failed for: r6v16 */
    /* high-level source view WARN: Type inference failed for: r6v17 */
    /* high-level source view WARN: Type inference failed for: r6v18 */
    /* high-level source view WARN: Type inference failed for: r6v19 */
    /* high-level source view WARN: Type inference failed for: r6v2 */
    /* high-level source view WARN: Type inference failed for: r6v20 */
    /* high-level source view WARN: Type inference failed for: r6v21 */
    /* high-level source view WARN: Type inference failed for: r6v4 */
    /* high-level source view WARN: Type inference failed for: r6v7, types: [java.lang.Object, kotlinx.coroutines.flow.StateFlowSlot] */
    /* high-level source view WARN: Type inference failed for: r6v8, types: [java.lang.Object] */
    /* high-level source view WARN: Type inference failed for: r7v0 */
    /* high-level source view WARN: Type inference failed for: r7v1, types: [java.lang.Object] */
    /* high-level source view WARN: Type inference failed for: r7v10 */
    /* high-level source view WARN: Type inference failed for: r7v11 */
    /* high-level source view WARN: Type inference failed for: r7v12 */
    /* high-level source view WARN: Type inference failed for: r7v2, types: [java.lang.Object, kotlinx.coroutines.flow.FlowCollector] */
    /* high-level source view WARN: Type inference failed for: r7v7 */
    /* high-level source view WARN: Type inference failed for: r7v8 */
    /* high-level source view WARN: Type inference failed for: r7v9 */
    /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:49:0x00d7 -> B:34:0x00a9). Please report as a decompilation issue!!! */
    /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:51:0x00e9 -> B:34:0x00a9). Please report as a decompilation issue!!! */
    @Override // kotlinx.coroutines.flow.SharedFlow, kotlinx.coroutines.flow.Flow
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public Object collect(FlowCollector<? super T> flowCollector, Continuation<?> continuation) throws Throwable {
        AnonymousClass1 anonymousClass1;
        StateFlowImpl<T> stateFlowImpl;
        StateFlowSlot stateFlowSlot;
        ?? r7;
        Job job;
        Object obj;
        ?? r72;
        ?? r6;
        boolean zTakePending;
        Object obj2;
        if (continuation instanceof AnonymousClass1) {
            anonymousClass1 = (AnonymousClass1) continuation;
            if ((anonymousClass1.label & Integer.MIN_VALUE) != 0) {
                anonymousClass1.label -= Integer.MIN_VALUE;
            } else {
                anonymousClass1 = new AnonymousClass1(this, continuation);
            }
        }
        Object obj3 = anonymousClass1.result;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i = anonymousClass1.label;
        ?? r62 = 1;
        try {
            if (i == 0) {
                ResultKt.throwOnFailure(obj3);
                StateFlowSlot stateFlowSlotAllocateSlot = allocateSlot();
                try {
                    if (flowCollector instanceof SubscribedFlowCollector) {
                        anonymousClass1.L$0 = this;
                        anonymousClass1.L$1 = flowCollector;
                        anonymousClass1.L$2 = stateFlowSlotAllocateSlot;
                        anonymousClass1.label = 1;
                        if (((SubscribedFlowCollector) flowCollector).onSubscription(anonymousClass1) == coroutine_suspended) {
                            return coroutine_suspended;
                        }
                    }
                    stateFlowImpl = this;
                    stateFlowSlot = stateFlowSlotAllocateSlot;
                } catch (Throwable th) {
                    th = th;
                    stateFlowImpl = this;
                    r62 = stateFlowSlotAllocateSlot;
                    stateFlowImpl.freeSlot((AbstractSharedFlowSlot) r62);
                    throw th;
                }
            } else if (i == 1) {
                StateFlowSlot stateFlowSlot2 = (StateFlowSlot) anonymousClass1.L$2;
                flowCollector = (FlowCollector) anonymousClass1.L$1;
                stateFlowImpl = (StateFlowImpl) anonymousClass1.L$0;
                ResultKt.throwOnFailure(obj3);
                stateFlowSlot = stateFlowSlot2;
            } else if (i == 2) {
                obj = anonymousClass1.L$4;
                job = (Job) anonymousClass1.L$3;
                StateFlowSlot stateFlowSlot3 = (StateFlowSlot) anonymousClass1.L$2;
                FlowCollector flowCollector2 = (FlowCollector) anonymousClass1.L$1;
                stateFlowImpl = (StateFlowImpl) anonymousClass1.L$0;
                ResultKt.throwOnFailure(obj3);
                r6 = stateFlowSlot3;
                r72 = flowCollector2;
                zTakePending = r6.takePending();
                r62 = r6;
                r7 = r72;
                if (!zTakePending) {
                }
                Object obj4 = stateFlowImpl._state;
                if (job != null) {
                }
                if (obj != null) {
                }
                if (obj4 != NullSurrogateKt.NULL) {
                }
                anonymousClass1.L$0 = stateFlowImpl;
                anonymousClass1.L$1 = r7;
                anonymousClass1.L$2 = r62;
                anonymousClass1.L$3 = job;
                anonymousClass1.L$4 = obj4;
                anonymousClass1.label = 2;
                if (r7.emit(obj2, anonymousClass1) != coroutine_suspended) {
                }
            } else if (i == 3) {
                obj = anonymousClass1.L$4;
                job = (Job) anonymousClass1.L$3;
                StateFlowSlot stateFlowSlot4 = (StateFlowSlot) anonymousClass1.L$2;
                FlowCollector flowCollector3 = (FlowCollector) anonymousClass1.L$1;
                stateFlowImpl = (StateFlowImpl) anonymousClass1.L$0;
                ResultKt.throwOnFailure(obj3);
                r62 = stateFlowSlot4;
                r7 = flowCollector3;
                Object obj42 = stateFlowImpl._state;
                if (job != null) {
                    JobKt.ensureActive(job);
                }
                if (obj != null) {
                    r6 = r62;
                    r72 = r7;
                    if (!Intrinsics.areEqual(obj, obj42)) {
                    }
                    zTakePending = r6.takePending();
                    r62 = r6;
                    r7 = r72;
                    if (!zTakePending) {
                        anonymousClass1.L$0 = stateFlowImpl;
                        anonymousClass1.L$1 = r72;
                        anonymousClass1.L$2 = r6;
                        anonymousClass1.L$3 = job;
                        anonymousClass1.L$4 = obj;
                        anonymousClass1.label = 3;
                        Object objAwaitPending = r6.awaitPending(anonymousClass1);
                        r62 = r6;
                        r7 = r72;
                        if (objAwaitPending == coroutine_suspended) {
                            return coroutine_suspended;
                        }
                    }
                    Object obj422 = stateFlowImpl._state;
                    if (job != null) {
                    }
                    if (obj != null) {
                    }
                }
                obj2 = obj422 != NullSurrogateKt.NULL ? null : obj422;
                anonymousClass1.L$0 = stateFlowImpl;
                anonymousClass1.L$1 = r7;
                anonymousClass1.L$2 = r62;
                anonymousClass1.L$3 = job;
                anonymousClass1.L$4 = obj422;
                anonymousClass1.label = 2;
                if (r7.emit(obj2, anonymousClass1) != coroutine_suspended) {
                    return coroutine_suspended;
                }
                obj = obj422;
                r6 = r62;
                r72 = r7;
                zTakePending = r6.takePending();
                r62 = r6;
                r7 = r72;
                if (!zTakePending) {
                }
                Object obj4222 = stateFlowImpl._state;
                if (job != null) {
                }
                if (obj != null) {
                }
                if (obj4222 != NullSurrogateKt.NULL) {
                }
                anonymousClass1.L$0 = stateFlowImpl;
                anonymousClass1.L$1 = r7;
                anonymousClass1.L$2 = r62;
                anonymousClass1.L$3 = job;
                anonymousClass1.L$4 = obj4222;
                anonymousClass1.label = 2;
                if (r7.emit(obj2, anonymousClass1) != coroutine_suspended) {
                }
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            r7 = flowCollector;
            job = (Job) anonymousClass1.getContext().get(Job.INSTANCE);
            obj = null;
            r62 = stateFlowSlot;
            Object obj42222 = stateFlowImpl._state;
            if (job != null) {
            }
            if (obj != null) {
            }
            if (obj42222 != NullSurrogateKt.NULL) {
            }
            anonymousClass1.L$0 = stateFlowImpl;
            anonymousClass1.L$1 = r7;
            anonymousClass1.L$2 = r62;
            anonymousClass1.L$3 = job;
            anonymousClass1.L$4 = obj42222;
            anonymousClass1.label = 2;
            if (r7.emit(obj2, anonymousClass1) != coroutine_suspended) {
            }
        } catch (Throwable th2) {
            th = th2;
        }
    }
    @Override // kotlinx.coroutines.flow.internal.AbstractSharedFlow
    public StateFlowSlot createSlot() {
        return new StateFlowSlot();
    }
    @Override // kotlinx.coroutines.flow.internal.AbstractSharedFlow
    public StateFlowSlot[] createSlotArray(int size) {
        return new StateFlowSlot[size];
    }

    @Override // kotlinx.coroutines.flow.internal.FusibleFlow
    public Flow<T> fuse(CoroutineContext context, int capacity, BufferOverflow onBufferOverflow) {
        return StateFlowKt.fuseStateFlow(this, context, capacity, onBufferOverflow);
    }
}

