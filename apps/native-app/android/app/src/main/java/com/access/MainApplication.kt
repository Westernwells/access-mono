// File: android/app/src/main/java/com/access/MainApplication.kt
package com.access

import android.app.Application
import com.facebook.react.ReactApplication
// import com.facebook.react.ReactHost // Not needed without New Architecture
import com.facebook.react.ReactNativeHost
// import com.facebook.react.ReactHostHolder // Removed import
import com.facebook.react.common.assets.ReactFontManager
// import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load // Not needed
// import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost // Not needed
import com.facebook.soloader.SoLoader
import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.twiliovoicereactnative.VoiceApplicationProxy

class MainApplication : Application(), ReactApplication {

  // AppReactNativeHost now extends VoiceApplicationProxy.VoiceReactNativeHost
  override val reactNativeHost: ReactNativeHost by lazy {
    AppReactNativeHost(this)
  }

  // VoiceApplicationProxy can now accept AppReactNativeHost directly
  private val voiceApplicationProxy: VoiceApplicationProxy by lazy {
    VoiceApplicationProxy(reactNativeHost as AppReactNativeHost)
  }

  // ReactHost is not needed when New Architecture is disabled
  // override val reactHost: ReactHost
  //   get() = getDefaultReactHost(applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    // Initialize SoLoader with OpenSourceMergedSoMapping
    SoLoader.init(this, /* native exopackage */ OpenSourceMergedSoMapping)

    voiceApplicationProxy.onCreate() // Initialize voice proxy

    ReactFontManager.getInstance().addCustomFont(this, "Inter", R.font.inter)

    // New Architecture loading is not needed when it's disabled
    // if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
    //   load()
    // }
  }

  override fun onTerminate() {
    super.onTerminate()
    voiceApplicationProxy.onTerminate()
  }
}