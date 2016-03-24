var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('ItemController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/Item').success(function (response) {
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
    $scope.Item = {}
    $scope.nuevo = function () {
        $scope.one = false;
        $scope.two = true;
        $scope.Guardar = true;
        $scope.Modificar = false;
    }
    $scope.Item = {}
    function initialize() {
        $scope.Item =
        {
            ID: "",
            IdEmpresa: "",
            Codigo: "",
            Descripcion: "",
            Precio: "",
            SubGrupo: "",
            IdIva: "",
            MaxDescuento: "",
            CantidadMinima: "",
            CantidadMaxima: "",
            Anulado: "",
            NumeroDecimales: "",
            Notas: "",
            IdColor: "",
            Modelo: "",
            NroSerie: "",
            IdUsuario: "",
            FechaCreacion: "",
            FechaVencimiento: "",
            ManejaStock: "",
            IdTalla: "",
            StockActual: "",
            DiasReposicion: "",
            CalificacionABC: "",
            Unidad: "",
            IdMarca: "",
            Estado: ""
        }
    }
    $scope.add = function () {
        var Item = {
        }
        $http.post(uri + '/Item/Post', Item).
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
    $scope.Update = function () {
        var Item = {
            ID: "",
            IdEmpresa: "",
            Codigo: "",
            Descripcion: "",
            Precio: "",
            SubGrupo: "",
            IdIva: "",
            MaxDescuento: "",
            CantidadMinima: "",
            CantidadMaxima: "",
            Anulado: "",
            NumeroDecimales: "",
            Notas: "",
            IdColor: "",
            Modelo: "",
            NroSerie: "",
            IdUsuario: "",
            FechaCreacion: "",
            FechaVencimiento: "",
            ManejaStock: "",
            IdTalla: "",
            StockActual: "",
            DiasReposicion: "",
            CalificacionABC: "",
            Unidad: "",
            IdMarca: "",
            Estado: ""

        }
        $http.put(uri + '/Item/PUT', Item).success(function (data, status, headers, config) {
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
            $http.delete(uri + '/Item?Id=' + codigo).success(function (data, status, headers, config) {
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
    $scope.GetByID = function (Item) {
        $scope.ID = Item.ID;
        $scope.IdEmpresa = Item.IdEmpresa;
        $scope.Codigo = Item.Codigo;
        $scope.Descripcion = Item.Descripcion;
        $scope.Precio = Item.Precio;
        $scope.SubGrupo = Item.SubGrupo;
        $scope.IdIva = Item.IdIva;
        $scope.MaxDescuento = Item.MaxDescuento;
        $scope.CantidadMinima = Item.CantidadMinima;
        $scope.CantidadMaxima = Item.CantidadMaxima;
        $scope.Anulado = Item.Anulado;
        $scope.NumeroDecimales = Item.NumeroDecimales;
        $scope.Notas = Item.Notas;
        $scope.IdColor = Item.IdColor;
        $scope.Modelo = Item.Modelo;
        $scope.NroSerie = Item.NroSerie;
        $scope.IdUsuario = Item.IdUsuario;
        $scope.FechaCreacion = Item.FechaCreacion;
        $scope.FechaVencimiento = Item.FechaVencimiento;
        $scope.ManejaStock = Item.ManejaStock;
        $scope.IdTalla = Item.IdTalla;
        $scope.StockActual = Item.StockActual;
        $scope.DiasReposicion = Item.DiasReposicion;
        $scope.CalificacionABC = Item.CalificacionABC;
        $scope.Unidad = Item.Unidad;
        $scope.IdMarca = Item.IdMarca;
        $scope.Estado = Item.Estado;
    }
});
