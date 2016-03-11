<%@ Page Title="Metodos De Liquidacion" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RevisarLiquidacion.aspx.cs"   Inherits="Generals.Web.RevisarLiquidacion"  EnableEventValidation="false"  %>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery-2.1.1.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery.confirm.min.js"></script>
    <script>        
        function BindEvents() {
        
            $(document).ready(function () {

                var aa = $("#tabDatos");
                var bb = $("#tabResultado");
                var cc = $("#tabMetodo");
                var dd = $("#tabBitacora");
                var ee = $("#tabDocActa");
                var ff = $("#tabAnotaciones");
                var M1 = $("#Metodo1");
                var M2 = $("#Metodo2");
                var M3 = $("#Metodo3");
                var M4 = $("#Metodo4");
                var M5 = $("#Metodo5");
                var M6 = $("#Metodo6");
                var M7 = $("#Metodo7");
                var M8 = $("#Metodo8");
                var std = $("estadistica");


                $('[data-toggle="tooltip"]').tooltip();

                aa.click(function () {
                    
                    localStorage["md"] = 1;

                });
                bb.click(function () {
                    localStorage["md"] = 2;
                });
                cc.click(function () {
                    localStorage["md"] = 3;
                    M1.click(function () {

                        localStorage["mdm"] = 8;

                    });
                    M2.click(function () {
                        localStorage["mdm"] = 9;
                    });
                    M3.click(function () {
                        localStorage["mdm"] = 10;
                    });
                    M4.click(function () {
                        localStorage["mdm"] = 11;
                    });
                    M5.click(function () {
                        localStorage["mdm"] = 12;
                    });
                    M6.click(function () {
                        localStorage["mdm"] = 13;
                    });
                });
                dd.click(function () {
                    localStorage["md"] = 4;
                });
                ee.click(function () {
                    localStorage["md"] = 5;
                });
                ff.click(function () {
                    localStorage["md"] = 6;
                });

               
                setTabs();
           
                   
              
                    
           });
                function ocultar(x) {
                    x.hide();
                }
                function confirmar(e) {

                    var r = confirm("Esta seguro que desea confirmar");
                    if (r == true) {

                    } else {
                        e.preventDefault();
                        return false;
                    }


                }
                
        }
</script>
    <style>
         .titled {
            display:block; padding-bottom:5px;margin-bottom:10px; border-bottom:thin solid #333;
         }
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

        #Metodo1, #Metodo2, #Metodo3, #Metodo4, #Metodo5,  #Metodo6, #Metodo7, #Metodo8
        {
            /*display:none;*/
        }
    </style>

    <!--STYLESHEET-->
	<!--=================================================-->
	<!--Open Sans Font [ OPTIONAL ] -->
 	<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;subset=latin" rel="stylesheet">
	<!--Bootstrap Stylesheet [ REQUIRED ]-->
	<link href="template/css/bootstrap.min.css" rel="stylesheet">
	<!--Nifty Stylesheet [ REQUIRED ]-->
	<link href="template/css/nifty.min.css" rel="stylesheet">
	<!--Font Awesome [ OPTIONAL ]-->
	<link href="template/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<!--Switchery [ OPTIONAL ]-->
	<link href="template/plugins/switchery/switchery.min.css" rel="stylesheet">
	<!--Bootstrap Select [ OPTIONAL ]-->
	<link href="template/plugins/bootstrap-select/bootstrap-select.min.css" rel="stylesheet">
	<!--Demo [ DEMONSTRATION ]-->
	<link href="template/css/demo/nifty-demo.min.css" rel="stylesheet">
	<!--SCRIPT-->
	<!--=================================================-->
   
	<!--Page Load Progress Bar [ OPTIONAL ]-->
    <script src="js/jquery.elevateZoom-3.0.8.min.js"></script>
	<link href="template/plugins/pace/pace.min.css" rel="stylesheet">
	<script src="template/plugins/pace/pace.min.js"></script>
    <style>
        body{font-size: 12px !important;}
        #floating-top-right {
            display:none;
        }

        .TxtAcum {
            font-size: 12px !important;
        }

        @media (max-width: @screen-xs) {
            body{font-size: 14px !important;}
        }

        @media (max-width: @screen-sm) {
            body{font-size: 14px !important;}
        }

        @media (width:1320px) {
            .d {
                padding:0 5px !important;
                margin:0 !important;
            }
        }

        .d {
            padding:0 5px !important;
        }
    </style>
    <link href="Content/modal.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>              
            <asp:Panel ID="Panel1" runat="server" Visible="false">                  
                 <div class="row">
                    <div class="col-lg-12">
				        <!--Panel with Tabs-->
				        <!--===================================================-->
				        <div class="panel panel-primary">
					        <!--Panel heading-->
					        <div class="panel-heading">
						        <div class="panel-control">
							        <!--Nav tabs-->
							        <ul class="nav nav-tabs">
								        <li class="active" ><a data-toggle="tab" href="#demo-tabs-box-1" aria-expanded="true" id="tabDatos" >Datos Acta</a>
								        </li>
                                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-3" aria-expanded="false" id="tabResultado">Rechazar Acta</a>
								        </li>
								        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-2" aria-expanded="false" id="tabMetodo">
                                           Metodos de Liquidación</a>
								        </li>
                                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-4" aria-expanded="false" id="tabBitacora">Historial del acta</a>
								        </li>
                                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-5" aria-expanded="false" id="tabDocActa">Documentos del Acta</a>
								        </li>
                                         <li class="" ><a data-toggle="tab" href="#demo-tabs-box-10" aria-expanded="false" id="tabAnotaciones">Anotaciones</a>
								        </li>
							        </ul>
					
						        </div>
						        <%--<h3 class="panel-title">Revisar Metodo Liquidación</h3>--%>
					        </div>
					        <!--Panel body-->
					        <div class="panel-body">					
						        <!--Tabs content-->
						        <div class="tab-content">
                                   
                                       <!-- ****************************************************************************** DATOS DEL ACTA **************************************************************************-->
							        <div id="demo-tabs-box-1" class="tab-pane fade active in">
                                        <div class="panel panel-primary">                                      
                                           
					                        <!--Panel heading-->
					                        <div class="panel-heading">
						                        <div class="panel-control">
							                        <!--Nav tabs-->
							                        <ul class="nav nav-tabs">
                                                        <li class="active" ><a data-toggle="tab" href="#demo-tabs-box-d1" aria-expanded="true">Informacion General</a></li>
								                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-d2" aria-expanded="false">Anomalias</a></li>
                                                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-d3" aria-expanded="false">Censo de Carga</a></li>
                                                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-d4" aria-expanded="false">Medidor</a></li>
                                                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-d6" aria-expanded="false">Protocolo</a></li>
                                                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-d5" aria-expanded="false">Trabajos Ejecutados</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!--Panel body ***********************************************************-->
					                        <div class="panel-body">					
						                        <!--Tabs content-->
						                        <div class="tab-content">
                                                    <%-- ****************************************************************************** INFORMACIÓN GENERAL  *****************************************************--%>
                                                    <div id="demo-tabs-box-d1" class="tab-pane fade active in">                                                            									
                                                        <div class="row">
                                                                <div>
									                                <strong class="titled" >Datos Generales del Acta</strong>  
								                                </div>
                                                             <div class="form-group col-md-3">
                                                                <label>Nic:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtNit" runat="server" Enabled="false" ></asp:TextBox>                               
                                                            </div>      
                                                            <div class="form-group col-md-3">
                                                                <label>Nro Acta</label>                   
                                                                <asp:TextBox  CssClass="form-control" ID="TxtCodigo" runat="server" visible="false" ></asp:TextBox>   
                                                                <asp:TextBox  CssClass="form-control" ID="TxtNroActa" runat="server" Enabled="false" ></asp:TextBox>                                                                                               
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Empresa:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtEmpresa" runat="server" Enabled="false" ></asp:TextBox>                               
                                                            </div> 
                                                            <div class="form-group col-md-3">
                                                                <label>Matricula:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtMatricula" runat="server" Enabled="false" ></asp:TextBox>                               
                                                            </div>   
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-3">
                                                                <label>Fecha Carga Acta:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtFechaCarga" runat="server" Enabled="false" ></asp:TextBox>                               
                                                            </div> 
                                                            <div class="form-group col-md-3">
                                                                <label>Fecha Cierre Acta:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="_clientCloseTs" runat="server" Enabled="false" ></asp:TextBox>                               
                                                            </div>  
                                                        </div>
                                                        <div class="row">
                                                                 <div>
									                                <strong class="titled" >Datos del Cliente</strong>  
								                                </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Cliente:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtCliente" runat="server" Enabled="false" ></asp:TextBox>                               
                                                            </div>  
                                                             <div class="form-group col-md-3">
                                                                <label>Tipo Cliente:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtTipoCliente" runat="server" Enabled="false" ></asp:TextBox>                               
                                                            </div>                            
                                                            <div class="form-group col-md-3">
                                                                <label>Dirección:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtDireccion" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div> 
                                                             <div class="form-group col-md-3">
                                                                <label>Referencia Dirección:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtReferencia" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div> 
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-3">
                                                            <label>Departamento</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtDepar" runat="server" ReadOnly="true"  ></asp:TextBox>   
                            
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                            <label>Municipio:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtMun" runat="server" ReadOnly="true" ></asp:TextBox>   
                             
                                                            </div>                            
                                                            <div class="form-group col-md-3">
                                                                <label>Localidad:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtLocalidad" runat="server" ReadOnly="true" ></asp:TextBox> 
                                                            </div> 
                                                            <div class="form-group col-md-3">
                                                                <label>Tipo Vía:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="TxtTipoVia" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                                
                          
                                                        </div>
                                                        <div class="row">
                                                           <div class="form-group col-md-3">
                                                                <label>Calle:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtBarr" runat="server" ReadOnly="true" ></asp:TextBox> 
                                                            </div>
                                                             <div class="form-group col-md-3">
                                                                <label>Duplicador:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="txtDuplicador" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div> 
                                                            <div class="form-group col-md-3">
                                                                <label>Nro Puerta:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtNroPuerta" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>    
                                                            <div class="form-group col-md-3">
                                                                <label>Piso:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtPiso" runat="server" Enabled="false" ></asp:TextBox> 
                                                            
                                                            </div>                                                                                                                        
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-3">
                                                                <label>Tarifa:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtTarifa" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Estrato:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="txtEstrato" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>   
                                                                <div class="form-group col-md-3">
                                                                <label>Tarifa :</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtTarifa2" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>  
                                                                <div class="form-group col-md-3">
                                                                <label>Valor ECDF :</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtValorECDF" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>  
                                                        </div>
                                                        <div class="row">
                                                            
                                                             <div class="form-group col-md-3">
                                                                <label>Tipo Orden de Servicio:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="CmbtipoOrdenServicio" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Tipo Servicio:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="CmbtipoServicio" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>

                                                         </div>
                                                        <div class="row">
                                                            <div>
									                            <strong class="titled" >Datos Atendio Visita</strong>                                                                  
								                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Cedula:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtCedulRce" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>  
                                                             <div class="form-group col-md-3">
                                                                <label> Atendio Visita:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtNombreReceptor" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Relacion Recepcion Visita:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtRelacionrece" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>  
                                                                <div class="form-group col-md-3">
                                                                <label>Email Atendio Visita :</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtEmailRece" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>  
                                                        </div>
                                                        <div class="row">                                                            
                                                            <div class="form-group col-md-3">
                                                                <label>Telefono Fijo:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TelefonoFijoRece" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>  
                                                             <div class="form-group col-md-3">
                                                                <label>Celular:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="celularRecer" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Aporta Testigo :</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="AportaTesti" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>  
                                                                <div class="form-group col-md-3">
                                                                <label>Solicita Técnico:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="SolicitaTecn" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>  
                                                        </div>
                                                        <div class="row">
                                                            <div>
									                            <strong class="titled" >Técnico Atendio Visita</strong>                                                                  
								                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Cedula:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtCeduTec" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>  
                                                             <div class="form-group col-md-3">
                                                                <label>Técnico Atendio Visita:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtTecnico" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Comte Técnico:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="TxtComte" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>                                                                  
                                                        </div>
                                                        <div class="row">
                                                            <div>
									                            <strong class="titled" >Testigo Atendio Visita</strong>                                                                  
								                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Cedula:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtCeduTest" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>  
                                                             <div class="form-group col-md-3">
                                                                <label>Testigo Atendio Visita:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="TxtTesti" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>
                                                                                                                           
                                                        </div>
                                                        <div class="row">
                                                            <div>
									                            <strong class="titled" >Datos del  Operario</strong>                                                                  
								                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Cedula:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="cedulaOperario" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>  
                                                             <div class="form-group col-md-3">
                                                                <label>Nombre:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="nombreOperario" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Apellidos:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="apellido1Operario" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>
                                                             <div class="form-group col-md-3">
                                                                <label>Empresa del Operario:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="empresaOperario" runat="server" Enabled="false" ></asp:TextBox> 
                                                            </div>
                                                            
                                                                                                                           
                                                        </div>
                                                        <div class="row">
                                                             <div>
									                            <strong class="titled" >Comentarios y Observaciones Del Open</strong>                                                                  
								                            </div>
                                                            <div class="form-group col-md-12">
                                                                <label>Observación</label>
                                                                <asp:TextBox ID="txtObserviacionGeneral" CssClass="form-control"  runat="server"  TextMode="MultiLine" Enabled="false" ></asp:TextBox>
                                                            </div>
                                                             <div class="form-group col-md-12">
                                                                <label>Comentario 1:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="Txtcomentario1" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-12">
                                                                <label>Comentario 2:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="Txtcomentario2" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>  
                                                        </div>
                                                          <div class="row">
                                                                 <div class="col-md-12">
                                                                         <asp:Button runat="server" Text="Cargar Tarifa" ID="BtnTarifa" OnClick="BtnTarifa_Click" ToolTip="Consutar La tarifa vigente para el cliente"     ></asp:Button>
                                                                 </div>
                                                            </div>   
                                                            
                                                    </div>
                                                    <%-- ****************************************************************************** ANOMALIAS  *****************************************************--%>
                                                    <div id="demo-tabs-box-d2" class="tab-pane fade">
                                                        <div class="row">
                                                            <div>
									                            <strong class="titled" >Anomalias Encontradas</strong>                                                                                                                             
								                            </div>

                                                            <asp:GridView ID="GridAnomalias" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="100%" PageSize="20" AllowPaging="True" AllowSorting="True" 
                                                                OnPageIndexChanging="GridCargos_PageIndexChanging" >
                                                                <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                <AlternatingRowStyle BackColor="White" />
                                                                <Columns>                                                                   
                                                                <asp:BoundField DataField="AcAnDesc" HeaderText="Anomalia" SortExpression="AcAnDesc" />
                                                            </Columns>                                
                                                            </asp:GridView>
                                                        </div>
                                                        <div class="row">
                                                            <div>
									                            <strong class="titled" >Metodos Asociados</strong>                                                                                                                             
								                            </div>
                                                             <asp:GridView ID="GridMetodosAno" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="100%" PageSize="20" AllowPaging="True" AllowSorting="True" 
                                                                    OnPageIndexChanging="GridMetodosAno_PageIndexChanging" EmptyDataText="No Existe Informacion para Mostrar" >
                                                                    <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                    <AlternatingRowStyle BackColor="White" />
                                                                    <Columns>                                                                   
                                                                        <asp:BoundField DataField="DescMeLi" HeaderText="Metodo de Liquidación" SortExpression="DescMeLi" />
                                                                    </Columns>                                
                                                                </asp:GridView>    
                                                        </div>
                                                        <div class="row">
                                                            <div>
									                            <strong class="titled" >Observacion de Anomalias </strong>                                                                                                                             
								                            </div>
                                                             <div class="form-group col-md-12">
                                                                <label>Observación</label>
                                                                <asp:TextBox ID="txtobservacionanomalia" CssClass="form-control"  runat="server"  TextMode="MultiLine" Enabled="false" ></asp:TextBox>
                                                            </div>
                                                        </div>
                                                         <div class="row">
                                                              <asp:Panel runat="server" id="pnlAnomalias">

                                                              </asp:Panel>
                                                         </div>
                                                    </div>
                                                    <%-- ****************************************************************************** CENSO  *****************************************************--%>
                                                    <div id="demo-tabs-box-d3" class="tab-pane fade">
                                                            <div class ="row ">
                                                     <div class="form-group col-md-3">
                                                        <label>Tipo de Censo :</label>                    
                                                        <asp:TextBox  CssClass="form-control" ID="TxtTipoCenso" runat="server" ReadOnly="true" ></asp:TextBox> 
                                            
                                                    </div> 
                                                </div>
                                                            <div class ="row ">
                                                                <asp:GridView ID="GridCensoActas" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%" EmptyDataText="No Existe Informacion para Mostrar"
                                                                    AllowPaging="True" AllowSorting="True" PageSize="20" >
                                                                    <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                    <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                    <Columns>
                                           
                                            
                                                                            <asp:BoundField DataField="AcCeItem" HeaderText="Descripción de Ítem"  SortExpression="AcCeItem" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                                                        <asp:BoundField DataField="AcCeNoIt" HeaderText="Nro. Ítem Registrados"  SortExpression="AcCeNoIt" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                            
                                                                    </Columns>                                        
                                                                </asp:GridView>
                                                            </div>
                                                            <div class ="row ">
                                                                 <div class="form-group col-md-3">
                                                                    <label>Total Censo :</label>                    
                                                                    <asp:TextBox  CssClass="form-control" ID="TxtTotalCenso" runat="server" ReadOnly="true" ></asp:TextBox> 
                                            
                                                                </div> 
                                                            </div>
                                                    </div>
<%-- ****************************************************************************** PROTOCOLO  *****************************************************--%>
                                                    <div id="demo-tabs-box-d6" class="tab-pane fade">
                                                        <div class="row">
                                                            <div>
									                            <strong class="titled" >Información del Protocolo</strong>                                                                                                                             
								                            </div> 
                                                              <div class="form-group col-md-3">
                                                                    <label>NIS</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="nis" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Resultado Exactitud</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="ResultadoExactitud" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                               <div class="form-group col-md-3">
                                                                    <label>Fecha_Res_Exactitud</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Fecha_Res_Exactitud" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>  
                                                              <div class="form-group col-md-3">
                                                                    <label>Tipo Energia</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="TipoEnergia" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div> 
                                                        </div>
                                                        <div class="row">
                                                              <div class="form-group col-md-3">
                                                                    <label>ResultadoPropieDialectrica</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="ResultadoPropieDialectrica" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Resultado Arranque</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="ResultadoArranque" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                               <div class="form-group col-md-3">
                                                                    <label>ResultadoInspeccionVisual</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="ResultadoInspeccionVisual" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>  
                                                              <div class="form-group col-md-3">
                                                                    <label>ResultadoVerificacionConstante</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="ResultadoVerificacionConstante" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div> 
                                                        </div>
                                                        <div class="row">
                                                              <div class="form-group col-md-3">
                                                                    <label>Error Porcentual</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="ErrorPorcentual" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>ErrorporcenEnEnergiaReactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="ErrorporcenEnEnergiaReactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                               <div class="form-group col-md-3">
                                                                    <label>codigo Response</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="codigoResponse" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>  
                                                              <div class="form-group col-md-3">
                                                                    <label>mensaje Response</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="mensajeResponse" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div> 
                                                        </div>
                                                        <div class="row">
                                                             <div class="form-group col-md-3">
                                                                    <label>ResultadoEnsayoFuncioSinCarga</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="ResultadoEnsayoFuncioSinCarga" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                               
                                                              <div class="form-group col-md-3">
                                                                    <label>Num Certificado</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="NumCertificado" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Cod Laboratorio</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="CodLaboratorio" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                                 
                                                               
                                                        </div>
                                                        <div class="row">
                                                            <div>
									                            <strong class="titled" >Información del Ensayo Activo</strong>                                                                                                                             
								                            </div> 
                                                              <div class="form-group col-md-3">
                                                                    <label>Ensayo1Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo1Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre1Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre1Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                               <div class="form-group col-md-3">
                                                                    <label>Ensayo2Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo2Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>  
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre2Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre2Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div> 
                                                        </div>
                                                        <div class="row">
                                                              <div class="form-group col-md-3">
                                                                    <label>Ensayo3Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo3Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre3Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre3Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                               <div class="form-group col-md-3">
                                                                    <label>Ensayo4Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo4Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>  
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre4Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre4Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div> 
                                                        </div>
                                                        <div class="row">
                                                              <div class="form-group col-md-3">
                                                                    <label>Ensayo5Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo5Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre5Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre5Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                               <div class="form-group col-md-3">
                                                                    <label>Ensayo6Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo6Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>  
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre6Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre6Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div> 
                                                        </div>
                                                        <div class="row">
                                                              <div class="form-group col-md-3">
                                                                    <label>Ensayo7Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo7Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre7Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre7Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                               <div class="form-group col-md-3">
                                                                    <label>Ensayo8Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo8Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>  
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre8Activa</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre8Activa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div> 
                                                        </div>   
                                                        <div class="row">
                                                            <div>
									                            <strong class="titled" >Información del Ensayo Reactiva</strong>                                                                                                                             
								                            </div> 
                                                              <div class="form-group col-md-3">
                                                                    <label>Ensayo1Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo1Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre1Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre1Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                               <div class="form-group col-md-3">
                                                                    <label>Ensayo2Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo2Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>  
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre2Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre2Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div> 
                                                        </div>
                                                        <div class="row">
                                                              <div class="form-group col-md-3">
                                                                    <label>Ensayo3Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo3Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre3Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre3Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                               <div class="form-group col-md-3">
                                                                    <label>Ensayo4Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo4Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>  
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre4Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre4Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div> 
                                                        </div>
                                                        <div class="row">
                                                              <div class="form-group col-md-3">
                                                                    <label>Ensayo5Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo5Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre5Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre5Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                               <div class="form-group col-md-3">
                                                                    <label>Ensayo6Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo6Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>  
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre6Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre6Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div> 
                                                        </div>
                                                        <div class="row">
                                                              <div class="form-group col-md-3">
                                                                    <label>Ensayo7Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Ensayo7Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre7Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="Incertidumbre7Reactiva" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Ensayo8Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="TextBox15" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div>  
                                                              <div class="form-group col-md-3">
                                                                    <label>Incertidumbre8Reactiva</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="TextBox16" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                              </div> 
                                                        </div>
                                                    </div>

                                                    <%-- ****************************************************************************** DATOS DEL MEDIDOR  *****************************************************--%>
                                                    <div id="demo-tabs-box-d4" class="tab-pane fade">                                                        

                                                        <div class="row"> 
                                                            <div>
									                            <strong class="titled" >Datos del Medidor</strong>  
								                            </div>
                                                                             
                                                            <div class="form-group col-md-3">
                                                                <label>Tipo Revision:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="tipoRevision" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Número Medidor:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="numero" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Marca:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="marca" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>Tipo:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="tipo" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>                                                         
                                                        </div>
                                                      
                                                        <div class="row">                          
                                                            <div class="form-group col-md-3">
                                                                <label>Tecnologia:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="tecnologia" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>lectura Ultima Fecha:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="lecturaUltimaFecha" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Ultima lectura:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="lecturaUltima" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>lectura Actual:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="lecturaActual" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>                                                         
                                                        </div>
                                                        <div class="row">                          
                                                            <div class="form-group col-md-3">
                                                                <label>Kd/Kh:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="kdkh_tipo" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Valor Kd/Kh:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="kdkh_value" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>digitos:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="digitos" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>decimales:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="decimales" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>                                                         
                                                        </div>
                                                       <div class="row">                          
                                                            
                                                          
                                                              
                                                           <div class="form-group col-md-3">
                                                                <label>Voltaje Nominal (V):</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="voltajeNominal" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Rango Corriente Mínimo (Amp):</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="rangoCorrienteMin" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>Rango Rango Corriendo Máximo(Amp):</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="rangoCorrienteMax" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>
                                                              <div class="form-group col-md-3">
                                                                    <label>Número de Fases:</label>  
                                                                    <asp:TextBox  CssClass="form-control" ID="nFases" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                                </div>                                                
                                                        </div>
                                                          <div class="row">
                                                                    <div>
									                                <strong class="titled" >Sellos</strong>  
								                                    </div>
                                                                    <div class="col-md-12">
                                                                      <asp:GridView ID="GridSellos" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="100%"
                                                                           PageSize="20" AllowPaging="True" AllowSorting="True" EmptyDataText="No Existe Informacion para Mostrar"
                                                                            OnPageIndexChanging="GriSellos_PageIndexChanging" >
                                                                            <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                            <AlternatingRowStyle BackColor="White" />
                                                                            <Columns>                                                                   
                                                                                <asp:BoundField DataField="AcSeNuMe" HeaderText="Medidor" SortExpression="AcSeNuMe" />
                                                                                <asp:BoundField DataField="AcSeNuSe" HeaderText="Sello" SortExpression="AcSeNuSe" />
                                                                                <asp:BoundField DataField="AcSeEsta" HeaderText="Estado" SortExpression="AcSeEsta" />
                                                                                <asp:BoundField DataField="AcSePosi" HeaderText="Posición" SortExpression="AcSePosi" />
                                                                                <asp:BoundField DataField="AcSeColo" HeaderText="Color" SortExpression="AcSeColo" />
                                                                                <asp:BoundField DataField="AcSeTiSe" HeaderText="Tipo de Sello" SortExpression="AcSeTiSe" />
                                                                                <asp:BoundField DataField="DescTipo" HeaderText="Estado" SortExpression="DescTipo" />
                                                                            
                                                                            </Columns>                                
                                                                        </asp:GridView>
                                                                    </div>
                                                                </div>
                                                             <div class="row">   
                                                              <%-- <div>
									                            <strong class="titled">
                                                                    Mediciones Encontradas
									                            </strong>  
								                            </div>--%>
                                                               <div class="col-lg-6"  >
                                                                   <div class="row">
                                                                        <div>
									                                        <strong class="titled">
                                                                                Mediciones
									                                        </strong>  
								                                        </div>
                                                                           
                                                                       
                                                                        <div class="form-group col-md-3">
                                                                            <label>I(F+N):</label> 
                                                                            <asp:TextBox  CssClass="form-control" ID="corrienteFN_mec" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                                        </div>
                                                                       
                                                                  
                                                                        <div class="form-group col-md-3">
                                                                            <label>I(Neutro)(Amp): </label>  
                                                                            <asp:TextBox  CssClass="form-control" ID="corrienteN_mec" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                                        </div>
                                                                       <div class="form-group col-md-3">
                                                                            <label>V(N-T):</label>                    
                                                                            <asp:TextBox  CssClass="form-control" ID="voltageNT_mec" runat="server" Enabled="False"   ></asp:TextBox> 
                                                                        </div>
                                                                          <div class="form-group col-md-3">
                                                                            <label>V(R-S):</label>                    
                                                                            <asp:TextBox  CssClass="form-control" ID="voltageRS_mec" runat="server" Enabled="False"    ></asp:TextBox>  
                                                                        </div>
                                                                   </div>

                                                               </div>          
                                                               <div class="col-lg-6"  >
                                                                  <div class="row">
                                                                        <div>
									                                        <strong class="titled">
                                                                                Fase R
									                                        </strong>  
								                                        </div>
                                                                        <div class="form-group col-md-3">
                                                                            <label>V(F-N):</label>  
                                                                            <asp:TextBox  CssClass="form-control" ID="voltageFNR_mec" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                                        </div>
                                                                        <div class="form-group col-md-3">
                                                                            <label>V(F-T):</label> 
                                                                            <asp:TextBox  CssClass="form-control" ID="voltageFTR_mec" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                                        </div>
                                                                        <div class="form-group col-md-3">
                                                                            <label>I(Fase):</label>                    
                                                                            <asp:TextBox  CssClass="form-control" ID="corrienteR_mec" runat="server" Enabled="False"   ></asp:TextBox> 
                                                                        </div>  
                                                                  </div>
                                                                
                                                             </div>
                                                               <div class="col-lg-6"  >
                                                                     <div class="row">
                                                                            <div>
									                                            <strong class="titled">
                                                                                    Fase S
									                                            </strong>  
								                                            </div>
                                                                          <div class="form-group col-md-3">
                                                                                <label>V(F-N):</label>                    
                                                                                <asp:TextBox  CssClass="form-control" ID="voltageFNS_mec" runat="server" Enabled="False"    ></asp:TextBox>  
                                                                            </div>
                                                                           <div class="form-group col-md-3">
                                                                                <label>V(F-T):</label>  
                                                                                <asp:TextBox  CssClass="form-control" ID="voltageFTS_mec" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                                            </div>
                                                                            <div class="form-group col-md-3">
                                                                                <label>I(Fase):</label> 
                                                                                <asp:TextBox  CssClass="form-control" ID="corrienteS_mec" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                                            </div>
                                                                      </div>
                                                                  </div>                                                               
                                                               <div class="col-lg-6"  >
                                                                     <div class="row">
                                                                            <div>
									                                            <strong class="titled">
                                                                                    Fase T
									                                            </strong>  
								                                            </div>
                                                                              <div class="form-group col-md-3">
                                                                                <label>V(F-N):</label>                    
                                                                                <asp:TextBox  CssClass="form-control" ID="voltageFNT_mec" runat="server" Enabled="False"    ></asp:TextBox>  
                                                                            </div>
                                                                           <div class="form-group col-md-3">
                                                                                <label>V(F-T):</label>  
                                                                                <asp:TextBox  CssClass="form-control" ID="voltageFTT_mec" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                                            </div>
                                                                            <div class="form-group col-md-3">
                                                                                <label>I(Fase):</label> 
                                                                                <asp:TextBox  CssClass="form-control" ID="corrienteT_mec" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                                            </div>
                                                                         </div>
                                                                    </div>
                                                          
                                                                                                             
                                                        </div>
                                                        
                                                        <div class="row">  
                                                            <div>
									                            <strong class="titled">
                                                                    Pruebas de Exactitud (Alta)
									                            </strong>  
								                            </div>                        
                                                            <div class="form-group col-md-3">
                                                                <label>Tipo de Prueba:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="pruebaAlta" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>V(F-N):</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="voltageFNR_alta" runat="server" Enabled="False"  ></asp:TextBox>  
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>I(Fase):</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="corrienteR_alta" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Numero de Vueltas:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="vueltasR_alta" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                                                                             
                                                        </div>
                                                        <div class="row">                          
                                                            <div class="form-group col-md-3">
                                                                <label>Tiempo:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="tiempoR_alta" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>V(F+N):</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="voltageFNS_alta" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>I(Fase):</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="corrienteS_alta" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Numero de Vueltas:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="vueltasS_alta" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                                                                             
                                                        </div>
                                                        <div class="row">                          
                                                            <div class="form-group col-md-3">
                                                                <label>Tiempo:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="tiempoS_alta" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>%Error (R) :</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="errorPruebaR_alta" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>%Error (S) :</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="errorPruebaS_alta" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                                                                             
                                                        </div>
                                                        <div class="row">   
                                                            <div>
									                            <strong class="titled">
                                                                    Pruebas Exactitud (Baja)
									                            </strong>  
								                            </div>                       
                                                            <div class="form-group col-md-3">
                                                                <label>Tipo de Prueba:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="pruebaBaja" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>V(F-N):</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="voltageFNR_baja" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>I(Fase):</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="corrienteR_baja" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Número de Vueltas:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="vueltasR_baja" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                                                                             
                                                        </div>
                                                        <div class="row">    
                                                            <div class="form-group col-md-3">
                                                                <label>Tiempo:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="tiempoR_baja" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>V(F+N):</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="voltageFNS_baja" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>I(Fase):</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="corrienteS_baja" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>                      
                                                            <div class="form-group col-md-3">
                                                                <label>Número de Vueltas:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="vueltasS_baja" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                                                                             
                                                        </div>
                                                        <div class="row">  
                                                            <div class="form-group col-md-3">
                                                                <label>Tiempo:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="tiempoS_baja" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>%Error (R) :</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="errorPruebaR_baja" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>%Error (S) :</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="errorPruebaS_baja" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>
                                                        </div>
                                                        <div class="row"> 
                                                            <div>
									                            <strong class="titled">
                                                                    Pruebas de Dosificación
									                            </strong>  
								                            </div>
                                                                             
                                                            <div class="form-group col-md-3">
                                                                <label>Tipo de Prueba:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="pruebaDosificacion" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>V(F-N):</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="voltageFNR_dosif" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Corriente:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="corrienteR_dosif" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>Lectura Inicial:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="lecturaInicialR_dosif" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>                                                         
                                                        </div>
                                                        <div class="row">                          
                                                            <div class="form-group col-md-3">
                                                                <label>Lectura Final:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="lecturaFinalR_dosif" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>%Error (R):</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="errorPruebaR_dosif" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                                                                             
                                                        </div>
                                                        <div class="row">
                                                            <div>
									                            <strong class="titled">
                                                                    Pruebas de Funcionamiento
									                            </strong>  
								                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>¿Pulso o giro Normal?:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="giroNormal" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>¿Hay Rozamiento?:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="rozamiento" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>
                                                             <div class="form-group col-md-3">
                                                                <label>¿Medidor se Frena?:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="medidorFrena" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Estado conexiones:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="estadoConexiones" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                                                                             
                                                        </div>
                                                        <div class="row">                          
                                                            <div class="form-group col-md-3">
                                                                <label>Display:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="display" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Estado integrador:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="estadoIntegrador" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Continuidad:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="continuidad" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>Prueba puentes:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="pruebaPuentes" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>                                                         
                                                        </div>
                                                        <div class="row">                          
                                                            <div class="form-group col-md-3">
                                                                <label>Medidor Retirado?:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="retirado" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>Destino Medidor:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="envioLab" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Numero de custodia:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="envioLabNumCustodia" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Propietario:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="propietario" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                                                                           
                                                        </div>
                                                        <div class="row"> 
                                                             <div class="form-group col-md-3">
                                                                <label>Número Certificado Calibración:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="numeroCertificadoCalibracion" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                            <div class="form-group col-md-3">
                                                                <label>Laboratorio:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="laboratorio" runat="server" Enabled="False"    ></asp:TextBox>  
                                                            </div>                          
                                                            <div class="form-group col-md-3">
                                                                <label>Número de protocolo:</label>  
                                                                <asp:TextBox  CssClass="form-control" ID="protocolo" runat="server" Enabled="False"  ></asp:TextBox>                                           
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label>Número resolución Acreditación:</label> 
                                                                <asp:TextBox  CssClass="form-control" ID="resolucionAcreditacion" runat="server" Enabled="False"  ></asp:TextBox>                              
                                                            </div>
                                                    
                                                                                                                     
                                                        </div>
                                                        <div class="row"> 
                                                            <div class="form-group col-md-3">
                                                                <label>Fecha Resolución:</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="resolucionFecha" runat="server" Enabled="False"   ></asp:TextBox> 
                                                            </div>  
                                                        </div>
                                                    </div>
                                                    <%-- ****************************************************************************** TRABAJOS EJECUTADOS  *****************************************************--%>
                                                    <div id="demo-tabs-box-d5" class="tab-pane fade">
                                                            <div class ="row ">
                                                                  <div>
									                                <strong class="titled" >Trabajos Ejecutados</strong>  
								                                  </div>
                                                                <div class="col-lg-12">
                                                                    <asp:GridView ID="GridTrabajos" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%" EmptyDataText="No hay información para mostrar."
                                                                    AllowPaging="True" AllowSorting="True" PageSize="20" >
                                                                    <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;"                   Mode="NextPreviousFirstLast" />
                                                                    <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                    <Columns>
                                                                        <asp:BoundField DataField="CodigoAccion" HeaderText="Código"  SortExpression="CodigoAccion" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                                                        <asp:BoundField DataField="DescripcionAccion" HeaderText="Descripción"  SortExpression="DescripcionAccion" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                                                        <asp:BoundField DataField="Cobro" HeaderText="Cobro"  SortExpression="Cobro" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                                                        <asp:BoundField DataField="NuevoPaso" HeaderText="Nuevo Paso"  SortExpression="NuevoPaso" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                                                         <asp:BoundField DataField="CodigoPaso" HeaderText="Codigo Paso"  SortExpression="CodigoPaso" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                                                    </Columns>                                        
                                                                </asp:GridView>
                                                                
                                                                </div>

                                                            </div>
                                                            <div class ="row ">
                                                                  <div>
									                                <strong class="titled" >Materiales</strong>  
								                                  </div>
                                                                <div class="col-lg-12">
                                                                    <asp:GridView ID="GridMateriales" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%" EmptyDataText="No hay información para mostrar."
                                                                    AllowPaging="True" AllowSorting="True" PageSize="20" >
                                                                    <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;"                   Mode="NextPreviousFirstLast" />
                                                                    <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                    <Columns>
                                                                       <asp:BoundField DataField="CodigoMaterial" HeaderText="Codigo Material"  SortExpression="CodigoMaterial" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                                                        <asp:BoundField DataField="Descripcion" HeaderText="Descripción"  SortExpression="Descripcion" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                                                        <asp:BoundField DataField="Cobro" HeaderText="Cobro"  SortExpression="Cobro" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                                                        <asp:BoundField DataField="Cantidad" HeaderText="Cantidad"  SortExpression="Cantidad" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                                                         
                                                                         <asp:BoundField DataField="CodigoAccion" HeaderText="Acción"  SortExpression="CodigoAccion" >
                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                        </asp:BoundField>
                                                                    </Columns>                                     
                                                                </asp:GridView>
                                                                
                                                                </div>

                                                            </div>
                                                    </div>
						                        </div>
					                        </div>
                                        </div>

                                     
                                          <a href="GestionBandejas.aspx" id="Button15" class="btn btn-default" >Cerrar</a>     

							        </div>

                                     <!-- ****************************************************************************** Anotaciones **************************************************************************-->
                                      <div id="demo-tabs-box-10" class="tab-pane fade">
                                        <div class="row">
                                             <div class="col-lg-12">
                                                 <asp:Panel ID="pnlAnot" runat="server">
                                                    <div class="form-group col-md-12">
                                                        <label>Anotación:</label>
                                                         <asp:TextBox ID="TxtCodiAnot" CssClass="form-control"  runat="server" Visible="false"></asp:TextBox>
                                                        <asp:TextBox ID="TxtAnotacion" CssClass="form-control"  runat="server" TextMode="MultiLine"></asp:TextBox>
                                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TxtAnotacion" CssClass="danger" ErrorMessage="*" ValidationGroup="GrabarAnota" ForeColor="Red" Display="Dynamic"></asp:RequiredFieldValidator>
                                                    </div>
                                                    <div class="form-group col-md-4">                                                
                                                        <asp:Button ID="BtnAnotacion" runat="server" Text="Guardar"  OnClick="BtnAnotacion_Click" ValidationGroup="GrabarAnota" />
                                                        <asp:Button ID="BtnLimpiar" runat="server" Text="Limpiar"  OnClick="BtnLimpiar_Click1"  />
                                                        <a href="GestionBandejas.aspx" id="Button15" class="btn btn-default" >Cerrar</a> 
                                                    </div> 
                                                     <div class="form-group col-md-4">                                                
                                                        
                                                    </div> 
                                                </asp:Panel>
                                            </div>
                                            <div class="col-lg-12">
                                                   <asp:GridView ID="GridAno" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%"    PageSize="10" AllowPaging="True"  OnPageIndexChanging="GridAno_PageIndexChanging"
                                                       AllowSorting="True">
                                                        <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                        <AlternatingRowStyle BackColor="White" />
                                                        <Columns>                                         
                                                
                                                            <asp:BoundField DataField="AnotDesc" HeaderText="Anotación"  SortExpression="AnotDesc" >
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField> 
                                                            <asp:BoundField DataField="DescEsta" HeaderText="Estado"  SortExpression="DescEsta" >
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField>   
                                                                <asp:TemplateField HeaderStyle-HorizontalAlign="Center" AccessibleHeaderText="usuario" HeaderText="Usuario" >                                                                                
                                                                    <ItemTemplate  >
                                                                        <asp:Label ID="LblUsuario" runat="server" Text= '<%# Eval("AnotUsua") %>'></asp:Label>
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>                                                     
                                                            <%-- <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
                                                                <ItemTemplate >                                                     
                                                                    <asp:Button ID="EditarAnota" CssClass="btn btn-success btn-block"   Font-Size="XX-Small" runat="server" Width="120px" Text="Modificar" 
                                                                        CommandName="EditarAnotacion" OnCommand="EditarAnota_Command" Enabled="false" CommandArgument='<%# Eval("AnotCodi") %>'  />                                                                     
                                                                </ItemTemplate>
                                                                <FooterStyle Font-Names="Trebuchet MS" HorizontalAlign="Center"  VerticalAlign="Middle" Width="7px" />
                                                                <HeaderStyle HorizontalAlign="Justify" />
                                                                <ItemStyle  HorizontalAlign="Justify" VerticalAlign="Middle" Width="7px" />
                                                            </asp:TemplateField>--%>
                                                        </Columns>                                       
                                                    </asp:GridView>
                                                
                                               </div>                                           
                                        </div>
                                     </div>
                                      <!-- ****************************************************************************** REVISAR LIQUIDACIÓN **************************************************************************-->
						            <div id="demo-tabs-box-2" class="tab-pane fade">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="row">
                                                    <%-- ****************************************************************************** Lista de ultimos Consumo  *****************************************************--%>
                                                <div class="col-md-12">
                                                    <div class="panel panel-bordered panel-dark">
								                        <div class="panel-heading texto">
									                        <h5 class="panel-title">CONSUMOS ANTERIORES:</h5>
								                        </div>                                                        
								                        <div class="panel-body">     
                                                            <div  class="row">
                                                                <div class="col-md-12" >
                                                                    <div class="table-responsive">
                                                                        <asp:GridView ID="GridConsumos" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%"  OnRowDataBound="GridConsumos_RowDataBound" >
                                                                                <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                <AlternatingRowStyle BackColor="White" />
                                                                                    <Columns>                                                                        
                                                                                        <asp:BoundField DataField="ConsFech" HeaderText="Fecha" SortExpression="ConsFech" DataFormatString="{0:f}" >
                                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                        </asp:BoundField>                                                                                    
                                                                                        <asp:BoundField DataField="ConsValo" HeaderText="Consumo"  SortExpression="ConsValo" >
                                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                        </asp:BoundField>  
                                                                                        <asp:TemplateField >
                                                                                            <ItemTemplate >                                                     
                                                                                                <asp:CheckBox ID="chkConsumo" runat="server"  OnCheckedChanged="chkConsumo_CheckedChanged" AutoPostBack="true" />
                                                                                            </ItemTemplate>
                                                                                        </asp:TemplateField>                                                                                                                            
                                                                                    </Columns>
                                                           
                                                                        </asp:GridView>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-7">
                                                                        <label style="font-size:70%;">TOTAL CONSUMOS ANTERIORES A LA REV. Y NORMALIZACIÓN. (kWh)</label>
                                                                </div>                                            
                                                                <div class="col-md-5">
                                                                        <asp:TextBox  CssClass="form-control TxtAcum" ID="TxtAcum" runat="server" ReadOnly="true" Text="0"></asp:TextBox>  
                                                                </div>
                                                            </div> 
                                                            <div class="row">
                                                                 <div class="col-md-12">
                                                                         <asp:Button runat="server" Text="Consultar Consumos" ID="BtnConsumos" OnClick="BtnConsumos_Click" ToolTip="Temporalmente Fuera de Servicio"     ></asp:Button>
                                                                 </div>
                                                            </div>
								                        </div>
                                                    </div>
                                                </div>
                                                <%-- *************hi consumo por  *****************************************************--%>
                                                <div class="col-md-6" style="display:none;"  >
                                                    <div class="panel panel-bordered panel-dark">
								                        <div class="panel-heading texto">
									                        <h5 class="panel-title">CONSUMO POR:</h5>
								                        </div>                                                        
								                        <div class="panel-body">
                                                                <div class="row">
                                                                <div class="col-md-8">
                                                                    Carga en Wattios
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <%--<asp:TextBox  CssClass="form-control" ID="TxtCargaWatt" runat="server" ReadOnly="True"  Font-Size="Small"   >1662</asp:TextBox>--%>
                                                                </div>
                                                                </div>
                                                                <div class="row">
                                                                <div class="col-md-8">
                                                                    Carga en Kws
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <%--<asp:TextBox  CssClass="form-control" ID="TxtCargaKws" runat="server" ReadOnly="True"   >1.662</asp:TextBox>--%>
                                                                </div>
                                                                </div>
                                                                <div class="row">
                                                                <div class="col-md-8">
                                                                    Horas al Mes
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <%--<asp:TextBox  CssClass="form-control" ID="TxtHorasMes" runat="server" ReadOnly="True"   >720</asp:TextBox>--%>
                                                                </div>
                                                                </div>
                                                                <div class="row">
                                                                <div class="col-md-8">
                                                                    % de Utilización
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <%--<asp:TextBox  CssClass="form-control" ID="TxtPorcUtil" runat="server" ReadOnly="True"></asp:TextBox>--%>
                                                                </div>
                                                                </div>
                                                                <div class="row">
                                                                <div class="col-md-8">
                                                                    Kws Est. x Censo
                                                                </div>
                                                                <div class="col-md-4">
                                                                  <%--  <asp:TextBox  CssClass="form-control" ID="TxtestXCens" runat="server" ReadOnly="True"   ></asp:TextBox>--%>
                                                                </div>
                                                                </div> 
                                                            <br />    
                                                                <div class="row">
                                                                    <div class="col-md-8">
                                                                            <label class="labelLiquidacion" ><span>Promedio de Estrato:</span></label>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                  <%--  <asp:TextBox  CssClass="form-control " ID="TxtPromEstrato" runat="server" OnTextChanged="TxtPromEstrato_TextChanged" AutoPostBack="true"  ></asp:TextBox>   --%>
                                                                </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-8">
                                                                            <label class="labelLiquidacion"><span>Carga Contratada:</span></label>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                   <%-- <asp:TextBox  CssClass="form-control " ID="TxtCargaContra" Enabled="false" runat="server"   ></asp:TextBox>   --%>
                                                                </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-8">
                                                                            <label class="labelLiquidacion"><span>Consumos posteriores a la normalización:</span></label>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                       <%-- <asp:TextBox  CssClass="form-control " ID="TxtConsuPoster" OnTextChanged="TxtConsuPoster_TextChanged" AutoPostBack="true" Text="0" runat="server"   ></asp:TextBox>   --%>
                                                                    </div>
                                                                </div>
								                        </div>
                                                    </div>
                                                </div>
										        </div>
                                            </div>
                                            <div class="col-md-9">
                                                <!-- ****************************************************************************** METODOS DE LIQUIDACIÓN **************************************************************************-->
                                                <div class="panel panel-primary" id="pnlPrin">					
								                    <!--Panel heading-->
								                    <div class="panel-heading">
									                    <div class="panel-control">					
										                    <!--Nav tabs-->
										                        <ul class="nav nav-tabs">
											                    <li class="d active" data-toggle="tooltip" title="Carga Contratada"><a class="d" data-toggle="tab" href="#demo-tabs-box-m1" aria-expanded="true" id="Metodo1"  >Carga C</a></li>
											                    <li class="d" data-toggle="tooltip" title="Carga Encontrada"><a class="d" data-toggle="tab"  href="#demo-tabs-box-m2" aria-expanded="false" id="Metodo2">Carga En</a></li>
                                                                <li class="d" data-toggle="tooltip" title="Censo de Carga"><a class="d" data-toggle="tab"  href="#demo-tabs-box-m3" aria-expanded="false" id="Metodo3">Censo</a></li>
                                                          <%--      <li class="d" data-toggle="tooltip" title="Devolución de Lectura"><a class="d" data-toggle="tab"  href="#demo-tabs-box-m4" aria-expanded="false" id="Metodo4">Devolución</a></li>
                                                                <li class="d" data-toggle="tooltip" title="Evolución de Consumo"><a class="d" data-toggle="tab"  href="#demo-tabs-box-m5" aria-expanded="false" id="Metodo5">Evolución</a></li>--%>
                                                                <li class="d" data-toggle="tooltip" title="Promedio de Estrato"><a class="d" data-toggle="tab"  href="#demo-tabs-box-m6" aria-expanded="false" id="Metodo6">Promedio</a></li>
<%--                                                                <li class="d" data-toggle="tooltip" title="Porcentaje de Error (30%)"><a class="d" data-toggle="tab"  href="#demo-tabs-box-m7" aria-expanded="false" id="Metodo7">Error (30%)</a></li>--%>
                                                                <li class="d" data-toggle="tooltip" title="Porcentaje de Error"><a class="d" data-toggle="tab"   href="#demo-tabs-box-m8" aria-expanded="false" id="Metodo8">Error</a></li>
                                                                    <li class="d" data-toggle="tooltip" title="Porcentaje de Error"><a class="d" data-toggle="tab"   href="#stadistica" aria-expanded="false" id="estadistica">Análisis </a></li>
                                                                    
										                    </ul>
									                    </div>
								                    </div>
								                    <!--Panel body-->
								                    <div class="panel-body">
									                    <!--Tabs content-->
									                    <div class="tab-content">
                                                            <!-- inicio metodo 1-->
                                                            <div id="demo-tabs-box-m1" class="tab-pane fade active in">
                                                                <%-- <div class="row">
                                                                    <%--<div class="col-md-12">
                                                                            <p class="page-header ">Carga Contratada</p>
                                                                    </div>
                                                                </div>--%>
                                                                <div class="row">
                                                                    <div class="col-sm-12">
							                                        <!--Primary Panel-->
							                                        <!--===================================================-->
							                                                <div class="panel panel-bordered panel-dark">
								                                        <div class="panel-heading texto1">
									                                        <p class="panel-title">Calculo de la E.C.D.F</p>                                                        
								                                        </div>
								                                        <div class="panel-body">
                                                                            <div class="row">
                                                                                <div class="form-group col-md-2">
                                                                                    <asp:Label runat="server" ID="lblCC"  Text="C.C (KW)" ToolTip="Carga Contratada"></asp:Label>
                                                                                     <asp:TextBox  CssClass="form-control " ID="TxtCargaContra" Enabled="false" runat="server"   ></asp:TextBox>   
                                                                                    <asp:TextBox ID="TxtCC" runat="server" CssClass="form-control" Enabled="false" ReadOnly="True" Visible="false"></asp:TextBox>
                                                                                </div>
                                                                                <div class="form-group col-md-2">
                                                                                    <asp:Label runat="server" ID="Label1"  Text="F.U. (%)" ToolTip="Factor Utilización"></asp:Label>
                                                                                    <asp:TextBox ID="TxtCCFu" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                    
                                                                                <div class="form-group col-md-2">
                                                                                    <asp:Label runat="server" ID="Label2"  Text="H.M." ToolTip="Nro Horas"></asp:Label>
                                                                                    <asp:TextBox ID="TxtCCNm" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                <div class=" form-group col-md-2">
                                                                                        <asp:Label runat="server" ID="Label3"  Text="Meses" ToolTip="Meses"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCCMeses" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                <div class="form-group col-md-2">
                                                                                        <asp:Label runat="server" ID="Label5"  Text="CO (kWh)" ToolTip="Energia Consumida Dejada de Facturar"></asp:Label>
                                                                                    <asp:TextBox ID="TxtCCCo" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                <div class="form-group col-md-2">
                                                                                        <asp:Label runat="server" ID="Label4"  Text="E.C.D.F (kWh)"></asp:Label>
                                                                                    <asp:TextBox ID="TxtCCECDF" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                            </div>                                                     
								                                        </div>
							                                        </div>
							                                        <!--===================================================-->
							                                        <!--End Primary Panel-->					
						                                            </div>
                                                                </div>
											                    <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto">
									                                            <p class="panel-title">MÉTODO UTILIZADO PARA EL CALCULO DE LA ENERGÍA CONSUMIDA DEJADA DE FACTURAR</p>
								                                            </div>                                                        
								                                            <div class="panel-body">
                                                                                 <asp:Label runat="server" ID="LblCargContratada"  Text="Para hacer la liquidación de la anomalía encontrada,  se utilizó el Carga Contratada  y la formula utilizada para realizar el calculo del componente C1 es:C1 :[(CC x FU x Número de Horas x Numero de Meses a cobrar)]- CO">
                                                                                 </asp:Label>
                                                                       
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto1">
									                                            <p class="panel-title">REEMPLAZANDO LOS VALORES EN LA FORMULA MATEMÁTICA TENEMOS:</p>
								                                            </div>
                                                        
								                                            <div class="panel-body">
                                                                                <asp:TextBox  CssClass="form-control" ID="TxtCCResul" ReadOnly="true" runat="server" ></asp:TextBox>  
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="panel panel-bordered panel-dark">
								                                                <div class="panel-heading texto1">
									                                                <h5 class="panel-title">OBSERVACIONES:</h5>
								                                                </div>
                                                        
								                                                <div class="panel-body">
                                                                                    <asp:TextBox  CssClass="form-control" ID="TxtCCObser"  runat="server"  TextMode="MultiLine"></asp:TextBox>
                                                                                     <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ErrorMessage="*" ControlToValidate="TxtCCObser" ValidationGroup="BtnCaEnGuardar"
                                                                                          ForeColor="Red" SetFocusOnError="true"></asp:RequiredFieldValidator>  
								                                                </div>
                                                                            </div>                                                        
                                                                        </div>
											                        </div>
                                                                <div class="col-md-12">           
                                                                    <asp:Button ID="BtnCaEnGuardar" CssClass="btn btn-primary"  runat="server" Text="Guardar" OnClick="BtnCaEnGuardar_Click" ValidationGroup="BtnCaEnGuardar" />
                                                         
                                                                   <a href="GestionBandejas.aspx" id="Button15" class="btn btn-default" >Cerrar</a>                     
                                                                </div>

                                                                <div id="Listacargac">

                                                                </div>
                                                                    
                                                            </div>
                                                            
                                                            <!-- fin metodo 1-->
                                                            <!-- inicio metodo 2-->
                                                            <%-- Carga encontrada medida  --%>
                                                            <div id="demo-tabs-box-m2" class="tab-pane fade">
                                                                <%-- <div class="row">
                                                                    <div class="col-md-12">
                                                                            <h3 class="page-header text-overflow">Carga Encontrada</h3>
                                                                    </div>
                                                                </div>--%>  
                                                                 <div class="row">
                                                                    <div class="col-sm-12">
							                                        <!--Primary Panel-->
							                                        <!--===================================================-->
							                                                <div class="panel panel-bordered panel-dark">
								                                        <div class="panel-heading texto1">
									                                        <p class="panel-title">Calculo de la E.C.D.F</p>                                                        
								                                        </div>
								                                        <div class="panel-body">
                                                                           <div class="row">
                                                                                 <div class="col-sm-12">
                                                                                <div>
									                                                <strong class="titled">
                                                                                        Datos del Medidor
									                                                </strong>  
								                                                </div>
                                                                           
                                                                                <div class="row">
                                                                                
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label27"  Text="Corriente"></asp:Label>
                                                                           
                                                                                    </div>
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label28"  Text="Fase R (I)"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCEF1" runat="server" Text="0" CssClass="form-control"  ReadOnly="True"></asp:TextBox>
                                                                                    </div>
                                    
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label30"  Text="Fase S (I)"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCEF2" runat="server" Text="0" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div> 
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label49"  Text="Fase T (I)"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCEF3" runat="server" Text="0" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div> 
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label32"  Text="Voltaje"></asp:Label>
                                                                           
                                                                                    </div>
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label33"  Text="Fase R (V)"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCEV1" runat="server" Text="0" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div>
                                    
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label34"  Text="Fase S (V)"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCEV2" runat="server" Text="0" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div> 
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label48"  Text="Fase T (V)"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCEV3" runat="server" Text="0" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div> 
                                                                                </div>
                                                                                <div class="row" >
                                                                                      <asp:Label runat="server" ID="Label50"  Text="C.E.M. (kWh)" ToolTip="Carga Encontrada Medidor"></asp:Label>
                                                                                      <asp:TextBox ID="TxtCEM" runat="server"  CssClass="form-control" Text="0" Enabled="false" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                
                                                                            </div>                                                     
								                                            
                                                                           </div>
                                                                           
                                                                           <div class="row">
                                                                            <div class="col-sm-12">
                                                                                <div>
									                                                <strong class="titled">
                                                                                        Datos de la Derivación
									                                                </strong>  
								                                                </div>
                                                                                <div class="row">
                                                                                    <div class="form-group col-md-3">
                                                                                        <%--<asp:Label runat="server" ID="Label50"  Text="medidaAnomaliaTipo"></asp:Label>
                                                                                        <asp:Label runat="server" ID="medidaAnomaliaTipo"  Text=""></asp:Label> --%>
                                                                                        <asp:Label runat="server" ID="Label54"  Text="Corriente"></asp:Label>
                                                                                    </div>
                                                                                     <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label56"  Text="Fase R (I)"></asp:Label>
                                                                                        <asp:TextBox ID="medidaAnomaliaIR" runat="server" Text="0" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div>
                                    
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label57"  Text="Fase S (I)"></asp:Label>
                                                                                        <asp:TextBox ID="medidaAnomaliaIS" runat="server" Text="0" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div> 
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label58"  Text="Fase T (I)"></asp:Label>
                                                                                        <asp:TextBox ID="medidaAnomaliaIT" runat="server" Text="0" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div> 
                                                                                    
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="form-group col-md-3">
                                                                                       <asp:Label runat="server" ID="Label55"  Text="Voltaje"></asp:Label>
                                                                                    </div>
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label51"  Text="Fase R (V)"></asp:Label>
                                                                                        <asp:TextBox ID="medidaAnomaliaVR" runat="server" Text="0" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div>
                                    
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label52"  Text="Fase S (V)"></asp:Label>
                                                                                        <asp:TextBox ID="medidaAnomaliaVS" runat="server" Text="0" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div> 
                                                                                    <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label53"  Text="Fase T (V)"></asp:Label>
                                                                                        <asp:TextBox ID="medidaAnomaliaVT" runat="server" Text="0" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div> 
                                                                                </div>
                                                                                <div class="row" >
                                                                                      <asp:Label runat="server" ID="Label59"  Text="C.E.D.  (kWh)" ToolTip="Carga Encontrada Derivación"></asp:Label>
                                                                                      <asp:TextBox ID="TxtCED" runat="server"  CssClass="form-control" Text="0" Enabled="false" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                            </div>

                                                                          </div>
                                                                             <div class="row">
                                                                                 <div class="col-sm-3">
                                                                                     <div class="checkbox">
                                                                                         <strong>
                                                                                        <label>                                                                                      
                                                                                            <asp:CheckBox ID="chkMedidor" runat="server" Text="Tomar E.C.D.F. De Medidor"  AutoPostBack="true" OnCheckedChanged="chkMedidor_CheckedChanged" />
                                                                                        </label>
                                                                                             </strong>
                                                                                      </div>
                                                                                 </div>
                                                                                 <div class="col-sm-3">
                                                                                     <div class="checkbox">
                                                                                         <strong>
                                                                                        <label>                                                                                      
                                                                                            <asp:CheckBox ID="ChkDeriva" runat="server" Text="Tomar E.C.D.F. De Derivación"  AutoPostBack="true" Checked="true" OnCheckedChanged="ChkDeriva_CheckedChanged"/>
                                                                                        </label>
                                                                                             </strong>
                                                                                      </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                 <div>
									                                                <strong class="titled">
                                                                                        Resultados
									                                                </strong>  
								                                                </div>
                                                                                    <div class="form-group col-md-2">
                                                                                        <asp:Label runat="server" ID="Label24"  Text="C.E." ToolTip="Carga Encontrada"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCE" runat="server"  CssClass="form-control" Text="0" Enabled="false" ReadOnly="True"></asp:TextBox>
                                                                                    </div>
                                                                                    <div class="form-group col-md-2">
                                                                                        <asp:Label runat="server" ID="Label25"  Text="F.U. (%)" ToolTip="Factor Utilización"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCEFU" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div>
                                    
                                                                                    <div class="form-group col-md-2">
                                                                                        <asp:Label runat="server" ID="Label26"  Text="H. M."></asp:Label>
                                                                                        <asp:TextBox ID="TxtCENH" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div>                                                                     
                                                                                    <div class="form-group col-md-2">
                                                                                        <asp:Label runat="server" ID="Label45"  Text="Meses"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCEMeses" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                    </div> 
                                                                                    <div class="form-group col-md-2">
                                                                                            <asp:Label runat="server" ID="Label29"  Text="E.C.D.F (kWh)" ToolTip="Energia Consumida Dejada de Facturar"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCEC1" runat="server" CssClass="form-control" Text="0" ReadOnly="True"></asp:TextBox>
                                                                                    </div>
                                                                                </div>
                                                                        </div>
							                                        </div>
							                                        <!--===================================================-->
							                                        <!--End Primary Panel-->					
						                                            </div>
                                                                </div>
											                    <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto">
									                                            <p class="panel-title">MÉTODO UTILIZADO PARA EL CALCULO DE LA ENERGÍA CONSUMIDA DEJADA DE FACTURAR</p>
								                                            </div>                                                        
								                                            <div class="panel-body">
                                                                                 <asp:Label runat="server" ID="LblcargaEncontrada"  Text="Para hacer la liquidación de la anomalía  se utilizó la carga encontrada, primero se calcula  CI y luego  C1:CI =( Voltaje  *  Intensidad (Amperaje), luego se aplica la formula:C1: [(CI x FU * Número de Horas) * Numero de meses a cobrar">
                                                                                 </asp:Label>
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto1">
									                                            <p class="panel-title">REEMPLAZANDO LOS VALORES EN LA FORMULA MATEMÁTICA TENEMOS:</p>
								                                            </div>
                                                        
								                                            <div class="panel-body">
                                                                                <asp:TextBox  CssClass="form-control" ID="TxtCEResul" ReadOnly="true" runat="server" ></asp:TextBox>  
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="panel panel-bordered panel-dark">
								                                                <div class="panel-heading texto1">
									                                                <h5 class="panel-title">OBSERVACIONES:</h5>
								                                                </div>
                                                        
								                                                <div class="panel-body">
                                                                                    <asp:TextBox  CssClass="form-control" ID="TxtCEObser"  runat="server"  TextMode="MultiLine"></asp:TextBox>
                                                                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ErrorMessage="*" ControlToValidate="TxtCEObser"
                                                                                         ValidationGroup="BtnCEGuardar" ForeColor="Red" SetFocusOnError="true"></asp:RequiredFieldValidator>  
								                                                </div>
                                                                            </div>                                                        
                                                                        </div>
											                        </div>
                                                                <div class="col-md-12">           
                                                                    <asp:Button ID="BtnCEGuardar" CssClass="btn btn-primary" ValidationGroup="BtnCEGuardar" runat="server" Text="Guardar" OnClick="BtnCEGuardar_Click" />
                                                           
                                                                   <a href="GestionBandejas.aspx" id="Button19" class="btn btn-default" >Cerrar</a>                     
                                                                </div>                                                                 
                                                            </div>
                                                            <!-- fin metodo 2-->

                                                            <!--Censo Carga-->
                                                                <!--===================================================-->
                                                            <div id="demo-tabs-box-m3" class="tab-pane fade">
                                                                <%-- <div class="row">
                                                                    <div class="col-md-12">
                                                                            <h3 class="page-header text-overflow">Censo De Carga</h3>
                                                                    </div>
                                                                </div>--%>
                                                                    <div class="row">
                                                                    <div class="col-sm-12">
							                                        <!--Primary Panel-->
							                                        <!--===================================================-->
							                                        <div class="panel panel-bordered panel-dark">
								                                        <div class="panel-heading texto1">
									                                        <p class="panel-title">Calculo de la E.C.D.F</p>                                                        
								                                        </div>
								                                        <div class="panel-body">
                                                                            <!-- fin fila 87->
                                                                            <!-- fila 9-->
                                                                              <div class="row" >                                                                                
                                                                                <div class=" form-group col-md-4">
                                                                                    <asp:Label runat="server" ID="Label44"  Text="C.W" ToolTip=" Carga en Wattios" Visible="false"></asp:Label>
                                                                                    <asp:TextBox  CssClass="form-control" ID="TxtCargaWatt" runat="server" ReadOnly="True" Visible="false"  Font-Size="Small"   >1662</asp:TextBox>
                                                                                    <asp:Label runat="server" ID="Label43"  Text="C.kW" ToolTip="Carga en KWS"></asp:Label>
                                                                                    <asp:TextBox  CssClass="form-control" ID="TxtCargaKws" runat="server" ReadOnly="True"   >1.662</asp:TextBox>
                                                                                </div>
                                                                                <div class="form-group col-md-4 ">
                                                                                    <asp:Label runat="server" ID="Label42"  Text="H.M" ToolTip="Horas al Mes"></asp:Label>
                                                                                    <asp:TextBox  CssClass="form-control" ID="TxtHorasMes" runat="server" ReadOnly="True"   >720</asp:TextBox>
                                                                                     <asp:Label runat="server" ID="Label8"  Text="N.H." ToolTip="Nro Horas" Visible="false" ></asp:Label>
                                                                                    <asp:TextBox ID="TxtCINroHoras" runat="server" CssClass="form-control" Visible="false"  ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                <div class="form-group col-md-4">
                                                                                     <asp:Label runat="server" ID="Label41"  Text="F.U" ToolTip="Factor Utilización" Visible="false"></asp:Label>

                                                                                    <asp:TextBox  CssClass="form-control" ID="TxtPorcUtil" runat="server" ReadOnly="True" Visible="false"></asp:TextBox>
                                                                                    <asp:Label runat="server" ID="Label7"  Text="F.U. (%)" ToolTip="Factor Utilización"></asp:Label>
                                                                                    <asp:TextBox ID="TxtCIFU" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="form-group col-md-4">
                                                                                    <asp:Label runat="server" ID="Label6"  Text="C.I (kWh)" ToolTip="Carga Instalada"></asp:Label>
                                                                                      <asp:TextBox  CssClass="form-control" ID="TxtestXCens" runat="server" ReadOnly="True"   ></asp:TextBox>
                                                                                    <asp:TextBox ID="TxtCI" runat="server" CssClass="form-control" visible="false" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                              
                                                                                <div class=" form-group col-md-2">
                                                                                        <asp:Label runat="server" ID="Label9"  Text="Meses"></asp:Label>
                                                                                        <asp:TextBox ID="TxtCIMeses" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                <div class="form-group col-md-2">
                                                                                        <asp:Label runat="server" ID="Label10"  Text="CO (kWh)" ></asp:Label>
                                                                                    <asp:TextBox ID="TxtCIConsumos" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                <div class="form-group col-md-4">
                                                                                        <asp:Label runat="server" ID="Label11"  Text="E.C.D.F (kWh)" ToolTip="Energia Consumida Dejada de Facturar"></asp:Label>
                                                                                    <asp:TextBox ID="TxtCIECDF" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                            </div>
                                                                            <!-- fin fila 9-->                                                        
								                                        </div>
							                                        </div>
							                                        <!--===================================================-->
							                                        <!--End Primary Panel-->					
						                                            </div>
                                                                </div>
											                    <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto">
									                                            <p class="panel-title">MÉTODO UTILIZADO PARA EL CALCULO DE LA ENERGÍA CONSUMIDA DEJADA DE FACTURAR</p>
								                                            </div>                                                        
								                                            <div class="panel-body">
                                                                                <asp:Label runat="server" ID="LblCensoCarga"  Text=" Para hacer la liquidación de la anomalía encontrada,  se utilizó el Censo de Carga  y la formula utilizada para realizar el calculo del componente C1 es:C1 :[(CI x FU x Número de Horas x Numero de Meses a cobrar)]- CO ">
                                                                                 </asp:Label>
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto1">
									                                            <p class="panel-title">REEMPLAZANDO LOS VALORES EN LA FORMULA MATEMÁTICA TENEMOS:</p>
								                                            </div>
                                                        
								                                            <div class="panel-body">
                                                                                <asp:TextBox  CssClass="form-control" ID="TxtCIResul" ReadOnly="true" runat="server" ></asp:TextBox>  
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="panel panel-bordered panel-dark">
								                                                <div class="panel-heading texto1">
									                                                <h5 class="panel-title">OBSERVACIONES:</h5>

								                                                </div>
                                                        
								                                                <div class="panel-body">
                                                                                    <asp:TextBox  CssClass="form-control" ID="TxtCIObser"  runat="server"   TextMode="MultiLine"></asp:TextBox>
                                                                                     <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ErrorMessage="*" ControlToValidate="TxtCIObser" ValidationGroup="BtnCenGuardar" ForeColor="Red" SetFocusOnError="true"></asp:RequiredFieldValidator>  
								                                                </div>

                                                                            </div>
                                                        
                                                                        </div>
											                        </div>
                                                                <div class="col-md-12">           
                                                                    <asp:Button ID="BtnCenGuardar" CssClass="btn btn-primary" ValidationGroup="BtnCenGuardar" runat="server" Text="Guardar"  OnClick="BtnCenGuardar_Click" />
                                                            
                                                                     <a href="GestionBandejas.aspx" id="Button14" class="btn btn-default" >Cerrar</a>                 
                                                                </div>
                                                            </div>
                                                            <!-- fin metodo 3-->

                                                            <!-- Devolución de Lecturas-->
                                                                <!--===================================================-->
                                                            <div id="demo-tabs-box-m4" class="tab-pane fade">
                                                                <%--<div class="row">
                                                                    <div class="col-md-12">
                                                                            <h3 class="page-header text-overflow">Devolución de Lecturas</h3>
                                                                    </div>
                                                                </div>--%>
                                                                <div class="row">
                                                                    <div class="col-sm-12">
							                                        <!--Primary Panel-->
							                                        <!--===================================================-->
							                                                <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto1">
									                                            <p class="panel-title">Calculo de la E.C.D.F</p>                                                        
								                                            </div>
                                                                            <div class="panel-body">
                                                                            <!-- fila 2-->
                                                                                <div class="row">                                                                          
                                                                                    <div class="form-group col-md-4">
                                                                                       <asp:Label runat="server" ID="Label31"  Text="F.U.L" ToolTip="Fecha Última Lectura"></asp:Label>
                                                                                        <asp:TextBox  CssClass="form-control fecha" ID="FechaLectura1" runat="server" Enabled="false" ></asp:TextBox>                                                                                   
                                                                                    </div>                                                                              
                                                                                    <div class="col-md-4">
                                                                                       <asp:Label runat="server" ID="Label35"  Text="F.U.L" ToolTip="Fecha Lectura Actual"></asp:Label>
                                                                                        <asp:TextBox  CssClass="form-control fecha" ID="FechaLectura2" runat="server"   Enabled="false" ></asp:TextBox> 
                                                                            
                                                                                    </div>
                                                                                    <div class="form-group col-md-4">
                                                                                             <asp:Label runat="server" ID="Label36"  Text="Días" ToolTip="Días Transcurridos"></asp:Label>
                                                                                            <asp:TextBox  CssClass="form-control" ID="TxtDiasTransc1" ReadOnly="true" Text="0" runat="server" ></asp:TextBox>   
                                                                                    </div>            
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="form-group col-md-4">
                                                                                         <asp:Label runat="server" ID="Label37"  Text="U.L" ToolTip="ÚLTIMA LECTURA(Kwh)"></asp:Label>                                                                                        
                                                                                        <asp:TextBox  CssClass="form-control" ID="NroLectura1" runat="server" Text="0"  ></asp:TextBox>
                                                                                    </div>                                                                                        
                                                                                    <div class="form-group  col-md-4">
                                                                                        <asp:Label runat="server" ID="Label38"  Text="L.A" ToolTip="LECTURA ACTUAL(Kwh)"></asp:Label>                                                                                        
                                                                                        
                                                                                        <asp:TextBox  CssClass="form-control" ID="NroLectura2" runat="server" Text="0"  ></asp:TextBox>
                                                                                    </div>
                                                                                      <div class=" form-group col-md-4">
                                                                                          <asp:Label runat="server" ID="Label39"  Text="C1" ToolTip=""></asp:Label>                                                                                        
                                                                                       
                                                                                        <asp:TextBox  CssClass="form-control" ID="TxtValorFinal" Text="0" runat="server" ></asp:TextBox> 
                                                                                    </div>  
                                                                            
                                                                                </div>                                                                           
									                                                                                                                          
									                                            <div class="row">
                                                                                       
                                                                           
                                                                                     <div class=" form-group col-md-4">
                                                                                        <label> C1 X 5 Meses  </label>
                                                                                        <asp:TextBox  CssClass="form-control" ID="TxtValor" Text="0" runat="server" ></asp:TextBox> 
                                                                                    </div>
                                                                                    <div class=" form-group col-md-4">
                                                                                        <label>CO</label>
                                                                                        <asp:TextBox  CssClass="form-control" ID="TxtDLCO" runat="server" ></asp:TextBox> 
                                                                                    </div>
                                                                                    <div class=" form-group col-md-4">
                                                                                        <label></label>
                                                                                           <asp:Label runat="server" ID="Label40"  Text="E.C.D.F" ToolTip="Energia Consumida Dejada De Facturar"></asp:Label>                                                                                        
                                                                                        <asp:TextBox  CssClass="form-control" ID="TxtDLECDF" runat="server" ></asp:TextBox> 
                                                                                    </div>
                                                                                </div> 
                                                                                                                                                              
								                                            </div>
                                                                        </div>
							                                        <!--===================================================-->
							                                        <!--End Primary Panel-->
                                                                            					
						                                            </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto">
									                                            <p class="panel-title">MÉTODO UTILIZADO PARA EL CALCULO DE LA ENERGÍA CONSUMIDA DEJADA DE FACTURAR</p>
								                                            </div>                                                        
								                                            <div class="panel-body">
                                                                                <asp:Label runat="server" ID="LblDevolucion"  Text=" Para hacer la liquidación de la anomalía, se utilizó el método Manual Consumos, para este caso la liquidación se realizó de la siguiente forma:C2 = C1 – C0 ">
                                                                                 </asp:Label>
                                                                                <label>
                                                                               
                                                                                </label>
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto1">
									                                            <p class="panel-title">REEMPLAZANDO LOS VALORES EN LA FORMULA MATEMÁTICA TENEMOS:</p>
								                                            </div>
                                                        
								                                            <div class="panel-body">
                                                                                <asp:TextBox  CssClass="form-control" ID="TxtDLResul" ReadOnly="true" runat="server" ></asp:TextBox>  
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="panel panel-bordered panel-dark">
								                                                <div class="panel-heading texto1">
									                                                <h5 class="panel-title">OBSERVACIONES:</h5>
								                                                </div>
                                                        
								                                                <div class="panel-body">
                                                                                    <asp:TextBox  CssClass="form-control" ID="TxtDevObser"  runat="server"  TextMode="MultiLine"></asp:TextBox>
                                                                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" ErrorMessage="*" ControlToValidate="TxtDevObser" 
                                                                                        ValidationGroup="BtnDevGuardar" ForeColor="Red" SetFocusOnError="true"></asp:RequiredFieldValidator>  
								                                                </div>

                                                                            </div>
                                                        
                                                                        </div>
											                        </div>
                                                                <div class="col-md-12">           
                                                                    <asp:Button ID="BtnDevGuardar" CssClass="btn btn-primary" ValidationGroup="BtnDevGuardar" runat="server" Text="Guardar" OnClick="BtnDevGuardar_Click"  />  
                                                             
                                                                    <a href="GestionBandejas.aspx" id="Button1" class="btn btn-default" >Cerrar</a>           
                                                                </div>
                                                            </div>
                                                            <!-- fin metodo 4-->

                                                            <!-- Evolución Consumos-->
                                                                <!--===================================================-->
                                                            <div id="demo-tabs-box-m5" class="tab-pane fade">
                                                                <%-- <div class="row">
                                                                    <div class="col-md-12">
                                                                            <h3 class="page-header text-overflow">Evolución Consumos</h3>
                                                                    </div>
                                                                </div>--%>
                                                                    <div class="row">
                                                                        <div class="col-sm-12">
							                                        <!--Primary Panel-->
							                                        <!--===================================================-->
							                                                <div class="panel panel-bordered panel-dark">
								                                        <div class="panel-heading texto1">
									                                        <p class="panel-title">Calculo de la E.C.D.F</p>                                                        
								                                        </div>
								                                        <div class="panel-body">
                                                                            <!-- fin fila 87->
                                                                            <!-- fila 9-->
                                                                            <div class="row">
                                                                                <div class="form-group col-md-3">
                                                                                    <asp:Label runat="server" ID="Label15"  Text="C.P" ToolTip="Carga Posterior"></asp:Label>
                                                                                    <asp:TextBox ID="TxtEC" runat="server" CssClass="form-control" Visible="false" ReadOnly="True"></asp:TextBox>
                                                                                     <asp:TextBox  CssClass="form-control " ID="TxtConsuPoster" OnTextChanged="TxtConsuPoster_TextChanged" AutoPostBack="true" Text="0" runat="server"   ></asp:TextBox>   

                                                                                </div>
                                                                                <div class="form-group col-md-3">
                                                                                    <asp:Label runat="server" ID="Label16"  Text="Meses" ToolTip="Nro Meses"></asp:Label>
                                                                                    <asp:TextBox ID="TxtMeses" runat="server" CssClass="form-control" Text="5" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                    
                                                                                <div class="form-group col-md-3">
                                                                                    <asp:Label runat="server" ID="Label18"  Text="CO"></asp:Label>
                                                                                    <asp:TextBox ID="TxECCO" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                <div class=" form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label19"  Text="E.C.D.F" ToolTip="Energia Consumida Dejada De Facturar"></asp:Label>
                                                                                        <asp:TextBox ID="TxtECCDF" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                            </div>
                                                                            <!-- fin fila 9-->                                                        
								                                        </div>
							                                        </div>
							                                        <!--===================================================-->
							                                        <!--End Primary Panel-->					
						                                                </div>
                                                                    </div>
											                    <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto">
									                                            <p class="panel-title">MÉTODO UTILIZADO PARA EL CALCULO DE LA ENERGÍA CONSUMIDA DEJADA DE FACTURAR</p>
								                                            </div>                                                        
								                                            <div class="panel-body">
                                                                                <asp:Label runat="server" ID="LblEvolucion"  Text=" Para hacer la liquidación de la anomalía,  se utilizó el método de Manual Consumos , para este caso  la liquidación se realizó de la siguiente forma:C2 = C1 – C0 ">
                                                                                </asp:Label>
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto1">
									                                            <p class="panel-title">REEMPLAZANDO LOS VALORES EN LA FORMULA MATEMÁTICA TENEMOS:</p>
								                                            </div>                                                        
								                                            <div class="panel-body">
                                                                                <asp:TextBox  CssClass="form-control" ID="TxtECResult"  ReadOnly="true" runat="server" ></asp:TextBox>  
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="panel panel-bordered panel-dark">
								                                                <div class="panel-heading texto1">
									                                                <h5 class="panel-title">OBSERVACIONES:</h5>

								                                                </div>                                                        
								                                                <div class="panel-body">
                                                                                    <asp:TextBox  CssClass="form-control" ID="TxtECObser"  runat="server"   TextMode="MultiLine"></asp:TextBox>
                                                                                     <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" ErrorMessage="*" ControlToValidate="TxtECObser" ValidationGroup="BtnEcGuardar" ForeColor="Red" SetFocusOnError="true"></asp:RequiredFieldValidator>  
								                                                </div>
                                                                            </div>
                                                        
                                                                        </div>
											                        </div>
                                                                <div class="col-md-12">           
                                                                    <asp:Button ID="BtnEcGuardar" CssClass="btn btn-primary" ValidationGroup="BtnEcGuardar" runat="server" Text="Guardar" OnClick="BtnEcGuardar_Click"  />  
                                                            
                                                                      <a href="GestionBandejas.aspx" id="Button13" class="btn btn-default" >Cerrar</a>               
                                                                </div>
                                                            </div>
                                                            <!--Promedio Estrato-->

                                                            <!-- inicio metodo 6-->
                                                                    <!--===================================================-->
                                                            <div id="demo-tabs-box-m6" class="tab-pane fade">
                                                                <%-- <div class="row">
                                                                    <div class="col-md-12">
                                                                            <p class="page-header text-overflow">Promedio Estrato</p>
                                                                    </div>
                                                                </div>--%>
                                                                <div class="row">
                                                                    <div class="col-sm-12">
							                                        <!--Primary Panel-->
							                                        <!--===================================================-->
							                                                <div class="panel panel-bordered panel-dark">
								                                        <div class="panel-heading texto1">
									                                        <p class="panel-title">Calculo de la E.C.D.F</p>                                                        
								                                        </div>
								                                        <div class="panel-body">
                                                                            <div class="row">
                                                                                <div class="form-group col-md-3">
                                                                                    <asp:Label runat="server" ID="Label12"  Text="P.E" ToolTip="Promedio Estrato  (kWh)"></asp:Label>
                                                                                      <asp:TextBox  CssClass="form-control " ID="TxtPromEstrato" runat="server" OnTextChanged="TxtPromEstrato_TextChanged" Text="0" AutoPostBack="true" ReadOnly="true"  ></asp:TextBox>   
                                                                                    <asp:TextBox ID="TxtProm" runat="server" CssClass="form-control" Enabled="false" visible="false" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                <div class="form-group col-md-3">
                                                                                    <asp:Label runat="server" ID="Label13"  Text="Meses" ToolTip="Nro Meses"></asp:Label>
                                                                                    <asp:TextBox ID="TxtpromMes" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                    
                                                                                <div class="form-group col-md-3">
                                                                                    <asp:Label runat="server" ID="Label14"  Text="CO  (kWh)"></asp:Label>
                                                                                    <asp:TextBox ID="TxtPromCO" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                 
                                                                                <div class="form-group col-md-3">
                                                                                        <asp:Label runat="server" ID="Label17"  Text="E.C.D.F  (kWh)" ToolTip="Energia Consumida Dejada de Facturar"></asp:Label>
                                                                                    <asp:TextBox ID="TxtPromECDF" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                            </div>                                                     
								                                        </div>
							                                        </div>
							                                        <!--===================================================-->
							                                        <!--End Primary Panel-->					
						                                            </div>
                                                                </div>
											                    <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto">
									                                            <p class="panel-title">MÉTODO UTILIZADO PARA EL CALCULO DE LA ENERGÍA CONSUMIDA DEJADA DE FACTURAR</p>
								                                            </div>                                                        
								                                            <div class="panel-body">
                                                                                <asp:Label runat="server" ID="LblPromedio"  Text="Para hacer la liquidación de la anomalía, se utilizó el método Promedio de Estrato, para este caso la liquidación se realizó de la siguiente forma:C2 = C1 – C0">
                                                                                     </asp:Label>                                                                       
								                                            </div>
                                                                        </div>                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto1">
									                                            <p class="panel-title">REEMPLAZANDO LOS VALORES EN LA FORMULA MATEMÁTICA TENEMOS:</p>
								                                            </div>                                                        
								                                            <div class="panel-body">
                                                                                <asp:TextBox  CssClass="form-control" ID="TxtPromResul" ReadOnly="true" runat="server" ></asp:TextBox>  
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="panel panel-bordered panel-dark">
								                                                <div class="panel-heading texto1">
									                                                <h5 class="panel-title">OBSERVACIONES:</h5>
								                                                </div>                                                        
								                                                <div class="panel-body">
                                                                                    <asp:TextBox  CssClass="form-control" ID="TxtPromObser"  runat="server"  TextMode="MultiLine"></asp:TextBox>
                                                                                     <asp:RequiredFieldValidator ID="RequiredFieldValidator9" runat="server" ErrorMessage="*" ControlToValidate="TxtPromObser" ValidationGroup="BtnPromGuardar" ForeColor="Red" SetFocusOnError="true"></asp:RequiredFieldValidator>  
								                                                </div>

                                                                            </div>
                                                        
                                                                        </div>
											                        </div>
                                                                <div class="col-md-12">           
                                                                    <asp:Button ID="BtnPromGuardar" CssClass="btn btn-primary" ValidationGroup="BtnPromGuardar" runat="server" Text="Guardar" OnClick="BtnPromGuardar_Click" />
                                                             
                                                                      <a href="GestionBandejas.aspx" id="Button12" class="btn btn-default" >Cerrar</a>            
                                                                </div>
                                                            </div>
                                                            <!-- fin metodo 6-->

                                                            <!-- Porcentaje de Error(30%)-->
                                                            <div id="demo-tabs-box-m7" class="tab-pane fade">
                                                                <div class="row">
                                                                    <%--<div class="col-md-12">
                                                                            <h3 class="page-header text-overflow">Porcentaje de Error(30%)</h3>
                                                                    </div>--%>
                                                            
                                                                </div>
                                                            </div>
                                                            <!-- fin metodo 7-->

                                                            <!-- inicio metodo 8-->
                                                            <div id="demo-tabs-box-m8" class="tab-pane fade">
                                                                <div class="row">
                                                                    <%-- <div class="col-md-12">
                                                                            <h3 class="page-header text-overflow">Porcentaje de Error</h3>
                                                                    </div>--%>
                                                                     <div class="row">
                                                                    <div class="col-sm-12">
							                                        <!--Primary Panel-->
							                                        <!--===================================================-->
							                                                <div class="panel panel-bordered panel-dark">
								                                        <div class="panel-heading texto1">
									                                        <p class="panel-title">Calculo de la E.C.D.F</p>                                                        
								                                        </div>
								                                        <div class="panel-body">
                                                                             
                                                                            <div class="row">
                                                                                <div class="form-group col-md-4">
                                                                                    <asp:Label runat="server" ID="Label20"  Text="P." ToolTip="Porcentaje"></asp:Label>
                                                                                    <asp:TextBox ID="TxtPorc" runat="server" CssClass="form-control" AutoPostBack="true" ReadOnly="true"  OnTextChanged="TxtPorc_TextChanged" Text="0"></asp:TextBox>
                                                                                </div>
                                                                                <div class="form-group col-md-4">
                                                                                    <asp:Label runat="server" ID="Label22"  Text="CO (kWh)"></asp:Label>
                                                                                    <asp:TextBox ID="txtPorcCO" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                 
                                                                                <div class="form-group col-md-4">
                                                                                        <asp:Label runat="server" ID="Label23"  Text="C1 (kWh)"></asp:Label>
                                                                                    <asp:TextBox ID="TxtPorcC1" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div>
                                                                                
                                                                            </div> 
                                                                            <div class="row">
                                                                                <div class="form-group col-md-4">
                                                                                    <asp:Label runat="server" ID="Label46"  Text="C1" ToolTip="C1  (kWh)"></asp:Label>
                                                                                    <asp:Label CssClass="form-control"  runat="server" ID="lblC1" Text="" ReadOnly="True" ToolTip="C1"></asp:Label>
                                                                                </div>
                                                                                <div class="form-group col-md-4">
                                                                                     <asp:Label runat="server" ID="Label47"  Text="C2" ToolTip="C2  (kWh)"></asp:Label>
                                                                                    <asp:Label CssClass="form-control"  runat="server" ID="lblc2" ReadOnly="True" Text="" ToolTip="C1"></asp:Label>
                                                                                </div>
                                                                                 <div class="form-group col-md-4">
                                                                                        <asp:Label runat="server" ID="Label21"  Text="E.C.D.F (kWh)" ToolTip="Energia Consumida Dejada De Facturar"></asp:Label>
                                                                                    <asp:TextBox ID="TxtPorcECDF" runat="server" CssClass="form-control" ReadOnly="True"></asp:TextBox>
                                                                                </div> 
                                                                            </div>                                                      
								                                        </div>
							                                        </div>
							                                        <!--===================================================-->
							                                        <!--End Primary Panel-->					
						                                            </div>
                                                                </div>
											                    <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto">
									                                            <p class="panel-title">MÉTODO UTILIZADO PARA EL CALCULO DE LA ENERGÍA CONSUMIDA DEJADA DE FACTURAR</p>
								                                            </div>                                                        
								                                            <div class="panel-body">
                                                                                <asp:Label runat="server" ID="LblPorce"  Text="Para hacer la liquidación de la anomalía encontrada  se utilizó el método de porcentaje de error y la fórmula utilizada es C2= C1 – C0, en donde el componente C1 se calcula por regla de tres simple de la siguiente forma: C1 =  (Sumatoria de consumos facturados antes de la revisión  X  el 100% / el porcentaje(%) de los consumos que se venían facturando. Luego el resultante de la fórmula C2 = C1 – C0, representa el porcentaje( %) que no se facturó y que por consiguiente es el porcentaje de error que arroja la prueba de comprobación de registro del medidor .">
                                                                                </asp:Label> 
                                                                      
								                                            </div>
                                                                        </div>                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto1">
									                                            <p class="panel-title">REEMPLAZANDO LOS VALORES EN LA FORMULA MATEMÁTICA TENEMOS:</p>
								                                            </div>                                                        
								                                            <div class="panel-body">
                                                                                <asp:TextBox  CssClass="form-control" ID="TxtPorcresult" TextMode="MultiLine" ReadOnly="true" runat="server" ></asp:TextBox>  
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="panel panel-bordered panel-dark">
								                                            <div class="panel-heading texto1">
									                                            <h5 class="panel-title">OBSERVACIONES:</h5>
								                                            </div>                                                        
								                                            <div class="panel-body">
                                                                                <asp:TextBox  CssClass="form-control" ID="TxtPorcObser"  runat="server"  TextMode="MultiLine"></asp:TextBox>
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator10" runat="server" ErrorMessage="*" ControlToValidate="TxtPorcObser" ValidationGroup="BtnPorGuardar" ForeColor="Red" SetFocusOnError="true"></asp:RequiredFieldValidator>  
								                                            </div>

                                                                        </div>
                                                        
                                                                    </div>
											                    </div>
                                                                <div class="col-md-12">           
                                                                    <asp:Button ID="BtnPorGuardar" CssClass="btn btn-primary" ValidationGroup="BtnPorGuardar" runat="server" Text="Guardar" OnClick="BtnPorGuardar_Click" />                                                           
                                                                    <a href="GestionBandejas.aspx" id="Button16" class="btn btn-default" >Cerrar</a>            
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <!-- fin metodo 8-->
                                                             <div id="stadistica" class="tab-pane fade">
                                                                <div class="row">
                                                                   <div class="col-md-12">
                                                                            <h3 class="page-header text-overflow">Análisis </h3>
                                                                   </div>
                                                                   <div class="col-md-12">
                                                                       <table class="table table-bordered table-responsive">
                                                                             <tr>
                                                                                 <td>
                                                                                    <label>Mediana</label>
                                                                                 </td>
                                                                                 <td>
                                                                                     <asp:TextBox ID="TxtMediana" ReadOnly="true" runat="server"></asp:TextBox>
                                                                                 </td>
                                                                                  <td>
                                                                                    <label>Promedio</label>
                                                                                 </td>
                                                                                 <td>
                                                                                     <asp:TextBox ID="TxtPromedio" ReadOnly="true" runat="server"></asp:TextBox>
                                                                                 </td>
                                                                             
                                                                             </tr>
                                                                            <tr>
                                                                               <td>
                                                                                    <label>Media acotada</label>
                                                                                 </td>
                                                                                 <td>
                                                                                     <asp:TextBox ID="TxtMediaAcot" ReadOnly="true" runat="server"></asp:TextBox>
                                                                                 </td>
                                                                                 
                                                                                <td>
                                                                                    <label>Desviación Estandar</label>
                                                                                </td>
                                                                                <td>
                                                                                           <asp:TextBox ID="TxtDesviacionEs" ReadOnly="true" MaxLength="5" runat="server"></asp:TextBox>
                                                                                </td>
                                                                             </tr>
                                                                           <tr>
                                                                                 <td>
                                                                                    <label>Varianza</label>
                                                                                 </td>
                                                                                 <td>
                                                                                     <asp:TextBox ID="TxtVarianza" ReadOnly="true" runat="server"></asp:TextBox>
                                                                                 </td>
                                                                                <td>
                                                                                    <label>% Varianza</label>
                                                                                 </td>
                                                                                 <td>
                                                                                     <asp:TextBox ID="TxtPorcVarianza" ReadOnly="true" runat="server" Text="0,9999"></asp:TextBox>
                                                                                 </td>
                                                                           </tr>
                                                                           <tr>
                                                                               <td>
                                                                                    <label>Limite Inferior</label>
                                                                                 </td>
                                                                                 <td>
                                                                                     <asp:TextBox ID="TxtLimiteInf" ReadOnly="true" runat="server"></asp:TextBox>
                                                                                 </td>
                                                                               <td>
                                                                                    <label>Limite Superior</label>
                                                                                 </td>
                                                                                 <td>
                                                                                     <asp:TextBox ID="TxtLimiteSup" ReadOnly="true" runat="server"></asp:TextBox>
                                                                                 </td> 
                                                                           </tr>
                                                                            <tr>
                                                                                
                                                                                 <td>
                                                                                    <label>Limite Superior + 5%</label>
                                                                                 </td>
                                                                                 <td>
                                                                                     <asp:TextBox ID="TxtLimiteSuperior" ReadOnly="true" runat="server"></asp:TextBox>
                                                                                 </td>
                                                                                 <td>
                                                                                    <label>Desviación Max Permitida</label>
                                                                                 </td>
                                                                                 <td>
                                                                                     <asp:TextBox ID="TxtDesviacionMax" ReadOnly="true" runat="server"></asp:TextBox>
                                                                                 </td> 
                                                                             </tr>
                                                                           <tr>
                                                                                  
                                                                                 <td>
                                                                                    <label>Desviación Max + 5%</label>
                                                                                 </td>
                                                                                 <td>
                                                                                     <asp:TextBox ID="TxtDesviacionPermi" ReadOnly="true" runat="server"></asp:TextBox>
                                                                                 </td>
                                                                               <td>

                                                                               </td>
                                                                                 <td>

                                                                               </td>
                                                                             </tr>
                                                                          
                                                                       </table>
                                                                        <table class="table table-bordered table-responsive">
                                                                            <thead>
                                                                                <tr>
                                                                                     <th>
                                                                                         Prioridad
                                                                                    </th>
                                                                                
                                                                                      <th>
                                                                                         Metodo
                                                                                      </th>
                                                                                
                                                                                    <th>
                                                                                              ECDF 
                                                                                    </th>
                                                                                
                                                                                     <th>  Desviación  ECDF</th>
                                                                               
                                                                             
                                                                                   <th> Desviación Absoluta</th>
                                                                                
                                                                                   <th> Comentario</th>
                                                                                </tr>
                                                                            </thead>

                                                                            <tbody>
                                                                            <tr>
                                                                                <td>1</td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                            </tr>
                                                                           </tbody>
                                                                        </table>

                                                                   </div>
                                                                </div>
                                                             </div>    
									                    </div>

								                    </div>

                                                </div>
                                       
                                            </div>
                                        </div>
                                        <div  class="row" id="Lista">
                                                    <div class="col-md-12" >
                                                        <div class="table-responsive">
                                                            <asp:GridView ID="GridChequeo" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%" PageSize="10"  AllowPaging="True" AllowSorting="True" >
                                                                 <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                    <AlternatingRowStyle BackColor="White" />
                                                                        <Columns>                                                                       
                                                                        
                                                                             <asp:TemplateField HeaderStyle-HorizontalAlign="Center" Visible="false" >
                                                                                <ItemTemplate>
                                                                                    <asp:TextBox ID="txtCod" runat="server" Text='<%# Eval("CodiLich") %>' Visible="false" />                                    
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>
                                                                            <asp:BoundField DataField="TiDoLich" HeaderText="Lista de Verificación"  SortExpression="TiDoLich" >
                                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                            </asp:BoundField>
                                                                            <asp:TemplateField HeaderText="">
                                                                                <ItemTemplate>
                                                                                    <asp:DropDownList ID="CmbChequeo" runat="server" CssClass="form-control" ValidationGroup="Grabar">
                                                                                        <asp:ListItem>Seleccione Opción</asp:ListItem>
                                                                                        <asp:ListItem>Si</asp:ListItem>
                                                                                        <asp:ListItem>No</asp:ListItem>
                                                                                        <asp:ListItem>No Aplica</asp:ListItem>
                                                                                    </asp:DropDownList>                                                                                    
                                                                                </ItemTemplate>
                                                                            </asp:TemplateField>                                              
                                                                        </Columns>
                                                           
                                                            </asp:GridView>
                                                        </div>
                                                    </div>
                                                </div>
                                       
							        </div>
                                    
                                     <!-- ****************************************************************************** BITACORA **************************************************************************-->
                                    <div id="demo-tabs-box-4" class="tab-pane fade">
                                        <asp:GridView ID="GridBitacora" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%" OnPageIndexChanging="GridBitacora_PageIndexChanging" PageSize="5" AllowPaging="True" AllowSorting="True"
                                                   >
                                               <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                <AlternatingRowStyle BackColor="White" />
                                                <Columns>                                            
                                                
                                                    <asp:BoundField DataField="BitaActa" HeaderText="Nro Acta "  SortExpression="BitaActa" >
                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="BitaUsua" HeaderText="Usuario"  SortExpression="BitaUsua" >
                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                    </asp:BoundField> 
                                                    <asp:BoundField DataField="BitaFeca" HeaderText="Fecha"  SortExpression="BitaFeca" >
                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                    </asp:BoundField> 
                                                    <asp:BoundField DataField="DescEsAn" HeaderText="Estado Anterior Acta" SortExpression="DescEsAn">
                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                    </asp:BoundField>
                                                    
                                                    <asp:BoundField DataField="DescEsAc" HeaderText="Estado Acta" SortExpression="DescEsAc">
                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                    </asp:BoundField>

                                                    <asp:BoundField DataField="DescEsCa" HeaderText="Causa Devolución" SortExpression="DescEsCa">
                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                    </asp:BoundField>

                                                    <asp:BoundField DataField="DescEsMe" HeaderText="Estado Mensajeria" SortExpression="DescEsMe">
                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                    </asp:BoundField>

                                                                                       
                                                </Columns>
                                       
                                            </asp:GridView>
                                    </div>
                                     <!-- ****************************************************************************** DOCUMENTOS DEL ACTA **************************************************************************-->
                                    <div id="demo-tabs-box-5" class="tab-pane fade">
                                        <div class="row">
                                                <div class="col-lg-12">
                                                   
                                                        <div class="form-group col-md-4">
                                                        <label>Tipo Documento:</label>   
                                                        <asp:DropDownList  CssClass="form-control" ID="CmbtipoDocumento" runat="server"  >
                                                        </asp:DropDownList>  
                                                    </div>
                                                        <div class="form-group col-md-4">
                                                        <asp:Label ID="lblImage" runat="server" AssociatedControlID="fileUploader1" Text="Seleccione Archivo"></asp:Label>
                                                        <asp:FileUpload id="fileUploader1" runat="server" />
                                                    </div>
                                                        <div class=" col-md-4">
                                                         <asp:Button ID="BtnSubir" runat="server" Text="Subir Documento"  OnClick="BtnSubir_Click"/>
                                                    </div>
                                                   
                                                </div>
                                                <div class="col-lg-12">
                                                    <asp:GridView ID="gridDocume" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%" 
                                                        OnPageIndexChanging="gridDocume_PageIndexChanging" PageSize="20" AllowPaging="True" AllowSorting="True"
                                                         OnRowDataBound="gridDocume_RowDataBound" >
                                                         <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                        <AlternatingRowStyle BackColor="White" />
                                                        <Columns>                                            
                                                               
                                                            <asp:BoundField DataField="DocuCodi" HeaderText="Id"  SortExpression="DocuCodi"  >
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField>
                                                           <%-- <asp:BoundField DataField="DocuActa" HeaderText="Nro Acta "  SortExpression="DocuActa" >
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField>--%>
                                                            <asp:BoundField DataField="DocuUsCa" HeaderText="Usuario"  SortExpression="DocuUsCa" >
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField> 
                                                            <asp:BoundField DataField="DescTiDo" HeaderText="Tipo Documento"  SortExpression="DescTiDo" >
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField> 
                                                            <asp:BoundField DataField="DocuUsVe" HeaderText="Usuario Verifica"  SortExpression="DocuUsVe" >
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField>  
                                                            <asp:TemplateField HeaderText="S" ControlStyle-Width="10px" HeaderStyle-Width="5px"> 
                                                                <ItemTemplate>
                                                                    <asp:Image runat="server" ID="ImgS" CssClass="celdasMedidor" ImageUrl="~/images/Check.png" Visible="false" ToolTip="Sincronizado" ></asp:Image>  
                                                                     <asp:CheckBox ID="ChkSin" runat="server"  AutoPostBack="true" Visible="false" ToolTip="Sincronizar" OnCheckedChanged="ChkSin_CheckedChanged" CssClass="dest1" onclick="if (!confirm('Esta seguro de confirmar este Documento?')) { return false; } localStorage['dat'] = 1" />                                                              
                                                                </ItemTemplate>
                                                            </asp:TemplateField>   

                                                            <asp:TemplateField HeaderText="V" ControlStyle-Width="10px" HeaderStyle-Width="5px" > 
                                                                <ItemTemplate>
                                                                    <asp:Image runat="server" ID="ImgVer" CssClass="celdasMedidor" ImageUrl="~/images/Check.png" Visible="false" ToolTip="Verificado"></asp:Image>
                                                                    <asp:CheckBox ID="chkVer" runat="server" OnCheckedChanged="chkVer_CheckedChanged" AutoPostBack="true"  Visible="false" ToolTip="Verificar" CssClass="dest1" onclick="if (!confirm('Esta seguro de confirmar este Documento?')) { return false; } localStorage['dat'] = 1" />
                                                                    
                                                                </ItemTemplate>
                                                            </asp:TemplateField> 
                                                            
                                                                                                                       
                                                            <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="HDA" ControlStyle-Width="10px" HeaderStyle-Width="5px"> 
                                                                <ItemTemplate>
                                                                    <asp:HyperLink ID="LinkHDA" runat="server" NavigateUrl='<%# Eval("DocuUrRe") %>' ImageUrl="~/images/Download.fw.png" 
                                                                        CssClass="celdasMedidor" Height="8px" Width="8px" ToolTip="Descargar desde HDA"  Target="_blank"></asp:HyperLink>
                                                                </ItemTemplate>                                                                   
                                                            </asp:TemplateField>
                                                    
                                                            <asp:TemplateField HeaderStyle-HorizontalAlign="Center"  HeaderText="HGI" ControlStyle-Width="10px" HeaderStyle-Width="5px"> 
                                                                <ItemTemplate>
                                                                    <asp:HyperLink ID="LinkHGI" runat="server" NavigateUrl='<%# Eval("DocuUrLo") %>' ImageUrl="~/images/Download.fw.png"
                                                                         CssClass="celdasMedidor"  Height="8px" Width="8px" ToolTip="Descargar desde HDA"  Target="_blank"></asp:HyperLink>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                                                       
                                                        </Columns>                                       
                                                    </asp:GridView>
                                                </div>
                                                
                                        </div>

                                         <div class="row">
                                                <div class="col-lg-12">
                                                    <asp:Panel ID="pnlDoc" runat="server" CssClass="panel-body">

                                                    </asp:Panel>
                                                </div>
                                         </div>
                                    </div>
                                       <!-- ****************************************************************************** DEVOLVER ACTA **************************************************************************-->
                                    <div id="demo-tabs-box-3" class="tab-pane fade">
                                        <div class="row">
                                             <div>
									            <strong class="titled" >Historial de Rechazo</strong>  
								            </div>
                                               <div class="col-lg-12">
                                                   <asp:GridView ID="GridRechazo" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%"     AllowPaging="True"  
                                                       AllowSorting="True" Font-Size="XX-Small">
                                                        <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                        <AlternatingRowStyle BackColor="White" />
                                                        <Columns>                                            
                                                
                                                           <%-- <asp:BoundField DataField="AcReActa" HeaderText="Nro Acta "  SortExpression="AcReActa" >
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField>--%>
                                                            <asp:BoundField DataField="DescCaus" HeaderText="Causal de Rechazo"  SortExpression="DescCaus" >
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField> 
                                                            <asp:BoundField DataField="DescBand" HeaderText="Bandeja"  SortExpression="DescBand" >
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField> 

                                                            <asp:BoundField DataField="AcReUsua" HeaderText="Usuario Quien Rechaza" SortExpression="AcReUsua">
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField>
                                                            <asp:BoundField DataField="AcReObse" HeaderText="Observacion de Rechazo" SortExpression="AcReObse">
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField>
                                                            <asp:BoundField DataField="AcReUsDe" HeaderText="Usuario Retorna acta" SortExpression="AcReUsDe">
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField>
                                                    <asp:BoundField DataField="AcReObs2" HeaderText="Observacion  Devolucion" SortExpression="AcReObs2">
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField>
                                                            <asp:BoundField DataField="AcReFeMo" HeaderText="Fecha  Devolucion" SortExpression="AcReFeMo">
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField>
                                                        </Columns>                                       
                                                    </asp:GridView>
                                               </div>
                                            
                                             <div class="col-lg-12">
                                                 <div class="row">
                                                      <div>
									                    <strong class="titled" >Rechazar Acta</strong>  
								                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label>Causal De Rechazo:</label>
                                                        <asp:DropDownList  CssClass="form-control" ID="CmbCausal" runat="server"  >
                                                        </asp:DropDownList>
                                                         <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="CmbCausal" InitialValue="0" CssClass="danger" ErrorMessage="*" ValidationGroup="Grabar" ForeColor="Red" Display="Dynamic"></asp:RequiredFieldValidator>  
                                                    </div> 
                                                    <div class="form-group col-md-8">
                                                        <label>Observación:</label>
                                                        <asp:TextBox ID="TxtObserRecha" CssClass="form-control"  runat="server"  TextMode="MultiLine"></asp:TextBox>
                                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="TxtObserRecha" CssClass="danger" ErrorMessage="*" ValidationGroup="Grabar" ForeColor="Red" Display="Dynamic"></asp:RequiredFieldValidator>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-md-4">                                                
                                                        <asp:Button ID="BtnRechazar" runat="server" Text="Rechazar"  OnClick="BtnRechazar_Click" ValidationGroup="Grabar" />
                                                    </div> 
                                                </div>
                                            </div>                                           
                                        </div>
                                     </div>

						        </div>
					        </div>
				        </div>
				        <!--===================================================-->
				        <!--End of panel with tabs-->
                    </div>               
                </div> 

            </asp:Panel>
            <asp:Panel ID="pnlResul" runat="server" Visible="false">
                
            </asp:Panel>
         
           <div id="mostrarGrid" class=""></div>
         
            <asp:Panel ID="PnlMsg" runat="server"  Width="100%"></asp:Panel>
            <hr />
            <script type="text/javascript">
                Sys.Application.add_load(BindEvents);
            </script>
       </ContentTemplate>
        <Triggers>
           <%-- <asp:PostBackTrigger ControlID="fileUploader1" />--%>
            <asp:PostBackTrigger ControlID="BtnSubir" />
            
        </Triggers>

    </asp:UpdatePanel>  
    
     <ul style="display:none;">
    <li><a href="#modal1" id="sol"></a></li>
    
</ul>

    <div id="modal1" class="modalmask">
    <div class="modalbox movedown">
        <a href="#close" title="Close" class="close" id="csol" style="display:none">X</a>
        <h5>Mensaje del Sistema</h5>
        <div class="progress progress-striped" style="height:80px;">
              <div class="progress-bar progress-bar-info active " role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:100%;font-size:2em !important;padding:40px 0px; vertical-align:central !important" >
                  Por Favor Espere Estamos Procesando Su Solicitud
              </div>
        </div>
    </div>

    </div>


    <script>
        function bPostaBack() {
            $("#sol").click();
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 2", "RevisarLiquidacion.aspx");

            setTabs();


        }

        function aPostBack() {

            $("#csol").click();
            //setTabs();
            
        }
        Sys.Application.add_init(appl_init);

        function appl_init() {
            var pgRegMgr = Sys.WebForms.PageRequestManager.getInstance();
            pgRegMgr.add_beginRequest(BHandler);
            pgRegMgr.add_endRequest(EHandler);
        }

        function BHandler() {
            bPostaBack();
        }

        function EHandler() {
            aPostBack();
        }
        
        function setTabs() {
            
            var aa = $("#tabDatos");
            var bb = $("#tabResultado");
            var cc = $("#tabMetodo");
            var dd = $("#tabBitacora");
            var ee = $("#tabDocActa");
            var ff = $("#tabAnotaciones");
            var M1 = $("#Metodo1");
            var M2 = $("#Metodo2");
            var M3 = $("#Metodo3");
            var M4 = $("#Metodo4");
            var M5 = $("#Metodo5");
            var M6 = $("#Metodo6");
            var M7 = $("#Metodo7");
            var M8 = $("#Metodo8");

            $('[data-toggle="tooltip"]').tooltip();

            switch (localStorage["md"]) {
                case "1":
                    aa.click();
                    break;
                case "2":

                    bb.click();
                    break;
                case "3":
                    cc.click();

                    $('[data-toggle="tooltip"]').tooltip();

                    switch (localStorage["mdm"]) {

                        case "8":

                            M1.click();
                            break;


                        case "9":
                            M2.click();
                            break;
                        case "10":

                            M3.click();
                            break;
                        case "11":
                            M4.click();
                            break;
                        case "12":

                            M5.click();
                            break;
                        case "13":

                            M6.click();
                            break;
                        case "14":

                            M7.click();
                            break;

                        case "15":

                            M8.click();
                            break;
                        default:

                            //  alert("Code not found " + localStorage["m"]);
                            break;
                    }
                    break;
                case "4":

                    dd.click();
                    break;
                case "5":

                    ee.click();
                    break;
                case "6":

                    ff.click();
                    break;
         
                default:

                    //  alert("Code not found " + localStorage["m"]);
                    break;
            }


           
        }
    </script>
    <script type="text/javascript" lang="javascript">
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
    function EndRequestHandler(sender, args){
        if (args.get_error() != undefined){
            args.set_errorHandled(true);
        }
    }
</script>
</asp:Content>

