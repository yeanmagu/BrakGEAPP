using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;
namespace Generals.business.Entities
{
    public class BllTipoPersonas
    {
        DataDataContext db = new DataDataContext();
        public class TipoPerson
        {
            public int ID { get; set; }
            public string Descripcion { get; set; }
            public bool Estado { get; set; }

        }

        public  int add( TipoPerson obj)
        {
            db = new DataDataContext();
            TipoPersona P = new TipoPersona();
            P.ID = obj.ID;
            P.Descripcion = obj.Descripcion;
            P.Estado = obj.Estado;
            db.TipoPersona.InsertOnSubmit(P);
            try
            {
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }
           

            return 1;
        }

        public int Delete(int ID)
        {
            try
            {
                db = new DataDataContext();
                var x = (from c in db.TipoPersona where c.ID == ID select c);
                if (x.Count() > 0)
                {
                    var i = x.First();
                    db.TipoPersona.DeleteOnSubmit(i);

                    db.SubmitChanges();

                }
                return 1;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public int Update(TipoPersona obj)
        {
            try
            {
                using (db = new DataDataContext())
                {
                    var u = (from t in db.TipoPersona
                             where t.ID == obj.ID
                             select t).SingleOrDefault();

                    if (u.ID != 0)
                    {
                        u.Descripcion = obj.Descripcion;
                        u.Estado = obj.Estado;
                       
                        db.SubmitChanges();

                    }
                    return 1;

                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TipoPerson GetUsuario(long ID)
        {
            try
            {
                db = new DataDataContext();
                TipoPerson u = new TipoPerson();
                var item = (from c in db.TipoPersona where c.ID == ID select c);
                if (item.Count() > 0)
                {
                    var obj = item.First();
                    u.ID = obj.ID;
                    u.Estado = obj.Estado.Value;
                    u.Descripcion = obj.Descripcion;
                }
                return u;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public List<TipoPerson> GetAllUsuario()
        {
            try
            {
                //using (db = new DataDataContext())
                //{

                //}
                List<TipoPerson> List = new List<TipoPerson>();
                TipoPerson u = new TipoPerson();
                db = new DataDataContext();
                var item = (from c in db.TipoPersona select c);

                foreach (var obj in item)
                {
                    u.ID = obj.ID;
                    u.Estado = obj.Estado.Value;
                    u.Descripcion = obj.Descripcion;
                    
                    List.Add(u);
                }
                return List;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
