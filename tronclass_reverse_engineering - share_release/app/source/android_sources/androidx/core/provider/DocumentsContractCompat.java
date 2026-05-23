package androidx.core.provider;

import android.content.ContentResolver;
import android.content.Context;
import android.net.Uri;
import android.provider.DocumentsContract;
import java.io.FileNotFoundException;
public final class DocumentsContractCompat {
    private static final String PATH_TREE = "tree";

    public static final class DocumentCompat {
        public static final int FLAG_VIRTUAL_DOCUMENT = 512;

        private DocumentCompat() {
        }
    }

    public static boolean isDocumentUri(Context context, Uri uri) {
        return DocumentsContractApi19Impl.isDocumentUri(context, uri);
    }

    public static boolean isTreeUri(Uri uri) {
        return DocumentsContractApi24Impl.isTreeUri(uri);
    }

    public static String getDocumentId(Uri uri) {
        return DocumentsContractApi19Impl.getDocumentId(uri);
    }

    public static String getTreeDocumentId(Uri uri) {
        return DocumentsContractApi21Impl.getTreeDocumentId(uri);
    }

    public static Uri buildDocumentUri(String str, String str2) {
        return DocumentsContractApi19Impl.buildDocumentUri(str, str2);
    }

    public static Uri buildDocumentUriUsingTree(Uri uri, String str) {
        return DocumentsContractApi21Impl.buildDocumentUriUsingTree(uri, str);
    }

    public static Uri buildTreeDocumentUri(String str, String str2) {
        return DocumentsContractApi21Impl.buildTreeDocumentUri(str, str2);
    }

    public static Uri buildChildDocumentsUri(String str, String str2) {
        return DocumentsContractApi21Impl.buildChildDocumentsUri(str, str2);
    }

    public static Uri buildChildDocumentsUriUsingTree(Uri uri, String str) {
        return DocumentsContractApi21Impl.buildChildDocumentsUriUsingTree(uri, str);
    }

    public static Uri createDocument(ContentResolver contentResolver, Uri uri, String str, String str2) throws FileNotFoundException {
        return DocumentsContractApi21Impl.createDocument(contentResolver, uri, str, str2);
    }

    public static Uri renameDocument(ContentResolver contentResolver, Uri uri, String str) throws FileNotFoundException {
        return DocumentsContractApi21Impl.renameDocument(contentResolver, uri, str);
    }

    public static boolean removeDocument(ContentResolver contentResolver, Uri uri, Uri uri2) throws FileNotFoundException {
        return DocumentsContractApi24Impl.removeDocument(contentResolver, uri, uri2);
    }

    private static class DocumentsContractApi19Impl {
        public static Uri buildDocumentUri(String str, String str2) {
            return DocumentsContract.buildDocumentUri(str, str2);
        }

        static boolean isDocumentUri(Context context, Uri uri) {
            return DocumentsContract.isDocumentUri(context, uri);
        }

        static String getDocumentId(Uri uri) {
            return DocumentsContract.getDocumentId(uri);
        }

        static boolean deleteDocument(ContentResolver contentResolver, Uri uri) throws FileNotFoundException {
            return DocumentsContract.deleteDocument(contentResolver, uri);
        }

        private DocumentsContractApi19Impl() {
        }
    }

    private static class DocumentsContractApi21Impl {
        static String getTreeDocumentId(Uri uri) {
            return DocumentsContract.getTreeDocumentId(uri);
        }

        public static Uri buildTreeDocumentUri(String str, String str2) {
            return DocumentsContract.buildTreeDocumentUri(str, str2);
        }

        static Uri buildDocumentUriUsingTree(Uri uri, String str) {
            return DocumentsContract.buildDocumentUriUsingTree(uri, str);
        }

        static Uri buildChildDocumentsUri(String str, String str2) {
            return DocumentsContract.buildChildDocumentsUri(str, str2);
        }

        static Uri buildChildDocumentsUriUsingTree(Uri uri, String str) {
            return DocumentsContract.buildChildDocumentsUriUsingTree(uri, str);
        }

        static Uri createDocument(ContentResolver contentResolver, Uri uri, String str, String str2) throws FileNotFoundException {
            return DocumentsContract.createDocument(contentResolver, uri, str, str2);
        }

        static Uri renameDocument(ContentResolver contentResolver, Uri uri, String str) throws FileNotFoundException {
            return DocumentsContract.renameDocument(contentResolver, uri, str);
        }

        private DocumentsContractApi21Impl() {
        }
    }

    private static class DocumentsContractApi24Impl {
        static boolean isTreeUri(Uri uri) {
            return DocumentsContract.isTreeUri(uri);
        }

        static boolean removeDocument(ContentResolver contentResolver, Uri uri, Uri uri2) throws FileNotFoundException {
            return DocumentsContract.removeDocument(contentResolver, uri, uri2);
        }

        private DocumentsContractApi24Impl() {
        }
    }

    private DocumentsContractCompat() {
    }
}

