package androidx.camera.core.impl;

import androidx.camera.core.impl.Config;
final class AutoValue_Config_Option<T> extends Config.Option<T> {
    private final String id;
    private final Object token;
    private final Class<T> valueClass;

    AutoValue_Config_Option(String str, Class<T> cls, Object obj) {
        if (str == null) {
            throw new NullPointerException("Null id");
        }
        this.id = str;
        if (cls == null) {
            throw new NullPointerException("Null valueClass");
        }
        this.valueClass = cls;
        this.token = obj;
    }

    @Override // androidx.camera.core.impl.Config.Option
    public String getId() {
        return this.id;
    }

    @Override // androidx.camera.core.impl.Config.Option
    public Class<T> getValueClass() {
        return this.valueClass;
    }

    @Override // androidx.camera.core.impl.Config.Option
    public Object getToken() {
        return this.token;
    }

    public String toString() {
        return "Option{id=" + this.id + ", valueClass=" + this.valueClass + ", token=" + this.token + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof Config.Option)) {
            return false;
        }
        Config.Option option = (Config.Option) obj;
        if (this.id.equals(option.getId()) && this.valueClass.equals(option.getValueClass())) {
            Object obj2 = this.token;
            if (obj2 == null) {
                if (option.getToken() == null) {
                    return true;
                }
            } else if (obj2.equals(option.getToken())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int iHashCode = (((this.id.hashCode() ^ 1000003) * 1000003) ^ this.valueClass.hashCode()) * 1000003;
        Object obj = this.token;
        return iHashCode ^ (obj == null ? 0 : obj.hashCode());
    }
}

