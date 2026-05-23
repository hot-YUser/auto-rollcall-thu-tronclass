package com.onesignal;

import com.onesignal.FocusTimeController;
import com.onesignal.influence.domain.OSInfluence;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
class OSFocusTimeProcessorFactory {
    private final HashMap<String, FocusTimeController.FocusTimeProcessorBase> focusTimeProcessors;

    public OSFocusTimeProcessorFactory() {
        HashMap<String, FocusTimeController.FocusTimeProcessorBase> map = new HashMap<>();
        this.focusTimeProcessors = map;
        map.put(FocusTimeController.FocusTimeProcessorUnattributed.class.getName(), new FocusTimeController.FocusTimeProcessorUnattributed());
        map.put(FocusTimeController.FocusTimeProcessorAttributed.class.getName(), new FocusTimeController.FocusTimeProcessorAttributed());
    }

    FocusTimeController.FocusTimeProcessorBase getTimeProcessorSaved() {
        FocusTimeController.FocusTimeProcessorBase attributedProcessor = getAttributedProcessor();
        Iterator<OSInfluence> it = attributedProcessor.getInfluences().iterator();
        while (it.hasNext()) {
            if (it.next().getInfluenceType().isAttributed()) {
                return attributedProcessor;
            }
        }
        return getUnattributedProcessor();
    }

    FocusTimeController.FocusTimeProcessorBase getTimeProcessorWithInfluences(List<OSInfluence> list) {
        Iterator<OSInfluence> it = list.iterator();
        while (it.hasNext()) {
            if (it.next().getInfluenceType().isAttributed()) {
                return getAttributedProcessor();
            }
        }
        return getUnattributedProcessor();
    }

    private FocusTimeController.FocusTimeProcessorBase getAttributedProcessor() {
        return this.focusTimeProcessors.get(FocusTimeController.FocusTimeProcessorAttributed.class.getName());
    }

    private FocusTimeController.FocusTimeProcessorBase getUnattributedProcessor() {
        return this.focusTimeProcessors.get(FocusTimeController.FocusTimeProcessorUnattributed.class.getName());
    }
}

