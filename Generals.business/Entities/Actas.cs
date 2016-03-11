using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;
namespace Generals.business.Entities
{
    public class BllActas
    {

        DataDataContext db = new DataDataContext();
        public class Acta
        {
            public int ID { get; set; }
            public int IdDocumento { get; set; }

            public int IdTipoActa { get; set; }
            public DateTime Fecha { get; set; }
            public string Observaciones { get; set; }
            public int IdUsuario { get; set; }
            public DateTime FechaSistema { get; set; }
            public bool Estado { get; set; }
            public DateTime hora { get; set; }
            public Documentos.Documento Documento { get; set; }
            public TipoActas.TipoActa TipoActa { get; set; }

            public BllUsuarios.user Usuario { get; set; }

        }

        public int Add(Acta obj)
        {
            db = new DataDataContext();
            Actas A = new Actas();
            A.IdDocumento = obj.IdDocumento;
            A.IdTipoActa = obj.IdTipoActa;
            A.Fecha = obj.Fecha;
            A.Observaciones = obj.Observaciones;
            A.IdUsuario = obj.IdUsuario;
            A.Estado = obj.Estado;
            
            db.Actas.InsertOnSubmit(A);
            db.SubmitChanges();

            return 1;
        }

    }
}
