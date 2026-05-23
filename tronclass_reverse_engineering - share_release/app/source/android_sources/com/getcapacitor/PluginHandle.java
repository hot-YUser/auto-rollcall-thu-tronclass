package com.getcapacitor;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
public class PluginHandle {
    private final Bridge bridge;
    private Plugin instance;
    private NativePlugin pluginAnnotation;
    private final Class<? extends Plugin> pluginClass;
    private final String pluginId;
    private Map<String, PluginMethodHandle> pluginMethods = new HashMap();

    public PluginHandle(Bridge bridge, Class<? extends Plugin> cls) throws InvalidPluginException, PluginLoadException {
        this.bridge = bridge;
        this.pluginClass = cls;
        NativePlugin nativePlugin = (NativePlugin) cls.getAnnotation(NativePlugin.class);
        if (nativePlugin == null) {
            throw new InvalidPluginException("No @NativePlugin annotation found for plugin " + cls.getName());
        }
        if (!nativePlugin.name().equals("")) {
            this.pluginId = nativePlugin.name();
        } else {
            this.pluginId = cls.getSimpleName();
        }
        this.pluginAnnotation = nativePlugin;
        indexMethods(cls);
        load();
    }

    public Class<? extends Plugin> getPluginClass() {
        return this.pluginClass;
    }

    public String getId() {
        return this.pluginId;
    }

    public NativePlugin getPluginAnnotation() {
        return this.pluginAnnotation;
    }

    public Plugin getInstance() {
        return this.instance;
    }

    public Collection<PluginMethodHandle> getMethods() {
        return this.pluginMethods.values();
    }

    public Plugin load() throws PluginLoadException {
        Plugin plugin = this.instance;
        if (plugin != null) {
            return plugin;
        }
        try {
            Plugin pluginNewInstance = this.pluginClass.newInstance();
            this.instance = pluginNewInstance;
            pluginNewInstance.setPluginHandle(this);
            this.instance.setBridge(this.bridge);
            this.instance.load();
            return this.instance;
        } catch (IllegalAccessException | InstantiationException unused) {
            throw new PluginLoadException("Unable to load plugin instance. Ensure plugin is publicly accessible");
        }
    }

    public void invoke(String str, PluginCall pluginCall) throws IllegalAccessException, PluginLoadException, InvalidPluginMethodException, InvocationTargetException {
        if (this.instance == null) {
            load();
        }
        PluginMethodHandle pluginMethodHandle = this.pluginMethods.get(str);
        if (pluginMethodHandle == null) {
            throw new InvalidPluginMethodException("No method " + str + " found for plugin " + this.pluginClass.getName());
        }
        pluginMethodHandle.getMethod().invoke(this.instance, pluginCall);
    }

    private void indexMethods(Class<? extends Plugin> cls) {
        for (Method method : this.pluginClass.getMethods()) {
            PluginMethod pluginMethod = (PluginMethod) method.getAnnotation(PluginMethod.class);
            if (pluginMethod != null) {
                this.pluginMethods.put(method.getName(), new PluginMethodHandle(method, pluginMethod));
            }
        }
    }
}

