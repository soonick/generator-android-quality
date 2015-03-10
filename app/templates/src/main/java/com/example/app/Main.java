package com.example.app;

import android.app.Activity;
import android.os.Bundle;

/**
 * Main activity.
 */
public class Main extends Activity {
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
