var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('ActasController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/Actas').success(function (response) {
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
     $scope.Actas = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.Actas = {}
     function initialize()
        {
            $scope. Actas =
            {
                   ID: "",
    IdDocumento: "",
    IdTipoActa: "",
    Fecha: "",
    Observaciones: "",
    IdUsuario: "",
    Hora: "",
    FechaSistema: "",
    Estado: ""
            }
     }
     $scope.add = function ()
     {
            var Actas = {
            }
            $http.post(uri + '/Actas/Post', Actas).
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
            var Actas = {
                ID: "",
    IdDocumento: "",
    IdTipoActa: "",
    Fecha: "",
    Observaciones: "",
    IdUsuario: "",
    Hora: "",
    FechaSistema: "",
    Estado: ""

            }
            $http.put(uri + '/Actas/PUT',Actas).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/Actas?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (Actas) {
                   $scope.ID = Actas.ID;
        $scope.IdDocumento = Actas.IdDocumento;
        $scope.IdTipoActa = Actas.IdTipoActa;
        $scope.Fecha = Actas.Fecha;
        $scope.Observaciones = Actas.Observaciones;
        $scope.IdUsuario = Actas.IdUsuario;
        $scope.Hora = Actas.Hora;
        $scope.FechaSistema = Actas.FechaSistema;
        $scope.Estado = Actas.Estado;
        }
});
