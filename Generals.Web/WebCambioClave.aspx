<%@ Page Title="" Language="C#" MasterPageFile="~/MastePage.Master" AutoEventWireup="true" CodeBehind="WebCambioClave.aspx.cs" Inherits="Generals.Web.WebCambioClave" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="Scripts/jquery-1.10.2.js"></script>
    <script>
        $(document).ready(function () {
            $(".sect").removeClass("col-md-12").addClass("col-md-4");
        });
    </script>
    <uc1:CambioClave runat="server" ID="CambioClave" />
    <asp:Button Text="Cambiar Clave" runat="server" ID="btnCambioClave" OnClick="btnCambioClave_Click"/>
     </div>

            </div>

</div>
           
</asp:Content>
