package androidx.sqlite.db;

import java.util.regex.Pattern;
public final class SupportSQLiteQueryBuilder {
    private static final Pattern sLimitPattern = Pattern.compile("\\s*\\d+\\s*(,\\s*\\d+\\s*)?");
    private Object[] mBindArgs;
    private String mSelection;
    private final String mTable;
    private boolean mDistinct = false;
    private String[] mColumns = null;
    private String mGroupBy = null;
    private String mHaving = null;
    private String mOrderBy = null;
    private String mLimit = null;

    public static SupportSQLiteQueryBuilder builder(String str) {
        return new SupportSQLiteQueryBuilder(str);
    }

    private SupportSQLiteQueryBuilder(String str) {
        this.mTable = str;
    }

    public SupportSQLiteQueryBuilder distinct() {
        this.mDistinct = true;
        return this;
    }

    public SupportSQLiteQueryBuilder columns(String[] strArr) {
        this.mColumns = strArr;
        return this;
    }

    public SupportSQLiteQueryBuilder selection(String str, Object[] objArr) {
        this.mSelection = str;
        this.mBindArgs = objArr;
        return this;
    }

    public SupportSQLiteQueryBuilder groupBy(String str) {
        this.mGroupBy = str;
        return this;
    }

    public SupportSQLiteQueryBuilder having(String str) {
        this.mHaving = str;
        return this;
    }

    public SupportSQLiteQueryBuilder orderBy(String str) {
        this.mOrderBy = str;
        return this;
    }

    public SupportSQLiteQueryBuilder limit(String str) {
        if (!isEmpty(str) && !sLimitPattern.matcher(str).matches()) {
            throw new IllegalArgumentException("invalid LIMIT clauses:" + str);
        }
        this.mLimit = str;
        return this;
    }

    public SupportSQLiteQuery create() {
        if (isEmpty(this.mGroupBy) && !isEmpty(this.mHaving)) {
            throw new IllegalArgumentException("HAVING clauses are only permitted when using a groupBy clause");
        }
        StringBuilder sb = new StringBuilder(120);
        sb.append("SELECT ");
        if (this.mDistinct) {
            sb.append("DISTINCT ");
        }
        String[] strArr = this.mColumns;
        if (strArr != null && strArr.length != 0) {
            appendColumns(sb, strArr);
        } else {
            sb.append(" * ");
        }
        sb.append(" FROM ");
        sb.append(this.mTable);
        appendClause(sb, " WHERE ", this.mSelection);
        appendClause(sb, " GROUP BY ", this.mGroupBy);
        appendClause(sb, " HAVING ", this.mHaving);
        appendClause(sb, " ORDER BY ", this.mOrderBy);
        appendClause(sb, " LIMIT ", this.mLimit);
        return new SimpleSQLiteQuery(sb.toString(), this.mBindArgs);
    }

    private static void appendClause(StringBuilder sb, String str, String str2) {
        if (isEmpty(str2)) {
            return;
        }
        sb.append(str);
        sb.append(str2);
    }

    private static void appendColumns(StringBuilder sb, String[] strArr) {
        int length = strArr.length;
        for (int i = 0; i < length; i++) {
            String str = strArr[i];
            if (i > 0) {
                sb.append(", ");
            }
            sb.append(str);
        }
        sb.append(' ');
    }

    private static boolean isEmpty(String str) {
        return str == null || str.length() == 0;
    }
}

