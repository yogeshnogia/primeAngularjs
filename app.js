//Module
var shr = angular.module('shr', ['ngRoute']);

//Routes
shr.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: "index.html",
            controller: "mainController"
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);



//Controllers
shr.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.input = "type a number..";
    $scope.value;
    $scope.btn = "Check";

    $scope.check = function(value) {

        $scope.flag = 0;
        $scope.ans;

        if ($scope.value <= 1) {
            $scope.ans = "Number is not Prime: " + $scope.value;
            return $scope.ans;
        }

        for (var i = 2; i <= $scope.value / 2; ++i) {
            // condition for nonprime number
            if ($scope.value % i == 0) {
                $scope.flag = 1;
                break;
            }
        }

        if ($scope.flag == 0) {
            $scope.ans = "Number is Prime: " + $scope.value;
            return $scope.ans;
        } else {
            $scope.ans = "Number is not Prime: " + $scope.value;
            return $scope.ans;
        }

    };

}]);