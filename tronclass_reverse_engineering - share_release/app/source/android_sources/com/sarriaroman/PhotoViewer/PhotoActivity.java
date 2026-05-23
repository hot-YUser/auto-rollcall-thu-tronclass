package com.sarriaroman.PhotoViewer;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Environment;
import android.os.StrictMode;
import android.util.Base64;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;
import com.getcapacitor.Bridge;
import com.onesignal.outcomes.OSOutcomeConstants;
import com.squareup.picasso.Callback;
import com.squareup.picasso.Picasso;
import com.squareup.picasso.RequestCreator;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import uk.co.senab.photoview.PhotoViewAttacher;
public class PhotoActivity extends Activity {
    public static JSONArray mArgs;
    private ImageButton closeBtn;
    private ProgressBar loadingBar;
    private PhotoViewAttacher mAttacher;
    private JSONObject mHeaders;
    private String mImage;
    private boolean mShare;
    private File mTempImage;
    private String mTitle;
    private JSONObject pOptions;
    private ImageView photo;
    private ImageButton shareBtn;
    private int shareBtnVisibility;
    private TextView titleTxt;
    public Activity getActivity() {
        return this;
    }

    @Override // android.app.Activity
    protected void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        setContentView(getApplication().getResources().getIdentifier("activity_photo", "layout", getApplication().getPackageName()));
        findViews();
        try {
            int i = 0;
            this.mImage = mArgs.getString(0);
            this.mTitle = mArgs.getString(1);
            this.mShare = mArgs.getBoolean(2);
            this.mHeaders = parseHeaders(mArgs.optString(5));
            JSONObject jSONObjectOptJSONObject = mArgs.optJSONObject(6);
            this.pOptions = jSONObjectOptJSONObject;
            if (jSONObjectOptJSONObject == null) {
                JSONObject jSONObject = new JSONObject();
                this.pOptions = jSONObject;
                jSONObject.put("fit", true);
                this.pOptions.put("centerInside", true);
                this.pOptions.put("centerCrop", false);
            }
            if (!this.mShare) {
                i = 4;
            }
            this.shareBtnVisibility = i;
        } catch (JSONException unused) {
            this.shareBtnVisibility = 4;
        }
        this.shareBtn.setVisibility(this.shareBtnVisibility);
        if (!this.mTitle.equals("")) {
            this.titleTxt.setText(this.mTitle);
        }
        try {
            loadImage();
        } catch (JSONException e) {
            e.printStackTrace();
        }
        this.closeBtn.setOnClickListener(new View.OnClickListener() { // from class: com.sarriaroman.PhotoViewer.PhotoActivity.1
            @Override // android.view.View.OnClickListener
            public void onClick(View view) {
                PhotoActivity.this.finish();
            }
        });
        this.shareBtn.setOnClickListener(new View.OnClickListener() { // from class: com.sarriaroman.PhotoViewer.PhotoActivity.2
            @Override // android.view.View.OnClickListener
            public void onClick(View view) {
                try {
                    StrictMode.class.getMethod("disableDeathOnFileUriExposure", new Class[0]).invoke(null, new Object[0]);
                } catch (Exception e2) {
                    e2.printStackTrace();
                }
                if (PhotoActivity.this.mTempImage == null) {
                    PhotoActivity photoActivity = PhotoActivity.this;
                    photoActivity.mTempImage = photoActivity.getLocalBitmapFileFromView(photoActivity.photo);
                }
                Uri uriFromFile = Uri.fromFile(PhotoActivity.this.mTempImage);
                if (uriFromFile != null) {
                    Intent intent = new Intent("android.intent.action.SEND");
                    intent.setType("image/*");
                    intent.putExtra("android.intent.extra.STREAM", uriFromFile);
                    PhotoActivity.this.startActivity(Intent.createChooser(intent, "Share"));
                }
            }
        });
    }

    private void findViews() {
        this.closeBtn = (ImageButton) findViewById(getApplication().getResources().getIdentifier("closeBtn", OSOutcomeConstants.OUTCOME_ID, getApplication().getPackageName()));
        this.shareBtn = (ImageButton) findViewById(getApplication().getResources().getIdentifier("shareBtn", OSOutcomeConstants.OUTCOME_ID, getApplication().getPackageName()));
        this.loadingBar = (ProgressBar) findViewById(getApplication().getResources().getIdentifier("loadingBar", OSOutcomeConstants.OUTCOME_ID, getApplication().getPackageName()));
        this.photo = (ImageView) findViewById(getApplication().getResources().getIdentifier("photoView", OSOutcomeConstants.OUTCOME_ID, getApplication().getPackageName()));
        this.mAttacher = new PhotoViewAttacher(this.photo);
        this.titleTxt = (TextView) findViewById(getApplication().getResources().getIdentifier("titleTxt", OSOutcomeConstants.OUTCOME_ID, getApplication().getPackageName()));
    }
    public void hideLoadingAndUpdate() {
        this.photo.setVisibility(0);
        this.loadingBar.setVisibility(4);
        this.shareBtn.setVisibility(this.shareBtnVisibility);
        this.mAttacher.update();
    }
    public RequestCreator setOptions(RequestCreator requestCreator) throws JSONException {
        if (this.pOptions.has("fit") && this.pOptions.optBoolean("fit")) {
            requestCreator.fit();
        }
        if (this.pOptions.has("centerInside") && this.pOptions.optBoolean("centerInside")) {
            requestCreator.centerInside();
        }
        if (this.pOptions.has("centerCrop") && this.pOptions.optBoolean("centerCrop")) {
            requestCreator.centerCrop();
        }
        return requestCreator;
    }

    /* high-level source view WARN: Type inference failed for: r0v10, types: [com.sarriaroman.PhotoViewer.PhotoActivity$4] */
    private void loadImage() throws JSONException {
        if (this.mImage.startsWith(Bridge.CAPACITOR_HTTP_SCHEME) || this.mImage.startsWith("file")) {
            setOptions(Picasso.get().load(this.mImage)).into(this.photo, new Callback() { // from class: com.sarriaroman.PhotoViewer.PhotoActivity.3
                @Override // com.squareup.picasso.Callback
                public void onSuccess() {
                    PhotoActivity.this.hideLoadingAndUpdate();
                }

                @Override // com.squareup.picasso.Callback
                public void onError(Exception exc) {
                    Toast.makeText(PhotoActivity.this.getActivity(), "Error loading image.", 1).show();
                    PhotoActivity.this.finish();
                }
            });
        } else if (this.mImage.startsWith("data:image")) {
            new AsyncTask<Void, Void, File>() { // from class: com.sarriaroman.PhotoViewer.PhotoActivity.4
                @Override // android.os.AsyncTask
                public File doInBackground(Void... voidArr) {
                    return PhotoActivity.this.getLocalBitmapFileFromString(PhotoActivity.this.mImage.substring(PhotoActivity.this.mImage.indexOf(",") + 1));
                }
                @Override // android.os.AsyncTask
                public void onPostExecute(File file) {
                    PhotoActivity.this.mTempImage = file;
                    try {
                        PhotoActivity.this.setOptions(Picasso.get().load(PhotoActivity.this.mTempImage)).into(PhotoActivity.this.photo, new Callback() { // from class: com.sarriaroman.PhotoViewer.PhotoActivity.4.1
                            @Override // com.squareup.picasso.Callback
                            public void onSuccess() {
                                PhotoActivity.this.hideLoadingAndUpdate();
                            }

                            @Override // com.squareup.picasso.Callback
                            public void onError(Exception exc) {
                                Toast.makeText(PhotoActivity.this.getActivity(), "Error loading image.", 1).show();
                                PhotoActivity.this.finish();
                            }
                        });
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            }.execute(new Void[0]);
        } else {
            this.photo.setImageURI(Uri.parse(this.mImage));
            hideLoadingAndUpdate();
        }
    }

    @Override // android.app.Activity
    public void onDestroy() {
        File file = this.mTempImage;
        if (file != null) {
            file.delete();
        }
        super.onDestroy();
    }

    public File getLocalBitmapFileFromString(String str) {
        try {
            File file = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS), "share_image_" + System.currentTimeMillis() + ".png");
            file.getParentFile().mkdirs();
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            fileOutputStream.write(Base64.decode(str, 0));
            fileOutputStream.close();
            return file;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public File getLocalBitmapFileFromView(ImageView imageView) {
        if (!(imageView.getDrawable() instanceof BitmapDrawable)) {
            return null;
        }
        Bitmap bitmap = ((BitmapDrawable) imageView.getDrawable()).getBitmap();
        try {
            File file = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS), "share_image_" + System.currentTimeMillis() + ".png");
            file.getParentFile().mkdirs();
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            bitmap.compress(Bitmap.CompressFormat.PNG, 90, fileOutputStream);
            fileOutputStream.close();
            return file;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    private JSONObject parseHeaders(String str) {
        if (str == null || str.length() == 0) {
            return null;
        }
        try {
            return new JSONObject(str);
        } catch (JSONException e) {
            e.printStackTrace();
            return null;
        }
    }
}

