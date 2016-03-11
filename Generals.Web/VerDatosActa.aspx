<%@ Page Title="Ver Datos Acta" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="VerDatosActa.aspx.cs" Inherits="Generals.Web.VerDatosActa"  EnableEventValidation="false" %>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery.confirm.min.js"></script>
    <script>
       
        function Confirm() {
            var met = $("#tabMetodo");
            met.click();

            rebind();
            rebinded();
            $('input[type="text"]').keydown(function (event) {
                if (event.keyCode == 13) {
                    $(this).next().focus();
                    event.preventDefault();
                    return false;
                }
            });

        }
        function BindEvents() {
            
            
            function Confirm() {
                var met = $("#tabMetodo");
                met.click();

                rebind();
                rebinded();
                $('input[type="text"]').keydown(function (event) {
                    if (event.keyCode == 13) {
                        $(this).next().focus();
                        event.preventDefault();
                        return false;
                    }
                });


             

                /*var tabDatos = $("tabDatos");
                var tabMetodo = $("tabMetodo");
                var tabResultado = $("tabResultado");*/

            }

          
            $(document).ready(function () {


                var aa = $("#tabDatos");
                var bb = $("#tabResultado");
                var cc = $("#tabMetodo");
                var gg = $("#tabMetodo1");
                var dd = $("#tabBitacora");
                var ee = $("#tabDocActa");
                var ff = $("#tabAnotaciones");
                var ff = $("#tabReinicio");
                

                $('[data-toggle="tooltip"]').tooltip();

                aa.click(function () {
                    
                    localStorage["acd"] = 1;

                });
                bb.click(function () {
                    localStorage["acd"] = 2;
                });
                cc.click(function () {
                    localStorage["acd"] = 3;
                });
                dd.click(function () {
                    localStorage["acd"] = 4;
                });
                ee.click(function () {
                    localStorage["acd"] = 5;
                });
                ff.click(function () {
                    localStorage["acd"] = 6;
                });
                gg.click(function () {
                    localStorage["acd"] = 7;
                });
                hh.click(function () {
                    localStorage["acd"] = 8;
                });
                setTabs();
                
                
                function Confirm() {
                    var met = $("#tabMetodo");
                    met.click();

                    rebind();
                    rebinded();
                    $('input[type="text"]').keydown(function (event) {
                        if (event.keyCode == 13) {
                            $(this).next().focus();
                            event.preventDefault();
                            return false;
                        }
                    });


                  
                }

                

                $("#tabDocActa").click(function () {
                    localStorage["dat"] = 1;
                });

                $('[data-toggle="tooltip"]').tooltip();
                $('input[type="text"]').keydown(function (event) {
                    if (event.keyCode == 13) {
                        $(this).next().focus();
                        event.preventDefault();
                        return false;
                    }
                });

               

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

        function revisar() {
            $("#tabDocActa").click();
        }

        function anotaciones() {
            $("#tabAnotaciones").click();
        }

        function devolver() {
            $("#tabResultado").click();
        }

     
        function Confirm() {
            var met = $("#tabMetodo");
            met.click();

            rebind();
            rebinded();
            $('input[type="text"]').keydown(function (event) {
                if (event.keyCode == 13) {
                    $(this).next().focus();
                    event.preventDefault();
                    return false;
                }
            });


            var unpackArr = localStorage["data"];
            var arrs = unpackArr.split(',').map(function (item) {
                return parseInt(item, 10);
            });
            if (arrs.length > 0) {
                for (i = 0; i < arrs.length; ++i) {
                    switch (arrs[i]) {
                        case 1:

                            $("#Metodo1").css("display", "block");
                            break;
                        case 2:

                            $("#Metodo2").css("display", "block");
                            break;
                        case 3:

                            $("#Metodo3").css("display", "block");
                            break;
                        case 5:

                            $("#Metodo4").css("display", "block");
                            break;
                        case 6:

                            $("#Metodo5").css("display", "block");
                            break;
                        case 9:

                            $("#Metodo6").css("display", "block");
                            break;
                        case 10:

                            $("#Metodo7").css("display", "block");
                            break;
                        case 11:

                            $("#Metodo8").css("display", "block");
                            break;
                            //default:

                            //    alert("Code not found " + arrs[i]);
                            //    break;
                    }
                }

            }
            else {
                $("#Metodo1").css("display", "block");
                $("#Metodo2").css("display", "block");
                $("#Metodo3").css("display", "block");
                $("#Metodo4").css("display", "block");
                $("#Metodo5").css("display", "block");
                $("#Metodo6").css("display", "block");
                $("#Metodo7").css("display", "block");
                $("#Metodo8").css("display", "block");
            }

            /*var tabDatos = $("tabDatos");
            var tabMetodo = $("tabMetodo");
            var tabResultado = $("tabResultado");*/

        }

        function rebind() {
            var a = $("#Metodo1");
            var b = $("#Metodo2");
            var c = $("#Metodo3");
            var d = $("#Metodo4");
            var e = $("#Metodo5");
            var f = $("#Metodo6");
            var g = $("#Metodo7");
            var h = $("#Metodo8");
            $('[data-toggle="tooltip"]').tooltip();

            a.click(function () {

                localStorage["m"] = 1;

            });
            b.click(function () {
                localStorage["m"] = 2;
            });
            c.click(function () {
                localStorage["m"] = 3;
            });
            d.click(function () {
                localStorage["m"] = 4;
            });
            e.click(function () {
                localStorage["m"] = 5;
            });
            f.click(function () {
                localStorage["m"] = 6;
            });
            g.click(function () {
                localStorage["m"] = 7;
            });
            h.click(function () {
                localStorage["m"] = 8;
            });
        }

        function rebinded() {

            var a = $("#Metodo1");
            var b = $("#Metodo2");
            var c = $("#Metodo3");
            var d = $("#Metodo4");
            var e = $("#Metodo5");
            var f = $("#Metodo6");
            var g = $("#Metodo7");
            var h = $("#Metodo8");
            $('[data-toggle="tooltip"]').tooltip();

            switch (localStorage["m"]) {
                case "1":
                    a.click();
                    break;
                case "2":

                    b.click();
                    break;
                case "3":

                    c.click();
                    break;
                case "4":

                    d.click();
                    break;
                case "5":

                    e.click();
                    break;
                case "6":

                    f.click();
                    break;
                case "7":

                    g.click();
                    break;
                case "8":

                    h.click();
                    break;
                default:

                    //alert("Code not found " + localStorage["m"]);
                    break;
            }           
        }
        }
  
        function anotaciones()
        {
            $("#tabAnotaciones").click();
        }

        function revisar() {
            $("#tabDocActa").click();
        }

        function devolver() {
            $("#tabResultado").click();
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
            display:none;
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
								        <li class="active"  ><a data-toggle="tab" href="#demo-tabs-box-1" aria-expanded="true" id="tabDatos">Datos Acta</a>
								        </li>
                                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-3" aria-expanded="false" id="tabResultado">Rechazar Acta</a>
								        </li>
								        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-2" aria-expanded="false" id="tabMetodo">Liquidación</a>
								        </li>
                                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-11" aria-expanded="false" id="tabMetodo1">Proceso Simpli.</a>
								        </li>
                                         <li class="" ><a data-toggle="tab" href="#demo-tabs-box-12" aria-expanded="false" id="tabMetodo2">Mensajeria</a>
								        </li>
                                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-4" aria-expanded="false" id="tabBitacora">Historial del acta</a>
								        </li>
                                        <li class="" ><a data-toggle="tab" href="#demo-tabs-box-5" aria-expanded="false" id="tabDocActa">Documentos del Acta</a>
								        </li>
                                         <li class="" ><a data-toggle="tab" href="#demo-tabs-box-10" aria-expanded="false" id="tabAnotaciones">Anotaciones</a>
								        </li>
                                         <li class="" ><a data-toggle="tab" href="#demo-tabs-box-13" aria-expanded="false" id="tabReiniciar">Reiniciar</a>
								        </li>
							        </ul>					
						        </div>						     
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
<!--******************************************************************************Panel body ***********************************************************-->
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
                                                                    OnPageIndexChanging="GridMetodosAno_PageIndexChanging" >
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
                                                                <asp:GridView ID="GridCensoActas" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%"
                                                                    AllowPaging="True" AllowSorting="True" PageSize="20" >
                                                                    <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;"                   Mode="NextPreviousFirstLast" />
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
                                            <asp:Button ID="ConsultaEstado" runat="server" Text="Consultar Estado de Orden" OnClick="ConsultaEstado_Click" />
							        </div>
                                       <!-- Panel Documento Generado -->
                                        <div id="demo-tabs-box-11" class="tab-pane fade">
                                             <div class="row">
                                                <div>
									                <strong class="titled">Datos Generales</strong>                                                                  
								                </div>
                                                <div class="form-group col-md-4">
                                                    <label>Radicado</label>  
                                                    <asp:TextBox  CssClass="form-control" ID="TxtRadicado" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label>NIC:</label>                    
                                                    <asp:TextBox  CssClass="form-control" ID="nic1" runat="server" ReadOnly="true" ></asp:TextBox> 
                                                    
                                                </div>  
                                                <div class="form-group col-md-4">
                                                     <label>Tipo Cliente:</label>                             
                                                    <asp:TextBox  CssClass="form-control" ID="tipocliente1" runat="server" ReadOnly="true"  ></asp:TextBox>  
                                                </div>                                                                                                   
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-4">
                                                    <label>Nro Acta:</label>                    
                                                    <asp:TextBox  CssClass="form-control" ID="TxtNroActa1" runat="server"  ReadOnly="true" ></asp:TextBox> 
                                            
                                                </div>         
                                                <div class="form-group col-md-4">
                                                    <label>Fecha Acta:</label>                    
                                                        <asp:TextBox  CssClass="form-control" ID="TxtFechaActa" runat="server" ReadOnly="true" ></asp:TextBox>                                                                  
                                                </div> 
                                                <div class="form-group col-md-4">
                                                    <label>Direcciòn del Suministro:</label>                             
                                                        <asp:TextBox  CssClass="form-control" ID="TxtDireccionSumi" runat="server" ReadOnly="true"   ></asp:TextBox>        
                                                    </div>  
                                                  
                                            </div>
                                            <div class="row">
                                                  <div class="form-group col-md-4">
                                                        <label>Municipio:</label>   
                                                        <asp:TextBox  CssClass="form-control" ID="TxtMunicipio" runat="server" ReadOnly="true" ></asp:TextBox>     
                                                    </div>
                                                    <div class="form-group col-md-4"> 
                                                            <label>Medidor Nro:</label>   
                                                            <asp:TextBox  CssClass="form-control" ID="TxtMedidor" runat="server" enabled="false"></asp:TextBox>  
                                                    
                                                    </div>  
                                                    <div class="form-group col-md-4"> 
                                                        <label>Marca Medidor:</label>   
                                                        <asp:TextBox  CssClass="form-control" ID="TxtMarcaMed" runat="server" enabled="false" ></asp:TextBox> 
                                                    </div> 
                                                      
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                     <label>Anomalia Tecnica de Remisión:</label>                             
                                                    <asp:TextBox  CssClass="form-control" ID="TxtAnomaRev" runat="server" ReadOnly="true" TextMode="MultiLine" ></asp:TextBox>                                        
                                                </div>  
                                            </div>
                                            <div class="row">
                                                 <div class="form-group col-md-3">
                                                    <label>Factura Nro:</label>                    
                                                    <asp:TextBox  CssClass="form-control" ID="TxtNroFactura" ReadOnly="true" runat="server" MaxLength="50"></asp:TextBox> 
                                                  
                                                </div>  
                                                <div class="form-group col-md-3">
                                                     <label>FR:</label>                             
                                                    <asp:TextBox  CssClass="form-control" ID="txtFR1" runat="server" ReadOnly="true"   ></asp:TextBox>  
                                                    
                                                </div> 
                                                  <div class="form-group col-md-3">
                                                        <label>Dirección de Notificación:</label>                             
                                                        <asp:TextBox  CssClass="form-control" ID="direccionNotificacion" runat="server" ReadOnly="true" ></asp:TextBox> 
                                                      
                                                    </div>  
                                                <div class="form-group col-md-3">
                                                     <label>Oficina Comercial:</label>  
                                                      <asp:TextBox  CssClass="form-control" ID="CmbOficina" runat="server" ReadOnly="true"  ></asp:TextBox> 
                                                 
                                                </div>
                                            </div>                                            
                                            <div class="row">
                                                 <div>
									                <strong class="titled" >Datos del  Protocolo</strong>                                                                  
								                </div>
                                                <div class="form-group col-md-4">
                                                    <label>Laboratorio Remitido:</label>                             
                                                    <asp:TextBox  CssClass="form-control" ID="TxtLabRe" runat="server" ReadOnly="true" ></asp:TextBox> 
                                                </div>  
                                                    <div class="form-group col-md-4">
                                                        <label>Acreditado Ante:</label>   
                                                        <asp:TextBox  CssClass="form-control" ID="TxtAcredita" ReadOnly="true" runat="server"></asp:TextBox>  
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                    <label>Resoluciòn Nro:</label>   
                                                    <asp:TextBox  CssClass="form-control" ID="TxtResolucion" ReadOnly="true" runat="server" ></asp:TextBox>   
                                            
                                                </div>   
                                                                                  
                                            </div>
                                            <div class="row">
                                                 <div class="form-group col-md-4"> 
                                                        <label>Informe Calibración Nro:</label>   
                                                        <asp:TextBox  CssClass="form-control" ID="TxtNroCalibracion" ReadOnly="true" runat="server"  ></asp:TextBox> 
                                                    </div> 
                                                    <div class="form-group col-md-4">
                                                        <label>Resultado Remisión:</label>   
                                                        
                                                         <asp:TextBox  CssClass="form-control" ID="TxtResulRe" ReadOnly="true" runat="server"  ></asp:TextBox> 
                                                     
                                                    </div>  
                                                                                               
                                            </div>
                                        </div>

                                         <!-- Panel Documento Generado -->
                                        <div id="demo-tabs-box-12" class="tab-pane fade">
                                             <div class="row">
                                                <div>
									                <strong class="titled">Empresa de Mensajeria</strong>                                                                  
								                </div>
                                                <div class="form-group col-md-4">
                                                    <label>Empresa de Envio</label>  
                                                    <asp:TextBox  CssClass="form-control" ID="Txtempresamensa" runat="server"  ReadOnly="true"></asp:TextBox>    
                                                </div>                                                                                                
                                            </div>
                                           
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
                                                       AllowSorting="True" OnRowDataBound="GridAno_RowDataBound" >
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
                                                           <%--  <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
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
                                                    <div>
									                    <strong class="titled" >Resultado de la Liquidación</strong>  
								                    </div>
                                                    <div class="form-group col-md-2">
                                                        <label>Metodo Seleccionado:</label>                    
                                                        <asp:TextBox  CssClass="form-control" ID="TxtMet" runat="server" Enabled="false" ></asp:TextBox>                               
                                                    </div>      
                                                    <div class="form-group col-md-2">
                                                        <label>Valor E.C.D.F(Kwh)</label>                   
                                                        <asp:TextBox  CssClass="form-control" ID="TxtEcd" runat="server" Enabled="false" ></asp:TextBox>                                                  
                                                    </div>
                                                    <div class="form-group col-md-2">
                                                        <label>Tarifa:(Pesos/Kwh)</label>                    
                                                        <asp:TextBox  CssClass="form-control" ID="TxtTar" runat="server" Enabled="false" ></asp:TextBox>                               
                                                    </div> 
                                                    <div class="form-group col-md-2">
                                                        <label>Total:(Pesos)</label>                    
                                                        <asp:TextBox  CssClass="form-control" ID="TxtTota" runat="server" Enabled="false" ></asp:TextBox>                               
                                                    </div> 
                                                         
                                            </div>
                                            <div class="row">
                                                 <div>
									                   <strong class="titled" >Resultado de la Liquidación Anticipada</strong>  
								                  </div>
                                                  <div class="form-group col-md-2">
                                                                <label>Nro FR</label>                   
                                                                <asp:TextBox  CssClass="form-control" ID="TxtFr" runat="server" MaxLength="80" Enabled="false"></asp:TextBox>  
                                                                                                             
                                                            </div>                                                     
                                                            <div class="form-group col-md-2">
                                                                <label>E.C.D.F(Kwh)</label>                   
                                                                <asp:TextBox  CssClass="form-control" ID="txtEcdAn" runat="server" Text="0" Enabled="false" ></asp:TextBox>                                                  
                                                            </div>
                                                            <div class="form-group col-md-2">
                                                                <label>Valor Tarifa:(Pesos/Kwh)</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="txtTar1" runat="server" Text="0" Enabled="false" ></asp:TextBox>                               
                                                            </div> 
                                                            <div class="form-group col-md-2">
                                                                <label>Total:(Pesos)</label>                    
                                                                <asp:TextBox  CssClass="form-control" ID="txtTota1" runat="server" Text="0" Enabled="false" ></asp:TextBox>                               
                                                            </div> 
                                            </div>
                                            <div class="row">
                                                 <div>
									                   <strong class="titled" >Resultado de los items de Verificación</strong>  
								                 </div>
                                                <div class="row" >
                                                  <div class="col-md-12">
                                                      <div class="table-responsive"></div>
                                                            <asp:GridView ID="GridListaChequeo" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%" OnPageIndexChanging="GridListaChequeo_PageIndexChanging" PageSize="10" AllowPaging="True" AllowSorting="True"
                                                                OnSelectedIndexChanged="GridListaChequeo_SelectedIndexChanged">
                                                               <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                    <AlternatingRowStyle BackColor="White" />
                                                                        <Columns>                                            
                                                                            <asp:BoundField DataField="DescPreg" HeaderText="Item" SortExpression="DescPreg">
                                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                            </asp:BoundField>
                                                                            <asp:BoundField DataField="LiReResp" HeaderText="Respuesta "  SortExpression="LiReResp" >
                                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                            </asp:BoundField>
                                                                            <asp:BoundField DataField="LiReUsua" HeaderText="Usuario"  SortExpression="LiReUsua" >
                                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                            </asp:BoundField> 
                                                                                                                      
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
                                                            <asp:TemplateField HeaderStyle-HorizontalAlign="Center"  HeaderText="HGI" ControlStyle-Width="10px" HeaderStyle-Width="5px"> 
                                                                <ItemTemplate>
                                                                    <asp:HyperLink ID="LinkHGI" runat="server" NavigateUrl='<%# Eval("DocuUrLo") %>' ImageUrl="~/images/Download.fw.png"
                                                                         CssClass="celdasMedidor"  Height="8px" Width="8px" ToolTip="Descargar"  Target="_blank"></asp:HyperLink>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                            <asp:TemplateField HeaderStyle-HorizontalAlign="Center"  HeaderText="" ControlStyle-Width="10px" HeaderStyle-Width="5px"> 
                                                                <ItemTemplate>                                                                     
                                                                    <asp:ImageButton ID="btnDelete" runat="server" CssClass="celdasMedidor" ImageUrl="~/images/Delete2.png"  CommandArgument='<%# Eval("DocuCodi")%>'  
                                                                         OnClientClick="return confirm('Deseas Eliminar este Registro?');"   OnCommand="btnDelete_Command" CommandName="delete"  ToolTip="Eliminar Documento"/>
                                                                </ItemTemplate>
                                                            </asp:TemplateField>
                                                                                       
                                                        </Columns>                                       
                                                    </asp:GridView>
                                                </div>
                                                
                                        </div>
                                          <div class="row">
                                                <div class="col-lg-12">
                                                       <asp:Button ID="BtnDescarga" runat="server" Text="Descargar Zip"  OnClick="BtnDescarga_Click"/>
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
                                    <div id="demo-tabs-box-13" class="tab-pane fade">
                                        <div class="row">
                                             <div class="col-lg-12">
                                                 <asp:Panel ID="pnlReinicio" runat="server">
                                                    <div class="form-group col-md-12">
                                                        <label>Motivo de Reinicio:</label>
                                                         <asp:TextBox ID="txtcodReini" CssClass="form-control"  runat="server" Visible="false"></asp:TextBox>
                                                        <asp:TextBox ID="txtMotivoreinicio" CssClass="form-control"  runat="server" TextMode="MultiLine"></asp:TextBox>
                                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="txtMotivoreinicio"
                                                             CssClass="danger" ErrorMessage="*" ValidationGroup="GrabarReinicio" ForeColor="Red" Display="Dynamic"></asp:RequiredFieldValidator>
                                                    </div>
                                                    <div class="form-group col-md-4">                                                
                                                        <asp:Button ID="btnReinicio" runat="server" Text="Guardar"  OnClick="btnReinicio_Click" ValidationGroup="GrabarReinicio" />
                                                        <asp:Button ID="btnlimpiar25" runat="server" Text="Limpiar"  OnClick="btnlimpiar_Click2"  />
                                                        <a href="GestionBandejas.aspx" id="Button16" class="btn btn-default" >Cerrar</a> 
                                                    </div> 
                                                </asp:Panel>
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
            history.pushState(stateObj, "page 2", "VerDatosActa.aspx");

        }

        function aPostBack() {

            $("#csol").click();
            
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


            $('[data-toggle="tooltip"]').tooltip();

            switch (localStorage["acd"]) {
                case "1":
                    aa.click();
                    break;
                case "2":

                    bb.click();
                    break;
                case "3":
                    cc.click();
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
                case "7":

                    gg.click();
                    break;
                case "8":

                    hh.click();
                    break;
                default:

                    //  alert("Code not found " + localStorage["m"]);
                    break;
            }
        }
    </script>
</asp:Content>

