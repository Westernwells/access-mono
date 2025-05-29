// File: android/app/src/main/java/com/access/AppReactNativeHost.kt
package com.access

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactNativeHost // Keep this
import com.facebook.react.ReactPackage
// import com.facebook.react.defaults.DefaultReactNativeHost // Not needed now
import com.twiliovoicereactnative.TwilioVoiceReactNativePackage
import com.twiliovoicereactnative.VoiceApplicationProxy

// AppReactNativeHost now extends VoiceApplicationProxy.VoiceReactNativeHost
class AppReactNativeHost(application: Application) :
    VoiceApplicationProxy.VoiceReactNativeHost(application) {

    override fun getPackages(): List<ReactPackage> {
        val packages: MutableList<ReactPackage> = PackageList(this).packages
        // TwilioVoiceReactNativePackage is likely already included via autolinking
        // but we can ensure it's there
        return packages
    }

    override fun getJSMainModuleName(): String = "index"

    override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG
    
    // These properties are for New Architecture which is now disabled
    // val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
    // val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
}