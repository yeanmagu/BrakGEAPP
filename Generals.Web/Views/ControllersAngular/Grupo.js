var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('GrupoController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    Mostrar(true, false);
    function getall() {
        $http.get(uri + '/Grupo').success(function (response) {
            $scope.Datas = response;
            $scope.result = response;
            $scope.predicate = 'Nombre';
            $scope.reverse = true;
            $scope.currentPage = 1;
            $scope.order = function (predicate) {
                $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
                $scope.predicate = predicate;
            }
            $scope.totalItems = $scope.Datas.length;
            $scope.numPerPage = 5;
            $scope.paginate = function (value) {
                begin = ($scope.currentPage - 1) * $scope.numPerPage;
                end = begin + $scope.numPerPage;
                index = $scope.Datas.indexOf(value);
                return (begin <= index && index < end);
            };
        });
    }
    $scope.Grupo = {}
    $scope.nuevo = function () {
        $scope.one = false;
        $scope.two = true;
        $scope.Guardar = true;
        $scope.Modificar = false;
    }
    $scope.Grupo = {}
    function initialize() {
        $scope.Grupo =
        {
            ID: "",
            IdEmpresa: "",
            Descripcion: "",
            Estado: "",
            IdUsuario: "",
            Fecha: ""
        }
    }
    $scope.add = function () {
        var idemp = sessionStorage.getItem("IdEmp");
        var us = sessionStorage.getItem("users");
        var Grupo = {
           
            Descripcion: $scope.Descripcion,
            IdEmpresa: idemp,
            Estado: "True",
            IdUsuario: us
            
        }
        
        $http.post(uri + '/Grupo/Post', Grupo).
            success(function (data, status, headers, config) {
                Mostrar(true, false);
                Clean();
                getall();
                alert('Registro Guardado Con exito !');
            }).error(function (data, status, headers, config) {
                alert(data.ExceptionMessage);
            });
    }
    function Mostrar(uno, dos) {
        $scope.one = uno; // setting the first div visible when the page loads
        $scope.two = dos;
    }
    $scope.cancelar = function () {
        Mostrar(true, false);
    }
    function Clean() {
        $(":text").each(function () {
            $($(this)).val('');
        });

    }
    $scope.Update = function () {
        var idemp = sessionStorage.getItem("IdEmp");
        var us = sessionStorage.getItem("users");
        var Grupo = {
            ID: $scope.ID,
            Descripcion: $scope.Descripcion,
            IdEmpresa: idemp,
            Estado: "True",
            IdUsuario: us

        }
        $http.put(uri + '/Grupo/PUT', Grupo).success(function (data, status, headers, config) {
            Mostrar(true, false);
            Clean();
            getall();
            alert('Registro Actualizado con Exito !');
        }).error(function (data, status, headers, config) {
            alert(data.ExceptionMessage);
        });
    }
    $scope.removeRow = function (codigo) {
        if (confirm('Esta Seguro que desea Eliminar el registro?')) {
            $http.delete(uri + '/Grupo?Id=' + codigo).success(function (data, status, headers, config) {
                Mostrar(true, false);
                Clean();
                getall();
                alert('Registro Eliminado con Exito !');
            }).error(function (data, status, headers, config) {
                alert(data.ExceptionMessage);
            });
        } else {
            return;
        };
    }
    $scope.GetByID = function (Grupo) {
        $scope.ID = Grupo.ID;
        $scope.IdEmpresa = Grupo.IdEmpresa;
        $scope.Descripcion = Grupo.Descripcion;
        $scope.Estado = Grupo.Estado;
        $scope.IdUsuario = Grupo.IdUsuario;
        $scope.Fecha = Grupo.Fecha;
        Mostrar(false, true);
        $scope.Guardar = false;
        $scope.Modificar = true;
    }
});
