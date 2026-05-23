package com.king.logx;

import com.king.logx.logger.CompositeLogger;
import com.king.logx.logger.DefaultLogger;
import com.king.logx.logger.ILogger;
import com.king.logx.logger.Logger;
import com.onesignal.OneSignalDbContract;
import java.util.Arrays;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.JvmStatic;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\u0018\u0000 \u00032\u00020\u0001:\u0001\u0003B\u0007\b\u0002¢\u0006\u0002\u0010\u0002¨\u0006\u0004"}, d2 = {"Lcom/king/logx/LogX;", "", "()V", "Companion", "logx_release"}, k = 1, mv = {1, 7, 1}, xi = 48)
public final class LogX {
    public static final int ASSERT = 7;
    public static final int DEBUG = 3;
    public static final int ERROR = 6;
    public static final int INFO = 4;
    public static final int VERBOSE = 2;
    public static final int WARN = 5;
    private static final List<String> internalIgnore;
    private static Logger logger;
    public static final Companion INSTANCE = new Companion(null);
    private static boolean isDebug = true;

    @JvmStatic
    public static void d(String str, Object... objArr) {
        INSTANCE.d(str, objArr);
    }

    @JvmStatic
    public static void d(Throwable th) {
        INSTANCE.d(th);
    }

    @JvmStatic
    public static void d(Throwable th, String str, Object... objArr) {
        INSTANCE.d(th, str, objArr);
    }

    @JvmStatic
    public static void e(String str, Object... objArr) {
        INSTANCE.e(str, objArr);
    }

    @JvmStatic
    public static void e(Throwable th) {
        INSTANCE.e(th);
    }

    @JvmStatic
    public static void e(Throwable th, String str, Object... objArr) {
        INSTANCE.e(th, str, objArr);
    }

    @JvmStatic
    public static void i(String str, Object... objArr) {
        INSTANCE.i(str, objArr);
    }

    @JvmStatic
    public static void i(Throwable th) {
        INSTANCE.i(th);
    }

    @JvmStatic
    public static void i(Throwable th, String str, Object... objArr) {
        INSTANCE.i(th, str, objArr);
    }

    @JvmStatic
    public static void log(int i, String str) {
        INSTANCE.log(i, str);
    }

    @JvmStatic
    public static void log(int i, Throwable th) {
        INSTANCE.log(i, th);
    }

    @JvmStatic
    public static void log(int i, Throwable th, String str) {
        INSTANCE.log(i, th, str);
    }

    @JvmStatic
    public static ILogger offset(int i) {
        return INSTANCE.offset(i);
    }

    @JvmStatic
    public static final void setLogger(Logger logger2) {
        INSTANCE.setLogger(logger2);
    }

    @JvmStatic
    public static ILogger tag(String str) {
        return INSTANCE.tag(str);
    }

    @JvmStatic
    public static void v(String str, Object... objArr) {
        INSTANCE.v(str, objArr);
    }

    @JvmStatic
    public static void v(Throwable th) {
        INSTANCE.v(th);
    }

    @JvmStatic
    public static void v(Throwable th, String str, Object... objArr) {
        INSTANCE.v(th, str, objArr);
    }

    @JvmStatic
    public static void w(String str, Object... objArr) {
        INSTANCE.w(str, objArr);
    }

    @JvmStatic
    public static void w(Throwable th) {
        INSTANCE.w(th);
    }

    @JvmStatic
    public static void w(Throwable th, String str, Object... objArr) {
        INSTANCE.w(th, str, objArr);
    }

    @JvmStatic
    public static void wtf(String str, Object... objArr) {
        INSTANCE.wtf(str, objArr);
    }

    @JvmStatic
    public static void wtf(Throwable th) {
        INSTANCE.wtf(th);
    }

    @JvmStatic
    public static void wtf(Throwable th, String str, Object... objArr) {
        INSTANCE.wtf(th, str, objArr);
    }

    private LogX() {
        throw new AssertionError();
    }
    @Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u0011\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u0003\n\u0002\b\r\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J/\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010\u001eJ\u0012\u0010\u0018\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010\u0018\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 2\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010!J/\u0010\"\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010\u001eJ\u0012\u0010\"\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010\"\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 2\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010!J/\u0010#\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010\u001eJ\u0012\u0010#\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010#\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 2\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010!J\u001a\u0010$\u001a\u00020\u00192\u0006\u0010%\u001a\u00020\u00042\b\u0010\u001a\u001a\u0004\u0018\u00010\fH\u0017J\u001a\u0010$\u001a\u00020\u00192\u0006\u0010%\u001a\u00020\u00042\b\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J$\u0010$\u001a\u00020\u00192\u0006\u0010%\u001a\u00020\u00042\b\u0010\u001f\u001a\u0004\u0018\u00010 2\b\u0010\u001a\u001a\u0004\u0018\u00010\fH\u0017J\u0010\u0010&\u001a\u00020\u00012\u0006\u0010'\u001a\u00020\u0004H\u0017J\u0010\u0010(\u001a\u00020\u00192\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0010\u0010)\u001a\u00020\u00012\u0006\u0010)\u001a\u00020\fH\u0017J/\u0010*\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010\u001eJ\u0012\u0010*\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010*\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 2\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010!J/\u0010+\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010\u001eJ\u0012\u0010+\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010+\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 2\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010!J/\u0010,\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010\u001eJ\u0012\u0010,\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010,\u001a\u00020\u00192\b\u0010\u001f\u001a\u0004\u0018\u00010 2\b\u0010\u001a\u001a\u0004\u0018\u00010\f2\u0016\u0010\u001b\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017¢\u0006\u0002\u0010!R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u001c\u0010\n\u001a\b\u0012\u0004\u0012\u00020\f0\u000b8@X\u0080\u0004¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u001c\u0010\u000f\u001a\u00020\u00108@X\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0011\u0010\u0012\"\u0004\b\u0013\u0010\u0014R\u0018\u0010\u0015\u001a\u00020\u00168\u0002@\u0002X\u0083\u000e¢\u0006\b\n\u0000\u0012\u0004\b\u0017\u0010\u0002¨\u0006-"}, d2 = {"Lcom/king/logx/LogX$Companion;", "Lcom/king/logx/logger/ILogger;", "()V", "ASSERT", "", "DEBUG", "ERROR", "INFO", "VERBOSE", "WARN", "internalIgnore", "", "", "getInternalIgnore$logx_release", "()Ljava/util/List;", "isDebug", "", "isDebug$logx_release", "()Z", "setDebug$logx_release", "(Z)V", "logger", "Lcom/king/logx/logger/Logger;", "getLogger$annotations", "d", "", OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "args", "", "", "(Ljava/lang/String;[Ljava/lang/Object;)V", "t", "", "(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V", "e", "i", "log", "priority", "offset", "methodOffset", "setLogger", "tag", "v", "w", "wtf", "logx_release"}, k = 1, mv = {1, 7, 1}, xi = 48)
    public static final class Companion implements ILogger {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @JvmStatic
        private static /* synthetic */ void getLogger$annotations() {
        }

        private Companion() {
        }

        public final /* synthetic */ boolean isDebug$logx_release() {
            return LogX.isDebug;
        }

        public final void setDebug$logx_release(boolean z) {
            LogX.isDebug = z;
        }

        public final /* synthetic */ List getInternalIgnore$logx_release() {
            return LogX.internalIgnore;
        }

        @JvmStatic
        public final void setLogger(Logger logger) {
            Intrinsics.checkNotNullParameter(logger, "logger");
            LogX.logger = logger;
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public ILogger offset(int methodOffset) {
            LogX.logger.offset(methodOffset);
            return this;
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public ILogger tag(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            LogX.logger.tag(tag);
            return this;
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void v(String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.v(message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void v(Throwable t, String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.v(t, message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void v(Throwable t) {
            LogX.logger.v(t);
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void d(String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.d(message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void d(Throwable t, String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.d(t, message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void d(Throwable t) {
            LogX.logger.d(t);
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void i(String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.i(message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void i(Throwable t, String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.i(t, message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void i(Throwable t) {
            LogX.logger.i(t);
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void w(String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.w(message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void w(Throwable t, String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.w(t, message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void w(Throwable t) {
            LogX.logger.w(t);
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void e(String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.e(message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void e(Throwable t, String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.e(t, message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void e(Throwable t) {
            LogX.logger.e(t);
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void wtf(String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.wtf(message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void wtf(Throwable t, String message, Object... args) {
            Intrinsics.checkNotNullParameter(args, "args");
            LogX.logger.w(t, message, Arrays.copyOf(args, args.length));
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void wtf(Throwable t) {
            LogX.logger.wtf(t);
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void log(int priority, String message) {
            LogX.logger.log(priority, message);
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void log(int priority, Throwable t, String message) {
            LogX.logger.log(priority, message);
        }

        @Override // com.king.logx.logger.ILogger
        @JvmStatic
        public void log(int priority, Throwable t) {
            LogX.logger.log(priority, t);
        }
    }

    static {
        String name = LogX.class.getName();
        Intrinsics.checkNotNullExpressionValue(name, "LogX::class.java.name");
        String name2 = Companion.class.getName();
        Intrinsics.checkNotNullExpressionValue(name2, "LogX.Companion::class.java.name");
        String name3 = ILogger.class.getName();
        Intrinsics.checkNotNullExpressionValue(name3, "ILogger::class.java.name");
        String name4 = DefaultLogger.class.getName();
        Intrinsics.checkNotNullExpressionValue(name4, "DefaultLogger::class.java.name");
        String name5 = CompositeLogger.class.getName();
        Intrinsics.checkNotNullExpressionValue(name5, "CompositeLogger::class.java.name");
        String name6 = Logger.class.getName();
        Intrinsics.checkNotNullExpressionValue(name6, "Logger::class.java.name");
        internalIgnore = CollectionsKt.listOf((Object[]) new String[]{name, name2, name3, name4, name5, name6});
        logger = new DefaultLogger(false, 0, 0, 7, null);
    }
}

