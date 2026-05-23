package com.google.android.gms.common.api;

import android.os.Looper;
import com.google.android.gms.common.api.internal.BasePendingResult;
import com.google.android.gms.common.api.internal.OptionalPendingResultImpl;
import com.google.android.gms.common.api.internal.StatusPendingResult;
import com.google.android.gms.common.internal.Preconditions;
public final class PendingResults {
    public static PendingResult<Status> immediatePendingResult(Status status) {
        Preconditions.checkNotNull(status, "Result must not be null");
        StatusPendingResult statusPendingResult = new StatusPendingResult(Looper.getMainLooper());
        statusPendingResult.setResult(status);
        return statusPendingResult;
    }

    private static final class zac<R extends Result> extends BasePendingResult<R> {
        public zac(GoogleApiClient googleApiClient) {
            super(googleApiClient);
        }

        @Override // com.google.android.gms.common.api.internal.BasePendingResult
        protected final R createFailedResult(Status status) {
            throw new UnsupportedOperationException("Creating failed results is not supported");
        }
    }

    private static final class zaa<R extends Result> extends BasePendingResult<R> {
        private final R zaci;

        public zaa(R r) {
            super(Looper.getMainLooper());
            this.zaci = r;
        }

        @Override // com.google.android.gms.common.api.internal.BasePendingResult
        protected final R createFailedResult(Status status) {
            if (status.getStatusCode() != this.zaci.getStatus().getStatusCode()) {
                throw new UnsupportedOperationException("Creating failed results is not supported");
            }
            return this.zaci;
        }
    }

    private static final class zab<R extends Result> extends BasePendingResult<R> {
        private final R zacj;

        public zab(GoogleApiClient googleApiClient, R r) {
            super(googleApiClient);
            this.zacj = r;
        }

        @Override // com.google.android.gms.common.api.internal.BasePendingResult
        protected final R createFailedResult(Status status) {
            return this.zacj;
        }
    }

    public static PendingResult<Status> immediatePendingResult(Status status, GoogleApiClient googleApiClient) {
        Preconditions.checkNotNull(status, "Result must not be null");
        StatusPendingResult statusPendingResult = new StatusPendingResult(googleApiClient);
        statusPendingResult.setResult(status);
        return statusPendingResult;
    }

    public static <R extends Result> PendingResult<R> immediateFailedResult(R r, GoogleApiClient googleApiClient) {
        Preconditions.checkNotNull(r, "Result must not be null");
        Preconditions.checkArgument(!r.getStatus().isSuccess(), "Status code must not be SUCCESS");
        zab zabVar = new zab(googleApiClient, r);
        zabVar.setResult(r);
        return zabVar;
    }

    public static <R extends Result> OptionalPendingResult<R> immediatePendingResult(R r) {
        Preconditions.checkNotNull(r, "Result must not be null");
        zac zacVar = new zac(null);
        zacVar.setResult(r);
        return new OptionalPendingResultImpl(zacVar);
    }

    public static <R extends Result> OptionalPendingResult<R> immediatePendingResult(R r, GoogleApiClient googleApiClient) {
        Preconditions.checkNotNull(r, "Result must not be null");
        zac zacVar = new zac(googleApiClient);
        zacVar.setResult(r);
        return new OptionalPendingResultImpl(zacVar);
    }

    public static PendingResult<Status> canceledPendingResult() {
        StatusPendingResult statusPendingResult = new StatusPendingResult(Looper.getMainLooper());
        statusPendingResult.cancel();
        return statusPendingResult;
    }

    public static <R extends Result> PendingResult<R> canceledPendingResult(R r) {
        Preconditions.checkNotNull(r, "Result must not be null");
        Preconditions.checkArgument(r.getStatus().getStatusCode() == 16, "Status code must be CommonStatusCodes.CANCELED");
        zaa zaaVar = new zaa(r);
        zaaVar.cancel();
        return zaaVar;
    }

    private PendingResults() {
    }
}

