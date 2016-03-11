<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Menu.ascx.cs" Inherits="Generals.Web.Controles.Menu" %>
   
<div id="pnl" runat="server"></div>

            <div class="container-fuild" aria-orientation="vertical">
                <asp:Menu ID="mnuOpciones" runat="server"  Orientation="Vertical" IncludeStyleBlock="False" CssClass="navbar navbar-default mimenu "
                    
                    StaticMenuStyle-CssClass="nav" StaticSelectedStyle-CssClass="active" DynamicMenuStyle-CssClass="dropdown-menu dropmenu" RenderingMode="List">
                    
                </asp:Menu>
            </div>
           
      