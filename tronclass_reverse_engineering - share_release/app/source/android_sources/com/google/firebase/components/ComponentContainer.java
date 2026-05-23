package com.google.firebase.components;

import com.google.firebase.inject.Provider;
import java.util.Set;
public interface ComponentContainer {
    <T> T get(Class<T> cls);

    <T> Provider<T> getProvider(Class<T> cls);

    <T> Set<T> setOf(Class<T> cls);

    <T> Provider<Set<T>> setOfProvider(Class<T> cls);
}

