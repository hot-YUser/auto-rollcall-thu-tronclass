package com.google.firebase.messaging;

import com.google.android.datatransport.Encoding;
import com.google.android.datatransport.TransportFactory;
import com.google.android.datatransport.cct.CCTDestination;
import com.google.firebase.FirebaseApp;
import com.google.firebase.components.ComponentContainer;
import com.google.firebase.components.ComponentFactory;
import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.messaging.FirebaseMessagingRegistrar;
final /* synthetic */ class zzj implements ComponentFactory {
    static final ComponentFactory zza = new zzj();

    private zzj() {
    }

    @Override // com.google.firebase.components.ComponentFactory
    public final Object create(ComponentContainer componentContainer) {
        FirebaseApp firebaseApp = (FirebaseApp) componentContainer.get(FirebaseApp.class);
        FirebaseInstanceId firebaseInstanceId = (FirebaseInstanceId) componentContainer.get(FirebaseInstanceId.class);
        TransportFactory zzaVar = (TransportFactory) componentContainer.get(TransportFactory.class);
        if (zzaVar == null || !CCTDestination.LEGACY_INSTANCE.getSupportedEncodings().contains(Encoding.of("json"))) {
            zzaVar = new FirebaseMessagingRegistrar.zza();
        }
        return new FirebaseMessaging(firebaseApp, firebaseInstanceId, zzaVar);
    }
}

