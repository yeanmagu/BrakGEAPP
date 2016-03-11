<%@ Page Title="Mensajeria" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="VerEstadoMensajeria.aspx.cs" Inherits="Generals.Web.VerEstadoMensajeria"  EnableEventValidation="false" %>
<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=11.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery.min.js"></script>

    <script src="Scripts/EventForms.js"></script>
    <style>
        .varsession
        {
            display:none;
        }
    </style>
    <script>
        $(document).ready(function () {
            
            var g = $('<%= lblActa.ClientID %>').val();

            var f = $(".varsession").val();
            if(f == "1")
            {
                mostrarDatos();
            } else {
               
            }
        });
    </script>

     <style>
        .active {
            color:#000 !important;
        }

        .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {
            color:#303030 !important;
        }

        .texto {
            color:#303030 !important;
            background:#f3f3f3 !important;
        }

        .texto1 {
            color:#303030 !important;
            background:#e1e1e1 !important;
        }

        .fecha {
            font-size:0.9em !important;
            padding:0 !important;
            line-height:27px !important;
        }

        .labelLiquidacion span {
            background:#82d0a8;
        }
    </style>
</asp:Content>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
<asp:TextBox ID="lblActa" runat="server" CssClass="varsession" ></asp:TextBox>
 <asp:UpdatePanel runat="server" ID="UpdatePanel1" UpdateMode="Conditional">
    <ContentTemplate>
        <asp:Panel ID="Panel1" runat="server">
   <%-- busquedas y registros en gridview --%>
            <div class="row">
             <%--   <asp:UpdatePanel runat="server" ID="UpdateNew" UpdateMode="Conditional">
                     <ContentTemplate>--%>
                        <div class="col-md-12 formdata " >
                            <!--Panel with Tabs-->
			                <div class="panel panel-primary">
				                <!--Panel heading-->
				                <div class="panel-heading">
					                <div class="panel-control">
						                <!--Nav tabs-->
						                <ul class="nav nav-tabs">
                                            <li class="" ><a data-toggle="tab" href="#demo-tabs-box-1" aria-expanded="false" id="tabMetodo1">Estado de Acta en Mensajeria</a>
							                </li>                                    
                                                                         
						                </ul>					
					                </div>
				                </div>
				                <!--Panel body-->
				                <div class="panel-body">
					                <!--Tabs content-->
					                <div class="tab-content">
                                        <!-- Panel Documentos Acta-->
                                        <div id="demo-tabs-box-1" class="tab-pane fade active in" aria-expanded="true">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="dataTables_filter" id="demo-dt-basic_filter">
                                                        <label>Buscar:
                                                            <asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True"  >
                                                            </asp:TextBox> 
                                                        </label>
                                                    </div>
                                                    <asp:GridView ID="GridActas" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="100%" 
                                                                        OnPageIndexChanging="GridActas_PageIndexChanging" PageSize="10"  AllowPaging="True" AllowSorting="True"
                                                                        OnSelectedIndexChanged="GridActas_SelectedIndexChanged" >
                                                                         <pagersettings firstpagetext="Primero" lastpagetext="Última" nextpagetext="Siguiente"  previouspagetext="Anterior" Mode="NextPreviousFirstLast" />
                                                                              <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                <Columns>
                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center">                         
                                                                                        <HeaderTemplate>
                                                                                            <asp:CheckBox ID="ChkSelectTodos" runat="server" AutoPostBack="True" OnCheckedChanged="ChkSelectTodos_CheckedChanged" />
                                                                                        </HeaderTemplate>                                         
                                                                                        <ItemTemplate>                                                     
                                                                                            <asp:CheckBox ID="ChkSelect"   Font-Size="Smaller" runat="server" 
                                                                                              CommandArgument='<%# Eval("MensCodi") %>' AutoPostBack="True" OnCheckedChanged="ChkSelect_CheckedChanged" /> 
                                                                                        </ItemTemplate>
                                                                                        <FooterStyle Font-Names="Trebuchet MS" HorizontalAlign="Center"  VerticalAlign="Middle" Width="7px" />
                                                                                        <HeaderStyle HorizontalAlign="Center" />
                                                                                        <ItemStyle  HorizontalAlign="Center" VerticalAlign="Middle" Width="7px" />
                                                                                    </asp:TemplateField>  
                                                                                    <asp:BoundField DataField="MensCodi" HeaderText="ID "  SortExpression="MensCodi" >
                                                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                    </asp:BoundField>
                                                                                    <asp:BoundField DataField="MensActa" HeaderText="Acta "  SortExpression="MensActa" >
                                                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                    </asp:BoundField>
                                                                                    <asp:BoundField DataField="Cliente" HeaderText="Cliente"  SortExpression="Cliente" >
                                                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                    </asp:BoundField>
                                                                                      <asp:BoundField DataField="Direccion" HeaderText="Dirección"  SortExpression="Direccion" >
                                                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                    </asp:BoundField>
                                                                                    <asp:BoundField DataField="Telefono" HeaderText="Telefono"  SortExpression="Telefono" >
                                                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                    </asp:BoundField> 
                                                                                     <asp:BoundField DataField="DescOper" HeaderText="Empresa"  SortExpression="DescOper" >
                                                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                    </asp:BoundField>                                                                            
                                                                                     <asp:BoundField DataField="Estado" HeaderText="Estado"  SortExpression="Estado" >
                                                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                    </asp:BoundField>  
                                                                                   
                                                                                                  
                                                                                </Columns>                                                          
                                                                    </asp:GridView>
                                                </div>
                                                
                                                <div class="row">
                                                    <div class="col-md-12">
                                                      
                                                        <a href="GestionBandejas.aspx" id="Button1" class="btn btn-default" >Cerrar</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
				                    </div>
			                    </div>
                            </div>
                        </div>                
       
            </div>
        </asp:Panel>           
    <%-- fin seccion nuevos registros --%> 
    <asp:Panel ID="PnlMsg" runat="server"  Width="100%"></asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>
</asp:Content>
