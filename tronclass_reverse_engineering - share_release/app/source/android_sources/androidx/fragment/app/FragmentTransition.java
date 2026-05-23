package androidx.fragment.app;

import android.content.Context;
import android.graphics.Rect;
import android.util.SparseArray;
import android.view.View;
import android.view.ViewGroup;
import androidx.collection.ArrayMap;
import androidx.core.app.SharedElementCallback;
import androidx.core.os.CancellationSignal;
import androidx.core.view.OneShotPreDrawListener;
import androidx.core.view.ViewCompat;
import androidx.fragment.app.FragmentTransaction;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
class FragmentTransition {
    private static final int[] INVERSE_OPS = {0, 3, 0, 1, 5, 4, 7, 6, 9, 8, 10};
    static final FragmentTransitionImpl PLATFORM_IMPL = new FragmentTransitionCompat21();
    static final FragmentTransitionImpl SUPPORT_IMPL = resolveSupportImpl();

    interface Callback {
        void onComplete(Fragment fragment, CancellationSignal cancellationSignal);

        void onStart(Fragment fragment, CancellationSignal cancellationSignal);
    }

    private static FragmentTransitionImpl resolveSupportImpl() {
        try {
            return (FragmentTransitionImpl) Class.forName("androidx.transition.FragmentTransitionSupport").getDeclaredConstructor(new Class[0]).newInstance(new Object[0]);
        } catch (Exception unused) {
            return null;
        }
    }

    static void startTransitions(Context context, FragmentContainer fragmentContainer, ArrayList<BackStackRecord> arrayList, ArrayList<Boolean> arrayList2, int i, int i2, boolean z, Callback callback) {
        ViewGroup viewGroup;
        SparseArray sparseArray = new SparseArray();
        for (int i3 = i; i3 < i2; i3++) {
            BackStackRecord backStackRecord = arrayList.get(i3);
            if (arrayList2.get(i3).booleanValue()) {
                calculatePopFragments(backStackRecord, sparseArray, z);
            } else {
                calculateFragments(backStackRecord, sparseArray, z);
            }
        }
        if (sparseArray.size() != 0) {
            View view = new View(context);
            int size = sparseArray.size();
            for (int i4 = 0; i4 < size; i4++) {
                int iKeyAt = sparseArray.keyAt(i4);
                ArrayMap<String, String> arrayMapCalculateNameOverrides = calculateNameOverrides(iKeyAt, arrayList, arrayList2, i, i2);
                FragmentContainerTransition fragmentContainerTransition = (FragmentContainerTransition) sparseArray.valueAt(i4);
                if (fragmentContainer.onHasView() && (viewGroup = (ViewGroup) fragmentContainer.onFindViewById(iKeyAt)) != null) {
                    if (z) {
                        configureTransitionsReordered(viewGroup, fragmentContainerTransition, view, arrayMapCalculateNameOverrides, callback);
                    } else {
                        configureTransitionsOrdered(viewGroup, fragmentContainerTransition, view, arrayMapCalculateNameOverrides, callback);
                    }
                }
            }
        }
    }

    private static ArrayMap<String, String> calculateNameOverrides(int i, ArrayList<BackStackRecord> arrayList, ArrayList<Boolean> arrayList2, int i2, int i3) {
        ArrayList<String> arrayList3;
        ArrayList<String> arrayList4;
        ArrayMap<String, String> arrayMap = new ArrayMap<>();
        for (int i4 = i3 - 1; i4 >= i2; i4--) {
            BackStackRecord backStackRecord = arrayList.get(i4);
            if (backStackRecord.interactsWith(i)) {
                boolean zBooleanValue = arrayList2.get(i4).booleanValue();
                if (backStackRecord.mSharedElementSourceNames != null) {
                    int size = backStackRecord.mSharedElementSourceNames.size();
                    if (zBooleanValue) {
                        arrayList3 = backStackRecord.mSharedElementSourceNames;
                        arrayList4 = backStackRecord.mSharedElementTargetNames;
                    } else {
                        ArrayList<String> arrayList5 = backStackRecord.mSharedElementSourceNames;
                        arrayList3 = backStackRecord.mSharedElementTargetNames;
                        arrayList4 = arrayList5;
                    }
                    for (int i5 = 0; i5 < size; i5++) {
                        String str = arrayList4.get(i5);
                        String str2 = arrayList3.get(i5);
                        String strRemove = arrayMap.remove(str2);
                        if (strRemove != null) {
                            arrayMap.put(str, strRemove);
                        } else {
                            arrayMap.put(str, str2);
                        }
                    }
                }
            }
        }
        return arrayMap;
    }

    private static void configureTransitionsReordered(ViewGroup viewGroup, FragmentContainerTransition fragmentContainerTransition, View view, ArrayMap<String, String> arrayMap, final Callback callback) {
        Object obj;
        Fragment fragment = fragmentContainerTransition.lastIn;
        final Fragment fragment2 = fragmentContainerTransition.firstOut;
        FragmentTransitionImpl fragmentTransitionImplChooseImpl = chooseImpl(fragment2, fragment);
        if (fragmentTransitionImplChooseImpl == null) {
            return;
        }
        boolean z = fragmentContainerTransition.lastInIsPop;
        boolean z2 = fragmentContainerTransition.firstOutIsPop;
        ArrayList<View> arrayList = new ArrayList<>();
        ArrayList<View> arrayList2 = new ArrayList<>();
        Object enterTransition = getEnterTransition(fragmentTransitionImplChooseImpl, fragment, z);
        Object exitTransition = getExitTransition(fragmentTransitionImplChooseImpl, fragment2, z2);
        Object objConfigureSharedElementsReordered = configureSharedElementsReordered(fragmentTransitionImplChooseImpl, viewGroup, view, arrayMap, fragmentContainerTransition, arrayList2, arrayList, enterTransition, exitTransition);
        if (enterTransition == null && objConfigureSharedElementsReordered == null) {
            obj = exitTransition;
            if (obj == null) {
                return;
            }
        } else {
            obj = exitTransition;
        }
        ArrayList<View> arrayListConfigureEnteringExitingViews = configureEnteringExitingViews(fragmentTransitionImplChooseImpl, obj, fragment2, arrayList2, view);
        ArrayList<View> arrayListConfigureEnteringExitingViews2 = configureEnteringExitingViews(fragmentTransitionImplChooseImpl, enterTransition, fragment, arrayList, view);
        setViewVisibility(arrayListConfigureEnteringExitingViews2, 4);
        Object objMergeTransitions = mergeTransitions(fragmentTransitionImplChooseImpl, enterTransition, obj, objConfigureSharedElementsReordered, fragment, z);
        if (fragment2 != null && arrayListConfigureEnteringExitingViews != null && (arrayListConfigureEnteringExitingViews.size() > 0 || arrayList2.size() > 0)) {
            final CancellationSignal cancellationSignal = new CancellationSignal();
            callback.onStart(fragment2, cancellationSignal);
            fragmentTransitionImplChooseImpl.setListenerForTransitionEnd(fragment2, objMergeTransitions, cancellationSignal, new Runnable() { // from class: androidx.fragment.app.FragmentTransition.1
                @Override // java.lang.Runnable
                public void run() {
                    callback.onComplete(fragment2, cancellationSignal);
                }
            });
        }
        if (objMergeTransitions != null) {
            replaceHide(fragmentTransitionImplChooseImpl, obj, fragment2, arrayListConfigureEnteringExitingViews);
            ArrayList<String> arrayListPrepareSetNameOverridesReordered = fragmentTransitionImplChooseImpl.prepareSetNameOverridesReordered(arrayList);
            fragmentTransitionImplChooseImpl.scheduleRemoveTargets(objMergeTransitions, enterTransition, arrayListConfigureEnteringExitingViews2, obj, arrayListConfigureEnteringExitingViews, objConfigureSharedElementsReordered, arrayList);
            fragmentTransitionImplChooseImpl.beginDelayedTransition(viewGroup, objMergeTransitions);
            fragmentTransitionImplChooseImpl.setNameOverridesReordered(viewGroup, arrayList2, arrayList, arrayListPrepareSetNameOverridesReordered, arrayMap);
            setViewVisibility(arrayListConfigureEnteringExitingViews2, 0);
            fragmentTransitionImplChooseImpl.swapSharedElementTargets(objConfigureSharedElementsReordered, arrayList2, arrayList);
        }
    }

    private static void replaceHide(FragmentTransitionImpl fragmentTransitionImpl, Object obj, Fragment fragment, final ArrayList<View> arrayList) {
        if (fragment != null && obj != null && fragment.mAdded && fragment.mHidden && fragment.mHiddenChanged) {
            fragment.setHideReplaced(true);
            fragmentTransitionImpl.scheduleHideFragmentView(obj, fragment.getView(), arrayList);
            OneShotPreDrawListener.add(fragment.mContainer, new Runnable() { // from class: androidx.fragment.app.FragmentTransition.2
                @Override // java.lang.Runnable
                public void run() {
                    FragmentTransition.setViewVisibility(arrayList, 4);
                }
            });
        }
    }

    private static void configureTransitionsOrdered(ViewGroup viewGroup, FragmentContainerTransition fragmentContainerTransition, View view, ArrayMap<String, String> arrayMap, final Callback callback) {
        Object obj;
        Fragment fragment = fragmentContainerTransition.lastIn;
        final Fragment fragment2 = fragmentContainerTransition.firstOut;
        FragmentTransitionImpl fragmentTransitionImplChooseImpl = chooseImpl(fragment2, fragment);
        if (fragmentTransitionImplChooseImpl == null) {
            return;
        }
        boolean z = fragmentContainerTransition.lastInIsPop;
        boolean z2 = fragmentContainerTransition.firstOutIsPop;
        Object enterTransition = getEnterTransition(fragmentTransitionImplChooseImpl, fragment, z);
        Object exitTransition = getExitTransition(fragmentTransitionImplChooseImpl, fragment2, z2);
        ArrayList arrayList = new ArrayList();
        ArrayList<View> arrayList2 = new ArrayList<>();
        Object objConfigureSharedElementsOrdered = configureSharedElementsOrdered(fragmentTransitionImplChooseImpl, viewGroup, view, arrayMap, fragmentContainerTransition, arrayList, arrayList2, enterTransition, exitTransition);
        if (enterTransition == null && objConfigureSharedElementsOrdered == null) {
            obj = exitTransition;
            if (obj == null) {
                return;
            }
        } else {
            obj = exitTransition;
        }
        ArrayList<View> arrayListConfigureEnteringExitingViews = configureEnteringExitingViews(fragmentTransitionImplChooseImpl, obj, fragment2, arrayList, view);
        if (arrayListConfigureEnteringExitingViews == null || arrayListConfigureEnteringExitingViews.isEmpty()) {
            obj = null;
        }
        Object obj2 = obj;
        fragmentTransitionImplChooseImpl.addTarget(enterTransition, view);
        Object objMergeTransitions = mergeTransitions(fragmentTransitionImplChooseImpl, enterTransition, obj2, objConfigureSharedElementsOrdered, fragment, fragmentContainerTransition.lastInIsPop);
        if (fragment2 != null && arrayListConfigureEnteringExitingViews != null && (arrayListConfigureEnteringExitingViews.size() > 0 || arrayList.size() > 0)) {
            final CancellationSignal cancellationSignal = new CancellationSignal();
            callback.onStart(fragment2, cancellationSignal);
            fragmentTransitionImplChooseImpl.setListenerForTransitionEnd(fragment2, objMergeTransitions, cancellationSignal, new Runnable() { // from class: androidx.fragment.app.FragmentTransition.3
                @Override // java.lang.Runnable
                public void run() {
                    callback.onComplete(fragment2, cancellationSignal);
                }
            });
        }
        if (objMergeTransitions != null) {
            ArrayList<View> arrayList3 = new ArrayList<>();
            fragmentTransitionImplChooseImpl.scheduleRemoveTargets(objMergeTransitions, enterTransition, arrayList3, obj2, arrayListConfigureEnteringExitingViews, objConfigureSharedElementsOrdered, arrayList2);
            scheduleTargetChange(fragmentTransitionImplChooseImpl, viewGroup, fragment, view, arrayList2, enterTransition, arrayList3, obj2, arrayListConfigureEnteringExitingViews);
            fragmentTransitionImplChooseImpl.setNameOverridesOrdered(viewGroup, arrayList2, arrayMap);
            fragmentTransitionImplChooseImpl.beginDelayedTransition(viewGroup, objMergeTransitions);
            fragmentTransitionImplChooseImpl.scheduleNameReset(viewGroup, arrayList2, arrayMap);
        }
    }

    private static void scheduleTargetChange(final FragmentTransitionImpl fragmentTransitionImpl, ViewGroup viewGroup, final Fragment fragment, final View view, final ArrayList<View> arrayList, final Object obj, final ArrayList<View> arrayList2, final Object obj2, final ArrayList<View> arrayList3) {
        OneShotPreDrawListener.add(viewGroup, new Runnable() { // from class: androidx.fragment.app.FragmentTransition.4
            @Override // java.lang.Runnable
            public void run() {
                Object obj3 = obj;
                if (obj3 != null) {
                    fragmentTransitionImpl.removeTarget(obj3, view);
                    arrayList2.addAll(FragmentTransition.configureEnteringExitingViews(fragmentTransitionImpl, obj, fragment, arrayList, view));
                }
                if (arrayList3 != null) {
                    if (obj2 != null) {
                        ArrayList<View> arrayList4 = new ArrayList<>();
                        arrayList4.add(view);
                        fragmentTransitionImpl.replaceTargets(obj2, arrayList3, arrayList4);
                    }
                    arrayList3.clear();
                    arrayList3.add(view);
                }
            }
        });
    }

    private static FragmentTransitionImpl chooseImpl(Fragment fragment, Fragment fragment2) {
        ArrayList arrayList = new ArrayList();
        if (fragment != null) {
            Object exitTransition = fragment.getExitTransition();
            if (exitTransition != null) {
                arrayList.add(exitTransition);
            }
            Object returnTransition = fragment.getReturnTransition();
            if (returnTransition != null) {
                arrayList.add(returnTransition);
            }
            Object sharedElementReturnTransition = fragment.getSharedElementReturnTransition();
            if (sharedElementReturnTransition != null) {
                arrayList.add(sharedElementReturnTransition);
            }
        }
        if (fragment2 != null) {
            Object enterTransition = fragment2.getEnterTransition();
            if (enterTransition != null) {
                arrayList.add(enterTransition);
            }
            Object reenterTransition = fragment2.getReenterTransition();
            if (reenterTransition != null) {
                arrayList.add(reenterTransition);
            }
            Object sharedElementEnterTransition = fragment2.getSharedElementEnterTransition();
            if (sharedElementEnterTransition != null) {
                arrayList.add(sharedElementEnterTransition);
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        FragmentTransitionImpl fragmentTransitionImpl = PLATFORM_IMPL;
        if (fragmentTransitionImpl != null && canHandleAll(fragmentTransitionImpl, arrayList)) {
            return fragmentTransitionImpl;
        }
        FragmentTransitionImpl fragmentTransitionImpl2 = SUPPORT_IMPL;
        if (fragmentTransitionImpl2 != null && canHandleAll(fragmentTransitionImpl2, arrayList)) {
            return fragmentTransitionImpl2;
        }
        if (fragmentTransitionImpl == null && fragmentTransitionImpl2 == null) {
            return null;
        }
        throw new IllegalArgumentException("Invalid Transition types");
    }

    private static boolean canHandleAll(FragmentTransitionImpl fragmentTransitionImpl, List<Object> list) {
        int size = list.size();
        for (int i = 0; i < size; i++) {
            if (!fragmentTransitionImpl.canHandle(list.get(i))) {
                return false;
            }
        }
        return true;
    }

    private static Object getSharedElementTransition(FragmentTransitionImpl fragmentTransitionImpl, Fragment fragment, Fragment fragment2, boolean z) {
        Object sharedElementEnterTransition;
        if (fragment == null || fragment2 == null) {
            return null;
        }
        if (z) {
            sharedElementEnterTransition = fragment2.getSharedElementReturnTransition();
        } else {
            sharedElementEnterTransition = fragment.getSharedElementEnterTransition();
        }
        return fragmentTransitionImpl.wrapTransitionInSet(fragmentTransitionImpl.cloneTransition(sharedElementEnterTransition));
    }

    private static Object getEnterTransition(FragmentTransitionImpl fragmentTransitionImpl, Fragment fragment, boolean z) {
        Object enterTransition;
        if (fragment == null) {
            return null;
        }
        if (z) {
            enterTransition = fragment.getReenterTransition();
        } else {
            enterTransition = fragment.getEnterTransition();
        }
        return fragmentTransitionImpl.cloneTransition(enterTransition);
    }

    private static Object getExitTransition(FragmentTransitionImpl fragmentTransitionImpl, Fragment fragment, boolean z) {
        Object exitTransition;
        if (fragment == null) {
            return null;
        }
        if (z) {
            exitTransition = fragment.getReturnTransition();
        } else {
            exitTransition = fragment.getExitTransition();
        }
        return fragmentTransitionImpl.cloneTransition(exitTransition);
    }

    private static Object configureSharedElementsReordered(final FragmentTransitionImpl fragmentTransitionImpl, ViewGroup viewGroup, View view, ArrayMap<String, String> arrayMap, FragmentContainerTransition fragmentContainerTransition, ArrayList<View> arrayList, ArrayList<View> arrayList2, Object obj, Object obj2) {
        Object obj3;
        final View view2;
        final Rect rect;
        final Fragment fragment = fragmentContainerTransition.lastIn;
        final Fragment fragment2 = fragmentContainerTransition.firstOut;
        if (fragment != null) {
            fragment.requireView().setVisibility(0);
        }
        if (fragment == null || fragment2 == null) {
            return null;
        }
        final boolean z = fragmentContainerTransition.lastInIsPop;
        Object sharedElementTransition = arrayMap.isEmpty() ? null : getSharedElementTransition(fragmentTransitionImpl, fragment, fragment2, z);
        ArrayMap<String, View> arrayMapCaptureOutSharedElements = captureOutSharedElements(fragmentTransitionImpl, arrayMap, sharedElementTransition, fragmentContainerTransition);
        final ArrayMap<String, View> arrayMapCaptureInSharedElements = captureInSharedElements(fragmentTransitionImpl, arrayMap, sharedElementTransition, fragmentContainerTransition);
        if (arrayMap.isEmpty()) {
            if (arrayMapCaptureOutSharedElements != null) {
                arrayMapCaptureOutSharedElements.clear();
            }
            if (arrayMapCaptureInSharedElements != null) {
                arrayMapCaptureInSharedElements.clear();
            }
            obj3 = null;
        } else {
            addSharedElementsWithMatchingNames(arrayList, arrayMapCaptureOutSharedElements, arrayMap.keySet());
            addSharedElementsWithMatchingNames(arrayList2, arrayMapCaptureInSharedElements, arrayMap.values());
            obj3 = sharedElementTransition;
        }
        if (obj == null && obj2 == null && obj3 == null) {
            return null;
        }
        callSharedElementStartEnd(fragment, fragment2, z, arrayMapCaptureOutSharedElements, true);
        if (obj3 != null) {
            arrayList2.add(view);
            fragmentTransitionImpl.setSharedElementTargets(obj3, view, arrayList);
            setOutEpicenter(fragmentTransitionImpl, obj3, obj2, arrayMapCaptureOutSharedElements, fragmentContainerTransition.firstOutIsPop, fragmentContainerTransition.firstOutTransaction);
            Rect rect2 = new Rect();
            View inEpicenterView = getInEpicenterView(arrayMapCaptureInSharedElements, fragmentContainerTransition, obj, z);
            if (inEpicenterView != null) {
                fragmentTransitionImpl.setEpicenter(obj, rect2);
            }
            rect = rect2;
            view2 = inEpicenterView;
        } else {
            view2 = null;
            rect = null;
        }
        OneShotPreDrawListener.add(viewGroup, new Runnable() { // from class: androidx.fragment.app.FragmentTransition.5
            @Override // java.lang.Runnable
            public void run() {
                FragmentTransition.callSharedElementStartEnd(fragment, fragment2, z, arrayMapCaptureInSharedElements, false);
                View view3 = view2;
                if (view3 != null) {
                    fragmentTransitionImpl.getBoundsOnScreen(view3, rect);
                }
            }
        });
        return obj3;
    }

    private static void addSharedElementsWithMatchingNames(ArrayList<View> arrayList, ArrayMap<String, View> arrayMap, Collection<String> collection) {
        for (int size = arrayMap.size() - 1; size >= 0; size--) {
            View viewValueAt = arrayMap.valueAt(size);
            if (collection.contains(ViewCompat.getTransitionName(viewValueAt))) {
                arrayList.add(viewValueAt);
            }
        }
    }

    private static Object configureSharedElementsOrdered(final FragmentTransitionImpl fragmentTransitionImpl, ViewGroup viewGroup, final View view, final ArrayMap<String, String> arrayMap, final FragmentContainerTransition fragmentContainerTransition, final ArrayList<View> arrayList, final ArrayList<View> arrayList2, final Object obj, Object obj2) {
        Object sharedElementTransition;
        ArrayMap<String, String> arrayMap2;
        Object obj3;
        Rect rect;
        final Fragment fragment = fragmentContainerTransition.lastIn;
        final Fragment fragment2 = fragmentContainerTransition.firstOut;
        if (fragment == null || fragment2 == null) {
            return null;
        }
        final boolean z = fragmentContainerTransition.lastInIsPop;
        if (arrayMap.isEmpty()) {
            arrayMap2 = arrayMap;
            sharedElementTransition = null;
        } else {
            sharedElementTransition = getSharedElementTransition(fragmentTransitionImpl, fragment, fragment2, z);
            arrayMap2 = arrayMap;
        }
        ArrayMap<String, View> arrayMapCaptureOutSharedElements = captureOutSharedElements(fragmentTransitionImpl, arrayMap2, sharedElementTransition, fragmentContainerTransition);
        if (arrayMap.isEmpty()) {
            obj3 = null;
        } else {
            arrayList.addAll(arrayMapCaptureOutSharedElements.values());
            obj3 = sharedElementTransition;
        }
        if (obj == null && obj2 == null && obj3 == null) {
            return null;
        }
        callSharedElementStartEnd(fragment, fragment2, z, arrayMapCaptureOutSharedElements, true);
        if (obj3 != null) {
            rect = new Rect();
            fragmentTransitionImpl.setSharedElementTargets(obj3, view, arrayList);
            setOutEpicenter(fragmentTransitionImpl, obj3, obj2, arrayMapCaptureOutSharedElements, fragmentContainerTransition.firstOutIsPop, fragmentContainerTransition.firstOutTransaction);
            if (obj != null) {
                fragmentTransitionImpl.setEpicenter(obj, rect);
            }
        } else {
            rect = null;
        }
        final Object obj4 = obj3;
        final Rect rect2 = rect;
        OneShotPreDrawListener.add(viewGroup, new Runnable() { // from class: androidx.fragment.app.FragmentTransition.6
            @Override // java.lang.Runnable
            public void run() {
                ArrayMap<String, View> arrayMapCaptureInSharedElements = FragmentTransition.captureInSharedElements(fragmentTransitionImpl, arrayMap, obj4, fragmentContainerTransition);
                if (arrayMapCaptureInSharedElements != null) {
                    arrayList2.addAll(arrayMapCaptureInSharedElements.values());
                    arrayList2.add(view);
                }
                FragmentTransition.callSharedElementStartEnd(fragment, fragment2, z, arrayMapCaptureInSharedElements, false);
                Object obj5 = obj4;
                if (obj5 != null) {
                    fragmentTransitionImpl.swapSharedElementTargets(obj5, arrayList, arrayList2);
                    View inEpicenterView = FragmentTransition.getInEpicenterView(arrayMapCaptureInSharedElements, fragmentContainerTransition, obj, z);
                    if (inEpicenterView != null) {
                        fragmentTransitionImpl.getBoundsOnScreen(inEpicenterView, rect2);
                    }
                }
            }
        });
        return obj3;
    }

    private static ArrayMap<String, View> captureOutSharedElements(FragmentTransitionImpl fragmentTransitionImpl, ArrayMap<String, String> arrayMap, Object obj, FragmentContainerTransition fragmentContainerTransition) {
        SharedElementCallback exitTransitionCallback;
        ArrayList<String> arrayList;
        if (arrayMap.isEmpty() || obj == null) {
            arrayMap.clear();
            return null;
        }
        Fragment fragment = fragmentContainerTransition.firstOut;
        ArrayMap<String, View> arrayMap2 = new ArrayMap<>();
        fragmentTransitionImpl.findNamedViews(arrayMap2, fragment.requireView());
        BackStackRecord backStackRecord = fragmentContainerTransition.firstOutTransaction;
        if (fragmentContainerTransition.firstOutIsPop) {
            exitTransitionCallback = fragment.getEnterTransitionCallback();
            arrayList = backStackRecord.mSharedElementTargetNames;
        } else {
            exitTransitionCallback = fragment.getExitTransitionCallback();
            arrayList = backStackRecord.mSharedElementSourceNames;
        }
        if (arrayList != null) {
            arrayMap2.retainAll(arrayList);
        }
        if (exitTransitionCallback != null) {
            exitTransitionCallback.onMapSharedElements(arrayList, arrayMap2);
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                String str = arrayList.get(size);
                View view = arrayMap2.get(str);
                if (view == null) {
                    arrayMap.remove(str);
                } else if (!str.equals(ViewCompat.getTransitionName(view))) {
                    arrayMap.put(ViewCompat.getTransitionName(view), arrayMap.remove(str));
                }
            }
        } else {
            arrayMap.retainAll(arrayMap2.keySet());
        }
        return arrayMap2;
    }

    static ArrayMap<String, View> captureInSharedElements(FragmentTransitionImpl fragmentTransitionImpl, ArrayMap<String, String> arrayMap, Object obj, FragmentContainerTransition fragmentContainerTransition) {
        SharedElementCallback enterTransitionCallback;
        ArrayList<String> arrayList;
        String strFindKeyForValue;
        Fragment fragment = fragmentContainerTransition.lastIn;
        View view = fragment.getView();
        if (arrayMap.isEmpty() || obj == null || view == null) {
            arrayMap.clear();
            return null;
        }
        ArrayMap<String, View> arrayMap2 = new ArrayMap<>();
        fragmentTransitionImpl.findNamedViews(arrayMap2, view);
        BackStackRecord backStackRecord = fragmentContainerTransition.lastInTransaction;
        if (fragmentContainerTransition.lastInIsPop) {
            enterTransitionCallback = fragment.getExitTransitionCallback();
            arrayList = backStackRecord.mSharedElementSourceNames;
        } else {
            enterTransitionCallback = fragment.getEnterTransitionCallback();
            arrayList = backStackRecord.mSharedElementTargetNames;
        }
        if (arrayList != null) {
            arrayMap2.retainAll(arrayList);
            arrayMap2.retainAll(arrayMap.values());
        }
        if (enterTransitionCallback != null) {
            enterTransitionCallback.onMapSharedElements(arrayList, arrayMap2);
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                String str = arrayList.get(size);
                View view2 = arrayMap2.get(str);
                if (view2 == null) {
                    String strFindKeyForValue2 = findKeyForValue(arrayMap, str);
                    if (strFindKeyForValue2 != null) {
                        arrayMap.remove(strFindKeyForValue2);
                    }
                } else if (!str.equals(ViewCompat.getTransitionName(view2)) && (strFindKeyForValue = findKeyForValue(arrayMap, str)) != null) {
                    arrayMap.put(strFindKeyForValue, ViewCompat.getTransitionName(view2));
                }
            }
        } else {
            retainValues(arrayMap, arrayMap2);
        }
        return arrayMap2;
    }

    static String findKeyForValue(ArrayMap<String, String> arrayMap, String str) {
        int size = arrayMap.size();
        for (int i = 0; i < size; i++) {
            if (str.equals(arrayMap.valueAt(i))) {
                return arrayMap.keyAt(i);
            }
        }
        return null;
    }

    static View getInEpicenterView(ArrayMap<String, View> arrayMap, FragmentContainerTransition fragmentContainerTransition, Object obj, boolean z) {
        String str;
        BackStackRecord backStackRecord = fragmentContainerTransition.lastInTransaction;
        if (obj == null || arrayMap == null || backStackRecord.mSharedElementSourceNames == null || backStackRecord.mSharedElementSourceNames.isEmpty()) {
            return null;
        }
        if (z) {
            str = backStackRecord.mSharedElementSourceNames.get(0);
        } else {
            str = backStackRecord.mSharedElementTargetNames.get(0);
        }
        return arrayMap.get(str);
    }

    private static void setOutEpicenter(FragmentTransitionImpl fragmentTransitionImpl, Object obj, Object obj2, ArrayMap<String, View> arrayMap, boolean z, BackStackRecord backStackRecord) {
        String str;
        if (backStackRecord.mSharedElementSourceNames == null || backStackRecord.mSharedElementSourceNames.isEmpty()) {
            return;
        }
        if (z) {
            str = backStackRecord.mSharedElementTargetNames.get(0);
        } else {
            str = backStackRecord.mSharedElementSourceNames.get(0);
        }
        View view = arrayMap.get(str);
        fragmentTransitionImpl.setEpicenter(obj, view);
        if (obj2 != null) {
            fragmentTransitionImpl.setEpicenter(obj2, view);
        }
    }

    static void retainValues(ArrayMap<String, String> arrayMap, ArrayMap<String, View> arrayMap2) {
        for (int size = arrayMap.size() - 1; size >= 0; size--) {
            if (!arrayMap2.containsKey(arrayMap.valueAt(size))) {
                arrayMap.removeAt(size);
            }
        }
    }

    static void callSharedElementStartEnd(Fragment fragment, Fragment fragment2, boolean z, ArrayMap<String, View> arrayMap, boolean z2) {
        SharedElementCallback enterTransitionCallback;
        if (z) {
            enterTransitionCallback = fragment2.getEnterTransitionCallback();
        } else {
            enterTransitionCallback = fragment.getEnterTransitionCallback();
        }
        if (enterTransitionCallback != null) {
            ArrayList arrayList = new ArrayList();
            ArrayList arrayList2 = new ArrayList();
            int size = arrayMap == null ? 0 : arrayMap.size();
            for (int i = 0; i < size; i++) {
                arrayList2.add(arrayMap.keyAt(i));
                arrayList.add(arrayMap.valueAt(i));
            }
            if (z2) {
                enterTransitionCallback.onSharedElementStart(arrayList2, arrayList, null);
            } else {
                enterTransitionCallback.onSharedElementEnd(arrayList2, arrayList, null);
            }
        }
    }

    static ArrayList<View> configureEnteringExitingViews(FragmentTransitionImpl fragmentTransitionImpl, Object obj, Fragment fragment, ArrayList<View> arrayList, View view) {
        if (obj == null) {
            return null;
        }
        ArrayList<View> arrayList2 = new ArrayList<>();
        View view2 = fragment.getView();
        if (view2 != null) {
            fragmentTransitionImpl.captureTransitioningViews(arrayList2, view2);
        }
        if (arrayList != null) {
            arrayList2.removeAll(arrayList);
        }
        if (arrayList2.isEmpty()) {
            return arrayList2;
        }
        arrayList2.add(view);
        fragmentTransitionImpl.addTargets(obj, arrayList2);
        return arrayList2;
    }

    static void setViewVisibility(ArrayList<View> arrayList, int i) {
        if (arrayList == null) {
            return;
        }
        for (int size = arrayList.size() - 1; size >= 0; size--) {
            arrayList.get(size).setVisibility(i);
        }
    }

    private static Object mergeTransitions(FragmentTransitionImpl fragmentTransitionImpl, Object obj, Object obj2, Object obj3, Fragment fragment, boolean z) {
        boolean allowEnterTransitionOverlap;
        if (obj == null || obj2 == null || fragment == null) {
            allowEnterTransitionOverlap = true;
        } else if (z) {
            allowEnterTransitionOverlap = fragment.getAllowReturnTransitionOverlap();
        } else {
            allowEnterTransitionOverlap = fragment.getAllowEnterTransitionOverlap();
        }
        if (allowEnterTransitionOverlap) {
            return fragmentTransitionImpl.mergeTransitionsTogether(obj2, obj, obj3);
        }
        return fragmentTransitionImpl.mergeTransitionsInSequence(obj2, obj, obj3);
    }

    public static void calculateFragments(BackStackRecord backStackRecord, SparseArray<FragmentContainerTransition> sparseArray, boolean z) {
        int size = backStackRecord.mOps.size();
        for (int i = 0; i < size; i++) {
            addToFirstInLastOut(backStackRecord, backStackRecord.mOps.get(i), sparseArray, false, z);
        }
    }

    public static void calculatePopFragments(BackStackRecord backStackRecord, SparseArray<FragmentContainerTransition> sparseArray, boolean z) {
        if (backStackRecord.mManager.getContainer().onHasView()) {
            for (int size = backStackRecord.mOps.size() - 1; size >= 0; size--) {
                addToFirstInLastOut(backStackRecord, backStackRecord.mOps.get(size), sparseArray, true, z);
            }
        }
    }

    static boolean supportsTransition() {
        return (PLATFORM_IMPL == null && SUPPORT_IMPL == null) ? false : true;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:55:0x0071  */
    /* high-level source view WARN: Removed duplicated region for block: B:56:0x0073  */
    /* high-level source view WARN: Removed duplicated region for block: B:64:0x0084  */
    /* high-level source view WARN: Removed duplicated region for block: B:65:0x0087  */
    /* high-level source view WARN: Removed duplicated region for block: B:69:0x008f  */
    /* high-level source view WARN: Removed duplicated region for block: B:70:0x0091  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private static void addToFirstInLastOut(BackStackRecord backStackRecord, FragmentTransaction.Op op, SparseArray<FragmentContainerTransition> sparseArray, boolean z, boolean z2) {
        int i;
        boolean z3;
        boolean z4;
        boolean z5;
        Fragment fragment = op.mFragment;
        if (fragment == null || (i = fragment.mContainerId) == 0) {
            return;
        }
        int i2 = z ? INVERSE_OPS[op.mCmd] : op.mCmd;
        boolean z6 = false;
        boolean z7 = true;
        if (i2 == 1) {
            if (!z2) {
                z3 = fragment.mIsNewlyAdded;
                z4 = false;
                z6 = z3;
                z5 = false;
            } else {
                z3 = (fragment.mAdded || fragment.mHidden) ? false : true;
                z4 = false;
                z6 = z3;
                z5 = false;
            }
        } else if (i2 == 3) {
            boolean z8 = z2 ? !(!fragment.mAdded || fragment.mHidden) : !(fragment.mAdded || fragment.mView == null || fragment.mView.getVisibility() != 0 || fragment.mPostponedAlpha < 0.0f);
            z4 = z8;
            z5 = true;
            z7 = false;
        } else if (i2 == 4) {
            if (!z2 ? !fragment.mAdded || fragment.mHidden : !fragment.mHiddenChanged || !fragment.mAdded || !fragment.mHidden) {
            }
            z4 = z8;
            z5 = true;
            z7 = false;
        } else if (i2 != 5) {
            if (i2 != 6) {
                if (i2 != 7) {
                    z5 = false;
                    z7 = false;
                    z4 = false;
                }
                if (!z2) {
                }
            }
            if (z2) {
            }
            z4 = z8;
            z5 = true;
            z7 = false;
        } else if (z2) {
            if (!fragment.mHiddenChanged || fragment.mHidden || !fragment.mAdded) {
            }
            z4 = false;
            z6 = z3;
            z5 = false;
        } else {
            z3 = fragment.mHidden;
            z4 = false;
            z6 = z3;
            z5 = false;
        }
        FragmentContainerTransition fragmentContainerTransitionEnsureContainer = sparseArray.get(i);
        if (z6) {
            fragmentContainerTransitionEnsureContainer = ensureContainer(fragmentContainerTransitionEnsureContainer, sparseArray, i);
            fragmentContainerTransitionEnsureContainer.lastIn = fragment;
            fragmentContainerTransitionEnsureContainer.lastInIsPop = z;
            fragmentContainerTransitionEnsureContainer.lastInTransaction = backStackRecord;
        }
        if (!z2 && z7) {
            if (fragmentContainerTransitionEnsureContainer != null && fragmentContainerTransitionEnsureContainer.firstOut == fragment) {
                fragmentContainerTransitionEnsureContainer.firstOut = null;
            }
            if (!backStackRecord.mReorderingAllowed) {
                FragmentManager fragmentManager = backStackRecord.mManager;
                fragmentManager.getFragmentStore().makeActive(fragmentManager.createOrGetFragmentStateManager(fragment));
                fragmentManager.moveToState(fragment);
            }
        }
        if (z4 && (fragmentContainerTransitionEnsureContainer == null || fragmentContainerTransitionEnsureContainer.firstOut == null)) {
            fragmentContainerTransitionEnsureContainer = ensureContainer(fragmentContainerTransitionEnsureContainer, sparseArray, i);
            fragmentContainerTransitionEnsureContainer.firstOut = fragment;
            fragmentContainerTransitionEnsureContainer.firstOutIsPop = z;
            fragmentContainerTransitionEnsureContainer.firstOutTransaction = backStackRecord;
        }
        if (z2 || !z5 || fragmentContainerTransitionEnsureContainer == null || fragmentContainerTransitionEnsureContainer.lastIn != fragment) {
            return;
        }
        fragmentContainerTransitionEnsureContainer.lastIn = null;
    }

    private static FragmentContainerTransition ensureContainer(FragmentContainerTransition fragmentContainerTransition, SparseArray<FragmentContainerTransition> sparseArray, int i) {
        if (fragmentContainerTransition != null) {
            return fragmentContainerTransition;
        }
        FragmentContainerTransition fragmentContainerTransition2 = new FragmentContainerTransition();
        sparseArray.put(i, fragmentContainerTransition2);
        return fragmentContainerTransition2;
    }

    static class FragmentContainerTransition {
        public Fragment firstOut;
        public boolean firstOutIsPop;
        public BackStackRecord firstOutTransaction;
        public Fragment lastIn;
        public boolean lastInIsPop;
        public BackStackRecord lastInTransaction;

        FragmentContainerTransition() {
        }
    }

    private FragmentTransition() {
    }
}

