if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('serviceworker.js')
           .then(function() { console.log('Service Worker Registered'); });
}

function detectMobile() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

if (!detectMobile()) {
  document.body.innerHTML = '<h1>Please use your mobile phone</h1>';
}
