package androidx.work;

import java.util.List;
public abstract class InputMerger {
    private static final String TAG = Logger.tagWithPrefix("InputMerger");

    public abstract Data merge(List<Data> inputs);

    public static InputMerger fromClassName(String className) {
        try {
            return (InputMerger) Class.forName(className).newInstance();
        } catch (Exception e) {
            Logger.get().error(TAG, "Trouble instantiating + " + className, e);
            return null;
        }
    }
}

