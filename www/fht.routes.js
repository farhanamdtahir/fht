(function() {
    
    angular
        .module('fht')
        .config(routesConfig)

    function routesConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'tabs.html'
            })

            .state('tab.profile', {
                url: '/profile',
                views: {
                    'tab-profile': {
                        controller: 'profileCtrl',
                        controllerAs: 'profile',
                        templateUrl: 'Profile/profile.html'
                    }
                }
            })
            .state('tab.checkin', {
                url: '/checkin',
                views: {
                    'tab-checkin': {
                        controller: 'checkinCtrl',
                        controllerAs: 'checkin' ,
                        templateUrl: 'Checkin/checkin.html'
                    }
                }
            })
            .state('tab.timeline', {
                url: '/timeline',
                views: {
                    'tab-timeline': {
                        controller: 'timelineCtrl',
                        controllerAs: 'timeline',
                        templateUrl: 'Timeline/timeline.html'
                    }
                }
            })
            .state('tab.groups', {
                url: '/groups',
                views: {
                    'tab-groups': {
                        controller: 'groupsCtrl',
                        controllerAs: 'groups' ,
                        templateUrl: 'Groups/groups.html'
                    }
                }
            })
            

            $urlRouterProvider.otherwise('tab/profile');
    }
})();