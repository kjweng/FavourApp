package com.favourapp;

import android.content.Intent;
import android.os.Bundle;

import com.facebook.CallbackManager;


import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    CallbackManager mCallbackManager;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mCallbackManager = new CallbackManager.Factory().create();
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        mCallbackManager.onActivityResult(requestCode, resultCode, data);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "FavourApp";
    }
}
