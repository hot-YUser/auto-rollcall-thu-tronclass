package com.google.firebase.encoders;

import java.io.IOException;
public interface ObjectEncoderContext {
    ObjectEncoderContext add(String str, double d) throws EncodingException, IOException;

    ObjectEncoderContext add(String str, int i) throws EncodingException, IOException;

    ObjectEncoderContext add(String str, long j) throws EncodingException, IOException;

    ObjectEncoderContext add(String str, Object obj) throws EncodingException, IOException;

    ObjectEncoderContext add(String str, boolean z) throws EncodingException, IOException;

    ObjectEncoderContext nested(String str) throws IOException;
}

