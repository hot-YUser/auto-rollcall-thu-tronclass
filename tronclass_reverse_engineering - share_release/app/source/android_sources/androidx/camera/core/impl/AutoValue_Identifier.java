package androidx.camera.core.impl;
final class AutoValue_Identifier extends Identifier {
    private final Object value;

    AutoValue_Identifier(Object obj) {
        if (obj == null) {
            throw new NullPointerException("Null value");
        }
        this.value = obj;
    }

    @Override // androidx.camera.core.impl.Identifier
    public Object getValue() {
        return this.value;
    }

    public String toString() {
        return "Identifier{value=" + this.value + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof Identifier) {
            return this.value.equals(((Identifier) obj).getValue());
        }
        return false;
    }

    public int hashCode() {
        return this.value.hashCode() ^ 1000003;
    }
}

