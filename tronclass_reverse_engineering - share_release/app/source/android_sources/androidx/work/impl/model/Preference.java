package androidx.work.impl.model;
public class Preference {
    public String mKey;
    public Long mValue;

    public Preference(String key, boolean value) {
        this(key, value ? 1L : 0L);
    }

    public Preference(String key, long value) {
        this.mKey = key;
        this.mValue = Long.valueOf(value);
    }

    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Preference)) {
            return false;
        }
        Preference preference = (Preference) o;
        if (!this.mKey.equals(preference.mKey)) {
            return false;
        }
        Long l = this.mValue;
        Long l2 = preference.mValue;
        return l != null ? l.equals(l2) : l2 == null;
    }

    public int hashCode() {
        int iHashCode = this.mKey.hashCode() * 31;
        Long l = this.mValue;
        return iHashCode + (l != null ? l.hashCode() : 0);
    }
}

