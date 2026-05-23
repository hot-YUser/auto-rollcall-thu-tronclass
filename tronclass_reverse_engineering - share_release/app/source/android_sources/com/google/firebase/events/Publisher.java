package com.google.firebase.events;
public interface Publisher {
    void publish(Event<?> event);
}

