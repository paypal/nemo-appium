var naPlugin = require('../index');
var nemo = {};
naPlugin.setup(nemo, function (err, out) {
    if (err) {
        return console.error(err);
    }
    console.log(out);
    setTimeout(function () {
        nemo.appium.process.kill();

    }, 10000);
});