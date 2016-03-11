<%@ Page Title="Gestion Bandejas" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="GestionBandejas.aspx.cs" Inherits="Generals.Web.GestionBandejas"  EnableEventValidation="false" %>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">   
    <link href="Content/custom.css" rel="stylesheet" />
    <script>
        function BindEvents() {
            
            $(document).ready(function () {
            

                $("#myModal").click(function () {
                    return false;
                });

                var btnnuevo = $("#nuevo");
                var btncerrar = $("#cerrar");
                //captura de los divs
                var grid = $(".formgrid");
                var data = $(".formdata");


                data.hide();
                btnnuevo.click(function (e) {
                    e.preventDefault();

                    mostrarDatos();


                });

                btncerrar.click(function (e) {
                    e.preventDefault();
                    data.delay("fast").slideUp();
                    grid.delay("slow").slideDown();

                });

            });
        }
        //eventos para los botones de C#
        function mostrarDatos() {
            var grid = $(".formgrid");
            var data = $(".formdata");
            grid.delay("fast").slideUp();
            data.delay("slow").slideDown();
        }
    </script>
    <style>
        body{font-size: 11px !important;}
        #floating-top-right {
            display:none;
        }

        /*.TxtAcum {
            font-size: 10px !important;
        }*/

        @media (max-width: @screen-xs) {
            body{font-size: 1em !important;}
        }

        @media (max-width: @screen-sm) {
            body{font-size:1em !important;}
        }

        @media (width:1320px) {
            .d {
                padding:0 5px !important;
                margin:0 !important;
            }
        }

        /*.d {
            padding:0 5px !important;
        }*/
    </style>
    <style>
        .formgrid {
            display:block;
        }
        .formdata {
            
        }    
    </style>
    <link href="Content/modal.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <%-- seccion de registros en gridview --%>
    <div class="row">
        <%-- fin seccion de registros en gridview --%>     
            <div class="row" >
                <div class="col-md-12">                   
                  <div class="table-responsive"> 
                                           
                      <div class="panel formgrid" >                          
                          <div class="panel-body">
                               <asp:UpdatePanel runat="server" ID="updateGrid" UpdateMode="Conditional">
                                   <ContentTemplate>    
                                       <div class="row">
                                          <div class="col-md-12">
											<!--Sales tile-->
											    <div class="panel panel-primary panel-colorful">
												    <div class="pad-all ">
													    <span class="text-2x text-thin"><asp:Label ID="lblBandeja" runat="server" Text=""></asp:Label></span>
													    <br /> 
                                                        <span class="text-1x text-thin"><asp:Label ID="lblTotal" Font-Size="Larger" runat="server" Text="Total Actas :"></asp:Label></span>
												    </div>
											    </div>					
										    </div>          
                                       </div> 
                                        <asp:Panel ID="PnlAdmin" runat="server"  CssClass="row">
                                             
                                        </asp:Panel>
                                       <asp:Panel ID="PnlMsg" runat="server" CssClass="modal-open"></asp:Panel>                                        
                                       <asp:Panel ID="PnlBandeja" runat="server">   
                                            <asp:Panel ID="Panel3" runat="server"  CssClass="panel panel-bordered">                                        
                                                 <div class="row">
                                                      <div class="col-md-8  ">
                                                          <label>Convenciones</label><br />
                                                          <img src="images/pp.png" width="16px" /> &nbsp; Pendiente Protocolo &nbsp;&nbsp; 
                                                          <img src="images/cp.png" width="16px" /> &nbsp; Con Protocolo
                                                           <img src="images/LA.png" width="16px" /> &nbsp; Liquidado Anticipadamente
                                                           <img src="images/po.png" width="16px" /> &nbsp; Pendiente Orden &nbsp;&nbsp; 
                                                          <img src="images/co.png" width="16px" /> &nbsp; Con Orden 
                                                      </div>
                                                     <div class="col-md-4  ">
                                                          <div class="dataTables_filter" id="demo-dt-basic_filter">                                                                                                
                                                            <label>Buscar:<asp:TextBox  CssClass="form-control input-lg" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" ToolTip="Digite Nic, Nro Acta o * para Mostrar todas las actas" PlaceHolder="NIC o Nro de Acta, * para mostrar todas " AutoPostBack="True"  ></asp:TextBox>  </label>
                                                         </div>
                                                     </div>
                                                  </div>
                                           </asp:Panel>
                                            <div class="row">
                                                <div class="col-md-8"> 
                                                   <asp:Panel ID="PnlFiltro" runat="server" Visible="false" >
                                                        <div class="row">
                                                            <div class="col-md-12"> 
                                                                  <div class="row">
                                                                     <div class="col-md-12">                                                             
                                                                         <asp:Panel ID="Panel1" runat="server"  CssClass="panel panel-bordered">
                                                                             <label>Filtros</label>                                                                               
                                                                                   <div class="row">
                                                                                       <div class="col-md-12">    
                                                                                            <div class="form-group col-md-4">
                                                                                                <label>Actas Por Estados:</label>                                                                                          
                                                                                                <asp:DropDownList ID="CmbFiltro" CssClass="form-control  col-sm-10" runat="server" AutoPostBack="true" OnSelectedIndexChanged="CmbFiltro_SelectedIndexChanged">
                                                                                                </asp:DropDownList>               
                                                                                            </div>
                                                                                             <div class="form-group col-md-4">
                                                                                                <label>Bandeja:</label>                     
                                                                                                <asp:DropDownList ID="CmbBandeja" CssClass="form-control  col-sm-10" runat="server" AutoPostBack="true" OnSelectedIndexChanged="CmbBandeja_SelectedIndexChanged" >
                                     
                                                                                                </asp:DropDownList>               
                                                                                            </div> 
                                                                                           <div class="form-group col-md-4">
                                                                                                <label>Filtrar Por :</label>                     
                                                                                                <asp:DropDownList ID="cbmfilltros" CssClass="form-control  col-sm-10" runat="server" AutoPostBack="true" OnSelectedIndexChanged="cbmfilltros_SelectedIndexChanged" >

                                                                                                    <asp:ListItem> </asp:ListItem>
                                                                                                    <asp:ListItem Value="1">Pendiente Protocolo</asp:ListItem>
                                                                                                    <asp:ListItem Value="0">Pendiente Orden de Servicio</asp:ListItem>
                                                                                                </asp:DropDownList>               
                                                                                            </div>        
                                                                                       </div>
                                                                                   </div>
                                                                               </asp:Panel>
                                                                     </div>
                                                                     <div class="col-md-12"> 
                                                                   
                                                                             <asp:Panel ID="Panel2" runat="server"  CssClass="panel panel-bordered">
                                                                                 <asp:Label runat="server" ID="Label2" Text="Reasignación" CssClass="titled"  AssociatedControlID="Panel2"></asp:Label>
                                                                                 <div class="row">                                                                          
                                                                                      <div class="col-md-12">
                                                                                         <div class="form-group col-md-6">
                                                                                                <label>Bandeja a Trasladar:</label>                     
                                                                                                <asp:DropDownList ID="cmbBandejaTras" CssClass="form-control  col-sm-10" runat="server"  >
                                     
                                                                                                </asp:DropDownList>     
                                                                                              <asp:RequiredFieldValidator ID="RfvFactura" runat="server" ErrorMessage="*" InitialValue="0" ControlToValidate="cmbBandejaTras" ValidationGroup="Manual" ForeColor="Red" SetFocusOnError="true"></asp:RequiredFieldValidator>          
                                                                                         </div>  
                                                                                        <div class="form-group col-md-6">
                                                                                            <label> </label><br />
                                                                                              <asp:Button ID="btnAsignat" runat="server" Text="Automatica" CssClass="btn btn-default" OnClick="btnAsignat_Click" Visible="false" />
                                                                                             <asp:Button ID="BtnManual" runat="server" Text="Manual" CssClass="btn btn-default" OnClick="BtnManual_Click" Visible="false" ValidationGroup="Manual" />
                                                                                        </div>   
                                                                                
                                                                                    </div>
                                                                                  </div>
                                                                             </asp:Panel>
                                                                 
                                                        
                                                                    </div>
                                                                
                                                                 </div>
                                                            </div>
                                                        </div>
                                                   </asp:Panel>
                                                </div>
                                                <div class="col-md-4">      
                                                        <br />  
                                                        <br />                                                  
                                                            <asp:UpdateProgress ID="UpdateProgress2" runat="server" AssociatedUpdatePanelID="updateGrid">  
                                                                <ProgressTemplate>    
                                                                    <asp:Image ID="Image2" ImageUrl="~/images/cargando_v2.gif" runat="server" />  
                                                                </ProgressTemplate>  
                                                            </asp:UpdateProgress>  
                                                       
                                                   
                                                </div>
                                            </div>  
                                            <div class="row">                                              
                                                
                                                <div class="col-md-12">                                                                           
                                                    <asp:GridView ID="GridActas" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="100%" EmptyDataText="No Existe Informacion para Mostrar"
                                                                OnPageIndexChanging="GridActas_PageIndexChanging" PageSize="20"  AllowPaging="True" AllowSorting="True" 
                                                                OnSelectedIndexChanged="GridActas_SelectedIndexChanged" OnRowDataBound="GridActas_RowDataBound">
                                                                 <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                      <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                        <Columns>
                                                                            <asp:TemplateField HeaderStyle-HorizontalAlign="Center">                                                                               
                                                                                                                                                             
                                                                                <HeaderTemplate>
                                                                                    <asp:CheckBox ID="ChkSelectAll" runat="server"  />
                                                                                </HeaderTemplate>
                                                                                                                                                             
                                                                                <ItemTemplate>                                                     
                                                                                    <asp:CheckBox ID="ChkSelect"   Font-Size="Smaller" runat="server" 
                                                                                      CommandArgument='<%# Eval("_number") %>'  Visible="False" /> 
                                                                                    
                                                                                </ItemTemplate>
                                                                                <FooterStyle Font-Names="Trebuchet MS" HorizontalAlign="Center"  VerticalAlign="Middle" Width="7px" />
                                                                                <HeaderStyle HorizontalAlign="Justify" />
                                                                                <ItemStyle  HorizontalAlign="Justify" VerticalAlign="Middle" Width="7px" />
                                                                            </asp:TemplateField>                                          
                                                                            <asp:BoundField DataField="_number" HeaderText="Acta" SortExpression="_number">
                                                                                <FooterStyle HorizontalAlign="Justify" VerticalAlign="Middle" />
                                                                            </asp:BoundField>
                                                                             <asp:BoundField DataField="nic" HeaderText="NIC "  SortExpression="nic" >
                                                                                <FooterStyle HorizontalAlign="Justify" VerticalAlign="Middle" />
                                                                            </asp:BoundField>
                                                                            <asp:BoundField DataField="nombreTitularContrato" HeaderText="Cliente "  SortExpression="nombreTitularContrato" >
                                                                                <FooterStyle HorizontalAlign="Justify" VerticalAlign="Middle" />
                                                                            </asp:BoundField>
                                                                            <asp:BoundField DataField="municipio" HeaderText="Municipio"  SortExpression="municipio" >
                                                                                <FooterStyle HorizontalAlign="Justify" VerticalAlign="Middle" />
                                                                            </asp:BoundField>
                                                                              <asp:BoundField DataField="direccion" HeaderText="Dirección"  SortExpression="direccion">
                                                                                <FooterStyle HorizontalAlign="Justify" VerticalAlign="Middle" />
                                                                            </asp:BoundField>
                                                                          
                                                                               <asp:BoundField DataField="codigoTarifa" HeaderText="Tarifa"  SortExpression="codigoTarifa" ControlStyle-BorderWidth="10px"  HeaderStyle-Width="10px">
                                                                                <ControlStyle BorderWidth="10px" />
                                                                                <FooterStyle HorizontalAlign="Justify" VerticalAlign="Middle" />
                                                                            <HeaderStyle Width="10px" />
                                                                            </asp:BoundField>
                                                                              <asp:BoundField DataField="estrato" HeaderText="Est."  SortExpression="estrato" ControlStyle-BorderWidth="10px"  HeaderStyle-Width="10px" >
                                                                                <ControlStyle BorderWidth="10px" />
                                                                                <FooterStyle HorizontalAlign="Justify" VerticalAlign="Middle" />
                                                                            <HeaderStyle Width="10px" />
                                                                            </asp:BoundField>

                                                                              <asp:BoundField DataField="protocolo" HeaderText=""  SortExpression="protocolo" Visible="false" >
                                                                                <FooterStyle HorizontalAlign="Justify" VerticalAlign="Middle" />
                                                                            </asp:BoundField>
                                                                            <%-- <asp:TemplateField HeaderStyle-HorizontalAlign="Center" AccessibleHeaderText="TL" HeaderText="Fecha del Acta"   ControlStyle-Width="150px" HeaderStyle-Width="150px" >                                                                                
                                                                                <ItemTemplate  >
                                                                                    <asp:Label ID="LblFecha" runat="server" Text=""></asp:Label>
                                                                                </ItemTemplate>
                                                                                 <ControlStyle Width="150px" />
                                                                                 <HeaderStyle HorizontalAlign="Center" Width="150px" />
                                                                            </asp:TemplateField> --%>      
                                                                            <asp:BoundField DataField="_clientCloseTs" HeaderText="Fecha"  SortExpression="_clientCloseTs"   DataFormatString="{0:dd-MM-yyyy}" >
                                                                               
                                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                
                                                                            </asp:BoundField>                                                                     
                                                                            <asp:TemplateField HeaderStyle-HorizontalAlign="Center" AccessibleHeaderText="TL" HeaderText="T.T."   ControlStyle-Width="10px" HeaderStyle-Width="10px" >                                                                                
                                                                                <ItemTemplate   >
                                                                                    <asp:Label ID="LblTiempo" runat="server" Text="" ToolTip="Tiempo Total en Días"></asp:Label>
                                                                                </ItemTemplate>
                                                                                <ControlStyle Width="10px" />
                                                                                <HeaderStyle HorizontalAlign="Center" Width="10px" />
                                                                            </asp:TemplateField>
                                                                             
                                                                             <asp:TemplateField HeaderStyle-HorizontalAlign="Center" AccessibleHeaderText=""  ControlStyle-Width="50px" HeaderStyle-Width="10px"   HeaderText="PO" >
                                                                                <ItemTemplate  >
                                                                                    <asp:Image ID="Orden" runat="server" ImageAlign="Middle"  />
                                                                                </ItemTemplate>                                                                             
                                                                                <ControlStyle CssClass="celdasMedidor" />
                                                                                <HeaderStyle HorizontalAlign="Center" />
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderStyle-HorizontalAlign="Center" AccessibleHeaderText=""  ControlStyle-Width="50px" HeaderStyle-Width="10px"   HeaderText="PP" >
                                                                               
                                                                                <ItemTemplate  >
                                                                                    <asp:Image ID="Medidor" runat="server" ImageAlign="Middle"  />
                                                                                </ItemTemplate>
                                                                                <ControlStyle CssClass="celdasMedidor" />
                                                                                <HeaderStyle HorizontalAlign="Center" />
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Estado Acta">
                                                                                <ItemTemplate >                                                     
                                                                                    <asp:Button ID="BtnSelect" CssClass="btn btn-success btn-block   "   Font-Size="1em" runat="server" Width="120px" Text=   '<%# Eval("EstadoActa") %>'
                                                                                        OnCommand="BtnSelect_Command"  CommandArgument='<%# Eval("_number") %>' /> 
                                                                                    <asp:Image ID="imgCarg" runat="server"  ImageUrl="~/images/loader.gif" Visible="false"/>
                                                                                </ItemTemplate>
                                                                                <FooterStyle Font-Names="Trebuchet MS" HorizontalAlign="Center"  VerticalAlign="Middle" Width="7px" />
                                                                                <HeaderStyle HorizontalAlign="Justify" />
                                                                                <ItemStyle  HorizontalAlign="Justify" VerticalAlign="Middle" Width="7px" />
                                                                            </asp:TemplateField>
                                                                                           
                                                                        </Columns>                                                          
                                                            </asp:GridView>
                                                </div>
                                            </div> 
                                            <%--<asp:Button ID="btnExportar" runat="server" Text="Exportar " CssClass="btn btn-default" OnClick="btnExportar_Click"   />--%>
                                           <asp:HyperLink ID="HyperLink1" CssClass="btn btn-default" Target="_blank" NavigateUrl="~/Exportar.aspx?filename=ActasEnBandeja"  Text="Exportar a Excel" runat="server"></asp:HyperLink>      
                                              
                                       </asp:Panel>
                                      
                                     
                                   </ContentTemplate>
                               </asp:UpdatePanel>
                
                              </div>
                      </div>
                      
                  </div>
                </div>
            </div>
       
        
    </div>

    <%--<ul style="display:none;">
    <li><a href="#modal1" id="sol"></a></li>
    
</ul>

    <div id="modal1" class="modalmask">
    <div class="modalbox movedown">
        <a href="#close" title="Close" class="close" id="cls">X</a>
        <h5>Mensaje del Sistema</h5>
        <div class="progress progress-striped" style="height:80px;">
              <div class="progress-bar progress-bar-info active " role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:100%;font-size:2em !important;padding:40px 0px; vertical-align:central !important" >
                  Por Favor Espere Estamos Procesando Su Solicitud
              </div>
        </div>
    </div>

    </div>--%>

          
 
    
     <script>
         function bPostaBack() {
             $("#sol").click();

         }
         
         function aPostBack() {
            
             $("#cls").click();
         
         }

         function close() {
             
         }
         Sys.Application.add_init(appl_init);

         function appl_init() {
             var pgRegMgr = Sys.WebForms.PageRequestManager.getInstance();
             pgRegMgr.add_beginRequest(BHandler);
             pgRegMgr.add_endRequest(EHandler);
             
         }

         function BHandler(sender, args) {
         
            bPostaBack();
         }

         function EHandler() {
             
             aPostBack();
         }
    </script>
      
</asp:Content>

