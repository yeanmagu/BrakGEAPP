var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('DetalleActaController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/DetalleActa').success(function (response) {
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
     $scope.DetalleActa = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.DetalleActa = {}
     function initialize()
        {
            $scope. DetalleActa =
            {
                   ID: "",
    IdActa: "",
    IdTipoMontaje: "",
    Cantidad: "",
    Cumple: "",
    Observaciones: "",
    Estado: "",
    FechaSistema: ""
            }
     }
     $scope.add = function ()
     {
            var DetalleActa = {
            }
            $http.post(uri + '/DetalleActa/Post', DetalleActa).
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
            var DetalleActa = {
                ID: "",
    IdActa: "",
    IdTipoMontaje: "",
    Cantidad: "",
    Cumple: "",
    Observaciones: "",
    Estado: "",
    FechaSistema: ""

            }
            $http.put(uri + '/DetalleActa/PUT',DetalleActa).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/DetalleActa?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (DetalleActa) {
                   $scope.ID = DetalleActa.ID;
        $scope.IdActa = DetalleActa.IdActa;
        $scope.IdTipoMontaje = DetalleActa.IdTipoMontaje;
        $scope.Cantidad = DetalleActa.Cantidad;
        $scope.Cumple = DetalleActa.Cumple;
        $scope.Observaciones = DetalleActa.Observaciones;
        $scope.Estado = DetalleActa.Estado;
        $scope.FechaSistema = DetalleActa.FechaSistema;
        }
});
