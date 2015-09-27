'use strict';

var ar = require('appium-running');
var cp = require('child_process');
var path = require('path');
module.exports.setup = function (nemo, cb) {
    //check if appium is already running
    ar(4723, function (success) {
        if (success) {
            console.log("Appium is running, move on!");
            cb(null);
            // run test
        } else {
            console.log("Appium is not running, exec appium &");
            //start it
            var appiumPath = path.resolve(__dirname, 'node_modules/.bin/appium');
            var appiumProcess = cp.execFile(appiumPath, function (err, stdout, stderr) {
                (err) ? console.error('err', err) : null;
                (stdout) ? console.log('stdout', stdout) : null;
                (stderr) ? console.error('stdout', stderr) : null;
            });
            //appiumProcess.stdout.on('data', function (data) {
            //    console.log('stdout: ' + data);
            //
            //});
            nemo.appium = {
                process: appiumProcess
            };
            cb(null, 'started appium process');
            //setTimeout(function () {
            //    appiumProcess.kill();
            //    cb(null, 'kilt');
            //}, 10000);
        }
    });
};