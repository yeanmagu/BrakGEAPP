using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;
using System.Data;
using System.Globalization;

namespace Generals.Web
{
    public partial class RevisarMensajeria : PaginaBase
    {
        BllActa_Medidor.Acta_Medidor Med = new BllActa_Medidor.Acta_Medidor();
        BllDocumentos.Documentos Doc = new BllDocumentos.Documentos();
        List<BllAnomalias.Anomalias> An = new List<BllAnomalias.Anomalias>();
        List<BllMetodosAnomalia.MetodosAnomalia> Ma = new List<BllMetodosAnomalia.MetodosAnomalia>();
        BllMetodosAnomalia.MetodosAnomalia M = new BllMetodosAnomalia.MetodosAnomalia();
        public static BllActas.Actas act = new BllActas.Actas();
        BllTarifa.Tarifa ta = new BllTarifa.Tarifa();
        BllActa_Liquidacion.Acta_Liquidacion ObjGrabar = new BllActa_Liquidacion.Acta_Liquidacion();
        BllBitacora.Bitacora ObjGrabarBit = new BllBitacora.Bitacora();
        static List<BllAC_Sellos.AC_Sellos> Sellos = new List<BllAC_Sellos.AC_Sellos>();
        BllActas.Actas Acta = new BllActas.Actas();
        //instancia de la clase bitacora 
      
        protected void Page_Load(object sender, EventArgs e)
        {
            try 
            {
                if (!IsPostBack)
                {
                    ValidarAutorizacion();
                    if (Session["acta"] != null)
					{                       
                        Session["Titulo"] = " Ver Estado de  Acta De Mensajeria" + Session["acta"].ToString(); ;
                        BuscarActa(Session["acta"].ToString());                         
                        FillTipoDoc();
                      
					}
                    else
                    {
                        lblActa.Text = "0";
                    }
                    CargarCausas();


                }
                else
                {
                    Metodos.CargarImagenes(pnlAnomalias, act._number, 2, 0);
                    Metodos.CargarImagenes(pnlDoc1, act._number, 2, 1);
                }
            }
            catch (Exception ex) 
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg,Constantes.Fallo);
            }
        }
        protected void buscarprotocolo()
        {
            try
            {
                BllProtocolo.Protocolo Pro = new BllProtocolo.Protocolo();
                BllProtocolo con = new BllProtocolo();
                Pro = con.GetProtocoActa(act._number);
                nis.Text = Pro.Nis;
                ResultadoExactitud.Text = Pro.ResultadoExactitud;
                Fecha_Res_Exactitud.Text = Pro.Fecha_Res_Exactitud;
                TipoEnergia.Text = Pro.TipoEnergia;
                ResultadoPropieDialectrica.Text = Pro.ResultadoPropieDialectrica;
                ResultadoArranque.Text = Pro.ResultadoArranque;
                ResultadoEnsayoFuncioSinCarga.Text = Pro.ResultadoEnsayoFuncioSinCarga;
                ErrorPorcentual.Text = Pro.ErrorPorcentual;
                ErrorporcenEnEnergiaReactiva.Text = Pro.ErrorporcenEnEnergiaReactiva.ToString();
                codigoResponse.Text = Pro.codigoResponse;
                mensajeResponse.Text = Pro.mensajeResponse;
                NumCertificado.Text = Pro.NumCertificado;
                CodLaboratorio.Text = Pro.CodLaboratorio;
                Ensayo1Activa.Text = Pro.Ensayo1Activa.ToString();
                Incertidumbre1Activa.Text = Pro.Incertidumbre1Activa.ToString();
                Ensayo2Activa.Text = Pro.Ensayo2Activa.ToString();
                Incertidumbre2Activa.Text = Pro.Incertidumbre2Activa.ToString();
                Ensayo3Activa.Text = Pro.Ensayo3Activa.ToString();
                Incertidumbre3Activa.Text = Pro.Incertidumbre3Activa.ToString();
                Ensayo4Activa.Text = Pro.Ensayo4Activa.ToString();
                Incertidumbre4Activa.Text = Pro.Incertidumbre4Activa.ToString();
                Ensayo5Activa.Text = Pro.Ensayo5Activa.ToString();
                Incertidumbre5Activa.Text = Pro.Incertidumbre5Activa.ToString();
                Ensayo6Activa.Text = Pro.Ensayo6Activa.ToString();
                Incertidumbre6Activa.Text = Pro.Incertidumbre6Activa.ToString();
                Ensayo7Activa.Text = Pro.Ensayo7Activa.ToString();
                Incertidumbre7Activa.Text = Pro.Incertidumbre7Activa.ToString();

                Ensayo8Activa.Text = Pro.Ensayo8Activa.ToString();
                Incertidumbre8Activa.Text = Pro.Incertidumbre8Activa.ToString();


                Ensayo1Reactiva.Text = Pro.Ensayo1Reactiva.ToString();
                Incertidumbre1Reactiva.Text = Pro.Incertidumbre1Reactiva.ToString();
                Ensayo2Reactiva.Text = Pro.Ensayo2Reactiva.ToString();
                Incertidumbre2Reactiva.Text = Pro.Incertidumbre2Reactiva.ToString();
                Ensayo3Reactiva.Text = Pro.Ensayo3Reactiva.ToString();
                Incertidumbre3Reactiva.Text = Pro.Incertidumbre3Reactiva.ToString();
                Ensayo4Reactiva.Text = Pro.Ensayo4Reactiva.ToString();
                Incertidumbre4Reactiva.Text = Pro.Incertidumbre4Reactiva.ToString();
                Ensayo5Reactiva.Text = Pro.Ensayo5Reactiva.ToString();
                Incertidumbre5Reactiva.Text = Pro.Incertidumbre5Reactiva.ToString();
                Ensayo6Reactiva.Text = Pro.Ensayo6Reactiva.ToString();
                Incertidumbre6Reactiva.Text = Pro.Incertidumbre6Reactiva.ToString();
                Ensayo7Reactiva.Text = Pro.Ensayo7Reactiva.ToString();
                Incertidumbre7Reactiva.Text = Pro.Incertidumbre7Reactiva.ToString();
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void BuscarActa(string acta)
        {
            try
            {
                act = BllActas.GetActa(int.Parse(acta));
               TxtFechaCarga.Text = act.fechaCarga;
                _clientCloseTs.Text = act._clientCloseTs.ToString("dd/MM/yyyy", new CultureInfo("es-ES")) + " " + act._clientCloseTs.ToString("hh:mm:ss tt",
                  CultureInfo.InvariantCulture); ;
                Session["Titulo"] = "Ver Estado de  Acta De Mensajeria NIC:" + act.nic + " " + Session["acta"].ToString();
                TxtNroActa.Text = act._number.ToString();
                TxtNit.Text = act.nic;
                TxtEmpresa.Text = act.codigoEmpresa;
                TxtMatricula.Text = act.matriculaCT;
                TxtTipoCliente.Text = act.tipoCliente;
                TxtReferencia.Text = act.referenciaDireccion;
                txtEstrato.Text = act.estrato;
                TxtTipoVia.Text = act.tipoVia;
                TxtNroPuerta.Text = act.numeroPuerta;
                TxtCliente.Text = act.nombreTitularContrato.ToUpper()+ " "+ act.apellido1TitularContrato +" " + " " + act.apellido2TitularContrato;
                TxtCliente2.Text = act.nombreTitularContrato.ToUpper() + " " + act.apellido1TitularContrato + " " + " " + act.apellido2TitularContrato;
                TxtDireccion.Text = act.direccion.ToUpper();
                TxtTarifa.Text = act.codigoTarifa;
                TxtDepar.Text = act.departamento.ToUpper();
                //Txtacceso.Text = act.acceso;
                TxtMun.Text = act.municipio.ToUpper();
                TxtLocalidad.Text = act.localidad.ToUpper();
                TxtBarr.Text = act.calle.ToUpper();
                CmbtipoServicio.Text = act.tipoServicio.ToUpper();
                CmbtipoOrdenServicio.Text = act.tipoOrdenServicio.ToUpper();
                Txtcomentario1.Text = act.comentario1.ToUpper();
                Txtcomentario2.Text = act.comentario2.ToUpper();
                txtObserviacionGeneral.Text = act.observaciones;
                celularRecer.Text = act.telefonoMovilReceptorVisita;
                TxtTarifa2.Text = act.ValorTarifa.ToString();
                TxtValorECDF.Text = act.ValorEcdf.ToString();
                TelefonoFijoRece.Text = act.telefonoFijoReceptorVisita;
                AportaTesti.Text = act.aportaTestigo;
                SolicitaTecn.Text = act.solicitaTecnicoReceptorVisita;

                TxtTipoCenso.Text = act.tipoCenso;
                TxtCedulRce.Text = act.cedulaReceptorVisita;
                TxtEmailRece.Text = act.emailReceptorVisita;
                TxtRelacionrece.Text = act.relacionReceptorVisita;
                TxtNombreReceptor.Text = act.nombreReceptorVisita + " " + act.apellido1ReceptorVisita + " " + act.apellido2ReceptorVisita; ;
                TxtTotalCenso.Text = act.censoCargaInstalada.ToString() + "kWh";
                txtobservacionanomalia.Text = act.obsAnomalia;
                TxtCeduTec.Text = act.cedulaTecnico;
                TxtCeduTest.Text = act.cedulaTestigo;
                TxtTesti.Text = act.nombreTestigo + " " + act.apellido1Testigo + " " + act.apellido2Testigo;
                TxtTecnico.Text = act.nombreTecnico + " " + act.apellido1Tecnico + " " + act.apellido2Tecnico;
                TxtComte.Text = act.comteTecnico;
                TxtNroActa1.Text = act._number.ToString();
                TxtFechaActa.Text = act.fechaCarga.ToString();
                TxtDireccionSumi.Text = act.direccion.ToUpper();
                cedulaOperario.Text = act.cedulaOperario;
                nombreOperario.Text = act.nombreOperario;
                apellido1Operario.Text = act.apellido1Operario + " " + act.apellido2Operario;
                empresaOperario.Text = act.empresaOperario;_clientCloseTs.Text = act._clientCloseTs.ToShortDateString(); ;
                txtTar1.Text = String.Format("{0:C2}", (Math.Round(float.Parse(act.ValorTarifa.ToString()), 2)));
                if (act.EnergiaAnticipada != null)
                {
                    txtEcdAn.Text = (Math.Round(float.Parse(act.EnergiaAnticipada.ToString()), 2)).ToString();
                    txtTota1.Text = (act.EnergiaAnticipada * act.ValorTarifa).ToString();
                    txtTota1.Text = String.Format("{0:C2}", (Math.Round(float.Parse(txtTota1.Text), 2)));

                }
                TxtFr.Text = act.FRAnticipado;
                TxtMunicipio.Text = act.municipio.ToUpper();
                TxtNroAct.Text = act._number.ToString();
                Txtreside.Text = act.municipio.ToUpper();
                txtDuplicador.Text = act.duplicador;
                TxtPiso.Text = act.piso;
                Metodos.CargarImagenes(pnlAnomalias, act._number, 2, 0);
                Metodos.CargarImagenes(pnlDoc1, act._number, 2, 1);
                fillSellos(act._number.ToString());
                BuscarDatosMedidor(act._number);
                FillBitacora();
                FillDocumentos();
                fillanotaciones();
                FillAnomalias();
                FillCensoActas();
                fillanotaciones();
                BuscarLiqu();
                buscarProceso();
                CargarEmpresas(act.Delegacion);
                FillMateriales();
                FillTrabajos();
                buscarprotocolo();
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        private void FillMateriales()
        {
            try
            {
                GridMateriales.DataSource = BllMaterialeses.CargarGridView(act._number);
                GridMateriales.DataBind();
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid + " Materiales", PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
        private void FillTrabajos()
        {
            try
            {
                GridTrabajos.DataSource = BllTrabajosEjecutados.CargarGridView(act._number);
                GridTrabajos.DataBind();
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid + " GridTrabajos", PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
        protected void fillSellos(string acta)
        {
            try
            {
                Sellos = BllAC_Sellos.GetAC_SellosXNumeroActa(int.Parse(acta));
                GridSellos.DataSource = Sellos;
                GridSellos.DataBind();
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }
        protected void GriSellos_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridSellos.PageIndex = e.NewPageIndex;
                GridSellos.DataSource = Sellos;
                GridSellos.DataBind();
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }
        protected void BuscarDatosMedidor(int act)
        {
            try
            {
                Med = BllActa_Medidor.GetMedidorEncontrado(int.Parse(act.ToString()));



                numero.Text = Med.numero;
                TxtMedidor.Text = Med.numero;
                TxtMarcaMed.Text = Med.marca.ToUpper();
                marca.Text = Med.marca;
                tipoRevision.Text = Med.tipoRevision;
                tipo.Text = Med.tipo;
                tecnologia.Text = Med.tecnologia; lecturaUltimaFecha.Text = Med.lecturaUltimaFecha;
                lecturaUltima.Text = Med.lecturaUltima;
                lecturaActual.Text = Med.lecturaActual; kdkh_tipo.Text = Med.kdkh_tipo; kdkh_value.Text = Med.kdkh_value;
                digitos.Text = Med.digitos; decimales.Text = Med.decimales; nFases.Text = Med.nFases; voltajeNominal.Text = Med.voltajeNominal; rangoCorrienteMin.Text = Med.rangoCorrienteMin;
                rangoCorrienteMax.Text = Med.rangoCorrienteMax; corrienteN_mec.Text = Med.corrienteN_mec; corrienteFN_mec.Text = Med.corrienteFN_mec; voltageNT_mec.Text = Med.voltageNT_mec;
                voltageRS_mec.Text = Med.voltageRS_mec;
                voltageFNR_mec.Text = Med.voltageFNR_mec; voltageFTR_mec.Text = Med.voltageFTR_mec; corrienteR_mec.Text = Med.corrienteR_mec; voltageFNS_mec.Text = Med.voltageFNS_mec; voltageFTS_mec.Text = Med.voltageFTS_mec;
                corrienteS_mec.Text = Med.corrienteS_mec; pruebaAlta.Text = Med.pruebaAlta; voltageFNR_alta.Text = Med.voltageFNR_alta; corrienteR_alta.Text = Med.corrienteR_alta; vueltasR_alta.Text = Med.vueltasR_alta;
                voltageFNS_alta.Text = Med.voltageFNS_alta;
                corrienteS_alta.Text = Med.corrienteS_alta; vueltasS_alta.Text = Med.vueltasS_alta; tiempoR_alta.Text = Med.tiempoR_alta; errorPruebaR_alta.Text = Med.errorPruebaR_alta;
                errorPruebaS_alta.Text = Med.errorPruebaS_alta; pruebaBaja.Text = Med.pruebaBaja; voltageFNR_baja.Text = Med.voltageFNR_baja; corrienteR_baja.Text = Med.corrienteR_baja;
                vueltasR_baja.Text = Med.vueltasR_baja; tiempoR_baja.Text = Med.tiempoR_baja; voltageFNS_baja.Text = Med.voltageFNS_baja; corrienteS_baja.Text = Med.corrienteS_baja;
                vueltasS_baja.Text = Med.vueltasS_baja; tiempoS_baja.Text = Med.tiempoS_baja; errorPruebaR_baja.Text = Med.errorPruebaR_baja; pruebaDosificacion.Text = Med.pruebaDosificacion;
                voltageFNR_dosif.Text = Med.voltageFNR_dosif; corrienteR_dosif.Text = Med.corrienteR_dosif;
                lecturaInicialR_dosif.Text = Med.lecturaInicialR_dosif; lecturaFinalR_dosif.Text = Med.lecturaFinalR_dosif;
                errorPruebaR_dosif.Text = Med.errorPruebaR_dosif; giroNormal.Text = Med.giroNormal; rozamiento.Text = Med.rozamiento; medidorFrena.Text = Med.medidorFrena;
                estadoConexiones.Text = Med.estadoConexiones; continuidad.Text = Med.continuidad;
                pruebaPuentes.Text = Med.pruebaPuentes; display.Text = Med.display;
                estadoIntegrador.Text = Med.estadoIntegrador; retirado.Text = Med.retirado; envioLab.Text = Med.envioLab;
                envioLabNumCustodia.Text = Med.envioLabNumCustodia; propietario.Text = Med.propietario; numeroCertificadoCalibracion.Text = Med.numeroCertificadoCalibracion;
                laboratorio.Text = Med.laboratorio;
                protocolo.Text = Med.protocolo; resolucionAcreditacion.Text = Med.resolucionAcreditacion; resolucionFecha.Text = Med.resolucionFecha;

                voltageFNT_mec.Text = Med.voltageFNT_mec;
                voltageFTT_mec.Text = Med.voltageFTT_mec;
                corrienteT_mec.Text = Med.corrienteT_mec;
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
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
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
        protected void buscarProceso()
        {
            try
            {
                BllProcesoSimpli.ProcesoSimpli Pro = new BllProcesoSimpli.ProcesoSimpli();
                Pro = BllProcesoSimpli.GetPorceXActa(int.Parse(TxtNroActa.Text));
                TxtNroFactura.Text = Pro.NoFaProc;
                TxtRadicado.Text = Pro.NoRaPrec;
                TxtResulRe.Text = Pro.ReRePrec;
                TxtLabRe.Text = Pro.LaboProc;
                TxtAcredita.Text = Pro.AcreProc;
                TxtResolucion.Text = Pro.NoReProc;
                TxtNroCalibracion.Text = Pro.InCaPrec;
                FillRespuesta();
                //TxtAnomaRev.Text=Pro.
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void CargarEmpresas(string con)
        {
            try
            {
                CmbEmpresa.DataSource = BllEmpresaMensajeria.GetTEMensajeriaXZona(con);
                CmbEmpresa.DataTextField = "EmMeNomb";
                CmbEmpresa.DataValueField = "EmMeCodi";
                CmbEmpresa.DataBind();
                CmbEmpresa.Items.Insert(0, new ListItem("0"," "));
            }
            catch (Exception)
            {
                
                throw;
            }
        }
        private void FillAnomalias()
        {
            try
            {
                Session["ListAnomalias"] = BllAnomalias.CargarGridView(int.Parse(Session["acta"].ToString()));
                if (!string.IsNullOrEmpty(Session["ListAnomalias"].ToString()))
                {
                    GridAnomalias.DataSource = (List<BllAnomalias.Anomalias>)Session["ListAnomalias"];
                    GridAnomalias.DataBind();
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        private void FillCensoActas()
        {
            try
            {
                Session["ListCensoActas"] = BllCensoActas.CargarGridView(int.Parse(Session["acta"].ToString()));
                if (!string.IsNullOrEmpty(Session["ListCensoActas"].ToString()))
                {
                    GridCensoActas.DataSource = (List<BllCensoActas.CensoActas>)Session["ListCensoActas"];
                    GridCensoActas.DataBind();
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
       

        private void FillBitacora()
        {
            try
            {
                Session["ListBitacora"] = BllBitacora.CargarGridViewByActa(int.Parse(Session["acta"].ToString()));
                if (!string.IsNullOrEmpty(Session["ListBitacora"].ToString()))
                {
                    GridBitacora.DataSource = (List<BllBitacora.Bitacora>)Session["ListBitacora"];
                    GridBitacora.DataBind();
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
                    BllProcesoSimpli.ProcesoSimpli Row = new BllProcesoSimpli.ProcesoSimpli();

                    List<BllProcesoSimpli.ProcesoSimpli> Rows = new List<BllProcesoSimpli.ProcesoSimpli>();

                    Rows = (List<BllProcesoSimpli.ProcesoSimpli>)Session["ListProcesoSimpli"];
                    Session["CodigoActividad"] = e.CommandArgument;

                    if (Rows.Exists(b => b.CodiProc.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.CodiProc.ToString() == e.CommandArgument.ToString()).First();
                        TxtCodigo.Enabled = false ; 
                        TxtCodigo.Text = Row.CodiProc.ToString().PadLeft(5,'0');
                        TxtNroFactura.Text = Row.NoFaProc.ToString().PadLeft(5, '0');
                        TxtNroActa1.Text = Row.NoAcProc.ToString();
                        TxtMedidor.Text = Row.NoMeProc;
                        TxtMarcaMed.Text = Row.MaMePrec;
                        TxtLabRe.Text = Row.LaboProc;
                        TxtAcredita.Text = Row.AcreProc;
                        TxtResolucion.Text = Row.NoReProc;
                        TxtNroCalibracion.Text = Row.InCaPrec;
                        TxtResulRe.Text = Row.ReRePrec;
                        //UpdateNew.Update();
                        //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);

                    }
                }
            }
            catch (Exception ex) { Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlConsultarDatos, PnlMsg,Constantes.Fallo); }
        }

    
       
        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            try 
            { 
                Metodos.CleanControl(this.Controls); 
                TxtCodigo.Enabled = true;
                //UpdateNew.Update();
                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
               
            }
            catch (Exception ex)
            { 
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorLimpiando, PnlMsg,Constantes.Fallo);
            }
        }

        

        protected void GridProcSimp_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try 
            {
                //GridProcSimp.PageIndex = e.NewPageIndex;
                //GridProcSimp.DataSource = (List<BllProcesoSimpli.ProcesoSimpli>)Session["ListProcesoSimpli"];
                //GridProcSimp.DataBind();
            }
            catch (Exception ex) { Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg,Constantes.Fallo); }
        }

        protected void GridBitacora_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridBitacora.PageIndex = e.NewPageIndex;
                GridBitacora.DataSource = (List<BllBitacora.Bitacora>)Session["ListBitacora"];
                GridBitacora.DataBind();
            }
            catch (Exception ex) { Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo); }
        }

        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {
                //Session["ListProcesoSimpli"] = BllProcesoSimpli.GetPersonXDoc(TxtBusqueda.Text.Trim());
                //if (!string.IsNullOrEmpty(Session["ListProcesoSimpli"].ToString()))
                //{
                //    GridProcSimp.DataSource = (List<BllProcesoSimpli.ProcesoSimpli>)Session["ListProcesoSimpli"];
                //    GridProcSimp.DataBind();
                //}
                //else
                //{
                //    Metodos.divMensaje(Constantes.Warning, Constantes.noRegistros, PnlMsg, Constantes.Advertencia);
                //    FillProcesoSimpli();
                //}
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Advertencia);
            }
        }

        protected void GridProcSimp_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void GridBitacora_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void gridDocume_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                gridDocume.PageIndex = e.NewPageIndex;
                gridDocume.DataSource = (List<BllDocumentos.Documentos>)Session["ListDocu"];
                gridDocume.DataBind();
            }
            catch (Exception ex) 
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo); 
            }
        }

        protected void BuscarLiqu()
        {
            try
            {

                string me = BllActa_Liquidacion.GetActaLiqu(int.Parse(TxtNroActa.Text)).AcLiMeLi;
                TxtMet.Text = BllMetodoLiquidacion.GetMetodoLiquidacion(me).MeLiNomb;
                TxtEcd.Text = (Math.Round(float.Parse(act.ValorEcdf.ToString()), 2)).ToString();
                TxtTar.Text = String.Format("{0:C2}", (Math.Round(float.Parse(act.ValorTarifa.ToString()), 2)));
                TxtTota.Text = (act.ValorEcdf * act.ValorTarifa).ToString();
                TxtTota.Text = String.Format("{0:C2}", (Math.Round(float.Parse(TxtTota.Text), 2)));
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void FillDocumentos()
        {
            try
            {
                Session["ListDocu"] = BllDocumentos.GetCargoXActa(int.Parse(Session["acta"].ToString()),"");
                if (!string.IsNullOrEmpty(Session["ListDocu"].ToString()))
                {
                    gridDocume.DataSource = (List<BllDocumentos.Documentos>)Session["ListDocu"];
                    gridDocume.DataBind();
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
        protected void gridDocume_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            try
            {

                if (e.Row.RowType == DataControlRowType.DataRow)
                {
                    var Link = e.Row.FindControl("LinkHGI") as System.Web.UI.WebControls.HyperLink;
                    BllDocumentos.Documentos D = (BllDocumentos.GetCargo((int.Parse(e.Row.Cells[0].Text.ToString()))));
                    var V = e.Row.FindControl("ImgVer") as System.Web.UI.WebControls.Image;
                    var S = e.Row.FindControl("ImgS") as System.Web.UI.WebControls.Image;
                    var C = e.Row.FindControl("chkVer") as System.Web.UI.WebControls.CheckBox;
                    var CV = e.Row.FindControl("ChkSin") as System.Web.UI.WebControls.CheckBox;
                    if (D.DocuVeri == "1")
                    {
                        V.Visible = true;
                    }
                    else
                    {
                        C.Visible = true;
                    }
                    if (D.DocuSincro == "1")
                    {
                        S.Visible = true;
                    }
                    else
                    {
                        CV.Visible = true;
                    }
                    if (Link.NavigateUrl != "")
                    {
                        Link.Visible = true;
                        Link.NavigateUrl = "Download.aspx?FileName=" + D.DocuCodi;
                        Link.Target = "_Blank";
                    }
                    else
                    {
                        Link.Visible = false;

                    }

                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        protected void ChkSin_CheckedChanged(object sender, EventArgs e)
        {
            try
            {

                //ScriptManager.RegisterStartupScript(this.Page, this.Page.GetType(),"err_msg","confirm('Esta seguro de confirmar este Documento)');",true);
                //llamada al evento jquery para mantener el tab
                CheckBox ch = (CheckBox)(sender);
                // Naming container me da la referencia de donde esta el control seleccionado
                GridViewRow row = (GridViewRow)ch.NamingContainer;

                if (ch.Checked)
                {
                    Doc = BllDocumentos.GetCargo(int.Parse(gridDocume.Rows[row.RowIndex].Cells[0].Text));
                    Doc.DocuSincro = "1";
                    Doc.Update();
                    FillDocumentos();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "revisar();", true);

                }
                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "revisar();", true);

            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }

        protected void chkVer_CheckedChanged(object sender, EventArgs e)
        {

            try
            {

                //ScriptManager.RegisterStartupScript(this.Page, this.Page.GetType(),"err_msg","confirm('Esta seguro de confirmar este Documento)');",true);
                //llamada al evento jquery para mantener el tab
                CheckBox ch = (CheckBox)(sender);
                // Naming container me da la referencia de donde esta el control seleccionado
                GridViewRow row = (GridViewRow)ch.NamingContainer;

                if (ch.Checked)
                {
                    Doc = BllDocumentos.GetCargo(int.Parse(gridDocume.Rows[row.RowIndex].Cells[0].Text));
                    Doc.DocuVeri = "1";
                    Doc.DocuUsVe = Usuario.username;
                    Doc.Update();
                    FillDocumentos();

                }
                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "revisar();", true);

            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }
        protected void GridMetodosAno_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridMetodosAno.PageIndex = e.NewPageIndex;
                GridMetodosAno.DataSource = (List<MCargos.Cargos>)Session["ListMetAnomalias"];
                GridMetodosAno.DataBind();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Succes, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                //mensaje(Constantes.ErrorAlCargarGrid); 
                Log.EscribirError(ex);
            }
        }
        protected void GridCargos_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridAnomalias.PageIndex = e.NewPageIndex;
                GridAnomalias.DataSource = (List<MCargos.Cargos>)Session["ListAnomalias"];
                GridAnomalias.DataBind();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
            }
            catch (Exception ex) { mensaje(Constantes.ErrorAlCargarGrid); }
        }
        protected void BtnSubir_Click(object sender, EventArgs e)
        {
            try
            {
                if (GuardarFirma())
                {
                    Doc = new BllDocumentos.Documentos();
                    Doc.DocuActa = int.Parse(Session["acta"].ToString());
                    Doc.DocuTiDo = int.Parse(CmbtipoDocumento.SelectedValue);
                    Doc.DocuFeCa = System.DateTime.Now;
                    Doc.DocuUsCa = Usuario.username;
                    Doc.DocuUrLo = lblImage.Text;
                    Doc.DocuSincro = "1";
                    Doc.DocuVeri = "1";
                    Doc.DocuUrRe = "";
                    Doc.DocuFeVe = System.DateTime.Now.ToString();
                    Doc.DocuUsVe = Usuario.username; ;

                    int r = Doc.Insert();
                    if (r > 0)
                    {
                        FillDocumentos();
                        Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                        lblImage.Text = "Seleccione Archivo";
                        Page.Response.Redirect(Page.Request.Url.ToString(), true);
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "revisar();", true);

                    }
                    else
                    {
                        Metodos.divMensaje(Constantes.Succes, Constantes.ErrorAlGuardar, PnlMsg, Constantes.Ok);
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "revisar();", true);
                    }

                }
                else
                {
                    Metodos.divMensaje(Constantes.Succes, "No se a podido subir el archivo", PnlMsg, Constantes.Ok);
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "revisar();", true);
                }
            }
            catch (Exception)
            {
                
                throw;
            } 

            
        }
        protected bool GuardarFirma()
        {
            try
            {
                Boolean fileOK = false;
                String path = Server.MapPath("~/File/Documentos/");
                lblImage.Text = "~/File/Documentos/" + fileUploader1.FileName;
                if (fileUploader1.HasFile)
                {
                    String fileExtension = System.IO.Path.GetExtension(fileUploader1.FileName).ToLower();
                    String[] allowedExtensions = { ".jpg", ".png", ".pdf" };
                    for (int i = 0; i < allowedExtensions.Length; i++)
                    {
                        if (fileExtension == allowedExtensions[i])
                        {
                            fileOK = true;

                        }
                    }
                }

                if (fileOK)
                {
                    try
                    {
                        fileUploader1.PostedFile.SaveAs(path + fileUploader1.FileName);

                        string path1 = path + fileUploader1.FileName;

                    }
                    catch (Exception ex)
                    {
                        fileOK = false;
                        Log.EscribirError(ex);
                        Metodos.divMensaje(Constantes.Succes, Constantes.Eliminado, PnlMsg, Constantes.Ok);
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);

                    }
                }
                else
                {
                    fileOK = false;

                }
                return fileOK;


            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
                throw;
            }
        }


        protected void FillTipoDoc()
        {
            try
            {                  
                CmbtipoDocumento.DataSource=BllTipoDocumento.CargarGridView();
                CmbtipoDocumento.DataTextField = "TiDoDocu";
                CmbtipoDocumento.DataValueField = "TiDoCodi";
                CmbtipoDocumento.DataBind();

            }
            catch (Exception)
            {
                
                throw;
            }
        }

        protected void BtnRechazar_Click(object sender, EventArgs e)
        {
            try
            {
                if (TxtCodigo.Text == "")
                {
                    act = BllActas.GetActa(int.Parse(Session["acta"].ToString()));
                    string re = act.RechazarActa(int.Parse(Session["acta"].ToString()));
                    if (re != "0")
                    {
                        BllActasRechazadas.ActasRechazadas ActasRec = new BllActasRechazadas.ActasRechazadas();
                        ActasRec.AcReActa = int.Parse(Session["acta"].ToString());
                        ActasRec.AcReCaus = CmbCausal.SelectedValue;
                        ActasRec.AcReFech = DateTime.Now;
                        ActasRec.AcReObse = TxtObserRecha.Text;
                        ActasRec.AcReBand = act.Bandeja;
                        ActasRec.AcReUsua = Usuario.username;
                        int r = ActasRec.Insert();

                        if (r > 0)
                        {
                            act = BllActas.GetActa(int.Parse(TxtNroActa.Text));
                            ObjGrabarBit.BitaActa = act._number;
                            ObjGrabarBit.BitaUsua = Usuario.username;
                            ObjGrabarBit.BitaFeca = System.DateTime.Now;
                            ObjGrabarBit.BitaEsMe = "0";
                            ObjGrabarBit.BitaEsCa = CmbCausal.SelectedValue;
                            ObjGrabarBit.BitaEsAc = act.EstadoActa;
                            ObjGrabarBit.BitaEsAn = act.EstadoAnteriorActa;
                            ObjGrabarBit.Insert();
                            Metodos.divMensaje(Constantes.Succes, "Acta Rechazada", PnlMsg, Constantes.Ok);
                            Response.Redirect("GestionBandejas.aspx", false);

                        }

                    }
                    else
                    {
                        Metodos.divMensaje(Constantes.Succes, "No Hay Bandeja disponible para el Rechazo", PnlMsg, Constantes.Ok);
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "devolver();", true);
                    }
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        protected void CargarCausas()
        {
            try
            {
                CmbCausal.DataSource = BllCausasDevolucion.CargarGridView();
                CmbCausal.DataTextField = "CaDeDesc";
                CmbCausal.DataValueField = "CaDeCodi";
                CmbCausal.DataBind();

            }
            catch (Exception)
            {

                throw;
            }
        }
        protected void BtnCancelar_Click(object sender, EventArgs e)
        {
            try
            {
                Response.Redirect("GestionBandejas.aspx", false);
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        protected void CargarReport()
        {
            try
            {
                
            }
            catch (Exception)
            {

                throw;
            }
        }

        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                if (TxtCodi.Text == "")
                {
                    guardar();
                }
                else { Modificar(); }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlGuardar, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void guardar()
        {
            try
            {
                if (BllMensajeria.ExistActa(int.Parse(TxtNroActa1.Text)) == 0)
                {
                    BllMensajeria.Mensajeria ObjGrabar = new BllMensajeria.Mensajeria();
                    ObjGrabar.MensActa = int.Parse(TxtNroActa1.Text);
                    ObjGrabar.MensUsua = Usuario.username;
                    ObjGrabar.MensFech = System.DateTime.Now;
                    ObjGrabar.MensOper = CmbEmpresa.SelectedValue;
                    ObjGrabar.MensEsta = "1";
                    ObjGrabar.MensUsSi = Usuario.username;
                    ObjGrabar.MensFeSi = System.DateTime.Now;
                    ObjGrabar.MensCaDe = "0";
                    int r = ObjGrabar.Insert();
                    if (r > 0)
                    {
                        TxtCodi.Text = r.ToString().PadLeft(5, '0');
                        Acta = BllActas.GetActa(ObjGrabar.MensActa);

                        if (Acta.EstadoActa == 4)
                        {

                            //Guardamos el registro en la Bitacora
                            ObjGrabarBit.BitaActa = int.Parse(TxtNroActa1.Text);
                            ObjGrabarBit.BitaUsua = Usuario.username;
                            ObjGrabarBit.BitaFeca = System.DateTime.Now;
                            ObjGrabarBit.BitaEsMe = "0";
                            ObjGrabarBit.BitaEsCa = "0";
                            ObjGrabarBit.BitaEsAn = Acta.EstadoActa;
                            Acta.EstadoActa = 11;
                            ObjGrabarBit.BitaEsAc = Acta.EstadoActa;

                            if (Acta.Update() > 0)
                            {
                                ObjGrabarBit.Insert();
                                Log.EscribirTraza("Estado del Acta Actualizado");
                                Response.Redirect("GestionBandejaS.aspx",false);
                            }
                            else
                            {
                                Metodos.divMensaje(Constantes.Danger, "Error al actualizar Estado del Acta", PnlMsg, Constantes.Fallo);
                            }
                        }
                    }
                    //UpdateNew.Update();
                    //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "anotaciones();", true);
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlGuardar, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void Modificar()
        {
            try
            {
                if (BllMensajeria.Exist(int.Parse(TxtCodi.Text)) == 1)
                {
                    BllMensajeria.Mensajeria ObjGrabar = new BllMensajeria.Mensajeria();
                    ObjGrabar = BllMensajeria.GetMens((int.Parse(TxtCodi.Text)));
                  //  ObjGrabar.MensActa = int.Parse(TxtNroActa1.Text);
                    ObjGrabar.MensOper = CmbEmpresa.SelectedValue;
                    ObjGrabar.MensUsSi = Usuario.username;
                    ObjGrabar.MensFeSi = System.DateTime.Now;
                    ObjGrabar.MensCaDe = "0";
                    int r = ObjGrabar.Update();
                    if (r > 0)
                    {
                        TxtCodi.Text = r.ToString().PadLeft(5, '0');
                        if (Acta.EstadoActa == 4)
                        {

                            //Guardamos el registro en la Bitacora
                            ObjGrabarBit.BitaActa = int.Parse(TxtNroActa1.Text);
                            ObjGrabarBit.BitaUsua = Usuario.username;
                            ObjGrabarBit.BitaFeca = System.DateTime.Now;
                            ObjGrabarBit.BitaEsMe = "0";
                            ObjGrabarBit.BitaEsCa = "0";
                            ObjGrabarBit.BitaEsAn = Acta.EstadoActa;
                            Acta.EstadoActa = 11;
                            ObjGrabarBit.BitaEsAc = Acta.EstadoActa;

                            if (Acta.Update() > 0)
                            {
                                ObjGrabarBit.Insert();
                                Log.EscribirTraza("Estado del Acta Actualizado");
                            }
                            else
                            {
                                Metodos.divMensaje(Constantes.Danger, "Error al actualizar Estado del Acta", PnlMsg, Constantes.Fallo);
                            }
                        }

                    }
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlGuardar, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void fillanotaciones()
        {
            try
            {
                Session["Anota"] = BllAnotacionActa.GetAnotacionActaXDesc(int.Parse(TxtNroActa.Text));
                if (!string.IsNullOrEmpty(Session["Anota"].ToString()))
                {
                    GridAno.DataSource = (List<BllAnotacionActa.AnotacionActa>)Session["Anota"];
                    GridAno.DataBind();
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void BtnAnotacion_Click(object sender, EventArgs e)
        {
            try
            {
                BllAnotacionActa.AnotacionActa Ano = new BllAnotacionActa.AnotacionActa();
                if (TxtCodiAnot.Text == "")
                {

                    Ano.AnotDesc = TxtAnotacion.Text;
                    Ano.AnotActa = int.Parse(TxtNroActa.Text);
                    Ano.AnotEsta = 4;
                    Ano.AnotFeSi = DateTime.Now;
                    Ano.AnotUsua = Usuario.username;
                    int rn = Ano.Insert();
                    if (rn > 0)
                    {
                        TxtCodiAnot.Text = rn.ToString();
                        Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                        CleanControl(pnlAnot.Controls);
                        fillanotaciones();
                        //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                        //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "anotaciones();", true);
                    }

                }
                else
                {
                    Ano = BllAnotacionActa.GetAnotacionActa(TxtCodiAnot.Text);
                    Ano.AnotDesc = TxtAnotacion.Text;
                    Ano.AnotFeSi = DateTime.Now;
                    int rn = Ano.Update();
                    if (rn > 0)
                    {

                        Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                        CleanControl(pnlAnot.Controls);
                        fillanotaciones();
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "anotaciones();", true); ;
                    }


                }



            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        protected void GridAno_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {

                GridAno.PageIndex = e.NewPageIndex;
                GridAno.DataSource = (List<MCargos.Cargos>)Session["Anota"];
                GridAno.DataBind();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "anotaciones();", true);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }

        }

        protected void EditarAnota_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName == "EditarAnotacion")
                {
                    BllAnotacionActa.AnotacionActa Row = new BllAnotacionActa.AnotacionActa();
                    List<BllAnotacionActa.AnotacionActa> Rows = new List<BllAnotacionActa.AnotacionActa>();

                    Rows = (List<BllAnotacionActa.AnotacionActa>)Session["Anota"];
                    Session["CodigoActividad"] = e.CommandArgument;

                    if (Rows.Exists(b => b.AnotCodi.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.AnotCodi.ToString() == e.CommandArgument.ToString()).First();
                        TxtCodiAnot.Text = Row.AnotCodi.ToString();
                        TxtAnotacion.Text = Row.AnotDesc;
                        //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "anotaciones();", true);
                    }
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        protected void GridAno_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            try
            {
                //if (e.Row.RowType == DataControlRowType.DataRow)
                //{
                var Btn = e.Row.FindControl("EditarAnota") as System.Web.UI.WebControls.Button;
                var Lblus = e.Row.FindControl("LblUsuario") as System.Web.UI.WebControls.Label;
                if (Lblus.Text == Usuario.username)
                {
                    Btn.Enabled = true;
                }
                // }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void GridListaChequeo_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void GridListaChequeo_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridListaChequeo.PageIndex = e.NewPageIndex;
                GridListaChequeo.DataSource = (List<BllRespuestaLista.RespuestaLista>)Session["LisRes"]; ;
                GridListaChequeo.DataBind();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "procesosimplificado();", true);
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }

        protected void FillRespuesta()
        {
            try
            {
                Session["LisRes"] = BllRespuestaLista.CargarGridView(int.Parse(Session["acta"].ToString()), 2);
                GridListaChequeo.DataSource = (List<BllRespuestaLista.RespuestaLista>)Session["LisRes"];
                GridListaChequeo.DataBind();

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void BtnLimpiar_Click1(object sender, EventArgs e)
        {
            try
            {
                CleanControl(pnlAnot.Controls);
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "anotaciones();", true);
            }
            catch (Exception EX)
            {

                throw EX;
             
            }
        }
        protected void BtnCargarDatos_Click(object sender, EventArgs e)
        {
            try
            {
                //if (nc == 0)
                //{

             
               
                
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                //  }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
    }
}