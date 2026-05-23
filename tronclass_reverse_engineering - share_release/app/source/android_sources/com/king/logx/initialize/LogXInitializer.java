package com.king.logx.initialize;

import android.content.Context;
import androidx.startup.Initializer;
import com.king.logx.LogX;
import com.king.logx.logger.ILogger;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u0005¢\u0006\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00022\u0006\u0010\u0005\u001a\u00020\u0006H\u0016J\u001a\u0010\u0007\u001a\u0014\u0012\u0010\u0012\u000e\u0012\n\b\u0001\u0012\u0006\u0012\u0002\b\u00030\u00010\t0\bH\u0016J\u0010\u0010\n\u001a\u00020\u000b2\u0006\u0010\u0005\u001a\u00020\u0006H\u0002¨\u0006\f"}, d2 = {"Lcom/king/logx/initialize/LogXInitializer;", "Landroidx/startup/Initializer;", "Lcom/king/logx/logger/ILogger;", "()V", "create", "context", "Landroid/content/Context;", "dependencies", "", "Ljava/lang/Class;", "isDebuggable", "", "logx_release"}, k = 1, mv = {1, 7, 1}, xi = 48)
public final class LogXInitializer implements Initializer<ILogger> {
    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.startup.Initializer
    public ILogger create(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        LogX.INSTANCE.setDebug$logx_release(isDebuggable(context));
        return LogX.INSTANCE;
    }

    @Override // androidx.startup.Initializer
    public List<Class<? extends Initializer<?>>> dependencies() {
        return CollectionsKt.emptyList();
    }

    private final boolean isDebuggable(Context context) {
        return (context.getApplicationInfo().flags & 2) != 0;
    }
}

