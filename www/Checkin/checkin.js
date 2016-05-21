(function() {
    angular
        .module("fht.checkin", [])
        .factory('CheckinFactory', checkinFactory)
        .controller('checkinCtrl', checkinCtrl)
        .controller('checkinFormCtrl', checkinFormCtrl)
        .run(function ($http) {
            $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        })

        function checkinFactory($resource) {
            return $resource('data/:filename', { 'filename': '@filename' });
        }

        function checkinCtrl(CheckinFactory) {
            var vm = this;        

            vm.data = CheckinFactory.query({ filename: 'checkin.json' });
            console.log('Checkin Page');
        }

        function checkinFormCtrl($http, $stateParams) {
            var vm = this;    
            vm.sickness_id = $stateParams.sickness_id;
            vm.description = null;

            console.log('Checkin Form Page');
            var url = "http://kembara.my/fht.php";

            vm.submit = function() {
                $http.post(url, { sickness_id: vm.sickness_id, description: vm.description })
                .then(function(response) {
                    vm.response = response.data
                })
            }
        }

})();
