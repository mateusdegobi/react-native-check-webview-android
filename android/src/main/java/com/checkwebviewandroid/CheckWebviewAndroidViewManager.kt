package com.checkwebviewandroid

import android.webkit.WebView
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class CheckWebviewAndroidView(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "CheckWebviewAndroidView"
    }

    @ReactMethod
    fun checkWebView(promise: Promise) {
        Handler(Looper.getMainLooper()).post {
            try {
                WebView(reactApplicationContext)
                promise.resolve(true)
            } catch (e: Exception) {
                promise.resolve(false)
            }
        }
    }
}
