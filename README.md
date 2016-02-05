# nemo-appium

## Usage

Add to your nemo plugins. Be sure to send the path to your appium executable. Be sure to register it as a "pre-driver" 
plugin (see: https://github.com/paypal/nemo#plugins):

```
"appium": {
      "module": "nemo-appium",
      "arguments": ["/Users/medelman/.nvm/current/bin/appium"]
    }
```

If you don't have appium running, the plugin will start the appium server.

The plugin uses `child_process.exec` to launch the server. It will add a reference to the ChildProcess object as:
`nemo.appium.process`

This gives the ability to manage the process. You may want to manually kill the process when you know you're done 
with it.

## Log/debug

In order to see log/debug messages, set `DEBUG=nemo-appium*` into your shell environment.

## Related plugins

Consider using this along with `nemo-wd-bridge`:
[https://github.com/paypal/nemo-wd-bridge](https://github.com/paypal/nemo-wd-bridge)