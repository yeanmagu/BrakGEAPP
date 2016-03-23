var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('RecibosCajasController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/RecibosCajas').success(function (response) {
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
     $scope.RecibosCajas = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.RecibosCajas = {}
     function initialize()
        {
            $scope. RecibosCajas =
            {
                   Id: "",
    IdEmpresa: "",
    IdBodega: "",
    IdCliente: "",
    IdDocumento: "",
    Fecha: "",
    Notas: "",
    Anulado: "",
    Valor: "",
    Descuento: "",
    Efectivo: "",
    Cambio: "",
    IdUsuario: "",
                IdUsuarioVende:""
            }
     }
     $scope.add = function ()
     {
            var RecibosCajas = {
            }
            $http.post(uri + '/RecibosCajas/Post', RecibosCajas).
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
            var RecibosCajas = {
                Id: "",
    IdEmpresa: "",
    IdBodega: "",
    IdCliente: "",
    IdDocumento: "",
    Fecha: "",
    Notas: "",
    Anulado: "",
    Valor: "",
    Descuento: "",
    Efectivo: "",
    Cambio: "",
    IdUsuario: "",
                IdUsuarioVende:""
            }
            $http.put(uri + '/RecibosCajas/PUT',RecibosCajas).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/RecibosCajas?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (RecibosCajas) {
                   $scope.Id = RecibosCajas.Id;
        $scope.IdEmpresa = RecibosCajas.IdEmpresa;
        $scope.IdBodega = RecibosCajas.IdBodega;
        $scope.IdCliente = RecibosCajas.IdCliente;
        $scope.IdDocumento = RecibosCajas.IdDocumento;
        $scope.Fecha = RecibosCajas.Fecha;
        $scope.Notas = RecibosCajas.Notas;
        $scope.Anulado = RecibosCajas.Anulado;
        $scope.Valor = RecibosCajas.Valor;
        $scope.Descuento = RecibosCajas.Descuento;
        $scope.Efectivo = RecibosCajas.Efectivo;
        $scope.Cambio = RecibosCajas.Cambio;
        $scope.IdUsuario = RecibosCajas.IdUsuario;
        $scope.IdUsuarioVende = RecibosCajas.IdUsuarioVende;
        }
});
