var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('RemisionesExternasController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/RemisionesExternas').success(function (response) {
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
     $scope.RemisionesExternas = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.RemisionesExternas = {}
     function initialize()
        {
            $scope. RemisionesExternas =
            {
                   ID: "",
    IdOrdenProduccion: "",
    Fecha: "",
    IdUsario: "",
    FechaSistema: "",
    Observaciones: "",
    IdUsuarioDespachador: "",
    IdTransportador: "",
    ReciboPot: ""
            }
     }
     $scope.add = function ()
     {
            var RemisionesExternas = {
            }
            $http.post(uri + '/RemisionesExternas/Post', RemisionesExternas).
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
            var RemisionesExternas = {
                ID: "",
    IdOrdenProduccion: "",
    Fecha: "",
    IdUsario: "",
    FechaSistema: "",
    Observaciones: "",
    IdUsuarioDespachador: "",
    IdTransportador: "",
    ReciboPot: ""

            }
            $http.put(uri + '/RemisionesExternas/PUT',RemisionesExternas).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/RemisionesExternas?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (RemisionesExternas) {
                   $scope.ID = RemisionesExternas.ID;
        $scope.IdOrdenProduccion = RemisionesExternas.IdOrdenProduccion;
        $scope.Fecha = RemisionesExternas.Fecha;
        $scope.IdUsario = RemisionesExternas.IdUsario;
        $scope.FechaSistema = RemisionesExternas.FechaSistema;
        $scope.Observaciones = RemisionesExternas.Observaciones;
        $scope.IdUsuarioDespachador = RemisionesExternas.IdUsuarioDespachador;
        $scope.IdTransportador = RemisionesExternas.IdTransportador;
        $scope.ReciboPot = RemisionesExternas.ReciboPot;
        }
});
