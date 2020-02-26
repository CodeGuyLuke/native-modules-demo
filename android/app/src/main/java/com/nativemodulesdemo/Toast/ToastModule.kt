package com.nativemodulesdemo.Toast

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class ToastModule constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "Toast"
    }

    @ReactMethod
    fun show(text: String, isLong: Boolean) {
        var duration = Toast.LENGTH_SHORT;
        if (isLong) duration = Toast.LENGTH_LONG
        Toast.makeText(reactApplicationContext, text, duration).show();
    }
}