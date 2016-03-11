using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace Generals.Web
{
    public partial class UnicomCodContrata : PaginaBase
    {
        public string Uni;
        public string DescUni;
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    ValidarAutorizacion();
                    Session["Titulo"] = "Contrata Unicom";
                    if (Session["Uni"] != null)
                    {
                        Uni = Session["Uni"].ToString();
                    }
                    else
                    {
                        Uni = "0";
                    }
                    lbltitle.Text = BllUnicom.GetUnicom(Uni).Nombre_Unicom;
                    lbldeta.Text = lbltitle.Text;
                   // FillUnicom(Uni);
                    FillCodContrataUnicom(Uni);
                    FillCodContrata();
                }
                else
                {
                    if (Session["Uni"] != null)
                    {
                        Uni = Session["Uni"].ToString();
                    }
                    else
                    {
                        Uni = "0";
                    }
                }
            }
            catch (Exception ex)
            {
                mensaje(Constantes.errorGeneral); Log.EscribirError(ex);
            }
        }

        private void FillCodContrataUnicom(string unicom)
        {
            try
            {
                if (Uni == "0")
                {
                    Session["ListCodContrata"] = BllCodContrataUnicom.MostarTodos();
                    if (!string.IsNullOrEmpty(Session["ListCodContrata"].ToString()))
                    {
                        GridCodContrata.DataSource = (List<BllCodContrataUnicom.CodContrataUnicom>)Session["ListCodContrata"];
                        GridCodContrata.DataBind();
                    }
                }
                else
                {
                    Session["ListCodContrata"] = BllCodContrataUnicom.GetUnicomXCodi(Uni);
                    if (!string.IsNullOrEmpty(Session["ListCodContrata"].ToString()))
                    {
                        GridCodContrata.DataSource = (List<BllCodContrataUnicom.CodContrataUnicom>)Session["ListCodContrata"];
                        GridCodContrata.DataBind();
                    }
                }
            }
            catch (Exception ex)
            {
                mensaje(Constantes.ErrorAlCargarGrid);

                Log.EscribirError(ex);
            }
        }
        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                BllCodContrataUnicom.CodContrataUnicom ObjGrabar = new BllCodContrataUnicom.CodContrataUnicom();
                if (TxtCodigo.Text == "")
                {
                   
                    ObjGrabar.Unicom = (Uni);
                    ObjGrabar.CodContrata = (CmbContrata.SelectedValue);
                    if (BllCodContrataUnicom.ExistUniCon(Uni,CmbContrata.SelectedValue) == 0)
                    {                      
                        long r = ObjGrabar.Insert();
                        if (r > 0)
                        {
                            Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                            TxtCodigo.Text = r.ToString().PadLeft(5, '0');
                            FillCodContrataUnicom(Uni);
                            updateGrid.Update();
                            updateGrid.Update();
                            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                        }
                    }
                    else
                    {
                        Metodos.divMensaje(Constantes.Warning, Constantes.Existe, PnlMsg, Constantes.Ok);
                        updateGrid.Update();
                        updateGrid.Update();
                        FillCodContrataUnicom(Uni);
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                    }                   

                }
                else
                {
                    if (BllCodContrataUnicom.Exist(TxtCodigo.Text) ==1)
                    {
                        ObjGrabar = BllCodContrataUnicom.GetCodContrataUnicom(TxtCodigo.Text);                       
                        ObjGrabar.Unicom = (Uni);
                        ObjGrabar.CodContrata = (CmbContrata.SelectedValue);
                        long r = ObjGrabar.Update();
                        if (r > 0)
                        {
                            Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                            FillCodContrataUnicom(Uni);
                            updateGrid.Update();
                            updateGrid.Update();
                            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                        }
                    }
                    else
                    {

                    }
                }     

            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);

            }
        }

        protected void FillCodContrata()
        {
            try
            {
                CmbContrata.DataSource = BllCodContrata.MostarTodos();
                CmbContrata.DataTextField = "NOM_CTRAT";
                CmbContrata.DataValueField = "COD_CTRAT";
                CmbContrata.DataBind();
            }
            catch (Exception ex)
            {
                
               Log.EscribirError(ex);
            }
        }

        //protected void FillUnicom(string unicom)
        //{
        //    try
        //    {
        //        if (unicom == "0")
        //        {
        //            CmbUnicom.DataSource = BllUnicom.MostarTodos();
        //            CmbUnicom.DataTextField = "Nombre_Unicom";
        //            CmbUnicom.DataValueField = "UnicId";
        //            CmbUnicom.DataBind();
        //        }
        //        else 
        //        {
        //            CmbUnicom.DataSource = BllUnicom.CargarGridView(unicom);
        //            CmbUnicom.DataTextField = "Nombre_Unicom";
        //            CmbUnicom.DataValueField = "UnicId";
        //            CmbUnicom.DataBind();
        //        }
                
               
        //    }
        //    catch (Exception ex)
        //    {

        //        Log.EscribirError(ex);
        //    }
        //}
        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllCodContrataUnicom.CodContrataUnicom Row = new BllCodContrataUnicom.CodContrataUnicom();   
                    List<BllCodContrataUnicom.CodContrataUnicom> Rows = new List<BllCodContrataUnicom.CodContrataUnicom>();  
                    Rows = (List<BllCodContrataUnicom.CodContrataUnicom>)Session["ListCodContrata"];                  

                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtCodigo.Enabled = false;

                        TxtCodigo.Text = Row.Id.ToString();
                        Uni = Row.Unicom.ToString();
                        CmbContrata.SelectedValue = Row.CodContrata.ToString();
                        UpdateNew.Update();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);


                    }
                }
            }
            catch (Exception ex) { mensaje(Constantes.ErrorAlConsultarDatos); }
        }

        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            try 
            {
                CleanControl(
                this.Controls); TxtCodigo.Enabled = true;
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
            catch (Exception ex)
            {
                mensaje(Constantes.ErrorLimpiando); UpdateNew.Update();
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
        }

        protected void BtnCerrar_Click(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
        }

        protected void GridCargos_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridCodContrata.PageIndex = e.NewPageIndex;
                GridCodContrata.DataSource = (List<BllCodContrataUnicom.CodContrataUnicom>)Session["ListCodContrata"];
                GridCodContrata.DataBind();
            }
            catch (Exception ex) { mensaje(Constantes.ErrorAlCargarGrid); }
        }

        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {

                Session["ListCodContrata"] = BllCodContrataUnicom.GetCodContrataUnicomXCodi(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListCodContrata"].ToString()))
                {
                    GridCodContrata.DataSource = (List<BllCodContrataUnicom.CodContrataUnicom>)Session["ListCodContrata"];
                    GridCodContrata.DataBind();
                    updateGrid.Update();
                }
                else
                {
                    mensaje(Constantes.noRegistros);
                    FillCodContrata();
                    updateGrid.Update();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        protected void GridCodContrata_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void BtnCerrarPag_Click(object sender, EventArgs e)
        {
            try
            {
                if (Session["pagAnterior"] != null)
                {
                    Response.Redirect(Session["pagAnterior"].ToString());
                }
                else
                {
                    Response.Redirect("Default.aspx");
                }
            }
            catch (Exception ex)
            {
                
                throw;
            }
        }

        protected void BtnEliminar_Command(object sender, CommandEventArgs e)
        {

        }
    }
}