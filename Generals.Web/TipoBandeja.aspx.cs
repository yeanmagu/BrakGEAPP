using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace Generals.Web
{
    public partial class TipoBandeja : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try 
            {
                if (!IsPostBack)
                {
                    ValidarAutorizacion();
                    Session["Titulo"] = "Tipo de Bandeja";
                    FillTipoBandeja();
                }
            }
            catch (Exception ex) 
            {
                mensaje(Constantes.errorGeneral); Log.EscribirError(ex); 
            }
        }

        private void FillTipoBandeja() 
        {
            try 
            {
                Session["ListTipoBandeja"] = BllTipoBandeja.CargarGridView();
                if (!string.IsNullOrEmpty(Session["ListTipoBandeja"].ToString())) 
                {
                    GridTipoBandeja.DataSource = (List<BllTipoBandeja.TipoBandeja>)Session["ListTipoBandeja"];
                    GridTipoBandeja.DataBind();
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
                BllTipoBandeja.TipoBandeja ObjGrabar = new BllTipoBandeja.TipoBandeja();
                if(TxtCodigo.Text!="")
                if (BllTipoBandeja.Exist(TxtCodigo.Text) == 0) 
                {
                    ObjGrabar.TiBaCodi = TxtCodigo.Text;
                    ObjGrabar.TiBaDesc = TxtTipo.Text;
                    ObjGrabar.TiBaEsta = ChkActivo.Checked;
                    int r = ObjGrabar.Insert();
                    if (r > 0) 
                    {
                        mensaje(Constantes.Guardado);
                        FillTipoBandeja();
                        updateGrid.Update();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                    }
                    else 
                    { 
                       mensaje(Constantes.ErrorAlGuardar);
                    }
                }
            }
            catch (Exception ex) 
            {
                mensaje(Constantes.errorGeneral); 
                
            }
        }

        protected void BtnModificar_Click(object sender, EventArgs e)
        {
            try 
            {
                if (TxtCodigo.Text != "") 
                {
                    if (BllTipoBandeja.Exist(TxtCodigo.Text) == 1) 
                    {
                        BllTipoBandeja.TipoBandeja ObjActualizar = new BllTipoBandeja.TipoBandeja();
                        ObjActualizar.TiBaCodi = TxtCodigo.Text;
                        ObjActualizar.TiBaDesc = TxtTipo.Text;
                        ObjActualizar.TiBaEsta = ChkActivo.Checked;

                        int r = ObjActualizar.Update();
                        if (r > 0) 
                        {
                            FillTipoBandeja();
                            mensaje(Constantes.Actualizar);
                            updateGrid.Update();
                            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                        }
                    }
                }
            }
            catch (Exception ex) { mensaje(Constantes.errorGeneral); }
        }

        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page") 
                {
                    BllTipoBandeja.TipoBandeja Row = new BllTipoBandeja.TipoBandeja();

                    List<BllTipoBandeja.TipoBandeja> Rows = new List<BllTipoBandeja.TipoBandeja>();

                    Rows = (List<BllTipoBandeja.TipoBandeja>)Session["ListTipoBandeja"];
                    Session["CodigoActividad"] = e.CommandArgument;

                    if (Rows.Exists(b => b.TiBaCodi.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.TiBaCodi.ToString() == e.CommandArgument.ToString()).First();
                        TxtCodigo.Enabled = false; 
                        TxtCodigo.Text = Row.TiBaCodi;
                        TxtTipo.Text = Row.TiBaDesc.ToString();
                        ChkActivo.Checked = Row.TiBaEsta;
                        UpdateNew.Update();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);

                    }
                }
            }
            catch (Exception ex) { mensaje(Constantes.ErrorAlConsultarDatos); }
        }

        protected void btneliminarGridView_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllTipoBandeja.TipoBandeja Row = new BllTipoBandeja.TipoBandeja();

                    List<BllTipoBandeja.TipoBandeja> Rows = new List<BllTipoBandeja.TipoBandeja>();

                    Rows = (List<BllTipoBandeja.TipoBandeja>)Session["ListTipoBandeja"];
                    Session["CodigoActividad"] = e.CommandArgument;

                    if (Rows.Exists(b => b.TiBaCodi.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.TiBaCodi.ToString() == e.CommandArgument.ToString()).First();

                        Row.TiBaEsta = false;
                        int r = Row.Desactivar();
                        if (r > 0)
                        {
                            FillTipoBandeja();
                            mensaje(Constantes.Eliminado);
                            updateGrid.Update();
                        }

                    }
                }
            }
            catch (Exception ex) { mensaje(Constantes.ErrorAlConsultarDatos); }
        }

        //protected void BtnBuscar_Click(object sender, EventArgs e)
        //{
        //    try
        //    {
        //        Seleccionar();
        //    }
        //    catch (Exception ex) { mensaje(Constantes.errorGeneral); }
        //}

      

       

        protected void GridTipoBandeja_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try 
            {
                GridTipoBandeja.PageIndex = e.NewPageIndex;
                GridTipoBandeja.DataSource = (List<BllTipoBandeja.TipoBandeja>)Session["ListTipoBandeja"];
                GridTipoBandeja.DataBind();
            }
            catch (Exception ex) { mensaje(Constantes.ErrorAlCargarGrid); }
        }

        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {
                Session["ListTipoBandeja"] = BllTipoBandeja.GetTipoBandejaXCodi(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListTipoBandeja"].ToString()))
                {
                    GridTipoBandeja.DataSource = (List<BllTipoBandeja.TipoBandeja>)Session["ListTipoBandeja"];
                    GridTipoBandeja.DataBind();
                    
                }
                else
                {
                    FillTipoBandeja();
                    mensaje(Constantes.noRegistros);
                    FillTipoBandeja();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}