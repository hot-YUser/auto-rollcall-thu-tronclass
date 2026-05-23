package com.google.android.gms.location;

import com.google.android.gms.common.api.Response;
public class LocationSettingsResponse extends Response<LocationSettingsResult> {
    public LocationSettingsStates getLocationSettingsStates() {
        return getResult().getLocationSettingsStates();
    }
}

