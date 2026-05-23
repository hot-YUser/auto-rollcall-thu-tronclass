package com.google.firebase.components;
public interface ComponentFactory<T> {
    T create(ComponentContainer componentContainer);
}

