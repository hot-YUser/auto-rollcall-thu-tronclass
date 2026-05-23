package com.google.android.datatransport.runtime;

import com.google.android.datatransport.Encoding;
import java.util.Set;
public interface EncodedDestination extends Destination {
    Set<Encoding> getSupportedEncodings();
}

