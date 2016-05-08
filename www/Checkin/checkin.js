(function() {
    angular
        .module("fht.checkin", [])
        .factory('CheckinFactory', profileFactory)

        .controller('checkinCtrl', profileCtrl)

    function checkinFactory() {
        return false;
    }

    function checkinCtrl() {
        console.log('Checkin Page');
    }

})();