<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TipoMontaje.aspx.cs" Inherits="Generals.Web.Admin.TipoMontaje" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div ng-controller="TipoPersonaController" class="row" >
            <div class="row" ng-show="one"  id="Grid">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <div class="panel formgrid" >
                              <div class="panel-body">
                                <div class="col-md-12">                                     
                                    <div class="row">                                        
                                        <div class="col-md-12">
                                            <table class="table table-bordered table-vcenter">
                                        <tr class="morris-hover-row-label">
                                            <th >ID</th>
                                            <th >Nombre</th>
                                            <th >Activo</th>
                                            <th >Eliminar</th>
                                            <th >Select</th>
                                        </tr>
                                        <tr ng-repeat="TipoPersona in result|filter:busqueda">
                                            <td>{{TipoPersona.ID}}</td>
                                            <td>{{TipoPersona.Descripcion}}</td>                                                                                      
                              
                                            <td ><input type="checkbox" class="btn" ng-model="TipoPersona.Estado" ng-true-value="{{TipoPersona.Estado}}" /></td>
                                            <td>
                                                <input type="button" value="Eliminar" class="btn btn-danger" ng-click="removeRow(TipoPersona.ID)" />
                                            </td>

                                            <td>
                                                <input type="button" value="Modificar" class="btn btn-success" ng-click="GetByID(TipoPersona)" />
                                            </td>
                                        </tr>
                                    </table>
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
                                                    	<div id="demo-bvd-notempty" action="forms-validation.html" class="form-horizontal">
									                        <div class="panel-body">
										                        <h4 class="text-thin">Tipo Persona</h4>
										                        <hr>
					
										                        <!--NOT EMPTY VALIDATOR-->
										                        <!--===================================================-->
										                        <%--<fieldset>--%>
											                        <div class="form-group">

												                        <label class="col-lg-1 control-label">Descripcion</label>
												                        <div class="col-lg-6">
													                        <input type="text" class="form-control" name="Descripcion" ng-model="descripcion"  placeholder="Descripcion">
                                                                             <input type="text" class="form-control" ng-show="false"  ng-model="id"  placeholder="ID">
												                        </div>
                                                                        <div class="col-lg-2">
                                                                                <div class="checkbox">
														                        <label class="form-checkbox form-icon">
															                        <input type="checkbox" name="estado" id="estado"  ng-model="estado" /> Activo
														                        </label>
													                        </div>
                                                                        </div>
                                                                       
											                        </div>
											                       
										                        <%--</fieldset>--%>
										                        <!--===================================================-->
					
									
					
									                        </div>
									                       
										                        <div class="row">
											                        <div class="col-sm-7 col-sm-offset-1">
												                        <button class="btn btn-primary btn-labeled fa fa-send fa-lg" ng-click="add()" type="submit">Guardar</button>
                                                                          <button class="btn btn-danger btn-labeled fa fa-times  fa-lg" type="submit">Cancelar</button>
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
