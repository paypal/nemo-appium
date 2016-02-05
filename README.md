# nemo-appium

## Usage

Add to your nemo plugins. Be sure to send the path to your appium executable:

```
"appium": {
      "module": "nemo-appium",
      "arguments": ["/Users/medelman/.nvm/current/bin/appium"]
    }
```

If you don't have appium running, the plugin will start the appium server.

## Log/debug

In order to see log/debug messages, set `DEBUG=nemo-appium*` into your shell environment.

## Related plugins

Consider using this along with `nemo-wd-bridge`:
[https://github.com/paypal/nemo-wd-bridge](https://github.com/paypal/nemo-wd-bridge)