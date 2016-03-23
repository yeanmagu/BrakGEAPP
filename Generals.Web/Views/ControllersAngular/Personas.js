var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);
myapp.controller('PersonasController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    initialize();
    getall();
    function getall() {
        $http.get(uri + '/Personas').success(function (response) {
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
     $scope.Personas = {}
     $scope.nuevo = function ()
        {
            $scope.one = false;
            $scope.two = true;
            $scope.Guardar = true;
            $scope.Modificar = false;
        }
     $scope.Personas = {}
     function initialize()
        {
            $scope. Personas =
            {
                   ID: "",
    TipoDocumento: "",
    NroDocumento: "",
    Nombre: "",
    Apellidos: "",
    Telefono: "",
    Celular: "",
    FechaNacimiento: "",
    CiudadResidencia: "",
    Nota: "",
    Tipo: "",
    TipoPersona: "",
    RegimenSimplificado: "",
    IdEmpresa: "",
    Autoretenedores: "",
    AplicaAIU: "",
    Contacto: "",
    RecibirEmail: "",
    FechaCreacion: "",
    IdUsuario: "",
    Estado: "",
    Email: "",
    DescTipo: "",
    DescMunicipio: "",
    DescTipoPersona: "",
    DescDocumento: ""
            }
     }
     $scope.add = function ()
     {
            var Personas = {
            }
            $http.post(uri + '/Personas/Post', Personas).
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
            var Personas = {
                ID: "",
    TipoDocumento: "",
    NroDocumento: "",
    Nombre: "",
    Apellidos: "",
    Telefono: "",
    Celular: "",
    FechaNacimiento: "",
    CiudadResidencia: "",
    Nota: "",
    Tipo: "",
    TipoPersona: "",
    RegimenSimplificado: "",
    IdEmpresa: "",
    Autoretenedores: "",
    AplicaAIU: "",
    Contacto: "",
    RecibirEmail: "",
    FechaCreacion: "",
    IdUsuario: "",
    Estado: "",
    Email: "",
    DescTipo: "",
    DescMunicipio: "",
    DescTipoPersona: "",
    DescDocumento: ""

            }
            $http.put(uri + '/Personas/PUT',Personas).success(function (data, status, headers, config) {
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
                $http.delete(uri + '/Personas?Id=' + codigo).success(function (data, status, headers, config) {
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
      $scope.GetByID = function (Personas) {
                   $scope.ID = Personas.ID;
        $scope.TipoDocumento = Personas.TipoDocumento;
        $scope.NroDocumento = Personas.NroDocumento;
        $scope.Nombre = Personas.Nombre;
        $scope.Apellidos = Personas.Apellidos;
        $scope.Telefono = Personas.Telefono;
        $scope.Celular = Personas.Celular;
        $scope.FechaNacimiento = Personas.FechaNacimiento;
        $scope.CiudadResidencia = Personas.CiudadResidencia;
        $scope.Nota = Personas.Nota;
        $scope.Tipo = Personas.Tipo;
        $scope.TipoPersona = Personas.TipoPersona;
        $scope.RegimenSimplificado = Personas.RegimenSimplificado;
        $scope.IdEmpresa = Personas.IdEmpresa;
        $scope.Autoretenedores = Personas.Autoretenedores;
        $scope.AplicaAIU = Personas.AplicaAIU;
        $scope.Contacto = Personas.Contacto;
        $scope.RecibirEmail = Personas.RecibirEmail;
        $scope.FechaCreacion = Personas.FechaCreacion;
        $scope.IdUsuario = Personas.IdUsuario;
        $scope.Estado = Personas.Estado;
        $scope.Email = Personas.Email;
        $scope.DescTipo = Personas.DescTipo;
        $scope.DescMunicipio = Personas.DescMunicipio;
        $scope.DescTipoPersona = Personas.DescTipoPersona;
        $scope.DescDocumento = Personas.DescDocumento;
        }
});
