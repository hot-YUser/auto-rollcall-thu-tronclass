package com.google.android.datatransport.cct.a;

import com.google.firebase.encoders.EncodingException;
import com.google.firebase.encoders.ObjectEncoder;
import com.google.firebase.encoders.ObjectEncoderContext;
import java.io.IOException;
public final class zzr implements ObjectEncoder<zzg> {
    @Override // com.google.firebase.encoders.Encoder
    public void encode(Object obj, ObjectEncoderContext objectEncoderContext) throws EncodingException, IOException {
        zzg zzgVar = (zzg) obj;
        ObjectEncoderContext objectEncoderContext2 = objectEncoderContext;
        if (zzgVar.zzc() != null) {
            objectEncoderContext2.add("clientType", zzgVar.zzc().name());
        }
        if (zzgVar.zzb() != null) {
            objectEncoderContext2.add("androidClientInfo", zzgVar.zzb());
        }
    }
}

