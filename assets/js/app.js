var app = angular.module('ngApp', ['datatables', 'ngResource', 'datatables.colreorder', 'datatables.light-columnfilter']);
app.constant('END_POINT', 'lumen/public');
app.controller('ngCtrl', ['$location', 'END_POINT', '$scope', 'DTOptionsBuilder', 'DTColumnBuilder', 'fetchUsers',
  function ($location, END_POINT, $scope, DTOptionsBuilder, DTColumnBuilder, fetchUsers) {
//    $scope.users = fetchUsers.get();
    console.log(fetchUsers.get());
    $scope.dtOptions = DTOptionsBuilder.newOptions().
            withOption('ajax', {
              url: $location.$$absUrl + END_POINT + '/users', type: 'post'
            })
           // .fromSource('data.json')
            .withDataProp('data')
            .withOption('serverSide', true)
            .withOption('processing', true)
            .withColReorder()
            .withLightColumnFilter({
              0: {
                type: 'text'
              },
              1: {
                type: 'text'
              },
              2: {
                type: 'text'
              },
              3: {
                type: 'text'
              },
              4: {
                type: 'text'
              },
              5: {
                type: 'text'
              },
              6: {
                type: 'text'
              }
            });

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
  //return 1;
  return $resource($location.$$absUrl + END_POINT + '/users');
});