package android.support.v4.media;

import android.media.browse.MediaBrowser;
import android.os.Parcel;
class MediaBrowserCompatApi23 {

    interface ItemCallback {
        void onError(String str);

        void onItemLoaded(Parcel parcel);
    }

    public static Object createItemCallback(ItemCallback itemCallback) {
        return new ItemCallbackProxy(itemCallback);
    }

    public static void getItem(Object obj, String str, Object obj2) {
        ((MediaBrowser) obj).getItem(str, (MediaBrowser.ItemCallback) obj2);
    }

    static class ItemCallbackProxy<T extends ItemCallback> extends MediaBrowser.ItemCallback {
        protected final T mItemCallback;

        public ItemCallbackProxy(T t) {
            this.mItemCallback = t;
        }

        @Override // android.media.browse.MediaBrowser.ItemCallback
        public void onItemLoaded(MediaBrowser.MediaItem mediaItem) {
            if (mediaItem == null) {
                this.mItemCallback.onItemLoaded(null);
                return;
            }
            Parcel parcelObtain = Parcel.obtain();
            mediaItem.writeToParcel(parcelObtain, 0);
            this.mItemCallback.onItemLoaded(parcelObtain);
        }

        @Override // android.media.browse.MediaBrowser.ItemCallback
        public void onError(String str) {
            this.mItemCallback.onError(str);
        }
    }

    private MediaBrowserCompatApi23() {
    }
}

