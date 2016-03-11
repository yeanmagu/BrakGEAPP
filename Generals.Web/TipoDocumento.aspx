<%@ Page Title="Tipo Documento" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TipoDocumento.aspx.cs" Inherits="Generals.Web.TipoDocumento"  EnableEventValidation="false" %>
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
    <div class="row">  
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
                                                <asp:GridView ID="GridTipoDocumento" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="100%" OnPageIndexChanging="GridTipoDocumento_PageIndexChanging" AllowPaging="True" AllowSorting="True" PageSize="5">
                                                        <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                       <AlternatingRowStyle BackColor="White" />
                                                       <Columns>
                                                            <asp:BoundField DataField="TiDoCodi" HeaderText="Código" SortExpression="TiDoCodi">
                                                              <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                            </asp:BoundField>
                                                            <asp:BoundField DataField="TiDoDocu" HeaderText="Descripción" SortExpression="TiDoDocu" />
                                                           <asp:CheckBoxField DataField="TiDoDele" HeaderText="Permite Eliminar"></asp:CheckBoxField>
                                                           <asp:CheckBoxField DataField="TiDoMens" HeaderText="Mensajeria"></asp:CheckBoxField>
                                                           <asp:CheckBoxField DataField="TiPoEsta" HeaderText="Activo"></asp:CheckBoxField>
                                                           <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
                                                                <ItemTemplate>                                                     
                                                                    <asp:Button ID="BtnSelect" CssClass="btn btn-success "  runat="server" Text="Modificar"   
                                                                        OnCommand="BtnSelect_Command"  CommandArgument='<%# Eval("TiDoCodi") %>' /> 
                                                                </ItemTemplate>
                                                                <FooterStyle Font-Names="Trebuchet MS" HorizontalAlign="Center"  VerticalAlign="Middle" Width="7px" />
                                                                <HeaderStyle HorizontalAlign="Center" />
                                                                <ItemStyle  HorizontalAlign="Center" VerticalAlign="Middle" Width="7px" />
                                                            </asp:TemplateField>
                                                            <asp:TemplateField>
                                                                <ItemTemplate>                                                  
                                                                        <asp:Button ID="btneliminarGridView" CssClass="btn btn-danger "  runat="server" Text="Eliminar"   
                                                                            OnClientClick="return confirm('Deseas Eliminar este Registro?');" 
                                                                        OnCommand="btneliminarGridView_Command"  CommandArgument='<%# Eval("TiDoCodi") %>' /> 
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
    <%-- seccion nuevos registros --%>   
    <div class="row">          
        <asp:UpdatePanel runat="server" ID="UpdateNew" UpdateMode="Conditional">
           <ContentTemplate>
              <div class="col-md-12 " >
                            <div class="panel formdata" >
                                 <div class="panel-heading">
				                    <h3 class="panel-title">Detalle de Tipo de Documento</h3>         
				                 </div>
                                 <div class="panel-body">
                                  <div class="col-md-12 " >
                                    <div class="row">                                            
                                             <asp:TextBox  CssClass="form-control" ID="TxtCodigo" runat="server" Visible="false" ></asp:TextBox>
                                              <div class="col-md-3">
                                                    <label>Descripción:</label>  
                                                  <br />                                                 
                                                    <asp:TextBox  CssClass="form-control" ID="TxtCargo" runat="server" MaxLength="150" ></asp:TextBox>                                                       
                                                   <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TxtCargo" CssClass="" ErrorMessage="*" ValidationGroup="Grabar" ForeColor="Red"></asp:RequiredFieldValidator>
                                              </div>
                                         <br />  
                                              <div class=" col-md-3"> 
                                                  <div>
                                                  <div class="checkbox">
                                                        <strong>
                                                            <label class="form-control"> &nbsp;  
                                                                                                                                                
                                                                <asp:CheckBox ID="chkmensajeria"  runat="server" Text="Mensajeria"  />
                                                            </label>
                                                        </strong>
                                                  </div>
                                                </div>                                       
                                              </div>                                               
                                              <div class=" col-md-3">                                                               
                                                  <div class="checkbox">
                                                        <strong>
                                                            <label class="form-control">  &nbsp; 
                                                                                                                                                
                                                                <asp:CheckBox ID="chkDelete" runat="server" Text="Permite Eliminar"  />
                                                            </label>
                                                        </strong>
                                                  </div
                                              </div> 
                                            </div>
                                    <div class="row">
                                        <div class="col-md-2">                                                            
                                                  <div class="checkbox">
                                                        <strong>
                                                            <label class="form-control">   &nbsp;                                                                                    
                                                                <asp:CheckBox ID="ChkActivo" runat="server" Text="Activo"  />
                                                            </label>
                                                        </strong>
                                                  </div
                                              </div>
                                     </div> 
                                    <div class="row">
                                         <div class="col-md-12">
                                                <asp:Button ID="BtnGuardar" CssClass="btn btn-primary" runat="server" Text="Guardar" OnClick="BtnGuardar_Click" ValidationGroup="Grabar" />  
                                                <asp:Button ID="BtnModificar" CssClass="btn btn-primary" runat="server" Text="Modificar" OnClick="BtnModificar_Click" ValidationGroup="Grabar" />
                                                 <input type="button" value="Cerrar" id="cerrar" class="btn btn-default" />
                                             </div>
                                     </div>     
                                   </div>
                                 </div>
                            </div>
                        </div>
                  <asp:Panel ID="PnlMsg" runat="server"  Width="100%"></asp:Panel>  
            <script type="text/javascript">
                Sys.Application.add_load(BindEvents);
            </script>
        </ContentTemplate>
       </asp:UpdatePanel>
    </div>
</asp:Content>

