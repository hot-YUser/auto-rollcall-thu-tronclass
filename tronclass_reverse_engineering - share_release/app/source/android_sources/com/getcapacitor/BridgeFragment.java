package com.getcapacitor;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import androidx.fragment.app.Fragment;
import com.getcapacitor.android.R;
import com.getcapacitor.cordova.MockCordovaInterfaceImpl;
import com.getcapacitor.cordova.MockCordovaWebViewImpl;
import java.util.ArrayList;
import java.util.List;
import org.apache.cordova.ConfigXmlParser;
import org.apache.cordova.CordovaPreferences;
import org.apache.cordova.PluginEntry;
import org.apache.cordova.PluginManager;
import org.json.JSONObject;
public class BridgeFragment extends Fragment {
    private static final String ARG_START_DIR = "startDir";
    protected Bridge bridge;
    protected MockCordovaInterfaceImpl cordovaInterface;
    private MockCordovaWebViewImpl mockWebView;
    private ArrayList<PluginEntry> pluginEntries;
    private PluginManager pluginManager;
    private CordovaPreferences preferences;
    private WebView webView;
    protected boolean keepRunning = true;
    private List<Class<? extends Plugin>> initialPlugins = new ArrayList();
    private JSONObject config = new JSONObject();

    public static BridgeFragment newInstance(String str) {
        BridgeFragment bridgeFragment = new BridgeFragment();
        Bundle bundle = new Bundle();
        bundle.putString(ARG_START_DIR, str);
        bridgeFragment.setArguments(bundle);
        return bridgeFragment;
    }

    protected void init(Bundle bundle) {
        loadConfig(getActivity().getApplicationContext(), getActivity());
    }

    public void addPlugin(Class<? extends Plugin> cls) {
        this.initialPlugins.add(cls);
    }

    protected void load(Bundle bundle) {
        Logger.debug("Starting BridgeActivity");
        String string = getArguments() != null ? getArguments().getString(ARG_START_DIR) : null;
        this.webView = (WebView) getView().findViewById(R.id.webview);
        MockCordovaInterfaceImpl mockCordovaInterfaceImpl = new MockCordovaInterfaceImpl(getActivity());
        this.cordovaInterface = mockCordovaInterfaceImpl;
        if (bundle != null) {
            mockCordovaInterfaceImpl.restoreInstanceState(bundle);
        }
        MockCordovaWebViewImpl mockCordovaWebViewImpl = new MockCordovaWebViewImpl(getActivity().getApplicationContext());
        this.mockWebView = mockCordovaWebViewImpl;
        mockCordovaWebViewImpl.init(this.cordovaInterface, this.pluginEntries, this.preferences, this.webView);
        PluginManager pluginManager = this.mockWebView.getPluginManager();
        this.pluginManager = pluginManager;
        this.cordovaInterface.onCordovaInit(pluginManager);
        if (this.preferences == null) {
            this.preferences = new CordovaPreferences();
        }
        Bridge bridge = new Bridge(getActivity(), this.webView, this.initialPlugins, this.cordovaInterface, this.pluginManager, this.preferences, this.config);
        this.bridge = bridge;
        if (string != null) {
            bridge.setServerAssetPath(string);
        }
        if (bundle != null) {
            this.bridge.restoreInstanceState(bundle);
        }
        this.keepRunning = this.preferences.getBoolean("KeepRunning", true);
    }

    public void loadConfig(Context context, Activity activity) {
        ConfigXmlParser configXmlParser = new ConfigXmlParser();
        configXmlParser.parse(context);
        CordovaPreferences preferences = configXmlParser.getPreferences();
        this.preferences = preferences;
        preferences.setPreferencesBundle(activity.getIntent().getExtras());
        this.pluginEntries = configXmlParser.getPluginEntries();
    }

    @Override // androidx.fragment.app.Fragment
    public void onInflate(Context context, AttributeSet attributeSet, Bundle bundle) {
        super.onInflate(context, attributeSet, bundle);
        String string = context.obtainStyledAttributes(attributeSet, R.styleable.bridge_fragment).getString(R.styleable.bridge_fragment_start_dir);
        if (string != null) {
            String string2 = string.toString();
            Bundle bundle2 = new Bundle();
            bundle2.putString(ARG_START_DIR, string2);
            setArguments(bundle2);
        }
    }

    @Override // androidx.fragment.app.Fragment
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
    }

    @Override // androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater layoutInflater, ViewGroup viewGroup, Bundle bundle) {
        return layoutInflater.inflate(R.layout.fragment_bridge, viewGroup, false);
    }

    @Override // androidx.fragment.app.Fragment
    public void onActivityCreated(Bundle bundle) {
        super.onActivityCreated(bundle);
        init(bundle);
        load(bundle);
    }

    @Override // androidx.fragment.app.Fragment
    public void onDestroy() {
        super.onDestroy();
        Bridge bridge = this.bridge;
        if (bridge != null) {
            bridge.onDestroy();
        }
        MockCordovaWebViewImpl mockCordovaWebViewImpl = this.mockWebView;
        if (mockCordovaWebViewImpl != null) {
            mockCordovaWebViewImpl.handleDestroy();
        }
    }
}

