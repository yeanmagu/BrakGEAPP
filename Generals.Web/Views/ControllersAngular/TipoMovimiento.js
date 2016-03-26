var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('TipoMovimientoController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    CargarCombos();
    function getall() {
        $http.get(uri + '/TipoMovimiento').success(function (response) {
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
    $scope.TipoMovimiento = {}
    $scope.nuevo = function () {
        $scope.one = false;
        $scope.two = true;
        $scope.Guardar = true;
        $scope.Modificar = false;
    }
    $scope.TipoMovimiento = {}
    function initialize() {
        $scope.TipoMovimiento =
        {
            ID: "",
            Descripcion: "",
            IdBodega: "",
            Notas: "",
            IdSw: "",
            FechaCreacion: "",
            IdUsuario: "",
            ExcentoDelva: ""
        }
    }
    $scope.add = function () {
        var TipoMovimiento = {
        }
        $http.post(uri + '/TipoMovimiento/Post', TipoMovimiento).
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
        $scope.one = false;
        $scope.two = true;
    }
    $scope.cancelar = function () {
        Mostrar(true, false);
    }
    function Clean() {
        $(text).each(function () {
            $($(this)).val('');
        });
    }
    function CargarCombos() {

        $http.get(uri + '/Bodega').success(function (response) {
            $scope.Bodega = response;

        });

        $http.get(uri + '/Sw').success(function (response) {
            $scope.Sw = response;

        });
    }
    $scope.Update = function () {
        var TipoMovimiento = {
            ID: "",
            Descripcion: "",
            IdBodega: "",
            Notas: "",
            IdSw: "",
            FechaCreacion: "",
            IdUsuario: "",
            ExcentoDelva: ""

        }
        $http.put(uri + '/TipoMovimiento/PUT', TipoMovimiento).success(function (data, status, headers, config) {
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
            $http.delete(uri + '/TipoMovimiento?Id=' + codigo).success(function (data, status, headers, config) {
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
    $scope.GetByID = function (TipoMovimiento) {
        $scope.ID = TipoMovimiento.ID;
        $scope.Descripcion = TipoMovimiento.Descripcion;
        $scope.IdBodega = TipoMovimiento.IdBodega;
        $scope.Notas = TipoMovimiento.Notas;
        $scope.IdSw = TipoMovimiento.IdSw;
        $scope.FechaCreacion = TipoMovimiento.FechaCreacion;
        $scope.IdUsuario = TipoMovimiento.IdUsuario;
        $scope.ExcentoDelva = TipoMovimiento.ExcentoDelva;
    }
});
