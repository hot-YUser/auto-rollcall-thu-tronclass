package kotlinx.coroutines.selects;

import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlin.coroutines.jvm.internal.ContinuationImpl;
import kotlin.coroutines.jvm.internal.DebugMetadata;
import kotlin.coroutines.jvm.internal.DebugProbesKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.InlineMarker;
@Metadata(d1 = {"\u0000\u001c\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a2\u0010\u0000\u001a\u00020\u00012\u001f\b\u0004\u0010\u0002\u001a\u0019\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00050\u0004\u0012\u0004\u0012\u00020\u00010\u0003¢\u0006\u0002\b\u0006H\u0087Hø\u0001\u0000¢\u0006\u0002\u0010\u0007\u0082\u0002\u0004\n\u0002\b\u0019¨\u0006\b"}, d2 = {"whileSelect", "", "builder", "Lkotlin/Function1;", "Lkotlinx/coroutines/selects/SelectBuilder;", "", "Lkotlin/ExtensionFunctionType;", "(Lkotlin/jvm/functions/Function1;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "kotlinx-coroutines-core"}, k = 2, mv = {1, 6, 0}, xi = 48)
public final class WhileSelectKt {
    @Metadata(k = 3, mv = {1, 6, 0}, xi = 176)
    @DebugMetadata(c = "kotlinx.coroutines.selects.WhileSelectKt", f = "WhileSelect.kt", i = {0}, l = {37}, m = "whileSelect", n = {"builder"}, s = {"L$0"})
    static final class AnonymousClass1 extends ContinuationImpl {
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
            return WhileSelectKt.whileSelect(null, this);
        }
    }

    /* high-level source view WARN: Can't wrap try/catch for region: R(9:11|26|(2:28|29)|15|30|16|20|(1:22)|(1:24)(9:25|26|(0)|15|30|16|20|(0)|(0)(0))) */
    /* high-level source view WARN: Code restructure failed: missing block: B:18:0x0049, code lost:
    
        r4 = move-exception;
     */
    /* high-level source view WARN: Code restructure failed: missing block: B:19:0x004a, code lost:
    
        r2.handleBuilderException(r4);
     */
    /* high-level source view WARN: Removed duplicated region for block: B:22:0x0057  */
    /* high-level source view WARN: Removed duplicated region for block: B:24:0x005c A[RETURN] */
    /* high-level source view WARN: Removed duplicated region for block: B:25:0x005d  */
    /* high-level source view WARN: Removed duplicated region for block: B:28:0x0066  */
    /* high-level source view WARN: Removed duplicated region for block: B:7:0x0014  */
    /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:25:0x005d -> B:26:0x005e). Please report as a decompilation issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public static final Object whileSelect(Function1<? super SelectBuilder<? super Boolean>, Unit> function1, Continuation<? super Unit> continuation) throws Throwable {
        AnonymousClass1 anonymousClass1;
        Object result;
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
            anonymousClass1.L$0 = function1;
            anonymousClass1.label = 1;
            AnonymousClass1 anonymousClass12 = anonymousClass1;
            SelectBuilderImpl selectBuilderImpl = new SelectBuilderImpl(anonymousClass12);
            function1.invoke(selectBuilderImpl);
            result = selectBuilderImpl.getResult();
            if (result == IntrinsicsKt.getCOROUTINE_SUSPENDED()) {
            }
            if (result == coroutine_suspended) {
            }
        } else {
            if (i != 1) {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            function1 = (Function1) anonymousClass1.L$0;
            ResultKt.throwOnFailure(obj);
            if (!((Boolean) obj).booleanValue()) {
                return Unit.INSTANCE;
            }
            anonymousClass1.L$0 = function1;
            anonymousClass1.label = 1;
            AnonymousClass1 anonymousClass122 = anonymousClass1;
            SelectBuilderImpl selectBuilderImpl2 = new SelectBuilderImpl(anonymousClass122);
            function1.invoke(selectBuilderImpl2);
            result = selectBuilderImpl2.getResult();
            if (result == IntrinsicsKt.getCOROUTINE_SUSPENDED()) {
                DebugProbesKt.probeCoroutineSuspended(anonymousClass122);
            }
            if (result == coroutine_suspended) {
                return coroutine_suspended;
            }
            obj = result;
            if (!((Boolean) obj).booleanValue()) {
            }
            anonymousClass1.L$0 = function1;
            anonymousClass1.label = 1;
            AnonymousClass1 anonymousClass1222 = anonymousClass1;
            SelectBuilderImpl selectBuilderImpl22 = new SelectBuilderImpl(anonymousClass1222);
            function1.invoke(selectBuilderImpl22);
            result = selectBuilderImpl22.getResult();
            if (result == IntrinsicsKt.getCOROUTINE_SUSPENDED()) {
            }
            if (result == coroutine_suspended) {
            }
        }
    }

    private static final Object whileSelect$$forInline(Function1<? super SelectBuilder<? super Boolean>, Unit> function1, Continuation<? super Unit> continuation) {
        Object result;
        do {
            InlineMarker.mark(0);
            SelectBuilderImpl selectBuilderImpl = new SelectBuilderImpl(continuation);
            try {
                function1.invoke(selectBuilderImpl);
            } catch (Throwable th) {
                selectBuilderImpl.handleBuilderException(th);
            }
            result = selectBuilderImpl.getResult();
            if (result == IntrinsicsKt.getCOROUTINE_SUSPENDED()) {
                DebugProbesKt.probeCoroutineSuspended(continuation);
            }
            InlineMarker.mark(1);
        } while (((Boolean) result).booleanValue());
        return Unit.INSTANCE;
    }
}

