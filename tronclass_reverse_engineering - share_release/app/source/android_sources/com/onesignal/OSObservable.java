package com.onesignal;

import java.lang.ref.WeakReference;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
class OSObservable<ObserverType, StateType> {
    private boolean fireOnMainThread;
    private String methodName;
    private List<Object> observers = new ArrayList();

    OSObservable(String str, boolean z) {
        this.methodName = str;
        this.fireOnMainThread = z;
    }

    void addObserver(ObserverType observertype) {
        this.observers.add(new WeakReference(observertype));
    }

    void addObserverStrong(ObserverType observertype) {
        this.observers.add(observertype);
    }

    void removeObserver(ObserverType observertype) {
        for (int i = 0; i < this.observers.size(); i++) {
            Object obj = ((WeakReference) this.observers.get(i)).get();
            if (obj != null && obj.equals(observertype)) {
                this.observers.remove(i);
                return;
            }
        }
    }

    boolean notifyChange(final StateType statetype) {
        boolean z = false;
        for (final Object obj : this.observers) {
            if (obj instanceof WeakReference) {
                obj = ((WeakReference) obj).get();
            }
            if (obj != null) {
                try {
                    final Method declaredMethod = obj.getClass().getDeclaredMethod(this.methodName, statetype.getClass());
                    declaredMethod.setAccessible(true);
                    if (this.fireOnMainThread) {
                        CallbackThreadManager.INSTANCE.runOnPreferred(new Runnable() { // from class: com.onesignal.OSObservable.1
                            @Override // java.lang.Runnable
                            public void run() {
                                try {
                                    declaredMethod.invoke(obj, statetype);
                                } catch (IllegalAccessException e) {
                                    e.printStackTrace();
                                } catch (InvocationTargetException e2) {
                                    e2.printStackTrace();
                                }
                            }
                        });
                    } else {
                        try {
                            declaredMethod.invoke(obj, statetype);
                        } catch (IllegalAccessException e) {
                            e.printStackTrace();
                        } catch (InvocationTargetException e2) {
                            e2.printStackTrace();
                        }
                    }
                    z = true;
                } catch (NoSuchMethodException e3) {
                    e3.printStackTrace();
                }
            }
        }
        return z;
    }
}

