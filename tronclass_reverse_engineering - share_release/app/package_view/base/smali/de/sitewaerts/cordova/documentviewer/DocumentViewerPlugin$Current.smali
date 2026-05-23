.class final Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;
.super Ljava/lang/Object;
.source "DocumentViewerPlugin.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x12
    name = "Current"
.end annotation


# instance fields
.field private final activity:Ljava/lang/String;

.field private final packageId:Ljava/lang/String;

.field final synthetic this$0:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;

.field private final url:Ljava/lang/String;


# direct methods
.method public constructor <init>(Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 159
    iput-object p1, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;->this$0:Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 160
    iput-object p2, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;->packageId:Ljava/lang/String;

    .line 161
    iput-object p3, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;->activity:Ljava/lang/String;

    .line 162
    iput-object p4, p0, Lde/sitewaerts/cordova/documentviewer/DocumentViewerPlugin$Current;->url:Ljava/lang/String;

    return-void
.end method
