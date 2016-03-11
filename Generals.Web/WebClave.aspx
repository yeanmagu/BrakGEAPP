<%@ Page Title="" Language="C#" MasterPageFile="~/Principal.Master" AutoEventWireup="true" CodeBehind="WebClave.aspx.cs" Inherits="Generals.Web.WebClave" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphData2" runat="server">

    <uc1:CambioClave runat="server" ID="CambioClave" />
    <asp:Button Text="Cambiar Clave" runat="server" ID="btnCambioClave" OnClick="btnCambioClave_Click"/>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="cphData1" runat="server">
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="cphData3" runat="server">
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="cphData4" runat="server">
</asp:Content>
