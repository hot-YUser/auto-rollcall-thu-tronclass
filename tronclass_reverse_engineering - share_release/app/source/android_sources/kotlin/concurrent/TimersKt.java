package kotlin.concurrent;

import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u00004\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\b\u001aM\u0010\u0000\u001a\u00020\u00012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0019\b\u0004\u0010\n\u001a\u0013\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0002\b\u000eH\u0087\bø\u0001\u0000\u001aO\u0010\u0000\u001a\u00020\u00012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u000f\u001a\u00020\t2\u0006\u0010\b\u001a\u00020\t2\u0019\b\u0004\u0010\n\u001a\u0013\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0002\b\u000eH\u0087\bø\u0001\u0000\u001a\u001a\u0010\u0010\u001a\u00020\u00012\b\u0010\u0002\u001a\u0004\u0018\u00010\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0001\u001aM\u0010\u0010\u001a\u00020\u00012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0019\b\u0004\u0010\n\u001a\u0013\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0002\b\u000eH\u0087\bø\u0001\u0000\u001aO\u0010\u0010\u001a\u00020\u00012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u000f\u001a\u00020\t2\u0006\u0010\b\u001a\u00020\t2\u0019\b\u0004\u0010\n\u001a\u0013\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0002\b\u000eH\u0087\bø\u0001\u0000\u001a'\u0010\u0011\u001a\u00020\f2\u0019\b\u0004\u0010\n\u001a\u0013\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0002\b\u000eH\u0087\bø\u0001\u0000\u001a3\u0010\u0012\u001a\u00020\f*\u00020\u00012\u0006\u0010\u0013\u001a\u00020\u00072\u0019\b\u0004\u0010\n\u001a\u0013\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0002\b\u000eH\u0087\bø\u0001\u0000\u001a;\u0010\u0012\u001a\u00020\f*\u00020\u00012\u0006\u0010\u0013\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0019\b\u0004\u0010\n\u001a\u0013\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0002\b\u000eH\u0087\bø\u0001\u0000\u001a3\u0010\u0012\u001a\u00020\f*\u00020\u00012\u0006\u0010\u0014\u001a\u00020\t2\u0019\b\u0004\u0010\n\u001a\u0013\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0002\b\u000eH\u0087\bø\u0001\u0000\u001a;\u0010\u0012\u001a\u00020\f*\u00020\u00012\u0006\u0010\u0014\u001a\u00020\t2\u0006\u0010\b\u001a\u00020\t2\u0019\b\u0004\u0010\n\u001a\u0013\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0002\b\u000eH\u0087\bø\u0001\u0000\u001a;\u0010\u0015\u001a\u00020\f*\u00020\u00012\u0006\u0010\u0013\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0019\b\u0004\u0010\n\u001a\u0013\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0002\b\u000eH\u0087\bø\u0001\u0000\u001a;\u0010\u0015\u001a\u00020\f*\u00020\u00012\u0006\u0010\u0014\u001a\u00020\t2\u0006\u0010\b\u001a\u00020\t2\u0019\b\u0004\u0010\n\u001a\u0013\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000b¢\u0006\u0002\b\u000eH\u0087\bø\u0001\u0000\u0082\u0002\u0007\n\u0005\b\u009920\u0001¨\u0006\u0016"}, d2 = {"fixedRateTimer", "Ljava/util/Timer;", "name", "", "daemon", "", "startAt", "Ljava/util/Date;", "period", "", "action", "Lkotlin/Function1;", "Ljava/util/TimerTask;", "", "Lkotlin/ExtensionFunctionType;", "initialDelay", "timer", "timerTask", "schedule", "time", "delay", "scheduleAtFixedRate", "kotlin-stdlib"}, k = 2, mv = {1, 8, 0}, xi = 48)
public final class TimersKt {
    private static final TimerTask schedule(Timer timer, long j, Function1<? super TimerTask, Unit> action) {
        Intrinsics.checkNotNullParameter(timer, "<this>");
        Intrinsics.checkNotNullParameter(action, "action");
        AnonymousClass1 anonymousClass1 = new AnonymousClass1(action);
        timer.schedule(anonymousClass1, j);
        return anonymousClass1;
    }

    private static final TimerTask schedule(Timer timer, Date time, Function1<? super TimerTask, Unit> action) {
        Intrinsics.checkNotNullParameter(timer, "<this>");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(action, "action");
        AnonymousClass1 anonymousClass1 = new AnonymousClass1(action);
        timer.schedule(anonymousClass1, time);
        return anonymousClass1;
    }

    private static final TimerTask schedule(Timer timer, long j, long j2, Function1<? super TimerTask, Unit> action) {
        Intrinsics.checkNotNullParameter(timer, "<this>");
        Intrinsics.checkNotNullParameter(action, "action");
        AnonymousClass1 anonymousClass1 = new AnonymousClass1(action);
        timer.schedule(anonymousClass1, j, j2);
        return anonymousClass1;
    }

    private static final TimerTask schedule(Timer timer, Date time, long j, Function1<? super TimerTask, Unit> action) {
        Intrinsics.checkNotNullParameter(timer, "<this>");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(action, "action");
        AnonymousClass1 anonymousClass1 = new AnonymousClass1(action);
        timer.schedule(anonymousClass1, time, j);
        return anonymousClass1;
    }

    private static final TimerTask scheduleAtFixedRate(Timer timer, long j, long j2, Function1<? super TimerTask, Unit> action) {
        Intrinsics.checkNotNullParameter(timer, "<this>");
        Intrinsics.checkNotNullParameter(action, "action");
        AnonymousClass1 anonymousClass1 = new AnonymousClass1(action);
        timer.scheduleAtFixedRate(anonymousClass1, j, j2);
        return anonymousClass1;
    }

    private static final TimerTask scheduleAtFixedRate(Timer timer, Date time, long j, Function1<? super TimerTask, Unit> action) {
        Intrinsics.checkNotNullParameter(timer, "<this>");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(action, "action");
        AnonymousClass1 anonymousClass1 = new AnonymousClass1(action);
        timer.scheduleAtFixedRate(anonymousClass1, time, j);
        return anonymousClass1;
    }

    public static final Timer timer(String str, boolean z) {
        return str == null ? new Timer(z) : new Timer(str, z);
    }

    static /* synthetic */ Timer timer$default(String str, boolean z, long j, long j2, Function1 action, int i, Object obj) {
        if ((i & 1) != 0) {
            str = null;
        }
        if ((i & 2) != 0) {
            z = false;
        }
        if ((i & 4) != 0) {
            j = 0;
        }
        Intrinsics.checkNotNullParameter(action, "action");
        Timer timer = timer(str, z);
        timer.schedule(new AnonymousClass1(action), j, j2);
        return timer;
    }

    private static final Timer timer(String str, boolean z, long j, long j2, Function1<? super TimerTask, Unit> action) {
        Intrinsics.checkNotNullParameter(action, "action");
        Timer timer = timer(str, z);
        timer.schedule(new AnonymousClass1(action), j, j2);
        return timer;
    }

    static /* synthetic */ Timer timer$default(String str, boolean z, Date startAt, long j, Function1 action, int i, Object obj) {
        if ((i & 1) != 0) {
            str = null;
        }
        if ((i & 2) != 0) {
            z = false;
        }
        Intrinsics.checkNotNullParameter(startAt, "startAt");
        Intrinsics.checkNotNullParameter(action, "action");
        Timer timer = timer(str, z);
        timer.schedule(new AnonymousClass1(action), startAt, j);
        return timer;
    }

    private static final Timer timer(String str, boolean z, Date startAt, long j, Function1<? super TimerTask, Unit> action) {
        Intrinsics.checkNotNullParameter(startAt, "startAt");
        Intrinsics.checkNotNullParameter(action, "action");
        Timer timer = timer(str, z);
        timer.schedule(new AnonymousClass1(action), startAt, j);
        return timer;
    }

    static /* synthetic */ Timer fixedRateTimer$default(String str, boolean z, long j, long j2, Function1 action, int i, Object obj) {
        if ((i & 1) != 0) {
            str = null;
        }
        if ((i & 2) != 0) {
            z = false;
        }
        if ((i & 4) != 0) {
            j = 0;
        }
        Intrinsics.checkNotNullParameter(action, "action");
        Timer timer = timer(str, z);
        timer.scheduleAtFixedRate(new AnonymousClass1(action), j, j2);
        return timer;
    }

    private static final Timer fixedRateTimer(String str, boolean z, long j, long j2, Function1<? super TimerTask, Unit> action) {
        Intrinsics.checkNotNullParameter(action, "action");
        Timer timer = timer(str, z);
        timer.scheduleAtFixedRate(new AnonymousClass1(action), j, j2);
        return timer;
    }

    static /* synthetic */ Timer fixedRateTimer$default(String str, boolean z, Date startAt, long j, Function1 action, int i, Object obj) {
        if ((i & 1) != 0) {
            str = null;
        }
        if ((i & 2) != 0) {
            z = false;
        }
        Intrinsics.checkNotNullParameter(startAt, "startAt");
        Intrinsics.checkNotNullParameter(action, "action");
        Timer timer = timer(str, z);
        timer.scheduleAtFixedRate(new AnonymousClass1(action), startAt, j);
        return timer;
    }

    private static final Timer fixedRateTimer(String str, boolean z, Date startAt, long j, Function1<? super TimerTask, Unit> action) {
        Intrinsics.checkNotNullParameter(startAt, "startAt");
        Intrinsics.checkNotNullParameter(action, "action");
        Timer timer = timer(str, z);
        timer.scheduleAtFixedRate(new AnonymousClass1(action), startAt, j);
        return timer;
    }
    @Metadata(d1 = {"\u0000\u0011\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\b\u0010\u0002\u001a\u00020\u0003H\u0016¨\u0006\u0004"}, d2 = {"kotlin/concurrent/TimersKt$timerTask$1", "Ljava/util/TimerTask;", "run", "", "kotlin-stdlib"}, k = 1, mv = {1, 8, 0}, xi = 176)
    public static final class AnonymousClass1 extends TimerTask {
        final /* synthetic */ Function1<TimerTask, Unit> $action;

        /* high-level source view WARN: Multi-variable type inference failed */
        public AnonymousClass1(Function1<? super TimerTask, Unit> function1) {
            this.$action = function1;
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            this.$action.invoke(this);
        }
    }

    private static final TimerTask timerTask(Function1<? super TimerTask, Unit> action) {
        Intrinsics.checkNotNullParameter(action, "action");
        return new AnonymousClass1(action);
    }
}

