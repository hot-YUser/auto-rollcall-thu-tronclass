package androidx.camera.core.impl;

import androidx.camera.core.impl.Config;
import java.util.Set;
public interface ReadableConfig extends Config {
    Config getConfig();

    @Override // androidx.camera.core.impl.Config
    default boolean containsOption(Config.Option<?> option) {
        return getConfig().containsOption(option);
    }

    @Override // androidx.camera.core.impl.Config
    default <ValueT> ValueT retrieveOption(Config.Option<ValueT> option) {
        return (ValueT) getConfig().retrieveOption(option);
    }

    @Override // androidx.camera.core.impl.Config
    default <ValueT> ValueT retrieveOption(Config.Option<ValueT> option, ValueT valuet) {
        return (ValueT) getConfig().retrieveOption(option, valuet);
    }

    @Override // androidx.camera.core.impl.Config
    default void findOptions(String str, Config.OptionMatcher optionMatcher) {
        getConfig().findOptions(str, optionMatcher);
    }

    @Override // androidx.camera.core.impl.Config
    default Set<Config.Option<?>> listOptions() {
        return getConfig().listOptions();
    }

    @Override // androidx.camera.core.impl.Config
    default <ValueT> ValueT retrieveOptionWithPriority(Config.Option<ValueT> option, Config.OptionPriority optionPriority) {
        return (ValueT) getConfig().retrieveOptionWithPriority(option, optionPriority);
    }

    @Override // androidx.camera.core.impl.Config
    default Config.OptionPriority getOptionPriority(Config.Option<?> option) {
        return getConfig().getOptionPriority(option);
    }

    @Override // androidx.camera.core.impl.Config
    default Set<Config.OptionPriority> getPriorities(Config.Option<?> option) {
        return getConfig().getPriorities(option);
    }
}

