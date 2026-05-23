package androidx.browser.trusted.sharing;

import android.os.Bundle;
import android.os.Parcelable;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
public final class ShareTarget {
    public static final String ENCODING_TYPE_MULTIPART = "multipart/form-data";
    public static final String ENCODING_TYPE_URL_ENCODED = "application/x-www-form-urlencoded";
    public static final String KEY_ACTION = "androidx.browser.trusted.sharing.KEY_ACTION";
    public static final String KEY_ENCTYPE = "androidx.browser.trusted.sharing.KEY_ENCTYPE";
    public static final String KEY_METHOD = "androidx.browser.trusted.sharing.KEY_METHOD";
    public static final String KEY_PARAMS = "androidx.browser.trusted.sharing.KEY_PARAMS";
    public static final String METHOD_GET = "GET";
    public static final String METHOD_POST = "POST";
    public final String action;
    public final String encodingType;
    public final String method;
    public final Params params;

    @Retention(RetentionPolicy.SOURCE)
    public @interface EncodingType {
    }

    @Retention(RetentionPolicy.SOURCE)
    public @interface RequestMethod {
    }

    public ShareTarget(String str, String str2, String str3, Params params) {
        this.action = str;
        this.method = str2;
        this.encodingType = str3;
        this.params = params;
    }

    public Bundle toBundle() {
        Bundle bundle = new Bundle();
        bundle.putString(KEY_ACTION, this.action);
        bundle.putString(KEY_METHOD, this.method);
        bundle.putString(KEY_ENCTYPE, this.encodingType);
        bundle.putBundle(KEY_PARAMS, this.params.toBundle());
        return bundle;
    }

    public static ShareTarget fromBundle(Bundle bundle) {
        String string = bundle.getString(KEY_ACTION);
        String string2 = bundle.getString(KEY_METHOD);
        String string3 = bundle.getString(KEY_ENCTYPE);
        Params paramsFromBundle = Params.fromBundle(bundle.getBundle(KEY_PARAMS));
        if (string == null || paramsFromBundle == null) {
            return null;
        }
        return new ShareTarget(string, string2, string3, paramsFromBundle);
    }

    public static class Params {
        public static final String KEY_FILES = "androidx.browser.trusted.sharing.KEY_FILES";
        public static final String KEY_TEXT = "androidx.browser.trusted.sharing.KEY_TEXT";
        public static final String KEY_TITLE = "androidx.browser.trusted.sharing.KEY_TITLE";
        public final List<FileFormField> files;
        public final String text;
        public final String title;

        public Params(String str, String str2, List<FileFormField> list) {
            this.title = str;
            this.text = str2;
            this.files = list;
        }

        Bundle toBundle() {
            Bundle bundle = new Bundle();
            bundle.putString("androidx.browser.trusted.sharing.KEY_TITLE", this.title);
            bundle.putString("androidx.browser.trusted.sharing.KEY_TEXT", this.text);
            if (this.files != null) {
                ArrayList<? extends Parcelable> arrayList = new ArrayList<>();
                Iterator<FileFormField> it = this.files.iterator();
                while (it.hasNext()) {
                    arrayList.add(it.next().toBundle());
                }
                bundle.putParcelableArrayList(KEY_FILES, arrayList);
            }
            return bundle;
        }

        static Params fromBundle(Bundle bundle) {
            ArrayList arrayList = null;
            if (bundle == null) {
                return null;
            }
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(KEY_FILES);
            if (parcelableArrayList != null) {
                arrayList = new ArrayList();
                Iterator it = parcelableArrayList.iterator();
                while (it.hasNext()) {
                    arrayList.add(FileFormField.fromBundle((Bundle) it.next()));
                }
            }
            return new Params(bundle.getString("androidx.browser.trusted.sharing.KEY_TITLE"), bundle.getString("androidx.browser.trusted.sharing.KEY_TEXT"), arrayList);
        }
    }

    public static final class FileFormField {
        public static final String KEY_ACCEPTED_TYPES = "androidx.browser.trusted.sharing.KEY_ACCEPTED_TYPES";
        public static final String KEY_NAME = "androidx.browser.trusted.sharing.KEY_FILE_NAME";
        public final List<String> acceptedTypes;
        public final String name;

        public FileFormField(String str, List<String> list) {
            this.name = str;
            this.acceptedTypes = Collections.unmodifiableList(list);
        }

        Bundle toBundle() {
            Bundle bundle = new Bundle();
            bundle.putString(KEY_NAME, this.name);
            bundle.putStringArrayList(KEY_ACCEPTED_TYPES, new ArrayList<>(this.acceptedTypes));
            return bundle;
        }

        static FileFormField fromBundle(Bundle bundle) {
            if (bundle == null) {
                return null;
            }
            String string = bundle.getString(KEY_NAME);
            ArrayList<String> stringArrayList = bundle.getStringArrayList(KEY_ACCEPTED_TYPES);
            if (string == null || stringArrayList == null) {
                return null;
            }
            return new FileFormField(string, stringArrayList);
        }
    }
}

