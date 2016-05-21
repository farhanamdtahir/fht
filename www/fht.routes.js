(function() {
    
    angular
        .module('fht')
        .config(routesConfig)

    function routesConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'Login/login.html',
                controller: 'loginCtrl',
                controllerAs: 'login'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'Login/register.html',
                controller: 'registerCtrl',
                controllerAs: 'register'
            })








            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'tabs.html'
            })

            .state('tab.profile', {
                url: '/profile',
                views: {
                    'tab-profile': {
                        templateUrl: 'Profile/profile.html'
                        // controller: 'profileCtrl',
                        // controllerAs: 'profile',
                    }
                }
            })
            .state('tab.checkin', {
                url: '/checkin',
                views: {
                    'tab-checkin': {
                        templateUrl: 'Checkin/checkin.html'
                        // controller: 'checkinCtrl',
                        // controllerAs: 'checkin' ,
                    }
                }
            })
            .state('tab.checkin-form', {
                url: '/checkin/:sickness_id',
                views: {
                    'tab-checkin': {
                        templateUrl: 'Checkin/checkin-form.html'
                        // controller: 'checkinFormCtrl',
                        // controllerAs: 'checkin' ,
                    }
                }
            })
            .state('tab.timeline', {
                url: '/timeline',
                views: {
                    'tab-timeline': {
                        templateUrl: 'Timeline/timeline.html'
                        // controller: 'timelineCtrl',
                        // controllerAs: 'timeline',
                    }
                }
            })
            .state('tab.groups', {
                url: '/groups',
                views: {
                    'tab-groups': {
                        templateUrl: 'Groups/groups.html'
                        // controller: 'groupsCtrl',
                        // controllerAs: 'groups' ,
                    }
                }
            })
        
            $urlRouterProvider.otherwise('/login');
    }
})();
