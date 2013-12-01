= CSS Live Reloader =

CSS Live Reloader is a firefox extension to ease website CSS development. The extension reloads a page CSS whenever it changes on the server, resulting in something close to live editing of the Cascading Stylesheet. 

To detect changes to the CSS, the extension relies on a daemon running on the same webserver the page originated from. The daemon pushes down notifications whenever it detects changes to the CSS. Currently, the daemon only supports linux, as it is based on the inotify interface. See the notifiers directory for more information. 

Even without a notifier running, the extension behaves normally, albeit without the live component. You may press F9 to request a refresh of the current page CSS.


