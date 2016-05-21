(function(){
    angular
        .module('fht')
        .controller('loginCtrl', loginCtrl)
        .controller('registerCtrl', registerCtrl);

    function loginCtrl(Database, $state) {
        var login       = this;
        login.user      = {};
        login.login     = doLogin;

        // --

        function doLogin() {

            // 1 - Get username and password from login.user
            // 2 - Send login.user to /user using POST
            Database.profile().save({ action: 'login', data: login.user }, loginSuccess);

            // 3 - Respond on server's response.
            // 5 - If fail, popup saying that credentials are wrong.
            function loginSuccess(response) {
                // 4 - If success go to Profile
                if (response.success) {
                    $state.go('tab.profile');
                } else {
                    alert(response.message);
                }
            }
        }
    }

    function registerCtrl() {}
    
})();