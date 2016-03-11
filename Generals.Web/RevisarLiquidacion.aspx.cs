using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;
using System.Web.Script.Serialization;
using System.Data;
using System.Globalization;

namespace Generals.Web
{
    public partial class RevisarLiquidacion : PaginaBase
    {
        BllActa_Medidor.Acta_Medidor Med = new BllActa_Medidor.Acta_Medidor();
        BllDocumentos.Documentos Doc = new BllDocumentos.Documentos();
        List<BllAnomalias.Anomalias> An = new List<BllAnomalias.Anomalias>();
        List<BllMetodosAnomalia.MetodosAnomalia> Ma = new List<BllMetodosAnomalia.MetodosAnomalia>();

        BllMetodosAnomalia.MetodosAnomalia M = new BllMetodosAnomalia.MetodosAnomalia();
        static BllActas.Actas act = new BllActas.Actas();
        BllTarifa.Tarifa ta = new BllTarifa.Tarifa();
        BllActa_Liquidacion.Acta_Liquidacion ObjGrabar = new BllActa_Liquidacion.Acta_Liquidacion();
        BllBitacora.Bitacora ObjGrabarBit = new BllBitacora.Bitacora();
        BllConsumo.Consumo Con = new BllConsumo.Consumo();
        //WSConsumo Consumo = new WSConsumo();
        //static WSConsumo.Consumos Consumo2 = new WSConsumo.Consumos();
        List<BllAC_Sellos.AC_Sellos> Sellos = new List<BllAC_Sellos.AC_Sellos>();
        int NroMeses;
         private int[] lista;
        static int nc = 0;
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    ValidarAutorizacion();
                    NroMeses = 0;
                    Session["Titulo"] = "Revisar  Liquidación ";
                    Session["nroMes"] = "0";
                    if (Session["acta"] != null)
                    {
                    
                        Panel1.Visible = true;

                        Session["Titulo"] = "Revisar  Liquidación " + Session["acta"].ToString();
                        //Cargar.Visible = true;
                        BuscarActa(Session["acta"].ToString());

                    }
                    CargarCausas();
                    FillEstadoLectura();
                    FillTipoDoc();
                    //  FillLiquidacion();
                    cargarLista();

                }
                else
                {
                    NroMeses = int.Parse(Session["nroMes"].ToString());
                    Metodos.CargarImagenes(pnlAnomalias, act._number, 2, 0);
                    Metodos.CargarImagenes(pnlDoc, act._number, 2, 1);
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                Log.EscribirTraza("Error Cargando los Datos de Revisar Liquidación");
                Log.EscribirError(ex);
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
                Log.EscribirTraza("Error consultando Anomalias en Liquidación");
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
                Log.EscribirTraza("Error Cargando materiales en liquidacion");
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
                Log.EscribirTraza("Error Cargando Trabajos ejecutados en liquidacion");
            }
        }
        private void FillConsumo()
        {
            try
            {
                Session["ListConsumo"] = BllConsumo.CargarGridView(int.Parse(Session["acta"].ToString()));
                if (!string.IsNullOrEmpty(Session["ListConsumo"].ToString()))
                {
                    GridConsumos.DataSource = (List<BllConsumo.Consumo>)Session["ListConsumo"];
                    GridConsumos.DataBind();
                }

                TxtConsuPoster.Text = BllConsumo.CargarGridView(int.Parse(Session["acta"].ToString())).First().ConsValo.ToString();
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
                Log.EscribirTraza("Error Cargando consumos en liquidacion");
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
                Log.EscribirTraza("Error Cargando Censo en liquidacion");
            }
        }

        protected void GridCargos_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridAnomalias.PageIndex = e.NewPageIndex;
                GridAnomalias.DataSource = (List<BllAnomalias.Anomalias>)Session["ListAnomalias"];
                GridAnomalias.DataBind();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
            }
            catch (Exception ex) { mensaje(Constantes.ErrorAlCargarGrid); Log.EscribirTraza("Error Cambiando de pagina del  grid anomalias en liquidacion"); }
        }

        protected void GridBandejasZonas_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridCensoActas.PageIndex = e.NewPageIndex;
                GridCensoActas.DataSource = (List<BllCensoActas.CensoActas>)Session["ListCensoActas"];
                GridCensoActas.DataBind();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
            }
            catch (Exception ex) { mensaje(Constantes.ErrorAlCargarGrid); Log.EscribirTraza("Error cambiando pagina del grd censo en liquidacion"); }
        }

        protected void FillEstadoLectura()
        {
            try
            {



            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarCombos, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
        private void generarActa()
        {
            try
            {
                if (BllDocumentos.GetDocumentosXActaTipo(int.Parse(Session["acta"].ToString()), 15).Count() == 0)
                {
                    GenerarPdf.GenerarActa(int.Parse(Session["acta"].ToString()), Usuario.id_usuario.ToString());
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza("Error Generando acta  en liquidacion");
            }
        }
        protected void BuscarActa(string acta)
        {
            try
            {
                act = BllActas.GetActa(int.Parse(acta));
                TxtFechaCarga.Text = act.fechaCarga;
                  //CultureInfo.InvariantCulture); ;
                _clientCloseTs.Text = act._clientCloseTs.ToString("dd/MM/yyyy", new CultureInfo("es-ES")) + " " + act._clientCloseTs.ToString("hh:mm:ss tt",
                  CultureInfo.InvariantCulture); ;
                Session["Titulo"] = "Revisar  Liquidación NIC:" + act.nic + " " + Session["acta"].ToString();
                TxtNroActa.Text = act._number.ToString();
                TxtNit.Text = act.nic;
                if (act.porcentajeError!=null)
                {
                    TxtPorc.Text = act.porcentajeError.Value.ToString("0,0.00", CultureInfo.InvariantCulture);
                }
                
                TxtEmpresa.Text = act.codigoEmpresa;
                TxtMatricula.Text = act.matriculaCT;
                TxtTipoCliente.Text = act.tipoCliente;
                TxtReferencia.Text = act.referenciaDireccion;
                txtEstrato.Text = act.estrato;
                TxtTipoVia.Text = act.tipoVia;
                TxtNroPuerta.Text = act.numeroPuerta;
                TxtCliente.Text = act.nombreTitularContrato.ToUpper();
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
                TxtTarifa2.Text = String.Format("{0:C2}", (Math.Round(float.Parse(act.ValorTarifa.ToString()), 2)));
                TxtValorECDF.Text = String.Format("{0:g}", act.ValorEcdf);
                txtDuplicador.Text = act.duplicador;
                TxtPiso.Text = act.piso;
                TelefonoFijoRece.Text = act.telefonoFijoReceptorVisita;

                AportaTesti.Text = act.aportaTestigo;
                SolicitaTecn.Text = act.solicitaTecnicoReceptorVisita;
                FechaLectura2.Text = act.fechaCarga;
                TxtTipoCenso.Text = act.tipoCenso;
                TxtCedulRce.Text = act.cedulaReceptorVisita;
                TxtEmailRece.Text = act.emailReceptorVisita;
                TxtRelacionrece.Text = act.relacionReceptorVisita;
                TxtNombreReceptor.Text = act.nombreReceptorVisita + " " + act.apellido1ReceptorVisita + " " + act.apellido2ReceptorVisita; ;
                TxtTotalCenso.Text = act.censoCargaInstalada.ToString() + "kWh";
                TxtCargaWatt.Text = (act.censoCargaInstalada * 1000).ToString();
                TxtCargaKws.Text = act.censoCargaInstalada.ToString();
                TxtCeduTec.Text = act.cedulaTecnico;
                TxtCeduTest.Text = act.cedulaTestigo;
                TxtTesti.Text = act.nombreTestigo + " " + act.apellido1Testigo + " " + act.apellido2Testigo;
                TxtTecnico.Text = act.nombreTecnico + " " + act.apellido1Tecnico + " " + act.apellido2Tecnico;
                TxtComte.Text = act.comteTecnico;
                medidaAnomaliaVR.Text = act.medidaAnomaliaVR.ToString();
                medidaAnomaliaVS.Text = act.medidaAnomaliaVS.ToString();
                medidaAnomaliaVT.Text = act.medidaAnomaliaVT.ToString();
                medidaAnomaliaIR.Text = act.medidaAnomaliaIR.ToString();
                medidaAnomaliaIS.Text = act.medidaAnomaliaIS.ToString();
                medidaAnomaliaIT.Text = act.medidaAnomaliaIT.ToString();
                cedulaOperario.Text = act.cedulaOperario;
                nombreOperario.Text = act.nombreOperario;
                apellido1Operario.Text = act.apellido1Operario + " " + act.apellido2Operario;
                empresaOperario.Text = act.empresaOperario;
                if (act.protocolo != 0)
                {
                    TxtPorc.Enabled = true;
                    BtnPorGuardar.Enabled = true;
                }
                else
                {
                    BtnPorGuardar.Enabled = false;
                }
                // medidaAnomaliaTipo.Text = act.medidaAnomaliaTipo;
                if (act.cargaContratada != null) { TxtCargaContra.Text = (act.cargaContratada / 1000).ToString(); } else { TxtCargaContra.Text = "0"; }
                //BuscarAnomalia(Session["acta"].ToString());
                BuscarPorcentaje(act.codigoTarifa);
                txtobservacionanomalia.Text = act.obsAnomalia;
                BuscarDatosMedidor(act._number);
                FillBitacora();
                FillDocumentos();
                FillAnomalias();
                FillCensoActas();
                FillConsumo();
                fillanotaciones();
                fillSellos(act._number.ToString());
                // BuscarAnomalia(Session["acta"].ToString());
                CargarContratada();
                TxtPromEstrato.Text = "0";
                PromedioEstrato();
                DecolucionLecturas();
                EvolucionConsumo();
                cargaEncontrada();
                PorcentajeDeError();
                CargarListaChequeo();
                CalcularValorECDF();
                cargarrechazos(act._number);
                FillMateriales();
                FillTrabajos();
                buscarprotocolo();
                Metodos.CargarImagenes(pnlAnomalias, act._number, 2, 0);
                Metodos.CargarImagenes(pnlDoc, act._number, 2, 1);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza("Error Cargando datos de acta en liquidacion");
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
                Log.EscribirTraza("Error Cargando protocolo en liquidacion");
            }
        }
        protected void BuscarDatosMedidor(int act)
        {
            try
            {
                Med = BllActa_Medidor.GetMedidorEncontrado(act);

                if (Med._number != null)
                {

                    numero.Text = Med.numero;
                    marca.Text = Med.marca;
                    tipoRevision.Text = Med.tipoRevision;
                    tipo.Text = Med.tipo;
                    tecnologia.Text = Med.tecnologia; lecturaUltimaFecha.Text = Med.lecturaUltimaFecha;
                    lecturaUltima.Text = Med.lecturaUltima;
                    lecturaActual.Text = Med.lecturaActual; kdkh_tipo.Text = Med.kdkh_tipo; kdkh_value.Text = Med.kdkh_value;
                    digitos.Text = Med.digitos; decimales.Text = Med.decimales; nFases.Text = Med.nFases; voltajeNominal.Text = Med.voltajeNominal; rangoCorrienteMin.Text = Med.rangoCorrienteMin;
                    rangoCorrienteMax.Text = Med.rangoCorrienteMax;
                    corrienteN_mec.Text = Med.corrienteN_mec;
                    corrienteFN_mec.Text = Med.corrienteFN_mec;
                    voltageNT_mec.Text = Med.voltageNT_mec;
                    voltageRS_mec.Text = Med.voltageRS_mec;
                    voltageFNR_mec.Text = Med.voltageFNR_mec; voltageFTR_mec.Text = Med.voltageFTR_mec;
                    corrienteR_mec.Text = Med.corrienteR_mec;
                    voltageFNS_mec.Text = Med.voltageFNS_mec;
                    voltageFTS_mec.Text = Med.voltageFTS_mec;
                    corrienteS_mec.Text = Med.corrienteS_mec;
                    pruebaAlta.Text = Med.pruebaAlta;
                    voltageFNR_alta.Text = Med.voltageFNR_alta;
                    corrienteR_alta.Text = Med.corrienteR_alta;
                    vueltasR_alta.Text = Med.vueltasR_alta;
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
                    if (Med.lecturaUltima.ToString() != "") { NroLectura1.Text = Med.lecturaUltima; }
                    if (Med.lecturaActual != "") { NroLectura2.Text = Med.lecturaActual; }

                    if (Med.lecturaUltimaFecha != null)
                    {
                        FechaLectura1.Text = Med.lecturaUltimaFecha.Substring(0, 10); ;
                    }
                    //  FechaLectura2.Text = String.Format("{0:YYYY/MM/dd}", DateTime.Now.ToShortDateString(), null); ;
                    //MOnofasico
                    if (Med.nFases == "1F2H")
                    {
                        if (corrienteR_mec.Text != "")
                        {
                            TxtCEF1.Text = corrienteR_mec.Text;
                        }
                        else
                        {
                            TxtCEF1.Text = "0";
                        }
                        if (voltageFNR_mec.Text != "")
                        {

                            TxtCEV1.Text = voltageFNR_mec.Text;
                        }
                        else
                        {
                            TxtCEV1.Text = "0";
                        }

                        TxtCE.Text = ((float.Parse(TxtCEV1.Text.Replace(',', '.')) * float.Parse(TxtCEF1.Text.Replace(',', '.')))).ToString();
                        TxtCEM.Text = TxtCE.Text;


                    }
                    //Bifasico Linea-Linea
                    else if (Med.nFases == "1F3H ")
                    {
                        if (corrienteR_mec.Text != "")
                        {
                            TxtCEF1.Text = corrienteR_mec.Text;
                        }
                        else
                        {
                            TxtCEF1.Text = "0";
                        }
                        if (voltageFNR_mec.Text != "")
                        {

                            TxtCEV1.Text = voltageFNR_mec.Text;
                        }
                        else
                        {
                            TxtCEV1.Text = "0";
                        }


                        //TxtCEV2.ReadOnly=
                        if (corrienteS_mec.Text != "")
                        {
                            TxtCEF2.Text = corrienteS_mec.Text;
                        }
                        else
                        {
                            TxtCEF2.Text = "0";
                        }
                        if (voltageFNS_mec.Text != "")
                        {

                            TxtCEV2.Text = voltageFNS_mec.Text;
                        }
                        else
                        {
                            TxtCEV2.Text = "0";
                        }
                        TxtCE.Text = (((float.Parse(TxtCEV1.Text.Replace(',', '.')) * float.Parse(TxtCEF1.Text.Replace(',', '.'))) + (float.Parse(TxtCEV2.Text.Replace(',', '.')) * float.Parse(TxtCEF2.Text.Replace(',', '.'))))).ToString();

                    }
                    // Bifasico Linea - neutro
                    else if (Med.nFases == "2F3H")
                    {
                        if (corrienteR_mec.Text != "")
                        {
                            TxtCEF1.Text = corrienteR_mec.Text;
                        }
                        else
                        {
                            TxtCEF1.Text = "0";
                        }
                        if (voltageRS_mec.Text != "")
                        {

                            TxtCEV1.Text = voltageRS_mec.Text;
                        }
                        else
                        {
                            TxtCEV1.Text = "0";
                        }


                        //TxtCEV2.ReadOnly=
                        if (corrienteS_mec.Text != "")
                        {
                            TxtCEF2.Text = corrienteS_mec.Text;
                        }
                        else
                        {
                            TxtCEF2.Text = "0";
                        }

                        TxtCE.Text = ((float.Parse(TxtCEV1.Text.Replace(',', '.')) * ((float.Parse(TxtCEF1.Text.Replace(',', '.')) + float.Parse(TxtCEF2.Text.Replace(',', '.'))) / 2))).ToString();
                    }
                    //Trifasico Linea Neutro
                    else if (Med.nFases == "3F4H")
                    {
                        if (corrienteR_mec.Text != "")
                        {
                            TxtCEF1.Text = corrienteR_mec.Text;
                        }
                        else
                        {
                            TxtCEF1.Text = "0";
                        }
                        if (voltageRS_mec.Text != "")
                        {

                            TxtCEV1.Text = voltageRS_mec.Text;
                        }
                        else
                        {
                            TxtCEV1.Text = "0";
                        }


                        //TxtCEV2.ReadOnly=
                        if (corrienteS_mec.Text != "")
                        {
                            TxtCEF2.Text = corrienteS_mec.Text;
                        }
                        else
                        {
                            TxtCEF2.Text = "0";
                        }
                        //corriente t
                        if (Med.corrienteT_mec != "")
                        {

                            TxtCEV2.Text = Med.corrienteT_mec;
                        }
                        else
                        {
                            TxtCEV2.Text = "0";
                        }

                        TxtCE.Text = (((float.Parse(TxtCEV1.Text) *
                            ((float.Parse(TxtCEF1.Text.Replace(',', '.')) + float.Parse(TxtCEF2.Text.Replace(',', '.')) + float.Parse(TxtCEV2.Text.Replace(',', '.'))) / 3))
                            * Math.Pow(3, 1 / 3))).ToString();
                    }
                    else
                    {
                        TxtCEV1.Text = "0";
                    }
                }
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }
        /*BUSCAR ANOMALIA POR ACTA*/
        public JavaScriptSerializer javaSerial = new JavaScriptSerializer();
        public int[] terms;
        protected void BuscarAnomalia(string acta)
        {
            try
            {
                List<BllMetodosAnomalia.MetodosAnomalia> Ma1 = new List<BllMetodosAnomalia.MetodosAnomalia>();
                An = BllAnomalias.GetAnomaliaXNumero(int.Parse(acta.ToString()));
                List<int> list = new List<int>();
                if (An.Count > 0)
                {
                    foreach (var item in An)
                    {
                        var s = BllTiposIrregularidades.GetAnomalia(item.AcAnCodi).TiIrIndi;
                        if (BllMetodosAnomalia.Exist(s.ToString()) == 1)
                        {
                            Ma = BllMetodosAnomalia.GetMeAnMeLiXCodi(s.ToString());
                            // You can convert it back to an array if you would like to
                            foreach (var M in Ma)
                            {
                                list.Add(int.Parse(M.MeAnMeLi));
                                Ma1.Add(M);
                            }
                            terms = list.ToArray();
                        }

                    }
                    FillMetodosAnomalia(Ma1);
                }

                if (list.Count == 0)
                {
                    List<BllMetodoLiquidacion.MetodoLiquidacion> Me = BllMetodoLiquidacion.CargarGridView();

                    //foreach (var item in Me)
                    //{
                    //    list.Add(int.Parse(item.MeLiCodi));
                    //} 
                    list.Add(1);
                    list.Add(2);
                    list.Add(3);
                    //list.Add(4);
                    //list.Add(5);
                    //list.Add(6);
                    //list.Add(9);
                    //list.Add(10);
                    list.Add(11);
                    terms = list.ToArray();
                }


            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }
        protected void BuscarPorcentaje(string tar)
        {
            try
            {
                //TxtPorcUtil
                ta = BllTarifa.GetTarifa(tar);
                TxtTarifa.Text = ta.TariDesc;
                TxtPorcUtil.Text = BllFactorUtilizacion.GetFactorUtilizacion(ta.TariFaUt).FaUtPorc.ToString();

                double p = (float)Math.Round((float.Parse(TxtPorcUtil.Text) / 100), 2);
                double cen = ((p * 720) * float.Parse(TxtCargaKws.Text));
                TxtestXCens.Text = Math.Ceiling(cen).ToString();

                //TxtEcdf1.Text = Math.Ceiling(cen).ToString();
                //cen = cen * 5;
                //TxtEcdf2.Text = Math.Ceiling(cen).ToString();
                CalcularValorECDF();
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        //Metodos de liquidación
        #region Metodos
        //Cargar contratada
        #region CargaContratada
        protected void CargarContratada()
        {
            try
            {
                TxtCC.Text = TxtCargaContra.Text;
                TxtCCNm.Text = "720";
                TxtCCFu.Text = TxtPorcUtil.Text + "%"; ;
                TxtCCCo.Text = TxtAcum.Text;
                TxtCCECDF.Text = (((double.Parse(TxtCC.Text)) * (float)Math.Round((float.Parse(TxtPorcUtil.Text) / 100), 2) * 720 * NroMeses) - (float.Parse(TxtCCCo.Text))).ToString();
                TxtCCCo.Text = String.Format("{0:g}", TxtAcum.Text);
                TxtCCResul.Text = "C1=[[(" + TxtCC.Text + " KW * " + ((float)Math.Round((float.Parse(TxtPorcUtil.Text) / 100), 2)).ToString() + " * 720 Horas Mes) * " + NroMeses.ToString() + " Meses] -" + TxtAcum.Text + " Kwh] = " + (float)Math.Round((float.Parse(TxtCCECDF.Text)), 0) + " kWh"; ;
                TxtCCMeses.Text = NroMeses.ToString();
                TxtCCECDF.Text = Math.Round(decimal.Parse(TxtCCECDF.Text), 0).ToString();
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        /*Carga Encontrada*/
        protected void BtnCaEnGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                if (int.Parse(TxtCCECDF.Text) > 0)
                {
                    if (TxtCodigo.Text == "")
                    {

                        if (CapturarDatosBasicos())
                        {
                            ObjGrabar.AcLiMeLi = "01";
                            ObjGrabar.AcLiMeAn = "";
                            ObjGrabar.AcLiCoTo = int.Parse(TxtCCCo.Text);
                            ObjGrabar.AcLiPrEs = decimal.Parse(TxtPromEstrato.Text);
                            ObjGrabar.AcLiCaCo = decimal.Parse(TxtCC.Text);
                            ObjGrabar.AcLiCoPo = decimal.Parse(TxtConsuPoster.Text); ;
                            ObjGrabar.AcLiHora = int.Parse(TxtCCNm.Text);
                            ObjGrabar.AcLiVaC1 = decimal.Parse(TxtCCECDF.Text);
                            ObjGrabar.AcliDeFo = TxtCCResul.Text;
                            ObjGrabar.AcLiDeMe = LblCargContratada.Text;
                            ObjGrabar.AcLiObse = TxtCCObser.Text;
                            ObjGrabar.AcLiUser = Usuario.username;
                            ObjGrabar.AcLiFeSi = DateTime.Now;
                            ObjGrabar.AcLiFeMo = DateTime.Now;
                            ObjGrabar.AcLiPoUt = int.Parse(TxtPorcUtil.Text);
                            ObjGrabar.AcLiCaWa = decimal.Parse(TxtCargaWatt.Text);
                            ObjGrabar.AcLiCaKw = decimal.Parse(TxtCargaKws.Text);
                            ObjGrabar.AcLiKwCe = int.Parse(TxtestXCens.Text);

                            TxtValorECDF.Text = TxtCCECDF.Text;
                            long r = ObjGrabar.Insert();
                            if (r > 0)
                            {
                                GuardarChequeo();
                                GuardarBitacora();
                                TxtCodigo.Text = r.ToString();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                                CargarReport();

                            }
                        }
                    }
                    else
                    {
                        ObjGrabar = BllActa_Liquidacion.GetActa(int.Parse(TxtCodigo.Text));

                        if (CapturarDatosBasicos())
                        {

                            ObjGrabar.AcLiMeAn = ObjGrabar.AcLiMeLi;
                            ObjGrabar.AcLiMeLi = "01";
                            ObjGrabar.AcLiUser = Usuario.username;
                            ObjGrabar.AcLiFeSi = DateTime.Now;
                            ObjGrabar.AcLiFeMo = DateTime.Now;
                            ObjGrabar.AcLiPoUt = int.Parse(TxtPorcUtil.Text);
                            ObjGrabar.AcLiCaWa = decimal.Parse(TxtCargaWatt.Text);
                            ObjGrabar.AcLiCaKw = decimal.Parse(TxtCargaKws.Text);
                            ObjGrabar.AcLiKwCe = int.Parse(TxtestXCens.Text);
                            ObjGrabar.AcLiCoTo = int.Parse(TxtCCCo.Text);
                            ObjGrabar.AcLiPrEs = decimal.Parse(TxtPromEstrato.Text);
                            ObjGrabar.AcLiCaCo = decimal.Parse(TxtCC.Text);
                            ObjGrabar.AcLiCoPo = decimal.Parse(TxtConsuPoster.Text); ;
                            ObjGrabar.AcLiHora = int.Parse(TxtCCNm.Text);
                            ObjGrabar.AcLiVaC1 = decimal.Parse(TxtCCECDF.Text);
                            ObjGrabar.AcliDeFo = TxtCCResul.Text;
                            ObjGrabar.AcLiObse = TxtCCObser.Text;
                            TxtValorECDF.Text = TxtCCECDF.Text;
                            long r = ObjGrabar.Update();
                            if (r > 0)
                            {
                                GuardarChequeo();
                                GuardarBitacora();
                                TxtCodigo.Text = r.ToString();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                                //  ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                                CargarReport();

                            }
                        }
                    }
                    //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                }
                else
                {
                    Metodos.divMensaje(Constantes.Danger, Constantes.Ecdf, PnlMsg, Constantes.Advertencia);
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                }

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        #endregion
        //Censo de carga
        #region CensoCarga
        protected void CalcularValorECDF()
        {
            try
            {
                TxtCIFU.Text = TxtPorcUtil.Text + "%";
                TxtCI.Text = TxtestXCens.Text;
                TxtCIConsumos.Text = TxtAcum.Text;
                TxtCINroHoras.Text = "720";
                TxtCIMeses.Text = NroMeses.ToString();
                TxtCIECDF.Text = Math.Round(float.Parse((((float.Parse(TxtCargaKws.Text) * (float)Math.Round((float.Parse(TxtPorcUtil.Text) / 100), 2)) * 720 * NroMeses) - (float.Parse(TxtCIConsumos.Text))).ToString()), 0).ToString();
                TxtCIResul.Text = "C1=[[ (" + TxtCargaWatt.Text + " W / 1000 * " + ((float)Math.Round((float.Parse(TxtPorcUtil.Text) / 100), 2)).ToString() + " * 720 Horas Mes) * " + NroMeses.ToString() + " Meses] - " + TxtAcum.Text + "] =" + TxtCIECDF.Text + " kWh";
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected int calcularMeses()
        {
            try
            {
                int sum = 0;
                return sum;
            }
            catch (Exception Ex)
            {

                Log.EscribirError(Ex);
                return 0;
            }
        }

        /*Censo de Carga*/
        protected void BtnCenGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                if (int.Parse(TxtCIECDF.Text) > 0)
                {
                    if (TxtCodigo.Text == "")
                    {


                        if (CapturarDatosBasicos())
                        {
                            ObjGrabar.AcLiMeLi = "03";
                            ObjGrabar.AcLiMeAn = "";
                            ObjGrabar.AcLiCoTo = int.Parse(TxtAcum.Text);
                            ObjGrabar.AcLiUser = Usuario.username;
                            ObjGrabar.AcLiFeSi = DateTime.Now;
                            ObjGrabar.AcLiFeMo = DateTime.Now;
                            ObjGrabar.AcLiPoUt = int.Parse(TxtPorcUtil.Text);
                            ObjGrabar.AcLiCaWa = decimal.Parse(TxtCargaWatt.Text);
                            ObjGrabar.AcLiCaKw = decimal.Parse(TxtCargaKws.Text);
                            ObjGrabar.AcLiKwCe = int.Parse(TxtestXCens.Text);
                            ObjGrabar.AcLiPrEs = decimal.Parse(TxtPromEstrato.Text);
                            ObjGrabar.AcLiCaCo = decimal.Parse(TxtCargaContra.Text);
                            ObjGrabar.AcLiCoPo = decimal.Parse(TxtConsuPoster.Text); ;
                            ObjGrabar.AcLiHora = int.Parse(TxtCCNm.Text);
                            ObjGrabar.AcLiVaC1 = decimal.Parse(TxtCIECDF.Text);
                            ObjGrabar.AcliDeFo = TxtCIResul.Text;
                            ObjGrabar.AcLiObse = TxtCIObser.Text;
                            TxtValorECDF.Text = TxtCIECDF.Text;
                            ObjGrabar.AcLiDeMe = LblCensoCarga.Text;
                            long r = ObjGrabar.Insert();
                            if (r > 0)
                            {
                                GuardarChequeo();
                                GuardarBitacora();
                                TxtCodigo.Text = r.ToString();
                                CargarReport();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                            }
                        }
                    }
                    else
                    {
                        ObjGrabar = BllActa_Liquidacion.GetActa(int.Parse(TxtCodigo.Text));

                        if (CapturarDatosBasicos())
                        {
                            ObjGrabar.AcLiMeAn = ObjGrabar.AcLiMeLi;
                            ObjGrabar.AcLiMeLi = "03";
                            ObjGrabar.AcLiCoTo = int.Parse(TxtAcum.Text);
                            ObjGrabar.AcLiUser = Usuario.username;
                            ObjGrabar.AcLiFeSi = DateTime.Now;
                            ObjGrabar.AcLiFeMo = DateTime.Now;
                            ObjGrabar.AcLiPoUt = int.Parse(TxtPorcUtil.Text);
                            ObjGrabar.AcLiCaWa = decimal.Parse(TxtCargaWatt.Text);
                            ObjGrabar.AcLiCaKw = decimal.Parse(TxtCargaKws.Text);
                            ObjGrabar.AcLiKwCe = int.Parse(TxtestXCens.Text);
                            ObjGrabar.AcLiPrEs = decimal.Parse(TxtPromEstrato.Text);
                            ObjGrabar.AcLiCaCo = decimal.Parse(TxtCargaContra.Text);
                            ObjGrabar.AcLiCoPo = decimal.Parse(TxtConsuPoster.Text); ;
                            ObjGrabar.AcLiHora = int.Parse(TxtCCNm.Text);

                            ObjGrabar.AcLiVaC1 = decimal.Parse(TxtCIECDF.Text);
                            ObjGrabar.AcliDeFo = TxtCIResul.Text;
                            ObjGrabar.AcLiObse = TxtCIObser.Text;
                            TxtValorECDF.Text = TxtCIECDF.Text;
                            long r = ObjGrabar.Update();
                            if (r > 0)
                            {
                                GuardarChequeo();
                                GuardarBitacora();
                                TxtCodigo.Text = r.ToString();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Actualizar, PnlMsg, Constantes.Ok);
                                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                                CargarReport();

                            }
                        }
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                    }
                }
                else
                {
                    Metodos.divMensaje(Constantes.Danger, Constantes.Ecdf, PnlMsg, Constantes.Advertencia);
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }
        #endregion
        //Devolucion de Lecturas          
        #region DevolucionDeLecturas
        protected void DecolucionLecturas()
        {
            try
            {
                TxtDLCO.Text = TxtAcum.Text;
                calcularDias();
                CalcularValor();


                TxtDLResul.Text = "C1= [( " + NroLectura1.Text + "-" + NroLectura2.Text + ")/" + TxtDiasTransc1.Text + " ] * 30 Días = " + Math.Ceiling(float.Parse(TxtValorFinal.Text)).ToString()
                + " C2= [" + Math.Ceiling(float.Parse(TxtValorFinal.Text)).ToString() + "* " + NroMeses.ToString() + " Meses] -" + TxtDLCO.Text + "Kwh  =" + TxtDLECDF.Text + " Kwh ";
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }
        /*Calcular los dias por los campos  fechas de lecturas*/
        #region CalcularDias
        protected void NroLectura1_TextChanged(object sender, EventArgs e)
        {
            try
            {
                TextBox txt = (TextBox)sender;
                if (txt.ID == "NroLectura1")
                {
                    if (FechaLectura1.Text != "")
                    {
                        NroLectura1.Text = txt.Text;
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                    }
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                }
                else
                {
                    if (FechaLectura2.Text != "")
                    {
                        NroLectura2.Text = txt.Text;
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                    }
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                }
                CalcularValor();
                DecolucionLecturas();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);

            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                Log.EscribirError(ex);
            }
        }

        protected void FechaLectura1_TextChanged(object sender, EventArgs e)
        {
            try
            {
                if (FechaLectura1.Text != "" && FechaLectura2.Text != "")
                {
                    calcularDias();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);

                }
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                Log.EscribirError(ex);
            }
        }

        protected void calcularDias()
        {
            try
            {
                if (FechaLectura1.Text != "" && FechaLectura2.Text != "")
                {

                    if (DateTime.Parse(FechaLectura1.Text) < DateTime.Parse(FechaLectura2.Text))
                    {
                        TimeSpan d = (DateTime.Parse(FechaLectura2.Text) - DateTime.Parse(FechaLectura1.Text));
                        TxtDiasTransc1.Text = d.Days.ToString();
                    }
                    else
                    {
                        TimeSpan d = (DateTime.Parse(FechaLectura1.Text) - DateTime.Parse(FechaLectura2.Text));
                        TxtDiasTransc1.Text = d.Days.ToString();
                    }
                }
                else if ((FechaLectura1.Text != ""))
                {
                    FechaLectura1.Text = String.Format("{0:YYYY/MM/dd}", FechaLectura1.Text, null);
                    String s = String.Format("{0:MM/dd/yyyy}", FechaLectura1.Text, null);
                    TimeSpan v = DateTime.Now.Date - Convert.ToDateTime(s);
                    TimeSpan d = (DateTime.Now - DateTime.Parse(FechaLectura1.Text));
                    TxtDiasTransc1.Text = v.Days.ToString();
                }
            }
            catch (Exception ex) { Log.EscribirError(ex); }
        }

        #endregion
        #endregion

        #region PromedioEstrato

        protected void TxtPromEstrato_TextChanged(object sender, EventArgs e)
        {
            try
            {
                PromedioEstrato();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                Log.EscribirError(ex);
            }
        }
        protected void PromedioEstrato()
        {
            try
            {
                PromedioEstrato pr = new PromedioEstrato();
                pr=pr.getPromedio(TxtMun.Text, act.codigoTarifa);

                if (pr.PromValo!=null)
                {
                    TxtPromEstrato.Text = pr.PromValo.Value.ToString("0,0.00", CultureInfo.InvariantCulture);
                } 
                TxtProm.Text = TxtPromEstrato.Text;
                TxtpromMes.Text = NroMeses.ToString();
                TxtPromCO.Text = TxtAcum.Text;
                TxtPromECDF.Text = ((float.Parse(TxtPromEstrato.Text) * NroMeses) - (float.Parse(TxtPromCO.Text))).ToString();
                TxtPromResul.Text = "[(" + TxtPromEstrato.Text + " * " + NroMeses.ToString() + " Meses) - " + TxtAcum.Text + " Kwh. ]= " + TxtPromECDF.Text;
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        #endregion

        #region EvolucionConsumo
        protected void EvolucionConsumo()
        {
            try
            {
                TxtEC.Text = TxtConsuPoster.Text;
                TxECCO.Text = TxtAcum.Text;
                TxtMeses.Text = NroMeses.ToString();
                TxtECCDF.Text = ((double.Parse(TxtConsuPoster.Text) * NroMeses) - (double.Parse(TxtAcum.Text))).ToString();
                TxtECResult.Text = "C2=[(" + TxtConsuPoster.Text + " Kwh. * " + NroMeses.ToString() + " Meses)- " + TxtAcum.Text + " Kwh. ]=" + TxtECCDF.Text;
            }
            catch (Exception ex)
            {
                Log.EscribirTraza("Error en Evolución de consumos");
                Log.EscribirError(ex);
            }
        }
        #endregion
        #endregion
        protected void BtnCerrar_Click(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
        }

        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            Metodos.CleanControl(this.Controls);
        }
    

        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllActa_Liquidacion.Acta_Liquidacion Row = new BllActa_Liquidacion.Acta_Liquidacion();

                    List<BllActa_Liquidacion.Acta_Liquidacion> Rows = new List<BllActa_Liquidacion.Acta_Liquidacion>();

                    Rows = (List<BllActa_Liquidacion.Acta_Liquidacion>)Session["ListLiquidacion"];
                    if (Rows.Exists(b => b.AcLiCodi.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.AcLiCodi.ToString() == e.CommandArgument.ToString()).First();
                        TxtCodigo.Enabled = false;
                        TxtCodigo.Text = Row.AcLiCodi.ToString();
                        TxtNroActa.Text = Row.AcLiActa.ToString();
                        Session["acta"] = Row.AcLiActa.ToString();
                        PromedioEstrato();
                        DecolucionLecturas();
                        EvolucionConsumo();
                        PorcentajeDeError();
                        CargarListaChequeo();
                        FillBitacora();
                        FillDocumentos();
                    }
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlConsultarDatos, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }

        protected void btneliminarGridView_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllActa_Liquidacion.Acta_Liquidacion Row = new BllActa_Liquidacion.Acta_Liquidacion();

                    List<BllActa_Liquidacion.Acta_Liquidacion> Rows = new List<BllActa_Liquidacion.Acta_Liquidacion>();

                    Rows = (List<BllActa_Liquidacion.Acta_Liquidacion>)Session["ListLiquidacion"];
                    Session["CodigoActividad"] = e.CommandArgument;

                    //if (Rows.Exists(b => b.AcLiCodi.ToString() == e.CommandArgument.ToString()))
                    //{
                    //    Row = Rows.Where(b => b.AcLiCodi.ToString() == e.CommandArgument.ToString()).First();

                    //    Row.EsAcEsta = false;
                    //    int r = Row.Desactivar();
                    //    if (r > 0)
                    //    {
                    //        FillLiquidacion();
                    //        Metodos.CleanControl(this.Controls);
                    //        Metodos.divMensaje(Constantes.Succes, Constantes.Eliminado, PnlMsg,Constantes.Ok);
                    //    }

                    //}
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlConsultarDatos, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
        protected void GridEstaActa_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {

        }
        protected void TxtDic_TextChanged(object sender, EventArgs e)
        {
            try
            {
                TextBox text = (TextBox)sender;
                if (text.Text != "")
                {
                    if (TxtAcum.Text == "") { TxtAcum.Text = "0"; }

                    int sum = calcularMeses();
                    //TxtEcdf3.Text = sum.ToString();
                    TxtCCCo.Text = sum.ToString();
                    CalcularValorECDF();
                    CargarContratada();
                    PromedioEstrato();
                    DecolucionLecturas();
                    EvolucionConsumo();
                    PorcentajeDeError();
                    text.Focus();
                    //llamada al evento jquery para mantener el tab
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
                }

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        protected void CalcularValor()
        {
            try
            {
                if (NroLectura1.Text != "" && NroLectura2.Text != "")
                    if (TxtDiasTransc1.Text != "")
                    {
                        float r;
                        if ((float.Parse(NroLectura1.Text) > float.Parse(NroLectura2.Text)))
                        {
                            ///  r = (() * 5)
                            //   ;
                            r = ((float.Parse(NroLectura1.Text) - float.Parse(NroLectura2.Text) / float.Parse(TxtDiasTransc1.Text))) * 30;
                            TxtValorFinal.Text = r.ToString();
                            TxtValor.Text = (r * 5).ToString();
                            r = (float.Parse(TxtValor.Text) - float.Parse(TxtDLCO.Text));
                            TxtDLECDF.Text = Math.Ceiling(r).ToString();

                        }
                        else
                        {
                            // r = (((float.Parse(NroLectura2.Text) - float.Parse(NroLectura1.Text)) * 30 * 5) / float.Parse(TxtDiasTransc1.Text));
                            r = (((float.Parse(NroLectura2.Text) - float.Parse(NroLectura1.Text)) / float.Parse(TxtDiasTransc1.Text))) * 30;
                            TxtValorFinal.Text = r.ToString();
                            TxtValor.Text = (r * NroMeses).ToString();
                            r = (float.Parse(TxtValor.Text) - float.Parse(TxtDLCO.Text));
                            TxtDLECDF.Text = Math.Ceiling(r).ToString();

                        }
                        // TxtConsumo3.Text = r.ToString();
                        // r = r * 30;
                        //TxtValorFinal.Text = Math.Ceiling(r).ToString(); 

                        //TxtValorFinal.Text = r.ToString();    }
                    }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        #region ListaChequeo
        protected void CargarListaChequeo()
        {
            try
            {
                Session["ListChequeo"] = BllListaChequeo.CargarGridView(2);
                if (!string.IsNullOrEmpty(Session["ListChequeo"].ToString()))
                {
                    GridChequeo.DataSource = (List<BllListaChequeo.ListaChequeo>)Session["ListChequeo"];
                    GridChequeo.DataBind();
                }
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }


        #endregion
    

        protected void TxtConsuPoster_TextChanged(object sender, EventArgs e)
        {
            try
            {
                EvolucionConsumo();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        #region PorcentajeDeError
        protected void PorcentajeDeError()
        {
            try
            {

                txtPorcCO.Text = TxtAcum.Text;
                TxtPorcC1.Text = (float.Parse(txtPorcCO.Text) / (1 - (float)Math.Round((float.Parse(TxtPorc.Text) / 100), 2))).ToString();
                TxtPorcECDF.Text = ((float.Parse(TxtPorcC1.Text) - (float.Parse(txtPorcCO.Text)))).ToString();
                TxtPorcresult.Text = "C1=(" + TxtAcum.Text + " * 100% / " + (100 - double.Parse(TxtPorc.Text)).ToString() + " %) = " + TxtPorcC1.Text + " KWh. Luego tenemos que C2 =  " + TxtPorcC1.Text + " - " + TxtAcum.Text
                    + " =" + TxtPorcECDF.Text + "KWh  Los " + TxtPorcECDF.Text + " KWh representan el " + TxtPorc.Text + "% de la prueba de comprobación de registro.";
                lblc2.Text = TxtPorcC1.Text + " - " + TxtAcum.Text + " =" + TxtPorcECDF.Text + "KWh";
                lblC1.Text = TxtAcum.Text + " * 100% / " + (100 - double.Parse(TxtPorc.Text)).ToString() + " % = " + TxtPorcC1.Text + " KWh.";
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        #endregion

        protected void cargarrechazos(int acta)
        {
            try
            {
                GridRechazo.DataSource = BllActasRechazadas.CargarGridView(acta);
                GridRechazo.DataBind();
            }
            catch (Exception)
            {

                throw;
            }
        }
        protected void cargaEncontrada()
        {
            try
            {

                TxtCED.Text = (float.Parse(medidaAnomaliaVR.Text.Replace(',', '.')) * float.Parse(medidaAnomaliaIR.Text.Replace(',', '.'))).ToString();
                TxtCED.Text = (float.Parse(TxtCED.Text) + (float.Parse(medidaAnomaliaVS.Text.Replace(',', '.')) * float.Parse(medidaAnomaliaIS.Text.Replace(',', '.')))).ToString();
                TxtCED.Text = Math.Round(float.Parse(TxtCED.Text.Replace(',', '.')) + (float.Parse(medidaAnomaliaVT.Text.Replace(',', '.')) * float.Parse(medidaAnomaliaIT.Text.Replace(',', '.'))), 0).ToString();

                //  TxtCED.Text=
                TxtCENH.Text = (720).ToString();
                TxtCEFU.Text = TxtPorcUtil.Text;
                TxtCEMeses.Text = NroMeses.ToString();

                if (ChkDeriva.Checked)
                {
                    TxtCEC1.Text = ((float.Parse(TxtCED.Text) * (float.Parse(TxtCEFU.Text) / 100) * int.Parse(TxtCENH.Text) * NroMeses) / 1000).ToString();
                    TxtCEC1.Text = Math.Round(decimal.Parse(TxtCEC1.Text), 0).ToString();
                    TxtCE.Text = TxtCED.Text;
                    TxtCEResul.Text = "C1:[(" + TxtCED.Text + " Kw  * " + TxtCEFU.Text + " * " + TxtCENH.Text + " Mes ) * " + TxtCEMeses.Text + "]=" + TxtCEC1.Text + " Kwh";
                }
                if (chkMedidor.Checked)
                {
                    TxtCE.Text = TxtCEM.Text;
                    TxtCEC1.Text = ((float.Parse(TxtCE.Text) * (float.Parse(TxtCEFU.Text) / 100) * int.Parse(TxtCENH.Text) * NroMeses) / 1000).ToString();
                    TxtCEC1.Text = Math.Round(decimal.Parse(TxtCEC1.Text), 0).ToString();

                    TxtCEResul.Text = "C1:[(" + TxtCE.Text + " Kw  * " + TxtCEFU.Text + " * " + TxtCENH.Text + " Mes ) * " + TxtCEMeses.Text + "]=" + TxtCEC1.Text + " Kwh";
                }
                if (ChkDeriva.Checked && chkMedidor.Checked)
                {
                    TxtCE.Text = (float.Parse(TxtCED.Text) + (float.Parse(TxtCEM.Text))).ToString();
                    TxtCEC1.Text = ((float.Parse(TxtCE.Text) * (float.Parse(TxtCEFU.Text) / 100) * int.Parse(TxtCENH.Text) * NroMeses) / 1000).ToString();
                    TxtCEResul.Text = "C1:[(" + TxtCE.Text + " Kw  * " + TxtCEFU.Text + " * " + TxtCENH.Text + " Mes ) * " + TxtCEMeses.Text + "]=" + TxtCEC1.Text + " Kwh";
                }
                //TxtCEC1.Text=((float.Parse(TxtCED.Text)*(float.Parse(TxtCEFU.Text)/100)*int.Parse(TxtCENH.Text)*NroMeses)/1000).ToString();




            }
            catch (Exception ex)
            {
                Log.EscribirTraza("Error asignando valores al metodo Carga Encontrada");
                Log.EscribirError(ex);
            }
        }
        protected void TxtPorc_TextChanged(object sender, EventArgs e)
        {
            try
            {
                PorcentajeDeError();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);

            }
        }

        protected bool ValidarCombos()
        {

            foreach (GridViewRow dtgItem in this.GridChequeo.Rows)
            {
                DropDownList Btn = ((DropDownList)GridChequeo.Rows[dtgItem.RowIndex].FindControl("CmbChequeo"));
                TextBox cod = ((TextBox)GridChequeo.Rows[dtgItem.RowIndex].FindControl("txtCod"));
                //posicionarnos en la row que esta el combo

                if (Btn.SelectedValue == "Seleccione Opción")
                {
                    Btn.Focus();
                    Metodos.divMensaje(Constantes.Warning, Constantes.RespuestaNoValida, PnlMsg, Constantes.Fallo);
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
                    return false;


                }
            }
            return true;
        }

        protected void GuardarBitacora()
        {
            act = BllActas.GetActa(int.Parse(Session["acta"].ToString()));
            if (act.EstadoActa == 2)
            {
                act.EstadoAnteriorActa = 2;
                act.EstadoActa = 3;
                act.ValorEcdf = decimal.Parse(TxtValorECDF.Text);
                //Guardamos el registro en la Bitacora
                ObjGrabarBit.BitaActa = int.Parse(TxtNroActa.Text);
                ObjGrabarBit.BitaUsua = Usuario.username;
                ObjGrabarBit.BitaFeca = System.DateTime.Now;
                ObjGrabarBit.BitaEsMe = "0";
                ObjGrabarBit.BitaEsCa = "0";
                ObjGrabarBit.BitaEsAc = act.EstadoActa;
                ObjGrabarBit.BitaEsAn = act.EstadoAnteriorActa;

                int r = act.UpdateEstadovalor();
                if (r > 0)
                {
                    ObjGrabarBit.Insert();
                    Log.EscribirTraza("Estado del Acta Actualizado Enviado a Proceso Simplificado");
                }
                else
                {
                    Metodos.divMensaje(Constantes.Danger, "Error al actualizar Estado del Acta", PnlMsg, Constantes.Fallo);
                }

                Metodos.divMensaje(Constantes.Succes, "Estado del Acta Actualizado", PnlMsg, Constantes.Ok);

            }
        }
        protected bool CapturarDatosBasicos()
        {
            try
            {
                if (ValidarCombos())
                {
                    ObjGrabar.AcLiActa = int.Parse(Session["acta"].ToString());

                    ObjGrabar.AcLiUser = Usuario.username;
                    ObjGrabar.AcLiFeSi = DateTime.Now;
                    ObjGrabar.AcLiFeMo = DateTime.Now;
                    ObjGrabar.AcLiPoUt = int.Parse(TxtPorcUtil.Text);
                    ObjGrabar.AcLiCaWa = decimal.Parse(TxtCargaWatt.Text);
                    ObjGrabar.AcLiCaKw = decimal.Parse(TxtCargaKws.Text);
                    ObjGrabar.AcLiKwCe = int.Parse(TxtestXCens.Text);
                    ObjGrabar.AcLiMese = int.Parse(TxtCIMeses.Text);
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }
        /*Devolucion */
        protected void BtnDevGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                if (TxtCodigo.Text == "")
                {
                    if (CapturarDatosBasicos())
                    {
                        ObjGrabar.AcLiMeLi = "05";
                        ObjGrabar.AcLiMeAn = "";
                        ObjGrabar.AcLiCoTo = int.Parse(TxtAcum.Text);

                        ObjGrabar.AcLiPrEs = decimal.Parse(TxtPromEstrato.Text);
                        ObjGrabar.AcLiCaCo = decimal.Parse(TxtCargaContra.Text);
                        ObjGrabar.AcLiCoPo = decimal.Parse(TxtConsuPoster.Text); ;
                        ObjGrabar.AcLiHora = int.Parse(TxtCCNm.Text);

                        //ObjGrabar.AcLiEsLec1 = CmbLectura1.SelectedValue;
                        //ObjGrabar.AcLiEsLec2 = CmbLectura2.SelectedValue;
                        ObjGrabar.AcLiFel1 = FechaLectura1.Text;
                        ObjGrabar.AcLiFel1 = FechaLectura2.Text;
                        ObjGrabar.AcLiLec1 = decimal.Parse(NroLectura1.Text);
                        ObjGrabar.AcLiLec2 = decimal.Parse(NroLectura2.Text);
                        ObjGrabar.AcLiDiTr = int.Parse(TxtDiasTransc1.Text);
                        ObjGrabar.AcLiVaC1 = decimal.Parse(TxtDLECDF.Text);
                        ObjGrabar.AcliDeFo = TxtDLResul.Text;
                        ObjGrabar.AcLiObse = TxtDevObser.Text;
                        ObjGrabar.AcLiDeMe = LblDevolucion.Text;
                        TxtValorECDF.Text = (TxtDLECDF.Text);
                        long r = ObjGrabar.Insert();
                        if (r > 0)
                        {
                            GuardarChequeo();
                            GuardarBitacora();
                            TxtCodigo.Text = r.ToString();
                            Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                            //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                            CargarReport();

                        }
                    }
                }
                else
                {
                    ObjGrabar = BllActa_Liquidacion.GetActa(int.Parse(TxtCodigo.Text));

                    if (CapturarDatosBasicos())
                    {

                        ObjGrabar.AcLiMeAn = ObjGrabar.AcLiMeLi;
                        ObjGrabar.AcLiMeLi = "05";
                        ObjGrabar.AcLiCoTo = int.Parse(TxtAcum.Text);
                        ObjGrabar.AcLiPrEs = decimal.Parse(TxtPromEstrato.Text);
                        ObjGrabar.AcLiCaCo = decimal.Parse(TxtCargaContra.Text);
                        ObjGrabar.AcLiCoPo = decimal.Parse(TxtConsuPoster.Text); ;
                        ObjGrabar.AcLiHora = int.Parse(TxtCCNm.Text);

                        //ObjGrabar.AcLiEsLec1 = CmbLectura1.SelectedValue;
                        //ObjGrabar.AcLiEsLec2 = CmbLectura2.SelectedValue;
                        //ObjGrabar.AcLiFeLe1 = DateTime.Parse(FechaLectura1.Text);
                        //ObjGrabar.AcLiFeLe2 = DateTime.Parse(FechaLectura2.Text);
                        ObjGrabar.AcLiLec1 = decimal.Parse(NroLectura1.Text);
                        ObjGrabar.AcLiLec2 = decimal.Parse(NroLectura2.Text);
                        ObjGrabar.AcLiDiTr = int.Parse(TxtDiasTransc1.Text);
                        ObjGrabar.AcLiVaC1 = decimal.Parse(TxtDLECDF.Text);
                        ObjGrabar.AcLiDeMe = LblDevolucion.Text;
                        ObjGrabar.AcliDeFo = TxtDLResul.Text;
                        ObjGrabar.AcLiObse = TxtDevObser.Text;
                        TxtValorECDF.Text = TxtDLECDF.Text;
                        long r = ObjGrabar.Update();
                        if (r > 0)
                        {
                            GuardarChequeo();
                            GuardarBitacora();
                            TxtCodigo.Text = r.ToString();
                            Metodos.divMensaje(Constantes.Succes, Constantes.Actualizar, PnlMsg, Constantes.Ok);
                            //     ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                            CargarReport();

                        }
                        //  ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                    }
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }

        /*EVOLUCION DE CONSUMOS*/
        protected void BtnEcGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                if (TxtCodigo.Text == "")
                {

                    if (CapturarDatosBasicos())
                    {
                        ObjGrabar.AcLiMeLi = "06";
                        ObjGrabar.AcLiMeAn = "";
                        ObjGrabar.AcLiCoTo = int.Parse(TxECCO.Text);
                        ObjGrabar.AcLiPrEs = decimal.Parse(TxtPromEstrato.Text);
                        ObjGrabar.AcLiCaCo = decimal.Parse(TxtCC.Text);
                        ObjGrabar.AcLiCoPo = decimal.Parse(TxtEC.Text); ;
                        ObjGrabar.AcLiHora = int.Parse(TxtCCNm.Text);
                        ObjGrabar.AcLiVaC1 = decimal.Parse(TxtECCDF.Text);
                        ObjGrabar.AcliDeFo = TxtECResult.Text;
                        ObjGrabar.AcLiObse = TxtECObser.Text;
                        ObjGrabar.AcLiDeMe = LblEvolucion.Text;
                        TxtValorECDF.Text = TxtECCDF.Text;
                        long r = ObjGrabar.Insert();
                        if (r > 0)
                        {
                            GuardarChequeo();
                            GuardarBitacora();
                            TxtCodigo.Text = r.ToString();
                            Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                            //  ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                            CargarReport();

                        }
                    }
                    else
                    {
                        ObjGrabar = BllActa_Liquidacion.GetActa(int.Parse(TxtCodigo.Text));

                        if (CapturarDatosBasicos())
                        {
                            ObjGrabar.AcLiMeAn = ObjGrabar.AcLiMeAn;
                            ObjGrabar.AcLiMeLi = "06";

                            ObjGrabar.AcLiCoTo = int.Parse(TxECCO.Text);
                            ObjGrabar.AcLiPrEs = decimal.Parse(TxtPromEstrato.Text);
                            ObjGrabar.AcLiCaCo = decimal.Parse(TxtCC.Text);
                            ObjGrabar.AcLiCoPo = decimal.Parse(TxtEC.Text); ;
                            ObjGrabar.AcLiHora = int.Parse(TxtCCNm.Text);
                            ObjGrabar.AcLiVaC1 = decimal.Parse(TxtECCDF.Text);
                            ObjGrabar.AcliDeFo = TxtECResult.Text;
                            ObjGrabar.AcLiObse = TxtECObser.Text;
                            ObjGrabar.AcLiDeMe = LblEvolucion.Text;
                            TxtValorECDF.Text = TxtECCDF.Text;
                            long r = ObjGrabar.Update();
                            if (r > 0)
                            {
                                GuardarChequeo();
                                GuardarBitacora();
                                TxtCodigo.Text = r.ToString();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Actualizar, PnlMsg, Constantes.Ok);
                                //  ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                                CargarReport();

                            }
                            //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }
        /*PROMEDIO DE ESTRATO*/
        protected void BtnPromGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                if (int.Parse(TxtPromECDF.Text) > 0)
                {
                    if (TxtCodigo.Text == "")
                    {
                        GuardarChequeo();
                        if (CapturarDatosBasicos())
                        {
                            ObjGrabar.AcLiMeLi = "09";
                            ObjGrabar.AcLiMeAn = "";
                            ObjGrabar.AcLiCoTo = int.Parse(TxtPromCO.Text);
                            ObjGrabar.AcLiPrEs = decimal.Parse(TxtProm.Text);
                            ObjGrabar.AcLiCaCo = decimal.Parse(TxtCC.Text);
                            ObjGrabar.AcLiCoPo = decimal.Parse(TxtEC.Text); ;
                            ObjGrabar.AcLiHora = int.Parse(TxtCCNm.Text);
                            ObjGrabar.AcLiVaC1 = decimal.Parse(TxtPromECDF.Text);
                            ObjGrabar.AcliDeFo = TxtPromResul.Text;
                            ObjGrabar.AcLiObse = TxtPromObser.Text;
                            TxtValorECDF.Text = TxtPromECDF.Text;
                            long r = ObjGrabar.Insert();
                            if (r > 0)
                            {
                                GuardarBitacora();

                                TxtCodigo.Text = r.ToString();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                                CargarReport();

                            }
                        }
                    }
                    else
                    {
                        ObjGrabar = BllActa_Liquidacion.GetActa(int.Parse(TxtCodigo.Text));
                        GuardarChequeo();
                        if (CapturarDatosBasicos())
                        {
                            ObjGrabar.AcLiMeAn = ObjGrabar.AcLiMeAn;
                            ObjGrabar.AcLiMeLi = "09";
                            ObjGrabar.AcLiCoTo = int.Parse(TxtPromCO.Text);
                            ObjGrabar.AcLiPrEs = decimal.Parse(TxtProm.Text);
                            ObjGrabar.AcLiCaCo = decimal.Parse(TxtCC.Text);
                            ObjGrabar.AcLiCoPo = decimal.Parse(TxtEC.Text); ;
                            ObjGrabar.AcLiHora = int.Parse(TxtCCNm.Text);
                            ObjGrabar.AcLiVaC1 = decimal.Parse(TxtPromECDF.Text);
                            ObjGrabar.AcliDeFo = TxtPromResul.Text;
                            ObjGrabar.AcLiObse = TxtPromObser.Text;
                            TxtValorECDF.Text = TxtPromECDF.Text;
                            long r = ObjGrabar.Update();
                            if (r > 0)
                            {
                                GuardarBitacora();

                                TxtCodigo.Text = r.ToString();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Actualizar, PnlMsg, Constantes.Ok);
                                // ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                                CargarReport();

                            }
                            //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                        }
                    }
                }
                else
                {
                    Metodos.divMensaje(Constantes.Danger, Constantes.Ecdf, PnlMsg, Constantes.Advertencia);
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }

        /*porcentaje de error*/
        protected void BtnPorGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                if (int.Parse(TxtPorcECDF.Text) > 0)
                {
                    if (TxtCodigo.Text == "")
                    {
                        if (CapturarDatosBasicos())
                        {
                            ObjGrabar.AcLiMeLi = "11";
                            ObjGrabar.AcLiMeAn = "";
                            ObjGrabar.AcLiUser = Usuario.username;
                            ObjGrabar.AcLiFeSi = DateTime.Now;
                            ObjGrabar.AcLiFeMo = DateTime.Now;
                            ObjGrabar.AcLiPoUt = int.Parse(TxtPorcUtil.Text);
                            ObjGrabar.AcLiCaWa = decimal.Parse(TxtCargaWatt.Text);
                            ObjGrabar.AcLiCaKw = decimal.Parse(TxtCargaKws.Text);
                            ObjGrabar.AcLiKwCe = int.Parse(TxtestXCens.Text);
                            ObjGrabar.AcLiPrEs = decimal.Parse(TxtPorc.Text);
                            ObjGrabar.AcLiCoTo = int.Parse(txtPorcCO.Text);
                            ObjGrabar.AcLiVaC1 = decimal.Parse(TxtPorcECDF.Text);
                            ObjGrabar.AcliDeFo = TxtPorcresult.Text;
                            ObjGrabar.AcLiObse = TxtPorcObser.Text;
                            ObjGrabar.AcLiDeMe = LblPorce.Text;
                            TxtValorECDF.Text = TxtPorcECDF.Text;
                            long r = ObjGrabar.Insert();
                            if (r > 0)
                            {
                                GuardarBitacora();
                                GuardarChequeo();
                                TxtCodigo.Text = r.ToString();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                                //   ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                                CargarReport();

                            }
                        }
                    }
                    else
                    {
                        ObjGrabar = BllActa_Liquidacion.GetActa(int.Parse(TxtCodigo.Text));

                        if (CapturarDatosBasicos())
                        {
                            ObjGrabar.AcLiMeAn = ObjGrabar.AcLiMeLi;
                            ObjGrabar.AcLiMeLi = "11";
                            ObjGrabar.AcLiUser = Usuario.username;
                            ObjGrabar.AcLiFeSi = DateTime.Now;
                            ObjGrabar.AcLiFeMo = DateTime.Now;
                            ObjGrabar.AcLiPoUt = int.Parse(TxtPorcUtil.Text);
                            ObjGrabar.AcLiCaWa = decimal.Parse(TxtCargaWatt.Text);
                            ObjGrabar.AcLiCaKw = decimal.Parse(TxtCargaKws.Text);
                            ObjGrabar.AcLiKwCe = int.Parse(TxtestXCens.Text);
                            ObjGrabar.AcLiPrEs = decimal.Parse(TxtPorc.Text);
                            ObjGrabar.AcLiCoTo = int.Parse(txtPorcCO.Text);
                            ObjGrabar.AcLiVaC1 = decimal.Parse(TxtPorcECDF.Text);
                            ObjGrabar.AcliDeFo = TxtPorcresult.Text;
                            ObjGrabar.AcLiObse = TxtPorcObser.Text;
                            TxtValorECDF.Text = TxtPorcECDF.Text;
                            long r = ObjGrabar.Update();
                            if (r > 0)
                            {
                                GuardarBitacora();
                                GuardarChequeo();
                                TxtCodigo.Text = r.ToString();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Actualizar, PnlMsg, Constantes.Ok);
                                // ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                                CargarReport();
                            }
                            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                        }
                    }
                }
                else
                {
                    Metodos.divMensaje(Constantes.Danger, Constantes.Ecdf, PnlMsg, Constantes.Advertencia);
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }

        //historial del acta
        #region HistorialActa

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
        #endregion
        //documentos del acta
        #region DocumentosActa
        protected void gridDocume_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                gridDocume.PageIndex = e.NewPageIndex;
                gridDocume.DataSource = (List<BllDocumentos.Documentos>)Session["ListDocu"];
                gridDocume.DataBind();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
            }
        }
        protected void FillDocumentos()
        {
            try
            {
                generarActa();
                Session["ListDocu"] = BllDocumentos.GetCargoXActa(int.Parse(Session["acta"].ToString()), "");
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
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
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
            catch (Exception ex)
            {

                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "revisar();", true);
                Log.EscribirError(ex);
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
                return false;

            }
        }

        protected void FillTipoDoc()
        {
            try
            {

                CmbtipoDocumento.DataSource = BllTipoDocumento.CargarGridView();
                CmbtipoDocumento.DataTextField = "TiDoDocu";
                CmbtipoDocumento.DataValueField = "TiDoCodi";
                CmbtipoDocumento.DataBind();

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        #endregion
        //carga encontrada
        protected void BtnCEGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                if (TxtCodigo.Text == "")
                {
                    if (TxtCEC1.Text != "0")
                    {
                        if (CapturarDatosBasicos())
                        {
                            ObjGrabar.AcLiMeLi = "02";
                            ObjGrabar.AcLiMeAn = "";
                            ObjGrabar.AcLiUser = Usuario.username;
                            ObjGrabar.AcLiFeSi = DateTime.Now;
                            ObjGrabar.AcLiFeMo = DateTime.Now;
                            ObjGrabar.AcLiPoUt = int.Parse(TxtPorcUtil.Text);
                            ObjGrabar.AcLiCaWa = decimal.Parse(TxtCargaWatt.Text);
                            ObjGrabar.AcLiCaKw = decimal.Parse(TxtCargaKws.Text);
                            ObjGrabar.AcLiKwCe = int.Parse(TxtestXCens.Text);
                            ObjGrabar.AcLiPrEs = decimal.Parse(TxtPorc.Text);
                            ObjGrabar.AcLiCoTo = int.Parse(txtPorcCO.Text);
                            ObjGrabar.AcLiVaC1 = decimal.Parse(TxtCEC1.Text);
                            ObjGrabar.AcliDeFo = TxtCEResul.Text;
                            ObjGrabar.AcLiDeMe = LblcargaEncontrada.Text;
                            ObjGrabar.AcLiObse = TxtCEObser.Text;
                            ObjGrabar.AcLiVolt = decimal.Parse(TxtCEV1.Text);
                            ObjGrabar.AcLiVolt2 = decimal.Parse(TxtCEV2.Text);
                            ObjGrabar.AcLifa1 = decimal.Parse(TxtCEF1.Text);
                            ObjGrabar.AcLifa2 = decimal.Parse(TxtCEF2.Text);
                            ObjGrabar.AcLifa3 = decimal.Parse(TxtCEV2.Text);
                            TxtValorECDF.Text = TxtCEC1.Text;
                            long r = ObjGrabar.Insert();
                            if (r > 0)
                            {
                                GuardarBitacora();
                                TxtCodigo.Text = r.ToString();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                                //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                                CargarReport();

                            }
                        }
                    }
                    else
                    {
                        ObjGrabar = BllActa_Liquidacion.GetActa(int.Parse(TxtCodigo.Text));

                        if (CapturarDatosBasicos())
                        {
                            ObjGrabar.AcLiMeAn = ObjGrabar.AcLiMeLi;
                            ObjGrabar.AcLiMeLi = "02";
                            ObjGrabar.AcLiUser = Usuario.username;
                            ObjGrabar.AcLiFeSi = DateTime.Now;
                            ObjGrabar.AcLiFeMo = DateTime.Now;
                            ObjGrabar.AcLiPoUt = int.Parse(TxtPorcUtil.Text);
                            ObjGrabar.AcLiCaWa = decimal.Parse(TxtCargaWatt.Text);
                            ObjGrabar.AcLiCaKw = decimal.Parse(TxtCargaKws.Text);
                            ObjGrabar.AcLiKwCe = int.Parse(TxtestXCens.Text);
                            ObjGrabar.AcLiPrEs = decimal.Parse(TxtPorc.Text);
                            ObjGrabar.AcLiCoTo = int.Parse(txtPorcCO.Text);
                            ObjGrabar.AcLiVaC1 = decimal.Parse(TxtCEC1.Text);
                            ObjGrabar.AcliDeFo = TxtCEResul.Text;
                            ObjGrabar.AcLiObse = TxtCEObser.Text;
                            ObjGrabar.AcLiVolt = decimal.Parse(TxtCEV1.Text);
                            ObjGrabar.AcLiVolt2 = decimal.Parse(TxtCEV2.Text);
                            ObjGrabar.AcLifa1 = decimal.Parse(TxtCEF1.Text);
                            ObjGrabar.AcLifa2 = decimal.Parse(TxtCEF2.Text);
                            ObjGrabar.AcLifa3 = decimal.Parse(TxtCEV2.Text);
                            TxtValorECDF.Text = TxtCEC1.Text;
                            long r = ObjGrabar.Update();
                            if (r > 0)
                            {
                                GuardarBitacora();
                                TxtCodigo.Text = r.ToString();
                                Metodos.divMensaje(Constantes.Succes, Constantes.Actualizar, PnlMsg, Constantes.Ok);
                                //  ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                                CargarReport();
                            }
                            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                        }
                    }
                }
                else
                {
                    Metodos.divMensaje(Constantes.Danger, Constantes.Ecdf, PnlMsg, Constantes.Advertencia);
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }

        protected void GridConsumos_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            try
            {

                int i = 0;
                var ch = e.Row.FindControl("chkConsumo") as System.Web.UI.WebControls.CheckBox;
                if (e.Row.RowType == DataControlRowType.DataRow)
                {

                    //CONTAR LOS 5 ULTIMOS MESES Y SI TRAE MENOS DIVIDIR POR EL NUMERO DE MESES CONSUMIDOS PARA ENCONTRAR EL TOTAL DE LOS ULTMOS CONSUMOS
                    if (e.Row.RowIndex < 5)
                    {
                        ch.Checked = true;
                        if (ch.Checked)
                        {
                            TxtAcum.Text = (int.Parse(TxtAcum.Text) + int.Parse(e.Row.Cells[1].Text)).ToString();
                            NroMeses += 1;
                        }


                    }

                }
                //cargarLista();
                Session["nroMes"] = NroMeses.ToString();

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }

        /***************************************************** RECHAZAR ACTAS **********************************************************************/

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
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
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
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarCombos, PnlMsg, Constantes.Fallo);
            }
        }
        protected void CargarReport()
        {
            try
            {

                Session["conse"] = TxtCodigo.Text;
                Session["acta"] = TxtNroActa.Text;
                GenerarPdf.GenerarLiquidacion(int.Parse(Session["acta"].ToString()), int.Parse(Session["conse"].ToString()), Usuario.id_usuario.ToString());
                Response.Redirect("Gestionbandejas.aspx", false);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.FalloAlCargarRe, PnlMsg, Constantes.Fallo);
            }
        }

        protected void GuardarChequeo()
        {
            try
            {
                BllRespuestaLista.RespuestaLista Res = new BllRespuestaLista.RespuestaLista();
                int r = 0;
                for (int i = 0; i <= GridChequeo.Rows.Count - 1; i++)
                {
                    TextBox Codi = (TextBox)GridChequeo.Rows[i].FindControl("txtCod");
                    DropDownList res = (DropDownList)GridChequeo.Rows[i].FindControl("CmbChequeo");
                    Res.LiReActa = int.Parse(TxtNroActa.Text);
                    Res.LiRePregu = int.Parse(Codi.Text);
                    Res.LiReResp = res.SelectedValue;
                    Res.LiReEsta = 2;
                    Res.LiReUsua = Usuario.username;
                    r += Res.Insert();
                }
                Metodos.divMensaje(Constantes.Succes, r.ToString() + " Registros guardados en Lista de chequeo", PnlMsg, Constantes.Ok);
                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
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
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }

        /*Metodos asociados a la anomalia*/
        protected void FillMetodosAnomalia(List<BllMetodosAnomalia.MetodosAnomalia> ma)
        {
            try
            {
                Session["ListMetAnomalias"] = ma;
                if (!string.IsNullOrEmpty(Session["ListMetAnomalias"].ToString()))
                {
                    GridMetodosAno.DataSource = (List<BllMetodosAnomalia.MetodosAnomalia>)Session["ListMetAnomalias"];
                    GridMetodosAno.DataBind();
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
            }
        }
        protected void GridMetodosAno_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridMetodosAno.PageIndex = e.NewPageIndex;
                GridMetodosAno.DataSource = (List<BllMetodosAnomalia.MetodosAnomalia>)Session["ListMetAnomalias"];
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
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
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
                    Ano.AnotEsta = 2;
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
                    int rn = Ano.Update();
                    if (rn > 0)
                    {

                        Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);
                        fillanotaciones();
                        CleanControl(pnlAnot.Controls);
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "anotaciones();", true);

                    }


                }



            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }

        protected void GridAno_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {

                GridAno.PageIndex = e.NewPageIndex;
                GridAno.DataSource = (List<BllAnotacionActa.AnotacionActa>)Session["Anota"];
                GridAno.DataBind();
                // ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
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
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlConsultarDatos, PnlMsg, Constantes.Fallo);
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

        protected void BtnLimpiar_Click1(object sender, EventArgs e)
        {
            try
            {
                CleanControl(pnlAnot.Controls);
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "anotaciones();", true);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);

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

                }
                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "revisar();", true);

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }

  

        protected void GridChequeo_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridChequeo.PageIndex = e.NewPageIndex;
                GridChequeo.DataSource = (List<BllListaChequeo.ListaChequeo>)Session["ListChequeo"];
                GridChequeo.DataBind();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        protected void chkMedidor_CheckedChanged(object sender, EventArgs e)
        {
            try
            {
               
                cargaEncontrada();
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }



        protected void ChkDeriva_CheckedChanged(object sender, EventArgs e)
        {
            try
            {         
                cargaEncontrada();
            }
            catch (Exception ex)
            {

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

        protected void chkConsumo_CheckedChanged(object sender, EventArgs e)
        {
            try
            {

                CheckBox ch = (CheckBox)(sender);

                // Naming container me da la referencia de donde esta el control seleccionado
                GridViewRow row = (GridViewRow)ch.NamingContainer;


                if (ch.Checked)
                {
                    if (NroMeses < 5)
                    {
                        NroMeses += 1;
                        Session["nroMes"] = NroMeses;
                        int r = int.Parse(TxtAcum.Text) + int.Parse(row.Cells[1].Text);
                        TxtAcum.Text = r.ToString();
                        PromedioEstrato();
                        //DecolucionLecturas();
                        //EvolucionConsumo();
                        cargaEncontrada();
                        PorcentajeDeError();
                        //CargarListaChequeo();
                        CalcularValorECDF();
                        CargarContratada();
                        
                    }
                    else
                    {
                        ch.Checked = false;
                    }


                }
                else
                {
                    if (NroMeses <= 5)
                    {
                        NroMeses -= 1;
                        int r = int.Parse(TxtAcum.Text) - int.Parse(row.Cells[1].Text);
                        TxtAcum.Text = r.ToString();
                        Session["nroMes"] = NroMeses;
                        PromedioEstrato();
                        //DecolucionLecturas();
                        //EvolucionConsumo();
                        cargaEncontrada();
                        PorcentajeDeError();
                        //CargarListaChequeo();
                        CalcularValorECDF();
                        CargarContratada();
                        cargarLista();
                    }
                }


                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Metodo();", true);

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        protected void GridRechazo_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {

        }

        protected void BtnConsumos_Click(object sender, EventArgs e)
        {
            try
            {

                WSConsumo ws = new WSConsumo();
                ws.nic = act.nic;
                //act._clientCloseTs.AddDays(7);
                DateTime fecha = Convert.ToDateTime(act._clientCloseTs.AddDays(7.0), new CultureInfo("es-ES"));
                fecha.AddDays(4);
                ws.fecha = fecha.Year.ToString() + fecha.Month.ToString() + fecha.Day.ToString();
                ws.CallWebService();
                if (ws.ListaConsumos.Count() > 0)
                {
                    BllConsumo.Delete(act._number);
                    foreach (var item in ws.ListaConsumos)
                    {
                        Con.ConsActa = act._number;
                        Con.ConsFech = item.fecha;
                        Con.ConsValo = int.Parse(item.consumo);
                        Con.Insert();

                    }
                    FillConsumo();
                }
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Metodo();", true);
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }

        protected void BtnTarifa_Click(object sender, EventArgs e)
        {
            try
            {

                WSTarifa ws = new WSTarifa();
                act = BllActas.GetActa(int.Parse(Session["acta"].ToString()));
                ws.nic = act.nic;
                //act._clientCloseTs.AddDays(7);
                DateTime fecha = Convert.ToDateTime(act._clientCloseTs.AddDays(7.0), new CultureInfo("es-ES"));
                fecha.AddDays(4);
                ws.fecha = fecha.Year.ToString() + fecha.Month.ToString() + fecha.Day.ToString();
                ws.CallWebService();
                if (ws.Tarifa != null)
                {

                    act.codigoTarifa = ws.Tarifa.Codigo;
                    act.ValorTarifa = decimal.Parse(ws.Tarifa.ValorTarifa);
                    act.cargaContratada = float.Parse(ws.Tarifa.CargaContratada) * 1000;
                    act.Update();

                }
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Metodo();", true);
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }

        protected void FillEstadisticas(int[] l,double[] li  )
        {
            try
            {
                statistics s = new statistics();
                s.list = l;
                TxtMediana.Text = s.mediana().ToString();
                TxtMediaAcot.Text = s.mean().ToString();
                TxtPromedio.Text = s.mean().ToString();
                Descriptive d = new Descriptive(li);
                d.Analyze();
                DescriptiveResult res = d.Result;
                TxtDesviacionEs.Text = res.StdDev.ToString("0,0.00", CultureInfo.InvariantCulture);
                
                if (res.StdDev <= 30)
                {
                    TxtVarianza.Text = "7";
                }
                else if (res.StdDev <= 60)
                {
                    TxtVarianza.Text = "6";
                }
                else if (res.StdDev <= 120)
                {
                    TxtVarianza.Text = "5";
                }
                else if (res.StdDev <= 500)
                {
                    TxtVarianza.Text = "4";
                }
                else if (res.StdDev <= 1000)
                {
                    TxtVarianza.Text = "3";
                }
                else if (res.StdDev <= 2000)
                {
                    TxtVarianza.Text = "2";
                }
                else
                {
                    TxtVarianza.Text = "1";
                }
                //SI(E5<=30;7;SI(E5<=60;6;SI(E5<=120;5;SI(E5<=500;4;SI(E5<=1000;3;SI(E5<=2000;2;1))))))
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza("Error al calcular estadisticas del acta" + Session["acta"].ToString());
            }
        }
        protected void cargarLista()
        {
            try
            {
                int[] lis = new int[NroMeses];
                Double[] list = new double[NroMeses];
                foreach (GridViewRow dtgItem in this.GridConsumos.Rows)
                {
                    //SSSSSint conta = 0;
                    CheckBox Btn = ((CheckBox)GridConsumos.Rows[dtgItem.RowIndex].FindControl("chkConsumo"));

                    if (Btn.Checked)
                    {
                        lis[dtgItem.RowIndex]=(int.Parse(GridConsumos.Rows[dtgItem.RowIndex].Cells[1].Text));
                        list[dtgItem.RowIndex] = (double.Parse(GridConsumos.Rows[dtgItem.RowIndex].Cells[1].Text));
                    }

                }
                FillEstadisticas(lis,list);
            }
            catch (Exception)
            {

                throw;
            }
        }
        
    }

}