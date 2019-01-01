onDeviceReady: function() {
        app.receivedEvent('deviceready');
          window.open = cordova.InAppBrowser.open;
            //cordova.InAppBrowser.open('http://apache.org', '_self', 'location=yes');
            cordova.InAppBrowser.open('https://apps.cylpro.com/user', '_system', 'location=no,hidden=yes,closebuttoncaption=Done,toolbar=no');
    },
