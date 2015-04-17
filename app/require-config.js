require.config({
    paths: {
        angular: 'bower_components/angular/angular',
        angularRoute: 'bower_components/ui-router/release/angular-ui-router',
        angularMocks: 'bower_components/angular-mocks/angular-mocks', // 种子项目还没用到
        text: 'bower_components/requirejs-text/text' // 种子项目还没用到
    },
    shim: {
        angular: {'exports' : 'angular'},
        angularRoute: ['angular'],
        angularMocks: {
            deps: ['angular'],
            exports: 'angular.mock'
        }
    },
    priority: [
        "angular"
    ]
});

require([
    'angular',
    'app',
    'router'
    ], function(angular, app, router) {
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function () {
            angular.bootstrap($html, ['myApp']);
        });
    }
);
