package com.google.android.gms.dynamite;

import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.os.IBinder;
import android.os.IInterface;
import android.os.RemoteException;
import android.util.Log;
import com.google.android.gms.common.GoogleApiAvailabilityLight;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.common.util.CrashUtils;
import com.google.android.gms.dynamic.IObjectWrapper;
import com.google.android.gms.dynamic.ObjectWrapper;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
public final class DynamiteModule {
    private static Boolean zzif = null;
    private static zzi zzig = null;
    private static zzk zzih = null;
    private static String zzii = null;
    private static int zzij = -1;
    private final Context zzin;
    private static final ThreadLocal<zza> zzik = new ThreadLocal<>();
    private static final VersionPolicy.zza zzil = new com.google.android.gms.dynamite.zza();
    public static final VersionPolicy PREFER_REMOTE = new com.google.android.gms.dynamite.zzb();
    public static final VersionPolicy PREFER_LOCAL = new zzc();
    public static final VersionPolicy PREFER_HIGHEST_OR_LOCAL_VERSION = new zzd();
    public static final VersionPolicy PREFER_HIGHEST_OR_LOCAL_VERSION_NO_FORCE_STAGING = new zze();
    public static final VersionPolicy PREFER_HIGHEST_OR_REMOTE_VERSION = new zzf();
    private static final VersionPolicy zzim = new zzg();

    public static class DynamiteLoaderClassLoader {
        public static ClassLoader sClassLoader;
    }

    public interface VersionPolicy {

        public interface zza {
            int getLocalVersion(Context context, String str);

            int zza(Context context, String str, boolean z) throws LoadingException;
        }

        public static class zzb {
            public int zzir = 0;
            public int zzis = 0;
            public int zzit = 0;
        }

        zzb zza(Context context, String str, zza zzaVar) throws LoadingException;
    }

    private static class zza {
        public Cursor zzio;

        private zza() {
        }

        /* synthetic */ zza(com.google.android.gms.dynamite.zza zzaVar) {
            this();
        }
    }

    public static DynamiteModule load(Context context, VersionPolicy versionPolicy, String str) throws LoadingException {
        ThreadLocal<zza> threadLocal = zzik;
        zza zzaVar = threadLocal.get();
        com.google.android.gms.dynamite.zza zzaVar2 = null;
        zza zzaVar3 = new zza(zzaVar2);
        threadLocal.set(zzaVar3);
        try {
            VersionPolicy.zzb zzbVarZza = versionPolicy.zza(context, str, zzil);
            Log.i("DynamiteModule", new StringBuilder(String.valueOf(str).length() + 68 + String.valueOf(str).length()).append("Considering local module ").append(str).append(":").append(zzbVarZza.zzir).append(" and remote module ").append(str).append(":").append(zzbVarZza.zzis).toString());
            if (zzbVarZza.zzit == 0 || ((zzbVarZza.zzit == -1 && zzbVarZza.zzir == 0) || (zzbVarZza.zzit == 1 && zzbVarZza.zzis == 0))) {
                throw new LoadingException(new StringBuilder(91).append("No acceptable module found. Local version is ").append(zzbVarZza.zzir).append(" and remote version is ").append(zzbVarZza.zzis).append(".").toString(), zzaVar2);
            }
            if (zzbVarZza.zzit == -1) {
                DynamiteModule dynamiteModuleZze = zze(context, str);
                if (zzaVar3.zzio != null) {
                    zzaVar3.zzio.close();
                }
                threadLocal.set(zzaVar);
                return dynamiteModuleZze;
            }
            if (zzbVarZza.zzit != 1) {
                throw new LoadingException(new StringBuilder(47).append("VersionPolicy returned invalid code:").append(zzbVarZza.zzit).toString(), zzaVar2);
            }
            try {
                DynamiteModule dynamiteModuleZza = zza(context, str, zzbVarZza.zzis);
                if (zzaVar3.zzio != null) {
                    zzaVar3.zzio.close();
                }
                threadLocal.set(zzaVar);
                return dynamiteModuleZza;
            } catch (LoadingException e) {
                String strValueOf = String.valueOf(e.getMessage());
                Log.w("DynamiteModule", strValueOf.length() != 0 ? "Failed to load remote module: ".concat(strValueOf) : new String("Failed to load remote module: "));
                if (zzbVarZza.zzir == 0 || versionPolicy.zza(context, str, new zzb(zzbVarZza.zzir, 0)).zzit != -1) {
                    throw new LoadingException("Remote load failed. No local fallback found.", e, zzaVar2);
                }
                DynamiteModule dynamiteModuleZze2 = zze(context, str);
                if (zzaVar3.zzio != null) {
                    zzaVar3.zzio.close();
                }
                zzik.set(zzaVar);
                return dynamiteModuleZze2;
            }
        } catch (Throwable th) {
            if (zzaVar3.zzio != null) {
                zzaVar3.zzio.close();
            }
            zzik.set(zzaVar);
            throw th;
        }
    }

    public static class LoadingException extends Exception {
        private LoadingException(String str) {
            super(str);
        }

        private LoadingException(String str, Throwable th) {
            super(str, th);
        }

        /* synthetic */ LoadingException(String str, com.google.android.gms.dynamite.zza zzaVar) {
            this(str);
        }

        /* synthetic */ LoadingException(String str, Throwable th, com.google.android.gms.dynamite.zza zzaVar) {
            this(str, th);
        }
    }

    private static class zzb implements VersionPolicy.zza {
        private final int zzip;
        private final int zziq = 0;

        public zzb(int i, int i2) {
            this.zzip = i;
        }

        @Override // com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza
        public final int zza(Context context, String str, boolean z) {
            return 0;
        }

        @Override // com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza
        public final int getLocalVersion(Context context, String str) {
            return this.zzip;
        }
    }

    public static int getLocalVersion(Context context, String str) {
        try {
            Class<?> clsLoadClass = context.getApplicationContext().getClassLoader().loadClass(new StringBuilder(String.valueOf(str).length() + 61).append("com.google.android.gms.dynamite.descriptors.").append(str).append(".ModuleDescriptor").toString());
            Field declaredField = clsLoadClass.getDeclaredField("MODULE_ID");
            Field declaredField2 = clsLoadClass.getDeclaredField("MODULE_VERSION");
            if (!declaredField.get(null).equals(str)) {
                String strValueOf = String.valueOf(declaredField.get(null));
                Log.e("DynamiteModule", new StringBuilder(String.valueOf(strValueOf).length() + 51 + String.valueOf(str).length()).append("Module descriptor id '").append(strValueOf).append("' didn't match expected id '").append(str).append("'").toString());
                return 0;
            }
            return declaredField2.getInt(null);
        } catch (ClassNotFoundException unused) {
            Log.w("DynamiteModule", new StringBuilder(String.valueOf(str).length() + 45).append("Local module descriptor class for ").append(str).append(" not found.").toString());
            return 0;
        } catch (Exception e) {
            String strValueOf2 = String.valueOf(e.getMessage());
            Log.e("DynamiteModule", strValueOf2.length() != 0 ? "Failed to load module descriptor class: ".concat(strValueOf2) : new String("Failed to load module descriptor class: "));
            return 0;
        }
    }

    public static int zza(Context context, String str, boolean z) {
        Class<?> clsLoadClass;
        Field declaredField;
        Boolean bool;
        try {
            synchronized (DynamiteModule.class) {
                Boolean bool2 = zzif;
                if (bool2 == null) {
                    try {
                        clsLoadClass = context.getApplicationContext().getClassLoader().loadClass(DynamiteLoaderClassLoader.class.getName());
                        declaredField = clsLoadClass.getDeclaredField("sClassLoader");
                    } catch (ClassNotFoundException | IllegalAccessException | NoSuchFieldException e) {
                        String strValueOf = String.valueOf(e);
                        Log.w("DynamiteModule", new StringBuilder(String.valueOf(strValueOf).length() + 30).append("Failed to load module via V2: ").append(strValueOf).toString());
                        bool2 = Boolean.FALSE;
                    }
                    synchronized (clsLoadClass) {
                        ClassLoader classLoader = (ClassLoader) declaredField.get(null);
                        if (classLoader != null) {
                            if (classLoader == ClassLoader.getSystemClassLoader()) {
                                bool = Boolean.FALSE;
                            } else {
                                try {
                                    zza(classLoader);
                                } catch (LoadingException unused) {
                                }
                                bool = Boolean.TRUE;
                            }
                        } else if ("com.google.android.gms".equals(context.getApplicationContext().getPackageName())) {
                            declaredField.set(null, ClassLoader.getSystemClassLoader());
                            bool = Boolean.FALSE;
                        } else {
                            try {
                                int iZzc = zzc(context, str, z);
                                String str2 = zzii;
                                if (str2 != null && !str2.isEmpty()) {
                                    zzh zzhVar = new zzh(zzii, ClassLoader.getSystemClassLoader());
                                    zza(zzhVar);
                                    declaredField.set(null, zzhVar);
                                    zzif = Boolean.TRUE;
                                    return iZzc;
                                }
                                return iZzc;
                            } catch (LoadingException unused2) {
                                declaredField.set(null, ClassLoader.getSystemClassLoader());
                                bool = Boolean.FALSE;
                            }
                        }
                        bool2 = bool;
                        zzif = bool2;
                    }
                }
                if (bool2.booleanValue()) {
                    try {
                        return zzc(context, str, z);
                    } catch (LoadingException e2) {
                        String strValueOf2 = String.valueOf(e2.getMessage());
                        Log.w("DynamiteModule", strValueOf2.length() != 0 ? "Failed to retrieve remote module version: ".concat(strValueOf2) : new String("Failed to retrieve remote module version: "));
                        return 0;
                    }
                }
                return zzb(context, str, z);
            }
        } catch (Throwable th) {
            CrashUtils.addDynamiteErrorToDropBox(context, th);
            throw th;
        }
    }

    private static int zzb(Context context, String str, boolean z) {
        zzi zziVarZzj = zzj(context);
        if (zziVarZzj == null) {
            return 0;
        }
        try {
            if (zziVarZzj.zzak() < 2) {
                Log.w("DynamiteModule", "IDynamite loader version < 2, falling back to getModuleVersion2");
                return zziVarZzj.zza(ObjectWrapper.wrap(context), str, z);
            }
            return zziVarZzj.zzb(ObjectWrapper.wrap(context), str, z);
        } catch (RemoteException e) {
            String strValueOf = String.valueOf(e.getMessage());
            Log.w("DynamiteModule", strValueOf.length() != 0 ? "Failed to retrieve remote module version: ".concat(strValueOf) : new String("Failed to retrieve remote module version: "));
            return 0;
        }
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Removed duplicated region for block: B:29:0x0084  */
    /* high-level source view WARN: Removed duplicated region for block: B:51:0x00b8  */
    /* high-level source view WARN: Type inference failed for: r0v0, types: [com.google.android.gms.dynamite.zza] */
    /* high-level source view WARN: Type inference failed for: r0v1, types: [android.database.Cursor] */
    /* high-level source view WARN: Type inference failed for: r0v2 */
    /* high-level source view WARN: Type inference failed for: r0v3 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private static int zzc(Context context, String str, boolean z) throws Throwable {
        Cursor cursor;
        ?? r0 = 0;
        Cursor cursor2 = null;
        try {
            ContentResolver contentResolver = context.getContentResolver();
            String str2 = z ? "api_force_staging" : "api";
            Cursor cursorQuery = contentResolver.query(Uri.parse(new StringBuilder(String.valueOf(str2).length() + 42 + String.valueOf(str).length()).append("content://com.google.android.gms.chimera/").append(str2).append("/").append(str).toString()), null, null, null, null);
            if (cursorQuery != null) {
                try {
                    if (cursorQuery.moveToFirst()) {
                        int i = cursorQuery.getInt(0);
                        if (i > 0) {
                            synchronized (DynamiteModule.class) {
                                zzii = cursorQuery.getString(2);
                                int columnIndex = cursorQuery.getColumnIndex("loaderVersion");
                                if (columnIndex >= 0) {
                                    zzij = cursorQuery.getInt(columnIndex);
                                }
                            }
                            zza zzaVar = zzik.get();
                            if (zzaVar == null || zzaVar.zzio != null) {
                                cursor2 = cursorQuery;
                            } else {
                                zzaVar.zzio = cursorQuery;
                            }
                        }
                        if (cursor2 != null) {
                            cursor2.close();
                        }
                        return i;
                    }
                } catch (Exception e) {
                    cursor = cursorQuery;
                    e = e;
                    try {
                        if (e instanceof LoadingException) {
                            throw e;
                        }
                        throw new LoadingException("V2 version check failed", e, r0);
                    } catch (Throwable th) {
                        th = th;
                        r0 = cursor;
                        if (r0 != 0) {
                            r0.close();
                        }
                        throw th;
                    }
                } catch (Throwable th2) {
                    r0 = cursorQuery;
                    th = th2;
                    if (r0 != 0) {
                    }
                    throw th;
                }
            }
            Log.w("DynamiteModule", "Failed to retrieve remote module version.");
            throw new LoadingException("Failed to connect to dynamite module ContentResolver.", (com.google.android.gms.dynamite.zza) r0);
        } catch (Exception e2) {
            e = e2;
            cursor = null;
        } catch (Throwable th3) {
            th = th3;
        }
    }

    public static int getRemoteVersion(Context context, String str) {
        return zza(context, str, false);
    }

    private static DynamiteModule zze(Context context, String str) {
        String strValueOf = String.valueOf(str);
        Log.i("DynamiteModule", strValueOf.length() != 0 ? "Selected local version of ".concat(strValueOf) : new String("Selected local version of "));
        return new DynamiteModule(context.getApplicationContext());
    }

    private static DynamiteModule zza(Context context, String str, int i) throws LoadingException {
        Boolean bool;
        IObjectWrapper iObjectWrapperZza;
        com.google.android.gms.dynamite.zza zzaVar = null;
        try {
            synchronized (DynamiteModule.class) {
                bool = zzif;
            }
            if (bool == null) {
                throw new LoadingException("Failed to determine which loading route to use.", zzaVar);
            }
            if (bool.booleanValue()) {
                return zzb(context, str, i);
            }
            Log.i("DynamiteModule", new StringBuilder(String.valueOf(str).length() + 51).append("Selected remote version of ").append(str).append(", version >= ").append(i).toString());
            zzi zziVarZzj = zzj(context);
            if (zziVarZzj == null) {
                throw new LoadingException("Failed to create IDynamiteLoader.", zzaVar);
            }
            if (zziVarZzj.zzak() >= 2) {
                iObjectWrapperZza = zziVarZzj.zzb(ObjectWrapper.wrap(context), str, i);
            } else {
                Log.w("DynamiteModule", "Dynamite loader version < 2, falling back to createModuleContext");
                iObjectWrapperZza = zziVarZzj.zza(ObjectWrapper.wrap(context), str, i);
            }
            if (ObjectWrapper.unwrap(iObjectWrapperZza) == null) {
                throw new LoadingException("Failed to load remote module.", zzaVar);
            }
            return new DynamiteModule((Context) ObjectWrapper.unwrap(iObjectWrapperZza));
        } catch (RemoteException e) {
            throw new LoadingException("Failed to load remote module.", e, zzaVar);
        } catch (LoadingException e2) {
            throw e2;
        } catch (Throwable th) {
            CrashUtils.addDynamiteErrorToDropBox(context, th);
            throw new LoadingException("Failed to load remote module.", th, zzaVar);
        }
    }

    private static zzi zzj(Context context) {
        zzi zzjVar;
        synchronized (DynamiteModule.class) {
            zzi zziVar = zzig;
            if (zziVar != null) {
                return zziVar;
            }
            if (GoogleApiAvailabilityLight.getInstance().isGooglePlayServicesAvailable(context) != 0) {
                return null;
            }
            try {
                IBinder iBinder = (IBinder) context.createPackageContext("com.google.android.gms", 3).getClassLoader().loadClass("com.google.android.gms.chimera.container.DynamiteLoaderImpl").newInstance();
                if (iBinder == null) {
                    zzjVar = null;
                } else {
                    IInterface iInterfaceQueryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.dynamite.IDynamiteLoader");
                    if (iInterfaceQueryLocalInterface instanceof zzi) {
                        zzjVar = (zzi) iInterfaceQueryLocalInterface;
                    } else {
                        zzjVar = new zzj(iBinder);
                    }
                }
                if (zzjVar != null) {
                    zzig = zzjVar;
                    return zzjVar;
                }
            } catch (Exception e) {
                String strValueOf = String.valueOf(e.getMessage());
                Log.e("DynamiteModule", strValueOf.length() != 0 ? "Failed to load IDynamiteLoader from GmsCore: ".concat(strValueOf) : new String("Failed to load IDynamiteLoader from GmsCore: "));
            }
            return null;
        }
    }

    public final Context getModuleContext() {
        return this.zzin;
    }

    private static DynamiteModule zzb(Context context, String str, int i) throws RemoteException, LoadingException {
        zzk zzkVar;
        IObjectWrapper iObjectWrapperZza;
        Log.i("DynamiteModule", new StringBuilder(String.valueOf(str).length() + 51).append("Selected remote version of ").append(str).append(", version >= ").append(i).toString());
        synchronized (DynamiteModule.class) {
            zzkVar = zzih;
        }
        com.google.android.gms.dynamite.zza zzaVar = null;
        if (zzkVar == null) {
            throw new LoadingException("DynamiteLoaderV2 was not cached.", zzaVar);
        }
        zza zzaVar2 = zzik.get();
        if (zzaVar2 == null || zzaVar2.zzio == null) {
            throw new LoadingException("No result cursor", zzaVar);
        }
        Context applicationContext = context.getApplicationContext();
        Cursor cursor = zzaVar2.zzio;
        ObjectWrapper.wrap(null);
        if (zzaj().booleanValue()) {
            Log.v("DynamiteModule", "Dynamite loader version >= 2, using loadModule2NoCrashUtils");
            iObjectWrapperZza = zzkVar.zzb(ObjectWrapper.wrap(applicationContext), str, i, ObjectWrapper.wrap(cursor));
        } else {
            Log.w("DynamiteModule", "Dynamite loader version < 2, falling back to loadModule2");
            iObjectWrapperZza = zzkVar.zza(ObjectWrapper.wrap(applicationContext), str, i, ObjectWrapper.wrap(cursor));
        }
        Context context2 = (Context) ObjectWrapper.unwrap(iObjectWrapperZza);
        if (context2 == null) {
            throw new LoadingException("Failed to get module context", zzaVar);
        }
        return new DynamiteModule(context2);
    }

    private static Boolean zzaj() {
        Boolean boolValueOf;
        synchronized (DynamiteModule.class) {
            boolValueOf = Boolean.valueOf(zzij >= 2);
        }
        return boolValueOf;
    }

    private static void zza(ClassLoader classLoader) throws LoadingException {
        zzk zzlVar;
        com.google.android.gms.dynamite.zza zzaVar = null;
        try {
            IBinder iBinder = (IBinder) classLoader.loadClass("com.google.android.gms.dynamiteloader.DynamiteLoaderV2").getConstructor(new Class[0]).newInstance(new Object[0]);
            if (iBinder == null) {
                zzlVar = null;
            } else {
                IInterface iInterfaceQueryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.dynamite.IDynamiteLoaderV2");
                if (iInterfaceQueryLocalInterface instanceof zzk) {
                    zzlVar = (zzk) iInterfaceQueryLocalInterface;
                } else {
                    zzlVar = new zzl(iBinder);
                }
            }
            zzih = zzlVar;
        } catch (ClassNotFoundException | IllegalAccessException | InstantiationException | NoSuchMethodException | InvocationTargetException e) {
            throw new LoadingException("Failed to instantiate dynamite loader", e, zzaVar);
        }
    }

    public final IBinder instantiate(String str) throws LoadingException {
        try {
            return (IBinder) this.zzin.getClassLoader().loadClass(str).newInstance();
        } catch (ClassNotFoundException | IllegalAccessException | InstantiationException e) {
            String strValueOf = String.valueOf(str);
            throw new LoadingException(strValueOf.length() != 0 ? "Failed to instantiate module class: ".concat(strValueOf) : new String("Failed to instantiate module class: "), e, null);
        }
    }

    private DynamiteModule(Context context) {
        this.zzin = (Context) Preconditions.checkNotNull(context);
    }
}

