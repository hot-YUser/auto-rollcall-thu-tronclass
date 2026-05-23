package androidx.camera.core.impl;

import android.util.ArrayMap;
import androidx.camera.core.impl.Config;
import java.util.Collections;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.TreeMap;
public final class MutableOptionsBundle extends OptionsBundle implements MutableConfig {
    private static final Config.OptionPriority DEFAULT_PRIORITY = Config.OptionPriority.OPTIONAL;

    private MutableOptionsBundle(TreeMap<Config.Option<?>, Map<Config.OptionPriority, Object>> treeMap) {
        super(treeMap);
    }

    public static MutableOptionsBundle create() {
        return new MutableOptionsBundle(new TreeMap(ID_COMPARE));
    }

    public static MutableOptionsBundle from(Config config) {
        TreeMap treeMap = new TreeMap(ID_COMPARE);
        for (Config.Option<?> option : config.listOptions()) {
            Set<Config.OptionPriority> priorities = config.getPriorities(option);
            ArrayMap arrayMap = new ArrayMap();
            for (Config.OptionPriority optionPriority : priorities) {
                arrayMap.put(optionPriority, config.retrieveOptionWithPriority(option, optionPriority));
            }
            treeMap.put(option, arrayMap);
        }
        return new MutableOptionsBundle(treeMap);
    }

    @Override // androidx.camera.core.impl.MutableConfig
    public <ValueT> ValueT removeOption(Config.Option<ValueT> option) {
        return (ValueT) this.mOptions.remove(option);
    }

    @Override // androidx.camera.core.impl.MutableConfig
    public <ValueT> void insertOption(Config.Option<ValueT> option, ValueT valuet) {
        insertOption(option, DEFAULT_PRIORITY, valuet);
    }

    @Override // androidx.camera.core.impl.MutableConfig
    public <ValueT> void insertOption(Config.Option<ValueT> option, Config.OptionPriority optionPriority, ValueT valuet) {
        Map<Config.OptionPriority, Object> map = this.mOptions.get(option);
        if (map == null) {
            ArrayMap arrayMap = new ArrayMap();
            this.mOptions.put(option, arrayMap);
            arrayMap.put(optionPriority, valuet);
        } else {
            Config.OptionPriority optionPriority2 = (Config.OptionPriority) Collections.min(map.keySet());
            if (!Objects.equals(map.get(optionPriority2), valuet) && Config.hasConflict(optionPriority2, optionPriority)) {
                throw new IllegalArgumentException("Option values conflicts: " + option.getId() + ", existing value (" + optionPriority2 + ")=" + map.get(optionPriority2) + ", conflicting (" + optionPriority + ")=" + valuet);
            }
            map.put(optionPriority, valuet);
        }
    }
}

