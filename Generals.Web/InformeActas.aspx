<%@ Page Title="Informe Actas" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="InformeActas.aspx.cs" Inherits="Generals.Web.InformeActas"  EnableEventValidation="false" %>

<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
     <script src="js/jquery.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/jquery.confirm.min.js"></script>
    <style>
        .varsession
        {
            display:none;
        }
    </style>
    <script src="Scripts/bootstrap.min.js"></script>
      <script src="js/jquery.min.js"></script>
    
    <script src="Scripts/jquery.confirm.min.js"></script>
    <script src="Scripts/EventForms.js"></script>
    <style>
        .formgrid {
            display:block;
        }
        .formdata {
            
        }
    </style>
    <link href="Content/custom.css" rel="stylesheet" />
  <link href="Content/modal.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
     <%-- busquedas y registros en gridview --%>
      <asp:UpdatePanel runat="server" ID="UpdatePanel1" UpdateMode="Conditional">
         <ContentTemplate>    
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
                                                    <div class="panel-heading">
				                                    <h3 class="panel-title">
                                                        <asp:Label ID="lblTitle" runat="server" Text=""></asp:Label></h3>         
				                                    </div>
                                                    <div class="col-md-12">
                                            
                                                            <div class="form-group col-md-3">    
                                                                <label>Fecha Inicial</label>                                       
                                                                <asp:TextBox  CssClass="form-control" ID="txtFechaInicial" runat="server" TextMode="DATE"  ></asp:TextBox>
                                                            </div> 
                                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtFechaInicial" CssClass="danger"                       ErrorMessage="*"     ValidationGroup="Grabar" ForeColor="Red" Display="Dynamic" SetFocusOnError="true"></asp:RequiredFieldValidator>        
                                                        <div class="form-group col-md-3">   
                                                                <label>Fecha Final</label>                                        
                                                            <asp:TextBox  CssClass="form-control" ID="TxtFechaFinal" runat="server" TextMode="Date" ></asp:TextBox>  
                                                        </div>
                                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtFechaInicial" CssClass="danger"                  ErrorMessage="*"     ValidationGroup="Grabar" ForeColor="Red" SetFocusOnError="true" Display="Dynamic"></asp:RequiredFieldValidator> 
                                                        <div class="form-group col-md-3">  
                                                            <label>Delegación</label>                                         
                                                            <asp:DropDownList ID="cmbdelegacion" CssClass="form-control" runat="server">
                                                        
                                                            </asp:DropDownList>
                                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="txtFechaInicial" CssClass="danger"  InitialValue="0"       ErrorMessage="*"     ValidationGroup="Grabar" ForeColor="Red" Display="Dynamic"></asp:RequiredFieldValidator>                                                
                                                        </div>
                                                        <div class="form-group col-md-3">  
                                                            <br />
                                                            <asp:Button ID="BtnGenerar" runat="server" Text="Generar"  ValidationGroup="Grabar" OnClick="BtnGenerar_Click" />
                                                        </div>

                                                    </div>
                                                   
                                                       
                                                   
                                                </div>
                                                      <div class="col-md-12">
                                                        <asp:Label ID="lblActas" CssClass="form-control label-info" runat="server" Visible="false"  Text="Consulta Realizada con Éxito...! " ForeColor="White"></asp:Label>
                                                     </div>
                                                </div> 
                                           
                                        </ContentTemplate>
                                    </asp:UpdatePanel>
                                    
                                </div>
                            </div>                      
                        </div>
                    </div>
                </div>
            <%-- fin seccion de registros en gridview --%>   
            </div>  
           

        
        </ContentTemplate>
    </asp:UpdatePanel>
    <script>
         

        
    </script>
</asp:Content>

