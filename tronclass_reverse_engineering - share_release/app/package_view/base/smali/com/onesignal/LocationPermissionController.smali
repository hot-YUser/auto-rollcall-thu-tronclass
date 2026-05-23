.class public final Lcom/onesignal/LocationPermissionController;
.super Ljava/lang/Object;
.source "LocationPermissionController.kt"

# interfaces
.implements Lcom/onesignal/PermissionsActivity$PermissionCallback;


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u000b\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0004\u0008\u00c6\u0002\u0018\u00002\u00020\u0001B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002J\u0008\u0010\u0005\u001a\u00020\u0006H\u0016J\u0010\u0010\u0007\u001a\u00020\u00062\u0006\u0010\u0008\u001a\u00020\tH\u0016J\u0010\u0010\n\u001a\u00020\u00062\u0006\u0010\u000b\u001a\u00020\u000cH\u0002J\u0016\u0010\r\u001a\u00020\u00062\u0006\u0010\u0008\u001a\u00020\t2\u0006\u0010\u000e\u001a\u00020\u0004J\u0008\u0010\u000f\u001a\u00020\u0006H\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0010"
    }
    d2 = {
        "Lcom/onesignal/LocationPermissionController;",
        "Lcom/onesignal/PermissionsActivity$PermissionCallback;",
        "()V",
        "PERMISSION_TYPE",
        "",
        "onAccept",
        "",
        "onReject",
        "fallbackToSettings",
        "",
        "onResponse",
        "result",
        "Lcom/onesignal/OneSignal$PromptActionResult;",
        "prompt",
        "androidPermissionString",
        "showFallbackAlertDialog",
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
.field public static final INSTANCE:Lcom/onesignal/LocationPermissionController;

.field private static final PERMISSION_TYPE:Ljava/lang/String; = "LOCATION"


# direct methods
.method static constructor <clinit>()V
    .locals 2

    new-instance v0, Lcom/onesignal/LocationPermissionController;

    invoke-direct {v0}, Lcom/onesignal/LocationPermissionController;-><init>()V

    sput-object v0, Lcom/onesignal/LocationPermissionController;->INSTANCE:Lcom/onesignal/LocationPermissionController;

    .line 34
    const-string v1, "LOCATION"

    check-cast v0, Lcom/onesignal/PermissionsActivity$PermissionCallback;

    invoke-static {v1, v0}, Lcom/onesignal/PermissionsActivity;->registerAsCallback(Ljava/lang/String;Lcom/onesignal/PermissionsActivity$PermissionCallback;)V

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 30
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private final onResponse(Lcom/onesignal/OneSignal$PromptActionResult;)V
    .locals 1

    const/4 v0, 0x1

    .line 50
    invoke-static {v0, p1}, Lcom/onesignal/LocationController;->sendAndClearPromptHandlers(ZLcom/onesignal/OneSignal$PromptActionResult;)V

    return-void
.end method

.method private final showFallbackAlertDialog()V
    .locals 5

    .line 68
    invoke-static {}, Lcom/onesignal/OneSignal;->getCurrentActivity()Landroid/app/Activity;

    move-result-object v0

    if-nez v0, :cond_0

    return-void

    .line 69
    :cond_0
    sget-object v1, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;->INSTANCE:Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;

    .line 71
    sget v2, Lcom/onesignal/R$string;->location_permission_name_for_title:I

    invoke-virtual {v0, v2}, Landroid/app/Activity;->getString(I)Ljava/lang/String;

    move-result-object v2

    const-string v3, "activity.getString(R.str\u2026ermission_name_for_title)"

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 72
    sget v3, Lcom/onesignal/R$string;->location_permission_settings_message:I

    invoke-virtual {v0, v3}, Landroid/app/Activity;->getString(I)Ljava/lang/String;

    move-result-object v3

    const-string v4, "activity.getString(R.str\u2026mission_settings_message)"

    invoke-static {v3, v4}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 73
    new-instance v4, Lcom/onesignal/LocationPermissionController$showFallbackAlertDialog$1;

    invoke-direct {v4, v0}, Lcom/onesignal/LocationPermissionController$showFallbackAlertDialog$1;-><init>(Landroid/app/Activity;)V

    check-cast v4, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;

    .line 69
    invoke-virtual {v1, v0, v2, v3, v4}, Lcom/onesignal/AlertDialogPrepromptForAndroidSettings;->show(Landroid/app/Activity;Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;)V

    return-void
.end method


# virtual methods
.method public onAccept()V
    .locals 1

    .line 57
    sget-object v0, Lcom/onesignal/OneSignal$PromptActionResult;->PERMISSION_GRANTED:Lcom/onesignal/OneSignal$PromptActionResult;

    invoke-direct {p0, v0}, Lcom/onesignal/LocationPermissionController;->onResponse(Lcom/onesignal/OneSignal$PromptActionResult;)V

    .line 58
    invoke-static {}, Lcom/onesignal/LocationController;->startGetLocation()V

    return-void
.end method

.method public onReject(Z)V
    .locals 1

    .line 62
    sget-object v0, Lcom/onesignal/OneSignal$PromptActionResult;->PERMISSION_DENIED:Lcom/onesignal/OneSignal$PromptActionResult;

    invoke-direct {p0, v0}, Lcom/onesignal/LocationPermissionController;->onResponse(Lcom/onesignal/OneSignal$PromptActionResult;)V

    if-eqz p1, :cond_0

    .line 63
    invoke-direct {p0}, Lcom/onesignal/LocationPermissionController;->showFallbackAlertDialog()V

    .line 64
    :cond_0
    invoke-static {}, Lcom/onesignal/LocationController;->fireFailedComplete()V

    return-void
.end method

.method public final prompt(ZLjava/lang/String;)V
    .locals 2

    const-string v0, "androidPermissionString"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 43
    const-string v0, "LOCATION"

    .line 45
    invoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v1

    .line 41
    invoke-static {p1, v0, p2, v1}, Lcom/onesignal/PermissionsActivity;->startPrompt(ZLjava/lang/String;Ljava/lang/String;Ljava/lang/Class;)V

    return-void
.end method
