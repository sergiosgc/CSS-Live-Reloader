CSS Live Reloader
=================

CSS Live Reloader is a firefox extension to ease website CSS development. The extension reloads a page CSS whenever it changes on the server, resulting in something close to live editing of the Cascading Stylesheet. 

To detect changes to the CSS, the extension relies on a daemon running on the same webserver the page originated from. The daemon pushes down notifications whenever it detects changes to the CSS. 

Even without a notifier running, the extension behaves normally, albeit without the live component. You may press F9 to request a refresh of the current page CSS.


You can see it in action in this demo video:

[![ScreenShot](https://raw.github.com/sergiosgc/CSS-Live-Reloader/master/assets/demo_screenshot.png)](//player.vimeo.com/video/80764772)

Usage
-----

Install the add-on from AMO: https://addons.mozilla.org/en-US/firefox/addon/css-live-reloader/

For simple usage, without live-reload, you are set. Just press F9 to reload the CSS whenever you need.

To get live CSS refresh, you need to install a [notifier](https://github.com/sergiosgc/CSS-Live-Reloader/tree/master/notifiers). Follow the instructions on the page.

After you get the notifier up and running, press F9 to connect the web page to the change notifier. From then on, changes to any CSS file will trigger a refresh of the CSS.

Development
-----------

Should you wish to further develop this addon, just fork the repository and clone it to your computer. You'll need to install the [Jetpack SDK](https://wiki.mozilla.org/Jetpack) from Mozilla. Navigate to the root of the git repository and run `cfx run`. Jetpack will launch a firefox browser in a temporary profile, with the addon installed for testing.

Pull requests are welcome, namely writing notifiers for more platforms. Currently only linux+inotify is written. I'd like to get OSX, BSD and Windows notifiers in the repo.
