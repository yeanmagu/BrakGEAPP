<%@ Page Title="" Language="C#" MasterPageFile="~/MastePage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Generals.Web.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        function comprueba() {
            var user = "<%=Usuario.id_usuario%>";
            alert(JSON.stringify(user));
            sessionStorage.removeItem("users");
            sessionStorage.setItem("users", user);
        }
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="page-content">
					
	    <div class="row" style="display:none;">
						<div class="col-lg-7">
					
							<!--Network Line Chart-->
							<!--===================================================-->
							<div id="demo-panel-network" class="panel" >
								
					
								<!--Morris line chart placeholder-->
								<div id="morris-chart-network" class="morris-full-content" ></div>
					
								<!--Chart information-->
								
					
					
							</div>
							<!--===================================================-->
							<!--End network line chart-->
					
						</div>
				
					
					
						</div>
	</div>
    		
					<!--===================================================-->
					<!--End Tiles - Bright Version-->
					
					
					
				
</asp:Content>
