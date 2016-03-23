var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('MaterialesActaDetalleController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/MaterialesActaDetalle').success(function (response) {
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
     $scope.MaterialesActaDetalle = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.MaterialesActaDetalle = {}
     function initialize()
        {
            $scope. MaterialesActaDetalle =
            {
                   Id: "",
    IdDetalleActa: "",
    IdMaterial: "",
    Cantidad: "",
    Cumple: "",
    Observaciones: "",
    FechaSistema: "",
    Estado: ""
            }
     }
     $scope.add = function ()
     {
            var MaterialesActaDetalle = {
            }
            $http.post(uri + '/MaterialesActaDetalle/Post', MaterialesActaDetalle).
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
            var MaterialesActaDetalle = {
                Id: "",
    IdDetalleActa: "",
    IdMaterial: "",
    Cantidad: "",
    Cumple: "",
    Observaciones: "",
    FechaSistema: "",
    Estado: ""

            }
            $http.put(uri + '/MaterialesActaDetalle/PUT',MaterialesActaDetalle).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/MaterialesActaDetalle?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (MaterialesActaDetalle) {
                   $scope.Id = MaterialesActaDetalle.Id;
        $scope.IdDetalleActa = MaterialesActaDetalle.IdDetalleActa;
        $scope.IdMaterial = MaterialesActaDetalle.IdMaterial;
        $scope.Cantidad = MaterialesActaDetalle.Cantidad;
        $scope.Cumple = MaterialesActaDetalle.Cumple;
        $scope.Observaciones = MaterialesActaDetalle.Observaciones;
        $scope.FechaSistema = MaterialesActaDetalle.FechaSistema;
        $scope.Estado = MaterialesActaDetalle.Estado;
        }
});
