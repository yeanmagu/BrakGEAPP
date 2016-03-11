using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace Generals.Web
{
    public partial class TipoUsuario : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try 
            {
                if (!IsPostBack)
                {
                    ValidarAutorizacion();
                    Session["Titulo"] = "TipoUsuario";
                    FillTipoUsuario();
                }
            }
            catch (Exception ex) 
            {
                Metodos.divMensaje(Constantes.Warning, Constantes.errorGeneral, PnlMsg, Constantes.Fallo); Log.EscribirError(ex); 
            }
        }

        private void FillTipoUsuario() 
        {
            try 
            {
                Session["ListTipoUsuario"] = BllTipoUsuario.CargarGridView();
                if (!string.IsNullOrEmpty(Session["ListTipoUsuario"].ToString())) 
                {
                    GridTipoUsuario.DataSource = (List<BllTipoUsuario.TipoUsuario>)Session["ListTipoUsuario"];
                    GridTipoUsuario.DataBind();
                }
            }
            catch (Exception ex) 
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex); 
            }
        }

        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            try 
            {
                BllTipoUsuario.TipoUsuario ObjGrabar = new BllTipoUsuario.TipoUsuario();
                if (TxtCodigo.Text != "")
                {
                    if (BllTipoUsuario.Exist(TxtCodigo.Text) == 0)
                    {
                        ObjGrabar.TiUsCodi = TxtCodigo.Text;
                        ObjGrabar.TiUsDesc = TxtNombre.Text;                        
                        ObjGrabar.TiUsEsta = ChkActivo.Checked;
                        int r = ObjGrabar.Insert();
                        if (r > 0)
                        {
                            Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                            FillTipoUsuario();
                            updateGrid.Update();
                            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                        }
                        else
                        {
                            Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlGuardar, PnlMsg, Constantes.Fallo);
                        }
                    }
                    else
                    {
                        if (BllTipoUsuario.Exist(TxtCodigo.Text) == 1)
                        {
                            BllTipoUsuario.TipoUsuario ObjActualizar = new BllTipoUsuario.TipoUsuario();
                            ObjActualizar = BllTipoUsuario.GetCargo(TxtCodigo.Text);
                            ObjActualizar.TiUsDesc = TxtNombre.Text;
                            ObjActualizar.TiUsEsta = ChkActivo.Checked;
                            int r = ObjActualizar.Update();
                            if (r > 0)
                            {
                                FillTipoUsuario();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Actualizar, PnlMsg, Constantes.Ok);
                                updateGrid.Update();
                                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                            }
                        }
                    }
                }
               
            }
            catch (Exception ex) 
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                
            }
        }

     
        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page") 
                {
                    BllTipoUsuario.TipoUsuario Row = new BllTipoUsuario.TipoUsuario();

                    List<BllTipoUsuario.TipoUsuario> Rows = new List<BllTipoUsuario.TipoUsuario>();

                    Rows = (List<BllTipoUsuario.TipoUsuario>)Session["ListTipoUsuario"];
                    Session["CodigoActividad"] = e.CommandArgument;

                    if (Rows.Exists(b => b.TiUsCodi.ToString() == e.CommandArgument.ToString()))
                    {
                        BtnGuardar.Text = "Modificar";
                        Row = Rows.Where(b => b.TiUsCodi.ToString() == e.CommandArgument.ToString()).First();
                        TxtCodigo.Enabled = false; 
                        TxtCodigo.Text = Row.TiUsCodi;
                        TxtNombre.Text = Row.TiUsDesc;                  
                        ChkActivo.Checked = Row.TiUsEsta;
                        UpdateNew.Update();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);


                    }
                }
            }
            catch (Exception ex) { Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlConsultarDatos, PnlMsg, Constantes.Fallo); }
        }

        protected void btneliminarGridView_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllTipoUsuario.TipoUsuario Row = new BllTipoUsuario.TipoUsuario();

                    List<BllTipoUsuario.TipoUsuario> Rows = new List<BllTipoUsuario.TipoUsuario>();

                    Rows = (List<BllTipoUsuario.TipoUsuario>)Session["ListTipoUsuario"];
                    Session["CodigoActividad"] = e.CommandArgument;

                    if (Rows.Exists(b => b.TiUsCodi.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.TiUsCodi.ToString() == e.CommandArgument.ToString()).First();

                        Row.TiUsEsta = false;
                        int r = Row.Desactivar();
                        if (r > 0)
                        {
                            FillTipoUsuario();
                            Metodos.divMensaje(Constantes.Danger, Constantes.Eliminado, PnlMsg, Constantes.Ok);
                            updateGrid.Update();
                        }

                    }
                }
            }
            catch (Exception ex) { Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlConsultarDatos, PnlMsg, Constantes.Fallo); }
        }

        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            try 
            {
                CleanControl(this.Controls);
                TxtCodigo.Enabled = true;
                BtnGuardar.Text = "Guardar";
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true); 
            }
            catch (Exception ex) { mensaje(Constantes.ErrorLimpiando); }
            UpdateNew.Update();
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
        }

        //protected void BtnBuscar_Click(object sender, EventArgs e)
        //{
        //    try
        //    {
        //        Seleccionar();
        //    }
        //    catch (Exception ex) { mensaje(Constantes.errorGeneral); }
        //}

        

       
        protected void GridTipoUsuario_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try 
            {
                GridTipoUsuario.PageIndex = e.NewPageIndex;
                GridTipoUsuario.DataSource = (List<BllTipoUsuario.TipoUsuario>)Session["ListTipoUsuario"];
                GridTipoUsuario.DataBind();
            }
            catch (Exception ex) { Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo); }
        }

        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {
                Session["ListTipoUsuario"] = BllTipoUsuario.GetCargoXCodi(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListTipoUsuario"].ToString()))
                {
                    GridTipoUsuario.DataSource = (List<BllTipoUsuario.TipoUsuario>)Session["ListTipoUsuario"];
                    GridTipoUsuario.DataBind();
                }
                else
                {
                    FillTipoUsuario();
                    Metodos.divMensaje(Constantes.Warning, Constantes.noRegistros, PnlMsg, Constantes.Fallo);
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Warning, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }
    }
}