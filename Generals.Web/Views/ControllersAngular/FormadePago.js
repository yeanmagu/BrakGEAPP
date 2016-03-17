
var myapp = angular.module('myapp', ['ui.bootstrap', 'ngResource']);

myapp.controller('FormaDePagoController', function ($scope, $http) {
    var uri = "http://localhost:48571/api";
    
    initialize();
    getall();


    Mostrar(true, false);
   
    function getall() {

        $http.get(uri + '/FormaDePago').success(function (response) {

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
   
  

    $scope.FormaDePago = {}

    function initialize()
    {
        $scope.FormaDePago =
            {
                ID: "",
                Id_Empresa: "",
                Descripcion: "",
                Explicacion: "",
                DiasCredito: "",
                Descuento: "",
                PorcentajeCredito: "",
                IdUsuario: "",
                FechaModificacion: ""
            }
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
       
        var date = new Date();
        var idemp = sessionStorage.getItem("IdEmp");
        var us = sessionStorage.getItem("users");
        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth();
        var yyyy = hoy.getFullYear();
        var f = mm + '/' + dd + '/' + yyyy;
        //if ($scope.nombre) {
        var FormaDePago = {

            Descripcion: $scope.descripcion,
            Id_Empresa: idemp,
            Explicacion: $scope.explicacion,
            DiasCredito: $scope.DiasCredito,
            Descuento: $scope.Descuento,
            PorcentajeCredito: $scope.PorcentajedeCredito,
            IdUsuario: us,
            FechaModificacion: f
        }

        $http.post(uri + '/FormaDePago/Post', FormaDePago).
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

        var date = new Date();
        var idemp = sessionStorage.getItem("IdEmp");
        var us = sessionStorage.getItem("users");
        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth();
        var yyyy = hoy.getFullYear();
        var f = mm + '/' + dd + '/' + yyyy;
        //if ($scope.nombre) {
        var FormaDePago = {
            ID:$scope.id,
            Descripcion: $scope.descripcion,
            Id_Empresa: idemp,
            Explicacion: $scope.explicacion,
            DiasCredito: $scope.DiasCredito,
            Descuento: $scope.Descuento,
            PorcentajeCredito: $scope.PorcentajedeCredito,
            IdUsuario: us,
            FechaModificacion: f
        }

        $http.put(uri + '/FormaDePago/PUT', FormaDePago).success(function (data, status, headers, config) {
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
            $http.delete(uri + '/FormaDePago?Id=' + codigo).success(function (data, status, headers, config) {
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

    $scope.GetByID = function (FormaDePago) {
        $scope.id = FormaDePago.ID;
        $scope.descripcion = FormaDePago.Descripcion;
        $scope.explicacion = FormaDePago.Explicacion;
        $scope.DiasCredito = FormaDePago.DiasCredito;
        $scope.Descuento = FormaDePago.Descuento;
        $scope.PorcentajedeCredito = FormaDePago.PorcentajeCredito;
      
        Mostrar(false, true);
        $scope.Guardar = false;
        $scope.Modificar = true;
    }


});