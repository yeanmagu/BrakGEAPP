<%@ Page Title="CodContrata" Language="C#" MasterPageFile="~/MastePage.Master" AutoEventWireup="true" CodeBehind="UnicomCodContrata.aspx.cs" Inherits="Generals.Web.UnicomCodContrata" %>
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
                                    <h3 class="panel-title">
                                        <asp:Label ID="lbltitle" runat="server" Text=""></asp:Label>

                                    </h3> 
                                        <div class="dataTables_filter" id="demo-dt-basic_filter">
                                            <label>Buscar:<asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True"  ></asp:TextBox>  </label> 
                                        </div>
                                        <div class="row">
                                <div class="col-md-12">
                                    <asp:GridView ID="GridCodContrata" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="100%" PageSize="5" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="GridCargos_PageIndexChanging" GridLines="None" OnSelectedIndexChanged="GridCodContrata_SelectedIndexChanged" >
                                     <pagersettings firstpagetext="  Primero  " lastpagetext="  Último  " nextpagetext="  Siguiente   "  previouspagetext="  Anterior  " Mode="NextPreviousFirstLast"  />
                                            <AlternatingRowStyle BackColor="#F4F4F4" />
                                            <Columns>                                    
                                                <asp:BoundField DataField="Id" HeaderText="Código" SortExpression="Id">
                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                </asp:BoundField>
                                                <%--<asp:BoundField DataField="DescUnic" HeaderText="Nombre Unicom" SortExpression="DescUnic" />--%>   
                                                <asp:BoundField DataField="DescContra" HeaderText="Nombre Contrata"   SortExpression="DescContra" />                                  
                                                <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
                                                    <ItemTemplate>
                                                        <asp:Button ID="BtnSelect" runat="server" CausesValidation="true" 
                                                            CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud" 
                                                            Text="Modificar" ToolTip="Modificar" OnCommand="BtnSelect_Command" />
                                    
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
                     <%--<asp:Button ID="BtnCerrarPag" CssClass="btn btn-default" runat="server" Text="Cerrar" OnClick="BtnCerrarPag_Click" Visible="false" /> --%>
                    <a href="Unicom.aspx" id="Button1" class="btn btn-default" >Cerrar</a>
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
    <div class="row ">
        
        <asp:UpdatePanel runat="server" ID="UpdateNew" UpdateMode="Conditional">
                    <ContentTemplate>
        <div class="col-md-12 caja" >
            <div class="panel formdata" >
                 <div class="panel-heading">
				    <h3 class="panel-title">Detalle de Unicom :  <asp:Label ID="lbldeta" runat="server" Text=""></asp:Label></h3>         
				 </div>
                 <div class="panel-body">
                     <div class="row">
             <%--       <div class="form-group col-md-3">
                        <label>Código:</label>
                       
                    </div>--%>
                         
                    <%--<div class="form-group col-md-3">
                        <label>Unicom:</label>
                       <asp:DropDownList ID="CmbUnicom" CssClass="form-control" runat="server"></asp:DropDownList>
                    </div>--%>
                    <div class="form-group col-md-3">
                        <label>Contrata:</label>
                         <asp:TextBox  CssClass="form-control" ID="TxtCodigo" runat="server" Visible="false" Enabled="false"></asp:TextBox>
                       <asp:DropDownList ID="CmbContrata" CssClass="form-control" runat="server"></asp:DropDownList>
                    </div>
                </div>    
                     <div class="row">
                        <div class="col-md-12">                                    
                            <asp:Button ID="BtnGuardar" CssClass="btn btn-primary" runat="server" Text="Guardar" OnClick="BtnGuardar_Click" />  
                            <asp:Button ID="BtnLimpiar" CssClass="btn btn-primary" runat="server" Text="Limpiar" OnClick="BtnLimpiar_Click" />
                            <asp:Button ID="BtnCerrar" CssClass="btn btn-primary" runat="server" Text="Cerrar" OnClick="BtnCerrar_Click" Visible="false" />                  
                             <input type="button" value="Cerrar" id="cerrar" class="btn btn-default" />
                        </div>
                    </div>

                </div>

            </div>
         </div>
                        <div class="row">
                              <div class="col-md-12">
                                  <asp:Panel ID="PnlMsg" runat="server"  Width="100%"></asp:Panel>
                              </div>
                        </div>
                        <script type="text/javascript">
                            Sys.Application.add_load(BindEvents);
                        </script>
                        </ContentTemplate>
            <Triggers>
                <asp:AsyncPostBackTrigger ControlID="btnGuardar" EventName="Click" />
            </Triggers>
           
       </asp:UpdatePanel>
         
    </div>

    <%-- fin seccion nuevos registros --%>   
    <%-- seccion de botonera --%>   
    
    
 
</asp:Content>
