package com.onesignal;
class UserStateEmail extends UserState {
    private static final String EMAIL = "email";

    @Override // com.onesignal.UserState
    protected void addDependFields() {
    }

    @Override // com.onesignal.UserState
    boolean isSubscribed() {
        return true;
    }

    UserStateEmail(String str, boolean z) {
        super("email" + str, z);
    }

    @Override // com.onesignal.UserState
    UserState newInstance(String str) {
        return new UserStateEmail(str, false);
    }
}

