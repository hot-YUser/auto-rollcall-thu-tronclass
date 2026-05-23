package com.google.android.datatransport.cct.a;

import com.google.firebase.encoders.EncodingException;
import com.google.firebase.encoders.ObjectEncoder;
import com.google.firebase.encoders.ObjectEncoderContext;
import java.io.IOException;
public final class zzz implements ObjectEncoder<zzn> {
    @Override // com.google.firebase.encoders.Encoder
    public void encode(Object obj, ObjectEncoderContext objectEncoderContext) throws EncodingException, IOException {
        zzn zznVar = (zzn) obj;
        ObjectEncoderContext objectEncoderContext2 = objectEncoderContext;
        if (zznVar.zzb() != null) {
            objectEncoderContext2.add("mobileSubtype", zznVar.zzb().name());
        }
        if (zznVar.zzc() != null) {
            objectEncoderContext2.add("networkType", zznVar.zzc().name());
        }
    }
}

