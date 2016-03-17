<%@ Page Title="" Language="C#" MasterPageFile="~/MastePage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Generals.Web.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
  
    <script src="Views/js/angular.js"></script>
    <script src="Views/js/angular-resource.js"></script>
    <script src="Views/ControllersAngular/Usuario.js"></script>	
     <script src="js/jquery-2.1.1.min.js"></script>
    <script src="template/plugins/pace/pace.min.js"></script>
    <script src="js/angular.js"></script>
    <script src="js/angular-resource.js"></script> 
    <script src="js/bootstrap.min.js"></script>
    <script src="js/ui-bootstrap-tpls-0.11.0.js"></script>
    <script type="text/javascript">
      
        function comprueba() {
            var user = "<%=Usuario.id_usuario%>";
         
            sessionStorage.removeItem("users");
            sessionStorage.setItem("users", user);
        }
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div ng-controller="UsersController" id="page-content">
					
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
