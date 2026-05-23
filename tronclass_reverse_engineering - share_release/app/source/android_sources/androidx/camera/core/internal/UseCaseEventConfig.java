package androidx.camera.core.internal;

import androidx.camera.core.UseCase;
import androidx.camera.core.impl.Config;
import androidx.camera.core.impl.ReadableConfig;
public interface UseCaseEventConfig extends ReadableConfig {
    public static final Config.Option<UseCase.EventCallback> OPTION_USE_CASE_EVENT_CALLBACK = Config.Option.create("camerax.core.useCaseEventCallback", UseCase.EventCallback.class);

    public interface Builder<B> {
        B setUseCaseEventCallback(UseCase.EventCallback eventCallback);
    }

    default UseCase.EventCallback getUseCaseEventCallback(UseCase.EventCallback eventCallback) {
        return (UseCase.EventCallback) retrieveOption(OPTION_USE_CASE_EVENT_CALLBACK, eventCallback);
    }

    default UseCase.EventCallback getUseCaseEventCallback() {
        return (UseCase.EventCallback) retrieveOption(OPTION_USE_CASE_EVENT_CALLBACK);
    }
}

