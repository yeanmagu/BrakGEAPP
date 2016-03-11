using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace Generals.Web
{
    public partial class Unicom : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    ValidarAutorizacion();
                    Session["Titulo"] = "Unicom";
                    FillUnicom();                     
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo); Log.EscribirError(ex);
            }
        }

        private void FillUnicom()
        {
            try
            {
                Session["ListUnicom"] = BllUnicom.MostarTodos();
                if (!string.IsNullOrEmpty(Session["ListUnicom"].ToString()))
                {
                    GridUnicom.DataSource = (List<BllUnicom.Unicom>)Session["ListUnicom"];
                    GridUnicom.DataBind();
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                Log.EscribirError(ex);
            }
        }
        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            try
            {



                BllUnicom.Unicom ObjGrabar = new BllUnicom.Unicom();
                if (TxtCodigo.Text != "")
                {
                    ObjGrabar.UnicId =(TxtCodigo.Text);
                    ObjGrabar.Nombre_Unicom = TxtNumMedidor.Text;    
                    if (BllUnicom.Exist(TxtCodigo.Text) == 0)
                    {                      
                        long r = ObjGrabar.Insert();
                        if (r > 0)
                        {
                            Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                            TxtCodigo.Text = r.ToString().PadLeft(5, '0');
                            FillUnicom();
                            updateGrid.Update();
                            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                        }
                        updateGrid.Update();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                    }
                    else
                    {
                      long r = ObjGrabar.Update();
                        if (r > 0)
                        {
                            Metodos.divMensaje(Constantes.Succes, Constantes.Actualizar, PnlMsg, Constantes.Ok);                              
                            FillUnicom();
                            updateGrid.Update();
                        }
                        updateGrid.Update();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                    }
                    
                }

                updateGrid.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);

            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
            }
        }


        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllUnicom.Unicom Row = new BllUnicom.Unicom();   
                    List<BllUnicom.Unicom> Rows = new List<BllUnicom.Unicom>();  
                    Rows = (List<BllUnicom.Unicom>)Session["ListUnicom"];                  

                    if (Rows.Exists(b => b.UnicId.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.UnicId.ToString() == e.CommandArgument.ToString()).First();
                        TxtCodigo.Enabled = false;
                        TxtCodigo.Text = Row.UnicId.ToString();
                        TxtNumMedidor.Text = Row.Nombre_Unicom;   
                        UpdateNew.Update();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);


                    }
                }
            }
            catch (Exception ex) 
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlConsultarDatos, PnlMsg, Constantes.Fallo);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
            }
        }

        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            try 
            {
                CleanControl(this.Controls); 
                TxtCodigo.Enabled = true; 
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorLimpiando, PnlMsg, Constantes.Fallo);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
            UpdateNew.Update();
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
        }

        protected void BtnCerrar_Click(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
        }

        protected void GridCargos_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridUnicom.PageIndex = e.NewPageIndex;
                GridUnicom.DataSource = (List<BllUnicom.Unicom>)Session["ListUnicom"];
                GridUnicom.DataBind();
            }
            catch (Exception ex)
            { 
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
            }
        }

        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {

                Session["ListUnicom"] = BllUnicom.GetAllUnicom(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListUnicom"].ToString()))
                {
                    GridUnicom.DataSource = (List<BllUnicom.Unicom>)Session["ListUnicom"];
                    GridUnicom.DataBind();
                    updateGrid.Update();
                }
                else
                {
                    Metodos.divMensaje(Constantes.Danger, Constantes.noRegistros, PnlMsg, Constantes.Fallo);
                    FillUnicom();
                    updateGrid.Update();
                   // UpdateNew.Update();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


     

        protected void BtnContra_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {

                        Session["Uni"] = e.CommandArgument.ToString();
                        //Session["pagAnterior"] = "unicom.aspx";
                        //string url = "UnicomCodContrata.aspx";
                        Response.Redirect("UnicomCodContrata.aspx",false);
                    
                }
            }
            catch (Exception ex)
            {
                
                Log.EscribirError(ex);
            }
        }

        protected void BtnEliminar_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "page")
                {
                    bool r = BllUnicom.Delete(e.CommandArgument.ToString());
                    if (r)
                    {
                        Metodos.divMensaje(Constantes.Succes, Constantes.Eliminado, PnlMsg, Constantes.Ok);
                        FillUnicom();
                        updateGrid.Update();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                    }
                    else
                    {
                        Metodos.divMensaje(Constantes.Danger, Constantes.ErrorEliminando, PnlMsg, Constantes.Fallo);
                        FillUnicom();
                        updateGrid.Update();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                    }
                }
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}