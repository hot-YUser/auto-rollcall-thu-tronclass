package com.google.firebase;

import android.content.Context;
import com.google.firebase.inject.Provider;
final /* synthetic */ class FirebaseApp$$Lambda$1 implements Provider {
    private final FirebaseApp arg$1;
    private final Context arg$2;

    private FirebaseApp$$Lambda$1(FirebaseApp firebaseApp, Context context) {
        this.arg$1 = firebaseApp;
        this.arg$2 = context;
    }

    public static Provider lambdaFactory$(FirebaseApp firebaseApp, Context context) {
        return new FirebaseApp$$Lambda$1(firebaseApp, context);
    }

    @Override // com.google.firebase.inject.Provider
    public Object get() {
        return FirebaseApp.lambda$new$0(this.arg$1, this.arg$2);
    }
}

