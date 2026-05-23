.class Lcom/getcapacitor/plugin/Keyboard$1;
.super Ljava/lang/Object;
.source "Keyboard.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Keyboard;->load()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/Keyboard;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Keyboard;)V
    .locals 0

    .line 36
    iput-object p1, p0, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 41
    new-instance v0, Landroid/util/DisplayMetrics;

    invoke-direct {v0}, Landroid/util/DisplayMetrics;-><init>()V

    .line 42
    iget-object v1, p0, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-virtual {v1}, Lcom/getcapacitor/plugin/Keyboard;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    invoke-virtual {v1}, Landroidx/appcompat/app/AppCompatActivity;->getWindowManager()Landroid/view/WindowManager;

    move-result-object v1

    invoke-interface {v1}, Landroid/view/WindowManager;->getDefaultDisplay()Landroid/view/Display;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/view/Display;->getMetrics(Landroid/util/DisplayMetrics;)V

    .line 43
    iget v0, v0, Landroid/util/DisplayMetrics;->density:F

    .line 46
    iget-object v1, p0, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-virtual {v1}, Lcom/getcapacitor/plugin/Keyboard;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v2

    invoke-virtual {v2}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v2

    invoke-virtual {v2}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v2

    const v3, 0x1020002

    invoke-virtual {v2, v3}, Landroid/view/View;->findViewById(I)Landroid/view/View;

    move-result-object v2

    invoke-virtual {v2}, Landroid/view/View;->getRootView()Landroid/view/View;

    move-result-object v2

    invoke-static {v1, v2}, Lcom/getcapacitor/plugin/Keyboard;->access$002(Lcom/getcapacitor/plugin/Keyboard;Landroid/view/View;)Landroid/view/View;

    .line 47
    iget-object v1, p0, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    new-instance v2, Lcom/getcapacitor/plugin/Keyboard$1$1;

    invoke-direct {v2, p0, v0}, Lcom/getcapacitor/plugin/Keyboard$1$1;-><init>(Lcom/getcapacitor/plugin/Keyboard$1;F)V

    invoke-static {v1, v2}, Lcom/getcapacitor/plugin/Keyboard;->access$102(Lcom/getcapacitor/plugin/Keyboard;Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;)Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;

    .line 96
    iget-object v0, p0, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v0}, Lcom/getcapacitor/plugin/Keyboard;->access$000(Lcom/getcapacitor/plugin/Keyboard;)Landroid/view/View;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/View;->getViewTreeObserver()Landroid/view/ViewTreeObserver;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/Keyboard$1;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-static {v1}, Lcom/getcapacitor/plugin/Keyboard;->access$100(Lcom/getcapacitor/plugin/Keyboard;)Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/view/ViewTreeObserver;->addOnGlobalLayoutListener(Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;)V

    return-void
.end method
