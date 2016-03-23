var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('SubGrupoController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/SubGrupo').success(function (response) {
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
     $scope.SubGrupo = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.SubGrupo = {}
     function initialize()
        {
            $scope. SubGrupo =
            {
                   ID: "",
    IdGrupo: "",
    Descripcion: "",
    IdUsuario: "",
    Fecha: "",
    Estado: ""
            }
     }
     $scope.add = function ()
     {
            var SubGrupo = {
            }
            $http.post(uri + '/SubGrupo/Post', SubGrupo).
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
            var SubGrupo = {
                ID: "",
    IdGrupo: "",
    Descripcion: "",
    IdUsuario: "",
    Fecha: "",
    Estado: ""

            }
            $http.put(uri + '/SubGrupo/PUT',SubGrupo).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/SubGrupo?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (SubGrupo) {
                   $scope.ID = SubGrupo.ID;
        $scope.IdGrupo = SubGrupo.IdGrupo;
        $scope.Descripcion = SubGrupo.Descripcion;
        $scope.IdUsuario = SubGrupo.IdUsuario;
        $scope.Fecha = SubGrupo.Fecha;
        $scope.Estado = SubGrupo.Estado;
        }
});
