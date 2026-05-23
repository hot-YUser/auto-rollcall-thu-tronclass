package androidx.camera.core.impl;

import androidx.camera.core.DynamicRange;
import androidx.camera.core.impl.Config;
import androidx.core.util.Preconditions;
public interface ImageInputConfig extends ReadableConfig {
    public static final Config.Option<Integer> OPTION_INPUT_FORMAT = Config.Option.create("camerax.core.imageInput.inputFormat", Integer.TYPE);
    public static final Config.Option<DynamicRange> OPTION_INPUT_DYNAMIC_RANGE = Config.Option.create("camerax.core.imageInput.inputDynamicRange", DynamicRange.class);

    public interface Builder<B> {
        B setDynamicRange(DynamicRange dynamicRange);
    }

    default int getInputFormat() {
        return ((Integer) retrieveOption(OPTION_INPUT_FORMAT)).intValue();
    }

    default DynamicRange getDynamicRange() {
        return (DynamicRange) Preconditions.checkNotNull((DynamicRange) retrieveOption(OPTION_INPUT_DYNAMIC_RANGE, DynamicRange.UNSPECIFIED));
    }

    default boolean hasDynamicRange() {
        return containsOption(OPTION_INPUT_DYNAMIC_RANGE);
    }
}

