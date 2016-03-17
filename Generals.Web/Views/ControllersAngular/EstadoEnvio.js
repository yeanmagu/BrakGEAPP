
var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);

myapp.controller('EstadoEnvioController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";

    initialize();
    getall();
    Mostrar(true, false);
    function getall() {

        $http.get(uri + '/EstadoEnvio').success(function (response) {

            $scope.Datas = response;

            $scope.result = response;
            //alert(JSON.stringify($scope.result));
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
                var begin, end, index;
                begin = ($scope.currentPage - 1) * $scope.numPerPage;
                end = begin + $scope.numPerPage;
                index = $scope.Datas.indexOf(value);
                return (begin <= index && index < end);

            };
        });

    }
    $scope.EstadoDocumento = {}

    function initialize()
    {
        $scope.EstadoDocumento =
            {
                ID: "",
                Descripcion: "",
                Estado: ""
            }
    }

    $scope.nuevo = function ()
    {
        $scope.one = false;
        $scope.two = true;
        $scope.Guardar = true;
        $scope.Modificar = false;
    }


    $scope.add = function ()
    {
        //if ($scope.nombre) {
        var EstadoDocumento = {

            Descripcion: $scope.descripcion,
            Estado: $scope.estado

        }

        if (EstadoDocumento.Estado != true) {
            EstadoDocumento.Estado = 'False';
        }

        $http.post(uri + '/EstadoEnvio/Post', EstadoDocumento).
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

        var EstadoDocumento =
            {
                Id: $scope.id,
                Descripcion: $scope.descripcion,
                Estado: $scope.estado

            }
        if (EstadoDocumento.Estado != 'true') {
            EstadoDocumento.Estado = 'False';
        }

        $http.put(uri + '/EstadoEnvio/PUT', EstadoDocumento).success(function (data, status, headers, config) {
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
            $http.delete(uri + '/EstadoEnvio?Id=' + codigo).success(function (data, status, headers, config) {
                getall();
                Clean()
                Mostrar(true, false);
                alert('Registro Eliminado con Exito !');


            }).error(function (data, status, headers, config) {
                alert(data.ExceptionMessage);

            });
        } else {
            return;
        }
        ;

    }

    $scope.GetByID = function (EstadoDocumento) {

        $scope.descripcion = EstadoDocumento.Descripcion;

        $scope.id = EstadoDocumento.ID;

        $scope.estado = EstadoDocumento.Estado;
        $scope.Check = $scope.estado;

        Mostrar(false, true);
        $scope.Guardar = false;
        $scope.Modificar = true;
    }


});