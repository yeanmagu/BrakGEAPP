using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.framework.Exceptions;
using Generals.business.UserEntities;
using Generals.business.Common;
using System.Drawing;

namespace Generals.Web
{
    public partial class GestionBandejas : PaginaBase
    {
        static ArrayList ar = new ArrayList();
        int actas = 0;
        BllEstadosActas.EstadosActas B = new BllEstadosActas.EstadosActas();
        BllActas.Actas A = new BllActas.Actas();
        BllActas.Actas Row = new BllActas.Actas();
        static List<BllBandejas.Bandejas> Band = new List<BllBandejas.Bandejas>();
        List<BllActas.Actas> ListRows = new List<BllActas.Actas>();
        List<BllActas.Actas> Rows = new List<BllActas.Actas>();
        BllConfiguracion.Configuracion Co = new BllConfiguracion.Configuracion();
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Gestion De Bandejas ";
                    if (Request.QueryString["bandeja"] != null)
                    {
                        buscarusuario();
                        PnlBandeja.Visible = true;
                    }
                    else
                    {
                        if (Usuario.id_rol!=10)
                        {
                            PnlBandeja.Visible = false;
                            TipoBandejas();
                        }
                        else
                        {
                            buscarusuario();
                            PnlBandeja.Visible = true;
                        }        
                        
                    }
                    Co = BllConfiguracion.GetConfiguracion();

                }
                else
                {
                    ListRows = (List<BllActas.Actas>)Session["ListActas"];
                    Rows = (List<BllActas.Actas>)Session["ListActas"];
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
        protected void TipoBandejas()
        {
            try
            {

                var s = BllActas.ActasXTipoBandeja(Usuario.username);
                foreach (var item in s)
                {
                    Metodos.crearTipoBandeja(item.DescEsta, item._number.ToString(), PnlAdmin, item.Id);
                }
                Metodos.crearDelegacion("Mostrar Todas Las Bandejas", "0", PnlAdmin, "0");

               
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza("Ha Ocurrido un error tratando de buscar tipo de bandejas");
            }
        }
        //*consigue el rol del usuario logueado para cargar la bandeja*/
        protected void buscarusuario()
        {
            //try
            //{
                if (Usuario.id_rol == 3)
                {
                    lblBandeja.Text = BllBandejas.Getuser(Usuario.username).BandDesc;

                    Fillgestor();
                }
                else if (Usuario.id_rol == 10017)
                {
                    FillCoordinador();
                    Band = BllBandejas.GetBanCoordinador(Usuario.username);
                    fillEstados();
                    FillBandeja();
                }
                else if (Usuario.id_rol == 10)
                {
                    FillAdmin();
                    fillEstados();
                }
            //}
            //catch (Exception ex)
            //{
            //    Log.EscribirError(ex);
            //}
        }
        protected void FillCoordinador()
        {
            //try
            //{
                if (Request.QueryString["id"] != null)
                {
                    if (Request.QueryString["id"].ToString() != "0")
                    {
                        lblBandeja.Text = "Mostrando Actas Por Bandeja : " + BllBandejas.GetCargo(int.Parse(Request.QueryString["id"].ToString())).BandDesc;
                        fillActasXBadeja(Request.QueryString["id"].ToString());
                        //fillBandejas("000");
                    }
                    else
                    {
                        fillActasXBadeja("0");
                    }

                    fillTipoBandeja();

                }
                else
                {
                    fillActasPorCoordinador(Usuario.username);
                    fillBandejas("000");
                }
            //}
            //catch (Exception)
            //{

            //    throw;
            //}
        }
        protected void Fillgestor()
        {
            try
            {
                if (Request.QueryString["id"] != null)
                {
                    lblBandeja.Text = "Mostrando Actas Por Estado : " + BllEstadosActas.GetEstadosActas(int.Parse(Request.QueryString["id"].ToString())).EsAcDesc;
                    fillActasXBadeja(Request.QueryString["id"].ToString());
                    //fillBandejas("00");
                }
                else
                {
                    fillBandejas("00");
                    FillActas();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        protected void fillActasXEstado(string estad)
        {
            try
            {
                //Session["ListActas"] = BllActas.CargarBandeja(Usuario.username,estad);
                Rows = BllActas.CargarBandeja(Usuario.username, estad);
                if (Rows.Count() > 0/*!string.IsNullOrEmpty(Session["ListActas"].ToString())*/)
                {
                    GridActas.DataSource = Rows;// (List<BllActas.Actas>)Session["ListActas"];
                    GridActas.DataBind();
                    AsignarColorFondo();
                    //Rows = (List<BllActas.Actas>)Session["ListActas"];
                    ListRows = Rows;
                    Session["ListActas"] = ListRows;

                    fillBandejas("00");
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        protected void fillActasXBadeja(string estad)
        {
            try
            {
                if (estad != "0")
                {
                    ListRows = (List<BllActas.Actas>)Session["ListActas"];
                    Rows = (List<BllActas.Actas>)Session["ListActas"];
                    //Session["ListActas"] = BllActas.CargarXBandeja(estad);
                    //Rows = (List<BllActas.Actas>)Session["ListActas"]; ;
                    if (Usuario.id_rol == 3)
                    {
                        Rows = BllActas.CargarXBandejaGestorXEstado(int.Parse(estad.ToString()), Usuario.username); ;
                        fillBandejas("00");
                    }
                    else if (Usuario.id_rol == 10017)
                    {
                        Rows = BllActas.CargarXBandejaCoordinadorXEstado(estad, Usuario.username); ;
                        fillBandejas("000");
                    }
                    else
                    {
                        FillActas();
                        fillBandejas("0");
                    }

                }
                if (Rows.Count() > 0/*!string.IsNullOrEmpty(Session["ListActas"].ToString())*/)
                {
                    GridActas.DataSource = Rows;//(List<BllActas.Actas>)Session["ListActas"];
                    GridActas.DataBind();
                    AsignarColorFondo();
                    //  Rows = (List<BllActas.Actas>)Session["ListActas"];
                    ListRows = Rows;
                    Session["ListActas"] = ListRows;

                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        protected void fillActasPorCoordinador(string cor)
        {
            //try
            //{
                /*  Session["ListActas"] */
                Rows = BllActas.CargarBandejaCoordinador(cor);

                if (Rows.Count() > 0)
                {
                    GridActas.DataSource = Rows;
                    GridActas.DataBind();
                    AsignarColorFondo();
                    ListRows = Rows;
                    Session["ListActas"] = ListRows;
                }


            //}
            //catch (Exception)
            //{

            //    throw;
            //}
        }
        protected void FillAdmin()
        {
            try
            {
                if (Request.QueryString["id"] != null)
                {
                    if (Request.QueryString["id"].ToString() == "0")
                    {
                        lblBandeja.Text = "Mostrando Actas  ";
                        FillActas();
                        fillBandejas("0");

                    }
                    else if (Request.QueryString["id"].ToString() == "00")
                    {
                        FillActasSinDelegacion();
                        fillBandejas("0");
                    }
                    else
                    {
                        lblBandeja.Text = "Mostrando Bandejas Por Delegacion : " + MZonas.GetCargo(Request.QueryString["id"].ToString()).ZonaDesc;
                        Session["Del"] = Request.QueryString["id"].ToString();
                        fillActasXDelegaciones(Request.QueryString["id"].ToString());
                        fillBandejas(Request.QueryString["id"].ToString());

                    }
                }
                else if (Request.QueryString["idB"] != null)
                {
                    if (Request.QueryString["idB"].ToString() != "0")
                    {
                        lblBandeja.Text = "Mostrando Actas Por Bandeja : " + BllBandejas.GetCargo(int.Parse(Request.QueryString["idB"].ToString())).BandDesc;
                        fillActasXBandejas(Request.QueryString["idB"].ToString());
                        fillBandejas("0");

                    }
                    else if (Request.QueryString["idB"].ToString() == "0")
                    {
                        lblBandeja.Text = "Mostrando Actas  ";
                        FillActas();
                        fillBandejas("0");
                    }
                    else if (Request.QueryString["idBV"].ToString() == "0")
                    {
                        if (Session["Del"] != null)
                        {
                            lblBandeja.Text = "Mostrando Actas sin Bandeja Asignada";
                            fillActasXBandejasSinAsignar(Session["Del"].ToString()); fillBandejas("0");
                        }
                        else
                        {
                            FillActas();

                        }
                    }
                    else
                    {
                        FillActasSinDelegacion();
                        fillBandejas("0");
                    }
                }
                else
                {
                    lblBandeja.Text = "Actas Por Delegaciones";
                    fillBandejas("0");
                    FillActas();
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        private void FillActasSinDelegacion()
        {
            try
            {

                Rows = BllActas.ActasSindelegaciones();

                if (Rows.Count() > 0)
                {
                    GridActas.DataSource = Rows;
                    GridActas.DataBind();
                    AsignarColorFondo();
                    ListRows = Rows;
                    Session["ListActas"] = ListRows;
                }


            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        private void fillBandejas(string estilo)
        {
            try
            {
                if (estilo == "0")
                {
                    var s = BllActas.delegaciones();
                    foreach (var item in s)
                    {
                        Metodos.crearDelegacion(item.DescEsta, item._number.ToString(), PnlAdmin, item.Id);
                        actas += item._number;
                    }
                    Metodos.crearDelegacion("Mostrar Todas Las Bandejas", "0", PnlAdmin, "0");

                }
                else if (estilo == "00")
                {

                    var s = BllActas.ActasXEstado(Usuario.username);
                    foreach (var item in s)
                    {
                        Metodos.crearDelegacion(item.DescEsta, item._number.ToString(), PnlAdmin, item.Id);
                        actas += item._number;
                    }
                }
                else if (estilo == "000")
                {
                    var s = BllActas.BandeXCoord(Usuario.username);
                    foreach (var item in s)
                    {
                        Metodos.crearDelegacion(item.DescEsta + " Responsable : " + item.numeroLote, item._number.ToString(), PnlAdmin, item.Id);
                        actas += item._number;
                    }
                    Metodos.crearDelegacion("Mostrar Todas Las Bandejas", "0", PnlAdmin, "0");
                }
                else
                {
                    var s = BllActas.Bande(estilo);
                    foreach (var item in s)
                    {
                        Metodos.crearBandeja(item.DescEsta, item._number.ToString(), PnlAdmin, item.Id);
                        actas += item._number;
                    }
                    Metodos.crearBandeja("Mostrar Todas Las actas", "0", PnlAdmin, "0");

                }

                lblTotal.Text = "Total Actas : " + actas.ToString();
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        private void fillActasXBandejas(string estilo)
        {
            try
            {
                //Session["ListActas"] = BllActas.ActasXBande(estilo);
                Rows = BllActas.ActasXBande(estilo);
                //if (!string.IsNullOrEmpty(Session["ListActas"].ToString()))
                if (Rows.Count() > 0)
                {
                    GridActas.DataSource = Rows;// (List<BllActas.Actas>)Session["ListActas"];
                    GridActas.DataBind();
                    AsignarColorFondo();
                    ListRows = Rows;
                    Session["ListActas"] = ListRows;
                }
                //Rows = (List<BllActas.Actas>)Session["ListActas"];

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        private void fillActasXBandejasSinAsignar(string Dele)
        {
            try
            {
                //Session["ListActas"] = BllActas.ActasXBande(estilo);
                Rows = BllActas.ActasSinBandeja(Dele);
                // if (!string.IsNullOrEmpty(Session["ListActas"].ToString()))
                if (Rows.Count() > 0)
                {
                    GridActas.DataSource = Rows;// (List<BllActas.Actas>)Session["ListActas"];
                    GridActas.DataBind();
                    AsignarColorFondo();
                    ListRows = Rows;
                    Session["ListActas"] = ListRows;
                }
                //Rows = (List<BllActas.Actas>)Session["ListActas"];

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        private void fillActasXDelegaciones(string estilo)
        {
            try
            {
                // Session["ListActas"] = BllActas.CargarXDelegaciones(estilo);
                Rows = BllActas.CargarXDelegaciones(estilo);
                if (Rows.Count() > 0)
                {
                    GridActas.DataSource = Rows;// (List<BllActas.Actas>)Session["ListActas"];
                    GridActas.DataBind();
                    AsignarColorFondo();
                    ListRows = Rows;
                    Session["ListActas"] = ListRows;
                }
                //Rows = (List<BllActas.Actas>)Session["ListActas"];
                //ListRows = Rows;
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        private void FillActas()
        {
            try
            {
                //if (!string.IsNullOrEmpty(Session["Rol"].ToString()))
                if (Usuario.id_rol == 10)
                {

                    //Session["ListActas"] = BllActas.CargarGridView();
                    Rows = BllActas.CargarGridView();
                    //if (!string.IsNullOrEmpty(Session["ListActas"].ToString()))
                    //{
                    if (Rows.Count() > 0)
                    {
                        GridActas.DataSource = Rows;// (List<BllActas.Actas>)Session["ListActas"];
                        GridActas.DataBind();
                        AsignarColorFondo();
                        //  Rows = (List<BllActas.Actas>)Session["ListActas"];
                        ListRows = Rows;
                        Session["ListActas"] = ListRows;
                    }
                }

                else
                {

                    if (Usuario.id_rol == 3)
                    {

                        Rows = BllActas.CargarBandejaGestor(Usuario.username);


                    }
                    else
                    {
                        Rows = BllActas.CargarBandejaCoordinador(Usuario.username);
                    }

                    if (Rows.Count() > 0)
                    {
                        GridActas.DataSource = Rows;// (List<BllActas.Actas>)Session["ListActas"];
                        GridActas.DataBind();
                        AsignarColorFondo();

                        ListRows = Rows;
                        Session["ListActas"] = ListRows;

                    }
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    ListRows = (List<BllActas.Actas>)Session["ListActas"];
                    Rows = (List<BllActas.Actas>)Session["ListActas"];
                    Button bu = (Button)sender;
                    if (Rows.Exists(b => b._number.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = ListRows.Where(b => b._number.ToString() == e.CommandArgument.ToString()).First();
                        if (Usuario.id_rol == 3)
                        {

                            Session["acta"] = Row._number;
                            Response.Redirect(BllEstadosActas.GetEstadosActas(Row.EstadoActa).EsAcLink, false);

                        }
                        else
                        {
                            Session["acta"] = Row._number;
                            if (Row.EstadoActa == 11 && Usuario.IdRol != 10)
                            {
                                Response.Redirect("RevisarMensajeria.aspx", false);
                            }
                            else
                            {
                                Response.Redirect("VerDatosActa.aspx", false);
                            }
                        }
                    }

                }
            }
            catch (Exception ex) { Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlConsultarDatos, PnlMsg, Constantes.Fallo); Log.EscribirError(ex); }
        }

        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            try
            {
                Metodos.CleanControl(this.Controls);
                AsignarColorFondo();
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorLimpiando, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void BtnCerrar_Click(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
        }

        protected void GridActas_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                Rows = (List<BllActas.Actas>)Session["ListActas"];
                cargarActsPorBandeja();
                GridActas.PageIndex = e.NewPageIndex;
                GridActas.DataSource = Rows;
                GridActas.DataBind();
                AsignarColorFondo();
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
                if (TxtBusqueda.Text.Trim() != "*")
                {
                    ListRows = (List<BllActas.Actas>)Session["ListActas"];   
                    Rows = ListRows.Where(b => b._number.ToString().Contains(TxtBusqueda.Text) || b.nic.Contains(TxtBusqueda.Text)).ToList();

                    if (Rows.Count() > 0)
                    {
                        GridActas.DataSource = Rows;
                        GridActas.DataBind();
                        AsignarColorFondo();
                        Session["ListActas"] = ListRows;


                    }
                    else
                    {
                        FillActas();
                        Metodos.divMensaje(Constantes.Warning, Constantes.noRegistros, PnlMsg, Constantes.Advertencia);
                    }

                }
                else
                {
                    FillActas();

                }
                if (Usuario.id_rol == 10)
                {

                    fillBandejas("0");
                }

                else
                {

                    if (Usuario.id_rol == 3)
                    {
                        fillBandejas("00");

                    }
                    else
                    {
                        fillBandejas("000");
                    }
                }

            }
            catch (Exception ex)
            {

                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void GridActas_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
                int count = 0;
                for (int i = 0; i < ar.Count; i++)
                {
                    foreach (GridViewRow gvr in GridActas.Rows)
                    {
                        CheckBox chi = (CheckBox)(gvr.FindControl("ChkSelect"));
                        if (ar[i].ToString() == gvr.Cells[1].Text)
                        {
                            chi.Checked = true;
                            count += 1;
                        }
                    }
                    if (count == 10)
                    {
                        CheckBox cbh = (CheckBox)GridActas.HeaderRow.FindControl("ChkSelectAll");
                        cbh.Checked = true;
                    }
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
        protected void AsignarColorFondo()
        {
            try
            {
                foreach (GridViewRow dtgItem in this.GridActas.Rows)
                {

                    Button Btn = ((Button)GridActas.Rows[dtgItem.RowIndex].FindControl("BtnSelect"));
                    B = BllEstadosActas.GetEstadosActasXDesc(Btn.Text);
                    Btn.Text = B.EsAcDesc;
                    Btn.ForeColor = System.Drawing.ColorTranslator.FromHtml(B.EsAcCoTe);
                    Btn.BackColor = System.Drawing.ColorTranslator.FromHtml(B.EsAcCoFo);
                   // Session["ListActas"] = GridActas.Rows;
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void BtnRecha_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {

                    BllActas.Actas Acta = new BllActas.Actas();


                    if (Rows.Exists(b => b._number.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b._number.ToString() == e.CommandArgument.ToString()).First();
                        Acta = BllActas.GetActa(Row._number);

                    }
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlConsultarDatos, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }

        }

        protected void GridActas_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            try
            {
                if (e.Row.RowType == DataControlRowType.DataRow)
                {
                    A = BllActas.GetActa(int.Parse(e.Row.Cells[1].Text.ToString()));
                    string Protocolo = A.protocolo.ToString();
                    string Orden = A.osResuelta.ToString();

                    var Check = e.Row.FindControl("ChkSelect") as System.Web.UI.WebControls.CheckBox;
                    var image = e.Row.FindControl("Medidor") as System.Web.UI.WebControls.Image;
                    var image1 = e.Row.FindControl("Orden") as System.Web.UI.WebControls.Image;
                    var Lab = e.Row.FindControl("LblTiempo") as System.Web.UI.WebControls.Label;
                    //var LF = e.Row.FindControl("LblFecha") as System.Web.UI.WebControls.Label;

                    if (A.EstadoAnteriorActa == 5)
                    {
                        e.Row.BackColor = Color.Blue;
                        e.Row.ForeColor = Color.White;
                    }
                    e.Row.Cells[8].CssClass = "alineacion";
                    if (image != null)
                    {
                        if (Protocolo == "1")
                        {
                            image.ImageUrl = "~/images/pp.png";
                            image.ToolTip = "Pendiente  Protocolo";
                            if (A.FRAnticipado != null )
                            {
                                Check.Enabled = false;
                            }                            
                        }
                        else if (A.FRAnticipado != null)
                        {
                            image.ImageUrl = "~/images/LA.png";
                        }
                        else if (Protocolo == "2")
                        {
                            image.ImageUrl = "~/images/cp.png";
                            image.ToolTip = "Con Protocolo";
                        }
                       
                    }
                   

                    if (image1 != null)
                    {

                        if (Orden == "0")
                        {
                            image1.ImageUrl = "~/images/po.png";
                            image1.ToolTip = "Pendiente Orden de Servicio";
                            Check.Enabled = false;
                        }
                        else
                        {
                            image1.ImageUrl = "~/images/co.png";
                            image1.ToolTip = "Con Orden de Servicio";
                        }

                    }
                    Co = BllConfiguracion.GetConfiguracion();
                    // var ch = e.Row.FindControl("ChkSelectAll") as System.Web.UI.WebControls.CheckBox;
                    var Btn = e.Row.FindControl("BtnSelect") as System.Web.UI.WebControls.Button;
                    B = BllEstadosActas.GetEstadosActas(int.Parse(Btn.Text));
                    Btn.Text = B.EsAcDesc;
                    if (B.EsAcCoTe != null) { Btn.ForeColor = Color.FromName(B.EsAcCoTe); }
                    if (B.EsAcCoFo != null) { Btn.BackColor = Color.FromName(B.EsAcCoFo); }

                    Lab.Text = B.EsAcTiem.ToString();
                    string da = String.Format("{0:dd/MM/yyyy}", DateTime.Now.ToShortDateString());
                    TimeSpan t = DateTime.Parse(da) - DateTime.Parse(A._clientCloseTs.ToString());
                    int d = t.Days;
                    Lab.Text = d.ToString();


                    if (int.Parse(Lab.Text) < (Co.ConfTiMx))
                    {
                        e.Row.Cells[10].BackColor = Color.Green;
                        Lab.ForeColor = Color.White;
                    }
                    else if (int.Parse(Lab.Text) == (Co.ConfTiMx))
                    {
                        e.Row.Cells[10].BackColor = Color.Yellow;
                        Lab.ForeColor = Color.Black;
                    }
                    else if (int.Parse(Lab.Text) > (Co.ConfTiMx))
                    {
                        e.Row.Cells[10].BackColor = Color.Red;
                        Lab.ForeColor = Color.White;
                    }
                    if (DateTime.Parse(A._clientCloseTs.ToString()).ToShortDateString() == DateTime.Now.ToShortDateString())
                    {
                        e.Row.Cells[8].Text = "Hoy";
                    }
                    else
                    {
                        e.Row.Cells[8].Text += " - " + DateTime.Parse(A._clientCloseTs.ToString()).ToShortTimeString();
                    }
                    if (Usuario.id_rol == 3)
                    {
                        Check.Visible = false;
                        btnAsignat.Visible = false;
                        BtnManual.Visible = false;
                        Check.Enabled = false;
                        e.Row.Cells[0].Enabled = true;

                    }
                    else if (Usuario.id_rol == 10)
                    {
                        //Btn.Enabled = true;
                        PnlFiltro.Visible = true;
                        btnAsignat.Visible = false;
                        BtnManual.Visible = false;
                        Check.Visible = true;

                        //PnlReasginar.Visible = false;
                        // Btn.Enabled = false;
                        e.Row.Cells[0].Enabled = true;
                        // BtnManual.Visible = true;
                        e.Row.Cells[0].Enabled = true;
                    }

                    else
                    {
                        PnlFiltro.Visible = true;
                        btnAsignat.Visible = true;
                        Check.Visible = true;
                        // PnlReasginar.Visible = true;
                        //Btn.Enabled = false;
                        e.Row.Cells[0].Enabled = true;
                        BtnManual.Visible = true;
                    }
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }


        protected void ChkSelectAll_CheckedChanged(object sender, EventArgs e)
        {
            try
            {
                CheckBox ch = (CheckBox)(sender);
                if (ch.Checked)
                {
                    foreach (GridViewRow gvr in GridActas.Rows)
                    {
                        CheckBox chi = (CheckBox)(gvr.FindControl("ChkSelect"));
                        GridViewRow row = (GridViewRow)chi.NamingContainer;
                        A = BllActas.GetActa(int.Parse(gvr.Cells[1].Text));


                        if (A.protocolo != 1 && A.osResuelta != 0)
                        {
                            chi.Checked = true;
                            ar.Add(gvr.Cells[1].Text);

                        }


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
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
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
                    AsignarColorFondo();
                }
                else
                {
                    ar.Remove(GridActas.Rows[row.RowIndex].Cells[1].Text);
                    AsignarColorFondo();
                }
            }
            catch (Exception ex)
            {

                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void btnAsignat_Click(object sender, EventArgs e)
        {
            try
            {
                if (Usuario.id_rol == 10017)
                {
                    ArrayList lis = new ArrayList(); ;
                    foreach (GridViewRow dtgItem in this.GridActas.Rows)
                    {
                        CheckBox Btn = ((CheckBox)GridActas.Rows[dtgItem.RowIndex].FindControl("ChkSelect"));

                        if (Btn.Checked)
                        {
                            lis.Add(GridActas.Rows[dtgItem.RowIndex].Cells[1].Text);
                        }

                    }
                    if (lis.Count > 0)
                    {
                        int r = BllActas.ReasignarBandeja(lis, Usuario.username);
                        if (r > 0)
                        {
                            FillActas();
                            AsignarColorFondo();

                            Metodos.divMensaje(Constantes.Succes, "Guardados " + r.ToString() + " De " + ar.Count.ToString(), PnlMsg, Constantes.Ok);
                        }
                        else
                        {
                            FillActas();
                            AsignarColorFondo();
                            Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlGuardar, PnlMsg, Constantes.Ok);

                        }
                    }
                    else
                    {
                        Metodos.divMensaje(Constantes.Warning, "Seleccione Actas a Reasignar", PnlMsg, Constantes.Advertencia);
                    }

                }
                AsignarColorFondo();
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAsignando, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void cargarActsPorBandeja()
        {
            try
            {
                if (Usuario.id_rol == 10)
                {
                    fillBandejas("0");

                }
                else if (Usuario.id_rol == 3)
                {

                    fillBandejas("00");
                }
                else if (Usuario.id_rol == 10017)
                {
                    fillBandejas("000");
                }
            }
            catch (Exception EX)
            {
                Log.EscribirError(EX);
            }
        }

        protected void fillEstados()
        {
            try
            {
                CmbFiltro.DataSource = BllEstadosActas.CargarGridView();
                CmbFiltro.DataTextField = "EsAcDesc";
                CmbFiltro.DataValueField = "EsAcCodi";
                CmbFiltro.DataBind();
                CmbFiltro.Items.Insert(0, new ListItem("", "0"));
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarCombos + "Dropdown  Estados", PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
        protected void CmbFiltro_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {

                //Rows.Clear();
                // 
                if (CmbFiltro.SelectedValue != "0")
                {
                    FillActas();
                    Rows = ListRows.Where(b => b.EstadoActa == int.Parse(CmbFiltro.SelectedValue)).ToList();
                    if (Rows.Count() > 0)
                    {
                        GridActas.DataSource = Rows;
                        GridActas.DataBind();
                        fillBandejas("000");
                        Session["ListActas"] = Rows;
                    }
                    else
                    {
                        buscarusuario();
                        Metodos.divMensaje(Constantes.Warning, Constantes.noRegistros, PnlMsg, Constantes.Advertencia);
                    }

                }
                else
                {
                    buscarusuario();
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlConsultarDatos + "Filtrar Por Actas ", PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void CmbTipoBAnde_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAsignando, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void CmbBandeja_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
                FillActas();
                Rows = ListRows.Where(b => b.Bandeja == int.Parse(CmbBandeja.SelectedValue)).ToList();
                GridActas.DataSource = Rows;

                GridActas.DataBind();
                cargarActsPorBandeja();
                //fillBandejas("000");
                string tipo = BllBandejas.GetCargo(int.Parse(CmbBandeja.SelectedValue)).BandTiBa;
                cmbBandejaTras.DataSource = Band.Where(b => b.BandTiBa == tipo && b.BandCodi != int.Parse(CmbBandeja.SelectedValue)).ToList();
                cmbBandejaTras.DataBind();
                cmbBandejaTras.Items.Insert(0, new ListItem("", "0"));
                Session["ListActas"] = ListRows;

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void fillTipoBandeja()
        {
            try
            {

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void FillBandeja()
        {
            try
            {      
                CmbBandeja.DataSource = Band;
                CmbBandeja.DataTextField = "BandDesc";
                CmbBandeja.DataValueField = "BandCodi";
                CmbBandeja.DataBind();
                CmbBandeja.Items.Insert(0, new ListItem(" ", "0"));
                cmbBandejaTras.DataSource = Band;
                cmbBandejaTras.DataTextField = "BandDesc";
                cmbBandejaTras.DataValueField = "BandCodi";
                cmbBandejaTras.DataBind();
                cmbBandejaTras.Items.Insert(0, new ListItem(" ", "0"));
                //buscarusuario();
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        
        protected void BtnManual_Click(object sender, EventArgs e)
        {
            try
            {
                int re = 0;
                if (Usuario.id_rol == 10017)
                {
                    ArrayList lis = new ArrayList(); ;
                    foreach (GridViewRow dtgItem in this.GridActas.Rows)
                    {
                        CheckBox Btn = ((CheckBox)GridActas.Rows[dtgItem.RowIndex].FindControl("ChkSelect"));

                        if (Btn.Checked)
                        {
                            lis.Add(GridActas.Rows[dtgItem.RowIndex].Cells[1].Text);
                        }

                    }
                    if (lis.Count > 0)
                    {
                        foreach (var item in lis)
                        {
                            A = BllActas.GetActa(int.Parse(item.ToString()));
                            if (A.EstadoActa == 2 || A.EstadoActa == 1 || A.EstadoActa==5 )
                            {
                                re += A.ReasignacionAutomatica(int.Parse(item.ToString()), int.Parse(cmbBandejaTras.SelectedValue), Usuario.username);
                            }
                        }
                        AsignarColorFondo();
                        FillActas();
                        buscarusuario();
                        Metodos.divMensaje(Constantes.Succes, "Guardados " + re.ToString() + " De " + lis.Count.ToString(), PnlMsg, Constantes.Ok);
                    }

                }

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza("Error reasignando manualmente actas");
            }
        }

        protected void cbmfilltros_SelectedIndexChanged(object sender, EventArgs e)
        {
            try

            {
                FillActas();
                switch (cbmfilltros.SelectedIndex)
                {
                    case 0:
                        buscarusuario();
                        GridActas.DataSource = Rows;
                        GridActas.DataBind();
                        Session["ListActas"] = ListRows;
                        break;

                    case 1:
                        buscarusuario();

                        Rows = ListRows.Where(b => b.protocolo == 1).ToList();
                        GridActas.DataSource = Rows;
                        GridActas.DataBind();
                        Session["ListActas"] = ListRows;

                        break;

                    case 2:
                        buscarusuario();
                        Rows = ListRows.Where(b => b.osResuelta == 0).ToList();
                        GridActas.DataSource = Rows;
                        GridActas.DataBind();
                        Session["ListActas"] = ListRows;

                        break;
                }
            }
            catch (Exception ex)
            {
                Log.EscribirTraza("Error filtrando bandejas por Protocolo y PO");
                Log.EscribirError(ex);
            }
        }
    }
}