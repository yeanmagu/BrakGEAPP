var myapp = angular.module('defauld', ['ngResource']);

myapp.controller('UsersController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    
    GetCodigoEmpresa(sessionStorage.getItem("users"));
    function GetCodigoEmpresa(codigoUsuario) {

        $http.get(uri + '/Users?id=' + codigoUsuario).success(function (response) {
            $scope.Data = response;

            $scope.resul = response;
            sessionStorage.setItem("IdEmp", $scope.resul.IdEmpresa)
            alert(sessionStorage.getItem("IdEmp"));
        });

    }
});