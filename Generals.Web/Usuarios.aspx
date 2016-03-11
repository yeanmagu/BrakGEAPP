<%@ Page Title="" Language="C#" MasterPageFile="~/Principal.Master" AutoEventWireup="true"
    CodeBehind="Usuarios.aspx.cs" Inherits="Generals.Web.Usuarios" %>

<%@ MasterType VirtualPath="~/Principal.Master" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
    Namespace="System.Web.UI" TagPrefix="asp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="cphData1" runat="server">
    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
        <ContentTemplate>
            <div align="center" style="width: 100%">
                <asp:Panel ID="Busqueda" runat="server" DefaultButton="Buscar" Style="width: 100%"
                    BorderStyle="Outset" BackColor="#094fa4" ForeColor="Black">
                    <fieldset id="DatosBusqueda" runat="server" class="fieldsetSecundario">
                        <asp:Label runat="server" ID="Titulo" Text="Datos de búsqueda" SkinID="LabelTitulo"></asp:Label>
                        <table style="width: 100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="alignLeft" style="width: 16%">
                                    <asp:Label ID="lblUsuario" runat="server" Text="Usuario"></asp:Label>
                                </td>
                                <td class="alignLeft" style="width: 16%">
                                    <asp:TextBox ID="UsuarioFiltro" Width="95%" runat="server" MaxLength="100"></asp:TextBox>
                                </td>
                                <td class="alignLeft" style="width: 16%">
                                    <asp:Label ID="lblApellido1" runat="server" Text="Identificación"></asp:Label>
                                </td>
                                <td class="alignLeft" style="width: 16%">
                                    <asp:TextBox ID="IdentificacionFiltro" runat="server" MaxLength="10" Width="95%"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td class="alignLeft" style="width: 16%">
                                    <asp:Label ID="Label23" runat="server" Text="Nombres"></asp:Label>
                                </td>
                                <td class="alignLeft" style="width: 16%">
                                    <asp:TextBox ID="NombresFiltro" runat="server" MaxLength="100" Width="95%"></asp:TextBox>
                                </td>
                                <td class="alignLeft" style="width: 16%">
                                    <asp:Label ID="lblApellido0" runat="server" Text="Apellidos"></asp:Label>
                                </td>
                                <td class="alignLeft" style="width: 16%">
                                    <asp:TextBox ID="ApellidosFiltro" runat="server" MaxLength="100" Width="95%"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td class="alignLeft">
                                    <asp:Label ID="Label24" runat="server" Text="Rol"></asp:Label>
                                </td>
                                <td class="alignLeft">
                                    <asp:DropDownList ID="RolFiltro" runat="server" DataTextField="desc_rol" DataValueField="Id_Rol"
                                        Width="96%">
                                    </asp:DropDownList>
                                </td>
                                <td class="alignLeft">
                                    <asp:Label ID="Label29" runat="server" Text="Estado"></asp:Label>
                                </td>
                                <td class="alignLeft">
                                    <asp:DropDownList ID="EstadoFiltro" runat="server" Width="95%">
                                    </asp:DropDownList>
                                </td>
                                <tr>
                                    <td class="alignLeft">
                                        <asp:Label ID="Label30" runat="server" Text="E-mail"></asp:Label>
                                    </td>
                                    <td class="alignLeft">
                                        <asp:TextBox ID="CuentaCorreoFiltro" runat="server" MaxLength="100" Width="95%"></asp:TextBox>
                                    </td>
                                    <td class="alignLeft">
                                    </td>
                                    <td class="alignLeft">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" colspan="4">
                                        <br />
                                        <asp:Button ID="Buscar" runat="server" OnClick="Buscar_Click" Text="Buscar" />
                                        <asp:Button ID="Todos" runat="server" OnClick="Todos_Click" Text="Todos" />
                                        <asp:Button ID="Limpiar" runat="server" OnClick="Limpiar_Click" Text="Limpiar" ValidationGroup="Actualizar" />
                                        <asp:Button ID="Nuevo" runat="server" OnClick="Nuevo_Click" Text="Nuevo" />
                                        <asp:Button ID="Salir" runat="server" OnClick="Salir_Click" Text="Salir" />
                                    </td>
                                </tr>
                        </table>
                    </fieldset>
                    <fieldset id="Datosresultado" runat="server" style="text-align: left; background-color: #FFFFFF;
                        color: #000000;" class="fieldsetSecundario">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td>
                                    <asp:Panel class="alignRight" ID="MarcoExportar" runat="server" DefaultButton="Exportar"
                                        BorderColor="White" BorderStyle="Ridge">
                                        <asp:GridView ID="ResultadoUsuarios" runat="server" EmptyDataText="No Existe Informacion para Mostrar"
                                            AutoGenerateColumns="False" EnableModelValidation="True" CellPadding="0" CellSpacing="0"
                                            BorderWidth="0" GridLines="None" OnRowCommand="ResultadoUsuarios_RowCommand"
                                            DataKeyNames="Id_Usuario" AllowPaging="True" OnPageIndexChanging="ResultadoUsuarios_PageIndexChanging"
                                            OnRowDataBound="ResultadoUsuarios_RowDataBound" Width="100%" CssClass="datatable">
                                            <RowStyle BackColor="#E7EEF5" ForeColor="#335EB4" Font-Size="11px" Font-Names="stag sans" />
                                            <HeaderStyle BackColor="#5f8cb6" Font-Bold="True" ForeColor="White" />
                                            <AlternatingRowStyle BackColor="White" ForeColor="#335EB4" Font-Size="11px" Font-Names="stag sans" />
                                            <Columns>
                                                <asp:BoundField HeaderText="Id" DataField="Id_Usuario" SortExpression="Id_Usuario" />
                                                <asp:BoundField HeaderText="Usuario" DataField="username" SortExpression="username" />
                                                <asp:BoundField HeaderText="Ident." DataField="numero_identificacion" SortExpression="numero_identificacion" />
                                                <asp:BoundField HeaderText="Nombre" DataField="NombreCompleto" SortExpression="NombreCompleto" />
                                                <asp:BoundField HeaderText="Rol" SortExpression="Rol" DataField="Rol" />
                                                <asp:BoundField HeaderText="E-mail" DataField="correo_electronico" SortExpression="correo_electronico" />
                                                <asp:TemplateField HeaderText="activo" SortExpression="activo" ItemStyle-CssClass="alignCenter">
                                                    <ItemTemplate>
                                                        <asp:CheckBox ID="CheckBox1" Enabled="false" runat="server" Checked='<%# Bind("Activo") %>' />
                                                    </ItemTemplate>
                                                </asp:TemplateField>
                                                <asp:ButtonField ButtonType="Link" HeaderText="Editar" ItemStyle-CssClass="alignCenter"
                                                    Text="<img src='Autenticacion/Login/Editar.png' border=0>" CommandName="Editar">
                                                    <ItemStyle HorizontalAlign="Center" />
                                                </asp:ButtonField>
                                            </Columns>
                                        </asp:GridView>
                                    </asp:Panel>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <asp:Button ID="Exportar" runat="server" Text="Exportar" OnClick="Exportar_Click" />
                                </td>
                            </tr>
                        </table>
                    </fieldset>
                </asp:Panel>
                <fieldset id="Edicion" runat="server" style="width: 45%; color: #000000;" class="fieldsetSecundario">
                    <asp:Panel runat="server" ID="DatosEdicion" Width="100%" DefaultButton="Guardar"
                        BackColor="#094fa4" BorderStyle="Outset">
                        <asp:Label runat="server" ID="Label2" Text="Datos de usuario" SkinID="LabelTitulo"></asp:Label>
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                            <ContentTemplate>
                                <table width="100%" class="alignCenter">
                                    <tr>
                                        <td style="width: 30%" align="left">
                                            <asp:Label ID="Label31" runat="server" Text="Usuario"></asp:Label>
                                        </td>
                                        <td style="width: 70%" align="left">
                                            <asp:TextBox ID="UsuarioEdicion" runat="server" Width="93%" MaxLength="100"></asp:TextBox>
                                            <asp:RequiredFieldValidator ID="RequeridoUsuario" runat="server" ControlToValidate="UsuarioEdicion"
                                                ErrorMessage="El campo Usuario es obligatorio" ToolTip="El campo Usuario es obligatorio"
                                                ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                            <asp:RegularExpressionValidator ID="ExpresionClaveNueva" runat="server" ControlToValidate="UsuarioEdicion"
                                                Display="Dynamic" ErrorMessage="La longitud del usuario debe estar entre 8 y 15 caracteres"
                                                ToolTip="La longitud del usuario debe estar entre 8 y 15 caracteres" ValidationExpression="(?=^.{8,15}$).*$"
                                                ValidationGroup="Guardar">*</asp:RegularExpressionValidator>
                                            <asp:ValidatorCalloutExtender ID="Nueva_ValidatorCalloutExtender" runat="server"
                                                Enabled="True" TargetControlID="ExpresionClaveNueva">
                                            </asp:ValidatorCalloutExtender>
                                            <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender1" runat="server" Enabled="True"
                                                TargetControlID="RequeridoUsuario">
                                            </asp:ValidatorCalloutExtender>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="width: 30%">
                                            <asp:Label ID="Label38" runat="server" Text="Identificación"></asp:Label>
                                        </td>
                                        <td align="left" style="width: 70%">
                                            <div onkeydown="return ValidarFormato(event, '[0-9]');">
                                                <asp:TextBox ID="IdentificacionEdicion" runat="server" MaxLength="10" Width="93%"></asp:TextBox>
                                                <asp:RequiredFieldValidator ID="RequeridoIdentificacion" runat="server" ControlToValidate="IdentificacionEdicion"
                                                    ErrorMessage="El campo Identificación es obligatorio" ToolTip="El campo Identificación es obligatorio"
                                                    ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                                <asp:RegularExpressionValidator ID="ExpresionIdentificacion" ControlToValidate="IdentificacionEdicion"
                                                    ErrorMessage="El campo Identificación es inválido" ToolTip="El campo Identificación es inválido"
                                                    ValidationExpression="^(([0-9]{6,8})||([0-9]{10,10}))$" ValidationGroup="Guardar"
                                                    Text="*" runat="server" Display="Dynamic" />
                                                <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender2" runat="server" Enabled="True"
                                                    TargetControlID="ExpresionIdentificacion">
                                                </asp:ValidatorCalloutExtender>
                                                <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender3" runat="server" Enabled="True"
                                                    TargetControlID="RequeridoIdentificacion">
                                                </asp:ValidatorCalloutExtender>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left">
                                            <asp:Label ID="Label32" runat="server" Text="Nombres"></asp:Label>
                                        </td>
                                        <td align="left">
                                            <asp:TextBox ID="NombresEdicion" runat="server" Width="93%" MaxLength="100"></asp:TextBox>
                                            <asp:RequiredFieldValidator ID="RequeridoNombres" runat="server" ControlToValidate="NombresEdicion"
                                                ErrorMessage="El campo Nombres es obligatorio" ToolTip="El campo Nombres es obligatorio"
                                                ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                            <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender4" runat="server" Enabled="True"
                                                TargetControlID="RequeridoNombres">
                                            </asp:ValidatorCalloutExtender>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left">
                                            <asp:Label ID="Label33" runat="server" Text="Apellidos"></asp:Label>
                                        </td>
                                        <td align="left">
                                            <asp:TextBox ID="ApellidosEdicion" runat="server" Width="93%" MaxLength="100"></asp:TextBox>
                                            <asp:RequiredFieldValidator ID="RequeridoApellidos" runat="server" ControlToValidate="ApellidosEdicion"
                                                ErrorMessage="El campo Apellidos es obligatorio" ToolTip="El campo Apellidos es obligatorio"
                                                ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                            <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender5" runat="server" Enabled="True"
                                                TargetControlID="RequeridoApellidos">
                                            </asp:ValidatorCalloutExtender>
                                        </td>
                                    </tr>
                                     <tr>
                                        <td align="left" style="width: 30%">
                                            <asp:Label ID="Label11" runat="server" Text="Id Oficina"></asp:Label>
                                        </td>
                                        <td align="left" style="width: 70%">
                                            <div onkeydown="return ValidarFormato(event, '[0-9]');">
                                                <asp:TextBox ID="txtidoficina" runat="server" MaxLength="10" Width="93%"></asp:TextBox>
                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="txtidoficina"
                                                    ErrorMessage="El campo Oficina es obligatorio" ToolTip="El campo Oficina es obligatorio"
                                                    ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                                <asp:RegularExpressionValidator ID="RegularExpressionValidator2" ControlToValidate="txtidoficina"
                                                    ErrorMessage="El campo Oficina es inválido" ToolTip="El campo Oficina es inválido"
                                                    ValidationExpression="^(([0-9]{6,8})||([0-9]{1,4}))$" ValidationGroup="Guardar"
                                                    Text="*" runat="server" Display="Dynamic" />
                                                <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender12" runat="server" Enabled="True"
                                                    TargetControlID="RequiredFieldValidator3">
                                                </asp:ValidatorCalloutExtender>
                                                <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender13" runat="server" Enabled="True"
                                                    TargetControlID="RegularExpressionValidator2">
                                                </asp:ValidatorCalloutExtender>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left">
                                            <asp:Label ID="Label34" runat="server" Text="Rol"></asp:Label>
                                        </td>
                                        <td align="left">
                                            <asp:DropDownList ID="RolEdicion" runat="server" DataTextField="desc_rol" DataValueField="Id_Rol"
                                                Width="95%" AutoPostBack="True" OnSelectedIndexChanged="RolEdicion_SelectedIndexChanged">
                                            </asp:DropDownList>
                                            <asp:RequiredFieldValidator ID="RequeridoRol" runat="server" ControlToValidate="RolEdicion"
                                                ErrorMessage="El campo Rol es obligatorio" InitialValue="0" ToolTip="El campo Rol es obligatorio"
                                                ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                            <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender6" runat="server" Enabled="True"
                                                TargetControlID="RequeridoRol">
                                            </asp:ValidatorCalloutExtender>
                                        </td>
                                    </tr>
                                 <%--   <tr id="rowGestoresEc" runat="server">
                                        <td colspan="2">
                                            <table width="100%">
                                                <tr>
                                                    <td align="left" style="width: 30%">
                                                        <asp:Label ID="Label4" runat="server" Text="Cargo"></asp:Label>
                                                    </td>
                                                    <td align="left">
                                                        <asp:TextBox ID="txtCargo" runat="server" Enabled="false" Width="93%" MaxLength="100"
                                                            Text="EJECUTIVO COMERCIAL"></asp:TextBox>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="left">
                                                        <asp:Label ID="Label10" runat="server" Text="Sucursal"></asp:Label>
                                                    </td>
                                                    <td align="left">
                                                        <div onkeydown="return ValidarFormato(event, '[0-9]');">
                                                            <asp:TextBox ID="txtsucursal" runat="server" MaxLength="10" Width="93%"></asp:TextBox>
                                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtsucursal"
                                                                ErrorMessage="El campo Sucursal es obligatorio" ToolTip="El campo Sucursal es obligatorio"
                                                                ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                                            <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender7" runat="server" Enabled="True"
                                                                TargetControlID="RequiredFieldValidator2">
                                                            </asp:ValidatorCalloutExtender>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="left">
                                                        <asp:Label ID="Label5" runat="server" Text="Còdigo Oficina"></asp:Label>
                                                    </td>
                                                    <td align="left">
                                                        <asp:TextBox ID="txtcodoficina" runat="server" Width="93%" MaxLength="100"></asp:TextBox>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="left">
                                                        <asp:Label ID="Label6" runat="server" Text="Oficina"></asp:Label>
                                                    </td>
                                                    <td align="left">
                                                        <asp:TextBox ID="txtOficina" runat="server" Width="93%" MaxLength="100"></asp:TextBox>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="left">
                                                        <asp:Label ID="Label7" runat="server" Text="Zona"></asp:Label>
                                                    </td>
                                                    <td align="left">
                                                        <asp:TextBox ID="txtZona" runat="server" Width="93%" MaxLength="100"></asp:TextBox>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>--%>
                                    <tr>
                                        <td align="left" style="width: 30%">
                                            <asp:Label ID="Label8" runat="server" Text="Telèfono"></asp:Label>
                                        </td>
                                        <td align="left" style="width: 70%">
                                            <div onkeydown="return ValidarFormato(event, '[0-9]');">
                                                <asp:TextBox ID="txtTelefono" runat="server" MaxLength="10" Width="93%"></asp:TextBox>
                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtTelefono"
                                                    ErrorMessage="El campo telèfono es obligatorio" ToolTip="El campo telèfono es obligatorio"
                                                    ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                                <asp:RegularExpressionValidator ID="RegularExpressionValidator1" ControlToValidate="txtTelefono"
                                                    ErrorMessage="El campo telèfono es inválido" ToolTip="El campo telèfono es inválido"
                                                    ValidationExpression="^(([0-9]{6,8})||([0-9]{1,10}))$" ValidationGroup="Guardar"
                                                    Text="*" runat="server" Display="Dynamic" />
                                                <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender8" runat="server" Enabled="True"
                                                    TargetControlID="RequiredFieldValidator1">
                                                </asp:ValidatorCalloutExtender>
                                                <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender9" runat="server" Enabled="True"
                                                    TargetControlID="RegularExpressionValidator1">
                                                </asp:ValidatorCalloutExtender>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left">
                                            <asp:Label ID="Label36" runat="server" Text="E-mail 1"></asp:Label>
                                        </td>
                                        <td align="left">
                                            <asp:TextBox ID="CuentaCorreoEdicion" runat="server" Width="93%" MaxLength="100"></asp:TextBox>
                                            <asp:RequiredFieldValidator ID="RequeridoCuentaCorreo" runat="server" ControlToValidate="CuentaCorreoEdicion"
                                                ErrorMessage="El campo E-mail es obligatorio" ToolTip="El campo E-mail es obligatorio"
                                                ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                            <%--<asp:RegularExpressionValidator ID="ExpresionCuentaCorreo" ControlToValidate="CuentaCorreoEdicion"
                                                ErrorMessage="El campo E-mail es inválido" ToolTip="El campo E-mail es inválido"
                                                ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" ValidationGroup="Guardar"
                                                Text="*" runat="server" Display="Dynamic" />--%>
                                            <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender10" runat="server" Enabled="True"
                                                TargetControlID="RequeridoCuentaCorreo">
                                            </asp:ValidatorCalloutExtender>
                                            <%--<asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender11" runat="server" Enabled="True"
                                                TargetControlID="ExpresionCuentaCorreo">
                                            </asp:ValidatorCalloutExtender>--%>
                                        </td>
                                    </tr>
                                   <tr>
                                       <td>Especialidad</td>
                                       <td>
                                           <asp:TextBox ID="txtEspecialidad" runat="server" Width="93%" MaxLength="100"></asp:TextBox>
                                       </td>
                                       <td>
                                           Registro Medico
                                       </td>
                                       <td>
                                           <asp:TextBox ID="txtRegistroMedico" runat="server" Width="93%" MaxLength="100"></asp:TextBox>
                                       </td>

                                   </tr>
                                    <tr>
                                        <td>Licencia</td>
                                        <td><asp:TextBox ID="txtLicencia" runat="server" Width="93%" MaxLength="100"></asp:TextBox></td>
                                        <td>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td align="left">
                                            <asp:Label ID="Label1" runat="server" Text="Estado"></asp:Label>
                                        </td>
                                        <td align="left">
                                            <asp:CheckBox ID="Activo" runat="server" Text="Activo" />
                                        </td>
                                    </tr>
                                    <tr runat="server" id="FilaResetear">
                                        <td align="left">
                                            <asp:Label ID="Label37" runat="server" Text="Clave"></asp:Label>
                                        </td>
                                        <td align="left">
                                            <asp:CheckBox ID="ResetearClave" runat="server" Text="Resetear" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left">
                                            <asp:Label ID="Label9" runat="server" Text="Password"></asp:Label>
                                        </td>
                                        <td align="left">
                                            <asp:CheckBox ID="chkpaswordusuario" Checked="true" runat="server" Text="desea que el Password sea el mismo Usuario?" />
                                        </td>
                                    </tr>
                                    <tr runat="server" id="FilaGenerar">
                                        <td align="left">
                                            <asp:Label ID="Label3" runat="server" Text="Token"></asp:Label>
                                        </td>
                                        <td class="alignLeft" align="left" >
                                            <asp:LinkButton ID="Generar" runat="server" ForeColor="White" Font-Bold="true"  OnClick="Generar_Click">Generar</asp:LinkButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" align="center">
                                            <asp:Button ID="Guardar" runat="server" Text="Guardar" OnClick="Guardar_Click" ValidationGroup="Guardar" />
                                            <asp:Button ID="LimpiarEdicion" runat="server" Text="Limpiar" OnClick="LimpiarEdicion_Click" />
                                            <asp:Button ID="CancelarEdicion" runat="server" Text="Cancelar" OnClick="CancelarEdicion_Click" />
                                        </td>
                                    </tr>
                                </table>
                            </ContentTemplate>
                            <Triggers>
                                <asp:PostBackTrigger ControlID="Generar" />
                                <asp:PostBackTrigger ControlID="Exportar" />
                            </Triggers>
                        </asp:UpdatePanel>
                    </asp:Panel>
                </fieldset>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    <%--<asp:UpdateProgress ID="UpdateProgressBasico" runat="server" AssociatedUpdatePanelID="UpdatePanel1">
        <ProgressTemplate>
            <asp:Panel ID="PanelProgress" runat="server" CssClass="progress">
                <div class="progressContainer">
                    <div class="progressHeader">
                        Por favor espere mientras la operación se realiza....
                    </div>
                    <div class="progressBody">
                        <div class="alignCenter">
                            <asp:Image ID="Image1" runat="server" ImageUrl="~/images/cargando_v2.gif" />
                        </div>
                    </div>
                </div>
            </asp:Panel>
        </ProgressTemplate>
    </asp:UpdateProgress>--%>
</asp:Content>
