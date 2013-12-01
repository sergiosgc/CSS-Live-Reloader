const {Cu, Cc, Ci} = require("chrome");

var com_sergiosgc_csslivereloader = {};
// startup() //{{{
com_sergiosgc_csslivereloader.startup = function(options, callbacks) {
    this.console = (Cu.import("resource://gre/modules/devtools/Console.jsm", {})).console;
    console.log('Startup');
    let { Hotkey } = require("sdk/hotkeys");
    this.hotkeys = { };
    this.hotkeys.reload_css = Hotkey({
          combo: "f9",
          onPress: this.reload_css.bind(this)
    });
    this.cacheService = Cc["@mozilla.org/network/cache-service;1"].getService(Ci.nsICacheService);
    console.log(this.cacheService);
};
com_sergiosgc_csslivereloader.startup = com_sergiosgc_csslivereloader.startup.bind(com_sergiosgc_csslivereloader);
//}}}
// Shutdown() //{{{
com_sergiosgc_csslivereloader.shutdown = function(options, callbacks) {
    console.log('Shutdown');
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
    tabs.activeTab.attach({ contentScriptFile: self.data.url("content-reloadcss.js") });
}
com_sergiosgc_csslivereloader.reload_css = com_sergiosgc_csslivereloader.reload_css.bind(com_sergiosgc_csslivereloader);//}}}

exports.com_sergiosgc_csslivereloader = com_sergiosgc_csslivereloader;
