package kotlin.io.path;

import java.nio.file.FileSystemLoopException;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.ResultKt;
import kotlin.Unit;
import kotlin.collections.ArrayDeque;
import kotlin.collections.ArraysKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.intrinsics.IntrinsicsKt;
import kotlin.coroutines.jvm.internal.DebugMetadata;
import kotlin.coroutines.jvm.internal.RestrictedSuspendLambda;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.InlineMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.sequences.Sequence;
import kotlin.sequences.SequenceScope;
import kotlin.sequences.SequencesKt;
import org.apache.cordova.globalization.Globalization;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010(\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\b\u0002\b\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u001d\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u000e\u0010\u0004\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00060\u0005¢\u0006\u0002\u0010\u0007J\u000e\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00020\u0015H\u0002J\u000e\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00020\u0015H\u0002J\u000f\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00020\u0015H\u0096\u0002JE\u0010\u0018\u001a\u00020\u0019*\b\u0012\u0004\u0012\u00020\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001e2\u0018\u0010\u001f\u001a\u0014\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u001c0!\u0012\u0004\u0012\u00020\u00190 H\u0082Hø\u0001\u0000¢\u0006\u0002\u0010\"R\u0014\u0010\b\u001a\u00020\t8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\n\u0010\u000bR\u0014\u0010\f\u001a\u00020\t8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\r\u0010\u000bR\u0014\u0010\u000e\u001a\u00020\t8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u000e\u0010\u000bR\u001a\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00100\u00058BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0011\u0010\u0012R\u0018\u0010\u0004\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0013R\u000e\u0010\u0003\u001a\u00020\u0002X\u0082\u0004¢\u0006\u0002\n\u0000\u0082\u0002\u0004\n\u0002\b\u0019¨\u0006#"}, d2 = {"Lkotlin/io/path/PathTreeWalk;", "Lkotlin/sequences/Sequence;", "Ljava/nio/file/Path;", "start", Globalization.OPTIONS, "", "Lkotlin/io/path/PathWalkOption;", "(Ljava/nio/file/Path;[Lkotlin/io/path/PathWalkOption;)V", "followLinks", "", "getFollowLinks", "()Z", "includeDirectories", "getIncludeDirectories", "isBFS", "linkOptions", "Ljava/nio/file/LinkOption;", "getLinkOptions", "()[Ljava/nio/file/LinkOption;", "[Lkotlin/io/path/PathWalkOption;", "bfsIterator", "", "dfsIterator", "iterator", "yieldIfNeeded", "", "Lkotlin/sequences/SequenceScope;", "node", "Lkotlin/io/path/PathNode;", "entriesReader", "Lkotlin/io/path/DirectoryEntriesReader;", "entriesAction", "Lkotlin/Function1;", "", "(Lkotlin/sequences/SequenceScope;Lkotlin/io/path/PathNode;Lkotlin/io/path/DirectoryEntriesReader;Lkotlin/jvm/functions/Function1;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "kotlin-stdlib-jdk7"}, k = 1, mv = {1, 8, 0}, xi = 48)
public final class PathTreeWalk implements Sequence<Path> {
    private final PathWalkOption[] options;
    private final Path start;

    public PathTreeWalk(Path start, PathWalkOption[] options) {
        Intrinsics.checkNotNullParameter(start, "start");
        Intrinsics.checkNotNullParameter(options, "options");
        this.start = start;
        this.options = options;
    }
    public final boolean getFollowLinks() {
        return ArraysKt.contains(this.options, PathWalkOption.FOLLOW_LINKS);
    }
    public final LinkOption[] getLinkOptions() {
        return LinkFollowing.INSTANCE.toLinkOptions(getFollowLinks());
    }
    public final boolean getIncludeDirectories() {
        return ArraysKt.contains(this.options, PathWalkOption.INCLUDE_DIRECTORIES);
    }

    private final boolean isBFS() {
        return ArraysKt.contains(this.options, PathWalkOption.BREADTH_FIRST);
    }

    @Override // kotlin.sequences.Sequence
    public Iterator<Path> iterator() {
        return isBFS() ? bfsIterator() : dfsIterator();
    }

    private final Object yieldIfNeeded(SequenceScope<? super Path> sequenceScope, PathNode pathNode, DirectoryEntriesReader directoryEntriesReader, Function1<? super List<PathNode>, Unit> function1, Continuation<? super Unit> continuation) throws FileSystemLoopException {
        Path path = pathNode.getPath();
        LinkOption[] linkOptions = getLinkOptions();
        LinkOption[] linkOptionArr = (LinkOption[]) Arrays.copyOf(linkOptions, linkOptions.length);
        if (Files.isDirectory(path, (LinkOption[]) Arrays.copyOf(linkOptionArr, linkOptionArr.length))) {
            if (!PathTreeWalkKt.createsCycle(pathNode)) {
                if (getIncludeDirectories()) {
                    InlineMarker.mark(0);
                    sequenceScope.yield(path, continuation);
                    InlineMarker.mark(1);
                }
                LinkOption[] linkOptions2 = getLinkOptions();
                LinkOption[] linkOptionArr2 = (LinkOption[]) Arrays.copyOf(linkOptions2, linkOptions2.length);
                if (Files.isDirectory(path, (LinkOption[]) Arrays.copyOf(linkOptionArr2, linkOptionArr2.length))) {
                    function1.invoke(directoryEntriesReader.readEntries(pathNode));
                }
            } else {
                throw new FileSystemLoopException(path.toString());
            }
        } else if (Files.exists(path, (LinkOption[]) Arrays.copyOf(new LinkOption[]{LinkOption.NOFOLLOW_LINKS}, 1))) {
            InlineMarker.mark(0);
            sequenceScope.yield(path, continuation);
            InlineMarker.mark(1);
            return Unit.INSTANCE;
        }
        return Unit.INSTANCE;
    }
    @Metadata(d1 = {"\u0000\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\b\u0012\u0004\u0012\u00020\u00030\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlin/sequences/SequenceScope;", "Ljava/nio/file/Path;"}, k = 3, mv = {1, 8, 0}, xi = 48)
    @DebugMetadata(c = "kotlin.io.path.PathTreeWalk$dfsIterator$1", f = "PathTreeWalk.kt", i = {0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3}, l = {184, 190, 199, 205}, m = "invokeSuspend", n = {"$this$iterator", "stack", "entriesReader", "startNode", "this_$iv", "path$iv", "$this$iterator", "stack", "entriesReader", "$this$iterator", "stack", "entriesReader", "pathNode", "this_$iv", "path$iv", "$this$iterator", "stack", "entriesReader"}, s = {"L$0", "L$1", "L$2", "L$3", "L$4", "L$5", "L$0", "L$1", "L$2", "L$0", "L$1", "L$2", "L$3", "L$4", "L$5", "L$0", "L$1", "L$2"})
    static final class C00581 extends RestrictedSuspendLambda implements Function2<SequenceScope<? super Path>, Continuation<? super Unit>, Object> {
        private /* synthetic */ Object L$0;
        Object L$1;
        Object L$2;
        Object L$3;
        Object L$4;
        Object L$5;
        int label;

        C00581(Continuation<? super C00581> continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            C00581 c00581 = PathTreeWalk.this.new C00581(continuation);
            c00581.L$0 = obj;
            return c00581;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(SequenceScope<? super Path> sequenceScope, Continuation<? super Unit> continuation) {
            return ((C00581) create(sequenceScope, continuation)).invokeSuspend(Unit.INSTANCE);
        }

        /* high-level source view WARN: Removed duplicated region for block: B:27:0x0103  */
        /* high-level source view WARN: Removed duplicated region for block: B:38:0x014b  */
        /* high-level source view WARN: Removed duplicated region for block: B:53:0x01d6  */
        /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:52:0x01d4 -> B:36:0x0142). Please report as a decompilation issue!!! */
        /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:53:0x01d6 -> B:36:0x0142). Please report as a decompilation issue!!! */
        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        /*
            Code decompiled incorrectly, please refer to instructions dump.
        */
        public final Object invokeSuspend(Object obj) throws Throwable {
            SequenceScope sequenceScope;
            ArrayDeque arrayDeque;
            DirectoryEntriesReader directoryEntriesReader;
            PathNode pathNode;
            PathTreeWalk pathTreeWalk;
            Path path;
            PathTreeWalk pathTreeWalk2;
            SequenceScope sequenceScope2;
            PathNode pathNode2;
            ArrayDeque arrayDeque2;
            Path path2;
            ArrayDeque arrayDeque3;
            DirectoryEntriesReader directoryEntriesReader2;
            LinkOption[] linkOptionArr;
            Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
            int i = this.label;
            if (i == 0) {
                ResultKt.throwOnFailure(obj);
                sequenceScope = (SequenceScope) this.L$0;
                arrayDeque = new ArrayDeque();
                directoryEntriesReader = new DirectoryEntriesReader(PathTreeWalk.this.getFollowLinks());
                pathNode = new PathNode(PathTreeWalk.this.start, PathTreeWalkKt.keyOf(PathTreeWalk.this.start, PathTreeWalk.this.getLinkOptions()), null);
                pathTreeWalk = PathTreeWalk.this;
                path = pathNode.getPath();
                LinkOption[] linkOptions = pathTreeWalk.getLinkOptions();
                LinkOption[] linkOptionArr2 = (LinkOption[]) Arrays.copyOf(linkOptions, linkOptions.length);
                if (Files.isDirectory(path, (LinkOption[]) Arrays.copyOf(linkOptionArr2, linkOptionArr2.length))) {
                    if (!PathTreeWalkKt.createsCycle(pathNode)) {
                        if (pathTreeWalk.getIncludeDirectories()) {
                            this.L$0 = sequenceScope;
                            this.L$1 = arrayDeque;
                            this.L$2 = directoryEntriesReader;
                            this.L$3 = pathNode;
                            this.L$4 = pathTreeWalk;
                            this.L$5 = path;
                            this.label = 1;
                            if (sequenceScope.yield(path, this) == coroutine_suspended) {
                                return coroutine_suspended;
                            }
                            pathTreeWalk2 = pathTreeWalk;
                            sequenceScope2 = sequenceScope;
                            pathNode2 = pathNode;
                            arrayDeque2 = arrayDeque;
                            path2 = path;
                        }
                        LinkOption[] linkOptions2 = pathTreeWalk.getLinkOptions();
                        linkOptionArr = (LinkOption[]) Arrays.copyOf(linkOptions2, linkOptions2.length);
                        if (Files.isDirectory(path, (LinkOption[]) Arrays.copyOf(linkOptionArr, linkOptionArr.length))) {
                            pathNode.setContentIterator(directoryEntriesReader.readEntries(pathNode).iterator());
                            arrayDeque.addLast(pathNode);
                        }
                        arrayDeque3 = arrayDeque;
                        directoryEntriesReader2 = directoryEntriesReader;
                        while (!arrayDeque3.isEmpty()) {
                        }
                        return Unit.INSTANCE;
                    }
                    throw new FileSystemLoopException(path.toString());
                }
                if (Files.exists(path, (LinkOption[]) Arrays.copyOf(new LinkOption[]{LinkOption.NOFOLLOW_LINKS}, 1))) {
                    this.L$0 = sequenceScope;
                    this.L$1 = arrayDeque;
                    this.L$2 = directoryEntriesReader;
                    this.label = 2;
                    if (sequenceScope.yield(path, this) == coroutine_suspended) {
                        return coroutine_suspended;
                    }
                }
                arrayDeque3 = arrayDeque;
                directoryEntriesReader2 = directoryEntriesReader;
                while (!arrayDeque3.isEmpty()) {
                }
                return Unit.INSTANCE;
            }
            if (i != 1) {
                if (i != 2) {
                    if (i == 3) {
                        Path path3 = (Path) this.L$5;
                        PathTreeWalk pathTreeWalk3 = (PathTreeWalk) this.L$4;
                        PathNode pathNode3 = (PathNode) this.L$3;
                        DirectoryEntriesReader directoryEntriesReader3 = (DirectoryEntriesReader) this.L$2;
                        ArrayDeque arrayDeque4 = (ArrayDeque) this.L$1;
                        SequenceScope sequenceScope3 = (SequenceScope) this.L$0;
                        ResultKt.throwOnFailure(obj);
                        SequenceScope sequenceScope4 = sequenceScope3;
                        Path path4 = path3;
                        directoryEntriesReader2 = directoryEntriesReader3;
                        PathNode next = pathNode3;
                        sequenceScope = sequenceScope4;
                        ArrayDeque arrayDeque5 = arrayDeque4;
                        PathTreeWalk pathTreeWalk4 = pathTreeWalk3;
                        arrayDeque3 = arrayDeque5;
                        LinkOption[] linkOptions3 = pathTreeWalk4.getLinkOptions();
                        LinkOption[] linkOptionArr3 = (LinkOption[]) Arrays.copyOf(linkOptions3, linkOptions3.length);
                        if (Files.isDirectory(path4, (LinkOption[]) Arrays.copyOf(linkOptionArr3, linkOptionArr3.length))) {
                            next.setContentIterator(directoryEntriesReader2.readEntries(next).iterator());
                            arrayDeque3.addLast(next);
                        }
                        while (!arrayDeque3.isEmpty()) {
                            Iterator<PathNode> contentIterator = ((PathNode) arrayDeque3.last()).getContentIterator();
                            Intrinsics.checkNotNull(contentIterator);
                            if (contentIterator.hasNext()) {
                                next = contentIterator.next();
                                pathTreeWalk4 = PathTreeWalk.this;
                                path4 = next.getPath();
                                LinkOption[] linkOptions4 = pathTreeWalk4.getLinkOptions();
                                LinkOption[] linkOptionArr4 = (LinkOption[]) Arrays.copyOf(linkOptions4, linkOptions4.length);
                                if (Files.isDirectory(path4, (LinkOption[]) Arrays.copyOf(linkOptionArr4, linkOptionArr4.length))) {
                                    if (!PathTreeWalkKt.createsCycle(next)) {
                                        if (pathTreeWalk4.getIncludeDirectories()) {
                                            this.L$0 = sequenceScope;
                                            this.L$1 = arrayDeque3;
                                            this.L$2 = directoryEntriesReader2;
                                            this.L$3 = next;
                                            this.L$4 = pathTreeWalk4;
                                            this.L$5 = path4;
                                            this.label = 3;
                                            if (sequenceScope.yield(path4, this) == coroutine_suspended) {
                                                return coroutine_suspended;
                                            }
                                            directoryEntriesReader3 = directoryEntriesReader2;
                                            path3 = path4;
                                            sequenceScope3 = sequenceScope;
                                            pathNode3 = next;
                                            arrayDeque4 = arrayDeque3;
                                            pathTreeWalk3 = pathTreeWalk4;
                                            SequenceScope sequenceScope42 = sequenceScope3;
                                            Path path42 = path3;
                                            directoryEntriesReader2 = directoryEntriesReader3;
                                            PathNode next2 = pathNode3;
                                            sequenceScope = sequenceScope42;
                                            ArrayDeque arrayDeque52 = arrayDeque4;
                                            PathTreeWalk pathTreeWalk42 = pathTreeWalk3;
                                            arrayDeque3 = arrayDeque52;
                                        }
                                        LinkOption[] linkOptions32 = pathTreeWalk42.getLinkOptions();
                                        LinkOption[] linkOptionArr32 = (LinkOption[]) Arrays.copyOf(linkOptions32, linkOptions32.length);
                                        if (Files.isDirectory(path42, (LinkOption[]) Arrays.copyOf(linkOptionArr32, linkOptionArr32.length))) {
                                        }
                                        while (!arrayDeque3.isEmpty()) {
                                        }
                                    } else {
                                        throw new FileSystemLoopException(path42.toString());
                                    }
                                } else if (Files.exists(path42, (LinkOption[]) Arrays.copyOf(new LinkOption[]{LinkOption.NOFOLLOW_LINKS}, 1))) {
                                    this.L$0 = sequenceScope;
                                    this.L$1 = arrayDeque3;
                                    this.L$2 = directoryEntriesReader2;
                                    this.L$3 = null;
                                    this.L$4 = null;
                                    this.L$5 = null;
                                    this.label = 4;
                                    if (sequenceScope.yield(path42, this) == coroutine_suspended) {
                                        return coroutine_suspended;
                                    }
                                } else {
                                    continue;
                                }
                            } else {
                                arrayDeque3.removeLast();
                            }
                        }
                        return Unit.INSTANCE;
                    }
                    if (i != 4) {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                }
                directoryEntriesReader2 = (DirectoryEntriesReader) this.L$2;
                arrayDeque3 = (ArrayDeque) this.L$1;
                sequenceScope = (SequenceScope) this.L$0;
                ResultKt.throwOnFailure(obj);
                while (!arrayDeque3.isEmpty()) {
                }
                return Unit.INSTANCE;
            }
            path2 = (Path) this.L$5;
            pathTreeWalk2 = (PathTreeWalk) this.L$4;
            pathNode2 = (PathNode) this.L$3;
            directoryEntriesReader = (DirectoryEntriesReader) this.L$2;
            arrayDeque2 = (ArrayDeque) this.L$1;
            sequenceScope2 = (SequenceScope) this.L$0;
            ResultKt.throwOnFailure(obj);
            path = path2;
            arrayDeque = arrayDeque2;
            pathNode = pathNode2;
            sequenceScope = sequenceScope2;
            pathTreeWalk = pathTreeWalk2;
            LinkOption[] linkOptions22 = pathTreeWalk.getLinkOptions();
            linkOptionArr = (LinkOption[]) Arrays.copyOf(linkOptions22, linkOptions22.length);
            if (Files.isDirectory(path, (LinkOption[]) Arrays.copyOf(linkOptionArr, linkOptionArr.length))) {
            }
            arrayDeque3 = arrayDeque;
            directoryEntriesReader2 = directoryEntriesReader;
            while (!arrayDeque3.isEmpty()) {
            }
            return Unit.INSTANCE;
        }
    }

    private final Iterator<Path> dfsIterator() {
        return SequencesKt.iterator(new C00581(null));
    }
    @Metadata(d1 = {"\u0000\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\b\u0012\u0004\u0012\u00020\u00030\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlin/sequences/SequenceScope;", "Ljava/nio/file/Path;"}, k = 3, mv = {1, 8, 0}, xi = 48)
    @DebugMetadata(c = "kotlin.io.path.PathTreeWalk$bfsIterator$1", f = "PathTreeWalk.kt", i = {0, 0, 0, 0, 0, 0, 1, 1, 1}, l = {184, 190}, m = "invokeSuspend", n = {"$this$iterator", "queue", "entriesReader", "pathNode", "this_$iv", "path$iv", "$this$iterator", "queue", "entriesReader"}, s = {"L$0", "L$1", "L$2", "L$3", "L$4", "L$5", "L$0", "L$1", "L$2"})
    static final class AnonymousClass1 extends RestrictedSuspendLambda implements Function2<SequenceScope<? super Path>, Continuation<? super Unit>, Object> {
        private /* synthetic */ Object L$0;
        Object L$1;
        Object L$2;
        Object L$3;
        Object L$4;
        Object L$5;
        int label;

        AnonymousClass1(Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            AnonymousClass1 anonymousClass1 = PathTreeWalk.this.new AnonymousClass1(continuation);
            anonymousClass1.L$0 = obj;
            return anonymousClass1;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(SequenceScope<? super Path> sequenceScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(sequenceScope, continuation)).invokeSuspend(Unit.INSTANCE);
        }

        /* high-level source view WARN: Removed duplicated region for block: B:13:0x0086  */
        /* high-level source view WARN: Removed duplicated region for block: B:26:0x00f4  */
        /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:25:0x00f2 -> B:11:0x007d). Please report as a decompilation issue!!! */
        /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:26:0x00f4 -> B:11:0x007d). Please report as a decompilation issue!!! */
        @Override // kotlin.coroutines.jvm.internal.BaseContinuationImpl
        /*
            Code decompiled incorrectly, please refer to instructions dump.
        */
        public final Object invokeSuspend(Object obj) throws Throwable {
            SequenceScope sequenceScope;
            ArrayDeque arrayDeque;
            DirectoryEntriesReader directoryEntriesReader;
            PathNode pathNode;
            Path path;
            PathTreeWalk pathTreeWalk;
            LinkOption[] linkOptionArr;
            SequenceScope sequenceScope2;
            ArrayDeque arrayDeque2;
            DirectoryEntriesReader directoryEntriesReader2;
            PathNode pathNode2;
            PathTreeWalk pathTreeWalk2;
            Path path2;
            Object coroutine_suspended = IntrinsicsKt.getCOROUTINE_SUSPENDED();
            int i = this.label;
            if (i == 0) {
                ResultKt.throwOnFailure(obj);
                SequenceScope sequenceScope3 = (SequenceScope) this.L$0;
                ArrayDeque arrayDeque3 = new ArrayDeque();
                DirectoryEntriesReader directoryEntriesReader3 = new DirectoryEntriesReader(PathTreeWalk.this.getFollowLinks());
                arrayDeque3.addLast(new PathNode(PathTreeWalk.this.start, PathTreeWalkKt.keyOf(PathTreeWalk.this.start, PathTreeWalk.this.getLinkOptions()), null));
                sequenceScope = sequenceScope3;
                arrayDeque = arrayDeque3;
                directoryEntriesReader = directoryEntriesReader3;
            } else if (i == 1) {
                path2 = (Path) this.L$5;
                pathTreeWalk2 = (PathTreeWalk) this.L$4;
                pathNode2 = (PathNode) this.L$3;
                directoryEntriesReader2 = (DirectoryEntriesReader) this.L$2;
                arrayDeque2 = (ArrayDeque) this.L$1;
                sequenceScope2 = (SequenceScope) this.L$0;
                ResultKt.throwOnFailure(obj);
                pathNode = pathNode2;
                sequenceScope = sequenceScope2;
                ArrayDeque arrayDeque4 = arrayDeque2;
                path = path2;
                directoryEntriesReader = directoryEntriesReader2;
                pathTreeWalk = pathTreeWalk2;
                arrayDeque = arrayDeque4;
                LinkOption[] linkOptions = pathTreeWalk.getLinkOptions();
                linkOptionArr = (LinkOption[]) Arrays.copyOf(linkOptions, linkOptions.length);
                if (Files.isDirectory(path, (LinkOption[]) Arrays.copyOf(linkOptionArr, linkOptionArr.length))) {
                    arrayDeque.addAll(directoryEntriesReader.readEntries(pathNode));
                }
            } else {
                if (i != 2) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                directoryEntriesReader = (DirectoryEntriesReader) this.L$2;
                arrayDeque = (ArrayDeque) this.L$1;
                sequenceScope = (SequenceScope) this.L$0;
                ResultKt.throwOnFailure(obj);
            }
            while (!arrayDeque.isEmpty()) {
                pathNode = (PathNode) arrayDeque.removeFirst();
                pathTreeWalk = PathTreeWalk.this;
                path = pathNode.getPath();
                LinkOption[] linkOptions2 = pathTreeWalk.getLinkOptions();
                LinkOption[] linkOptionArr2 = (LinkOption[]) Arrays.copyOf(linkOptions2, linkOptions2.length);
                if (Files.isDirectory(path, (LinkOption[]) Arrays.copyOf(linkOptionArr2, linkOptionArr2.length))) {
                    if (!PathTreeWalkKt.createsCycle(pathNode)) {
                        if (pathTreeWalk.getIncludeDirectories()) {
                            this.L$0 = sequenceScope;
                            this.L$1 = arrayDeque;
                            this.L$2 = directoryEntriesReader;
                            this.L$3 = pathNode;
                            this.L$4 = pathTreeWalk;
                            this.L$5 = path;
                            this.label = 1;
                            if (sequenceScope.yield(path, this) == coroutine_suspended) {
                                return coroutine_suspended;
                            }
                            sequenceScope2 = sequenceScope;
                            pathNode2 = pathNode;
                            directoryEntriesReader2 = directoryEntriesReader;
                            path2 = path;
                            arrayDeque2 = arrayDeque;
                            pathTreeWalk2 = pathTreeWalk;
                            pathNode = pathNode2;
                            sequenceScope = sequenceScope2;
                            ArrayDeque arrayDeque42 = arrayDeque2;
                            path = path2;
                            directoryEntriesReader = directoryEntriesReader2;
                            pathTreeWalk = pathTreeWalk2;
                            arrayDeque = arrayDeque42;
                        }
                        LinkOption[] linkOptions3 = pathTreeWalk.getLinkOptions();
                        linkOptionArr = (LinkOption[]) Arrays.copyOf(linkOptions3, linkOptions3.length);
                        if (Files.isDirectory(path, (LinkOption[]) Arrays.copyOf(linkOptionArr, linkOptionArr.length))) {
                        }
                        while (!arrayDeque.isEmpty()) {
                        }
                    } else {
                        throw new FileSystemLoopException(path.toString());
                    }
                } else if (Files.exists(path, (LinkOption[]) Arrays.copyOf(new LinkOption[]{LinkOption.NOFOLLOW_LINKS}, 1))) {
                    this.L$0 = sequenceScope;
                    this.L$1 = arrayDeque;
                    this.L$2 = directoryEntriesReader;
                    this.L$3 = null;
                    this.L$4 = null;
                    this.L$5 = null;
                    this.label = 2;
                    if (sequenceScope.yield(path, this) == coroutine_suspended) {
                        return coroutine_suspended;
                    }
                }
            }
            return Unit.INSTANCE;
        }
    }

    private final Iterator<Path> bfsIterator() {
        return SequencesKt.iterator(new AnonymousClass1(null));
    }
}

