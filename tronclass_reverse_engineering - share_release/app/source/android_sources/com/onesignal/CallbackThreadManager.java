package com.onesignal;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.concurrent.ThreadsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\u0018\u0000 \u00032\u00020\u0001:\u0002\u0003\u0004B\u0005¢\u0006\u0002\u0010\u0002¨\u0006\u0005"}, d2 = {"Lcom/onesignal/CallbackThreadManager;", "", "()V", "Companion", "UseThread", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class CallbackThreadManager {
    public static final Companion INSTANCE = new Companion(null);
    private static UseThread preference = UseThread.MainUI;
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0004\b\u0086\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002j\u0002\b\u0003j\u0002\b\u0004¨\u0006\u0005"}, d2 = {"Lcom/onesignal/CallbackThreadManager$UseThread;", "", "(Ljava/lang/String;I)V", "MainUI", "Background", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
    public enum UseThread {
        MainUI,
        Background
    }
    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\u000e\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\fR\u001a\u0010\u0003\u001a\u00020\u0004X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0005\u0010\u0006\"\u0004\b\u0007\u0010\b¨\u0006\r"}, d2 = {"Lcom/onesignal/CallbackThreadManager$Companion;", "", "()V", "preference", "Lcom/onesignal/CallbackThreadManager$UseThread;", "getPreference", "()Lcom/onesignal/CallbackThreadManager$UseThread;", "setPreference", "(Lcom/onesignal/CallbackThreadManager$UseThread;)V", "runOnPreferred", "", "runnable", "Ljava/lang/Runnable;", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
    public static final class Companion {
        @Metadata(k = 3, mv = {1, 5, 1}, xi = 48)
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[UseThread.values().length];
                iArr[UseThread.MainUI.ordinal()] = 1;
                iArr[UseThread.Background.ordinal()] = 2;
                $EnumSwitchMapping$0 = iArr;
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }

        public final UseThread getPreference() {
            return CallbackThreadManager.preference;
        }

        public final void setPreference(UseThread useThread) {
            Intrinsics.checkNotNullParameter(useThread, "<set-?>");
            CallbackThreadManager.preference = useThread;
        }

        public final void runOnPreferred(final Runnable runnable) {
            Intrinsics.checkNotNullParameter(runnable, "runnable");
            int i = WhenMappings.$EnumSwitchMapping$0[getPreference().ordinal()];
            if (i == 1) {
                OSUtils.runOnMainUIThread(runnable);
            } else {
                if (i != 2) {
                    return;
                }
                ThreadsKt.thread$default(false, false, null, null, 0, new Function0<Unit>() { // from class: com.onesignal.CallbackThreadManager$Companion$runOnPreferred$1
                    /* high-level source view WARN: 'super' call moved to the top of the method (can break code semantics) */
                    {
                        super(0);
                    }

                    @Override // kotlin.jvm.functions.Function0
                    public /* bridge */ /* synthetic */ Unit invoke() {
                        invoke2();
                        return Unit.INSTANCE;
                    }
                    public final void invoke2() {
                        runnable.run();
                    }
                }, 31, null);
            }
        }
    }
}

