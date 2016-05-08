(function() {
    angular
        .module("fht.checkin", [])
        .factory('CheckinFactory', profileFactory)

        .controller('checkinCtrl', profileCtrl)

    function profileFactory() {
        return false;
    }

    function profileCtrl() {
        console.log('Checkin Page');
    }

})();