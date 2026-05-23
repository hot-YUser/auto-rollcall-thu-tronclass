package com.google.firebase.messaging;

import com.google.android.datatransport.Encoding;
import com.google.android.datatransport.Event;
import com.google.android.datatransport.Transformer;
import com.google.android.datatransport.Transport;
import com.google.android.datatransport.TransportFactory;
import com.google.android.datatransport.TransportScheduleCallback;
import com.google.firebase.FirebaseApp;
import com.google.firebase.components.Component;
import com.google.firebase.components.ComponentRegistrar;
import com.google.firebase.components.Dependency;
import com.google.firebase.iid.FirebaseInstanceId;
import java.util.Arrays;
import java.util.List;
public class FirebaseMessagingRegistrar implements ComponentRegistrar {
    public static class zza implements TransportFactory {
        @Override // com.google.android.datatransport.TransportFactory
        public final <T> Transport<T> getTransport(String str, Class<T> cls, Transformer<T, byte[]> transformer) {
            return new zzb();
        }

        @Override // com.google.android.datatransport.TransportFactory
        public final <T> Transport<T> getTransport(String str, Class<T> cls, Encoding encoding, Transformer<T, byte[]> transformer) {
            return new zzb();
        }
    }
    private static class zzb<T> implements Transport<T> {
        private zzb() {
        }

        @Override // com.google.android.datatransport.Transport
        public final void send(Event<T> event) {
        }

        @Override // com.google.android.datatransport.Transport
        public final void schedule(Event<T> event, TransportScheduleCallback transportScheduleCallback) {
            transportScheduleCallback.onSchedule(null);
        }
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    public List<Component<?>> getComponents() {
        return Arrays.asList(Component.builder(FirebaseMessaging.class).add(Dependency.required(FirebaseApp.class)).add(Dependency.required(FirebaseInstanceId.class)).add(Dependency.optional(TransportFactory.class)).factory(zzj.zza).alwaysEager().build());
    }
}

