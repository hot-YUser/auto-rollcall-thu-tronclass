package androidx.work.impl.constraints;

import java.util.List;
public interface WorkConstraintsCallback {
    void onAllConstraintsMet(List<String> workSpecIds);

    void onAllConstraintsNotMet(List<String> workSpecIds);
}

