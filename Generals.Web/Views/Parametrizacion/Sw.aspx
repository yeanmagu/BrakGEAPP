﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Sw.aspx.cs" Inherits="Generals.Web.Views.Parametrizacion.Sw" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
       <script src="../ControllersAngular/Sw.js"></script>  
    <script src="../js/jquery-2.1.1.min.js"></script>
    <%--<script src="../../template/plugins/pace/pace.min.js"></script>--%>
    <script src="../js/angular.js"></script>
    <script src="../js/angular-resource.js"></script> 
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/ui-bootstrap-tpls-0.11.0.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
          <div ng-controller="SwController" class="row" >
            <div class="row" ng-show="one"  id="Grid">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <div class="panel formgrid" >
                              <div class="panel-body">
                               <h4 class="text-thin">Sw</h4>
								 <hr>
                                <div class="col-md-12">                                     
                                    <div class="row">                                        
                                        <div class="col-md-12">
                                            <table class="table table-bordered table-vcenter">
                                                    <thead>
                                                        <tr class="morris-hover-row-label">
                                                            <th ><a href="" ng-click="order('Id')">ID</a>  </th>
                                                            <th ><a href="" ng-click="order('Descripcion')">Nombre</a>  </th>
                                                            <th >Activo</th>
                                                            <th >Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                         <tr>  
                                                             <td> <input type="text" ng-model="search.ID" /></td>  
                                                             <td> <input type="text" ng-model="search.Descripcion" /> </td>  
                                                              <td> <input type="text" ng-model="search.CodigoPostal" /> </td>  
                                                     
                                                              <td></td>
                                                            
                                                             <td></td>
                                                           </tr> 
                                                         <tr ng-repeat="Sw in result | orderBy:predicate:reverse | filter:paginate| filter:search">
                                                            <td>{{Sw.ID}}</td>
                                                            <td>{{Sw.Descripcion}}</td> 
                                                          
                                                            <td >
                                                                <input type="checkbox" class="checkbox form-checkbox "   ng-model="Sw.Estado" ng-true-value="{{Sw.Estado}}" />
                                               
                                                            </td>
                                                            <td>
                                                                <input type="button" value="Eliminar" class="btn btn-danger btn-icon " ng-click="removeRow(Sw.ID)" />
                                                                  <input type="button" value="Modificar" class="btn btn-mint btn-icon  icon-lg fa fa-trash" ng-model="Sw" ng-click="GetByID(Sw)" />
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
										                        <h4 class="text-thin">Registrar Sw</h4>
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
                                                                         <input type="text" class="form-control"  ng-model="Descripcion" required="required"  placeholder="Descripcion">
                                                                         <input type="text" class="form-control" ng-show="false"  ng-model="ID"  >
                                                                         </div>
                                                                     </div>  
                                                                      <div class="col-md-3">
                                                                         <div class="form-group">
                                                                           <label class="form-checkbox form-icon">
															                        <input type="checkbox"   ng-model="estado" ng-true-value="{{Sw.Estado}}" /> Activo
														                   </label>
                                                                         </div>
                                                                     </div>        
                                                                 </div>                
                                                             </div>
                                                                   </div>
                                                                 
										                        <%--</fieldset>--%>
										                        <!--===================================================-->
									                        </div>
                                                             <div class="row">
                                                              <div class="col-md-12">
                                                                   <div class="form-group"> 
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
        </div>
</asp:Content>
