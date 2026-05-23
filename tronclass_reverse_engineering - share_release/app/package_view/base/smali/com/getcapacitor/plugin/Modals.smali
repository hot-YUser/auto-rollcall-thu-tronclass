.class public Lcom/getcapacitor/plugin/Modals;
.super Lcom/getcapacitor/Plugin;
.source "Modals.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 18
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method


# virtual methods
.method public alert(Lcom/getcapacitor/PluginCall;)V
    .locals 5
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 22
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Modals;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    .line 23
    const-string v1, "title"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 24
    const-string v2, "message"

    invoke-virtual {p1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    .line 25
    const-string v3, "buttonTitle"

    const-string v4, "OK"

    invoke-virtual {p1, v3, v4}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    if-eqz v1, :cond_2

    if-nez v2, :cond_0

    goto :goto_0

    .line 32
    :cond_0
    invoke-virtual {v0}, Landroid/app/Activity;->isFinishing()Z

    move-result v4

    if-eqz v4, :cond_1

    .line 33
    const-string v0, "App is finishing"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 37
    :cond_1
    new-instance v4, Lcom/getcapacitor/plugin/Modals$1;

    invoke-direct {v4, p0, p1}, Lcom/getcapacitor/plugin/Modals$1;-><init>(Lcom/getcapacitor/plugin/Modals;Lcom/getcapacitor/PluginCall;)V

    invoke-static {v0, v2, v1, v3, v4}, Lcom/getcapacitor/Dialogs;->alert(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V

    return-void

    .line 28
    :cond_2
    :goto_0
    const-string v0, "Please provide a title or message for the alert"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void
.end method

.method public confirm(Lcom/getcapacitor/PluginCall;)V
    .locals 6
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 47
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Modals;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    .line 48
    const-string v1, "title"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    .line 49
    const-string v1, "message"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 50
    const-string v3, "okButtonTitle"

    const-string v4, "OK"

    invoke-virtual {p1, v3, v4}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    .line 51
    const-string v4, "cancelButtonTitle"

    const-string v5, "Cancel"

    invoke-virtual {p1, v4, v5}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    if-eqz v2, :cond_2

    if-nez v1, :cond_0

    goto :goto_0

    .line 58
    :cond_0
    invoke-virtual {v0}, Landroid/app/Activity;->isFinishing()Z

    move-result v5

    if-eqz v5, :cond_1

    .line 59
    const-string v0, "App is finishing"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 63
    :cond_1
    new-instance v5, Lcom/getcapacitor/plugin/Modals$2;

    invoke-direct {v5, p0, p1}, Lcom/getcapacitor/plugin/Modals$2;-><init>(Lcom/getcapacitor/plugin/Modals;Lcom/getcapacitor/PluginCall;)V

    invoke-static/range {v0 .. v5}, Lcom/getcapacitor/Dialogs;->confirm(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V

    return-void

    .line 54
    :cond_2
    :goto_0
    const-string v0, "Please provide a title or message for the alert"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void
.end method

.method public prompt(Lcom/getcapacitor/PluginCall;)V
    .locals 8
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 75
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Modals;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    .line 76
    const-string v1, "title"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    .line 77
    const-string v1, "message"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 78
    const-string v3, "okButtonTitle"

    const-string v4, "OK"

    invoke-virtual {p1, v3, v4}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    .line 79
    const-string v4, "cancelButtonTitle"

    const-string v5, "Cancel"

    invoke-virtual {p1, v4, v5}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    .line 80
    const-string v5, "inputPlaceholder"

    const-string v6, ""

    invoke-virtual {p1, v5, v6}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v5

    .line 81
    const-string v7, "inputText"

    invoke-virtual {p1, v7, v6}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v6

    if-eqz v2, :cond_2

    if-nez v1, :cond_0

    goto :goto_0

    .line 88
    :cond_0
    invoke-virtual {v0}, Landroid/app/Activity;->isFinishing()Z

    move-result v7

    if-eqz v7, :cond_1

    .line 89
    const-string v0, "App is finishing"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 93
    :cond_1
    new-instance v7, Lcom/getcapacitor/plugin/Modals$3;

    invoke-direct {v7, p0, p1}, Lcom/getcapacitor/plugin/Modals$3;-><init>(Lcom/getcapacitor/plugin/Modals;Lcom/getcapacitor/PluginCall;)V

    invoke-static/range {v0 .. v7}, Lcom/getcapacitor/Dialogs;->prompt(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/Dialogs$OnResultListener;)V

    return-void

    .line 84
    :cond_2
    :goto_0
    const-string v0, "Please provide a title or message for the alert"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void
.end method

.method public showActions(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 107
    const-string v0, "title"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 108
    const-string v1, "message"

    const-string v2, ""

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    .line 109
    const-string v1, "options"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getArray(Ljava/lang/String;)Lcom/getcapacitor/JSArray;

    move-result-object v1

    if-nez v0, :cond_0

    .line 112
    const-string v0, "Must supply a title"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    :cond_0
    if-nez v1, :cond_1

    .line 117
    const-string v0, "Must supply options"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 121
    :cond_1
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Modals;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v2

    invoke-virtual {v2}, Landroidx/appcompat/app/AppCompatActivity;->isFinishing()Z

    move-result v2

    if-eqz v2, :cond_2

    .line 122
    const-string v0, "App is finishing"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 126
    :cond_2
    new-instance v2, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;

    invoke-direct {v2}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;-><init>()V

    .line 127
    invoke-virtual {v2, v0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->setTitle(Ljava/lang/String;)V

    .line 128
    invoke-virtual {v2, v1}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->setOptions(Lcom/getcapacitor/JSArray;)V

    const/4 v0, 0x0

    .line 129
    invoke-virtual {v2, v0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->setCancelable(Z)V

    .line 130
    new-instance v0, Lcom/getcapacitor/plugin/Modals$4;

    invoke-direct {v0, p0, p1, v2}, Lcom/getcapacitor/plugin/Modals$4;-><init>(Lcom/getcapacitor/plugin/Modals;Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;)V

    invoke-virtual {v2, v0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->setOnSelectedListener(Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;)V

    .line 139
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Modals;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/appcompat/app/AppCompatActivity;->getSupportFragmentManager()Landroidx/fragment/app/FragmentManager;

    move-result-object p1

    const-string v0, "capacitorModalsActionSheet"

    invoke-virtual {v2, p1, v0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->show(Landroidx/fragment/app/FragmentManager;Ljava/lang/String;)V

    return-void
.end method
