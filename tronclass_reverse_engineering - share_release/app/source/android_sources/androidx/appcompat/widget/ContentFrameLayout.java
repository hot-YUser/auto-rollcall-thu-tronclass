package androidx.appcompat.widget;

import android.content.Context;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.util.DisplayMetrics;
import android.util.TypedValue;
import android.view.View;
import android.widget.FrameLayout;
import androidx.core.view.ViewCompat;
import org.opencv.videoio.Videoio;
public class ContentFrameLayout extends FrameLayout {
    private OnAttachListener mAttachListener;
    private final Rect mDecorPadding;
    private TypedValue mFixedHeightMajor;
    private TypedValue mFixedHeightMinor;
    private TypedValue mFixedWidthMajor;
    private TypedValue mFixedWidthMinor;
    private TypedValue mMinWidthMajor;
    private TypedValue mMinWidthMinor;

    public interface OnAttachListener {
        void onAttachedFromWindow();

        void onDetachedFromWindow();
    }

    public ContentFrameLayout(Context context) {
        this(context, null);
    }

    public ContentFrameLayout(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public ContentFrameLayout(Context context, AttributeSet attributeSet, int i) {
        super(context, attributeSet, i);
        this.mDecorPadding = new Rect();
    }

    public void dispatchFitSystemWindows(Rect rect) {
        fitSystemWindows(rect);
    }

    public void setAttachListener(OnAttachListener onAttachListener) {
        this.mAttachListener = onAttachListener;
    }

    public void setDecorPadding(int i, int i2, int i3, int i4) {
        this.mDecorPadding.set(i, i2, i3, i4);
        if (ViewCompat.isLaidOut(this)) {
            requestLayout();
        }
    }

    /* high-level source view WARN: Removed duplicated region for block: B:23:0x0050  */
    /* high-level source view WARN: Removed duplicated region for block: B:24:0x0068  */
    /* high-level source view WARN: Removed duplicated region for block: B:41:0x0094  */
    /* high-level source view WARN: Removed duplicated region for block: B:60:0x00e2  */
    /* high-level source view WARN: Removed duplicated region for block: B:62:0x00ee  */
    /* high-level source view WARN: Removed duplicated region for block: B:63:0x00f3  */
    @Override // android.widget.FrameLayout, android.view.View
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    protected void onMeasure(int i, int i2) {
        boolean z;
        int i3;
        float fraction;
        int i4;
        float fraction2;
        int i5;
        float fraction3;
        DisplayMetrics displayMetrics = getContext().getResources().getDisplayMetrics();
        boolean z2 = true;
        boolean z3 = displayMetrics.widthPixels < displayMetrics.heightPixels;
        int mode = View.MeasureSpec.getMode(i);
        int mode2 = View.MeasureSpec.getMode(i2);
        if (mode != Integer.MIN_VALUE) {
            z = false;
        } else {
            TypedValue typedValue = z3 ? this.mFixedWidthMinor : this.mFixedWidthMajor;
            if (typedValue != null && typedValue.type != 0) {
                if (typedValue.type == 5) {
                    fraction3 = typedValue.getDimension(displayMetrics);
                } else if (typedValue.type == 6) {
                    fraction3 = typedValue.getFraction(displayMetrics.widthPixels, displayMetrics.widthPixels);
                } else {
                    i5 = 0;
                    if (i5 <= 0) {
                        i = View.MeasureSpec.makeMeasureSpec(Math.min(i5 - (this.mDecorPadding.left + this.mDecorPadding.right), View.MeasureSpec.getSize(i)), Videoio.CAP_OPENNI_IMAGE_GENERATOR);
                        z = true;
                    }
                }
                i5 = (int) fraction3;
                if (i5 <= 0) {
                }
            }
        }
        if (mode2 == Integer.MIN_VALUE) {
            TypedValue typedValue2 = z3 ? this.mFixedHeightMajor : this.mFixedHeightMinor;
            if (typedValue2 != null && typedValue2.type != 0) {
                if (typedValue2.type == 5) {
                    fraction2 = typedValue2.getDimension(displayMetrics);
                } else if (typedValue2.type == 6) {
                    fraction2 = typedValue2.getFraction(displayMetrics.heightPixels, displayMetrics.heightPixels);
                } else {
                    i4 = 0;
                    if (i4 > 0) {
                        i2 = View.MeasureSpec.makeMeasureSpec(Math.min(i4 - (this.mDecorPadding.top + this.mDecorPadding.bottom), View.MeasureSpec.getSize(i2)), Videoio.CAP_OPENNI_IMAGE_GENERATOR);
                    }
                }
                i4 = (int) fraction2;
                if (i4 > 0) {
                }
            }
        }
        super.onMeasure(i, i2);
        int measuredWidth = getMeasuredWidth();
        int iMakeMeasureSpec = View.MeasureSpec.makeMeasureSpec(measuredWidth, Videoio.CAP_OPENNI_IMAGE_GENERATOR);
        if (z || mode != Integer.MIN_VALUE) {
            z2 = false;
        } else {
            TypedValue typedValue3 = z3 ? this.mMinWidthMinor : this.mMinWidthMajor;
            if (typedValue3 != null && typedValue3.type != 0) {
                if (typedValue3.type == 5) {
                    fraction = typedValue3.getDimension(displayMetrics);
                } else if (typedValue3.type == 6) {
                    fraction = typedValue3.getFraction(displayMetrics.widthPixels, displayMetrics.widthPixels);
                } else {
                    i3 = 0;
                    if (i3 > 0) {
                        i3 -= this.mDecorPadding.left + this.mDecorPadding.right;
                    }
                    if (measuredWidth >= i3) {
                        iMakeMeasureSpec = View.MeasureSpec.makeMeasureSpec(i3, Videoio.CAP_OPENNI_IMAGE_GENERATOR);
                    }
                }
                i3 = (int) fraction;
                if (i3 > 0) {
                }
                if (measuredWidth >= i3) {
                }
            }
        }
        if (z2) {
            super.onMeasure(iMakeMeasureSpec, i2);
        }
    }

    public TypedValue getMinWidthMajor() {
        if (this.mMinWidthMajor == null) {
            this.mMinWidthMajor = new TypedValue();
        }
        return this.mMinWidthMajor;
    }

    public TypedValue getMinWidthMinor() {
        if (this.mMinWidthMinor == null) {
            this.mMinWidthMinor = new TypedValue();
        }
        return this.mMinWidthMinor;
    }

    public TypedValue getFixedWidthMajor() {
        if (this.mFixedWidthMajor == null) {
            this.mFixedWidthMajor = new TypedValue();
        }
        return this.mFixedWidthMajor;
    }

    public TypedValue getFixedWidthMinor() {
        if (this.mFixedWidthMinor == null) {
            this.mFixedWidthMinor = new TypedValue();
        }
        return this.mFixedWidthMinor;
    }

    public TypedValue getFixedHeightMajor() {
        if (this.mFixedHeightMajor == null) {
            this.mFixedHeightMajor = new TypedValue();
        }
        return this.mFixedHeightMajor;
    }

    public TypedValue getFixedHeightMinor() {
        if (this.mFixedHeightMinor == null) {
            this.mFixedHeightMinor = new TypedValue();
        }
        return this.mFixedHeightMinor;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        OnAttachListener onAttachListener = this.mAttachListener;
        if (onAttachListener != null) {
            onAttachListener.onAttachedFromWindow();
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        OnAttachListener onAttachListener = this.mAttachListener;
        if (onAttachListener != null) {
            onAttachListener.onDetachedFromWindow();
        }
    }
}

