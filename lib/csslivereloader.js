const {Cu, Cc, Ci} = require("chrome");

var com_sergiosgc_csslivereloader = {};
// startup() //{{{
com_sergiosgc_csslivereloader.startup = function(options, callbacks) {
    this.console = (Cu.import("resource://gre/modules/devtools/Console.jsm", {})).console;
    let { Hotkey } = require("sdk/hotkeys");
    this.hotkeys = { };
    this.hotkeys.reload_css = Hotkey({
          combo: "f9",
          onPress: this.reload_css.bind(this)
    });
    this.cacheService = Cc["@mozilla.org/network/cache-service;1"].getService(Ci.nsICacheService);
};
com_sergiosgc_csslivereloader.startup = com_sergiosgc_csslivereloader.startup.bind(com_sergiosgc_csslivereloader);
//}}}
// Shutdown() //{{{
com_sergiosgc_csslivereloader.shutdown = function(options, callbacks) {
    for (let hotkey in this.hotkeys) {
        this.hotkeys[hotkey].destroy();
    }
    delete this.hotkeys;
};
com_sergiosgc_csslivereloader.shutdown = com_sergiosgc_csslivereloader.shutdown.bind(com_sergiosgc_csslivereloader);//}}}
// reload_css()//{{{
com_sergiosgc_csslivereloader.reload_css = function() {
    let tabs = require("sdk/tabs");
    let self = require("sdk/self");

    this.cacheService.evictEntries(Ci.nsICache.STORE_ON_DISK);    
    this.cacheService.evictEntries(Ci.nsICache.STORE_IN_MEMORY);
    if (!this.activeTabWorker) {
        this.activeTabWorker = tabs.activeTab.attach({ contentScriptFile: self.data.url("content-reloadcss.js") });
        tabs.activeTab.on('close', (function() { delete this.activeTabWorker; }).bind(this));
        tabs.activeTab.on('ready', (function() { delete this.activeTabWorker; }).bind(this));
        this.activeTabWorker.port.on('csslivereload', function() {
            com_sergiosgc_csslivereloader.reload_css();
        });
    }
    this.activeTabWorker.port.emit('csslivereload', true);
}
com_sergiosgc_csslivereloader.reload_css = com_sergiosgc_csslivereloader.reload_css.bind(com_sergiosgc_csslivereloader);//}}}

exports.com_sergiosgc_csslivereloader = com_sergiosgc_csslivereloader;
