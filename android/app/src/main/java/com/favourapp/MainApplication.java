package com.favourapp;

import android.app.Application;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  CallbackManager mCallbackManager;

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      mCallbackManager = new CallbackManager.Factory().create();
      ReactPackage packages[] = new ReactPackage[]{
              new MainReactPackage(),
              new FBSDKPackage(mCallbackManager),
      };
      return Arrays.<ReactPackage>asList(packages);
    }
  };

  @Override
  public void onCreate() {
    super.onCreate();
    // Initialize the SDK before executing any other operations,
    FacebookSdk.sdkInitialize(getApplicationContext());
    AppEventsLogger.activateApp(this);
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
