

myapp.service('TipoPersonaService', function ($http) {


   
    var uri = "http://localhost:48571/api";
  this.getAll =  function () {

        var p = $http.get(uri + '/TipoPersona');
        return p;
    }

});