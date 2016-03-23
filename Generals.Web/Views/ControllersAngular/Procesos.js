var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('ProcesosController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/Procesos').success(function (response) {
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
     $scope.Procesos = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.Procesos = {}
     function initialize()
        {
            $scope. Procesos =
            {
                   ID: "",
    IdTipoProceso: "",
    IdDocumento: "",
    Descripcion: "",
    Cantidad: "",
    IdUsuario: "",
    FechaSistema: ""
            }
     }
     $scope.add = function ()
     {
            var Procesos = {
            }
            $http.post(uri + '/Procesos/Post', Procesos).
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
            var Procesos = {
                ID: "",
    IdTipoProceso: "",
    IdDocumento: "",
    Descripcion: "",
    Cantidad: "",
    IdUsuario: "",
    FechaSistema: ""

            }
            $http.put(uri + '/Procesos/PUT',Procesos).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/Procesos?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (Procesos) {
                   $scope.ID = Procesos.ID;
        $scope.IdTipoProceso = Procesos.IdTipoProceso;
        $scope.IdDocumento = Procesos.IdDocumento;
        $scope.Descripcion = Procesos.Descripcion;
        $scope.Cantidad = Procesos.Cantidad;
        $scope.IdUsuario = Procesos.IdUsuario;
        $scope.FechaSistema = Procesos.FechaSistema;
        }
});
