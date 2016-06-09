var app = angular.module('ngApp', ['datatables', 'ngResource', 'datatables.colreorder', 'datatables.columnfilter']);
app.constant('END_POINT', 'lumen/public');
app.controller('ngCtrl', ['$location', 'END_POINT', '$scope', 'DTOptionsBuilder', 'DTColumnBuilder',
  function ($location, END_POINT, $scope, DTOptionsBuilder, DTColumnBuilder) {
    $scope.dtOptions = DTOptionsBuilder.newOptions().
            withOption('ajax', {
              url: $location.$$absUrl + END_POINT + '/users', type: 'post'
            })
            .withDataProp('data')
            .withOption('serverSide', true)
            .withOption('processing', true)
            .withColReorder();
    
    $scope.dtColumns = [
      DTColumnBuilder.newColumn('id').notVisible(),
      DTColumnBuilder.newColumn('first_name').withTitle('First name'),
      DTColumnBuilder.newColumn('last_name').withTitle('Last name'),
      DTColumnBuilder.newColumn('email').withTitle('Email'),
      DTColumnBuilder.newColumn('salary').withTitle('Salary'),
      DTColumnBuilder.newColumn('occupation').withTitle('Occupation'),
      DTColumnBuilder.newColumn('phone_no').withTitle('Phone no'),
      DTColumnBuilder.newColumn('address').withTitle('Address')
    ];
  }]);

app.factory('fetchUsers', function ($location, $resource, END_POINT) {
  return 1;
});