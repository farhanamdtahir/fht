(function() {
    angular
        .module("fht", [
            "ionic",
            "ngResource", // Untuk factory mendapatkan data.
            "fht.profile",
            "fht.checkin",
            "fht.timeline",
            "fht.groups"
            
        ])
        .run(init);
        .factory("Database", Database);


    function init($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }

    function Database($resource) {
        // var url = 'http://192.168.43.193/shoppinggpsserver';
        var url = 'http://localhost/shoppinggpsserver';

        return {
            profile: function() {
                return $resource(url + '/personal')
            },
            timeline: function() {
                return $resource(url + '/healthdata')
            }
            checkin: function() {
                return $resource(url + '/sickness')
            }
            groups: function() {
                return $resource(url + '/group')
            }
        }
    }
})();