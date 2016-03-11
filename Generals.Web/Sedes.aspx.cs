using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.framework.Exceptions;
using Generals.business.UserEntities;
using Generals.business.Common;

namespace HGI2
{
    public partial class Sedes : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    FillSedes();
                }
            }
            catch (Exception ex) 
            {
                mensaje(Constantes.errorGeneral); Log.EscribirError(ex); 
            }
        }

        private void FillSedes() 
        {
            try 
            {
                Session["ListSedes"] = BllSedes.CargarGridView();
                if (!string.IsNullOrEmpty(Session["ListSedes"].ToString())) 
                {
                    GridSedes.DataSource = (List<BllSedes.Sedes>)Session["ListSedes"];
                    GridSedes.DataBind();
                }
            }
            catch (Exception ex) 
            {
                LanzarMensaje(Constantes.ErrorAlCargarGrid, TipoMensaje.Error);
                Log.EscribirError(ex); 
            }
        }
        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            try 
            {
                BllSedes.Sedes ObjGrabar = new BllSedes.Sedes();
                if(TxtCodigo.Text!="")
                if (BllSedes.Exist(TxtCodigo.Text) == 0) 
                {
                    ObjGrabar.SedeCodi = TxtCodigo.Text;
                    ObjGrabar.SedeNomb = TxtSede.Text;
                    ObjGrabar.SedeEsta = ChkActivo.Checked;
                    int r = ObjGrabar.Insert();
                    if (r > 0) 
                    {
                        mensaje(Constantes.Guardado);
                        FillSedes();
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
                    if (BllSedes.Exist(TxtCodigo.Text) == 1) 
                    {
                        BllSedes.Sedes ObjActualizar = new BllSedes.Sedes();
                        ObjActualizar.SedeCodi = TxtCodigo.Text;
                        ObjActualizar.SedeNomb = TxtSede.Text;
                        ObjActualizar.SedeEsta = ChkActivo.Checked;

                        int r = ObjActualizar.Update();
                        if (r > 0) 
                        {
                            FillSedes();
                            mensaje(Constantes.Actualizar);
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
                    BllSedes.Sedes Row = new BllSedes.Sedes();

                    List<BllSedes.Sedes> Rows = new List<BllSedes.Sedes>();

                    Rows = (List<BllSedes.Sedes>)Session["ListSedes"];
                    Session["CodigoActividad"] = e.CommandArgument;

                    if (Rows.Exists(b => b.SedeCodi.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.SedeCodi.ToString() == e.CommandArgument.ToString()).First();

                        TxtCodigo.Text = Row.SedeCodi;
                        TxtSede.Text = Row.SedeNomb;
                        ChkActivo.Checked = Row.SedeEsta;

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
                    BllSedes.Sedes Row = new BllSedes.Sedes();

                    List<BllSedes.Sedes> Rows = new List<BllSedes.Sedes>();

                    Rows = (List<BllSedes.Sedes>)Session["ListSedes"];
                    Session["CodigoActividad"] = e.CommandArgument;

                    if (Rows.Exists(b => b.SedeCodi.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.SedeCodi.ToString() == e.CommandArgument.ToString()).First();

                        Row.SedeEsta = false;
                        int r = Row.Desactivar();
                        if (r > 0)
                        {
                            FillSedes();
                            mensaje(Constantes.Eliminado);
                        }

                    }
                }
            }
            catch (Exception ex) { mensaje(Constantes.ErrorAlConsultarDatos); }
        }

        protected void BtnBuscar_Click(object sender, ImageClickEventArgs e)
        {
            try
            {
                Seleccionar();
            }
            catch (Exception ex) { mensaje(Constantes.errorGeneral); }
        }

        private void Seleccionar()
        {

            if (string.IsNullOrEmpty(TxtBusqueda.Text.Trim()))
            {
                TxtBusqueda.Focus();
                mensaje(Constantes.ParametroVacio);
                FillSedes();
                return;
            }
            switch (CmbBusqueda.SelectedIndex)
            {

                case 0:
                    try
                    {

                        List<BllSedes.Sedes> list = BllSedes.GetCargoXCodi(TxtBusqueda.Text.Trim());                       
                        if (list.Count() != 0)
                        {
                            GridSedes.DataSource = list;
                            GridSedes.DataBind();
                        }
                        else
                        {
                            mensaje(Constantes.noRegistros);
                            FillSedes();
                        }
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }

                    break;


                case 1:

                    try
                    {

                        List<BllSedes.Sedes> list = BllSedes.GetCargoXNombre(TxtBusqueda.Text.Trim());
                        CleanControl(this.Controls);
                        if (list.Count() != 0)
                        {
                            GridSedes.DataSource = list;
                            GridSedes.DataBind();
                        }
                        else
                        {
                            mensaje(Constantes.noRegistros);
                            FillSedes();
                        }
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }
                    break;
            }
        }

        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            try { CleanControl(this.Controls); }
            catch (Exception ex) { mensaje(Constantes.ErrorLimpiando); }
        }

        protected void BtnCerrar_Click(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
        }

        protected void GridSedes_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridSedes.PageIndex = e.NewPageIndex;
                GridSedes.DataSource = (List<BllSedes.Sedes>)Session["ListSedes"];
                GridSedes.DataBind();
            }
            catch (Exception ex) { mensaje(Constantes.ErrorAlCargarGrid); }
        }
    }
}