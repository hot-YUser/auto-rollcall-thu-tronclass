package uk.co.senab.photoview.gestures;

import android.content.Context;
import android.view.MotionEvent;
import uk.co.senab.photoview.Compat;
public class EclairGestureDetector extends CupcakeGestureDetector {
    private static final int INVALID_POINTER_ID = -1;
    private int mActivePointerId;
    private int mActivePointerIndex;

    public EclairGestureDetector(Context context) {
        super(context);
        this.mActivePointerId = -1;
        this.mActivePointerIndex = 0;
    }

    @Override // uk.co.senab.photoview.gestures.CupcakeGestureDetector
    float getActiveX(MotionEvent motionEvent) {
        try {
            return motionEvent.getX(this.mActivePointerIndex);
        } catch (Exception unused) {
            return motionEvent.getX();
        }
    }

    @Override // uk.co.senab.photoview.gestures.CupcakeGestureDetector
    float getActiveY(MotionEvent motionEvent) {
        try {
            return motionEvent.getY(this.mActivePointerIndex);
        } catch (Exception unused) {
            return motionEvent.getY();
        }
    }

    @Override // uk.co.senab.photoview.gestures.CupcakeGestureDetector, uk.co.senab.photoview.gestures.GestureDetector
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int action = motionEvent.getAction() & 255;
        if (action != 0) {
            if (action == 1 || action == 3) {
                this.mActivePointerId = -1;
            } else if (action == 6) {
                int pointerIndex = Compat.getPointerIndex(motionEvent.getAction());
                if (motionEvent.getPointerId(pointerIndex) == this.mActivePointerId) {
                    int i = pointerIndex != 0 ? 0 : 1;
                    this.mActivePointerId = motionEvent.getPointerId(i);
                    this.mLastTouchX = motionEvent.getX(i);
                    this.mLastTouchY = motionEvent.getY(i);
                }
            }
        } else {
            this.mActivePointerId = motionEvent.getPointerId(0);
        }
        int i2 = this.mActivePointerId;
        this.mActivePointerIndex = motionEvent.findPointerIndex(i2 != -1 ? i2 : 0);
        return super.onTouchEvent(motionEvent);
    }
}

