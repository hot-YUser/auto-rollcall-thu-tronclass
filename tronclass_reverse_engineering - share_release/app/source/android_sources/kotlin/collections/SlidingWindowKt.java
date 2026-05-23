package kotlin.collections;

import androidx.exifinterface.media.ExifInterface;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlin.coroutines.jvm.internal.DebugMetadata;
import kotlin.coroutines.jvm.internal.RestrictedSuspendLambda;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.RangesKt;
import kotlin.sequences.Sequence;
import kotlin.sequences.SequenceScope;
import kotlin.sequences.SequencesKt;
@Metadata(d1 = {"\u0000*\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010(\n\u0002\u0010 \n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u001a\u0018\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0003H\u0000\u001aH\u0010\u0005\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\b0\u00070\u0006\"\u0004\b\u0000\u0010\b2\f\u0010\t\u001a\b\u0012\u0004\u0012\u0002H\b0\u00062\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00032\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000bH\u0000\u001aD\u0010\r\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\b0\u00070\u000e\"\u0004\b\u0000\u0010\b*\b\u0012\u0004\u0012\u0002H\b0\u000e2\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00032\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000bH\u0000¨\u0006\u000f"}, d2 = {"checkWindowSizeStep", "", "size", "", "step", "windowedIterator", "", "", ExifInterface.GPS_DIRECTION_TRUE, "iterator", "partialWindows", "", "reuseBuffer", "windowedSequence", "Lkotlin/sequences/Sequence;", "kotlin-stdlib"}, k = 2, mv = {1, 8, 0}, xi = 48)
public final class SlidingWindowKt {
    public static final void checkWindowSizeStep(int i, int i2) {
        if (i <= 0 || i2 <= 0) {
            throw new IllegalArgumentException((i != i2 ? "Both size " + i + " and step " + i2 + " must be greater than zero." : "size " + i + " must be greater than zero.").toString());
        }
    }

    public static final <T> Sequence<List<T>> windowedSequence(final Sequence<? extends T> sequence, final int i, final int i2, final boolean z, final boolean z2) {
        Intrinsics.checkNotNullParameter(sequence, "<this>");
        checkWindowSizeStep(i, i2);
        return new Sequence<List<? extends T>>() { // from class: kotlin.collections.SlidingWindowKt$windowedSequence$$inlined$Sequence$1
            @Override // kotlin.sequences.Sequence
            public Iterator<List<? extends T>> iterator() {
                return SlidingWindowKt.windowedIterator(sequence.iterator(), i, i2, z, z2);
            }
        };
    }
    @Metadata(d1 = {"\u0000\u0010\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010 \u0010\u0000\u001a\u00020\u0001\"\u0004\b\u0000\u0010\u0002*\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00020\u00040\u0003H\u008a@"}, d2 = {"<anonymous>", "", ExifInterface.GPS_DIRECTION_TRUE, "Lkotlin/sequences/SequenceScope;", ""}, k = 3, mv = {1, 8, 0}, xi = 48)
    @DebugMetadata(c = "kotlin.collections.SlidingWindowKt$windowedIterator$1", f = "SlidingWindow.kt", i = {0, 0, 0, 2, 2, 3, 3}, l = {34, 40, 49, 55, 58}, m = "invokeSuspend", n = {"$this$iterator", "buffer", "gap", "$this$iterator", "buffer", "$this$iterator", "buffer"}, s = {"L$0", "L$1", "I$0", "L$0", "L$1", "L$0", "L$1"})
    static final class AnonymousClass1<T> extends RestrictedSuspendLambda implements Function2<SequenceScope<? super List<? extends T>>, Continuation<? super Unit>, Object> {
        final /* synthetic */ Iterator<T> $iterator;
        final /* synthetic */ boolean $partialWindows;
        final /* synthetic */ boolean $reuseBuffer;
        final /* synthetic */ int $size;
        final /* synthetic */ int $step;
        int I$0;
        private /* synthetic */ Object L$0;
        Object L$1;
        Object L$2;
        int label;

        /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
        /* high-level source view WARN: Multi-variable type inference failed */
        AnonymousClass1(int i, int i2, Iterator<? extends T> it, boolean z, boolean z2, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.$size = i;
            this.$step = i2;
            this.$iterator = it;
            this.$reuseBuffer = z;
            this.$partialWindows = z2;
        }

        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.$size, this.$step, this.$iterator, this.$reuseBuffer, this.$partialWindows, continuation);
            anonymousClass1.L$0 = obj;
            return anonymousClass1;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(SequenceScope<? super List<? extends T>> sequenceScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(sequenceScope, continuation)).invokeSuspend(Unit.INSTANCE);
        }

        /* high-level source view WARN: Removed duplicated region for block: B:22:0x0080  */
        /* high-level source view WARN: Removed duplicated region for block: B:32:0x00ac  */
        /* high-level source view WARN: Removed duplicated region for block: B:33:0x00b0  */
        /* high-level source view WARN: Removed duplicated region for block: B:43:0x00e0 A[RETURN] */
        /* high-level source view WARN: Removed duplicated region for block: B:47:0x00ef  */
        /* high-level source view WARN: Removed duplicated region for block: B:62:0x0137  */
        /* high-level source view WARN: Removed duplicated region for block: B:65:0x0141  */
        /* high-level source view WARN: Removed duplicated region for block: B:73:0x016b  */
        /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:28:0x00a5 -> B:16:0x0055). Please report as a decompilation issue!!! */
        /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:57:0x012a -> B:59:0x012d). Please report as a decompilation issue!!! */
        /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:70:0x0162 -> B:72:0x0165). Please report as a decompilation issue!!! */
        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        /*
            Code decompiled incorrectly, please refer to instructions dump.
        */
        public final Object invokeSuspend(Object obj) throws Throwable {
            RingBuffer ringBuffer;
            Iterator<T> it;
            SequenceScope sequenceScope;
            SequenceScope sequenceScope2;
            int i;
            ArrayList arrayList;
            Iterator<T> it2;
            int i2;
            RingBuffer ringBuffer2;
            SequenceScope sequenceScope3;
            Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
            int i3 = this.label;
            if (i3 == 0) {
                ResultKt.throwOnFailure(obj);
                SequenceScope sequenceScope4 = (SequenceScope) this.L$0;
                int iCoerceAtMost = RangesKt.coerceAtMost(this.$size, 1024);
                int i4 = this.$step - this.$size;
                if (i4 >= 0) {
                    sequenceScope2 = sequenceScope4;
                    i = 0;
                    arrayList = new ArrayList(iCoerceAtMost);
                    it2 = this.$iterator;
                    i2 = i4;
                    while (it2.hasNext()) {
                    }
                    if (!arrayList.isEmpty()) {
                        this.L$0 = null;
                        this.L$1 = null;
                        this.L$2 = null;
                        this.label = 2;
                        if (sequenceScope2.yield(arrayList, this) == coroutine_suspended) {
                        }
                    }
                    return Unit.INSTANCE;
                }
                ringBuffer = new RingBuffer(iCoerceAtMost);
                it = this.$iterator;
                sequenceScope = sequenceScope4;
                while (it.hasNext()) {
                }
                if (this.$partialWindows) {
                }
                return Unit.INSTANCE;
            }
            if (i3 == 1) {
                i2 = this.I$0;
                it2 = (Iterator) this.L$2;
                arrayList = (ArrayList) this.L$1;
                sequenceScope2 = (SequenceScope) this.L$0;
                ResultKt.throwOnFailure(obj);
                i = i2;
                if (this.$reuseBuffer) {
                    arrayList = new ArrayList(this.$size);
                } else {
                    arrayList.clear();
                }
                i2 = i;
                while (it2.hasNext()) {
                    T next = it2.next();
                    if (i > 0) {
                        i--;
                    } else {
                        arrayList.add(next);
                        if (arrayList.size() == this.$size) {
                            this.L$0 = sequenceScope2;
                            this.L$1 = arrayList;
                            this.L$2 = it2;
                            this.I$0 = i2;
                            this.label = 1;
                            if (sequenceScope2.yield(arrayList, this) == coroutine_suspended) {
                                return coroutine_suspended;
                            }
                            i = i2;
                            if (this.$reuseBuffer) {
                            }
                            i2 = i;
                            while (it2.hasNext()) {
                            }
                        }
                    }
                }
                if (!arrayList.isEmpty() && (this.$partialWindows || arrayList.size() == this.$size)) {
                    this.L$0 = null;
                    this.L$1 = null;
                    this.L$2 = null;
                    this.label = 2;
                    if (sequenceScope2.yield(arrayList, this) == coroutine_suspended) {
                        return coroutine_suspended;
                    }
                }
                return Unit.INSTANCE;
            }
            if (i3 != 2) {
                if (i3 == 3) {
                    it = (Iterator) this.L$2;
                    ringBuffer = (RingBuffer) this.L$1;
                    sequenceScope = (SequenceScope) this.L$0;
                    ResultKt.throwOnFailure(obj);
                    ringBuffer.removeFirst(this.$step);
                    while (it.hasNext()) {
                        ringBuffer.add((Object) it.next());
                        if (ringBuffer.isFull()) {
                            int size = ringBuffer.size();
                            int i5 = this.$size;
                            if (size >= i5) {
                                List arrayList2 = this.$reuseBuffer ? ringBuffer : new ArrayList(ringBuffer);
                                this.L$0 = sequenceScope;
                                this.L$1 = ringBuffer;
                                this.L$2 = it;
                                this.label = 3;
                                if (sequenceScope.yield(arrayList2, this) == coroutine_suspended) {
                                    return coroutine_suspended;
                                }
                                ringBuffer.removeFirst(this.$step);
                                while (it.hasNext()) {
                                }
                            } else {
                                ringBuffer = ringBuffer.expanded(i5);
                            }
                        }
                    }
                    if (this.$partialWindows) {
                        ringBuffer2 = ringBuffer;
                        sequenceScope3 = sequenceScope;
                        if (ringBuffer2.size() <= this.$step) {
                        }
                    }
                    return Unit.INSTANCE;
                }
                if (i3 == 4) {
                    ringBuffer2 = (RingBuffer) this.L$1;
                    sequenceScope3 = (SequenceScope) this.L$0;
                    ResultKt.throwOnFailure(obj);
                    ringBuffer2.removeFirst(this.$step);
                    if (ringBuffer2.size() <= this.$step) {
                        List arrayList3 = this.$reuseBuffer ? ringBuffer2 : new ArrayList(ringBuffer2);
                        this.L$0 = sequenceScope3;
                        this.L$1 = ringBuffer2;
                        this.L$2 = null;
                        this.label = 4;
                        if (sequenceScope3.yield(arrayList3, this) == coroutine_suspended) {
                            return coroutine_suspended;
                        }
                        ringBuffer2.removeFirst(this.$step);
                        if (ringBuffer2.size() <= this.$step) {
                            if (!ringBuffer2.isEmpty()) {
                                this.L$0 = null;
                                this.L$1 = null;
                                this.L$2 = null;
                                this.label = 5;
                                if (sequenceScope3.yield(ringBuffer2, this) == coroutine_suspended) {
                                    return coroutine_suspended;
                                }
                            }
                            return Unit.INSTANCE;
                        }
                    }
                } else if (i3 != 5) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            }
            ResultKt.throwOnFailure(obj);
            return Unit.INSTANCE;
        }
    }

    public static final <T> Iterator<List<T>> windowedIterator(Iterator<? extends T> iterator, int i, int i2, boolean z, boolean z2) {
        Intrinsics.checkNotNullParameter(iterator, "iterator");
        return !iterator.hasNext() ? EmptyIterator.INSTANCE : SequencesKt.iterator(new AnonymousClass1(i, i2, iterator, z2, z, null));
    }
}

