package androidx.core.view;

import android.view.View;
import android.view.ViewGroup;
import java.util.Iterator;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMutableIterator;
import kotlin.sequences.Sequence;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000L\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010)\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\t\u001a\u0015\u0010\n\u001a\u00020\u000b*\u00020\u00032\u0006\u0010\f\u001a\u00020\u0002H\u0086\n\u001a0\u0010\r\u001a\u00020\u000e*\u00020\u00032!\u0010\u000f\u001a\u001d\u0012\u0013\u0012\u00110\u0002¢\u0006\f\b\u0011\u0012\b\b\u0012\u0012\u0004\b\b(\f\u0012\u0004\u0012\u00020\u000e0\u0010H\u0086\b\u001aE\u0010\u0013\u001a\u00020\u000e*\u00020\u000326\u0010\u000f\u001a2\u0012\u0013\u0012\u00110\u0007¢\u0006\f\b\u0011\u0012\b\b\u0012\u0012\u0004\b\b(\u0015\u0012\u0013\u0012\u00110\u0002¢\u0006\f\b\u0011\u0012\b\b\u0012\u0012\u0004\b\b(\f\u0012\u0004\u0012\u00020\u000e0\u0014H\u0086\b\u001a\u0015\u0010\u0016\u001a\u00020\u0002*\u00020\u00032\u0006\u0010\u0015\u001a\u00020\u0007H\u0086\u0002\u001a\r\u0010\u0017\u001a\u00020\u000b*\u00020\u0003H\u0086\b\u001a\r\u0010\u0018\u001a\u00020\u000b*\u00020\u0003H\u0086\b\u001a\u0013\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00020\u001a*\u00020\u0003H\u0086\u0002\u001a\u0015\u0010\u001b\u001a\u00020\u000e*\u00020\u00032\u0006\u0010\f\u001a\u00020\u0002H\u0086\n\u001a\u0015\u0010\u001c\u001a\u00020\u000e*\u00020\u00032\u0006\u0010\f\u001a\u00020\u0002H\u0086\n\u001a\u0017\u0010\u001d\u001a\u00020\u000e*\u00020\u001e2\b\b\u0001\u0010\u0006\u001a\u00020\u0007H\u0086\b\u001a5\u0010\u001f\u001a\u00020\u000e*\u00020\u001e2\b\b\u0003\u0010 \u001a\u00020\u00072\b\b\u0003\u0010!\u001a\u00020\u00072\b\b\u0003\u0010\"\u001a\u00020\u00072\b\b\u0003\u0010#\u001a\u00020\u0007H\u0086\b\u001a5\u0010$\u001a\u00020\u000e*\u00020\u001e2\b\b\u0003\u0010%\u001a\u00020\u00072\b\b\u0003\u0010!\u001a\u00020\u00072\b\b\u0003\u0010&\u001a\u00020\u00072\b\b\u0003\u0010#\u001a\u00020\u0007H\u0087\b\"\u001b\u0010\u0000\u001a\b\u0012\u0004\u0012\u00020\u00020\u0001*\u00020\u00038F¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005\"\u0016\u0010\u0006\u001a\u00020\u0007*\u00020\u00038Æ\u0002¢\u0006\u0006\u001a\u0004\b\b\u0010\t¨\u0006'"}, d2 = {"children", "Lkotlin/sequences/Sequence;", "Landroid/view/View;", "Landroid/view/ViewGroup;", "getChildren", "(Landroid/view/ViewGroup;)Lkotlin/sequences/Sequence;", "size", "", "getSize", "(Landroid/view/ViewGroup;)I", "contains", "", "view", "forEach", "", "action", "Lkotlin/Function1;", "Lkotlin/ParameterName;", "name", "forEachIndexed", "Lkotlin/Function2;", "index", "get", "isEmpty", "isNotEmpty", "iterator", "", "minusAssign", "plusAssign", "setMargins", "Landroid/view/ViewGroup$MarginLayoutParams;", "updateMargins", "left", "top", "right", "bottom", "updateMarginsRelative", "start", "end", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class ViewGroupKt {
    public static final View get(ViewGroup get, int i) {
        Intrinsics.checkParameterIsNotNull(get, "$this$get");
        View childAt = get.getChildAt(i);
        if (childAt != null) {
            return childAt;
        }
        throw new IndexOutOfBoundsException("Index: " + i + ", Size: " + get.getChildCount());
    }

    public static final boolean contains(ViewGroup contains, View view) {
        Intrinsics.checkParameterIsNotNull(contains, "$this$contains");
        Intrinsics.checkParameterIsNotNull(view, "view");
        return contains.indexOfChild(view) != -1;
    }

    public static final void plusAssign(ViewGroup plusAssign, View view) {
        Intrinsics.checkParameterIsNotNull(plusAssign, "$this$plusAssign");
        Intrinsics.checkParameterIsNotNull(view, "view");
        plusAssign.addView(view);
    }

    public static final void minusAssign(ViewGroup minusAssign, View view) {
        Intrinsics.checkParameterIsNotNull(minusAssign, "$this$minusAssign");
        Intrinsics.checkParameterIsNotNull(view, "view");
        minusAssign.removeView(view);
    }

    public static final int getSize(ViewGroup size) {
        Intrinsics.checkParameterIsNotNull(size, "$this$size");
        return size.getChildCount();
    }

    public static final boolean isEmpty(ViewGroup isEmpty) {
        Intrinsics.checkParameterIsNotNull(isEmpty, "$this$isEmpty");
        return isEmpty.getChildCount() == 0;
    }

    public static final boolean isNotEmpty(ViewGroup isNotEmpty) {
        Intrinsics.checkParameterIsNotNull(isNotEmpty, "$this$isNotEmpty");
        return isNotEmpty.getChildCount() != 0;
    }

    public static final void forEach(ViewGroup forEach, Function1<? super View, Unit> action) {
        Intrinsics.checkParameterIsNotNull(forEach, "$this$forEach");
        Intrinsics.checkParameterIsNotNull(action, "action");
        int childCount = forEach.getChildCount();
        for (int i = 0; i < childCount; i++) {
            View childAt = forEach.getChildAt(i);
            Intrinsics.checkExpressionValueIsNotNull(childAt, "getChildAt(index)");
            action.invoke(childAt);
        }
    }

    public static final void forEachIndexed(ViewGroup forEachIndexed, Function2<? super Integer, ? super View, Unit> action) {
        Intrinsics.checkParameterIsNotNull(forEachIndexed, "$this$forEachIndexed");
        Intrinsics.checkParameterIsNotNull(action, "action");
        int childCount = forEachIndexed.getChildCount();
        for (int i = 0; i < childCount; i++) {
            Integer numValueOf = Integer.valueOf(i);
            View childAt = forEachIndexed.getChildAt(i);
            Intrinsics.checkExpressionValueIsNotNull(childAt, "getChildAt(index)");
            action.invoke(numValueOf, childAt);
        }
    }
    @Metadata(bv = {1, 0, 3}, d1 = {"\u0000#\n\u0000\n\u0002\u0010)\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000*\u0001\u0000\b\n\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001J\t\u0010\u0005\u001a\u00020\u0006H\u0096\u0002J\t\u0010\u0007\u001a\u00020\u0002H\u0096\u0002J\b\u0010\b\u001a\u00020\tH\u0016R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"androidx/core/view/ViewGroupKt$iterator$1", "", "Landroid/view/View;", "index", "", "hasNext", "", "next", "remove", "", "core-ktx_release"}, k = 1, mv = {1, 1, 15})
    public static final class AnonymousClass1 implements Iterator<View>, KMutableIterator {
        final /* synthetic */ ViewGroup $this_iterator;
        private int index;

        AnonymousClass1(ViewGroup viewGroup) {
            this.$this_iterator = viewGroup;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.index < this.$this_iterator.getChildCount();
        }

        /* high-level source view WARN: Can't rename method to resolve collision */
        @Override // java.util.Iterator
        public View next() {
            ViewGroup viewGroup = this.$this_iterator;
            int i = this.index;
            this.index = i + 1;
            View childAt = viewGroup.getChildAt(i);
            if (childAt != null) {
                return childAt;
            }
            throw new IndexOutOfBoundsException();
        }

        @Override // java.util.Iterator
        public void remove() {
            ViewGroup viewGroup = this.$this_iterator;
            int i = this.index - 1;
            this.index = i;
            viewGroup.removeViewAt(i);
        }
    }

    public static final Iterator<View> iterator(ViewGroup iterator) {
        Intrinsics.checkParameterIsNotNull(iterator, "$this$iterator");
        return new AnonymousClass1(iterator);
    }

    public static final Sequence<View> getChildren(final ViewGroup children) {
        Intrinsics.checkParameterIsNotNull(children, "$this$children");
        return new Sequence<View>() { // from class: androidx.core.view.ViewGroupKt$children$1
            @Override // kotlin.sequences.Sequence
            public Iterator<View> iterator() {
                return ViewGroupKt.iterator(children);
            }
        };
    }

    public static final void setMargins(ViewGroup.MarginLayoutParams setMargins, int i) {
        Intrinsics.checkParameterIsNotNull(setMargins, "$this$setMargins");
        setMargins.setMargins(i, i, i, i);
    }

    public static /* synthetic */ void updateMargins$default(ViewGroup.MarginLayoutParams updateMargins, int i, int i2, int i3, int i4, int i5, Object obj) {
        if ((i5 & 1) != 0) {
            i = updateMargins.leftMargin;
        }
        if ((i5 & 2) != 0) {
            i2 = updateMargins.topMargin;
        }
        if ((i5 & 4) != 0) {
            i3 = updateMargins.rightMargin;
        }
        if ((i5 & 8) != 0) {
            i4 = updateMargins.bottomMargin;
        }
        Intrinsics.checkParameterIsNotNull(updateMargins, "$this$updateMargins");
        updateMargins.setMargins(i, i2, i3, i4);
    }

    public static final void updateMargins(ViewGroup.MarginLayoutParams updateMargins, int i, int i2, int i3, int i4) {
        Intrinsics.checkParameterIsNotNull(updateMargins, "$this$updateMargins");
        updateMargins.setMargins(i, i2, i3, i4);
    }

    public static /* synthetic */ void updateMarginsRelative$default(ViewGroup.MarginLayoutParams updateMarginsRelative, int i, int i2, int i3, int i4, int i5, Object obj) {
        if ((i5 & 1) != 0) {
            i = updateMarginsRelative.getMarginStart();
        }
        if ((i5 & 2) != 0) {
            i2 = updateMarginsRelative.topMargin;
        }
        if ((i5 & 4) != 0) {
            i3 = updateMarginsRelative.getMarginEnd();
        }
        if ((i5 & 8) != 0) {
            i4 = updateMarginsRelative.bottomMargin;
        }
        Intrinsics.checkParameterIsNotNull(updateMarginsRelative, "$this$updateMarginsRelative");
        updateMarginsRelative.setMarginStart(i);
        updateMarginsRelative.topMargin = i2;
        updateMarginsRelative.setMarginEnd(i3);
        updateMarginsRelative.bottomMargin = i4;
    }

    public static final void updateMarginsRelative(ViewGroup.MarginLayoutParams updateMarginsRelative, int i, int i2, int i3, int i4) {
        Intrinsics.checkParameterIsNotNull(updateMarginsRelative, "$this$updateMarginsRelative");
        updateMarginsRelative.setMarginStart(i);
        updateMarginsRelative.topMargin = i2;
        updateMarginsRelative.setMarginEnd(i3);
        updateMarginsRelative.bottomMargin = i4;
    }
}

