var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('InventarioController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/Inventario').success(function (response) {
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
     $scope.Inventario = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.Inventario = {}
     function initialize()
        {
            $scope. Inventario =
            {
                   ID: "",
    IdItem: "",
    IdDocumento: "",
    CantidadAnterior: "",
    CantidadDespachada: "",
    CantidadDisponible: "",
    IdUsuario: "",
    Fecha: ""
            }
     }
     $scope.add = function ()
     {
            var Inventario = {
            }
            $http.post(uri + '/Inventario/Post', Inventario).
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
            var Inventario = {
                ID: "",
    IdItem: "",
    IdDocumento: "",
    CantidadAnterior: "",
    CantidadDespachada: "",
    CantidadDisponible: "",
    IdUsuario: "",
    Fecha: ""

            }
            $http.put(uri + '/Inventario/PUT',Inventario).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/Inventario?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (Inventario) {
                   $scope.ID = Inventario.ID;
        $scope.IdItem = Inventario.IdItem;
        $scope.IdDocumento = Inventario.IdDocumento;
        $scope.CantidadAnterior = Inventario.CantidadAnterior;
        $scope.CantidadDespachada = Inventario.CantidadDespachada;
        $scope.CantidadDisponible = Inventario.CantidadDisponible;
        $scope.IdUsuario = Inventario.IdUsuario;
        $scope.Fecha = Inventario.Fecha;
        }
});
