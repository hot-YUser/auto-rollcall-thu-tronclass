package com.google.firebase.components;
final /* synthetic */ class Component$$Lambda$3 implements ComponentFactory {
    private final Object arg$1;

    private Component$$Lambda$3(Object obj) {
        this.arg$1 = obj;
    }

    public static ComponentFactory lambdaFactory$(Object obj) {
        return new Component$$Lambda$3(obj);
    }

    @Override // com.google.firebase.components.ComponentFactory
    public Object create(ComponentContainer componentContainer) {
        return Component.lambda$intoSet$2(this.arg$1, componentContainer);
    }
}

