package androidx.camera.core.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
public abstract class MultiValueSet<C> {
    private Set<C> mSet = new HashSet();

    @Override // 
    public abstract MultiValueSet<C> mo8clone();

    public void addAll(List<C> list) {
        this.mSet.addAll(list);
    }

    public List<C> getAllItems() {
        return Collections.unmodifiableList(new ArrayList(this.mSet));
    }
}

