const {Cu} = require("chrome");

var global=this;
exports.main = function(options, callbacks) {
    if (global.com_sergiosgc_csslivereloader) return;
    let {com_sergiosgc_csslivereloader} = require("csslivereloader");
    global.com_sergiosgc_csslivereloader = com_sergiosgc_csslivereloader;
    return global.com_sergiosgc_csslivereloader.startup(options, callbacks);
};
exports.onUnload = function(options, callbacks) {
    if (!global.com_sergiosgc_csslivereloader) return;
    com_sergiosgc_csslivereloader.shutdown(options, callbacks);
    delete global.com_sergiosgc_csslivereloader;
};
