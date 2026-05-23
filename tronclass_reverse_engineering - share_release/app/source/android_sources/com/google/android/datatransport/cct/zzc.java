package com.google.android.datatransport.cct;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Build;
import com.google.android.datatransport.Encoding;
import com.google.android.datatransport.cct.a.zzaa;
import com.google.android.datatransport.cct.a.zzo;
import com.google.android.datatransport.cct.a.zzq;
import com.google.android.datatransport.cct.a.zzs;
import com.google.android.datatransport.cct.a.zzt;
import com.google.android.datatransport.cct.a.zzv;
import com.google.android.datatransport.cct.a.zzx;
import com.google.android.datatransport.cct.a.zzy;
import com.google.android.datatransport.runtime.EncodedPayload;
import com.google.android.datatransport.runtime.EventInternal;
import com.google.android.datatransport.runtime.backends.BackendRequest;
import com.google.android.datatransport.runtime.backends.BackendResponse;
import com.google.android.datatransport.runtime.backends.TransportBackend;
import com.google.android.datatransport.runtime.logging.Logging;
import com.google.android.datatransport.runtime.retries.Retries;
import com.google.android.datatransport.runtime.time.Clock;
import com.google.firebase.encoders.DataEncoder;
import com.google.firebase.encoders.EncodingException;
import com.silkimen.http.HttpRequest;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.ByteBuffer;
import java.nio.channels.Channels;
import java.nio.channels.WritableByteChannel;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
import java.util.zip.GZIPInputStream;
import java.util.zip.GZIPOutputStream;
import org.opencv.videoio.Videoio;
final class zzc implements TransportBackend {
    private final ConnectivityManager zzb;
    private final Clock zzd;
    private final Clock zze;
    private final DataEncoder zza = zzs.zza();
    final URL zzc = zza(CCTDestination.zza);
    private final int zzf = 40000;
    static final class zza {
        final URL zza;
        final zzo zzb;
        final String zzc;

        zza(URL url, zzo zzoVar, String str) {
            this.zza = url;
            this.zzb = zzoVar;
            this.zzc = str;
        }

        zza zza(URL url) {
            return new zza(url, this.zzb, this.zzc);
        }
    }
    static final class zzb {
        final int zza;
        final URL zzb;
        final long zzc;

        zzb(int i, URL url, long j) {
            this.zza = i;
            this.zzb = url;
            this.zzc = j;
        }
    }

    zzc(Context context, Clock clock, Clock clock2) {
        this.zzb = (ConnectivityManager) context.getSystemService("connectivity");
        this.zzd = clock2;
        this.zze = clock;
    }

    private static URL zza(String str) {
        try {
            return new URL(str);
        } catch (MalformedURLException e) {
            throw new IllegalArgumentException("Invalid url: " + str, e);
        }
    }

    @Override // com.google.android.datatransport.runtime.backends.TransportBackend
    public EventInternal decorate(EventInternal eventInternal) {
        int subtype;
        NetworkInfo activeNetworkInfo = this.zzb.getActiveNetworkInfo();
        EventInternal.Builder builderAddMetadata = eventInternal.toBuilder().addMetadata("sdk-version", Build.VERSION.SDK_INT).addMetadata("model", Build.MODEL).addMetadata("hardware", Build.HARDWARE).addMetadata("device", Build.DEVICE).addMetadata("product", Build.PRODUCT).addMetadata("os-uild", Build.ID).addMetadata("manufacturer", Build.MANUFACTURER).addMetadata("fingerprint", Build.FINGERPRINT);
        Calendar.getInstance();
        EventInternal.Builder builderAddMetadata2 = builderAddMetadata.addMetadata("tz-offset", TimeZone.getDefault().getOffset(Calendar.getInstance().getTimeInMillis()) / 1000).addMetadata("net-type", activeNetworkInfo == null ? zzy.zzc.zzs.zza() : activeNetworkInfo.getType());
        if (activeNetworkInfo == null) {
            subtype = zzy.zzb.zza.zza();
        } else {
            subtype = activeNetworkInfo.getSubtype();
            if (subtype == -1) {
                subtype = zzy.zzb.zzu.zza();
            } else if (zzy.zzb.zza(subtype) == null) {
                subtype = 0;
            }
        }
        return builderAddMetadata2.addMetadata("mobile-subtype", subtype).build();
    }

    @Override // com.google.android.datatransport.runtime.backends.TransportBackend
    public BackendResponse send(BackendRequest backendRequest) {
        zzt.zza zzaVarZza;
        HashMap map = new HashMap();
        for (EventInternal eventInternal : backendRequest.getEvents()) {
            String transportName = eventInternal.getTransportName();
            if (map.containsKey(transportName)) {
                ((List) map.get(transportName)).add(eventInternal);
            } else {
                ArrayList arrayList = new ArrayList();
                arrayList.add(eventInternal);
                map.put(transportName, arrayList);
            }
        }
        ArrayList arrayList2 = new ArrayList();
        for (Map.Entry entry : map.entrySet()) {
            EventInternal eventInternal2 = (EventInternal) ((List) entry.getValue()).get(0);
            zzv.zza zzaVarZza2 = zzv.zza().zza(zzaa.zza).zza(this.zze.getTime()).zzb(this.zzd.getTime()).zza(zzq.zza().zza(zzq.zzb.zzb).zza(com.google.android.datatransport.cct.a.zza.zza().zza(eventInternal2.getInteger("sdk-version")).zze(eventInternal2.get("model")).zzc(eventInternal2.get("hardware")).zza(eventInternal2.get("device")).zzg(eventInternal2.get("product")).zzf(eventInternal2.get("os-uild")).zzd(eventInternal2.get("manufacturer")).zzb(eventInternal2.get("fingerprint")).zza()).zza());
            try {
                zzaVarZza2.zzb(Integer.valueOf((String) entry.getKey()).intValue());
            } catch (NumberFormatException unused) {
                zzaVarZza2.zzb((String) entry.getKey());
            }
            ArrayList arrayList3 = new ArrayList();
            for (EventInternal eventInternal3 : (List) entry.getValue()) {
                EncodedPayload encodedPayload = eventInternal3.getEncodedPayload();
                Encoding encoding = encodedPayload.getEncoding();
                if (encoding.equals(Encoding.of("proto"))) {
                    zzaVarZza = zzt.zza(encodedPayload.getBytes());
                } else if (encoding.equals(Encoding.of("json"))) {
                    zzaVarZza = zzt.zza(new String(encodedPayload.getBytes(), Charset.forName(HttpRequest.CHARSET_UTF8)));
                } else {
                    Logging.w("CctTransportBackend", "Received event of unsupported encoding %s. Skipping...", encoding);
                }
                zzaVarZza.zza(eventInternal3.getEventMillis()).zzb(eventInternal3.getUptimeMillis()).zzc(eventInternal3.getLong("tz-offset")).zza(zzy.zza().zza(zzy.zzc.zza(eventInternal3.getInteger("net-type"))).zza(zzy.zzb.zza(eventInternal3.getInteger("mobile-subtype"))).zza());
                if (eventInternal3.getCode() != null) {
                    zzaVarZza.zza(eventInternal3.getCode().intValue());
                }
                arrayList3.add(zzaVarZza.zza());
            }
            zzaVarZza2.zza(arrayList3);
            arrayList2.add(zzaVarZza2.zza());
        }
        zzo zzoVarZza = zzo.zza(arrayList2);
        URL urlZza = this.zzc;
        if (backendRequest.getExtras() != null) {
            try {
                CCTDestination cCTDestinationFromByteArray = CCTDestination.fromByteArray(backendRequest.getExtras());
                aPIKey = cCTDestinationFromByteArray.getAPIKey() != null ? cCTDestinationFromByteArray.getAPIKey() : null;
                if (cCTDestinationFromByteArray.getEndPoint() != null) {
                    urlZza = zza(cCTDestinationFromByteArray.getEndPoint());
                }
            } catch (IllegalArgumentException unused2) {
                return BackendResponse.fatalError();
            }
        }
        try {
            zzb zzbVar = (zzb) Retries.retry(5, new zza(urlZza, zzoVarZza, aPIKey), com.google.android.datatransport.cct.zza.zza(this), com.google.android.datatransport.cct.zzb.zza());
            if (zzbVar.zza == 200) {
                return BackendResponse.ok(zzbVar.zzc);
            }
            int i = zzbVar.zza;
            if (i < 500 && i != 404) {
                return BackendResponse.fatalError();
            }
            return BackendResponse.transientError();
        } catch (IOException e) {
            Logging.e("CctTransportBackend", "Could not make request to the backend", e);
            return BackendResponse.transientError();
        }
    }
    public zzb zza(zza zzaVar) throws IOException {
        InputStream inputStream;
        Logging.d("CctTransportBackend", "Making request to: %s", zzaVar.zza);
        HttpURLConnection httpURLConnection = (HttpURLConnection) zzaVar.zza.openConnection();
        httpURLConnection.setConnectTimeout(30000);
        httpURLConnection.setReadTimeout(this.zzf);
        httpURLConnection.setDoOutput(true);
        httpURLConnection.setInstanceFollowRedirects(false);
        httpURLConnection.setRequestMethod("POST");
        httpURLConnection.setRequestProperty(HttpRequest.HEADER_USER_AGENT, String.format("datatransport/%s android/", "2.2.0"));
        httpURLConnection.setRequestProperty(HttpRequest.HEADER_CONTENT_ENCODING, HttpRequest.ENCODING_GZIP);
        httpURLConnection.setRequestProperty("Content-Type", HttpRequest.CONTENT_TYPE_JSON);
        httpURLConnection.setRequestProperty(HttpRequest.HEADER_ACCEPT_ENCODING, HttpRequest.ENCODING_GZIP);
        String str = zzaVar.zzc;
        if (str != null) {
            httpURLConnection.setRequestProperty("X-Goog-Api-Key", str);
        }
        WritableByteChannel writableByteChannelNewChannel = Channels.newChannel(httpURLConnection.getOutputStream());
        try {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            GZIPOutputStream gZIPOutputStream = new GZIPOutputStream(byteArrayOutputStream);
            try {
                try {
                    this.zza.encode(zzaVar.zzb, new OutputStreamWriter(gZIPOutputStream));
                    gZIPOutputStream.close();
                    writableByteChannelNewChannel.write(ByteBuffer.wrap(byteArrayOutputStream.toByteArray()));
                    int responseCode = httpURLConnection.getResponseCode();
                    Logging.i("CctTransportBackend", "Status Code: " + responseCode);
                    Logging.i("CctTransportBackend", "Content-Type: " + httpURLConnection.getHeaderField("Content-Type"));
                    Logging.i("CctTransportBackend", "Content-Encoding: " + httpURLConnection.getHeaderField(HttpRequest.HEADER_CONTENT_ENCODING));
                    if (responseCode != 302 && responseCode != 301 && responseCode != 307) {
                        if (responseCode != 200) {
                            return new zzb(responseCode, null, 0L);
                        }
                        String headerField = httpURLConnection.getHeaderField(HttpRequest.HEADER_CONTENT_ENCODING);
                        if (headerField != null && headerField.equals(HttpRequest.ENCODING_GZIP)) {
                            inputStream = new GZIPInputStream(httpURLConnection.getInputStream());
                        } else {
                            inputStream = httpURLConnection.getInputStream();
                        }
                        try {
                            return new zzb(responseCode, null, zzx.zza(new InputStreamReader(inputStream)).zza());
                        } finally {
                            inputStream.close();
                        }
                    }
                    return new zzb(responseCode, new URL(httpURLConnection.getHeaderField(HttpRequest.HEADER_LOCATION)), 0L);
                } finally {
                    gZIPOutputStream.close();
                }
            } catch (EncodingException | IOException e) {
                Logging.e("CctTransportBackend", "Couldn't encode request, returning with 400", e);
                return new zzb(Videoio.CAP_PROP_XI_DOWNSAMPLING, null, 0L);
            }
        } finally {
            writableByteChannelNewChannel.close();
        }
    }

    static /* synthetic */ zza zza(zza zzaVar, zzb zzbVar) {
        URL url = zzbVar.zzb;
        if (url == null) {
            return null;
        }
        Logging.d("CctTransportBackend", "Following redirect to: %s", url);
        return zzaVar.zza(zzbVar.zzb);
    }
}

