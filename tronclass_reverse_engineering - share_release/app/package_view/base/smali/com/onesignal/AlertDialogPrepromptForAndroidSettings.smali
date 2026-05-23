.class public final Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;
.super Ljava/lang/Object;
.source "AlertDialogPrepromptForAndroidSettings.kt"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0002\u0008\u00c6\u0002\u0018\u00002\u00020\u0001:\u0001\u000cB\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002J&\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u00082\u0006\u0010\t\u001a\u00020\u00082\u0006\u0010\n\u001a\u00020\u000b\u00a8\u0006\r"
    }
    d2 = {
        "Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;",
        "",
        "()V",
        "show",
        "",
        "activity",
        "Landroid/app/Activity;",
        "titlePrefix",
        "",
        "previouslyDeniedPostfix",
        "callback",
        "Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;",
        "Callback",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# static fields
.field public static final INSTANCE:Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;


# direct methods
.method public static synthetic $r8$lambda$_c-3jZGPXLcYUVFa7b9eXlF08LM(Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;Landroid/content/DialogInterface;I)V
    .locals 0

    invoke-static {p0, p1, p2}, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;->show$lambda-1(Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;Landroid/content/DialogInterface;I)V

    return-void
.end method

.method public static synthetic $r8$lambda$kfzwK0exwtwX_kfLgJBicxo8yjQ(Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;Landroid/content/DialogInterface;I)V
    .locals 0

    invoke-static {p0, p1, p2}, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;->show$lambda-0(Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;Landroid/content/DialogInterface;I)V

    return-void
.end method

.method static constructor <clinit>()V
    .locals 1

    new-instance v0, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;

    invoke-direct {v0}, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;-><init>()V

    sput-object v0, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;->INSTANCE:Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 33
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private static final show$lambda-0(Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;Landroid/content/DialogInterface;I)V
    .locals 0

    const-string p1, "$callback"

    invoke-static {p0, p1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 56
    invoke-interface {p0}, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;->onAccept()V

    return-void
.end method

.method private static final show$lambda-1(Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;Landroid/content/DialogInterface;I)V
    .locals 0

    const-string p1, "$callback"

    invoke-static {p0, p1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 59
    invoke-interface {p0}, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;->onDecline()V

    return-void
.end method


# virtual methods
.method public final show(Landroid/app/Activity;Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;)V
    .locals 4

    const-string v0, "activity"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "titlePrefix"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "previouslyDeniedPostfix"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "callback"

    invoke-static {p4, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 46
    sget v0, Lcom/onesignal/R$string;->permission_not_available_title:I

    invoke-virtual {p1, v0}, Landroid/app/Activity;->getString(I)Ljava/lang/String;

    move-result-object v0

    const-string v1, "activity.getString(R.str\u2026sion_not_available_title)"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 47
    filled-new-array {p2}, [Ljava/lang/Object;

    move-result-object p2

    const/4 v1, 0x1

    invoke-static {p2, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p2

    invoke-static {v0, p2}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p2

    const-string v0, "java.lang.String.format(this, *args)"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 49
    sget v2, Lcom/onesignal/R$string;->permission_not_available_message:I

    invoke-virtual {p1, v2}, Landroid/app/Activity;->getString(I)Ljava/lang/String;

    move-result-object v2

    const-string v3, "activity.getString(R.str\u2026on_not_available_message)"

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 50
    filled-new-array {p3}, [Ljava/lang/Object;

    move-result-object p3

    invoke-static {p3, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p3

    invoke-static {v2, p3}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p3

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 52
    new-instance v0, Landroid/app/AlertDialog$Builder;

    check-cast p1, Landroid/content/Context;

    invoke-direct {v0, p1}, Landroid/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

    .line 53
    check-cast p2, Ljava/lang/CharSequence;

    invoke-virtual {v0, p2}, Landroid/app/AlertDialog$Builder;->setTitle(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    move-result-object p1

    .line 54
    check-cast p3, Ljava/lang/CharSequence;

    invoke-virtual {p1, p3}, Landroid/app/AlertDialog$Builder;->setMessage(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    move-result-object p1

    .line 55
    sget p2, Lcom/onesignal/R$string;->permission_not_available_open_settings_option:I

    new-instance p3, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$$ExternalSyntheticLambda0;

    invoke-direct {p3, p4}, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$$ExternalSyntheticLambda0;-><init>(Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;)V

    invoke-virtual {p1, p2, p3}, Landroid/app/AlertDialog$Builder;->setPositiveButton(ILandroid/content/DialogInterface$OnClickListener;)Landroid/app/AlertDialog$Builder;

    move-result-object p1

    .line 58
    new-instance p2, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$$ExternalSyntheticLambda1;

    invoke-direct {p2, p4}, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$$ExternalSyntheticLambda1;-><init>(Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;)V

    const p3, 0x1040009

    invoke-virtual {p1, p3, p2}, Landroid/app/AlertDialog$Builder;->setNegativeButton(ILandroid/content/DialogInterface$OnClickListener;)Landroid/app/AlertDialog$Builder;

    move-result-object p1

    .line 61
    invoke-virtual {p1}, Landroid/app/AlertDialog$Builder;->show()Landroid/app/AlertDialog;

    return-void
.end method
