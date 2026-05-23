package com.onesignal;
class OSPermissionChangedInternalObserver {
    OSPermissionChangedInternalObserver() {
    }

    void changed(OSPermissionState oSPermissionState) {
        handleInternalChanges(oSPermissionState);
        fireChangesToPublicObserver(oSPermissionState);
    }

    static void handleInternalChanges(OSPermissionState oSPermissionState) {
        if (!oSPermissionState.areNotificationsEnabled()) {
            BadgeCountUpdater.updateCount(0, OneSignal.appContext);
        }
        OneSignalStateSynchronizer.setPermission(OneSignal.areNotificationsEnabledForSubscribedState());
    }

    static void fireChangesToPublicObserver(OSPermissionState oSPermissionState) {
        if (OneSignal.getPermissionStateChangesObserver().notifyChange(new OSPermissionStateChanges(OneSignal.lastPermissionState, (OSPermissionState) oSPermissionState.clone()))) {
            OneSignal.lastPermissionState = (OSPermissionState) oSPermissionState.clone();
            OneSignal.lastPermissionState.persistAsFrom();
        }
    }
}

