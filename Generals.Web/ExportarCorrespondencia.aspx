<%@ Page Language="C#" AutoEventWireup="true" EnableEventValidation="false" %>

<%@ Import Namespace="System" %>;
<%@ Import Namespace="System.Collections.Generic" %>;
<%@ Import Namespace="System.Linq" %>;
<%@ Import Namespace="System.Web" %>;
<%@ Import Namespace="System.Web.UI" %>;
<%@ Import Namespace="System.Web.UI.WebControls" %>;
<%@ Import Namespace="Generals.business.Entities" %>;
<%@ Import Namespace="Generals.framework.Exceptions" %>;
<%@ Import Namespace="Generals.business.UserEntities" %>;
<%@ Import Namespace="Generals.business.Common" %>;
<%@ Import Namespace="System.Drawing" %>;
<%@ Import Namespace="System.Web.Script.Serialization" %>;
<%@ Import Namespace="AjaxControlToolkit" %>;
<%@ Import Namespace="Microsoft.Reporting.WebForms" %>;
<%@ Import Namespace="System.Security.Cryptography" %>;
<%@ Import Namespace="System.Text" %>;
<%@ Import Namespace="Generals.business" %>;
<%@ Import Namespace="System.Globalization" %>;
<%@ Import Namespace="System.Web.UI.HtmlControls" %>;
<%@ Import Namespace="System.Web.UI.WebControls.WebParts" %>;
<%@ Import Namespace="System.Xml.Linq" %>;
<%@ Import Namespace="System.Data" %>;
<%@ Import Namespace="System.Data.SqlClient" %>;
<%@ Import Namespace="System.Data.Sql" %>;
<%@ Import Namespace="System.Data.SqlTypes" %>;
<%@ Import Namespace="System.IO" %>;
<%@ Import Namespace="System.Reflection" %>;
<%@ Import Namespace="System.Threading" %>;
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>

    <script language="c#" runat="server">
        GridView GridActas = new GridView();
        public void Page_Load(object sender, EventArgs e)
        {
            //hello, world!
            string filename = Request.QueryString.Get("FileName");
            if (String.IsNullOrEmpty(filename))
            {
                filename = Session["Titulo"].ToString().Trim() + " " + Session["Fecha"].ToString();
            }  else
            {
                filename += Session["Usuario"].ToString();
            }
            GridActas.AutoGenerateColumns=true;

            GridActas.DataSource = Session["Correspondencia"];
            GridActas.DataBind();
            Exportar(filename);
        }
        //protected void Exportar()
        //{


        //    Response.Clear();
        //    Response.Buffer = true;
        //    Response.ContentType = "application/vnd.ms-excel";
        //    Response.AddHeader("content-disposition", "attachment;filename=Actas.xls");
        //    Response.Charset = "";
        //    this.EnableViewState = false;

        //    System.IO.StringWriter sw = new System.IO.StringWriter();
        //    System.Web.UI.HtmlTextWriter htw = new System.Web.UI.HtmlTextWriter(sw);

        //    GridActas.RenderControl(htw);

        //    Response.Write(sw.ToString());
        //    Response.End();
        //}
        protected void Exportar(string filename)
        {


            Response.Clear();
            Response.Buffer = true;
            Response.ContentType = "application/vnd.ms-excel";
            Response.AddHeader("content-disposition", "attachment;filename=" + filename+".xls");
            Response.Charset = "";
            this.EnableViewState = false;

            System.IO.StringWriter sw = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter htw = new System.Web.UI.HtmlTextWriter(sw);

            GridActas.RenderControl(htw);

            Response.Write(sw.ToString());
            Response.End();
        }
 </script>
</head>
<body>
    <form id="form1" runat="server">
    
    </form>
</body>
</html>