(function(){
    angular
        .module('fht')
        .controller('registerCtrl', registerCtrl);

    function registerCtrl(Database, $state) {
        var register            = this;
        register.user           = {};
        register.doRegistration = doRegistration;

        //--

        function doRegistration() {
            Database.profile().save(
                { action: 'register', data: register.user },
                registerSuccess
            );

            function registerSuccess(response) {
                if (response.success) {
                    $state.go('tab.profile');
                } else {
                    alert(response.message);
                }
            }  
        }
    }

})();

