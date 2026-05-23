package com.getcapacitor;

import android.content.Context;
import android.text.TextUtils;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collection;
import org.apache.commons.io.IOUtils;
public class JSExport {
    private static String CALLBACK_PARAM = "_callback";
    private static String CATCHALL_OPTIONS_PARAM = "_options";

    public static String getGlobalJS(Context context, boolean z) {
        return "window.Capacitor = { DEBUG: " + z + " };";
    }

    public static String getCoreJS(Context context) throws JSExportException {
        try {
            return getJS(context, "public/native-bridge.js");
        } catch (IOException e) {
            throw new JSExportException("Unable to load native-bridge.js. Capacitor will not function!", e);
        }
    }

    private static String getJS(Context context, String str) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(context.getAssets().open(str)));
        StringBuffer stringBuffer = new StringBuffer();
        while (true) {
            String line = bufferedReader.readLine();
            if (line != null) {
                stringBuffer.append(line + IOUtils.LINE_SEPARATOR_UNIX);
            } else {
                return stringBuffer.toString();
            }
        }
    }

    public static String getCordovaJS(Context context) {
        try {
            return getJS(context, "public/cordova.js");
        } catch (IOException unused) {
            Logger.error("Unable to read public/cordova.js file, Cordova plugins will not work");
            return "";
        }
    }

    public static String getCordovaPluginsFileJS(Context context) {
        try {
            return getJS(context, "public/cordova_plugins.js");
        } catch (IOException unused) {
            Logger.error("Unable to read public/cordova_plugins.js file, Cordova plugins will not work");
            return "";
        }
    }

    public static String getPluginJS(Collection<PluginHandle> collection) {
        ArrayList arrayList = new ArrayList();
        arrayList.add("// Begin: Capacitor Plugin JS");
        for (PluginHandle pluginHandle : collection) {
            arrayList.add("(function(w) {\nvar a = w.Capacitor; var p = a.Plugins;\nvar t = p['" + pluginHandle.getId() + "'] = {};\nt.addListener = function(eventName, callback) {\n  return w.Capacitor.addListener('" + pluginHandle.getId() + "', eventName, callback);\n}");
            for (PluginMethodHandle pluginMethodHandle : pluginHandle.getMethods()) {
                if (!pluginMethodHandle.getName().equals("addListener") && !pluginMethodHandle.getName().equals("removeListener")) {
                    arrayList.add(generateMethodJS(pluginHandle, pluginMethodHandle));
                }
            }
            arrayList.add("})(window);\n");
        }
        return TextUtils.join(IOUtils.LINE_SEPARATOR_UNIX, arrayList);
    }

    public static String getCordovaPluginJS(Context context) {
        return getFilesContent(context, "public/plugins");
    }

    public static String getFilesContent(Context context, String str) {
        String[] list;
        StringBuilder sb = new StringBuilder();
        try {
            list = context.getAssets().list(str);
        } catch (IOException unused) {
            Logger.error("Unable to read file at path " + str);
        }
        if (list.length > 0) {
            for (String str2 : list) {
                sb.append(getFilesContent(context, str + "/" + str2));
            }
            return sb.toString();
        }
        return getJS(context, str);
    }

    private static String generateMethodJS(PluginHandle pluginHandle, PluginMethodHandle pluginMethodHandle) {
        ArrayList arrayList;
        arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        arrayList2.add(CATCHALL_OPTIONS_PARAM);
        String returnType = pluginMethodHandle.getReturnType();
        if (returnType == PluginMethod.RETURN_CALLBACK) {
            arrayList2.add(CALLBACK_PARAM);
        }
        arrayList.add("t['" + pluginMethodHandle.getName() + "'] = function(" + TextUtils.join(", ", arrayList2) + ") {");
        returnType.hashCode();
        switch (returnType) {
            case "promise":
                arrayList.add("return w.Capacitor.nativePromise('" + pluginHandle.getId() + "', '" + pluginMethodHandle.getName() + "', " + CATCHALL_OPTIONS_PARAM + ")");
                break;
            case "callback":
                arrayList.add("return w.Capacitor.nativeCallback('" + pluginHandle.getId() + "', '" + pluginMethodHandle.getName() + "', " + CATCHALL_OPTIONS_PARAM + ", " + CALLBACK_PARAM + ")");
                break;
            case "none":
                arrayList.add("return w.Capacitor.nativeCallback('" + pluginHandle.getId() + "', '" + pluginMethodHandle.getName() + "', " + CATCHALL_OPTIONS_PARAM + ")");
                break;
        }
        arrayList.add("}");
        return TextUtils.join(IOUtils.LINE_SEPARATOR_UNIX, arrayList);
    }
}

