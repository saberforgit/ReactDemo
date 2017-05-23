package com.reactdemo.module.toast;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by wangxf on 2017/5/23.
 */

public class ToastModule extends ReactContextBaseJavaModule {

    private static final String TOAST_LONG = "LONG";
    private static final String TOAST_SHORT = "SHORT";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ToastModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> toastContants = new HashMap<>();
        toastContants.put(TOAST_LONG, Toast.LENGTH_LONG);
        toastContants.put(TOAST_SHORT, Toast.LENGTH_SHORT);
        return toastContants;
    }

    @ReactMethod
    public void showToast(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}
