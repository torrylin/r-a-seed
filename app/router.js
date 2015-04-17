'use strict';

define(['angular', 'app'], function (angular, app) {

    return app.config(function ($stateProvider, $urlRouterProvider) {

        // 默认路由事件
        $urlRouterProvider.otherwise('/404.html');
        $urlRouterProvider.when('/abc', '/s2');

        $stateProvider
            .state('state1', {
                url: '/s1',
                templateUrl: 'view1/view1.html'
            })
            .state('state1.list', {
                url: '/list',
                templateUrl: 'view1/view1.list.html',
                controller: function ($scope) {
                    $scope.items = ['torry', 'lynn', 'xiaobao', 'daxiong'];
                }
            })
            .state('state2', {
                url: '/s2',
                templateUrl: 'view2/view2.html'
            })
            .state('state2.list', {
                url: '/s2',
                templateUrl: 'view2/view2.list.html',
                controller: function ($scope) {
                    $scope.things = ['白面', '鸡蛋', '玉米', '猪肉']
                }
            });

        $stateProvider
            .state('index', {
                url: "",
                views: {
                    "viewA": { template: "index.viewA" },
                    "viewB": { template: "index.viewB" }
                }
            })
            .state('route1', {
                url: "/route1",
                views: {
                    "viewA": { template: "route1.viewA" },
                    "viewB": { template: "route1.viewB" }
                }
            })
            .state('route2', {
                url: "/route2",
                views: {
                    "viewA": { template: "route2.viewA" },
                    "viewB": { template: "route2.viewB" }
                }
            })
    });
});
