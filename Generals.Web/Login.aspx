﻿<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPageLogin.Master" AutoEventWireup="true"
    CodeBehind="Login.aspx.cs" Inherits="Generals.Web.Login" %>

<%@ MasterType VirtualPath="~/MasterPageLogin.Master" %>
<%@ Register Src="~/controls/CambioClave.ascx" TagName="CambioClave" TagPrefix="uc1" %>
<%@ Register Src="~/controls/OlvidoClave.ascx" TagName="OlvidoClave" TagPrefix="uc2" %>
<%@ Register TagPrefix="captcha" Namespace="WebControlCaptcha" Assembly="WebControlCaptcha" %>

<asp:Content ID="content1d" ContentPlaceHolderID="head" runat="server">
    <script src="Scripts/jquery-1.11.0.min.js" type="text/javascript"></script>
    <script src="js/jquery.bpopup.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        
        $(function () {
            $("#ctl00_ContentPlaceHolder1_OlvidoClave").addClass("btn btn-primary btn-block");
            $("#ctl00_ContentPlaceHolder1_CancelarOlvido").addClass("btn btn-primary btn-block");
        });
        function BindEvents() {
            $(document).ready(function () {
                $("input[name='ctl00$ContentPlaceHolder1$LoginCaptchaControl']").addClass("form-control");
                $("input[name='ctl00$ContentPlaceHolder1$IniciarSesion']").addClass("btn btn-primary btn-block");
                $("input[name='ctl00$ContentPlaceHolder1$OlvidoClave1$Usuario']").addClass("btn btn-primary btn-block");

               
            });
        }

       
    </script>
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
   <script type="text/javascript">
       function comprueba() {
           var btn = "<%= Ingresar.ClientID %>";
           document.getElementById(btn).display = 'none';
       }
    </script>
        
    <div class="row " >
	    		<div class="col-md-12 " >
		    		
	    			
					<div class="row">
			    		<div class="col-md-7">
			    			<div class="row">
                                <div class="col-md-12">
                                    <!-- carousel-->
						        	<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
							  <!-- Indicators -->
							  <ol class="carousel-indicators">
							    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
							    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
							    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
							  </ol>
							  <!-- Wrapper for slides -->
							  <div class="carousel-inner" role="listbox">
								    <div class="item active">
								      <img src="imagenes/1.png" class="slid"  alt="..." />
								      <div class="carousel-caption">
								       
								      </div>
								    </div>
								    <div class="item">
								      <img src="imagenes/2.png" class="slid" alt="..." />
								      <div class="carousel-caption">
								        
								      </div>
								    </div>
								    <div class="item">
								      <img src="imagenes/3.png" class="slid" alt="..." />
								      <div class="carousel-caption">
								        
								      </div>
								    </div>
 
  								</div>

						  <!-- Controls -->


						  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
						    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
						    <span class="sr-only">Previous</span>
						  </a>
						  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
						    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
						    <span class="sr-only">Next</span>
						  </a>
						</div>
							        <!-- End carrousel-->
                                </div>
			    			</div>
                            <br />
                            <div class="row">
                                <div class="col-md-12">
                                   <div class="list-group">
                                      <a href="#" class="list-group-item success">
                                        <h4 class="list-group-item-heading" >BRAKGE Gestión Empresarial</h4>
                                      </a>
                                      
                                      <p class="list-group-item-text">
                                        
                                      </p>
                                    </div>
                                </div>
                            </div>

			    		</div>
			    		<div class="col-md-5">
			    				<!-- form--------------------------------------------------------------------->

                            <td id="tdIniciarSesion" runat="server"  align="center">
				    				<div class="form-group col-md">
				    					<label for="">Usuario</label>
				    					<asp:TextBox ID="UsuarioIngreso" runat="server" Width="100%" BorderColor="#CCCCCC"
                                                                    BorderStyle="Solid" BorderWidth="1px" AutoCompleteType="Disabled" ValidationGroup="Inicio" CssClass="form-control input-sm" ></asp:TextBox>
                                        <asp:RequiredFieldValidator ID="UsuarioRequerido" runat="server" ControlToValidate="UsuarioIngreso"
                                                                    EnableClientScript="true" Display="Dynamic" ErrorMessage="Ingrese un nombre de usuario"
                                                                    ToolTip="Ingrese un nombre de usuario" ValidationGroup="Inicio">*</asp:RequiredFieldValidator>
                                                               <%-- <asp:ValidatorCalloutExtender ID="rfvUsuario_ValidatorCalloutExtender" runat="server"
                                                                    Enabled="True" TargetControlID="UsuarioRequerido">
                                                                </asp:ValidatorCalloutExtender>--%>
				    				</div>
				    				<div class="form-group col-md">
				    					<label for="">Contraseña</label>
				    					<asp:TextBox ID="ClaveIngreso" runat="server" Width="100%" BorderColor="#CCCCCC"
                                                                    BorderStyle="Solid" BorderWidth="1px" TextMode="Password" ValidationGroup="Inicio"
                                                                    AutoCompleteType="Disabled" CssClass="form-control input-sm"></asp:TextBox>
                                         <asp:RequiredFieldValidator ID="ClaveRequerida" runat="server" ControlToValidate="ClaveIngreso"
                                                                    Display="Dynamic" ErrorMessage="Ingrese una contraseña" ToolTip="Ingrese una contraseña"
                                                                    EnableClientScript="true" ValidationGroup="Inicio">*</asp:RequiredFieldValidator>
                                                               <%-- <asp:ValidatorCalloutExtender ID="rfvPassword_ValidatorCalloutExtender" runat="server"
                                                                    Enabled="True" TargetControlID="ClaveRequerida">
                                                                </asp:ValidatorCalloutExtender>--%>
                                                                <asp:RegularExpressionValidator ID="TokenRegular" runat="server" Display="Dynamic"
                                                                    ControlToValidate="ClaveIngreso" ErrorMessage="" ToolTip="." Text="" ValidationExpression=""></asp:RegularExpressionValidator>
				    				</div>
                                    <div class="form-group ">
                                        <label>Token</label>
                                        <input id="CargaToken" runat="server" class="button_form2" type="file" accept="*.dat"
                                            style="width:170px" />
                                        <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" Display="Dynamic"
                                            ControlToValidate="CargaToken" ErrorMessage="Tipo de archivo no válido" ToolTip="Tipo de archivo no válido"
                                            Text="*" ValidationExpression="^.+\.((dat)|(DAT))$" ValidationGroup="Inicio">
                                            </asp:RegularExpressionValidator>
                                    </div>

                                    <div class="form-group col-md-10">
                                        <asp:UpdatePanel ID="UpdatePanel3" runat="server" UpdateMode="Conditional">
                                                <ContentTemplate>
                                                    <captcha:CaptchaControl ID="LoginCaptchaControl" runat="server" CaptchaWidth="160"
                                                        ValidationGroup="captcha" CssClass="capcha " Width="100%"  />
                                                    <script type="text/javascript">
                                                        Sys.Application.add_load(BindEvents);
                                                    </script>  
                                                </ContentTemplate>
                                                <Triggers>
                                                    <asp:AsyncPostBackTrigger ControlID="Reset" EventName="Click" />
                                                    <%--<asp:AsyncPostBackTrigger ControlID="ibtAcceso" EventName="Click" />--%>
                                                </Triggers>
                                       </asp:UpdatePanel>                                                                
                                    </div>
                                    <div class="form-group col-md-2" style="padding-top:50px;">
                                        <asp:ImageButton ID="Reset" runat="server" Height="28px" ImageUrl="~/images/Refresh.png"
                                                                    ValidationGroup="captcha" OnClick="Reset_Click" OnClientClick="$j('.capcha').hide('explode');"
                                                                    Width="27px" />
                                    </div>

                                    <asp:Button ID="IniciarSesion" runat="server" OnClick="ibtnAccess"
                                                            Style="margin-bottom: 0px" Text="Iniciar Sesión"  ValidationGroup="Inicio"  CssClass="btn btn-primary" />

                                    <asp:Label ID="lblMensaje" runat="server" Font-Size="Small" ForeColor="Red"></asp:Label>
                                                    <asp:ValidationSummary ID="vsErrores" runat="server" Font-Size="Small" ForeColor="Red" />
                                                     <div class="clear hideSkiplink">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    </div>
                                </td>
                            <!-- HASTA AQUI ***************************************  -->
                                    <div class="form-group">

                                    </div>
                                    <!-- ************************************************************************ -->
                                         <fieldset id="Ingresar" runat="server" style="border: 0 outset #808080">
                                         </fieldset>
                                    <asp:HiddenField ID="ClaveIngresoHash" runat="server" />
                                    <asp:HiddenField ID="HiddenField" runat="server" />
                                    <table align="center" id="tbllnkOlvido" runat="server" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td align="center" colspan="2">
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <asp:LinkButton ID="lnkOlvidoContraseña" class="textL" runat="server" CausesValidation="False"
                                                    OnClick="lnkOlvidoContraseña_Click" Text="Olvidó su Contraseña?" ForeColor="#3366FF"></asp:LinkButton>
                                            </td>
                                        </tr>
                                    </table>
                                    <table align="center" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td colspan="2" valign="top">
                                                <fieldset id="SeccionCambio" runat="server" class="textL" style="border: 0">
                                                    <uc1:CambioClave ID="CambioClave1" runat="server" />
                                                </fieldset>
                                                <fieldset id="Olvido" runat="server" class="textL " style="border: 0">
                                                    <uc2:OlvidoClave ID="OlvidoClave1" runat="server" />
                                                </fieldset>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            </td>
                                            <td align="right" style="width: 70%">
                                                <table cellpadding="1" cellspacing="2" width="100%">
                                                    <tr>
                                                        <td id="tdGuardar" runat="server">
                                                            <asp:Button ID="Guardar" runat="server" Height="25px" OnClick="Guardar_Click" Text="Guardar"
                                                                ValidationGroup="Cambio" Width="114px" />
                                                        </td>
                                                        <td id="tdOlvidoClave" runat="server">

                                                            <asp:Button ID="OlvidoClave" runat="server"  Width="100px" OnClick="OlvidoClave_Click"
                                                                Text="Enviar" ValidationGroup="Olvido"  CssClass="btn btn-primary" />
                                                        </td>
                                                        <td id="tdCancelarOlvido" runat="server">
                                                            <asp:Button ID="CancelarOlvido" runat="server" CssClass="btn btn-primary" Width="100px" OnClick="CancelarOlvido_Click"
                                                                Text="Cancelar"  />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>				    				
				    				<br />	
                            <!-- form--------------------------------------------------------------------->
                            <asp:Panel ID="pnl" runat="server">
                            
                            </asp:Panel>
                            <div style="display:none;" >
                                <asp:Label runat="server" ID="Titulo" ></asp:Label>
                            </div>                          
		    			</div>
		    		</div>
                   
		    	</div>
	    	</div>


    
    <div>
        
    </div>

        

     
    <div class="row-centered">
        <div class="col-md-6 col-centered">
    
    
    
    <table cellpadding="0" cellspacing="0">
        <tr>
            <td colspan="2">
                <input id="btnAlta" runat="server" type="button" style="width: 1px; height: 15px;
                    visibility: hidden;" />
                <asp:Panel ID="pntmodal" runat="server" BackColor="White" Style="display: none">
                    <table class="text" width="600px" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="TitleImageUCHeder" colspan="4">
                                <asp:Label ID="lblTitle" runat="server" Text="Modificación de Contraseña" CssClass="TextHeder"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <asp:Label ID="Label7" runat="server" Text="Usuario:" CssClass="text"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtUsuarioChange" runat="server" CssClass="text" Enabled="false"
                                    Width="300px" AutoCompleteType="Disabled"></asp:TextBox>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <asp:Label ID="Label3" runat="server" Text="Nueva Contraseña:" CssClass="text"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtNewPass" runat="server" CssClass="text" TextMode="Password" MaxLength="18"
                                    Height="20px"></asp:TextBox>
                                <asp:Label ID="lblREAccion" runat="server" Text="*" ForeColor="Red"></asp:Label>
                                <asp:RequiredFieldValidator ID="rfvAccion" runat="server" ErrorMessage="Nueva Contraseña"
                                    ControlToValidate="txtNewPass" Display="Dynamic" ValidationGroup="Guardar">&nbsp;</asp:RequiredFieldValidator>
                                <asp:RegularExpressionValidator ID="revNewPass" runat="server" ErrorMessage="La contraseña no cumple con las Politicas requeridas."
                                    ControlToValidate="txtNewPass" ValidationExpression="^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$"
                                    ValidationGroup="Guardar" Display="Dynamic">&nbsp;</asp:RegularExpressionValidator>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <asp:Label ID="Label4" runat="server" Text="Confirme Contraseña:" CssClass="text"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="txtConfirPass" runat="server" CssClass="text" TextMode="Password"
                                    MaxLength="18"></asp:TextBox>
                                <asp:Label ID="Label6" runat="server" Text="*" ForeColor="Red"></asp:Label>
                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Confirme Contraseña"
                                    ControlToValidate="txtConfirPass" Display="Dynamic" ValidationGroup="Guardar">&nbsp;</asp:RequiredFieldValidator>
                                <asp:CompareValidator ID="CompareValidator1" runat="server" ErrorMessage="La Contraseñas no Coinciden Intente de Nuevo"
                                    ControlToValidate="txtNewPass" ControlToCompare="txtConfirPass" Type="String"
                                    ValidationGroup="Guardar" Display="Dynamic">&nbsp;</asp:CompareValidator>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                La Contraseña debe tener 8 caracteres mínimo, entre ellas al menos 1 letra Mayúscula,
                                1 letra Minúscula, 1 Número y un Carácter Especial [@#$%^&+=].
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colspan="4">
                                <input id="btnAcept" runat="server" type="button" value="Aceptar" onserverclick="ChangePassword"
                                    class="button_start" style="width: 66px; height: 23px; font-family: Arial, Helvetica, sans-serif;
                                    font-size: 11px;" validationgroup="Guardar" />
                                <asp:Button ID="btnCancel" runat="server" Text="Cancelar" Width="66px" Height="23px"
                                    OnClick="btnCancel_Click" CausesValidation="false" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <asp:ValidationSummary ID="vsPageGuardar" runat="server" DisplayMode="List" ShowMessageBox="True"
                                    ShowSummary="False" HeaderText="Proporcione la siguiente información:" ValidationGroup="Guardar" />
                            </td>
                        </tr>
                    </table>
                </asp:Panel>
                <%--<asp:ModalPopupExtender ID="mpeCambioContraseña" runat="server" TargetControlID="btnAlta"
                    BehaviorID="ModalPopupExtender1" PopupControlID="pntmodal" BackgroundCssClass="modalBackground"
                    DropShadow="true">
                </asp:ModalPopupExtender>--%>
            </td>
        </tr>
    </table>
    <table cellpadding="0" cellspacing="0">
        <tr>
            <td colspan="2">
                <input id="btnShowNotificacion" runat="server" type="button" style="width: 1px; height: 15px;
                    visibility: hidden;" />
                <asp:Panel ID="pnlNotificacion" runat="server" BackColor="White" Style="display: none">
                    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                        <ContentTemplate>
                            <table class="text" width="400px" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td class="TitleImageUCHeder">
                                        <asp:Label ID="Label1" runat="server" Text="Notificación" CssClass="TextHeder"></asp:Label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <asp:Label ID="Label5" runat="server" Text="Por Politicas de Seguridad es Necesario Cambiar la Contraseña al Ingresar por Primera vez!!"
                                            CssClass="text"></asp:Label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <input id="AceptarButton" runat="server" type="button" value="Aceptar" onserverclick="AceptarNotificacion"
                                            cssclass="combo" style="width: 66px; height: 23px; font-family: Arial, Helvetica, sans-serif;
                                            font-size: 11px;" causesvalidation="false" />
                                    </td>
                                </tr>
                            </table>
                        </ContentTemplate>
                    </asp:UpdatePanel>
                </asp:Panel>
               <%-- <asp:ModalPopupExtender ID="mpeNotificacion" runat="server" TargetControlID="btnShowNotificacion"
                    BehaviorID="mpeNotificacion" PopupControlID="pnlNotificacion" BackgroundCssClass="modalBackground"
                    DropShadow="true">
                </asp:ModalPopupExtender>--%>
            </td>
        </tr>
    </table>
    <table style="width: 100%; display:none;" cellpadding="0" cellspacing="0" >
        <tr>
            <td align="left" valign="middle" width="25px" style="height: 19px;">
              <%--  <asp:ModalPopupExtender ID="mpeNotificacionMaster" runat="server" TargetControlID="panNotificacionMaster"
                    BehaviorID="mpeNotificacionMaster" PopupControlID="panNotificacionMaster" BackgroundCssClass="modalBackground"
                    OkControlID="lnkContinuarMaster" OnOkScript="fnClickOK()">
                </asp:ModalPopupExtender>--%>
                <asp:Panel ID="panNotificacionMaster" runat="server" Height="150px" Width="300px"
                    CssClass="ModalWindow" Style="display: block">
                    <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="TableTitle">
                                Mensaje de Notificación
                            </td>
                        </tr>
                        <tr style="height: 20px">
                            <td>
                            </td>
                        </tr>
                        <tr valign="middle" align="center" style="height: 40px">
                            <td class="text" align="center">
                                <asp:UpdatePanel ID="upNotification" runat="server">
                                    <ContentTemplate>
                                        <asp:Label ID="lblMsgNotificacionMaster" runat="server">Por favor oprima el botón para Continuar</asp:Label>
                                    </ContentTemplate>
                                </asp:UpdatePanel>
                            </td>
                        </tr>
                        <tr style="height: 20px">
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <asp:LinkButton ID="lnkContinuarMaster" runat="server" Text="Continuar" CausesValidation="false"></asp:LinkButton>
                            </td>
                        </tr>
                    </table>
                </asp:Panel>
            </td>
        </tr>
    </table>
            </div>
        </div>

    <asp:Panel ID="PnlMsg" runat="server"  Width="100%"></asp:Panel> 
</asp:Content>
