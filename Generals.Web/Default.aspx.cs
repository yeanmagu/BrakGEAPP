﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.UserEntities;
using Generals.business.Common;

namespace Generals.Web
{
    public partial class Default : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    Usuario = Usuario;
                    Session["Titulo"] = "Inicio";
                    Page.ClientScript.RegisterStartupScript(this.GetType(), "comprueba", "comprueba()", true);
                }
            }
            catch (Exception ex)
            {
                mensaje(Constantes.errorGeneral); Log.EscribirError(ex);
            }
        }
    }
}