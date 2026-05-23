package com.onesignal;
class OSSubscriptionChangedInternalObserver {
    OSSubscriptionChangedInternalObserver() {
    }

    public void changed(OSSubscriptionState oSSubscriptionState) {
        fireChangesToPublicObserver(oSSubscriptionState);
    }

    static void fireChangesToPublicObserver(OSSubscriptionState oSSubscriptionState) {
        if (OneSignal.getSubscriptionStateChangesObserver().notifyChange(new OSSubscriptionStateChanges(OneSignal.lastSubscriptionState, (OSSubscriptionState) oSSubscriptionState.clone()))) {
            OneSignal.lastSubscriptionState = (OSSubscriptionState) oSSubscriptionState.clone();
            OneSignal.lastSubscriptionState.persistAsFrom();
        }
    }
}

