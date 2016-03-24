<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Item.aspx.cs" Inherits="Generals.Web.Views.Parametrizacion.Item" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../ControllersAngular/Item.js"></script>  
    <script src="../js/jquery-2.1.1.min.js"></script>
    <script src="../../template/plugins/pace/pace.min.js"></script>
    <script src="../js/angular.js"></script>
    <script src="../js/angular-resource.js"></script> 
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/ui-bootstrap-tpls-0.11.0.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
  <div ng-controller="ItemController" class="row" >
            <div class="row" ng-show="one"  id="Grid">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <div class="panel formgrid" >
                              <div class="panel-body">
                                   <h4 class="text-thin">Item</h4>
									<hr>
                                <div class="col-md-12">                                     
                                    <div class="row">                                        
                                        <div class="col-md-12">
                                            <table class="table table-bordered table-vcenter">
                                                    <thead>
                                                        <tr class="morris-hover-row-label">
                                                            <th ><a href="" ng-click="order('Id')">ID</a>  </th>
                                                            <th ><a href="" ng-click="order('Descripcion')">Descripcion</a>  </th>
                                                          <th >Activo</th>
                                                            <th >Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                         <tr>  
                                                      
                                                             <td> <input type="text" ng-model="search.ID" /></td>  
                                                             <td> <input type="text" ng-model="search.Descripcion" /> </td>  
                                                              <td></td>
                                                            
                                                             <td></td>
                                                           </tr> 
                                                         <tr ng-repeat="Item in result | orderBy:predicate:reverse | filter:paginate| filter:search">
                                                            <td>{{Item.ID}}</td>
                                                            <td>{{Item.Descripcion}}</td> 
                                                              <td >
                                                                <input type="checkbox" class="checkbox form-checkbox "   ng-model="Item.Estado" ng-true-value="{{Item.Estado}}" />
                                               
                                                            </td>
                                                            <td>
                                                                <input type="button" value="Eliminar" class="btn btn-danger btn-icon " ng-click="removeRow(Item.ID)" />
                                                                  <input type="button" value="Modificar" class="btn btn-mint btn-icon  icon-lg fa fa-trash" ng-model="Item" ng-click="GetByID(Item)" />
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
										                        <h4 class="text-thin">Registrar Item</h4>
										                        <hr>
										                        <!--NOT EMPTY VALIDATOR-->
										                        <!--===================================================-->
										                        <%--<fieldset>--%>
											                         <div class="row  tabla ocultar ">  
                                                                      <div class="col-md-12">
                                                                       <div class="row">                                   
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="control-label">Descripcion</label>
                                                                         <input type="text" class="form-control"  ng-model="descripcion" required="required"  placeholder="Descripcion">
                                                                             <input type="text" class="form-control" ng-show="false"  ng-model="id"  >
                                                                         </div>
                                                                     </div>    
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Sub Grupo</label>
                                                                        <select class="form-control" ng-model="CiudadResidencia" >
                                                                                     <option ng-repeat="mun in Municipios" value="mun.Id">{{mun.Nombre}}</option>
                                                                        </select>
                                                                         </div>
                                                                     </div> 
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Iva</label>
                                                                         <input type="text" class="form-control"  ng-model="direccion"  >
                                                                         </div>
                                                                     </div> 
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="col-lg-1 control-label">Maximo Descuento</label>
                                                                           <input type="text" class="form-control"  ng-model="telefono" >
                                                                         </div>
                                                                     </div>  
                                                                 </div>                
                                                             </div>
                                                              <div class="col-md-12">
                                                                       <div class="row">                                   
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="control-label">Cantidad Minima</label>
                                                                         <input type="text" class="form-control"  ng-model="publicidad" >
                                                                         </div>
                                                                     </div>  
                                                                      <div class="col-sm-3">
												                                <div class="form-group">
													                                <label class="control-label">Cantidad Maxima</label>
													                                <select class="form-control" ng-model="Dptos" ng-change="CargarMunicipios(Dptos)">
                                                                                      <option ng-repeat="dpt in Dptos" value="{{dpt.ID}}">{{dpt.Nombre}}</option>
                                                                                    </select>
												                                </div>
											                                </div>
											                                <div class="col-sm-3">
												                                <div class="form-group">
													                               <label class="control-label">Anulado</label>
													                               <select class="form-control" ng-model="CiudadResidencia" >
                                                                                     <option ng-repeat="mun in Municipios" value="mun.Id">{{mun.Nombre}}</option>
                                                                                    </select>
												                                </div>
											                                </div> 
                                                                       <div class="col-md-3">
                                                                  <div class="form-group">
                                                                    <label class="col-lg-1 control-label">Numero Decimales</label>
                                                                      <input  class="form-control"  ng-model="responsable" > 
                                                                    </div>
                                                                  </div> 
                                                                 </div>                
                                                             </div>
                                                             <div class="col-md-12">
                                                                       <div class="row">                                   
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="control-label">Color</label>
                                                                         <input type="text" class="form-control"  ng-model="descripcion" required="required"  placeholder="Descripcion">
                                                                            
                                                                         </div>
                                                                     </div>    
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Modelo</label>
                                                                         <input type="text" class="form-control"  ng-model="nombre" required="required">
                                                                         </div>
                                                                     </div> 
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Nª Serie</label>
                                                                         <input type="text" class="form-control"  ng-model="direccion"  >
                                                                         </div>
                                                                     </div> 
                                                                     <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="col-lg-1 control-label">Fecha de Creacion</label>
                                                                           <input type="date" style="height:34px" class="form-control"  ng-model="FechaModificacion">
                                                                         </div>
                                                                     </div>  
                                                                 </div>                
                                                             </div>
                                                             <div class="col-md-12">
                                                               <div class="row">  
                                                                 <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Fecha de Vencimiento</label>
                                                                         <input type="date" style="height:34px" class="form-control"  ng-model="FechaModificacion">
                                                                         </div>
                                                                     </div> 
                                                                   <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Maneja Stock</label>
                                                                         <input type="text" class="form-control"  ng-model="direccion"  >
                                                                         </div>
                                                                     </div> 
                                                                   <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Talla</label>
                                                                         <select class="form-control" ng-model="CiudadResidencia" >
                                                                                     <option ng-repeat="mun in Talla" value="mun.Id">{{mun.Nombre}}</option>
                                                                         </select>
                                                                         </div>
                                                                     </div> 
                                                                   <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Stock Actual</label>
                                                                         <input type="text" class="form-control"  ng-model="direccion"  >
                                                                         </div>
                                                                     </div> 
                                                                    <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Dias Reposicion</label>
                                                                         <input type="text" class="form-control"  ng-model="direccion"  >
                                                                         </div>
                                                                     </div> 
                                                           <%--        <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="col-lg-1 control-label">Nota</label>
                                                                           <textarea  class="form-control"  ng-model="nota" > </textarea>
                                                                         </div>
                                                                     </div>  --%>
                                                              
                                                                 </div>                
                                                             </div>
                                                              <div class="col-md-12">
                                                               <div class="row">  
                                                                 <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Calificacion ABC</label>
                                                                         <input type="text" style="height:34px" class="form-control"  ng-model="FechaModificacion">
                                                                         </div>
                                                                     </div> 
                                                                   <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Unidad</label>
                                                                         <input type="text" class="form-control"  ng-model="direccion"  >
                                                                         </div>
                                                                     </div> 
                                                                   <div class="col-md-3">
                                                                         <div class="form-group">
                                                                         <label class="control-label">Marca</label>
                                                                         <select class="form-control" ng-model="CiudadResidencia" >
                                                                                     <option ng-repeat="mun in Municipios" value="mun.Id">{{mun.Nombre}}</option>
                                                                         </select>
                                                                         </div>
                                                                     </div>   
                                                                   <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="col-lg-1 control-label">Nota</label>
                                                                           <textarea  class="form-control"  ng-model="nota" > </textarea>
                                                                         </div>
                                                                     </div>  
                                                                     <div class="col-md-3">
                                                                        <br />
                                                                   
                                                                     <div class="checkbox">
														               <label class="form-checkbox form-icon">
															             <input type="checkbox" ng-model="estado" ng-true-value="{{Item.Estado}}" /> Activo
														               </label>
                                                                     </div>
                                                                  
                                                                     </div>
                                                              
                                                                 </div>                
                                                             </div>
                                                                   </div>
										                        <%--</fieldset>--%>
										                        <!-- -->
									                        </div>
										                        <%--</fieldset>--%>
										                        <!--===================================================-->
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
