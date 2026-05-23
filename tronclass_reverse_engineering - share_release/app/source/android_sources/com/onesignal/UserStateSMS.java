package com.onesignal;
class UserStateSMS extends UserState {
    private static final String SMS = "sms";

    @Override // com.onesignal.UserState
    protected void addDependFields() {
    }

    @Override // com.onesignal.UserState
    boolean isSubscribed() {
        return true;
    }

    UserStateSMS(String str, boolean z) {
        super(SMS + str, z);
    }

    @Override // com.onesignal.UserState
    UserState newInstance(String str) {
        return new UserStateSMS(str, false);
    }
}

