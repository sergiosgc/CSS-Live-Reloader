Linux notifier for CSS Live Reload
==================================

Install
-------

This notifier is written in Perl. To install it, you need to have perl installed in your system, as well as the following CPAN packages:

  Net::WebSocket::Server
  File::Find
  Linux::Inotify2
  AnyEvent

CPAN packages are installed like this:

  perl -MCPAN -e 'install Net::WebSocket::Server'
  perl -MCPAN -e 'install File::Find'
  perl -MCPAN -e 'install Linux::Inotify2'
  perl -MCPAN -e 'install AnyEvent'

Then, download the CLR notifier script to your `/usr/local/bin` directory:

  cd /usr/local/bin 
  sudo wget https://raw.github.com/sergiosgc/CSS-Live-Reloader/master/notifiers/linux/clr-notifier
  sudo chmod a+x clr-notifier
