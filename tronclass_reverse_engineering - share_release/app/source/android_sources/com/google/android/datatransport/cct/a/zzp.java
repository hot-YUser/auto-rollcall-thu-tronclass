package com.google.android.datatransport.cct.a;

import com.google.firebase.encoders.EncodingException;
import com.google.firebase.encoders.ObjectEncoder;
import com.google.firebase.encoders.ObjectEncoderContext;
import java.io.IOException;
public final class zzp implements ObjectEncoder<zze> {
    @Override // com.google.firebase.encoders.Encoder
    public void encode(Object obj, ObjectEncoderContext objectEncoderContext) throws EncodingException, IOException {
        objectEncoderContext.add("logRequest", ((zze) obj).zza());
    }
}

