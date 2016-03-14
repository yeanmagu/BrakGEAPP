
var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);

myapp.controller('ModificacionesController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";

    initialize();
    getall();
    CargarCombos();
    Mostrar(true, false);
    function getall() {

        $http.get(uri + '/Modificaciones').success(function (response) {

            $scope.Datas = response;

            $scope.result = response;
            //alert(JSON.stringify($scope.result));
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
                var begin, end, index;
                begin = ($scope.currentPage - 1) * $scope.numPerPage;
                end = begin + $scope.numPerPage;
                index = $scope.Datas.indexOf(value);
                return (begin <= index && index < end);

            };
        });

    }
    $scope.Cliente = {}

    function initialize()
    {
        $scope.Cliente =
            {
                ID: "",
                TipoDocumento: "",
                NroDocumento: "",
                Nombre: "",
                Apellido: "",
                Telefono: "",
                Email: "",
                Estado: "",
                Tipo: "2",
                RegimenSimplificado: "False" ,           
                Celular :"",
                FechaNacimiento:"",
                CiudadResidencia:"",
                Nota : "" ,            
                TipoModificaciones :"",           
                IdEmpesa:"",
                Autoretenedores: "False",
                AplicaAIU: "False",
                Contacto:"",
                RecibirEmail: "False",
                FechaCreacion:"",
                IdUsuario:""
            }
    }

    function CargarCombos()
    {
       
        $http.get(uri + '/TipoModificaciones').success(function (response) {
           
           
            $scope.TipoModificacioness = response;

        });
       
    }

   
    $scope.nuevo = function ()
    {
        $scope.one = false;
        $scope.two = true;
        $scope.Guardar = true;
        $scope.Modificar = false;
    }


    $scope.add = function ()
    {
        //if ($scope.nombre) {
        var Cliente = {

            Descripcion: $scope.descripcion,
            Estado: $scope.estado

        }

        if (Cliente.Estado != true) {
            Cliente.Estado = 'False';
        }

        $http.post(uri + '/Modificaciones/Post', Cliente).
            success(function (data, status, headers, config) {

                Mostrar(true, false);
                Clean();
                getall();
                alert("Registro Guardado Con exito!");

            }).error(function (data, status, headers, config) {
                alert(data.ExceptionMessage);
            });

    }
    function Mostrar(uno, dos) {
        $scope.one = uno; // setting the first div visible when the page loads
        $scope.two = dos;
    }
    $scope.cancelar = function () {
        Mostrar(true, false);
    }
    function Clean() {
        $(":text").each(function () {
            $($(this)).val('');
        });

    }
    $scope.Update = function () {

        var Cliente =
            {
                Id: $scope.id,
                Descripcion: $scope.descripcion,
                Estado: $scope.estado

            }
        if (Cliente.Estado != 'true') {
            Cliente.Estado = 'False';
        }

        $http.put(uri + '/Modificaciones/PUT', Cliente).success(function (data, status, headers, config) {
            getall();
            Clean()
            Mostrar(true, false);
            alert('Registro Actualizado con Exito !');
        }).error(function (data, status, headers, config) {
            alert(data.ExceptionMessage);
        });

    }

    $scope.removeRow = function (codigo) {
        // alert(codigo);
        //  ('/api/cargo?cod=' + codigo
        if (confirm('Esta Seguro que desea Eliminar el registro?')) {
            $http.delete(uri + '/Modificaciones?Id=' + codigo).success(function (data, status, headers, config) {
                getall();
                Clean()
                Mostrar(true, false);
                alert('Registro Eliminado con Exito !');


            }).error(function (data, status, headers, config) {
                alert(data.ExceptionMessage);

            });
        } else {
            return;
        }
        ;

    }

    $scope.GetByID = function (Cliente) {

        $scope.descripcion = Cliente.Descripcion;

        $scope.id = Cliente.ID;

        $scope.estado = Cliente.Estado;
        $scope.Check = $scope.estado;

        Mostrar(false, true);
        $scope.Guardar = false;
        $scope.Modificar = true;
    }


});
