.class public Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;
.super Lcom/google/android/material/bottomsheet/BottomSheetDialogFragment;
.source "ModalsBottomSheetDialogFragment.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;
    }
.end annotation


# instance fields
.field private cancelListener:Lcom/getcapacitor/Dialogs$OnCancelListener;

.field private listener:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;

.field private mBottomSheetBehaviorCallback:Lcom/google/android/material/bottomsheet/BottomSheetBehavior$BottomSheetCallback;

.field private options:Lcom/getcapacitor/JSArray;

.field private title:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 27
    invoke-direct {p0}, Lcom/google/android/material/bottomsheet/BottomSheetDialogFragment;-><init>()V

    .line 60
    new-instance v0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$1;

    invoke-direct {v0, p0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$1;-><init>(Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;)V

    iput-object v0, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->mBottomSheetBehaviorCallback:Lcom/google/android/material/bottomsheet/BottomSheetBehavior$BottomSheetCallback;

    return-void
.end method

.method static synthetic access$000(Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;)Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;
    .locals 0

    .line 27
    iget-object p0, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->listener:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;

    return-object p0
.end method


# virtual methods
.method public onCancel(Landroid/content/DialogInterface;)V
    .locals 0

    .line 35
    invoke-super {p0, p1}, Lcom/google/android/material/bottomsheet/BottomSheetDialogFragment;->onCancel(Landroid/content/DialogInterface;)V

    .line 36
    iget-object p1, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->cancelListener:Lcom/getcapacitor/Dialogs$OnCancelListener;

    invoke-interface {p1}, Lcom/getcapacitor/Dialogs$OnCancelListener;->onCancel()V

    return-void
.end method

.method public setOnCancelListener(Lcom/getcapacitor/Dialogs$OnCancelListener;)V
    .locals 0

    .line 57
    iput-object p1, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->cancelListener:Lcom/getcapacitor/Dialogs$OnCancelListener;

    return-void
.end method

.method public setOnSelectedListener(Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;)V
    .locals 0

    .line 53
    iput-object p1, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->listener:Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$OnSelectedListener;

    return-void
.end method

.method public setOptions(Lcom/getcapacitor/JSArray;)V
    .locals 0

    .line 49
    iput-object p1, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->options:Lcom/getcapacitor/JSArray;

    return-void
.end method

.method public setTitle(Ljava/lang/String;)V
    .locals 0

    .line 46
    iput-object p1, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->title:Ljava/lang/String;

    return-void
.end method

.method public setupDialog(Landroid/app/Dialog;I)V
    .locals 7

    .line 77
    invoke-super {p0, p1, p2}, Lcom/google/android/material/bottomsheet/BottomSheetDialogFragment;->setupDialog(Landroid/app/Dialog;I)V

    .line 79
    iget-object p2, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->options:Lcom/getcapacitor/JSArray;

    if-nez p2, :cond_0

    return-void

    .line 83
    :cond_0
    invoke-virtual {p1}, Landroid/app/Dialog;->getWindow()Landroid/view/Window;

    .line 85
    invoke-virtual {p0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->getResources()Landroid/content/res/Resources;

    move-result-object p2

    invoke-virtual {p2}, Landroid/content/res/Resources;->getDisplayMetrics()Landroid/util/DisplayMetrics;

    move-result-object p2

    iget p2, p2, Landroid/util/DisplayMetrics;->density:F

    const/high16 v0, 0x41800000    # 16.0f

    mul-float/2addr v0, p2

    const/high16 v1, 0x3f000000    # 0.5f

    add-float/2addr v0, v1

    float-to-int v0, v0

    const/high16 v2, 0x41400000    # 12.0f

    mul-float/2addr v2, p2

    add-float/2addr v2, v1

    float-to-int v2, v2

    const/high16 v3, 0x41000000    # 8.0f

    mul-float/2addr p2, v3

    add-float/2addr p2, v1

    float-to-int p2, p2

    .line 94
    new-instance v1, Landroidx/coordinatorlayout/widget/CoordinatorLayout;

    invoke-virtual {p0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->getContext()Landroid/content/Context;

    move-result-object v3

    invoke-direct {v1, v3}, Landroidx/coordinatorlayout/widget/CoordinatorLayout;-><init>(Landroid/content/Context;)V

    .line 96
    new-instance v3, Landroid/widget/LinearLayout;

    invoke-virtual {p0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->getContext()Landroid/content/Context;

    move-result-object v4

    invoke-direct {v3, v4}, Landroid/widget/LinearLayout;-><init>(Landroid/content/Context;)V

    const/4 v4, 0x1

    .line 97
    invoke-virtual {v3, v4}, Landroid/widget/LinearLayout;->setOrientation(I)V

    .line 98
    invoke-virtual {v3, v0, v0, v0, v0}, Landroid/widget/LinearLayout;->setPadding(IIII)V

    .line 99
    new-instance v0, Landroid/widget/TextView;

    invoke-virtual {p0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->getContext()Landroid/content/Context;

    move-result-object v4

    invoke-direct {v0, v4}, Landroid/widget/TextView;-><init>(Landroid/content/Context;)V

    .line 100
    const-string v4, "#757575"

    invoke-static {v4}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result v4

    invoke-virtual {v0, v4}, Landroid/widget/TextView;->setTextColor(I)V

    .line 101
    invoke-virtual {v0, p2, p2, p2, p2}, Landroid/widget/TextView;->setPadding(IIII)V

    .line 102
    iget-object p2, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->title:Ljava/lang/String;

    invoke-virtual {v0, p2}, Landroid/widget/TextView;->setText(Ljava/lang/CharSequence;)V

    .line 103
    invoke-virtual {v3, v0}, Landroid/widget/LinearLayout;->addView(Landroid/view/View;)V

    .line 105
    :try_start_0
    iget-object p2, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->options:Lcom/getcapacitor/JSArray;

    invoke-virtual {p2}, Lcom/getcapacitor/JSArray;->toList()Ljava/util/List;

    move-result-object p2

    const/4 v0, 0x0

    .line 106
    :goto_0
    invoke-interface {p2}, Ljava/util/List;->size()I

    move-result v4

    if-ge v0, v4, :cond_1

    .line 108
    invoke-interface {p2, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Lorg/json/JSONObject;

    invoke-static {v4}, Lcom/getcapacitor/JSObject;->fromJSONObject(Lorg/json/JSONObject;)Lcom/getcapacitor/JSObject;

    move-result-object v4

    .line 109
    const-string v5, "style"

    const-string v6, "DEFAULT"

    invoke-virtual {v4, v5, v6}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    .line 110
    const-string v5, "title"

    const-string v6, ""

    invoke-virtual {v4, v5, v6}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    .line 112
    new-instance v5, Landroid/widget/TextView;

    invoke-virtual {p0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->getContext()Landroid/content/Context;

    move-result-object v6

    invoke-direct {v5, v6}, Landroid/widget/TextView;-><init>(Landroid/content/Context;)V

    .line 113
    const-string v6, "#000000"

    invoke-static {v6}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result v6

    invoke-virtual {v5, v6}, Landroid/widget/TextView;->setTextColor(I)V

    .line 114
    invoke-virtual {v5, v2, v2, v2, v2}, Landroid/widget/TextView;->setPadding(IIII)V

    .line 116
    invoke-virtual {v5, v4}, Landroid/widget/TextView;->setText(Ljava/lang/CharSequence;)V

    .line 117
    new-instance v4, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$2;

    invoke-direct {v4, p0, v0}, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment$2;-><init>(Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;I)V

    invoke-virtual {v5, v4}, Landroid/widget/TextView;->setOnClickListener(Landroid/view/View$OnClickListener;)V

    .line 127
    invoke-virtual {v3, v5}, Landroid/widget/LinearLayout;->addView(Landroid/view/View;)V

    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    .line 130
    :cond_1
    invoke-virtual {v3}, Landroid/widget/LinearLayout;->getRootView()Landroid/view/View;

    move-result-object p2

    invoke-virtual {v1, p2}, Landroidx/coordinatorlayout/widget/CoordinatorLayout;->addView(Landroid/view/View;)V

    .line 132
    invoke-virtual {v1}, Landroidx/coordinatorlayout/widget/CoordinatorLayout;->getRootView()Landroid/view/View;

    move-result-object p2

    invoke-virtual {p1, p2}, Landroid/app/Dialog;->setContentView(Landroid/view/View;)V

    .line 136
    invoke-virtual {v1}, Landroidx/coordinatorlayout/widget/CoordinatorLayout;->getParent()Landroid/view/ViewParent;

    move-result-object p1

    check-cast p1, Landroid/view/View;

    invoke-virtual {p1}, Landroid/view/View;->getLayoutParams()Landroid/view/ViewGroup$LayoutParams;

    move-result-object p1

    check-cast p1, Landroidx/coordinatorlayout/widget/CoordinatorLayout$LayoutParams;

    .line 137
    invoke-virtual {p1}, Landroidx/coordinatorlayout/widget/CoordinatorLayout$LayoutParams;->getBehavior()Landroidx/coordinatorlayout/widget/CoordinatorLayout$Behavior;

    move-result-object p1

    if-eqz p1, :cond_2

    .line 139
    instance-of p2, p1, Lcom/google/android/material/bottomsheet/BottomSheetBehavior;

    if-eqz p2, :cond_2

    .line 140
    check-cast p1, Lcom/google/android/material/bottomsheet/BottomSheetBehavior;

    iget-object p2, p0, Lcom/getcapacitor/ui/ModalsBottomSheetDialogFragment;->mBottomSheetBehaviorCallback:Lcom/google/android/material/bottomsheet/BottomSheetBehavior$BottomSheetCallback;

    invoke-virtual {p1, p2}, Lcom/google/android/material/bottomsheet/BottomSheetBehavior;->setBottomSheetCallback(Lcom/google/android/material/bottomsheet/BottomSheetBehavior$BottomSheetCallback;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception p1

    .line 143
    const-string p2, "JSON error processing an option for showActions"

    invoke-static {p2, p1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V

    :cond_2
    :goto_1
    return-void
.end method
