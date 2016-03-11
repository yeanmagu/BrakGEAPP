using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;   
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.UserEntities;
using System.Data;
using System.Web;
using Generals.business.Entities;
using Generals.business.Data;
using System.IO;
namespace Generals.business.Common
{
   public class Metodos
    {
        public static  void CleanControl(ControlCollection controles)
        {
            foreach (Control control in controles)
            {
                if (control is TextBox)
                    ((TextBox)control).Text = string.Empty;
                else if (control is DropDownList)
                    ((DropDownList)control).ClearSelection();
                else if (control is RadioButtonList)
                    ((RadioButtonList)control).ClearSelection();
                else if (control is CheckBoxList)
                    ((CheckBoxList)control).ClearSelection();
                else if (control is RadioButton)
                    ((RadioButton)control).Checked = false;
                else if (control is CheckBox)
                    ((CheckBox)control).Checked = false;
                else if (control.HasControls())
                    //Esta linea detécta un Control que contenga otros Controles
                    //Así ningún control se quedará sin ser limpiado.
                    CleanControl(control.Controls);
            }
        }
        public static void divMensaje(string clase, string msg, Panel PnlMsg,string Icon)
        {
            try
            {
                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();
                OpenDiv.Text = "<div class='" + clase + "'><span class=' " + Icon + "' role='alert' aria-hidden='true'> <span class='sr-only'></span></span> &nbsp;";
                CloseDiv.Text = msg + "</div>";

                PnlMsg.Controls.Add(OpenDiv);
                PnlMsg.Controls.Add(CloseDiv);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static void crearDelegacion(string deleg, string nro ,Panel pn,string id)
        {
            try
            {
                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();
                OpenDiv.Text = "<a  href='gestionbandejas.aspx?id="+id+"'>";
                OpenDiv.Text = OpenDiv.Text + " <div class='col-sm-6 col-lg-3'>";
                OpenDiv.Text = OpenDiv.Text + "<div class='panel media pad-all'>";
                OpenDiv.Text = OpenDiv.Text + "   <div class='media-left'>";
                OpenDiv.Text = OpenDiv.Text + "<span class='icon-wrap icon-wrap-sm icon-circle bg-success'>";
                OpenDiv.Text = OpenDiv.Text + "<i class='fa fa-inbox fa-2x'></i>";
                OpenDiv.Text = OpenDiv.Text + "</span>";
                OpenDiv.Text = OpenDiv.Text + "</div>";

                OpenDiv.Text = OpenDiv.Text + "<div class='media-body'>";
                OpenDiv.Text = OpenDiv.Text + "	<p class='text-2x mar-no text-thin' style='font-size:0.8em'> <strong>" + deleg  + " ("+id+") "+ "</strong></p>";
                OpenDiv.Text = OpenDiv.Text + "	<strong class='text-capitalize'>" + nro + "</strong>";
                CloseDiv.Text = "</div></div></div></a>";
                                                             
                pn.Controls.Add(OpenDiv);
                    pn.Controls.Add(CloseDiv);
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }

        //public static void CargarImagenes(Panel content, int Acta, int tpoDoc, int estilo)
        //{
        //    try
        //    {
        //        List<BllDocumentos.Documentos> Doc = new List<BllDocumentos.Documentos>(); ;
        //        if (estilo == 0)
        //        {
        //            Doc = BllDocumentos.GetDocumentosXActaTipo(Acta, tpoDoc);
        //        }
        //        else
        //        {
        //            Doc = BllDocumentos.GetCargoXActa(Acta);
        //        }
               
        //        Literal OpenDiv = new Literal();
        //        Literal CloseDiv = new Literal();

        //        OpenDiv.Text = "<div class='row'>";
        //        OpenDiv.Text += "<div class='col-md-12'>";
        //        OpenDiv.Text += "<div class='row'>";
        //        foreach (var item in Doc)
        //        {
        //            if (Path.GetExtension(item.DocuUrLo) == ".jpg")
        //            {
        //                OpenDiv.Text += "<div class='col-md-3'>"+"<label> " + item.DescTiDo + " " + item.DocuCodi + " </label><BR /> <div class='img-imgAno'>";
                       
        //                OpenDiv.Text += "<img id='" + item.DocuCodi + "' src='" + item.DocuUrLo + "' alt='" + item.DescTiDo + "' style='cursor:pointer'; class='img-thumbnail' ";
        //                //OpenDiv.Text += "onmouseover='this.width=800 !Important;this.height=800 !Important;' onmouseout='this.width=400 !Important;this.height=400 !Important;' width='400 !Important' height='400 !Important' ";
        //                OpenDiv.Text += "  /></div></div>";
        //            }
        //        }
               
        //        CloseDiv.Text ="</div></div></div>";
        //        content.Controls.Add(OpenDiv);
        //        content.Controls.Add(CloseDiv);
                 
        //    }
        //    catch (Exception ex)
        //    {
                
        //       Log.EscribirError(ex);
        //    }
        //}
        public static void crearBandeja(string deleg, string nro, Panel pn, string id)
        {
            try
            {
                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();
                OpenDiv.Text = "<a  href='gestionbandejas.aspx?idB=" + id + "'>";
                OpenDiv.Text = OpenDiv.Text + " <div class='col-sm-6 col-lg-2'>";
                OpenDiv.Text = OpenDiv.Text + "<div class='panel media pad-all'>";
                OpenDiv.Text = OpenDiv.Text + "   <div class='media-left'>";
                OpenDiv.Text = OpenDiv.Text + "<span class='icon-wrap icon-wrap-sm icon-circle bg-success'>";
                OpenDiv.Text = OpenDiv.Text + "<i class='fa fa-flag fa-2x'></i>";
                OpenDiv.Text = OpenDiv.Text + "</span>";
                OpenDiv.Text = OpenDiv.Text + "</div>";

                OpenDiv.Text = OpenDiv.Text + "<div class='media-body'>";
                OpenDiv.Text = OpenDiv.Text + "	<p class='text-2x mar-no text-thin' style='font-size:0.8em'> <strong>" + deleg + "</strong></p>";
                OpenDiv.Text = OpenDiv.Text + "	<p class='text-muted mar-no'>" + nro + "</p>";
                CloseDiv.Text = "</div></div></div></a>";
                                                              
                pn.Controls.Add(OpenDiv);
                pn.Controls.Add(CloseDiv);
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        public static void crearTipoBandeja(string bandeja, string nro, Panel pn, string id)
        {
            try
            {
                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();
                OpenDiv.Text = "<a  href='gestionbandejas.aspx?Bandeja=" + id + "'>";
                OpenDiv.Text = OpenDiv.Text + " <div class='col-sm-6 col-lg-2'>";
                OpenDiv.Text = OpenDiv.Text + "<div class='panel media pad-all'>";
                OpenDiv.Text = OpenDiv.Text + "   <div class='media-left'>";
                OpenDiv.Text = OpenDiv.Text + "<span class='icon-wrap icon-wrap-sm icon-circle bg-success'>";
                OpenDiv.Text = OpenDiv.Text + "<i class='fa fa-flag fa-2x'></i>";
                OpenDiv.Text = OpenDiv.Text + "</span>";
                OpenDiv.Text = OpenDiv.Text + "</div>";

                OpenDiv.Text = OpenDiv.Text + "<div class='media-body'>";
                OpenDiv.Text = OpenDiv.Text + "	<p class='text-2x mar-no text-thin' style='font-size:0.8em'> <strong>" + bandeja+ "</strong></p>";
                OpenDiv.Text = OpenDiv.Text + "	<p class='text-muted mar-no'>" + nro + "</p>";
                CloseDiv.Text = "</div></div></div></a>";




               


                pn.Controls.Add(OpenDiv);
                pn.Controls.Add(CloseDiv);
            }
            catch (System.Exception)
            {

                throw;
            }
        }

    }
}
