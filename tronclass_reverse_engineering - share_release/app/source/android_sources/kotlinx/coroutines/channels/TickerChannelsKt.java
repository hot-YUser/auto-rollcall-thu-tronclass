package kotlinx.coroutines.channels;

import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.EmptyCoroutineContext;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlin.coroutines.jvm.internal.ContinuationImpl;
import kotlin.coroutines.jvm.internal.DebugMetadata;
import kotlin.coroutines.jvm.internal.SuspendLambda;
import kotlin.jvm.functions.Function2;
import kotlin.ranges.RangesKt;
import kotlinx.coroutines.AbstractTimeSource;
import kotlinx.coroutines.AbstractTimeSourceKt;
import kotlinx.coroutines.DelayKt;
import kotlinx.coroutines.Dispatchers;
import kotlinx.coroutines.EventLoop_commonKt;
import kotlinx.coroutines.GlobalScope;
import org.opencv.imgproc.Imgproc;
@Metadata(d1 = {"\u0000*\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a/\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00032\f\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00010\u0006H\u0082@ø\u0001\u0000¢\u0006\u0002\u0010\u0007\u001a/\u0010\b\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00032\f\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00010\u0006H\u0082@ø\u0001\u0000¢\u0006\u0002\u0010\u0007\u001a4\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00010\n2\u0006\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u000b\u001a\u00020\f2\b\b\u0002\u0010\r\u001a\u00020\u000eH\u0007\u0082\u0002\u0004\n\u0002\b\u0019¨\u0006\u000f"}, d2 = {"fixedDelayTicker", "", "delayMillis", "", "initialDelayMillis", "channel", "Lkotlinx/coroutines/channels/SendChannel;", "(JJLkotlinx/coroutines/channels/SendChannel;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "fixedPeriodTicker", "ticker", "Lkotlinx/coroutines/channels/ReceiveChannel;", "context", "Lkotlin/coroutines/CoroutineContext;", "mode", "Lkotlinx/coroutines/channels/TickerMode;", "kotlinx-coroutines-core"}, k = 2, mv = {1, 6, 0}, xi = 48)
public final class TickerChannelsKt {
    @Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
    @DebugMetadata(c = "kotlinx.coroutines.channels.TickerChannelsKt", f = "TickerChannels.kt", i = {0, 0, 1, 1, 2, 2}, l = {106, 108, 109}, m = "fixedDelayTicker", n = {"channel", "delayMillis", "channel", "delayMillis", "channel", "delayMillis"}, s = {"L$0", "J$0", "L$0", "J$0", "L$0", "J$0"})
    static final class AnonymousClass1 extends ContinuationImpl {
        long J$0;
        Object L$0;
        int label;
        /* synthetic */ Object result;

        AnonymousClass1(Continuation<? super AnonymousClass1> continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        public final Object invokeSuspend(Object obj) {
            this.result = obj;
            this.label |= Integer.MIN_VALUE;
            return TickerChannelsKt.fixedDelayTicker(0L, 0L, null, this);
        }
    }
    @Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
    @DebugMetadata(c = "kotlinx.coroutines.channels.TickerChannelsKt", f = "TickerChannels.kt", i = {0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3}, l = {Imgproc.COLOR_YUV2BGR, 88, Imgproc.COLOR_YUV2RGBA_NV12, 96}, m = "fixedPeriodTicker", n = {"channel", "delayMillis", "deadline", "channel", "deadline", "delayNs", "channel", "deadline", "delayNs", "channel", "deadline", "delayNs"}, s = {"L$0", "J$0", "J$1", "L$0", "J$0", "J$1", "L$0", "J$0", "J$1", "L$0", "J$0", "J$1"})
    static final class C01311 extends ContinuationImpl {
        long J$0;
        long J$1;
        Object L$0;
        int label;
        /* synthetic */ Object result;

        C01311(Continuation<? super C01311> continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        public final Object invokeSuspend(Object obj) {
            this.result = obj;
            this.label |= Integer.MIN_VALUE;
            return TickerChannelsKt.fixedPeriodTicker(0L, 0L, null, this);
        }
    }

    public static /* synthetic */ ReceiveChannel ticker$default(long j, long j2, CoroutineContext coroutineContext, TickerMode tickerMode, int i, Object obj) {
        if ((i & 2) != 0) {
            j2 = j;
        }
        if ((i & 4) != 0) {
            coroutineContext = EmptyCoroutineContext.INSTANCE;
        }
        if ((i & 8) != 0) {
            tickerMode = TickerMode.FIXED_PERIOD;
        }
        return ticker(j, j2, coroutineContext, tickerMode);
    }

    public static final ReceiveChannel<Unit> ticker(long j, long j2, CoroutineContext coroutineContext, TickerMode tickerMode) {
        if (j < 0) {
            throw new IllegalArgumentException(("Expected non-negative delay, but has " + j + " ms").toString());
        }
        if (j2 < 0) {
            throw new IllegalArgumentException(("Expected non-negative initial delay, but has " + j2 + " ms").toString());
        }
        return ProduceKt.produce(GlobalScope.INSTANCE, Dispatchers.getUnconfined().plus(coroutineContext), 0, new AnonymousClass3(tickerMode, j, j2, null));
    }
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\b\u0012\u0004\u0012\u00020\u00010\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/channels/ProducerScope;"}, k = 3, mv = {1, 6, 0}, xi = 48)
    @DebugMetadata(c = "kotlinx.coroutines.channels.TickerChannelsKt$ticker$3", f = "TickerChannels.kt", i = {}, l = {Imgproc.COLOR_HLS2BGR_FULL, Imgproc.COLOR_HLS2RGB_FULL}, m = "invokeSuspend", n = {}, s = {})
    static final class AnonymousClass3 extends SuspendLambda implements Function2<ProducerScope<? super Unit>, Continuation<? super Unit>, Object> {
        final /* synthetic */ long $delayMillis;
        final /* synthetic */ long $initialDelayMillis;
        final /* synthetic */ TickerMode $mode;
        private /* synthetic */ Object L$0;
        int label;
        @Metadata(k = 3, mv = {1, 6, 0}, xi = 48)
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[TickerMode.values().length];
                iArr[TickerMode.FIXED_PERIOD.ordinal()] = 1;
                iArr[TickerMode.FIXED_DELAY.ordinal()] = 2;
                $EnumSwitchMapping$0 = iArr;
            }
        }

        /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass3(TickerMode tickerMode, long j, long j2, Continuation<? super AnonymousClass3> continuation) {
            super(2, continuation);
            this.$mode = tickerMode;
            this.$delayMillis = j;
            this.$initialDelayMillis = j2;
        }

        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            AnonymousClass3 anonymousClass3 = new AnonymousClass3(this.$mode, this.$delayMillis, this.$initialDelayMillis, continuation);
            anonymousClass3.L$0 = obj;
            return anonymousClass3;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope<? super Unit> producerScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass3) create(producerScope, continuation)).invokeSuspend(Unit.INSTANCE);
        }

        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        public final Object invokeSuspend(Object obj) throws Throwable {
            Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
            int i = this.label;
            if (i == 0) {
                ResultKt.throwOnFailure(obj);
                ProducerScope producerScope = (ProducerScope) this.L$0;
                int i2 = WhenMappings.$EnumSwitchMapping$0[this.$mode.ordinal()];
                if (i2 == 1) {
                    this.label = 1;
                    if (TickerChannelsKt.fixedPeriodTicker(this.$delayMillis, this.$initialDelayMillis, producerScope.getChannel(), this) == coroutine_suspended) {
                        return coroutine_suspended;
                    }
                } else if (i2 == 2) {
                    this.label = 2;
                    if (TickerChannelsKt.fixedDelayTicker(this.$delayMillis, this.$initialDelayMillis, producerScope.getChannel(), this) == coroutine_suspended) {
                        return coroutine_suspended;
                    }
                }
            } else {
                if (i != 1 && i != 2) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                ResultKt.throwOnFailure(obj);
            }
            return Unit.INSTANCE;
        }
    }
    /* high-level source view WARN: Removed duplicated region for block: B:33:0x00bc A[RETURN] */
    /* high-level source view WARN: Removed duplicated region for block: B:34:0x00bd  */
    /* high-level source view WARN: Removed duplicated region for block: B:37:0x00c9  */
    /* high-level source view WARN: Removed duplicated region for block: B:38:0x00ce  */
    /* high-level source view WARN: Removed duplicated region for block: B:49:0x0115 A[RETURN] */
    /* high-level source view WARN: Removed duplicated region for block: B:7:0x0016  */
    /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:46:0x00fd -> B:31:0x00ab). Please report as a decompilation issue!!! */
    /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:48:0x0113 -> B:15:0x003e). Please report as a decompilation issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public static final Object fixedPeriodTicker(long j, long j2, SendChannel<? super Unit> sendChannel, Continuation<? super Unit> continuation) throws Throwable {
        C01311 c01311;
        SendChannel sendChannel2;
        long j3;
        long j4;
        long jDelayToNanos;
        long j5;
        long j6;
        SendChannel sendChannel3;
        char c;
        long j7;
        long jCoerceAtLeast;
        char c2;
        long jDelayNanosToMillis;
        char c3;
        Unit unit;
        if (continuation instanceof C01311) {
            c01311 = (C01311) continuation;
            if ((c01311.label & Integer.MIN_VALUE) != 0) {
                c01311.label -= Integer.MIN_VALUE;
            } else {
                c01311 = new C01311(continuation);
            }
        }
        Object obj = c01311.result;
        Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
        int i = c01311.label;
        if (i == 0) {
            ResultKt.throwOnFailure(obj);
            AbstractTimeSource timeSource = AbstractTimeSourceKt.getTimeSource();
            long jNanoTime = (timeSource != null ? timeSource.nanoTime() : System.nanoTime()) + EventLoop_commonKt.delayToNanos(j2);
            sendChannel2 = sendChannel;
            c01311.L$0 = sendChannel2;
            j3 = j;
            c01311.J$0 = j3;
            c01311.J$1 = jNanoTime;
            c01311.label = 1;
            if (DelayKt.delay(j2, c01311) == coroutine_suspended) {
                return coroutine_suspended;
            }
            j4 = jNanoTime;
        } else if (i == 1) {
            j4 = c01311.J$1;
            long j8 = c01311.J$0;
            SendChannel sendChannel4 = (SendChannel) c01311.L$0;
            ResultKt.throwOnFailure(obj);
            sendChannel2 = sendChannel4;
            j3 = j8;
        } else if (i == 2) {
            j6 = c01311.J$1;
            j7 = c01311.J$0;
            sendChannel3 = (SendChannel) c01311.L$0;
            ResultKt.throwOnFailure(obj);
            AbstractTimeSource timeSource2 = AbstractTimeSourceKt.getTimeSource();
            if (timeSource2 == null) {
            }
            jCoerceAtLeast = RangesKt.coerceAtLeast(j7 - jNanoTime, 0L);
            if (jCoerceAtLeast != 0) {
            }
            c2 = 3;
            jDelayNanosToMillis = EventLoop_commonKt.delayNanosToMillis(jCoerceAtLeast);
            c01311.L$0 = sendChannel3;
            c01311.J$0 = j7;
            c01311.J$1 = j6;
            c3 = 4;
            c01311.label = 4;
            if (DelayKt.delay(jDelayNanosToMillis, c01311) == coroutine_suspended) {
            }
            long j9 = j6;
            j4 = j7;
            jDelayToNanos = j9;
            sendChannel2 = sendChannel3;
            long j10 = j4 + jDelayToNanos;
            unit = Unit.INSTANCE;
            c01311.L$0 = sendChannel2;
            c01311.J$0 = j10;
            c01311.J$1 = jDelayToNanos;
            c01311.label = 2;
            if (sendChannel2.send(unit, c01311) != coroutine_suspended) {
            }
        } else if (i == 3) {
            j6 = c01311.J$1;
            j5 = c01311.J$0;
            sendChannel3 = (SendChannel) c01311.L$0;
            ResultKt.throwOnFailure(obj);
            c = 3;
            long j11 = j6;
            j4 = j5;
            jDelayToNanos = j11;
            sendChannel2 = sendChannel3;
            long j102 = j4 + jDelayToNanos;
            unit = Unit.INSTANCE;
            c01311.L$0 = sendChannel2;
            c01311.J$0 = j102;
            c01311.J$1 = jDelayToNanos;
            c01311.label = 2;
            if (sendChannel2.send(unit, c01311) != coroutine_suspended) {
            }
        } else if (i == 4) {
            j6 = c01311.J$1;
            j7 = c01311.J$0;
            sendChannel3 = (SendChannel) c01311.L$0;
            ResultKt.throwOnFailure(obj);
            c3 = 4;
            c2 = 3;
            long j92 = j6;
            j4 = j7;
            jDelayToNanos = j92;
            sendChannel2 = sendChannel3;
            long j1022 = j4 + jDelayToNanos;
            unit = Unit.INSTANCE;
            c01311.L$0 = sendChannel2;
            c01311.J$0 = j1022;
            c01311.J$1 = jDelayToNanos;
            c01311.label = 2;
            if (sendChannel2.send(unit, c01311) != coroutine_suspended) {
                return coroutine_suspended;
            }
            sendChannel3 = sendChannel2;
            j6 = jDelayToNanos;
            j7 = j1022;
            AbstractTimeSource timeSource22 = AbstractTimeSourceKt.getTimeSource();
            long jNanoTime2 = timeSource22 == null ? timeSource22.nanoTime() : System.nanoTime();
            jCoerceAtLeast = RangesKt.coerceAtLeast(j7 - jNanoTime2, 0L);
            if (jCoerceAtLeast != 0 && j6 != 0) {
                long j12 = j6 - ((jNanoTime2 - j7) % j6);
                j5 = jNanoTime2 + j12;
                long jDelayNanosToMillis2 = EventLoop_commonKt.delayNanosToMillis(j12);
                c01311.L$0 = sendChannel3;
                c01311.J$0 = j5;
                c01311.J$1 = j6;
                c = 3;
                c01311.label = 3;
                if (DelayKt.delay(jDelayNanosToMillis2, c01311) == coroutine_suspended) {
                    return coroutine_suspended;
                }
                long j112 = j6;
                j4 = j5;
                jDelayToNanos = j112;
                sendChannel2 = sendChannel3;
                long j10222 = j4 + jDelayToNanos;
                unit = Unit.INSTANCE;
                c01311.L$0 = sendChannel2;
                c01311.J$0 = j10222;
                c01311.J$1 = jDelayToNanos;
                c01311.label = 2;
                if (sendChannel2.send(unit, c01311) != coroutine_suspended) {
                }
            } else {
                c2 = 3;
                jDelayNanosToMillis = EventLoop_commonKt.delayNanosToMillis(jCoerceAtLeast);
                c01311.L$0 = sendChannel3;
                c01311.J$0 = j7;
                c01311.J$1 = j6;
                c3 = 4;
                c01311.label = 4;
                if (DelayKt.delay(jDelayNanosToMillis, c01311) == coroutine_suspended) {
                    return coroutine_suspended;
                }
                long j922 = j6;
                j4 = j7;
                jDelayToNanos = j922;
                sendChannel2 = sendChannel3;
                long j102222 = j4 + jDelayToNanos;
                unit = Unit.INSTANCE;
                c01311.L$0 = sendChannel2;
                c01311.J$0 = j102222;
                c01311.J$1 = jDelayToNanos;
                c01311.label = 2;
                if (sendChannel2.send(unit, c01311) != coroutine_suspended) {
                }
            }
        } else {
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
        jDelayToNanos = EventLoop_commonKt.delayToNanos(j3);
        long j1022222 = j4 + jDelayToNanos;
        unit = Unit.INSTANCE;
        c01311.L$0 = sendChannel2;
        c01311.J$0 = j1022222;
        c01311.J$1 = jDelayToNanos;
        c01311.label = 2;
        if (sendChannel2.send(unit, c01311) != coroutine_suspended) {
        }
    }
    /* high-level source view WARN: Removed duplicated region for block: B:24:0x0072 A[RETURN] */
    /* high-level source view WARN: Removed duplicated region for block: B:25:0x0073  */
    /* high-level source view WARN: Removed duplicated region for block: B:28:0x0080 A[RETURN] */
    /* high-level source view WARN: Removed duplicated region for block: B:7:0x0014  */
    /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:27:0x007e -> B:14:0x0035). Please report as a decompilation issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public static final Object fixedDelayTicker(long j, long j2, SendChannel<? super Unit> sendChannel, Continuation<? super Unit> continuation) throws Throwable {
        AnonymousClass1 anonymousClass1;
        SendChannel<? super Unit> sendChannel2;
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
        if (i == 0) {
            ResultKt.throwOnFailure(obj);
            anonymousClass1.L$0 = sendChannel;
            anonymousClass1.J$0 = j;
            anonymousClass1.label = 1;
            if (DelayKt.delay(j2, anonymousClass1) == coroutine_suspended) {
                return coroutine_suspended;
            }
        } else if (i == 1) {
            j = anonymousClass1.J$0;
            sendChannel = (SendChannel) anonymousClass1.L$0;
            ResultKt.throwOnFailure(obj);
        } else if (i == 2) {
            j = anonymousClass1.J$0;
            sendChannel2 = (SendChannel) anonymousClass1.L$0;
            ResultKt.throwOnFailure(obj);
            anonymousClass1.L$0 = sendChannel2;
            anonymousClass1.J$0 = j;
            anonymousClass1.label = 3;
            if (DelayKt.delay(j, anonymousClass1) == coroutine_suspended) {
                return coroutine_suspended;
            }
            sendChannel = sendChannel2;
        } else {
            if (i != 3) {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            j = anonymousClass1.J$0;
            sendChannel2 = (SendChannel) anonymousClass1.L$0;
            ResultKt.throwOnFailure(obj);
            sendChannel = sendChannel2;
        }
        Unit unit = Unit.INSTANCE;
        anonymousClass1.L$0 = sendChannel;
        anonymousClass1.J$0 = j;
        anonymousClass1.label = 2;
        if (sendChannel.send(unit, anonymousClass1) != coroutine_suspended) {
            return coroutine_suspended;
        }
        sendChannel2 = sendChannel;
        anonymousClass1.L$0 = sendChannel2;
        anonymousClass1.J$0 = j;
        anonymousClass1.label = 3;
        if (DelayKt.delay(j, anonymousClass1) == coroutine_suspended) {
        }
        sendChannel = sendChannel2;
        Unit unit2 = Unit.INSTANCE;
        anonymousClass1.L$0 = sendChannel;
        anonymousClass1.J$0 = j;
        anonymousClass1.label = 2;
        if (sendChannel.send(unit2, anonymousClass1) != coroutine_suspended) {
        }
    }
}

