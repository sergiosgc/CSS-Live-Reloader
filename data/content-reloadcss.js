(function () {


 let cleanup = function() {
     this.parentNode.removeChild(this);
 }

 let candidates = window.content.document.querySelectorAll('link[rel=stylesheet][href]');
 for (let i = 0; i < candidates.length; ++i) {
    let href = candidates[i].href;
    href = href.replace(/[?&]livecsscachebuster=([^&]*)/, '');
    href += href.indexOf('?')<0 ? '?' : '&';
    href += 'livecsscachebuster=' + Date.now();

    candidates[i].href = href;
 /*   let newStylesheet = candidates[i].cloneNode(true);
    newStylesheet.href = href;
    candidates[i].parentNode.insertBefore(newStylesheet, candidates[i]);
    window.setTimeout(cleanup.bind(candidates[i]), 200);
    */
 }
})();
