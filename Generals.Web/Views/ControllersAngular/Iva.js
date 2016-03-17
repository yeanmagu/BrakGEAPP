
var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);

myapp.controller('IvaController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";


    getall();
    Mostrar(true, false);
    function getall() {

        $http.get(uri + '/Iva').success(function (response) {

            $scope.Datas = response;

            $scope.result = response;

            $scope.predicate = 'Descripcion';
            $scope.reverse = true;
            $scope.currentPage = 1;
            $scope.order = function (predicate) {
                $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
                $scope.predicate = predicate;
            }


            $scope.totalItems = $scope.Datas.length;
            $scope.numPerPage = 5;
            $scope.paginate = function (value) {
                var begin, end, index;
                begin = ($scope.currentPage - 1) * $scope.numPerPage;
                end = begin + $scope.numPerPage;
                index = $scope.Datas.indexOf(value);
                return (begin <= index && index < end);

            };
        });

    }
    $scope.Iva = {}

    function initialize() {
        $scope.Iva = {
            Id: "",
            Estado: "",
            Porcentaje: "",
            Descripcion: "",
            Fecha: "",
            IdUsuario: "",
            IdEmpresa:""
        }
        sessionStorage($scope.Iva)

    }



    $scope.nuevo = function () {
        $scope.one = false;
        $scope.two = true;
        $scope.Guardar = true;
        $scope.Modificar = false;
    }


    $scope.add = function () {

        var idemp = sessionStorage.getItem("IdEmp");
        var us = sessionStorage.getItem("users");
        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth();
        var yyyy = hoy.getFullYear();
        var f = mm + '/' + dd + '/' + yyyy;
        //if ($scope.nombre) {
        var Iva = {

            Descripcion: $scope.descripcion,
            Porcentaje:$scope.porcentaje,
            Estado: $scope.estado,
            Fecha: f,
            IdUsuario: us,
            IdEmpresa:idemp
        }

        if (Iva.Estado != true) {
            Iva.Estado = 'False';
        }

        $http.post(uri + '/Iva/Post', Iva).
            success(function (data, status, headers, config) {

                Mostrar(true, false);
                Clean();
                getall();
                alert("Registro Guardado Con exito!");

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
        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth();
        var yyyy = hoy.getFullYear();
        var f = mm + '/' + dd + '/' + yyyy;
        //if ($scope.nombre) {
        var Iva = {
            ID:$scope.id,
            Descripcion: $scope.descripcion,
            Porcentaje: $scope.porcentaje,
            Estado: $scope.estado,
            Fecha: f,
            IdUsuario: us,
            IdEmpresa: idemp
        }
        if (Iva.Estado != 'true') {
            Iva.Estado = 'False';
        }

        $http.put(uri + '/Iva/PUT', Iva).success(function (data, status, headers, config) {
            getall();
            Clean()
            Mostrar(true, false);
            alert('Registro Actualizado con Exito !');
        }).error(function (data, status, headers, config) {
            alert(data.ExceptionMessage);
        });

    }

    $scope.removeRow = function (codigo) {
        // alert(codigo);
        //  ('/api/cargo?cod=' + codigo
        if (confirm('Esta Seguro que desea Eliminar el registro?')) {
            $http.delete(uri + '/Iva?Id=' + codigo).success(function (data, status, headers, config) {

                alert('Registro Eliminado con Exito !');
                getall();
                Clean()
                Mostrar(true, false);
            }).error(function (data, status, headers, config) {
                alert(data.ExceptionMessage);

            });
        } else {
            return;
        }
        ;

    }

    $scope.GetByID = function (Iva) {

        $scope.descripcion = Iva.Descripcion;

        $scope.id = Iva.ID;

        $scope.estado = Iva.Estado;
        $scope.Check = $scope.estado;
        $scope.porcentaje=Iva.Porcentaje
        Mostrar(false, true);
        $scope.Guardar = false;
        $scope.Modificar = true;
    }


});

