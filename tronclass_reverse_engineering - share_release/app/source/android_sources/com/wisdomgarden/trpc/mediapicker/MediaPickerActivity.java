package com.wisdomgarden.trpc.mediapicker;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.PickVisualMediaRequest;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;
import com.wisdomgarden.trpc.utils.FilePathUtil;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import org.apache.cordova.globalization.Globalization;
public class MediaPickerActivity extends AppCompatActivity {
    private static final String LOG_TAG = "MediaPickerActivity";
    public static final int PICK_MEDIA_RESULT_CODE = 10;
    public static final int PICK_MULTIPLE_MEDIA_RESULT_CODE = 20;

    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    protected void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        Intent intent = getIntent();
        if (intent.getIntExtra("maximum", 1) > 1) {
            startPickMultipleMedia(intent);
        } else {
            startPickMedia(intent);
        }
    }

    private void startPickMultipleMedia(Intent intent) {
        registerForActivityResult(new ActivityResultContracts.PickMultipleVisualMedia(intent.getIntExtra("maximum", 1)), new ActivityResultCallback() { // from class: com.wisdomgarden.trpc.mediapicker.MediaPickerActivity$$ExternalSyntheticLambda0
            @Override // androidx.activity.result.ActivityResultCallback
            public final void onActivityResult(Object obj) {
                this.f$0.m328x17280e0b((List) obj);
            }
        }).launch(genPickVisualMediaRequest(intent.getStringExtra(Globalization.TYPE)));
    }
    /* synthetic */ void m328x17280e0b(List list) {
        Intent intent = new Intent();
        if (!list.isEmpty()) {
            ArrayList arrayList = new ArrayList();
            Iterator it = list.iterator();
            while (it.hasNext()) {
                String realPathFromURI = FilePathUtil.getRealPathFromURI(this, (Uri) it.next());
                if (realPathFromURI != null) {
                    arrayList.add(realPathFromURI);
                }
            }
            intent.putExtra("uris", arrayList);
        }
        onSelected(20, intent);
    }

    private void startPickMedia(Intent intent) {
        registerForActivityResult(new ActivityResultContracts.PickVisualMedia(), new ActivityResultCallback() { // from class: com.wisdomgarden.trpc.mediapicker.MediaPickerActivity$$ExternalSyntheticLambda1
            @Override // androidx.activity.result.ActivityResultCallback
            public final void onActivityResult(Object obj) {
                this.f$0.m327x2edb997c((Uri) obj);
            }
        }).launch(genPickVisualMediaRequest(intent.getStringExtra(Globalization.TYPE)));
    }
    /* synthetic */ void m327x2edb997c(Uri uri) {
        Intent intent = new Intent();
        if (uri != null) {
            intent.putExtra("uri", FilePathUtil.getRealPathFromURI(this, uri));
        }
        onSelected(10, intent);
    }

    private PickVisualMediaRequest genPickVisualMediaRequest(String str) {
        if (Objects.equals(str, "ImageOnly")) {
            return new PickVisualMediaRequest.Builder().setMediaType(ActivityResultContracts.PickVisualMedia.ImageOnly.INSTANCE).build();
        }
        if (Objects.equals(str, "VideoOnly")) {
            return new PickVisualMediaRequest.Builder().setMediaType(ActivityResultContracts.PickVisualMedia.VideoOnly.INSTANCE).build();
        }
        return new PickVisualMediaRequest.Builder().setMediaType(ActivityResultContracts.PickVisualMedia.ImageAndVideo.INSTANCE).build();
    }

    private void onSelected(int i, Intent intent) {
        setResult(i, intent);
        finish();
    }
}

