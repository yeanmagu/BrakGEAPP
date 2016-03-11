<%@ Page Title="Sedes" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Sedes.aspx.cs" Inherits="HGI2.Sedes"  EnableEventValidation="false" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>            
             <div class="row " >

                <div >
                    <div class="form-group col-md-5">
                        <label>Criterio de Búsqueda</label>
                        <asp:DropDownList ID="CmbBusqueda" CssClass="form-control  col-sm-10" runat="server">
                             <asp:ListItem>Codigo</asp:ListItem>
                             <asp:ListItem>Sede</asp:ListItem>
                         </asp:DropDownList> 
                    </div>
                     <div class="form-group col-md-6">
                         <label>Búsqueda</label>
                          <asp:TextBox  CssClass="form-control" ID="TxtBusqueda" runat="server" ></asp:TextBox>
                         
                     </div>
                     <div class="form-group col-md-1">
                   <br />
                        <input type="submit" value="Buscar" class="btn btn-primary" style="margin-top:5px;" />
                </div>
                </div>

             </div>
             <div class="row" >

                <div class="col-md-12">
            <div class="table-responsive">
                <asp:GridView ID="GridSedes" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="99%" OnPageIndexChanging="GridSedes_PageIndexChanging">
                     <pagersettings firstpagetext="First" lastpagetext="Last" nextpagetext="Next"  previouspagetext="Prev" Mode="NextPrevious" />
                                <FooterStyle BorderStyle="None" Font-Names="Trebuchet MS" />
                                <RowStyle Font-Names="Trebuchet MS" Font-Size="8pt" />
                                <EmptyDataRowStyle BackColor="Azure" BorderStyle="None" />
                                <Columns>
                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
                                        <ItemTemplate>
                                            <asp:ImageButton ID="BtnSelect" runat="server" CausesValidation="true" Height="16px" Width="16px"
                                                CommandArgument='<%# Eval("SedeCodi") %>' CommandName="IdSolicitud" 
                                                ImageUrl="~/Content/Images/Select.png" ToolTip="Seleccionar" OnCommand="BtnSelect_Command" />
                                    
                                        </ItemTemplate>
                                        <FooterStyle Font-Names="Trebuchet MS" HorizontalAlign="Center"  VerticalAlign="Middle" Width="7px" />
                                        <HeaderStyle HorizontalAlign="Center" />
                                        <ItemStyle Font-Names="Trebuchet MS" Font-Size="12px" HorizontalAlign="Center" VerticalAlign="Middle" Width="7px" />
                                    </asp:TemplateField>
                                    <asp:BoundField DataField="SedeCodi" HeaderText="Código" SortExpression="SedeCodi">
                                    <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                    </asp:BoundField>
                                    <asp:BoundField DataField="SedeNomb" HeaderText="Sede" 
                                        SortExpression="SedeNomb" />
                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
                                        <ItemTemplate>
                                            <asp:ImageButton ID="btneliminarGridView" runat="server"  CausesValidation="true" CommandArgument='<%# Eval("SedeCodi") %>' 
                                                CommandName="TCCode" ImageUrl="~/Content/Images/Eliminar.png"  Height="16px" Width="16px" OnClientClick="return confirm('Deseas Eliminar este Registro?');" 
                                                 ToolTip="Eliminar" OnCommand="btneliminarGridView_Command" />
                                        </ItemTemplate>
                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="7px" />
                                        <HeaderStyle HorizontalAlign="Center" />
                                        <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" Width="7px" />
                                    </asp:TemplateField>
                                </Columns>
                                <EditRowStyle BackColor="#2461BF" />
                            <FooterStyle BackColor="Gray" ForeColor="White" Font-Bold="True" />
                            <PagerSettings FirstPageText="First" LastPageText="Last"  Mode="NextPreviousFirstLast" NextPageText="Next" PreviousPageText="Prev" />
                            <PagerStyle BackColor="Gray" ForeColor="White" HorizontalAlign="Center" BorderColor="Silver" BorderStyle="Solid" />
                            <RowStyle BackColor="#EFEFEF" BorderColor="#CCCCCC" BorderStyle="Solid" />
                            <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                            <HeaderStyle BackColor="Gray" Font-Bold="True" ForeColor="White" />
                            <SortedAscendingCellStyle BackColor="#F5F7FB" />
                            <SortedAscendingHeaderStyle BackColor="#6D95E1" />
                            <SortedDescendingCellStyle BackColor="#E9EBEF" />
                            <SortedDescendingHeaderStyle BackColor="#4870BE" />
                </asp:GridView>
      
            </div>

                    </div></div>


            <form class="form-inline" role="form">

                <div class="row">
                  <div class="form-group col-md-5">
                    <label>Codigo</label>
                                   
                      <asp:TextBox  CssClass="form-control" ID="TxtCodigo" runat="server" MaxLength="5" ></asp:TextBox>
                 
                  </div>
                  <div class="form-group col-md-5">
                 <label>Sede</label>
                    
                      <asp:TextBox  CssClass="form-control" ID="TxtSede" runat="server" MaxLength="150" ></asp:TextBox>
                  
                  </div>
                  <div class="form-group col-md-2"> 
                    <div class="col-sm-offset-2 col-sm-10">
                      <div class="checkbox">
                        <label><asp:CheckBox ID="ChkActivo" runat="server" CssClass="checkbox" />Activo</label>
                      </div>
                    </div>
                  </div>

                    </div>
            </form>
            <%-- Botonera --%>
            <div class="col-md-12">           
                <div class="btn btn-primary"> <asp:Button ID="BtnGuardar" CssClass="btn btn-primary" runat="server" Text="Guardar" OnClick="BtnGuardar_Click" />  </div>
                <div class="btn btn-primary"><asp:Button ID="BtnModificar" CssClass="btn btn-primary" runat="server" Text="Modificar" OnClick="BtnModificar_Click" /></div>
                <div class="btn btn-primary"><asp:Button ID="BtnLimpiar" CssClass="btn btn-primary" runat="server" Text="Limpiar" OnClick="BtnLimpiar_Click" /></div>
                <div class="btn btn-primary"><asp:Button ID="BtnCerrar" CssClass="btn btn-primary" runat="server" Text="Cerrar" OnClick="BtnCerrar_Click" />  </div>            
            </div>
       </ContentTemplate>
    </asp:UpdatePanel>
  
</asp:Content>

