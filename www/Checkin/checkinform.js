(function() {
    angular
        .module("fht.checkin", [])
        .controller('checkinFormCtrl', checkinFormCtrl)

    function checkinFormCtrl(CheckinFactory) {
        var vm = this;        
        vm.sickness = 'name';

        vm.data = CheckinFactory.query({ filename: 'checkin.json' });
        console.log('Checkin Page');
    }

})();
