package com.google.firebase.encoders;

import java.io.IOException;
import java.io.Writer;
public interface DataEncoder {
    String encode(Object obj) throws EncodingException;

    void encode(Object obj, Writer writer) throws EncodingException, IOException;
}

