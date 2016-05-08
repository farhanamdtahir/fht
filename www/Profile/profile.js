(function() {
    angular
        .module("fht.profile", [])
        .factory('ProfileFactory', profileFactory)

        .controller('profileCtrl', profileCtrl)

    function profileFactory($resource) {
        
        /*
            $resource akan menyediakan metod-metod berikut:
            .get()  = GET dengan respon {}
            .put()  = PUT dengan respon {}
            .save() = POST dengan respon {}
            .query()= GET dengan respon []
            .delete() = DELETE no respon.
    
        */

        return $resource('data/:filename', { 'filename': '@filename' });
    }

    function profileCtrl(ProfileFactory) {
        var vm = this;        
        
        vm.data = ProfileFactory.get({ filename: 'profile.json' });

        console.log('Profile Page');
    }

})();
