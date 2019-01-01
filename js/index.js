onDeviceReady: function() {
        app.receivedEvent('deviceready');
          window.open = cordova.InAppBrowser.open;
            cordova.InAppBrowser.open('https://apps.cylpro.com/user', '_self', 'location=no,hidden=yes,closebuttoncaption=Done,toolbar=no');
    },
