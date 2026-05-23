package com.google.firebase.events;
public interface EventHandler<T> {
    void handle(Event<T> event);
}

