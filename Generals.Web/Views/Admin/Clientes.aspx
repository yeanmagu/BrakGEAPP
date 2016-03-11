<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Clientes.aspx.cs" Inherits="Generals.Web.Clientes" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../ControllersAngular/Clientes.js"></script>  
    <script src="../js/jquery-2.1.1.min.js"></script>
    <script src="../../template/plugins/pace/pace.min.js"></script>
    <script src="../js/angular.js"></script>
    <script src="../js/angular-resource.js"></script> 
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/ui-bootstrap-tpls-0.11.0.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">    
        <div ng-controller="ClienteController" class="row" >
            <div class="row" ng-show="one"  id="Grid">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <div class="panel formgrid" >
                              <div class="panel-body">
                                   <h4 class="text-thin">Clientes</h4>
                                   <hr>
                                <div class="col-md-12">                                     
                                    <div class="row">                                        
                                        <div class="col-md-12">
                                            <table class="table table-bordered table-vcenter table-responsive">
                                                    <thead>
                                                        <tr class="morris-hover-row-label">
                                                             <th ><a href="" ng-click="order('Id')">ID</a>  </th>
                                                             <th ><a href="" ng-click="order('NroDocumento')">Tipo Doc.</a>  </th>                                                     
                                                             <th ><a href="" ng-click="order('NroDocumento')">Documento</a>  </th>
                                                             <th ><a href="" ng-click="order('Nombre')">Nombre</a>  </th>
                                                             <th ><a href="" ng-click="order('Apellidos')">Apellido</a>  </th>
                                                             <th ><a href="" ng-click="order('Telefono')">Telefono</a>  </th>                                                             
                                                             <th ><a href="" ng-click="order('Email')">Email</a>  </th>
                                                            <th >Activo</th>
                                                            <th >Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                         <tr>  
                                                      
                                                             <td> <input type="text" class="form-control" ng-model="search.ID" /></td>  
                                                                <td> <input type="text" class="form-control" ng-model="search.DescTipoDocumento" /> </td> 
                                                              <td> <input type="text" class="form-control" ng-model="search.NroDocumento" /></td>  
                                                             <td> <input type="text" class="form-control" ng-model="search.Nombre" /> </td>  
                                                              <td> <input type="text" class="form-control" ng-model="search.Apellidos" /></td>  
                                                             <td> <input type="text" class="form-control" ng-model="search.Telefono" /> </td>  
                                                               <td> <input type="text" class="form-control" ng-model="search.Email" /> </td> 
                                                              
                                                             
                                                               <td></td>
                                                             <td></td>
                                                           </tr> 
                                                         <tr ng-repeat="Cliente in result | orderBy:predicate:reverse | filter:paginate| filter:search">
                                                            <td>{{Cliente.ID}}</td>
                                                               <td> {{Cliente.DescTipoDocumento}}</td>                                                                                     
                                                             <td> {{Cliente.NroDocumento}}</td>  
                                                             <td> {{Cliente.Nombre}}</td>  
                                                             <td> {{Cliente.Apellidos}}</td>  
                                                              <td> {{Cliente.Telefono}}</td>    
                                                             <td> {{Cliente.Email}}</td>      
                                                            <td >
                                                                <input type="checkbox" class="checkbox form-checkbox "   ng-model="Cliente.Estado" ng-true-value="{{Cliente.Estado}}" />
                                               
                                                            </td>
                                                            <td>
                                                                <input type="button" value="Eliminar" class="btn btn-danger btn-icon " ng-click="removeRow(Cliente.ID)" />
                                                                  <input type="button" value="Modificar" class="btn btn-mint btn-icon  icon-lg fa fa-trash" ng-model="Cliente" ng-click="GetByID(Cliente)" />
                                                                 <%--<button class="btn btn-danger btn-icon btn-circle icon-lg fa fa-trash"  ></button>--%>   
                                                            </td>

                                                        </tr>
                                                     </tbody>
                                            </table>
                                            <pagination total-items="totalItems" ng-model="currentPage"   max-size="5" boundary-links="true"  
                                                    items-per-page="numPerPage" class="pagination-sm">  
                                            </pagination>  
                                        </div>
                                    </div>
                                </div>                                 
                                <div class="col-md-12">
                                    <input type="button" value="Nuevo" ng-click="nuevo()" class="btn btn-default" />
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
                
            </div>                                                                     
            <div class="row" id="form" ng-show="two" >
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <div class="panel formgrid" >
                                <div class="panel-body">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12">                                                       
                                                    	<div id="demo-bvd-notempty" action="Views/Admin/forms-validation.html" class="form-horizontal">
									                        <div class="panel-body">
										                        <h4 class="text-thin">Cliente</h4>
										                        <hr>
					
										                        <!--NOT EMPTY VALIDATOR-->
										                        <!--===================================================-->
										                        <%--<fieldset>--%>
											                       
                                                                      <div class="row">
											                                <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">ID</label>
													                                <input type="text" class="form-control"  ng-disabled="false" ng-enable="false" ng-model="Cliente.ID">
                                                                                   
												                                </div>
											                                </div>
											                                <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Tipo Persona</label>
													                               <select class="form-control" ng-model="Cliente.TipoCliente" <%--ng-options="TipoPer as TipoPer.Descripcion for TipoPer in TipoPersonas track by TipoPer.Id"--%>>
                                                                                             <option value="">--Elige opcion--</option>
                                                                                       <option ng-repeat="tip in TipoPersonas" value="tip.Id">{{tip.Descripcion}}</option>
                                                                                    </select>
												                                </div>
											                                </div>
                                                                           <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Tipo Documento</label>
													                               <select class="form-control" ng-model="Cliente.TipoDocumento" <%--ng-options="Documento as Documento.Descripcion for Documento in Documentos track by Documento.Id"--%> >
                                                                                           <option value="">--Elige opcion--</option>
                                                                                       <option ng-repeat="doc in Documentos" value="doc.Id">{{doc.Descripcion}}</option>
                                                                                    </select>
												                                </div>
											                                </div>
                                                                           <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Nro. Documento</label>
													                                 <input type="number" class="form-control" ng-model="Cliente.NroDocumento">
												                                </div>
											                                </div>
										                                </div>
                                                                        <div class="row">
											                                <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Nombre</label>
													                                <input type="text" class="form-control" ng-model="Cliente.Nombre">
												                                </div>
											                                </div>
											                                <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Apellido</label>
													                                <input type="text" class="form-control " ng-model="Cliente.Apellido">
												                                </div>
											                                </div>
                                                                            <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Fecha Nacimiento</label>
													                                <input type="date" class="form-control" style="height:34px !important;" ng-model="Cliente.FechaNacimiento">
												                                </div>
											                                </div>
                                                                            <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Dirección</label>
													                                <input type="text" class="form-control" ng-model="Cliente.Direccion">
												                                </div>
											                                </div>
                                                                            
										                                </div>
                                                                        <div class="row">
                                                                             <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Dpto.</label>
													                                <select class="form-control" ng-model="Cliente.Dpto" ng-change="CargarMunicipios()" <%--ng-options="Dpto as Dpto.Nombre for Dpto in Dptos track by Dpto.Id"--%>>
                                                                                             <option value="">--Elige opcion--</option>
                                                                                            <option ng-repeat="dpto in Dptos" value="dpto.Id "  >{{dpto.Nombre}}</option>
                                                                                    </select>
												                                </div>
											                                </div>
											                                <div class="col-sm-3">
												                                <div class="form-group">
													                               <label class="control-label">Ciudad Res.</label>
													                               <select class="form-control" ng-model="Cliente.CiudadResidencia" <%--ng-options="Dpto as Dpto.Nombre for Dpto in Dptos track by Dpto.Id"--%>>
                                                                                             <option value="">--Elige opcion--</option>
                                                                                            <option ng-repeat="mun in Municipios" value="mun.Id"  >{{mun.Nombre}}</option>
                                                                                    </select>
												                                </div>
											                                </div>
											                                <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Telefono</label>
													                                <input type="tel" class="form-control " ng-model="Cliente.Telefono">
												                                </div>
											                                </div>
                                                                            <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Celular</label>
													                                <input type="tel" class="form-control"  ng-model="Cliente.Celular">
												                                </div>
											                                </div>
                                                                            
                                                                            
										                                </div>
											                            <div class="row">
                                                                            <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Email</label>
													                                <input type="email" class="form-control" ng-model="Cliente.Email">
												                                </div>
											                                </div>
											                                <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Contacto</label>
													                                <input type="text" class="form-control" ng-model="Cliente.Contacto">
												                                </div>
											                                </div>
											                               
										                                </div>
                                                                <div class="row">  
                                                                            <div class="col-sm-3">
												                                <div class="form-group">    													                               
												                                    <label class="control-label" >Aplica AUI</label>
													                                <input type="checkbox" class="checkbox"  ng-model="Cliente.AplicaAUI">
											                                       
												                                </div>
											                                </div>                                                                
                                                                            <div class="col-sm-3">
												                                <div class="form-group">    													                               
												                                    <label class="control-label" >Recibir Email</label>
													                                <input type="checkbox" class="checkbox"  ng-model="Cliente.RecibirEmail">
											                                       
												                                </div>
											                                </div>
                                                                            <div class="col-sm-3">
												                                <div class="form-group">
													                                   <label class="control-label">Activo</label>
													                                <input type="checkbox" class="checkbox " ng-model="Cliente.Activo">
												                                </div>
											                                </div>
                                                                            <div class="col-sm-3">
												                                <div class="form-group">
													                                   <label class="control-label">Autoretenedores</label>
													                                <input type="checkbox" class="checkbox " ng-model="Cliente.Autoretenedores">
												                                </div>
											                                </div>
                                                                </div>
                                                                        <div class="row">
                                                                            <div class="col-sm-12">
												                                <div class="form-group">
													                                <label class="control-label">Notas</label>
													                                <input type="text" class="form-control " ng-model="Cliente.Notas">
												                                </div>
											                                </div>
                                                                        </div>
											                       
										                        <%--</fieldset>--%>
										                        <!--===================================================-->
					
									
					
									                        </div>
									                       
										                        <div class="row">
											                        <div class="col-sm-7 col-sm-offset-1">
                                                                       
												                        <button class="btn btn-mint btn-labeled fa fa-send fa-lg" ng-click="add()" ng-show="Guardar" >Guardar</button>
                                                                         <button class="btn btn-mint btn-labeled fa fa-send fa-lg" ng-click="Update()" ng-show="Modificar" >Modificar</button>
                                                                          <button class="btn btn-danger btn-labeled fa fa-times  fa-lg" ng-click="cancelar()">Cancelar</button>
											                        </div>
										                        </div>
									                        
								                        </div>
                                                
                                                </div>
                                            </div>
                                           
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
</asp:Content>
