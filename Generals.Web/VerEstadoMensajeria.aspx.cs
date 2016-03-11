using System;
using System.Collections.Generic;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;
using System.Collections;
namespace Generals.Web
{
    public partial class VerEstadoMensajeria : PaginaBase
    {

        BllMensajeria.Mensajeria Mensa = new BllMensajeria.Mensajeria();
        BllDocumentos.Documentos Doc = new BllDocumentos.Documentos();
        BllBitacora.Bitacora ObjGrabarBit = new BllBitacora.Bitacora();
        static ArrayList ar = new ArrayList();
        static ArrayList ac = new ArrayList();
        BllActas.Actas Acta = new BllActas.Actas();
        //instancia de la clase bitacora 
      
        protected void Page_Load(object sender, EventArgs e)
        {
            try 
            {
                if (!IsPostBack)
                {
                    ValidarAutorizacion();
                    Session["Titulo"] = " Ver Estado de  Acta De Mensajeria"; 
                    FillMensajeria();                    
                    
                }
            }
            catch (Exception ex) 
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg,Constantes.Fallo);
            }
        }
        protected void BuscarActa(string acta)
        {
            try
            {
              
            }
            catch (Exception ex)
            {

                throw;
            }
        } 
   
        private void FillMensajeria() 
        {
            try 
            {
                Session["ListMensajeria"] = BllMensajeria.GetActas(Session["acta"].ToString());
               
                if (!string.IsNullOrEmpty(Session["ListMensajeria"].ToString())) 
                {
                    GridActas.DataSource = (List<BllMensajeria.Mensajeria>)Session["ListMensajeria"];
                    GridActas.DataBind();
                }
            }
            catch (Exception ex) 
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg,Constantes.Fallo);
                Log.EscribirError(ex); 
            }
        }

        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            try 
            { 
                Metodos.CleanControl(this.Controls); 
             
               
            }
            catch (Exception ex)
            { 
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorLimpiando, PnlMsg,Constantes.Fallo);
            }
        }          

        protected void GridActas_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try 
            {
                GridActas.PageIndex = e.NewPageIndex;
                GridActas.DataSource = (List<BllMensajeria.Mensajeria>)Session["ListMensajeria"];
                GridActas.DataBind();
            }
            catch (Exception ex) { Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg,Constantes.Fallo); }
        }
                    
        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {
                Session["ListMensajeria"] = BllMensajeria.GetMensXValor(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListMensajeria"].ToString()))
                {
                    GridActas.DataSource = (List<BllMensajeria.Mensajeria>)Session["ListMensajeria"];
                    GridActas.DataBind();
                }
                else
                {
                    Metodos.divMensaje(Constantes.Warning, Constantes.noRegistros, PnlMsg, Constantes.Advertencia);
                    FillMensajeria();
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Advertencia);
            }
        }

        protected void GridActas_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void GridBitacora_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            try
            {
               
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlGuardar, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void ChkSelectTodos_CheckedChanged(object sender, EventArgs e)
        {
            try
            {
                CheckBox ch = (CheckBox)(sender);
                if (ch.Checked)
                {
                    foreach (GridViewRow gvr in GridActas.Rows)
                    {
                        CheckBox chi = (CheckBox)(gvr.FindControl("ChkSelect"));
                        chi.Checked = true;
                        ar.Add(gvr.Cells[1].Text);
                    }
                }
                else
                {
                    foreach (GridViewRow gvr in GridActas.Rows)
                    {
                        CheckBox chi = (CheckBox)(gvr.FindControl("ChkSelect"));
                        chi.Checked = false;
                        ar.Remove(gvr.Cells[1].Text);
                    }
                }
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        protected void ChkSelect_CheckedChanged(object sender, EventArgs e)
        {
            try
            {
                CheckBox ch = (CheckBox)(sender);
                // Naming container me da la referencia de donde esta el control seleccionado
                GridViewRow row = (GridViewRow)ch.NamingContainer;

                if (ch.Checked)
                {
                    ar.Add(GridActas.Rows[row.RowIndex].Cells[1].Text);
                    
                }
                else
                {
                    ar.Remove(GridActas.Rows[row.RowIndex].Cells[1].Text);
                   
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

     

   

 
     

    }
}