var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);

myapp.controller('GrupoController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";

    initialize();
    getall();
    Mostrar(true, false);
    CargarCombos();


    function getall() {

        $http.get(uri + '/Grupo').success(function (response) {

            $scope.Datas = response;

            $scope.result = response;
            //alert(JSON.stringify($scope.result));
            $scope.predicate = 'Descripcion';
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
    $scope.Grupo = {}

    function initialize() {
        $scope.dpt = {
            Id: 0

        }
        $scope.Grupo =
            {
                ID: "",
                IDEmpresa: "",
                Descripcion: "",
                Nombre: "",
                Direccion: "",
                Telefono: "",
                Publicidad: "",
                IdMunicipio: "",
                Notas: "",
                IDUsuario: "False",
                FechaModificacion: "",
                Estado: "",
                Resposable: ""
            }
    }
    function CargarCombos() {

        $http.get(uri + '/DPTO').success(function (response) {
            $scope.Dptos = response;

        });
    }

    $scope.CargarMunicipios = function (codigo) {

        //  $http.get(uri + '/Users?id=' + codigoUsuario).success(function (response) {
        $http.get(uri + '/Municipios?dpto=' + codigo).success(function (response) {
            $scope.Municipios = response;
        });
    }

    $scope.nuevo = function () {
        $scope.one = false;
        $scope.two = true;
        $scope.Guardar = true;
        $scope.Modificar = false;
    }


    $scope.add = function () {
        //if ($scope.nombre) {
        var Grupo = {

            Descripcion: $scope.descripcion,
            Estado: $scope.estado

        }

        if (Grupo.Estado != true) {
            Grupo.Estado = 'False';
        }

        $http.post(uri + '/Grupo/Post', Grupo).
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

        var Grupo =
            {
                Id: $scope.id,
                Descripcion: $scope.descripcion,
                Estado: $scope.estado

            }
        if (Grupo.Estado != 'true') {
            Grupo.Estado = 'False';
        }

        $http.put(uri + '/Grupo/PUT', Grupo).success(function (data, status, headers, config) {
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
            $http.delete(uri + '/Grupo?Id=' + codigo).success(function (data, status, headers, config) {
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

    $scope.GetByID = function (Grupo) {

        $scope.descripcion = Grupo.Descripcion;

        $scope.id = Grupo.ID;

        $scope.estado = Grupo.Estado;
        $scope.Check = $scope.estado;

        Mostrar(false, true);
        $scope.Guardar = false;
        $scope.Modificar = true;
    }


});