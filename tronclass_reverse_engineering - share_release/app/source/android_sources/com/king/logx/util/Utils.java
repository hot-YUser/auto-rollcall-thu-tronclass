package com.king.logx.util;

import android.os.Build;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlin.text.Typography;
import org.apache.commons.io.FilenameUtils;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0000\u0018\u0000 \u00032\u00020\u0001:\u0001\u0003B\u0007\b\u0002¢\u0006\u0002\u0010\u0002¨\u0006\u0004"}, d2 = {"Lcom/king/logx/util/Utils;", "", "()V", "Companion", "logx_release"}, k = 1, mv = {1, 7, 1}, xi = 48)
public final class Utils {
    public static final Companion INSTANCE = new Companion(null);
    private static final int MAX_TAG_LENGTH = 23;

    private Utils() {
        throw new AssertionError();
    }
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0003\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\u000e\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\bJ\u000e\u0010\t\u001a\u00020\u00062\u0006\u0010\n\u001a\u00020\u000bR\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T¢\u0006\u0002\n\u0000¨\u0006\f"}, d2 = {"Lcom/king/logx/util/Utils$Companion;", "", "()V", "MAX_TAG_LENGTH", "", "createStackElementTag", "", "element", "Ljava/lang/StackTraceElement;", "getStackTraceString", "t", "", "logx_release"}, k = 1, mv = {1, 7, 1}, xi = 48)
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }

        public final String getStackTraceString(Throwable t) {
            Intrinsics.checkNotNullParameter(t, "t");
            StringWriter stringWriter = new StringWriter(256);
            PrintWriter printWriter = new PrintWriter((Writer) stringWriter, false);
            t.printStackTrace(printWriter);
            printWriter.flush();
            String string = stringWriter.toString();
            Intrinsics.checkNotNullExpressionValue(string, "sw.toString()");
            return string;
        }

        public final String createStackElementTag(StackTraceElement element) {
            Intrinsics.checkNotNullParameter(element, "element");
            String className = element.getClassName();
            Intrinsics.checkNotNullExpressionValue(className, "element.className");
            String strSubstringAfterLast$default = StringsKt.substringAfterLast$default(className, FilenameUtils.EXTENSION_SEPARATOR, (String) null, 2, (Object) null);
            int iIndexOf$default = StringsKt.indexOf$default((CharSequence) strSubstringAfterLast$default, Typography.dollar, 0, false, 6, (Object) null);
            if (iIndexOf$default != -1) {
                strSubstringAfterLast$default = strSubstringAfterLast$default.substring(0, iIndexOf$default);
                Intrinsics.checkNotNullExpressionValue(strSubstringAfterLast$default, "this as java.lang.String…ing(startIndex, endIndex)");
            }
            if (strSubstringAfterLast$default.length() <= 23 || Build.VERSION.SDK_INT >= 26) {
                return strSubstringAfterLast$default;
            }
            String strSubstring = strSubstringAfterLast$default.substring(0, 23);
            Intrinsics.checkNotNullExpressionValue(strSubstring, "this as java.lang.String…ing(startIndex, endIndex)");
            return strSubstring;
        }
    }
}

