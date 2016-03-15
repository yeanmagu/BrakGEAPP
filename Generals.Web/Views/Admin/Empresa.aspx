<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Empresa.aspx.cs" Inherits="Generals.Web.Views.Admin.Empresa" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../ControllersAngular/Empresa.js"></script>  
    <script src="../js/jquery-2.1.1.min.js"></script>
    <script src="../../template/plugins/pace/pace.min.js"></script>
    <script src="../js/angular.js"></script>
    <script src="../js/angular-resource.js"></script> 
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/ui-bootstrap-tpls-0.11.0.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     <div ng-controller="EmpresaController" class="row" >
            <div class="row" ng-show="one"  id="Grid">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <div class="panel formgrid" >
                              <div class="panel-body">
                                   <h4 class="text-thin">Empresa</h4>
									<hr>
                                <div class="col-md-12">                                     
                                    <div class="row">                                        
                                        <div class="col-md-12">
                                            <table class="table table-bordered table-vcenter">
                                                    <thead>
                                                        <tr class="morris-hover-row-label">
                                                            <th ><a href="" ng-click="order('Id')">ID</a></th>
                                                            <th ><a href="" ng-click="order('Nombre')">Nombre</a></th>
                                                            <th ><a href="" ng-click="order('PaginaWeb')">Pagina Web</a></th>
                                                            <th ><a href="" ng-click="order('Direccion')">Direccion</a></th>
                                                            <th ><a href="" ng-click="order('Telefono')">Telefono</a></th>
                                                            <th ><a href="" ng-click="order('Resolucion')">Resolucion</a></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                         <tr>  
                                                             <td> <input type="text" ng-model="search.ID" /></td>  
                                                              <td> <input type="text" ng-model="search.Nombre" /></td> 
                                                              <td> <input type="text" ng-model="search.PaginaWeb" /></td>                                                                
                                                             <td> <input type="text" ng-model="search.Direccion" /> </td>
                                                              <td> <input type="text" ng-model="search.Telefono" /></td>  
                                                             <td> <input type="text" ng-model="search.Resolucion" /> </td>
                                                              <td>Activo</td>
                                                            
                                                             <td>Acciones</td>
                                                           </tr> 
                                                         <tr ng-repeat="Empresa in result | orderBy:predicate:reverse | filter:paginate| filter:search">
                                                            <td>{{Empresa.ID}}</td>
                                                            <td>{{Empresa.Nombre}}</td>
                                                             <td>{{Empresa.PaginaWeb}}</td>
                                                            <td>{{Empresa.Direccion}}</td>
                                                            <td>{{Empresa.Telefono}}</td> 
                                                            <td>{{Empresa.Resolucion}}</td> 
                                                             <td ><input type="checkbox" class="btn" ng-model="TipoPersona.Estado" ng-true-value="{{TipoPersona.Estado}}" /></td>
                                                            <td>
                                                                <input type="button" value="Eliminar" class="btn btn-danger btn-icon " ng-click="removeRow(Empresa.ID)" />
                                                                  <input type="button" value="Modificar" class="btn btn-mint btn-icon  icon-lg fa fa-trash" ng-model="Empresa" ng-click="GetByID(Empresa)" />
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
										                        <h4 class="text-thin">Registrar Empresa</h4>
										                        <hr>
										                        <!--NOT EMPTY VALIDATOR-->
										                        <!--===================================================-->
										                        <%--<fieldset>--%>
                                                                   <div class="row  tabla ocultar ">  
                                                                      <div class="col-md-12">
                                                                       <div class="row">                                   
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="control-label">Nombre</label>
                                                                         <input type="text" class="form-control"  ng-model="descripcion" required="required"  placeholder="Descripcion">
                                                                             <input type="text" class="form-control" ng-show="false"  ng-model="id"  >
                                                                         </div>
                                                                     </div>    
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Pagina Web</label>
                                                                         <input type="text" class="form-control"  ng-model="nombre" required="required">
                                                                         </div>
                                                                     </div> 
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Direccion</label>
                                                                         <input type="text" class="form-control"  ng-model="direccion"  >
                                                                         </div>
                                                                     </div> 
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="col-lg-1 control-label">Telefono</label>
                                                                           <input type="text" class="form-control"  ng-model="telefono" >
                                                                         </div>
                                                                     </div>  
                                                                 </div>                
                                                             </div>
                                                              <div class="col-md-12">
                                                                       <div class="row">                                   
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="control-label">Logo</label>
                                                                             <asp:FileUpload ID="FileLogo" runat="server" />
                                                                              <input type="text" class="form-control" ng-show="false"  ng-model="logo"  >
                                                                         </div>
                                                                     </div>  
                                                                      <div class="col-sm-3">
												                        <div class="form-group">
													                       <label class="col-lg-1 control-label">Resolucion</label>
                                                                             <input type="text" class="form-control"  ng-model="Resolucion" >
												                         </div>
											                          </div>  
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Fecha de Resolucion</label>
                                                                         <input type="datetime" class="form-control"  ng-model="FechaResolucion">
                                                                         </div>
                                                                     </div> 
                                                                 </div>                
                                                             </div>
                                                                          <div class="col-md-12">
                                                                       <div class="row">                                   
                                                                    <div class="col-sm-3">
												                        <div class="form-group">
													                       <label class="col-lg-1 control-label">Contacto</label>
                                                                             <input type="text" class="form-control"  ng-model="Contacto" >
												                         </div>
											                          </div> 
                                                                            <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Notas</label>
                                                                         <input type="text" class="form-control"  ng-model="Nota" >
                                                                         </div>
                                                                     </div>
                                                                            <div class="col-md-3">
                                                                         <div class="form-group">
                                                                          <div class="checkbox">
														                        <label class="form-checkbox form-icon">
															                        <input type="checkbox" ng-model="estado" ng-true-value="{{Empresa.Estado}}" /> Activo
														                        </label>
                                                                         </div>
                                                                             </div>
                                                                     </div>
                                                                 </div>                
                                                             </div>
                                                                   </div>
										                     
									                        </div>
									                       
										                        <div class="row-form-group">
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
