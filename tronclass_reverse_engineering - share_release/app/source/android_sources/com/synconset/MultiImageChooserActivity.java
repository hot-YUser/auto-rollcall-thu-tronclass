package com.synconset;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.LoaderManager;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.CursorLoader;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.Loader;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.SparseBooleanArray;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AbsListView;
import android.widget.AdapterView;
import android.widget.BaseAdapter;
import android.widget.GridView;
import android.widget.ImageView;
import android.widget.ListAdapter;
import android.widget.TextView;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
public class MultiImageChooserActivity extends AppCompatActivity implements AdapterView.OnItemClickListener, LoaderManager.LoaderCallbacks<Cursor> {
    private static final int CURSORLOADER_REAL = 1;
    private static final int CURSORLOADER_THUMBS = 0;
    public static final String HEIGHT_KEY = "HEIGHT";
    public static final String MAX_IMAGES_KEY = "MAX_IMAGES";
    public static final int NOLIMIT = -1;
    public static final String OUTPUT_TYPE_KEY = "OUTPUT_TYPE";
    public static final String QUALITY_KEY = "QUALITY";
    private static final String TAG = "ImagePicker";
    public static final String WIDTH_KEY = "WIDTH";
    private View abDiscardView;
    private View abDoneView;
    private int actual_image_column_index;
    private Cursor actualimagecursor;
    private int colWidth;
    private int desiredHeight;
    private int desiredWidth;
    private FakeR fakeR;
    private ImageAdapter ia;
    private String imageChooserDiscardText;
    private String imageChooserDoneText;
    private int image_column_index;
    private int image_column_orientation;
    private Cursor imagecursor;
    private String limitAlertButton;
    private String limitAlertContent;
    private String limitAlertTitle;
    private int maxImageCount;
    private int maxImages;
    private int orientation_column_index;
    private OutputType outputType;
    private String processingImagesMessage;
    private String processingImagesTitle;
    private ProgressDialog progress;
    private int quality;
    private Map<String, Integer> fileNames = new HashMap();
    private SparseBooleanArray checkStatus = new SparseBooleanArray();
    private final ImageFetcher fetcher = new ImageFetcher();
    private int selectedColor = -13454623;
    private boolean shouldRequestThumb = true;

    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        FakeR fakeR = new FakeR((Activity) this);
        this.fakeR = fakeR;
        setContentView(fakeR.getId("layout", "multiselectorgrid"));
        this.fileNames.clear();
        this.maxImages = getIntent().getIntExtra(MAX_IMAGES_KEY, -1);
        this.desiredWidth = getIntent().getIntExtra(WIDTH_KEY, 0);
        this.desiredHeight = getIntent().getIntExtra(HEIGHT_KEY, 0);
        this.quality = getIntent().getIntExtra(QUALITY_KEY, 0);
        this.maxImageCount = this.maxImages;
        this.outputType = OutputType.fromValue(getIntent().getIntExtra(OUTPUT_TYPE_KEY, 0));
        Bundle extras = getIntent().getExtras();
        this.imageChooserDoneText = extras.getString("imageChooserDoneText");
        this.imageChooserDiscardText = extras.getString("imageChooserDiscardText");
        this.limitAlertTitle = extras.getString("limitAlertTitle");
        this.limitAlertContent = extras.getString("limitAlertContent");
        this.limitAlertButton = extras.getString("limitAlertButton");
        this.processingImagesTitle = extras.getString("processingImagesTitle");
        this.processingImagesMessage = extras.getString("processingImagesMessage");
        this.colWidth = getWindowManager().getDefaultDisplay().getWidth() / 4;
        GridView gridView = (GridView) findViewById(this.fakeR.getId(OSOutcomeConstants.OUTCOME_ID, "gridview"));
        gridView.setOnItemClickListener(this);
        gridView.setOnScrollListener(new AbsListView.OnScrollListener() { // from class: com.synconset.MultiImageChooserActivity.1
            private int lastFirstItem = 0;
            private long timestamp = System.currentTimeMillis();

            @Override // android.widget.AbsListView.OnScrollListener
            public void onScrollStateChanged(AbsListView absListView, int i) {
                if (i == 0) {
                    MultiImageChooserActivity.this.shouldRequestThumb = true;
                    MultiImageChooserActivity.this.ia.notifyDataSetChanged();
                }
            }

            @Override // android.widget.AbsListView.OnScrollListener
            public void onScroll(AbsListView absListView, int i, int i2, int i3) {
                float fCurrentTimeMillis = System.currentTimeMillis() - this.timestamp;
                if (i != this.lastFirstItem) {
                    double d = (1.0f / fCurrentTimeMillis) * 1000.0f;
                    this.lastFirstItem = i;
                    this.timestamp = System.currentTimeMillis();
                    MultiImageChooserActivity.this.shouldRequestThumb = d < ((double) i2);
                }
            }
        });
        ImageAdapter imageAdapter = new ImageAdapter();
        this.ia = imageAdapter;
        gridView.setAdapter((ListAdapter) imageAdapter);
        LoaderManager.enableDebugLogging(false);
        getLoaderManager().initLoader(0, null, this);
        getLoaderManager().initLoader(1, null, this);
        setupHeader();
        updateAcceptButton();
        ProgressDialog progressDialog = new ProgressDialog(this);
        this.progress = progressDialog;
        progressDialog.setTitle(this.processingImagesTitle);
        this.progress.setMessage(this.processingImagesMessage);
    }

    @Override // android.widget.AdapterView.OnItemClickListener
    public void onItemClick(AdapterView<?> adapterView, View view, int i, long j) {
        String imageName = getImageName(i);
        int imageRotation = getImageRotation(i);
        if (imageName == null) {
            return;
        }
        boolean zIsChecked = isChecked(i);
        boolean z = !zIsChecked;
        if (this.maxImages == 0 && !zIsChecked) {
            new AlertDialog.Builder(this).setTitle(String.format(this.limitAlertTitle, Integer.valueOf(this.maxImageCount))).setMessage(String.format(this.limitAlertContent, Integer.valueOf(this.maxImageCount))).setPositiveButton(this.limitAlertButton, new DialogInterface.OnClickListener() { // from class: com.synconset.MultiImageChooserActivity.2
                @Override // android.content.DialogInterface.OnClickListener
                public void onClick(DialogInterface dialogInterface, int i2) {
                    dialogInterface.cancel();
                }
            }).create().show();
            z = false;
        } else if (!zIsChecked) {
            this.fileNames.put(imageName, Integer.valueOf(imageRotation));
            if (this.maxImageCount == 1) {
                selectClicked();
            } else {
                this.maxImages--;
                ((ImageView) view).setImageAlpha(128);
                view.setBackgroundColor(this.selectedColor);
            }
        } else {
            this.fileNames.remove(imageName);
            this.maxImages++;
            ((ImageView) view).setImageAlpha(255);
            view.setBackgroundColor(0);
        }
        this.checkStatus.put(i, z);
        updateAcceptButton();
    }

    @Override // android.app.LoaderManager.LoaderCallbacks
    public Loader<Cursor> onCreateLoader(int i, Bundle bundle) {
        ArrayList arrayList = new ArrayList();
        if (i == 0) {
            arrayList.add("_id");
            arrayList.add("orientation");
        } else if (i == 1) {
            arrayList.add("_data");
            arrayList.add("orientation");
        }
        return new CursorLoader(this, MediaStore.Images.Media.EXTERNAL_CONTENT_URI, (String[]) arrayList.toArray(new String[arrayList.size()]), null, null, "DATE_MODIFIED DESC");
    }

    @Override // android.app.LoaderManager.LoaderCallbacks
    public void onLoadFinished(Loader<Cursor> loader, Cursor cursor) {
        if (cursor == null) {
            return;
        }
        int id = loader.getId();
        if (id == 0) {
            this.imagecursor = cursor;
            this.image_column_index = cursor.getColumnIndex("_id");
            this.image_column_orientation = this.imagecursor.getColumnIndex("orientation");
            this.ia.notifyDataSetChanged();
            return;
        }
        if (id != 1) {
            return;
        }
        this.actualimagecursor = cursor;
        this.actual_image_column_index = cursor.getColumnIndexOrThrow("_data");
        this.orientation_column_index = this.actualimagecursor.getColumnIndexOrThrow("orientation");
    }

    @Override // android.app.LoaderManager.LoaderCallbacks
    public void onLoaderReset(Loader<Cursor> loader) {
        int id = loader.getId();
        if (id == 0) {
            this.imagecursor = null;
        } else {
            if (id != 1) {
                return;
            }
            this.actualimagecursor = null;
        }
    }

    public void cancelClicked() {
        setResult(0);
        finish();
    }

    public void selectClicked() {
        this.abDiscardView.setEnabled(false);
        this.abDoneView.setEnabled(false);
        this.progress.show();
        if (this.fileNames.isEmpty()) {
            setResult(0);
            this.progress.dismiss();
            finish();
        } else {
            setRequestedOrientation(getResources().getConfiguration().orientation);
            new ResizeImagesTask().execute(this.fileNames.entrySet());
        }
    }

    private void updateAcceptButton() {
        View view = this.abDoneView;
        if (view != null) {
            view.setEnabled(this.fileNames.size() != 0);
        }
    }

    private void setupHeader() {
        View viewInflate = ((LayoutInflater) getSystemService("layout_inflater")).inflate(this.fakeR.getId("layout", "actionbar_custom_view_done_discard"), (ViewGroup) null);
        View viewFindViewById = viewInflate.findViewById(this.fakeR.getId(OSOutcomeConstants.OUTCOME_ID, "actionbar_done"));
        this.abDoneView = viewFindViewById;
        ((TextView) viewFindViewById.findViewById(this.fakeR.getId(OSOutcomeConstants.OUTCOME_ID, "actionbar_done_textview"))).setText(this.imageChooserDoneText);
        this.abDoneView.setOnClickListener(new View.OnClickListener() { // from class: com.synconset.MultiImageChooserActivity.3
            @Override // android.view.View.OnClickListener
            public void onClick(View view) {
                MultiImageChooserActivity.this.selectClicked();
            }
        });
        View viewFindViewById2 = viewInflate.findViewById(this.fakeR.getId(OSOutcomeConstants.OUTCOME_ID, "actionbar_discard"));
        this.abDiscardView = viewFindViewById2;
        ((TextView) viewFindViewById2.findViewById(this.fakeR.getId(OSOutcomeConstants.OUTCOME_ID, "actionbar_discard_textview"))).setText(this.imageChooserDiscardText);
        this.abDiscardView.setOnClickListener(new View.OnClickListener() { // from class: com.synconset.MultiImageChooserActivity.4
            @Override // android.view.View.OnClickListener
            public void onClick(View view) {
                MultiImageChooserActivity.this.cancelClicked();
            }
        });
        ActionBar supportActionBar = getSupportActionBar();
        if (supportActionBar != null) {
            supportActionBar.setDisplayOptions(16, 26);
            supportActionBar.setCustomView(viewInflate, new ActionBar.LayoutParams(-1, -1));
        }
    }

    private String getImageName(int i) {
        this.actualimagecursor.moveToPosition(i);
        try {
            return this.actualimagecursor.getString(this.actual_image_column_index);
        } catch (Exception unused) {
            return null;
        }
    }

    private int getImageRotation(int i) {
        this.actualimagecursor.moveToPosition(i);
        try {
            return this.actualimagecursor.getInt(this.orientation_column_index);
        } catch (Exception unused) {
            return 0;
        }
    }

    public boolean isChecked(int i) {
        return this.checkStatus.get(i);
    }

    private class SquareImageView extends ImageView {
        public SquareImageView(Context context) {
            super(context);
        }

        @Override // android.widget.ImageView, android.view.View
        public void onMeasure(int i, int i2) {
            super.onMeasure(i, i);
        }
    }

    private class ImageAdapter extends BaseAdapter {
        @Override // android.widget.Adapter
        public long getItemId(int i) {
            return i;
        }

        private ImageAdapter() {
        }

        @Override // android.widget.Adapter
        public int getCount() {
            if (MultiImageChooserActivity.this.imagecursor != null) {
                return MultiImageChooserActivity.this.imagecursor.getCount();
            }
            return 0;
        }

        @Override // android.widget.Adapter
        public Object getItem(int i) {
            return Integer.valueOf(i);
        }

        @Override // android.widget.Adapter
        public View getView(int i, View view, ViewGroup viewGroup) {
            Object obj = view;
            if (view == null) {
                MultiImageChooserActivity multiImageChooserActivity = MultiImageChooserActivity.this;
                SquareImageView squareImageView = multiImageChooserActivity.new SquareImageView(multiImageChooserActivity);
                squareImageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
                obj = squareImageView;
            }
            ImageView imageView = (ImageView) obj;
            imageView.setImageBitmap(null);
            if (!MultiImageChooserActivity.this.imagecursor.moveToPosition(i) || MultiImageChooserActivity.this.image_column_index == -1) {
                return imageView;
            }
            int i2 = MultiImageChooserActivity.this.imagecursor.getInt(MultiImageChooserActivity.this.image_column_index);
            int i3 = MultiImageChooserActivity.this.imagecursor.getInt(MultiImageChooserActivity.this.image_column_orientation);
            if (MultiImageChooserActivity.this.isChecked(i)) {
                imageView.setImageAlpha(128);
                imageView.setBackgroundColor(MultiImageChooserActivity.this.selectedColor);
            } else {
                imageView.setImageAlpha(255);
                imageView.setBackgroundColor(0);
            }
            if (MultiImageChooserActivity.this.shouldRequestThumb) {
                MultiImageChooserActivity.this.fetcher.fetch(Integer.valueOf(i2), imageView, MultiImageChooserActivity.this.colWidth, i3);
            }
            return imageView;
        }
    }

    private class ResizeImagesTask extends AsyncTask<Set<Map.Entry<String, Integer>>, Void, ArrayList<String>> {
        private Exception asyncTaskError;

        private ResizeImagesTask() {
            this.asyncTaskError = null;
        }
        @Override // android.os.AsyncTask
        public ArrayList<String> doInBackground(Set<Map.Entry<String, Integer>>... setArr) {
            Bitmap bitmapTryToGetBitmap;
            Set<Map.Entry<String, Integer>> set = setArr[0];
            ArrayList<String> arrayList = new ArrayList<>();
            try {
                for (Map.Entry<String, Integer> entry : set) {
                    File file = new File(entry.getKey());
                    int iIntValue = entry.getValue().intValue();
                    BitmapFactory.Options options = new BitmapFactory.Options();
                    options.inSampleSize = 1;
                    options.inJustDecodeBounds = true;
                    BitmapFactory.decodeFile(file.getAbsolutePath(), options);
                    int i = options.outWidth;
                    int i2 = options.outHeight;
                    float fCalculateScale = MultiImageChooserActivity.this.calculateScale(i, i2);
                    if (fCalculateScale < 1.0f) {
                        int iCalculateInSampleSize = MultiImageChooserActivity.this.calculateInSampleSize(options, (int) (i * fCalculateScale), (int) (i2 * fCalculateScale));
                        BitmapFactory.Options options2 = new BitmapFactory.Options();
                        options2.inSampleSize = iCalculateInSampleSize;
                        try {
                            bitmapTryToGetBitmap = tryToGetBitmap(file, options2, iIntValue, true);
                        } catch (OutOfMemoryError unused) {
                            options2.inSampleSize = MultiImageChooserActivity.this.calculateNextSampleSize(options2.inSampleSize);
                            try {
                                bitmapTryToGetBitmap = tryToGetBitmap(file, options2, iIntValue, false);
                            } catch (OutOfMemoryError unused2) {
                                throw new IOException("Unable to load image into memory.");
                            }
                        }
                    } else {
                        try {
                            bitmapTryToGetBitmap = tryToGetBitmap(file, null, iIntValue, false);
                        } catch (OutOfMemoryError unused3) {
                            BitmapFactory.Options options3 = new BitmapFactory.Options();
                            options3.inSampleSize = 2;
                            try {
                                bitmapTryToGetBitmap = tryToGetBitmap(file, options3, iIntValue, false);
                            } catch (OutOfMemoryError unused4) {
                                BitmapFactory.Options options4 = new BitmapFactory.Options();
                                options4.inSampleSize = 4;
                                try {
                                    bitmapTryToGetBitmap = tryToGetBitmap(file, options4, iIntValue, false);
                                } catch (OutOfMemoryError unused5) {
                                    throw new IOException("Unable to load image into memory.");
                                }
                            }
                        }
                    }
                    if (MultiImageChooserActivity.this.outputType != OutputType.FILE_URI) {
                        if (MultiImageChooserActivity.this.outputType == OutputType.BASE64_STRING) {
                            arrayList.add(getBase64OfImage(bitmapTryToGetBitmap));
                        }
                    } else {
                        arrayList.add(Uri.fromFile(storeImage(bitmapTryToGetBitmap, file.getName())).toString());
                    }
                }
                return arrayList;
            } catch (IOException e) {
                try {
                    this.asyncTaskError = e;
                    for (int i3 = 0; i3 < arrayList.size(); i3++) {
                        new File(new URI(arrayList.get(i3))).delete();
                    }
                } catch (Exception unused6) {
                }
                return new ArrayList<>();
            }
        }
        @Override // android.os.AsyncTask
        public void onPostExecute(ArrayList<String> arrayList) {
            Intent intent = new Intent();
            if (this.asyncTaskError != null) {
                Bundle bundle = new Bundle();
                bundle.putString("ERRORMESSAGE", this.asyncTaskError.getMessage());
                intent.putExtras(bundle);
                MultiImageChooserActivity.this.setResult(0, intent);
            } else if (arrayList.size() > 0) {
                Bundle bundle2 = new Bundle();
                bundle2.putStringArrayList("MULTIPLEFILENAMES", arrayList);
                if (MultiImageChooserActivity.this.imagecursor != null) {
                    bundle2.putInt("TOTALFILES", MultiImageChooserActivity.this.imagecursor.getCount());
                }
                intent.putExtra("bigdata:synccode", ResultIPC.get().setLargeData(bundle2));
                MultiImageChooserActivity.this.setResult(-1, intent);
            } else {
                MultiImageChooserActivity.this.setResult(0, intent);
            }
            MultiImageChooserActivity.this.progress.dismiss();
            MultiImageChooserActivity.this.finish();
        }

        private Bitmap tryToGetBitmap(File file, BitmapFactory.Options options, int i, boolean z) throws IOException, OutOfMemoryError {
            Bitmap bitmapDecodeFile;
            if (options == null) {
                bitmapDecodeFile = BitmapFactory.decodeFile(file.getAbsolutePath());
            } else {
                bitmapDecodeFile = BitmapFactory.decodeFile(file.getAbsolutePath(), options);
            }
            if (bitmapDecodeFile == null) {
                throw new IOException("The image file could not be opened.");
            }
            if (options != null && z) {
                bitmapDecodeFile = getResizedBitmap(bitmapDecodeFile, MultiImageChooserActivity.this.calculateScale(options.outWidth, options.outHeight));
            }
            Bitmap bitmap = bitmapDecodeFile;
            if (i == 0) {
                return bitmap;
            }
            Matrix matrix = new Matrix();
            matrix.setRotate(i);
            return Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(), bitmap.getHeight(), matrix, true);
        }

        private File storeImage(Bitmap bitmap, String str) throws IOException {
            int iLastIndexOf = str.lastIndexOf(46);
            String strSubstring = str.substring(0, iLastIndexOf);
            String strSubstring2 = str.substring(iLastIndexOf);
            File fileCreateTempFile = File.createTempFile("tmp_" + strSubstring, strSubstring2);
            FileOutputStream fileOutputStream = new FileOutputStream(fileCreateTempFile);
            if (strSubstring2.compareToIgnoreCase(".png") == 0) {
                bitmap.compress(Bitmap.CompressFormat.PNG, MultiImageChooserActivity.this.quality, fileOutputStream);
            } else {
                bitmap.compress(Bitmap.CompressFormat.JPEG, MultiImageChooserActivity.this.quality, fileOutputStream);
            }
            fileOutputStream.flush();
            fileOutputStream.close();
            return fileCreateTempFile;
        }

        private Bitmap getResizedBitmap(Bitmap bitmap, float f) {
            int width = bitmap.getWidth();
            int height = bitmap.getHeight();
            Matrix matrix = new Matrix();
            matrix.postScale(f, f);
            return Bitmap.createBitmap(bitmap, 0, 0, width, height, matrix, false);
        }

        private String getBase64OfImage(Bitmap bitmap) {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            bitmap.compress(Bitmap.CompressFormat.JPEG, MultiImageChooserActivity.this.quality, byteArrayOutputStream);
            return Base64.encodeToString(byteArrayOutputStream.toByteArray(), 2);
        }
    }
    public int calculateInSampleSize(BitmapFactory.Options options, int i, int i2) {
        int i3 = options.outHeight;
        int i4 = options.outWidth;
        int i5 = 1;
        if (i3 > i2 || i4 > i) {
            int i6 = i3 / 2;
            int i7 = i4 / 2;
            while (i6 / i5 > i2 && i7 / i5 > i) {
                i5 *= 2;
            }
        }
        return i5;
    }
    public int calculateNextSampleSize(int i) {
        return (int) Math.pow(((double) ((int) (Math.log(i) / Math.log(2.0d)))) + 1.0d, 2.0d);
    }
    public float calculateScale(int i, int i2) {
        int i3 = this.desiredWidth;
        float f = 1.0f;
        if (i3 <= 0 && this.desiredHeight <= 0) {
            return 1.0f;
        }
        int i4 = this.desiredHeight;
        if (i4 == 0 && i3 < i) {
            return i3 / i;
        }
        if (i3 == 0 && i4 < i2) {
            return i4 / i2;
        }
        float f2 = (i3 <= 0 || i3 >= i) ? 1.0f : i3 / i;
        if (i4 > 0 && i4 < i2) {
            f = i4 / i2;
        }
        return f2 < f ? f2 : f;
    }

    enum OutputType {
        FILE_URI(0),
        BASE64_STRING(1);

        int value;

        OutputType(int i) {
            this.value = i;
        }

        public static OutputType fromValue(int i) {
            for (OutputType outputType : values()) {
                if (outputType.value == i) {
                    return outputType;
                }
            }
            throw new IllegalArgumentException("Invalid enum value specified");
        }
    }
}

