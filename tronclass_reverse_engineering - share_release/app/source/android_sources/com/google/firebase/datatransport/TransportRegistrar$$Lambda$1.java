package com.google.firebase.datatransport;

import com.google.firebase.components.ComponentContainer;
import com.google.firebase.components.ComponentFactory;
final /* synthetic */ class TransportRegistrar$$Lambda$1 implements ComponentFactory {
    private static final TransportRegistrar$$Lambda$1 instance = new TransportRegistrar$$Lambda$1();

    private TransportRegistrar$$Lambda$1() {
    }

    @Override // com.google.firebase.components.ComponentFactory
    public Object create(ComponentContainer componentContainer) {
        return TransportRegistrar.lambda$getComponents$0(componentContainer);
    }
}

