package com.google.android.datatransport.cct;

import com.google.android.datatransport.Encoding;
import com.google.android.datatransport.runtime.EncodedDestination;
import com.silkimen.http.HttpRequest;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Pattern;
public final class CCTDestination implements EncodedDestination {
    public static final CCTDestination INSTANCE;
    public static final CCTDestination LEGACY_INSTANCE;
    static final String zza;
    static final String zzb;
    private static final String zzc;
    private static final Set<Encoding> zzd;
    private final String zze;
    private final String zzf;

    static {
        String strZza = zzd.zza("hts/frbslgiggolai.o/0clgbthfra=snpoo", "tp:/ieaeogn.ogepscmvc/o/ac?omtjo_rt3");
        zza = strZza;
        String strZza2 = zzd.zza("hts/frbslgigp.ogepscmv/ieo/eaybtho", "tp:/ieaeogn-agolai.o/1frlglgc/aclg");
        zzb = strZza2;
        String strZza3 = zzd.zza("AzSCki82AwsLzKd5O8zo", "IayckHiZRO1EFl1aGoK");
        zzc = strZza3;
        zzd = Collections.unmodifiableSet(new HashSet(Arrays.asList(Encoding.of("proto"), Encoding.of("json"))));
        INSTANCE = new CCTDestination(strZza, null);
        LEGACY_INSTANCE = new CCTDestination(strZza2, strZza3);
    }

    public CCTDestination(String str, String str2) {
        this.zze = str;
        this.zzf = str2;
    }

    public static CCTDestination fromByteArray(byte[] bArr) {
        String str = new String(bArr, Charset.forName(HttpRequest.CHARSET_UTF8));
        if (!str.startsWith("1$")) {
            throw new IllegalArgumentException("Version marker missing from extras");
        }
        String[] strArrSplit = str.substring(2).split(Pattern.quote("\\"), 2);
        if (strArrSplit.length != 2) {
            throw new IllegalArgumentException("Extra is not a valid encoded LegacyFlgDestination");
        }
        String str2 = strArrSplit[0];
        if (str2.isEmpty()) {
            throw new IllegalArgumentException("Missing endpoint in CCTDestination extras");
        }
        String str3 = strArrSplit[1];
        if (str3.isEmpty()) {
            str3 = null;
        }
        return new CCTDestination(str2, str3);
    }

    public byte[] asByteArray() {
        String str = this.zzf;
        if (str == null && this.zze == null) {
            return null;
        }
        String str2 = this.zze;
        if (str == null) {
            str = "";
        }
        return String.format("%s%s%s%s", "1$", str2, "\\", str).getBytes(Charset.forName(HttpRequest.CHARSET_UTF8));
    }

    public String getAPIKey() {
        return this.zzf;
    }

    public String getEndPoint() {
        return this.zze;
    }

    @Override // com.google.android.datatransport.runtime.Destination
    public byte[] getExtras() {
        return asByteArray();
    }

    @Override // com.google.android.datatransport.runtime.Destination
    public String getName() {
        return "cct";
    }

    @Override // com.google.android.datatransport.runtime.EncodedDestination
    public Set<Encoding> getSupportedEncodings() {
        return zzd;
    }
}

