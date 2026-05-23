package kotlinx.coroutines.flow;

import androidx.exifinterface.media.ExifInterface;
import kotlin.Deprecated;
import kotlin.DeprecationLevel;
import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.channels.BroadcastChannel;
import kotlinx.coroutines.channels.ChannelResult;
import kotlinx.coroutines.channels.ChannelsKt;
import kotlinx.coroutines.channels.ReceiveChannel;
import kotlinx.coroutines.flow.internal.ChannelFlowKt;
@Metadata(d1 = {"\u00000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a\u001e\u0010\u0000\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0001\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u0003H\u0007\u001a\u001c\u0010\u0004\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0001\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u0005\u001a/\u0010\u0006\u001a\u00020\u0007\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\b2\f\u0010\t\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0005H\u0086@ø\u0001\u0000¢\u0006\u0002\u0010\n\u001a9\u0010\u000b\u001a\u00020\u0007\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\b2\f\u0010\t\u001a\b\u0012\u0004\u0012\u0002H\u00020\u00052\u0006\u0010\f\u001a\u00020\rH\u0082@ø\u0001\u0000¢\u0006\u0004\b\u000e\u0010\u000f\u001a&\u0010\u0010\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0005\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u00012\u0006\u0010\u0011\u001a\u00020\u0012H\u0007\u001a\u001c\u0010\u0013\u001a\b\u0012\u0004\u0012\u0002H\u00020\u0001\"\u0004\b\u0000\u0010\u0002*\b\u0012\u0004\u0012\u0002H\u00020\u0005\u0082\u0002\u0004\n\u0002\b\u0019¨\u0006\u0014"}, d2 = {"asFlow", "Lkotlinx/coroutines/flow/Flow;", ExifInterface.GPS_DIRECTION_TRUE, "Lkotlinx/coroutines/channels/BroadcastChannel;", "consumeAsFlow", "Lkotlinx/coroutines/channels/ReceiveChannel;", "emitAll", "", "Lkotlinx/coroutines/flow/FlowCollector;", "channel", "(Lkotlinx/coroutines/flow/FlowCollector;Lkotlinx/coroutines/channels/ReceiveChannel;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "emitAllImpl", "consume", "", "emitAllImpl$FlowKt__ChannelsKt", "(Lkotlinx/coroutines/flow/FlowCollector;Lkotlinx/coroutines/channels/ReceiveChannel;ZLkotlin/coroutines/Continuation;)Ljava/lang/Object;", "produceIn", "scope", "Lkotlinx/coroutines/CoroutineScope;", "receiveAsFlow", "kotlinx-coroutines-core"}, k = 5, mv = {1, 6, 0}, xi = 48, xs = "kotlinx/coroutines/flow/FlowKt")
final /* synthetic */ class FlowKt__ChannelsKt {
    public static final <T> Object emitAll(FlowCollector<? super T> flowCollector, ReceiveChannel<? extends T> receiveChannel, Continuation<? super Unit> continuation) throws Throwable {
        Object objEmitAllImpl$FlowKt__ChannelsKt = emitAllImpl$FlowKt__ChannelsKt(flowCollector, receiveChannel, true, continuation);
        return objEmitAllImpl$FlowKt__ChannelsKt == IntrinsicsKt.getCOROUTINE_SUSPENDED() ? objEmitAllImpl$FlowKt__ChannelsKt : Unit.INSTANCE;
    }
    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Removed duplicated region for block: B:25:0x006d A[RETURN] */
    /* high-level source view WARN: Removed duplicated region for block: B:26:0x006e  */
    /* high-level source view WARN: Removed duplicated region for block: B:29:0x0077 A[Catch: all -> 0x0057, TRY_LEAVE, TryCatch #0 {all -> 0x0057, blocks: (B:13:0x0034, B:27:0x0071, B:29:0x0077, B:35:0x0085, B:36:0x0086, B:18:0x004d), top: B:46:0x0024 }] */
    /* high-level source view WARN: Removed duplicated region for block: B:36:0x0086 A[Catch: all -> 0x0057, TRY_LEAVE, TryCatch #0 {all -> 0x0057, blocks: (B:13:0x0034, B:27:0x0071, B:29:0x0077, B:35:0x0085, B:36:0x0086, B:18:0x004d), top: B:46:0x0024 }] */
    /* high-level source view WARN: Removed duplicated region for block: B:7:0x0014  */
    /* high-level source view WARN: Type inference failed for: r6v0 */
    /* high-level source view WARN: Type inference failed for: r6v1 */
    /* high-level source view WARN: Type inference failed for: r6v2 */
    /* high-level source view WARN: Type inference failed for: r7v0, types: [kotlinx.coroutines.flow.FlowCollector, kotlinx.coroutines.flow.FlowCollector<? super T>] */
    /* high-level source view WARN: Type inference failed for: r7v1 */
    /* high-level source view WARN: Type inference failed for: r7v16 */
    /* high-level source view WARN: Type inference failed for: r7v17, types: [boolean] */
    /* high-level source view WARN: Type inference failed for: r7v18, types: [boolean] */
    /* high-level source view WARN: Type inference failed for: r7v2 */
    /* high-level source view WARN: Type inference failed for: r7v20 */
    /* high-level source view WARN: Type inference failed for: r7v21 */
    /* high-level source view WARN: Type inference failed for: r7v22 */
    /* high-level source view WARN: Type inference failed for: r7v23 */
    /* high-level source view WARN: Type inference failed for: r7v24 */
    /* high-level source view WARN: Type inference failed for: r7v25 */
    /* high-level source view WARN: Type inference failed for: r7v3, types: [boolean] */
    /* high-level source view WARN: Type inference failed for: r7v5, types: [java.lang.Object] */
    /* high-level source view WARN: Type inference failed for: r7v7 */
    /* high-level source view WARN: Type inference failed for: r7v9 */
    /* high-level source view WARN: Type inference failed for: r9v14 */
    /* high-level source view WARN: Type inference failed for: r9v15 */
    /* high-level source view WARN: Type inference failed for: r9v16 */
    /* high-level source view WARN: Type inference failed for: r9v17 */
    /* high-level source view WARN: Type inference failed for: r9v3, types: [java.lang.Object, kotlinx.coroutines.flow.FlowCollector] */
    /* high-level source view WARN: Type inference failed for: r9v5, types: [boolean] */
    /* high-level source view WARN: Type inference failed for: r9v7 */
    /* high-level source view WARN: Type inference failed for: r9v8 */
    /* high-level source view WARN: Type inference failed for: r9v9 */
    /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:37:0x0096 -> B:14:0x0037). Please report as a decompilation issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public static final <T> Object emitAllImpl$FlowKt__ChannelsKt(FlowCollector<? super T> flowCollector, ReceiveChannel<? extends T> receiveChannel, boolean z, Continuation<? super Unit> continuation) throws Throwable {
        FlowKt__ChannelsKt$emitAllImpl$1 flowKt__ChannelsKt$emitAllImpl$1;
        Object objMo1837receiveCatchingJP2dKIU;
        ?? r9;
        ?? r92;
        ?? r7;
        if (continuation instanceof FlowKt__ChannelsKt$emitAllImpl$1) {
            flowKt__ChannelsKt$emitAllImpl$1 = (FlowKt__ChannelsKt$emitAllImpl$1) continuation;
            if ((flowKt__ChannelsKt$emitAllImpl$1.label & Integer.MIN_VALUE) != 0) {
                flowKt__ChannelsKt$emitAllImpl$1.label -= Integer.MIN_VALUE;
            } else {
                flowKt__ChannelsKt$emitAllImpl$1 = new FlowKt__ChannelsKt$emitAllImpl$1(continuation);
            }
        }
        Object obj = flowKt__ChannelsKt$emitAllImpl$1.result;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i = flowKt__ChannelsKt$emitAllImpl$1.label;
        try {
        } catch (Throwable th) {
            th = th;
        }
        if (i != 0) {
            if (i == 1) {
                boolean z2 = (FlowCollector<? super T>) flowKt__ChannelsKt$emitAllImpl$1.Z$0;
                receiveChannel = (ReceiveChannel) flowKt__ChannelsKt$emitAllImpl$1.L$1;
                FlowCollector flowCollector2 = (FlowCollector) flowKt__ChannelsKt$emitAllImpl$1.L$0;
                ResultKt.throwOnFailure(obj);
                objMo1837receiveCatchingJP2dKIU = ((ChannelResult) obj).getHolder();
                flowCollector = z2;
                r9 = flowCollector2;
                if (!ChannelResult.m1852isClosedimpl(objMo1837receiveCatchingJP2dKIU)) {
                }
                throw th;
            }
            if (i == 2) {
                boolean z3 = (FlowCollector<? super T>) flowKt__ChannelsKt$emitAllImpl$1.Z$0;
                receiveChannel = (ReceiveChannel) flowKt__ChannelsKt$emitAllImpl$1.L$1;
                FlowCollector flowCollector3 = (FlowCollector) flowKt__ChannelsKt$emitAllImpl$1.L$0;
                ResultKt.throwOnFailure(obj);
                ?? r72 = z3;
                ?? r93 = flowCollector3;
                ?? r6 = r93;
                r92 = r72;
                r7 = (FlowCollector<? super T>) r6;
                try {
                    flowKt__ChannelsKt$emitAllImpl$1.L$0 = r7;
                    flowKt__ChannelsKt$emitAllImpl$1.L$1 = receiveChannel;
                    flowKt__ChannelsKt$emitAllImpl$1.Z$0 = r92;
                    flowKt__ChannelsKt$emitAllImpl$1.label = 1;
                    objMo1837receiveCatchingJP2dKIU = receiveChannel.mo1837receiveCatchingJP2dKIU(flowKt__ChannelsKt$emitAllImpl$1);
                } catch (Throwable th2) {
                    ?? r62 = r92;
                    th = th2;
                    flowCollector = r62 == true ? 1 : 0;
                }
                if (objMo1837receiveCatchingJP2dKIU == coroutine_suspended) {
                    return coroutine_suspended;
                }
                ?? r63 = r92;
                r9 = r7;
                flowCollector = (FlowCollector<? super T>) (r63 == true ? 1 : 0 ? 1 : 0);
                if (!ChannelResult.m1852isClosedimpl(objMo1837receiveCatchingJP2dKIU)) {
                    Throwable thM1848exceptionOrNullimpl = ChannelResult.m1848exceptionOrNullimpl(objMo1837receiveCatchingJP2dKIU);
                    if (thM1848exceptionOrNullimpl != null) {
                        throw thM1848exceptionOrNullimpl;
                    }
                    if (flowCollector != 0) {
                        ChannelsKt.cancelConsumed(receiveChannel, null);
                    }
                    return Unit.INSTANCE;
                }
                Object objM1850getOrThrowimpl = ChannelResult.m1850getOrThrowimpl(objMo1837receiveCatchingJP2dKIU);
                flowKt__ChannelsKt$emitAllImpl$1.L$0 = r9;
                flowKt__ChannelsKt$emitAllImpl$1.L$1 = receiveChannel;
                flowKt__ChannelsKt$emitAllImpl$1.Z$0 = (boolean) flowCollector;
                flowKt__ChannelsKt$emitAllImpl$1.label = 2;
                Object objEmit = r9.emit(objM1850getOrThrowimpl, flowKt__ChannelsKt$emitAllImpl$1);
                r72 = flowCollector;
                r93 = r9;
                if (objEmit == coroutine_suspended) {
                    return coroutine_suspended;
                }
                ?? r64 = r93;
                r92 = r72;
                r7 = (FlowCollector<? super T>) r64;
                flowKt__ChannelsKt$emitAllImpl$1.L$0 = r7;
                flowKt__ChannelsKt$emitAllImpl$1.L$1 = receiveChannel;
                flowKt__ChannelsKt$emitAllImpl$1.Z$0 = r92;
                flowKt__ChannelsKt$emitAllImpl$1.label = 1;
                objMo1837receiveCatchingJP2dKIU = receiveChannel.mo1837receiveCatchingJP2dKIU(flowKt__ChannelsKt$emitAllImpl$1);
                if (objMo1837receiveCatchingJP2dKIU == coroutine_suspended) {
                }
                try {
                    throw th;
                } catch (Throwable th3) {
                    if (flowCollector != 0) {
                        ChannelsKt.cancelConsumed(receiveChannel, th);
                    }
                    throw th3;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
        ResultKt.throwOnFailure(obj);
        FlowKt.ensureActive(flowCollector);
        r7 = flowCollector;
        r92 = z;
        flowKt__ChannelsKt$emitAllImpl$1.L$0 = r7;
        flowKt__ChannelsKt$emitAllImpl$1.L$1 = receiveChannel;
        flowKt__ChannelsKt$emitAllImpl$1.Z$0 = r92;
        flowKt__ChannelsKt$emitAllImpl$1.label = 1;
        objMo1837receiveCatchingJP2dKIU = receiveChannel.mo1837receiveCatchingJP2dKIU(flowKt__ChannelsKt$emitAllImpl$1);
        if (objMo1837receiveCatchingJP2dKIU == coroutine_suspended) {
        }
    }

    public static final <T> Flow<T> receiveAsFlow(ReceiveChannel<? extends T> receiveChannel) {
        return new ChannelAsFlow(receiveChannel, false, null, 0, null, 28, null);
    }

    public static final <T> Flow<T> consumeAsFlow(ReceiveChannel<? extends T> receiveChannel) {
        return new ChannelAsFlow(receiveChannel, true, null, 0, null, 28, null);
    }

    public static final <T> ReceiveChannel<T> produceIn(Flow<? extends T> flow, CoroutineScope coroutineScope) {
        return ChannelFlowKt.asChannelFlow(flow).produceImpl(coroutineScope);
    }

    @Deprecated(level = DeprecationLevel.WARNING, message = "'BroadcastChannel' is obsolete and all corresponding operators are deprecated in the favour of StateFlow and SharedFlow")
    public static final <T> Flow<T> asFlow(final BroadcastChannel<T> broadcastChannel) {
        return new Flow<T>() { // from class: kotlinx.coroutines.flow.FlowKt__ChannelsKt$asFlow$$inlined$unsafeFlow$1
            @Override // kotlinx.coroutines.flow.Flow
            public Object collect(FlowCollector<? super T> flowCollector, Continuation<? super Unit> continuation) {
                Object objEmitAll = FlowKt.emitAll(flowCollector, broadcastChannel.openSubscription(), continuation);
                return objEmitAll == IntrinsicsKt.getCOROUTINE_SUSPENDED() ? objEmitAll : Unit.INSTANCE;
            }
        };
    }
}

