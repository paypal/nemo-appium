var naPlugin = require('../index');

naPlugin.setup({}, function (err, out) {
    if (err) {
        return console.error(err);
    }
    console.log(out);
});