<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ControldeEntregasInternas.aspx.cs" Inherits="Generals.Web.Views.Procesos.ControldeEntregasInternas" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../js/jquery-2.1.1.min.js"></script>
    <script src="../../template/plugins/pace/pace.min.js"></script>
    <script src="../js/angular.js"></script>
    <script src="../js/angular-resource.js"></script> 
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/ui-bootstrap-tpls-0.11.0.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     <div ng-controller="ControldeProcesosController" class="row" >
            <div class="row" ng-show="one"  id="Grid">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <div class="panel formgrid" >
                              <div class="panel-body">
                                   <h4 class="text-thin">Control de Procesos</h4>
									<hr>
                                <div class="col-md-12">                                     
                                    <div class="row">                                        
                                        <div class="col-md-12">
                                            <table class="table table-bordered table-vcenter">
                                                    <thead>
                                                        <tr class="morris-hover-row-label">
                                                            <th ><a href="" ng-click="order('Id')">ID</a>  </th>
                                                            <th ><a href="" ng-click="order('Fecha')">Fecha</a>  </th>
                                                            <th ><a href="" ng-click="order('Medida1')">Medida 1</a>  </th>
                                                             <th ><a href="" ng-click="order('Medida2')">Medida 2</a>  </th>
                                                            <th ><a href="" ng-click="order('Especificaciones')">Especificaciones</a>  </th>
                                                            <th ><a href="" ng-click="order('Elementos')">Elementos</a>  </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                         <tr>  
                                                      
                                                             <td> <input type="text" ng-model="search.ID" /></td>  
                                                             <td> <input type="text" ng-model="search.Fecha" /> </td>
                                                              <td> <input type="text" ng-model="search.Medida1" /></td>  
                                                             <td> <input type="text" ng-model="search.Medida2" /> </td>
                                                              <td> <input type="text" ng-model="search.Especificaciones" /></td>  
                                                             <td> <input type="text" ng-model="search.Elementos" /> </td>
                                                           
                                                              <td></td>
                                                            
                                                             <td></td>
                                                           </tr> 
                                                         <tr ng-repeat="ControldeProcesos in result | orderBy:predicate:reverse | filter:paginate| filter:search">
                                                            <td>{{ControldeProcesos.ID}}</td>
                                                            <td>{{ControldeProcesos.Fecha}}</td> 
                                                            <td>{{ControldeProcesos.Medida1}}</td>
                                                            <td>{{ControldeProcesos.Medida2}}</td>
                                                            <td>{{ControldeProcesos.Especificaciones}}</td> 
                                                            <td>{{ControldeProcesos.Elementos}}</td> 
                                                            <td>
                                                                <input type="button" value="Eliminar" class="btn btn-danger btn-icon " ng-click="removeRow(ControldeProcesos.ID)" />
                                                                  <input type="button" value="Modificar" class="btn btn-mint btn-icon  icon-lg fa fa-trash" ng-model="ControldeProcesos" ng-click="GetByID(ControldeProcesos)" />
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
										                        <h4 class="text-thin">Registrar Control de Procesos</h4>
										                        <hr>
										                        <!--NOT EMPTY VALIDATOR-->
										                        <!--===================================================-->
										                        <%--<fieldset>--%>
                                                                   <div class="row  tabla ocultar ">  
                                                                      <div class="col-md-12">
                                                                       <div class="row">                                   
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="control-label">Fecha</label>
                                                                         <input type="datetime" class="form-control"  ng-model="fecha" required="required"  placeholder="Descripcion">
                                                                             <input type="text" class="form-control" ng-show="false"  ng-model="id"  >
                                                                         </div>
                                                                     </div>    
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Medida 1</label>
                                                                         <input type="text" class="form-control"  ng-model="nombre" required="required">
                                                                         </div>
                                                                     </div> 
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Medida 2</label>
                                                                         <input type="text" class="form-control"  ng-model="direccion"  >
                                                                         </div>
                                                                     </div> 
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="col-lg-1 control-label">Elementos</label>
                                                                           <input type="text" class="form-control"  ng-model="telefono" maxlength="1">
                                                                         </div>
                                                                     </div>  
                                                                 </div>                
                                                             </div>
                                                              <div class="col-md-12">
                                                                       <div class="row">                                   
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <div class="checkbox">
														                        <label class="form-checkbox form-icon">
															                        <input type="checkbox" ng-model="estado" ng-true-value="{{ControldeProcesos.Estado}}" /> Soldadura
														                        </label>
                                                                         </div>
                                                                         </div>
                                                                     </div>  
                                                                      <div class="col-sm-3">
												                        <div class="form-group">
													                       <div class="checkbox">
														                        <label class="form-checkbox form-icon">
															                        <input type="checkbox" ng-model="estado" ng-true-value="{{ControldeProcesos.Estado}}" /> Exceso de Soldadura
														                        </label>
                                                                         </div>
												                         </div>
											                          </div>  
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                          <div class="checkbox">
														                        <label class="form-checkbox form-icon">
															                        <input type="checkbox" ng-model="estado" ng-true-value="{{ControldeProcesos.Estado}}" /> Manchas de Soldadura
														                        </label>
                                                                         </div>
                                                                         </div>
                                                                     </div>  
                                                                     
                                                                 </div>                
                                                             </div>
                                                                          <div class="col-md-12">
                                                                       <div class="row">                                   
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                          <div class="checkbox">
														                        <label class="form-checkbox form-icon">
															                        <input type="checkbox" ng-model="estado" ng-true-value="{{ControldeProcesos.Estado}}" /> Activo
														                        </label>
                                                                         </div>
                                                                             </div>
                                                                     </div>
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="col-lg-1 control-label">Responsable</label>
                                                                           <textarea  class="form-control"  ng-model="responsable" > </textarea>
                                                                         </div>
                                                                     </div> 
                                                                 </div>                
                                                             </div>
                                                                   </div>
										                        <%--</fieldset>--%>
										                        <!-- -->
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
