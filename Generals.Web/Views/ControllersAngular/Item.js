var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('ItemController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    Mostrar(true, false);
    CargarCombos();
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
        var idemp = sessionStorage.getItem("IdEmp");
        var us = sessionStorage.getItem("users");
        var grup = document.getElementById("IdSubGrupo").value;
        var Iv = document.getElementById("IdIva").value;
        var IdCol = document.getElementById("IdColor").value;
        var Tall = document.getElementById("IdTalla").value;
        var Marc = document.getElementById("IdMarca").value;
        var Item = {
 
            IdEmpresa: idemp,
            Codigo: $scope.Codigo,
            Descripcion: $scope.Descripcion,
            Precio: $scope.Precio,
            SubGrupo: grup,
            IdIva: Iv,
            MaxDescuento: $scope.MaxDescuento,
            CantidadMinima: $scope.CantidadMinima,
            CantidadMaxima: $scope.CantidadMaxima,
            Anulado: $scope.Anulado,
            NumeroDecimales: $scope.NumeroDecimales,
            Notas: $scope.Notas,
            IdColor: IdCol,
            Modelo: $scope.Modelo,
            NroSerie: $scope.NroSerie,
            IdUsuario: us,
           
            FechaVencimiento: $scope.FechaVencimiento,
            ManejaStock: $scope.ManejaStock,
            IdTalla: Tall,
            StockActual: $scope.StockActual,
            DiasReposicion: $scope.DiasReposicion,
            CalificacionABC: $scope.CalificacionABC,
            Unidad: $scope.Unidad,
            IdMarca: Marc,
            Estado: "True"
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
        $scope.one = uno;

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
    function CargarCombos() {

        $http.get(uri + '/SubGrupo').success(function (response) {
            $scope.SubGrupo = response;

        });

        $http.get(uri + '/Talla').success(function (response) {
            $scope.Talla = response;

        });

        $http.get(uri + '/Marcas').success(function (response) {
            $scope.Marca = response;

        });

        $http.get(uri + '/Iva').success(function (response) {
            $scope.Iva = response;

        });

        $http.get(uri + '/Color').success(function (response) {
            $scope.Color = response;

        });


    }
    $scope.Update = function () {
        var idemp = sessionStorage.getItem("IdEmp");
        var us = sessionStorage.getItem("users");
        var grup = document.getElementById("IdSubGrupo").value;
        var Iv = document.getElementById("IdIva").value;
        var IdCol = document.getElementById("IdColor").value;
        var Tall = document.getElementById("IdTalla").value;
        var Marc = document.getElementById("IdMarca").value;
        var Item = {
            ID:$scope.ID,
            IdEmpresa: idemp,
            Codigo: $scope.Codigo,
            Descripcion: $scope.Descripcion,
            Precio: $scope.Precio,
            SubGrupo: grup,
            IdIva: Iv,
            MaxDescuento: $scope.MaxDescuento,
            CantidadMinima: $scope.CantidadMinima,
            CantidadMaxima: $scope.CantidadMaxima,
            Anulado: $scope.Anulado,
            NumeroDecimales: $scope.NumeroDecimales,
            Notas: $scope.Notas,
            IdColor: IdCol,
            Modelo: $scope.Modelo,
            NroSerie: $scope.NroSerie,
            IdUsuario: us,

            FechaVencimiento: $scope.FechaVencimiento,
            ManejaStock: $scope.ManejaStock,
            IdTalla: Tall,
            StockActual: $scope.StockActual,
            DiasReposicion: $scope.DiasReposicion,
            CalificacionABC: $scope.CalificacionABC,
            Unidad: $scope.Unidad,
            IdMarca: Marc,
            Estado: "True"
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
        $http.get(uri + '/Item?Id=' + Item.ID).success(function (response) {
            $scope.Item = response;

            $scope.ID = $scope.Item.ID;

            $scope.Codigo = $scope.Item.Codigo;
            $scope.Descripcion = $scope.Item.Descripcion;
            $scope.Precio = $scope.Item.Precio;
            $scope.IdSubGrupo = $scope.Item.SubGrupo;
            $scope.IdIva = $scope.Item.IdIva;
            $scope.MaxDescuento = $scope.Item.MaxDescuento;
            $scope.CantidadMinima = $scope.Item.CantidadMinima;
            $scope.CantidadMaxima = $scope.Item.CantidadMaxima;
            $scope.Anulado = $scope.Item.Anulado;
            $scope.NumeroDecimales = $scope.Item.NumeroDecimales;
            $scope.Notas = $scope.Item.Notas;
            $scope.IdColor = $scope.Item.IdColor;
            $scope.Modelo = $scope.Item.Modelo;
            $scope.NroSerie = $scope.Item.NroSerie;
          
            $scope.FechaCreacion = $scope.Item.FechaCreacion;
            $scope.FechaVencimiento = $scope.Item.FechaVencimiento;
            $scope.ManejaStock = $scope.Item.ManejaStock;
            $scope.IdTalla = $scope.Item.IdTalla;
            $scope.StockActual = $scope.Item.StockActual;
            $scope.DiasReposicion = $scope.Item.DiasReposicion;
            $scope.CalificacionABC = $scope.Item.CalificacionABC;
            $scope.Unidad = $scope.Item.Unidad;
            $scope.IdMarca = $scope.Item.IdMarca;
            $scope.Estado = $scope.Item.Estado;

            Mostrar(false, true);
            $scope.Guardar = false;
            $scope.Modificar = true;

        });

    }
});
