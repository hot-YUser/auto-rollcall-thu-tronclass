package androidx.work.impl.constraints;
public interface ConstraintListener<T> {
    void onConstraintChanged(T newValue);
}

