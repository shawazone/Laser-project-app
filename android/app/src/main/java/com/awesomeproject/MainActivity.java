package com.awesomeproject;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import android.os.Bundle;


// import com.imagepicker.permissions.OnImagePickerPermissionsCallback;
import com.facebook.react.modules.core.PermissionListener;


public class MainActivity extends ReactActivity {   

  // implements OnImagePickerPermissionsCallback

//   private PermissionListener listener;

// @Override
// public void setPermissionListener(PermissionListener listener) {
//     this.listener = listener;
// }

// @Override
// public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
//     if (listener != null) {
//         listener.onRequestPermissionsResult(requestCode, permissions, grantResults);
//     }
//     super.onRequestPermissionsResult(requestCode, permissions, grantResults);
// }

// @Override
// public void onImagePickerPermissionsCallback(boolean granted) {
//     if (listener != null) {
//         listener.onPermissionResult(granted);
//     }
// }
  
  
  
  
  
  
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  @Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}

  @Override
  protected String getMainComponentName() {
    return "AwesomeProject";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        );
  }
}
