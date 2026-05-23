package com.google.firebase.iid;

import com.google.android.gms.tasks.Continuation;
import com.google.android.gms.tasks.Task;
import org.opencv.videoio.Videoio;
final /* synthetic */ class zze implements Continuation {
    static final Continuation zza = new zze();

    private zze() {
    }

    @Override // com.google.android.gms.tasks.Continuation
    public final Object then(Task task) {
        return Integer.valueOf(Videoio.CAP_PROP_XI_OFFSET_Y);
    }
}

