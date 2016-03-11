using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace Generals.Web
{
    public partial class TipoDocumento : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try 
            {
                if (!IsPostBack)
                {
                    ValidarAutorizacion();
                    Session["Titulo"] = "Tipo de Documentos";
                    FillTipoDocumento();
                }
            }
            catch (Exception ex) 
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex); 
            }
        }

        private void FillTipoDocumento() 
        {
            try 
            {
                Session["ListTipoDocumento"] = BllTipoDocumento.CargarGridView();
                if (!string.IsNullOrEmpty(Session["ListTipoDocumento"].ToString())) 
                {
                    GridTipoDocumento.DataSource = (List<BllTipoDocumento.TipoDocumento>)Session["ListTipoDocumento"];
                    GridTipoDocumento.DataBind();
                }
            }
            catch (Exception ex) 
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex); 
            }
        }
        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            try 
            {
                BllTipoDocumento.TipoDocumento ObjGrabar = new BllTipoDocumento.TipoDocumento();
                if(TxtCargo.Text!="")
                if (BllTipoDocumento.Existe(TxtCodigo.Text) == 0) 
                {
                    //ObjGrabar.TiDoCodi = TxtCodigo.Text;
                    ObjGrabar.TiDoDocu = TxtCargo.Text;
                    ObjGrabar.TiPoEsta = ChkActivo.Checked;
                    ObjGrabar.TiDoMens = chkmensajeria.Checked;
                    ObjGrabar.TiDoDele = chkDelete.Checked;
                    int r = ObjGrabar.Insert();
                    if (r > 0) 
                    {
                            Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                        FillTipoDocumento();
                        updateGrid.Update();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                    }
                    else 
                    {
                            Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlGuardar, PnlMsg, Constantes.Fallo);
                    }
                }
            }
            catch (Exception ex) 
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void BtnModificar_Click(object sender, EventArgs e)
        {
            try 
            {
                if (TxtCodigo.Text != "") 
                {
                    if (BllTipoDocumento.Exist(int.Parse(TxtCodigo.Text)) == 1)
                    {
                        BllTipoDocumento.TipoDocumento ObjActualizar = new BllTipoDocumento.TipoDocumento();
                        ObjActualizar.TiDoCodi = int.Parse(TxtCodigo.Text);
                        ObjActualizar.TiDoDocu = TxtCargo.Text;
                        ObjActualizar.TiPoEsta = ChkActivo.Checked;
                        ObjActualizar.TiDoMens = chkmensajeria.Checked;
                        ObjActualizar.TiDoDele = chkDelete.Checked;
                        int r = ObjActualizar.Update();
                        if (r > 0) 
                        {
                            FillTipoDocumento();
                            Metodos.divMensaje(Constantes.Succes, Constantes.Actualizar, PnlMsg, Constantes.Ok);
                            BtnGuardar.Visible = true;
                            updateGrid.Update();
                            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page") 
                {
                    BllTipoDocumento.TipoDocumento Row = new BllTipoDocumento.TipoDocumento();

                    List<BllTipoDocumento.TipoDocumento> Rows = new List<BllTipoDocumento.TipoDocumento>();

                    Rows = (List<BllTipoDocumento.TipoDocumento>)Session["ListTipoDocumento"];
                    Session["CodigoActividad"] = e.CommandArgument;

                    if (Rows.Exists(b => b.TiDoCodi.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.TiDoCodi.ToString() == e.CommandArgument.ToString()).First();
                        TxtCodigo.Enabled = false;
                        TxtCodigo.Text = Row.TiDoCodi.ToString();
                        TxtCargo.Text = Row.TiDoDocu;
                        chkmensajeria.Checked=Row.TiDoMens;
                        chkDelete.Checked=Row.TiDoDele;
                        ChkActivo.Checked = Row.TiPoEsta;
                        BtnGuardar.Visible = false;

                        UpdateNew.Update();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);

                    }
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void btneliminarGridView_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllTipoDocumento.TipoDocumento Row = new BllTipoDocumento.TipoDocumento();

                    List<BllTipoDocumento.TipoDocumento> Rows = new List<BllTipoDocumento.TipoDocumento>();

                    Rows = (List<BllTipoDocumento.TipoDocumento>)Session["ListTipoDocumento"];
                    Session["CodigoActividad"] = e.CommandArgument;

                    if (Rows.Exists(b => b.TiDoCodi.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.TiDoCodi.ToString() == e.CommandArgument.ToString()).First();

                        Row.TiPoEsta = false;
                        int r = Row.Desactivar();
                        if (r > 0)
                        {
                            FillTipoDocumento();
                            Metodos.divMensaje(Constantes.Danger, Constantes.Eliminado, PnlMsg, Constantes.Fallo);
                            updateGrid.Update();
                        }

                    }
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlConsultarDatos, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
       
        protected void GridTipoDocumento_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try 
            {
                GridTipoDocumento.PageIndex = e.NewPageIndex;
                GridTipoDocumento.DataSource = (List<BllTipoDocumento.TipoDocumento>)Session["ListTipoDocumento"];
                GridTipoDocumento.DataBind();
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {

                Session["ListTipoDocumento"] = BllTipoDocumento.GetCargoXCodi(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListTipoDocumento"].ToString()))
                {
                    GridTipoDocumento.DataSource = (List<BllTipoDocumento.TipoDocumento>)Session["ListTipoDocumento"]; ;
                    GridTipoDocumento.DataBind();
                }
                else
                {
                    FillTipoDocumento();
                    Metodos.divMensaje(Constantes.Warning, Constantes.noRegistros, PnlMsg, Constantes.Advertencia); ;

                }
            }
            catch (Exception ex)
            {
                Log.EscribirError( ex);
            }
        }
    }
}