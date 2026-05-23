package com.google.firebase.messaging;

import android.content.Intent;
import androidx.core.app.NotificationCompat;
import com.google.android.gms.common.internal.Preconditions;
import com.google.firebase.encoders.EncodingException;
import com.google.firebase.encoders.ObjectEncoder;
import com.google.firebase.encoders.ObjectEncoderContext;
import com.onesignal.OSInAppMessage;
import java.io.IOException;
final class FirelogAnalyticsEvent {
    private final String zza;
    private final Intent zzb;
    static class zza implements ObjectEncoder<FirelogAnalyticsEvent> {
        zza() {
        }

        @Override // com.google.firebase.encoders.Encoder
        public final /* synthetic */ void encode(Object obj, ObjectEncoderContext objectEncoderContext) throws EncodingException, IOException {
            FirelogAnalyticsEvent firelogAnalyticsEvent = (FirelogAnalyticsEvent) obj;
            ObjectEncoderContext objectEncoderContext2 = objectEncoderContext;
            Intent intentZza = firelogAnalyticsEvent.zza();
            objectEncoderContext2.add("ttl", zzo.zzf(intentZza));
            objectEncoderContext2.add(NotificationCompat.CATEGORY_EVENT, firelogAnalyticsEvent.zzb());
            objectEncoderContext2.add("instanceId", zzo.zzc());
            objectEncoderContext2.add("priority", zzo.zzm(intentZza));
            objectEncoderContext2.add("packageName", zzo.zzb());
            objectEncoderContext2.add("sdkPlatform", "ANDROID");
            objectEncoderContext2.add("messageType", zzo.zzk(intentZza));
            String strZzj = zzo.zzj(intentZza);
            if (strZzj != null) {
                objectEncoderContext2.add(OSInAppMessage.IAM_ID, strZzj);
            }
            String strZzl = zzo.zzl(intentZza);
            if (strZzl != null) {
                objectEncoderContext2.add("topic", strZzl);
            }
            String strZzg = zzo.zzg(intentZza);
            if (strZzg != null) {
                objectEncoderContext2.add("collapseKey", strZzg);
            }
            if (zzo.zzi(intentZza) != null) {
                objectEncoderContext2.add("analyticsLabel", zzo.zzi(intentZza));
            }
            if (zzo.zzh(intentZza) != null) {
                objectEncoderContext2.add("composerLabel", zzo.zzh(intentZza));
            }
            String strZzd = zzo.zzd();
            if (strZzd != null) {
                objectEncoderContext2.add("projectNumber", strZzd);
            }
        }
    }
    static final class zzb implements ObjectEncoder<zzc> {
        zzb() {
        }

        @Override // com.google.firebase.encoders.Encoder
        public final /* synthetic */ void encode(Object obj, ObjectEncoderContext objectEncoderContext) throws EncodingException, IOException {
            objectEncoderContext.add("messaging_client_event", ((zzc) obj).zza());
        }
    }

    FirelogAnalyticsEvent(String str, Intent intent) {
        this.zza = Preconditions.checkNotEmpty(str, "evenType must be non-null");
        this.zzb = (Intent) Preconditions.checkNotNull(intent, "intent must be non-null");
    }
    static final class zzc {
        private final FirelogAnalyticsEvent zza;

        zzc(FirelogAnalyticsEvent firelogAnalyticsEvent) {
            this.zza = (FirelogAnalyticsEvent) Preconditions.checkNotNull(firelogAnalyticsEvent);
        }

        final FirelogAnalyticsEvent zza() {
            return this.zza;
        }
    }

    final Intent zza() {
        return this.zzb;
    }

    final String zzb() {
        return this.zza;
    }
}

