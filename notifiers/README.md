CSS Live Reload Notifiers
=========================

This directory contains notifiers for use with the CSS Live Reload extension. Pick one that fits your server environment (although, currently there is only a linux notifier). See the notifier directory for installation instructions.

Help Needed
-----------

I welcome help writing notifiers for other environments. Just fork this repo and submit a pull request with the notifier. It's really simple. You need to create a WebSockets server, listening on port 3000. The server should monitor the current directory subtree for changes. Whenever it detects a change, it should send a line of text through to the connected client. The content of the text is irrelevant. The extension will react to any received text line by refreshing the CSS.

Naturally, the existing notifier is a good source for inspiration.
