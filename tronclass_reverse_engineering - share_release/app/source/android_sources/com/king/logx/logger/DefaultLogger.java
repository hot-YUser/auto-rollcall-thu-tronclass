package com.king.logx.logger;

import android.util.Log;
import com.king.logx.LogX;
import com.king.logx.util.Utils;
import com.onesignal.OneSignalDbContract;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.RangesKt;
import kotlin.text.Charsets;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import org.apache.commons.io.FilenameUtils;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u0003\n\u0002\b\b\b\u0016\u0018\u00002\u00020\u0001B%\b\u0007\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0005¢\u0006\u0002\u0010\u0007J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\tH\u0002J\u001a\u0010\u000b\u001a\u00020\u00032\u0006\u0010\f\u001a\u00020\u00052\b\u0010\r\u001a\u0004\u0018\u00010\tH\u0014J.\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u00052\b\u0010\r\u001a\u0004\u0018\u00010\t2\b\u0010\u0010\u001a\u0004\u0018\u00010\t2\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012H\u0016J\u001a\u0010\u0013\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u00052\b\u0010\r\u001a\u0004\u0018\u00010\tH\u0002J\"\u0010\u0014\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u00052\b\u0010\r\u001a\u0004\u0018\u00010\t2\u0006\u0010\u0015\u001a\u00020\tH\u0002J\u001a\u0010\u0016\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u00052\b\u0010\r\u001a\u0004\u0018\u00010\tH\u0002J*\u0010\u0017\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u00052\b\u0010\r\u001a\u0004\u0018\u00010\t2\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H\u0002J\u001a\u0010\u0018\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u00052\b\u0010\r\u001a\u0004\u0018\u00010\tH\u0002J\"\u0010\u0019\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u00052\b\u0010\r\u001a\u0004\u0018\u00010\t2\u0006\u0010\u0010\u001a\u00020\tH\u0014R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001a"}, d2 = {"Lcom/king/logx/logger/DefaultLogger;", "Lcom/king/logx/logger/Logger;", "showThreadInfo", "", "methodCount", "", "methodOffset", "(ZII)V", "getSimpleClassName", "", "name", "isLoggable", "priority", "tag", "log", "", OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, "t", "", "logBottomBorder", "logContent", "chunk", "logDivider", "logHeaderContent", "logTopBorder", "println", "logx_release"}, k = 1, mv = {1, 7, 1}, xi = 48)
public class DefaultLogger extends Logger {
    private final int methodCount;
    private final int methodOffset;
    private final boolean showThreadInfo;

    public DefaultLogger() {
        this(false, 0, 0, 7, null);
    }

    public DefaultLogger(boolean z) {
        this(z, 0, 0, 6, null);
    }

    public DefaultLogger(boolean z, int i) {
        this(z, i, 0, 4, null);
    }

    public /* synthetic */ DefaultLogger(boolean z, int i, int i2, int i3, DefaultConstructorMarker defaultConstructorMarker) {
        this((i3 & 1) != 0 ? true : z, (i3 & 2) != 0 ? 2 : i, (i3 & 4) != 0 ? 0 : i2);
    }

    public DefaultLogger(boolean z, int i, int i2) {
        super(i2);
        this.showThreadInfo = z;
        this.methodCount = i;
        this.methodOffset = i2;
    }

    @Override // com.king.logx.logger.Logger
    protected boolean isLoggable(int priority, String tag) {
        return LogX.INSTANCE.isDebug$logx_release();
    }

    @Override // com.king.logx.logger.Logger
    public void log(int priority, String tag, String message, Throwable t) {
        String strValueOf = String.valueOf(message);
        String str = message;
        if (str == null || str.length() == 0) {
            if (t != null) {
                strValueOf = Utils.INSTANCE.getStackTraceString(t);
            }
        } else if (t != null) {
            strValueOf = strValueOf + '\n' + Utils.INSTANCE.getStackTraceString(t);
        }
        logTopBorder(priority, tag);
        logHeaderContent(priority, tag, this.methodCount, getLastOffset());
        byte[] bytes = strValueOf.getBytes(Charsets.UTF_8);
        Intrinsics.checkNotNullExpressionValue(bytes, "this as java.lang.String).getBytes(charset)");
        int length = bytes.length;
        if (length <= 4000) {
            if (this.methodCount > 0) {
                logDivider(priority, tag);
            }
            logContent(priority, tag, strValueOf);
            logBottomBorder(priority, tag);
            return;
        }
        if (this.methodCount > 0) {
            logDivider(priority, tag);
        }
        for (int i = 0; i < length; i += Logger.MAX_LOG_LENGTH) {
            logContent(priority, tag, new String(bytes, i, RangesKt.coerceAtMost(length - i, Logger.MAX_LOG_LENGTH), Charsets.UTF_8));
        }
        logBottomBorder(priority, tag);
    }

    private final void logTopBorder(int priority, String tag) {
        println(priority, tag, Logger.TOP_BORDER);
    }

    /* high-level source view WARN: String concatenation convert failed
    high-level source view.core.utils.exceptions.high-level source viewRuntimeException: Can't remove SSA var: r4v1 java.lang.StringBuilder, still in use, count: 1, list:
  (r4v1 java.lang.StringBuilder) from 0x0057: INVOKE 
  (r4v1 java.lang.StringBuilder)
  (wrap:java.lang.String:0x0053: INVOKE (r7v0 'this' com.king.logx.logger.DefaultLogger A[IMMUTABLE_TYPE, THIS]), (r5v1 java.lang.String) DIRECT call: com.king.logx.logger.DefaultLogger.getSimpleClassName(java.lang.String):java.lang.String A[MD:(java.lang.String):java.lang.String (m), WRAPPED])
 VIRTUAL call: java.lang.StringBuilder.append(java.lang.String):java.lang.StringBuilder A[MD:(java.lang.String):java.lang.StringBuilder (c), WRAPPED]
    	at high-level source view.core.utils.InsnRemover.removeSsaVar(InsnRemover.java:162)
    	at high-level source view.core.utils.InsnRemover.unbindResult(InsnRemover.java:127)
    	at high-level source view.core.utils.InsnRemover.unbindInsn(InsnRemover.java:91)
    	at high-level source view.core.utils.InsnRemover.addAndUnbind(InsnRemover.java:57)
    	at high-level source view.core.dex.visitors.SimplifyVisitor.removeStringBuilderInsns(SimplifyVisitor.java:520)
    	at high-level source view.core.dex.visitors.SimplifyVisitor.convertStringBuilderChain(SimplifyVisitor.java:440)
    	at high-level source view.core.dex.visitors.SimplifyVisitor.convertInvoke(SimplifyVisitor.java:337)
    	at high-level source view.core.dex.visitors.SimplifyVisitor.simplifyInsn(SimplifyVisitor.java:145)
    	at high-level source view.core.dex.visitors.SimplifyVisitor.simplifyBlock(SimplifyVisitor.java:86)
    	at high-level source view.core.dex.visitors.SimplifyVisitor.visit(SimplifyVisitor.java:71)
     */
    private final void logHeaderContent(int priority, String tag, int methodCount, int methodOffset) {
        if (this.showThreadInfo) {
            println(priority, tag, "│ Thread: " + Thread.currentThread().getName());
            logDivider(priority, tag);
        }
        StackTraceElement[] stackTrace = getStackTrace();
        int stackOffset = getStackOffset(stackTrace) + methodOffset;
        if (methodCount + stackOffset > stackTrace.length) {
            methodCount = (stackTrace.length - stackOffset) - 1;
        }
        String str = "";
        while (methodCount > 0) {
            int i = methodCount + stackOffset;
            if (i < stackTrace.length) {
                String className = stackTrace[i].getClassName();
                Intrinsics.checkNotNullExpressionValue(className, "stackTrace[stackIndex].className");
                r3.append(str).append(getSimpleClassName(className)).append(".").append(stackTrace[i].getMethodName()).append("(").append(stackTrace[i].getFileName()).append(":").append(stackTrace[i].getLineNumber()).append(")");
                str = str + Logger.INDENT;
                Intrinsics.checkNotNullExpressionValue(str, "builder.toString()");
                println(priority, tag, str);
            }
            methodCount--;
        }
    }

    private final String getSimpleClassName(String name) {
        return StringsKt.substringAfterLast$default(name, FilenameUtils.EXTENSION_SEPARATOR, (String) null, 2, (Object) null);
    }

    private final void logBottomBorder(int priority, String tag) {
        println(priority, tag, Logger.BOTTOM_BORDER);
    }

    private final void logDivider(int priority, String tag) {
        println(priority, tag, Logger.MIDDLE_BORDER);
    }

    private final void logContent(int priority, String tag, String chunk) {
        List listEmptyList;
        String strLineSeparator = System.lineSeparator();
        Intrinsics.checkNotNullExpressionValue(strLineSeparator, "lineSeparator()");
        List<String> listSplit = new Regex(strLineSeparator).split(chunk, 0);
        if (!listSplit.isEmpty()) {
            ListIterator<String> listIterator = listSplit.listIterator(listSplit.size());
            while (listIterator.hasPrevious()) {
                if (listIterator.previous().length() != 0) {
                    listEmptyList = CollectionsKt.take(listSplit, listIterator.nextIndex() + 1);
                    break;
                }
            }
            listEmptyList = CollectionsKt.emptyList();
        } else {
            listEmptyList = CollectionsKt.emptyList();
        }
        Iterator it = listEmptyList.iterator();
        while (it.hasNext()) {
            println(priority, tag, "│ " + ((String) it.next()));
        }
    }

    protected void println(int priority, String tag, String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        Log.println(priority, tag, message);
    }
}

