var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('TallaController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/Talla').success(function (response) {
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
     $scope.Talla = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.Talla = {}
     function initialize()
        {
            $scope. Talla =
            {
                   ID: "",
    Descripcion: "",
    CodigoTalla: "",
    IdEmpresa: "",
    Fecha: "",
    IdUsuario: "",
    Estado: ""
            }
     }
     $scope.add = function ()
     {
            var Talla = {
            }
            $http.post(uri + '/Talla/Post', Talla).
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
            var Talla = {
                ID: "",
    Descripcion: "",
    CodigoTalla: "",
    IdEmpresa: "",
    Fecha: "",
    IdUsuario: "",
    Estado: ""

            }
            $http.put(uri + '/Talla/PUT',Talla).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/Talla?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (Talla) {
                   $scope.ID = Talla.ID;
        $scope.Descripcion = Talla.Descripcion;
        $scope.CodigoTalla = Talla.CodigoTalla;
        $scope.IdEmpresa = Talla.IdEmpresa;
        $scope.Fecha = Talla.Fecha;
        $scope.IdUsuario = Talla.IdUsuario;
        $scope.Estado = Talla.Estado;
        }
});
