<%@ Page Title="Unicom" Language="C#" MasterPageFile="~/MastePage.Master" AutoEventWireup="true" CodeBehind="Unicom.aspx.cs" Inherits="Generals.Web.Unicom" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">    
    
    <style>
        .formgrid {
            display:block;
        }
        .formdata {
     
        }
    </style>

    <script src="Scripts/EventForms.js"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

       <script src="Scripts/EventForms.js"></script>

    <style>
        .formgrid {
            display:block;
        }
        .formdata {
            
        }
    </style>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
    <%-- busquedas y registros en gridview --%>
    <div class="row">
                   
            <%-- seccion de registros en gridview --%>    
            <div class="row" >
                <div class="col-md-12">
                  <div class="table-responsive">
                      <div class="panel formgrid" >                          
                          <div class="panel-body">
                               <asp:UpdatePanel runat="server" ID="updateGrid" UpdateMode="Conditional">
                                    <ContentTemplate>
                                        <div class="dataTables_filter" id="demo-dt-basic_filter"><label>Buscar:<asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True"  ></asp:TextBox>  </div>
                                        <div class="row">
                                    <div class="col-md-12">
                                        <asp:GridView ID="GridUnicom" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="100%" PageSize="5" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="GridCargos_PageIndexChanging" GridLines="None" >
                                     <pagersettings firstpagetext="  Primero  " lastpagetext="  Último  " nextpagetext="  Siguiente   "  previouspagetext="  Anterior  " Mode="NextPreviousFirstLast"  />
                                               <AlternatingRowStyle BackColor="#F4F4F4" />
                                                <Columns>                                    
                                                    <asp:BoundField DataField="UnicId" HeaderText="Código" SortExpression="UnicId">
                                                    <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                    </asp:BoundField>
                                                    <asp:BoundField DataField="Nombre_Unicom" HeaderText="Unicom" SortExpression="Nombre_Unicom" />
                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
                                                        <ItemTemplate>
                                                            <asp:Button ID="BtnContra" runat="server" CausesValidation="true" 
                                                                CommandArgument='<%# Eval("UnicId") %>' CommandName="IdSolicitud" 
                                                                Text="Contratas" ToolTip="Ir a Contratas" OnCommand="BtnContra_Command" />
                                    
                                                        </ItemTemplate>
                                                        <FooterStyle HorizontalAlign="Center"  VerticalAlign="Middle" Width="7px" />
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                        <ItemStyle  HorizontalAlign="Center" VerticalAlign="Middle" Width="7px" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
                                                        <ItemTemplate>
                                                            <asp:Button ID="c" runat="server" CausesValidation="true" 
                                                                CommandArgument='<%# Eval("UnicId") %>' CommandName="IdSolicitud" 
                                                                Text="Modificar" ToolTip="Modificar" OnCommand="BtnSelect_Command" />
                                    
                                                        </ItemTemplate>
                                                        <FooterStyle HorizontalAlign="Center"  VerticalAlign="Middle" Width="7px" />
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                        <ItemStyle  HorizontalAlign="Center" VerticalAlign="Middle" Width="7px" />
                                                    </asp:TemplateField>
                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
                                                        <ItemTemplate>
                                                            <asp:Button ID="BtnEliminar" runat="server" CausesValidation="true" 
                                                                CommandArgument='<%# Eval("UnicId") %>' CommandName="IdSolicitud"  OnClientClick="return confirm('Esta seguro que desea eliminar este registro?');"
                                                                Text="Eliminar" ToolTip="Eliminar" OnCommand="BtnEliminar_Command" />
                                    
                                                        </ItemTemplate>
                                                        <FooterStyle HorizontalAlign="Center"  VerticalAlign="Middle" Width="7px" />
                                                        <HeaderStyle HorizontalAlign="Center" />
                                                        <ItemStyle  HorizontalAlign="Center" VerticalAlign="Middle" Width="7px" />
                                                    </asp:TemplateField>                                    
                                                </Columns>
                                </asp:GridView>
                                    </div>
                                </div> 
                                    </ContentTemplate>
                                </asp:UpdatePanel>
                                 <div class="row">
                    <div class="col-md-12">
                        <input type="button" value="Nuevo" id="nuevo" class="btn btn-default" />
                        <a href="Default.aspx" id="Button1" class="btn btn-default" >Cerrar</a>
                    </div>
                </div>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        <%-- fin seccion de registros en gridview --%>   
    </div>
    <%-- inicio de insercion de datos --%>
    <%-- seccion nuevos registros --%>   
    <div class="row">
        <asp:UpdatePanel runat="server" ID="UpdateNew" UpdateMode="Conditional">
                    <ContentTemplate>
                                <div class="col-md-12 caja" >
                                    <div class="panel formdata" >
                                         <div class="panel-heading">
				                            <h3 class="panel-title">Detalle de Unicom</h3>         
				                         </div>
                                         <div class="panel-body">
        
                                        <div class="row">
                                            <div class="form-group col-md-3">
                                                <label>Código:</label>
                                                <asp:TextBox  CssClass="form-control" ID="TxtCodigo" runat="server" MaxLength="5"  ></asp:TextBox>
                                                <asp:RequiredFieldValidator ID="RfvCodigo" runat="server" ControlToValidate="TxtCodigo" CssClass="danger" ValidationGroup="Grabar" ErrorMessage="*" Display="Dynamic" ForeColor="Red" SetFocusOnError="True"></asp:RequiredFieldValidator>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label>Unicom:</label>
                                                <asp:TextBox  CssClass="form-control" ID="TxtNumMedidor" runat="server" MaxLength="150" ></asp:TextBox>
                                                <asp:RequiredFieldValidator ID="RfvUnicom" runat="server" ControlToValidate="TxtNumMedidor" CssClass="danger" ValidationGroup="Grabar" ErrorMessage="*" Display="Dynamic" ForeColor="Red" SetFocusOnError="True"></asp:RequiredFieldValidator>
                                            </div>
                                        </div>    
                                             <div class="row">
                                                <div class="col-md-12">   
                                 
                                                    <asp:Button ID="BtnGuardar" runat="server" Text="Guardar" ValidationGroup="Grabar" OnClick="BtnGuardar_Click" />  
                                                   <%--<asp:Button ID="BtnModificar" CssClass="btn btn-primary" runat="server" Text="Modificar" OnClick="BtnModificar_Click" />--%>
                                                    <asp:Button ID="BtnLimpiar"  runat="server" Text="Limpiar" OnClick="BtnLimpiar_Click" />
                                                    <asp:Button ID="BtnCerrar"  runat="server" Text="Cerrar" OnClick="BtnCerrar_Click" Visible="false" />                  
                                                     <input type="button" value="Cerrar" id="cerrar" class="btn btn-default" />
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                 </div>

                                <script type="text/javascript">
                                    Sys.Application.add_load(BindEvents);
                                </script>
                        
                        </ContentTemplate>
            <Triggers>
                <asp:AsyncPostBackTrigger ControlID="BtnGuardar" EventName="Click" />                
                <asp:AsyncPostBackTrigger ControlID="BtnLimpiar" EventName="Click" />
            </Triggers>
       </asp:UpdatePanel>
    </div>

    <%-- fin seccion nuevos registros --%>   
    <%-- seccion de botonera --%>   
 
    <%--fin seccion de botonera --%>   
     <asp:Panel ID="PnlMsg" runat="server"  Width="100%"></asp:Panel>
       </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
