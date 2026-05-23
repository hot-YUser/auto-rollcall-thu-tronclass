package com.google.android.datatransport.cct.a;

import com.google.firebase.encoders.EncodingException;
import com.google.firebase.encoders.ObjectEncoder;
import com.google.firebase.encoders.ObjectEncoderContext;
import java.io.IOException;
public final class zzb implements ObjectEncoder<zzd> {
    @Override // com.google.firebase.encoders.Encoder
    public void encode(Object obj, ObjectEncoderContext objectEncoderContext) throws EncodingException, IOException {
        zzd zzdVar = (zzd) obj;
        ObjectEncoderContext objectEncoderContext2 = objectEncoderContext;
        if (zzdVar.zzi() != Integer.MIN_VALUE) {
            objectEncoderContext2.add("sdkVersion", zzdVar.zzi());
        }
        if (zzdVar.zzf() != null) {
            objectEncoderContext2.add("model", zzdVar.zzf());
        }
        if (zzdVar.zzd() != null) {
            objectEncoderContext2.add("hardware", zzdVar.zzd());
        }
        if (zzdVar.zzb() != null) {
            objectEncoderContext2.add("device", zzdVar.zzb());
        }
        if (zzdVar.zzh() != null) {
            objectEncoderContext2.add("product", zzdVar.zzh());
        }
        if (zzdVar.zzg() != null) {
            objectEncoderContext2.add("osBuild", zzdVar.zzg());
        }
        if (zzdVar.zze() != null) {
            objectEncoderContext2.add("manufacturer", zzdVar.zze());
        }
        if (zzdVar.zzc() != null) {
            objectEncoderContext2.add("fingerprint", zzdVar.zzc());
        }
    }
}

