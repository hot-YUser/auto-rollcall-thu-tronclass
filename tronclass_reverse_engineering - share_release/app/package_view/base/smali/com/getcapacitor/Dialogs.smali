.class public Lcom/getcapacitor/Dialogs;
.super Ljava/lang/Object;
.source "Dialogs.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/getcapacitor/Dialogs$OnResultListener;,
        Lcom/getcapacitor/Dialogs$OnSelectListener;,
        Lcom/getcapacitor/Dialogs$OnCancelListener;
    }
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 19
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static actions(Landroidx/appcompat/app/AppCompatActivity;[Ljava/lang/Object;Lcom/getcapacitor/Dialogs$OnSelectListener;Lcom/getcapacitor/Dialogs$OnCancelListener;)V
    .locals 1

    .line 207
    :try_start_0
    new-instance v0, Lcom/getcapacitor/JSArray;

    invoke-direct {v0, p1}, Lcom/getcapacitor/JSArray;-><init>(Ljava/lang/Object;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 212
    new-instance p1, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

    invoke-direct {p1}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;-><init>()V

    .line 213
    invoke-virtual {p1, v0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->setOptions(Lcom/getcapacitor/JSArray;)V

    .line 214
    new-instance v0, Lcom/getcapacitor/Dialogs$4;

    invoke-direct {v0, p2, p1}, Lcom/getcapacitor/Dialogs$4;-><init>(Lcom/getcapacitor/Dialogs$OnSelectListener;Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;)V

    invoke-virtual {p1, v0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->setOnSelectedListener(Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;)V

    .line 221
    invoke-virtual {p1, p3}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->setOnCancelListener(Lcom/getcapacitor/Dialogs$OnCancelListener;)V

    .line 222
    invoke-virtual {p0}, Landroidx/appcompat/app/AppCompatActivity;->getSupportFragmentManager()Landroidx/fragment/app/FragmentManager;

    move-result-object p0

    const-string p2, "capacitorModalsActionSheet"

    invoke-virtual {p1, p0, p2}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->show(Landroidx/fragment/app/FragmentManager;Ljava/lang/String;)V

    :catch_0
    return-void
.end method

.method public static alert(Landroid/content/Context;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V
    .locals 1

    const/4 v0, 0x0

    .line 38
    invoke-static {p0, p1, v0, v0, p2}, Lcom/getcapacitor/Dialogs;->alert(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V

    return-void
.end method

.method public static alert(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V
    .locals 6

    if-nez p2, :cond_0

    .line 55
    const-string p2, "Alert"

    :cond_0
    move-object v3, p2

    if-nez p3, :cond_1

    .line 56
    const-string p3, "OK"

    :cond_1
    move-object v4, p3

    .line 58
    new-instance p2, Landroid/os/Handler;

    invoke-static {}, Landroid/os/Looper;->getMainLooper()Landroid/os/Looper;

    move-result-object p3

    invoke-direct {p2, p3}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    new-instance p3, Lcom/getcapacitor/Dialogs$1;

    move-object v0, p3

    move-object v1, p0

    move-object v2, p1

    move-object v5, p4

    invoke-direct/range {v0 .. v5}, Lcom/getcapacitor/Dialogs$1;-><init>(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V

    invoke-virtual {p2, p3}, Landroid/os/Handler;->post(Ljava/lang/Runnable;)Z

    return-void
.end method

.method public static confirm(Landroid/content/Context;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V
    .locals 6

    const/4 v3, 0x0

    const/4 v4, 0x0

    const/4 v2, 0x0

    move-object v0, p0

    move-object v1, p1

    move-object v5, p2

    .line 91
    invoke-static/range {v0 .. v5}, Lcom/getcapacitor/Dialogs;->confirm(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V

    return-void
.end method

.method public static confirm(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V
    .locals 7

    if-nez p2, :cond_0

    .line 100
    const-string p2, "Confirm"

    :cond_0
    move-object v3, p2

    if-nez p3, :cond_1

    .line 101
    const-string p3, "OK"

    :cond_1
    move-object v4, p3

    if-nez p4, :cond_2

    .line 102
    const-string p4, "Cancel"

    :cond_2
    move-object v6, p4

    .line 104
    new-instance p2, Landroid/os/Handler;

    invoke-static {}, Landroid/os/Looper;->getMainLooper()Landroid/os/Looper;

    move-result-object p3

    invoke-direct {p2, p3}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    new-instance p3, Lcom/getcapacitor/Dialogs$2;

    move-object v0, p3

    move-object v1, p0

    move-object v2, p1

    move-object v5, p5

    invoke-direct/range {v0 .. v6}, Lcom/getcapacitor/Dialogs$2;-><init>(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;Ljava/lang/String;)V

    invoke-virtual {p2, p3}, Landroid/os/Handler;->post(Ljava/lang/Runnable;)Z

    return-void
.end method

.method public static prompt(Landroid/content/Context;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V
    .locals 8

    const/4 v5, 0x0

    const/4 v6, 0x0

    const/4 v2, 0x0

    const/4 v3, 0x0

    const/4 v4, 0x0

    move-object v0, p0

    move-object v1, p1

    move-object v7, p2

    .line 143
    invoke-static/range {v0 .. v7}, Lcom/getcapacitor/Dialogs;->prompt(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V

    return-void
.end method

.method public static prompt(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V
    .locals 11

    if-nez p2, :cond_0

    .line 154
    const-string v0, "Prompt"

    move-object v6, v0

    goto :goto_0

    :cond_0
    move-object v6, p2

    :goto_0
    if-nez p3, :cond_1

    .line 155
    const-string v0, "OK"

    move-object v7, v0

    goto :goto_1

    :cond_1
    move-object v7, p3

    :goto_1
    if-nez p4, :cond_2

    .line 156
    const-string v0, "Cancel"

    move-object v9, v0

    goto :goto_2

    :cond_2
    move-object v9, p4

    .line 157
    :goto_2
    const-string v0, ""

    if-nez p5, :cond_3

    move-object v3, v0

    goto :goto_3

    :cond_3
    move-object/from16 v3, p5

    :goto_3
    if-nez p6, :cond_4

    move-object v4, v0

    goto :goto_4

    :cond_4
    move-object/from16 v4, p6

    .line 160
    :goto_4
    new-instance v0, Landroid/os/Handler;

    invoke-static {}, Landroid/os/Looper;->getMainLooper()Landroid/os/Looper;

    move-result-object v1

    invoke-direct {v0, v1}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    new-instance v10, Lcom/getcapacitor/Dialogs$3;

    move-object v1, v10

    move-object v2, p0

    move-object v5, p1

    move-object/from16 v8, p7

    invoke-direct/range {v1 .. v9}, Lcom/getcapacitor/Dialogs$3;-><init>(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;Ljava/lang/String;)V

    invoke-virtual {v0, v10}, Landroid/os/Handler;->post(Ljava/lang/Runnable;)Z

    return-void
.end method
