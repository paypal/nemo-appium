'use strict';

var ar = require('appium-running');
var cp = require('child_process');
var path = require('path');
module.exports.setup = function (nemo, cb) {
    //check if appium is already running
    ar(4723, function (success) {
        if (success) {
            console.log("Appium is running, move on!");
            cb(null, 'appium already running');
            // run test
        } else {
            console.log("Appium is not running, exec appium &");
            //start it
            var appiumPath = path.resolve(__dirname, 'node_modules/.bin/appium');
            var appiumProcess = cp.exec('appium', function (err, stdout, stderr) {
                //(err) ? console.error('err', err) : null;
                //(stdout) ? console.log('stdout', stdout) : null;
                //(stderr) ? console.error('stdout', stderr) : null;
            });
            nemo.appium = {
                process: appiumProcess
            };
            appiumProcess.stdout.on('data', function (data) {
                if (data.indexOf('started') !== -1 && data.indexOf('4723') !== -1) {
                    cb(null, 'started appium process');
                }
            });

        }
    });
};