/*
    Nota untuk si penulis Javascript
    1 - Pastikan indentation betul
        Shortcut : ctrl + [ atau ctrl + ]
    2 - Pastikan scope curly braces & kurungan merangkumi body yang betul
        Contoh:
            var a = {
                name: "test",
            }

    3 - Sumber bacaan untuk style guide (https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

*/

(function() {
    angular
        .module("fht", [
            "ionic",
            "ngResource", // Untuk factory mendapatkan data.
        ])
        .run(init)
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
        // var url = 'http://192.168.43.193/fhtserver';
        var url = 'http://localhost/fhtServer';

        return {
            profile: function() {
                return $resource(url + '/user/:action', { action: '@action' });
            },
            timeline: function() {
                return $resource(url + '/healthdata')
            },
            checkin: function() {
                return $resource(url + '/sickness')
            },
            groups: function() {
                return $resource(url + '/groups')
            }
        }
    }
})();