package com.getcapacitor.ui;

import android.app.Dialog;
import android.content.DialogInterface;
import android.graphics.Color;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.getcapacitor.Dialogs;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.bottomsheet.BottomSheetDialogFragment;
import com.onesignal.OneSignalDbContract;
import java.util.List;
import org.json.JSONException;
import org.json.JSONObject;
public class ModalsBottomSheetDialogFragment extends BottomSheetDialogFragment {
    private Dialogs.OnCancelListener cancelListener;
    private OnSelectedListener listener;
    private BottomSheetBehavior.BottomSheetCallback mBottomSheetBehaviorCallback = new BottomSheetBehavior.BottomSheetCallback() { // from class: com.getcapacitor.ui.ModalsBottomSheetDialogFragment.1
        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback
        public void onSlide(View view, float f) {
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.BottomSheetCallback
        public void onStateChanged(View view, int i) {
            if (i == 5) {
                ModalsBottomSheetDialogFragment.this.dismiss();
            }
        }
    };
    private JSArray options;
    private String title;

    public interface OnSelectedListener {
        void onSelected(int i);
    }

    @Override // androidx.fragment.app.DialogFragment, android.content.DialogInterface.OnCancelListener
    public void onCancel(DialogInterface dialogInterface) {
        super.onCancel(dialogInterface);
        this.cancelListener.onCancel();
    }

    public void setTitle(String str) {
        this.title = str;
    }

    public void setOptions(JSArray jSArray) {
        this.options = jSArray;
    }

    public void setOnSelectedListener(OnSelectedListener onSelectedListener) {
        this.listener = onSelectedListener;
    }

    public void setOnCancelListener(Dialogs.OnCancelListener onCancelListener) {
        this.cancelListener = onCancelListener;
    }

    @Override // androidx.appcompat.app.AppCompatDialogFragment, androidx.fragment.app.DialogFragment
    public void setupDialog(Dialog dialog, int i) {
        super.setupDialog(dialog, i);
        if (this.options == null) {
            return;
        }
        dialog.getWindow();
        float f = getResources().getDisplayMetrics().density;
        int i2 = (int) ((16.0f * f) + 0.5f);
        int i3 = (int) ((12.0f * f) + 0.5f);
        int i4 = (int) ((f * 8.0f) + 0.5f);
        CoordinatorLayout coordinatorLayout = new CoordinatorLayout(getContext());
        LinearLayout linearLayout = new LinearLayout(getContext());
        linearLayout.setOrientation(1);
        linearLayout.setPadding(i2, i2, i2, i2);
        TextView textView = new TextView(getContext());
        textView.setTextColor(Color.parseColor("#757575"));
        textView.setPadding(i4, i4, i4, i4);
        textView.setText(this.title);
        linearLayout.addView(textView);
        try {
            List list = this.options.toList();
            for (final int i5 = 0; i5 < list.size(); i5++) {
                JSObject jSObjectFromJSONObject = JSObject.fromJSONObject((JSONObject) list.get(i5));
                jSObjectFromJSONObject.getString("style", "DEFAULT");
                String string = jSObjectFromJSONObject.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE, "");
                TextView textView2 = new TextView(getContext());
                textView2.setTextColor(Color.parseColor("#000000"));
                textView2.setPadding(i3, i3, i3, i3);
                textView2.setText(string);
                textView2.setOnClickListener(new View.OnClickListener() { // from class: com.getcapacitor.ui.ModalsBottomSheetDialogFragment.2
                    @Override // android.view.View.OnClickListener
                    public void onClick(View view) {
                        Logger.debug("CliCKED: " + i5);
                        if (ModalsBottomSheetDialogFragment.this.listener != null) {
                            ModalsBottomSheetDialogFragment.this.listener.onSelected(i5);
                        }
                    }
                });
                linearLayout.addView(textView2);
            }
            coordinatorLayout.addView(linearLayout.getRootView());
            dialog.setContentView(coordinatorLayout.getRootView());
            CoordinatorLayout.Behavior behavior = ((CoordinatorLayout.LayoutParams) ((View) coordinatorLayout.getParent()).getLayoutParams()).getBehavior();
            if (behavior == null || !(behavior instanceof BottomSheetBehavior)) {
                return;
            }
            ((BottomSheetBehavior) behavior).setBottomSheetCallback(this.mBottomSheetBehaviorCallback);
        } catch (JSONException e) {
            Logger.error("JSON error processing an option for showActions", e);
        }
    }
}

