var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('DetalleDocumentosController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/DetalleDocumentos').success(function (response) {
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
     $scope.DetalleDocumentos = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.DetalleDocumentos = {}
     function initialize()
        {
            $scope. DetalleDocumentos =
            {
                   ID: "",
    IdProducto: "",
    Cantidad: "",
    Precio: "",
    ivaPorcentaje: "",
    IdBodega: "",
    CostoUnidad: "",
    Descuento: ""
            }
     }
     $scope.add = function ()
     {
            var DetalleDocumentos = {
            }
            $http.post(uri + '/DetalleDocumentos/Post', DetalleDocumentos).
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
      $scope.Update = function (){
            var DetalleDocumentos = {
                ID: "",
    IdProducto: "",
    Cantidad: "",
    Precio: "",
    ivaPorcentaje: "",
    IdBodega: "",
    CostoUnidad: "",
    Descuento: ""

            }
            $http.put(uri + '/DetalleDocumentos/PUT',DetalleDocumentos).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/DetalleDocumentos?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (DetalleDocumentos) {
                   $scope.ID = DetalleDocumentos.ID;
        $scope.IdProducto = DetalleDocumentos.IdProducto;
        $scope.Cantidad = DetalleDocumentos.Cantidad;
        $scope.Precio = DetalleDocumentos.Precio;
        $scope.ivaPorcentaje = DetalleDocumentos.ivaPorcentaje;
        $scope.IdBodega = DetalleDocumentos.IdBodega;
        $scope.CostoUnidad = DetalleDocumentos.CostoUnidad;
        $scope.Descuento = DetalleDocumentos.Descuento;
        }
});
