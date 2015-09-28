var naPlugin = require('../index');
var nemo = {};
naPlugin.setup(nemo, function (err, out) {
    if (err) {
        return console.error(err);
    }
    console.log(out);
    setTimeout(function () {
        nemo.appium.process.kill();
        console.log('things seem fine but somebody should write better unit tests');

    }, 10000);
});