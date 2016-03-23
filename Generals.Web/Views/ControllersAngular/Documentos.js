var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('DocumentosController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/Documentos').success(function (response) {
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
     $scope.Documentos = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.Documentos = {}
     function initialize()
        {
            $scope. Documentos =
            {
                   ID: "",
    Id_Empresa: "",
    Id_Bodega: "",
    DiasValidez: "",
    TotalSub: "",
    Total_Descuento: "",
    Total: "",
    Notas: "",
    IdUsuario: "",
    IdDocumentoAnterior: "",
    EstadoDocumento: "",
    IdFormaPago: ""
            }
     }
     $scope.add = function ()
     {
            var Documentos = {
            }
            $http.post(uri + '/Documentos/Post', Documentos).
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
            var Documentos = {
                ID: "",
    Id_Empresa: "",
    Id_Bodega: "",
    DiasValidez: "",
    TotalSub: "",
    Total_Descuento: "",
    Total: "",
    Notas: "",
    IdUsuario: "",
    IdDocumentoAnterior: "",
    EstadoDocumento: "",
    IdFormaPago: ""

            }
            $http.put(uri + '/Documentos/PUT',Documentos).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/Documentos?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (Documentos) {
                   $scope.ID = Documentos.ID;
        $scope.Id_Empresa = Documentos.Id_Empresa;
        $scope.Id_Bodega = Documentos.Id_Bodega;
        $scope.DiasValidez = Documentos.DiasValidez;
        $scope.TotalSub = Documentos.TotalSub;
        $scope.Total_Descuento = Documentos.Total_Descuento;
        $scope.Total = Documentos.Total;
        $scope.Notas = Documentos.Notas;
        $scope.IdUsuario = Documentos.IdUsuario;
        $scope.IdDocumentoAnterior = Documentos.IdDocumentoAnterior;
        $scope.EstadoDocumento = Documentos.EstadoDocumento;
        $scope.IdFormaPago = Documentos.IdFormaPago;
        }
});
