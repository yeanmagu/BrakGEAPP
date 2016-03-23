var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('ProgramacionTareaController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/ProgramacionTarea').success(function (response) {
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
     $scope.ProgramacionTarea = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.ProgramacionTarea = {}
     function initialize()
        {
            $scope. ProgramacionTarea =
            {
                   Id: "",
    IdDocumento: "",
    IdEmpresa: "",
    IdReponsable: "",
    IdUsuario: "",
    IdProceso: "",
    Estado: "",
    FechaSistema: ""
            }
     }
     $scope.add = function ()
     {
            var ProgramacionTarea = {
            }
            $http.post(uri + '/ProgramacionTarea/Post', ProgramacionTarea).
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
            var ProgramacionTarea = {
                Id: "",
    IdDocumento: "",
    IdEmpresa: "",
    IdReponsable: "",
    IdUsuario: "",
    IdProceso: "",
    Estado: "",
    FechaSistema: ""

            }
            $http.put(uri + '/ProgramacionTarea/PUT',ProgramacionTarea).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/ProgramacionTarea?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (ProgramacionTarea) {
                   $scope.Id = ProgramacionTarea.Id;
        $scope.IdDocumento = ProgramacionTarea.IdDocumento;
        $scope.IdEmpresa = ProgramacionTarea.IdEmpresa;
        $scope.IdReponsable = ProgramacionTarea.IdReponsable;
        $scope.IdUsuario = ProgramacionTarea.IdUsuario;
        $scope.IdProceso = ProgramacionTarea.IdProceso;
        $scope.Estado = ProgramacionTarea.Estado;
        $scope.FechaSistema = ProgramacionTarea.FechaSistema;
        }
});
