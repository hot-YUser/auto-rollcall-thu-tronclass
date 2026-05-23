package com.google.android.datatransport.cct.a;

import com.google.firebase.encoders.EncodingException;
import com.google.firebase.encoders.ObjectEncoder;
import com.google.firebase.encoders.ObjectEncoderContext;
import java.io.IOException;
public final class zzw implements ObjectEncoder<zzk> {
    @Override // com.google.firebase.encoders.Encoder
    public void encode(Object obj, ObjectEncoderContext objectEncoderContext) throws EncodingException, IOException {
        zzk zzkVar = (zzk) obj;
        ObjectEncoderContext objectEncoderContext2 = objectEncoderContext;
        objectEncoderContext2.add("requestTimeMs", zzkVar.zzf()).add("requestUptimeMs", zzkVar.zzg());
        if (zzkVar.zzb() != null) {
            objectEncoderContext2.add("clientInfo", zzkVar.zzb());
        }
        if (zzkVar.zze() != null) {
            objectEncoderContext2.add("logSourceName", zzkVar.zze());
        } else {
            if (zzkVar.zzd() == Integer.MIN_VALUE) {
                throw new EncodingException("Log request must have either LogSourceName or LogSource");
            }
            objectEncoderContext2.add("logSource", zzkVar.zzd());
        }
        if (zzkVar.zzc().isEmpty()) {
            return;
        }
        objectEncoderContext2.add("logEvent", zzkVar.zzc());
    }
}

