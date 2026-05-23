package androidx.lifecycle;
@Deprecated
public interface LifecycleRegistryOwner extends LifecycleOwner {
    @Override // androidx.lifecycle.LifecycleOwner
    LifecycleRegistry getLifecycle();
}

