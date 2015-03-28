package com.example.app.activities;

import com.example.app.R;
import android.app.Activity;
import android.os.Bundle;

/**
 * Main activity.
 */
public class MainActivity extends Activity {
    /**
     * Initialize view.
     * @param savedInstanceState - You know ;)
     */
    @Override
    public void onCreate(final Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
    }
}
