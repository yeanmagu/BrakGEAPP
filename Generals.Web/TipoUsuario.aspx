<%@ Page Title="Tipo Usuario" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TipoUsuario.aspx.cs" Inherits="Generals.Web.TipoUsuario"  EnableEventValidation="false" %>

<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
    <script src="Scripts/EventForms.js"></script>
    <style>
        .formgrid {
            display:block;
        }
        .formdata {
            
        }
    </style>

</asp:Content>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <%-- busquedas y registros en gridview --%>
    <div class="row">
        <%-- busquedas --%>    
            <%-- seccion de registros en gridview --%>    
            <div class="row" >
                <div class="col-md-12">
                  <div class="table-responsive">
                      <div class="panel formgrid" >
                          
                          <div class="panel-body">
                               <asp:UpdatePanel runat="server" ID="updateGrid" UpdateMode="Conditional">
                    <ContentTemplate>
                  
                <div class="row">
                    <div class="col-md-12">
                         <div class="dataTables_filter" id="demo-dt-basic_filter"><label>Buscar:<asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True"  ></asp:TextBox>  </div>
                       <asp:GridView ID="GridTipoUsuario" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="100%" OnPageIndexChanging="GridTipoUsuario_PageIndexChanging" PageSize="5" AllowPaging="True" AllowSorting="True">
                             <pagersettings firstpagetext="  Primero  " lastpagetext="  Último  " nextpagetext="  Siguiente   "  previouspagetext="  Anterior  " Mode="NextPreviousFirstLast"  />
                                       <AlternatingRowStyle BackColor="White" />
                                        <Columns>
                                            
                                            <asp:BoundField DataField="TiUsCodi" HeaderText="Código" SortExpression="TiUsCodi">
                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                            </asp:BoundField>
                                            <asp:BoundField DataField="TiUsDesc" HeaderText="Estrato "  SortExpression="TiUsDesc" >
                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                            </asp:BoundField>                                            
                                            <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
                                                <ItemTemplate>
                                                    <asp:Button ID="BtnSelect" runat="server" CausesValidation="true" 
                                                        CommandArgument='<%# Eval("TiUsCodi") %>' CommandName="IdSolicitud" 
                                                        Text="Modificar" ToolTip="Modificar" OnCommand="BtnSelect_Command" />
                                    
                                                </ItemTemplate>
                                                <FooterStyle HorizontalAlign="Center"  VerticalAlign="Middle" Width="7px" />
                                                <HeaderStyle HorizontalAlign="Center" />
                                                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="7px" />
                                            </asp:TemplateField>
                                            <asp:TemplateField>
                                                <ItemTemplate>
                                                    <asp:Button ID="btneliminarGridView" runat="server"  CausesValidation="true" CommandArgument='<%# Eval("TiUsCodi") %>' 
                                                        CommandName="TCCode" Text="Eliminar" OnClientClick="return confirm('Deseas Eliminar este Registro?');" 
                                                         ToolTip="Eliminar" OnCommand="btneliminarGridView_Command" />
                                                </ItemTemplate>
                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="7px" />
                                                <HeaderStyle HorizontalAlign="Center" />
                                                <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="7px" />
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
        <div class="col-md-12 " >
            <div class="panel formdata" >
                 <div class="panel-heading">
				    <h3 class="panel-title">Detalle de Tipo Usuario</h3>         
				 </div>
                 <div class="panel-body">
                    <%--  <form class="form-inline" role="form">--%>
                        <div class="row">
                          <div class="form-group col-md-4">
                            <label>Código</label>                    
                              <asp:TextBox  CssClass="form-control" ID="TxtCodigo" runat="server" MaxLength="15" ></asp:TextBox>  
                              <asp:RequiredFieldValidator ID="RfvCodigo" runat="server" ControlToValidate="TxtCodigo" CssClass="danger" ValidationGroup="Grabar" ErrorMessage="*" Display="Dynamic" ForeColor="Red" SetFocusOnError="True"></asp:RequiredFieldValidator>                                    
                          </div>
                          <div class="form-group col-md-4">
                           <label>Descripción:</label>                    
                              <asp:TextBox  CssClass="form-control" ID="TxtNombre" runat="server" MaxLength="50" ></asp:TextBox>    
                              <asp:RequiredFieldValidator ID="RfvNombre" runat="server" ControlToValidate="TxtNombre" CssClass="danger" ValidationGroup="Grabar" ErrorMessage="*" Display="Dynamic" ForeColor="Red" SetFocusOnError="True"></asp:RequiredFieldValidator>                                  
                          </div>
                     
                          <div class="form-group col-md-4"> 
                                <div >
                                     <label class="rell">_</label>
                                     <div class="input-group">                                        
                                          <span class="input-group-addon">
                                            <asp:CheckBox ID="ChkActivo" runat="server" />
                                          </span>
                                      <label class="form-control">Activo</label> 
                                    </div><!-- /input-group -->
                                  </div>
                          </div>                       
                        </div>   
                     <%--</form>--%>
                             

                             
                     <div class="row">
                         <div class="col-md-12">
                             <asp:Button ID="BtnGuardar" CssClass="btn btn-primary" runat="server" Text="Guardar" ValidationGroup="Grabar" OnClick="BtnGuardar_Click" /> 
                                 
                             <asp:Button ID="BtnLimpiar"  runat="server" Text="Limpiar" OnClick="BtnLimpiar_Click" />  
                             <input type="button" value="Cerrar" id="cerrar" class="btn btn-default" />
                         </div>
                        
                    </div>

                </div>

            </div>
         </div>
                        <div id="pnl">
                             <asp:Panel ID="PnlMsg" runat="server"  Width="100%"></asp:Panel> 
                        </div>
          
                        <script type="text/javascript">
                            Sys.Application.add_load(BindEvents);
                        </script>
                        </ContentTemplate>
       </asp:UpdatePanel>
    </div>

    <%-- fin seccion nuevos registros --%>   
    <%-- seccion de botonera --%>   


      
</asp:Content>

