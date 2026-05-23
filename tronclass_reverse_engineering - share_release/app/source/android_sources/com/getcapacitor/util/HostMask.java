package com.getcapacitor.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
public interface HostMask {

    public static class Nothing implements HostMask {
        @Override // com.getcapacitor.util.HostMask
        public boolean matches(String str) {
            return false;
        }
    }

    boolean matches(String str);

    public static class Parser {
        private static HostMask NOTHING = new Nothing();

        public static HostMask parse(String[] strArr) {
            if (strArr == null) {
                return NOTHING;
            }
            return Any.parse(strArr);
        }

        public static HostMask parse(String str) {
            if (str == null) {
                return NOTHING;
            }
            return Simple.parse(str);
        }
    }

    public static class Simple implements HostMask {
        private final List<String> maskParts;

        private Simple(List<String> list) {
            if (list == null) {
                throw new IllegalArgumentException("Mask parts can not be null");
            }
            this.maskParts = list;
        }

        static Simple parse(String str) {
            return new Simple(Util.splitAndReverse(str));
        }

        @Override // com.getcapacitor.util.HostMask
        public boolean matches(String str) {
            List<String> listSplitAndReverse;
            int size;
            int size2;
            if (str == null || (size = (listSplitAndReverse = Util.splitAndReverse(str)).size()) != (size2 = this.maskParts.size())) {
                return false;
            }
            int iMin = Math.min(size, size2);
            for (int i = 0; i < iMin; i++) {
                if (!Util.matches(this.maskParts.get(i), listSplitAndReverse.get(i))) {
                    return false;
                }
            }
            return true;
        }
    }

    public static class Any implements HostMask {
        private final List<? extends HostMask> masks;

        Any(List<? extends HostMask> list) {
            this.masks = list;
        }

        @Override // com.getcapacitor.util.HostMask
        public boolean matches(String str) {
            Iterator<? extends HostMask> it = this.masks.iterator();
            while (it.hasNext()) {
                if (it.next().matches(str)) {
                    return true;
                }
            }
            return false;
        }

        static Any parse(String... strArr) {
            ArrayList arrayList = new ArrayList();
            for (String str : strArr) {
                arrayList.add(Simple.parse(str));
            }
            return new Any(arrayList);
        }
    }

    public static class Util {
        static boolean matches(String str, String str2) {
            if (str == null) {
                return false;
            }
            if ("*".equals(str)) {
                return true;
            }
            if (str2 == null) {
                return false;
            }
            return str.toUpperCase().equals(str2.toUpperCase());
        }

        static List<String> splitAndReverse(String str) {
            if (str == null) {
                throw new IllegalArgumentException("Can not split null argument");
            }
            List<String> listAsList = Arrays.asList(str.split("\\."));
            Collections.reverse(listAsList);
            return listAsList;
        }
    }
}

