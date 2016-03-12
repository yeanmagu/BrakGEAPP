﻿
var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);

myapp.controller('PaisesController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";


    getall();
    Mostrar(true, false);
    function getall() {

        $http.get(uri + '/Paises').success(function (response) {

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
    $scope.Paises = {}

    function initialize() {
        $scope.Paises = {
            Id: "",
            Estado: "",
            Descripcion: ""
        }
    }



    $scope.nuevo = function () {
        $scope.one = false;
        $scope.two = true;
        $scope.Guardar = true;
        $scope.Modificar = false;
    }


    $scope.add = function () {


        //if ($scope.nombre) {
        var Paises = {

            Descripcion: $scope.descripcion,
            codigoPostal: $scope.codigoPostal,
            Estado: $scope.estado
        }

        if (Paises.Estado != true) {
            Paises.Estado = 'False';
        }

        $http.post(uri + '/Paises/Post', Paises).
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

        var Paises =
            {
                Id: $scope.id,
                Descripcion: $scope.descripcion,
                Estado: $scope.estado

            }
        if (Paises.Estado != 'true') {
            Paises.Estado = 'False';
        }

        $http.put(uri + '/Paises/PUT', Paises).success(function (data, status, headers, config) {
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
            $http.delete(uri + '/Paises?Id=' + codigo).success(function (data, status, headers, config) {

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

    $scope.GetByID = function (Paises) {

        $scope.descripcion = Paises.Descripcion;

        $scope.id = Paises.ID;

        $scope.estado = Paises.Estado;
        $scope.Check = $scope.estado;

        Mostrar(false, true);
        $scope.Guardar = false;
        $scope.Modificar = true;
    }


});

