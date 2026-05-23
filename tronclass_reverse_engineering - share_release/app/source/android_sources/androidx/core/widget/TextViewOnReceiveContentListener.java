package androidx.core.widget;

import android.content.ClipData;
import android.content.Context;
import android.text.Editable;
import android.text.Selection;
import android.text.Spanned;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import androidx.core.view.ContentInfoCompat;
import androidx.core.view.OnReceiveContentListener;
import org.apache.commons.io.IOUtils;
public final class TextViewOnReceiveContentListener implements OnReceiveContentListener {
    private static final String LOG_TAG = "ReceiveContent";

    @Override // androidx.core.view.OnReceiveContentListener
    public ContentInfoCompat onReceiveContent(View view, ContentInfoCompat contentInfoCompat) {
        if (Log.isLoggable(LOG_TAG, 3)) {
            Log.d(LOG_TAG, "onReceive: " + contentInfoCompat);
        }
        if (contentInfoCompat.getSource() == 2) {
            return contentInfoCompat;
        }
        ClipData clip = contentInfoCompat.getClip();
        int flags = contentInfoCompat.getFlags();
        TextView textView = (TextView) view;
        Editable editable = (Editable) textView.getText();
        Context context = textView.getContext();
        boolean z = false;
        for (int i = 0; i < clip.getItemCount(); i++) {
            CharSequence charSequenceCoerceToText = coerceToText(context, clip.getItemAt(i), flags);
            if (charSequenceCoerceToText != null) {
                if (!z) {
                    replaceSelection(editable, charSequenceCoerceToText);
                    z = true;
                } else {
                    editable.insert(Selection.getSelectionEnd(editable), IOUtils.LINE_SEPARATOR_UNIX);
                    editable.insert(Selection.getSelectionEnd(editable), charSequenceCoerceToText);
                }
            }
        }
        return null;
    }

    private static CharSequence coerceToText(Context context, ClipData.Item item, int i) {
        return Api16Impl.coerce(context, item, i);
    }

    private static void replaceSelection(Editable editable, CharSequence charSequence) {
        int selectionStart = Selection.getSelectionStart(editable);
        int selectionEnd = Selection.getSelectionEnd(editable);
        int iMax = Math.max(0, Math.min(selectionStart, selectionEnd));
        int iMax2 = Math.max(0, Math.max(selectionStart, selectionEnd));
        Selection.setSelection(editable, iMax2);
        editable.replace(iMax, iMax2, charSequence);
    }

    private static final class Api16Impl {
        private Api16Impl() {
        }

        static CharSequence coerce(Context context, ClipData.Item item, int i) {
            if ((i & 1) != 0) {
                CharSequence charSequenceCoerceToText = item.coerceToText(context);
                return charSequenceCoerceToText instanceof Spanned ? charSequenceCoerceToText.toString() : charSequenceCoerceToText;
            }
            return item.coerceToStyledText(context);
        }
    }

    private static final class ApiImpl {
        private ApiImpl() {
        }

        static CharSequence coerce(Context context, ClipData.Item item, int i) {
            CharSequence charSequenceCoerceToText = item.coerceToText(context);
            return ((i & 1) == 0 || !(charSequenceCoerceToText instanceof Spanned)) ? charSequenceCoerceToText : charSequenceCoerceToText.toString();
        }
    }
}

