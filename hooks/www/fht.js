(function() {
    angular
        .module("fht", [
            "ionic",
            "ngResource", // Untuk factory mendapatkan data.
            "fht.profile",
            "fht.checkin",
            "fht.groups"
        ])
        .controller('rootCtrl', rootCtrl)
        .run(init);

    function rootCtrl($ionicPopup, $scope) {

        var vm = this;
        vm.data = {};
        vm.loginForm = showLoginForm;

        if (!sessionStorage.logged_in) {
            vm.loginForm();
        }

        // =============================

        function showLoginForm() {
            var myPopup = $ionicPopup.show({
                templateUrl: 'Profile/login_form.html',
                title: 'Enter Wi-Fi Password',
                subTitle: 'Please use normal things',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    }
                ]
            });
        }
    }

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
})();