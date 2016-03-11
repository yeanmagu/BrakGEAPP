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
using System.IO;
using Ionic.Zip;
namespace Generals.Web
{
    public partial class VerDatosActa : PaginaBase
    {
        BllActa_Medidor.Acta_Medidor Med = new BllActa_Medidor.Acta_Medidor();
        BllDocumentos.Documentos Doc = new BllDocumentos.Documentos();
        List<BllAnomalias.Anomalias> An = new List<BllAnomalias.Anomalias>();
        List<BllMetodosAnomalia.MetodosAnomalia> Ma = new List<BllMetodosAnomalia.MetodosAnomalia>();        
        BllMetodosAnomalia.MetodosAnomalia M = new BllMetodosAnomalia.MetodosAnomalia();
       private  static  BllActas.Actas act = new BllActas.Actas();
        BllTarifa.Tarifa ta = new BllTarifa.Tarifa();
        BllActa_Liquidacion.Acta_Liquidacion ObjGrabar = new BllActa_Liquidacion.Acta_Liquidacion();
        BllBitacora.Bitacora ObjGrabarBit = new BllBitacora.Bitacora();
        static List<BllAC_Sellos.AC_Sellos> Sellos = new List<BllAC_Sellos.AC_Sellos>();             
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {

                    
                    Session["Titulo"] = "Datos del Acta " ;
					if (Session["acta"] != null)
					{           
                        ValidarAutorizacion();
                        Panel1.Visible = true;     
                        BuscarActa(Session["acta"].ToString());
                        if (Usuario.id_rol == 10 || Usuario.id_rol==10017)
                        {
                            pnlReinicio.Visible = true;
                        }
                        else
                        {
                            pnlReinicio.Visible = false;
                        }
                    }
                    CargarCausas();
                    FillTipoDoc();
                  //  FillLiquidacion();

                }
                else
                {
                    
                    Metodos.CargarImagenes(pnlAnomalias, act._number, 2, 0);
                    Metodos.CargarImagenes(pnlDoc, act._number, 2, 1);
                }
            }
            catch (Exception ex)
            {
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
            }
        }
        protected void cargarrechazos(int acta)
        {
            try
            {
                GridRechazo.DataSource = BllActasRechazadas.CargarGridView(acta);
                GridRechazo.DataBind();
            }
            catch (Exception ex)
            {
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
                nic1.Text = act.nic;
                TxtNroActa1.Text = act._number.ToString();
                tipocliente1.Text = act.tipoCliente;
                TxtFechaActa.Text = act._clientCloseTs.ToShortDateString();
                TxtDireccionSumi.Text = act.direccion;
                CmbOficina.Text = BllEmpresas.GetPerson(Pro.Oficina).EmprNomb;

                TxtMunicipio.Text = act.municipio;
                txtFR1.Text = Pro.AnLaProce;
                direccionNotificacion.Text = Pro.DireProce;
                Txtempresamensa.Text =BllEmpresaMensajeria.GetEMensajeria( BllMensajeria.GetActa(act._number).MensOper).EmMeNomb;

                FillRespuesta();
                //TxtAnomaRev.Text=Pro.
            }
            catch (Exception ex)
            {
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
                    List<BllAnomalias.Anomalias> ano = (List<BllAnomalias.Anomalias>)Session["ListAnomalias"];
                    foreach (var item in ano)
                    {
                        TxtAnomaRev.Text += item.AcAnDesc + ", ";
                    }
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

        protected void GridCargos_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridAnomalias.PageIndex = e.NewPageIndex;
                GridAnomalias.DataSource = (List<BllAnomalias.Anomalias>)Session["ListAnomalias"];
                GridAnomalias.DataBind();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
            }
            catch (Exception ex) { mensaje(Constantes.ErrorAlCargarGrid); }
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
            catch (Exception ex) { mensaje(Constantes.ErrorAlCargarGrid); }
        }
             
		protected void BuscarActa(string acta)
		{
			try
			{ 				
				act = BllActas.GetActa(int.Parse(acta));
               TxtFechaCarga.Text = act.fechaCarga;
                _clientCloseTs.Text = act._clientCloseTs.ToString("dd/MM/yyyy", new CultureInfo("es-ES")) + " " + act._clientCloseTs.ToString("hh:mm:ss tt",
                  CultureInfo.InvariantCulture); ;
                Session["Titulo"] = "Datos del Acta NIC:" + act.nic + " " + Session["acta"].ToString();
                TxtNroActa.Text = act._number.ToString();
                TxtNit.Text = act.nic;
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
                TxtValorECDF.Text = String.Format("{0:g}",act.ValorEcdf);
                txtDuplicador.Text = act.duplicador;
                TxtPiso.Text = act.piso;
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
                txtTar1.Text = String.Format("{0:C2}", (Math.Round(float.Parse(act.ValorTarifa.ToString()), 2)));
                cedulaOperario.Text = act.cedulaOperario;
                nombreOperario.Text = act.nombreOperario;
                apellido1Operario.Text = act.apellido1Operario + " " + act.apellido2Operario;
                empresaOperario.Text = act.empresaOperario;
                buscarprotocolo();
                if (act.EnergiaAnticipada != null)
                {
                    txtEcdAn.Text = (Math.Round(float.Parse(act.EnergiaAnticipada.ToString()), 2)).ToString();
                    txtTota1.Text = (act.EnergiaAnticipada * act.ValorTarifa).ToString();
                    txtTota1.Text = String.Format("{0:C2}", (Math.Round(float.Parse(txtTota1.Text), 2)));

                }
                TxtFr.Text = act.FRAnticipado;
                BuscarDatosMedidor(int.Parse(Session["acta"].ToString()));
                FillBitacora();
                FillDocumentos();
                fillanotaciones();
                FillAnomalias();
                FillCensoActas();
                BuscarLiqu();
                fillanotaciones();
                FillTrabajos();
                FillMateriales();
                TxtFr.Text = act.FRAnticipado;
                TxtMunicipio.Text = act.municipio.ToUpper();
                buscarProceso();
                cargarrechazos(act._number);
                txtDuplicador.Text = act.duplicador;
                TxtPiso.Text = act.piso;
                Metodos.CargarImagenes(pnlAnomalias, act._number, 2, 0);
                Metodos.CargarImagenes(pnlDoc, act._number, 2, 1);
                //BuscarAnomalia(Session["acta"].ToString());
                FillRespuesta();

                fillSellos(act._number.ToString());
			}
			catch (Exception ex)
			{
                Log.EscribirError(ex);
			}
		}
        protected void buscarprotocolo()
        {
            try
            {
                BllProtocolo.Protocolo Pro = new BllProtocolo.Protocolo();
                BllProtocolo con = new BllProtocolo();
                Pro= con.GetProtocoActa(act._number);
                nis.Text = Pro.Nis;
                ResultadoExactitud.Text = Pro.ResultadoExactitud;
                Fecha_Res_Exactitud.Text = Pro.Fecha_Res_Exactitud;
                TipoEnergia.Text = Pro.TipoEnergia;
                ResultadoPropieDialectrica.Text = Pro.ResultadoPropieDialectrica;
                ResultadoArranque.Text = Pro.ResultadoArranque;
                ResultadoEnsayoFuncioSinCarga.Text = Pro.ResultadoEnsayoFuncioSinCarga;
                ErrorPorcentual.Text = Pro.ErrorPorcentual;
                ErrorporcenEnEnergiaReactiva.Text=Pro.ErrorporcenEnEnergiaReactiva.ToString();
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
            catch ( Exception ex)
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
        protected void BuscarDatosMedidor(int act)
        {
            try
            {
              Med=  BllActa_Medidor.GetMedidorEncontrado(act);
             
                 

                numero.Text=  Med.numero;
                marca.Text=Med.marca;
                tipoRevision.Text=  Med.tipoRevision;
                tipo.Text=Med.tipo;
                tecnologia.Text= Med.tecnologia; lecturaUltimaFecha.Text=Med.lecturaUltimaFecha;
                lecturaUltima.Text= Med.lecturaUltima;
                lecturaActual.Text=Med.lecturaActual;kdkh_tipo.Text= Med.kdkh_tipo; kdkh_value.Text=Med.kdkh_value;
                digitos.Text=Med.digitos;decimales.Text= Med.decimales; nFases.Text= Med.nFases;voltajeNominal.Text= Med.voltajeNominal; rangoCorrienteMin.Text= Med.rangoCorrienteMin;
                rangoCorrienteMax.Text= Med.rangoCorrienteMax; corrienteN_mec.Text= Med.corrienteN_mec; corrienteFN_mec.Text= Med.corrienteFN_mec; voltageNT_mec.Text=Med.voltageNT_mec; 
                voltageRS_mec.Text= Med.voltageRS_mec;
               voltageFNR_mec.Text= Med.voltageFNR_mec; voltageFTR_mec.Text=Med.voltageFTR_mec; corrienteR_mec.Text=Med.corrienteR_mec; voltageFNS_mec.Text= Med.voltageFNS_mec; voltageFTS_mec.Text= Med.voltageFTS_mec; 
                corrienteS_mec.Text=Med.corrienteS_mec; pruebaAlta.Text= Med.pruebaAlta; voltageFNR_alta.Text=Med.voltageFNR_alta;corrienteR_alta.Text= Med.corrienteR_alta;vueltasR_alta.Text= Med.vueltasR_alta;
                voltageFNS_alta.Text= Med.voltageFNS_alta;
               corrienteS_alta.Text= Med.corrienteS_alta; vueltasS_alta.Text=Med.vueltasS_alta;tiempoR_alta.Text= Med.tiempoR_alta; errorPruebaR_alta.Text= Med.errorPruebaR_alta; 
                errorPruebaS_alta.Text= Med.errorPruebaS_alta; pruebaBaja.Text=Med.pruebaBaja; voltageFNR_baja.Text= Med.voltageFNR_baja;corrienteR_baja.Text= Med.corrienteR_baja;
                vueltasR_baja.Text=Med.vueltasR_baja;tiempoR_baja.Text=Med.tiempoR_baja;voltageFNS_baja.Text= Med.voltageFNS_baja; corrienteS_baja.Text=Med.corrienteS_baja;
               vueltasS_baja.Text= Med.vueltasS_baja; tiempoS_baja.Text= Med.tiempoS_baja; errorPruebaR_baja.Text= Med.errorPruebaR_baja; pruebaDosificacion.Text= Med.pruebaDosificacion;
                voltageFNR_dosif.Text= Med.voltageFNR_dosif; corrienteR_dosif.Text= Med.corrienteR_dosif;
                lecturaInicialR_dosif.Text=Med.lecturaInicialR_dosif;lecturaFinalR_dosif.Text= Med.lecturaFinalR_dosif;
                errorPruebaR_dosif.Text=Med.errorPruebaR_dosif; giroNormal.Text=Med.giroNormal;rozamiento.Text= Med.rozamiento;medidorFrena.Text= Med.medidorFrena;
                estadoConexiones.Text= Med.estadoConexiones; continuidad.Text=Med.continuidad;
               pruebaPuentes.Text= Med.pruebaPuentes;display.Text= Med.display;
               estadoIntegrador.Text=Med.estadoIntegrador; retirado.Text= Med.retirado; envioLab.Text= Med.envioLab; 
                envioLabNumCustodia.Text= Med.envioLabNumCustodia; propietario.Text= Med.propietario;numeroCertificadoCalibracion.Text= Med.numeroCertificadoCalibracion; 
                laboratorio.Text= Med.laboratorio;
                protocolo.Text = Med.protocolo; resolucionAcreditacion.Text = Med.resolucionAcreditacion; resolucionFecha.Text = Med.resolucionFecha;
                TxtMedidor.Text = Med.numero;
                TxtMarcaMed.Text = Med.marca;
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }
        /*BUSCAR ANOMALIA POR ACTA*/
        public JavaScriptSerializer javaSerial = new JavaScriptSerializer();
        public int[] terms;
        //protected void BuscarAnomalia(string acta)
        //{
        //    try
        //    {
        //        List<BllMetodosAnomalia.MetodosAnomalia> Ma1 = new List<BllMetodosAnomalia.MetodosAnomalia>();
        //        An = BllAnomalias.GetAnomaliaXNumero(int.Parse(acta.ToString()));
        //        List<int> list = new List<int>();
        //        if (An.Count > 0)
        //        {
        //            foreach (var item in An)
        //            {
        //                var s = BllTiposIrregularidades.GetAnomalia(item.AcAnCodi).TiIrIndi;
        //                if (BllMetodosAnomalia.Exist(s.ToString()) == 1)
        //                {
        //                    Ma = BllMetodosAnomalia.GetMeAnMeLiXCodi(s.ToString());
        //                    // You can convert it back to an array if you would like to
        //                    foreach (var M in Ma)
        //                    {
        //                        list.Add(int.Parse(M.MeAnMeLi));
        //                        Ma1.Add(M);
        //                    }
        //                    terms = list.ToArray(); 
        //                }
                       
        //            }
        //            FillMetodosAnomalia(Ma1);
        //        }

        //        if (list.Count == 0)
        //        {
        //            List<BllMetodoLiquidacion.MetodoLiquidacion> Me = BllMetodoLiquidacion.CargarGridView();

        //            foreach (var item in Me)
        //            {
        //                list.Add(int.Parse(item.MeLiCodi));
        //            } 
        //            //list.Add(1);
        //            //list.Add(2);
        //            //list.Add(3);
        //            //list.Add(4);
        //            //list.Add(5);
        //            //list.Add(6);
        //            //list.Add(9);
        //            //list.Add(10);
        //            //list.Add(11);
        //            terms = list.ToArray();
        //        }
                

        //    }
        //    catch (Exception ex)
        //    {
                
        //        Log.EscribirError(ex);
        //    }
        //}

        //Metodos de liquidación
        
            protected void BtnCerrar_Click(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
        }

		protected void BtnLimpiar_Click(object sender, EventArgs e)
		{
			Metodos.CleanControl(this.Controls); 
		}

		//private void FillLiquidacion()
		//{
		//	try
		//	{
  //              if (Usuario.id_rol != 3)
  //              {
  //                  pnlGrilla.Visible = true;
  //                  Session["ListLiquidacion"] = BllActa_Liquidacion.CargarGridView();
  //                  if (!string.IsNullOrEmpty(Session["ListLiquidacion"].ToString()))
  //                  {
  //                      GridMeLiqui.DataSource = (List<BllActa_Liquidacion.Acta_Liquidacion>)Session["ListLiquidacion"];
  //                      GridMeLiqui.DataBind();
  //                  }
  //              }  
		//	}
		//	catch (Exception ex)
		//	{
		//		Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
		//		Log.EscribirError(ex);
		//	}
		//}


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
                        Session["acta"]=Row.AcLiActa.ToString();
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
		
   
  //      protected void GridMeLiqui_PageIndexChanging(object sender, GridViewPageEventArgs e)
		//{
		//	try
		//	{
		//		GridMeLiqui.PageIndex = e.NewPageIndex;
		//		GridMeLiqui.DataSource = (List<BllActa_Liquidacion.Acta_Liquidacion>)Session["ListLiquidacion"];
		//		GridMeLiqui.DataBind();
  //              ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
		//	}
		//	catch (Exception ex)
		//	{
		//		Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo);
		//		Log.EscribirError(ex);
		//	}
		//}

     
        protected void GuardarBitacora()
        {
            act = BllActas.GetActa(int.Parse(Session["acta"].ToString()));
            if (act.EstadoActa == 2)
            {
                act.EstadoAnteriorActa = 2;
                act.EstadoActa = 3;
                act.ValorEcdf =decimal.Parse(TxtValorECDF.Text);
                //Guardamos el registro en la Bitacora
                ObjGrabarBit.BitaActa = int.Parse(TxtNroActa.Text);
                ObjGrabarBit.BitaUsua = Usuario.username;
                ObjGrabarBit.BitaFeca = System.DateTime.Now;
                ObjGrabarBit.BitaEsMe = "0";
                ObjGrabarBit.BitaEsCa = "0";
                ObjGrabarBit.BitaEsAc = act.EstadoActa;
                ObjGrabarBit.BitaEsAn = act.EstadoAnteriorActa;

                int r = act.UpdateEstadovalor();
                if ( r> 0)
                {
                    ObjGrabarBit.Insert();
                    Log.EscribirTraza("Estado del Acta Actualizado");
                }
                else
                {
                    Metodos.divMensaje(Constantes.Danger, "Error al actualizar Estado del Acta", PnlMsg, Constantes.Fallo);
                }

                Metodos.divMensaje(Constantes.Succes, "Estado del Acta Actualizado", PnlMsg, Constantes.Ok);

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
                        var Link = e.Row.FindControl("LinkHGI") as HyperLink;
                        BllDocumentos.Documentos D = (BllDocumentos.GetCargo((int.Parse(e.Row.Cells[0].Text.ToString()))));
                        var V = e.Row.FindControl("ImgVer") as Image;
                        var S = e.Row.FindControl("ImgS") as Image;
                        var C = e.Row.FindControl("chkVer") as CheckBox;
                        var CV = e.Row.FindControl("ChkSin") as CheckBox;
                        var dele = e.Row.FindControl("btnDelete") as ImageButton;
                    BllTipoDocumento.TipoDocumento TiDo = new BllTipoDocumento.TipoDocumento();
                    
                    TiDo = BllTipoDocumento.GetCargo(D.DocuTiDo);
                    if (TiDo.TiDoDele == true)
                    {
                        dele.Visible = true;
                    }
                    else
                    {
                        dele.Visible = false;
                    }
                    if (Usuario.id_rol == 10 || Usuario.id_rol == 10017)
                    {
                        e.Row.Cells[7].Visible = true;
                    }
                    else
                    {
                        e.Row.Cells[7].Visible = false;
                    }
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
                //try
                //{
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
                           // Page.Response.Redirect(Page.Request.Url.ToString(),false);
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
                //}
                //catch (Exception ex)
                //{
                   
                //    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "revisar();", true);
                //    Log.EscribirError(ex);
                //}


            }
            protected bool GuardarFirma()
            {
                //try
                //{
                  Boolean fileOK = false;
                    String path = Server.MapPath("~/File/Documentos/");
                    lblImage.Text = "~/File/Documentos/"+fileUploader1.FileName;
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


                //}
                //catch (Exception ex)
                //{                  
                    
                //    Log.EscribirError(ex);
                //    return false;
                   
                //}
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
       
  
        /***************************************************** RECHAZAR ACTAS **********************************************************************/

        protected void BtnRechazar_Click(object sender, EventArgs e)
        {
            try
            {
                if (TxtCodigo.Text == "")
                {

                    act = BllActas.GetActa(int.Parse(Session["acta"].ToString()));
                    string re = act.RechazarActa(int.Parse(Session["acta"].ToString()));
                    if (re != "0" )
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
                    Doc=BllDocumentos.GetCargo(int.Parse(gridDocume.Rows[row.RowIndex].Cells[0].Text));
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
                    Ano.AnotEsta = 13;
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

        protected void btnDelete_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName == "delete")
                {
                    BllDocumentos.Documentos Docu = new BllDocumentos.Documentos();
                    BllTipoDocumento.TipoDocumento TiDo = new BllTipoDocumento.TipoDocumento();
                    Docu = BllDocumentos.GetCargo(int.Parse(e.CommandArgument.ToString()));
                    TiDo = BllTipoDocumento.GetCargo(Docu.DocuTiDo);
                    if (TiDo.TiDoDele == true)
                    {
                        File.Delete(Server.MapPath(Docu.DocuUrLo));                        
                       if(BllDocumentos.Delete(Docu.DocuCodi.Value))
                        {
                            FillDocumentos();
                            Metodos.divMensaje(Constantes.Succes, Constantes.Eliminado, PnlMsg, Constantes.Ok);
                        }
                        else
                        {
                            Metodos.divMensaje(Constantes.Danger, Constantes.ErrorEliminando, PnlMsg, Constantes.Fallo);
                        }
                       
                    }
                    
                    
                }
            
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        protected void BtnDescarga_Click(object sender, EventArgs e)
        {
            try
            {
                Response.Redirect("DownloadZip.aspx", false);
               
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza("Error al comprimir Archivos de mensajeria acta " + Session["acta"].ToString());
                
            }
        }

        protected void btnReinicio_Click(object sender, EventArgs e)
        {
            try
            {
                BllAnotacionActa.AnotacionActa Ano = new BllAnotacionActa.AnotacionActa();
                if (txtcodReini.Text == "")
                {

                    Ano.AnotDesc = txtMotivoreinicio.Text;
                    Ano.AnotActa = int.Parse(TxtNroActa.Text);
                    Ano.AnotEsta = 13;
                    Ano.AnotFeSi = DateTime.Now;
                    Ano.AnotUsua = Usuario.username;

                    act = BllActas.GetActa(int.Parse(TxtNroActa.Text));
                    if(act.EstadoActa!=2 && act.EstadoActa!=1)
                    {

                        act.EstadoAnteriorActa = act.EstadoActa;
                        act.EstadoActa = 2;
                        BllActa_Liquidacion.Acta_Liquidacion ACt = BllActa_Liquidacion.GetActaLiqu(act._number);
                        BllDocumentos.Documentos doc = BllDocumentos.GetDocumento(ACt.AcLiActa, 13);
                        if (doc.DocuCodi != null && doc.DocuCodi!=0)
                        {
                            BllDocumentos.Delete(doc.DocuCodi.Value);
                            File.Delete(Server.MapPath(doc.DocuUrLo));
                        }
                        BllProcesoSimpli.ProcesoSimpli ACt1 = BllProcesoSimpli.GetPorceXActa(act._number);
                        doc = BllDocumentos.GetDocumento(ACt1.NoAcProc, 16);
                        if (doc.DocuCodi != null && doc.DocuCodi != 0)
                        {
                            BllDocumentos.Delete(doc.DocuCodi.Value);
                            File.Delete(Server.MapPath(doc.DocuUrLo));
                            doc = BllDocumentos.GetDocumento(ACt1.NoAcProc, 21);
                            BllDocumentos.Delete(doc.DocuCodi.Value);
                            File.Delete(Server.MapPath(doc.DocuUrLo));
                        }
                        BllMensajeria.Mensajeria ACt2 = BllMensajeria.GetActa(act._number);
                        doc = BllDocumentos.GetDocumento(ACt2.MensActa, 22);
                        if (doc.DocuCodi != null && doc.DocuCodi != 0)
                        {
                            BllDocumentos.Delete(doc.DocuCodi.Value);
                            File.Delete(Server.MapPath(doc.DocuUrLo));
                        }
                        if (act.UpdateEstado() > 0)
                        {
                            int rn = Ano.Insert();
                            if (rn > 0)
                            {
                                txtcodReini.Text = rn.ToString();

                                    act = BllActas.GetActa(int.Parse(TxtNroActa.Text));                                  
                                    //Guardamos el registro en la Bitacora
                                    ObjGrabarBit.BitaActa = int.Parse(TxtNroActa.Text);
                                    ObjGrabarBit.BitaUsua = Usuario.username;
                                    ObjGrabarBit.BitaFeca = System.DateTime.Now;
                                    ObjGrabarBit.BitaEsMe = "0";
                                    ObjGrabarBit.BitaEsCa = "0";
                                    ObjGrabarBit.BitaEsAc = act.EstadoActa;
                                    ObjGrabarBit.BitaEsAn = act.EstadoAnteriorActa;  
                                    ObjGrabarBit.Insert();
                                    Log.EscribirTraza("Acta "+ TxtNroActa.Text +" Reiniciada por el usuario " + Usuario.username + "a las "+ DateTime.Now.ToString());
                                    
                                    Metodos.divMensaje(Constantes.Succes, "Acta Reiniciada con exito", PnlMsg, Constantes.Ok);
                                CleanControl(pnlReinicio.Controls);
                                fillanotaciones();
                                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Confirm();", true);
                                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "tabMetodo();", true);
                                //ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "anotaciones();", true);
                            }
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

        protected void btnlimpiar_Click2(object sender, EventArgs e)
        {

        }

        protected void ConsultaEstado_Click(object sender, EventArgs e)
        {
            WSOrdenes ws = new WSOrdenes();
            ws.Nic = act.nic;
            ws.OrdenServicio = act._number.ToString();
            DateTime fecha = act._clientCloseTs;                 
            ws.fecha = fecha.Year.ToString() + fecha.Month.ToString() + fecha.Day.ToString();
            ws.CallWebService();

            if (ws.Resuelta==true)
            {
                try
                {
                    BllActas.UpdateEstadoOrden(act._number, 1, DateTime.Now);
                }
                catch (Exception ex)
                {
                    Log.EscribirError(ex);
                }
              
            }
        }
    }

}