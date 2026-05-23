package androidx.core.graphics;

import android.graphics.Path;
import com.onesignal.NotificationBundleProcessor;
import java.util.Collection;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000\u001c\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u001c\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0005\u001a\u0015\u0010\u0000\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001H\u0087\f\u001a\u001c\u0010\u0003\u001a\b\u0012\u0004\u0012\u00020\u00050\u0004*\u00020\u00012\b\b\u0002\u0010\u0006\u001a\u00020\u0007H\u0007\u001a\u0015\u0010\b\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001H\u0087\n\u001a\u0015\u0010\t\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001H\u0087\f\u001a\u0015\u0010\n\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001H\u0087\n\u001a\u0015\u0010\u000b\u001a\u00020\u0001*\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001H\u0087\f¨\u0006\f"}, d2 = {"and", "Landroid/graphics/Path;", NotificationBundleProcessor.PUSH_MINIFIED_BUTTON_ICON, "flatten", "", "Landroidx/core/graphics/PathSegment;", "error", "", "minus", "or", "plus", "xor", "core-ktx_release"}, k = 2, mv = {1, 1, 15})
public final class PathKt {
    public static final Iterable<PathSegment> flatten(Path flatten, float f) {
        Intrinsics.checkParameterIsNotNull(flatten, "$this$flatten");
        Collection<PathSegment> collectionFlatten = PathUtils.flatten(flatten, f);
        Intrinsics.checkExpressionValueIsNotNull(collectionFlatten, "PathUtils.flatten(this, error)");
        return collectionFlatten;
    }

    public static /* synthetic */ Iterable flatten$default(Path path, float f, int i, Object obj) {
        if ((i & 1) != 0) {
            f = 0.5f;
        }
        return flatten(path, f);
    }

    public static final Path plus(Path plus, Path p) {
        Intrinsics.checkParameterIsNotNull(plus, "$this$plus");
        Intrinsics.checkParameterIsNotNull(p, "p");
        Path path = new Path(plus);
        path.op(p, Path.Op.UNION);
        return path;
    }

    public static final Path minus(Path minus, Path p) {
        Intrinsics.checkParameterIsNotNull(minus, "$this$minus");
        Intrinsics.checkParameterIsNotNull(p, "p");
        Path path = new Path(minus);
        path.op(p, Path.Op.DIFFERENCE);
        return path;
    }

    public static final Path and(Path and, Path p) {
        Intrinsics.checkParameterIsNotNull(and, "$this$and");
        Intrinsics.checkParameterIsNotNull(p, "p");
        Path path = new Path();
        path.op(and, p, Path.Op.INTERSECT);
        return path;
    }

    public static final Path xor(Path xor, Path p) {
        Intrinsics.checkParameterIsNotNull(xor, "$this$xor");
        Intrinsics.checkParameterIsNotNull(p, "p");
        Path path = new Path(xor);
        path.op(p, Path.Op.XOR);
        return path;
    }

    public static final Path or(Path or, Path p) {
        Intrinsics.checkParameterIsNotNull(or, "$this$or");
        Intrinsics.checkParameterIsNotNull(p, "p");
        Path path = new Path(or);
        path.op(p, Path.Op.UNION);
        return path;
    }
}

