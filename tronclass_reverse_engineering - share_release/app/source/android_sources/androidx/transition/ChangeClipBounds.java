package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.animation.TypeEvaluator;
import android.content.Context;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.util.Property;
import android.view.View;
import android.view.ViewGroup;
import androidx.core.view.ViewCompat;
public class ChangeClipBounds extends Transition {
    private static final String PROPNAME_BOUNDS = "android:clipBounds:bounds";
    private static final String PROPNAME_CLIP = "android:clipBounds:clip";
    private static final String[] sTransitionProperties = {PROPNAME_CLIP};

    @Override // androidx.transition.Transition
    public String[] getTransitionProperties() {
        return sTransitionProperties;
    }

    public ChangeClipBounds() {
    }

    public ChangeClipBounds(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
    }

    private void captureValues(TransitionValues transitionValues) {
        View view = transitionValues.view;
        if (view.getVisibility() == 8) {
            return;
        }
        Rect clipBounds = ViewCompat.getClipBounds(view);
        transitionValues.values.put(PROPNAME_CLIP, clipBounds);
        if (clipBounds == null) {
            transitionValues.values.put(PROPNAME_BOUNDS, new Rect(0, 0, view.getWidth(), view.getHeight()));
        }
    }

    @Override // androidx.transition.Transition
    public void captureStartValues(TransitionValues transitionValues) {
        captureValues(transitionValues);
    }

    @Override // androidx.transition.Transition
    public void captureEndValues(TransitionValues transitionValues) {
        captureValues(transitionValues);
    }

    @Override // androidx.transition.Transition
    public Animator createAnimator(ViewGroup viewGroup, TransitionValues transitionValues, TransitionValues transitionValues2) {
        ObjectAnimator objectAnimatorOfObject = null;
        if (transitionValues != null && transitionValues2 != null && transitionValues.values.containsKey(PROPNAME_CLIP) && transitionValues2.values.containsKey(PROPNAME_CLIP)) {
            Rect rect = (Rect) transitionValues.values.get(PROPNAME_CLIP);
            Rect rect2 = (Rect) transitionValues2.values.get(PROPNAME_CLIP);
            boolean z = rect2 == null;
            if (rect == null && rect2 == null) {
                return null;
            }
            if (rect == null) {
                rect = (Rect) transitionValues.values.get(PROPNAME_BOUNDS);
            } else if (rect2 == null) {
                rect2 = (Rect) transitionValues2.values.get(PROPNAME_BOUNDS);
            }
            if (rect.equals(rect2)) {
                return null;
            }
            ViewCompat.setClipBounds(transitionValues2.view, rect);
            objectAnimatorOfObject = ObjectAnimator.ofObject(transitionValues2.view, (Property<View, V>) ViewUtils.CLIP_BOUNDS, (TypeEvaluator) new RectEvaluator(new Rect()), (Object[]) new Rect[]{rect, rect2});
            if (z) {
                final View view = transitionValues2.view;
                objectAnimatorOfObject.addListener(new AnimatorListenerAdapter() { // from class: androidx.transition.ChangeClipBounds.1
                    @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
                    public void onAnimationEnd(Animator animator) {
                        ViewCompat.setClipBounds(view, null);
                    }
                });
            }
        }
        return objectAnimatorOfObject;
    }
}

