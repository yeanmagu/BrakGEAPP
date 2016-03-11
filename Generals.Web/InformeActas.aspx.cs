using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;
using Generals.business.Data;

namespace Generals.Web
{
    public partial class InformeActas : PaginaBase
    {
        
        protected void Page_Load(object sender, EventArgs e)
        {
            try 
            {
                if (!IsPostBack)
                {
                    ValidarAutorizacion();
                    Session["Titulo"] = "Informe De Actas Por fechas";
                    lblTitle.Text = "Realizar Consulta";
                    FillDelegacion();
                }
            }
            catch (Exception ex) 
            {
                Log.EscribirError(ex);
            }
        }

        protected void FillDelegacion()
        {
            try
            {
                cmbdelegacion.DataSource = MZonas.CargarGridView();
                cmbdelegacion.DataTextField = "ZonaDesc";
                cmbdelegacion.DataValueField = "ZonaCodi";
                cmbdelegacion.DataBind();
                cmbdelegacion.Items.Insert(0, new ListItem("","0"));
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void BtnGenerar_Click(object sender, EventArgs e)
        {
            try
            {
                DataDataContext ctx = new DataDataContext();
                List<T> acta = new List<T>();
                Session["ListActas"] = ctx.Sp_InformeDeActas(DateTime.Parse(txtFechaInicial.Text), DateTime.Parse(TxtFechaFinal.Text), cmbdelegacion.SelectedValue).ToList();;
                Session["Fecha"] = " " + txtFechaInicial.Text + " - " + TxtFechaFinal.Text;
                lblActas.Text =  "Consulta Realizada con Éxito...!  " ;
                Response.Redirect("Exportar.aspx",false);
                lblActas.Visible = true;
            }
            catch (Exception ex)
            {
              Log.EscribirError(ex);
            }
        }

        private class T
        {
        }
    }
}