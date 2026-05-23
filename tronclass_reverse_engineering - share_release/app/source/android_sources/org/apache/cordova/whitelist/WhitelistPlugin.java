package org.apache.cordova.whitelist;

import android.content.Context;
import org.apache.cordova.ConfigXmlParser;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.apache.cordova.Whitelist;
import org.xmlpull.v1.XmlPullParser;
public class WhitelistPlugin extends CordovaPlugin {
    private static final String LOG_TAG = "WhitelistPlugin";
    private Whitelist allowedIntents;
    private Whitelist allowedNavigations;
    private Whitelist allowedRequests;

    public WhitelistPlugin() {
    }

    public WhitelistPlugin(Context context) {
        this(new Whitelist(), new Whitelist(), null);
        new CustomConfigXmlParser().parse(context);
    }

    public WhitelistPlugin(XmlPullParser xmlPullParser) {
        this(new Whitelist(), new Whitelist(), null);
        new CustomConfigXmlParser().parse(xmlPullParser);
    }

    public WhitelistPlugin(Whitelist whitelist, Whitelist whitelist2, Whitelist whitelist3) {
        if (whitelist3 == null) {
            whitelist3 = new Whitelist();
            whitelist3.addWhiteListEntry("file:///*", false);
            whitelist3.addWhiteListEntry("data:*", false);
        }
        this.allowedNavigations = whitelist;
        this.allowedIntents = whitelist2;
        this.allowedRequests = whitelist3;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void pluginInitialize() {
        if (this.allowedNavigations == null) {
            this.allowedNavigations = new Whitelist();
            this.allowedIntents = new Whitelist();
            this.allowedRequests = new Whitelist();
            new CustomConfigXmlParser().parse(this.webView.getContext());
        }
    }

    private class CustomConfigXmlParser extends ConfigXmlParser {
        @Override // org.apache.cordova.ConfigXmlParser
        public void handleEndTag(XmlPullParser xmlPullParser) {
        }

        private CustomConfigXmlParser() {
        }

        @Override // org.apache.cordova.ConfigXmlParser
        public void handleStartTag(XmlPullParser xmlPullParser) {
            String name = xmlPullParser.getName();
            boolean z = false;
            if (name.equals("content")) {
                WhitelistPlugin.this.allowedNavigations.addWhiteListEntry(xmlPullParser.getAttributeValue(null, "src"), false);
                return;
            }
            if (name.equals("allow-navigation")) {
                String attributeValue = xmlPullParser.getAttributeValue(null, "href");
                if ("*".equals(attributeValue)) {
                    WhitelistPlugin.this.allowedNavigations.addWhiteListEntry("http://*/*", false);
                    WhitelistPlugin.this.allowedNavigations.addWhiteListEntry("https://*/*", false);
                    WhitelistPlugin.this.allowedNavigations.addWhiteListEntry("data:*", false);
                    return;
                }
                WhitelistPlugin.this.allowedNavigations.addWhiteListEntry(attributeValue, false);
                return;
            }
            if (name.equals("allow-intent")) {
                WhitelistPlugin.this.allowedIntents.addWhiteListEntry(xmlPullParser.getAttributeValue(null, "href"), false);
                return;
            }
            if (name.equals("access")) {
                String attributeValue2 = xmlPullParser.getAttributeValue(null, "origin");
                String attributeValue3 = xmlPullParser.getAttributeValue(null, "subdomains");
                boolean z2 = xmlPullParser.getAttributeValue(null, "launch-external") != null;
                if (attributeValue2 != null) {
                    if (z2) {
                        LOG.w(WhitelistPlugin.LOG_TAG, "Found <access launch-external> within config.xml. Please use <allow-intent> instead.");
                        Whitelist whitelist = WhitelistPlugin.this.allowedIntents;
                        if (attributeValue3 != null && attributeValue3.compareToIgnoreCase("true") == 0) {
                            z = true;
                        }
                        whitelist.addWhiteListEntry(attributeValue2, z);
                        return;
                    }
                    if ("*".equals(attributeValue2)) {
                        WhitelistPlugin.this.allowedRequests.addWhiteListEntry("http://*/*", false);
                        WhitelistPlugin.this.allowedRequests.addWhiteListEntry("https://*/*", false);
                        return;
                    }
                    Whitelist whitelist2 = WhitelistPlugin.this.allowedRequests;
                    if (attributeValue3 != null && attributeValue3.compareToIgnoreCase("true") == 0) {
                        z = true;
                    }
                    whitelist2.addWhiteListEntry(attributeValue2, z);
                }
            }
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public Boolean shouldAllowNavigation(String str) {
        return this.allowedNavigations.isUrlWhiteListed(str) ? true : null;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public Boolean shouldAllowRequest(String str) {
        return (Boolean.TRUE == shouldAllowNavigation(str) || this.allowedRequests.isUrlWhiteListed(str)) ? true : null;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public Boolean shouldOpenExternalUrl(String str) {
        return this.allowedIntents.isUrlWhiteListed(str) ? true : null;
    }

    public Whitelist getAllowedNavigations() {
        return this.allowedNavigations;
    }

    public void setAllowedNavigations(Whitelist whitelist) {
        this.allowedNavigations = whitelist;
    }

    public Whitelist getAllowedIntents() {
        return this.allowedIntents;
    }

    public void setAllowedIntents(Whitelist whitelist) {
        this.allowedIntents = whitelist;
    }

    public Whitelist getAllowedRequests() {
        return this.allowedRequests;
    }

    public void setAllowedRequests(Whitelist whitelist) {
        this.allowedRequests = whitelist;
    }
}

