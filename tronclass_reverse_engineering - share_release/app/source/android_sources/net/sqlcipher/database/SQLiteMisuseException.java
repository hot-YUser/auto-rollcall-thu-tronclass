package net.sqlcipher.database;
public class SQLiteMisuseException extends SQLiteException {
    public SQLiteMisuseException() {
    }

    public SQLiteMisuseException(String str) {
        super(str);
    }
}

