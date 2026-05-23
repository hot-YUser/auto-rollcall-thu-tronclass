package com.onesignal;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Handler;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import android.webkit.WebView;
import android.widget.PopupWindow;
import android.widget.RelativeLayout;
import androidx.camera.video.AudioStats;
import androidx.cardview.widget.CardView;
import androidx.core.view.PointerIconCompat;
import androidx.core.widget.PopupWindowCompat;
import com.onesignal.DraggableRelativeLayout;
import com.onesignal.OneSignal;
import com.onesignal.WebViewManager;
class InAppMessageView {
    private static final int ACTIVITY_FINISH_AFTER_DISMISS_DELAY_MS = 600;
    private static final int ACTIVITY_INIT_DELAY = 200;
    private static final int IN_APP_BACKGROUND_ANIMATION_DURATION_MS = 400;
    private static final int IN_APP_BANNER_ANIMATION_DURATION_MS = 1000;
    private static final int IN_APP_CENTER_ANIMATION_DURATION_MS = 1000;
    private static final String IN_APP_MESSAGE_CARD_VIEW_TAG = "IN_APP_MESSAGE_CARD_VIEW_TAG";
    private Activity currentActivity;
    private boolean disableDragDismiss;
    private double displayDuration;
    private WebViewManager.Position displayLocation;
    private DraggableRelativeLayout draggableRelativeLayout;
    private boolean hasBackground;
    private OSInAppMessageContent messageContent;
    private InAppMessageViewListener messageController;
    private int pageHeight;
    private RelativeLayout parentRelativeLayout;
    private PopupWindow popupWindow;
    private Runnable scheduleDismissRunnable;
    private WebView webView;
    private static final int ACTIVITY_BACKGROUND_COLOR_EMPTY = Color.parseColor("#00000000");
    private static final int ACTIVITY_BACKGROUND_COLOR_FULL = Color.parseColor("#BB000000");
    private static final int DRAG_THRESHOLD_PX_SIZE = OSViewUtils.dpToPx(4);
    private final Handler handler = new Handler();
    private int marginPxSizeLeft = OSViewUtils.dpToPx(24);
    private int marginPxSizeRight = OSViewUtils.dpToPx(24);
    private int marginPxSizeTop = OSViewUtils.dpToPx(24);
    private int marginPxSizeBottom = OSViewUtils.dpToPx(24);
    private boolean shouldDismissWhenActive = false;
    private boolean isDragging = false;
    private int pageWidth = -1;

    interface InAppMessageViewListener {
        void onMessageWasDismissed();

        void onMessageWasShown();

        void onMessageWillDismiss();
    }

    InAppMessageView(WebView webView, OSInAppMessageContent oSInAppMessageContent, boolean z) {
        this.disableDragDismiss = false;
        this.webView = webView;
        this.displayLocation = oSInAppMessageContent.getDisplayLocation();
        this.pageHeight = oSInAppMessageContent.getPageHeight();
        this.displayDuration = oSInAppMessageContent.getDisplayDuration() == null ? AudioStats.AUDIO_AMPLITUDE_NONE : oSInAppMessageContent.getDisplayDuration().doubleValue();
        this.hasBackground = !this.displayLocation.isBanner();
        this.disableDragDismiss = z;
        this.messageContent = oSInAppMessageContent;
        setMarginsFromContent(oSInAppMessageContent);
    }

    private void setMarginsFromContent(OSInAppMessageContent oSInAppMessageContent) {
        this.marginPxSizeTop = oSInAppMessageContent.getUseHeightMargin() ? OSViewUtils.dpToPx(24) : 0;
        this.marginPxSizeBottom = oSInAppMessageContent.getUseHeightMargin() ? OSViewUtils.dpToPx(24) : 0;
        this.marginPxSizeLeft = oSInAppMessageContent.getUseWidthMargin() ? OSViewUtils.dpToPx(24) : 0;
        this.marginPxSizeRight = oSInAppMessageContent.getUseWidthMargin() ? OSViewUtils.dpToPx(24) : 0;
    }

    void setWebView(WebView webView) {
        this.webView = webView;
        webView.setBackgroundColor(0);
    }

    void setMessageController(InAppMessageViewListener inAppMessageViewListener) {
        this.messageController = inAppMessageViewListener;
    }

    WebViewManager.Position getDisplayPosition() {
        return this.displayLocation;
    }

    void showView(Activity activity) {
        delayShowUntilAvailable(activity);
    }

    void checkIfShouldDismiss() {
        if (this.shouldDismissWhenActive) {
            this.shouldDismissWhenActive = false;
            finishAfterDelay(null);
        }
    }

    void updateHeight(final int i) {
        this.pageHeight = i;
        OSUtils.runOnMainUIThread(new Runnable() { // from class: com.onesignal.InAppMessageView.1
            @Override // java.lang.Runnable
            public void run() {
                if (InAppMessageView.this.webView != null) {
                    ViewGroup.LayoutParams layoutParams = InAppMessageView.this.webView.getLayoutParams();
                    if (layoutParams == null) {
                        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.WARN, "WebView height update skipped because of null layoutParams, new height will be used once it is displayed.");
                        return;
                    }
                    layoutParams.height = i;
                    InAppMessageView.this.webView.setLayoutParams(layoutParams);
                    if (InAppMessageView.this.draggableRelativeLayout != null) {
                        DraggableRelativeLayout draggableRelativeLayout = InAppMessageView.this.draggableRelativeLayout;
                        InAppMessageView inAppMessageView = InAppMessageView.this;
                        draggableRelativeLayout.setParams(inAppMessageView.createDraggableLayoutParams(i, inAppMessageView.displayLocation, InAppMessageView.this.disableDragDismiss));
                        return;
                    }
                    return;
                }
                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.WARN, "WebView height update skipped, new height will be used once it is displayed.");
            }
        });
    }

    void showInAppMessageView(Activity activity) {
        this.currentActivity = activity;
        RelativeLayout.LayoutParams layoutParams = new RelativeLayout.LayoutParams(-1, this.pageHeight);
        layoutParams.addRule(13);
        RelativeLayout.LayoutParams layoutParamsCreateParentRelativeLayoutParams = this.hasBackground ? createParentRelativeLayoutParams() : null;
        WebViewManager.Position position = this.displayLocation;
        showDraggableView(position, layoutParams, layoutParamsCreateParentRelativeLayoutParams, createDraggableLayoutParams(this.pageHeight, position, this.disableDragDismiss));
    }

    private int getDisplayYSize() {
        return OSViewUtils.getWindowHeight(this.currentActivity);
    }
    static /* synthetic */ class AnonymousClass9 {
        static final /* synthetic */ int[] $SwitchMap$com$onesignal$WebViewManager$Position;

        static {
            int[] iArr = new int[WebViewManager.Position.values().length];
            $SwitchMap$com$onesignal$WebViewManager$Position = iArr;
            try {
                iArr[WebViewManager.Position.TOP_BANNER.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$com$onesignal$WebViewManager$Position[WebViewManager.Position.BOTTOM_BANNER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$com$onesignal$WebViewManager$Position[WebViewManager.Position.CENTER_MODAL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                $SwitchMap$com$onesignal$WebViewManager$Position[WebViewManager.Position.FULL_SCREEN.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    private RelativeLayout.LayoutParams createParentRelativeLayoutParams() {
        RelativeLayout.LayoutParams layoutParams = new RelativeLayout.LayoutParams(this.pageWidth, -1);
        int i = AnonymousClass9.$SwitchMap$com$onesignal$WebViewManager$Position[this.displayLocation.ordinal()];
        if (i == 1) {
            layoutParams.addRule(10);
            layoutParams.addRule(14);
        } else if (i == 2) {
            layoutParams.addRule(12);
            layoutParams.addRule(14);
        } else if (i == 3 || i == 4) {
            layoutParams.addRule(13);
        }
        return layoutParams;
    }
    public DraggableRelativeLayout.Params createDraggableLayoutParams(int i, WebViewManager.Position position, boolean z) {
        DraggableRelativeLayout.Params params = new DraggableRelativeLayout.Params();
        params.maxXPos = this.marginPxSizeRight;
        params.maxYPos = this.marginPxSizeTop;
        params.draggingDisabled = z;
        params.messageHeight = i;
        params.height = getDisplayYSize();
        int i2 = AnonymousClass9.$SwitchMap$com$onesignal$WebViewManager$Position[position.ordinal()];
        if (i2 == 1) {
            params.dragThresholdY = this.marginPxSizeTop - DRAG_THRESHOLD_PX_SIZE;
        } else if (i2 == 2) {
            params.posY = getDisplayYSize() - i;
            params.dragThresholdY = this.marginPxSizeBottom + DRAG_THRESHOLD_PX_SIZE;
        } else if (i2 == 3) {
            int displayYSize = (getDisplayYSize() / 2) - (i / 2);
            params.dragThresholdY = DRAG_THRESHOLD_PX_SIZE + displayYSize;
            params.maxYPos = displayYSize;
            params.posY = displayYSize;
        } else if (i2 == 4) {
            i = getDisplayYSize() - (this.marginPxSizeBottom + this.marginPxSizeTop);
            params.messageHeight = i;
            int displayYSize2 = (getDisplayYSize() / 2) - (i / 2);
            params.dragThresholdY = DRAG_THRESHOLD_PX_SIZE + displayYSize2;
            params.maxYPos = displayYSize2;
            params.posY = displayYSize2;
        }
        params.dragDirection = position == WebViewManager.Position.TOP_BANNER ? 0 : 1;
        return params;
    }

    private void showDraggableView(final WebViewManager.Position position, final RelativeLayout.LayoutParams layoutParams, final RelativeLayout.LayoutParams layoutParams2, final DraggableRelativeLayout.Params params) {
        OSUtils.runOnMainUIThread(new Runnable() { // from class: com.onesignal.InAppMessageView.2
            @Override // java.lang.Runnable
            public void run() {
                if (InAppMessageView.this.webView == null) {
                    return;
                }
                InAppMessageView.this.webView.setLayoutParams(layoutParams);
                Context applicationContext = InAppMessageView.this.currentActivity.getApplicationContext();
                InAppMessageView.this.setUpDraggableLayout(applicationContext, layoutParams2, params);
                InAppMessageView.this.setUpParentRelativeLayout(applicationContext);
                InAppMessageView inAppMessageView = InAppMessageView.this;
                inAppMessageView.createPopupWindow(inAppMessageView.parentRelativeLayout);
                if (InAppMessageView.this.messageController != null) {
                    InAppMessageView inAppMessageView2 = InAppMessageView.this;
                    inAppMessageView2.animateInAppMessage(position, inAppMessageView2.draggableRelativeLayout, InAppMessageView.this.parentRelativeLayout);
                }
                InAppMessageView.this.startDismissTimerIfNeeded();
            }
        });
    }
    /* high-level source view WARN: Removed duplicated region for block: B:22:0x0048  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public void createPopupWindow(RelativeLayout relativeLayout) {
        boolean z = this.hasBackground;
        int i = z ? -1 : this.pageWidth;
        int i2 = z ? -1 : -2;
        int i3 = 1;
        PopupWindow popupWindow = new PopupWindow((View) relativeLayout, i, i2, true);
        this.popupWindow = popupWindow;
        popupWindow.setBackgroundDrawable(new ColorDrawable(0));
        this.popupWindow.setTouchable(true);
        this.popupWindow.setClippingEnabled(false);
        if (this.hasBackground) {
            i3 = 0;
        } else {
            int i4 = AnonymousClass9.$SwitchMap$com$onesignal$WebViewManager$Position[this.displayLocation.ordinal()];
            if (i4 == 1) {
                i3 = 49;
            } else if (i4 == 2) {
                i3 = 81;
            } else if (i4 != 3 && i4 != 4) {
            }
        }
        PopupWindowCompat.setWindowLayoutType(this.popupWindow, this.messageContent.getIsFullBleed() ? 1000 : PointerIconCompat.TYPE_HELP);
        this.popupWindow.showAtLocation(this.currentActivity.getWindow().getDecorView().getRootView(), i3, 0, 0);
    }
    public void setUpParentRelativeLayout(Context context) {
        RelativeLayout relativeLayout = new RelativeLayout(context);
        this.parentRelativeLayout = relativeLayout;
        relativeLayout.setBackgroundDrawable(new ColorDrawable(0));
        this.parentRelativeLayout.setClipChildren(false);
        this.parentRelativeLayout.setClipToPadding(false);
        this.parentRelativeLayout.addView(this.draggableRelativeLayout);
    }
    public void setUpDraggableLayout(Context context, RelativeLayout.LayoutParams layoutParams, DraggableRelativeLayout.Params params) {
        DraggableRelativeLayout draggableRelativeLayout = new DraggableRelativeLayout(context);
        this.draggableRelativeLayout = draggableRelativeLayout;
        if (layoutParams != null) {
            draggableRelativeLayout.setLayoutParams(layoutParams);
        }
        this.draggableRelativeLayout.setParams(params);
        this.draggableRelativeLayout.setListener(new DraggableRelativeLayout.DraggableListener() { // from class: com.onesignal.InAppMessageView.3
            @Override // com.onesignal.DraggableRelativeLayout.DraggableListener
            public void onDismiss() {
                if (InAppMessageView.this.messageController != null) {
                    InAppMessageView.this.messageController.onMessageWillDismiss();
                }
                InAppMessageView.this.finishAfterDelay(null);
            }

            @Override // com.onesignal.DraggableRelativeLayout.DraggableListener
            public void onDragStart() {
                InAppMessageView.this.isDragging = true;
            }

            @Override // com.onesignal.DraggableRelativeLayout.DraggableListener
            public void onDragEnd() {
                InAppMessageView.this.isDragging = false;
            }
        });
        if (this.webView.getParent() != null) {
            ((ViewGroup) this.webView.getParent()).removeAllViews();
        }
        CardView cardViewCreateCardView = createCardView(context);
        cardViewCreateCardView.setTag(IN_APP_MESSAGE_CARD_VIEW_TAG);
        cardViewCreateCardView.addView(this.webView);
        this.draggableRelativeLayout.setPadding(this.marginPxSizeLeft, this.marginPxSizeTop, this.marginPxSizeRight, this.marginPxSizeBottom);
        this.draggableRelativeLayout.setClipChildren(false);
        this.draggableRelativeLayout.setClipToPadding(false);
        this.draggableRelativeLayout.addView(cardViewCreateCardView);
    }

    boolean isDragging() {
        return this.isDragging;
    }

    private CardView createCardView(Context context) {
        CardView cardView = new CardView(context);
        RelativeLayout.LayoutParams layoutParams = new RelativeLayout.LayoutParams(-1, this.displayLocation == WebViewManager.Position.FULL_SCREEN ? -1 : -2);
        layoutParams.addRule(13);
        cardView.setLayoutParams(layoutParams);
        cardView.setCardElevation(OSViewUtils.dpToPx(5));
        cardView.setRadius(OSViewUtils.dpToPx(8));
        cardView.setClipChildren(false);
        cardView.setClipToPadding(false);
        cardView.setPreventCornerOverlap(false);
        cardView.setCardBackgroundColor(0);
        return cardView;
    }
    public void startDismissTimerIfNeeded() {
        if (this.displayDuration > AudioStats.AUDIO_AMPLITUDE_NONE && this.scheduleDismissRunnable == null) {
            Runnable runnable = new Runnable() { // from class: com.onesignal.InAppMessageView.4
                @Override // java.lang.Runnable
                public void run() {
                    if (InAppMessageView.this.messageController != null) {
                        InAppMessageView.this.messageController.onMessageWillDismiss();
                    }
                    if (InAppMessageView.this.currentActivity == null) {
                        InAppMessageView.this.shouldDismissWhenActive = true;
                    } else {
                        InAppMessageView.this.dismissAndAwaitNextMessage(null);
                        InAppMessageView.this.scheduleDismissRunnable = null;
                    }
                }
            };
            this.scheduleDismissRunnable = runnable;
            this.handler.postDelayed(runnable, ((long) this.displayDuration) * 1000);
        }
    }
    public void delayShowUntilAvailable(final Activity activity) {
        if (OSViewUtils.isActivityFullyReady(activity) && this.parentRelativeLayout == null) {
            showInAppMessageView(activity);
        } else {
            new Handler().postDelayed(new Runnable() { // from class: com.onesignal.InAppMessageView.5
                @Override // java.lang.Runnable
                public void run() {
                    InAppMessageView.this.delayShowUntilAvailable(activity);
                }
            }, 200L);
        }
    }

    void dismissAndAwaitNextMessage(WebViewManager.OneSignalGenericCallback oneSignalGenericCallback) {
        DraggableRelativeLayout draggableRelativeLayout = this.draggableRelativeLayout;
        if (draggableRelativeLayout == null) {
            OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "No host presenter to trigger dismiss animation, counting as dismissed already", new Throwable());
            dereferenceViews();
            if (oneSignalGenericCallback != null) {
                oneSignalGenericCallback.onComplete();
                return;
            }
            return;
        }
        draggableRelativeLayout.dismiss();
        finishAfterDelay(oneSignalGenericCallback);
    }
    public void finishAfterDelay(final WebViewManager.OneSignalGenericCallback oneSignalGenericCallback) {
        OSUtils.runOnMainThreadDelayed(new Runnable() { // from class: com.onesignal.InAppMessageView.6
            @Override // java.lang.Runnable
            public void run() {
                if (!InAppMessageView.this.hasBackground || InAppMessageView.this.parentRelativeLayout == null) {
                    InAppMessageView.this.cleanupViewsAfterDismiss();
                    WebViewManager.OneSignalGenericCallback oneSignalGenericCallback2 = oneSignalGenericCallback;
                    if (oneSignalGenericCallback2 != null) {
                        oneSignalGenericCallback2.onComplete();
                        return;
                    }
                    return;
                }
                InAppMessageView inAppMessageView = InAppMessageView.this;
                inAppMessageView.animateAndDismissLayout(inAppMessageView.parentRelativeLayout, oneSignalGenericCallback);
            }
        }, 600);
    }
    public void cleanupViewsAfterDismiss() {
        removeAllViews();
        InAppMessageViewListener inAppMessageViewListener = this.messageController;
        if (inAppMessageViewListener != null) {
            inAppMessageViewListener.onMessageWasDismissed();
        }
    }

    void removeAllViews() {
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "InAppMessageView removing views");
        Runnable runnable = this.scheduleDismissRunnable;
        if (runnable != null) {
            this.handler.removeCallbacks(runnable);
            this.scheduleDismissRunnable = null;
        }
        DraggableRelativeLayout draggableRelativeLayout = this.draggableRelativeLayout;
        if (draggableRelativeLayout != null) {
            draggableRelativeLayout.removeAllViews();
        }
        PopupWindow popupWindow = this.popupWindow;
        if (popupWindow != null) {
            popupWindow.dismiss();
        }
        dereferenceViews();
    }

    private void dereferenceViews() {
        this.parentRelativeLayout = null;
        this.draggableRelativeLayout = null;
        this.webView = null;
    }
    public void animateInAppMessage(WebViewManager.Position position, View view, View view2) {
        CardView cardView = (CardView) view.findViewWithTag(IN_APP_MESSAGE_CARD_VIEW_TAG);
        Animation.AnimationListener animationListenerCreateAnimationListener = createAnimationListener(cardView);
        int i = AnonymousClass9.$SwitchMap$com$onesignal$WebViewManager$Position[position.ordinal()];
        if (i == 1) {
            animateTop(cardView, this.webView.getHeight(), animationListenerCreateAnimationListener);
            return;
        }
        if (i == 2) {
            animateBottom(cardView, this.webView.getHeight(), animationListenerCreateAnimationListener);
        } else if (i == 3 || i == 4) {
            animateCenter(view, view2, animationListenerCreateAnimationListener, null);
        }
    }

    private Animation.AnimationListener createAnimationListener(final CardView cardView) {
        return new Animation.AnimationListener() { // from class: com.onesignal.InAppMessageView.7
            @Override // android.view.animation.Animation.AnimationListener
            public void onAnimationRepeat(Animation animation) {
            }

            @Override // android.view.animation.Animation.AnimationListener
            public void onAnimationStart(Animation animation) {
            }

            @Override // android.view.animation.Animation.AnimationListener
            public void onAnimationEnd(Animation animation) {
                if (InAppMessageView.this.messageController != null) {
                    InAppMessageView.this.messageController.onMessageWasShown();
                }
            }
        };
    }

    private void animateTop(View view, int i, Animation.AnimationListener animationListener) {
        OneSignalAnimate.animateViewByTranslation(view, (-i) - this.marginPxSizeTop, 0.0f, 1000, new OneSignalBounceInterpolator(0.1d, 8.0d), animationListener).start();
    }

    private void animateBottom(View view, int i, Animation.AnimationListener animationListener) {
        OneSignalAnimate.animateViewByTranslation(view, i + this.marginPxSizeBottom, 0.0f, 1000, new OneSignalBounceInterpolator(0.1d, 8.0d), animationListener).start();
    }

    private void animateCenter(View view, View view2, Animation.AnimationListener animationListener, Animator.AnimatorListener animatorListener) {
        Animation animationAnimateViewSmallToLarge = OneSignalAnimate.animateViewSmallToLarge(view, 1000, new OneSignalBounceInterpolator(0.1d, 8.0d), animationListener);
        ValueAnimator valueAnimatorAnimateBackgroundColor = animateBackgroundColor(view2, 400, ACTIVITY_BACKGROUND_COLOR_EMPTY, ACTIVITY_BACKGROUND_COLOR_FULL, animatorListener);
        animationAnimateViewSmallToLarge.start();
        valueAnimatorAnimateBackgroundColor.start();
    }
    public void animateAndDismissLayout(View view, final WebViewManager.OneSignalGenericCallback oneSignalGenericCallback) {
        animateBackgroundColor(view, 400, ACTIVITY_BACKGROUND_COLOR_FULL, ACTIVITY_BACKGROUND_COLOR_EMPTY, new AnimatorListenerAdapter() { // from class: com.onesignal.InAppMessageView.8
            @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
            public void onAnimationEnd(Animator animator) {
                InAppMessageView.this.cleanupViewsAfterDismiss();
                WebViewManager.OneSignalGenericCallback oneSignalGenericCallback2 = oneSignalGenericCallback;
                if (oneSignalGenericCallback2 != null) {
                    oneSignalGenericCallback2.onComplete();
                }
            }
        }).start();
    }

    private ValueAnimator animateBackgroundColor(View view, int i, int i2, int i3, Animator.AnimatorListener animatorListener) {
        return OneSignalAnimate.animateViewColor(view, i, i2, i3, animatorListener);
    }

    public String toString() {
        return "InAppMessageView{currentActivity=" + this.currentActivity + ", pageWidth=" + this.pageWidth + ", pageHeight=" + this.pageHeight + ", displayDuration=" + this.displayDuration + ", hasBackground=" + this.hasBackground + ", shouldDismissWhenActive=" + this.shouldDismissWhenActive + ", isDragging=" + this.isDragging + ", disableDragDismiss=" + this.disableDragDismiss + ", displayLocation=" + this.displayLocation + ", webView=" + this.webView + '}';
    }
}

