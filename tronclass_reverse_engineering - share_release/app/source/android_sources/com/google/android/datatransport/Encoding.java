package com.google.android.datatransport;
public final class Encoding {
    private final String name;

    public static Encoding of(String str) {
        return new Encoding(str);
    }

    public String getName() {
        return this.name;
    }

    private Encoding(String str) {
        if (str == null) {
            throw new NullPointerException("name is null");
        }
        this.name = str;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Encoding) {
            return this.name.equals(((Encoding) obj).name);
        }
        return false;
    }

    public int hashCode() {
        return this.name.hashCode() ^ 1000003;
    }

    public String toString() {
        return "Encoding{name=\"" + this.name + "\"}";
    }
}

