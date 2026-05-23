package com.onesignal;

import android.content.Context;
import android.content.res.Resources;
import android.view.MotionEvent;
import android.view.View;
import android.widget.RelativeLayout;
import androidx.core.view.ViewCompat;
import androidx.customview.widget.ViewDragHelper;
class DraggableRelativeLayout extends RelativeLayout {
    private boolean dismissing;
    private boolean draggingDisabled;
    private ViewDragHelper mDragHelper;
    private DraggableListener mListener;
    private Params params;
    private static final int MARGIN_PX_SIZE = OSViewUtils.dpToPx(28);
    private static final int EXTRA_PX_DISMISS = OSViewUtils.dpToPx(64);

    interface DraggableListener {
        void onDismiss();

        void onDragEnd();

        void onDragStart();
    }

    static class Params {
        static final int DRAGGABLE_DIRECTION_DOWN = 1;
        static final int DRAGGABLE_DIRECTION_UP = 0;
        private int dismissingYPos;
        private int dismissingYVelocity;
        int dragDirection;
        int dragThresholdY;
        boolean draggingDisabled;
        int height;
        int maxXPos;
        int maxYPos;
        int messageHeight;
        private int offScreenYPos;
        int posY;

        Params() {
        }
    }

    public DraggableRelativeLayout(Context context) {
        super(context);
        setClipChildren(false);
        createDragHelper();
    }

    void setListener(DraggableListener draggableListener) {
        this.mListener = draggableListener;
    }

    void setParams(Params params) {
        this.params = params;
        params.offScreenYPos = params.messageHeight + params.posY + ((Resources.getSystem().getDisplayMetrics().heightPixels - params.messageHeight) - params.posY) + EXTRA_PX_DISMISS;
        params.dismissingYVelocity = OSViewUtils.dpToPx(3000);
        if (params.dragDirection == 0) {
            params.offScreenYPos = (-params.messageHeight) - MARGIN_PX_SIZE;
            params.dismissingYVelocity = -params.dismissingYVelocity;
            params.dismissingYPos = params.offScreenYPos / 3;
            return;
        }
        params.dismissingYPos = (params.messageHeight / 3) + (params.maxYPos * 2);
    }

    private void createDragHelper() {
        this.mDragHelper = ViewDragHelper.create(this, 1.0f, new ViewDragHelper.Callback() { // from class: com.onesignal.DraggableRelativeLayout.1
            private int lastYPos;

            @Override // androidx.customview.widget.ViewDragHelper.Callback
            public boolean tryCaptureView(View view, int i) {
                return true;
            }

            @Override // androidx.customview.widget.ViewDragHelper.Callback
            public int clampViewPositionVertical(View view, int i, int i2) {
                if (DraggableRelativeLayout.this.params.draggingDisabled) {
                    return DraggableRelativeLayout.this.params.maxYPos;
                }
                this.lastYPos = i;
                if (DraggableRelativeLayout.this.params.dragDirection == 1) {
                    if (i >= DraggableRelativeLayout.this.params.dragThresholdY && DraggableRelativeLayout.this.mListener != null) {
                        DraggableRelativeLayout.this.mListener.onDragStart();
                    }
                    if (i < DraggableRelativeLayout.this.params.maxYPos) {
                        return DraggableRelativeLayout.this.params.maxYPos;
                    }
                } else {
                    if (i <= DraggableRelativeLayout.this.params.dragThresholdY && DraggableRelativeLayout.this.mListener != null) {
                        DraggableRelativeLayout.this.mListener.onDragStart();
                    }
                    if (i > DraggableRelativeLayout.this.params.maxYPos) {
                        return DraggableRelativeLayout.this.params.maxYPos;
                    }
                }
                return i;
            }

            @Override // androidx.customview.widget.ViewDragHelper.Callback
            public int clampViewPositionHorizontal(View view, int i, int i2) {
                return DraggableRelativeLayout.this.params.maxXPos;
            }

            @Override // androidx.customview.widget.ViewDragHelper.Callback
            public void onViewReleased(View view, float f, float f2) {
                int i = DraggableRelativeLayout.this.params.maxYPos;
                if (!DraggableRelativeLayout.this.dismissing) {
                    if (DraggableRelativeLayout.this.params.dragDirection == 1) {
                        if (this.lastYPos > DraggableRelativeLayout.this.params.dismissingYPos || f2 > DraggableRelativeLayout.this.params.dismissingYVelocity) {
                            i = DraggableRelativeLayout.this.params.offScreenYPos;
                            DraggableRelativeLayout.this.dismissing = true;
                            if (DraggableRelativeLayout.this.mListener != null) {
                                DraggableRelativeLayout.this.mListener.onDismiss();
                            }
                        }
                    } else if (this.lastYPos < DraggableRelativeLayout.this.params.dismissingYPos || f2 < DraggableRelativeLayout.this.params.dismissingYVelocity) {
                        i = DraggableRelativeLayout.this.params.offScreenYPos;
                        DraggableRelativeLayout.this.dismissing = true;
                        if (DraggableRelativeLayout.this.mListener != null) {
                            DraggableRelativeLayout.this.mListener.onDismiss();
                        }
                    }
                }
                if (DraggableRelativeLayout.this.mDragHelper.settleCapturedViewAt(DraggableRelativeLayout.this.params.maxXPos, i)) {
                    ViewCompat.postInvalidateOnAnimation(DraggableRelativeLayout.this);
                }
            }
        });
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptTouchEvent(MotionEvent motionEvent) {
        DraggableListener draggableListener;
        if (this.dismissing) {
            return true;
        }
        int action = motionEvent.getAction();
        if ((action == 0 || action == 5) && (draggableListener = this.mListener) != null) {
            draggableListener.onDragEnd();
        }
        this.mDragHelper.processTouchEvent(motionEvent);
        return false;
    }

    @Override // android.view.View
    public void computeScroll() {
        super.computeScroll();
        if (this.mDragHelper.continueSettling(true)) {
            ViewCompat.postInvalidateOnAnimation(this);
        }
    }

    public void dismiss() {
        this.dismissing = true;
        this.mDragHelper.smoothSlideViewTo(this, getLeft(), this.params.offScreenYPos);
        ViewCompat.postInvalidateOnAnimation(this);
    }
}

