package androidx.work.impl.utils;

import androidx.sqlite.db.SimpleSQLiteQuery;
import androidx.sqlite.db.SupportSQLiteQuery;
import androidx.work.WorkInfo;
import androidx.work.WorkQuery;
import androidx.work.impl.model.WorkTypeConverters;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;
public final class RawQueries {
    private RawQueries() {
    }

    public static SupportSQLiteQuery workQueryToRawQuery(WorkQuery querySpec) {
        String str;
        ArrayList arrayList = new ArrayList();
        StringBuilder sb = new StringBuilder("SELECT * FROM workspec");
        List<WorkInfo.State> states = querySpec.getStates();
        String str2 = " AND";
        if (states.isEmpty()) {
            str = " WHERE";
        } else {
            ArrayList arrayList2 = new ArrayList(states.size());
            Iterator<WorkInfo.State> it = states.iterator();
            while (it.hasNext()) {
                arrayList2.add(Integer.valueOf(WorkTypeConverters.stateToInt(it.next())));
            }
            sb.append(" WHERE state IN (");
            bindings(sb, arrayList2.size());
            sb.append(")");
            arrayList.addAll(arrayList2);
            str = " AND";
        }
        List<UUID> ids = querySpec.getIds();
        if (!ids.isEmpty()) {
            ArrayList arrayList3 = new ArrayList(ids.size());
            Iterator<UUID> it2 = ids.iterator();
            while (it2.hasNext()) {
                arrayList3.add(it2.next().toString());
            }
            sb.append(str).append(" id IN (");
            bindings(sb, ids.size());
            sb.append(")");
            arrayList.addAll(arrayList3);
            str = " AND";
        }
        List<String> tags = querySpec.getTags();
        if (tags.isEmpty()) {
            str2 = str;
        } else {
            sb.append(str).append(" id IN (SELECT work_spec_id FROM worktag WHERE tag IN (");
            bindings(sb, tags.size());
            sb.append("))");
            arrayList.addAll(tags);
        }
        List<String> uniqueWorkNames = querySpec.getUniqueWorkNames();
        if (!uniqueWorkNames.isEmpty()) {
            sb.append(str2).append(" id IN (SELECT work_spec_id FROM workname WHERE name IN (");
            bindings(sb, uniqueWorkNames.size());
            sb.append("))");
            arrayList.addAll(uniqueWorkNames);
        }
        sb.append(";");
        return new SimpleSQLiteQuery(sb.toString(), arrayList.toArray());
    }

    private static void bindings(StringBuilder builder, int count) {
        if (count <= 0) {
            return;
        }
        builder.append("?");
        for (int i = 1; i < count; i++) {
            builder.append(",");
            builder.append("?");
        }
    }
}

