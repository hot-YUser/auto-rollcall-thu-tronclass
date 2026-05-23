package androidx.work.impl.model;
public class WorkTag {
    public final String tag;
    public final String workSpecId;

    public WorkTag(String tag, String workSpecId) {
        this.tag = tag;
        this.workSpecId = workSpecId;
    }
}

