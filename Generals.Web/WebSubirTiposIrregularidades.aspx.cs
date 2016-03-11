using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System;
using System.Web.Security;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.IO;
using System.Configuration;
using System.Data.SqlClient;
using System.Collections;
using Generals.business.Common;
using System.IO;
using Generals.Web.controls;
using System.Security.Cryptography;
using System.Text;
using Generals.business.Entities;
using Generals.business;
using System.Globalization;
namespace Generals.Web
{
	public partial class WebSubirTiposIrregularidades : PaginaBase
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			try
			{
				Session["titulo"] = "Subir BD TiposIrregularidades";
				Label8.Text = "Esperando Archivo";
				GridView1.DataSource = BllTiposIrregularidades.CargarGridView();
				GridView1.DataBind();
			}
			catch (Exception ex) { mensaje(Constantes.falloTemporal); }
		}


		List<string[]> lista = new List<string[]>();

		protected void btnUpload_Click(object sender, EventArgs e)
		{
			try
			{
				Label8.Text = "Cargando ....";
				Boolean fileOK = false;
				String path = Server.MapPath("~/File/");
				if (FileUpload1.HasFile)
				{
					String fileExtension = System.IO.Path.GetExtension(FileUpload1.FileName).ToLower();
					String[] allowedExtensions = { ".xls", ".txt" };
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
						FileUpload1.PostedFile.SaveAs(path + FileUpload1.FileName);
						Label8.Text = "File uploaded!";
						string path1 = path + FileUpload1.FileName;
						lista = parseCSV(path1);
						cargarListas(lista);
					}
					catch (Exception ex)
					{
						Label8.Text = "File could not be uploaded.";
					}
				}
				else
				{
					Label8.Text = "Cannot accept files of this type.";
				}
			}
			catch (Exception ex) { mensaje(Constantes.errorGeneral); }
		}



		public void cargarListas(List<string[]> lista)
		{
			try
			{
				// List<string[]> fila=lista;


				BllTiposIrregularidades.TiposIrregularidades Objgrabar = new BllTiposIrregularidades.TiposIrregularidades();
				int insert = 0;
				int act = 0;
				string[] vector;
				for (int c = 0; c < lista.Count; c++)
				{
					// 22 codigo depto, 23 desc dpto
					vector = lista[c];
					string tipologia = vector[0].ToString();
					string Situacion = vector[1].ToString();
					string Tipo = vector[2].ToString();
					string Procedimiento = vector[3].ToString();
					string MetodoLiquidac = vector[4].ToString();
					// DateTime Birthdate = DateTime.ParseExact(date, "dd/MM/yyyy", null);
					string MetodoLiq2 = vector[5].ToString();


                    //Objgrabar.tipologia = tipologia;
                    //Objgrabar.situacionencontrada = Situacion;
                    //Objgrabar.tipo = llamarTipo(Tipo).ToString();
                    ////Objgrabar.metodoLiquidacion1 = LlamarMetodo(MetodoLiquidac);
                    //Objgrabar.procedimiento = Procedimiento;
                    //Objgrabar.metodoLiquidacion2 = MetodoLiq2;


					//BllTiposIrregularidades.TiposIrregularidades ObjHisEm = new BllTiposIrregularidades.TiposIrregularidades();

                    //if (BllTiposIrregularidades.Exist(Objgrabar.situacionencontrada,Objgrabar.tipologia) == 0)
                    //{						
                        //int resul = Objgrabar.Insert();
                        //if (resul > 0)
                        //{
                        //    insert = insert + 1;
                        //    Label1.Text = insert.ToString() + " Archivos Guardados";
                        //}

                    //}
                    //else
                    //{

                    //}


				}
			}
			catch (Exception ex) { mensaje(Constantes.errorGeneral); }

		}

		private void FillGridView(int top)
		{
			try
			{
				Session["listSubida"] = BllTiposIrregularidades.CargarGridView();
				if (!string.IsNullOrEmpty(Session["listSubida"].ToString()))
				{
					GridView1.DataSource = (List<BllTiposIrregularidades.TiposIrregularidades>)Session["listSubida"];
					GridView1.DataBind();

				}
			}
			catch (Exception ex) { mensaje(Constantes.errorGeneral); }

		}
		protected void GridView1_PageIndexChanging(object sender, GridViewPageEventArgs e)
		{
			try
			{
				GridView1.PageIndex = e.NewPageIndex;
				GridView1.DataSource = (List<BllTiposIrregularidades.TiposIrregularidades>)Session["listSubida"];
				GridView1.DataBind();
			}
			catch (Exception ex) { mensaje(Constantes.errorGeneral); }
		}


		public List<string[]> parseCSV(string path)
		{

			List<string[]> parsedData = new List<string[]>();
			char separador = (char)9;

			//if (opt2.Checked)
			//{
			//    separador = ';';
			//}
			//if (opt3.Checked)
			//{
			//    separador = (char)9;
			//}

			try
			{
				using (StreamReader readFile = new StreamReader(path))
				{
					string line;
					string[] row;

					while ((line = readFile.ReadLine()) != null)
					{
						row = line.Split(separador);
						if (row.Length == 6 )
						{
							parsedData.Add(row);
						}
					}
				}
			}
			catch (Exception ex)
			{
				mensaje(Constantes.errorGeneral);
			}
			return parsedData;

		}

		public string llamarTipo(string depa)
		{

			BllTipoAnomalia.TipoAnomalia objDep = new BllTipoAnomalia.TipoAnomalia();
			string Dpto;
			if (BllTipoAnomalia.Exist(depa) == 0)
			{

				objDep.TiAnDesc = depa;
				objDep.Insert();
				Dpto = BllTipoAnomalia.GetTipoAnomalia(depa).TiAnCodi;
				return Dpto;
			}
			else
			{
				Dpto = BllTipoAnomalia.GetTipoAnomalia(depa).TiAnCodi;
				return Dpto;
			}


		}

		public string LlamarMetodo(string cod)
		{

			try
			{
				BllMetodoLiquidacion.MetodoLiquidacion objAreas = new BllMetodoLiquidacion.MetodoLiquidacion();
				string Dpto;
				if (BllMetodoLiquidacion.ExistMet(cod) == 0)
				{
					objAreas.MeLiCodi = cod.ToString().Substring(0, 3);
					objAreas.MeLiNomb = cod;
					objAreas.MeLiEsta = true;
					objAreas.Insert();
					Dpto = BllMetodoLiquidacion.GetMetodoDesc(cod).MeLiCodi.ToString();
					return Dpto;
				}
				else 
				{
					Dpto = BllMetodoLiquidacion.GetMetodoDesc(cod).MeLiCodi.ToString();
					return Dpto;
				}
					
			}
			catch (System.Exception ex)
			{
				
				throw;
			}	
			
		}

	


	}
}