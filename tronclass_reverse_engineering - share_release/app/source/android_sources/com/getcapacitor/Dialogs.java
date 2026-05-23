package com.getcapacitor;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Handler;
import android.os.Looper;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;
import com.getcapacitor.ui.ModalsBottomSheetDialogFragment;
import org.json.JSONException;
public class Dialogs {

    public interface OnCancelListener {
        void onCancel();
    }

    public interface OnResultListener {
        void onResult(boolean z, boolean z2, String str);
    }

    public interface OnSelectListener {
        void onSelect(int i);
    }

    public static void alert(Context context, String str, OnResultListener onResultListener) {
        alert(context, str, null, null, onResultListener);
    }

    public static void alert(final Context context, final String str, String str2, String str3, final OnResultListener onResultListener) {
        if (str2 == null) {
            str2 = "Alert";
        }
        final String str4 = str2;
        if (str3 == null) {
            str3 = "OK";
        }
        final String str5 = str3;
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: com.getcapacitor.Dialogs.1
            @Override // java.lang.Runnable
            public void run() {
                AlertDialog.Builder builder = new AlertDialog.Builder(context);
                builder.setMessage(str).setTitle(str4).setPositiveButton(str5, new DialogInterface.OnClickListener() { // from class: com.getcapacitor.Dialogs.1.2
                    @Override // android.content.DialogInterface.OnClickListener
                    public void onClick(DialogInterface dialogInterface, int i) {
                        dialogInterface.dismiss();
                        onResultListener.onResult(true, false, null);
                    }
                }).setOnCancelListener(new DialogInterface.OnCancelListener() { // from class: com.getcapacitor.Dialogs.1.1
                    @Override // android.content.DialogInterface.OnCancelListener
                    public void onCancel(DialogInterface dialogInterface) {
                        dialogInterface.dismiss();
                        onResultListener.onResult(false, true, null);
                    }
                });
                builder.create().show();
            }
        });
    }

    public static void confirm(Context context, String str, OnResultListener onResultListener) {
        confirm(context, str, null, null, null, onResultListener);
    }

    public static void confirm(final Context context, final String str, String str2, String str3, String str4, final OnResultListener onResultListener) {
        if (str2 == null) {
            str2 = "Confirm";
        }
        final String str5 = str2;
        if (str3 == null) {
            str3 = "OK";
        }
        final String str6 = str3;
        if (str4 == null) {
            str4 = "Cancel";
        }
        final String str7 = str4;
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: com.getcapacitor.Dialogs.2
            @Override // java.lang.Runnable
            public void run() {
                AlertDialog.Builder builder = new AlertDialog.Builder(context);
                builder.setMessage(str).setTitle(str5).setPositiveButton(str6, new DialogInterface.OnClickListener() { // from class: com.getcapacitor.Dialogs.2.3
                    @Override // android.content.DialogInterface.OnClickListener
                    public void onClick(DialogInterface dialogInterface, int i) {
                        dialogInterface.dismiss();
                        onResultListener.onResult(true, false, null);
                    }
                }).setNegativeButton(str7, new DialogInterface.OnClickListener() { // from class: com.getcapacitor.Dialogs.2.2
                    @Override // android.content.DialogInterface.OnClickListener
                    public void onClick(DialogInterface dialogInterface, int i) {
                        dialogInterface.dismiss();
                        onResultListener.onResult(false, false, null);
                    }
                }).setOnCancelListener(new DialogInterface.OnCancelListener() { // from class: com.getcapacitor.Dialogs.2.1
                    @Override // android.content.DialogInterface.OnCancelListener
                    public void onCancel(DialogInterface dialogInterface) {
                        dialogInterface.dismiss();
                        onResultListener.onResult(false, true, null);
                    }
                });
                builder.create().show();
            }
        });
    }

    public static void prompt(Context context, String str, OnResultListener onResultListener) {
        prompt(context, str, null, null, null, null, null, onResultListener);
    }

    public static void prompt(final Context context, final String str, String str2, String str3, String str4, String str5, String str6, final OnResultListener onResultListener) {
        final String str7 = str2 == null ? "Prompt" : str2;
        final String str8 = str3 == null ? "OK" : str3;
        final String str9 = str4 == null ? "Cancel" : str4;
        final String str10 = str5 == null ? "" : str5;
        final String str11 = str6 == null ? "" : str6;
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: com.getcapacitor.Dialogs.3
            @Override // java.lang.Runnable
            public void run() {
                AlertDialog.Builder builder = new AlertDialog.Builder(context);
                final EditText editText = new EditText(context);
                editText.setHint(str10);
                editText.setText(str11);
                builder.setMessage(str).setTitle(str7).setView(editText).setPositiveButton(str8, new DialogInterface.OnClickListener() { // from class: com.getcapacitor.Dialogs.3.3
                    @Override // android.content.DialogInterface.OnClickListener
                    public void onClick(DialogInterface dialogInterface, int i) {
                        dialogInterface.dismiss();
                        onResultListener.onResult(true, false, editText.getText().toString().trim());
                    }
                }).setNegativeButton(str9, new DialogInterface.OnClickListener() { // from class: com.getcapacitor.Dialogs.3.2
                    @Override // android.content.DialogInterface.OnClickListener
                    public void onClick(DialogInterface dialogInterface, int i) {
                        dialogInterface.dismiss();
                        onResultListener.onResult(false, true, null);
                    }
                }).setOnCancelListener(new DialogInterface.OnCancelListener() { // from class: com.getcapacitor.Dialogs.3.1
                    @Override // android.content.DialogInterface.OnCancelListener
                    public void onCancel(DialogInterface dialogInterface) {
                        dialogInterface.dismiss();
                        onResultListener.onResult(false, true, null);
                    }
                });
                builder.create().show();
            }
        });
    }

    public static void actions(AppCompatActivity appCompatActivity, Object[] objArr, final OnSelectListener onSelectListener, OnCancelListener onCancelListener) {
        try {
            JSArray jSArray = new JSArray(objArr);
            final ModalsBottomSheetDialogFragment modalsBottomSheetDialogFragment = new ModalsBottomSheetDialogFragment();
            modalsBottomSheetDialogFragment.setOptions(jSArray);
            modalsBottomSheetDialogFragment.setOnSelectedListener(new ModalsBottomSheetDialogFragment.OnSelectedListener() { // from class: com.getcapacitor.Dialogs.4
                @Override // com.getcapacitor.ui.ModalsBottomSheetDialogFragment.OnSelectedListener
                public void onSelected(int i) {
                    onSelectListener.onSelect(i);
                    modalsBottomSheetDialogFragment.dismiss();
                }
            });
            modalsBottomSheetDialogFragment.setOnCancelListener(onCancelListener);
            modalsBottomSheetDialogFragment.show(appCompatActivity.getSupportFragmentManager(), "capacitorModalsActionSheet");
        } catch (JSONException unused) {
        }
    }
}

