package com.google.firebase.encoders;

import java.io.IOException;
public interface Encoder<TValue, TContext> {
    void encode(TValue tvalue, TContext tcontext) throws EncodingException, IOException;
}

