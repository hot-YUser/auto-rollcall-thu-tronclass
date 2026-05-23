package com.onesignal;

import android.content.pm.PackageInfo;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0002\u0010\u0006J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\f\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u001f\u0010\r\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u00032\b\u0010\u000f\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0010\u001a\u00020\u0011HÖ\u0001J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\n¨\u0006\u0014"}, d2 = {"Lcom/onesignal/GetPackageInfoResult;", "", "successful", "", "packageInfo", "Landroid/content/pm/PackageInfo;", "(ZLandroid/content/pm/PackageInfo;)V", "getPackageInfo", "()Landroid/content/pm/PackageInfo;", "getSuccessful", "()Z", "component1", "component2", "copy", "equals", "other", "hashCode", "", "toString", "", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final /* data */ class GetPackageInfoResult {
    private final PackageInfo packageInfo;
    private final boolean successful;

    public static /* synthetic */ GetPackageInfoResult copy$default(GetPackageInfoResult getPackageInfoResult, boolean z, PackageInfo packageInfo, int i, Object obj) {
        if ((i & 1) != 0) {
            z = getPackageInfoResult.successful;
        }
        if ((i & 2) != 0) {
            packageInfo = getPackageInfoResult.packageInfo;
        }
        return getPackageInfoResult.copy(z, packageInfo);
    }
    public final boolean getSuccessful() {
        return this.successful;
    }
    public final PackageInfo getPackageInfo() {
        return this.packageInfo;
    }

    public final GetPackageInfoResult copy(boolean successful, PackageInfo packageInfo) {
        return new GetPackageInfoResult(successful, packageInfo);
    }

    public boolean equals(Object other) {
        if (this == other) {
            return true;
        }
        if (!(other instanceof GetPackageInfoResult)) {
            return false;
        }
        GetPackageInfoResult getPackageInfoResult = (GetPackageInfoResult) other;
        return this.successful == getPackageInfoResult.successful && Intrinsics.areEqual(this.packageInfo, getPackageInfoResult.packageInfo);
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Type inference failed for: r0v1, types: [int] */
    /* high-level source view WARN: Type inference failed for: r0v4 */
    /* high-level source view WARN: Type inference failed for: r0v5 */
    public int hashCode() {
        boolean z = this.successful;
        ?? r0 = z;
        if (z) {
            r0 = 1;
        }
        int i = r0 * 31;
        PackageInfo packageInfo = this.packageInfo;
        return i + (packageInfo == null ? 0 : packageInfo.hashCode());
    }

    public String toString() {
        return "GetPackageInfoResult(successful=" + this.successful + ", packageInfo=" + this.packageInfo + ')';
    }

    public GetPackageInfoResult(boolean z, PackageInfo packageInfo) {
        this.successful = z;
        this.packageInfo = packageInfo;
    }

    public final boolean getSuccessful() {
        return this.successful;
    }

    public final PackageInfo getPackageInfo() {
        return this.packageInfo;
    }
}

