package org.apache.cordova.mediacapture;

import android.net.Uri;
import android.webkit.MimeTypeMap;
import java.util.Locale;
import org.apache.cordova.CordovaInterface;
public class FileHelper {
    public static String getMimeTypeForExtension(String str) {
        int iLastIndexOf = str.lastIndexOf(46);
        if (iLastIndexOf != -1) {
            str = str.substring(iLastIndexOf + 1);
        }
        String lowerCase = str.toLowerCase(Locale.getDefault());
        if (lowerCase.equals("3ga")) {
            return "audio/3gpp";
        }
        return MimeTypeMap.getSingleton().getMimeTypeFromExtension(lowerCase);
    }

    public static String getMimeType(Uri uri, CordovaInterface cordovaInterface) {
        if ("content".equals(uri.getScheme())) {
            return cordovaInterface.getActivity().getContentResolver().getType(uri);
        }
        return getMimeTypeForExtension(uri.getPath());
    }
}

