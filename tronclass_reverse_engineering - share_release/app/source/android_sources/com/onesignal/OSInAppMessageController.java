package com.onesignal;

import android.app.AlertDialog;
import android.content.DialogInterface;
import com.getcapacitor.plugin.notification.LocalNotificationManager;
import com.onesignal.OSDynamicTriggerController;
import com.onesignal.OSInAppMessageAction;
import com.onesignal.OSInAppMessageRepository;
import com.onesignal.OSSystemConditionController;
import com.onesignal.OneSignal;
import com.onesignal.language.LanguageContext;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class OSInAppMessageController extends OSBackgroundManager implements OSDynamicTriggerController.OSDynamicTriggerControllerObserver, OSSystemConditionController.OSSystemConditionObserver {
    public static final String IN_APP_MESSAGES_JSON_KEY = "in_app_messages";
    private static final String LIQUID_TAG_SCRIPT = "\n\n<script>\n    setPlayerTags(%s);\n</script>";
    private static final String OS_IAM_DB_ACCESS = "OS_IAM_DB_ACCESS";
    private final Set<String> clickedClickIds;
    private final Set<String> dismissedMessages;
    private final Set<String> impressionedMessages;
    private OSInAppMessageLifecycleHandler inAppMessageLifecycleHandler;
    private OSInAppMessageRepository inAppMessageRepository;
    private final LanguageContext languageContext;
    Date lastTimeInAppDismissed;
    private final OSLogger logger;
    private final ArrayList<OSInAppMessageInternal> messageDisplayQueue;
    private OSSystemConditionController systemConditionController;
    private final OSTaskController taskController;
    OSTriggerController triggerController;
    private final Set<String> viewedPageIds;
    private static final Object LOCK = new Object();
    private static ArrayList<String> PREFERRED_VARIANT_ORDER = new ArrayList<String>() { // from class: com.onesignal.OSInAppMessageController.1
        {
            add("android");
            add("app");
            add("all");
        }
    };
    private List<OSInAppMessageInternal> redisplayedInAppMessages = null;
    private OSInAppMessagePrompt currentPrompt = null;
    private boolean inAppMessagingEnabled = true;
    private boolean inAppMessageShowing = false;
    private String userTagsString = "";
    private OSInAppMessageContent pendingMessageContent = null;
    private boolean waitForTags = false;
    private ArrayList<OSInAppMessageInternal> messages = new ArrayList<>();

    protected OSInAppMessageController(OneSignalDbHelper oneSignalDbHelper, OSTaskController oSTaskController, OSLogger oSLogger, OSSharedPreferences oSSharedPreferences, LanguageContext languageContext) {
        this.lastTimeInAppDismissed = null;
        this.taskController = oSTaskController;
        Set<String> setNewConcurrentSet = OSUtils.newConcurrentSet();
        this.dismissedMessages = setNewConcurrentSet;
        this.messageDisplayQueue = new ArrayList<>();
        Set<String> setNewConcurrentSet2 = OSUtils.newConcurrentSet();
        this.impressionedMessages = setNewConcurrentSet2;
        Set<String> setNewConcurrentSet3 = OSUtils.newConcurrentSet();
        this.viewedPageIds = setNewConcurrentSet3;
        Set<String> setNewConcurrentSet4 = OSUtils.newConcurrentSet();
        this.clickedClickIds = setNewConcurrentSet4;
        this.triggerController = new OSTriggerController(this);
        this.systemConditionController = new OSSystemConditionController(this);
        this.languageContext = languageContext;
        this.logger = oSLogger;
        OSInAppMessageRepository inAppMessageRepository = getInAppMessageRepository(oneSignalDbHelper, oSLogger, oSSharedPreferences);
        this.inAppMessageRepository = inAppMessageRepository;
        Set<String> dismissedMessagesId = inAppMessageRepository.getDismissedMessagesId();
        if (dismissedMessagesId != null) {
            setNewConcurrentSet.addAll(dismissedMessagesId);
        }
        Set<String> impressionesMessagesId = this.inAppMessageRepository.getImpressionesMessagesId();
        if (impressionesMessagesId != null) {
            setNewConcurrentSet2.addAll(impressionesMessagesId);
        }
        Set<String> viewPageImpressionedIds = this.inAppMessageRepository.getViewPageImpressionedIds();
        if (viewPageImpressionedIds != null) {
            setNewConcurrentSet3.addAll(viewPageImpressionedIds);
        }
        Set<String> clickedMessagesId = this.inAppMessageRepository.getClickedMessagesId();
        if (clickedMessagesId != null) {
            setNewConcurrentSet4.addAll(clickedMessagesId);
        }
        Date lastTimeInAppDismissed = this.inAppMessageRepository.getLastTimeInAppDismissed();
        if (lastTimeInAppDismissed != null) {
            this.lastTimeInAppDismissed = lastTimeInAppDismissed;
        }
        initRedisplayData();
    }

    OSInAppMessageRepository getInAppMessageRepository(OneSignalDbHelper oneSignalDbHelper, OSLogger oSLogger, OSSharedPreferences oSSharedPreferences) {
        if (this.inAppMessageRepository == null) {
            this.inAppMessageRepository = new OSInAppMessageRepository(oneSignalDbHelper, oSLogger, oSSharedPreferences);
        }
        return this.inAppMessageRepository;
    }

    protected void initRedisplayData() {
        this.taskController.addTaskToQueue(new BackgroundRunnable() { // from class: com.onesignal.OSInAppMessageController.2
            @Override // com.onesignal.BackgroundRunnable, java.lang.Runnable
            public void run() {
                super.run();
                synchronized (OSInAppMessageController.LOCK) {
                    OSInAppMessageController oSInAppMessageController = OSInAppMessageController.this;
                    oSInAppMessageController.redisplayedInAppMessages = oSInAppMessageController.inAppMessageRepository.getCachedInAppMessages();
                    OSInAppMessageController.this.logger.debug("Retrieved IAMs from DB redisplayedInAppMessages: " + OSInAppMessageController.this.redisplayedInAppMessages.toString());
                }
            }
        });
        this.taskController.startPendingTasks();
    }

    boolean shouldRunTaskThroughQueue() {
        boolean z;
        synchronized (LOCK) {
            z = this.redisplayedInAppMessages == null && this.taskController.shouldRunTaskThroughQueue();
        }
        return z;
    }

    void executeRedisplayIAMDataDependantTask(Runnable runnable) {
        synchronized (LOCK) {
            if (shouldRunTaskThroughQueue()) {
                this.logger.debug("Delaying task due to redisplay data not retrieved yet");
                this.taskController.addTaskToQueue(runnable);
            } else {
                runnable.run();
            }
        }
    }

    void resetSessionLaunchTime() {
        OSDynamicTriggerController.resetSessionLaunchTime();
    }

    void initWithCachedInAppMessages() {
        if (!this.messages.isEmpty()) {
            this.logger.debug("initWithCachedInAppMessages with already in memory messages: " + this.messages);
            return;
        }
        String savedIAMs = this.inAppMessageRepository.getSavedIAMs();
        this.logger.debug("initWithCachedInAppMessages: " + savedIAMs);
        if (savedIAMs == null || savedIAMs.isEmpty()) {
            return;
        }
        synchronized (LOCK) {
            try {
            } catch (JSONException e) {
                e.printStackTrace();
            }
            if (this.messages.isEmpty()) {
                processInAppMessageJson(new JSONArray(savedIAMs));
            }
        }
    }

    void receivedInAppMessageJson(final JSONArray jSONArray) throws JSONException {
        this.inAppMessageRepository.saveIAMs(jSONArray.toString());
        executeRedisplayIAMDataDependantTask(new Runnable() { // from class: com.onesignal.OSInAppMessageController.3
            @Override // java.lang.Runnable
            public void run() {
                OSInAppMessageController.this.resetRedisplayMessagesBySession();
                try {
                    OSInAppMessageController.this.processInAppMessageJson(jSONArray);
                } catch (JSONException e) {
                    OSInAppMessageController.this.logger.error("ERROR processing InAppMessageJson JSON Response.", e);
                }
            }
        });
    }
    public void resetRedisplayMessagesBySession() {
        Iterator<OSInAppMessageInternal> it = this.redisplayedInAppMessages.iterator();
        while (it.hasNext()) {
            it.next().setDisplayedInSession(false);
        }
    }
    public void processInAppMessageJson(JSONArray jSONArray) throws JSONException {
        synchronized (LOCK) {
            ArrayList<OSInAppMessageInternal> arrayList = new ArrayList<>();
            for (int i = 0; i < jSONArray.length(); i++) {
                OSInAppMessageInternal oSInAppMessageInternal = new OSInAppMessageInternal(jSONArray.getJSONObject(i));
                if (oSInAppMessageInternal.messageId != null) {
                    arrayList.add(oSInAppMessageInternal);
                }
            }
            this.messages = arrayList;
        }
        evaluateInAppMessages();
    }
    public void evaluateInAppMessages() {
        this.logger.debug("Starting evaluateInAppMessages");
        if (shouldRunTaskThroughQueue()) {
            this.taskController.addTaskToQueue(new Runnable() { // from class: com.onesignal.OSInAppMessageController.4
                @Override // java.lang.Runnable
                public void run() {
                    OSInAppMessageController.this.logger.debug("Delaying evaluateInAppMessages due to redisplay data not retrieved yet");
                    OSInAppMessageController.this.evaluateInAppMessages();
                }
            });
            return;
        }
        for (OSInAppMessageInternal oSInAppMessageInternal : this.messages) {
            if (this.triggerController.evaluateMessageTriggers(oSInAppMessageInternal)) {
                setDataForRedisplay(oSInAppMessageInternal);
                if (!this.dismissedMessages.contains(oSInAppMessageInternal.messageId) && !oSInAppMessageInternal.isFinished()) {
                    queueMessageForDisplay(oSInAppMessageInternal);
                }
            }
        }
    }

    private String variantIdForMessage(OSInAppMessageInternal oSInAppMessageInternal) {
        String language = this.languageContext.getLanguage();
        for (String str : PREFERRED_VARIANT_ORDER) {
            if (oSInAppMessageInternal.variants.containsKey(str)) {
                HashMap<String, String> map = oSInAppMessageInternal.variants.get(str);
                if (map.containsKey(language)) {
                    return map.get(language);
                }
                return map.get(LocalNotificationManager.DEFAULT_NOTIFICATION_CHANNEL_ID);
            }
        }
        return null;
    }

    void onMessageWasShown(final OSInAppMessageInternal oSInAppMessageInternal) {
        onMessageDidDisplay(oSInAppMessageInternal);
        if (oSInAppMessageInternal.isPreview || this.impressionedMessages.contains(oSInAppMessageInternal.messageId)) {
            return;
        }
        this.impressionedMessages.add(oSInAppMessageInternal.messageId);
        String strVariantIdForMessage = variantIdForMessage(oSInAppMessageInternal);
        if (strVariantIdForMessage == null) {
            return;
        }
        this.inAppMessageRepository.sendIAMImpression(OneSignal.appId, OneSignal.getUserId(), strVariantIdForMessage, new OSUtils().getDeviceType(), oSInAppMessageInternal.messageId, this.impressionedMessages, new OSInAppMessageRepository.OSInAppMessageRequestResponse() { // from class: com.onesignal.OSInAppMessageController.5
            @Override // com.onesignal.OSInAppMessageRepository.OSInAppMessageRequestResponse
            public void onSuccess(String str) {
            }

            @Override // com.onesignal.OSInAppMessageRepository.OSInAppMessageRequestResponse
            public void onFailure(String str) {
                OSInAppMessageController.this.impressionedMessages.remove(oSInAppMessageInternal.messageId);
            }
        });
    }

    void onPageChanged(OSInAppMessageInternal oSInAppMessageInternal, JSONObject jSONObject) {
        OSInAppMessagePage oSInAppMessagePage = new OSInAppMessagePage(jSONObject);
        if (oSInAppMessageInternal.isPreview) {
            return;
        }
        fireRESTCallForPageChange(oSInAppMessageInternal, oSInAppMessagePage);
    }

    void onMessageActionOccurredOnMessage(OSInAppMessageInternal oSInAppMessageInternal, JSONObject jSONObject) throws JSONException {
        OSInAppMessageAction oSInAppMessageAction = new OSInAppMessageAction(jSONObject);
        oSInAppMessageAction.setFirstClick(oSInAppMessageInternal.takeActionAsUnique());
        firePublicClickHandler(oSInAppMessageInternal.messageId, oSInAppMessageAction);
        beginProcessingPrompts(oSInAppMessageInternal, oSInAppMessageAction.getPrompts());
        fireClickAction(oSInAppMessageAction);
        fireRESTCallForClick(oSInAppMessageInternal, oSInAppMessageAction);
        fireTagCallForClick(oSInAppMessageAction);
        fireOutcomesForClick(oSInAppMessageInternal.messageId, oSInAppMessageAction.getOutcomes());
    }

    void onMessageActionOccurredOnPreview(OSInAppMessageInternal oSInAppMessageInternal, JSONObject jSONObject) throws JSONException {
        OSInAppMessageAction oSInAppMessageAction = new OSInAppMessageAction(jSONObject);
        oSInAppMessageAction.setFirstClick(oSInAppMessageInternal.takeActionAsUnique());
        firePublicClickHandler(oSInAppMessageInternal.messageId, oSInAppMessageAction);
        beginProcessingPrompts(oSInAppMessageInternal, oSInAppMessageAction.getPrompts());
        fireClickAction(oSInAppMessageAction);
        logInAppMessagePreviewActions(oSInAppMessageAction);
    }

    void setInAppMessageLifecycleHandler(OSInAppMessageLifecycleHandler oSInAppMessageLifecycleHandler) {
        this.inAppMessageLifecycleHandler = oSInAppMessageLifecycleHandler;
    }

    void onMessageWillDisplay(OSInAppMessageInternal oSInAppMessageInternal) {
        OSInAppMessageLifecycleHandler oSInAppMessageLifecycleHandler = this.inAppMessageLifecycleHandler;
        if (oSInAppMessageLifecycleHandler == null) {
            this.logger.verbose("OSInAppMessageController onMessageWillDisplay: inAppMessageLifecycleHandler is null");
        } else {
            oSInAppMessageLifecycleHandler.onWillDisplayInAppMessage(oSInAppMessageInternal);
        }
    }

    void onMessageDidDisplay(OSInAppMessageInternal oSInAppMessageInternal) {
        OSInAppMessageLifecycleHandler oSInAppMessageLifecycleHandler = this.inAppMessageLifecycleHandler;
        if (oSInAppMessageLifecycleHandler == null) {
            this.logger.verbose("OSInAppMessageController onMessageDidDisplay: inAppMessageLifecycleHandler is null");
        } else {
            oSInAppMessageLifecycleHandler.onDidDisplayInAppMessage(oSInAppMessageInternal);
        }
    }

    void onMessageWillDismiss(OSInAppMessageInternal oSInAppMessageInternal) {
        OSInAppMessageLifecycleHandler oSInAppMessageLifecycleHandler = this.inAppMessageLifecycleHandler;
        if (oSInAppMessageLifecycleHandler == null) {
            this.logger.verbose("OSInAppMessageController onMessageWillDismiss: inAppMessageLifecycleHandler is null");
        } else {
            oSInAppMessageLifecycleHandler.onWillDismissInAppMessage(oSInAppMessageInternal);
        }
    }

    void onMessageDidDismiss(OSInAppMessageInternal oSInAppMessageInternal) {
        OSInAppMessageLifecycleHandler oSInAppMessageLifecycleHandler = this.inAppMessageLifecycleHandler;
        if (oSInAppMessageLifecycleHandler == null) {
            this.logger.verbose("OSInAppMessageController onMessageDidDismiss: inAppMessageLifecycleHandler is null");
        } else {
            oSInAppMessageLifecycleHandler.onDidDismissInAppMessage(oSInAppMessageInternal);
        }
    }

    private void logInAppMessagePreviewActions(OSInAppMessageAction oSInAppMessageAction) {
        if (oSInAppMessageAction.getTags() != null) {
            this.logger.debug("Tags detected inside of the action click payload, ignoring because action came from IAM preview:: " + oSInAppMessageAction.getTags().toString());
        }
        if (oSInAppMessageAction.getOutcomes().size() > 0) {
            this.logger.debug("Outcomes detected inside of the action click payload, ignoring because action came from IAM preview: " + oSInAppMessageAction.getOutcomes().toString());
        }
    }

    private void beginProcessingPrompts(OSInAppMessageInternal oSInAppMessageInternal, List<OSInAppMessagePrompt> list) {
        if (list.size() > 0) {
            this.logger.debug("IAM showing prompts from IAM: " + oSInAppMessageInternal.toString());
            WebViewManager.dismissCurrentInAppMessage();
            showMultiplePrompts(oSInAppMessageInternal, list);
        }
    }
    public void showMultiplePrompts(final OSInAppMessageInternal oSInAppMessageInternal, final List<OSInAppMessagePrompt> list) {
        Iterator<OSInAppMessagePrompt> it = list.iterator();
        while (true) {
            if (!it.hasNext()) {
                break;
            }
            OSInAppMessagePrompt next = it.next();
            if (!next.hasPrompted()) {
                this.currentPrompt = next;
                break;
            }
        }
        if (this.currentPrompt != null) {
            this.logger.debug("IAM prompt to handle: " + this.currentPrompt.toString());
            this.currentPrompt.setPrompted(true);
            this.currentPrompt.handlePrompt(new OneSignal.OSPromptActionCompletionCallback() { // from class: com.onesignal.OSInAppMessageController.6
                @Override // com.onesignal.OneSignal.OSPromptActionCompletionCallback
                public void onCompleted(OneSignal.PromptActionResult promptActionResult) {
                    OSInAppMessageController.this.currentPrompt = null;
                    OSInAppMessageController.this.logger.debug("IAM prompt to handle finished with result: " + promptActionResult);
                    if (!oSInAppMessageInternal.isPreview || promptActionResult != OneSignal.PromptActionResult.LOCATION_PERMISSIONS_MISSING_MANIFEST) {
                        OSInAppMessageController.this.showMultiplePrompts(oSInAppMessageInternal, list);
                    } else {
                        OSInAppMessageController.this.showAlertDialogMessage(oSInAppMessageInternal, list);
                    }
                }
            });
        } else {
            this.logger.debug("No IAM prompt to handle, dismiss message: " + oSInAppMessageInternal.messageId);
            messageWasDismissed(oSInAppMessageInternal);
        }
    }
    public void showAlertDialogMessage(final OSInAppMessageInternal oSInAppMessageInternal, final List<OSInAppMessagePrompt> list) {
        String string = OneSignal.appContext.getString(R.string.location_permission_missing_title);
        new AlertDialog.Builder(OneSignal.getCurrentActivity()).setTitle(string).setMessage(OneSignal.appContext.getString(R.string.location_permission_missing_message)).setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() { // from class: com.onesignal.OSInAppMessageController.7
            @Override // android.content.DialogInterface.OnClickListener
            public void onClick(DialogInterface dialogInterface, int i) {
                OSInAppMessageController.this.showMultiplePrompts(oSInAppMessageInternal, list);
            }
        }).show();
    }

    private void fireOutcomesForClick(String str, List<OSInAppMessageOutcome> list) {
        OneSignal.getSessionManager().onDirectInfluenceFromIAMClick(str);
        OneSignal.sendClickActionOutcomes(list);
    }

    private void fireTagCallForClick(OSInAppMessageAction oSInAppMessageAction) {
        if (oSInAppMessageAction.getTags() != null) {
            OSInAppMessageTag tags = oSInAppMessageAction.getTags();
            if (tags.getTagsToAdd() != null) {
                OneSignal.sendTags(tags.getTagsToAdd());
            }
            if (tags.getTagsToRemove() != null) {
                OneSignal.deleteTags(tags.getTagsToRemove(), (OneSignal.ChangeTagsUpdateHandler) null);
            }
        }
    }

    private void firePublicClickHandler(final String str, final OSInAppMessageAction oSInAppMessageAction) {
        if (OneSignal.inAppMessageClickHandler == null) {
            return;
        }
        CallbackThreadManager.INSTANCE.runOnPreferred(new Runnable() { // from class: com.onesignal.OSInAppMessageController.8
            @Override // java.lang.Runnable
            public void run() {
                OneSignal.getSessionManager().onDirectInfluenceFromIAMClick(str);
                OneSignal.inAppMessageClickHandler.inAppMessageClicked(oSInAppMessageAction);
            }
        });
    }

    private void fireClickAction(OSInAppMessageAction oSInAppMessageAction) {
        if (oSInAppMessageAction.getClickUrl() == null || oSInAppMessageAction.getClickUrl().isEmpty()) {
            return;
        }
        if (oSInAppMessageAction.getUrlTarget() == OSInAppMessageAction.OSInAppMessageActionUrlType.BROWSER) {
            OSUtils.openURLInBrowser(oSInAppMessageAction.getClickUrl());
        } else if (oSInAppMessageAction.getUrlTarget() == OSInAppMessageAction.OSInAppMessageActionUrlType.IN_APP_WEBVIEW) {
            OneSignalChromeTab.open(oSInAppMessageAction.getClickUrl(), true);
        }
    }

    private void fireRESTCallForPageChange(OSInAppMessageInternal oSInAppMessageInternal, OSInAppMessagePage oSInAppMessagePage) {
        String strVariantIdForMessage = variantIdForMessage(oSInAppMessageInternal);
        if (strVariantIdForMessage == null) {
            return;
        }
        String pageId = oSInAppMessagePage.getPageId();
        final String str = oSInAppMessageInternal.messageId + pageId;
        if (this.viewedPageIds.contains(str)) {
            this.logger.verbose("Already sent page impression for id: " + pageId);
        } else {
            this.viewedPageIds.add(str);
            this.inAppMessageRepository.sendIAMPageImpression(OneSignal.appId, OneSignal.getUserId(), strVariantIdForMessage, new OSUtils().getDeviceType(), oSInAppMessageInternal.messageId, pageId, this.viewedPageIds, new OSInAppMessageRepository.OSInAppMessageRequestResponse() { // from class: com.onesignal.OSInAppMessageController.9
                @Override // com.onesignal.OSInAppMessageRepository.OSInAppMessageRequestResponse
                public void onSuccess(String str2) {
                }

                @Override // com.onesignal.OSInAppMessageRepository.OSInAppMessageRequestResponse
                public void onFailure(String str2) {
                    OSInAppMessageController.this.viewedPageIds.remove(str);
                }
            });
        }
    }

    private void fireRESTCallForClick(final OSInAppMessageInternal oSInAppMessageInternal, OSInAppMessageAction oSInAppMessageAction) {
        String strVariantIdForMessage = variantIdForMessage(oSInAppMessageInternal);
        if (strVariantIdForMessage == null) {
            return;
        }
        final String clickId = oSInAppMessageAction.getClickId();
        if (!(oSInAppMessageInternal.getRedisplayStats().isRedisplayEnabled() && oSInAppMessageInternal.isClickAvailable(clickId)) && this.clickedClickIds.contains(clickId)) {
            return;
        }
        this.clickedClickIds.add(clickId);
        oSInAppMessageInternal.addClickId(clickId);
        this.inAppMessageRepository.sendIAMClick(OneSignal.appId, OneSignal.getUserId(), strVariantIdForMessage, new OSUtils().getDeviceType(), oSInAppMessageInternal.messageId, clickId, oSInAppMessageAction.isFirstClick(), this.clickedClickIds, new OSInAppMessageRepository.OSInAppMessageRequestResponse() { // from class: com.onesignal.OSInAppMessageController.10
            @Override // com.onesignal.OSInAppMessageRepository.OSInAppMessageRequestResponse
            public void onSuccess(String str) {
            }

            @Override // com.onesignal.OSInAppMessageRepository.OSInAppMessageRequestResponse
            public void onFailure(String str) {
                OSInAppMessageController.this.clickedClickIds.remove(clickId);
                oSInAppMessageInternal.removeClickId(clickId);
            }
        });
    }

    private void setDataForRedisplay(OSInAppMessageInternal oSInAppMessageInternal) {
        boolean zContains = this.dismissedMessages.contains(oSInAppMessageInternal.messageId);
        int iIndexOf = this.redisplayedInAppMessages.indexOf(oSInAppMessageInternal);
        if (!zContains || iIndexOf == -1) {
            return;
        }
        OSInAppMessageInternal oSInAppMessageInternal2 = this.redisplayedInAppMessages.get(iIndexOf);
        oSInAppMessageInternal.getRedisplayStats().setDisplayStats(oSInAppMessageInternal2.getRedisplayStats());
        oSInAppMessageInternal.setDisplayedInSession(oSInAppMessageInternal2.isDisplayedInSession());
        boolean zHasMessageTriggerChanged = hasMessageTriggerChanged(oSInAppMessageInternal);
        this.logger.debug("setDataForRedisplay: " + oSInAppMessageInternal.toString() + " triggerHasChanged: " + zHasMessageTriggerChanged);
        if (zHasMessageTriggerChanged && oSInAppMessageInternal.getRedisplayStats().isDelayTimeSatisfied() && oSInAppMessageInternal.getRedisplayStats().shouldDisplayAgain()) {
            this.logger.debug("setDataForRedisplay message available for redisplay: " + oSInAppMessageInternal.messageId);
            this.dismissedMessages.remove(oSInAppMessageInternal.messageId);
            this.impressionedMessages.remove(oSInAppMessageInternal.messageId);
            this.viewedPageIds.clear();
            this.inAppMessageRepository.saveViewPageImpressionedIds(this.viewedPageIds);
            oSInAppMessageInternal.clearClickIds();
        }
    }

    private boolean hasMessageTriggerChanged(OSInAppMessageInternal oSInAppMessageInternal) {
        if (this.triggerController.messageHasOnlyDynamicTriggers(oSInAppMessageInternal)) {
            return !oSInAppMessageInternal.isDisplayedInSession();
        }
        return oSInAppMessageInternal.isTriggerChanged() || (!oSInAppMessageInternal.isDisplayedInSession() && oSInAppMessageInternal.triggers.isEmpty());
    }
    public void queueMessageForDisplay(OSInAppMessageInternal oSInAppMessageInternal) {
        synchronized (this.messageDisplayQueue) {
            if (!this.messageDisplayQueue.contains(oSInAppMessageInternal)) {
                this.messageDisplayQueue.add(oSInAppMessageInternal);
                this.logger.debug("In app message with id: " + oSInAppMessageInternal.messageId + ", added to the queue");
            }
            attemptToShowInAppMessage();
        }
    }

    private void attemptToShowInAppMessage() {
        synchronized (this.messageDisplayQueue) {
            if (!this.systemConditionController.systemConditionsAvailable()) {
                this.logger.warning("In app message not showing due to system condition not correct");
                return;
            }
            this.logger.debug("displayFirstIAMOnQueue: " + this.messageDisplayQueue);
            if (this.messageDisplayQueue.size() > 0 && !isInAppMessageShowing()) {
                this.logger.debug("No IAM showing currently, showing first item in the queue!");
                displayMessage(this.messageDisplayQueue.get(0));
            } else {
                this.logger.debug("In app message is currently showing or there are no IAMs left in the queue! isInAppMessageShowing: " + isInAppMessageShowing());
            }
        }
    }

    boolean isInAppMessageShowing() {
        return this.inAppMessageShowing;
    }

    OSInAppMessageInternal getCurrentDisplayedInAppMessage() {
        if (this.inAppMessageShowing) {
            return this.messageDisplayQueue.get(0);
        }
        return null;
    }

    void messageWasDismissed(OSInAppMessageInternal oSInAppMessageInternal) {
        messageWasDismissed(oSInAppMessageInternal, false);
    }

    void messageWasDismissed(OSInAppMessageInternal oSInAppMessageInternal, boolean z) {
        if (!oSInAppMessageInternal.isPreview) {
            this.dismissedMessages.add(oSInAppMessageInternal.messageId);
            if (!z) {
                this.inAppMessageRepository.saveDismissedMessagesId(this.dismissedMessages);
                this.lastTimeInAppDismissed = new Date();
                persistInAppMessage(oSInAppMessageInternal);
            }
            this.logger.debug("OSInAppMessageController messageWasDismissed dismissedMessages: " + this.dismissedMessages.toString());
        }
        if (!shouldWaitForPromptsBeforeDismiss()) {
            onMessageDidDismiss(oSInAppMessageInternal);
        }
        dismissCurrentMessage(oSInAppMessageInternal);
    }

    private boolean shouldWaitForPromptsBeforeDismiss() {
        return this.currentPrompt != null;
    }
    public void dismissCurrentMessage(OSInAppMessageInternal oSInAppMessageInternal) {
        OneSignal.getSessionManager().onDirectInfluenceFromIAMClickFinished();
        if (shouldWaitForPromptsBeforeDismiss()) {
            this.logger.debug("Stop evaluateMessageDisplayQueue because prompt is currently displayed");
            return;
        }
        this.inAppMessageShowing = false;
        synchronized (this.messageDisplayQueue) {
            if (oSInAppMessageInternal != null) {
                if (!oSInAppMessageInternal.isPreview && this.messageDisplayQueue.size() > 0) {
                    if (!this.messageDisplayQueue.contains(oSInAppMessageInternal)) {
                        this.logger.debug("Message already removed from the queue!");
                        return;
                    } else {
                        this.logger.debug("In app message with id: " + this.messageDisplayQueue.remove(0).messageId + ", dismissed (removed) from the queue!");
                    }
                }
            }
            if (this.messageDisplayQueue.size() > 0) {
                this.logger.debug("In app message on queue available: " + this.messageDisplayQueue.get(0).messageId);
                displayMessage(this.messageDisplayQueue.get(0));
            } else {
                this.logger.debug("In app message dismissed evaluating messages");
                evaluateInAppMessages();
            }
        }
    }

    private void persistInAppMessage(final OSInAppMessageInternal oSInAppMessageInternal) {
        oSInAppMessageInternal.getRedisplayStats().setLastDisplayTime(OneSignal.getTime().getCurrentTimeMillis() / 1000);
        oSInAppMessageInternal.getRedisplayStats().incrementDisplayQuantity();
        oSInAppMessageInternal.setTriggerChanged(false);
        oSInAppMessageInternal.setDisplayedInSession(true);
        runRunnableOnThread(new BackgroundRunnable() { // from class: com.onesignal.OSInAppMessageController.11
            @Override // com.onesignal.BackgroundRunnable, java.lang.Runnable
            public void run() {
                super.run();
                OSInAppMessageController.this.inAppMessageRepository.saveInAppMessage(oSInAppMessageInternal);
                OSInAppMessageController.this.inAppMessageRepository.saveLastTimeInAppDismissed(OSInAppMessageController.this.lastTimeInAppDismissed);
            }
        }, OS_IAM_DB_ACCESS);
        int iIndexOf = this.redisplayedInAppMessages.indexOf(oSInAppMessageInternal);
        if (iIndexOf != -1) {
            this.redisplayedInAppMessages.set(iIndexOf, oSInAppMessageInternal);
        } else {
            this.redisplayedInAppMessages.add(oSInAppMessageInternal);
        }
        this.logger.debug("persistInAppMessageForRedisplay: " + oSInAppMessageInternal.toString() + " with msg array data: " + this.redisplayedInAppMessages.toString());
    }

    private void getTagsForLiquidTemplating(final OSInAppMessageInternal oSInAppMessageInternal, final boolean z) {
        this.waitForTags = false;
        if (z || oSInAppMessageInternal.getHasLiquid()) {
            this.waitForTags = true;
            OneSignal.getTags(new OneSignal.OSGetTagsHandler() { // from class: com.onesignal.OSInAppMessageController.12
                @Override // com.onesignal.OneSignal.OSGetTagsHandler
                public void tagsAvailable(JSONObject jSONObject) {
                    OSInAppMessageController.this.waitForTags = false;
                    if (jSONObject != null) {
                        OSInAppMessageController.this.userTagsString = jSONObject.toString();
                    }
                    if (OSInAppMessageController.this.pendingMessageContent != null) {
                        if (!z) {
                            OneSignal.getSessionManager().onInAppMessageReceived(oSInAppMessageInternal.messageId);
                        }
                        OSInAppMessageContent oSInAppMessageContent = OSInAppMessageController.this.pendingMessageContent;
                        OSInAppMessageController oSInAppMessageController = OSInAppMessageController.this;
                        oSInAppMessageContent.setContentHtml(oSInAppMessageController.taggedHTMLString(oSInAppMessageController.pendingMessageContent.getContentHtml()));
                        WebViewManager.showMessageContent(oSInAppMessageInternal, OSInAppMessageController.this.pendingMessageContent);
                        OSInAppMessageController.this.pendingMessageContent = null;
                    }
                }
            });
        }
    }
    public OSInAppMessageContent parseMessageContentData(JSONObject jSONObject, OSInAppMessageInternal oSInAppMessageInternal) {
        OSInAppMessageContent oSInAppMessageContent = new OSInAppMessageContent(jSONObject);
        oSInAppMessageInternal.setDisplayDuration(oSInAppMessageContent.getDisplayDuration().doubleValue());
        return oSInAppMessageContent;
    }

    private void displayMessage(final OSInAppMessageInternal oSInAppMessageInternal) {
        if (!this.inAppMessagingEnabled) {
            this.logger.verbose("In app messaging is currently paused, in app messages will not be shown!");
            return;
        }
        this.inAppMessageShowing = true;
        getTagsForLiquidTemplating(oSInAppMessageInternal, false);
        this.inAppMessageRepository.getIAMData(OneSignal.appId, oSInAppMessageInternal.messageId, variantIdForMessage(oSInAppMessageInternal), new OSInAppMessageRepository.OSInAppMessageRequestResponse() { // from class: com.onesignal.OSInAppMessageController.13
            @Override // com.onesignal.OSInAppMessageRepository.OSInAppMessageRequestResponse
            public void onSuccess(String str) {
                try {
                    OSInAppMessageContent messageContentData = OSInAppMessageController.this.parseMessageContentData(new JSONObject(str), oSInAppMessageInternal);
                    if (messageContentData.getContentHtml() == null) {
                        OSInAppMessageController.this.logger.debug("displayMessage:OnSuccess: No HTML retrieved from loadMessageContent");
                        return;
                    }
                    if (OSInAppMessageController.this.waitForTags) {
                        OSInAppMessageController.this.pendingMessageContent = messageContentData;
                        return;
                    }
                    OneSignal.getSessionManager().onInAppMessageReceived(oSInAppMessageInternal.messageId);
                    OSInAppMessageController.this.onMessageWillDisplay(oSInAppMessageInternal);
                    messageContentData.setContentHtml(OSInAppMessageController.this.taggedHTMLString(messageContentData.getContentHtml()));
                    WebViewManager.showMessageContent(oSInAppMessageInternal, messageContentData);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }

            @Override // com.onesignal.OSInAppMessageRepository.OSInAppMessageRequestResponse
            public void onFailure(String str) {
                OSInAppMessageController.this.inAppMessageShowing = false;
                try {
                    if (new JSONObject(str).getBoolean("retry")) {
                        OSInAppMessageController.this.queueMessageForDisplay(oSInAppMessageInternal);
                    } else {
                        OSInAppMessageController.this.messageWasDismissed(oSInAppMessageInternal, true);
                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });
    }

    String taggedHTMLString(String str) {
        return str + String.format(LIQUID_TAG_SCRIPT, this.userTagsString);
    }

    void displayPreviewMessage(String str) {
        this.inAppMessageShowing = true;
        final OSInAppMessageInternal oSInAppMessageInternal = new OSInAppMessageInternal(true);
        getTagsForLiquidTemplating(oSInAppMessageInternal, true);
        this.inAppMessageRepository.getIAMPreviewData(OneSignal.appId, str, new OSInAppMessageRepository.OSInAppMessageRequestResponse() { // from class: com.onesignal.OSInAppMessageController.14
            @Override // com.onesignal.OSInAppMessageRepository.OSInAppMessageRequestResponse
            public void onSuccess(String str2) {
                try {
                    OSInAppMessageContent messageContentData = OSInAppMessageController.this.parseMessageContentData(new JSONObject(str2), oSInAppMessageInternal);
                    if (messageContentData.getContentHtml() == null) {
                        OSInAppMessageController.this.logger.debug("displayPreviewMessage:OnSuccess: No HTML retrieved from loadMessageContent");
                    } else {
                        if (OSInAppMessageController.this.waitForTags) {
                            OSInAppMessageController.this.pendingMessageContent = messageContentData;
                            return;
                        }
                        OSInAppMessageController.this.onMessageWillDisplay(oSInAppMessageInternal);
                        messageContentData.setContentHtml(OSInAppMessageController.this.taggedHTMLString(messageContentData.getContentHtml()));
                        WebViewManager.showMessageContent(oSInAppMessageInternal, messageContentData);
                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }

            @Override // com.onesignal.OSInAppMessageRepository.OSInAppMessageRequestResponse
            public void onFailure(String str2) {
                OSInAppMessageController.this.dismissCurrentMessage(null);
            }
        });
    }

    void cleanCachedInAppMessages() {
        runRunnableOnThread(new BackgroundRunnable() { // from class: com.onesignal.OSInAppMessageController.15
            @Override // com.onesignal.BackgroundRunnable, java.lang.Runnable
            public void run() {
                super.run();
                OSInAppMessageController.this.inAppMessageRepository.cleanCachedInAppMessages();
            }
        }, OS_IAM_DB_ACCESS);
    }

    @Override // com.onesignal.OSDynamicTriggerController.OSDynamicTriggerControllerObserver
    public void messageDynamicTriggerCompleted(String str) {
        this.logger.debug("messageDynamicTriggerCompleted called with triggerId: " + str);
        HashSet hashSet = new HashSet();
        hashSet.add(str);
        makeRedisplayMessagesAvailableWithTriggers(hashSet);
    }

    @Override // com.onesignal.OSDynamicTriggerController.OSDynamicTriggerControllerObserver
    public void messageTriggerConditionChanged() {
        this.logger.debug("messageTriggerConditionChanged called");
        evaluateInAppMessages();
    }

    @Override // com.onesignal.OSSystemConditionController.OSSystemConditionObserver
    public void systemConditionChanged() {
        attemptToShowInAppMessage();
    }

    private void makeRedisplayMessagesAvailableWithTriggers(Collection<String> collection) {
        for (OSInAppMessageInternal oSInAppMessageInternal : this.messages) {
            if (!oSInAppMessageInternal.isTriggerChanged() && this.redisplayedInAppMessages.contains(oSInAppMessageInternal) && this.triggerController.isTriggerOnMessage(oSInAppMessageInternal, collection)) {
                this.logger.debug("Trigger changed for message: " + oSInAppMessageInternal.toString());
                oSInAppMessageInternal.setTriggerChanged(true);
            }
        }
    }
    public void checkRedisplayMessagesAndEvaluate(Collection<String> collection) {
        makeRedisplayMessagesAvailableWithTriggers(collection);
        evaluateInAppMessages();
    }

    void addTriggers(final Map<String, Object> map) {
        this.logger.debug("Triggers added: " + map.toString());
        this.triggerController.addTriggers(map);
        if (shouldRunTaskThroughQueue()) {
            this.taskController.addTaskToQueue(new Runnable() { // from class: com.onesignal.OSInAppMessageController.16
                @Override // java.lang.Runnable
                public void run() {
                    OSInAppMessageController.this.logger.debug("Delaying addTriggers due to redisplay data not retrieved yet");
                    OSInAppMessageController.this.checkRedisplayMessagesAndEvaluate(map.keySet());
                }
            });
        } else {
            checkRedisplayMessagesAndEvaluate(map.keySet());
        }
    }

    void removeTriggersForKeys(final Collection<String> collection) {
        this.logger.debug("Triggers key to remove: " + collection.toString());
        this.triggerController.removeTriggersForKeys(collection);
        if (shouldRunTaskThroughQueue()) {
            this.taskController.addTaskToQueue(new Runnable() { // from class: com.onesignal.OSInAppMessageController.17
                @Override // java.lang.Runnable
                public void run() {
                    OSInAppMessageController.this.logger.debug("Delaying removeTriggersForKeys due to redisplay data not retrieved yet");
                    OSInAppMessageController.this.checkRedisplayMessagesAndEvaluate(collection);
                }
            });
        } else {
            checkRedisplayMessagesAndEvaluate(collection);
        }
    }

    Map<String, Object> getTriggers() {
        return new HashMap(this.triggerController.getTriggers());
    }

    boolean inAppMessagingEnabled() {
        return this.inAppMessagingEnabled;
    }

    void setInAppMessagingEnabled(boolean z) {
        this.inAppMessagingEnabled = z;
        if (z) {
            evaluateInAppMessages();
        }
    }

    Object getTriggerValue(String str) {
        return this.triggerController.getTriggerValue(str);
    }

    public ArrayList<OSInAppMessageInternal> getInAppMessageDisplayQueue() {
        return this.messageDisplayQueue;
    }

    public List<OSInAppMessageInternal> getRedisplayedInAppMessages() {
        return this.redisplayedInAppMessages;
    }
}

