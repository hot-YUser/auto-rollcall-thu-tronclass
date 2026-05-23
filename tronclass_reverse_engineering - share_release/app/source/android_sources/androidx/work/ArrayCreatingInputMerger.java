package androidx.work;

import androidx.work.Data;
import java.lang.reflect.Array;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
public final class ArrayCreatingInputMerger extends InputMerger {
    @Override // androidx.work.InputMerger
    public Data merge(List<Data> inputs) {
        Data.Builder builder = new Data.Builder();
        HashMap map = new HashMap();
        Iterator<Data> it = inputs.iterator();
        while (it.hasNext()) {
            for (Map.Entry<String, Object> entry : it.next().getKeyValueMap().entrySet()) {
                String key = entry.getKey();
                Object value = entry.getValue();
                Class<?> cls = value.getClass();
                Object obj = map.get(key);
                if (obj == null) {
                    if (!cls.isArray()) {
                        value = createArrayFor(value);
                    }
                } else {
                    Class<?> cls2 = obj.getClass();
                    if (cls2.equals(cls)) {
                        if (cls2.isArray()) {
                            value = concatenateArrays(obj, value);
                        } else {
                            value = concatenateNonArrays(obj, value);
                        }
                    } else if (cls2.isArray() && cls2.getComponentType().equals(cls)) {
                        value = concatenateArrayAndNonArray(obj, value);
                    } else if (cls.isArray() && cls.getComponentType().equals(cls2)) {
                        value = concatenateArrayAndNonArray(value, obj);
                    } else {
                        throw new IllegalArgumentException();
                    }
                }
                map.put(key, value);
            }
        }
        builder.putAll(map);
        return builder.build();
    }

    private Object concatenateArrays(Object array1, Object array2) {
        int length = Array.getLength(array1);
        int length2 = Array.getLength(array2);
        Object objNewInstance = Array.newInstance(array1.getClass().getComponentType(), length + length2);
        System.arraycopy(array1, 0, objNewInstance, 0, length);
        System.arraycopy(array2, 0, objNewInstance, length, length2);
        return objNewInstance;
    }

    private Object concatenateNonArrays(Object obj1, Object obj2) {
        Object objNewInstance = Array.newInstance(obj1.getClass(), 2);
        Array.set(objNewInstance, 0, obj1);
        Array.set(objNewInstance, 1, obj2);
        return objNewInstance;
    }

    private Object concatenateArrayAndNonArray(Object array, Object obj) {
        int length = Array.getLength(array);
        Object objNewInstance = Array.newInstance(obj.getClass(), length + 1);
        System.arraycopy(array, 0, objNewInstance, 0, length);
        Array.set(objNewInstance, length, obj);
        return objNewInstance;
    }

    private Object createArrayFor(Object obj) {
        Object objNewInstance = Array.newInstance(obj.getClass(), 1);
        Array.set(objNewInstance, 0, obj);
        return objNewInstance;
    }
}

