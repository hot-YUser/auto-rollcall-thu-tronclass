package com.onesignal;
class OSSMSSubscriptionChangedInternalObserver {
    OSSMSSubscriptionChangedInternalObserver() {
    }

    void changed(OSSMSSubscriptionState oSSMSSubscriptionState) {
        fireChangesToPublicObserver(oSSMSSubscriptionState);
    }

    static void fireChangesToPublicObserver(OSSMSSubscriptionState oSSMSSubscriptionState) {
        if (OneSignal.getSMSSubscriptionStateChangesObserver().notifyChange(new OSSMSSubscriptionStateChanges(OneSignal.lastSMSSubscriptionState, (OSSMSSubscriptionState) oSSMSSubscriptionState.clone()))) {
            OneSignal.lastSMSSubscriptionState = (OSSMSSubscriptionState) oSSMSSubscriptionState.clone();
            OneSignal.lastSMSSubscriptionState.persistAsFrom();
        }
    }
}

