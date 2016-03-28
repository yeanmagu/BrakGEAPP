var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('SwController', function ($scope, $http) {

    var uri = "http://localhost:48571/api";

    initialize();
    getall();
    Mostrar(true, false);

    function getall() {
        $http.get(uri + '/Sw').success(function (response) {
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


    $scope.nuevo = function () {
        $scope.one = false;
        $scope.two = true;
        $scope.Guardar = true;
        $scope.Modificar = false;
    }

    $scope.Sw = {}

    function initialize() {
        $scope.Sw =
        {
            ID: "",
            Descripcion: "",
            IdUsuario:"",
            Estado: ""
        }
    }

    $scope.add = function () {
        var us = sessionStorage.getItem("users");
        var Sw = {
         
            Descripcion: $scope.Descripcion,
            Estado: "True",
            IdUsuario:us

        }

        $http.post(uri + '/Sw/Post', Sw).
            success(function (data, status, headers, config) {
                getall();
                Clean()
                Mostrar(true, false);
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

        var Sw = {
            ID: $scope.ID,
            Descripcion: $scope.Descripcion,
            Estado: "False"

        }

        $http.put(uri + '/Sw/PUT', Sw).success(function (data, status, headers, config) {
           
            getall();
            Clean()
            Mostrar(true, false);
            alert('Registro Actualizado con Exito !');

        }).error(function (data, status, headers, config) {
            alert(data.ExceptionMessage);
        });
    }

    $scope.removeRow = function (codigo) {
        if (confirm('Esta Seguro que desea Eliminar el registro?')) {
            $http.delete(uri + '/Sw?Id=' + codigo).success(function (data, status, headers, config) {
               
                getall();
                Clean()
                Mostrar(true, false);
                alert('Registro Eliminado con Exito !');
            }).error(function (data, status, headers, config) {
                alert(data.ExceptionMessage);
            });
        } else {
            return;
        };
    }

    $scope.GetByID = function (Sw) {
        $scope.ID = Sw.ID;
        $scope.Descripcion = Sw.Descripcion;
        $scope.Estado = Sw.Estado;
        Mostrar(false, true);
        $scope.Guardar = false;
        $scope.Modificar = true;
    }
});
