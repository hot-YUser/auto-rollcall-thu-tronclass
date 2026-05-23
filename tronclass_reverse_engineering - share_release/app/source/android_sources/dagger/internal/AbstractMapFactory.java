package dagger.internal;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.inject.Provider;
abstract class AbstractMapFactory<K, V, V2> implements Factory<Map<K, V2>> {
    private final Map<K, Provider<V>> contributingMap;

    AbstractMapFactory(Map<K, Provider<V>> map) {
        this.contributingMap = Collections.unmodifiableMap(map);
    }

    final Map<K, Provider<V>> contributingMap() {
        return this.contributingMap;
    }

    public static abstract class Builder<K, V, V2> {
        final LinkedHashMap<K, Provider<V>> map;

        Builder(int i) {
            this.map = DaggerCollections.newLinkedHashMapWithExpectedSize(i);
        }

        Builder<K, V, V2> put(K k, Provider<V> provider) {
            this.map.put((K) Preconditions.checkNotNull(k, "key"), (Provider<V>) Preconditions.checkNotNull(provider, "provider"));
            return this;
        }

        Builder<K, V, V2> putAll(Provider<Map<K, V2>> provider) {
            if (!(provider instanceof DelegateFactory)) {
                this.map.putAll(((AbstractMapFactory) provider).contributingMap);
                return this;
            }
            return putAll(((DelegateFactory) provider).getDelegate());
        }
    }
}

