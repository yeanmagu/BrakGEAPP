using System;
using Generals.business.Entities;
using Generals.business.UserEntities;
using Generals.business.Common;

namespace Generals.Web
{
    public partial class WebCambioClave : PaginaBase
    {
        #region "Constantes"
        public const string mensajeNoAutenticado = "Las credenciales ingresadas no son validas";
        public const string mensajeClaveAnterior = "La clave anterior no corresponde con la almacenada";
        public const string mensajeClaveConfirmacion = "La clave de confirmacion no corresponde con la nueva";
        public const string mensajeReseteo = "Una nueva clave ha sido enviada al correo electrónico";
        public const string mensajeNoUsuario = "No existe un usuario con los datos proporcionados";
        public const string mensajeClaveNueva = "La nueva clave debe ser diferente a la actual";
        #endregion
        protected void Page_Load(object sender, EventArgs e)
        {
            ControlCambio.AsignarBoton(btnCambioClave);
        }
        public Generals.Web.controls.CambioClave ControlCambio { get { return (Generals.Web.controls.CambioClave)CambioClave; } }

        protected void btnCambioClave_Click(object sender, EventArgs e)
        {
            try
            {
                if (Usuario != null)
                {
                    bool valido = true;
                    if (ControlCambio.Anterior != Usuario.password)
                    {
                        valido = false;
                        //LanzarMensaje(mensajeClaveAnterior, TipoMensaje.Error);
                        mensaje(mensajeClaveAnterior);
                    }
                    if (ControlCambio.Nueva != ControlCambio.Confirmada)
                    {
                        valido = false;
                        //LanzarMensaje(mensajeClaveConfirmacion, TipoMensaje.Error);
                        mensaje(mensajeClaveConfirmacion);
                    }
                    if (ControlCambio.Nueva == Usuario.password)
                    {
                        valido = false;
                        //LanzarMensaje(mensajeClaveNueva, TipoMensaje.Error);
                        mensaje(mensajeClaveNueva);
                    }
                    if (valido)
                    {
                        Users servicio = new Users();

                        Respuesta respuesta;
                        string clave = Usuario.password;
                        Usuario.password = ControlCambio.Nueva;
                        Usuario.changePassword = false;
                        respuesta = servicio.ActualizarUsuario(Usuario, 1);
                        if (respuesta.Id != 0)
                        {
                            Response.Redirect("default.aspx", false);
                        }
                        else
                        {
                            Usuario.password = clave;
                            Usuario.changePassword = true;
                            //LanzarMensaje(respuesta.Mensaje, TipoMensaje.Error);
                            mensaje(respuesta.Mensaje);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                mensaje(Constantes.errorGeneral);
                //LanzarMensaje(Constantes.errorGeneral, TipoMensaje.Error);
            }
        }
    }
}