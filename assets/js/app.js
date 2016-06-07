var app = angular.module('ngApp', ['datatables', 'ngResource']);
app.constant('END_POINT', 'lumen/public');
app.controller('ngCtrl', ['$scope', '$resource', 'fetchUsers', 'DTOptionsBuilder', 'DTColumnBuilder', function ($scope, $resource, fetchUsers, DTOptionsBuilder, DTColumnBuilder) {
    $scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
    fetchUsers.query().$promise.then(function(users) {
      $scope.users = users;
      console.log(users);
    });
    $scope.dtColumns = [
      DTColumnBuilder.newColumn('id').withOption('ID', 'asd'),
    ];
//    $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
//      console.log(fetchUsers.query());
//    }).withPaginationType('full_numbers');
  }]);

app.factory('fetchUsers', function ($http, $location, $resource, END_POINT) {
  return $resource($location.$$absUrl + END_POINT + '/users');
});