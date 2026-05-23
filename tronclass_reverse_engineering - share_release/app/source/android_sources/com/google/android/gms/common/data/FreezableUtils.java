package com.google.android.gms.common.data;

import com.wisdomgarden.trpc.MainActivity;
import java.util.ArrayList;
import java.util.Iterator;
public final class FreezableUtils {
    public static <T, E extends Freezable<T>> ArrayList<T> freeze(ArrayList<E> arrayList) {
        MainActivity.AnonymousClass1 anonymousClass1 = (ArrayList<T>) new ArrayList(arrayList.size());
        int size = arrayList.size();
        for (int i = 0; i < size; i++) {
            anonymousClass1.add(arrayList.get(i).freeze());
        }
        return anonymousClass1;
    }

    public static <T, E extends Freezable<T>> ArrayList<T> freeze(E[] eArr) {
        MainActivity.AnonymousClass1 anonymousClass1 = (ArrayList<T>) new ArrayList(eArr.length);
        for (E e : eArr) {
            anonymousClass1.add(e.freeze());
        }
        return anonymousClass1;
    }

    public static <T, E extends Freezable<T>> ArrayList<T> freezeIterable(Iterable<E> iterable) {
        MainActivity.AnonymousClass1 anonymousClass1 = (ArrayList<T>) new ArrayList();
        Iterator<E> it = iterable.iterator();
        while (it.hasNext()) {
            anonymousClass1.add(it.next().freeze());
        }
        return anonymousClass1;
    }
}

