package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
class AnimatorUtils {

    interface AnimatorPauseListenerCompat {
        void onAnimationPause(Animator animator);

        void onAnimationResume(Animator animator);
    }

    static void addPauseListener(Animator animator, AnimatorListenerAdapter animatorListenerAdapter) {
        animator.addPauseListener(animatorListenerAdapter);
    }

    static void pause(Animator animator) {
        animator.pause();
    }

    static void resume(Animator animator) {
        animator.resume();
    }

    private AnimatorUtils() {
    }
}

