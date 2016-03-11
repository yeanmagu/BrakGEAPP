<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="WebSubirTiposIrregularidades.aspx.cs" Inherits="Generals.Web.WebSubirTiposIrregularidades" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<%@ OutputCache Location="None" NoStore="true"%>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
     <link href="Styles/pagina.css" rel="stylesheet" />



    <script src="Scripts/jquery-1.10.2.js"></script>
    <script src="Scripts/jquery-ui-1.10.4.custom.js"></script>
    <script src="js/scripts.js"></script>

    <style type="text/css">
        
    </style>
     <script type="text/javascript">
         function BindEvents() {
             $(document).ready(function () {

             });
         }
        </script>

  
   <%--  <asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>--%>
       <div class="row">
        <div class="twelve columns">
            <table class="field tabla">
        <tr>
            <td class="primera">
                        <asp:Label ID="Label6" runat="server" Text="Subir Archivo" Font-Names="Trebuchet MS" 
                            Font-Size="9pt" ForeColor="Black" Width="100px"></asp:Label>
                    </td>
            <td class="segunda">
                <asp:FileUpload ID="FileUpload1" runat="server" />
                    </td>
            <td >
 
                   
                        <asp:Button ID="btnUpload" runat="server" OnClick="btnUpload_Click" Text="Transferir al Servidor" Width="168px" />
                    </td>
            <td style="width:250px">
 
                   
                        &nbsp;</td><td>
                        &nbsp;</td>
        </tr>
       
        </table>
        </div>
           <asp:Label ID="Label8" runat="server" Text="Label"></asp:Label>
                     
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
                     
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     
           <asp:Label ID="Label7" runat="server" Text="Label"></asp:Label>
    </div>


            <asp:GridView ID="GridView1" runat="server" AllowPaging="True"    AutoGenerateColumns="False" BackColor="White" BorderColor="Silver" 
                        BorderStyle="None" BorderWidth="1px" CellPadding="3" Font-Names="Trebuchet MS" 
                        Font-Overline="False" Font-Strikeout="False" Font-Underline="False" 
                        ForeColor="White" Height="100%" HorizontalAlign="Center" onpageindexchanging="GridView1_PageIndexChanging" 
                       
                        SelectedIndex="0" style="margin-left: 1px; text-align: left;" 
                        Width="100%" PageSize="20">
                        <pagersettings firstpagetext="First" lastpagetext="Last" 
                            mode="NextPreviousFirstLast" nextpagetext="Next" previouspagetext="Prev" />
                        <FooterStyle BackColor="White" BorderStyle="None" Font-Bold="False" 
                            Font-Names="Trebuchet MS" ForeColor="#000066" />
                        <RowStyle BackColor="White" Font-Names="Trebuchet MS" Font-Size="8pt" 
                            ForeColor="#333333" />
                        <EmptyDataRowStyle BackColor="White" BorderStyle="None" />
                        <PagerStyle BackColor="#666666" BorderStyle="None" Font-Names="Trebuchet MS" 
                            ForeColor="White" HorizontalAlign="Center" />
                        <SelectedRowStyle BackColor="White" BorderStyle="None" Font-Bold="False" 
                            Font-Names="Trebuchet MS" ForeColor="#666666" />
                        <HeaderStyle BackColor="#666666" BorderStyle="None" Font-Bold="False" 
                            Font-Italic="False" Font-Names="Trebuchet MS" Font-Size="Small" 
                            ForeColor="White" Wrap="False" />
                        <Columns>
                            <asp:BoundField DataField="codigo" HeaderText="codigo" SortExpression="codigo" />
                            <asp:BoundField DataField="tipologia" HeaderText="Tipologia" SortExpression="tipologia" />
                            <asp:BoundField DataField="situacionencontrada" HeaderText="Situacion Encontrada" SortExpression="situacionencontrada" />
                         
                        </Columns>
                        <EditRowStyle BorderStyle="None" Font-Bold="False" ForeColor="Black" />
                        <AlternatingRowStyle BackColor="Silver" BorderStyle="None" 
                            Font-Names="Trebuchet MS" />
                    </asp:GridView>
    <p>
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
        <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
        <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
        <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
    </p>
  

<%--          <script type="text/javascript">
              Sys.Application.add_load(BindEvents);
      </script>
</ContentTemplate>
    <Triggers >
        <asp:AsyncPostBackTrigger ControlID="btnUpload" EventName="Click" />
    </Triggers>
  </asp:UpdatePanel>--%>
</asp:Content>
