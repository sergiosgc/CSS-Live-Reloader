self.port.on('csslivereload', function () {
 let cleanup = function() {
     this.parentNode.removeChild(this);
 }

 let candidates = window.content.document.querySelectorAll('link[rel=stylesheet][href]');
 for (let i = 0; i < candidates.length; ++i) {
    let href = candidates[i].href;
    href = href.replace(/[?&]livecsscachebuster=([^&]*)/, '');
    href += href.indexOf('?')<0 ? '?' : '&';
    href += 'livecsscachebuster=' + Date.now();

//    candidates[i].href = href;
    let newStylesheet = candidates[i].cloneNode(true);
    newStylesheet.href = href;
    if (candidates[i].nextSibling) {
        candidates[i].parentNode.insertBefore(newStylesheet, candidates[i].nextSibling);
    } else {
        candidates[i].parentNode.appendChild(newStylesheet);
    }
    window.setTimeout(cleanup.bind(candidates[i]), 500);
 }
 if (!window.csslivereloadNotificationSocket) {
     console.log('connecting');
    let host = document.location.host == '' ? 'localhost' : document.location.host;
    window.csslivereloadNotificationSocket = new WebSocket('ws://' + host + ':3000/csslivereload');
    window.csslivereloadNotificationSocket.onmessage = function(event) {
        self.port.emit('csslivereload', true);
    };
    window.csslivereloadNotificationSocket.onopen = function() {
    };
    window.csslivereloadNotificationSocket.onclose = function() {
        delete window.csslivereloadNotificationSocket;
    };
    window.csslivereloadNotificationSocket.onerror = function(error) {
        window.console.log("Error connecting websocket: " + error);
        delete window.csslivereloadNotificationSocket;
    };
 }
});
