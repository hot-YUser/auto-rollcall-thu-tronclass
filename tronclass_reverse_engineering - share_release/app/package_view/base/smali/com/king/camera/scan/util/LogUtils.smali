.class public Lcom/king/camera/scan/util/LogUtils;
.super Ljava/lang/Object;
.source "LogUtils.java"


# annotations
.annotation runtime Ljava/lang/Deprecated;
.end annotation


# static fields
.field private static final ARROW:Ljava/lang/String; = " \u2794 "

.field public static final ASSERT:I = 0x7

.field private static final BOTTOM_BORDER:Ljava/lang/String; = "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"

.field private static final BOTTOM_LEFT_CORNER:C = '\u2514'

.field public static final DEBUG:I = 0x3

.field private static final DOUBLE_DIVIDER:Ljava/lang/String; = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"

.field public static final ERROR:I = 0x6

.field private static final HORIZONTAL_LINE:C = '\u2502'

.field public static final INFO:I = 0x4

.field private static final LINE_FEED:Ljava/lang/String; = "\n"

.field private static final LOG_STACK_OFFSET:I = 0x6

.field private static final MIDDLE_BORDER:Ljava/lang/String; = "\u251c\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504"

.field private static final MIDDLE_CORNER:C = '\u251c'

.field private static final MIN_STACK_OFFSET:I = 0x5

.field public static final PRINTLN:I = 0x1

.field private static final SINGLE_DIVIDER:Ljava/lang/String; = "\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504"

.field private static final SPACE:Ljava/lang/String; = " "

.field public static final STACK_TRACE_FORMAT:Ljava/lang/String; = "%s.%s(%s:%d)"

.field public static final TAG:Ljava/lang/String; = "CameraScan"

.field private static final TOP_BORDER:Ljava/lang/String; = "\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"

.field private static final TOP_LEFT_CORNER:C = '\u250c'

.field public static final VERBOSE:I = 0x2

.field public static final WARN:I = 0x5

.field private static isShowLog:Z = true

.field private static priority:I = 0x1


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method private constructor <init>()V
    .locals 1

    .line 113
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 114
    new-instance v0, Ljava/lang/AssertionError;

    invoke-direct {v0}, Ljava/lang/AssertionError;-><init>()V

    throw v0
.end method

.method public static d(Ljava/lang/String;)V
    .locals 2

    .line 265
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x3

    if-gt v0, v1, :cond_0

    .line 266
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;)V

    :cond_0
    return-void
.end method

.method public static d(Ljava/lang/String;Ljava/lang/Throwable;)V
    .locals 2

    .line 286
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x3

    if-gt v0, v1, :cond_0

    .line 287
    invoke-static {v1, p0, p1}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;Ljava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public static d(Ljava/lang/Throwable;)V
    .locals 2

    .line 275
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x3

    if-gt v0, v1, :cond_0

    .line 276
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public static e(Ljava/lang/String;)V
    .locals 2

    .line 364
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x6

    if-gt v0, v1, :cond_0

    .line 365
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;)V

    :cond_0
    return-void
.end method

.method public static e(Ljava/lang/String;Ljava/lang/Throwable;)V
    .locals 2

    .line 385
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x6

    if-gt v0, v1, :cond_0

    .line 386
    invoke-static {v1, p0, p1}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;Ljava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public static e(Ljava/lang/Throwable;)V
    .locals 2

    .line 374
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x6

    if-gt v0, v1, :cond_0

    .line 375
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public static getPriority()I
    .locals 1

    .line 143
    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    return v0
.end method

.method private static getStackTraceElement(I)Ljava/lang/StackTraceElement;
    .locals 1

    .line 203
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Thread;->getStackTrace()[Ljava/lang/StackTraceElement;

    move-result-object v0

    aget-object p0, v0, p0

    return-object p0
.end method

.method private static getStackTraceMessage(Ljava/lang/Object;I)Ljava/lang/String;
    .locals 4

    .line 171
    invoke-static {p1}, Lcom/king/camera/scan/util/LogUtils;->getStackTraceElement(I)Ljava/lang/StackTraceElement;

    move-result-object p1

    .line 172
    invoke-virtual {p1}, Ljava/lang/StackTraceElement;->getClassName()Ljava/lang/String;

    move-result-object v0

    .line 173
    const-string v1, "."

    invoke-virtual {v0, v1}, Ljava/lang/String;->lastIndexOf(Ljava/lang/String;)I

    move-result v1

    add-int/lit8 v1, v1, 0x1

    invoke-virtual {v0, v1}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object v0

    .line 174
    invoke-static {}, Ljava/util/Locale;->getDefault()Ljava/util/Locale;

    move-result-object v1

    invoke-virtual {p1}, Ljava/lang/StackTraceElement;->getMethodName()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {p1}, Ljava/lang/StackTraceElement;->getFileName()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {p1}, Ljava/lang/StackTraceElement;->getLineNumber()I

    move-result p1

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    filled-new-array {v0, v2, v3, p1}, [Ljava/lang/Object;

    move-result-object p1

    const-string v0, "%s.%s(%s:%d)"

    invoke-static {v1, v0, p1}, Ljava/lang/String;->format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p1

    .line 175
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n Thread: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 179
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Thread;->getName()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " \u2794 "

    .line 180
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 181
    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "\n\u251c\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\u2504\n "

    .line 182
    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    .line 186
    invoke-virtual {p1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    const-string p1, "\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"

    .line 187
    invoke-virtual {p0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    .line 189
    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method private static getStackTraceString(Ljava/lang/Throwable;)Ljava/lang/String;
    .locals 3

    if-eqz p0, :cond_0

    .line 214
    new-instance v0, Ljava/io/StringWriter;

    const/16 v1, 0x100

    invoke-direct {v0, v1}, Ljava/io/StringWriter;-><init>(I)V

    .line 215
    new-instance v1, Ljava/io/PrintWriter;

    const/4 v2, 0x0

    invoke-direct {v1, v0, v2}, Ljava/io/PrintWriter;-><init>(Ljava/io/Writer;Z)V

    .line 216
    invoke-virtual {p0, v1}, Ljava/lang/Throwable;->printStackTrace(Ljava/io/PrintWriter;)V

    .line 217
    invoke-virtual {v1}, Ljava/io/PrintWriter;->flush()V

    .line 218
    invoke-virtual {v0}, Ljava/io/StringWriter;->toString()Ljava/lang/String;

    move-result-object p0

    return-object p0

    .line 220
    :cond_0
    const-string p0, ""

    return-object p0
.end method

.method public static i(Ljava/lang/String;)V
    .locals 2

    .line 298
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x4

    if-gt v0, v1, :cond_0

    .line 299
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;)V

    :cond_0
    return-void
.end method

.method public static i(Ljava/lang/String;Ljava/lang/Throwable;)V
    .locals 2

    .line 319
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x4

    if-gt v0, v1, :cond_0

    .line 320
    invoke-static {v1, p0, p1}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;Ljava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public static i(Ljava/lang/Throwable;)V
    .locals 2

    .line 308
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x4

    if-gt v0, v1, :cond_0

    .line 309
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public static isShowLog()Z
    .locals 1

    .line 134
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    return v0
.end method

.method private static log(ILjava/lang/String;)V
    .locals 1

    const/4 v0, 0x6

    .line 429
    invoke-static {p1, v0}, Lcom/king/camera/scan/util/LogUtils;->getStackTraceMessage(Ljava/lang/Object;I)Ljava/lang/String;

    move-result-object p1

    const-string v0, "CameraScan"

    invoke-static {p0, v0, p1}, Landroid/util/Log;->println(ILjava/lang/String;Ljava/lang/String;)I

    return-void
.end method

.method private static log(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 1

    .line 450
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const/16 v0, 0xa

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-static {p2}, Lcom/king/camera/scan/util/LogUtils;->getStackTraceString(Ljava/lang/Throwable;)Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const/4 p2, 0x6

    invoke-static {p1, p2}, Lcom/king/camera/scan/util/LogUtils;->getStackTraceMessage(Ljava/lang/Object;I)Ljava/lang/String;

    move-result-object p1

    const-string p2, "CameraScan"

    invoke-static {p0, p2, p1}, Landroid/util/Log;->println(ILjava/lang/String;Ljava/lang/String;)I

    return-void
.end method

.method private static log(ILjava/lang/Throwable;)V
    .locals 1

    .line 439
    invoke-static {p1}, Lcom/king/camera/scan/util/LogUtils;->getStackTraceString(Ljava/lang/Throwable;)Ljava/lang/String;

    move-result-object p1

    const/4 v0, 0x6

    invoke-static {p1, v0}, Lcom/king/camera/scan/util/LogUtils;->getStackTraceMessage(Ljava/lang/Object;I)Ljava/lang/String;

    move-result-object p1

    const-string v0, "CameraScan"

    invoke-static {p0, v0, p1}, Landroid/util/Log;->println(ILjava/lang/String;Ljava/lang/String;)I

    return-void
.end method

.method public static println(Ljava/lang/Object;)V
    .locals 2

    .line 466
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x1

    if-gt v0, v1, :cond_0

    .line 467
    sget-object v0, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const/4 v1, 0x5

    invoke-static {p0, v1}, Lcom/king/camera/scan/util/LogUtils;->getStackTraceMessage(Ljava/lang/Object;I)Ljava/lang/String;

    move-result-object p0

    invoke-virtual {v0, p0}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    :cond_0
    return-void
.end method

.method public static println(Ljava/lang/String;)V
    .locals 2

    .line 461
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x1

    if-gt v0, v1, :cond_0

    .line 462
    sget-object v0, Ljava/lang/System;->out:Ljava/io/PrintStream;

    const/4 v1, 0x5

    invoke-static {p0, v1}, Lcom/king/camera/scan/util/LogUtils;->getStackTraceMessage(Ljava/lang/Object;I)Ljava/lang/String;

    move-result-object p0

    invoke-virtual {v0, p0}, Ljava/io/PrintStream;->println(Ljava/lang/String;)V

    :cond_0
    return-void
.end method

.method public static setPriority(I)V
    .locals 0

    .line 154
    sput p0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    return-void
.end method

.method public static setShowLog(Z)V
    .locals 0

    .line 125
    sput-boolean p0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    return-void
.end method

.method public static v(Ljava/lang/String;)V
    .locals 2

    .line 231
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x2

    if-gt v0, v1, :cond_0

    .line 232
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;)V

    :cond_0
    return-void
.end method

.method public static v(Ljava/lang/String;Ljava/lang/Throwable;)V
    .locals 2

    .line 253
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x2

    if-gt v0, v1, :cond_0

    .line 254
    invoke-static {v1, p0, p1}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;Ljava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public static v(Ljava/lang/Throwable;)V
    .locals 2

    .line 242
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x2

    if-gt v0, v1, :cond_0

    .line 243
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public static w(Ljava/lang/String;)V
    .locals 2

    .line 331
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x5

    if-gt v0, v1, :cond_0

    .line 332
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;)V

    :cond_0
    return-void
.end method

.method public static w(Ljava/lang/String;Ljava/lang/Throwable;)V
    .locals 2

    .line 352
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x5

    if-gt v0, v1, :cond_0

    .line 353
    invoke-static {v1, p0, p1}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;Ljava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public static w(Ljava/lang/Throwable;)V
    .locals 2

    .line 341
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x5

    if-gt v0, v1, :cond_0

    .line 342
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public static wtf(Ljava/lang/String;)V
    .locals 2

    .line 397
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x7

    if-gt v0, v1, :cond_0

    .line 398
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;)V

    :cond_0
    return-void
.end method

.method public static wtf(Ljava/lang/String;Ljava/lang/Throwable;)V
    .locals 2

    .line 418
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x7

    if-gt v0, v1, :cond_0

    .line 419
    invoke-static {v1, p0, p1}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/String;Ljava/lang/Throwable;)V

    :cond_0
    return-void
.end method

.method public static wtf(Ljava/lang/Throwable;)V
    .locals 2

    .line 407
    sget-boolean v0, Lcom/king/camera/scan/util/LogUtils;->isShowLog:Z

    if-eqz v0, :cond_0

    sget v0, Lcom/king/camera/scan/util/LogUtils;->priority:I

    const/4 v1, 0x7

    if-gt v0, v1, :cond_0

    .line 408
    invoke-static {v1, p0}, Lcom/king/camera/scan/util/LogUtils;->log(ILjava/lang/Throwable;)V

    :cond_0
    return-void
.end method
