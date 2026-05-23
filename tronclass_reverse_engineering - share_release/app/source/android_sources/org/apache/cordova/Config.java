package org.apache.cordova;

import android.app.Activity;
import java.util.List;
@Deprecated
public class Config {
    private static final String TAG = "Config";
    static ConfigXmlParser parser;

    private Config() {
    }

    public static void init(Activity activity) {
        ConfigXmlParser configXmlParser = new ConfigXmlParser();
        parser = configXmlParser;
        configXmlParser.parse(activity);
        parser.getPreferences().setPreferencesBundle(activity.getIntent().getExtras());
    }

    public static void init() {
        if (parser == null) {
            parser = new ConfigXmlParser();
        }
    }

    public static String getStartUrl() {
        ConfigXmlParser configXmlParser = parser;
        if (configXmlParser == null) {
            return "file:///android_asset/www/index.html";
        }
        return configXmlParser.getLaunchUrl();
    }

    public static String getErrorUrl() {
        return parser.getPreferences().getString("errorurl", null);
    }

    public static List<PluginEntry> getPluginEntries() {
        return parser.getPluginEntries();
    }

    public static CordovaPreferences getPreferences() {
        return parser.getPreferences();
    }

    public static boolean isInitialized() {
        return parser != null;
    }
}

